(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    './src/views/pages/Common/AddRemoveConponent.jsx': function(e, t, a) {
      'use strict';
      a('./node_modules/antd/lib/popconfirm/style/index.js');
      var r = a('./node_modules/antd/lib/popconfirm/index.js'),
        o = a.n(r),
        n =
          (a('./node_modules/antd/lib/divider/style/index.js'),
          a('./node_modules/antd/lib/divider/index.js')),
        s = a.n(n),
        i =
          (a('./node_modules/antd/lib/button/style/index.js'),
          a('./node_modules/antd/lib/button/index.js')),
        l = a.n(i),
        d = a('./node_modules/@babel/runtime/helpers/classCallCheck.js'),
        c = a.n(d),
        u = a('./node_modules/@babel/runtime/helpers/createClass.js'),
        p = a.n(u),
        m = a('./node_modules/@babel/runtime/helpers/assertThisInitialized.js'),
        h = a.n(m),
        f = a('./node_modules/@babel/runtime/helpers/inherits.js'),
        b = a.n(f),
        g = a(
          './node_modules/@babel/runtime/helpers/possibleConstructorReturn.js',
        ),
        y = a.n(g),
        S = a('./node_modules/@babel/runtime/helpers/getPrototypeOf.js'),
        v = a.n(S),
        w = a('./node_modules/@babel/runtime/helpers/defineProperty.js'),
        x = a.n(w),
        j = a('./node_modules/react/index.js'),
        C = a.n(j),
        P = a('./node_modules/prop-types/index.js'),
        R = a.n(P),
        O = a('./src/util/permissionContainer.jsx');
      function F(r) {
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
            var a = v()(this).constructor;
            e = Reflect.construct(t, arguments, a);
          } else e = t.apply(this, arguments);
          return y()(this, e);
        };
      }
      var _ = (function(e) {
        b()(i, e);
        var n = F(i);
        function i() {
          var e;
          c()(this, i);
          for (var t = arguments.length, a = new Array(t), r = 0; r < t; r++)
            a[r] = arguments[r];
          return (
            (e = n.call.apply(n, [this].concat(a))),
            x()(h()(e), 'onConfirm', function() {
              return !!e.props.hasSelected && e.props.onConfirm;
            }),
            e
          );
        }
        return (
          p()(i, [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.addFunc,
                  a = e.hasSelected,
                  r = e.addTitle,
                  n = e.removeTitle,
                  i = e.onConfirm;
                return C.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  C.a.createElement(
                    O.a,
                    { permission: this.props.addPermission },
                    C.a.createElement(
                      l.a,
                      { type: 'primary', icon: 'plus-square-o', onClick: t },
                      r,
                    ),
                  ),
                  C.a.createElement(s.a, { type: 'vertical' }),
                  i
                    ? C.a.createElement(
                        O.a,
                        { permission: this.props.delPermission },
                        C.a.createElement(
                          o.a,
                          { title: '确定删除?', onConfirm: i },
                          C.a.createElement(
                            l.a,
                            { type: 'danger', disabled: !a, icon: 'delete' },
                            n,
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
      })(C.a.PureComponent);
      (_.propTypes = {
        addFunc: R.a.func.isRequired,
        onConfirm: R.a.func.isRequired,
        hasSelected: R.a.bool.isRequired,
        addTitle: R.a.string.isRequired,
        removeTitle: R.a.string.isRequired,
        addPermission: R.a.array.isRequired,
        delPermission: R.a.array.isRequired,
      }),
        (t.a = _);
    },
    './src/views/pages/RoleUser/component/index.jsx': function(e, t, a) {
      'use strict';
      a.r(t);
      a('./node_modules/antd/lib/modal/style/index.js');
      var r = a('./node_modules/antd/lib/modal/index.js'),
        i = a.n(r),
        n =
          (a('./node_modules/antd/lib/button/style/index.js'),
          a('./node_modules/antd/lib/button/index.js')),
        o = a.n(n),
        s =
          (a('./node_modules/antd/lib/tag/style/index.js'),
          a('./node_modules/antd/lib/tag/index.js')),
        l = a.n(s),
        d =
          (a('./node_modules/antd/lib/table/style/index.js'),
          a('./node_modules/antd/lib/table/index.js')),
        c = a.n(d),
        u =
          (a('./node_modules/antd/lib/divider/style/index.js'),
          a('./node_modules/antd/lib/divider/index.js')),
        p = a.n(u),
        m = a('./node_modules/@babel/runtime/regenerator/index.js'),
        h = a.n(m),
        f = a('./node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        b = a.n(f),
        g = a('./node_modules/@babel/runtime/helpers/classCallCheck.js'),
        y = a.n(g),
        S = a('./node_modules/@babel/runtime/helpers/createClass.js'),
        v = a.n(S),
        w = a('./node_modules/@babel/runtime/helpers/assertThisInitialized.js'),
        x = a.n(w),
        j = a('./node_modules/@babel/runtime/helpers/inherits.js'),
        C = a.n(j),
        P = a(
          './node_modules/@babel/runtime/helpers/possibleConstructorReturn.js',
        ),
        R = a.n(P),
        O = a('./node_modules/@babel/runtime/helpers/getPrototypeOf.js'),
        F = a.n(O),
        _ = a('./node_modules/@babel/runtime/helpers/defineProperty.js'),
        D = a.n(_),
        E = a('./node_modules/react/index.js'),
        k = a.n(E),
        I = a('./src/api/index.js'),
        z = {
          searchSchema: {
            $id: 'roleUser-search-schema',
            title: 'roleUser-search-schema',
            description: 'roleUser-search-schema.',
            type: 'object',
            required: [],
            properties: {
              name: { type: 'string', title: '角色名称' },
              code: { type: 'string', title: '角色编码' },
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
          },
          editSchema: {
            $id: 'roleUser-edit-schema',
            title: 'roleUser-edit-schema',
            description: 'roleUser-edit-schema.',
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
                    for (var a = 0; a < t.length; a++)
                      (t[a].value = t[a].id),
                        (t[a].key = t[a].id),
                        t[a].children && e(t[a].children);
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
        U = a('./src/schema/Common/SearchForm/SearchForm.js'),
        L =
          (a('./node_modules/antd/lib/notification/style/index.js'),
          a('./node_modules/antd/lib/notification/index.js')),
        T = a.n(L),
        M =
          (a('./node_modules/antd/lib/popconfirm/style/index.js'),
          a('./node_modules/antd/lib/popconfirm/index.js')),
        q = a.n(M),
        K = a('./node_modules/prop-types/index.js'),
        B = a.n(K),
        A = a('./src/views/pages/Common/AddRemoveConponent.jsx'),
        J = {
          searchSchema: {
            $id: 'user-search-schema',
            title: 'user-search-schema',
            description: 'user-search-schema.',
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
          editSchema: {
            $id: 'user-edit-schema',
            title: 'user-edit-schema',
            description: 'user-edit-schema.',
            type: 'object',
            required: [],
            properties: {
              name: { type: 'string', title: '账号名称' },
              trueName: { type: 'string', title: '用户名称' },
              email: { type: 'string', title: '用户邮箱' },
              phone: { type: 'string', title: 'phone' },
            },
          },
          editUiSchema: {
            name: {
              'ui:widget': 'input',
              'ui:options': { type: 'text', placeholder: '' },
              'ui:rules': [
                { required: !0, message: '请输入账号名称' },
                { whitespace: !0, message: 'no space' },
                { max: 100, message: '最多输入100字符' },
              ],
              'ui:title': '账号名称',
              'ui:description': '',
              'ui:formItemConfig': {
                hasFeedback: !0,
                labelCol: { span: 6 },
                wrapperCol: { span: 16 },
              },
            },
            trueName: {
              'ui:widget': 'input',
              'ui:options': { type: 'text', placeholder: '' },
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
              'ui:options': { type: 'text', placeholder: '' },
              'ui:rules': [
                { type: 'email', message: 'The input is not valid E-mail!' },
                { whitespace: !0, message: 'no space' },
                { max: 100, message: '最多输入100字符' },
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
              'ui:options': { type: 'text', placeholder: '' },
              'ui:rules': [
                { whitespace: !0, message: 'no space' },
                { max: 100, message: '最多输入100字符' },
              ],
              'ui:title': 'phone',
              'ui:description': '',
              'ui:formItemConfig': {
                hasFeedback: !0,
                labelCol: { span: 6 },
                wrapperCol: { span: 16 },
              },
            },
          },
        };
      function N(t, e) {
        var a = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            a.push.apply(a, r);
        }
        return a;
      }
      function V(t) {
        for (var e = 1; e < arguments.length; e++) {
          var a = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? N(Object(a), !0).forEach(function(e) {
                D()(t, e, a[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
            : N(Object(a)).forEach(function(e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(a, e),
                );
              });
        }
        return t;
      }
      function $(r) {
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
            var a = F()(this).constructor;
            e = Reflect.construct(t, arguments, a);
          } else e = t.apply(this, arguments);
          return R()(this, e);
        };
      }
      var Q = (function(e) {
        C()(n, e);
        var r = $(n);
        function n() {
          var u;
          y()(this, n);
          for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
            t[a] = arguments[a];
          return (
            (u = r.call.apply(r, [this].concat(t))),
            D()(x()(u), 'state', {
              tableFilter: { name: '', email: '', roleId: u.props.formData.id },
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
            }),
            D()(x()(u), 'columns', [
              { title: '用户名称', dataIndex: 'userName', sorter: !0 },
              { title: '用户邮箱', dataIndex: 'email', sorter: !0 },
              { title: 'phone', dataIndex: 'phone', sorter: !0 },
            ]),
            D()(x()(u), 'handleSearch', function(e) {
              e.roleId = u.props.formData.id;
              var t = V({}, u.state.tablePagination);
              (t.current = 1),
                u.setState({ tableFilter: e, tablePagination: t });
              var a = {
                pageIndex: 1,
                pageSize: u.state.tablePagination.pageSize,
                sortBy: u.state.tableSorter.field,
                descending: 'descend' === u.state.tableSorter.order,
                filter: e,
              };
              u.fetch(a);
            }),
            D()(x()(u), 'handleReset', function() {
              u.setState({ tableFilter: { roleId: u.props.formData.id } });
            }),
            D()(x()(u), 'handleTableChange', function(e, t, a) {
              var r = V({}, u.state.tablePagination);
              (r.current = e.current),
                (r.pageSize = e.pageSize),
                u.setState({
                  tablePagination: r,
                  tableSorter: { field: a.field, order: a.order },
                });
              var n = {
                pageIndex: r.current,
                pageSize: r.pageSize,
                sortBy: a.field,
                descending: 'descend' === a.order,
                filter: u.state.tableFilter,
              };
              u.fetch(n);
            }),
            D()(x()(u), 'refresh', function() {
              var e = {
                pageIndex: u.state.tablePagination.current,
                pageSize: u.state.tablePagination.pageSize,
                sortBy: u.state.tableSorter.field,
                descending: 'descend' === u.state.tableSorter.order,
                filter: u.state.tableFilter,
              };
              u.fetch(e);
            }),
            D()(
              x()(u),
              'fetch',
              b()(
                h.a.mark(function e() {
                  var t,
                    a,
                    r,
                    n,
                    i,
                    o,
                    s,
                    l,
                    d,
                    c = arguments;
                  return h.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = 0 < c.length && void 0 !== c[0] ? c[0] : {}),
                            u.setState({ tableLoading: !0 }),
                            (e.next = 4),
                            Object(I.getAllUser)(t)
                          );
                        case 4:
                          for (
                            a = e.sent,
                              r = a.data,
                              (n = V({}, u.state.tablePagination)).total =
                                r.totalCount,
                              i = r.rows,
                              o = u.props.inRoleUsers,
                              s = [],
                              l = 0;
                            l < i.length;
                            l++
                          )
                            for (s.push(i[l]), d = 0; d < o.length; d++)
                              i[l].id === o[d].id && s.pop(i[l]);
                          u.setState({
                            tableLoading: !1,
                            tablePagedList: s,
                            tablePagination: n,
                          });
                        case 13:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              ),
            ),
            D()(
              x()(u),
              'addUserForRole',
              b()(
                h.a.mark(function e() {
                  var t, a, r;
                  return h.a.wrap(
                    function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((t = u.state.tableSelectedRowKeys),
                              (a = u.props.formData.id),
                              t && t.length)
                            )
                              return (
                                (e.prev = 3),
                                (e.next = 6),
                                Object(I.addUserForRole)({
                                  userIds: t,
                                  roleId: a,
                                })
                              );
                            e.next = 16;
                            break;
                          case 6:
                            return (
                              (r = e.sent),
                              u.setState({ tableSelectedRowKeys: [] }),
                              u.props.editModal.refresh(),
                              u.props.editModal.setState({
                                addUserForRoleModal: !1,
                              }),
                              e.abrupt(
                                'return',
                                T.a.success({
                                  placement: 'bottomLeft bottomRight',
                                  message: r.msg,
                                }),
                              )
                            );
                          case 13:
                            return (
                              (e.prev = 13),
                              (e.t0 = e.catch(3)),
                              e.abrupt(
                                'return',
                                T.a.error({ message: e.t0.msg }),
                              )
                            );
                          case 16:
                            return e.abrupt(
                              'return',
                              T.a.error({ message: '请选择要添加的用户' }),
                            );
                          case 17:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[3, 13]],
                  );
                }),
              ),
            ),
            D()(x()(u), 'onSelectChange', function(e) {
              u.setState({ tableSelectedRowKeys: e });
            }),
            u
          );
        }
        return (
          v()(n, [
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
                  a = 0 < e.length;
                return k.a.createElement(
                  'div',
                  null,
                  k.a.createElement(U.a, {
                    schema: J.searchSchema,
                    uiSchema: J.searchUiSchema,
                    handleSubmit: this.handleSearch,
                    handleReset: this.handleReset,
                  }),
                  k.a.createElement(p.a, null),
                  k.a.createElement(A.a, {
                    addFunc: this.addUserForRole,
                    hasSelected: a,
                    addTitle: '新增用户',
                    removeTitle: '删除用户',
                    addPermission: ['role_user_add'],
                    delPermission: ['role_user_del'],
                  }),
                  k.a.createElement(c.a, {
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
                );
              },
            },
          ]),
          n
        );
      })(k.a.PureComponent);
      Q.propTypes = {
        formData: B.a.object.isRequired,
        inRoleUsers: B.a.array.isRequired,
        editModal: B.a.object.isRequired,
      };
      var G = Q,
        H = a('./src/util/permissionContainer.jsx');
      function W(t, e) {
        var a = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            a.push.apply(a, r);
        }
        return a;
      }
      function X(t) {
        for (var e = 1; e < arguments.length; e++) {
          var a = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? W(Object(a), !0).forEach(function(e) {
                D()(t, e, a[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
            : W(Object(a)).forEach(function(e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(a, e),
                );
              });
        }
        return t;
      }
      function Y(r) {
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
            var a = F()(this).constructor;
            e = Reflect.construct(t, arguments, a);
          } else e = t.apply(this, arguments);
          return R()(this, e);
        };
      }
      var Z = (function(e) {
        C()(n, e);
        var r = Y(n);
        function n() {
          var s;
          y()(this, n);
          for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
            t[a] = arguments[a];
          return (
            (s = r.call.apply(r, [this].concat(t))),
            D()(x()(s), 'state', {
              tableFilter: { name: '', email: '', roleId: s.props.formData.id },
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
              addUserForRoleModal: !1,
            }),
            D()(x()(s), 'columns', [
              { title: '用户名称', dataIndex: 'userName', sorter: !0 },
              { title: '用户邮箱', dataIndex: 'email', sorter: !0 },
              { title: 'phone', dataIndex: 'phone', sorter: !0 },
              {
                title: '操作',
                dataIndex: 'id',
                align: 'center',
                fixed: 'right',
                width: 120,
                render: function(e, t) {
                  return k.a.createElement(
                    H.a,
                    { permission: ['role_user_del'] },
                    k.a.createElement(
                      q.a,
                      {
                        title: '确定删除?',
                        onConfirm: function() {
                          return s.deleteUserForRole(t);
                        },
                      },
                      k.a.createElement('a', null, '删除'),
                    ),
                  );
                },
              },
            ]),
            D()(x()(s), 'handleSearch', function(e) {
              e.roleId = s.props.formData.id;
              var t = X({}, s.state.tablePagination);
              (t.current = 1),
                s.setState({ tableFilter: e, tablePagination: t });
              var a = {
                pageIndex: 1,
                pageSize: s.state.tablePagination.pageSize,
                sortBy: s.state.tableSorter.field,
                descending: 'descend' === s.state.tableSorter.order,
                filter: e,
              };
              s.fetch(a);
            }),
            D()(x()(s), 'handleReset', function() {
              s.setState({ tableFilter: { roleId: s.props.formData.id } });
            }),
            D()(x()(s), 'handleTableChange', function(e, t, a) {
              var r = X({}, s.state.tablePagination);
              (r.current = e.current),
                (r.pageSize = e.pageSize),
                s.setState({
                  tablePagination: r,
                  tableSorter: { field: a.field, order: a.order },
                });
              var n = {
                pageIndex: r.current,
                pageSize: r.pageSize,
                sortBy: a.field,
                descending: 'descend' === a.order,
                filter: s.state.tableFilter,
              };
              s.fetch(n);
            }),
            D()(x()(s), 'onSelectChange', function(e) {
              s.setState({ tableSelectedRowKeys: e });
            }),
            D()(
              x()(s),
              'deleteUserForRole',
              (function() {
                var t = b()(
                  h.a.mark(function e(t) {
                    var a, r, n;
                    return h.a.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (a = []).push(t.id),
                                (r = s.props.formData.id),
                                (e.prev = 4),
                                (e.next = 7),
                                Object(I.delUserForRoleId)({
                                  roleId: r,
                                  userIds: a,
                                })
                              );
                            case 7:
                              (n = e.sent),
                                s.setState({ tableSelectedRowKeys: [] }),
                                T.a.success({
                                  placement: 'bottomLeft bottomRight',
                                  message: n.msg,
                                }),
                                (e.next = 15);
                              break;
                            case 12:
                              (e.prev = 12),
                                (e.t0 = e.catch(4)),
                                T.a.error({ message: e.t0 });
                            case 15:
                              s.refresh();
                            case 16:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[4, 12]],
                    );
                  }),
                );
                return function(e) {
                  return t.apply(this, arguments);
                };
              })(),
            ),
            D()(x()(s), 'refresh', function() {
              var e = {
                pageIndex: s.state.tablePagination.current,
                pageSize: s.state.tablePagination.pageSize,
                sortBy: s.state.tableSorter.field,
                descending: 'descend' === s.state.tableSorter.order,
                filter: s.state.tableFilter,
              };
              s.fetch(e);
            }),
            D()(
              x()(s),
              'fetch',
              b()(
                h.a.mark(function e() {
                  var t,
                    a,
                    r,
                    n,
                    i,
                    o = arguments;
                  return h.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = 0 < o.length && void 0 !== o[0] ? o[0] : {}),
                            s.setState({ tableLoading: !0 }),
                            (e.next = 4),
                            Object(I.getUserFromRole)(t)
                          );
                        case 4:
                          (a = e.sent),
                            (r = a.data),
                            ((n = X({}, s.state.tablePagination)).total =
                              r.totalCount),
                            (i = r.rows),
                            s.setState({
                              tableLoading: !1,
                              tablePagedList: i,
                              tablePagination: n,
                            });
                        case 10:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              ),
            ),
            D()(x()(s), 'addUser', function() {
              (s.editFormData = {}), s.setState({ addUserForRoleModal: !0 });
            }),
            D()(
              x()(s),
              'batchDelUser',
              b()(
                h.a.mark(function e() {
                  var t, a, r;
                  return h.a.wrap(
                    function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t = s.state.tableSelectedRowKeys),
                              (a = s.props.formData.id),
                              (e.prev = 2),
                              (e.next = 5),
                              Object(I.delUserForRoleId)({
                                roleId: a,
                                userIds: t,
                              })
                            );
                          case 5:
                            (r = e.sent),
                              s.setState({ tableSelectedRowKeys: [] }),
                              T.a.success({
                                placement: 'bottomLeft bottomRight',
                                message: r.msg,
                              }),
                              (e.next = 13);
                            break;
                          case 10:
                            (e.prev = 10),
                              (e.t0 = e.catch(2)),
                              T.a.error({ message: e.t0 });
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
            D()(x()(s), 'editModalOnCancel', function() {
              s.setState({ addUserForRoleModal: !1 });
            }),
            s
          );
        }
        return (
          v()(n, [
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
                  a = e.tablePagedList,
                  r = { selectedRowKeys: t, onChange: this.onSelectChange },
                  n = 0 < t.length;
                return k.a.createElement(
                  'div',
                  null,
                  k.a.createElement(U.a, {
                    schema: J.searchSchema,
                    uiSchema: J.searchUiSchema,
                    handleSubmit: this.handleSearch,
                    handleReset: this.handleReset,
                  }),
                  k.a.createElement(p.a, null),
                  k.a.createElement(A.a, {
                    addFunc: this.addUser,
                    onConfirm: this.batchDelUser,
                    hasSelected: n,
                    addTitle: '新增用户',
                    removeTitle: '删除用户',
                    addPermission: ['role_user_add'],
                    delPermission: ['role_user_del'],
                  }),
                  k.a.createElement(c.a, {
                    rowSelection: r,
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
                  k.a.createElement(
                    i.a,
                    {
                      visible: this.state.addUserForRoleModal,
                      width: 1e3,
                      title: k.a.createElement(
                        'span',
                        null,
                        '添加  ',
                        k.a.createElement(
                          l.a,
                          { color: '#2db7f5' },
                          this.props.formData.name,
                        ),
                        ' 下用户',
                      ),
                      onCancel: this.editModalOnCancel,
                      footer: [
                        k.a.createElement(
                          o.a,
                          { key: 'back', onClick: this.editModalOnCancel },
                          '关闭',
                        ),
                      ],
                      destroyOnClose: !0,
                    },
                    k.a.createElement(G, {
                      formData: this.props.formData,
                      inRoleUsers: a,
                      editModal: this,
                    }),
                  ),
                );
              },
            },
          ]),
          n
        );
      })(k.a.PureComponent);
      Z.propTypes = { formData: B.a.object.isRequired };
      var ee = Z;
      function te(t, e) {
        var a = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            a.push.apply(a, r);
        }
        return a;
      }
      function ae(t) {
        for (var e = 1; e < arguments.length; e++) {
          var a = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? te(Object(a), !0).forEach(function(e) {
                D()(t, e, a[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
            : te(Object(a)).forEach(function(e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(a, e),
                );
              });
        }
        return t;
      }
      function re(r) {
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
            var a = F()(this).constructor;
            e = Reflect.construct(t, arguments, a);
          } else e = t.apply(this, arguments);
          return R()(this, e);
        };
      }
      var ne = (function(e) {
        C()(n, e);
        var r = re(n);
        function n() {
          var o;
          y()(this, n);
          for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
            t[a] = arguments[a];
          return (
            (o = r.call.apply(r, [this].concat(t))),
            D()(x()(o), 'state', {
              tableFilter: { name: '', code: '' },
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
              editModalVisible: !1,
            }),
            D()(x()(o), 'columns', [
              { title: '角色名称', dataIndex: 'name', sorter: !0 },
              { title: '角色编码', dataIndex: 'code', sorter: !0 },
              {
                title: '操作',
                dataIndex: 'id',
                fixed: 'right',
                width: 120,
                render: function(e, t) {
                  return k.a.createElement(
                    'div',
                    { style: { textAlign: 'center' } },
                    k.a.createElement(
                      'a',
                      {
                        onClick: function() {
                          return o.editRoleUser(t);
                        },
                      },
                      '用户列表',
                    ),
                  );
                },
              },
            ]),
            D()(x()(o), 'editFormData', {}),
            D()(x()(o), 'handleSearch', function(e) {
              var t = ae({}, o.state.tablePagination);
              (t.current = 1),
                o.setState({ tableFilter: e, tablePagination: t });
              var a = {
                pageIndex: 1,
                pageSize: o.state.tablePagination.pageSize,
                sortBy: o.state.tableSorter.field,
                descending: 'descend' === o.state.tableSorter.order,
                filter: e,
              };
              o.fetch(a);
            }),
            D()(x()(o), 'handleReset', function() {
              o.setState({ tableFilter: {} });
            }),
            D()(x()(o), 'handleTableChange', function(e, t, a) {
              var r = ae({}, o.state.tablePagination);
              (r.current = e.current),
                (r.pageSize = e.pageSize),
                o.setState({
                  tablePagination: r,
                  tableSorter: { field: a.field, order: a.order },
                });
              var n = {
                pageIndex: r.current,
                pageSize: r.pageSize,
                sortBy: a.field,
                descending: 'descend' === a.order,
                filter: o.state.tableFilter,
              };
              o.fetch(n);
            }),
            D()(x()(o), 'editRoleUser', function(e) {
              (o.editFormData = ae({}, e)),
                o.setState({ editModalVisible: !0 });
            }),
            D()(x()(o), 'editModalOnCancel', function() {
              o.setState({ editModalVisible: !1 });
            }),
            D()(x()(o), 'refresh', function() {
              var e = {
                pageIndex: o.state.tablePagination.current,
                pageSize: o.state.tablePagination.pageSize,
                sortBy: o.state.tableSorter.field,
                descending: 'descend' === o.state.tableSorter.order,
                filter: o.state.tableFilter,
              };
              o.fetch(e);
            }),
            D()(
              x()(o),
              'fetch',
              b()(
                h.a.mark(function e() {
                  var t,
                    a,
                    r,
                    n,
                    i = arguments;
                  return h.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = 0 < i.length && void 0 !== i[0] ? i[0] : {}),
                            o.setState({ tableLoading: !0 }),
                            (e.next = 4),
                            Object(I.getRolePagedList)(t)
                          );
                        case 4:
                          (a = e.sent),
                            (r = a.data),
                            ((n = ae({}, o.state.tablePagination)).total =
                              r.totalCount),
                            o.setState({
                              tableLoading: !1,
                              tablePagedList: r.rows,
                              tablePagination: n,
                            });
                        case 9:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              ),
            ),
            o
          );
        }
        return (
          v()(n, [
            {
              key: 'componentDidMount',
              value: function() {
                this.refresh();
              },
            },
            {
              key: 'render',
              value: function() {
                return k.a.createElement(
                  'div',
                  { style: { backgroundColor: '#fff', padding: '18px' } },
                  k.a.createElement(U.a, {
                    schema: z.searchSchema,
                    uiSchema: z.searchUiSchema,
                    handleSubmit: this.handleSearch,
                    handleReset: this.handleReset,
                  }),
                  k.a.createElement(p.a, null),
                  k.a.createElement(c.a, {
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
                  k.a.createElement(
                    i.a,
                    {
                      visible: this.state.editModalVisible,
                      width: 1e3,
                      title: k.a.createElement(
                        'span',
                        null,
                        '编辑角色  ',
                        k.a.createElement(
                          l.a,
                          { color: '#2db7f5' },
                          this.editFormData.name,
                        ),
                        ' 下用户',
                      ),
                      onCancel: this.editModalOnCancel,
                      footer: [
                        k.a.createElement(
                          o.a,
                          { key: 'back', onClick: this.editModalOnCancel },
                          '关闭',
                        ),
                      ],
                      destroyOnClose: !0,
                    },
                    k.a.createElement(ee, { formData: this.editFormData }),
                  ),
                );
              },
            },
          ]),
          n
        );
      })(k.a.Component);
      t.default = ne;
    },
  },
]);
