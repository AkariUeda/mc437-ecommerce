'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MyLayout = require('../components/MyLayout.js');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _MyGrid = require('../components/MyGrid.js');

var _MyGrid2 = _interopRequireDefault(_MyGrid);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/pchinen/git/mc437-ecommerce/app/pages/index.js?entry';


function getPosts() {
  return [{ id: 'hello-nextjs', title: 'Hello Next.js' }, { id: 'learn-nextjs', title: 'Learn Next.js is awesome' }, { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }];
}

var PostLink = function PostLink(_ref) {
  var post = _ref.post;
  return _react2.default.createElement('li', {
    className: 'jsx-3950785544',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement(_link2.default, { as: '/p/' + post.id, href: '/post?title=' + post.title, __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, _react2.default.createElement('a', {
    className: 'jsx-3950785544',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, post.title)), _react2.default.createElement(_style2.default, {
    styleId: '3950785544',
    css: 'li.jsx-3950785544{list-style:none;margin:5px 0;}a.jsx-3950785544{text-decoration:none;color:blue;font-family:"Arial";}a.jsx-3950785544:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWdlcy9pbmRleC5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQmdCLEFBR3lCLEFBS0ssQUFNVCxZQUNkLElBWGUsS0FLRixRQUpiLEdBS3NCLG9CQUN0QiIsImZpbGUiOiJhcHAvcGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvcGNoaW5lbi9naXQvbWM0MzctZWNvbW1lcmNlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0LmpzJ1xuaW1wb3J0IEdyaWRQcm9kdXRvIGZyb20gJy4uL2NvbXBvbmVudHMvTXlHcmlkLmpzJ1xuaW1wb3J0IEdyaWRMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUdyaWQuanMnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cblxuZnVuY3Rpb24gZ2V0UG9zdHMgKCkge1xuICByZXR1cm4gW1xuICAgIHsgaWQ6ICdoZWxsby1uZXh0anMnLCB0aXRsZTogJ0hlbGxvIE5leHQuanMnfSxcbiAgICB7IGlkOiAnbGVhcm4tbmV4dGpzJywgdGl0bGU6ICdMZWFybiBOZXh0LmpzIGlzIGF3ZXNvbWUnfSxcbiAgICB7IGlkOiAnZGVwbG95LW5leHRqcycsIHRpdGxlOiAnRGVwbG95IGFwcHMgd2l0aCBaRUlUJ30sXG4gIF1cbn1cblxuY29uc3QgUG9zdExpbmsgPSAoeyBwb3N0IH0pID0+IChcbiAgPGxpPlxuICAgIDxMaW5rIGFzPXtgL3AvJHtwb3N0LmlkfWB9IGhyZWY9e2AvcG9zdD90aXRsZT0ke3Bvc3QudGl0bGV9YH0+XG4gICAgICA8YT57cG9zdC50aXRsZX08L2E+XG4gICAgPC9MaW5rPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGxpIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgIH1cblxuICAgICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCI7XG4gICAgICB9XG5cbiAgICAgIGE6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2xpPlxuKVxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG48ZGl2PlxuICA8TGF5b3V0PlxuXG4gIDxoMT5Qcm9kdXRvcyBlbSBkZXN0YXF1ZTo8L2gxPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGgxLCBhIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcbiAgICAgIH1cblxuICAgICAgdWwge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuXG4gICAgICBsaSB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgfVxuXG4gICAgICBhOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8R3JpZExheW91dCAvPlxuICA8L0xheW91dD5cbjwvZGl2PlxuKVxuIl19 */\n/*@ sourceURL=app/pages/index.js?entry */'
  }));
};

exports.default = function () {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, _react2.default.createElement(_MyLayout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, _react2.default.createElement('h1', {
    className: 'jsx-2987328901',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, 'Produtos em destaque:'), _react2.default.createElement(_style2.default, {
    styleId: '2987328901',
    css: 'h1.jsx-2987328901,a.jsx-2987328901{font-family:"Arial";}ul.jsx-2987328901{padding:0;}li.jsx-2987328901{list-style:none;margin:5px 0;}a.jsx-2987328901{text-decoration:none;color:blue;}a.jsx-2987328901:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWdlcy9pbmRleC5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQ2dCLEFBRzZCLEFBSVYsQUFJTSxBQUtLLEFBS1QsVUFiZCxFQWNBLElBVmUsSUFSZixDQWFhLFFBSmIsR0FLQSIsImZpbGUiOiJhcHAvcGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvcGNoaW5lbi9naXQvbWM0MzctZWNvbW1lcmNlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0LmpzJ1xuaW1wb3J0IEdyaWRQcm9kdXRvIGZyb20gJy4uL2NvbXBvbmVudHMvTXlHcmlkLmpzJ1xuaW1wb3J0IEdyaWRMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUdyaWQuanMnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cblxuZnVuY3Rpb24gZ2V0UG9zdHMgKCkge1xuICByZXR1cm4gW1xuICAgIHsgaWQ6ICdoZWxsby1uZXh0anMnLCB0aXRsZTogJ0hlbGxvIE5leHQuanMnfSxcbiAgICB7IGlkOiAnbGVhcm4tbmV4dGpzJywgdGl0bGU6ICdMZWFybiBOZXh0LmpzIGlzIGF3ZXNvbWUnfSxcbiAgICB7IGlkOiAnZGVwbG95LW5leHRqcycsIHRpdGxlOiAnRGVwbG95IGFwcHMgd2l0aCBaRUlUJ30sXG4gIF1cbn1cblxuY29uc3QgUG9zdExpbmsgPSAoeyBwb3N0IH0pID0+IChcbiAgPGxpPlxuICAgIDxMaW5rIGFzPXtgL3AvJHtwb3N0LmlkfWB9IGhyZWY9e2AvcG9zdD90aXRsZT0ke3Bvc3QudGl0bGV9YH0+XG4gICAgICA8YT57cG9zdC50aXRsZX08L2E+XG4gICAgPC9MaW5rPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGxpIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgIH1cblxuICAgICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCI7XG4gICAgICB9XG5cbiAgICAgIGE6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2xpPlxuKVxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG48ZGl2PlxuICA8TGF5b3V0PlxuXG4gIDxoMT5Qcm9kdXRvcyBlbSBkZXN0YXF1ZTo8L2gxPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGgxLCBhIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcbiAgICAgIH1cblxuICAgICAgdWwge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuXG4gICAgICBsaSB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgfVxuXG4gICAgICBhOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8R3JpZExheW91dCAvPlxuICA8L0xheW91dD5cbjwvZGl2PlxuKVxuIl19 */\n/*@ sourceURL=app/pages/index.js?entry */'
  }), _react2.default.createElement(_MyGrid2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  })));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJMYXlvdXQiLCJHcmlkUHJvZHV0byIsIkdyaWRMYXlvdXQiLCJMaW5rIiwiZ2V0UG9zdHMiLCJpZCIsInRpdGxlIiwiUG9zdExpbmsiLCJwb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWlCLEFBQ3hCLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBTzs7Ozs7Ozs7O0FBR1AsU0FBQSxBQUFTLFdBQVksQUFDbkI7U0FBTyxDQUNMLEVBQUUsSUFBRixBQUFNLGdCQUFnQixPQURqQixBQUNMLEFBQTZCLG1CQUM3QixFQUFFLElBQUYsQUFBTSxnQkFBZ0IsT0FGakIsQUFFTCxBQUE2Qiw4QkFDN0IsRUFBRSxJQUFGLEFBQU0saUJBQWlCLE9BSHpCLEFBQU8sQUFHTCxBQUE4QixBQUVqQzs7O0FBRUQsSUFBTSxXQUFXLFNBQVgsQUFBVyxlQUFBO01BQUEsQUFBRyxZQUFILEFBQUc7eUJBQ2xCLGNBQUE7ZUFBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxBQUFDLGdDQUFLLFlBQVUsS0FBaEIsQUFBcUIsSUFBTSx1QkFBcUIsS0FBaEQsQUFBcUQ7Z0JBQXJEO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBO2VBQUE7O2dCQUFBO2tCQUFBLEFBQUk7QUFBSjtBQUFBLFVBRkosQUFDRSxBQUNFLEFBQVM7YUFGYjtTQURlLEFBQ2Y7QUFBQTtBQURGLEFBd0JBOztrQkFBZSxZQUFBO3lCQUNmLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFFQTtBQUZBO0FBQUEscUJBRUEsY0FBQTtlQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FGQSxBQUVBO2FBRkE7U0FBQSxBQTBCRTtBQTFCRixzQkEwQkUsQUFBQzs7Z0JBQUQ7a0JBNUJXLEFBQ2YsQUFDRSxBQTBCRTtBQUFBO0FBQUE7QUE1QkoiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvcGNoaW5lbi9naXQvbWM0MzctZWNvbW1lcmNlIn0=