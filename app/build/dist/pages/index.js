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

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _reactBootstrap = require('react-bootstrap');

var _createReactClass = require('create-react-class');

var _createReactClass2 = _interopRequireDefault(_createReactClass);

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
      lineNumber: 17
    }
  }, _react2.default.createElement(_link2.default, { as: '/p/' + post.id, href: '/post?title=' + post.title, __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement('a', {
    className: 'jsx-3950785544',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, post.title)), _react2.default.createElement(_style2.default, {
    styleId: '3950785544',
    css: 'li.jsx-3950785544{list-style:none;margin:5px 0;}a.jsx-3950785544{text-decoration:none;color:blue;font-family:"Arial";}a.jsx-3950785544:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWdlcy9pbmRleC5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQmdCLEFBR3lCLEFBS0ssQUFNVCxZQUNkLElBWGUsS0FLRixRQUpiLEdBS3NCLG9CQUN0QiIsImZpbGUiOiJhcHAvcGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvcGNoaW5lbi9naXQvbWM0MzctZWNvbW1lcmNlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0LmpzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgR3JpZCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcbmltcG9ydCB7IENvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcbmltcG9ydCB7IFJvdyB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcbmltcG9ydCBjcmVhdGVSZWFjdENsYXNzIGZyb20gJ2NyZWF0ZS1yZWFjdC1jbGFzcyc7XG5cbmZ1bmN0aW9uIGdldFBvc3RzICgpIHtcbiAgcmV0dXJuIFtcbiAgICB7IGlkOiAnaGVsbG8tbmV4dGpzJywgdGl0bGU6ICdIZWxsbyBOZXh0LmpzJ30sXG4gICAgeyBpZDogJ2xlYXJuLW5leHRqcycsIHRpdGxlOiAnTGVhcm4gTmV4dC5qcyBpcyBhd2Vzb21lJ30sXG4gICAgeyBpZDogJ2RlcGxveS1uZXh0anMnLCB0aXRsZTogJ0RlcGxveSBhcHBzIHdpdGggWkVJVCd9LFxuICBdXG59XG5cbmNvbnN0IFBvc3RMaW5rID0gKHsgcG9zdCB9KSA9PiAoXG4gIDxsaT5cbiAgICA8TGluayBhcz17YC9wLyR7cG9zdC5pZH1gfSBocmVmPXtgL3Bvc3Q/dGl0bGU9JHtwb3N0LnRpdGxlfWB9PlxuICAgICAgPGE+e3Bvc3QudGl0bGV9PC9hPlxuICAgIDwvTGluaz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBsaSB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICBmb250LWZhbWlseTogXCJBcmlhbFwiO1xuICAgICAgfVxuXG4gICAgICBhOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9saT5cbilcblxuY29uc3QgZ3JpZGluc3RhbmNlID0gKCkgPT4gKFxuICA8R3JpZD5cbiAgICA8Um93IGNsYXNzTmFtZT1cInNob3ctZ3JpZFwiPlxuICAgICAgICA8Q29sIHhzPXsxMn0gbWQ9ezh9Pm9kZTwvQ29sPlxuICAgICAgPENvbCB4cz17Nn0gbWQ9ezR9PmRlPC9Db2w+XG4gICAgPC9Sb3c+XG5cbiAgICA8Um93IGNsYXNzTmFtZT1cInNob3ctZ3JpZFwiPlxuICAgICAgPENvbCB4cz17Nn0gbWQ9ezR9PmFzZDwvQ29sPlxuICAgICAgPENvbCB4cz17Nn0gbWQ9ezR9PmFzZDwvQ29sPlxuICAgICAgPENvbCB4c0hpZGRlbiBtZD17NH0+YXNkPC9Db2w+XG4gICAgPC9Sb3c+XG4gIDwvR3JpZD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbjxkaXY+XG4gIDxMYXlvdXQ+XG4gICAgPGgxPk15IEJsb2c8L2gxPlxuICAgIDx1bD5cbiAgICAgIHtnZXRQb3N0cygpLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICA8UG9zdExpbmsga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fS8+XG4gICAgICApKX1cbiAgICA8L3VsPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGgxLCBhIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcbiAgICAgIH1cblxuICAgICAgdWwge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuXG4gICAgICBsaSB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgfVxuXG4gICAgICBhOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9MYXlvdXQ+XG4gIDxncmlkaW5zdGFuY2UgLz5cbjwvZGl2PiAgICAgICBcbilcbiJdfQ== */\n/*@ sourceURL=app/pages/index.js?entry */'
  }));
};

