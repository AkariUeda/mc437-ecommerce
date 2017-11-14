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
    return _react2.default.createElement(_reactBootstrap.Form, { inline: true, __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      }
    }, _react2.default.createElement(_reactBootstrap.FormGroup, {
      controlId: 'formBasicText',
      validationState: this.getValidationState(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      }
    }, _react2.default.createElement(_reactBootstrap.FormControl, {
      type: 'text',
      value: this.state.value,
      placeholder: 'Procurar Produtos',
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      }
    }), ' ', _react2.default.createElement(_reactBootstrap.Button, { type: 'submit', __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      }
    }, 'Procurar'), _react2.default.createElement(_reactBootstrap.FormControl.Feedback, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      }
    })));
  }
});

var Header = function Header() {
  return _react2.default.createElement(_Theme2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _index2.default }, __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }), _react2.default.createElement(_reactBootstrap.Navbar, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }, _react2.default.createElement(_reactBootstrap.Navbar.Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }, _react2.default.createElement(_reactBootstrap.Navbar.Brand, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  }, _react2.default.createElement('a', { href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    }
  }, 'E-Commerce dos Migu\xE9'))), _react2.default.createElement(_reactBootstrap.Nav, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }, _react2.default.createElement(_reactBootstrap.NavItem, { eventKey: 1, href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }, 'Home'), _react2.default.createElement(_reactBootstrap.NavItem, { eventKey: 2, href: '/about', __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    }
  }, 'About'), _react2.default.createElement(_reactBootstrap.NavDropdown, { eventKey: 3, title: 'Dropdown', id: 'basic-nav-dropdown', __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    }
  }, _react2.default.createElement(_reactBootstrap.MenuItem, { eventKey: 3.1, __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    }
  }, 'Action'), _react2.default.createElement(_reactBootstrap.MenuItem, { eventKey: 3.2, __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    }
  }, 'Another action'), _react2.default.createElement(_reactBootstrap.MenuItem, { eventKey: 3.3, __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    }
  }, 'Something else here'), _react2.default.createElement(_reactBootstrap.MenuItem, { divider: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    }
  }), _react2.default.createElement(_reactBootstrap.MenuItem, { eventKey: 3.4, __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    }
  }, 'Separated link')))), _react2.default.createElement(FormExample, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    }
  }), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    }
  }));
};

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL0hlYWRlci5qcyJdLCJuYW1lcyI6WyJMaW5rIiwiVGhlbWUiLCJjcmVhdGVSZWFjdENsYXNzIiwiaW5kZXhTdHlsZSIsIkJ1dHRvbiIsIkNvbnRyb2xMYWJlbCIsIkZvcm1Db250cm9sIiwiRm9ybUdyb3VwIiwiSGVscEJsb2NrIiwiTWVudUl0ZW0iLCJOYXYiLCJOYXZEcm9wZG93biIsIk5hdkl0ZW0iLCJOYXZiYXIiLCJGb3JtIiwibGlua1N0eWxlIiwibWFyZ2luUmlnaHQiLCJGb3JtRXhhbXBsZSIsImdldEluaXRpYWxTdGF0ZSIsInZhbHVlIiwiZ2V0VmFsaWRhdGlvblN0YXRlIiwibGVuZ3RoIiwic3RhdGUiLCJoYW5kbGVDaGFuZ2UiLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJyZW5kZXIiLCJIZWFkZXIiLCJfX2h0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU87Ozs7QUFDUCxBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQVMsQUFDVCxBQUFTLEFBQ1QsQUFBUyxBQUNULEFBQVMsQUFDVCxBQUFTLEFBQ1QsQUFBUyxBQUNULEFBQVMsQUFDVCxBQUFTLEFBQ1QsQUFBUyxBQUNULEFBQVMsQUFDVCxBQUFTOzs7Ozs7O0FBR1QsSUFBTTtlQUFOLEFBQWtCLEFBQ0g7QUFERyxBQUNoQjs7QUFHRixJQUFNO2VBQ0o7QUFEbUMsOENBQ2pCLEFBQ2hCOzthQUFBLEFBQU8sQUFDRSxBQUVWO0FBSFEsQUFDTDtBQUgrQixBQU9uQztBQVBtQyxvREFPZCxBQUNuQjtRQUFNLFNBQVMsS0FBQSxBQUFLLE1BQUwsQUFBVyxNQUExQixBQUFnQyxBQUNoQztRQUFJLFNBQUosQUFBYSxHQUFHLE9BQWhCLEFBQWdCLEFBQU8sZUFDbEIsSUFBSSxTQUFKLEFBQWEsR0FBRyxPQUFoQixBQUFnQixBQUFPLGVBQ3ZCLElBQUksU0FBSixBQUFhLEdBQUcsT0FBQSxBQUFPLEFBQzVCO1dBQUEsQUFBTyxBQUNSO0FBYmtDLEFBZW5DO0FBZm1DLHNDQUFBLEFBZXRCLEdBQUcsQUFDZDtTQUFBLEFBQUssU0FBUyxFQUFFLE9BQU8sRUFBQSxBQUFFLE9BQXpCLEFBQWMsQUFBa0IsQUFDakM7QUFqQmtDLEFBbUJuQztBQW5CbUMsNEJBbUIxQixBQUNQOzJCQUNFLEFBQUMsc0NBQUssUUFBTjtrQkFBQTtvQkFBQSxBQUNFO0FBREY7S0FBQSxrQkFDRSxBQUFDO2lCQUFELEFBQ1ksQUFDVjt1QkFBaUIsS0FGbkIsQUFFbUIsQUFBSzs7a0JBRnhCO29CQUFBLEFBSUU7QUFKRjtBQUNFLHVCQUdBLEFBQUM7WUFBRCxBQUNPLEFBQ0w7YUFBTyxLQUFBLEFBQUssTUFGZCxBQUVvQixBQUNsQjttQkFIRixBQUdjLEFBQ1o7Z0JBQVUsS0FKWixBQUlpQjs7a0JBSmpCO29CQUpGLEFBSUUsQUFNQztBQU5EO0FBQ0UsUUFMSixBQVdFLHFCQUFBLEFBQUMsd0NBQU8sTUFBUixBQUFhO2tCQUFiO29CQUFBO0FBQUE7T0FYRixBQVdFLEFBQ0EsMkNBQUEsQUFBQyw0QkFBRCxBQUFhOztrQkFBYjtvQkFkTixBQUNFLEFBQ0UsQUFZRSxBQUlQO0FBSk87QUFBQTtBQWxDVixBQUFvQixBQUFpQjtBQUFBLENBQWpCOztBQXlDcEIsSUFBTSxTQUFTLFNBQVQsQUFBUyxTQUFBO3lCQUNYLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0E7QUFEQTtBQUFBLEdBQUEsMkNBQ08seUJBQXlCLEVBQWhDLEFBQWdDLEFBQUUsQUFBUTtnQkFBMUM7a0JBREEsQUFDQSxBQUNKO0FBREk7c0JBQ0osQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDSTtBQURKO0FBQUEscUJBQ0ssY0FBRCx1QkFBQSxBQUFROztnQkFBUjtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRyxjQUFELHVCQUFBLEFBQVE7O2dCQUFSO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLGNBQUEsT0FBRyxNQUFILEFBQVE7Z0JBQVI7a0JBQUE7QUFBQTtLQUhSLEFBQ0ksQUFDRSxBQUNFLEFBR0osOENBQUEsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsQUFBQyx5Q0FBUSxVQUFULEFBQW1CLEdBQUcsTUFBdEIsQUFBMkI7Z0JBQTNCO2tCQUFBO0FBQUE7S0FERixBQUNFLEFBQ0EseUJBQUEsQUFBQyx5Q0FBUSxVQUFULEFBQW1CLEdBQUcsTUFBdEIsQUFBMkI7Z0JBQTNCO2tCQUFBO0FBQUE7S0FGRixBQUVFLEFBQ0EsMEJBQUEsQUFBQyw2Q0FBWSxVQUFiLEFBQXVCLEdBQUcsT0FBMUIsQUFBZ0MsWUFBVyxJQUEzQyxBQUE4QztnQkFBOUM7a0JBQUEsQUFDRTtBQURGO3FCQUNFLEFBQUMsMENBQVMsVUFBVixBQUFvQjtnQkFBcEI7a0JBQUE7QUFBQTtLQURGLEFBQ0UsQUFDQSwyQkFBQSxBQUFDLDBDQUFTLFVBQVYsQUFBb0I7Z0JBQXBCO2tCQUFBO0FBQUE7S0FGRixBQUVFLEFBQ0EsbUNBQUEsQUFBQywwQ0FBUyxVQUFWLEFBQW9CO2dCQUFwQjtrQkFBQTtBQUFBO0tBSEYsQUFHRSxBQUNBLHdDQUFBLEFBQUMsMENBQVMsU0FBVjtnQkFBQTtrQkFKRixBQUlFLEFBQ0E7QUFEQTtzQkFDQSxBQUFDLDBDQUFTLFVBQVYsQUFBb0I7Z0JBQXBCO2tCQUFBO0FBQUE7S0FoQkosQUFFSixBQU1JLEFBR0UsQUFLRSxBQUlOLG9EQUFBLEFBQUM7O2dCQUFEO2tCQXBCRSxBQW9CRixBQUNBO0FBREE7QUFBQTs7Z0JBQ0E7a0JBdEJhLEFBQ1gsQUFxQkY7QUFBQTtBQUFBO0FBdEJGLEFBMEJBOztrQkFBQSxBQUFlIiwiZmlsZSI6IkhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9wY2hpbmVuL2dpdC9tYzQzNy1lY29tbWVyY2UifQ==