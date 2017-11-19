'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MyLayout = require('../components/MyLayout.js');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _MyGrid = require('../components/MyGrid.js');

var _MyGrid2 = _interopRequireDefault(_MyGrid);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _createReactClass = require('create-react-class');

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/pchinen/git/mc437-ecommerce/app/pages/login.js?entry';


var Login = (0, _createReactClass2.default)({
  displayName: 'Login',
  render: function render() {

    return _react2.default.createElement('div', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    }, _react2.default.createElement('style', { type: 'text/css', __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      }
    }, '\n              .formLogin {\n                width: 30%;\n              }\n            '), _react2.default.createElement(_MyLayout2.default, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      }
    }, _react2.default.createElement('h1', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      }
    }, 'Login'), _react2.default.createElement('form', { 'class': 'formLogin', __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      }
    }, _react2.default.createElement(_reactBootstrap.FormGroup, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      }
    }, _react2.default.createElement(_reactBootstrap.ControlLabel, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      }
    }, 'Usuario'), _react2.default.createElement(_reactBootstrap.FormControl, { type: 'text', placeholder: 'Usuario', __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      }
    })), _react2.default.createElement(_reactBootstrap.FormGroup, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      }
    }, _react2.default.createElement(_reactBootstrap.ControlLabel, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      }
    }, 'Senha'), _react2.default.createElement(_reactBootstrap.FormControl, { type: 'password', __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      }
    })), _react2.default.createElement(_reactBootstrap.Button, { type: 'submit', __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      }
    }, 'Entrar'))));
  }
});

exports.default = Login;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWdlcy9sb2dpbi5qcyJdLCJuYW1lcyI6WyJMYXlvdXQiLCJHcmlkUHJvZHV0byIsIkdyaWRMYXlvdXQiLCJMaW5rIiwiY3JlYXRlUmVhY3RDbGFzcyIsIkZpZWxkR3JvdXAiLCJCdXR0b24iLCJDb250cm9sTGFiZWwiLCJGb3JtQ29udHJvbCIsIkZvcm1Hcm91cCIsIkxvZ2luIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBaUIsQUFDeEIsQUFBTyxBQUFnQjs7OztBQUN2QixBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQVMsQUFDVCxBQUFTLEFBQ1QsQUFBUyxBQUNULEFBQVMsQUFDVCxBQUFTOzs7Ozs7O0FBRVQsSUFBTTtlQUNGO0FBRDRCLDRCQUNuQixBQUVMOzsyQkFDRSxjQUFBOztrQkFBQTtvQkFBQSxBQUNFO0FBREY7QUFBQSxLQUFBLGtCQUNFLGNBQUEsV0FBTyxNQUFQLEFBQVk7a0JBQVo7b0JBQUE7QUFBQTtPQURGLEFBQ0UsQUFLQSw2R0FBQSxBQUFDOztrQkFBRDtvQkFBQSxBQUNFO0FBREY7QUFBQSx1QkFDRSxjQUFBOztrQkFBQTtvQkFBQTtBQUFBO0FBQUEsT0FERixBQUNFLEFBQ0MsMEJBQUEsY0FBQSxVQUFNLFNBQU4sQUFBWTtrQkFBWjtvQkFBQSxBQUNFO0FBREY7dUJBQ0UsQUFBQzs7a0JBQUQ7b0JBQUEsQUFDRTtBQURGO0FBQUEsdUJBQ0UsQUFBQzs7a0JBQUQ7b0JBQUE7QUFBQTtBQUFBLE9BREYsQUFDRSxBQUdBLDRCQUFBLEFBQUMsNkNBQVksTUFBYixBQUFrQixRQUFPLGFBQXpCLEFBQXFDO2tCQUFyQztvQkFMSixBQUNFLEFBSUUsQUFFRjtBQUZFO3lCQUVGLEFBQUM7O2tCQUFEO29CQUFBLEFBQ0U7QUFERjtBQUFBLHVCQUNFLEFBQUM7O2tCQUFEO29CQUFBO0FBQUE7QUFBQSxPQURGLEFBQ0UsQUFHQSwwQkFBQSxBQUFDLDZDQUFZLE1BQWIsQUFBa0I7a0JBQWxCO29CQVhKLEFBT0UsQUFJRSxBQUVGO0FBRkU7eUJBRUYsQUFBQyx3Q0FBTyxNQUFSLEFBQWE7a0JBQWI7b0JBQUE7QUFBQTtPQXRCVCxBQUNFLEFBTUUsQUFFRyxBQWFFLEFBT1o7QUFoQ0wsQUFBYyxBQUFrQixBQW1DaEM7QUFuQ2dDLENBQWxCOztrQkFtQ2QsQUFBZSIsImZpbGUiOiJsb2dpbi5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9wY2hpbmVuL2dpdC9tYzQzNy1lY29tbWVyY2UifQ==