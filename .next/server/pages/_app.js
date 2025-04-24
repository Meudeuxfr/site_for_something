/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./context/ThemeContext.tsx":
/*!**********************************!*\
  !*** ./context/ThemeContext.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ThemeProvider: () => (/* binding */ ThemeProvider),\n/* harmony export */   useTheme: () => (/* binding */ useTheme)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nfunction ThemeProvider({ children }) {\n    const [theme, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('light');\n    // initialize from localStorage\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"ThemeProvider.useEffect\": ()=>{\n            const stored = localStorage.getItem('theme');\n            if (stored) setTheme(stored);\n        }\n    }[\"ThemeProvider.useEffect\"], []);\n    // persist + apply class\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"ThemeProvider.useEffect\": ()=>{\n            localStorage.setItem('theme', theme);\n        }\n    }[\"ThemeProvider.useEffect\"], [\n        theme\n    ]);\n    const toggleTheme = ()=>{\n        setTheme((t)=>t === 'dark' ? 'light' : 'dark');\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ThemeContext.Provider, {\n        value: {\n            theme,\n            toggleTheme\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Miguel Gomes\\\\Documents\\\\Site\\\\site_for_something\\\\context\\\\ThemeContext.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\nfunction useTheme() {\n    const ctx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ThemeContext);\n    if (!ctx) throw new Error('useTheme must be inside ThemeProvider');\n    return ctx;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbnRleHQvVGhlbWVDb250ZXh0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBTWM7QUFTZCxNQUFNSSw2QkFBZUosb0RBQWFBLENBQStCSztBQUUxRCxTQUFTQyxjQUFjLEVBQUVDLFFBQVEsRUFBMkI7SUFDakUsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQSxDQUFRO0lBRTFDLCtCQUErQjtJQUMvQkMsZ0RBQVNBO21DQUFDO1lBQ1IsTUFBTU8sU0FBU0MsYUFBYUMsT0FBTyxDQUFDO1lBQ3BDLElBQUlGLFFBQVFELFNBQVNDO1FBQ3ZCO2tDQUFHLEVBQUU7SUFFTCx3QkFBd0I7SUFDeEJQLGdEQUFTQTttQ0FBQztZQUNSUSxhQUFhRSxPQUFPLENBQUMsU0FBU0w7UUFDaEM7a0NBQUc7UUFBQ0E7S0FBTTtJQUVWLE1BQU1NLGNBQWM7UUFDbEJMLFNBQVMsQ0FBQ00sSUFBT0EsTUFBTSxTQUFTLFVBQVU7SUFDNUM7SUFFQSxxQkFDRSw4REFBQ1gsYUFBYVksUUFBUTtRQUFDQyxPQUFPO1lBQUVUO1lBQU9NO1FBQVk7a0JBQ2hEUDs7Ozs7O0FBR1A7QUFFTyxTQUFTVztJQUNkLE1BQU1DLE1BQU1sQixpREFBVUEsQ0FBQ0c7SUFDdkIsSUFBSSxDQUFDZSxLQUFLLE1BQU0sSUFBSUMsTUFBTTtJQUMxQixPQUFPRDtBQUNUIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXE1pZ3VlbCBHb21lc1xcRG9jdW1lbnRzXFxTaXRlXFxzaXRlX2Zvcl9zb21ldGhpbmdcXGNvbnRleHRcXFRoZW1lQ29udGV4dC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBjcmVhdGVDb250ZXh0LFxyXG4gIHVzZUNvbnRleHQsXHJcbiAgdXNlU3RhdGUsXHJcbiAgUmVhY3ROb2RlLFxyXG4gIHVzZUVmZmVjdCxcclxufSBmcm9tICdyZWFjdCdcclxuXHJcbnR5cGUgVGhlbWUgPSAnbGlnaHQnIHwgJ2RhcmsnXHJcblxyXG5pbnRlcmZhY2UgVGhlbWVDb250ZXh0VHlwZSB7XHJcbiAgdGhlbWU6IFRoZW1lXHJcbiAgdG9nZ2xlVGhlbWU6ICgpID0+IHZvaWRcclxufVxyXG5cclxuY29uc3QgVGhlbWVDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxUaGVtZUNvbnRleHRUeXBlIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVGhlbWVQcm92aWRlcih7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0Tm9kZSB9KSB7XHJcbiAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZTxUaGVtZT4oJ2xpZ2h0JylcclxuXHJcbiAgLy8gaW5pdGlhbGl6ZSBmcm9tIGxvY2FsU3RvcmFnZVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKSBhcyBUaGVtZSB8IG51bGxcclxuICAgIGlmIChzdG9yZWQpIHNldFRoZW1lKHN0b3JlZClcclxuICB9LCBbXSlcclxuXHJcbiAgLy8gcGVyc2lzdCArIGFwcGx5IGNsYXNzXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsIHRoZW1lKVxyXG4gIH0sIFt0aGVtZV0pXHJcblxyXG4gIGNvbnN0IHRvZ2dsZVRoZW1lID0gKCkgPT4ge1xyXG4gICAgc2V0VGhlbWUoKHQpID0+ICh0ID09PSAnZGFyaycgPyAnbGlnaHQnIDogJ2RhcmsnKSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VGhlbWVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHRoZW1lLCB0b2dnbGVUaGVtZSB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9UaGVtZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlVGhlbWUoKSB7XHJcbiAgY29uc3QgY3R4ID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpXHJcbiAgaWYgKCFjdHgpIHRocm93IG5ldyBFcnJvcigndXNlVGhlbWUgbXVzdCBiZSBpbnNpZGUgVGhlbWVQcm92aWRlcicpXHJcbiAgcmV0dXJuIGN0eFxyXG59Il0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJUaGVtZUNvbnRleHQiLCJ1bmRlZmluZWQiLCJUaGVtZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ0aGVtZSIsInNldFRoZW1lIiwic3RvcmVkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJ0b2dnbGVUaGVtZSIsInQiLCJQcm92aWRlciIsInZhbHVlIiwidXNlVGhlbWUiLCJjdHgiLCJFcnJvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./context/ThemeContext.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./next-i18next.config.js":
/*!********************************!*\
  !*** ./next-i18next.config.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nconst path = __webpack_require__(/*! path */ \"path\");\nmodule.exports = {\n    i18n: {\n        defaultLocale: 'en',\n        locales: [\n            'en',\n            'pt'\n        ]\n    },\n    localePath: path.resolve('./locales')\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL25leHQtaTE4bmV4dC5jb25maWcuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLE9BQU9DLG1CQUFPQSxDQUFDLGtCQUFNO0FBRTNCQyxPQUFPQyxPQUFPLEdBQUc7SUFDZkMsTUFBTTtRQUNKQyxlQUFlO1FBQ2ZDLFNBQVM7WUFBQztZQUFNO1NBQUs7SUFDdkI7SUFDQUMsWUFBWVAsS0FBS1EsT0FBTyxDQUFDO0FBQzNCIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXE1pZ3VlbCBHb21lc1xcRG9jdW1lbnRzXFxTaXRlXFxzaXRlX2Zvcl9zb21ldGhpbmdcXG5leHQtaTE4bmV4dC5jb25maWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIGkxOG46IHtcclxuICAgIGRlZmF1bHRMb2NhbGU6ICdlbicsXHJcbiAgICBsb2NhbGVzOiBbJ2VuJywgJ3B0J10sXHJcbiAgfSxcclxuICBsb2NhbGVQYXRoOiBwYXRoLnJlc29sdmUoJy4vbG9jYWxlcycpLFxyXG59OyJdLCJuYW1lcyI6WyJwYXRoIiwicmVxdWlyZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJpMThuIiwiZGVmYXVsdExvY2FsZSIsImxvY2FsZXMiLCJsb2NhbGVQYXRoIiwicmVzb2x2ZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./next-i18next.config.js\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"(pages-dir-node)/./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_ThemeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/ThemeContext */ \"(pages-dir-node)/./context/ThemeContext.tsx\");\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-i18next */ \"next-i18next\");\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _next_i18next_config_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../next-i18next.config.js */ \"(pages-dir-node)/./next-i18next.config.js\");\n/* harmony import */ var _next_i18next_config_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_next_i18next_config_js__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction ContentWrapper({ Component, pageProps }) {\n    const { theme } = (0,_context_ThemeContext__WEBPACK_IMPORTED_MODULE_3__.useTheme)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"ContentWrapper.useEffect\": ()=>{\n            document.documentElement.classList.toggle('dark', theme === 'dark');\n        }\n    }[\"ContentWrapper.useEffect\"], [\n        theme\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Miguel Gomes\\\\Documents\\\\Site\\\\site_for_something\\\\pages\\\\_app.tsx\",\n        lineNumber: 16,\n        columnNumber: 10\n    }, this);\n}\nfunction MyApp(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_ThemeContext__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentWrapper, {\n            ...props\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Miguel Gomes\\\\Documents\\\\Site\\\\site_for_something\\\\pages\\\\_app.tsx\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Miguel Gomes\\\\Documents\\\\Site\\\\site_for_something\\\\pages\\\\_app.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_i18next__WEBPACK_IMPORTED_MODULE_4__.appWithTranslation)(MyApp, (_next_i18next_config_js__WEBPACK_IMPORTED_MODULE_5___default())));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFFVTtBQUN5QjtBQUNoQjtBQUNRO0FBR3pELFNBQVNNLGVBQWUsRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVk7SUFDeEQsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBR04sK0RBQVFBO0lBRTFCRixnREFBU0E7b0NBQUM7WUFDUlMsU0FBU0MsZUFBZSxDQUFDQyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxRQUFRSixVQUFVO1FBQzlEO21DQUFHO1FBQUNBO0tBQU07SUFFVixxQkFBTyw4REFBQ0Y7UUFBVyxHQUFHQyxTQUFTOzs7Ozs7QUFDakM7QUFFQSxTQUFTTSxNQUFNQyxLQUFlO0lBQzVCLHFCQUNFLDhEQUFDYixnRUFBYUE7a0JBQ1osNEVBQUNJO1lBQWdCLEdBQUdTLEtBQUs7Ozs7Ozs7Ozs7O0FBRy9CO0FBRUEsaUVBQWVYLGdFQUFrQkEsQ0FBQ1UsT0FBT1QsZ0VBQWlCQSxDQUFDQSxFQUFBIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXE1pZ3VlbCBHb21lc1xcRG9jdW1lbnRzXFxTaXRlXFxzaXRlX2Zvcl9zb21ldGhpbmdcXHBhZ2VzXFxfYXBwLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcclxuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIsIHVzZVRoZW1lIH0gZnJvbSAnLi4vY29udGV4dC9UaGVtZUNvbnRleHQnXHJcbmltcG9ydCB7IGFwcFdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ25leHQtaTE4bmV4dCdcclxuaW1wb3J0IG5leHRJMThOZXh0Q29uZmlnIGZyb20gJy4uL25leHQtaTE4bmV4dC5jb25maWcuanMnXHJcblxyXG5cclxuZnVuY3Rpb24gQ29udGVudFdyYXBwZXIoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xyXG4gIGNvbnN0IHsgdGhlbWUgfSA9IHVzZVRoZW1lKClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrJywgdGhlbWUgPT09ICdkYXJrJylcclxuICB9LCBbdGhlbWVdKVxyXG5cclxuICByZXR1cm4gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG59XHJcblxyXG5mdW5jdGlvbiBNeUFwcChwcm9wczogQXBwUHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFRoZW1lUHJvdmlkZXI+XHJcbiAgICAgIDxDb250ZW50V3JhcHBlciB7Li4ucHJvcHN9IC8+XHJcbiAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcHBXaXRoVHJhbnNsYXRpb24oTXlBcHAsIG5leHRJMThOZXh0Q29uZmlnKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIlRoZW1lUHJvdmlkZXIiLCJ1c2VUaGVtZSIsImFwcFdpdGhUcmFuc2xhdGlvbiIsIm5leHRJMThOZXh0Q29uZmlnIiwiQ29udGVudFdyYXBwZXIiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0aGVtZSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiTXlBcHAiLCJwcm9wcyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next-i18next":
/*!*******************************!*\
  !*** external "next-i18next" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(pages-dir-node)/./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();