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

var _jsxFileName = '/home/pchinen/git/mc437-ecommerce/app/components/MyLayout.js';


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL015TGF5b3V0LmpzIl0sIm5hbWVzIjpbIkhlYWRlciIsIlRoZW1lIiwiY3JlYXRlUmVhY3RDbGFzcyIsImluZGV4U3R5bGUiLCJDb2wiLCJHcmlkIiwiUm93IiwibGF5b3V0U3R5bGUiLCJtYXJnaW4iLCJwYWRkaW5nIiwiYm9yZGVyIiwiTGF5b3V0IiwicHJvcHMiLCJfX2h0bWwiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTzs7OztBQUNQLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBUyxBQUNULEFBQVMsQUFDVCxBQUFTOzs7Ozs7O0FBRVQsSUFBTTtVQUFjLEFBQ1YsQUFDUjtXQUZrQixBQUVULEFBQ1Q7VUFIRixBQUFvQixBQUdWO0FBSFUsQUFDbEI7O0FBS0YsSUFBTSxTQUFTLFNBQVQsQUFBUyxPQUFBLEFBQUMsT0FBRDt5QkFDYixBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLDJDQUNTLHlCQUF5QixFQUFoQyxBQUFnQyxBQUFFLEFBQVE7Z0JBQTFDO2tCQURGLEFBQ0UsQUFDQTtBQURBO3NCQUNBLGNBQUEsU0FBSyxPQUFMLEFBQVk7Z0JBQVo7a0JBQUEsQUFDRTtBQURGO3FCQUNFLEFBQUM7O2dCQUFEO2tCQURGLEFBQ0UsQUFDQTtBQURBO0FBQUEsc0JBQ0EsQUFBQyxzQ0FBSyxTQUFOLEFBQWM7Z0JBQWQ7a0JBQUEsQUFDRTtBQURGO3FCQUNFLEFBQUMscUNBQUksV0FBTCxBQUFlO2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxBQUFDLHFDQUFJLElBQUwsQUFBUyxHQUFHLElBQVosQUFBZ0I7Z0JBQWhCO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FERixBQUNFLEFBRUMsK0JBQUEsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDTDtBQURLO0FBQUEscUJBQ0wsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBREssQUFDTCxBQUNBLGlDQUFBLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQUZLLEFBRUwsQUFDQSw4QkFBQSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FISyxBQUdMLEFBQ0Esa0NBQUEsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBUkEsQUFDRSxBQUdHLEFBSUwsQUFJRSxvQ0FBQSxBQUFDLHFDQUFJLElBQUwsQUFBUztnQkFBVDtrQkFBQSxBQUNHO0FBREg7V0FsQkssQUFDYixBQUVFLEFBRUUsQUFDRSxBQVlFLEFBQ1M7QUFuQm5CLEFBMkJBOztrQkFBQSxBQUFlIiwiZmlsZSI6Ik15TGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3BjaGluZW4vZ2l0L21jNDM3LWVjb21tZXJjZSJ9