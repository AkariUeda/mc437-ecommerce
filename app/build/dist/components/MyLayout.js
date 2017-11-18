'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Theme = require('../components/Theme');

var _Theme2 = _interopRequireDefault(_Theme);

var _createReactClass = require('create-react-class');

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _index = require('../styles/index.scss');

var _index2 = _interopRequireDefault(_index);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Akari\\Desktop\\mc437-ecommerce\\app\\components\\MyLayout.js';


var layoutStyle = {
  margin: 5,
  padding: 10,
  border: '0.2px solid #DDD'
};

var Layout = function Layout(props) {
  return _react2.default.createElement(_Theme2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _index2.default }, __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), _react2.default.createElement('div', { style: layoutStyle, __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement(_Header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), _react2.default.createElement(_reactBootstrap.Grid, { bsClass: 'GridLayout', __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, _react2.default.createElement(_reactBootstrap.Row, { className: 'show-grid', __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, _react2.default.createElement(_reactBootstrap.Col, { sm: 6, md: 2, __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, _react2.default.createElement('h2', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, 'Categorias'), _react2.default.createElement('ul', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, 'Brincadeiras'), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, 'Lingeries'), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, 'Acess\xF3rios'), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, 'Cosm\xE9ticos'))), _react2.default.createElement(_reactBootstrap.Col, { sm: 10, __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, props.children)))));
};

exports.default = Layout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcFxcY29tcG9uZW50c1xcTXlMYXlvdXQuanMiXSwibmFtZXMiOlsiSGVhZGVyIiwiVGhlbWUiLCJjcmVhdGVSZWFjdENsYXNzIiwiaW5kZXhTdHlsZSIsIkNvbCIsIkdyaWQiLCJSb3ciLCJsYXlvdXRTdHlsZSIsIm1hcmdpbiIsInBhZGRpbmciLCJib3JkZXIiLCJMYXlvdXQiLCJwcm9wcyIsIl9faHRtbCIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPOzs7O0FBQ1AsQUFBTyxBQUFnQjs7OztBQUN2QixBQUFTLEFBQ1QsQUFBUyxBQUNULEFBQVM7Ozs7Ozs7QUFFVCxJQUFNO1VBQWMsQUFDVixBQUNSO1dBRmtCLEFBRVQsQUFDVDtVQUhGLEFBQW9CLEFBR1Y7QUFIVSxBQUNsQjs7QUFLRixJQUFNLFNBQVMsU0FBVCxBQUFTLE9BQUEsQUFBQyxPQUFEO3lCQUNiLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsMkNBQ1MseUJBQXlCLEVBQWhDLEFBQWdDLEFBQUUsQUFBUTtnQkFBMUM7a0JBREYsQUFDRSxBQUNBO0FBREE7c0JBQ0EsY0FBQSxTQUFLLE9BQUwsQUFBWTtnQkFBWjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsQUFBQzs7Z0JBQUQ7a0JBREYsQUFDRSxBQUNBO0FBREE7QUFBQSxzQkFDQSxBQUFDLHNDQUFLLFNBQU4sQUFBYztnQkFBZDtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsQUFBQyxxQ0FBSSxXQUFMLEFBQWU7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO3FCQUNFLEFBQUMscUNBQUksSUFBTCxBQUFTLEdBQUcsSUFBWixBQUFnQjtnQkFBaEI7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQURGLEFBQ0UsQUFFQywrQkFBQSxjQUFBOztnQkFBQTtrQkFBQSxBQUNMO0FBREs7QUFBQSxxQkFDTCxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FESyxBQUNMLEFBQ0EsaUNBQUEsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBRkssQUFFTCxBQUNBLDhCQUFBLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQUhLLEFBR0wsQUFDQSxrQ0FBQSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FSQSxBQUNFLEFBR0csQUFJTCxBQUlFLG9DQUFBLEFBQUMscUNBQUksSUFBTCxBQUFTO2dCQUFUO2tCQUFBLEFBQ0c7QUFESDtXQWxCSyxBQUNiLEFBRUUsQUFFRSxBQUNFLEFBWUUsQUFDUztBQW5CbkIsQUEyQkE7O2tCQUFBLEFBQWUiLCJmaWxlIjoiTXlMYXlvdXQuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvQWthcmkvRGVza3RvcC9tYzQzNy1lY29tbWVyY2UifQ==