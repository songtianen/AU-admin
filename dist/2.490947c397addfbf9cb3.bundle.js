(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    './src/views/pages/Common/AddRemoveConponent.jsx': function(e, t, n) {
      'use strict';
      n('./node_modules/antd/lib/popconfirm/style/index.js');
      var r = n('./node_modules/antd/lib/popconfirm/index.js'),
        o = n.n(r),
        a =
          (n('./node_modules/antd/lib/divider/style/index.js'),
          n('./node_modules/antd/lib/divider/index.js')),
        s = n.n(a),
        i =
          (n('./node_modules/antd/lib/button/style/index.js'),
          n('./node_modules/antd/lib/button/index.js')),
        l = n.n(i),
        c = n('./node_modules/@babel/runtime/helpers/classCallCheck.js'),
        d = n.n(c),
        u = n('./node_modules/@babel/runtime/helpers/createClass.js'),
        m = n.n(u),
        p = n('./node_modules/@babel/runtime/helpers/assertThisInitialized.js'),
        f = n.n(p),
        h = n(
          './node_modules/@babel/runtime/helpers/possibleConstructorReturn.js',
        ),
        b = n.n(h),
        g = n('./node_modules/@babel/runtime/helpers/getPrototypeOf.js'),
        y = n.n(g),
        v = n('./node_modules/@babel/runtime/helpers/inherits.js'),
        j = n.n(v),
        C = n('./node_modules/@babel/runtime/helpers/defineProperty.js'),
        S = n.n(C),
        x = n('./node_modules/react/index.js'),
        w = n.n(x),
        R = n('./node_modules/prop-types/index.js'),
        P = n.n(R),
        O = n('./src/util/permissionContainer.jsx');
      function _(r) {
        return function() {
          var e,
            t = y()(r);
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
            var n = y()(this).constructor;
            e = Reflect.construct(t, arguments, n);
          } else e = t.apply(this, arguments);
          return b()(this, e);
        };
      }
      var D = (function(e) {
        j()(i, e);
        var a = _(i);
        function i() {
          var e;
          d()(this, i);
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          return (
            (e = a.call.apply(a, [this].concat(n))),
            S()(f()(e), 'onConfirm', function() {
              return !!e.props.hasSelected && e.props.onConfirm;
            }),
            e
          );
        }
        return (
          m()(i, [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.addFunc,
                  n = e.hasSelected,
                  r = e.addTitle,
                  a = e.removeTitle,
                  i = e.onConfirm;
                return w.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  w.a.createElement(
                    O.a,
                    { permission: this.props.addPermission },
                    w.a.createElement(
                      l.a,
                      { type: 'primary', icon: 'plus-square-o', onClick: t },
                      r,
                    ),
                  ),
                  w.a.createElement(s.a, { type: 'vertical' }),
                  i
                    ? w.a.createElement(
                        O.a,
                        { permission: this.props.delPermission },
                        w.a.createElement(
                          o.a,
                          { title: '确定删除?', onConfirm: i },
                          w.a.createElement(
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
          i
        );
      })(w.a.PureComponent);
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
        o = n.n(r),
        a = n('./node_modules/@babel/runtime/helpers/classCallCheck.js'),
        s = n.n(a),
        i = n('./node_modules/@babel/runtime/helpers/createClass.js'),
        l = n.n(i),
        c = n('./node_modules/@babel/runtime/helpers/assertThisInitialized.js'),
        d = n.n(c),
        u = n(
          './node_modules/@babel/runtime/helpers/possibleConstructorReturn.js',
        ),
        m = n.n(u),
        p = n('./node_modules/@babel/runtime/helpers/getPrototypeOf.js'),
        f = n.n(p),
        h = n('./node_modules/@babel/runtime/helpers/inherits.js'),
        b = n.n(h),
        g = n('./node_modules/@babel/runtime/helpers/defineProperty.js'),
        y = n.n(g),
        v = n('./node_modules/react/index.js'),
        j = n.n(v),
        C = n('./node_modules/prop-types/index.js'),
        S = n.n(C),
        x = n('./src/schema/Common/commonFormSchemaUtilPlus.js');
      function w(t, e) {
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
      function R(r) {
        return function() {
          var e,
            t = f()(r);
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
            var n = f()(this).constructor;
            e = Reflect.construct(t, arguments, n);
          } else e = t.apply(this, arguments);
          return m()(this, e);
        };
      }
      var P = (function(e) {
        b()(i, e);
        var a = R(i);
        function i() {
          var r;
          s()(this, i);
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
                        ? w(Object(n), !0).forEach(function(e) {
                            y()(t, e, n[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            t,
                            Object.getOwnPropertyDescriptors(n),
                          )
                        : w(Object(n)).forEach(function(e) {
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
          l()(i, [
            {
              key: 'render',
              value: function() {
                var t = this,
                  e = this.props,
                  n = e.schema,
                  r = e.uiSchema,
                  a = e.formData,
                  i = x.a.getForm(n, r);
                return j.a.createElement(
                  'div',
                  null,
                  j.a.createElement(i, {
                    formData: a,
                    wrappedComponentRef: function(e) {
                      t.formRef = e;
                    },
                  }),
                );
              },
            },
          ]),
          i
        );
      })(j.a.PureComponent);
      P.propTypes = {
        schema: S.a.object.isRequired,
        uiSchema: S.a.object.isRequired,
        formData: S.a.object,
        modalSaveFunctionData: S.a.func,
      };
      var O = P;
      function _(r) {
        return function() {
          var e,
            t = f()(r);
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
            var n = f()(this).constructor;
            e = Reflect.construct(t, arguments, n);
          } else e = t.apply(this, arguments);
          return m()(this, e);
        };
      }
      var D = (function(e) {
        b()(i, e);
        var a = _(i);
        function i() {
          var e;
          s()(this, i);
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
          l()(i, [
            {
              key: 'render',
              value: function() {
                var t = this;
                return j.a.createElement(
                  o.a,
                  {
                    visible: this.props.visible,
                    cancelText: '关闭',
                    okText: '提交',
                    title: this.props.title,
                    onCancel: this.onCancel,
                    onOk: this.onOk,
                    destroyOnClose: !0,
                  },
                  j.a.createElement(O, {
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
          i
        );
      })(j.a.PureComponent);
      D.propTypes = {
        visible: S.a.bool.isRequired,
        title: S.a.string.isRequired,
        schema: S.a.object.isRequired,
        uiSchema: S.a.object.isRequired,
        formData: S.a.object.isRequired,
        handFormSubmit: S.a.func.isRequired,
        onCancel: S.a.func.isRequired,
      };
      t.a = D;
    },
    './src/views/pages/Users/component/index.jsx': function(e, t, n) {
      'use strict';
      n.r(t);
      n('./node_modules/antd/lib/table/style/index.js');
      var r = n('./node_modules/antd/lib/table/index.js'),
        i = n.n(r),
        a =
          (n('./node_modules/antd/lib/divider/style/index.js'),
          n('./node_modules/antd/lib/divider/index.js')),
        o = n.n(a),
        s = n('./node_modules/@babel/runtime/helpers/slicedToArray.js'),
        m = n.n(s),
        l = n('./node_modules/@babel/runtime/regenerator/index.js'),
        p = n.n(l),
        c =
          (n('./node_modules/antd/lib/notification/style/index.js'),
          n('./node_modules/antd/lib/notification/index.js')),
        d = n.n(c),
        u = n('./node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        f = n.n(u),
        h =
          (n('./node_modules/antd/lib/tag/style/index.js'),
          n('./node_modules/antd/lib/tag/index.js')),
        b = n.n(h),
        g = n('./node_modules/@babel/runtime/helpers/classCallCheck.js'),
        y = n.n(g),
        v = n('./node_modules/@babel/runtime/helpers/createClass.js'),
        j = n.n(v),
        C = n('./node_modules/@babel/runtime/helpers/assertThisInitialized.js'),
        S = n.n(C),
        x = n(
          './node_modules/@babel/runtime/helpers/possibleConstructorReturn.js',
        ),
        w = n.n(x),
        R = n('./node_modules/@babel/runtime/helpers/getPrototypeOf.js'),
        P = n.n(R),
        O = n('./node_modules/@babel/runtime/helpers/inherits.js'),
        _ = n.n(O),
        D = n('./node_modules/@babel/runtime/helpers/defineProperty.js'),
        k = n.n(D),
        F = n('./node_modules/react/index.js'),
        E = n.n(F),
        U = n('./src/api/index.js'),
        q = n('./src/schema/Common/SearchForm/SearchForm.js'),
        T = n('./src/util/util.js'),
        A = {
          modalUiSchema: {
            userName: {
              'ui:widget': 'input',
              'ui:options': { type: 'text', placeholder: '用户名' },
              'ui:rules': [
                { required: !0, message: '请输入用户名称' },
                { whitespace: !0, message: 'no space' },
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
                { whitespace: !0, message: 'no space' },
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
            userRole: {
              'ui:widget': 'treeSelect',
              'ui:options': {
                fieldNames: {
                  label: 'name',
                  value: 'id',
                  children: 'children',
                },
                treeData: [],
                multiple: !0,
              },
              'ui:rules': [{ required: !0, message: '请选择模块!' }],
              'ui:remoteConfig': {
                apiKey: 'getAllDepartmentAndRole',
                hand: function(e) {
                  return T.a.deparmentTreeWithRole(e);
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
            $id: 'users-modal-edit-schema',
            title: 'users-modal-edit-schema',
            description: 'users-modal-edit-schema.',
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
            $id: 'users-search-schema',
            title: 'users-search-schema',
            description: 'users-search-schema.',
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
        I = n('./src/views/pages/Common/AddRemoveConponent.jsx'),
        z = n('./src/views/pages/Common/CommonModal.jsx'),
        L = n('./node_modules/crypto-js/index.js'),
        M = n.n(L),
        B = M.a.enc.Utf8.parse('0880076B18D7EE81'),
        K = M.a.enc.Utf8.parse('CB3EC842D7C69578'),
        N = n('./src/util/permissionContainer.jsx');
      function V(t, e) {
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
      function J(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? V(Object(n), !0).forEach(function(e) {
                k()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : V(Object(n)).forEach(function(e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e),
                );
              });
        }
        return t;
      }
      function $(r) {
        return function() {
          var e,
            t = P()(r);
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
            var n = P()(this).constructor;
            e = Reflect.construct(t, arguments, n);
          } else e = t.apply(this, arguments);
          return w()(this, e);
        };
      }
      var G = (function(e) {
        _()(a, e);
        var r = $(a);
        function a() {
          var u;
          y()(this, a);
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return (
            (u = r.call.apply(r, [this].concat(t))),
            k()(S()(u), 'state', {
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
              editCommonModalVisible: !1,
              isAddUser: !1,
            }),
            k()(S()(u), 'columns', [
              { title: '用户名称', dataIndex: 'userName', sorter: !0 },
              { title: '用户邮箱', dataIndex: 'email', sorter: !0 },
              { title: 'phone', dataIndex: 'phone', sorter: !0, width: 140 },
              {
                title: '职位',
                dataIndex: 'userRole',
                sorter: !0,
                render: function(e, t) {
                  var n = u.roleName(t.userRole);
                  return E.a.createElement(
                    'span',
                    null,
                    n.map(function(e) {
                      return E.a.createElement(
                        b.a,
                        { color: 'green', key: e.id },
                        e.name,
                      );
                    }),
                  );
                },
              },
              {
                title: '所在部门',
                dataIndex: 'department',
                sorter: !0,
                render: function(e, t) {
                  var n = u.deparmentName(t.userRole);
                  return E.a.createElement(
                    'span',
                    null,
                    n.map(function(e) {
                      return E.a.createElement(
                        b.a,
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
                  return E.a.createElement(
                    N.a,
                    { permission: ['users_edit'] },
                    E.a.createElement(
                      'div',
                      { style: { textAlign: 'center' } },
                      E.a.createElement(
                        'a',
                        {
                          onClick: function() {
                            u.editUser(t);
                          },
                        },
                        '编辑',
                      ),
                    ),
                  );
                },
              },
            ]),
            k()(S()(u), 'editFormData', {}),
            k()(S()(u), 'roleList', ''),
            k()(S()(u), 'department', ''),
            k()(S()(u), 'roleName', function(e) {
              for (
                var t = u.roleList.data.rows, n = [], r = 0;
                r < t.length;
                r++
              )
                for (var a = 0; a < e.length; a++)
                  t[r].id === e[a] && t[r].name && n.push(t[r]);
              return n;
            }),
            k()(S()(u), 'deparmentName', function(e) {
              for (
                var t = u.roleList.data.rows,
                  n = u.department.data.rows,
                  r = [],
                  a = [],
                  i = 0;
                i < e.length;
                i++
              )
                for (var o = 0; o < t.length; o++)
                  e[i] === t[o].id && r.push(t[o].departmentId);
              if (r)
                for (var s = 0; s < r.length; s++)
                  for (var l = 0; l < n.length; l++)
                    r[s] === n[l].id && a.push(n[l].title);
              return T.a.unique(a);
            }),
            k()(S()(u), 'handleSearch', function(e) {
              var t = J({}, u.state.tablePagination);
              (t.current = 1),
                u.setState({ tableFilter: e, tablePagination: t });
              var n = {
                pageIndex: 1,
                pageSize: u.state.tablePagination.pageSize,
                sortBy: u.state.tableSorter.field,
                descending: 'descend' === u.state.tableSorter.order,
                filter: e,
              };
              u.fetch(n);
            }),
            k()(S()(u), 'handleReset', function() {
              u.setState({ tableFilter: {} });
            }),
            k()(S()(u), 'handleTableChange', function(e, t, n) {
              var r = J({}, u.state.tablePagination);
              (r.current = e.current),
                (r.pageSize = e.pageSize),
                u.setState({
                  tablePagination: r,
                  tableSorter: { field: n.field, order: n.order },
                });
              var a = {
                pageIndex: r.current,
                pageSize: r.pageSize,
                sortBy: n.field,
                descending: 'descend' === n.order,
                filter: u.state.tableFilter,
              };
              u.fetch(a);
            }),
            k()(S()(u), 'addUser', function() {
              (u.editFormData = {}),
                u.setState({ editCommonModalVisible: !0, isAddUser: !0 });
            }),
            k()(
              S()(u),
              'batchDelUser',
              f()(
                p.a.mark(function e() {
                  var t, n;
                  return p.a.wrap(
                    function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t = u.state.tableSelectedRowKeys),
                              (e.prev = 1),
                              (e.next = 4),
                              Object(U.delUsers)({ ids: t })
                            );
                          case 4:
                            (n = e.sent),
                              u.setState({ tableSelectedRowKeys: [] }),
                              d.a.success({
                                placement: 'bottomLeft bottomRight',
                                message: n.msg,
                              }),
                              (e.next = 12);
                            break;
                          case 9:
                            (e.prev = 9),
                              (e.t0 = e.catch(1)),
                              d.a.error({ message: e.t0 });
                          case 12:
                            u.refresh();
                          case 13:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 9]],
                  );
                }),
              ),
            ),
            k()(S()(u), 'editCommonModalOnCancel', function() {
              u.setState({ isAddUser: !1, editCommonModalVisible: !1 });
            }),
            k()(S()(u), 'editUser', function(e) {
              var t,
                n,
                r,
                a =
                  ((t = e.pwd),
                  (n = M.a.enc.Hex.parse(t)),
                  (r = M.a.enc.Base64.stringify(n)),
                  M.a.AES.decrypt(r, B, {
                    iv: K,
                    mode: M.a.mode.CBC,
                    padding: M.a.pad.Pkcs7,
                  })
                    .toString(M.a.enc.Utf8)
                    .toString());
              (u.editFormData = J({}, e, { pwd: a })),
                u.setState({ editCommonModalVisible: !0 });
            }),
            k()(S()(u), 'refresh', function() {
              var e = {
                pageIndex: u.state.tablePagination.current,
                pageSize: u.state.tablePagination.pageSize,
                sortBy: u.state.tableSorter.field,
                descending: 'descend' === u.state.tableSorter.order,
                filter: u.state.tableFilter,
              };
              u.fetch(e);
            }),
            k()(
              S()(u),
              'fetch',
              f()(
                p.a.mark(function e() {
                  var t,
                    n,
                    r,
                    a,
                    i,
                    o,
                    s,
                    l,
                    c,
                    d = arguments;
                  return p.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = 0 < d.length && void 0 !== d[0] ? d[0] : {}),
                            u.setState({ tableLoading: !0 }),
                            (e.next = 4),
                            Promise.all([
                              Object(U.getAllUser)(t),
                              Object(U.getRolePagedList)(),
                              Object(U.getAllDepartment)(),
                            ])
                          );
                        case 4:
                          (n = e.sent),
                            (r = m()(n, 3)),
                            (a = r[0]),
                            (i = r[1]),
                            (o = r[2]),
                            (u.roleList = i),
                            (u.department = o),
                            (s = a.data),
                            ((l = J({}, u.state.tablePagination)).total =
                              s.totalCount),
                            (c = s.rows),
                            u.setState({
                              tableLoading: !1,
                              tablePagedList: c,
                              tablePagination: l,
                            });
                        case 16:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              ),
            ),
            k()(S()(u), 'onSelectChange', function(e, t) {
              u.setState({ tableSelectedRowKeys: e });
            }),
            k()(
              S()(u),
              'editCommonModalSaveUser',
              (function() {
                var t = f()(
                  p.a.mark(function e(t) {
                    var n;
                    return p.a.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (u.state.isAddUser)
                                return (
                                  (e.prev = 2),
                                  (e.next = 5),
                                  Object(U.addUser)(J({}, t))
                                );
                              e.next = 14;
                              break;
                            case 5:
                              u.setState({
                                isAddUser: !1,
                                editCommonModalVisible: !1,
                              }),
                                d.a.success({
                                  placement: 'bottomLeft bottomRight',
                                  message: '保存成功',
                                }),
                                (e.next = 12);
                              break;
                            case 9:
                              (e.prev = 9),
                                (e.t0 = e.catch(2)),
                                d.a.error({ message: e.t0 });
                            case 12:
                              e.next = 25;
                              break;
                            case 14:
                              return (
                                (e.prev = 14),
                                (n = u.editFormData.id),
                                (e.next = 18),
                                Object(U.editUser)(J({ id: n }, t))
                              );
                            case 18:
                              u.setState({ editCommonModalVisible: !1 }),
                                d.a.success({
                                  placement: 'bottomLeft bottomRight',
                                  message: '用户信息更新成功',
                                }),
                                (e.next = 25);
                              break;
                            case 22:
                              (e.prev = 22),
                                (e.t1 = e.catch(14)),
                                d.a.error({ message: e.t1.msg });
                            case 25:
                              u.refresh();
                            case 26:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [
                        [2, 9],
                        [14, 22],
                      ],
                    );
                  }),
                );
                return function(e) {
                  return t.apply(this, arguments);
                };
              })(),
            ),
            u
          );
        }
        return (
          j()(a, [
            {
              key: 'componentDidMount',
              value: function() {
                this.refresh();
              },
            },
            {
              key: 'render',
              value: function() {
                var e = this.state,
                  t = e.tableSelectedRowKeys,
                  n = e.isAddUser,
                  r = { selectedRowKeys: t, onChange: this.onSelectChange },
                  a = 0 < t.length;
                return E.a.createElement(
                  'div',
                  { style: { backgroundColor: '#fff', padding: '18px' } },
                  E.a.createElement(q.a, {
                    schema: A.searchSchema,
                    uiSchema: A.searchUiSchema,
                    handleSubmit: this.handleSearch,
                    handleReset: this.handleReset,
                  }),
                  E.a.createElement(o.a, null),
                  E.a.createElement(I.a, {
                    addFunc: this.addUser,
                    onConfirm: this.batchDelUser,
                    hasSelected: a,
                    addTitle: '新增用户',
                    removeTitle: '删除用户',
                    addPermission: ['users_add'],
                    delPermission: ['users_del'],
                  }),
                  E.a.createElement(i.a, {
                    rowSelection: r,
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
                  E.a.createElement(z.a, {
                    visible: this.state.editCommonModalVisible,
                    title: n ? '新增用户' : '编辑用户信息',
                    onCancel: this.editCommonModalOnCancel,
                    destroyOnClose: !0,
                    schema: A.modalSchema,
                    uiSchema: A.modalUiSchema,
                    formData: this.editFormData,
                    handFormSubmit: this.editCommonModalSaveUser,
                  }),
                );
              },
            },
          ]),
          a
        );
      })(E.a.PureComponent);
      t.default = G;
    },
    0: function(e, t) {},
    1: function(e, t) {},
    2: function(e, t) {},
    3: function(e, t) {},
  },
]);
