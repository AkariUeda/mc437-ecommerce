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

    return _react2.default.createElement('div', { 'class': 'header', __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      }
    }, _react2.default.createElement(_reactBootstrap.Navbar, { fluid: true, __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      }
    }, _react2.default.createElement(_reactBootstrap.Navbar.Header, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      }
    }, _react2.default.createElement(_reactBootstrap.Navbar.Brand, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      }
    }, _react2.default.createElement('a', { href: '/', __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      }
    }, 'E-Commerce'))), _react2.default.createElement(_reactBootstrap.Nav, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      }
    }, _react2.default.createElement(_reactBootstrap.NavItem, { eventKey: 1, href: '/', __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      }
    }, 'Home')), _react2.default.createElement(_reactBootstrap.Nav, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      }
    }, _react2.default.createElement(_reactBootstrap.NavItem, { eventKey: 2, href: '/about', __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      }
    }, 'About')), NavLogin, NavUsuario, _react2.default.createElement(_reactBootstrap.Nav, { pullRight: true, __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      }
    }, _react2.default.createElement(_reactBootstrap.NavItem, { eventKey: 3, href: '/carrinho', __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      }
    }, 'Carrinho')), _react2.default.createElement(FormProcurar, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      }
    })));
  }
});

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL0hlYWRlci5qcyJdLCJuYW1lcyI6WyJMaW5rIiwiVGhlbWUiLCJjcmVhdGVSZWFjdENsYXNzIiwiaW5kZXhTdHlsZSIsIkJ1dHRvbiIsIkNvbnRyb2xMYWJlbCIsIkZvcm1Db250cm9sIiwiRm9ybUdyb3VwIiwiSGVscEJsb2NrIiwiTWVudUl0ZW0iLCJOYXYiLCJOYXZEcm9wZG93biIsIk5hdkl0ZW0iLCJOYXZiYXIiLCJGb3JtIiwibGlua1N0eWxlIiwibWFyZ2luUmlnaHQiLCJGb3JtUHJvY3VyYXIiLCJnZXRJbml0aWFsU3RhdGUiLCJ2YWx1ZSIsImdldFZhbGlkYXRpb25TdGF0ZSIsImxlbmd0aCIsInN0YXRlIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwicmVuZGVyIiwiSGVhZGVyIiwibG9nZ2VkIiwiTmF2VXN1YXJpbyIsIk5hdkxvZ2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPOzs7O0FBQ1AsQUFBTyxBQUFnQjs7OztBQUN2QixBQUFTLEFBQ1QsQUFBUyxBQUNULEFBQVMsQUFDVCxBQUFTLEFBQ1QsQUFBUyxBQUNULEFBQVMsQUFDVCxBQUFTLEFBQ1QsQUFBUyxBQUNULEFBQVMsQUFDVCxBQUFTLEFBQ1QsQUFBUzs7Ozs7OztBQUVULElBQU07ZUFBTixBQUFrQixBQUNIO0FBREcsQUFDaEI7O0FBR0YsSUFBTTtlQUNKO0FBRG9DLDhDQUNsQixBQUNoQjs7YUFBQSxBQUFPLEFBQ0UsQUFFVjtBQUhRLEFBQ0w7QUFIZ0MsQUFPcEM7QUFQb0Msb0RBT2YsQUFDbkI7UUFBTSxTQUFTLEtBQUEsQUFBSyxNQUFMLEFBQVcsTUFBMUIsQUFBZ0MsQUFDaEM7UUFBSSxTQUFKLEFBQWEsR0FBRyxPQUFoQixBQUFnQixBQUFPLGVBQ2xCLElBQUksU0FBSixBQUFhLEdBQUcsT0FBaEIsQUFBZ0IsQUFBTyxlQUN2QixJQUFJLFNBQUosQUFBYSxHQUFHLE9BQUEsQUFBTyxBQUM1QjtXQUFBLEFBQU8sQUFDUjtBQWJtQyxBQWVwQztBQWZvQyxzQ0FBQSxBQWV2QixHQUFHLEFBQ2Q7U0FBQSxBQUFLLFNBQVMsRUFBRSxPQUFPLEVBQUEsQUFBRSxPQUF6QixBQUFjLEFBQWtCLEFBQ2pDO0FBakJtQyxBQW1CcEM7QUFuQm9DLDRCQW1CM0IsQUFDUDsyQkFDRyxjQUFELHVCQUFBLEFBQVE7O2tCQUFSO29CQUFBLEFBQ0U7QUFERjtBQUFBLEtBQUEsa0JBQ0UsQUFBQztpQkFBRCxBQUNZLEFBQ1Y7dUJBQWlCLEtBRm5CLEFBRW1CLEFBQUs7O2tCQUZ4QjtvQkFBQSxBQUlFO0FBSkY7QUFDRSx1QkFHQSxBQUFDO1lBQUQsQUFDTyxBQUNMO2FBQU8sS0FBQSxBQUFLLE1BRmQsQUFFb0IsQUFDbEI7bUJBSEYsQUFHYyxBQUNaO2dCQUFVLEtBSlosQUFJaUI7O2tCQUpqQjtvQkFKRixBQUlFLEFBTUM7QUFORDtBQUNFLFFBTEosQUFXQSxxQkFBQSxBQUFDLHdDQUFPLE1BQVIsQUFBYTtrQkFBYjtvQkFBQTtBQUFBO09BYkosQUFDRSxBQUNFLEFBV0EsQUFNTDtBQXZDSCxBQUFxQixBQUFpQjtBQUFBLENBQWpCOztBQTBDckIsSUFBTTtlQUVGO0FBRjRCLDhDQUVWLEFBQ2Q7O0FBRUk7Y0FGSixBQUFPLEFBRUssQUFFZjtBQUpVLEFBQ0g7QUFKb0IsQUFTNUI7QUFUNEIsNEJBU25CLEFBQ0w7UUFBQSxBQUFJLEFBQ0o7UUFBQSxBQUFJLEFBRUo7O1FBQUcsS0FBQSxBQUFLLE1BQUwsQUFBVyxXQUFkLEFBQXlCLE1BQUssQUFDMUI7bUNBQ0csY0FBRCx1QkFBQSxBQUFRLFFBQUssV0FBYjtvQkFBQTtzQkFBQTtBQUFBO09BQUEsRUFDZ0Isa0NBQUMsY0FBRCx1QkFBQSxBQUFRLFFBQUssTUFBYixBQUFrQjtvQkFBbEI7c0JBQUE7QUFBQTtTQUZsQixBQUNFLEFBQ2dCLEFBR2xCO2lDQUNFLEFBQUMscUNBQUksV0FBTDtvQkFBQTtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRSxBQUFDLHlDQUFRLFVBQVQsQUFBbUIsR0FBRyxNQUF0QixBQUEyQjtvQkFBM0I7c0JBQUE7QUFBQTtTQUZKLEFBQ0UsQUFDRSxBQUtQO0FBYkQsV0FhSyxBQUNEO21DQUNHLGNBQUQsdUJBQUEsQUFBUSxRQUFLLFdBQWI7b0JBQUE7c0JBQUE7QUFBQTtPQUFBLEVBREYsQUFDRSxBQUlGO2lDQUNFLEFBQUMscUNBQUksV0FBTDtvQkFBQTtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRSxBQUFDLHlDQUFRLFVBQVQsQUFBbUIsR0FBRyxNQUF0QixBQUEyQjtvQkFBM0I7c0JBQUE7QUFBQTtTQUZKLEFBQ0UsQUFDRSxBQUtQO0FBRUQ7OzJCQUNFLGNBQUEsU0FBSyxTQUFMLEFBQVc7a0JBQVg7b0JBQUEsQUFDRTtBQURGO0tBQUEsa0JBQ0UsQUFBQyx3Q0FBTyxPQUFSO2tCQUFBO29CQUFBLEFBQ0U7QUFERjt1QkFDRyxjQUFELHVCQUFBLEFBQVE7O2tCQUFSO29CQUFBLEFBQ0U7QUFERjtBQUFBLHVCQUNHLGNBQUQsdUJBQUEsQUFBUTs7a0JBQVI7b0JBQUEsQUFDRTtBQURGO0FBQUEsdUJBQ0UsY0FBQSxPQUFHLE1BQUgsQUFBUTtrQkFBUjtvQkFBQTtBQUFBO09BSE4sQUFDRSxBQUNFLEFBQ0UsQUFHSixpQ0FBQSxBQUFDOztrQkFBRDtvQkFBQSxBQUNFO0FBREY7QUFBQSx1QkFDRSxBQUFDLHlDQUFRLFVBQVQsQUFBbUIsR0FBRyxNQUF0QixBQUEyQjtrQkFBM0I7b0JBQUE7QUFBQTtPQVBKLEFBTUUsQUFDRSxBQUVGLDBCQUFBLEFBQUM7O2tCQUFEO29CQUFBLEFBQ0U7QUFERjtBQUFBLHVCQUNFLEFBQUMseUNBQVEsVUFBVCxBQUFtQixHQUFHLE1BQXRCLEFBQTJCO2tCQUEzQjtvQkFBQTtBQUFBO09BVkosQUFTRSxBQUNFLEFBRUQsV0FaSCxBQWFHLFVBYkgsQUFjRSw0QkFBQSxBQUFDLHFDQUFJLFdBQUw7a0JBQUE7b0JBQUEsQUFDRTtBQURGO3VCQUNFLEFBQUMseUNBQVEsVUFBVCxBQUFtQixHQUFHLE1BQXRCLEFBQTJCO2tCQUEzQjtvQkFBQTtBQUFBO09BZkosQUFjRSxBQUNFLEFBRUYsNENBQUEsQUFBQzs7a0JBQUQ7b0JBbkJOLEFBQ0UsQUFDRSxBQWlCRSxBQUdSO0FBSFE7QUFBQTtBQTVEZCxBQUFlLEFBQWlCLEFBa0VoQztBQWxFZ0MsQ0FBakI7O2tCQWtFZixBQUFlIiwiZmlsZSI6IkhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9wY2hpbmVuL2dpdC9tYzQzNy1lY29tbWVyY2UifQ==