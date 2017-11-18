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

var FormExample = (0, _createReactClass2.default)({
  displayName: 'FormExample',
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
    }, 'Procurar'), _react2.default.createElement(_reactBootstrap.FormControl.Feedback, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      }
    })));
  }
});

var Header = (0, _createReactClass2.default)({
  displayName: 'Header',
  render: function render() {
    var NavUsuario;
    var NavLogin;

    // var logged = this.props.store.user || false;
    var logged = false;

    if (this.logged) {
      NavUsuario = _react2.default.createElement(_reactBootstrap.Navbar.Text, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, 'Signed in as: ', _react2.default.createElement(_reactBootstrap.Navbar.Link, { href: '#', __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, 'Mark Otto'));
      NavLogin = _react2.default.createElement(_reactBootstrap.NavItem, { eventKey: 2, href: '#', __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, 'Logout');
    } else {
      NavUsuario = _react2.default.createElement(_reactBootstrap.Navbar.Text, { pullRight: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, 'Signed in as: Visitante');
      NavLogin = _react2.default.createElement(_reactBootstrap.Nav, { pullRight: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, _react2.default.createElement(_reactBootstrap.NavItem, { eventKey: 2, href: '#', __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, 'Login'));
    }

    return _react2.default.createElement('div', { 'class': 'header', __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      }
    }, _react2.default.createElement(_reactBootstrap.Navbar, { fluid: true, __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      }
    }, _react2.default.createElement(_reactBootstrap.Navbar.Header, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      }
    }, _react2.default.createElement(_reactBootstrap.Navbar.Brand, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      }
    }, _react2.default.createElement('a', { href: '/', __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      }
    }, 'E-Commerce'))), _react2.default.createElement(_reactBootstrap.Nav, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      }
    }, _react2.default.createElement(_reactBootstrap.NavItem, { eventKey: 1, href: '/', __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      }
    }, 'Home'), _react2.default.createElement(_reactBootstrap.NavItem, { eventKey: 2, href: '/about', __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      }
    }, 'About')), NavUsuario, NavLogin, _react2.default.createElement(_reactBootstrap.Nav, { pullRight: true, __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      }
    }, _react2.default.createElement(_reactBootstrap.NavItem, { eventKey: 3, href: '#', __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      }
    }, 'Carrinho')), _react2.default.createElement(FormExample, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      }
    })));
  }
});

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL0hlYWRlci5qcyJdLCJuYW1lcyI6WyJMaW5rIiwiVGhlbWUiLCJjcmVhdGVSZWFjdENsYXNzIiwiaW5kZXhTdHlsZSIsIkJ1dHRvbiIsIkNvbnRyb2xMYWJlbCIsIkZvcm1Db250cm9sIiwiRm9ybUdyb3VwIiwiSGVscEJsb2NrIiwiTWVudUl0ZW0iLCJOYXYiLCJOYXZEcm9wZG93biIsIk5hdkl0ZW0iLCJOYXZiYXIiLCJGb3JtIiwibGlua1N0eWxlIiwibWFyZ2luUmlnaHQiLCJGb3JtRXhhbXBsZSIsImdldEluaXRpYWxTdGF0ZSIsInZhbHVlIiwiZ2V0VmFsaWRhdGlvblN0YXRlIiwibGVuZ3RoIiwic3RhdGUiLCJoYW5kbGVDaGFuZ2UiLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJyZW5kZXIiLCJIZWFkZXIiLCJOYXZVc3VhcmlvIiwiTmF2TG9naW4iLCJsb2dnZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU87Ozs7QUFDUCxBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQVMsQUFDVCxBQUFTLEFBQ1QsQUFBUyxBQUNULEFBQVMsQUFDVCxBQUFTLEFBQ1QsQUFBUyxBQUNULEFBQVMsQUFDVCxBQUFTLEFBQ1QsQUFBUyxBQUNULEFBQVMsQUFDVCxBQUFTOzs7Ozs7O0FBRVQsSUFBTTtlQUFOLEFBQWtCLEFBQ0g7QUFERyxBQUNoQjs7QUFHRixJQUFNO2VBQ0o7QUFEbUMsOENBQ2pCLEFBQ2hCOzthQUFBLEFBQU8sQUFDRSxBQUVWO0FBSFEsQUFDTDtBQUgrQixBQU9uQztBQVBtQyxvREFPZCxBQUNuQjtRQUFNLFNBQVMsS0FBQSxBQUFLLE1BQUwsQUFBVyxNQUExQixBQUFnQyxBQUNoQztRQUFJLFNBQUosQUFBYSxHQUFHLE9BQWhCLEFBQWdCLEFBQU8sZUFDbEIsSUFBSSxTQUFKLEFBQWEsR0FBRyxPQUFoQixBQUFnQixBQUFPLGVBQ3ZCLElBQUksU0FB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