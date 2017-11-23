'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _createReactClass = require('create-react-class');

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _MyLayout = require('../components/MyLayout.js');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/pchinen/git/mc437-ecommerce/app/pages/carrinho.js?entry';


var Cliente = (0, _createReactClass2.default)({
  displayName: 'Cliente',
  getInitialState: function getInitialState() {
    return {
      usuario: "Usuario",
      nome: "Nome",
      endereco: "Endereco"
    };
  },
  render: function render() {
    return _react2.default.createElement(_reactBootstrap.Col, { md: 10, __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    }, _react2.default.createElement('h1', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      }
    }, 'Informa\xE7\xF5es Cliente'), _react2.default.createElement(_reactBootstrap.Table, { bordered: true, striped: true, responsive: true, __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      }
    }, _react2.default.createElement('tbody', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      }
    }, _react2.default.createElement('tr', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      }
    }, _react2.default.createElement('th', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      }
    }, 'Cliente:'), _react2.default.createElement('td', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      }
    }, this.state.usuario)), _react2.default.createElement('tr', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      }
    }, _react2.default.createElement('th', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      }
    }, 'Nome:'), _react2.default.createElement('td', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      }
    }, this.state.nome)), _react2.default.createElement('tr', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      }
    }, _react2.default.createElement('th', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      }
    }, 'Endere\xE7o:'), _react2.default.createElement('td', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      }
    }, this.state.endereco)))));
  }
});

var Produtos = (0, _createReactClass2.default)({
  displayName: 'Produtos',
  getInitialState: function getInitialState() {
    return {
      nome: "Produto",
      quantidade: 3,
      preco: 10
    };
  },
  removerCarrinho: function removerCarrinho() {
    alert("AAAA");
    console.log("Remover Carrinho");
  },
  render: function render() {
    return _react2.default.createElement(_reactBootstrap.Col, { md: 10, __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      }
    }, _react2.default.createElement('h1', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      }
    }, 'Produtos no Carrinho'), _react2.default.createElement(_reactBootstrap.Table, { bordered: true, striped: true, responsive: true, __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      }
    }, _react2.default.createElement('thead', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      }
    }, _react2.default.createElement('tr', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      }
    }, _react2.default.createElement('th', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      }
    }, 'Produto'), _react2.default.createElement('th', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      }
    }, 'Quantidade'), _react2.default.createElement('th', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      }
    }, 'Pre\xE7o'), _react2.default.createElement('th', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      }
    }, 'A\xE7\xF5es'))), _react2.default.createElement('tbody', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      }
    }, _react2.default.createElement('tr', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      }
    }, _react2.default.createElement('th', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      }
    }, this.state.nome), _react2.default.createElement('td', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      }
    }, this.state.quantidade), _react2.default.createElement('td', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      }
    }, this.state.preco), _react2.default.createElement('td', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      }
    }, _react2.default.createElement(_reactBootstrap.Button, { bsSize: 'xsmall', onClick: this.removerCarrinho, __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      }
    }, 'Remover do Carrinho'))))));
  }
});

var Carrinho = (0, _createReactClass2.default)({
  displayName: 'Carrinho',
  getInitialState: function getInitialState() {
    return {
      // logged: this.props.store.user || false;
      logged: false
    };
  },
  frete: function frete() {
    alert("BBBB");
  },
  render: function render() {

    if (this.state.logged == false) {
      console.log("Nao tem carrinho, mandar para a pagina de login");
    }

    return _react2.default.createElement('div', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      }
    }, _react2.default.createElement(_MyLayout2.default, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      }
    }, _react2.default.createElement(_reactBootstrap.Grid, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      }
    }, _react2.default.createElement(_reactBootstrap.Row, { className: 'show-grid', __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      }
    }, _react2.default.createElement(Cliente, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      }
    }), _react2.default.createElement(Produtos, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      }
    }))), _react2.default.createElement(_reactBootstrap.Form, { horizontal: true, __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      }
    }, _react2.default.createElement(_reactBootstrap.FormGroup, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      }
    }, _react2.default.createElement(_reactBootstrap.Col, { componentClass: _reactBootstrap.ControlLabel, sm: 2, __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      }
    }, 'CPF'), _react2.default.createElement(_reactBootstrap.Col, { sm: 8, __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      }
    }, _react2.default.createElement(_reactBootstrap.FormControl, { type: 'cpf', placeholder: 'this.prop.store.user.cpf', __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      }
    }))), _react2.default.createElement(_reactBootstrap.FormGroup, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      }
    }, _react2.default.createElement(_reactBootstrap.Col, { componentClass: _reactBootstrap.ControlLabel, sm: 2, __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      }
    }, 'Endere\xE7o'), _react2.default.createElement(_reactBootstrap.Col, { sm: 8, __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      }
    }, _react2.default.createElement(_reactBootstrap.FormControl, { type: 'endereco', placeholder: 'this.prop.store.user.endereco', __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      }
    }))), _react2.default.createElement(_reactBootstrap.FormGroup, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      }
    }, _react2.default.createElement(_reactBootstrap.Col, { componentClass: _reactBootstrap.Button, sm: 2, onClick: this.frete, __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      }
    }, 'Re-Calcular Frete'), _react2.default.createElement(_reactBootstrap.Col, { componentClass: _reactBootstrap.ControlLabel, sm: 2, __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      }
    }, 'Pre\xE7o final'), _react2.default.createElement(_reactBootstrap.Col, { componentClass: _reactBootstrap.ControlLabel, sm: 0, __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      }
    }, 'R$ this.prop.state.preco')), _react2.default.createElement(_reactBootstrap.FormGroup, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      }
    }, _react2.default.createElement(_reactBootstrap.Col, { smOffset: 2, sm: 10, __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      }
    }, _react2.default.createElement(_reactBootstrap.Button, { type: 'submit', __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      }
    }, 'Finalizar Compra'))))));
  }
});

