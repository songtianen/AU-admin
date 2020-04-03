(window.webpackJsonp = window.webpackJsonp || []).push([
  [13],
  {
    './src/views/pages/RolePermisson/component/index.jsx': function(e, t, n) {
      'use strict';
      n.r(t);
      n('./node_modules/antd/lib/table/style/index.js');
      var r = n('./node_modules/antd/lib/table/index.js'),
        a = n.n(r),
        i =
          (n('./node_modules/antd/lib/divider/style/index.js'),
          n('./node_modules/antd/lib/divider/index.js')),
        o = n.n(i),
        s =
          (n('./node_modules/antd/lib/notification/style/index.js'),
          n('./node_modules/antd/lib/notification/index.js')),
        l = n.n(s),
        c = n('./node_modules/@babel/runtime/regenerator/index.js'),
        d = n.n(c),
        u = n('./node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        m = n.n(u),
        p = n('./node_modules/@babel/runtime/helpers/classCallCheck.js'),
        h = n.n(p),
        f = n('./node_modules/@babel/runtime/helpers/createClass.js'),
        b = n.n(f),
        g = n('./node_modules/@babel/runtime/helpers/assertThisInitialized.js'),
        y = n.n(g),
        v = n(
          './node_modules/@babel/runtime/helpers/possibleConstructorReturn.js',
        ),
        S = n.n(v),
        x = n('./node_modules/@babel/runtime/helpers/getPrototypeOf.js'),
        w = n.n(x),
        C = n('./node_modules/@babel/runtime/helpers/inherits.js'),
        j = n.n(C),
        k = n('./node_modules/@babel/runtime/helpers/defineProperty.js'),
        P = n.n(k),
        O = n('./node_modules/react/index.js'),
        R = n.n(O),
        F = n('./src/api/index.js'),
        _ = {
          searchSchema: {
            $id: 'rolePermission-search-schema',
            title: 'rolePermission-search-schema',
            description: 'rolePermission-search-schema.',
            type: 'object',
            required: [],
            properties: {
              name: { type: 'string', title: '角色名称' },
              code: { type: 'string', title: '角色编码' },
              departmentId: { type: 'string', title: '部门名称' },
            },
            formLayout: { layout: 'inline' },
          },
          searchUiSchema: {
            name: {
              'ui:widget': 'input',
              'ui:options': {
                size: 'small',
                type: 'text',
                placeholder: '名称模糊查询',
              },
              'ui:title': '角色名称',
              'ui:description': '',
            },
            code: {
              'ui:widget': 'input',
              'ui:options': {
                size: 'small',
                type: 'text',
                placeholder: '编码模糊查询',
              },
              'ui:title': '角色编码',
              'ui:description': '',
            },
            departmentId: {
              'ui:widget': 'treeSelect',
              'ui:title': '部门名称',
              'ui:options': {
                size: 'small',
                style: { width: 150 },
                treeData: [],
              },
              'ui:remoteConfig': {
                apiKey: 'getAllDepartmentTree',
                hand: function(e) {
                  return (function e(t) {
                    for (var n = 0; n < t.length; n++)
                      (t[n].value = t[n].id),
                        (t[n].key = t[n].id),
                        t[n].children && e(t[n].children);
                    return t;
                  })(e);
                },
              },
            },
          },
          editSchema: {
            $id: 'rolePermission-edit-schema',
            title: 'rolePermission-edit-schema',
            description: 'rolePermission-edit-schema.',
            type: 'object',
            properties: {
              id: { type: 'string' },
              name: {
                type: 'string',
                title: '角色名称',
                maxLength: 25,
                minLength: 1,
              },
              code: {
                type: 'string',
                title: '角色编码',
                maxLength: 25,
                minLength: 1,
              },
            },
          },
          editUiSchema: {
            name: {
              'ui:widget': 'input',
              'ui:options': { type: 'text', placeholder: '' },
              'ui:rules': [
                { required: !0, message: '请输入角色名称' },
                { whitespace: !0, message: 'no space' },
                { max: 100, message: '最多输入100字符' },
              ],
              'ui:title': '角色名称',
              'ui:description': '',
              'ui:formItemConfig': {
                hasFeedback: !0,
                labelCol: { span: 6 },
                wrapperCol: { span: 16 },
              },
            },
            code: {
              'ui:widget': 'input',
              'ui:options': { type: 'text', placeholder: '' },
              'ui:rules': [
                { required: !0, message: '请输入角色编码' },
                { whitespace: !0, message: 'no space' },
                { max: 100, message: '最多输入100字符' },
              ],
              'ui:title': '角色编码',
              'ui:description': '',
              'ui:formItemConfig': {
                hasFeedback: !0,
                labelCol: { span: 6 },
                wrapperCol: { span: 16 },
              },
            },
            departmentId: {
              'ui:widget': 'treeSelect',
              'ui:options': { treeData: [] },
              'ui:rules': [{ required: !0, message: '请选择模块!' }],
              'ui:remoteConfig': {
                apiKey: 'getAllDepartmentTree',
                hand: function(e) {
                  return (function e(t) {
                    for (var n = 0; n < t.length; n++)
                      (t[n].value = t[n].id),
                        (t[n].key = t[n].id),
                        t[n].children && e(t[n].children);
                    return t;
                  })(e);
                },
              },
              'ui:title': '所属部门',
              'ui:formItemConfig': {
                hasFeedback: !0,
                labelCol: { span: 6 },
                wrapperCol: { span: 16 },
              },
            },
            description: {
              'ui:widget': 'input.textarea',
              'ui:options': {
                style: { width: 400, height: 200 },
                autosize: { minRows: 2, maxRows: 6 },
                placeholder: '',
              },
              'ui:rules': [
                { required: !0, message: '请输入功能名称' },
                { whitespace: !0, message: 'no space' },
                { max: 300, message: '最多输入300字符!' },
              ],
              'ui:title': '角色描述',
              'ui:description': '',
              'ui:formItemConfig': {
                hasFeedback: !0,
                labelCol: { span: 6 },
                wrapperCol: { span: 16 },
              },
            },
          },
        },
        L = n('./src/schema/Common/SearchForm/SearchForm.js'),
        E =
          (n('./node_modules/antd/lib/modal/style/index.js'),
          n('./node_modules/antd/lib/modal/index.js')),
        I = n.n(E),
        D =
          (n('./node_modules/antd/lib/tag/style/index.js'),
          n('./node_modules/antd/lib/tag/index.js')),
        T = n.n(D),
        z =
          (n('./node_modules/antd/lib/tree/style/index.js'),
          n('./node_modules/antd/lib/tree/index.js')),
        K = n.n(z),
        A = n('./node_modules/prop-types/index.js'),
        M = n.n(A);
      function q(e) {
        if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (e = (function(e, t) {
              if (!e) return;
              if ('string' == typeof e) return N(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              'Object' === n && e.constructor && (n = e.constructor.name);
              if ('Map' === n || 'Set' === n) return Array.from(n);
              if (
                'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return N(e, t);
            })(e))
          ) {
            var t = 0,
              n = function() {};
            return {
              s: n,
              n: function() {
                return t >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[t++] };
              },
              e: function(e) {
                throw e;
              },
              f: n,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          );
        }
        var r,
          i,
          a = !0,
          o = !1;
        return {
          s: function() {
            r = e[Symbol.iterator]();
          },
          n: function() {
            var e = r.next();
            return (a = e.done), e;
          },
          e: function(e) {
            (o = !0), (i = e);
          },
          f: function() {
            try {
              a || null == r.return || r.return();
            } finally {
              if (o) throw i;
            }
          },
        };
      }
      function N(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function V(r) {
        return function() {
          var e,
            t = w()(r);
          if (
            (function() {
              if ('undefined' == typeof Reflect || !Reflect.construct) return;
              if (Reflect.construct.sham) return;
              if ('function' == typeof Proxy) return 1;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function() {}),
                  ),
                  1
                );
              } catch (e) {
                return;
              }
            })()
          ) {
            var n = w()(this).constructor;
            e = Reflect.construct(t, arguments, n);
          } else e = t.apply(this, arguments);
          return S()(this, e);
        };
      }
      var U = K.a.TreeNode,
        B = (function(e) {
          j()(i, e);
          var r = V(i);
          function i() {
            var a;
            h()(this, i);
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return (
              (a = r.call.apply(r, [this].concat(t))),
              P()(y()(a), 'state', {
                id: '',
                menuFunctionList: [],
                checkedKeys: [],
                defaultCheckKeys: [],
              }),
              P()(y()(a), 'onCancel', function() {
                a.props.onCancel(),
                  a.setState({
                    menuFunctionList: [],
                    checkedKeys: [],
                    defaultCheckKeys: [],
                  });
              }),
              P()(
                y()(a),
                'onOk',
                m()(
                  d.a.mark(function e() {
                    var t;
                    return d.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t = {
                                roleId: a.props.formData.id,
                                permissions: a.state.checkedKeys,
                                moduleId: '0',
                              }),
                              (e.next = 3),
                              a.props.handFromSubmit(t)
                            );
                          case 3:
                            a.setState({
                              menuFunctionList: [],
                              defaultCheckKeys: [],
                              checkedKeys: [],
                            });
                          case 4:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                ),
              ),
              P()(y()(a), 'buildMenuListAndFunctions', function(e) {
                return (function e(t) {
                  var n,
                    r = q(t);
                  try {
                    for (r.s(); !(n = r.n()).done; ) {
                      var i = n.value;
                      (i.key = i.id),
                        (i.selectable = !1),
                        i.moduleId &&
                          ((i.selectable = !0),
                          (i.isPermissionChild = !0),
                          (i.title = i.name)),
                        i.children && e(i.children);
                    }
                  } catch (e) {
                    r.e(e);
                  } finally {
                    r.f();
                  }
                  return t;
                })(e);
              }),
              P()(y()(a), 'onCheck', function(e) {
                a.state.checkedKeys = e.filter(function(e) {
                  return e.indexOf('menu') < 0;
                });
              }),
              P()(y()(a), 'renderTreeNode', function(e) {
                var t,
                  n = [],
                  r = q(e);
                try {
                  for (r.s(); !(t = r.n()).done; ) {
                    var i = t.value;
                    i.children && 0 < i.children.length
                      ? i.isPermissionChild
                        ? n.push(
                            R.a.createElement(
                              U,
                              {
                                className: 'permission-tree-node',
                                title: i.name,
                                key: i.id,
                              },
                              a.renderTreeNode(i.children),
                            ),
                          )
                        : n.push(
                            R.a.createElement(
                              U,
                              {
                                className: 'clear-both',
                                title: R.a.createElement(
                                  'span',
                                  { style: { color: 'rgb(181, 185, 189)' } },
                                  i.title,
                                ),
                                key: 'menu'.concat(i.id),
                              },
                              a.renderTreeNode(i.children),
                            ),
                          )
                      : i.isPermissionChild
                      ? n.push(
                          R.a.createElement(U, {
                            className: 'permission-tree-node',
                            title: i.name,
                            key: i.id,
                          }),
                        )
                      : n.push(
                          R.a.createElement(U, {
                            className: 'clear-both',
                            title: R.a.createElement(
                              'span',
                              { style: { color: 'rgb(181, 185, 189)' } },
                              i.title,
                            ),
                            key: 'menu'.concat(i.id),
                          }),
                        );
                  }
                } catch (e) {
                  r.e(e);
                } finally {
                  r.f();
                }
                return n;
              }),
              P()(y()(a), 'renderTree', function() {
                return R.a.createElement(
                  K.a,
                  {
                    checkable: !0,
                    multiple: !0,
                    defaultExpandAll: !0,
                    defaultCheckedKeys: a.state.defaultCheckKeys,
                    onCheck: a.onCheck,
                    selectable: !1,
                    showLine: !0,
                  },
                  a.renderTreeNode(a.state.menuFunctionList),
                );
              }),
              a
            );
          }
          return (
            b()(i, [
              {
                key: 'componentWillReceiveProps',
                value: function(e) {
                  var r = this;
                  if (e.visible) {
                    var t = e.formData.id;
                    Object(F.getAllMenuWithFunction)({ roleId: t }).then(
                      function(e) {
                        var t = r.buildMenuListAndFunctions(e.data.menuList),
                          n = e.data.roleFunctions.permission;
                        r.setState({
                          menuFunctionList: t,
                          defaultCheckKeys: n,
                          checkedKeys: n,
                        });
                      },
                    );
                  }
                },
              },
              {
                key: 'render',
                value: function() {
                  return R.a.createElement(
                    I.a,
                    {
                      width: 800,
                      visible: this.props.visible,
                      cancelText: '关闭',
                      okText: '提交',
                      title: R.a.createElement(
                        'span',
                        null,
                        '编辑角色  ',
                        R.a.createElement(
                          T.a,
                          { color: '#2db7f5' },
                          this.props.formData.name,
                        ),
                        ' 权限',
                      ),
                      onCancel: this.onCancel,
                      onOk: this.onOk,
                      destroyOnClose: !0,
                    },
                    0 < this.state.menuFunctionList.length
                      ? this.renderTree()
                      : null,
                  );
                },
              },
            ]),
            i
          );
        })(R.a.PureComponent);
      B.propTypes = {
        visible: M.a.bool.isRequired,
        formData: M.a.object.isRequired,
        onCancel: M.a.func.isRequired,
        handFromSubmit: M.a.func.isRequired,
      };
      var J = B,
        $ = n('./src/util/permissionContainer.jsx');
      function W(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function G(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? W(Object(n), !0).forEach(function(e) {
                P()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : W(Object(n)).forEach(function(e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e),
                );
              });
        }
        return t;
      }
      function Q(r) {
        return function() {
          var e,
            t = w()(r);
          if (
            (function() {
              if ('undefined' == typeof Reflect || !Reflect.construct) return;
              if (Reflect.construct.sham) return;
              if ('function' == typeof Proxy) return 1;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function() {}),
                  ),
                  1
                );
              } catch (e) {
                return;
              }
            })()
          ) {
            var n = w()(this).constructor;
            e = Reflect.construct(t, arguments, n);
          } else e = t.apply(this, arguments);
          return S()(this, e);
        };
      }
      var H = (function(e) {
        j()(i, e);
        var r = Q(i);
        function i() {
          var o;
          h()(this, i);
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return (
            (o = r.call.apply(r, [this].concat(t))),
            P()(y()(o), 'state', {
              tableFilter: { name: '', code: '', departmentId: '' },
              tablePageList: [],
              tablePagination: {
                current: 1,
                pageSize: 10,
                showQuickJumper: !0,
                showSizeChanger: !0,
                showTotal: function(e) {
                  return 'Total '.concat(e, ' items');
                },
              },
              tableSorter: { field: '', order: '' },
              tableLoading: !1,
              editModalVisible: !1,
            }),
            P()(y()(o), 'columns', [
              { title: '角色名称', dataIndex: 'name', sorter: !0 },
              { title: '角色编码', dataIndex: 'code', sorter: !0 },
              {
                title: '操作',
                dataIndex: 'id',
                fixed: 'right',
                width: 120,
                render: function(e, t) {
                  return R.a.createElement(
                    $.a,
                    { permission: ['role_permission_edit'] },
                    R.a.createElement(
                      'div',
                      null,
                      R.a.createElement(
                        'a',
                        {
                          onClick: function() {
                            return o.editRolePermission(t);
                          },
                        },
                        '编辑角色权限',
                      ),
                    ),
                  );
                },
              },
            ]),
            P()(y()(o), 'editFormData', {}),
            P()(
              y()(o),
              'fetch',
              m()(
                d.a.mark(function e() {
                  var t,
                    n,
                    r,
                    i,
                    a = arguments;
                  return d.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = 0 < a.length && void 0 !== a[0] ? a[0] : {}),
                            o.setState({ tableLoading: !0 }),
                            (e.next = 4),
                            Object(F.getRolePagedList)(t)
                          );
                        case 4:
                          (n = e.sent),
                            (r = n.data),
                            ((i = G({}, o.state.tablePagination)).total =
                              r.totalCount),
                            o.setState({
                              tableLoading: !1,
                              tablePageList: r.rows,
                              tablePagination: i,
                            });
                        case 9:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              ),
            ),
            P()(y()(o), 'refresh', function() {
              var e = {
                pageIndex: o.state.tablePagination.current,
                pageSize: o.state.tablePagination.pageSize,
                sortBy: o.state.tableSorter.field,
                descending: 'descend' === o.state.tableSorter.order,
                filter: o.state.tableFilter,
              };
              o.fetch(e);
            }),
            P()(y()(o), 'handleSearch', function(e) {
              var t = G({}, o.state.tablePagination);
              (t.current = 1),
                o.setState({ tableFilter: e, tablePagination: t });
              var n = {
                pageIndex: 1,
                pageSize: o.state.tablePagination.pageSize,
                sortBy: o.state.tableSorter.field,
                descending: 'descend' === o.state.tableSorter.order,
                filter: e,
              };
              o.fetch(n);
            }),
            P()(y()(o), 'handleReset', function() {
              o.setState({ tableFilter: {} });
            }),
            P()(y()(o), 'editRolePermission', function(e) {
              (o.editFormData = G({}, e)), o.setState({ editModalVisible: !0 });
            }),
            P()(y()(o), 'editModalOnCancel', function() {
              o.setState({ editModalVisible: !1 });
            }),
            P()(
              y()(o),
              'saveRolePermission',
              (function() {
                var t = m()(
                  d.a.mark(function e(t) {
                    var n;
                    return d.a.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (n = G({}, t)),
                                (e.prev = 2),
                                (e.next = 5),
                                Object(F.savePermission)(n)
                              );
                            case 5:
                              l.a.success({
                                placement: 'bottomLeft bottomRight',
                                message: '保存成功',
                              }),
                                o.setState({ editModalVisible: !1 }),
                                (e.next = 12);
                              break;
                            case 9:
                              (e.prev = 9),
                                (e.t0 = e.catch(2)),
                                l.a.error({ message: e.t0 });
                            case 12:
                              o.refresh();
                            case 13:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[2, 9]],
                    );
                  }),
                );
                return function(e) {
                  return t.apply(this, arguments);
                };
              })(),
            ),
            P()(y()(o), 'handleTableChange', function(e, t, n) {
              var r = G({}, o.state.tablePagination);
              (r.current = e.current),
                (r.pageSize = e.pageSize),
                o.setState({
                  tablePagination: r,
                  tableSorter: { field: n.field, order: n.order },
                });
              var i = {
                pageIndex: r.current,
                pageSize: r.pageSize,
                sortBy: n.field,
                descending: 'descend' === n.order,
                filter: o.state.tableFilter,
              };
              o.fetch(i);
            }),
            o
          );
        }
        return (
          b()(i, [
            {
              key: 'componentDidMount',
              value: function() {
                this.refresh();
              },
            },
            {
              key: 'render',
              value: function() {
                return R.a.createElement(
                  'div',
                  { style: { backgroundColor: '#fff', padding: '18px' } },
                  R.a.createElement(L.a, {
                    schema: _.searchSchema,
                    uiSchema: _.searchUiSchema,
                    handleSubmit: this.handleSearch,
                    handleReset: this.handleReset,
                  }),
                  R.a.createElement(o.a, null),
                  R.a.createElement(a.a, {
                    columns: this.columns,
                    rowKey: function(e) {
                      return e.id;
                    },
                    dataSource: this.state.tablePageList,
                    pagination: this.state.tablePagination,
                    loading: this.state.tableLoading,
                    onChange: this.handleTableChange,
                    scroll: { x: 768 },
                    size: 'small',
                    bordered: !0,
                  }),
                  R.a.createElement(J, {
                    visible: this.state.editModalVisible,
                    onCancel: this.editModalOnCancel,
                    formData: this.editFormData,
                    handFromSubmit: this.saveRolePermission,
                  }),
                );
              },
            },
          ]),
          i
        );
      })(R.a.PureComponent);
      t.default = H;
    },
  },
]);
