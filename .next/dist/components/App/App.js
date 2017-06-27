'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _Logo = require('../Logo');

var _Logo2 = _interopRequireDefault(_Logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Saul\\Documents\\GitHub\\oncepueblos\\components\\App\\App.js';


var App = function App(props) {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width maximum-scale=1.0, user-scalable=no', __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), _react2.default.createElement('link', { rel: 'apple-touch-startup-image', href: '/static/icon-512x512.png', __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), _react2.default.createElement('link', { rel: 'apple-touch-icon', href: '/static/icon-384x384', __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), _react2.default.createElement('meta', { name: 'apple-mobile-web-app-title', content: 'HCB', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement('meta', { name: 'apple-mobile-web-app-capable', content: 'yes', __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), _react2.default.createElement('meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'blue', __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), _react2.default.createElement('meta', { name: 'theme-color', content: 'white', __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Montserrat', rel: 'stylesheet', __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), _react2.default.createElement('link', { rel: 'manifest', href: '/static/manifest.json', __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://unpkg.com/leaflet@1.0.3/dist/leaflet.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), _react2.default.createElement('style', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, '.leaflet-container {\n          height: 100%;\n          width: 100%;\n        }\n        .leaflet-container a {\n          color: #2d517b;\n          text-decoration: none;\n          font-size: 15px;\n          font-family: \'Montserrat\', sans-serif;\n        }\n        .leaflet-control-attribution a {\n          display:none;\n        }\n        body{\n          background-color: white;\n          width: 100%;\n          height: 100%;\n          margin: 0;\n          top: 0;\n          overflow-x: hidden;\n          overflow-y: hidden;\n          background-color: white;\n          font-family: \'Montserrat\', sans-serif;\n        }\n        html {\n          height: 100%;\n          width: 100%;\n          margin: 0;\n          top: 0;\n          box-sizing: border-box;\n          overflow-y: hidden;\n          font-family: \'Montserrat\', sans-serif;\n        }\n        #__next {\n          height: 100%;\n        }\n        ')), _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }, _react2.default.createElement(_Logo2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }), props.children));
};

exports.default = App;