(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
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
        S = n('./node_modules/@babel/runtime/helpers/defineProperty.js'),
        x = n.n(S),
        C = n('./node_modules/react/index.js'),
        R = n.n(C),
        w = n('./node_modules/prop-types/index.js'),
        P = n.n(w),
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
            x()(f()(e), 'onConfirm', function() {
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
                return R.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  R.a.createElement(
                    O.a,
                    { permission: this.props.addPermission },
                    R.a.createElement(
                      l.a,
                      { type: 'primary', icon: 'plus-square-o', onClick: t },
                      r,
                    ),
                  ),
                  R.a.createElement(s.a, { type: 'vertical' }),
                  i
                    ? R.a.createElement(
                        O.a,
                        { permission: this.props.delPermission },
                        R.a.createElement(
                          o.a,
                          { title: '确定删除?', onConfirm: i },
                          R.a.createElement(
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
      })(R.a.PureComponent);
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
        S = n('./node_modules/prop-types/index.js'),
        x = n.n(S),
        C = n('./src/schema/Common/commonFormSchemaUtilPlus.js');
      function R(t, e) {
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
                        ? R(Object(n), !0).forEach(function(e) {
                            y()(t, e, n[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            t,
                            Object.getOwnPropertyDescriptors(n),
                          )
                        : R(Object(n)).forEach(function(e) {
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
                  i = C.a.getForm(n, r);
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
        schema: x.a.object.isRequired,
        uiSchema: x.a.object.isRequired,
        formData: x.a.object,
        modalSaveFunctionData: x.a.func,
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
        visible: x.a.bool.isRequired,
        title: x.a.string.isRequired,
        schema: x.a.object.isRequired,
        uiSchema: x.a.object.isRequired,
        formData: x.a.object.isRequired,
        handFormSubmit: x.a.func.isRequired,
        onCancel: x.a.func.isRequired,
      };
      t.a = D;
    },
    './src/views/pages/Department/component/index.jsx': function(e, t, n) {
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
        u = n('./node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        m = n.n(u),
        p =
          (n('./node_modules/antd/lib/tag/style/index.js'),
          n('./node_modules/antd/lib/tag/index.js')),
        f = n.n(p),
        h = n('./node_modules/@babel/runtime/helpers/classCallCheck.js'),
        b = n.n(h),
        g = n('./node_modules/@babel/runtime/helpers/createClass.js'),
        y = n.n(g),
        v = n('./node_modules/@babel/runtime/helpers/assertThisInitialized.js'),
        j = n.n(v),
        S = n(
          './node_modules/@babel/runtime/helpers/possibleConstructorReturn.js',
        ),
        x = n.n(S),
        C = n('./node_modules/@babel/runtime/helpers/getPrototypeOf.js'),
        R = n.n(C),
        w = n('./node_modules/@babel/runtime/helpers/inherits.js'),
        P = n.n(w),
        O = n('./node_modules/@babel/runtime/helpers/defineProperty.js'),
        _ = n.n(O),
        D = n('./node_modules/react/index.js'),
        E = n.n(D),
        F = n('./src/api/index.js'),
        k = n('./src/schema/Common/SearchForm/SearchForm.js'),
        q = {
          searchSchema: {
            $id: 'role-search-schema',
            title: 'role-search-schema',
            description: 'role-search-schema.',
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
                placeholder: '名称模糊查询',
              },
              'ui:title': '部门名称',
              'ui:description': '',
            },
            code: {
              'ui:widget': 'input',
              'ui:options': {
                size: 'small',
                type: 'text',
                placeholder: '编码模糊查询',
              },
              'ui:title': '部门编码',
              'ui:description': '',
            },
          },
          editSchema: {
            $id: 'department-add-schema',
            title: 'department-add-schema',
            description: 'department-add-schema',
            type: 'object',
            required: ['name', 'code'],
            properties: {
              id: { type: 'string' },
              name: {
                type: 'string',
                title: '部门名称',
                maxLength: 25,
                minLength: 1,
              },
              code: {
                type: 'string',
                title: '部门编码',
                maxLength: 25,
                minLength: 1,
              },
              parentId: { type: 'string' },
            },
          },
          editUiSchema: {
            name: {
              'ui:widget': 'input',
              'ui:options': { type: 'text', placeholder: '' },
              'ui:rules': [
                { required: !0, message: '请输入部门名称' },
                { whitespace: !0, message: 'no space' },
                { max: 100, message: '最多输入100字符' },
              ],
              'ui:title': '部门名称',
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
                { required: !0, message: '请输入部门编码' },
                { whitespace: !0, message: 'no space' },
                { max: 100, message: '最多输入100字符' },
              ],
              'ui:title': '部门编码',
              'ui:description': '',
              'ui:formItemConfig': {
                hasFeedback: !0,
                labelCol: { span: 6 },
                wrapperCol: { span: 16 },
              },
            },
            parentId: {
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
          },
        },
        I = n('./src/views/pages/Common/CommonModal.jsx'),
        T = n('./src/views/pages/Common/AddRemoveConponent.jsx'),
        M = n('./src/util/permissionContainer.jsx');
      function L(t, e) {
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
      function z(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? L(Object(n), !0).forEach(function(e) {
                _()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : L(Object(n)).forEach(function(e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e),
                );
              });
        }
        return t;
      }
      function A(e) {
        if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (e = (function(e, t) {
              if (!e) return;
              if ('string' == typeof e) return K(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              'Object' === n && e.constructor && (n = e.constructor.name);
              if ('Map' === n || 'Set' === n) return Array.from(n);
              if (
                'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return K(e, t);
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
          a,
          i = !0,
          o = !1;
        return {
          s: function() {
            r = e[Symbol.iterator]();
          },
          n: function() {
            var e = r.next();
            return (i = e.done), e;
          },
          e: function(e) {
            (o = !0), (a = e);
          },
          f: function() {
            try {
              i || null == r.return || r.return();
            } finally {
              if (o) throw a;
            }
          },
        };
      }
      function K(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function V(r) {
        return function() {
          var e,
            t = R()(r);
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
            var n = R()(this).constructor;
            e = Reflect.construct(t, arguments, n);
          } else e = t.apply(this, arguments);
          return x()(this, e);
        };
      }
      var U = (function(e) {
        P()(a, e);
        var r = V(a);
        function a() {
          var o;
          b()(this, a);
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return (
            (o = r.call.apply(r, [this].concat(t))),
            _()(j()(o), 'state', {
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
              isEditModal: !1,
            }),
            _()(j()(o), 'columns', [
              { title: '部门名称', dataIndex: 'name', sorter: !0 },
              { title: '部门编码', dataIndex: 'code', sorter: !0 },
              {
                title: '上级部门',
                dataIndex: 'parentId',
                render: function(e) {
                  return E.a.createElement(
                    f.a,
                    { color: 'green' },
                    o.getNextLevelName(e),
                  );
                },
                sorter: !0,
              },
              {
                title: '操作',
                dataIndex: 'id',
                fixed: 'right',
                width: 120,
                render: function(e, t) {
                  return E.a.createElement(
                    M.a,
                    { permission: ['department_edit'] },
                    E.a.createElement(
                      'div',
                      { style: { textAlign: 'center' } },
                      E.a.createElement(
                        'a',
                        {
                          onClick: function() {
                            o.editRole(t);
                          },
                        },
                        '编辑',
                      ),
                    ),
                  );
                },
              },
            ]),
            _()(j()(o), 'editFormData', {}),
            _()(j()(o), 'getNextLevelName', function(e) {
              var t,
                n = '',
                r = A(o.state.tablePagedList);
              try {
                for (r.s(); !(t = r.n()).done; ) {
                  var a = t.value;
                  a.id === e && (n = a.name);
                }
              } catch (e) {
                r.e(e);
              } finally {
                r.f();
              }
              return n;
            }),
            _()(
              j()(o),
              'fetch',
              m()(
                d.a.mark(function e() {
                  var t,
                    n,
                    r,
                    a,
                    i = arguments;
                  return d.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = 0 < i.length && void 0 !== i[0] ? i[0] : {}),
                            o.setState({ tableLoading: !0 }),
                            (e.next = 4),
                            Object(F.getAllDepartment)(t)
                          );
                        case 4:
                          (n = e.sent),
                            (r = n.data),
                            ((a = z({}, o.state.tablePagination)).total =
                              r.totalCount),
                            o.setState({
                              tableLoading: !1,
                              tablePagedList: r.rows,
                              tablePagination: a,
                            });
                        case 9:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              ),
            ),
            _()(j()(o), 'refresh', function() {
              var e = {
                pageIndex: o.state.tablePagination.current,
                pageSize: o.state.tablePagination.pageSize,
                sortBy: o.state.tableSorter.field,
                descending: 'descend' === o.state.tableSorter.order,
                filter: o.state.tableFilter,
              };
              o.fetch(e);
            }),
            _()(j()(o), 'handleSearch', function(e) {
              var t = z({}, o.state.tablePagination);
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
            _()(j()(o), 'handleReset', function() {
              o.setState({ tableFilter: {} });
            }),
            _()(j()(o), 'addRole', function() {
              (o.editFormData = {}),
                o.setState({ editModalVisible: !0, isEditModal: !1 });
            }),
            _()(
              j()(o),
              'batchDelRole',
              m()(
                d.a.mark(function e() {
                  var t;
                  return d.a.wrap(
                    function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t = o.state.tableSelectedRowKeys),
                              (e.prev = 1),
                              (e.next = 4),
                              Object(F.delDepartment)({ departmentIds: t })
                            );
                          case 4:
                            o.setState({ tableSelectedRowKeys: [] }),
                              l.a.success({
                                placement: 'bottomLeft bottomRight',
                                message: '删除成功',
                              }),
                              (e.next = 11);
                            break;
                          case 8:
                            (e.prev = 8),
                              (e.t0 = e.catch(1)),
                              l.a.error({ message: e.t0 });
                          case 11:
                            o.refresh();
                          case 12:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 8]],
                  );
                }),
              ),
            ),
            _()(j()(o), 'onSelectChange', function(e) {
              o.setState({ tableSelectedRowKeys: e });
            }),
            _()(j()(o), 'editModalOnCancel', function() {
              o.setState({ editModalVisible: !1, isEditModal: !1 });
            }),
            _()(
              j()(o),
              'departmentSubmit',
              (function() {
                var t = m()(
                  d.a.mark(function e(t) {
                    var n;
                    return d.a.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((n = z({}, o.editFormData, {}, t)),
                                o.state.isEditModal)
                              )
                                return (
                                  (e.prev = 2),
                                  (e.next = 5),
                                  Object(F.editDepartment)(n)
                                );
                              e.next = 14;
                              break;
                            case 5:
                              o.setState({
                                editModalVisible: !1,
                                isEditModal: !1,
                              }),
                                l.a.success({
                                  placement: 'bottomLeft bottomRight',
                                  message: '更新成功',
                                }),
                                (e.next = 12);
                              break;
                            case 9:
                              (e.prev = 9),
                                (e.t0 = e.catch(2)),
                                l.a.error({ message: e.t0.msg });
                            case 12:
                              e.next = 24;
                              break;
                            case 14:
                              return (
                                (e.prev = 14),
                                (e.next = 17),
                                Object(F.addDepartment)(n)
                              );
                            case 17:
                              o.setState({
                                editModalVisible: !1,
                                isEditModal: !1,
                              }),
                                l.a.success({
                                  placement: 'bottomLeft bottomRight',
                                  message: '保存成功',
                                }),
                                (e.next = 24);
                              break;
                            case 21:
                              (e.prev = 21),
                                (e.t1 = e.catch(14)),
                                l.a.error({ message: e.t1 });
                            case 24:
                              o.refresh();
                            case 25:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [
                        [2, 9],
                        [14, 21],
                      ],
                    );
                  }),
                );
                return function(e) {
                  return t.apply(this, arguments);
                };
              })(),
            ),
            _()(j()(o), 'editRole', function(e) {
              var t = Object.assign(
                {},
                {
                  id: e.id,
                  name: e.name,
                  code: e.code,
                  parentId: e.parentId,
                  description: e.description,
                },
              );
              (o.editFormData = z({}, t)),
                o.setState({ editModalVisible: !0, isEditModal: !0 });
            }),
            _()(j()(o), 'handleTableChange', function(e, t, n) {
              var r = z({}, o.state.tablePagination);
              (r.current = e.current),
                (r.pageSize = e.pageSize),
                o.setState({
                  tablePagination: r,
                  tableSorter: { field: n.field, order: n.order },
                });
              var a = {
                pageIndex: r.current,
                pageSize: r.pageSize,
                sortBy: n.field,
                descending: 'descend' === n.order,
                filter: o.state.tableFilter,
              };
              o.fetch(a);
            }),
            o
          );
        }
        return (
          y()(a, [
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
                return E.a.createElement(
                  'div',
                  { style: { backgroundColor: '#fff', padding: '18px' } },
                  E.a.createElement(k.a, {
                    schema: q.searchSchema,
                    uiSchema: q.searchUiSchema,
                    handleSubmit: this.handleSearch,
                    handleReset: this.handleReset,
                  }),
                  E.a.createElement(o.a, null),
                  E.a.createElement(T.a, {
                    addFunc: this.addRole,
                    onConfirm: this.batchDelRole,
                    hasSelected: n,
                    addTitle: '新增',
                    removeTitle: '删除',
                    addPermission: ['department_add'],
                    delPermission: ['department_del'],
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
                  E.a.createElement(I.a, {
                    visible: this.state.editModalVisible,
                    title: this.editFormData.id ? '编辑' : '新增',
                    onCancel: this.editModalOnCancel,
                    destroyOnClose: !0,
                    schema: q.editSchema,
                    uiSchema: q.editUiSchema,
                    formData: this.editFormData,
                    handFormSubmit: this.departmentSubmit,
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
