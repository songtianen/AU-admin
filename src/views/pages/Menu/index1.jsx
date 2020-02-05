// 菜单管理
import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Tree,
  Form,
  TreeSelect,
  Input,
  Button,
  Switch,
  InputNumber,
  message,
  Tag,
  Icon,
} from 'antd';

import { getAllMenu, saveMenu } from '../../../api';
import Icons from '../../../conf/icon';

const TreeNode = Tree.TreeNode;
const FormItem = Form.Item;
const SelectTreeNode = TreeSelect.TreeNode;
const iconsTree = [];

class Menu extends React.PureComponent {
  state = {
    menuList: [],
    tempMenu: {
      id: '',
      parentId: 0,
    },
    selected: false,
    addChild: false,
  };

  getIConsTree = () => {
    for (let item of Icons) {
      let children = [];
      for (let child of item.icons) {
        children.push(
          <SelectTreeNode
            value={child.icon}
            title={
              <span>
                <Icon type={child.icon} style={{ color: '#08c' }} />
                &nbsp;&nbsp;{child.title}
              </span>
            }
            key={child.icon}
          />,
        );
      }
      iconsTree.push(
        <SelectTreeNode title={item.title} key={item.title}>
          {children}
        </SelectTreeNode>,
      );
    }
  };

  componentWillMount() {
    this.getIConsTree();
  }

  componentDidMount() {
    this.initData();
  }

  initData = async () => {
    let menuListRes = await getAllMenu();
    let menuList = menuListRes.data;
    // console.log('http请求getAllMenu', menuList);
    this.setState({
      menuList,
    });
  };

  // eslint-disable-next-line no-unused-vars
  onSelect = (selectedKeys, info) => {
    let { setFieldsValue, resetFields } = this.props.form;
    // console.log('selectedKeys----', selectedKeys, info);
    if (selectedKeys.length === 0) {
      resetFields();
      this.setState({
        selected: false,
        addChild: false,
        tempMenu: {
          id: '',
          parentId: '0',
        },
      });
      return;
    }
    let id = selectedKeys[0];
    // console.log('id---', id);
    let menu = this.findMenubyId(id);
    this.setState({
      selected: true,
      addChild: false,
      tempMenu: { ...menu },
    });
    setFieldsValue({
      name: menu.name,
      title: menu.title,
      functionCode: menu.functionCode,
      sort: menu.sort,
      leftMenu: menu.leftMenu,
      isLock: menu.isLock,
      icon: menu.icon,
    });
  };

  findMenubyId = (id) => {
    let menu = {};
    let getMenu = (menuList) => {
      for (let item of menuList) {
        if (item.id === id) {
          menu = { ...item };
          // console.log('menu-----', menu);
          menu.children = null;
          break;
        } else if (item.children && item.children.length > 0) {
          getMenu(item.children);
        }
      }
    };
    getMenu(this.state.menuList);
    // console.log('menu-----', this.state.menuList);
    return menu;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll(async (err, values) => {
      // console.log('菜单提交的数据', values);
      if (!err) {
        let data = {
          id: this.state.tempMenu.id,
          parentId: this.state.tempMenu.parentId,
          ...values,
        };
        try {
          await saveMenu(data);
          message.success('提交成功');
          this.initData();
        } catch (ex) {
          console.log('菜单标记提交失败', ex);
        }
      }
    });
  };

  addChildMenu = () => {
    this.setState({
      addChild: true,
      selected: false,
      tempMenu: {
        ...this.state.tempMenu,
        id: '',
        parentId: this.state.tempMenu.id,
      },
    });
    this.props.form.resetFields();
  };

  addTopMenu = () => {
    this.setState({
      addChild: false,
      selected: false,
      tempMenu: {
        ...this.state.tempMenu,
        id: '',
        parentId: 0,
      },
    });
  };

  render() {
    console.log('menu render');
    const renderMenu = (menuList) =>
      menuList.map((menu) => (
        <TreeNode title={menu.title} key={menu.id}>
          {menu.children && menu.children.length > 0
            ? renderMenu(menu.children)
            : ''}
        </TreeNode>
      ));
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 6 },
        sm: { span: 4 },
        md: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 12 },
        sm: { span: 16 },
        md: { span: 15 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    return (
      <div style={{ backgroundColor: '#fff', padding: '20px' }}>
        <Row type='flex' justify='start'>
          <Col
            xs={24}
            sm={24}
            md={12}
            lg={6}
            xl={8}
            style={{ backgroundColor: '#fafafa', marginRight: '20px' }}
          >
            <Tree onSelect={this.onSelect}>
              {renderMenu(this.state.menuList)}
            </Tree>
          </Col>
          <Col xs={24} sm={24} md={12} lg={9} xl={9}>
            <div style={{ padding: 8 }}>
              <Button icon='plus' size='small' onClick={this.addTopMenu}>
                顶级菜单
              </Button>
              <Button
                disabled={!this.state.selected}
                icon='plus'
                size='small'
                onClick={this.addChildMenu}
              >
                子级菜单
              </Button>
            </div>
            <Form
              {...formItemLayout}
              onSubmit={this.handleSubmit}
              // style={{ backgroundColor: 'pink' }}
            >
              <div
                style={{
                  padding: 10,
                  paddingLeft: 50,
                  display: this.state.selected ? 'block' : 'none',
                }}
              >
                正在编辑菜单：
                <Tag color='#108ee9'>{this.state.tempMenu.title}</Tag>
              </div>
              <div
                style={{
                  padding: 10,
                  paddingLeft: 50,
                  display: this.state.addChild ? 'block' : 'none',
                }}
              >
                添加&nbsp;&nbsp;
                <Tag color='#108ee9'>{this.state.tempMenu.title}</Tag>子菜单
              </div>
              <FormItem hasFeedback label='名称'>
                {getFieldDecorator('name', {
                  rules: [
                    {
                      whitespace: true,
                      required: true,
                      message: '名字不能为空',
                    },
                  ],
                })(<Input />)}
              </FormItem>
              <FormItem hasFeedback label='标题'>
                {getFieldDecorator('title', {
                  rules: [
                    {
                      required: true,
                      message: '标题不能为空!',
                    },
                  ],
                })(<Input />)}
              </FormItem>
              <FormItem hasFeedback label='权限码'>
                {getFieldDecorator('functionCode')(<Input />)}
              </FormItem>
              <FormItem label='排序'>
                {getFieldDecorator('sort', { initialValue: 0 })(
                  <InputNumber min={0} />,
                )}
              </FormItem>
              <FormItem label='是否左侧显示'>
                {getFieldDecorator('leftMenu', { valuePropName: 'checked' })(
                  <Switch />,
                )}
              </FormItem>
              <FormItem label='是否锁定'>
                {getFieldDecorator('isLock', { valuePropName: 'checked' })(
                  <Switch />,
                )}
              </FormItem>
              <FormItem hasFeedback label='图标'>
                {getFieldDecorator('icon', { initialValue: '' })(
                  <TreeSelect
                    showSearch
                    dropdownStyle={{ maxHeight: 200, overflow: 'auto' }}
                    placeholder='Please select'
                    allowClear
                    treeDefaultExpandAll
                  >
                    {iconsTree}
                  </TreeSelect>,
                )}
              </FormItem>
              <FormItem {...tailFormItemLayout}>
                <Button type='primary' htmlType='submit'>
                  提交
                </Button>
              </FormItem>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

Menu.propTypes = {
  form: PropTypes.object.isRequired,
};
export default Form.create()(Menu);
