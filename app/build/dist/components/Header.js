'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _Theme = require('../components/Theme');

var _Theme2 = _interopRequireDefault(_Theme);

var _createReactClass = require('create-react-class');

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _index = require('../styles/index.scss');

var _index2 = _interopRequireDefault(_index);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/pchinen/git/mc437-ecommerce/app/components/Header.js';


var linkStyle = {
  marginRight: 15
};

var FormProcurar = (0, _createReactClass2.default)({
  displayName: 'FormProcurar',
  getInitialState: function getInitialState() {
    return {
      value: ''
    };
  },
  getValidationState: function getValidationState() {
    var length = this.state.value.length;
    if (length > 3) return 'success';else if (length > 2) return 'warning';else if (length > 0) return 'error';
    return null;
  },
  handleChange: function handleChange(e) {
    this.setState({ value: e.target.value });
  },
  render: function render() {
    return _react2.default.createElement(_reactBootstrap.Navbar.Form, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      }
    }, _react2.default.createElement(_reactBootstrap.FormGroup, {
      controlId: 'formBasicText',
      validationState: this.getValidationState(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      }
    }, _react2.default.createElement(_reactBootstrap.FormControl, {
      type: 'text',
      value: this.state.value,
      placeholder: 'Procurar Produtos',
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      }
    }), ' ', _react2.default.createElement(_reactBootstrap.Button, { type: 'submit', __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      }
    }, 'Procurar')));
  }
});