var gridinstance = function gridinstance() {
  return _react2.default.createElement(_reactBootstrap.Grid, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, _react2.default.createElement(_reactBootstrap.Row, { className: 'show-grid', __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, _react2.default.createElement(_reactBootstrap.Col, { xs: 12, md: 8, __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, 'ode'), _react2.default.createElement(_reactBootstrap.Col, { xs: 6, md: 4, __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, 'de')), _react2.default.createElement(_reactBootstrap.Row, { className: 'show-grid', __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, _react2.default.createElement(_reactBootstrap.Col, { xs: 6, md: 4, __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, 'asd'), _react2.default.createElement(_reactBootstrap.Col, { xs: 6, md: 4, __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, 'asd'), _react2.default.createElement(_reactBootstrap.Col, { xsHidden: true, md: 4, __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, 'asd')));
};

exports.default = function () {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, _react2.default.createElement(_MyLayout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }, _react2.default.createElement('h1', {
    className: 'jsx-2987328901',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }, 'My Blog'), _react2.default.createElement('ul', {
    className: 'jsx-2987328901',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }, getPosts().map(function (post) {
    return _react2.default.createElement(PostLink, { key: post.id, post: post, __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      }
    });
  })), _react2.default.createElement(_style2.default, {
    styleId: '2987328901',
    css: 'h1.jsx-2987328901,a.jsx-2987328901{font-family:"Arial";}ul.jsx-2987328901{padding:0;}li.jsx-2987328901{list-style:none;margin:5px 0;}a.jsx-2987328901{text-decoration:none;color:blue;}a.jsx-2987328901:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWdlcy9pbmRleC5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRGdCLEFBRzZCLEFBSVYsQUFJTSxBQUtLLEFBS1QsVUFiZCxFQWNBLElBVmUsSUFSZixDQWFhLFFBSmIsR0FLQSIsImZpbGUiOiJhcHAvcGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvcGNoaW5lbi9naXQvbWM0MzctZWNvbW1lcmNlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0LmpzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgR3JpZCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcbmltcG9ydCB7IENvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcbmltcG9ydCB7IFJvdyB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcbmltcG9ydCBjcmVhdGVSZWFjdENsYXNzIGZyb20gJ2NyZWF0ZS1yZWFjdC1jbGFzcyc7XG5cbmZ1bmN0aW9uIGdldFBvc3RzICgpIHtcbiAgcmV0dXJuIFtcbiAgICB7IGlkOiAnaGVsbG8tbmV4dGpzJywgdGl0bGU6ICdIZWxsbyBOZXh0LmpzJ30sXG4gICAgeyBpZDogJ2xlYXJuLW5leHRqcycsIHRpdGxlOiAnTGVhcm4gTmV4dC5qcyBpcyBhd2Vzb21lJ30sXG4gICAgeyBpZDogJ2RlcGxveS1uZXh0anMnLCB0aXRsZTogJ0RlcGxveSBhcHBzIHdpdGggWkVJVCd9LFxuICBdXG59XG5cbmNvbnN0IFBvc3RMaW5rID0gKHsgcG9zdCB9KSA9PiAoXG4gIDxsaT5cbiAgICA8TGluayBhcz17YC9wLyR7cG9zdC5pZH1gfSBocmVmPXtgL3Bvc3Q/dGl0bGU9JHtwb3N0LnRpdGxlfWB9PlxuICAgICAgPGE+e3Bvc3QudGl0bGV9PC9hPlxuICAgIDwvTGluaz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBsaSB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICBmb250LWZhbWlseTogXCJBcmlhbFwiO1xuICAgICAgfVxuXG4gICAgICBhOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9saT5cbilcblxuY29uc3QgZ3JpZGluc3RhbmNlID0gKCkgPT4gKFxuICA8R3JpZD5cbiAgICA8Um93IGNsYXNzTmFtZT1cInNob3ctZ3JpZFwiPlxuICAgICAgICA8Q29sIHhzPXsxMn0gbWQ9ezh9Pm9kZTwvQ29sPlxuICAgICAgPENvbCB4cz17Nn0gbWQ9ezR9PmRlPC9Db2w+XG4gICAgPC9Sb3c+XG5cbiAgICA8Um93IGNsYXNzTmFtZT1cInNob3ctZ3JpZFwiPlxuICAgICAgPENvbCB4cz17Nn0gbWQ9ezR9PmFzZDwvQ29sPlxuICAgICAgPENvbCB4cz17Nn0gbWQ9ezR9PmFzZDwvQ29sPlxuICAgICAgPENvbCB4c0hpZGRlbiBtZD17NH0+YXNkPC9Db2w+XG4gICAgPC9Sb3c+XG4gIDwvR3JpZD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbjxkaXY+XG4gIDxMYXlvdXQ+XG4gICAgPGgxPk15IEJsb2c8L2gxPlxuICAgIDx1bD5cbiAgICAgIHtnZXRQb3N0cygpLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICA8UG9zdExpbmsga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fS8+XG4gICAgICApKX1cbiAgICA8L3VsPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGgxLCBhIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcbiAgICAgIH1cblxuICAgICAgdWwge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuXG4gICAgICBsaSB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgfVxuXG4gICAgICBhOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9MYXlvdXQ+XG4gIDxncmlkaW5zdGFuY2UgLz5cbjwvZGl2PiAgICAgICBcbilcbiJdfQ== */\n/*@ sourceURL=app/pages/index.js?entry */'
  })), _react2.default.createElement('gridinstance', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    }
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJMYXlvdXQiLCJMaW5rIiwiR3JpZCIsIkNvbCIsIlJvdyIsImNyZWF0ZVJlYWN0Q2xhc3MiLCJnZXRQb3N0cyIsImlkIiwidGl0bGUiLCJQb3N0TGluayIsInBvc3QiLCJncmlkaW5zdGFuY2UiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU87Ozs7QUFDUCxBQUFTLEFBQ1QsQUFBUyxBQUNULEFBQVM7O0FBQ1QsQUFBTzs7Ozs7Ozs7O0FBRVAsU0FBQSxBQUFTLFdBQVksQUFDbkI7U0FBTyxDQUNMLEVBQUUsSUFBRixBQUFNLGdCQUFnQixPQURqQixBQUNMLEFBQTZCLG1CQUM3QixFQUFFLElBQUYsQUFBTSxnQkFBZ0IsT0FGakIsQUFFTCxBQUE2Qiw4QkFDN0IsRUFBRSxJQUFGLEFBQU0saUJBQWlCLE9BSHpCLEFBQU8sQUFHTCxBQUE4QixBQUVqQzs7O0FBRUQsSUFBTSxXQUFXLFNBQVgsQUFBVyxlQUFBO01BQUEsQUFBRyxZQUFILEFBQUc7eUJBQ2xCLGNBQUE7ZUFBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxBQUFDLGdDQUFLLFlBQVUsS0FBaEIsQUFBcUIsSUFBTSx1QkFBcUIsS0FBaEQsQUFBcUQ7Z0JBQXJEO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBO2VBQUE7O2dCQUFBO2tCQUFBLEFBQUk7QUFBSjtBQUFBLFVBRkosQUFDRSxBQUNFLEFBQVM7YUFGYjtTQURlLEFBQ2Y7QUFBQTtBQURGOztBQXdCQSxJQUFNLGVBQWUsU0FBZixBQUFlLGVBQUE7eUJBQ25CLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsQUFBQyxxQ0FBSSxXQUFMLEFBQWU7Z0JBQWY7a0JBQUEsQUFDSTtBQURKO3FCQUNJLEFBQUMscUNBQUksSUFBTCxBQUFTLElBQUksSUFBYixBQUFpQjtnQkFBakI7a0JBQUE7QUFBQTtLQURKLEFBQ0ksQUFDRix3QkFBQSxBQUFDLHFDQUFJLElBQUwsQUFBUyxHQUFHLElBQVosQUFBZ0I7Z0JBQWhCO2tCQUFBO0FBQUE7S0FISixBQUNFLEFBRUUsQUFHRix3QkFBQSxBQUFDLHFDQUFJLFdBQUwsQUFBZTtnQkFBZjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsQUFBQyxxQ0FBSSxJQUFMLEFBQVMsR0FBRyxJQUFaLEFBQWdCO2dCQUFoQjtrQkFBQTtBQUFBO0tBREYsQUFDRSxBQUNBLHdCQUFBLEFBQUMscUNBQUksSUFBTCxBQUFTLEdBQUcsSUFBWixBQUFnQjtnQkFBaEI7a0JBQUE7QUFBQTtLQUZGLEFBRUUsQUFDQSx3QkFBQSxBQUFDLHFDQUFJLFVBQUwsTUFBYyxJQUFkLEFBQWtCO2dCQUFsQjtrQkFBQTtBQUFBO0tBVmUsQUFDbkIsQUFNRSxBQUdFO0FBVk4sQUFlQTs7a0JBQWUsWUFBQTt5QkFDZixjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLGNBQUE7ZUFBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBREYsQUFDRSxBQUNBLDRCQUFBLGNBQUE7ZUFBQTs7Z0JBQUE7a0JBQUEsQUFDRztBQURIO0FBQUEsZ0JBQ0csQUFBVyxJQUFJLFVBQUEsQUFBQyxNQUFEO3lDQUNkLEFBQUMsWUFBUyxLQUFLLEtBQWYsQUFBb0IsSUFBSSxNQUF4QixBQUE4QjtrQkFBOUI7b0JBRGMsQUFDZDtBQUFBO0tBQUE7QUFKTixBQUVFLEFBQ0c7YUFITDtTQURGLEFBQ0UsQUErQkE7QUEvQkE7O2dCQStCQTtrQkFqQ2EsQUFDZixBQWdDRTtBQUFBO0FBQUE7QUFqQ0YiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvcGNoaW5lbi9naXQvbWM0MzctZWNvbW1lcmNlIn0=