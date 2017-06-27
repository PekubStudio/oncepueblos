
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(544);


/***/ }),

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(545);

var _App2 = _interopRequireDefault(_App);

var _Home = __webpack_require__(546);

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Saul\\Documents\\GitHub\\oncepueblos\\pages\\index.js?entry';

exports.default = function () {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement(_App2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(_Home2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }))));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Saul\\Documents\\GitHub\\oncepueblos\\pages\\index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Saul\\Documents\\GitHub\\oncepueblos\\pages\\index.js"); } } })();
    (function (Component, route) {
      if (!module.hot) return
      if (false) return

      var qs = __webpack_require__(69)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(227);

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Saul\\Documents\\GitHub\\oncepueblos\\components\\App\\App.js';


var App = function App(props) {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width maximum-scale=1.0, user-scalable=no', __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), _react2.default.createElement('link', { rel: 'apple-touch-startup-image', href: '/static/icon-512x512.png', __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), _react2.default.createElement('link', { rel: 'apple-touch-icon', href: '/static/icon-384x384', __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), _react2.default.createElement('meta', { name: 'apple-mobile-web-app-title', content: 'HCB', __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), _react2.default.createElement('meta', { name: 'apple-mobile-web-app-capable', content: 'yes', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement('meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'blue', __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), _react2.default.createElement('meta', { name: 'theme-color', content: 'white', __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Montserrat', rel: 'stylesheet', __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), _react2.default.createElement('link', { rel: 'manifest', href: '/static/manifest.json', __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://unpkg.com/leaflet@1.0.3/dist/leaflet.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), _react2.default.createElement('style', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, '.leaflet-container {\n          height: 100%;\n          width: 100%;\n        }\n        .leaflet-container a {\n          color: #2d517b;\n          text-decoration: none;\n          font-size: 15px;\n          font-family: \'Montserrat\', sans-serif;\n        }\n        .leaflet-control-attribution a {\n          display:none;\n        }\n        body{\n          background-color: white;\n          width: 100%;\n          height: 100%;\n          margin: 0;\n          top: 0;\n          overflow-x: hidden;\n          overflow-y: hidden;\n          background-color: white;\n          font-family: \'Montserrat\', sans-serif;\n        }\n        html {\n          height: 100%;\n          width: 100%;\n          margin: 0;\n          top: 0;\n          box-sizing: border-box;\n          overflow-y: hidden;\n          font-family: \'Montserrat\', sans-serif;\n        }\n        #__next {\n          height: 100%;\n        }\n        ')), _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, props.children));
};

exports.default = App;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Saul\\Documents\\GitHub\\oncepueblos\\components\\App\\App.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Saul\\Documents\\GitHub\\oncepueblos\\components\\App\\App.js"); } } })();

/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _Logo = __webpack_require__(547);

var _Logo2 = _interopRequireDefault(_Logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Saul\\Documents\\GitHub\\oncepueblos\\components\\Home\\index.js';
//  import { Col, Row } from 'react-grid-system'


var home = function home() {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement(_Logo2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }));
};

exports.default = home;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Saul\\Documents\\GitHub\\oncepueblos\\components\\Home\\index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Saul\\Documents\\GitHub\\oncepueblos\\components\\Home\\index.js"); } } })();

/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Saul\\Documents\\GitHub\\oncepueblos\\components\\Logo\\index.js';

exports.default = function () {
  return _react2.default.createElement('div', { className: 'logo-banner', __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    }
  }, _react2.default.createElement('img', { id: 'logo', src: '/static/logo-once-pueblos.png', __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }), _react2.default.createElement('style', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, '\n      .logo-banner {\n        width: 100%;\n        height: 100px;\n        margin: 0px;\n        display: flex;\n        align-items: center;\n      }\n\n      #logo {\n        position:fixed;\n        left: 50%;\n        vertical-align: middle;\n      }\n    '));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Saul\\Documents\\GitHub\\oncepueblos\\components\\Logo\\index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Saul\\Documents\\GitHub\\oncepueblos\\components\\Logo\\index.js"); } } })();

/***/ })

},[543]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlc1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/NmE0NzBhMCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC9BcHAuanM/NmE0NzBhMCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvaW5kZXguanM/NmE0NzBhMCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ28vaW5kZXguanM/NmE0NzBhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwIGZyb20gJy4uL2NvbXBvbmVudHMvQXBwL0FwcCdcclxuaW1wb3J0IEhvbWUgZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8QXBwPlxyXG4gICAgICAgIDxIb21lIC8+XHJcbiAgICAgIDwvQXBwPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbilcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5jb25zdCBBcHAgPSAocHJvcHMpID0+IChcclxuICA8ZGl2PlxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSdpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoIG1heGltdW0tc2NhbGU9MS4wLCB1c2VyLXNjYWxhYmxlPW5vJyAvPlxyXG4gICAgICA8bGluayByZWw9J2FwcGxlLXRvdWNoLXN0YXJ0dXAtaW1hZ2UnIGhyZWY9Jy9zdGF0aWMvaWNvbi01MTJ4NTEyLnBuZycgLz5cclxuICAgICAgPGxpbmsgcmVsPSdhcHBsZS10b3VjaC1pY29uJyBocmVmPScvc3RhdGljL2ljb24tMzg0eDM4NCcgLz5cclxuICAgICAgPG1ldGEgbmFtZT0nYXBwbGUtbW9iaWxlLXdlYi1hcHAtdGl0bGUnIGNvbnRlbnQ9J0hDQicgLz5cclxuICAgICAgPG1ldGEgbmFtZT0nYXBwbGUtbW9iaWxlLXdlYi1hcHAtY2FwYWJsZScgY29udGVudD0neWVzJyAvPlxyXG4gICAgICA8bWV0YSBuYW1lPSdhcHBsZS1tb2JpbGUtd2ViLWFwcC1zdGF0dXMtYmFyLXN0eWxlJyBjb250ZW50PSdibHVlJyAvPlxyXG4gICAgICA8bWV0YSBuYW1lPSd0aGVtZS1jb2xvcicgY29udGVudD0nd2hpdGUnIC8+XHJcbiAgICAgIDxsaW5rIGhyZWY9J2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0JyByZWw9J3N0eWxlc2hlZXQnIC8+XHJcbiAgICAgIDxsaW5rIHJlbD0nbWFuaWZlc3QnIGhyZWY9Jy9zdGF0aWMvbWFuaWZlc3QuanNvbicgLz5cclxuICAgICAgPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyBocmVmPSdodHRwczovL3VucGtnLmNvbS9sZWFmbGV0QDEuMC4zL2Rpc3QvbGVhZmxldC5jc3MnIC8+XHJcbiAgICAgIDxzdHlsZT5cclxuICAgICAgICB7YC5sZWFmbGV0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxlYWZsZXQtY29udGFpbmVyIGEge1xyXG4gICAgICAgICAgY29sb3I6ICMyZDUxN2I7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGVhZmxldC1jb250cm9sLWF0dHJpYnV0aW9uIGEge1xyXG4gICAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBib2R5e1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaHRtbCB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuICAgICAgICAjX19uZXh0IHtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvSGVhZD5cclxuICAgIDxkaXY+XHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9BcHAvQXBwLmpzIiwiLy8gIGltcG9ydCB7IENvbCwgUm93IH0gZnJvbSAncmVhY3QtZ3JpZC1zeXN0ZW0nXHJcbmltcG9ydCBMb2dvIGZyb20gJy4uL0xvZ28nXHJcblxyXG5jb25zdCBob21lID0gKCkgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8TG9nbyAvPlxyXG4gIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBob21lXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvSG9tZS9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0ICgpID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT0nbG9nby1iYW5uZXInPlxyXG4gICAgPGltZyBpZD0nbG9nbycgc3JjPScvc3RhdGljL2xvZ28tb25jZS1wdWVibG9zLnBuZycgLz5cclxuICAgIDxzdHlsZT57YFxyXG4gICAgICAubG9nby1iYW5uZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAjbG9nbyB7XHJcbiAgICAgICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0xvZ28vaW5kZXguanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBRUE7QUFDQTs7Ozs7OztBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBd0NBO0FBQ0E7QUFEQTtBQUFBO0FBTUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REE7QUFDQTs7Ozs7O0FBRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBOzs7Ozs7O0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        