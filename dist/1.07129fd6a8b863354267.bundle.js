(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
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
        h = n('./node_modules/@babel/runtime/helpers/inherits.js'),
        b = n.n(h),
        g = n(
          './node_modules/@babel/runtime/helpers/possibleConstructorReturn.js',
        ),
        y = n.n(g),
        v = n('./node_modules/@babel/runtime/helpers/getPrototypeOf.js'),
        j = n.n(v),
        S = n('./node_modules/@babel/runtime/helpers/defineProperty.js'),
        R = n.n(S),
        x = n('./node_modules/react/index.js'),
        C = n.n(x),
        w = n('./node_modules/prop-types/index.js'),
        P = n.n(w),
        O = n('./src/util/permissionContainer.jsx');
      function _(r) {
        return function() {
          var e,
            t = j()(r);
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
            var n = j()(this).constructor;
            e = Reflect.construct(t, arguments, n);
          } else e = t.apply(this, arguments);
          return y()(this, e);
        };
      }
      var D = (function(e) {
        b()(i, e);
        var a = _(i);
        function i() {
          var e;
          d()(this, i);
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
      })(C.a.PureComponent);
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
        v = n('./node_modules/react/index.js'),
        j = n.n(v),
        S = n('./node_modules/prop-types/index.js'),
        R = n.n(S),
        x = n('./src/schema/Common/commonFormSchemaUtilPlus.js');
      function C(t, e) {
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
        m()(i, e);
        var a = w(i);
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
                        ? C(Object(n), !0).forEach(function(e) {
                            y()(t, e, n[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            t,
                            Object.getOwnPropertyDescriptors(n),
                          )
                        : C(Object(n)).forEach(function(e) {
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
        m()(i, e);
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
    './src/views/pages/Role/component/index.jsx': function(e, t, n) {
      'use strict';
      n.r(t);
      n('./node_modules/antd/lib/table/style/index.js');
      var r = n('./node_modules/antd/lib/table/index.js'),
        i = n.n(r),
        a =
          (n('./node_modules/antd/lib/divider/style/index.js'),
          n('./node_modules/antd/lib/divider/index.js')),
        o = n.n(a),
        s =
          (n('./node_modules/antd/lib/notification/style/index.js'),
          n('./node_modules/antd/lib/notification/index.js')),
        l = n.n(s),
        c = n('./node_modules/@babel/runtime/regenerator/index.js'),
        d = n.n(c),
        u = n('./node_modules/@babel/runtime/helpers/slicedToArray.js'),
        m = n.n(u),
        p = n('./node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        f = n.n(p),
        h =
          (n('./node_modules/antd/lib/tag/style/index.js'),
          n('./node_modules/antd/lib/tag/index.js')),
        b = n.n(h),
        g = n('./node_modules/@babel/runtime/helpers/classCallCheck.js'),
        y = n.n(g),
        v = n('./node_modules/@babel/runtime/helpers/createClass.js'),
        j = n.n(v),
        S = n('./node_modules/@babel/runtime/helpers/assertThisInitialized.js'),
        R = n.n(S),
        x = n('./node_modules/@babel/runtime/helpers/inherits.js'),
        C = n.n(x),
        w = n(
          './node_modules/@babel/runtime/helpers/possibleConstructorReturn.js',
        ),
        P = n.n(w),
        O = n('./node_modules/@babel/runtime/helpers/getPrototypeOf.js'),
        _ = n.n(O),
        D = n('./node_modules/@babel/runtime/helpers/defineProperty.js'),
        F = n.n(D),
        k = n('./node_modules/react/index.js'),
        E = n.n(k),
        q = n('./src/api/index.js'),
        I = n('./src/schema/Common/SearchForm/SearchForm.js'),
        T = {
          searchSchema: {
            $id: 'role-search-schema',
            title: 'role-search-schema',
            description: 'role-search-schema.',
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
            $id: 'role-edit-schema',
            title: 'role-edit-schema',
            description: 'role-edit-schema.',
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
        L = n('./src/views/pages/Common/CommonModal.jsx'),
        z = n('./src/views/pages/Common/AddRemoveConponent.jsx'),
        M = n('./src/util/permissionContainer.jsx');
      function A(t, e) {
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
      function K(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? A(Object(n), !0).forEach(function(e) {
                F()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : A(Object(n)).forEach(function(e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e),
                );
              });
        }
        return t;
      }
      function V(r) {
        return function() {
          var e,
            t = _()(r);
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
            var n = _()(this).constructor;
            e = Reflect.construct(t, arguments, n);
          } else e = t.apply(this, arguments);
          return P()(this, e);
        };
      }
      var U = (function(e) {
        C()(a, e);
        var r = V(a);
        function a() {
          var c;
          y()(this, a);
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return (
            (c = r.call.apply(r, [this].concat(t))),
            F()(R()(c), 'state', {
              tableFilter: { name: '', code: '' },
              searchFormExpand: !0,
              tableSelectedRowKeys: [],
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
              isEditRole: !1,
            }),
            F()(R()(c), 'columns', [
              { title: '角色名称', dataIndex: 'name', sorter: !0 },
              { title: '角色编码', dataIndex: 'code', sorter: !0 },
              {
                title: '所属部门',
                dataIndex: 'departmentId',
                render: function(e) {
                  return E.a.createElement(
                    b.a,
                    { color: 'green' },
                    c.departmentName(e),
                  );
                },
                sorter: !0,
              },
              { title: '描述', dataIndex: 'description', sorter: !0 },
              {
                title: '操作',
                dataIndex: 'id',
                fixed: 'right',
                width: 120,
                render: function(e, t) {
                  return E.a.createElement(
                    M.a,
                    { permission: ['role_edit'] },
                    E.a.createElement(
                      'div',
                      { style: { textAlign: 'center' } },
                      E.a.createElement(
                        'a',
                        {
                          onClick: function() {
                            c.editRole(t);
                          },
                        },
                        '编辑',
                      ),
                    ),
                  );
                },
              },
            ]),
            F()(R()(c), 'editFormData', {}),
            F()(R()(c), 'departmentList', ''),
            F()(R()(c), 'departmentName', function(t) {
              var e = c.departmentList.data.rows,
                n = '';
              return (
                e.forEach(function(e) {
                  e.id === t && (n = e.name);
                }),
                n
              );
            }),
            F()(
              R()(c),
              'fetch',
              f()(
                d.a.mark(function e() {
                  var t,
                    n,
                    r,
                    a,
                    i,
                    o,
                    s,
                    l = arguments;
                  return d.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = 0 < l.length && void 0 !== l[0] ? l[0] : {}),
                            c.setState({ tableLoading: !0 }),
                            (e.next = 4),
                            Promise.all([
                              Object(q.getRolePagedList)(t),
                              Object(q.getAllDepartment)(),
                            ])
                          );
                        case 4:
                          (n = e.sent),
                            (r = m()(n, 2)),
                            (a = r[0]),
                            (i = r[1]),
                            (c.departmentList = i),
                            (o = a.data),
                            ((s = K({}, c.state.tablePagination)).total =
                              o.totalCount),
                            c.setState({
                              tableLoading: !1,
                              tablePagedList: o.rows,
                              tablePagination: s,
                            });
                        case 13:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              ),
            ),
            F()(R()(c), 'refresh', function() {
              var e = {
                pageIndex: c.state.tablePagination.current,
                pageSize: c.state.tablePagination.pageSize,
                sortBy: c.state.tableSorter.field,
                descending: 'descend' === c.state.tableSorter.order,
                filter: c.state.tableFilter,
              };
              c.fetch(e);
            }),
            F()(R()(c), 'handleSearch', function(e) {
              var t = K({}, c.state.tablePagination);
              (t.current = 1),
                c.setState({ tableFilter: e, tablePagination: t });
              var n = {
                pageIndex: 1,
                pageSize: c.state.tablePagination.pageSize,
                sortBy: c.state.tableSorter.field,
                descending: 'descend' === c.state.tableSorter.order,
                filter: e,
              };
              c.fetch(n);
            }),
            F()(R()(c), 'handleReset', function() {
              c.setState({ tableFilter: {} });
            }),
            F()(R()(c), 'addRole', function() {
              (c.editFormData = {}),
                c.setState({ editModalVisible: !0, isEditRole: !1 });
            }),
            F()(
              R()(c),
              'batchDelRole',
              f()(
                d.a.mark(function e() {
                  var t, n;
                  return d.a.wrap(
                    function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t = c.state.tableSelectedRowKeys.map(function(
                                e,
                              ) {
                                return e.id;
                              })),
                              (n = c.state.tableSelectedRowKeys.map(function(
                                e,
                              ) {
                                return e.departmentId;
                              })),
                              (e.prev = 2),
                              (e.next = 5),
                              Object(q.delRoles)({ ids: t, departmentIds: n })
                            );
                          case 5:
                            c.setState({ tableSelectedRowKeys: [] }),
                              l.a.success({
                                placement: 'bottomLeft bottomRight',
                                message: '删除成功',
                              }),
                              (e.next = 12);
                            break;
                          case 9:
                            (e.prev = 9),
                              (e.t0 = e.catch(2)),
                              l.a.error({ message: e.t0 });
                          case 12:
                            c.refresh();
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
              ),
            ),
            F()(R()(c), 'onSelectChange', function(e, t) {
              c.setState({ tableSelectedRowKeys: t });
            }),
            F()(R()(c), 'editModalOnCancel', function() {
              c.setState({ editModalVisible: !1 });
            }),
            F()(
              R()(c),
              'commonModalSubmit',
              (function() {
                var t = f()(
                  d.a.mark(function e(t) {
                    var n;
                    return d.a.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((n = K({}, c.editFormData, {}, t)),
                                c.state.isEditRole)
                              )
                                return (
                                  (e.prev = 3),
                                  (e.next = 6),
                                  Object(q.editRole)(n)
                                );
                              e.next = 15;
                              break;
                            case 6:
                              c.setState({
                                editModalVisible: !1,
                                isEditRole: !1,
                              }),
                                l.a.success({
                                  placement: 'bottomLeft bottomRight',
                                  message: '保存成功',
                                }),
                                (e.next = 13);
                              break;
                            case 10:
                              (e.prev = 10),
                                (e.t0 = e.catch(3)),
                                l.a.error({ message: e.t0.msg });
                            case 13:
                              e.next = 25;
                              break;
                            case 15:
                              return (
                                (e.prev = 15),
                                (e.next = 18),
                                Object(q.addRole)(n)
                              );
                            case 18:
                              c.setState({ editModalVisible: !1 }),
                                l.a.success({
                                  placement: 'bottomLeft bottomRight',
                                  message: '保存成功',
                                }),
                                (e.next = 25);
                              break;
                            case 22:
                              (e.prev = 22),
                                (e.t1 = e.catch(15)),
                                l.a.error({ message: e.t1.msg });
                            case 25:
                              c.refresh();
                            case 26:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [
                        [3, 10],
                        [15, 22],
                      ],
                    );
                  }),
                );
                return function(e) {
                  return t.apply(this, arguments);
                };
              })(),
            ),
            F()(R()(c), 'editRole', function(e) {
              var t = Object.assign(
                {},
                {
                  id: e.id,
                  name: e.name,
                  code: e.code,
                  departmentId: e.departmentId,
                  description: e.description,
                },
              );
              (c.editFormData = K({}, t)),
                c.setState({ editModalVisible: !0, isEditRole: !0 });
            }),
            F()(R()(c), 'handleTableChange', function(e, t, n) {
              var r = K({}, c.state.tablePagination);
              (r.current = e.current),
                (r.pageSize = e.pageSize),
                c.setState({
                  tablePagination: r,
                  tableSorter: { field: n.field, order: n.order },
                });
              var a = {
                pageIndex: r.current,
                pageSize: r.pageSize,
                sortBy: n.field,
                descending: 'descend' === n.order,
                filter: c.state.tableFilter,
              };
              c.fetch(a);
            }),
            c
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
                var e = this.state.tableSelectedRowKeys,
                  t = {
                    selectedRowKeys: e.map(function(e) {
                      return e.id;
                    }),
                    onChange: this.onSelectChange,
                  },
                  n = 0 < e.length;
                return E.a.createElement(
                  'div',
                  { style: { backgroundColor: '#fff', padding: '18px' } },
                  E.a.createElement(I.a, {
                    schema: T.searchSchema,
                    uiSchema: T.searchUiSchema,
                    handleSubmit: this.handleSearch,
                    handleReset: this.handleReset,
                  }),
                  E.a.createElement(o.a, null),
                  E.a.createElement(z.a, {
                    addFunc: this.addRole,
                    onConfirm: this.batchDelRole,
                    hasSelected: n,
                    addTitle: '新增',
                    removeTitle: '删除',
                    addPermission: ['role_add'],
                    delPermission: ['role_del'],
                  }),
                  E.a.createElement(i.a, {
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
                  E.a.createElement(L.a, {
                    visible: this.state.editModalVisible,
                    title: this.editFormData.id ? '编辑' : '新增',
                    onCancel: this.editModalOnCancel,
                    destroyOnClose: !0,
                    schema: T.editSchema,
                    uiSchema: T.editUiSchema,
                    formData: this.editFormData,
                    handFormSubmit: this.commonModalSubmit,
                  }),
                );
              },
            },
          ]),
          a
        );
      })(E.a.PureComponent);
      t.default = U;
    },
  },
]);
