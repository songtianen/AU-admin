(window.webpackJsonp = window.webpackJsonp || []).push([
  [12],
  {
    './src/views/common/RequsetLog/index.jsx': function(e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'default', function() {
          return b;
        });
      var r = n('./node_modules/@babel/runtime/helpers/classCallCheck.js'),
        o = n.n(r),
        u = n('./node_modules/@babel/runtime/helpers/createClass.js'),
        s = n.n(u),
        c = n(
          './node_modules/@babel/runtime/helpers/possibleConstructorReturn.js',
        ),
        i = n.n(c),
        l = n('./node_modules/@babel/runtime/helpers/getPrototypeOf.js'),
        a = n.n(l),
        f = n('./node_modules/@babel/runtime/helpers/inherits.js'),
        d = n.n(f),
        p = n('./node_modules/react/index.js'),
        m = n.n(p);
      function h(r) {
        return function() {
          var e,
            t = a()(r);
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
            var n = a()(this).constructor;
            e = Reflect.construct(t, arguments, n);
          } else e = t.apply(this, arguments);
          return i()(this, e);
        };
      }
      var b = (function(e) {
        d()(n, e);
        var t = h(n);
        function n() {
          return o()(this, n), t.apply(this, arguments);
        }
        return (
          s()(n, [
            {
              key: 'render',
              value: function() {
                return m.a.createElement('div', null, 'RequestComponent');
              },
            },
          ]),
          n
        );
      })(m.a.PureComponent);
    },
  },
]);
