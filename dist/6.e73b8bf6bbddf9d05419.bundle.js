(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    './src/views/pages/Common/AddRemoveConponent.jsx': function(e, t, i) {
      'use strict';
      i('./node_modules/antd/lib/popconfirm/style/index.js');
      var o = i('./node_modules/antd/lib/popconfirm/index.js'),
        l = i.n(o),
        n =
          (i('./node_modules/antd/lib/divider/style/index.js'),
          i('./node_modules/antd/lib/divider/index.js')),
        a = i.n(n),
        r =
          (i('./node_modules/antd/lib/button/style/index.js'),
          i('./node_modules/antd/lib/button/index.js')),
        c = i.n(r),
        s = i('./node_modules/@babel/runtime/helpers/classCallCheck.js'),
        u = i.n(s),
        d = i('./node_modules/@babel/runtime/helpers/createClass.js'),
        p = i.n(d),
        m = i('./node_modules/@babel/runtime/helpers/assertThisInitialized.js'),
        f = i.n(m),
        h = i(
          './node_modules/@babel/runtime/helpers/possibleConstructorReturn.js',
        ),
        b = i.n(h),
        g = i('./node_modules/@babel/runtime/helpers/getPrototypeOf.js'),
        w = i.n(g),
        y = i('./node_modules/@babel/runtime/helpers/inherits.js'),
        v = i.n(y),
        k = i('./node_modules/@babel/runtime/helpers/defineProperty.js'),
        x = i.n(k),
        j = i('./node_modules/react/index.js'),
        C = i.n(j),
        q = i('./node_modules/prop-types/index.js'),
        S = i.n(q),
        R = i('./src/util/permissionContainer.jsx');
      function O(o) {
        return function() {
          var e,
            t = w()(o);
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
            var i = w()(this).constructor;
            e = Reflect.construct(t, arguments, i);
          } else e = t.apply(this, arguments);
          return b()(this, e);
        };
      }
      var _ = (function(e) {
        v()(r, e);
        var n = O(r);
        function r() {
          var e;
          u()(this, r);
          for (var t = arguments.length, i = new Array(t), o = 0; o < t; o++)
            i[o] = arguments[o];
          return (
            (e = n.call.apply(n, [this].concat(i))),
            x()(f()(e), 'onConfirm', function() {
              return !!e.props.hasSelected && e.props.onConfirm;
            }),
            e
          );
        }
        return (
          p()(r, [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.addFunc,
                  i = e.hasSelected,
                  o = e.addTitle,
                  n = e.removeTitle,
                  r = e.onConfirm;
                return C.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  C.a.createElement(
                    R.a,
                    { permission: this.props.addPermission },
                    C.a.createElement(
                      c.a,
                      { type: 'primary', icon: 'plus-square-o', onClick: t },
                      o,
                    ),
                  ),
                  C.a.createElement(a.a, { type: 'vertical' }),
                  r
                    ? C.a.createElement(
                        R.a,
                        { permission: this.props.delPermission },
                        C.a.createElement(
                          l.a,
                          { title: '确定删除?', onConfirm: r },
                          C.a.createElement(
                            c.a,
                            { type: 'danger', disabled: !i, icon: 'delete' },
                            n,
                          ),
                        ),
                      )
                    : '',
                );
              },
            },
          ]),
          r
        );
      })(C.a.PureComponent);
      (_.propTypes = {
        addFunc: S.a.func.isRequired,
        onConfirm: S.a.func.isRequired,
        hasSelected: S.a.bool.isRequired,
        addTitle: S.a.string.isRequired,
        removeTitle: S.a.string.isRequired,
        addPermission: S.a.array.isRequired,
        delPermission: S.a.array.isRequired,
      }),
        (t.a = _);
    },
    './src/views/pages/Common/CommonModal.jsx': function(e, t, i) {
      'use strict';
      i('./node_modules/antd/lib/modal/style/index.js');
      var o = i('./node_modules/antd/lib/modal/index.js'),
        l = i.n(o),
        n = i('./node_modules/@babel/runtime/helpers/classCallCheck.js'),
        a = i.n(n),
        r = i('./node_modules/@babel/runtime/helpers/createClass.js'),
        c = i.n(r),
        s = i('./node_modules/@babel/runtime/helpers/assertThisInitialized.js'),
        u = i.n(s),
        d = i(
          './node_modules/@babel/runtime/helpers/possibleConstructorReturn.js',
        ),
        p = i.n(d),
        m = i('./node_modules/@babel/runtime/helpers/getPrototypeOf.js'),
        f = i.n(m),
        h = i('./node_modules/@babel/runtime/helpers/inherits.js'),
        b = i.n(h),
        g = i('./node_modules/@babel/runtime/helpers/defineProperty.js'),
        w = i.n(g),
        y = i('./node_modules/react/index.js'),
        v = i.n(y),
        k = i('./node_modules/prop-types/index.js'),
        x = i.n(k),
        j = i('./src/schema/Common/commonFormSchemaUtilPlus.js');
      function C(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          e &&
            (o = o.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            i.push.apply(i, o);
        }
        return i;
      }
      function q(o) {
        return function() {
          var e,
            t = f()(o);
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
            var i = f()(this).constructor;
            e = Reflect.construct(t, arguments, i);
          } else e = t.apply(this, arguments);
          return p()(this, e);
        };
      }
      var S = (function(e) {
        b()(r, e);
        var n = q(r);
        function r() {
          var o;
          a()(this, r);
          for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
            t[i] = arguments[i];
          return (
            (o = n.call.apply(n, [this].concat(t))),
            w()(u()(o), 'commonFormhandleSubmit', function() {
              o.formRef.props.form.validateFields(function(e, t) {
                if (!e) {
                  var i = (function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                      var i = null != arguments[e] ? arguments[e] : {};
                      e % 2
                        ? C(Object(i), !0).forEach(function(e) {
                            w()(t, e, i[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            t,
                            Object.getOwnPropertyDescriptors(i),
                          )
                        : C(Object(i)).forEach(function(e) {
                            Object.defineProperty(
                              t,
                              e,
                              Object.getOwnPropertyDescriptor(i, e),
                            );
                          });
                    }
                    return t;
                  })({}, t);
                  o.props.modalSaveFunctionData(i);
                }
              });
            }),
            w()(u()(o), 'handleReset', function() {
              o.formRef.props.form.resetFields();
            }),
            o
          );
        }
        return (
          c()(r, [
            {
              key: 'render',
              value: function() {
                var t = this,
                  e = this.props,
                  i = e.schema,
                  o = e.uiSchema,
                  n = e.formData,
                  r = j.a.getForm(i, o);
                return v.a.createElement(
                  'div',
                  null,
                  v.a.createElement(r, {
                    formData: n,
                    wrappedComponentRef: function(e) {
                      t.formRef = e;
                    },
                  }),
                );
              },
            },
          ]),
          r
        );
      })(v.a.PureComponent);
      S.propTypes = {
        schema: x.a.object.isRequired,
        uiSchema: x.a.object.isRequired,
        formData: x.a.object,
        modalSaveFunctionData: x.a.func,
      };
      var R = S;
      function O(o) {
        return function() {
          var e,
            t = f()(o);
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
            var i = f()(this).constructor;
            e = Reflect.construct(t, arguments, i);
          } else e = t.apply(this, arguments);
          return p()(this, e);
        };
      }
      var _ = (function(e) {
        b()(r, e);
        var n = O(r);
        function r() {
          var e;
          a()(this, r);
          for (var t = arguments.length, i = new Array(t), o = 0; o < t; o++)
            i[o] = arguments[o];
          return (
            (e = n.call.apply(n, [this].concat(i))),
            w()(u()(e), 'onCancel', function() {
              e.props.onCancel();
            }),
            w()(u()(e), 'onOk', function() {
              e.editForm.commonFormhandleSubmit();
            }),
            e
          );
        }
        return (
          c()(r, [
            {
              key: 'render',
              value: function() {
                var t = this;
                return v.a.createElement(
                  l.a,
                  {
                    visible: this.props.visible,
                    cancelText: '关闭',
                    okText: '提交',
                    title: this.props.title,
                    onCancel: this.onCancel,
                    onOk: this.onOk,
                    destroyOnClose: !0,
                  },
                  v.a.createElement(R, {
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
          r
        );
      })(v.a.PureComponent);
      _.propTypes = {
        visible: x.a.bool.isRequired,
        title: x.a.string.isRequired,
        schema: x.a.object.isRequired,
        uiSchema: x.a.object.isRequired,
        formData: x.a.object.isRequired,
        handFormSubmit: x.a.func.isRequired,
        onCancel: x.a.func.isRequired,
      };
      t.a = _;
    },
    './src/views/pages/Menu/index.jsx': function(e, t, i) {
      'use strict';
      i.r(t);
      i('./node_modules/antd/lib/table/style/index.js');
      var o = i('./node_modules/antd/lib/table/index.js'),
        r = i.n(o),
        n =
          (i('./node_modules/antd/lib/divider/style/index.js'),
          i('./node_modules/antd/lib/divider/index.js')),
        l = i.n(n),
        a =
          (i('./node_modules/antd/lib/notification/style/index.js'),
          i('./node_modules/antd/lib/notification/index.js')),
        c = i.n(a),
        s = i('./node_modules/@babel/runtime/regenerator/index.js'),
        u = i.n(s),
        d = i('./node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        p = i.n(d),
        m =
          (i('./node_modules/antd/lib/badge/style/index.js'),
          i('./node_modules/antd/lib/badge/index.js')),
        f = i.n(m),
        h =
          (i('./node_modules/antd/lib/tag/style/index.js'),
          i('./node_modules/antd/lib/tag/index.js')),
        b = i.n(h),
        g = i('./node_modules/@babel/runtime/helpers/classCallCheck.js'),
        w = i.n(g),
        y = i('./node_modules/@babel/runtime/helpers/createClass.js'),
        v = i.n(y),
        k = i('./node_modules/@babel/runtime/helpers/assertThisInitialized.js'),
        x = i.n(k),
        j = i(
          './node_modules/@babel/runtime/helpers/possibleConstructorReturn.js',
        ),
        C = i.n(j),
        q = i('./node_modules/@babel/runtime/helpers/getPrototypeOf.js'),
        S = i.n(q),
        R = i('./node_modules/@babel/runtime/helpers/inherits.js'),
        O = i.n(R),
        _ = i('./node_modules/@babel/runtime/helpers/defineProperty.js'),
        E = i.n(_),
        D = i('./node_modules/react/index.js'),
        P = i.n(D),
        F = i('./src/api/index.js'),
        I = i('./src/schema/Common/SearchForm/SearchForm.js'),
        M = i('./src/util/util.js'),
        T = M.a.treeData,
        z = M.a.iconTreeData,
        L = JSON.parse(localStorage.getItem('accessMenu'));
      L.push({ title: '根菜单', id: '0' });
      var A = {
          searchSchema: {
            $id: 'menu-search-schema',
            title: 'menu-search-schema',
            description: 'menu-search-schema.',
            type: 'object',
            required: [],
            properties: { title: { type: 'string', title: '菜单名称' } },
            formLayout: { layout: 'inline' },
          },
          searchUiSchema: {
            title: {
              'ui:widget': 'input',
              'ui:options': {
                size: 'small',
                type: 'text',
                placeholder: '名称模糊查询',
              },
              'ui:title': '菜单名称',
              'ui:description': '',
            },
          },
          editSchema: {
            $id: 'menu-edit-schema',
            title: 'menu-edit-schema',
            description: 'menu-edit-schema.',
            type: 'object',
            required: [],
            properties: {
              title: {
                type: 'string',
                title: '菜单名称',
                maxLength: 25,
                minLength: 1,
              },
              functionCode: {
                type: 'string',
                title: '菜单编码',
                maxLength: 25,
                minLength: 1,
              },
            },
          },
          editUiSchema: {
            title: {
              'ui:widget': 'input',
              'ui:options': {
                type: 'text',
                options: { title: 'songtisnen' },
                placeholder: '',
              },
              'ui:rules': [
                { required: !0, message: '请输入角色编码' },
                { whitespace: !0, message: 'no space' },
                { max: 100, message: '最多输入100字符' },
              ],
              'ui:title': '菜单title',
              'ui:description': '',
              'ui:formItemConfig': {
                hasFeedback: !0,
                labelCol: { span: 6 },
                wrapperCol: { span: 16 },
              },
            },
            name: {
              'ui:widget': 'input',
              'ui:options': { type: 'text', placeholder: '' },
              'ui:rules': [
                { required: !0, message: '请输入角色名称' },
                { whitespace: !0, message: 'no space' },
                { max: 100, message: '最多输入100字符' },
              ],
              'ui:title': '菜单名称',
              'ui:description': '',
              'ui:formItemConfig': {
                hasFeedback: !0,
                labelCol: { span: 6 },
                wrapperCol: { span: 16 },
              },
            },
            functionCode: {
              'ui:widget': 'input',
              'ui:options': { type: 'text', placeholder: '' },
              'ui:rules': [
                { required: !0, message: '请输入角色编码' },
                { whitespace: !0, message: 'no space' },
                { max: 100, message: '最多输入100字符' },
              ],
              'ui:title': '菜单编码',
              'ui:description': '',
              'ui:formItemConfig': {
                hasFeedback: !0,
                labelCol: { span: 6 },
                wrapperCol: { span: 16 },
              },
            },
            path: {
              'ui:widget': 'input',
              'ui:options': { type: 'text', placeholder: '' },
              'ui:rules': [
                { required: !0, message: '请输入角色编码' },
                { whitespace: !0, message: 'no space' },
                { max: 100, message: '最多输入100字符' },
              ],
              'ui:title': '菜单路径',
              'ui:description': '',
              'ui:formItemConfig': {
                hasFeedback: !0,
                labelCol: { span: 6 },
                wrapperCol: { span: 16 },
              },
            },
            leftMenu: {
              'ui:widget': 'radio',
              'ui:options': {
                options: [
                  { label: '是', value: '1' },
                  { label: '否', value: '0' },
                ],
              },
              'ui:rules': [{ required: !0, message: '请选择' }],
              'ui:title': '左侧',
              'ui:description': '',
              'ui:formItemConfig': {
                labelCol: { span: 6 },
                wrapperCol: { span: 16 },
              },
            },
            isLock: {
              'ui:widget': 'radio',
              'ui:options': {
                options: [
                  { label: '是', value: '1' },
                  { label: '否', value: '0' },
                ],
              },
              'ui:rules': [{ required: !0, message: '请选择' }],
              'ui:title': '锁定',
              'ui:description': '',
              'ui:formItemConfig': {
                labelCol: { span: 6 },
                wrapperCol: { span: 16 },
              },
            },
            sort: {
              'ui:widget': 'input',
              'ui:options': { type: 'text', placeholder: '请输入数字' },
              'ui:rules': [
                { required: !0, message: '输入数字' },
                { whitespace: !0, message: 'no space' },
                { max: 100, message: '最多输入100字符' },
              ],
              'ui:title': '排序',
              'ui:description': '',
              'ui:formItemConfig': {
                hasFeedback: !0,
                labelCol: { span: 6 },
                wrapperCol: { span: 16 },
              },
            },
            parentId: {
              'ui:widget': 'treeSelect',
              'ui:options': { treeData: T(L) },
              'ui:rules': [{ required: !0, message: '请选择模块!' }],
              'ui:title': '所属菜单',
              'ui:description': '请选择模块',
              'ui:formItemConfig': {
                hasFeedback: !0,
                labelCol: { span: 6 },
                wrapperCol: { span: 16 },
              },
            },
            icon: {
              'ui:widget': 'treeSelect',
              'ui:options': {
                treeData: z([
                  {
                    title: '方向性图标',
                    icons: [
                      { title: 'step-backward', icon: 'step-backward' },
                      { title: 'step-forward', icon: 'step-forward' },
                      { title: 'fast-backward', icon: 'fast-backward' },
                      { title: 'fast-forward', icon: 'fast-forward' },
                      { title: 'shrink', icon: 'shrink' },
                      { title: 'arrows-alt', icon: 'arrows-alt' },
                      { title: 'down', icon: 'down' },
                      { title: 'up', icon: 'up' },
                      { title: 'left', icon: 'left' },
                      { title: 'right', icon: 'right' },
                      { title: 'caret-up', icon: 'caret-up' },
                      { title: 'caret-down', icon: 'caret-down' },
                      { title: 'caret-left', icon: 'caret-left' },
                      { title: 'caret-right', icon: 'caret-right' },
                      { title: 'up-circle', icon: 'up-circle' },
                      { title: 'down-circle', icon: 'down-circle' },
                      { title: 'left-circle', icon: 'left-circle' },
                      { title: 'right-circle', icon: 'right-circle' },
                      { title: 'up-circle-o', icon: 'up-circle-o' },
                      { title: 'down-circle-o', icon: 'down-circle-o' },
                      { title: 'right-circle-o', icon: 'right-circle-o' },
                      { title: 'left-circle-o', icon: 'left-circle-o' },
                      { title: 'double-right', icon: 'double-right' },
                      { title: 'double-left', icon: 'double-left' },
                      { title: 'verticle-left', icon: 'verticle-left' },
                      { title: 'verticle-right', icon: 'verticle-right' },
                      { title: 'forward', icon: 'forward' },
                      { title: 'backward', icon: 'backward' },
                      { title: 'rollback', icon: 'rollback' },
                      { title: 'enter', icon: 'enter' },
                      { title: 'retweet', icon: 'retweet' },
                      { title: 'swap', icon: 'swap' },
                      { title: 'swap-left', icon: 'swap-left' },
                      { title: 'swap-right', icon: 'swap-right' },
                      { title: 'arrow-up', icon: 'arrow-up' },
                      { title: 'arrow-down', icon: 'arrow-down' },
                      { title: 'arrow-left', icon: 'arrow-left' },
                      { title: 'arrow-right', icon: 'arrow-right' },
                      { title: 'play-circle', icon: 'play-circle' },
                      { title: 'play-circle-o', icon: 'play-circle-o' },
                      { title: 'up-square', icon: 'up-square' },
                      { title: 'down-square', icon: 'down-square' },
                      { title: 'left-square', icon: 'left-square' },
                      { title: 'right-square', icon: 'right-square' },
                      { title: 'up-square-o', icon: 'up-square-o' },
                      { title: 'down-square-o', icon: 'down-square-o' },
                      { title: 'left-square-o', icon: 'left-square-o' },
                      { title: 'right-square-o', icon: 'right-square-o' },
                      { title: 'login', icon: 'login' },
                      { title: 'logout', icon: 'logout' },
                      { title: 'menu-fold', icon: 'menu-fold' },
                      { title: 'menu-unfold', icon: 'menu-unfold' },
                    ],
                  },
                  {
                    title: '提示建议性图标',
                    icons: [
                      { title: 'question', icon: 'question' },
                      { title: 'question-circle-o', icon: 'question-circle-o' },
                      { title: 'question-circle', icon: 'question-circle' },
                      { title: 'plus', icon: 'plus' },
                      { title: 'plus-circle-o', icon: 'plus-circle-o' },
                      { title: 'plus-circle', icon: 'plus-circle' },
                      { title: 'pause', icon: 'pause' },
                      { title: 'pause-circle-o', icon: 'pause-circle-o' },
                      { title: 'pause-circle', icon: 'pause-circle' },
                      { title: 'minus', icon: 'minus' },
                      { title: 'minus-circle-o', icon: 'minus-circle-o' },
                      { title: 'minus-circle', icon: 'minus-circle' },
                      { title: 'plus-square', icon: 'plus-square' },
                      { title: 'plus-square-o', icon: 'plus-square-o' },
                      { title: 'minus-square', icon: 'minus-square' },
                      { title: 'minus-square-o', icon: 'minus-square-o' },
                      { title: 'info', icon: 'info' },
                      { title: 'info-circle-o', icon: 'info-circle-o' },
                      { title: 'info-circle', icon: 'info-circle' },
                      { title: 'exclamation', icon: 'exclamation' },
                      {
                        title: 'exclamation-circle-o',
                        icon: 'exclamation-circle-o',
                      },
                      {
                        title: 'exclamation-circle',
                        icon: 'exclamation-circle',
                      },
                      { title: 'close', icon: 'close' },
                      { title: 'close-circle', icon: 'close-circle' },
                      { title: 'close-circle-o', icon: 'close-circle-o' },
                      { title: 'close-square', icon: 'close-square' },
                      { title: 'close-square-o', icon: 'close-square-o' },
                      { title: 'check', icon: 'check' },
                      { title: 'check-circle', icon: 'check-circle' },
                      { title: 'check-circle-o', icon: 'check-circle-o' },
                      { title: 'check-square', icon: 'check-square' },
                      { title: 'check-square-o', icon: 'check-square-o' },
                      { title: 'clock-circle-o', icon: 'clock-circle-o' },
                      { title: 'clock-circle', icon: 'clock-circle' },
                      { title: 'warning', icon: 'warning' },
                    ],
                  },
                  {
                    title: '网站通用图标',
                    icons: [
                      { title: 'lock', icon: 'lock' },
                      { title: 'unlock', icon: 'unlock' },
                      { title: 'area-chart', icon: 'area-chart' },
                      { title: 'pie-chart', icon: 'pie-chart' },
                      { title: 'bar-chart', icon: 'bar-chart' },
                      { title: 'dot-chart', icon: 'dot-chart' },
                      { title: 'bars', icon: 'bars' },
                      { title: 'book', icon: 'book' },
                      { title: 'calendar', icon: 'calendar' },
                      { title: 'cloud', icon: 'cloud' },
                      { title: 'cloud-download', icon: 'cloud-download' },
                      { title: 'code', icon: 'code' },
                      { title: 'code-o', icon: 'code-o' },
                      { title: 'copy', icon: 'copy' },
                      { title: 'credit-card', icon: 'credit-card' },
                      { title: 'delete', icon: 'delete' },
                      { title: 'desktop', icon: 'desktop' },
                      { title: 'download', icon: 'download' },
                      { title: 'edit', icon: 'edit' },
                      { title: 'ellipsis', icon: 'ellipsis' },
                      { title: 'file', icon: 'file' },
                      { title: 'file-text', icon: 'file-text' },
                      { title: 'file-unknown', icon: 'file-unknown' },
                      { title: 'file-pdf', icon: 'file-pdf' },
                      { title: 'file-word', icon: 'file-word' },
                      { title: 'file-excel', icon: 'file-excel' },
                      { title: 'file-jpg', icon: 'file-jpg' },
                      { title: 'file-ppt', icon: 'file-ppt' },
                      { title: 'file-markdown', icon: 'file-markdown' },
                      { title: 'file-add', icon: 'file-add' },
                      { title: 'folder', icon: 'folder' },
                      { title: 'folder-open', icon: 'folder-open' },
                      { title: 'folder-add', icon: 'folder-add' },
                      { title: 'hdd', icon: 'hdd' },
                      { title: 'frown', icon: 'frown' },
                      { title: 'frown-o', icon: 'frown-o' },
                      { title: 'meh', icon: 'meh' },
                      { title: 'meh-o', icon: 'meh-o' },
                      { title: 'smile', icon: 'smile' },
                      { title: 'smile-o', icon: 'smile-o' },
                      { title: 'inbox', icon: 'inbox' },
                      { title: 'laptop', icon: 'laptop' },
                      { title: 'appstore-o', icon: 'appstore-o' },
                      { title: 'appstore', icon: 'appstore' },
                      { title: 'line-chart', icon: 'line-chart' },
                      { title: 'link', icon: 'link' },
                      { title: 'mail', icon: 'mail' },
                      { title: 'mobile', icon: 'mobile' },
                      { title: 'notification', icon: 'notification' },
                      { title: 'paper-clip', icon: 'paper-clip' },
                      { title: 'picture', icon: 'picture' },
                      { title: 'poweroff', icon: 'poweroff' },
                      { title: 'reload', icon: 'reload' },
                      { title: 'search', icon: 'search' },
                      { title: 'setting', icon: 'setting' },
                      { title: 'share-alt', icon: 'share-alt' },
                      { title: 'shopping-cart', icon: 'shopping-cart' },
                      { title: 'tablet', icon: 'tablet' },
                      { title: 'tag', icon: 'tag' },
                      { title: 'tag-o', icon: 'tag-o' },
                      { title: 'tags', icon: 'tags' },
                      { title: 'tags-o', icon: 'tags-o' },
                      { title: 'to-top', icon: 'to-top' },
                      { title: 'upload', icon: 'upload' },
                      { title: 'user', icon: 'user' },
                      { title: 'video-camera', icon: 'video-camera' },
                      { title: 'home', icon: 'home' },
                      { title: 'loading', icon: 'loading' },
                      {
                        title: 'loading-3-quarters',
                        icon: 'loading-3-quarters',
                      },
                      { title: 'cloud-upload-o', icon: 'cloud-upload-o' },
                      { title: 'cloud-download-o', icon: 'cloud-download-o' },
                      { title: 'cloud-upload', icon: 'cloud-upload' },
                      { title: 'cloud-o', icon: 'cloud-o' },
                      { title: 'star-o', icon: 'star-o' },
                      { title: 'star', icon: 'star' },
                      { title: 'heart-o', icon: 'heart-o' },
                      { title: 'heart', icon: 'heart' },
                      { title: 'environment', icon: 'environment' },
                      { title: 'environment-o', icon: 'environment-o' },
                      { title: 'eye', icon: 'eye' },
                      { title: 'eye-o', icon: 'eye-o' },
                      { title: 'camera', icon: 'camera' },
                      { title: 'camera-o', icon: 'camera-o' },
                      { title: 'save', icon: 'save' },
                      { title: 'team', icon: 'team' },
                      { title: 'solution', icon: 'solution' },
                      { title: 'phone', icon: 'phone' },
                      { title: 'filter', icon: 'filter' },
                      { title: 'exception', icon: 'exception' },
                      { title: 'export', icon: 'export' },
                      { title: 'customer-service', icon: 'customer-service' },
                      { title: 'qrcode', icon: 'qrcode' },
                      { title: 'scan', icon: 'scan' },
                      { title: 'like', icon: 'like' },
                      { title: 'like-o', icon: 'like-o' },
                      { title: 'dislike', icon: 'dislike' },
                      { title: 'dislike-o', icon: 'dislike-o' },
                      { title: 'message', icon: 'message' },
                      { title: 'pay-circle', icon: 'pay-circle' },
                      { title: 'pay-circle-o', icon: 'pay-circle-o' },
                      { title: 'calculator', icon: 'calculator' },
                      { title: 'pushpin', icon: 'pushpin' },
                      { title: 'pushpin-o', icon: 'pushpin-o' },
                      { title: 'bulb', icon: 'bulb' },
                      { title: 'select', icon: 'select' },
                      { title: 'switcher', icon: 'switcher' },
                      { title: 'rocket', icon: 'rocket' },
                      { title: 'bell', icon: 'bell' },
                      { title: 'disconnect', icon: 'disconnect' },
                      { title: 'database', icon: 'database' },
                      { title: 'compass', icon: 'compass' },
                      { title: 'barcode', icon: 'barcode' },
                      { title: 'hourglass', icon: 'hourglass' },
                      { title: 'key', icon: 'key' },
                      { title: 'flag', icon: 'flag' },
                      { title: 'layout', icon: 'layout' },
                      { title: 'printer', icon: 'printer' },
                      { title: 'sound', icon: 'sound' },
                      { title: 'usb', icon: 'usb' },
                      { title: 'skin', icon: 'skin' },
                      { title: 'tool', icon: 'tool' },
                      { title: 'sync', icon: 'sync' },
                      { title: 'wifi', icon: 'wifi' },
                      { title: 'car', icon: 'car' },
                      { title: 'schedule', icon: 'schedule' },
                      { title: 'user-add', icon: 'user-add' },
                      { title: 'user-delete', icon: 'user-delete' },
                      { title: 'usergroup-add', icon: 'usergroup-add' },
                      { title: 'usergroup-delete', icon: 'usergroup-delete' },
                      { title: 'man', icon: 'man' },
                      { title: 'woman', icon: 'woman' },
                      { title: 'shop', icon: 'shop' },
                      { title: 'gift', icon: 'gift' },
                      { title: 'idcard', icon: 'idcard' },
                      { title: 'medicine-box', icon: 'medicine-box' },
                      { title: 'red-envelope', icon: 'red-envelope' },
                      { title: 'coffee', icon: 'coffee' },
                      { title: 'copyright', icon: 'copyright' },
                      { title: 'trademark', icon: 'trademark' },
                      { title: 'safety', icon: 'safety' },
                      { title: 'wallet', icon: 'wallet' },
                      { title: 'bank', icon: 'bank' },
                      { title: 'trophy', icon: 'trophy' },
                      { title: 'contacts', icon: 'contacts' },
                      { title: 'global', icon: 'global' },
                      { title: 'shake', icon: 'shake' },
                      { title: 'api', icon: 'api' },
                      { title: 'fork', icon: 'fork' },
                      { title: 'dashboard', icon: 'dashboard' },
                      { title: 'form', icon: 'form' },
                      { title: 'table', icon: 'table' },
                      { title: 'profile', icon: 'profile' },
                    ],
                  },
                  {
                    title: '品牌和标识',
                    icons: [
                      { title: 'android', icon: 'android' },
                      { title: 'android-o', icon: 'android-o' },
                      { title: 'apple', icon: 'apple' },
                      { title: 'apple-o', icon: 'apple-o' },
                      { title: 'windows', icon: 'windows' },
                      { title: 'windows-o', icon: 'windows-o' },
                      { title: 'ie', icon: 'ie' },
                      { title: 'chrome', icon: 'chrome' },
                      { title: 'github', icon: 'github' },
                      { title: 'aliwangwang', icon: 'aliwangwang' },
                      { title: 'aliwangwang-o', icon: 'aliwangwang-o' },
                      { title: 'dingding', icon: 'dingding' },
                      { title: 'dingding-o', icon: 'dingding-o' },
                      { title: 'weibo-square', icon: 'weibo-square' },
                      { title: 'weibo-circle', icon: 'weibo-circle' },
                      { title: 'taobao-circle', icon: 'taobao-circle' },
                      { title: 'html5', icon: 'html5' },
                      { title: 'weibo', icon: 'weibo' },
                      { title: 'twitter', icon: 'twitter' },
                      { title: 'wechat', icon: 'wechat' },
                      { title: 'youtube', icon: 'youtube' },
                      { title: 'alipay-circle', icon: 'alipay-circle' },
                      { title: 'taobao', icon: 'taobao' },
                      { title: 'skype', icon: 'skype' },
                      { title: 'qq', icon: 'qq' },
                      { title: 'medium-workmark', icon: 'medium-workmark' },
                      { title: 'gitlab', icon: 'gitlab' },
                      { title: 'medium', icon: 'medium' },
                      { title: 'linkedin', icon: 'linkedin' },
                      { title: 'google-plus', icon: 'google-plus' },
                      { title: 'dropbox', icon: 'dropbox' },
                      { title: 'facebook', icon: 'facebook' },
                      { title: 'codepen', icon: 'codepen' },
                      { title: 'amazon', icon: 'amazon' },
                      { title: 'google', icon: 'google' },
                      { title: 'codepen-circle', icon: 'codepen-circle' },
                      { title: 'alipay', icon: 'alipay' },
                      { title: 'ant-design', icon: 'ant-design' },
                      { title: 'aliyun', icon: 'aliyun' },
                      { title: 'zhihu', icon: 'zhihu' },
                      { title: 'slack', icon: 'slack' },
                      { title: 'slack-square', icon: 'slack-square' },
                      { title: 'behance', icon: 'behance' },
                      { title: 'behance-square', icon: 'behance-square' },
                      { title: 'dribbble', icon: 'dribbble' },
                      { title: 'dribbble-square', icon: 'dribbble-square' },
                      { title: 'instagram', icon: 'instagram' },
                      { title: 'yuque', icon: 'yuque' },
                    ],
                  },
                ]),
              },
              'ui:rules': [{ required: !0, message: '请选择模块!' }],
              'ui:title': '图标',
              'ui:description': '请选择图标',
              'ui:formItemConfig': {
                hasFeedback: !0,
                labelCol: { span: 6 },
                wrapperCol: { span: 16 },
              },
            },
          },
        },
        K = i('./src/views/pages/Common/CommonModal.jsx'),
        V = i('./src/views/pages/Common/AddRemoveConponent.jsx'),
        U = i('./src/util/permissionContainer.jsx');
      function B(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          e &&
            (o = o.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            i.push.apply(i, o);
        }
        return i;
      }
      function J(t) {
        for (var e = 1; e < arguments.length; e++) {
          var i = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? B(Object(i), !0).forEach(function(e) {
                E()(t, e, i[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
            : B(Object(i)).forEach(function(e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(i, e),
                );
              });
        }
        return t;
      }
      function N(e) {
        if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (e = (function(e, t) {
              if (!e) return;
              if ('string' == typeof e) return $(e, t);
              var i = Object.prototype.toString.call(e).slice(8, -1);
              'Object' === i && e.constructor && (i = e.constructor.name);
              if ('Map' === i || 'Set' === i) return Array.from(i);
              if (
                'Arguments' === i ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
              )
                return $(e, t);
            })(e))
          ) {
            var t = 0,
              i = function() {};
            return {
              s: i,
              n: function() {
                return t >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[t++] };
              },
              e: function(e) {
                throw e;
              },
              f: i,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          );
        }
        var o,
          n,
          r = !0,
          l = !1;
        return {
          s: function() {
            o = e[Symbol.iterator]();
          },
          n: function() {
            var e = o.next();
            return (r = e.done), e;
          },
          e: function(e) {
            (l = !0), (n = e);
          },
          f: function() {
            try {
              r || null == o.return || o.return();
            } finally {
              if (l) throw n;
            }
          },
        };
      }
      function $(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var i = 0, o = new Array(t); i < t; i++) o[i] = e[i];
        return o;
      }
      function G(o) {
        return function() {
          var e,
            t = S()(o);
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
            var i = S()(this).constructor;
            e = Reflect.construct(t, arguments, i);
          } else e = t.apply(this, arguments);
          return C()(this, e);
        };
      }
      var Q = (function(e) {
        O()(n, e);
        var o = G(n);
        function n() {
          var l;
          w()(this, n);
          for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
            t[i] = arguments[i];
          return (
            (l = o.call.apply(o, [this].concat(t))),
            E()(x()(l), 'state', {
              tableFilter: { title: '', functionCode: '' },
              tableSelectedRowKeys: [],
              pagedList: [],
              allList: [],
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
              editModalVisible: !1,
              isEditModal: !1,
            }),
            E()(x()(l), 'columns', [
              { title: '菜单title', dataIndex: 'title', sorter: !0 },
              { title: '菜单名称', dataIndex: 'name', sorter: !0 },
              { title: '菜单编码', dataIndex: 'functionCode', sorter: !0 },
              { title: '菜单路径', dataIndex: 'path', sorter: !0 },
              {
                title: '父菜单',
                dataIndex: 'parentId',
                render: function(e) {
                  return P.a.createElement(
                    b.a,
                    { color: 'green' },
                    l.getParentName(e),
                  );
                },
                width: 140,
                sorter: !0,
              },
              { title: '图标', dataIndex: 'icon' },
              {
                title: '左侧菜单',
                dataIndex: 'leftMenu',
                render: function(e) {
                  return e
                    ? P.a.createElement(
                        'div',
                        { style: { textAlign: 'center' } },
                        P.a.createElement(f.a, { status: 'success' }),
                      )
                    : P.a.createElement(
                        'div',
                        { style: { textAlign: 'center' } },
                        P.a.createElement(f.a, { status: 'error' }),
                      );
                },
              },
              {
                title: '是否锁定',
                dataIndex: 'isLock',
                render: function(e) {
                  return e
                    ? P.a.createElement(
                        'div',
                        { style: { textAlign: 'center' } },
                        P.a.createElement(f.a, { status: 'success' }),
                      )
                    : P.a.createElement(
                        'div',
                        { style: { textAlign: 'center' } },
                        P.a.createElement(f.a, { status: 'error' }),
                      );
                },
              },
              { title: '排序', dataIndex: 'sort', sorter: !0 },
              {
                title: '操作',
                dataIndex: 'id',
                fixed: 'right',
                width: 120,
                render: function(e, t) {
                  return P.a.createElement(
                    U.a,
                    { permission: ['menu_edit'] },
                    P.a.createElement(
                      'div',
                      { style: { textAlign: 'center' } },
                      P.a.createElement(
                        'a',
                        {
                          onClick: function() {
                            l.editRole(t);
                          },
                        },
                        '编辑',
                      ),
                    ),
                  );
                },
              },
            ]),
            E()(x()(l), 'editFormData', {}),
            E()(x()(l), 'getParentName', function(e) {
              var t,
                i = N(l.state.allList);
              try {
                for (i.s(); !(t = i.n()).done; ) {
                  var o = t.value;
                  if (o.id === e) return o.title;
                }
              } catch (e) {
                i.e(e);
              } finally {
                i.f();
              }
              return '';
            }),
            E()(
              x()(l),
              'fetch',
              p()(
                u.a.mark(function e() {
                  var t,
                    i,
                    o,
                    n,
                    r = arguments;
                  return u.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = 0 < r.length && void 0 !== r[0] ? r[0] : {}),
                            l.setState({ loading: !0 }),
                            (e.next = 4),
                            Object(F.getAllMenu)(t)
                          );
                        case 4:
                          (i = e.sent),
                            (o = i.data),
                            ((n = J({}, l.state.pagination)).total =
                              o.totalCount),
                            l.setState({
                              loading: !1,
                              pagedList: o.rows,
                              allList: o.allList,
                              pagination: n,
                            });
                        case 9:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              ),
            ),
            E()(x()(l), 'refresh', function() {
              var e = {
                pageIndex: l.state.pagination.current,
                pageSize: l.state.pagination.pageSize,
                sortBy: l.state.sorter.field,
                descending: 'descend' === l.state.sorter.order,
                filter: l.state.tableFilter,
              };
              l.fetch(e);
            }),
            E()(x()(l), 'handleSearch', function(e) {
              var t = J({}, l.state.pagination);
              (t.current = 1), l.setState({ tableFilter: e, pagination: t });
              var i = {
                pageIndex: 1,
                pageSize: l.state.pagination.pageSize,
                sortBy: l.state.sorter.field,
                descending: 'descend' === l.state.sorter.order,
                filter: e,
              };
              l.fetch(i);
            }),
            E()(x()(l), 'handleReset', function() {
              l.setState({ tableFilter: {} });
            }),
            E()(x()(l), 'addRole', function() {
              (l.editFormData = {}),
                l.setState({ editModalVisible: !0, isEditModal: !1 });
            }),
            E()(
              x()(l),
              'batchDelRole',
              p()(
                u.a.mark(function e() {
                  return u.a.wrap(
                    function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              Object(F.delMenus)({
                                ids: l.state.tableSelectedRowKeys,
                              })
                            );
                          case 3:
                            l.setState({ tableSelectedRowKeys: [] }),
                              c.a.success({
                                placement: 'bottomLeft bottomRight',
                                message: '删除成功',
                              }),
                              (e.next = 10);
                            break;
                          case 7:
                            (e.prev = 7),
                              (e.t0 = e.catch(0)),
                              c.a.error({ message: e.t0.msg });
                          case 10:
                            l.refresh();
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
              ),
            ),
            E()(x()(l), 'onSelectChange', function(e) {
              l.setState({ tableSelectedRowKeys: e });
            }),
            E()(x()(l), 'editModalOnCancel', function() {
              l.setState({ editModalVisible: !1, isEditModal: !1 });
            }),
            E()(
              x()(l),
              'modalSubmit',
              (function() {
                var t = p()(
                  u.a.mark(function e(t) {
                    var i;
                    return u.a.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (l.state.isEditModal)
                                return (
                                  (i = J({}, t, { id: l.editFormData.id })),
                                  (e.prev = 2),
                                  (e.next = 5),
                                  Object(F.editMenu)(i)
                                );
                              e.next = 14;
                              break;
                            case 5:
                              l.setState({
                                editModalVisible: !1,
                                isEditModal: !1,
                              }),
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
                                Object(F.addMenu)(t)
                              );
                            case 17:
                              l.setState({ editModalVisible: !1 }),
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
            E()(x()(l), 'editRole', function(e) {
              var t = Object.assign(
                {},
                J({}, e, {
                  isLock: e.isLock ? '1' : '0',
                  leftMenu: e.leftMenu ? '1' : '0',
                }),
              );
              (l.editFormData = J({}, t)),
                l.setState({ editModalVisible: !0, isEditModal: !0 });
            }),
            E()(x()(l), 'handleTableChange', function(e, t, i) {
              var o = J({}, l.state.pagination);
              (o.current = e.current),
                (o.pageSize = e.pageSize),
                l.setState({
                  pagination: o,
                  sorter: { field: i.field, order: i.order },
                });
              var n = {
                pageIndex: o.current,
                pageSize: o.pageSize,
                sortBy: i.field,
                descending: 'descend' === i.order,
                filter: l.state.tableFilter,
              };
              l.fetch(n);
            }),
            l
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
                  i = 0 < e.length;
                return P.a.createElement(
                  'div',
                  { style: { backgroundColor: '#fff', padding: '18px' } },
                  P.a.createElement(I.a, {
                    schema: A.searchSchema,
                    uiSchema: A.searchUiSchema,
                    handleSubmit: this.handleSearch,
                    handleReset: this.handleReset,
                  }),
                  P.a.createElement(l.a, null),
                  P.a.createElement(V.a, {
                    addFunc: this.addRole,
                    onConfirm: this.batchDelRole,
                    hasSelected: i,
                    addTitle: '新增',
                    removeTitle: '删除',
                    addPermission: ['menu_add'],
                    delPermission: ['menu_del'],
                  }),
                  P.a.createElement(r.a, {
                    rowSelection: t,
                    columns: this.columns,
                    rowKey: function(e) {
                      return e.id;
                    },
                    dataSource: this.state.pagedList,
                    pagination: this.state.pagination,
                    loading: this.state.loading,
                    onChange: this.handleTableChange,
                    scroll: { x: 'max-content' },
                    size: 'small',
                    bordered: !0,
                  }),
                  P.a.createElement(K.a, {
                    visible: this.state.editModalVisible,
                    title: this.editFormData.id ? '编辑' : '新增',
                    onCancel: this.editModalOnCancel,
                    destroyOnClose: !0,
                    schema: A.editSchema,
                    uiSchema: A.editUiSchema,
                    formData: this.editFormData,
                    handFormSubmit: this.modalSubmit,
                  }),
                );
              },
            },
          ]),
          n
        );
      })(P.a.PureComponent);
      t.default = Q;
    },
  },
]);
