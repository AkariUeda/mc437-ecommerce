webpackHotUpdate(5,{

/***/ 475:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(431);

var _link2 = _interopRequireDefault(_link);

var _Theme = __webpack_require__(436);

var _Theme2 = _interopRequireDefault(_Theme);

var _createReactClass = __webpack_require__(421);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _index = __webpack_require__(437);

var _index2 = _interopRequireDefault(_index);

var _reactBootstrap = __webpack_require__(422);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/pchinen/git/mc437-ecommerce/app/components/Header.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/pchinen/git/mc437-ecommerce/app/components/Header.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS41NGM0ZDU3ZWYzZDcxMjMyNzRkMS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanM/NmE3MjNhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgVGhlbWUgZnJvbSAnLi4vY29tcG9uZW50cy9UaGVtZSc7XG5pbXBvcnQgY3JlYXRlUmVhY3RDbGFzcyBmcm9tICdjcmVhdGUtcmVhY3QtY2xhc3MnO1xuaW1wb3J0IGluZGV4U3R5bGUgZnJvbSAnLi4vc3R5bGVzL2luZGV4LnNjc3MnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuaW1wb3J0IHsgQ29udHJvbExhYmVsIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5pbXBvcnQgeyBIZWxwQmxvY2sgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5pbXBvcnQgeyBNZW51SXRlbSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcbmltcG9ydCB7IE5hdiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcbmltcG9ydCB7IE5hdkRyb3Bkb3duIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuaW1wb3J0IHsgTmF2SXRlbSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcbmltcG9ydCB7IE5hdmJhciB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcbmltcG9ydCB7IEZvcm0gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5cbmNvbnN0IGxpbmtTdHlsZSA9IHtcbiAgbWFyZ2luUmlnaHQ6IDE1XG59XG5cbmNvbnN0IEZvcm1Qcm9jdXJhciA9IGNyZWF0ZVJlYWN0Q2xhc3Moe1xuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiAnJyxcbiAgICB9O1xuICB9LFxuXG4gIGdldFZhbGlkYXRpb25TdGF0ZSgpIHtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLnN0YXRlLnZhbHVlLmxlbmd0aDtcbiAgICBpZiAobGVuZ3RoID4gMykgcmV0dXJuICdzdWNjZXNzJztcbiAgICBlbHNlIGlmIChsZW5ndGggPiAyKSByZXR1cm4gJ3dhcm5pbmcnO1xuICAgIGVsc2UgaWYgKGxlbmd0aCA+IDApIHJldHVybiAnZXJyb3InO1xuICAgIHJldHVybiBudWxsO1xuICB9LFxuXG4gIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxOYXZiYXIuRm9ybT5cbiAgICAgICAgPEZvcm1Hcm91cFxuICAgICAgICAgIGNvbnRyb2xJZD1cImZvcm1CYXNpY1RleHRcIlxuICAgICAgICAgIHZhbGlkYXRpb25TdGF0ZT17dGhpcy5nZXRWYWxpZGF0aW9uU3RhdGUoKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlByb2N1cmFyIFByb2R1dG9zXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHsnICd9XG4gICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPlByb2N1cmFyPC9CdXR0b24+XG4gICAgICAgIDwvRm9ybUdyb3VwPlxuXG5cbiAgICAgIDwvTmF2YmFyLkZvcm0+XG4gICAgKTtcbiAgfSxcbn0pO1xuXG5jb25zdCBIZWFkZXIgPSBjcmVhdGVSZWFjdENsYXNzKHtcblxuICAgIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC8vIGxvZ2dlZDogdGhpcy5wcm9wcy5zdG9yZS51c2VyIHx8IGZhbHNlO1xuICAgICAgICAgICAgbG9nZ2VkOiB0cnVlLFxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHZhciBOYXZVc3VhcmlvXG4gICAgICAgIHZhciBOYXZMb2dpblxuXG4gICAgICAgIGlmKHRoaXMuc3RhdGUubG9nZ2VkID09PSB0cnVlKXtcbiAgICAgICAgICAgIE5hdlVzdWFyaW8gPSAoXG4gICAgICAgICAgICAgIDxOYXZiYXIuVGV4dCBwdWxsUmlnaHQ+XG4gICAgICAgICAgICAgICAgU2lnbmVkIGluIGFzOiA8TmF2YmFyLkxpbmsgaHJlZj1cIiNcIj5NYXJrIE90dG88L05hdmJhci5MaW5rPlxuICAgICAgICAgICAgICA8L05hdmJhci5UZXh0PlxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgTmF2TG9naW4gPSAoXG4gICAgICAgICAgICAgIDxOYXYgcHVsbFJpZ2h0PlxuICAgICAgICAgICAgICAgIDxOYXZJdGVtIGV2ZW50S2V5PXsyfSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgTG9nb3V0XG4gICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgICAgICA8L05hdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBOYXZVc3VhcmlvID0gKFxuICAgICAgICAgICAgICA8TmF2YmFyLlRleHQgcHVsbFJpZ2h0PlxuICAgICAgICAgICAgICAgIFNpZ25lZCBpbiBhczogVmlzaXRhbnRlXG4gICAgICAgICAgICAgIDwvTmF2YmFyLlRleHQ+XG4gICAgICAgICAgICApXG4gICAgICAgICAgICBOYXZMb2dpbiA9IChcbiAgICAgICAgICAgICAgPE5hdiBwdWxsUmlnaHQ+XG4gICAgICAgICAgICAgICAgPE5hdkl0ZW0gZXZlbnRLZXk9ezJ9IGhyZWY9XCIvbG9naW5cIj5cbiAgICAgICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgICAgICA8L05hdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUubG9nZ2VkKTtcbiAgICAgICAgY29uc29sZS5sb2coTmF2VXN1YXJpbyk7XG4gICAgICAgIGNvbnNvbGUubG9nKE5hdkxvZ2luKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgICAgICAgPE5hdmJhciBmbHVpZD5cbiAgICAgICAgICAgICAgPE5hdmJhci5IZWFkZXI+XG4gICAgICAgICAgICAgICAgPE5hdmJhci5CcmFuZD5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+RS1Db21tZXJjZTwvYT5cbiAgICAgICAgICAgICAgICA8L05hdmJhci5CcmFuZD5cbiAgICAgICAgICAgICAgPC9OYXZiYXIuSGVhZGVyPlxuICAgICAgICAgICAgICA8TmF2PlxuICAgICAgICAgICAgICAgIDxOYXZJdGVtIGV2ZW50S2V5PXsxfSBocmVmPVwiL1wiPkhvbWU8L05hdkl0ZW0+XG4gICAgICAgICAgICAgIDwvTmF2PlxuICAgICAgICAgICAgICA8TmF2PlxuICAgICAgICAgICAgICAgIDxOYXZJdGVtIGV2ZW50S2V5PXsyfSBocmVmPVwiL2Fib3V0XCI+QWJvdXQ8L05hdkl0ZW0+XG4gICAgICAgICAgICAgIDwvTmF2PlxuICAgICAgICAgICAgICB7TmF2TG9naW59XG4gICAgICAgICAgICAgIHtOYXZVc3VhcmlvfVxuICAgICAgICAgICAgICA8TmF2IHB1bGxSaWdodD5cbiAgICAgICAgICAgICAgICA8TmF2SXRlbSBldmVudEtleT17M30gaHJlZj1cIiNcIj5DYXJyaW5obzwvTmF2SXRlbT5cbiAgICAgICAgICAgICAgPC9OYXY+XG4gICAgICAgICAgICAgIDxGb3JtUHJvY3VyYXIgLz5cbiAgICAgICAgICAgIDwvTmF2YmFyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICl9XG59KVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBVUE7QUFDQTs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7O0FBS0E7QUFGQTtBQUlBO0FBUEE7QUFRQTtBQUNBO0FBSUE7QUFFQTtBQWZBO0FBZ0JBO0FBR0E7QUFuQkE7QUFxQkE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUFBOztBQUZBO0FBSUE7QUFKQTtBQUNBO0FBS0E7QUFBQTtBQUVBO0FBQUE7O0FBSkE7QUFNQTtBQU5BO0FBQ0E7QUFNQTtBQUFBO0FBQUE7QUFNQTtBQXZDQTtBQUFBO0FBQ0E7QUF5Q0E7QUFFQTtBQUZBOztBQUtBO0FBRUE7QUFIQTtBQUtBO0FBVEE7QUFXQTtBQUVBO0FBQ0E7QUFEQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFLQTtBQWJBO0FBZUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFLQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7O0FBQUE7QUFHQTtBQUhBO0FBQUE7QUFNQTtBQXRFQTtBQUNBO0FBcUVBOzs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=