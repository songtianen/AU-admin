(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    './src/views/pages/Common/AddRemoveConponent.jsx': function(e, t, n) {
      'use strict';
      n('./node_modules/antd/lib/popconfirm/style/index.js');
      var r = n('./node_modules/antd/lib/popconfirm/index.js'),
        i = n.n(r),
        a =
          (n('./node_modules/antd/lib/divider/style/index.js'),
          n('./node_modules/antd/lib/divider/index.js')),
        s = n.n(a),
        o =
          (n('./node_modules/antd/lib/button/style/index.js'),
          n('./node_modules/antd/lib/button/index.js')),
        l = n.n(o),
        c = n('./node_modules/@babel/runtime/helpers/classCallCheck.js'),
        d = n.n(c),
        u = n('./node_modules/@babel/runtime/helpers/createClass.js'),
        m = n.n(u),
        p = n('./node_modules/@babel/runtime/helpers/assertThisInitialized.js'),
        f = n.n(p),
        h = n('./node_modules/@babel/runtime/helpers/inherits.js'),
        b = n.n(h),
        g = n(
          './node_modules/@babel/runtime/helpers/possibleConstructorReturn.js',
        ),
        y = n.n(g),
        S = n('./node_modules/@babel/runtime/helpers/getPrototypeOf.js'),
        v = n.n(S),
        j = n('./node_modules/@babel/runtime/helpers/defineProperty.js'),
        R = n.n(j),
        C = n('./node_modules/react/index.js'),
        x = n.n(C),
        w = n('./node_modules/prop-types/index.js'),
        P = n.n(w),
        O = n('./src/util/permissionContainer.jsx');
      function _(r) {
        return function() {
          var e,
            t = v()(r);
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
            var n = v()(this).constructor;
            e = Reflect.construct(t, arguments, n);
          } else e = t.apply(this, arguments);
          return y()(this, e);
        };
      }
      var D = (function(e) {
        b()(o, e);
        var a = _(o);
        function o() {
          var e;
          d()(this, o);
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          return (
            (e = a.call.apply(a, [this].concat(n))),
            R()(f()(e), 'onConfirm', function() {
              return !!e.props.hasSelected && e.props.onConfirm;
            }),
            e
          );
        }
        return (
          m()(o, [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.addFunc,
                  n = e.hasSelected,
                  r = e.addTitle,
                  a = e.removeTitle,
                  o = e.onConfirm;
                return x.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  x.a.createElement(
                    O.a,
                    { permission: this.props.addPermission },
                    x.a.createElement(
                      l.a,
                      { type: 'primary', icon: 'plus-square-o', onClick: t },
                      r,
                    ),
                  ),
                  x.a.createElement(s.a, { type: 'vertical' }),
                  o
                    ? x.a.createElement(
                        O.a,
                        { permission: this.props.delPermission },
                        x.a.createElement(
                          i.a,
                          { title: '确定删除?', onConfirm: o },
                          x.a.createElement(
                            l.a,
                            { type: 'danger', disabled: !n, icon: 'delete' },
                            a,
                          ),
                        ),
                      )
                    : '',
                );
              },
            },
          ]),
          o
        );
      })(x.a.PureComponent);
      (D.propTypes = {
        addFunc: P.a.func.isRequired,
        onConfirm: P.a.func.isRequired,
        hasSelected: P.a.bool.isRequired,
        addTitle: P.a.string.isRequired,
        removeTitle: P.a.string.isRequired,
        addPermission: P.a.array.isRequired,
        delPermission: P.a.array.isRequired,
      }),
        (t.a = D);
    },
    './src/views/pages/Common/CommonModal.jsx': function(e, t, n) {
      'use strict';
      n('./node_modules/antd/lib/modal/style/index.js');
      var r = n('./node_modules/antd/lib/modal/index.js'),
        i = n.n(r),
        a = n('./node_modules/@babel/runtime/helpers/classCallCheck.js'),
        s = n.n(a),
        o = n('./node_modules/@babel/runtime/helpers/createClass.js'),
        l = n.n(o),
        c = n('./node_modules/@babel/runtime/helpers/assertThisInitialized.js'),
        d = n.n(c),
        u = n('./node_modules/@babel/runtime/helpers/inherits.js'),
        m = n.n(u),
        p = n(
          './node_modules/@babel/runtime/helpers/possibleConstructorReturn.js',
        ),
        f = n.n(p),
        h = n('./node_modules/@babel/runtime/helpers/getPrototypeOf.js'),
        b = n.n(h),
        g = n('./node_modules/@babel/runtime/helpers/defineProperty.js'),
        y = n.n(g),
        S = n('./node_modules/react/index.js'),
        v = n.n(S),
        j = n('./node_modules/prop-types/index.js'),
        R = n.n(j),
        C = n('./src/schema/Common/commonFormSchemaUtilPlus.js');
      function x(t, e) {
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
      function w(r) {
        return function() {
          var e,
            t = b()(r);
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
            var n = b()(this).constructor;
            e = Reflect.construct(t, arguments, n);
          } else e = t.apply(this, arguments);
          return f()(this, e);
        };
      }
      var P = (function(e) {
        m()(o, e);
        var a = w(o);
        function o() {
          var r;
          s()(this, o);
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return (
            (r = a.call.apply(a, [this].concat(t))),
            y()(d()(r), 'commonFormhandleSubmit', function() {
              r.formRef.props.form.validateFields(function(e, t) {
                if (!e) {
                  var n = (function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                      var n = null != arguments[e] ? arguments[e] : {};
                      e % 2
                        ? x(Object(n), !0).forEach(function(e) {
                            y()(t, e, n[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            t,
                            Object.getOwnPropertyDescriptors(n),
                          )
                        : x(Object(n)).forEach(function(e) {
                            Object.defineProperty(
                              t,
                              e,
                              Object.getOwnPropertyDescriptor(n, e),
                            );
                          });
                    }
                    return t;
                  })({}, t);
                  r.props.modalSaveFunctionData(n);
                }
              });
            }),
            y()(d()(r), 'handleReset', function() {
              r.formRef.props.form.resetFields();
            }),
            r
          );
        }
        return (
          l()(o, [
            {
              key: 'render',
              value: function() {
                var t = this,
                  e = this.props,
                  n = e.schema,
                  r = e.uiSchema,
                  a = e.formData,
                  o = C.a.getForm(n, r);
                return v.a.createElement(
                  'div',
                  null,
                  v.a.createElement(o, {
                    formData: a,
                    wrappedComponentRef: function(e) {
                      t.formRef = e;
                    },
                  }),
                );
              },
            },
          ]),
          o
        );
      })(v.a.PureComponent);
      P.propTypes = {
        schema: R.a.object.isRequired,
        uiSchema: R.a.object.isRequired,
        formData: R.a.object,
        modalSaveFunctionData: R.a.func,
      };
      var O = P;
      function _(r) {
        return function() {
          var e,
            t = b()(r);
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
            var n = b()(this).constructor;
            e = Reflect.construct(t, arguments, n);
          } else e = t.apply(this, arguments);
          return f()(this, e);
        };
      }
      var D = (function(e) {
        m()(o, e);
        var a = _(o);
        function o() {
          var e;
          s()(this, o);
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          return (
            (e = a.call.apply(a, [this].concat(n))),
            y()(d()(e), 'onCancel', function() {
              e.props.onCancel();
            }),
            y()(d()(e), 'onOk', function() {
              e.editForm.commonFormhandleSubmit();
            }),
            e
          );
        }
        return (
          l()(o, [
            {
              key: 'render',
              value: function() {
                var t = this;
                return v.a.createElement(
                  i.a,
                  {
                    visible: this.props.visible,
                    cancelText: '关闭',
                    okText: '提交',
                    title: this.props.title,
                    onCancel: this.onCancel,
                    onOk: this.onOk,
                    destroyOnClose: !0,
                  },
                  v.a.createElement(O, {
                    ref: function(e) {
                      t.editForm = e;
                    },
                    schema: this.props.schema,
                    uiSchema: this.props.uiSchema,
                    formData: this.props.formData,
                    modalSaveFunctionData: this.props.handFormSubmit,
                  }),
                );
              },
            },
          ]),
          o
        );
      })(v.a.PureComponent);
      D.propTypes = {
        visible: R.a.bool.isRequired,
        title: R.a.string.isRequired,
        schema: R.a.object.isRequired,
        uiSchema: R.a.object.isRequired,
        formData: R.a.object.isRequired,
        handFormSubmit: R.a.func.isRequired,
        onCancel: R.a.func.isRequired,
      };
      t.a = D;
    },
    './src/views/pages/UserRole/component/index.jsx': function(e, t, n) {
      'use strict';
      n.r(t);
      n('./node_modules/antd/lib/modal/style/index.js');
      var r = n('./node_modules/antd/lib/modal/index.js'),
        o = n.n(r),
        a =
          (n('./node_modules/antd/lib/button/style/index.js'),
          n('./node_modules/antd/lib/button/index.js')),
        i = n.n(a),
        s =
          (n('./node_modules/antd/lib/table/style/index.js'),
          n('./node_modules/antd/lib/table/index.js')),
        l = n.n(s),
        c =
          (n('./node_modules/antd/lib/divider/style/index.js'),
          n('./node_modules/antd/lib/divider/index.js')),
        d = n.n(c),
        u = n('./node_modules/@babel/runtime/regenerator/index.js'),
        m = n.n(u),
        p = n('./node_modules/@babel/runtime/helpers/slicedToArray.js'),
        f = n.n(p),
        h = n('./node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        b = n.n(h),
        g =
          (n('./node_modules/antd/lib/tag/style/index.js'),
          n('./node_modules/antd/lib/tag/index.js')),
        y = n.n(g),
        S = n('./node_modules/@babel/runtime/helpers/classCallCheck.js'),
        v = n.n(S),
        j = n('./node_modules/@babel/runtime/helpers/createClass.js'),
        R = n.n(j),
        C = n('./node_modules/@babel/runtime/helpers/assertThisInitialized.js'),
        x = n.n(C),
        w = n('./node_modules/@babel/runtime/helpers/inherits.js'),
        P = n.n(w),
        O = n(
          './node_modules/@babel/runtime/helpers/possibleConstructorReturn.js',
        ),
        _ = n.n(O),
        D = n('./node_modules/@babel/runtime/helpers/getPrototypeOf.js'),
        F = n.n(D),
        k = n('./node_modules/@babel/runtime/helpers/defineProperty.js'),
        E = n.n(k),
        I = n('./node_modules/react/index.js'),
        z = n.n(I),
        T = n('./src/api/index.js'),
        q = n('./src/schema/Common/SearchForm/SearchForm.js'),
        L = {
          modalUiSchema: {
            userName: {
              'ui:widget': 'input',
              'ui:options': { type: 'text', placeholder: '用户名' },
              'ui:rules': [
                { required: !0, message: '请输入用户名称' },
                { max: 100, message: '最多输入100字符' },
              ],
              'ui:title': '用户名称',
              'ui:description': '',
              'ui:formItemConfig': {
                hasFeedback: !0,
                labelCol: { span: 6 },
                wrapperCol: { span: 16 },
              },
            },
            email: {
              'ui:widget': 'input',
              'ui:options': { type: 'text', placeholder: '邮箱' },
              'ui:rules': [
                { required: !0, message: '请输入邮箱' },
                { type: 'email', message: '请输入正确的邮箱格式!' },
              ],
              'ui:title': '用户邮箱',
              'ui:description': '',
              'ui:formItemConfig': {
                hasFeedback: !0,
                labelCol: { span: 6 },
                wrapperCol: { span: 16 },
              },
            },
            phone: {
              'ui:widget': 'input',
              'ui:options': { type: 'text', placeholder: '电话' },
              'ui:rules': [
                { required: !0, message: '请输入电话号码' },
                {
                  type: 'string',
                  pattern: /^1[3|4|5|7|8]\d{9}$/,
                  message: '请输入正确的手机格式',
                },
              ],
              'ui:title': 'phone',
              'ui:description': '',
              'ui:formItemConfig': {
                hasFeedback: !0,
                labelCol: { span: 6 },
                wrapperCol: { span: 16 },
              },
            },
            pwd: {
              'ui:widget': 'input',
              'ui:options': { type: 'text', placeholder: '请输入密码' },
              'ui:rules': [
                { required: !0, message: '请输入密码' },
                { max: 100, message: '最多输入100字符' },
              ],
              'ui:title': '密码设置',
              'ui:description': '',
              'ui:formItemConfig': {
                hasFeedback: !0,
                labelCol: { span: 6 },
                wrapperCol: { span: 16 },
              },
            },
          },
          modalSchema: {
            $id: 'user-modal-edit-schema',
            title: 'user-modal-edit-schema',
            description: 'user-modal-edit-schema.',
            type: 'object',
            required: [],
            properties: {
              username: { type: 'string', title: '用户名称' },
              email: { type: 'string', title: '用户邮箱' },
              password: { type: 'string', title: '用户密码' },
              phone: { type: 'string', title: '电话' },
            },
          },
          searchSchema: {
            $id: 'userRole-search-schema',
            title: 'userRole-search-schema',
            description: 'userRole-search-schema.',
            type: 'object',
            required: [],
            properties: {
              name: { type: 'string', title: '账号名称' },
              email: { type: 'string', title: '用户邮箱' },
            },
            formLayout: { layout: 'inline' },
          },
          searchUiSchema: {
            name: {
              'ui:widget': 'input',
              'ui:options': {
                size: 'small',
                type: 'text',
                placeholder: '账号名称查询',
              },
              'ui:title': '账号名称',
              'ui:description': '',
            },
            email: {
              'ui:widget': 'input',
              'ui:options': {
                size: 'small',
                type: 'text',
                placeholder: '用户邮箱查询',
              },
              'ui:title': '用户邮箱',
              'ui:description': '',
            },
          },
        },
        U =
          (n('./node_modules/antd/lib/notification/style/index.js'),
          n('./node_modules/antd/lib/notification/index.js')),
        M = n.n(U),
        A =
          (n('./node_modules/antd/lib/popconfirm/style/index.js'),
          n('./node_modules/antd/lib/popconfirm/index.js')),
        K = n.n(A),
        V = n('./node_modules/prop-types/index.js'),
        B = n.n(V),
        N = n('./src/util/util.js'),
        $ = {
          modalUiSchema: {
            moduleId: {
              'ui:widget': 'treeSelect',
              'ui:options': {
                fieldNames: {
                  label: 'name',
                  value: 'id',
                  children: 'children',
                },
                treeData: [],
              },
              'ui:rules': [{ required: !0, message: '请选择模块!' }],
              'ui:remoteConfig': {
                apiKey: 'getAllDepartmentAndRole',
                hand: function(e) {
                  return N.a.deparmentTreeWithRole(e);
                },
              },
              'ui:title': '角色',
              'ui:formItemConfig': {
                hasFeedback: !0,
                label: '角色',
                labelCol: { span: 6 },
                wrapperCol: { span: 16 },
              },
            },
          },
          modalSchema: {
            $id: 'add-role-for-user-schema',
            title: 'add-role-for-user-schema',
            description: 'add-role-for-user-schema',
            type: 'object',
            required: [],
            properties: { moduleId: { type: 'string' } },
          },
          searchSchema: {
            $id: 'userRole-search-schema',
            title: 'userRole-search-schema',
            description: 'userRole-search-schema.',
            type: 'object',
            required: [],
            properties: {
              name: { type: 'string', title: '部门名称' },
              code: { type: 'string', title: '部门编码' },
            },
            formLayout: { layout: 'inline' },
          },
          searchUiSchema: {
            name: {
              'ui:widget': 'input',
              'ui:options': {
                size: 'small',
                type: 'text',
                placeholder: '部门名称查询',
              },
              'ui:title': '部门名称',
              'ui:description': '',
            },
            code: {
              'ui:widget': 'input',
              'ui:options': {
                size: 'small',
                type: 'text',
                placeholder: '部门编码',
              },
              'ui:title': '部门编码',
              'ui:description': '',
            },
          },
        },
        J = n('./src/views/pages/Common/AddRemoveConponent.jsx'),
        Q = n('./src/views/pages/Common/CommonModal.jsx'),
        G = n('./src/util/permissionContainer.jsx');
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
      function H(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? W(Object(n), !0).forEach(function(e) {
                E()(t, e, n[e]);
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
      function X(r) {
        return function() {
          var e,
            t = F()(r);
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
            var n = F()(this).constructor;
            e = Reflect.construct(t, arguments, n);
          } else e = t.apply(this, arguments);
          return _()(this, e);
        };
      }
      var Y = (function(e) {
        P()(a, e);
        var r = X(a);
        function a() {
          var s;
          v()(this, a);
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return (
            (s = r.call.apply(r, [this].concat(t))),
            E()(x()(s), 'state', {
              tableFilter: { name: '', code: '', userId: s.props.formData.id },
              tableSelectedRowKeys: [],
              searchFormExpand: !0,
              tablePagedList: [],
              tablePagination: {
                current: 1,
                pageSize: 10,
                showQuickJumper: !0,
                showSizeChanger: !0,
                showTotal: function(e) {
                  return '共 '.concat(e, ' 条');
                },
              },
              tableSorter: { field: '', order: '' },
              tableLoading: !1,
              editCommonModalVisible: !1,
            }),
            E()(x()(s), 'columns', [
              { title: '角色名称', dataIndex: 'name', sorter: !0 },
              { title: '角色编码', dataIndex: 'code', sorter: !0 },
              {
                title: '操作',
                dataIndex: 'id',
                align: 'center',
                fixed: 'right',
                width: 120,
                render: function(e, t) {
                  return z.a.createElement(
                    G.a,
                    { permission: ['user_role_del'] },
                    z.a.createElement(
                      K.a,
                      {
                        title: '确定删除?',
                        onConfirm: function() {
                          return s.modifyRoleUser(t);
                        },
                      },
                      z.a.createElement('a', null, '删除'),
                    ),
                  );
                },
              },
            ]),
            E()(x()(s), 'handleSearch', function(e) {
              e.userId = s.props.formData.id;
              var t = H({}, s.state.tablePagination);
              (t.current = 1),
                s.setState({ tableFilter: e, tablePagination: t });
              var n = {
                pageIndex: 1,
                pageSize: s.state.tablePagination.pageSize,
                sortBy: s.state.tableSorter.field,
                descending: 'descend' === s.state.tableSorter.order,
                filter: e,
              };
              s.fetch(n);
            }),
            E()(x()(s), 'handleReset', function() {
              s.setState({ tableFilter: { userId: s.props.formData.id } });
            }),
            E()(x()(s), 'handleTableChange', function(e, t, n) {
              var r = H({}, s.state.tablePagination);
              (r.current = e.current),
                (r.pageSize = e.pageSize),
                s.setState({
                  tablePagination: r,
                  tableSorter: { field: n.field, order: n.order },
                });
              var a = {
                pageIndex: r.current,
                pageSize: r.pageSize,
                sortBy: n.field,
                descending: 'descend' === n.order,
                filter: s.state.tableFilter,
              };
              s.fetch(a);
            }),
            E()(
              x()(s),
              'modifyRoleUser',
              (function() {
                var t = b()(
                  m.a.mark(function e(t) {
                    var n, r, a;
                    return m.a.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (n = s.props.formData.id),
                                (r = []).push(t.id),
                                (e.prev = 3),
                                (e.next = 6),
                                Object(T.delRoleForUserId)({
                                  userId: n,
                                  roleIds: r,
                                })
                              );
                            case 6:
                              (a = e.sent),
                                s.setState({ tableSelectedRowKeys: [] }),
                                M.a.success({
                                  placement: 'bottomLeft bottomRight',
                                  message: a.msg,
                                }),
                                (e.next = 14);
                              break;
                            case 11:
                              (e.prev = 11),
                                (e.t0 = e.catch(3)),
                                M.a.error({ message: e.t0 });
                            case 14:
                              s.refresh();
                            case 15:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[3, 11]],
                    );
                  }),
                );
                return function(e) {
                  return t.apply(this, arguments);
                };
              })(),
            ),
            E()(x()(s), 'addRole', function() {
              (s.editModalFormData = {}),
                s.setState({ editCommonModalVisible: !0 });
            }),
            E()(
              x()(s),
              'batchDelRole',
              b()(
                m.a.mark(function e() {
                  var t, n, r;
                  return m.a.wrap(
                    function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t = s.props.formData.id),
                              (n = s.state.tableSelectedRowKeys),
                              (e.prev = 2),
                              (e.next = 5),
                              Object(T.delRoleForUserId)({
                                userId: t,
                                roleIds: n,
                              })
                            );
                          case 5:
                            (r = e.sent),
                              s.setState({ tableSelectedRowKeys: [] }),
                              M.a.success({
                                placement: 'bottomLeft bottomRight',
                                message: r.msg,
                              }),
                              (e.next = 13);
                            break;
                          case 10:
                            (e.prev = 10),
                              (e.t0 = e.catch(2)),
                              M.a.error({ message: e.t0 });
                          case 13:
                            s.refresh();
                          case 14:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[2, 10]],
                  );
                }),
              ),
            ),
            E()(x()(s), 'onSelectChange', function(e) {
              s.setState({ tableSelectedRowKeys: e });
            }),
            E()(x()(s), 'refresh', function() {
              var e = {
                pageIndex: s.state.tablePagination.current,
                pageSize: s.state.tablePagination.pageSize,
                sortBy: s.state.tableSorter.field,
                descending: 'descend' === s.state.tableSorter.order,
                filter: s.state.tableFilter,
              };
              s.fetch(e);
            }),
            E()(
              x()(s),
              'fetch',
              b()(
                m.a.mark(function e() {
                  var t,
                    n,
                    r,
                    a,
                    o,
                    i = arguments;
                  return m.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = 0 < i.length && void 0 !== i[0] ? i[0] : {}),
                            s.setState({ tableLoading: !0 }),
                            (e.next = 4),
                            Object(T.getRoleFromUserId)(t)
                          );
                        case 4:
                          (n = e.sent),
                            (r = n.data),
                            ((a = H({}, s.state.tablePagination)).total =
                              r.totalCount),
                            (o = r.rows).map(function(e) {
                              return {
                                name: e.name,
                                code: e.code,
                                isAdd: e.isAdd,
                              };
                            }),
                            s.setState({
                              tableLoading: !1,
                              tablePagedList: o,
                              tablePagination: a,
                            });
                        case 11:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              ),
            ),
            E()(x()(s), 'editCommonModalOnCancel', function() {
              s.setState({ editCommonModalVisible: !1 });
            }),
            E()(
              x()(s),
              'editCommonModalSaveRoleForUSer',
              (function() {
                var n = b()(
                  m.a.mark(function e(t, n) {
                    return m.a.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (e.next = 3),
                                Object(T.addRoleForUser)({
                                  moduleId: t.moduleId,
                                  userId: s.state.tableFilter.userId,
                                })
                              );
                            case 3:
                              s.setState({ editCommonModalVisible: !1 }),
                                M.a.success({
                                  placement: 'bottomLeft bottomRight',
                                  message: '保存成功',
                                }),
                                (e.next = 10);
                              break;
                            case 7:
                              (e.prev = 7),
                                (e.t0 = e.catch(0)),
                                M.a.error({ message: e.t0 });
                            case 10:
                              s.refresh();
                            case 11:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 7]],
                    );
                  }),
                );
                return function(e, t) {
                  return n.apply(this, arguments);
                };
              })(),
            ),
            s
          );
        }
        return (
          R()(a, [
            {
              key: 'componentDidMount',
              value: function() {
                this.refresh();
              },
            },
            {
              key: 'render',
              value: function() {
                var e = this.state.tableSelectedRowKeys,
                  t = { selectedRowKeys: e, onChange: this.onSelectChange },
                  n = 0 < e.length;
                return z.a.createElement(
                  'div',
                  null,
                  z.a.createElement(q.a, {
                    schema: $.searchSchema,
                    uiSchema: $.searchUiSchema,
                    handleSubmit: this.handleSearch,
                    handleReset: this.handleReset,
                  }),
                  z.a.createElement(d.a, null),
                  z.a.createElement(J.a, {
                    addFunc: this.addRole,
                    onConfirm: this.batchDelRole,
                    hasSelected: n,
                    addTitle: '添加角色',
                    removeTitle: '删除角色',
                    addPermission: ['user_role_add'],
                    delPermission: ['user_role_del'],
                  }),
                  z.a.createElement(l.a, {
                    rowSelection: t,
                    columns: this.columns,
                    rowKey: function(e) {
                      return e.id;
                    },
                    dataSource: this.state.tablePagedList,
                    pagination: this.state.tablePagination,
                    loading: this.state.tableLoading,
                    onChange: this.handleTableChange,
                    scroll: { x: 768 },
                    size: 'small',
                    bordered: !0,
                  }),
                  z.a.createElement(Q.a, {
                    visible: this.state.editCommonModalVisible,
                    title: '添加角色',
                    onCancel: this.editCommonModalOnCancel,
                    destroyOnClose: !0,
                    schema: $.modalSchema,
                    uiSchema: $.modalUiSchema,
                    handFormSubmit: this.editCommonModalSaveRoleForUSer,
                  }),
                );
              },
            },
          ]),
          a
        );
      })(z.a.PureComponent);
      Y.propTypes = { formData: B.a.object.isRequired };
      var Z = Y;
      function ee(t, e) {
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
      function te(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? ee(Object(n), !0).forEach(function(e) {
                E()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : ee(Object(n)).forEach(function(e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e),
                );
              });
        }
        return t;
      }
      function ne(r) {
        return function() {
          var e,
            t = F()(r);
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
            var n = F()(this).constructor;
            e = Reflect.construct(t, arguments, n);
          } else e = t.apply(this, arguments);
          return _()(this, e);
        };
      }
      var re = (function(e) {
        P()(a, e);
        var r = ne(a);
        function a() {
          var d;
          v()(this, a);
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return (
            (d = r.call.apply(r, [this].concat(t))),
            E()(x()(d), 'state', {
              tableFilter: { name: '', email: '' },
              tableSelectedRowKeys: [],
              searchFormExpand: !0,
              tablePagedList: [],
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
              editTableVisible: !1,
            }),
            E()(x()(d), 'columns', [
              { title: '用户名称', dataIndex: 'userName', sorter: !0 },
              { title: '用户邮箱', dataIndex: 'email', sorter: !0 },
              { title: 'phone', dataIndex: 'phone', sorter: !0, width: 140 },
              {
                title: '所属角色/职位',
                dataIndex: 'userRole',
                sorter: !0,
                render: function(e, t) {
                  var n = d.roleName(t.userRole);
                  return z.a.createElement(
                    'span',
                    null,
                    n.map(function(e) {
                      return z.a.createElement(
                        y.a,
                        { color: 'green', key: e },
                        e,
                      );
                    }),
                  );
                },
              },
              {
                title: '操作',
                dataIndex: 'id',
                fixed: 'right',
                width: 140,
                render: function(e, t) {
                  return z.a.createElement(
                    'div',
                    { style: { textAlign: 'center' } },
                    z.a.createElement(
                      'a',
                      {
                        onClick: function() {
                          return d.editUserRole(t);
                        },
                      },
                      '角色编辑',
                    ),
                  );
                },
              },
            ]),
            E()(x()(d), 'editFormData', {}),
            E()(x()(d), 'roleList', ''),
            E()(x()(d), 'roleName', function(e) {
              for (
                var t = d.roleList.data.rows, n = [], r = 0;
                r < t.length;
                r++
              )
                for (var a = 0; a < e.length; a++)
                  t[r].id === e[a] && t[r].name && n.push(t[r].name);
              return n;
            }),
            E()(x()(d), 'handleSearch', function(e) {
              var t = te({}, d.state.tablePagination);
              (t.current = 1),
                d.setState({ tableFilter: e, tablePagination: t });
              var n = {
                pageIndex: 1,
                pageSize: d.state.tablePagination.pageSize,
                sortBy: d.state.tableSorter.field,
                descending: 'descend' === d.state.tableSorter.order,
                filter: e,
              };
              d.fetch(n);
            }),
            E()(x()(d), 'handleReset', function() {
              d.setState({ tableFilter: {} });
            }),
            E()(x()(d), 'handleTableChange', function(e, t, n) {
              var r = te({}, d.state.tablePagination);
              (r.current = e.current),
                (r.pageSize = e.pageSize),
                d.setState({
                  tablePagination: r,
                  tableSorter: { field: n.field, order: n.order },
                });
              var a = {
                pageIndex: r.current,
                pageSize: r.pageSize,
                sortBy: n.field,
                descending: 'descend' === n.order,
                filter: d.state.tableFilter,
              };
              d.fetch(a);
            }),
            E()(x()(d), 'editUserRole', function(e) {
              (d.editFormData = te({}, e)),
                d.setState({ editTableVisible: !0 });
            }),
            E()(x()(d), 'editModalOnCancel', function() {
              d.setState({ editTableVisible: !1 });
            }),
            E()(x()(d), 'refresh', function() {
              var e = {
                pageIndex: d.state.tablePagination.current,
                pageSize: d.state.tablePagination.pageSize,
                sortBy: d.state.tableSorter.field,
                descending: 'descend' === d.state.tableSorter.order,
                filter: d.state.tableFilter,
              };
              d.fetch(e);
            }),
            E()(
              x()(d),
              'fetch',
              b()(
                m.a.mark(function e() {
                  var t,
                    n,
                    r,
                    a,
                    o,
                    i,
                    s,
                    l,
                    c = arguments;
                  return m.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = 0 < c.length && void 0 !== c[0] ? c[0] : {}),
                            d.setState({ tableLoading: !0 }),
                            (e.next = 4),
                            Promise.all([
                              Object(T.getAllUser)(t),
                              Object(T.getRolePagedList)(),
                            ])
                          );
                        case 4:
                          (n = e.sent),
                            (r = f()(n, 2)),
                            (a = r[0]),
                            (o = r[1]),
                            (d.roleList = o),
                            (i = a.data),
                            ((s = te({}, d.state.tablePagination)).total =
                              i.totalCount),
                            (l = i.rows),
                            d.setState({
                              tableLoading: !1,
                              tablePagedList: l,
                              tablePagination: s,
                            });
                        case 15:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              ),
            ),
            E()(x()(d), 'onSelectChange', function(e) {
              d.setState({ tableSelectedRowKeys: e });
            }),
            d
          );
        }
        return (
          R()(a, [
            {
              key: 'componentDidMount',
              value: function() {
                this.refresh();
              },
            },
            {
              key: 'render',
              value: function() {
                var e = {
                  selectedRowKeys: this.state.tableSelectedRowKeys,
                  onChange: this.onSelectChange,
                };
                return z.a.createElement(
                  'div',
                  { style: { backgroundColor: '#fff', padding: '18px' } },
                  z.a.createElement(q.a, {
                    schema: L.searchSchema,
                    uiSchema: L.searchUiSchema,
                    handleSubmit: this.handleSearch,
                    handleReset: this.handleReset,
                  }),
                  z.a.createElement(d.a, null),
                  z.a.createElement(l.a, {
                    rowSelection: e,
                    columns: this.columns,
                    rowKey: function(e) {
                      return e.id;
                    },
                    dataSource: this.state.tablePagedList,
                    pagination: this.state.tablePagination,
                    loading: this.state.tableLoading,
                    onChange: this.handleTableChange,
                    scroll: { x: 1e3 },
                    size: 'small',
                    bordered: !0,
                  }),
                  z.a.createElement(
                    o.a,
                    {
                      visible: this.state.editTableVisible,
                      width: 1e3,
                      title: z.a.createElement(
                        'span',
                        null,
                        '编辑用户  ',
                        z.a.createElement(
                          y.a,
                          { color: '#2db7f5' },
                          this.editFormData.userName,
                        ),
                        ' 所属角色',
                      ),
                      onCancel: this.editModalOnCancel,
                      footer: [
                        z.a.createElement(
                          i.a,
                          { key: 'back', onClick: this.editModalOnCancel },
                          '关闭',
                        ),
                      ],
                      destroyOnClose: !0,
                    },
                    z.a.createElement(Z, { formData: this.editFormData }),
                  ),
                );
              },
            },
          ]),
          a
        );
      })(z.a.PureComponent);
      t.default = re;
    },
  },
]);
