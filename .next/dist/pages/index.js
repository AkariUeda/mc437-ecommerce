'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('next\\node_modules\\babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('next\\node_modules\\babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _style = require('next\\node_modules\\styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _Carrossel = require('../components/Carrossel.js');

var _Carrossel2 = _interopRequireDefault(_Carrossel);

var _MyLayout = require('../components/MyLayout.js');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _MyGrid = require('../components/MyGrid.js');

var _MyGrid2 = _interopRequireDefault(_MyGrid);

var _api = require('../utils/api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Akari\\Desktop\\mc437-ecommerce\\pages\\index.js?entry';


var Index = function Index(props) {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement(_MyLayout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement(_Carrossel2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), _react2.default.createElement('h1', {
    className: 'jsx-3424511514',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, 'Produtos em destaque:'), _react2.default.createElement(_style2.default, {
    styleId: '3424511514',
    css: 'h1.jsx-3424511514,a.jsx-3424511514{font-family:"Arial";}ul.jsx-3424511514{padding:0;}li.jsx-3424511514{list-style:none;margin:5px 0;}a.jsx-3424511514{text-decoration:none;color:blue;}a.jsx-3424511514:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFja0IsQUFHK0IsQUFHVixBQUdNLEFBSUssQUFJVCxVQVZkLEVBV0EsSUFSZSxJQU5mLENBVWEsUUFIYixHQUlBIiwiZmlsZSI6InBhZ2VzXFxpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9Ba2FyaS9EZXNrdG9wL21jNDM3LWVjb21tZXJjZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcclxuaW1wb3J0IENhcnJvc3NlbCBmcm9tICcuLi9jb21wb25lbnRzL0NhcnJvc3NlbC5qcyc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcydcclxuaW1wb3J0IEdyaWRMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUdyaWQuanMnXHJcblxyXG5pbXBvcnQgYXBpIGZyb20gJy4uL3V0aWxzL2FwaSc7XHJcblxyXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8Q2Fycm9zc2VsIC8+XHJcbiAgICAgIDxoMT5Qcm9kdXRvcyBlbSBkZXN0YXF1ZTo8L2gxPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgaDEsIGEge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgY29sb3I6IGJsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8R3JpZExheW91dCBwcm9kdXRvcz17cHJvcHMucHJvZHV0b3N9IC8+XHJcbiAgICA8L0xheW91dD5cclxuICA8L2Rpdj5cclxuKVxyXG5cclxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGFwaS5nZXQoJ2h0dHA6Ly9lYzItNTQtMjA3LTYzLTE2MC5zYS1lYXN0LTEuY29tcHV0ZS5hbWF6b25hd3MuY29tOjMwMDAnLCAncHJvZHVjdHMnLCB7IGdyb3VwOiAnZ3J1cG82JyB9KTtcclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb2R1dG9zOiBkYXRhXHJcbiAgfVxyXG5cclxuICAvLyBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zZWFyY2gvc2hvd3M/cT1iYXRtYW4nKVxyXG4gIC8vIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgLy9cclxuICAvLyBjb25zb2xlLmxvZyhgU2hvdyBkYXRhIGZldGNoZWQuIENvdW50OiAke2RhdGEubGVuZ3RofWApXHJcbiAgLy9cclxuICAvLyByZXR1cm4ge1xyXG4gIC8vICAgc2hvd3M6IGRhdGFcclxuICAvLyB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4XHJcbiJdfQ== */\n/*@ sourceURL=pages\\index.js?entry */'
  }), _react2.default.createElement(_MyGrid2.default, { produtos: props.produtos, __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  })));
};

Index.getInitialProps = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
  var data;
  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _api2.default.get('http://ec2-54-207-63-160.sa-east-1.compute.amazonaws.com:3000', 'products', { group: 'grupo6' });

        case 2:
          data = _context.sent;

          console.log(data);

          return _context.abrupt('return', {
            produtos: data

            // const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
            // const data = await res.json()
            //
            // console.log(`Show data fetched. Count: ${data.length}`)
            //
            // return {
            //   shows: data
            // }
          });

        case 5:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this);
}));

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJCdXR0b24iLCJMaW5rIiwiZmV0Y2giLCJDYXJyb3NzZWwiLCJMYXlvdXQiLCJHcmlkTGF5b3V0IiwiYXBpIiwiSW5kZXgiLCJwcm9wcyIsInByb2R1dG9zIiwiZ2V0SW5pdGlhbFByb3BzIiwiZ2V0IiwiZ3JvdXAiLCJkYXRhIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVM7O0FBQ1QsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPLEFBQWU7Ozs7QUFDdEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBZ0I7Ozs7QUFFdkIsQUFBTyxBQUFTOzs7Ozs7Ozs7QUFFaEIsSUFBTSxRQUFRLFNBQVIsQUFBUSxNQUFBLEFBQUMsT0FBRDt5QkFDWixjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLEFBQUM7O2dCQUFEO2tCQURGLEFBQ0UsQUFDQTtBQURBO0FBQUEsc0JBQ0EsY0FBQTtlQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FGRixBQUVFO2FBRkY7U0FBQSxBQXNCRTtBQXRCRixzQkFzQkUsQUFBQyxrQ0FBVyxVQUFVLE1BQXRCLEFBQTRCO2dCQUE1QjtrQkF4QlEsQUFDWixBQUNFLEFBc0JFO0FBQUE7O0FBeEJOOztBQTZCQSxNQUFBLEFBQU0sMkZBQWtCLG1CQUFBO01BQUE7Z0VBQUE7Y0FBQTt1Q0FBQTthQUFBOzBCQUFBO2lCQUNILGNBQUEsQUFBSSxJQUFKLEFBQVEsaUVBQVIsQUFBeUUsWUFBWSxFQUFFLE9BRHBGLEFBQ0gsQUFBcUYsQUFBUzs7YUFBM0c7QUFEZ0IsMEJBRXRCOztrQkFBQSxBQUFRLElBRmMsQUFFdEIsQUFBWTs7O3NCQUdBLEFBR1o7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmc0IsQUFJZjtBQUFBLEFBQ0w7O2FBTG9CO2FBQUE7MEJBQUE7O0FBQUE7Y0FBQTtBQUF4QixBQWtCQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9Ba2FyaS9EZXNrdG9wL21jNDM3LWVjb21tZXJjZSJ9