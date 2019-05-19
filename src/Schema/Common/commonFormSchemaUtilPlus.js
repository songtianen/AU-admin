/* eslint-disable no-unused-vars */
import React from 'react';
import createClass from 'create-react-class';
import {
  Form,
  Input,
  Row,
  Col,
  DatePicker,
  InputNumber,
  Checkbox,
  Radio,
  Select,
  Switch,
  Cascader,
  Upload,
} from 'antd';
import * as api from '../../api';
import remoteDataUtil from '../Form/FormRemoteDataUtil';

console.log('commonFormSchemaUtilPlus', api);
const FormItem = Form.Item;

// 暂存的JsxGenerator
const JsxGeneratorMap = new Map();

// 暂存表单组件, key是schema 的$id, value是对应的react组件
const FormMap = new Map();

// 检查JsxGeneratorMap是否缓存 缓存uiSchema,uiSchema中存需动态获取的数据,获取后更新uiSchema并缓存,
const UiSchemaMap = new Map();

// 缓存表单实例maxIndex; 缓存 index 变量
// 配合FormInstanceMap：缓存FormInstanceMap 用到的index 变量
const FormInstanceIndexMap = new Map();

// 缓存表单实例,key还是用schema 的$id+Index,组件实例化的时候存入，组件销毁的时候移除
// mergeProps方法用到 this.props.form., 组件每次render form中的数据都不一样，所以要用到${id}-${index}

// 因为要用到 this.props.form;
const FormInstanceMap = new Map();

