'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _Theme = require('../components/Theme');

var _Theme2 = _interopRequireDefault(_Theme);

var _createReactClass = require('create-react-class');

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _index = require('../styles/index.scss');

var _index2 = _interopRequireDefault(_index);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Akari\\Desktop\\mc437-ecommerce\\app\\components\\Header.js';


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
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }, _react2.default.createElement(_reactBootstrap.Navbar, { fluid: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }, _react2.default.createElement(_reactBootstrap.Navbar.Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }, _react2.default.createElement(_reactBootstrap.Navbar.Brand, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }, _react2.default.createElement('a', { href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  }, 'E-Commerce'))), _react2.default.createElement(_reactBootstrap.Nav, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    }
  }, _react2.default.createElement(_reactBootstrap.NavItem, { eventKey: 1, href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }, 'Home'), _react2.default.createElement(_reactBootstrap.NavItem, { eventKey: 2, href: '/about', __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }, 'About'))), _react2.default.createElement(FormExample, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    }
  }));
};

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcFxcY29tcG9uZW50c1xcSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJUaGVtZSIsImNyZWF0ZVJlYWN0Q2xhc3MiLCJpbmRleFN0eWxlIiwiQnV0dG9uIiwiQ29udHJvbExhYmVsIiwiRm9ybUNvbnRyb2wiLCJGb3JtR3JvdXAiLCJIZWxwQmxvY2siLCJNZW51SXRlbSIsIk5hdiIsIk5hdkRyb3Bkb3duIiwiTmF2SXRlbSIsIk5hdmJhciIsIkZvcm0iLCJsaW5rU3R5bGUiLCJtYXJnaW5SaWdodCIsIkZvcm1FeGFtcGxlIiwiZ2V0SW5pdGlhbFN0YXRlIiwidmFsdWUiLCJnZXRWYWxpZGF0aW9uU3RhdGUiLCJsZW5ndGgiLCJzdGF0ZSIsImhhbmRsZUNoYW5nZSIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInJlbmRlciIsIkhlYWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTzs7OztBQUNQLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBUyxBQUNULEFBQVMsQUFDVCxBQUFTLEFBQ1QsQUFBUyxBQUNULEFBQVMsQUFDVCxBQUFTLEFBQ1QsQUFBUyxBQUNULEFBQVMsQUFDVCxBQUFTLEFBQ1QsQUFBUyxBQUNULEFBQVM7Ozs7Ozs7QUFHVCxJQUFNO2VBQU4sQUFBa0IsQUFDSDtBQURHLEFBQ2hCOztBQUdGLElBQU07ZUFDSjtBQURtQyw4Q0FDakIsQUFDaEI7O2FBQUEsQUFBTyxBQUNFLEFBRVY7QUFIUSxBQUNMO0FBSCtCLEFBT25DO0FBUG1DLG9EQU9kLEFBQ25CO1FBQU0sU0FBUyxLQUFBLEFBQUssTUFBTCxBQUFXLE1BQTFCLEFBQWdDLEFBQ2hDO1FBQUksU0FBSixBQUFhLEdBQUcsT0FBaEIsQUFBZ0IsQUFBTyxlQUNsQixJQUFJLFNBQUosQUFBYSxHQUFHLE9BQWhCLEFBQWdCLEFBQU8sZUFDdkIsSUFBSSxTQUFKLEFBQWEsR0FBRyxPQUFBLEFBQU8sQUFDNUI7V0FBQSxBQUFPLEFBQ1I7QUFia0MsQUFlbkM7QUFmbUMsc0NBQUEsQUFldEIsR0FBRyxBQUNkO1NBQUEsQUFBSyxTQUFTLEVBQUUsT0FBTyxFQUFBLEFBQUUsT0FBekIsQUFBYyxBQUFrQixBQUNqQztBQWpCa0MsQUFtQm5DO0FBbkJtQyw0QkFtQjFCLEFBQ1A7MkJBQ0UsQUFBQyxzQ0FBSyxRQUFOO2tCQUFBO29CQUFBLEFBQ0U7QUFERjtLQUFBLGtCQUNFLEFBQUM7aUJBQUQsQUFDWSxBQUNWO3VCQUFpQixLQUZuQixBQUVtQixBQUFLOztrQkFGeEI7b0JBQUEsQUFJRTtBQUpGO0FBQ0UsdUJBR0EsQUFBQztZQUFELEFBQ08sQUFDTDthQUFPLEtBQUEsQUFBSyxNQUZkLEFBRW9CLEFBQ2xCO21CQUhGLEFBR2MsQUFDWjtnQkFBVSxLQUpaLEFBSWlCOztrQkFKakI7b0JBSkYsQUFJRSxBQU1DO0FBTkQ7QUFDRSxRQUxKLEFBV0UscUJBQUEsQUFBQyx3Q0FBTyxNQUFSLEFBQWE7a0JBQWI7b0JBQUE7QUFBQTtPQVhGLEFBV0UsQUFDQSwyQ0FBQSxBQUFDLDRCQUFELEFBQWE7O2tCQUFiO29CQWROLEFBQ0UsQUFDRSxBQVlFLEFBSVA7QUFKTztBQUFBO0FBbENWLEFBQW9CLEFBQWlCO0FBQUEsQ0FBakI7O0FBeUNwQixJQUFNLFNBQVMsU0FBVCxBQUFTLFNBQUE7eUJBQ2IsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxBQUFDLHdDQUFPLE9BQVI7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO3FCQUNHLGNBQUQsdUJBQUEsQUFBUTs7Z0JBQVI7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0csY0FBRCx1QkFBQSxBQUFROztnQkFBUjtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxjQUFBLE9BQUcsTUFBSCxBQUFRO2dCQUFSO2tCQUFBO0FBQUE7S0FITixBQUNFLEFBQ0UsQUFDRSxBQUdKLGlDQUFBLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLEFBQUMseUNBQVEsVUFBVCxBQUFtQixHQUFHLE1BQXRCLEFBQTJCO2dCQUEzQjtrQkFBQTtBQUFBO0tBREYsQUFDRSxBQUNBLHlCQUFBLEFBQUMseUNBQVEsVUFBVCxBQUFtQixHQUFHLE1BQXRCLEFBQTJCO2dCQUEzQjtrQkFBQTtBQUFBO0tBVE4sQUFDRSxBQU1FLEFBRUUsQUFHSiwwQ0FBQSxBQUFDOztnQkFBRDtrQkFiVyxBQUNiLEFBWUU7QUFBQTtBQUFBO0FBYkosQUFpQkE7O2tCQUFBLEFBQWUiLCJmaWxlIjoiSGVhZGVyLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0FrYXJpL0Rlc2t0b3AvbWM0MzctZWNvbW1lcmNlIn0=