exports.default = Carrinho;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWdlcy9jYXJyaW5oby5qcyJdLCJuYW1lcyI6WyJjcmVhdGVSZWFjdENsYXNzIiwiTGF5b3V0IiwiR3JpZCIsIlJvdyIsIkNvbCIsIkZvcm0iLCJDb250cm9sTGFiZWwiLCJGb3JtR3JvdXAiLCJGb3JtQ29udHJvbCIsIlRhYmxlIiwiQnV0dG9uIiwiTGFiZWwiLCJDbGllbnRlIiwiZ2V0SW5pdGlhbFN0YXRlIiwidXN1YXJpbyIsIm5vbWUiLCJlbmRlcmVjbyIsInJlbmRlciIsInN0YXRlIiwiUHJvZHV0b3MiLCJxdWFudGlkYWRlIiwicHJlY28iLCJyZW1vdmVyQ2FycmluaG8iLCJhbGVydCIsImNvbnNvbGUiLCJsb2ciLCJDYXJyaW5obyIsImxvZ2dlZCIsImZyZXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQU0sQUFBSyxBQUNwQixBQUFTLEFBQU0sQUFBYyxBQUFXLEFBQ3hDLEFBQVMsQUFDVCxBQUFTLEFBQ1QsQUFBUzs7Ozs7OztBQUVULElBQU07ZUFDRjtBQUQ2Qiw4Q0FDWCxBQUNkOztlQUFPLEFBQ00sQUFDVDtZQUZHLEFBRUcsQUFDTjtnQkFISixBQUFPLEFBR08sQUFFakI7QUFMVSxBQUNIO0FBSHFCLEFBUzdCO0FBVDZCLDRCQVNwQixBQUNMOzJCQUNFLEFBQUMscUNBQUksSUFBTCxBQUFTO2tCQUFUO29CQUFBLEFBQ0U7QUFERjtLQUFBLGtCQUNFLGNBQUE7O2tCQUFBO29CQUFBO0FBQUE7QUFBQSxPQURGLEFBQ0UsQUFDQSw4Q0FBQSxBQUFDLHVDQUFNLFVBQVAsTUFBZ0IsU0FBaEIsTUFBd0IsWUFBeEI7a0JBQUE7b0JBQUEsQUFJRTtBQUpGO3VCQUlFLGNBQUE7O2tCQUFBO29CQUFBLEFBQ0U7QUFERjtBQUFBLHVCQUNFLGNBQUE7O2tCQUFBO29CQUFBLEFBQ0U7QUFERjtBQUFBLHVCQUNFLGNBQUE7O2tCQUFBO29CQUFBO0FBQUE7QUFBQSxPQURGLEFBQ0UsQUFHQSw2QkFBQSxjQUFBOztrQkFBQTtvQkFBQSxBQUNHO0FBREg7QUFBQSxZQUNHLEFBQUssTUFOWixBQUNFLEFBSUUsQUFDYyxBQUdoQiwyQkFBQSxjQUFBOztrQkFBQTtvQkFBQSxBQUNFO0FBREY7QUFBQSx1QkFDRSxjQUFBOztrQkFBQTtvQkFBQTtBQUFBO0FBQUEsT0FERixBQUNFLEFBR0EsMEJBQUEsY0FBQTs7a0JBQUE7b0JBQUEsQUFDRztBQURIO0FBQUEsWUFDRyxBQUFLLE1BZFosQUFTRSxBQUlFLEFBQ2MsQUFHaEIsd0JBQUEsY0FBQTs7a0JBQUE7b0JBQUEsQUFDRTtBQURGO0FBQUEsdUJBQ0UsY0FBQTs7a0JBQUE7b0JBQUE7QUFBQTtBQUFBLE9BREYsQUFDRSxBQUdBLGlDQUFBLGNBQUE7O2tCQUFBO29CQUFBLEFBQ0c7QUFESDtBQUFBLFlBQ0csQUFBSyxNQTdCbEIsQUFDRSxBQUVFLEFBSUUsQUFpQkUsQUFJRSxBQUNjLEFBTzNCO0FBOUNMLEFBQWdCLEFBQWlCO0FBQUEsQ0FBakI7O0FBaURoQixJQUFNO2VBQ0Y7QUFEOEIsOENBQ1osQUFDZDs7WUFBTyxBQUNHLEFBQ047a0JBRkcsQUFFUyxBQUNaO2FBSEosQUFBTyxBQUdJLEFBRWQ7QUFMVSxBQUNIO0FBSHNCLEFBUzlCO0FBVDhCLDhDQVNiLEFBQ2I7VUFBQSxBQUFNLEFBQ047WUFBQSxBQUFRLElBQVIsQUFBWSxBQUNmO0FBWjZCLEFBZTlCO0FBZjhCLDRCQWVyQixBQUNMOzJCQUNFLEFBQUMscUNBQUksSUFBTCxBQUFTO2tCQUFUO29CQUFBLEFBQ0U7QUFERjtLQUFBLGtCQUNFLGNBQUE7O2tCQUFBO29CQUFBO0FBQUE7QUFBQSxPQURGLEFBQ0UsQUFDRSx5Q0FBQSxBQUFDLHVDQUFNLFVBQVAsTUFBZ0IsU0FBaEIsTUFBd0IsWUFBeEI7a0JBQUE7b0JBQUEsQUFDQTtBQURBO3VCQUNBLGNBQUE7O2tCQUFBO29CQUFBLEFBQ0U7QUFERjtBQUFBLHVCQUNFLGNBQUE7O2tCQUFBO29CQUFBLEFBQ0U7QUFERjtBQUFBLHVCQUNFLGNBQUE7O2tCQUFBO29CQUFBO0FBQUE7QUFBQSxPQURGLEFBQ0UsQUFHQSw0QkFBQSxjQUFBOztrQkFBQTtvQkFBQTtBQUFBO0FBQUEsT0FKRixBQUlFLEFBR0EsK0JBQUEsY0FBQTs7a0JBQUE7b0JBQUE7QUFBQTtBQUFBLE9BUEYsQUFPRSxBQUdBLDZCQUFBLGNBQUE7O2tCQUFBO29CQUFBO0FBQUE7QUFBQSxPQVpKLEFBQ0EsQUFDRSxBQVVFLEFBS0osa0NBQUEsY0FBQTs7a0JBQUE7b0JBQUEsQUFFRTtBQUZGO0FBQUEsdUJBRUUsY0FBQTs7a0JBQUE7b0JBQUEsQUFDRTtBQURGO0FBQUEsdUJBQ0UsY0FBQTs7a0JBQUE7b0JBQUEsQUFDRztBQURIO0FBQUEsWUFDRyxBQUFLLE1BRlYsQUFDRSxBQUNjLEFBRWQsdUJBQUEsY0FBQTs7a0JBQUE7b0JBQUEsQUFDRztBQURIO0FBQUEsWUFDRyxBQUFLLE1BTFYsQUFJRSxBQUNjLEFBRWQsNkJBQUEsY0FBQTs7a0JBQUE7b0JBQUEsQUFDRztBQURIO0FBQUEsWUFDRyxBQUFLLE1BUlYsQUFPRSxBQUNjLEFBRWQsd0JBQUEsY0FBQTs7a0JBQUE7b0JBQUEsQUFDRTtBQURGO0FBQUEsdUJBQ0UsQUFBQyx3Q0FBTyxRQUFSLEFBQWUsVUFBUyxTQUFTLEtBQWpDLEFBQXNDO2tCQUF0QztvQkFBQTtBQUFBO09BakNaLEFBQ0UsQUFFSSxBQWlCQSxBQUVFLEFBVUUsQUFDRSxBQVNmO0FBMURMLEFBQWlCLEFBQWlCO0FBQUEsQ0FBakI7O0FBOERqQixJQUFNO2VBQ0Y7QUFEK0IsOENBQ2IsQUFDZDs7QUFFSTtjQUZKLEFBQU8sQUFFSyxBQUVmO0FBSlUsQUFDSDtBQUh1QixBQVEvQjtBQVIrQiwwQkFReEIsQUFDSDtVQUFBLEFBQU0sQUFDVDtBQVY4QixBQVkvQjtBQVorQiw0QkFZdEIsQUFHTDs7UUFBRyxLQUFBLEFBQUssTUFBTCxBQUFXLFVBQWQsQUFBd0IsT0FBTSxBQUMxQjtjQUFBLEFBQVEsSUFBUixBQUFZLEFBQ2Y7QUFFRDs7MkJBQ0UsY0FBQTs7a0JBQUE7b0JBQUEsQUFDRTtBQURGO0FBQUEsS0FBQSxrQkFDRSxBQUFDOztrQkFBRDtvQkFBQSxBQUNFO0FBREY7QUFBQSx1QkFDRSxBQUFDOztrQkFBRDtvQkFBQSxBQUNFO0FBREY7QUFBQSx1QkFDRSxBQUFDLHFDQUFJLFdBQUwsQUFBZTtrQkFBZjtvQkFBQSxBQUNFO0FBREY7cUNBQ0UsQUFBQzs7a0JBQUQ7b0JBREYsQUFDRSxBQUNBO0FBREE7QUFBQSxzQ0FDQSxBQUFDOztrQkFBRDtvQkFKTixBQUNFLEFBQ0UsQUFFRSxBQUlKO0FBSkk7QUFBQSwwQkFJSixBQUFDLHNDQUFLLFlBQU47a0JBQUE7b0JBQUEsQUFDRTtBQURGO3VCQUNFLEFBQUM7O2tCQUFEO29CQUFBLEFBQ0U7QUFERjtBQUFBLHVCQUNFLEFBQUMscUNBQUQsQUFBSyxBQUFnQiw4Q0FBYyxJQUFuQyxBQUF1QztrQkFBdkM7b0JBQUE7QUFBQTtPQURGLEFBQ0UsQUFHQSx3QkFBQSxBQUFDLHFDQUFJLElBQUwsQUFBUztrQkFBVDtvQkFBQSxBQUNFO0FBREY7dUJBQ0UsQUFBQyw2Q0FBWSxNQUFiLEFBQWtCLE9BQU0sYUFBeEIsQUFBb0M7a0JBQXBDO29CQU5OLEFBQ0UsQUFJRSxBQUNFLEFBSUo7QUFKSTswQkFJSixBQUFDOztrQkFBRDtvQkFBQSxBQUNFO0FBREY7QUFBQSx1QkFDRSxBQUFDLHFDQUFELEFBQUssQUFBZ0IsOENBQWMsSUFBbkMsQUFBdUM7a0JBQXZDO29CQUFBO0FBQUE7T0FERixBQUNFLEFBR0EsZ0NBQUEsQUFBQyxxQ0FBSSxJQUFMLEFBQVM7a0JBQVQ7b0JBQUEsQUFDRTtBQURGO3VCQUNFLEFBQUMsNkNBQVksTUFBYixBQUFrQixZQUFXLGFBQTdCLEFBQXlDO2tCQUF6QztvQkFmTixBQVVFLEFBSUUsQUFDRSxBQUlKO0FBSkk7MEJBSUosQUFBQzs7a0JBQUQ7b0JBQUEsQUFDQTtBQURBO0FBQUEsdUJBQ0EsQUFBQyxxQ0FBRCxBQUFLLEFBQWdCLHdDQUFRLElBQTdCLEFBQWlDLEdBQUksU0FBUyxLQUE5QyxBQUFtRDtrQkFBbkQ7b0JBQUE7QUFBQTtPQURBLEFBQ0EsQUFHRSxzQ0FBQSxBQUFDLHFDQUFELEFBQUssQUFBZ0IsOENBQWMsSUFBbkMsQUFBdUM7a0JBQXZDO29CQUFBO0FBQUE7T0FKRixBQUlFLEFBR0EsbUNBQUEsQUFBQyxxQ0FBRCxBQUFLLEFBQWdCLDhDQUFjLElBQW5DLEFBQXVDO2tCQUF2QztvQkFBQTtBQUFBO09BMUJKLEFBbUJFLEFBT0UsQUFLRiw4Q0FBQSxBQUFDOztrQkFBRDtvQkFBQSxBQUNFO0FBREY7QUFBQSx1QkFDRSxBQUFDLHFDQUFJLFVBQUwsQUFBZSxHQUFHLElBQWxCLEFBQXNCO2tCQUF0QjtvQkFBQSxBQUNFO0FBREY7dUJBQ0UsQUFBQyx3Q0FBTyxNQUFSLEFBQWE7a0JBQWI7b0JBQUE7QUFBQTtPQTNDWixBQUNFLEFBQ0UsQUFRRSxBQStCRSxBQUNFLEFBQ0UsQUFTZjtBQXZFTCxBQUFpQixBQUFrQixBQTBFbkM7QUExRW1DLENBQWxCOztrQkEwRWpCLEFBQWUiLCJmaWxlIjoiY2FycmluaG8uanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvcGNoaW5lbi9naXQvbWM0MzctZWNvbW1lcmNlIn0=