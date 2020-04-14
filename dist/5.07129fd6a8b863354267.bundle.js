(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    './src/views/pages/Common/AddRemoveConponent.jsx': function(e, t, n) {
      'use strict';
      n('./node_modules/antd/lib/popconfirm/style/index.js');
      var r = n('./node_modules/antd/lib/popconfirm/index.js'),
        a = n.n(r),
        i =
          (n('./node_modules/antd/lib/divider/style/index.js'),
          n('./node_modules/antd/lib/divider/index.js')),
        s = n.n(i),
        o =
          (n('./node_modules/antd/lib/button/style/index.js'),
          n('./node_modules/antd/lib/button/index.js')),
        c = n.n(o),
        l = n('./node_modules/@babel/runtime/helpers/classCallCheck.js'),
        u = n.n(l),
        d = n('./node_modules/@babel/runtime/helpers/createClass.js'),
        m = n.n(d),
        p = n('./node_modules/@babel/runtime/helpers/assertThisInitialized.js'),
        f = n.n(p),
        h = n('./node_modules/@babel/runtime/helpers/inherits.js'),
        b = n.n(h),
        y = n(
          './node_modules/@babel/runtime/helpers/possibleConstructorReturn.js',
        ),
        g = n.n(y),
        v = n('./node_modules/@babel/runtime/helpers/getPrototypeOf.js'),
        j = n.n(v),
        S = n('./node_modules/@babel/runtime/helpers/defineProperty.js'),
        w = n.n(S),
        x = n('./node_modules/react/index.js'),
        C = n.n(x),
        R = n('./node_modules/prop-types/index.js'),
        O = n.n(R),
        _ = n('./src/util/permissionContainer.jsx');
      function F(r) {
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
          return g()(this, e);
        };
      }
      var P = (function(e) {
        b()(o, e);
        var i = F(o);
        function o() {
          var e;
          u()(this, o);
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          return (
            (e = i.call.apply(i, [this].concat(n))),
            w()(f()(e), 'onConfirm', function() {
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
                  i = e.removeTitle,
                  o = e.onConfirm;
                return C.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  C.a.createElement(
                    _.a,
                    { permission: this.props.addPermission },
                    C.a.createElement(
                      c.a,
                      { type: 'primary', icon: 'plus-square-o', onClick: t },
                      r,
                    ),
                  ),
                  C.a.createElement(s.a, { type: 'vertical' }),
                  o
                    ? C.a.createElement(
                        _.a,
                        { permission: this.props.delPermission },
                        C.a.createElement(
                          a.a,
                          { title: '确定删除?', onConfirm: o },
                          C.a.createElement(
                            c.a,
                            { type: 'danger', disabled: !n, icon: 'delete' },
                            i,
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
      })(C.a.PureComponent);
      (P.propTypes = {
        addFunc: O.a.func.isRequired,
        onConfirm: O.a.func.isRequired,
        hasSelected: O.a.bool.isRequired,
        addTitle: O.a.string.isRequired,
        removeTitle: O.a.string.isRequired,
        addPermission: O.a.array.isRequired,
        delPermission: O.a.array.isRequired,
      }),
        (t.a = P);
    },
    './src/views/pages/Common/CommonModal.jsx': function(e, t, n) {
      'use strict';
      n('./node_modules/antd/lib/modal/style/index.js');
      var r = n('./node_modules/antd/lib/modal/index.js'),
        a = n.n(r),
        i = n('./node_modules/@babel/runtime/helpers/classCallCheck.js'),
        s = n.n(i),
        o = n('./node_modules/@babel/runtime/helpers/createClass.js'),
        c = n.n(o),
        l = n('./node_modules/@babel/runtime/helpers/assertThisInitialized.js'),
        u = n.n(l),
        d = n('./node_modules/@babel/runtime/helpers/inherits.js'),
        m = n.n(d),
        p = n(
          './node_modules/@babel/runtime/helpers/possibleConstructorReturn.js',
        ),
        f = n.n(p),
        h = n('./node_modules/@babel/runtime/helpers/getPrototypeOf.js'),
        b = n.n(h),
        y = n('./node_modules/@babel/runtime/helpers/defineProperty.js'),
        g = n.n(y),
        v = n('./node_modules/react/index.js'),
        j = n.n(v),
        S = n('./node_modules/prop-types/index.js'),
        w = n.n(S),
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
      function R(r) {
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
      var O = (function(e) {
        m()(o, e);
        var i = R(o);
        function o() {
          var r;
          s()(this, o);
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return (
            (r = i.call.apply(i, [this].concat(t))),
            g()(u()(r), 'commonFormhandleSubmit', function() {
              r.formRef.props.form.validateFields(function(e, t) {
                if (!e) {
                  var n = (function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                      var n = null != arguments[e] ? arguments[e] : {};
                      e % 2
                        ? C(Object(n), !0).forEach(function(e) {
                            g()(t, e, n[e]);
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
            g()(u()(r), 'handleReset', function() {
              r.formRef.props.form.resetFields();
            }),
            r
          );
        }
        return (
          c()(o, [
            {
              key: 'render',
              value: function() {
                var t = this,
                  e = this.props,
                  n = e.schema,
                  r = e.uiSchema,
                  i = e.formData,
                  o = x.a.getForm(n, r);
                return j.a.createElement(
                  'div',
                  null,
                  j.a.createElement(o, {
                    formData: i,
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
      })(j.a.PureComponent);
      O.propTypes = {
        schema: w.a.object.isRequired,
        uiSchema: w.a.object.isRequired,
        formData: w.a.object,
        modalSaveFunctionData: w.a.func,
      };
      var _ = O;
      function F(r) {
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
        var i = F(o);
        function o() {
          var e;
          s()(this, o);
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          return (
            (e = i.call.apply(i, [this].concat(n))),
            g()(u()(e), 'onCancel', function() {
              e.props.onCancel();
            }),
            g()(u()(e), 'onOk', function() {
              e.editForm.commonFormhandleSubmit();
            }),
            e
          );
        }
        return (
          c()(o, [
            {
              key: 'render',
              value: function() {
                var t = this;
                return j.a.createElement(
                  a.a,
                  {
                    visible: this.props.visible,
                    cancelText: '关闭',
                    okText: '提交',
                    title: this.props.title,
                    onCancel: this.onCancel,
                    onOk: this.onOk,
                    destroyOnClose: !0,
                  },
                  j.a.createElement(_, {
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
      })(j.a.PureComponent);
      P.propTypes = {
        visible: w.a.bool.isRequired,
        title: w.a.string.isRequired,
        schema: w.a.object.isRequired,
        uiSchema: w.a.object.isRequired,
        formData: w.a.object.isRequired,
        handFormSubmit: w.a.func.isRequired,
        onCancel: w.a.func.isRequired,
      };
      t.a = P;
    },
    './src/views/pages/Function/index.jsx': function(e, t, n) {
      'use strict';
      n.r(t);
      n('./node_modules/antd/lib/table/style/index.js');
      var r = n('./node_modules/antd/lib/table/index.js'),
        o = n.n(r),
        i =
          (n('./node_modules/antd/lib/divider/style/index.js'),
          n('./node_modules/antd/lib/divider/index.js')),
        a = n.n(i),
        s =
          (n('./node_modules/antd/lib/notification/style/index.js'),
          n('./node_modules/antd/lib/notification/index.js')),
        c = n.n(s),
        l = n('./node_modules/@babel/runtime/regenerator/index.js'),
        u = n.n(l),
        d = n('./node_modules/@babel/runtime/helpers/slicedToArray.js'),
        m = n.n(d),
        p = n('./node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        f = n.n(p),
        h =
          (n('./node_modules/antd/lib/tag/style/index.js'),
          n('./node_modules/antd/lib/tag/index.js')),
        b = n.n(h),
        y = n('./node_modules/@babel/runtime/helpers/classCallCheck.js'),
        g = n.n(y),
        v = n('./node_modules/@babel/runtime/helpers/createClass.js'),
        j = n.n(v),
        S = n('./node_modules/@babel/runtime/helpers/assertThisInitialized.js'),
        w = n.n(S),
        x = n('./node_modules/@babel/runtime/helpers/inherits.js'),
        C = n.n(x),
        R = n(
          './node_modules/@babel/runtime/helpers/possibleConstructorReturn.js',
        ),
        O = n.n(R),
        _ = n('./node_modules/@babel/runtime/helpers/getPrototypeOf.js'),
        F = n.n(_),
        P = n('./node_modules/@babel/runtime/helpers/defineProperty.js'),
        D = n.n(P),
        k = n('./node_modules/react/index.js'),
        E = n.n(k),
        I = n('./src/api/index.js'),
        M = n('./src/schema/Common/SearchForm/SearchForm.js'),
        A = n('./src/views/pages/Common/CommonModal.jsx'),
        q = n('./src/views/pages/Common/AddRemoveConponent.jsx');
      function T(e) {
        if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (e = (function(e, t) {
              if (!e) return;
              if ('string' == typeof e) return z(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              'Object' === n && e.constructor && (n = e.constructor.name);
              if ('Map' === n || 'Set' === n) return Array.from(n);
              if (
                'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return z(e, t);
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
          o = !0,
          a = !1;
        return {
          s: function() {
            r = e[Symbol.iterator]();
          },
          n: function() {
            var e = r.next();
            return (o = e.done), e;
          },
          e: function(e) {
            (a = !0), (i = e);
          },
          f: function() {
            try {
              o || null == r.return || r.return();
            } finally {
              if (a) throw i;
            }
          },
        };
      }
      function z(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var L = {
          searchSchema: {
            $id: 'function-search-schema',
            title: 'function-search-schema',
            description: 'function-search-schema.',
            type: 'object',
            required: [],
            properties: {
              name: { type: 'string', title: '功能名称' },
              code: { type: 'string', title: '功能编码' },
            },
            formLayout: { layout: 'inline' },
          },
          searchUiSchema: {
            name: {
              'ui:widget': 'input',
              'ui:options': {
                size: 'small',
                type: 'text',
                placeholder: '功能模糊查询',
              },
              'ui:title': '功能名称',
              'ui:description': '',
            },
            code: {
              'ui:widget': 'input',
              'ui:options': {
                size: 'small',
                type: 'text',
                placeholder: '编码模糊查询',
              },
              'ui:title': ' 功能编码',
              'ui:description': '',
            },
          },
          editSchema: {
            $id: 'function-edit-schema',
            title: 'function-edit-schema',
            description: 'function-edit-schema.',
            type: 'object',
            required: ['moduleId', 'name', 'code'],
            properties: {
              id: { type: 'string' },
              moduleId: {
                type: 'string',
                title: '模块Id',
                description: '相关菜单模块',
              },
              module: { type: 'string', title: '模块名称' },
              name: {
                type: 'string',
                title: '功能名称',
                maxLength: 25,
                minLength: 1,
              },
              code: {
                type: 'string',
                title: '功能编码',
                maxLength: 25,
                minLength: 1,
              },
              description: {
                type: 'string',
                title: '功能描述',
                maxLength: 300,
              },
            },
          },
          editUiSchema: {
            name: {
              'ui:widget': 'input',
              'ui:options': { type: 'text', placeholder: '' },
              'ui:rules': [
                { required: !0, message: '请输入功能名称' },
                { max: 100, message: '最多输入100字符' },
                { whitespace: !0, message: '输入的文字不能有空格' },
              ],
              'ui:title': '功能名称',
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
                { required: !0, message: '请输入功能编码' },
                { max: 100, message: '最多输入100字符' },
                { whitespace: !0, message: '输入的文字不能有空格' },
              ],
              'ui:title': '功能编码',
              'ui:description': '',
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
                { whitespace: !0, message: 'no space' },
                { max: 300, message: '最多输入300字符!' },
              ],
              'ui:title': '功能描述',
              'ui:description': '',
              'ui:formItemConfig': {
                hasFeedback: !0,
                labelCol: { span: 6 },
                wrapperCol: { span: 16 },
              },
            },
            moduleId: {
              'ui:widget': 'treeSelect',
              'ui:options': { disabled: !1, treeData: [] },
              'ui:rules': [{ required: !0, message: '请选择模块!' }],
              'ui:remoteConfig': {
                apiKey: 'getAllMenuWithFunction',
                hand: function(e) {
                  return (function e(t) {
                    var n,
                      r = T(t);
                    try {
                      for (r.s(); !(n = r.n()).done; ) {
                        var i = n.value;
                        (i.value = i.id),
                          (i.key = i._id),
                          (i.selectable = !0),
                          i.moduleId &&
                            ((i.selectable = !1), (i.title = i.name)),
                          i.children && e(i.children);
                      }
                    } catch (e) {
                      r.e(e);
                    } finally {
                      r.f();
                    }
                    return t;
                  })(e);
                },
              },
              'ui:title': '模块',
              'ui:formItemConfig': {
                hasFeedback: !0,
                label: '模块',
                labelCol: { span: 6 },
                wrapperCol: { span: 16 },
              },
            },
          },
        },
        U = n('./src/util/permissionContainer.jsx');
      function K(t, e) {
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
      function V(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? K(Object(n), !0).forEach(function(e) {
                D()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : K(Object(n)).forEach(function(e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e),
                );
              });
        }
        return t;
      }
      function B(e) {
        if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (e = (function(e, t) {
              if (!e) return;
              if ('string' == typeof e) return $(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              'Object' === n && e.constructor && (n = e.constructor.name);
              if ('Map' === n || 'Set' === n) return Array.from(n);
              if (
                'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return $(e, t);
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
          o = !0,
          a = !1;
        return {
          s: function() {
            r = e[Symbol.iterator]();
          },
          n: function() {
            var e = r.next();
            return (o = e.done), e;
          },
          e: function(e) {
            (a = !0), (i = e);
          },
          f: function() {
            try {
              o || null == r.return || r.return();
            } finally {
              if (a) throw i;
            }
          },
        };
      }
      function $(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function J(r) {
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
          return O()(this, e);
        };
      }
      var N = (function(e) {
        C()(i, e);
        var r = J(i);
        function i() {
          var l;
          g()(this, i);
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return (
            (l = r.call.apply(r, [this].concat(t))),
            D()(w()(l), 'state', {
              filter: { name: '', code: '' },
              selectedRowKeys: [],
              pagedList: [],
              pagination: {
                current: 1,
                pageSize: 10,
                showQuickJumper: !0,
                showSizeChanger: !0,
                showTotal: function(e) {
                  return 'Total '.concat(e, ' items');
                },
              },
              sorter: { field: '', order: '' },
              loading: !1,
              commonModalVisible: !1,
              isModalEdit: !1,
            }),
            D()(w()(l), 'columns', [
              {
                title: '模块名称',
                dataIndex: 'module',
                render: function(e, t) {
                  return E.a.createElement(
                    b.a,
                    { color: 'green' },
                    l.getMoudleName(t.moduleId),
                  );
                },
                sorter: !0,
              },
              { title: '功能名称', dataIndex: 'name', sorter: !0 },
              { title: '功能编码', dataIndex: 'code', sorter: !0 },
              {
                title: '操作',
                dataIndex: 'id',
                fixed: 'right',
                width: 120,
                render: function(e, t) {
                  return E.a.createElement(
                    U.a,
                    { permission: ['function_edit'] },
                    E.a.createElement(
                      'div',
                      { style: { textAlign: 'center' } },
                      E.a.createElement(
                        'a',
                        {
                          onClick: function() {
                            return l.editFunction(t);
                          },
                        },
                        '编辑',
                      ),
                    ),
                  );
                },
              },
            ]),
            D()(w()(l), 'editFormData', {}),
            D()(w()(l), 'menuList', ''),
            D()(w()(l), 'getMoudleName', function(e) {
              return (function(e, t) {
                var n,
                  r = B(e);
                try {
                  for (r.s(); !(n = r.n()).done; ) {
                    var i = n.value;
                    if (i.id === t) return i.title;
                  }
                } catch (e) {
                  r.e(e);
                } finally {
                  r.f();
                }
                return '';
              })(l.menuList, e);
            }),
            D()(
              w()(l),
              'fetch',
              f()(
                u.a.mark(function e() {
                  var t,
                    n,
                    r,
                    i,
                    o,
                    a,
                    s,
                    c = arguments;
                  return u.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = 0 < c.length && void 0 !== c[0] ? c[0] : {}),
                            l.setState({ loading: !0 }),
                            (e.next = 4),
                            Promise.all([
                              Object(I.getFunctionPagedList)(t),
                              Object(I.getAllMenu)(),
                            ])
                          );
                        case 4:
                          (n = e.sent),
                            (r = m()(n, 2)),
                            (i = r[0]),
                            (o = r[1]),
                            (a = i.data),
                            ((s = V({}, l.state.pagination)).total =
                              a.totalCount),
                            (l.menuList = o.data.rows),
                            l.setState({
                              loading: !1,
                              pagedList: a.rows,
                              pagination: s,
                            });
                        case 13:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              ),
            ),
            D()(w()(l), 'refresh', function() {
              var e = {
                pageIndex: l.state.pagination.current,
                pageSize: l.state.pagination.pageSize,
                sortBy: l.state.sorter.field,
                descending: 'descend' === l.state.sorter.order,
                filter: l.state.filter,
              };
              l.fetch(e);
            }),
            D()(w()(l), 'handleTableChange', function(e, t, n) {
              var r = V({}, l.state.pagination);
              (r.current = e.current),
                (r.pageSize = e.pageSize),
                l.setState({
                  pagination: r,
                  sorter: { field: n.field, order: n.order },
                });
              var i = {
                pageIndex: r.current,
                pageSize: r.pageSize,
                sortBy: n.field,
                descending: 'descend' === n.order,
                filter: l.state.filter,
              };
              l.fetch(i);
            }),
            D()(w()(l), 'handleSearch', function(e) {
              var t = V({}, l.state.pagination);
              (t.current = 1), l.setState({ filter: e, pagination: t });
              var n = {
                pageIndex: 1,
                pageSize: l.state.pagination.pageSize,
                sortBy: l.state.sorter.field,
                descending: 'descend' === l.state.sorter.order,
                filter: e,
              };
              l.fetch(n);
            }),
            D()(w()(l), 'handleReset', function() {
              l.setState({ filter: {} });
            }),
            D()(w()(l), 'onSelectChange', function(e) {
              l.setState({ selectedRowKeys: e });
            }),
            D()(
              w()(l),
              'batchDelFunction',
              f()(
                u.a.mark(function e() {
                  var t;
                  return u.a.wrap(
                    function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t = l.state.selectedRowKeys),
                              (e.prev = 1),
                              (e.next = 4),
                              Object(I.delFunctions)({ ids: t })
                            );
                          case 4:
                            l.setState({
                              selectedRowKeys: [],
                              isModalEdit: !1,
                            }),
                              c.a.success({
                                placement: 'bottomLeft bottomRight',
                                message: '删除成功',
                              }),
                              (e.next = 11);
                            break;
                          case 8:
                            (e.prev = 8),
                              (e.t0 = e.catch(1)),
                              c.a.error({ message: e.t0 });
                          case 11:
                            l.refresh();
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
            D()(w()(l), 'addFunction', function() {
              (l.editFormData = {}),
                (L.editUiSchema.moduleId['ui:options'].disabled = !1),
                (L.editUiSchema.moduleId['ui:remoteConfig'] = {
                  apiKey: 'getAllMenuWithFunction',
                  hand: function(e) {
                    return (function e(t) {
                      var n,
                        r = B(t);
                      try {
                        for (r.s(); !(n = r.n()).done; ) {
                          var i = n.value;
                          (i.value = i.id),
                            (i.key = i._id),
                            (i.selectable = !0),
                            (i.disabled = !1),
                            i.moduleId &&
                              ((i.selectable = !1), (i.disabled = !0)),
                            i.children && e(i.children);
                        }
                      } catch (e) {
                        r.e(e);
                      } finally {
                        r.f();
                      }
                      return t;
                    })(e);
                  },
                }),
                l.setState({ commonModalVisible: !0, isModalEdit: !1 });
            }),
            D()(
              w()(l),
              'editFunction',
              (function() {
                var t = f()(
                  u.a.mark(function e(t) {
                    var n;
                    return u.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            (L.editUiSchema.moduleId[
                              'ui:options'
                            ].disabled = !0),
                              (L.editUiSchema.moduleId['ui:remoteConfig'] = ''),
                              (n = Object.assign(
                                {},
                                {
                                  name: t.name,
                                  code: t.code,
                                  description: t.description,
                                  moduleId: t.moduleId,
                                  id: t.id,
                                },
                              )),
                              (l.editFormData = V({}, n)),
                              l.setState({
                                commonModalVisible: !0,
                                isModalEdit: !0,
                              });
                          case 5:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                return function(e) {
                  return t.apply(this, arguments);
                };
              })(),
            ),
            D()(
              w()(l),
              'modalSubmit',
              (function() {
                var t = f()(
                  u.a.mark(function e(t) {
                    var n;
                    return u.a.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((n = V({}, l.editFormData, {}, t)),
                                l.state.isModalEdit)
                              ) {
                                e.next = 14;
                                break;
                              }
                              return (
                                (e.prev = 2),
                                (e.next = 5),
                                Object(I.addFunction)(n)
                              );
                            case 5:
                              l.setState({ commonModalVisible: !1 }),
                                c.a.success({
                                  placement: 'bottomLeft bottomRight',
                                  message: '保存成功',
                                }),
                                (e.next = 12);
                              break;
                            case 9:
                              (e.prev = 9),
                                (e.t0 = e.catch(2)),
                                c.a.error({ message: e.t0.msg });
                            case 12:
                              e.next = 24;
                              break;
                            case 14:
                              return (
                                (e.prev = 14),
                                (e.next = 17),
                                Object(I.editFunction)(n)
                              );
                            case 17:
                              l.setState({
                                commonModalVisible: !1,
                                isModalEdit: !1,
                              }),
                                c.a.success({
                                  placement: 'bottomLeft bottomRight',
                                  message: '保存成功',
                                }),
                                (e.next = 24);
                              break;
                            case 21:
                              (e.prev = 21),
                                (e.t1 = e.catch(14)),
                                c.a.error({ message: e.t1.msg });
                            case 24:
                              l.refresh();
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
            D()(w()(l), 'modalOnCancel', function() {
              l.setState({ commonModalVisible: !1, isModalEdit: !1 });
            }),
            l
          );
        }
        return (
          j()(i, [
            {
              key: 'componentDidMount',
              value: function() {
                this.refresh();
              },
            },
            {
              key: 'render',
              value: function() {
                var e = this.state.selectedRowKeys,
                  t = { selectedRowKeys: e, onChange: this.onSelectChange },
                  n = 0 < e.length;
                return E.a.createElement(
                  'div',
                  { style: { backgroundColor: '#fff', padding: '18px' } },
                  E.a.createElement(M.a, {
                    schema: L.searchSchema,
                    uiSchema: L.searchUiSchema,
                    handleSubmit: this.handleSearch,
                    handleReset: this.handleReset,
                  }),
                  E.a.createElement(a.a, null),
                  E.a.createElement(
                    'div',
                    { style: { marginBottom: 16 } },
                    E.a.createElement(q.a, {
                      addFunc: this.addFunction,
                      onConfirm: this.batchDelFunction,
                      hasSelected: n,
                      addTitle: '新增',
                      removeTitle: '删除',
                      addPermission: ['function_add'],
                      delPermission: ['function_del'],
                    }),
                  ),
                  E.a.createElement(o.a, {
                    rowSelection: t,
                    columns: this.columns,
                    rowKey: function(e) {
                      return e.id;
                    },
                    dataSource: this.state.pagedList,
                    pagination: this.state.pagination,
                    loading: this.state.loading,
                    onChange: this.handleTableChange,
                    scroll: { x: 768 },
                    size: 'small',
                    bordered: !0,
                  }),
                  E.a.createElement(A.a, {
                    visible: this.state.commonModalVisible,
                    title: this.editFormData.id ? '编辑' : '新增',
                    onCancel: this.modalOnCancel,
                    destroyOnClose: !0,
                    schema: L.editSchema,
                    uiSchema: L.editUiSchema,
                    formData: this.editFormData,
                    handFormSubmit: this.modalSubmit,
                  }),
                );
              },
            },
          ]),
          i
        );
      })(E.a.PureComponent);
      t.default = N;
    },
  },
]);
