
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(565);


/***/ }),

/***/ 565:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(555);

var _link2 = _interopRequireDefault(_link);

var _reactGridSystem = __webpack_require__(568);

var _App = __webpack_require__(597);

var _App2 = _interopRequireDefault(_App);

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
  }, _react2.default.createElement(_reactGridSystem.Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement(_reactGridSystem.Col, { md: 6, __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, 'Left')), _react2.default.createElement(_reactGridSystem.Col, { md: 6, __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, 'Right'))), _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, 'Hello I am a ', _react2.default.createElement(_link2.default, { href: '/about', __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, 'Pekub'))))));
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

/***/ 597:
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
  }, '.leaflet-container {\n          height: 100%;\n          width: 100%;\n        }\n        .leaflet-container a {\n          color: #2d517b;\n          text-decoration: none;\n          font-size: 15px;\n          font-family: \'Montserrat\', sans-serif;\n        }\n        .leaflet-control-attribution a {\n          display:none;\n        }\n        body{\n          background-color: white;\n          width: 100%;\n          height: 100%;\n          margin: 0;\n          top: 0;\n          overflow-x: hidden;\n          overflow-y: hidden;\n          background-color: white;\n          font-family: \'Montserrat\', sans-serif;\n        }\n        html {\n          height: 100%;\n          width: 100%;\n          margin: 0;\n          top: 0;\n          box-sizing: border-box;\n          overflow-y: hidden;\n          font-family: \'Montserrat\', sans-serif;\n        }\n        #__next {\n          height: 100%;\n        }\n        ')), _react2.default.createElement('div', { className: 'content', __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, props.children), _react2.default.createElement('style', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }, '\n      .content {\n        flex: 1;\n        position: absolute;\n        top: 69px;\n        width: 100%;\n        bottom: 0;\n        padding-bottom: 56px;\n        overflow-x: hidden;\n        overflow-y: auto;\n      }\n    '));
};

exports.default = App;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Saul\\Documents\\GitHub\\oncepueblos\\components\\App\\App.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Saul\\Documents\\GitHub\\oncepueblos\\components\\App\\App.js"); } } })();

/***/ })

},[564]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlc1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/MWFhMjVhYyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC9BcHAuanM/MWFhMjVhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IENvbCwgUm93IH0gZnJvbSAncmVhY3QtZ3JpZC1zeXN0ZW0nXHJcbmltcG9ydCBBcHAgZnJvbSAnLi4vY29tcG9uZW50cy9BcHAvQXBwJ1xyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxBcHA+XHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgIDxDb2wgbWQ9ezZ9PlxyXG4gICAgICAgICAgICA8aDE+TGVmdDwvaDE+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2wgbWQ9ezZ9PlxyXG4gICAgICAgICAgICA8aDE+UmlnaHQ8L2gxPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPGgxPkhlbGxvIEkgYW0gYSA8TGluayBocmVmPScvYWJvdXQnPjxhPlBla3ViPC9hPjwvTGluaz48L2gxPlxyXG4gICAgICA8L0FwcD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4pXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuY29uc3QgQXBwID0gKHByb3BzKSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxIZWFkPlxyXG4gICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0naW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCBtYXhpbXVtLXNjYWxlPTEuMCwgdXNlci1zY2FsYWJsZT1ubycgLz5cclxuICAgICAgPGxpbmsgcmVsPSdhcHBsZS10b3VjaC1zdGFydHVwLWltYWdlJyBocmVmPScvc3RhdGljL2ljb24tNTEyeDUxMi5wbmcnIC8+XHJcbiAgICAgIDxsaW5rIHJlbD0nYXBwbGUtdG91Y2gtaWNvbicgaHJlZj0nL3N0YXRpYy9pY29uLTM4NHgzODQnIC8+XHJcbiAgICAgIDxtZXRhIG5hbWU9J2FwcGxlLW1vYmlsZS13ZWItYXBwLXRpdGxlJyBjb250ZW50PSdIQ0InIC8+XHJcbiAgICAgIDxtZXRhIG5hbWU9J2FwcGxlLW1vYmlsZS13ZWItYXBwLWNhcGFibGUnIGNvbnRlbnQ9J3llcycgLz5cclxuICAgICAgPG1ldGEgbmFtZT0nYXBwbGUtbW9iaWxlLXdlYi1hcHAtc3RhdHVzLWJhci1zdHlsZScgY29udGVudD0nYmx1ZScgLz5cclxuICAgICAgPG1ldGEgbmFtZT0ndGhlbWUtY29sb3InIGNvbnRlbnQ9J3doaXRlJyAvPlxyXG4gICAgICA8bGluayBocmVmPSdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdCcgcmVsPSdzdHlsZXNoZWV0JyAvPlxyXG4gICAgICA8bGluayByZWw9J21hbmlmZXN0JyBocmVmPScvc3RhdGljL21hbmlmZXN0Lmpzb24nIC8+XHJcbiAgICAgIDxsaW5rIHJlbD0nc3R5bGVzaGVldCcgaHJlZj0naHR0cHM6Ly91bnBrZy5jb20vbGVhZmxldEAxLjAuMy9kaXN0L2xlYWZsZXQuY3NzJyAvPlxyXG4gICAgICA8c3R5bGU+XHJcbiAgICAgICAge2AubGVhZmxldC1jb250YWluZXIge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sZWFmbGV0LWNvbnRhaW5lciBhIHtcclxuICAgICAgICAgIGNvbG9yOiAjMmQ1MTdiO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxlYWZsZXQtY29udHJvbC1hdHRyaWJ1dGlvbiBhIHtcclxuICAgICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYm9keXtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGh0bWwge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgI19fbmV4dCB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L0hlYWQ+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4gICAgPHN0eWxlPntgXHJcbiAgICAgIC5jb250ZW50IHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDY5cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1NnB4O1xyXG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcFxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0FwcC9BcHAuanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBd0NBO0FBQ0E7QUFEQTtBQUdBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZUE7QUFDQTtBQURBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        