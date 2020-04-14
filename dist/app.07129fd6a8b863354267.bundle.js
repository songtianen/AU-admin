(window.webpackJsonp = window.webpackJsonp || []).push([
  ['app'],
  {
    './src/api/index.js': function(e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'resetdb', function() {
          return g;
        }),
        n.d(t, 'loginByUsername', function() {
          return y;
        }),
        n.d(t, 'loginRegister', function() {
          return b;
        }),
        n.d(t, 'logout', function() {
          return v;
        }),
        n.d(t, 'getUserInfo', function() {
          return A;
        }),
        n.d(t, 'getUserFromRole', function() {
          return E;
        }),
        n.d(t, 'getAllUser', function() {
          return O;
        }),
        n.d(t, 'delUser', function() {
          return S;
        }),
        n.d(t, 'delUsers', function() {
          return R;
        }),
        n.d(t, 'addUser', function() {
          return j;
        }),
        n.d(t, 'editUser', function() {
          return x;
        }),
        n.d(t, 'getAccessMenu', function() {
          return w;
        }),
        n.d(t, 'getAllMenu', function() {
          return P;
        }),
        n.d(t, 'getAllMenuWithFunction', function() {
          return C;
        }),
        n.d(t, 'editMenu', function() {
          return D;
        }),
        n.d(t, 'addMenu', function() {
          return I;
        }),
        n.d(t, 'delMenus', function() {
          return k;
        }),
        n.d(t, 'getIcons', function() {
          return M;
        }),
        n.d(t, 'getFunctionPagedList', function() {
          return L;
        }),
        n.d(t, 'delFunctions', function() {
          return T;
        }),
        n.d(t, 'addFunction', function() {
          return N;
        }),
        n.d(t, 'editFunction', function() {
          return B;
        }),
        n.d(t, 'getRolePagedList', function() {
          return U;
        }),
        n.d(t, 'getRoleFromUserId', function() {
          return _;
        }),
        n.d(t, 'delUserForRoleId', function() {
          return Q;
        }),
        n.d(t, 'delRoleForUserId', function() {
          return q;
        }),
        n.d(t, 'addUserForRole', function() {
          return G;
        }),
        n.d(t, 'delRoles', function() {
          return F;
        }),
        n.d(t, 'editRole', function() {
          return H;
        }),
        n.d(t, 'addRole', function() {
          return W;
        }),
        n.d(t, 'addRoleForUser', function() {
          return V;
        }),
        n.d(t, 'savePermission', function() {
          return X;
        }),
        n.d(t, 'getRequestLogPagedList', function() {
          return J;
        }),
        n.d(t, 'getPostPagedList', function() {
          return z;
        }),
        n.d(t, 'getPost', function() {
          return Y;
        }),
        n.d(t, 'savePost', function() {
          return K;
        }),
        n.d(t, 'getTopPostByQuery', function() {
          return Z;
        }),
        n.d(t, 'getAllDepartmentAndRole', function() {
          return $;
        }),
        n.d(t, 'getAllDepartment', function() {
          return ee;
        }),
        n.d(t, 'getAllDepartmentTree', function() {
          return te;
        }),
        n.d(t, 'addDepartment', function() {
          return ne;
        }),
        n.d(t, 'delDepartment', function() {
          return re;
        }),
        n.d(t, 'editDepartment', function() {
          return ae;
        });
      var r = n('./node_modules/qs/lib/index.js'),
        a = n.n(r),
        o =
          (n('./node_modules/antd/lib/notification/style/index.js'),
          n('./node_modules/antd/lib/notification/index.js')),
        i = n.n(o),
        s = n('./node_modules/axios/index.js'),
        l = n.n(s),
        c = n('./node_modules/history/esm/history.js'),
        u = n('./src/util/token.js'),
        d = {
          check: function(e) {
            if (e.permission && 0 < e.permission.length) {
              var t = e.permission;
              return JSON.parse(localStorage.getItem('permission')).some(
                function(e) {
                  return -1 < t.indexOf(e);
                },
              );
            }
            return !0;
          },
        },
        p = d,
        m = Object(c.a)({ forceRefresh: !0 }),
        f = l.a.create({
          baseURL: 'https://www.card12.com/api',
          timeout: 2e4,
          withCredentials: !0,
        });
      f.interceptors.request.use(
        function(e) {
          if (!p.check(e)) return Promise.reject(new Error('403'));
          var t = Object(u.a)();
          return t && (e.headers.Authorization = 'Bearer '.concat(t)), e;
        },
        function(e) {
          Promise.reject(e);
        },
      ),
        f.interceptors.response.use(
          function(e) {
            var t = e;
            return 200 !== t.status || 200 !== t.data.statusCode
              ? (i.a.error({ message: t.msg ? t.msg : t.data.msg }),
                Promise.reject({ msg: t.msg ? t.msg : t.data.msg }))
              : e.data;
          },
          function(e) {
            return (
              e.response && 401 === e.response.status
                ? (Object(u.b)(),
                  -1 === e.config.url.indexOf('logout') &&
                    i.a.error('登陆信息已过期,请重新登陆!'),
                  setTimeout(function() {
                    m.push('/login');
                  }, 1e3))
                : e.response && 500 === e.response.status
                ? i.a.error({ message: '系统错误!' })
                : e.message && -1 < e.message.indexOf('timeout')
                ? i.a.error({ message: '网络超时!' })
                : '403' === e.message
                ? i.a.error({ message: '没有请求权限!' })
                : i.a.error({ message: '网络错误!' }),
              Promise.reject(e)
            );
          },
        );
      var h = f;
      function g(e) {
        return h({ url: '/user/resetdb', method: 'post', data: e });
      }
      function y(e) {
        return h({ url: '/user/login', method: 'post', data: e });
      }
      function b(e) {
        return h({
          url: '/user/register',
          method: 'post',
          data: a.a.stringify(e),
        });
      }
      function v(e) {
        return h({ url: '/user/logout', method: 'get', params: e });
      }
      function A() {
        return h({ url: '/user/info', method: 'get' });
      }
      function E(e) {
        return h({ url: '/role/userfromrole', method: 'get', params: e });
      }
      function O(e) {
        return h({ url: '/user/getalluser', method: 'get', params: e });
      }
      function S(e) {
        return h({
          url: '/user/batchdel',
          method: 'delete',
          params: e,
          loading: 'message',
        });
      }
      function R(e) {
        return h({
          url: '/user/del',
          method: 'post',
          data: e,
          loading: 'message',
        });
      }
      function j(e) {
        return h({
          url: '/user/adduser',
          method: 'post',
          data: e,
          loading: 'message',
        });
      }
      function x(e) {
        return h({
          url: '/user/edituser',
          method: 'post',
          data: e,
          loading: 'message',
        });
      }
      function w() {
        return h({ url: '/menu/getaccessmenu', method: 'get' });
      }
      function P(e) {
        return h({ url: '/menu', method: 'get', params: e });
      }
      function C(e) {
        return h({
          url: '/menu/getAllMenuWithFunction',
          method: 'get',
          params: e,
        });
      }
      function D(e) {
        return h({
          url: '/menu/editmenu',
          method: 'post',
          data: e,
          loading: 'message',
        });
      }
      function I(e) {
        return h({
          url: '/menu/addmenu',
          method: 'post',
          data: e,
          loading: 'message',
        });
      }
      function k(e) {
        return h({
          url: '/menu/delmenus',
          method: 'post',
          data: e,
          loading: 'message',
        });
      }
      function M() {
        return h({ url: '/icons', method: 'get' });
      }
      function L(e) {
        return h({ url: '/function/pagedlist', method: 'get', params: e });
      }
      function T(e) {
        return h({
          url: '/function/del',
          method: 'post',
          data: e,
          loading: 'message',
        });
      }
      function N(e) {
        return h({
          url: '/function/add',
          method: 'post',
          data: e,
          loading: 'message',
        });
      }
      function B(e) {
        return h({
          url: '/function/edit',
          method: 'post',
          data: e,
          loading: 'message',
        });
      }
      function U(e) {
        return h({ url: '/role/pagedlist', method: 'get', params: e });
      }
      function _(e) {
        return h({ url: '/role/getrolefromuserId', method: 'get', params: e });
      }
      function Q(e) {
        return h({
          url: '/role/deluserforroleid',
          method: 'post',
          data: e,
          loading: 'message',
        });
      }
      function q(e) {
        return h({
          url: '/role/delroleforuserid',
          method: 'post',
          data: e,
          loading: 'message',
        });
      }
      function G(e) {
        return h({
          url: '/role/adduserforrole',
          method: 'post',
          data: e,
          loading: 'message',
        });
      }
      function F(e) {
        return h({
          url: '/role/batchdel',
          method: 'post',
          data: e,
          loading: 'message',
        });
      }
      function H(e) {
        return h({
          url: '/role/edit',
          method: 'post',
          data: e,
          loading: 'message',
        });
      }
      function W(e) {
        return h({
          url: '/role/addrole',
          method: 'post',
          data: e,
          loading: 'message',
        });
      }
      function V(e) {
        return h({
          url: '/role/addroleforuser',
          method: 'post',
          data: e,
          loading: 'message',
        });
      }
      function X(e) {
        return h({
          url: '/role/savepermission',
          method: 'post',
          data: e,
          loading: 'message',
        });
      }
      function J(e) {
        return h({ url: '/requestlog/pagedlist', method: 'get', params: e });
      }
      function z(e) {
        return h({ url: '/post/pagedlist', method: 'get', params: e });
      }
      function Y(e) {
        return h({
          url: '/post/'.concat(e),
          method: 'get',
          loading: 'message',
        });
      }
      function K(e) {
        return h({
          url: '/post/save',
          method: 'post',
          data: e,
          loading: 'message',
        });
      }
      function Z(e) {
        return h({
          url: '/post/top',
          method: 'get',
          params: e,
          permission: ['xxoo'],
        });
      }
      function $() {
        return h({ url: '/department/departmentandrole', method: 'get' });
      }
      function ee(e) {
        return h({
          url: '/department',
          method: 'get',
          params: e,
          permission: ['department_view'],
        });
      }
      function te(e) {
        return h({
          url: '/department/getAllDepartmentTree',
          method: 'get',
          params: e,
        });
      }
      function ne(e) {
        return h({
          url: '/department/adddepartment',
          method: 'post',
          data: e,
          loading: 'message',
        });
      }
      function re(e) {
        return h({
          url: '/department/deldepartment',
          method: 'post',
          data: e,
          loading: 'message',
        });
      }
      function ae(e) {
        return h({
          url: '/department/editdepartment',
          method: 'post',
          data: e,
          loading: 'message',
        });
      }
    },
    './src/index.js': function(e, t, n) {
      'use strict';
      n.r(t);
      var r = {};
      n.r(r),
        n.d(r, 'actionTypes', function() {
          return Le;
        }),
        n.d(r, 'getAccessMenuAction', function() {
          return Te;
        }),
        n.d(r, 'getAccessMenuSuccessAction', function() {
          return Ne;
        }),
        n.d(r, 'updateModuleAction', function() {
          return Be;
        }),
        n.d(r, 'updateModuleSucessAction', function() {
          return Ue;
        }),
        n.d(r, 'initMenuAction', function() {
          return _e;
        }),
        n.d(r, 'initAppDataAction', function() {
          return Qe;
        }),
        n.d(r, 'initAppDataSuccessAction', function() {
          return qe;
        }),
        n.d(r, 'getUserInfoSuccess', function() {
          return Ge;
        }),
        n.d(r, 'getUserInfoAction', function() {
          return Fe;
        });
      var a = {};
      n.r(a),
        n.d(a, 'NAME', function() {
          return ht;
        });
      var o = {};
      n.r(o),
        n.d(o, 'SPIN_LOADING', function() {
          return tn;
        });
      var i = {};
      n.r(i),
        n.d(i, 'spinLoading', function() {
          return nn;
        });
      var s = {};
      n.r(s),
        n.d(s, 'NAME', function() {
          return cn;
        });
      var l = n('./node_modules/react/index.js'),
        c = n.n(l),
        u = n('./node_modules/react-dom/index.js'),
        d = n.n(u),
        p = n('./node_modules/@babel/runtime/helpers/classCallCheck.js'),
        m = n.n(p),
        f = n('./node_modules/@babel/runtime/helpers/createClass.js'),
        h = n.n(f),
        g = n('./node_modules/@babel/runtime/helpers/inherits.js'),
        y = n.n(g),
        b = n(
          './node_modules/@babel/runtime/helpers/possibleConstructorReturn.js',
        ),
        v = n.n(b),
        A = n('./node_modules/@babel/runtime/helpers/getPrototypeOf.js'),
        E = n.n(A),
        O = n('./node_modules/react-redux/es/index.js'),
        S = n('./node_modules/react-router-dom/es/BrowserRouter.js'),
        R = n('./node_modules/react-router-dom/es/Switch.js'),
        j = n('./node_modules/react-router-dom/es/Route.js'),
        x =
          (n('./node_modules/antd/lib/row/style/index.js'),
          n('./node_modules/antd/lib/row/index.js')),
        w = n.n(x),
        P =
          (n('./node_modules/antd/lib/col/style/index.js'),
          n('./node_modules/antd/lib/col/index.js')),
        C = n.n(P),
        D =
          (n('./node_modules/antd/lib/checkbox/style/index.js'),
          n('./node_modules/antd/lib/checkbox/index.js')),
        I = n.n(D),
        k =
          (n('./node_modules/antd/lib/button/style/index.js'),
          n('./node_modules/antd/lib/button/index.js')),
        M = n.n(k),
        L =
          (n('./node_modules/antd/lib/input/style/index.js'),
          n('./node_modules/antd/lib/input/index.js')),
        T = n.n(L),
        N =
          (n('./node_modules/antd/lib/icon/style/index.js'),
          n('./node_modules/antd/lib/icon/index.js')),
        B = n.n(N),
        U = n('./node_modules/@babel/runtime/helpers/assertThisInitialized.js'),
        _ = n.n(U),
        Q = n('./node_modules/@babel/runtime/helpers/defineProperty.js'),
        q = n.n(Q),
        G =
          (n('./node_modules/antd/lib/card/style/index.js'),
          n('./node_modules/antd/lib/card/index.js')),
        F = n.n(G),
        H =
          (n('./node_modules/antd/lib/form/style/index.js'),
          n('./node_modules/antd/lib/form/index.js')),
        W = n.n(H),
        V = n('./node_modules/prop-types/index.js'),
        X = n.n(V),
        J = n('./node_modules/react-router-dom/es/withRouter.js'),
        z = n('./src/resource/assets/logo.jpg'),
        Y = n.n(z),
        K = {
          DO_LOGIN: 'login/DO_LOGIN',
          BEFORE_LOGIN: 'login/BEFORE_LOGIN',
          DO_REGISTER: 'login/DO_REGISTER',
          REGISTER_SUCCESS: 'login/REGISTER_SUCCESS',
          LOGIN_SUCCESS: 'login/LOGIN_SUCCESS',
          LOGIN_ERROR: 'login/LOGIN_ERROR',
          LOGOUT_SUCCESS: 'login/LOGOUT_SUCCESS',
          DO_LOGOUT: 'login/DO_LOGOUT',
        };
      function Z(r) {
        return function() {
          var e,
            t = E()(r);
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
            var n = E()(this).constructor;
            e = Reflect.construct(t, arguments, n);
          } else e = t.apply(this, arguments);
          return v()(this, e);
        };
      }
      var $ = W.a.Item,
        ee = F.a.Meta,
        te = (function(e) {
          y()(a, e);
          var r = Z(a);
          function a() {
            var i;
            m()(this, a);
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return (
              (i = r.call.apply(r, [this].concat(t))),
              q()(_()(i), 'state', { loading: !1 }),
              q()(_()(i), 'startLogin', function() {
                i.setState({ loading: !0 });
              }),
              q()(_()(i), 'endLogin', function() {
                i.setState({ loading: !1 });
              }),
              q()(_()(i), 'gotoRegister', function() {
                i.props.history.push('/register');
              }),
              q()(_()(i), 'handleSubmit', function(e) {
                e.preventDefault();
                var o = i.props.dispatch;
                i.props.form.validateFields(function(e, t) {
                  if (!e) {
                    var n = t.username,
                      r = t.password;
                    i.startLogin(),
                      o(
                        ((a = { username: n, password: r }),
                        { type: K.DO_LOGIN, payload: a }),
                      );
                  }
                  var a;
                  e && i.endLogin();
                });
              }),
              i
            );
          }
          return (
            h()(a, [
              {
                key: 'componentWillReceiveProps',
                value: function(e) {
                  e.isLogin && this.props.history.replace('/');
                  var t = e.error;
                  t && this.endLogin();
                },
              },
              {
                key: 'componentWillUnmount',
                value: function() {
                  this.endLogin();
                },
              },
              {
                key: 'componentDidMount',
                value: function() {
                  document.getElementById('StartLoading') &&
                    document.body.removeChild(
                      document.getElementById('StartLoading'),
                    );
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props.form.getFieldDecorator;
                  return c.a.createElement(
                    'div',
                    { className: 'login-container' },
                    c.a.createElement('canvas', { id: 'noise-canvas' }),
                    c.a.createElement(
                      w.a,
                      { type: 'flex', justify: 'center', align: 'middle' },
                      c.a.createElement(
                        C.a,
                        null,
                        c.a.createElement(
                          F.a,
                          {
                            hoverable: !0,
                            bordered: !1,
                            style: { border: '1px solid #efefef' },
                            cover: c.a.createElement(
                              'div',
                              { style: { padding: 10 } },
                              c.a.createElement('img', {
                                style: {
                                  display: 'block',
                                  width: '100%',
                                  height: '150px',
                                  marginBottom: 10,
                                },
                                alt: 'logo',
                                src: Y.a,
                              }),
                              c.a.createElement(
                                'span',
                                null,
                                '用户名：admin/admin2/HR/CTO/CFO/CMO',
                              ),
                              c.a.createElement(
                                W.a,
                                {
                                  className: 'login-form',
                                  onSubmit: this.handleSubmit,
                                },
                                c.a.createElement(
                                  $,
                                  null,
                                  e('username', {
                                    initialValue: 'admin',
                                    rules: [
                                      {
                                        required: !0,
                                        message: '请输入您的用户名!',
                                      },
                                      {
                                        whitespace: !0,
                                        message: '不能输入空格!',
                                      },
                                    ],
                                  })(
                                    c.a.createElement(T.a, {
                                      prefix: c.a.createElement(B.a, {
                                        type: 'user',
                                        style: { color: 'rgba(0,0,0,.25)' },
                                      }),
                                      placeholder: 'Username',
                                    }),
                                  ),
                                ),
                                c.a.createElement(
                                  $,
                                  null,
                                  e('password', {
                                    initialValue: '123456',
                                    rules: [
                                      { required: !0, message: '请输入密码!' },
                                      {
                                        whitespace: !0,
                                        message: '不能输入空格!',
                                      },
                                    ],
                                  })(
                                    c.a.createElement(T.a.Password, {
                                      prefix: c.a.createElement(B.a, {
                                        type: 'lock',
                                        style: { color: 'rgba(0,0,0,.25)' },
                                      }),
                                      type: 'password',
                                      placeholder: 'Password',
                                    }),
                                  ),
                                ),
                                c.a.createElement(
                                  $,
                                  null,
                                  c.a.createElement(
                                    'a',
                                    {
                                      className: 'login-form-forgot',
                                      href: '',
                                    },
                                    '忘记密码？',
                                  ),
                                  c.a.createElement(
                                    M.a,
                                    {
                                      type: 'primary',
                                      htmlType: 'submit',
                                      loading: this.state.loading,
                                      style: { width: '100%' },
                                    },
                                    '登录',
                                  ),
                                ),
                                c.a.createElement(
                                  $,
                                  null,
                                  e('remember', {
                                    valuePropName: 'checked',
                                    initialValue: !0,
                                  })(c.a.createElement(I.a, null, '记住我')),
                                  c.a.createElement(
                                    M.a,
                                    {
                                      type: 'primary',
                                      onClick: this.gotoRegister,
                                      style: { float: 'right' },
                                    },
                                    '注册',
                                  ),
                                ),
                              ),
                            ),
                          },
                          c.a.createElement(ee, {
                            avatar: c.a.createElement(B.a, {
                              type: 'github',
                              style: { color: '#1890ff', fontSize: 28 },
                            }),
                            title: 'AU-admin',
                            description: '通用权限控制与表单的后台管理系统',
                          }),
                        ),
                      ),
                    ),
                  );
                },
              },
            ]),
            a
          );
        })(c.a.Component);
      te.propTypes = {
        history: X.a.object.isRequired,
        form: X.a.object.isRequired,
        dispatch: X.a.func.isRequired,
        isLogin: X.a.bool.isRequired,
        error: X.a.string.isRequired,
      };
      var ne = Object(J.a)(
          Object(O.b)(function(e) {
            return { isLogin: e.login.isLogin, error: e.login.error };
          })(W.a.create({})(te)),
        ),
        re = n('./node_modules/@babel/runtime/helpers/extends.js'),
        ae = n.n(re);
      function oe(r) {
        return function() {
          var e,
            t = E()(r);
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
            var n = E()(this).constructor;
            e = Reflect.construct(t, arguments, n);
          } else e = t.apply(this, arguments);
          return v()(this, e);
        };
      }
      var ie = F.a.Meta,
        se = (function(e) {
          y()(o, e);
          var r = oe(o);
          function o() {
            var a;
            m()(this, o);
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return (
              (a = r.call.apply(r, [this].concat(t))),
              q()(_()(a), 'state', { count: 0, confirmDirty: !1, loading: !1 }),
              q()(_()(a), 'interval', void 0),
              q()(_()(a), 'startLogin', function() {
                a.setState({ loading: !0 });
              }),
              q()(_()(a), 'endLogin', function() {
                a.setState({ loading: !1 });
              }),
              q()(_()(a), 'handleSubmit', function(e) {
                var r = a.props.dispatch;
                e.preventDefault(),
                  a.props.form.validateFields(function(e, t) {
                    var n;
                    e ||
                      (r(((n = t), { type: K.DO_REGISTER, payload: n })),
                      a.startLogin()),
                      e && a.endLogin();
                  });
              }),
              q()(_()(a), 'onGetCaptcha', function() {
                var e = 59;
                a.setState({ count: e }),
                  (a.interval = window.setInterval(function() {
                    --e,
                      a.setState({ count: e }),
                      0 === e && clearInterval(a.interval);
                  }, 1e3));
              }),
              q()(_()(a), 'handleConfirmBlur', function(e) {
                var t = e.target.value;
                a.setState({ confirmDirty: a.state.confirmDirty || !!t });
              }),
              q()(_()(a), 'compareToFirstPassword', function(e, t, n) {
                var r = a.props.form;
                t && t !== r.getFieldValue('password')
                  ? n('请输入一致的密码!')
                  : n();
              }),
              q()(_()(a), 'validateToNextPassword', function(e, t, n) {
                var r = a.props.form;
                t &&
                  a.state.confirmDirty &&
                  r.validateFields(['confirm'], { force: !0 }),
                  n();
              }),
              a
            );
          }
          return (
            h()(o, [
              {
                key: 'componentWillUnmount',
                value: function() {
                  clearInterval(this.interval), this.endLogin();
                },
              },
              {
                key: 'componentWillReceiveProps',
                value: function(e) {
                  e.isLogin && this.props.history.push('/');
                  var t = e.error;
                  t && this.endLogin();
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props.form.getFieldDecorator,
                    t = this.state.count,
                    n = c.a.createElement(
                      W.a,
                      ae()(
                        {},
                        {
                          labelCol: { xs: { span: 24 }, sm: { span: 6 } },
                          wrapperCol: { xs: { span: 24 }, sm: { span: 16 } },
                        },
                        { onSubmit: this.handleSubmit },
                      ),
                      c.a.createElement(
                        W.a.Item,
                        { label: '用户名' },
                        e('username', {
                          rules: [
                            { required: !0, message: '输入用户名' },
                            { whitespace: !0, message: '用户名不能输入空格' },
                          ],
                        })(
                          c.a.createElement(T.a, {
                            prefix: c.a.createElement(B.a, {
                              type: 'user',
                              style: { color: 'rgba(0,0,0,.25)' },
                            }),
                            placeholder: '用户名',
                          }),
                        ),
                      ),
                      c.a.createElement(
                        W.a.Item,
                        { label: '邮箱' },
                        e('email', {
                          rules: [
                            { required: !0, message: '请输入邮箱' },
                            { type: 'email', message: '邮箱格式一定要正确' },
                          ],
                        })(
                          c.a.createElement(T.a, {
                            prefix: c.a.createElement(B.a, {
                              type: 'mail',
                              style: { color: 'rgba(0,0,0,.25)' },
                            }),
                            placeholder: '邮箱',
                          }),
                        ),
                      ),
                      c.a.createElement(
                        W.a.Item,
                        { label: '密码' },
                        e('password', {
                          rules: [
                            { required: !0, message: '请输入密码!' },
                            { whitespace: !0, message: '用户名不能输入空格' },
                            { validator: this.validateToNextPassword },
                          ],
                        })(
                          c.a.createElement(T.a.Password, {
                            prefix: c.a.createElement(B.a, {
                              type: 'lock',
                              style: { color: 'rgba(0,0,0,.25)' },
                            }),
                            placeholder: '密码',
                            visibilityToggle: !0,
                          }),
                        ),
                      ),
                      c.a.createElement(
                        W.a.Item,
                        { label: '确认密码' },
                        e('confirm', {
                          rules: [
                            { required: !0, message: '请确认密码!' },
                            { whitespace: !0, message: '用户名不能输入空格' },
                            { validator: this.compareToFirstPassword },
                          ],
                        })(
                          c.a.createElement(T.a.Password, {
                            onBlur: this.handleConfirmBlur,
                          }),
                        ),
                      ),
                      c.a.createElement(
                        W.a.Item,
                        { label: '手机号' },
                        e('phone', {
                          rules: [
                            { required: !0, message: '请输入手机号' },
                            {
                              pattern: /^1[3-578]\d{9}$/,
                              message: '请输入正确的手机格式',
                            },
                          ],
                        })(
                          c.a.createElement(T.a, {
                            prefix: c.a.createElement(B.a, {
                              type: 'mobile',
                              style: { color: 'rgba(0,0,0,.25)' },
                            }),
                            placeholder: '手机号',
                            style: { width: '100%' },
                          }),
                        ),
                      ),
                      c.a.createElement(
                        W.a.Item,
                        { label: '验证码' },
                        c.a.createElement(
                          w.a,
                          { gutter: 8 },
                          c.a.createElement(
                            C.a,
                            { span: 12 },
                            e('captcha', {
                              rules: [
                                { required: !0, message: '请输入验证码' },
                                { max: 6, message: '6位' },
                                {
                                  whitespace: !0,
                                  message: '用户名不能输入空格',
                                },
                              ],
                            })(
                              c.a.createElement(T.a, {
                                placeholder: '任意6位',
                              }),
                            ),
                          ),
                          c.a.createElement(
                            C.a,
                            { span: 12 },
                            c.a.createElement(
                              M.a,
                              {
                                type: 'primary',
                                disabled: !!t,
                                onClick: this.onGetCaptcha,
                              },
                              t ? ''.concat(t, ' s') : '获取验证码',
                            ),
                          ),
                        ),
                      ),
                      c.a.createElement(
                        W.a.Item,
                        null,
                        c.a.createElement(
                          M.a,
                          {
                            type: 'primary',
                            loading: this.state.loading,
                            htmlType: 'submit',
                          },
                          '提交',
                        ),
                      ),
                    );
                  return c.a.createElement(
                    'div',
                    null,
                    c.a.createElement('canvas', { id: 'noise-canvas' }),
                    c.a.createElement(
                      w.a,
                      { type: 'flex', justify: 'center', align: 'middle' },
                      c.a.createElement(
                        C.a,
                        null,
                        c.a.createElement(
                          F.a,
                          {
                            hoverable: !0,
                            bordered: !1,
                            style: { border: '1px solid #efefef' },
                            cover: c.a.createElement(
                              'div',
                              { style: { padding: 10 } },
                              c.a.createElement('img', {
                                style: {
                                  display: 'block',
                                  width: '100%',
                                  height: '150px',
                                  marginBottom: 10,
                                },
                                alt: 'logo',
                                src: Y.a,
                              }),
                              n,
                            ),
                          },
                          c.a.createElement(ie, {
                            avatar: c.a.createElement(B.a, {
                              type: 'github',
                              style: { color: '#1890ff', fontSize: 28 },
                            }),
                            title: 'AU-admin',
                            description: '通用权限控制与表单的后台管理系统',
                          }),
                        ),
                      ),
                    ),
                  );
                },
              },
            ]),
            o
          );
        })(c.a.Component);
      se.propTypes = {
        history: X.a.object.isRequired,
        isLogin: X.a.bool.isRequired,
        form: X.a.object.isRequired,
        dispatch: X.a.func.isRequired,
        error: X.a.string.isRequired,
      };
      var le = Object(O.b)(function(e) {
          return { error: e.login.error, isLogin: e.login.isLogin };
        })(W.a.create({ name: 'register' })(se)),
        ce =
          (n('./node_modules/antd/lib/layout/style/index.js'),
          n('./node_modules/antd/lib/layout/index.js')),
        ue = n.n(ce),
        de =
          (n('./node_modules/antd/lib/radio/style/index.js'),
          n('./node_modules/antd/lib/radio/index.js')),
        pe = n.n(de),
        me =
          (n('./node_modules/antd/lib/tag/style/index.js'),
          n('./node_modules/antd/lib/tag/index.js')),
        fe = n.n(me),
        he =
          (n('./node_modules/antd/lib/badge/style/index.js'),
          n('./node_modules/antd/lib/badge/index.js')),
        ge = n.n(he),
        ye =
          (n('./node_modules/antd/lib/avatar/style/index.js'),
          n('./node_modules/antd/lib/avatar/index.js')),
        be = n.n(ye),
        ve = n('./node_modules/@babel/runtime/regenerator/index.js'),
        Ae = n.n(ve),
        Ee = n('./node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        Oe = n.n(Ee),
        Se =
          (n('./node_modules/antd/lib/menu/style/index.js'),
          n('./node_modules/antd/lib/menu/index.js')),
        Re = n.n(Se);
      function je(r) {
        return function() {
          var e,
            t = E()(r);
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
            var n = E()(this).constructor;
            e = Reflect.construct(t, arguments, n);
          } else e = t.apply(this, arguments);
          return v()(this, e);
        };
      }
      var xe = (function(e) {
        y()(o, e);
        var a = je(o);
        function o() {
          var e;
          m()(this, o);
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          return (
            (e = a.call.apply(a, [this].concat(n))),
            q()(_()(e), 'renderList', function(e) {
              for (var t = [], n = 0; n < e.length; n++)
                t.push(
                  c.a.createElement(
                    Re.a.Item,
                    { key: e[n].name },
                    c.a.createElement('div', null, e[n].title),
                  ),
                );
              return t;
            }),
            e
          );
        }
        return (
          h()(o, [
            {
              key: 'render',
              value: function() {
                var e = this.props.moduleList;
                return c.a.createElement(
                  Re.a,
                  {
                    theme: this.props.theme,
                    onClick: this.props.onMenuClick,
                    selectedKeys: [this.props.headerCurrentModuleName],
                    mode: 'horizontal',
                    style: { height: 48, border: 'none' },
                  },
                  this.renderList(e),
                );
              },
            },
          ]),
          o
        );
      })(c.a.PureComponent);
      xe.propTypes = {
        moduleList: X.a.array.isRequired,
        headerCurrentModuleName: X.a.string.isRequired,
        onMenuClick: X.a.func.isRequired,
        theme: X.a.string.isRequired,
      };
      var we = xe,
        Pe = n('./src/api/index.js'),
        Ce = n('./src/util/token.js');
      function De(r) {
        return function() {
          var e,
            t = E()(r);
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
            var n = E()(this).constructor;
            e = Reflect.construct(t, arguments, n);
          } else e = t.apply(this, arguments);
          return v()(this, e);
        };
      }
      var Ie = (function(e) {
        y()(o, e);
        var a = De(o);
        function o() {
          var t;
          m()(this, o);
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          return (
            (t = a.call.apply(a, [this].concat(n))),
            q()(_()(t), 'state', { fullScreen: !1 }),
            q()(_()(t), 'handleFullscreen', function() {
              var e = document.body;
              t.state.fullScreen
                ? document.exitFullscreen
                  ? document.exitFullscreen()
                  : document.mozCancelFullScreen
                  ? document.mozCancelFullScreen()
                  : document.webkitCancelFullScreen
                  ? document.webkitCancelFullScreen()
                  : document.msExitFullscreen && document.msExitFullscreen()
                : e.requestFullscreen
                ? e.requestFullscreen()
                : e.mozRequestFullScreen
                ? e.mozRequestFullScreen()
                : e.webkitRequestFullScreen
                ? e.webkitRequestFullScreen()
                : e.msRequestFullscreen && e.msRequestFullscreen();
            }),
            t
          );
        }
        return (
          h()(o, [
            {
              key: 'componentDidMount',
              value: function() {
                var e = this,
                  t =
                    document.fullscreenElement ||
                    document.mozFullScreenElement ||
                    document.webkitFullscreenElement ||
                    document.fullScreen ||
                    document.mozFullScreen ||
                    document.webkitIsFullScreen;
                (t = !!t),
                  document.addEventListener('fullscreenchange', function() {
                    e.setState({ fullScreen: !e.state.fullScreen });
                  }),
                  document.addEventListener('mozfullscreenchange', function() {
                    e.setState({ fullScreen: !e.state.fullScreen });
                  }),
                  document.addEventListener(
                    'webkitfullscreenchange',
                    function() {
                      e.setState({ fullScreen: !e.state.fullScreen });
                    },
                  ),
                  document.addEventListener('msfullscreenchange', function() {
                    e.setState({ fullScreen: !e.state.fullScreen });
                  }),
                  this.setState({ fullScreen: t });
              },
            },
            {
              key: 'render',
              value: function() {
                return c.a.createElement(B.a, {
                  onClick: this.handleFullscreen,
                  type: this.state.fullScreen ? 'shrink' : 'arrows-alt',
                });
              },
            },
          ]),
          o
        );
      })(c.a.PureComponent);
      function ke(r) {
        return function() {
          var e,
            t = E()(r);
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
            var n = E()(this).constructor;
            e = Reflect.construct(t, arguments, n);
          } else e = t.apply(this, arguments);
          return v()(this, e);
        };
      }
      var Me = (function(e) {
          y()(o, e);
          var a = ke(o);
          function o() {
            var t;
            m()(this, o);
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            return (
              (t = a.call.apply(a, [this].concat(n))),
              q()(_()(t), 'state', { value: '', focus: !1 }),
              q()(_()(t), 'onChangeValue', function(e) {
                t.setState({ value: e.target.value });
              }),
              q()(_()(t), 'onFocus', function() {
                t.setState({ focus: !0 });
              }),
              q()(_()(t), 'onBlur', function() {
                t.setState({ focus: !1 });
              }),
              t
            );
          }
          return (
            h()(o, [
              {
                key: 'render',
                value: function() {
                  var e = this.state.value;
                  return c.a.createElement(T.a, {
                    placeholder: 'Search',
                    disabled: !0,
                    style: { border: 'none', width: 150 },
                    size: 'small',
                    prefix: c.a.createElement(B.a, {
                      type: this.state.focus ? 'arrow-left' : 'search',
                      style: {
                        color: this.state.focus ? '#1890ff' : 'rgba(0,0,0,.25)',
                      },
                    }),
                    value: e,
                    onChange: this.onChangeValue,
                    onFocus: this.onFocus,
                    onBlur: this.onBlur,
                  });
                },
              },
            ]),
            o
          );
        })(c.a.PureComponent),
        Le = {
          DO_UPDATE_MODULE: 'app/DO_UPDATE_MODULE',
          UPDATE_MODULE_SUCCESS: 'app/DO_UPDATE_MODULE_SUCCESS',
          DO_UPDATE_ACCESSMENU: 'app/DO_UPDATE_ACCESSMENU',
          UPDATE_ACCESSMENU_SUCCESS: 'app/UPDATE_ACCESSMENU_SUCCESS',
          GET_USERINFO_SUCCESS: 'app/GET_USERINFO_SUCCESS',
          DO_GET_USERINFO: 'app/DO_GET_USERINFO',
          DO_INIT_MENU: 'app/DO_INIT_MENU',
          DO_INIT_APPDATA: 'app/DO_INIT_APPDATA',
          INIT_APPDATA_SUCCESS: 'app/INIT_APPDATA_SUCCESS',
        },
        Te = function(e) {
          return { type: Le.DO_UPDATE_ACCESSMENU, payload: e };
        },
        Ne = function(e) {
          return { type: Le.UPDATE_ACCESSMENU_SUCCESS, payload: e };
        },
        Be = function(e) {
          return { type: Le.DO_UPDATE_MODULE, payload: e };
        },
        Ue = function(e) {
          return { type: Le.UPDATE_MODULE_SUCCESS, payload: e };
        },
        _e = function(e) {
          return { type: Le.DO_INIT_MENU, payload: e };
        },
        Qe = function(e) {
          return { type: Le.DO_INIT_APPDATA, payload: e };
        },
        qe = function(e) {
          return { type: Le.INIT_APPDATA_SUCCESS, payload: e };
        },
        Ge = function(e) {
          return { type: Le.GET_USERINFO_SUCCESS, payload: e };
        },
        Fe = function(e) {
          return { type: Le.DO_GET_USERINFO, payload: e };
        },
        He =
          (n('./node_modules/antd/lib/modal/style/index.js'),
          n('./node_modules/antd/lib/modal/index.js')),
        We = n.n(He),
        Ve =
          (n('./node_modules/antd/lib/notification/style/index.js'),
          n('./node_modules/antd/lib/notification/index.js')),
        Xe = n.n(Ve);
      function Je(r) {
        return function() {
          var e,
            t = E()(r);
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
            var n = E()(this).constructor;
            e = Reflect.construct(t, arguments, n);
          } else e = t.apply(this, arguments);
          return v()(this, e);
        };
      }
      var ze = W.a.Item,
        Ye = (function(e) {
          y()(o, e);
          var a = Je(o);
          function o() {
            var e;
            m()(this, o);
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            return (
              (e = a.call.apply(a, [this].concat(n))),
              q()(_()(e), 'state', { modalVisible: !1 }),
              q()(_()(e), 'handleSubmit', function(o) {
                o.preventDefault(),
                  e.props.form.validateFields(
                    (function() {
                      var n = Oe()(
                        Ae.a.mark(function e(t, n) {
                          var r, a;
                          return Ae.a.wrap(
                            function(e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if (t) {
                                      e.next = 12;
                                      break;
                                    }
                                    return (
                                      (r = n.password),
                                      (e.prev = 2),
                                      (e.next = 5),
                                      Object(Pe.resetdb)({ password: r })
                                    );
                                  case 5:
                                    200 === (a = e.sent).statusCode &&
                                      Xe.a.success({ message: a.msg }),
                                      (e.next = 12);
                                    break;
                                  case 9:
                                    (e.prev = 9),
                                      (e.t0 = e.catch(2)),
                                      Xe.a.error({ message: o.msg });
                                  case 12:
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
                      return function(e, t) {
                        return n.apply(this, arguments);
                      };
                    })(),
                  );
              }),
              q()(_()(e), 'modalOnCancel', function() {
                e.setState({ modalVisible: !1 });
              }),
              q()(_()(e), 'iconClick', function() {
                e.setState({ modalVisible: !e.state.modalVisible });
              }),
              e
            );
          }
          return (
            h()(o, [
              {
                key: 'render',
                value: function() {
                  var e = this.props.form.getFieldDecorator;
                  return c.a.createElement(
                    'div',
                    null,
                    c.a.createElement(B.a, {
                      style: { fontSize: '20px', color: '#08c' },
                      type: 'database',
                      onClick: this.iconClick,
                    }),
                    c.a.createElement(
                      We.a,
                      {
                        visible: this.state.modalVisible,
                        title: '重置数据库',
                        onCancel: this.modalOnCancel,
                        footer: null,
                        destroyOnClose: !0,
                      },
                      c.a.createElement(
                        W.a,
                        { onSubmit: this.handleSubmit },
                        c.a.createElement(
                          ze,
                          null,
                          e('password', {
                            rules: [
                              { required: !0, message: '请输入密码!' },
                              { whitespace: !0, message: '不能输入空格!' },
                              { max: 20, message: '不能超过10位!' },
                            ],
                          })(
                            c.a.createElement(T.a.Password, {
                              prefix: c.a.createElement(B.a, {
                                type: 'lock',
                                style: { color: 'rgba(0,0,0,.25)' },
                              }),
                              type: 'password',
                              placeholder: '请输入密码',
                            }),
                          ),
                        ),
                        c.a.createElement(
                          ze,
                          null,
                          c.a.createElement(
                            M.a,
                            {
                              type: 'primary',
                              htmlType: 'submit',
                              loading: this.state.loading,
                              style: { width: '100%' },
                            },
                            '提交',
                          ),
                        ),
                      ),
                    ),
                  );
                },
              },
            ]),
            o
          );
        })(c.a.PureComponent);
      Ye.propTypes = { form: X.a.object.isRequired };
      var Ke = W.a.create({})(Ye);
      function Ze(r) {
        return function() {
          var e,
            t = E()(r);
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
            var n = E()(this).constructor;
            e = Reflect.construct(t, arguments, n);
          } else e = t.apply(this, arguments);
          return v()(this, e);
        };
      }
      var $e = ue.a.Header,
        et = Re.a.SubMenu,
        tt = Re.a.ItemGroup,
        nt = (function(e) {
          y()(a, e);
          var r = Ze(a);
          function a() {
            var i;
            m()(this, a);
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return (
              (i = r.call.apply(r, [this].concat(t))),
              q()(_()(i), 'onMenuClick', function(t) {
                var e = i.props,
                  n = e.history,
                  r = e.dispatch,
                  a = e.location,
                  o = i.props.moduleList.filter(function(e) {
                    return e.leftMenu && e.name === t.key;
                  });
                a.pathname !== o[0].path &&
                  (r(
                    Be({
                      siderModuleMenu: o[0].children,
                      headerCurrentModuleName: o[0].name,
                      siderOpenKeys: [],
                      siderSelectedKey: [],
                    }),
                  ),
                  n.push(o[0].path));
              }),
              q()(_()(i), 'userMenuClick', function(e) {
                'navTab' === e.key &&
                  i.props.toggleNavTab &&
                  i.props.toggleNavTab();
              }),
              q()(
                _()(i),
                'logout',
                Oe()(
                  Ae.a.mark(function e() {
                    var t;
                    return Ae.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t = i.props.dispatch),
                              Object(Ce.b)(),
                              i.props.history.push('/login'),
                              (e.next = 5),
                              Object(Pe.logout)('').then(function(e) {
                                e.data.isLogout &&
                                  t({
                                    type: K.LOGOUT_SUCCESS,
                                    payload: {
                                      isLogin: !1,
                                      isLogout: !0,
                                      error: '',
                                    },
                                  });
                              })
                            );
                          case 5:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                ),
              ),
              q()(_()(i), 'radioOnChange', function(e) {
                var t = i.props.dispatch;
                localStorage.setItem('theme', e.target.value),
                  t(Be({ theme: e.target.value }));
              }),
              q()(_()(i), 'renderLoadble', function(e) {
                var t = new Array(e).fill('0');
                return c.a.createElement(
                  'div',
                  {
                    style: {
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                    },
                  },
                  t.map(function(e, t) {
                    return c.a.createElement('div', {
                      key: t,
                      style: {
                        width: 50,
                        height: 30,
                        marginRight: 10,
                        backgroundColor: '#F0F2F5',
                      },
                    });
                  }),
                );
              }),
              i
            );
          }
          return (
            h()(a, [
              {
                key: 'render',
                value: function() {
                  var e = this.props.itemDisplay,
                    t = this.props,
                    n = t.theme,
                    r = t.moduleList,
                    a = r.filter(function(e) {
                      return e.leftMenu;
                    });
                  return c.a.createElement(
                    $e,
                    {
                      style: {
                        width: '100%',
                        height: 49,
                        backgroundColor: '#fff',
                        borderBottom: 'solid 1px #e8e8e8',
                        padding: 0,
                        position: 'fixed',
                        zIndex: 100,
                      },
                    },
                    c.a.createElement(
                      w.a,
                      { type: 'flex', justify: 'start' },
                      c.a.createElement(
                        C.a,
                        { xs: 4, sm: 4, md: 2, lg: 1, xl: 1 },
                        c.a.createElement(
                          Re.a,
                          { theme: n, style: { border: 'none' } },
                          c.a.createElement(
                            'div',
                            {
                              style: {
                                display: 'flex',
                                height: 48,
                                alignItems: 'center',
                                justifyContent: 'center',
                              },
                              onClick: this.props.toggle,
                            },
                            c.a.createElement(B.a, {
                              type: this.props.collapsed
                                ? 'menu-unfold'
                                : 'menu-fold',
                              style: { fontSize: '20px', color: '#08c' },
                            }),
                          ),
                        ),
                      ),
                      c.a.createElement(
                        C.a,
                        { xs: 14, sm: 16, md: 10, lg: 10, xl: 10 },
                        r.length
                          ? c.a.createElement(we, {
                              moduleList: a,
                              onMenuClick: this.onMenuClick,
                              headerCurrentModuleName: this.props
                                .headerCurrentModuleName,
                              theme: n,
                            })
                          : this.renderLoadble(5),
                      ),
                      c.a.createElement(
                        C.a,
                        {
                          sm: 12,
                          md: 7,
                          lg: 6,
                          xl: 6,
                          style: { display: e ? 'block' : 'none' },
                        },
                        c.a.createElement(
                          Re.a,
                          { theme: n, style: { border: 'none' } },
                          c.a.createElement(
                            'div',
                            {
                              style: {
                                display: 'flex',
                                height: 48,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-around',
                              },
                            },
                            c.a.createElement(Me, null),
                            c.a.createElement(
                              'a',
                              {
                                href: 'https://github.com/songtianen/AU-admin',
                              },
                              c.a.createElement(B.a, {
                                style: { fontSize: '20px', color: '#08c' },
                                type: 'github',
                              }),
                            ),
                            c.a.createElement(Ie, null),
                            c.a.createElement(Ke, null),
                          ),
                        ),
                      ),
                      c.a.createElement(
                        C.a,
                        { xs: 6, sm: 4, md: 5, lg: 4, xl: 4, xxl: 4 },
                        c.a.createElement(
                          Re.a,
                          {
                            mode: 'horizontal',
                            style: {
                              height: 48,
                              border: 'none',
                              textAlign: 'center',
                            },
                            onClick: this.userMenuClick,
                            theme: n,
                          },
                          c.a.createElement(
                            et,
                            {
                              title: c.a.createElement(
                                ge.a,
                                { dot: !0 },
                                c.a.createElement(
                                  be.a,
                                  { shape: 'circle' },
                                  'User',
                                ),
                              ),
                            },
                            c.a.createElement(
                              tt,
                              { title: '用户中心' },
                              c.a.createElement(
                                Re.a.Item,
                                { key: 'navTab' },
                                '你好:'.concat(this.props.name, '-隐藏tabs'),
                              ),
                              c.a.createElement(
                                Re.a.Item,
                                { key: 'theme' },
                                c.a.createElement(
                                  pe.a.Group,
                                  { onChange: this.radioOnChange, value: n },
                                  c.a.createElement(
                                    pe.a,
                                    { value: 'light' },
                                    c.a.createElement(fe.a, null, 'light'),
                                  ),
                                  c.a.createElement(
                                    pe.a,
                                    { value: 'dark' },
                                    c.a.createElement(
                                      fe.a,
                                      { color: '#001529' },
                                      'dark',
                                    ),
                                  ),
                                ),
                              ),
                              c.a.createElement(
                                Re.a.Item,
                                { key: 'setting:1' },
                                c.a.createElement(B.a, { type: 'user' }),
                                '个人信息',
                              ),
                              c.a.createElement(
                                Re.a.Item,
                                { key: 'logout' },
                                c.a.createElement(
                                  'span',
                                  {
                                    onClick: this.logout,
                                    style: {
                                      display: 'inline-block',
                                      width: '100%',
                                      height: '100%',
                                    },
                                  },
                                  c.a.createElement(B.a, { type: 'logout' }),
                                  '退出登录',
                                ),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                  );
                },
              },
            ]),
            a
          );
        })(c.a.PureComponent);
      nt.propTypes = {
        dispatch: X.a.func.isRequired,
        moduleList: X.a.array.isRequired,
        headerCurrentModuleName: X.a.string.isRequired,
        toggle: X.a.func.isRequired,
        collapsed: X.a.bool.isRequired,
        name: X.a.string.isRequired,
        history: X.a.object.isRequired,
        location: X.a.object.isRequired,
        toggleNavTab: X.a.func.isRequired,
        itemDisplay: X.a.bool.isRequired,
        theme: X.a.string.isRequired,
      };
      var rt = Object(J.a)(
        Object(O.b)(function(e) {
          return {
            name: e.app.name,
            theme: e.app.theme,
            avatar: e.app.avatar,
            headerCurrentModuleName: e.app.headerCurrentModuleName,
            moduleList: e.app.moduleList,
          };
        })(nt),
      );
      function at(r) {
        return function() {
          var e,
            t = E()(r);
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
            var n = E()(this).constructor;
            e = Reflect.construct(t, arguments, n);
          } else e = t.apply(this, arguments);
          return v()(this, e);
        };
      }
      var ot = ue.a.Footer,
        it = (function(e) {
          y()(n, e);
          var t = at(n);
          function n() {
            return m()(this, n), t.apply(this, arguments);
          }
          return (
            h()(n, [
              {
                key: 'render',
                value: function() {
                  var e = this.props.itemDisplay;
                  return c.a.createElement(
                    ot,
                    null,
                    c.a.createElement(
                      'div',
                      {
                        style: {
                          display: e ? 'block' : 'none',
                          textAlign: 'center',
                          color: '#bebebe',
                          fontSize: '12px',
                        },
                      },
                      c.a.createElement(
                        'a',
                        {
                          href: 'https://github.com/songtianen',
                          target: '_blank',
                          rel: 'noopener noreferrer',
                        },
                        'AU-admin    ',
                        c.a.createElement(B.a, {
                          type: 'github',
                          size: 'large',
                        }),
                      ),
                      c.a.createElement(
                        'div',
                        null,
                        'Copyright',
                        c.a.createElement(B.a, {
                          type: 'copyright',
                          style: { paddingRight: '2px', paddingLeft: '1px' },
                        }),
                        c.a.createElement(
                          'span',
                          null,
                          '2019 多元宇宙科技有限公司',
                        ),
                        c.a.createElement(
                          'div',
                          null,
                          'Email:',
                          c.a.createElement(
                            'a',
                            {
                              style: { color: '#bebebe' },
                              href:
                                'mailto:songten@icloud.com?subject=test&cc=抄送人邮箱&subject=主题&body=内容',
                            },
                            'songten@icloud.com',
                          ),
                        ),
                      ),
                    ),
                    e
                      ? ''
                      : c.a.createElement(
                          'div',
                          {
                            style: {
                              textAlign: 'center',
                              color: '#bebebe',
                              fontSize: '12px',
                            },
                          },
                          c.a.createElement(
                            'a',
                            {
                              href: 'https://github.com/songtianen',
                              target: '_blank',
                              rel: 'noopener noreferrer',
                            },
                            'AU-admin    ',
                            c.a.createElement(B.a, {
                              type: 'github',
                              size: 'large',
                            }),
                          ),
                        ),
                  );
                },
              },
            ]),
            n
          );
        })(c.a.PureComponent);
      it.propTypes = { itemDisplay: X.a.bool.isRequired };
      var st = it,
        lt = n('./node_modules/react-router-dom/es/Link.js');
      function ct(r) {
        return function() {
          var e,
            t = E()(r);
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
            var n = E()(this).constructor;
            e = Reflect.construct(t, arguments, n);
          } else e = t.apply(this, arguments);
          return v()(this, e);
        };
      }
      var ut = Re.a.SubMenu,
        dt = Re.a.Item,
        pt = ue.a.Sider,
        mt = (function(e) {
          y()(a, e);
          var r = ct(a);
          function a() {
            var o;
            m()(this, a);
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return (
              (o = r.call.apply(r, [this].concat(t))),
              q()(_()(o), 'renderMenuItem', function(e) {
                var t = e.path,
                  n = e.name,
                  r = e.title,
                  a = e.icon;
                return c.a.createElement(
                  dt,
                  { key: n },
                  c.a.createElement(
                    lt.a,
                    { to: t },
                    c.a.createElement(
                      'span',
                      null,
                      a &&
                        c.a.createElement(B.a, {
                          type: a,
                          style: { color: '#08c' },
                        }),
                      c.a.createElement('span', null, r),
                    ),
                  ),
                );
              }),
              q()(_()(o), 'renderSubMenu', function(e) {
                var t = e.name,
                  n = e.title,
                  r = e.icon,
                  a = e.children;
                return c.a.createElement(
                  ut,
                  {
                    key: t,
                    title: c.a.createElement(
                      'span',
                      null,
                      r &&
                        c.a.createElement(B.a, {
                          type: r,
                          style: { color: '#08c' },
                        }),
                      c.a.createElement('span', null, n),
                    ),
                  },
                  a &&
                    a.map(function(e) {
                      return e.children && e.children.length
                        ? o.renderSubMenu(e)
                        : o.renderMenuItem(e);
                    }),
                );
              }),
              q()(_()(o), 'renderLoadble', function(e) {
                var t = new Array(e).fill('0');
                return c.a.createElement(
                  'div',
                  {
                    style: {
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    },
                  },
                  t.map(function(e, t) {
                    return c.a.createElement('div', {
                      key: t,
                      style: {
                        width: 150,
                        height: 30,
                        marginTop: 20,
                        backgroundColor: '#F0F2F5',
                      },
                    });
                  }),
                );
              }),
              o
            );
          }
          return (
            h()(a, [
              {
                key: 'render',
                value: function() {
                  var t = this,
                    e = this.props,
                    n = e.siderModuleMenu,
                    r = e.menuOpenchange,
                    a = e.siderOpenKeys,
                    o = e.selectedKey,
                    i = e.menuOnClick,
                    s = e.responsive;
                  return c.a.createElement(
                    pt,
                    {
                      breakpoint: 'lg',
                      collapsedWidth: s ? 0 : void 0,
                      trigger: null,
                      collapsible: !0,
                      collapsed: this.props.collapsed,
                      width: 180,
                      theme: this.props.theme,
                      style: { borderRight: 'solid 1px #e8e8e8' },
                    },
                    c.a.createElement(
                      Re.a,
                      {
                        theme: this.props.theme,
                        style: {
                          height: 49,
                          width: 180,
                          overflow: 'hidden',
                          borderBottom: 'solid 1px #e8e8e8',
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'start',
                          alignItems: 'center',
                          position: 'fixed',
                          zIndex: 100,
                        },
                      },
                      c.a.createElement('img', {
                        src: Y.a,
                        alt: 'logo',
                        style: { height: 34, width: 34, marginLeft: 22 },
                      }),
                      c.a.createElement(
                        'div',
                        {
                          style: {
                            fontWeight: 'bold',
                            fontSize: '18px',
                            paddingLeft: '10px',
                            color: 'rgb(97, 218, 251)',
                            display: this.props.collapsed ? 'none' : 'block',
                          },
                        },
                        'AU-andmin',
                      ),
                    ),
                    c.a.createElement(
                      Re.a,
                      {
                        mode: 'inline',
                        theme: this.props.theme,
                        onClick: i,
                        onOpenChange: r,
                        selectedKeys: o,
                        openKeys: a,
                        style: {
                          height: '100%',
                          overflow: 'auto',
                          paddingTop: 49,
                          border: 'none',
                        },
                      },
                      n.length
                        ? n.map(function(e) {
                            return e.children && e.children.length
                              ? t.renderSubMenu(e)
                              : t.renderMenuItem(e);
                          })
                        : this.renderLoadble(7),
                    ),
                  );
                },
              },
            ]),
            a
          );
        })(c.a.PureComponent);
      mt.propTypes = {
        responsive: X.a.bool.isRequired,
        collapsed: X.a.bool.isRequired,
        siderModuleMenu: X.a.array.isRequired,
        menuOpenchange: X.a.func.isRequired,
        menuOnClick: X.a.func.isRequired,
        selectedKey: X.a.array.isRequired,
        siderOpenKeys: X.a.array.isRequired,
        theme: X.a.string.isRequired,
      };
      var ft = mt,
        ht = 'app';
      function gt(t, e) {
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
      function yt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? gt(Object(n), !0).forEach(function(e) {
                q()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : gt(Object(n)).forEach(function(e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e),
                );
              });
        }
        return t;
      }
      var bt = {
        actions: r,
        constants: a,
        reducer: function(e, t) {
          switch (
            ((e = e || {
              name: '',
              avatar: '',
              isAdmin: '',
              token: '',
              theme: '',
              permission: [],
              spinLoading: !1,
              toPath: '/',
              siderSelectedKey: [],
              siderOpenKeys: [],
              headerCurrentModuleName: '',
              moduleList: [],
              siderModuleMenu: [],
            }),
            t.type)
          ) {
            case Le.UPDATE_ACCESSMENU_SUCCESS:
            case Le.INIT_APPDATA_SUCCESS:
              return yt({}, e, {}, t.payload);
            case Le.UPDATE_MODULE_SUCCESS:
              return yt({}, e, {
                headerCurrentModuleName: t.payload.headerCurrentModuleName,
                siderModuleMenu: t.payload.siderModuleMenu,
              });
            case Le.GET_USERINFO_SUCCESS:
              return yt({}, e, {}, t.payload);
            default:
              return e;
          }
        },
      };
      function vt(r) {
        return function() {
          var e,
            t = E()(r);
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
            var n = E()(this).constructor;
            e = Reflect.construct(t, arguments, n);
          } else e = t.apply(this, arguments);
          return v()(this, e);
        };
      }
      var At = bt.actions.updateModuleAction,
        Et = (function(e) {
          y()(o, e);
          var a = vt(o);
          function o() {
            var t;
            m()(this, o);
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            return (
              (t = a.call.apply(a, [this].concat(n))),
              q()(_()(t), 'menuOpenchange', function(e) {
                (0, t.props.dispatch)(At({ siderOpenKeys: e }));
              }),
              q()(_()(t), 'menuOnClick', function(e) {
                (0, t.props.dispatch)(At({ siderSelectedKey: [e.key] }));
              }),
              t
            );
          }
          return (
            h()(o, [
              {
                key: 'render',
                value: function() {
                  return c.a.createElement(ft, {
                    responsive: this.props.responsive,
                    collapsed: this.props.collapsed,
                    siderModuleMenu: this.props.siderModuleMenu,
                    menuOpenchange: this.menuOpenchange,
                    selectedKey: this.props.siderSelectedKey,
                    siderOpenKeys: this.props.siderOpenKeys,
                    menuOnClick: this.menuOnClick,
                    theme: this.props.theme,
                  });
                },
              },
            ]),
            o
          );
        })(c.a.PureComponent);
      Et.propTypes = {
        responsive: X.a.bool.isRequired,
        collapsed: X.a.bool.isRequired,
        siderModuleMenu: X.a.array.isRequired,
        siderSelectedKey: X.a.array.isRequired,
        siderOpenKeys: X.a.array.isRequired,
        dispatch: X.a.func.isRequired,
        theme: X.a.string.isRequired,
      };
      function Ot() {
        return c.a.createElement(
          'div',
          { style: { paddingLeft: 20, paddingTop: 20 } },
          c.a.createElement(
            Pt.a,
            null,
            c.a.createElement('rect', {
              x: '0',
              y: '10',
              rx: '2',
              ry: '2',
              width: '350',
              height: '50',
            }),
            c.a.createElement('rect', {
              x: '0',
              y: '70',
              rx: '2',
              ry: '2',
              width: '100',
              height: '20',
            }),
            c.a.createElement('rect', {
              x: '0',
              y: '100',
              rx: '2',
              ry: '2',
              width: '250',
              height: '20',
            }),
            c.a.createElement('rect', {
              x: '0',
              y: '100',
              rx: '2',
              ry: '2',
              width: '250',
              height: '20',
            }),
          ),
        );
      }
      var St = Object(O.b)(function(e) {
          return {
            siderSelectedKey: e.app.siderSelectedKey,
            siderOpenKeys: e.app.siderOpenKeys,
            theme: e.app.theme,
          };
        })(Et),
        Rt =
          (n('./node_modules/antd/lib/tabs/style/index.js'),
          n('./node_modules/antd/lib/tabs/index.js')),
        jt = n.n(Rt),
        xt = n('./node_modules/react-loadable/lib/index.js'),
        wt = n.n(xt),
        Pt = n(
          './node_modules/react-content-loader/dist/react-content-loader.es.js',
        ),
        Ct = wt()({
          loader: function() {
            return Promise.all([n.e('vendor'), n.e(0), n.e(6)]).then(
              n.bind(null, './src/views/pages/Menu/index.jsx'),
            );
          },
          loading: Ot,
        }),
        Dt = wt()({
          loader: function() {
            return Promise.all([n.e('vendor'), n.e(0), n.e(5)]).then(
              n.bind(null, './src/views/pages/Function/index.jsx'),
            );
          },
          loading: Ot,
        }),
        It = wt()({
          loader: function() {
            return Promise.all([n.e('vendor'), n.e(0), n.e(1)]).then(
              n.bind(null, './src/views/pages/Role/component/index.jsx'),
            );
          },
          loading: Ot,
        }),
        kt = wt()({
          loader: function() {
            return Promise.all([n.e('vendor'), n.e(3)]).then(
              n.bind(null, './src/views/common/Welcome/index.jsx'),
            );
          },
          loading: Ot,
        }),
        Mt = wt()({
          loader: function() {
            return Promise.all([n.e('vendor'), n.e(0), n.e(13)]).then(
              n.bind(
                null,
                './src/views/pages/RolePermisson/component/index.jsx',
              ),
            );
          },
          loading: Ot,
        }),
        Lt = wt()({
          loader: function() {
            return Promise.all([n.e('vendor'), n.e(0), n.e(9)]).then(
              n.bind(null, './src/views/pages/RoleUser/component/index.jsx'),
            );
          },
          loading: Ot,
        }),
        Tt = wt()({
          loader: function() {
            return Promise.all([n.e('vendor'), n.e(0), n.e(7)]).then(
              n.bind(null, './src/views/pages/UserRole/component/index.jsx'),
            );
          },
          loading: Ot,
        }),
        Nt = wt()({
          loader: function() {
            return Promise.all([n.e('vendor'), n.e(0), n.e(4)]).then(
              n.bind(null, './src/views/pages/Department/component/index.jsx'),
            );
          },
          loading: Ot,
        }),
        Bt = wt()({
          loader: function() {
            return Promise.all([n.e('vendor'), n.e(0), n.e(1)]).then(
              n.bind(null, './src/views/pages/Role/component/index.jsx'),
            );
          },
          loading: Ot,
        }),
        Ut = wt()({
          loader: function() {
            return Promise.all([n.e('vendor'), n.e(0), n.e(2)]).then(
              n.bind(null, './src/views/pages/Users/component/index.jsx'),
            );
          },
          loading: Ot,
        }),
        _t = wt()({
          loader: function() {
            return n
              .e(11)
              .then(n.bind(null, './src/views/common/Page404/index.jsx'));
          },
          loading: Ot,
        }),
        Qt = wt()({
          loader: function() {
            return n
              .e(10)
              .then(n.t.bind(null, './src/views/common/Page403/index.jsx', 7));
          },
          loading: Ot,
        }),
        qt = {
          menu: Ct,
          welcome: kt,
          function: Dt,
          role: It,
          rolepermission: Mt,
          roleuser: Lt,
          userrole: Tt,
          position: Bt,
          department: Nt,
          usersEdit: Ut,
          page404: _t,
          page403: Qt,
          requestlog: wt()({
            loader: function() {
              return n
                .e(12)
                .then(n.bind(null, './src/views/common/RequsetLog/index.jsx'));
            },
            loading: Ot,
          }),
          error_404: _t,
          error_403: Qt,
          notdone: wt()({
            loader: function() {
              return Promise.all([n.e('vendor'), n.e(8)]).then(
                n.bind(null, './src/views/echarts/bar/index.js'),
              );
            },
            loading: Ot,
          }),
        },
        Gt = n('./src/util/util.js');
      n('./src/views/layout/Content/index.less');
      function Ft(r) {
        return function() {
          var e,
            t = E()(r);
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
            var n = E()(this).constructor;
            e = Reflect.construct(t, arguments, n);
          } else e = t.apply(this, arguments);
          return v()(this, e);
        };
      }
      var Ht = jt.a.TabPane,
        Wt = (function(e) {
          y()(a, e);
          var r = Ft(a);
          function a() {
            var u;
            m()(this, a);
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return (
              (u = r.call.apply(r, [this].concat(t))),
              q()(_()(u), 'state', { currentPage: '', openPages: [] }),
              q()(_()(u), 'tabsOnChange', function(t) {
                var e = u.props,
                  n = e.dispatch,
                  r = e.moduleList,
                  a = u.state.openPages.find(function(e) {
                    return e.name === t;
                  }),
                  o = Gt.a.findCurrentMenuNameAndModule(r, a.path);
                if (o.name) {
                  var i = Gt.a.findSiderComponentSelectedNameAndOpenKeys(
                    JSON.parse(JSON.stringify(o.children)),
                    a.path,
                  );
                  n(
                    Be({
                      siderModuleMenu: o.children,
                      siderSelectedKey: i.siderKey,
                      headerCurrentModuleName: o.name,
                      siderOpenKeys: i.siderOpenKeys,
                    }),
                  );
                }
                u.props.history.push(a.path);
              }),
              q()(_()(u), 'onEdit', function(e, t) {
                u[t](e);
              }),
              q()(_()(u), 'remove', function(n) {
                var r,
                  e = u.props,
                  t = e.dispatch,
                  a = e.moduleList,
                  o = u.state.currentPage;
                u.state.openPages.forEach(function(e, t) {
                  e.name === n && (r = t - 1);
                });
                var i = u.state.openPages.filter(function(e) {
                  return e.name !== n;
                });
                0 <= r && o === n && (o = i[r].name),
                  u.setState({ openPages: i, currentPage: o });
                var s = u.state.openPages.filter(function(e) {
                    return e.name === o;
                  })[0].path,
                  l = Gt.a.findCurrentMenuNameAndModule(a, s),
                  c = Gt.a.findSiderComponentSelectedNameAndOpenKeys(
                    JSON.parse(JSON.stringify(l.children)),
                    s,
                  );
                t(
                  Be({
                    siderModuleMenu: l.children,
                    siderSelectedKey: c.siderKey,
                    headerCurrentModuleName: l.name,
                    siderOpenKeys: c.siderOpenKeys,
                  }),
                ),
                  u.props.history.push(s);
              }),
              u
            );
          }
          return (
            h()(a, [
              {
                key: 'componentWillReceiveProps',
                value: function(e) {
                  if (e.show && 0 !== e.moduleList.length) {
                    var t = e.location,
                      n = e.moduleList,
                      r = Gt.a.findInModuleList(n, 'path', t.pathname);
                    if (r && r.length) {
                      var a = r[0],
                        o = this.state.openPages.some(function(e) {
                          return e.name === a.name;
                        });
                      if (!o) {
                        var i = this.state.openPages;
                        i.push({
                          name: a.name,
                          title: a.title,
                          path: a.path,
                          closable: !0,
                        }),
                          this.setState({ openPages: i, currentPage: a.name });
                      }
                      o &&
                        this.state.currentPage !== a.name &&
                        this.setState({ currentPage: a.name });
                    }
                    if (0 === r.length) {
                      if ('/' === t.pathname) {
                        var s = this.state.openPages,
                          l = s.some(function(e) {
                            return 'welcome' === e.name;
                          });
                        return (
                          l && this.setState({ currentPage: 'welcome' }),
                          void (
                            l ||
                            (s.push({
                              name: 'welcome',
                              title: '欢迎',
                              path: '/',
                              closable: !0,
                            }),
                            this.setState({
                              openPages: s,
                              currentPage: 'welcome',
                            }))
                          )
                        );
                      }
                      var c = this.state.openPages,
                        u = c.some(function(e) {
                          return 'page404' === e.name;
                        }),
                        d = 'page404' === this.state.currentPage;
                      u ||
                        (c.push({
                          name: 'page404',
                          title: '页面不存在',
                          path: t.pathname,
                          closable: !0,
                        }),
                        this.setState({
                          openPages: c,
                          currentPage: 'page404',
                        })),
                        u && !d && this.setState({ currentPage: 'page404' });
                    }
                  }
                },
              },
              {
                key: 'render',
                value: function() {
                  return c.a.createElement(
                    'div',
                    { style: this.props.style },
                    c.a.createElement(
                      jt.a,
                      {
                        hideAdd: !0,
                        type: 'editable-card',
                        activeKey: this.state.currentPage,
                        onEdit: this.onEdit,
                        onChange: this.tabsOnChange,
                        tabBarStyle: {
                          background: '#fff',
                          width: '100%',
                          overflow: 'hidden',
                          border: 'none',
                          padding: '0 50px',
                          borderBottom: 'solid 1px #e8e8e8',
                          margin: 0,
                        },
                      },
                      this.state.openPages.map(function(e) {
                        var t = qt[e.name] ? qt[e.name] : qt.notdone;
                        return c.a.createElement(
                          Ht,
                          { tab: e.title, closable: e.closable, key: e.name },
                          c.a.createElement(
                            'div',
                            { style: { padding: '10px' } },
                            c.a.createElement(t, null),
                          ),
                        );
                      }),
                    ),
                  );
                },
              },
            ]),
            a
          );
        })(c.a.PureComponent);
      Wt.propTypes = {
        dispatch: X.a.func.isRequired,
        style: X.a.object.isRequired,
        history: X.a.object.isRequired,
        location: X.a.object.isRequired,
        moduleList: X.a.array.isRequired,
        show: X.a.bool.isRequired,
      };
      var Vt = Object(J.a)(
        Object(O.b)(function(e) {
          return { moduleList: e.app.moduleList };
        })(Wt),
      );
      n('./src/views/layout/layout.less');
      function Xt(r) {
        return function() {
          var e,
            t = E()(r);
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
            var n = E()(this).constructor;
            e = Reflect.construct(t, arguments, n);
          } else e = t.apply(this, arguments);
          return v()(this, e);
        };
      }
      var Jt = ue.a.Content,
        zt = bt.actions.initAppDataAction,
        Yt = (function(e) {
          y()(o, e);
          var a = Xt(o);
          function o() {
            var r;
            m()(this, o);
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return (
              (r = a.call.apply(a, [this].concat(t))),
              q()(_()(r), 'state', {
                collapsed: !1,
                responsive: !1,
                navTabShow: !0,
                headerItemDisplay: !0,
                layOutHeight: '',
              }),
              q()(_()(r), 'getClientWidth', function() {
                var e = document.body.clientWidth,
                  t = document.body.clientHeight;
                r.setState({
                  responsive: e <= 991,
                  collapsed: e <= 991,
                  layOutHeight: t,
                }),
                  e < 577 || e < 768
                    ? r.setState({ headerItemDisplay: !1 })
                    : 768 <= e && r.setState({ headerItemDisplay: !0 });
              }),
              q()(_()(r), 'toggle', function() {
                r.setState({ collapsed: !r.state.collapsed });
              }),
              q()(_()(r), 'toggleNavTab', function() {
                r.setState({ navTabShow: !r.state.navTabShow });
              }),
              q()(_()(r), 'initAppData', function() {
                if (Object(Ce.a)()) {
                  var e = r.props,
                    t = e.dispatch,
                    n = e.location;
                  t(zt(n.pathname));
                } else r.props.history.push('/login');
              }),
              r
            );
          }
          return (
            h()(o, [
              {
                key: 'componentWillMount',
                value: function() {
                  this.getClientWidth();
                },
              },
              {
                key: 'componentDidMount',
                value: function() {
                  var e = this;
                  this.initAppData(),
                    (window.onresize = function() {
                      e.getClientWidth();
                    }),
                    document.getElementById('StartLoading') &&
                      document.body.removeChild(
                        document.getElementById('StartLoading'),
                      );
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props.siderModuleMenu;
                  return c.a.createElement(
                    ue.a,
                    { style: { height: this.state.layOutHeight } },
                    c.a.createElement(St, {
                      responsive: this.state.responsive,
                      collapsed: this.state.collapsed,
                      siderModuleMenu: e,
                    }),
                    c.a.createElement(
                      ue.a,
                      null,
                      c.a.createElement(rt, {
                        collapsed: this.state.collapsed,
                        toggle: this.toggle,
                        toggleNavTab: this.toggleNavTab,
                        navTabshow: this.state.navTabShow,
                        itemDisplay: this.state.headerItemDisplay,
                      }),
                      c.a.createElement(
                        Jt,
                        { style: { height: '100%', overflow: 'auto' } },
                        c.a.createElement(Vt, {
                          style: {
                            marginTop: 49,
                            width: '100%',
                            height: '100%',
                            display: this.state.navTabShow ? 'block' : 'none',
                          },
                          show: this.state.navTabShow,
                        }),
                      ),
                      c.a.createElement(st, {
                        itemDisplay: this.state.headerItemDisplay,
                      }),
                    ),
                  );
                },
              },
            ]),
            o
          );
        })(c.a.PureComponent);
      Yt.propTypes = {
        dispatch: X.a.func.isRequired,
        history: X.a.object.isRequired,
        location: X.a.object.isRequired,
        siderModuleMenu: X.a.array.isRequired,
      };
      function Kt() {
        return c.a.createElement(
          S.a,
          null,
          c.a.createElement(
            R.a,
            null,
            c.a.createElement(j.a, {
              exact: !0,
              path: '/login',
              component: ne,
            }),
            c.a.createElement(j.a, {
              exact: !0,
              path: '/register',
              component: le,
            }),
            c.a.createElement(j.a, { path: '/', component: Zt }),
          ),
        );
      }
      var Zt = Object(J.a)(
          Object(O.b)(function(e) {
            var t = e.app;
            return { name: t.name, siderModuleMenu: t.siderModuleMenu };
          })(Yt),
        ),
        $t = n(
          './node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js',
        ),
        en = n('./node_modules/redux/es/redux.js'),
        tn = 'spin/SPIN_LOADING',
        nn = function(e) {
          return { type: tn, spinLoading: e };
        },
        rn =
          (n('./node_modules/antd/lib/spin/style/index.js'),
          n('./node_modules/antd/lib/spin/index.js')),
        an = n.n(rn);
      function on(r) {
        return function() {
          var e,
            t = E()(r);
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
            var n = E()(this).constructor;
            e = Reflect.construct(t, arguments, n);
          } else e = t.apply(this, arguments);
          return v()(this, e);
        };
      }
      var sn = (function(e) {
        y()(n, e);
        var t = on(n);
        function n(e) {
          return m()(this, n), t.call(this, e);
        }
        return (
          h()(n, [
            { key: 'componentDidMount', value: function() {} },
            {
              key: 'render',
              value: function() {
                var e = this.props.pageRouters;
                return c.a.createElement(
                  an.a,
                  { size: 'large', spinning: this.props.spinLoading },
                  c.a.createElement(e, null),
                );
              },
            },
          ]),
          n
        );
      })(c.a.PureComponent);
      sn.propTypes = {
        pageRouters: X.a.func.isRequired,
        spinLoading: X.a.bool.isRequired,
      };
      var ln = Object(O.b)(function(e) {
          return { spinLoading: e.spin.spinLoading };
        })(sn),
        cn = 'spin';
      function un(t, e) {
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
      var dn = {
        actions: i,
        Spin: ln,
        constants: s,
        reducer: function(e, t) {
          switch (((e = e || { spinLoading: !1 }), t.type)) {
            case tn:
              return (function(t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = null != arguments[e] ? arguments[e] : {};
                  e % 2
                    ? un(Object(n), !0).forEach(function(e) {
                        q()(t, e, n[e]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        t,
                        Object.getOwnPropertyDescriptors(n),
                      )
                    : un(Object(n)).forEach(function(e) {
                        Object.defineProperty(
                          t,
                          e,
                          Object.getOwnPropertyDescriptor(n, e),
                        );
                      });
                }
                return t;
              })({}, e, { spinLoading: t.spinLoading });
            default:
              return e;
          }
        },
        saga: n('./src/views/layout/Spin/states/saga.js'),
        types: o,
      };
      function pn(t, e) {
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
      function mn(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? pn(Object(n), !0).forEach(function(e) {
                q()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : pn(Object(n)).forEach(function(e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e),
                );
              });
        }
        return t;
      }
      var fn = { NAME: 'login' },
        hn = function(e, t) {
          switch (
            ((e = e || { isLogin: !1, error: '', isLogout: !1 }), t.type)
          ) {
            case K.BEFORE_LOGIN:
              return mn({}, e, { isLogin: !1, error: '' });
            case K.LOGIN_SUCCESS:
              return mn({}, e, {}, t.payload.data, { isLogout: !1 });
            case K.REGISTER_SUCCESS:
              return mn({}, e, {}, t.payload.data, {
                isLogin: !0,
                isLogout: !1,
              });
            case K.LOGIN_ERROR:
              return mn({}, e, {}, t.payload, { error: t.payload.msg });
            case K.LOGOUT_SUCCESS:
              return mn({}, e, {}, t.payload);
            default:
              return e;
          }
        },
        gn = {
          ADD_ROLE: 'role/ADD_ROLE',
          ROLE_PAGELIST: 'role/ROLE_PAGELIST',
          DEL_ROLES: 'role/DEL_ROLES',
          DEL_ROLE: 'role/DEL_ROLE',
          SAVE_ROLE: 'role/SAVE_ROLE',
        };
      function yn(t, e) {
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
      var bn = { NAME: 'role' },
        vn = function(e, t) {
          switch (
            ((e = e || {
              rolePagedList: '',
              statusCode: '',
              error: !1,
              msg: '',
            }),
            t.type)
          ) {
            case gn.ROLE_PAGELIST:
              return (function(t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = null != arguments[e] ? arguments[e] : {};
                  e % 2
                    ? yn(Object(n), !0).forEach(function(e) {
                        q()(t, e, n[e]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        t,
                        Object.getOwnPropertyDescriptors(n),
                      )
                    : yn(Object(n)).forEach(function(e) {
                        Object.defineProperty(
                          t,
                          e,
                          Object.getOwnPropertyDescriptor(n, e),
                        );
                      });
                }
                return t;
              })({}, e, { rolePagedList: t.payload });
            default:
              return e;
          }
        },
        An = 'header/INIT_MENU';
      var En,
        On = { NAME: 'header' },
        Sn = Object(en.c)(
          ((En = {}),
          q()(En, fn.NAME, hn),
          q()(En, bn.NAME, vn),
          q()(En, bt.constants.NAME, bt.reducer),
          q()(En, dn.constants.NAME, dn.reducer),
          q()(En, On.NAME, dn.reducer),
          En),
        ),
        Rn = Object($t.a)(),
        jn = [Rn],
        xn =
          (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
            : en.d,
          en.a.apply(void 0, jn)),
        wn = Object(en.e)(Sn, xn),
        Pn = n('./node_modules/@babel/runtime/helpers/toConsumableArray.js'),
        Cn = n.n(Pn),
        Dn = n(
          './node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js',
        ),
        In = n('./node_modules/@babel/runtime/helpers/slicedToArray.js'),
        kn = n.n(In),
        Mn = Ae.a.mark(_n),
        Ln = Ae.a.mark(Qn),
        Tn = Ae.a.mark(qn),
        Nn = Ae.a.mark(Gn);
      function Bn(t, e) {
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
      function Un(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Bn(Object(n), !0).forEach(function(e) {
                q()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : Bn(Object(n)).forEach(function(e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e),
                );
              });
        }
        return t;
      }
      function _n(t) {
        var n, r, a, o, i, s, l, c, u, d, p, m, f, h, g;
        return Ae.a.wrap(
          function(e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (n = t.payload),
                    (r = localStorage.getItem('theme') || 'light'),
                    (e.prev = 2),
                    (e.next = 5),
                    Promise.all([
                      Object(Pe.getAccessMenu)(),
                      Object(Pe.getUserInfo)(),
                    ])
                  );
                case 5:
                  if (
                    ((a = e.sent),
                    (o = kn()(a, 2)),
                    (i = o[0]),
                    200 === (s = o[1]).statusCode && 200 === i.statusCode)
                  )
                    return (
                      localStorage.setItem(
                        'accessMenu',
                        JSON.stringify(i.data),
                      ),
                      (l = i.data),
                      (c = JSON.parse(JSON.stringify(l))),
                      (u = Gt.a.findCurrentMenuNameAndModule(c, n)),
                      (d = JSON.parse(JSON.stringify(u.children))),
                      (p = Gt.a.findSiderComponentSelectedNameAndOpenKeys(
                        d,
                        n,
                      )),
                      (m = {
                        headerCurrentModuleName: u.name,
                        siderModuleMenu: u.children,
                        moduleList: l,
                        siderSelectedKey: p.siderKey,
                        siderOpenKeys: p.siderOpenKeys,
                        theme: r,
                      }),
                      (f = s.data.isAdmin),
                      (h = {
                        name: s.data.userName,
                        avatar: s.data.avatarUrl,
                        isAdmin: f,
                        userRole: s.data.userRole,
                        permission: s.data.userPermission,
                        userId: s.data.userId,
                      }),
                      localStorage.setItem(
                        'permission',
                        JSON.stringify(s.data.userPermission),
                      ),
                      localStorage.setItem('isAdmin', s.data.isAdmin),
                      (g = Un({}, h, {}, m)),
                      (e.next = 24),
                      Object(Dn.c)(qe(g))
                    );
                  e.next = 24;
                  break;
                case 24:
                  e.next = 30;
                  break;
                case 26:
                  (e.prev = 26),
                    (e.t0 = e.catch(2)),
                    '403' === e.t0.message &&
                      Xe.a.error({ message: '没有请求用户信息的权限' });
                case 30:
                case 'end':
                  return e.stop();
              }
          },
          Mn,
          null,
          [[2, 26]],
        );
      }
      function Qn(t) {
        return Ae.a.wrap(function(e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2),
                  Object(Dn.c)({
                    type: Le.UPDATE_ACCESSMENU_SUCCESS,
                    payload: t.payload,
                  })
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, Ln);
      }
      function qn() {
        return Ae.a.wrap(function(e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(Dn.d)(Le.DO_UPDATE_MODULE, Qn);
              case 2:
              case 'end':
                return e.stop();
            }
        }, Tn);
      }
      function Gn() {
        return Ae.a.wrap(function(e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(Dn.d)(Le.DO_INIT_APPDATA, _n);
              case 2:
              case 'end':
                return e.stop();
            }
        }, Nn);
      }
      var Fn = [qn(), Gn()],
        Hn = Ae.a.mark(Jn),
        Wn = Ae.a.mark(zn),
        Vn = Ae.a.mark(Yn),
        Xn = Ae.a.mark(Kn);
      function Jn(t) {
        var n, r;
        return Ae.a.wrap(
          function(e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (e.prev = 0),
                    (e.next = 3),
                    Object(Dn.c)({ type: K.BEFORE_LOGIN, payload: {} })
                  );
                case 3:
                  return (
                    (e.next = 5), Object(Dn.b)(Pe.loginByUsername, t.payload)
                  );
                case 5:
                  if (200 === (n = e.sent).statusCode && n.data.accessToken)
                    return (
                      (r = new Promise(function(e) {
                        return (
                          Object(Ce.c)(n.data.accessToken), e(Object(Ce.a)())
                        );
                      })),
                      (e.next = 10),
                      Object(Dn.c)({ type: K.LOGIN_SUCCESS, payload: n })
                    );
                  e.next = 11;
                  break;
                case 10:
                  r.then(function() {});
                case 11:
                  if (500 === n.statusCode)
                    return (
                      (e.next = 14),
                      Object(Dn.c)({ type: K.LOGIN_ERROR, payload: n })
                    );
                  e.next = 14;
                  break;
                case 14:
                  e.next = 20;
                  break;
                case 16:
                  return (
                    (e.prev = 16),
                    (e.t0 = e.catch(0)),
                    (e.next = 20),
                    Object(Dn.c)({ type: K.LOGIN_ERROR, payload: e.t0 })
                  );
                case 20:
                case 'end':
                  return e.stop();
              }
          },
          Hn,
          null,
          [[0, 16]],
        );
      }
      function zn(t) {
        var n;
        return Ae.a.wrap(
          function(e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (e.prev = 0),
                    (e.next = 3),
                    Object(Dn.c)({ type: K.BEFORE_LOGIN, payload: {} })
                  );
                case 3:
                  return (
                    (e.next = 5), Object(Dn.b)(Pe.loginRegister, t.payload)
                  );
                case 5:
                  if (200 === (n = e.sent).statusCode && n.data.accessToken)
                    return (
                      Object(Ce.c)(n.data.accessToken),
                      (e.next = 10),
                      Object(Dn.c)({ type: K.REGISTER_SUCCESS, payload: n })
                    );
                  e.next = 10;
                  break;
                case 10:
                  if (500 === n.statusCode)
                    return (
                      (e.next = 13),
                      Object(Dn.c)({ type: K.LOGIN_ERROR, payload: n })
                    );
                  e.next = 13;
                  break;
                case 13:
                  e.next = 19;
                  break;
                case 15:
                  return (
                    (e.prev = 15),
                    (e.t0 = e.catch(0)),
                    (e.next = 19),
                    Object(Dn.c)({ type: K.LOGIN_ERROR, payload: e.t0 })
                  );
                case 19:
                case 'end':
                  return e.stop();
              }
          },
          Wn,
          null,
          [[0, 15]],
        );
      }
      function Yn() {
        return Ae.a.wrap(function(e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(Dn.d)(K.DO_LOGIN, Jn);
              case 2:
              case 'end':
                return e.stop();
            }
        }, Vn);
      }
      function Kn() {
        return Ae.a.wrap(function(e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(Dn.d)(K.DO_REGISTER, zn);
              case 2:
              case 'end':
                return e.stop();
            }
        }, Xn);
      }
      var Zn = [Yn(), Kn()],
        $n = Ae.a.mark(tr),
        er = Ae.a.mark(nr);
      function tr(t) {
        var n;
        return Ae.a.wrap(
          function(e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (e.prev = 0),
                    (e.next = 3),
                    Object(Dn.b)(Pe.getRolePagedList, t.payload)
                  );
                case 3:
                  if (200 === (n = e.sent).statusCode)
                    return (
                      (e.next = 7),
                      Object(Dn.c)({ type: gn.ROLE_PAGELIST, payload: n.data })
                    );
                  e.next = 7;
                  break;
                case 7:
                  500 === n.statusCode &&
                    Xe.a.error({ message: '请求角色列表错误' }),
                    (e.next = 13);
                  break;
                case 10:
                  (e.prev = 10),
                    (e.t0 = e.catch(0)),
                    Xe.a.error({ message: e.t0 });
                case 13:
                case 'end':
                  return e.stop();
              }
          },
          $n,
          null,
          [[0, 10]],
        );
      }
      function nr() {
        return Ae.a.wrap(function(e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(Dn.d)(gn.ROLE_PAGELIST, tr);
              case 2:
              case 'end':
                return e.stop();
            }
        }, er);
      }
      var rr = [nr()],
        ar = Ae.a.mark(ir),
        or = Ae.a.mark(sr);
      function ir(t) {
        var n;
        return Ae.a.wrap(function(e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                (n = t.payload), n.moduleList, n.pathname;
              case 2:
              case 'end':
                return e.stop();
            }
        }, ar);
      }
      function sr() {
        return Ae.a.wrap(function(e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(Dn.d)(An, ir);
              case 2:
              case 'end':
                return e.stop();
            }
        }, or);
      }
      var lr = [sr()],
        cr = Ae.a.mark(ur);
      function ur() {
        return Ae.a.wrap(function(e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2),
                  Object(Dn.a)(
                    [].concat(Cn()(Zn), Cn()(rr), Cn()(Fn), Cn()(lr)),
                  )
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, cr);
      }
      function dr(r) {
        return function() {
          var e,
            t = E()(r);
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
            var n = E()(this).constructor;
            e = Reflect.construct(t, arguments, n);
          } else e = t.apply(this, arguments);
          return v()(this, e);
        };
      }
      Rn.run(ur);
      var pr = (function(e) {
        y()(n, e);
        var t = dr(n);
        function n() {
          return m()(this, n), t.apply(this, arguments);
        }
        return (
          h()(n, [
            {
              key: 'render',
              value: function() {
                return c.a.createElement(
                  O.a,
                  { store: wn },
                  c.a.createElement(Kt, null),
                );
              },
            },
          ]),
          n
        );
      })(c.a.Component);
      n('./src/index.less');
      d.a.render(c.a.createElement(pr, null), document.getElementById('root'));
    },
    './src/index.less': function(e, t, n) {},
    './src/resource/assets/logo.jpg': function(e, t) {
      e.exports =
        'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMxaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzA2NyA3OS4xNTc3NDcsIDIwMTUvMDMvMzAtMjM6NDA6NDIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjRDNzVDNEUwRjZBMDExRTY5MTBEQTdGMUY4NDA0NkQ3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjRDNzVDNEUxRjZBMDExRTY5MTBEQTdGMUY4NDA0NkQ3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDFCNjU3RkZGNjlGMTFFNjkxMERBN0YxRjg0MDQ2RDciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDFCNjU4MDBGNjlGMTFFNjkxMERBN0YxRjg0MDQ2RDciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwMDAwMDBAMDg8QDw4MExMUFBMTHBsbGxwfHx8fHx8fHx8fAQcHBw0MDRgQEBgaFREVGh8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx//wAARCADIAMgDAREAAhEBAxEB/8QApQABAAMBAQEBAQAAAAAAAAAAAAUHCAYDBAIBAQEAAgMBAQAAAAAAAAAAAAAABQYDBAcCARAAAQMCAwQHBQYEBAcAAAAAAQACAwQFETEGIbN0NkFhcRIiFQdRgTITFJGhsUJyI8FSYmPR4YIzosJTJGQlFhEAAgECAQoFAwUBAQEAAAAAAAECAwQRITFxEjJyshMzBUFRYYEGodEiscHhQhQj8DT/2gAMAwEAAhEDEQA/ALmXGyyhAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEBHai5euvB1G5ctqx69PfjxIx1th6DNwyXWivBAEAQBAEAQBAEAQBAEAQFtelGkPpqcX+tZ+/O3CiY4fDGc5O1/R1Kj/JO6a8uRB/itrT5e36krY0MFrv2I/wBZ7R3KuiuzG7JmmCYj+Zm1pP8ApOC2vil1jCVJ+GVe5j7hTyqRWqtxHBAEAQBADkgNI6d5etXB0+5auS33Xqb8uJlho7C0EitUyBAR2ouXrrwdRuXLasevT348SMdbYegzcMl1orwQBAEAQBAEAQBAEAQBAdR6f6SdqC7gztPltIQ+qd0PP5Yx+rp6lDd67n/lpfj1JZvubNrQ5ksuZF8ta1jQ1oDWtGDWjIALmreOVk4c/r60ea6UrYGjGaFv1EP6otp/4cVJ9luuTcxl4PI/c17qnrQZn4LqBBBAEAQBADkgNI6d5etXB0+5auS33Xqb8uJlho7C0EitUyBAR2ouXrrwdRuXLasevT348SMdbYegzcMl1orwQBAEAQBAEAQBAEAQH02231dxroKGkZ36iocGRt7cyeoDaVir140oOcnhGJ6hByeCNC6asFJYrRDb6fb3B3ppcMC+Q/E4rll/eyuarqS9vReRP0aShHBEotMyH8IaQQ4YtOxwPSDmEBnPVVpdadQ11AR4Y5SYieljvE0/YV1ft1zz6EJ+a+pX60NWbRFLdMQQBAEAOSA0jp3l61cHT7lq5Lfdepvy4mWGjsLQSK1TIEBHai5euvB1G5ctqx69PfjxIx1th6DNwyXWivBAEAQBAEAQBAEAQBAXJ6W6P8uofOKxmFdWN/Ya4bY4TtHvfn2YdaoPyLunNnyoP8I5/V/wS9lQ1VrPOzvlWTeCAICqPWe0dyqobsxuyZpp5iP5mbWk+7Yrt8UusYypPwyr3IvuFPKpFaK3EcEAQBADkgNI6d5etXB0+5auS33Xqb8uJlho7C0EitUyBAR2ouXrrwdRuXLasevT348SMdbYegzcMl1orwQBAEAQBAEAQBAEB2XptpDzu5/WVTMbZROBkBykkzbH2dLv81Ad+7n/AJ6epF/9J/Ref2/g3LShryxeZF3rnRMnnVVNPS00tTUPEcELS+WQ5BrRiV7p05TkoxWMmfJSSWLKy0tr2ounqBIZXFlDXRmnpYSdjfl4ujx6z4setW/uPZo0bFYZZwes3pyP9iNoXLlV9GWkqaSZz2vrP5rpWtgaMZom/Ph/VFt/DFSnZrrk3MZeDyP3MF1T1oNGfgcRiuoECEAQBADkgNI6d5etXB0+5auS33Xqb8uJlho7C0EitUyBAR2ouXrrwdRuXLasevT348SMdbYegzcMl1orwQBAEAQBAEAQBAfdZbRWXe5wW+kbjNO7DHoa3NzndTRtWvd3UKFN1JZke6dNzlgjQtks9HZ7ZBb6QYRQtwLjm9x2ue7rcVyy7up16jqSzv8A9gT9OmoRwR961j2VN6sav+fMbBRP/ZhINc9p+KQZR9jenr7Fd/jfa9Vc+ayvZ0efv+mki76vi9Re5XlHVy0dZBWRf7tPI2VnWWHHD3q01aSqQcHmksCPjLB4mlKCsiraKnrIj3oqiNsjCOkOGK5HWpOnNweeLwLHGWKTPchpBDhi07HA9IOYWM+mc9VWl1p1FXUJGDI5S6I+1j/E0/eur9tuefQhPzWXSV+tDVm0RS3TEEAQA5IDSOneXrVwdPuWrkt916m/LiZYaOwtBIrVMgQEdqLl668HUbly2rHr09+PEjHW2HoM3DJdaK8EAQBAEAQBAEAQF3emmkPJbZ9dVswuVa0FwOccR2tZ2nN3+S533/uf+ipqRf8Azh9X5/YmbOhqRxednaKvm4cxr7VjNP2g/JcPMaoFlI3pb/NIf09HWpjsvbXdVcvTjn+3v+hrXVflx9WUK973vc95LnuJLnHaST0ldLSSWCIM/i+gur0ju/1mmTRvdjLb5DHgc/lu8TPcMcFz35Nbcu411mmsffxJmxqYww8juFXTcKo9aLR3Kqhu7G7JWmnmP9TNrCfdsV1+KXWMZ0n4fkv3IvuFPKpFaK3kcEAQA5IDSOneXrVwdPuWrkt916m/LiZYaOwtBIrVMgQEdqLl668HUbly2rHr09+PEjHW2HoM3DJdaK8EAQBAEAQBAEB3npdo/wAzr/NqxmNBRu/aa4bJJhtA7G5lVr5F3Tkw5UH+cs/ov5N6yoaz1nmRcyoBLnzXCvpbfQzVtW/5dPA0vkd1DoHWcgstCjKrNQisZSPM5KKxZnvU2oKq/Xea4T7GuPdgixxEcY+Fo/j1rqXb7KNtSVOPu/NkDWqucsWRS3TEEB2npNd/otUCke7CK4RmLD+4zxM/iq/8lteZbayzwePt4m5Y1NWeHmXcudkyc9r2z+a6Vrqdre9NE358H649v4KU7Ndcm5jLweR+5guqetBoz8DiMfauoECEAQA5IDSOneXrVwdPuWrkt916m/LiZYaOwtBIrVMgQEdqLl668HUbly2rHr09+PEjHW2HoM3DJdaK8EAQBAEAQBASenbDV3y7Q2+mGBkOMsnQyMfE49i0768jbUnUl4fV+RkpU3OWCNC2y20lsoIKCkZ3KenaGMHSfaT1k7SuW3FeVabnPakT8IKKwR9Swnopz1T1h5hW+TUb8aKkd/3D25STDZh2My7fcr78d7Xyoc6a/OWb0X8/oRN7X1nqrMjgFZzQCAID2o6uWjq4KuL/AHKeRsrMPaw44e9eKtNVIuDzSWB9jLB4mlKCsirqGnrIj3o6iNsjSP6hiuRVqTpzcHni8CxxlrJM9yGkEOGLTscPaDmsZ9M6artLrTqKvoSMGMlLoj7WP8TcPtXVu23PPt4T81l0or9eGrNoiVvGIIAckBpHTvL1q4On3LVyW+69TflxMsNHYWgkVqmQICO1Fy9deDqNy5bVj16e/HiRjrbD0GbhkutFeCAIAgCAID+ta5zg1oxc44ADMko3gC9vT3SLbBaRJUNHmdYA+pPSxubY/d09fYua977n/pq4R6cc3r6k3a0NSOXOzq1Cm0cd6kav8jtf0tK/C51gLYsM42ZOk/g3r7FPdh7Z/oqa0l/zhn9X5fc1LuvqRwW0yjiSTic10YhQgCAIAgLq9I7v9Zpo0T3Yy2+QxgH/AKbvEz3DJc9+TWvLuNdZprH38SYsamMMPI7hV03SqPWi0dypobuxuyVpp5z/AFN8TMfdsV1+KXWMZ0n4fkv3IvuFPKpFaK3kcEAOSA0jp3l61cHT7lq5Lfdepvy4mWGjsLQSK1TIEBHai5euvB1G5ctqx69PfjxIx1th6DNwyXWivBAEAQBAEBYvpRpD6up89rWY01O7CjY4bHyj8/Yz8VVPkndNSPIg/wApbXovL3JCyoYvWeYt1UYlT4rxdqO022e4Vbu7DA3vEdLjk1o63HYFsWttOvUVOGdnipNQjizPN9vNZebpPcas/uTHws6GMHwsb1ALqdnawt6apxzL6+pAVKjnLFnwLZPAQBAEAQHaek93+h1QKV7sIriwwkf3G+Jn8VX/AJJbcy21lng8fbxNyyqas8PMu5c7Jk5/Xln820rXU7W96aNvz4P1x+JSfZrrk3MZPM8j0MwXNPWg0Z9BxAPtXUSBCAHJAaR07y9auDp9y1clvuvU35cTLDR2FoJFapkCAjtRcvXXg6jcuW1Y9envx4kY62w9Bm4ZLrRXggCAIAgJjSmnKnUF4ioYsWxfHVS9DIhme05BaHcr+NrSc3n8F5sy0KTqSwNB0dHTUVJDSUzBHTwNDImDoAXLqtWVSTnJ4yZPxiorBHssZ9KT9TNX+cXPy+kfjbqJxGIyklGxzuxuQXQ/j/bORT5kl/0n9F5ENeV9eWCzI4pWE0wgCAIAgCA9aSqlpKuGriJElO9sjcPa044e9eKtNTi4vNJYH2MsHiaVt9bFXUNPWxEGOojbI0jLxDFcjrUnTm4PPF4FihLWSZ7kAghwxadhHtBWI9GdNWWk2nUdfQ4YMZKXRdbH+JuH24Lq3bbnn28J+mXSiv14as2iJW8YgckBpHTvL1q4On3LVyW+69TflxMsNHYWgkVqmQICO1Fy9deDqNy5bVj16e/HiRjrbD0GbhkutFeCAIAgP1HHJLIyKJpfJIQ1jBmSdgAXyUkli8yCWJfuhdKR6es7YngGvqMJKyT+roYOpq5l3juTuquK2I5I/f3J22ocuPqdGok2DhfVDWHlVv8AK6N+FwrG+NzTtihOwu6i7IKyfHu186pzZr8IfV/waV5X1VqrOyl10AhwgCAIAgCAIAgLq9I7v9Zpp1E92MtvkMYH9t/ib9mS598mtuXca6zTWPv4kxY1MYYeR3CrhulU+tFo7tRQ3djdkgNNOetviZ92KuvxS6xjOk/D8l+5F9wp5VIrNW8jgckBpHTvL1q4On3LVyW+69TflxMsNHYWgkVqmQICO1Fy9deDqNy5bVj16e/HiRjrbD0GbhkutFeCAIAgLO9JtId9w1DWs8LSW29jhmcjL7smqn/Je6YLkQe99vuSVjQ/u/YtRUskyN1DfKSx2me41R8MQwjj6XvPwtHaVt2NnO4qqnHx+i8zHVqKEcWZ5ulzq7pcJ6+rd36iocXO9gHQ0dQGwLqdvbwo01CGzEgJzcniz5VmPIQBAEAQBAEAQHaek93+h1S2le7CK4MMJH9Y8TFX/klrzLbWWeDx9vE3LKpqzw8y7lzsmTn9d2fzbS1dTNb3pmM+dAOnvx+ID3qT7Pdci5jJ5nkehmC5p60GjPoOIBGRXUSBByQGkdO8vWrg6fctXJb7r1N+XEyw0dhaCRWqZAgI7UXL114Oo3LltWPXp78eJGOtsPQZuGS60V4IAgJ7Rel5tRXllLtbRxYSVko6GA/COt2SjO69xVrRcv7PJFev8Ge3oupLDwNAQQQ08EcEDBHDE0MjY3INGwBcwnNybk3i2TqSSwR+yQASTg0DEk5ABeUj6UV6iauN+u3yad3/AKyjJbTgZPfk6T+A6l0nsfbP81LGXUnn9PT7kJdV9eWCzI5NTZqhAEAQBAEAQBAEB60lVLSVUNVESJIHtkaRni04rxUpqcXF5pLA+xlg8TStvrYq6hp62Igx1MbZBhl4hiR7iuR16TpzcHni8CxQlrJM9yAQQRi07COorEejOurbSbTqOvocMGMlL4fZ8uTxNw7McF1bttzz7eE/HDLpRX68NWbREHJbxiNI6d5etXB0+5auS33Xqb8uJlho7C0EitUyBAR2ouXrrwdRuXLasevT348SMdbYegzcMl1orwQHpTU89TUR09OwyTzODImDMuOwLxUnGEXKTwSPqTbwRoHR2mINPWaOkbg6qk/crJR+aQjLsbkFzDuncJXVZz/qskV6E9b0VTjh4k6o0zFeeq2sPoqTyOifhV1Tcat7TtjiP5e1/wCCtPxztfMlzpr8Y5vV/wAGhe18FqrOyoFeyJCAIAgCAIAgCAIAgCAun0iu/wBZpp1C92MtvkLAP7b/ABN+xc++TWupca6zTX1WcmLGpjDDyO5VcN0qn1otHdnobuxuyQGmnPW3xM+7FXX4pdYxnSfh+S/cjO4U8qkVmclbyNNI6d5etXB0+5auS33Xqb8uJlho7C0EitUyBAR2ouXrrwdRuXLasevT348SMdbYegzcMl1orwQFrek2kPlRDUFaz92QEUDHD4WHOTtd0dSpPyXums+RB5FtfYlLGhh+b9izFUSRIjVOoqXT9nlr5sHSDwU0XS+Q/COz2re7dYyuaqgs3i/JGKtVUI4sz3XVtTXVk1ZVPMlRO4vkeekn/BdSo0o04KEVhGJAyk5PFngsh5CAIAgCAIAgCAIAgCA7P0ou/wBDqltM92ENwYYT+seJn3qv/JLXmW2ss8Hj7eJuWVTVnh5l3rnZMkBrqz+baWrqZre9MxnzoB09+PxAe/DBSfZ7rkXMZPNjg9DMFzT1oNGe8QRiMiF1IgTSWneXrVwdPuWrkl916m/LiZYaOwtBIrVMgQEdqLl668HUbly2rHr09+PEjHW2HoM3DJdaK8dLoPSb9Q3hrZWkW6mwfVv6COiMdbvwUR3nuStaWK6ktn7+xs21DmS9EX2xjI2NjjaGsYA1rRkANgC5m228XnJxISSMjjdJI4MjYC57jkABiSUjFt4LOG8ChNeask1DeHPjJFvpsY6NntHTIety6Z2btqtaWD25ZZfb2IK5r8yXojmlLmuEAQBAEAQBAEAQBAEAQHrSVUlJVQ1URIkge2RpGeLTivFSmpxcXmawPsXg8TStvrYq+gp62IgsqY2yDDLxDEj3HYuR16LpzlB54vAsUJayTPcgEEHaDsI6liPRnXV1pNp1HX0WGEbZC+H2fLk8TcOzHD3Lq3bLnn28J+OGXSshX68NWbRfWneXrVwdPuWrmd916m/LiZOUdhaCRWqZAgI7UXL114Oo3LltWPXp78eJGOtsPQZ1oKGqr6yCjpWfMqKhwZGwe0+3qGZXVq1aNODnJ4RiQEYuTwRoTS+naWwWeKgh8Tx46iXpfIfid/guW9xvpXNVzfsvJE9RpKEcES60TKVn6s6v+VH/APP0T/3JAHV72nJuYj9+ZVv+NdrxfPmsi2fuR19X/ovcqlXUiwgCAIAgCAIAgCAIAgCAIAgLp9Irv9Xpt1C92MtvkLAP7b/E37DiuffJrbUuNdZpr6omLGpjDDyO5VcN0qr1otHdmobuxux4NNOesYvj/wCZXX4pdYqdJ+H5L9H+xGdwp5pFiad5etXB0+5aqpfdepvy4mb9HYWgkVqmQICO1Hy7deCqNy5bVj16e/HiRjrbD0HG+lOkPoaMXutZhV1TcKVjhtjhP5u1/wCCn/kfdOZPkwf4xz+r/g1LKhqrWedlhqrG+QWstTwads0lWcHVUmMdHEfzSEZ9jcypLtfb3dVlH+qyyfp/JhuKypxx8TP1RUT1NRJUTvMk8zi+R52kuO0ldPhBQioxWCRAttvFnmvZ8CAIAgCAIAgCAIAgCAIAgCA7P0ou/wBDqllM92ENwYYD+v4mfeFAfJLbmWzks8Hj7eJt2VTVnh5l3rnRNEBrqz+baWrqVre9M1nzoB09+PxADtwwUn2e65FzCTzY4PQzBc09aDR92nDjp21H/wAKm3LVrX3/ANFTflxM90dhaESK1TIEB+Joo5onwytD4pWlkjDtDmuGBB7QvUZOLTWdBrHIfoAAAAYAbAF5bB+Kiohp4JKid4jhiaXyPOQa0Ykr1CDlJRisWz42ksWZ/wBZ6om1DeX1RxbSRft0cR/LGDmet2ZXT+1dvVrRUf7PLJ+pBXFZ1JY+BAqTMAQBAEAQBAEAQBAEAQBAEAQBAetJUy0tVDUxEtkge2RhGeLTivFSmpxcXmawPsXg8TSluroq+gpq2LDuVMbZRh0d4Yke47FyOvRdKcoPPF4FihLWSZ9BAIIOR2FYj0fiCGOCGOGId2OJrWMb7GtGAH2Bepycm287CWCwPReQEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQH/9k=';
    },
    './src/util/token.js': function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return a;
      }),
        n.d(t, 'c', function() {
          return o;
        }),
        n.d(t, 'b', function() {
          return i;
        });
      var r = 'AU-admin';
      function a() {
        return localStorage.getItem(r);
      }
      function o(e) {
        localStorage.setItem(r, e);
      }
      function i() {
        localStorage.removeItem(r);
      }
    },
    './src/util/util.js': function(e, t, n) {
      'use strict';
      n('./node_modules/antd/lib/tag/style/index.js');
      var r = n('./node_modules/antd/lib/tag/index.js'),
        a = n.n(r),
        o =
          (n('./node_modules/antd/lib/icon/style/index.js'),
          n('./node_modules/antd/lib/icon/index.js')),
        i = n.n(o),
        s = n('./node_modules/@babel/runtime/helpers/defineProperty.js'),
        l = n.n(s),
        c = n('./node_modules/react/index.js'),
        u = n.n(c);
      function d(t, e) {
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
      function p(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? d(Object(n), !0).forEach(function(e) {
                l()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : d(Object(n)).forEach(function(e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e),
                );
              });
        }
        return t;
      }
      function m(e) {
        if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (e = (function(e, t) {
              if (!e) return;
              if ('string' == typeof e) return f(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              'Object' === n && e.constructor && (n = e.constructor.name);
              if ('Map' === n || 'Set' === n) return Array.from(n);
              if (
                'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return f(e, t);
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
          o = !0,
          i = !1;
        return {
          s: function() {
            r = e[Symbol.iterator]();
          },
          n: function() {
            var e = r.next();
            return (o = e.done), e;
          },
          e: function(e) {
            (i = !0), (a = e);
          },
          f: function() {
            try {
              o || null == r.return || r.return();
            } finally {
              if (i) throw a;
            }
          },
        };
      }
      function f(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      t.a = {
        findInModuleList: function(e, t, n) {
          var s = [];
          return (
            (function e(t, n, r) {
              var a,
                o = m(t);
              try {
                for (o.s(); !(a = o.n()).done; ) {
                  var i = a.value;
                  i[n] === r && s.push(i),
                    i.children && i.children.length && e(i.children, n, r);
                }
              } catch (e) {
                o.e(e);
              } finally {
                o.f();
              }
            })(e, t, n),
            s
          );
        },
        findSiderComponentSelectedNameAndOpenKeys: function(e, t) {
          var n = e.map(function(e) {
              return (e.parentId = '0'), e;
            }),
            i = '';
          !(function e(t, n) {
            var r,
              a = m(t);
            try {
              for (a.s(); !(r = a.n()).done; ) {
                var o = r.value;
                o.path === n && (i = p({}, o)),
                  o.children && o.children.length && e(o.children, n);
              }
            } catch (e) {
              a.e(e);
            } finally {
              a.f();
            }
          })(n, t);
          if (!i) return { siderKey: [], siderOpenKeys: [] };
          var r,
            a,
            o,
            s,
            l =
              ((r = n),
              (a = i.parentId),
              (s = []),
              c(r, a),
              '0' !== o && c(r, o),
              s);
          function c(e, t) {
            var n,
              r = m(e);
            try {
              for (r.s(); !(n = r.n()).done; ) {
                var a = n.value;
                a.id === t && ((o = a.parentId), s.push(a.name)),
                  a.children && a.children.length && c(a.children, t);
              }
            } catch (e) {
              r.e(e);
            } finally {
              r.f();
            }
          }
          return { siderKey: [i.name], siderOpenKeys: l };
        },
        findCurrentMenuNameAndModule: function(e, t) {
          var n,
            r,
            a,
            o = '';
          if (
            (!(function e(t, n) {
              for (var r = 0, a = t.length; r < a; r++) {
                if (t[r].path === n) {
                  o = p({}, t[r]);
                  break;
                }
                t[r].children && t[r].children.length && e(t[r].children, n);
              }
            })(e, t),
            o && o.parentId)
          ) {
            if ('0' === o.parentId) return o;
            return (
              (n = e),
              (r = o.parentId),
              i(n, r),
              '0' !== a.parentId && i(n, a.parentId),
              a
            );
          }
          function i(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
              e[n].id === t && (a = p({}, e[n])),
                e[n].children && e[n].children.length && i(e[n].children, t);
          }
          return { name: '', children: [] };
        },
        unique: function(e) {
          if (1 === e.length) return e;
          for (var t = 0; t < e.length; t++)
            for (var n = t + 1; n < e.length; n++)
              e[t] === e[n] && (e.splice(n, 1), --t);
          return e;
        },
        deparmentTreeWithRole: function(e) {
          return (function e(t) {
            for (var n = 0; n < t.length; n++)
              (t[n].key = t[n].id),
                (t[n].value = t[n].id),
                (t[n].title = t[n].title),
                (t[n].selectable = !1),
                t[n].departmentId &&
                  ((t[n].selectable = !0),
                  (t[n].title = u.a.createElement(
                    a.a,
                    { color: 'green' },
                    t[n].name,
                  ))),
                t[n].children && e(t[n].children);
            return t;
          })(e);
        },
        iconTreeData: function(e) {
          return (function e(t) {
            for (var n = 0; n < t.length; n++)
              (t[n].key = ''.concat(n)),
                (t[n].value = ''.concat(n)),
                (t[n].selectable = !1),
                (t[n].children = t[n].icons),
                t[n].icon &&
                  ((t[n].value = t[n].icon),
                  (t[n].selectable = !0),
                  (t[n].key = t[n].icon),
                  (t[n].title = u.a.createElement(
                    'span',
                    null,
                    u.a.createElement(i.a, {
                      type: t[n].icon,
                      style: { color: '#08c' },
                    }),
                    '  ',
                    t[n].icon,
                  ))),
                t[n].children && e(t[n].children);
            return t;
          })(e);
        },
        treeData: function(e) {
          return (function e(t) {
            for (var n = 0; n < t.length; n++)
              (t[n].value = t[n].id),
                (t[n].key = t[n].id),
                t[n].children && e(t[n].children);
            return t;
          })(e);
        },
        openTreeData: function(e) {
          var o = [];
          return (
            (function e(t) {
              var n,
                r = m(t);
              try {
                for (r.s(); !(n = r.n()).done; ) {
                  var a = n.value;
                  o.push(p({}, a)),
                    a.children && 0 < a.children.length && e(a.children);
                }
              } catch (e) {
                r.e(e);
              } finally {
                r.f();
              }
            })(e),
            o
          );
        },
        handleTitle: function(e, t) {
          return t.title;
        },
        getTreeEleWithParent: function(e, t) {
          var s = [];
          return (
            (function e(t, n) {
              var r,
                a = m(n);
              try {
                for (a.s(); !(r = a.n()).done; ) {
                  var o = r.value;
                  if (o.id === t) {
                    var i = p({}, o);
                    s.push(i), e(o.parentId, n);
                  }
                }
              } catch (e) {
                a.e(e);
              } finally {
                a.f();
              }
            })(e.toString(), t),
            s.reverse(),
            s
          );
        },
        openAccesseMenu: function(e) {
          var i = [];
          return (
            (function e(t, n) {
              var r,
                a = m(t);
              try {
                for (a.s(); !(r = a.n()).done; ) {
                  var o = r.value;
                  (o.parentName = n),
                    i.push(o),
                    o.children &&
                      0 < o.children.length &&
                      e(o.children, o.name);
                }
              } catch (e) {
                a.e(e);
              } finally {
                a.f();
              }
            })(e, ''),
            i
          );
        },
        getParentMenusByName: function(i, e) {
          var s = [];
          return (
            (function e(t, n) {
              var r,
                a = m(t);
              try {
                for (a.s(); !(r = a.n()).done; ) {
                  var o = r.value;
                  o.name === n &&
                    '/' !== o.path &&
                    (s.push(o), e(i, o.parentName));
                }
              } catch (e) {
                a.e(e);
              } finally {
                a.f();
              }
            })(i, e),
            s.reverse(),
            s
          );
        },
        oneOf: function(e, t) {
          return 0 <= t.indexOf(e);
        },
        getTreeEleByPropertyValue: function(e, t, n) {
          var s = {};
          return (
            (function e(t, n, r) {
              var a,
                o = m(r);
              try {
                for (o.s(); !(a = o.n()).done; ) {
                  var i = a.value;
                  if (
                    (i[n] === t
                      ? (s = i)
                      : i.children &&
                        0 < i.children.length &&
                        e(t, n, i.children),
                    s[n])
                  )
                    break;
                }
              } catch (e) {
                o.e(e);
              } finally {
                o.f();
              }
            })(e, t, n),
            s
          );
        },
        getMenuByName: function(e, t) {
          var i = {};
          return (
            (function e(t, n) {
              var r,
                a = m(n);
              try {
                for (a.s(); !(r = a.n()).done; ) {
                  var o = r.value;
                  if (
                    (o.name === t
                      ? (i = o)
                      : o.children && 0 < o.children.length && e(t, o.children),
                    i.name)
                  )
                    break;
                }
              } catch (e) {
                a.e(e);
              } finally {
                a.f();
              }
            })(e, t),
            i
          );
        },
      };
    },
    './src/views/layout/Content/index.less': function(e, t, n) {},
    './src/views/layout/Spin/states/saga.js': function(e, t) {},
    './src/views/layout/layout.less': function(e, t, n) {},
  },
  [['./src/index.js', 'runtime~app', 'vendor']],
]);