var Header = (0, _createReactClass2.default)({
  displayName: 'Header',
  getInitialState: function getInitialState() {
    return {
      // logged: this.props.store.user || false;
      logged: true
    };
  },
  render: function render() {
    var NavUsuario;
    var NavLogin;

    if (this.state.logged === true) {
      NavUsuario = _react2.default.createElement(_reactBootstrap.Navbar.Text, { pullRight: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, 'Signed in as: ', _react2.default.createElement(_reactBootstrap.Navbar.Link, { href: '#', __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, 'Mark Otto'));
      NavLogin = _react2.default.createElement(_reactBootstrap.Nav, { pullRight: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, _react2.default.createElement(_reactBootstrap.NavItem, { eventKey: 2, href: '#', __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, 'Logout'));
    } else {
      NavUsuario = _react2.default.createElement(_reactBootstrap.Navbar.Text, { pullRight: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, 'Signed in as: Visitante');
      NavLogin = _react2.default.createElement(_reactBootstrap.Nav, { pullRight: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, _react2.default.createElement(_reactBootstrap.NavItem, { eventKey: 2, href: '/login', __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, 'Login'));
    }

    console.log(this.state.logged);
    console.log(NavUsuario);
    console.log(NavLogin);

    return _react2.default.createElement('div', { 'class': 'header', __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      }
    }, _react2.default.createElement(_reactBootstrap.Navbar, { fluid: true, __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      }
    }, _react2.default.createElement(_reactBootstrap.Navbar.Header, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      }
    }, _react2.default.createElement(_reactBootstrap.Navbar.Brand, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      }
    }, _react2.default.createElement('a', { href: '/', __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      }
    }, 'E-Commerce'))), _react2.default.createElement(_reactBootstrap.Nav, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      }
    }, _react2.default.createElement(_reactBootstrap.NavItem, { eventKey: 1, href: '/', __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      }
    }, 'Home')), _react2.default.createElement(_reactBootstrap.Nav, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      }
    }, _react2.default.createElement(_reactBootstrap.NavItem, { eventKey: 2, href: '/about', __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      }
    }, 'About')), NavLogin, NavUsuario, _react2.default.createElement(_reactBootstrap.Nav, { pullRight: true, __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      }
    }, _react2.default.createElement(_reactBootstrap.NavItem, { eventKey: 3, href: '#', __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      }
    }, 'Carrinho')), _react2.default.createElement(FormProcurar, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      }
    })));
  }
});

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL0hlYWRlci5qcyJdLCJuYW1lcyI6WyJMaW5rIiwiVGhlbWUiLCJjcmVhdGVSZWFjdENsYXNzIiwiaW5kZXhTdHlsZSIsIkJ1dHRvbiIsIkNvbnRyb2xMYWJlbCIsIkZvcm1Db250cm9sIiwiRm9ybUdyb3VwIiwiSGVscEJsb2NrIiwiTWVudUl0ZW0iLCJOYXYiLCJOYXZEcm9wZG93biIsIk5hdkl0ZW0iLCJOYXZiYXIiLCJGb3JtIiwibGlua1N0eWxlIiwibWFyZ2luUmlnaHQiLCJGb3JtUHJvY3VyYXIiLCJnZXRJbml0aWFsU3RhdGUiLCJ2YWx1ZSIsImdldFZhbGlkYXRpb25TdGF0ZSIsImxlbmd0aCIsInN0YXRlIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwicmVuZGVyIiwiSGVhZGVyIiwibG9nZ2VkIiwiTmF2VXN1YXJpbyIsIk5hdkxvZ2luIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTzs7OztBQUNQLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBUyxBQUNULEFBQVMsQUFDVCxBQUFTLEFBQ1QsQUFBUyxBQUNULEFBQVMsQUFDVCxBQUFTLEFBQ1QsQUFBUyxBQUNULEFBQVMsQUFDVCxBQUFTLEFBQ1QsQUFBUyxBQUNULEFBQVM7Ozs7Ozs7QUFFVCxJQUFNO2VBQU4sQUFBa0IsQUFDSDtBQURHLEFBQ2hCOztBQUdGLElBQU07ZUFDSjtBQURvQyw4Q0FDbEIsQUFDaEI7O2FBQUEsQUFBTyxBQUNFLEFBRVY7QUFIUSxBQUNMO0FBSGdDLEFBT3BDO0FBUG9DLG9EQU9mLEFBQ25CO1FBQU0sU0FBUyxLQUFBLEFBQUssTUFBTCxBQUFXLE1BQTFCLEFBQWdDLEFBQ2hDO1FBQUksU0FBSixBQUFhLEdBQUcsT0FBaEIsQUFBZ0IsQUFBTyxlQUNsQixJQUFJLFNBQUosQUFBYSxHQUFHLE9BQWhCLEFBQWdCLEFBQU8sZUFDdkIsSUFBSSxTQUFKLEFBQWEsR0FBRyxPQUFBLEFBQU8sQUFDNUI7V0FBQSxBQUFPLEFBQ1I7QUFibUMsQUFlcEM7QUFmb0Msc0NBQUEsQUFldkIsR0FBRyxBQUNkO1NBQUEsQUFBSyxTQUFTLEVBQUUsT0FBTyxFQUFBLEFBQUUsT0FBekIsQUFBYyxBQUFrQixBQUNqQztBQWpCbUMsQUFtQnBDO0FBbkJvQyw0QkFtQjNCLEFBQ1A7MkJBQ0csY0FBRCx1QkFBQSxBQUFROztrQkFBUjtvQkFBQSxBQUNFO0FBREY7QUFBQSxLQUFBLGtCQUNFLEFBQUM7aUJBQUQsQUFDWSxBQUNWO3VCQUFpQixLQUZuQixBQUVtQixBQUFLOztrQkFGeEI7b0JBQUEsQUFJRTtBQUpGO0FBQ0UsdUJBR0EsQUFBQztZQUFELEFBQ08sQUFDTDthQUFPLEtBQUEsQUFBSyxNQUZkLEFBRW9CLEFBQ2xCO21CQUhGLEFBR2MsQUFDWjtnQkFBVSxLQUpaLEFBSWlCOztrQkFKakI7b0JBSkYsQUFJRSxBQU1DO0FBTkQ7QUFDRSxRQUxKLEFBV0EscUJBQUEsQUFBQyx3Q0FBTyxNQUFSLEFBQWE7a0JBQWI7b0JBQUE7QUFBQTtPQWJKLEFBQ0UsQUFDRSxBQVdBLEFBTUw7QUF2Q0gsQUFBcUIsQUFBaUI7QUFBQSxDQUFqQjs7QUEwQ3JCLElBQU07ZUFFRjtBQUY0Qiw4Q0FFVixBQUNkOztBQUVJO2NBRkosQUFBTyxBQUVLLEFBRWY7QUFKVSxBQUNIO0FBSm9CLEFBUzVCO0FBVDRCLDRCQVNuQixBQUNMO1FBQUEsQUFBSSxBQUNKO1FBQUEsQUFBSSxBQUVKOztRQUFHLEtBQUEsQUFBSyxNQUFMLEFBQVcsV0FBZCxBQUF5QixNQUFLLEFBQzFCO21DQUNHLGNBQUQsdUJBQUEsQUFBUSxRQUFLLFdBQWI7b0JBQUE7c0JBQUE7QUFBQTtPQUFBLEVBQ2dCLGtDQUFDLGNBQUQsdUJBQUEsQUFBUSxRQUFLLE1BQWIsQUFBa0I7b0JBQWxCO3NCQUFBO0FBQUE7U0FGbEIsQUFDRSxBQUNnQixBQUdsQjtpQ0FDRSxBQUFDLHFDQUFJLFdBQUw7b0JBQUE7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0UsQUFBQyx5Q0FBUSxVQUFULEFBQW1CLEdBQUcsTUFBdEIsQUFBMkI7b0JBQTNCO3NCQUFBO0FBQUE7U0FGSixBQUNFLEFBQ0UsQUFLUDtBQWJELFdBYUssQUFDRDttQ0FDRyxjQUFELHVCQUFBLEFBQVEsUUFBSyxXQUFiO29CQUFBO3NCQUFBO0FBQUE7T0FBQSxFQURGLEFBQ0UsQUFJRjtpQ0FDRSxBQUFDLHFDQUFJLFdBQUw7b0JBQUE7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0UsQUFBQyx5Q0FBUSxVQUFULEFBQW1CLEdBQUcsTUFBdEIsQUFBMkI7b0JBQTNCO3NCQUFBO0FBQUE7U0FGSixBQUNFLEFBQ0UsQUFLUDtBQUVEOztZQUFBLEFBQVEsSUFBSSxLQUFBLEFBQUssTUFBakIsQUFBdUIsQUFDdkI7WUFBQSxBQUFRLElBQVIsQUFBWSxBQUNaO1lBQUEsQUFBUSxJQUFSLEFBQVksQUFFWjs7MkJBQ0UsY0FBQSxTQUFLLFNBQUwsQUFBVztrQkFBWDtvQkFBQSxBQUNFO0FBREY7S0FBQSxrQkFDRSxBQUFDLHdDQUFPLE9BQVI7a0JBQUE7b0JBQUEsQUFDRTtBQURGO3VCQUNHLGNBQUQsdUJBQUEsQUFBUTs7a0JBQVI7b0JBQUEsQUFDRTtBQURGO0FBQUEsdUJBQ0csY0FBRCx1QkFBQSxBQUFROztrQkFBUjtvQkFBQSxBQUNFO0FBREY7QUFBQSx1QkFDRSxjQUFBLE9BQUcsTUFBSCxBQUFRO2tCQUFSO29CQUFBO0FBQUE7T0FITixBQUNFLEFBQ0UsQUFDRSxBQUdKLGlDQUFBLEFBQUM7O2tCQUFEO29CQUFBLEFBQ0U7QUFERjtBQUFBLHVCQUNFLEFBQUMseUNBQVEsVUFBVCxBQUFtQixHQUFHLE1BQXRCLEFBQTJCO2tCQUEzQjtvQkFBQTtBQUFBO09BUEosQUFNRSxBQUNFLEFBRUYsMEJBQUEsQUFBQzs7a0JBQUQ7b0JBQUEsQUFDRTtBQURGO0FBQUEsdUJBQ0UsQUFBQyx5Q0FBUSxVQUFULEFBQW1CLEdBQUcsTUFBdEIsQUFBMkI7a0JBQTNCO29CQUFBO0FBQUE7T0FWSixBQVNFLEFBQ0UsQUFFRCxXQVpILEFBYUcsVUFiSCxBQWNFLDRCQUFBLEFBQUMscUNBQUksV0FBTDtrQkFBQTtvQkFBQSxBQUNFO0FBREY7dUJBQ0UsQUFBQyx5Q0FBUSxVQUFULEFBQW1CLEdBQUcsTUFBdEIsQUFBMkI7a0JBQTNCO29CQUFBO0FBQUE7T0FmSixBQWNFLEFBQ0UsQUFFRiw0Q0FBQSxBQUFDOztrQkFBRDtvQkFuQk4sQUFDRSxBQUNFLEFBaUJFLEFBR1I7QUFIUTtBQUFBO0FBaEVkLEFBQWUsQUFBaUIsQUFzRWhDO0FBdEVnQyxDQUFqQjs7a0JBc0VmLEFBQWUiLCJmaWxlIjoiSGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3BjaGluZW4vZ2l0L21jNDM3LWVjb21tZXJjZSJ9