const SchemaUtils = {
  // 1 是否有缓存的表单组件
  getForm(schema, uiSchema) {
    const id = schema['$id'];
    if (FormMap.has(id)) {
      return FormMap.get(id);
    }
    const newForm = this.createForm(id, schema, uiSchema);
    FormMap.set(id, newForm);
    return newForm;
  },
  createForm(id, schema, uiSchema) {
    console.log('createCommonForm');
    const util = this;
    // 只能用传统的ES5的写法, 函数式(无状态)组件应该也可以, 但是需要生命周期相关方法
    const tmpComponent = createClass({
      getInitialState() {
        let index = FormInstanceIndexMap.get(id);
        // es6: this.state = ....
        if (!index) {
          index = 1;
        } else {
          index++;
        }
        FormInstanceIndexMap.set(id, index);
        // mergeProps方法用到 this.props.form., 组件每次render form中的数据都不一样，所以要用到${id}-${index}
        FormInstanceMap.set(`${id}-${index}`, this);
        return {
          inited: false,
          index: `${id}-${index}`,
        };
      },
      // 组件将要渲染
      componentWillMount() {
        console.log('tmp-CommonForm componentWillMount');

        // 组件初始化时读取generator
        if (JsxGeneratorMap.has(id)) {
          this.generateJsx = JsxGeneratorMap.get(id);
        }
      },
      // 组件渲染完毕
      async componentDidMount() {
        console.log('tmp-CommonForm 异步componentDidMount');

        if (UiSchemaMap.has(id)) {
          // 检查JsxGeneratorMap是否缓存/ 说明 jsx结构已经构建并缓存，不需要mergeSchema
          return;
        }
        // 1,合并schema数据
        util.mergeSchema(this.state.index, schema, uiSchema);
        // 2,获取组件相应的远程数据
        await util.getRemoteData(id, uiSchema);

        UiSchemaMap.set(id, true);

        /**
         * 3,parse方法返回一个真正生成jsx结构的方法，
         * 调用的时候传入组件实例的index,
         * 从全局缓存获取组件实例传入(也可以直接传入组件实例)
         * 返回一个函数 存入this.generateJsx
         *  */
        const generateJsx = util.parse(id, schema, uiSchema);

        JsxGeneratorMap.set(id, generateJsx);

        this.generateJsx = generateJsx;

        this.setState({
          inited: true,
        });
      },
      // react 将要卸载
      componentWillUnmount() {
        FormInstanceMap.delete(this.state.index);
        console.log(
          'tmpCommonForm--componentWillUnmount--FormInstanceMap--size',
          FormInstanceMap.size,
        );
      },
      // 渲染
      render() {
        console.log('tmpCommonForm render');
        let formData = this.props.formData;
        console.log('tmpCommonForm render>>>>>>>>>>///', formData);
        formData = formData || {};
        // 组件实例key一层层往下传递
        return this.generateJsx
          ? this.generateJsx(this.state.index, formData)
          : null;
      },
    });
    // 注意要再用antd的create()方法包装下
    return Form.create({})(tmpComponent);
  },
  // 合并配置文件
  /**
   *
   * @param {*} formInstanceIndex this.state.index `${id}_${index}`
   * @param {*} schema Function/editSchema.js
   * @param {*} uiSchema Function/editUiSchema.js
   */
  mergeSchema(formInstanceIndex, schema, uiSchema) {
    let instance = FormInstanceMap.get(formInstanceIndex);
    Object.keys(uiSchema).forEach((key) => {
      /**
       * schemaPropertyname: name {
        type: 'string',
        title: '功能名称',
        maxLength: 25, // 可传给后端判断，暂时不使用此处配置检验前端表单,前端表单校验规则配置在uiSchema
        minLength: 1,
    },
       */
      let schemaProperty = schema['properties'][key];
      /**
       * name: {
       * 'ui:widget': 'input',
          'ui:options': {
          type: 'text',
          placeholder: '',
          },
          'ui:rules': [
            { required: true, message: '请输入功能名称' },
            { max: 25, message: '最多输入25字符' },
          ], // 校验规则
          'ui:title': '功能名称',
          'ui:description': '',
          'ui:formItemConfig': {
          hasFeedback: true,
          // "extra":"121212",//未设置取ui:description
          labelCol: { span: 6 },
          wrapperCol: { span: 16 },
          }, // Form.Item 配置
        },
       */
      let uiSchemaProperty = uiSchema[key];
      uiSchemaProperty.key = key;
      if (uiSchemaProperty['ui:rules'] === undefined) {
        uiSchemaProperty['ui:rules'] = [];
      }
      if (uiSchemaProperty['ui:formItemConfig'] === undefined) {
        uiSchemaProperty['ui:formItemConfig'] = {};
      }
      // merge description
      // 合并 description ['ui:formItemConfig']['extra'] 额外的描述（如input框中额外的表述字样）
      if (uiSchemaProperty['ui:formItemConfig']['extra'] === undefined) {
        // 优先合并uiSchemaProperty['ui:description']描述
        uiSchemaProperty['ui:formItemConfig']['extra'] =
          uiSchemaProperty['ui:description'];
      }
      if (uiSchemaProperty['ui:formItemConfig']['extra'] === undefined) {
        // 上述不存在ui:description 则 schemaProperty['ui:description']描述
        uiSchemaProperty['ui:formItemConfig']['extra'] =
          schemaProperty['description'];
      }
      // 合并 title 综上
      if (uiSchemaProperty['ui:formItemConfig']['label'] === undefined) {
        uiSchemaProperty['ui:formItemConfig']['label'] =
          uiSchemaProperty['ui:title'];
      }
      if (uiSchemaProperty['ui:formItemConfig']['label'] === undefined) {
        uiSchemaProperty['ui:formItemConfig']['label'] =
          schemaProperty['title'];
      }
      // config labelCol label 标签布局
      if (uiSchemaProperty['ui:formItemConfig']['labelCol'] === undefined) {
        uiSchemaProperty['ui:formItemConfig']['labelCol'] = { span: 8 };
      }
      // config wrapperCol 输入控件设置布局样式 如 input 组件
      if (uiSchemaProperty['ui:formItemConfig']['wrapperCol'] === undefined) {
        uiSchemaProperty['ui:formItemConfig']['wrapperCol'] = { span: 16 };
      }
      // required (表单必选)暂时不设置
      // required 校验 如果ui:required（可以默认是一个数组）如果存在
      // 'ui:required' : [{name: 'song', message: '请输入song'}]

      if (uiSchemaProperty['ui:required'] !== undefined) {
        uiSchemaProperty['ui:rules'].push({
          // validator 方法为 antd 自定义效验规则
          /**
           * @param {*} value 是validator自定义效验函数内获取 form表单 内 组件的初始值
           *  如input组件 你的输入
           */
          validator: (rule, value, callback) => {
            const form = instance.props.form;
            let msg = [];
            /**
             *  不设置uiSchemaProperty['ui:required']
             */
            for (let required of uiSchemaProperty['ui:required']) {
              // getFieldValue 获取一个输入控件的值 如form表单中的input组件
              if (value && !form.getFieldValue(required.name)) {
                msg.push(required.message);
              }
            }
            if (msg.length > 0) {
              callback(msg.join(','));
            } else {
              // eslint-disable-next-line standard/no-callback-literal
              callback();
            }
          },
        });
      }
    });
  },

  // getRemoteData相关函数 antd 连级组件 数据获取并缓存
  getCascaderRemoteData(id, field) {
    // 获取请求接口
    const { apiKey } = field['ui:remoteConfig'];
    return new Promise((resolve, reject) => {
      api[apiKey]().then((res) => {
        let data = res.data;
        // 返回经过 uiSchema 配置文件处理的数据
        data = field['ui:remoteConfig']['hand'](data);
        // 给配置文件添加此数据
        field['ui:options']['options'] = data;
        // 缓存数据
        remoteDataUtil.addData(`${id}_${field.key}`, data);
        resolve(data);
      });
    });
  },

  // 部件的数据远程获取
  async getRemoteData(id, uiSchema) {
    console.log('getRemoteData');
    const util = this;
    let calls = [];
    Object.keys(uiSchema).forEach((key) => {
      let field = uiSchema[key];
      if (field['ui:remoteConfig']) {
        switch (field['ui:widget']) {
          case 'select':
            calls.push(util.getCascaderRemoteData(id, field));
            break;
          case 'radio':
            calls.push(util.getCascaderRemoteData(id, field));
            break;
          case 'checkbox':
            calls.push(util.getCascaderRemoteData(id, field));
            break;
          case 'multiSelect':
            calls.push(util.getCascaderRemoteData(id, field));
            break;
          case 'between':
            calls.push(util.getCascaderRemoteData(id, field));
            break;
          case 'cascader':
            calls.push(util.getCascaderRemoteData(id, field));
            break;
          default:
            calls.push(util.getCascaderRemoteData(id, field));
        }
      }
    });
    if (calls.length > 0) {
      await Promise.all([...calls]);
    }
  },
  parse(id, schema, uiSchema) {
    let items = [];
    let schemaProperties = schema['properties'];
    const util = this;
    Object.keys(uiSchema).forEach((key) => {
      let field = uiSchema[key];
      console.log('CommonForm文件 parse函数 formData[field.key] ', field.key);
      const schemaProperty = schemaProperties[key];
      // 注意, 每个字段transform之后, 返回的也都是一个回调函数, 所以items其实是一个回调函数的集合
      switch (field['ui:widget']) {
        case 'input':
          items.push(util.transformInput(field, schemaProperty));
          break;
        case 'inputNumber':
          items.push(util.transformInputNumber(field, schemaProperty));
          break;
        case 'checkbox':
          items.push(util.transformCheckbox(field, schemaProperty));
          break;
        case 'datetime':
          items.push(util.transformDatetime(field, schemaProperty));
          break;
        case 'radio':
          items.push(util.transformRadio(field, schemaProperty));
          break;
        case 'select':
          items.push(util.transformSelect(field, schemaProperty));
          break;
        case 'switch':
          items.push(util.transformSwitch(field, schemaProperty));
          break;
        case 'cascader':
          items.push(util.transformCascader(field, schemaProperty));
          break;
        case 'between':
          items.push(util.transformBetween(field, schemaProperty));
          break;
        case 'upload':
          items.push(util.transformUpload(field, schemaProperty));
          break;
        default:
          items.push(util.transformNormal(field, schemaProperty));
      }
    });
    // 调用parse返回的函数，也是被缓存的函数(其实是为了缓存items,一些构建form item的函数)，真正构建jsx是调用此函数，
    /**
     * @param {*} formInstanceIndex this.state.index;
     * @param {*} formData Function组件传入
     */
    return (formInstanceIndex, formData) => {
      const formItems = [];
      // 拿到当前的 this 实例 得到 antd 的 form
      const getFieldDecorator = FormInstanceMap.get(formInstanceIndex).props
        .form.getFieldDecorator;
      // 遍历 parse 函数集 返回的函数
      /**
       * @param {*} items [(getFieldDecorator, formDatas),,,] length 4
       */
      for (const item of items) {
        // console.log('itemsitemsitemsitemsitemsitems', items);
        // console.log('itemsitemsitemsitemsitems--item()', item());
        formItems.push(item(getFieldDecorator, formData));
      }
      return <Form>{formItems}</Form>;
    };
  },
  // parse 相关函数
  transformInput(field, schemaProperty) {
    return this.formItemWrapper(
      // 传入此函数：（接收parse函数的 getFieldDecorator， 与 formdata ）此函数经过处理再次被 formItemWrapper 返回包裹antd formItem
      (getFieldDecorator, formData) =>
        getFieldDecorator(field.key, {
          initialValue: formData[field.key] || field['ui:defaultValue'],
          rules: [...field['ui:rules']],
        })(<Input {...field['ui:options']} />),
      field,
    );
  },
  transformInputNumber(field, schemaProperty) {
    return this.formItemWrapper(
      (getFieldDecorator, formData) =>
        getFieldDecorator(field.key, {
          initialValue: formData[field.key] || field['ui:defaultValue'],
          rules: [...field['ui:rules']],
        })(<InputNumber {...field['ui:options']} />),
      field,
    );
  },
  transformCheckbox(field, schemaProperty) {
    return this.formItemWrapper(
      (getFieldDecorator, formData) =>
        getFieldDecorator(field.key, {
          initialValue: formData[field.key] || field['ui:defaultValue'],
          rules: [...field['ui:rules']],
        })(<Checkbox.Group {...field['ui:options']} />),
      field,
    );
  },
  transformDatetime(field, schemaProperty) {
    return this.formItemWrapper(
      (getFieldDecorator, formData) =>
        getFieldDecorator(field.key, {
          initialValue: formData[field.key] || field['ui:defaultValue'],
          rules: [...field['ui:rules']],
        })(<DatePicker {...field['ui:options']} />),
      field,
    );
  },
  transformRadio(field, schemaProperty) {
    return this.formItemWrapper(
      (getFieldDecorator, formData) =>
        getFieldDecorator(field.key, {
          initialValue: formData[field.key] || field['ui:defaultValue'],
          rules: [...field['ui:rules']],
        })(<Radio.Group {...field['ui:options']} />),
      field,
    );
  },
  transformSelect(field, schemaProperty) {
    let dataOptions = field['ui:dataOptions'] || [];
    let options = [];
    for (let o of dataOptions) {
      options.push(
        <Select.Option key={o.value} value={o.value} disabled={o.disabled}>
          {o.title}
        </Select.Option>,
      );
    }
    return this.formItemWrapper(
      (getFieldDecorator, formData) =>
        getFieldDecorator(field.key, {
          initialValue: formData[field.key] || field['ui:defaultValue'],
          rules: [...field['ui:rules']],
        })(<Select {...field['ui:options']}>{options}</Select>),
      field,
    );
  },
  transformSwitch(field, schemaProperty) {
    return this.formItemWrapper(
      (getFieldDecorator, formData) =>
        getFieldDecorator(field.key, {
          initialValue: formData[field.key] || field['ui:defaultValue'],
          rules: [...field['ui:rules']],
          valuePropName: 'checked',
        })(<Switch {...field['ui:options']} />),
      field,
    );
  },
  transformBetween(field, schemaProperty) {
    let begin;
    let end;
    switch (field['ui:type']) {
      case 'number':
        begin = (getFieldDecorator, formData) => {
          return getFieldDecorator(`${field.key}Begin`, {
            initialValue:
              formData[`${field.key}Begin`] || field['ui:defaultBeginValue'],
            rules: [...field['ui:rules']],
          })(<InputNumber {...field['ui:options']} />);
        };
        end = (getFieldDecorator, formData) => {
          return getFieldDecorator(`${field.key}End`, {
            initialValue:
              formData[`${field.key}End`] || field['ui:defaultEndValue'],
            rules: [...field['ui:rules']],
          })(<InputNumber {...field['ui:options']} />);
        };
        return this.betweenFormItemWrapper(begin, end, field);
      default:
        begin = (getFieldDecorator, formData) => {
          return getFieldDecorator(`${field.key}Begin`, {
            initialValue:
              formData[`${field.key}Begin`] || field['ui:defaultBeginValue'],
            rules: [...field['ui:rules']],
          })(<DatePicker {...field['ui:options']} />);
        };
        end = (getFieldDecorator, formData) => {
          return getFieldDecorator(`${field.key}End`, {
            initialValue:
              formData[`${field.key}End`] || field['ui:defaultEndValue'],
            rules: [...field['ui:rules']],
          })(<DatePicker {...field['ui:options']} />);
        };
        return this.betweenFormItemWrapper(begin, end, field);
    }
  },
  transformCascader(field, schemaProperty) {
    // 接收parse 函数 的 field， schemaProperty 返回 formItemWrapper
    return this.formItemWrapper(
      // 接收 render() 函数的参数 this.generateJsx(this.state.index, formData)
      // 返回 一个函数
      (getFieldDecorator, formData) =>
        getFieldDecorator(field.key, {
          // 连级选择器的初始值 Cascader
          initialValue: formData[field.key] || field['ui:defaultEndValue'],
          rules: [...field['ui:rules']],
        })(<Cascader {...field['ui:options']} />), // 函数作为参数传递
      field,
    );
  },
  transformUpload(field, schemaProperty) {
    switch (field['ui:type']) {
      case 'dragger':
        return this.formItemWrapper(
          (getFieldDecorator, formData) =>
            getFieldDecorator(field.key, {
              initialValue: formData[field.key] || field['ui:defaultValue'],
              rules: [...field['ui:rules']],
              valuePropName: 'fileList',
              getValueFromEvent: field['ui:getValueFromEvent'],
            })(
              <Upload.Dragger {...field['ui:options']}>
                {field['ui:children']}
              </Upload.Dragger>,
            ),
          field,
        );
      default:
        return this.formItemWrapper(
          (getFieldDecorator, formData) =>
            getFieldDecorator(field.key, {
              initialValue: formData[field.key] || field['ui:defaultValue'],
              rules: [...field['ui:rules']],
              valuePropName: 'fileList',
              getValueFromEvent: field['ui:getValueFromEvent'],
            })(
              <Upload {...field['ui:options']}>{field['ui:children']}</Upload>,
            ),
          field,
        );
    }
  },
  transformNormal(field, schemaProperty) {
    switch (field['ui:widget']) {
      case 'input.textarea':
        return this.formItemWrapper(
          (getFieldDecorator, formData) =>
            getFieldDecorator(field.key, {
              initialValue: formData[field.key] || field['ui:defaultEndValue'],
              rules: [...field['ui:rules']],
            })(<Input.TextArea {...field['ui:options']} />),
          field,
        );
      default:
        // 默认就是普通的输入框
        return this.formItemWrapper(
          (getFieldDecorator, formData) =>
            getFieldDecorator(field.key, {
              initialValue: formData[field.key] || field['ui:defaultEndValue'],
              rules: [...field['ui:rules']],
            })(<Input {...field['ui:options']} />),
          field,
        );
    }
  },
  formItemWrapper(formItem, field) {
    // 接收 parse 函数 transformCascader的 field和 (getFieldDecorator, formData) => getFieldDecorator(fie
    return (getFieldDecorator, formDatas) => (
      <FormItem key={field.key} {...field['ui:formItemConfig']}>
        {formItem(getFieldDecorator, formDatas)}
      </FormItem>
    );
  },
  betweenFormItemWrapper(beginItem, endItem, field) {
    let isNumber = field['ui:type'] === 'number';
    let sm = isNumber ? 8 : 11;
    let md = isNumber ? 6 : 8;
    let lg = isNumber ? 5 : 6;
    let xl = isNumber ? 3 : 5;
    return (getFieldDecorator, formData) => (
      <FormItem key={field.key} {...field['ui:formItemConfig']}>
        <Row>
          <Col xs={11} sm={sm} md={md} lg={lg} xl={xl}>
            <FormItem
              key={`begin${field.key}`}
              {...field['ui:beginFormItemConfig']}
            >
              {beginItem(getFieldDecorator, formData)}
            </FormItem>
          </Col>
          <Col span={1}>
            <span
              style={{
                display: 'inline-block',
                width: '100%',
                textAlign: 'center',
              }}
            >
              -
            </span>
          </Col>
          <Col xs={11} sm={sm} md={md} lg={lg} xl={xl}>
            <FormItem
              key={`end${field.key}`}
              {...field['ui:endFormItemConfig']}
            >
              {endItem(getFieldDecorator, formData)}
            </FormItem>
          </Col>
        </Row>
      </FormItem>
    );
  },
};
export default SchemaUtils;
