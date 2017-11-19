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

var Categorias = (0, _createReactClass2.default)({
  displayName: 'Categorias',
  render: function render() {
    return _react2.default.createElement(_reactBootstrap.ListGroup, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    }, _react2.default.createElement(_reactBootstrap.ListGroupItem, { href: '#', __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      }
    }, 'Brincadeiras'), _react2.default.createElement(_reactBootstrap.ListGroupItem, { href: '#', __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      }
    }, 'Lingeries'), _react2.default.createElement(_reactBootstrap.ListGroupItem, { href: '#', __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      }
    }, 'Acess\xF3rios'), _react2.default.createElement(_reactBootstrap.ListGroupItem, { href: '#', __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      }
    }, 'Cosm\xE9ticos'));
  }
});

var Layout = function Layout(props) {
  return _react2.default.createElement(_Theme2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _index2.default }, __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }), _react2.default.createElement('div', { style: layoutStyle, __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, _react2.default.createElement(_Header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }), _react2.default.createElement(_reactBootstrap.Grid, { bsClass: 'GridLayout', __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, _react2.default.createElement(_reactBootstrap.Row, { className: 'show-grid', __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, _react2.default.createElement(_reactBootstrap.Col, { sm: 6, md: 2, __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, _react2.default.createElement('h2', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, 'Categorias'), _react2.default.createElement(Categorias, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  })), _react2.default.createElement(_reactBootstrap.Col, { sm: 10, __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, props.children)))));
};

exports.default = Layout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL015TGF5b3V0LmpzIl0sIm5hbWVzIjpbIkhlYWRlciIsIlRoZW1lIiwiY3JlYXRlUmVhY3RDbGFzcyIsImluZGV4U3R5bGUiLCJDb2wiLCJHcmlkIiwiUm93IiwiTGlzdEdyb3VwIiwiTGlzdEdyb3VwSXRlbSIsImxheW91dFN0eWxlIiwibWFyZ2luIiwicGFkZGluZyIsImJvcmRlciIsIkNhdGVnb3JpYXMiLCJyZW5kZXIiLCJMYXlvdXQiLCJwcm9wcyIsIl9faHRtbCIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPOzs7O0FBQ1AsQUFBTyxBQUFnQjs7OztBQUN2QixBQUFTLEFBQ1QsQUFBUyxBQUNULEFBQVMsQUFDVCxBQUFTLEFBQ1QsQUFBUzs7Ozs7OztBQUVULElBQU07VUFBYyxBQUNWLEFBQ1I7V0FGa0IsQUFFVCxBQUNUO1VBSEYsQUFBb0IsQUFHVjtBQUhVLEFBQ2xCOztBQUtGLElBQU07ZUFDRjtBQURnQyw0QkFDdkIsQUFDTDsyQkFDSSxBQUFDOztrQkFBRDtvQkFBQSxBQUNFO0FBREY7QUFBQSxLQUFBLGtCQUNFLEFBQUMsK0NBQWMsTUFBZixBQUFvQjtrQkFBcEI7b0JBQUE7QUFBQTtPQURGLEFBQ0UsQUFHQSxpQ0FBQSxBQUFDLCtDQUFjLE1BQWYsQUFBb0I7a0JBQXBCO29CQUFBO0FBQUE7T0FKRixBQUlFLEFBR0EsOEJBQUEsQUFBQywrQ0FBYyxNQUFmLEFBQW9CO2tCQUFwQjtvQkFBQTtBQUFBO09BUEYsQUFPRSxBQUdBLGtDQUFBLEFBQUMsK0NBQWMsTUFBZixBQUFvQjtrQkFBcEI7b0JBQUE7QUFBQTtPQVhOLEFBQ0ksQUFVRSxBQUtUO0FBbEJMLEFBQW1CLEFBQWlCO0FBQUEsQ0FBakI7O0FBc0JuQixJQUFNLFNBQVMsU0FBVCxBQUFTLE9BQUEsQUFBQyxPQUFEO3lCQUNiLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsMkNBQ1MseUJBQXlCLEVBQWhDLEFBQWdDLEFBQUUsQUFBUTtnQkFBMUM7a0JBREYsQUFDRSxBQUNBO0FBREE7c0JBQ0EsY0FBQSxTQUFLLE9BQUwsQUFBWTtnQkFBWjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsQUFBQzs7Z0JBQUQ7a0JBREYsQUFDRSxBQUNBO0FBREE7QUFBQSxzQkFDQSxBQUFDLHNDQUFLLFNBQU4sQUFBYztnQkFBZDtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsQUFBQyxxQ0FBSSxXQUFMLEFBQWU7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO3FCQUNFLEFBQUMscUNBQUksSUFBTCxBQUFTLEdBQUcsSUFBWixBQUFnQjtnQkFBaEI7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQURGLEFBQ0UsQUFDQSw2Q0FBQSxBQUFDOztnQkFBRDtrQkFISixBQUNFLEFBRUUsQUFFRjtBQUZFO0FBQUEsdUJBRUYsQUFBQyxxQ0FBSSxJQUFMLEFBQVM7Z0JBQVQ7a0JBQUEsQUFDRztBQURIO1dBWEssQUFDYixBQUVFLEFBRUUsQUFDRSxBQUtFLEFBQ1M7QUFabkIsQUFvQkE7O2tCQUFBLEFBQWUiLCJmaWxlIjoiTXlMYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcGNoaW5lbi9naXQvbWM0MzctZWNvbW1lcmNlIn0=