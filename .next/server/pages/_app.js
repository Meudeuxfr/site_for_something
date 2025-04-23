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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ThemeContext: () => (/* binding */ ThemeContext),\n/* harmony export */   ThemeProvider: () => (/* binding */ ThemeProvider),\n/* harmony export */   useTheme: () => (/* binding */ useTheme)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// Export ThemeContext\nconst ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nconst ThemeProvider = ({ children })=>{\n    const [theme, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('light');\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"ThemeProvider.useEffect\": ()=>{\n            const storedTheme = localStorage.getItem('theme');\n            if (storedTheme === 'light' || storedTheme === 'dark') {\n                setTheme(storedTheme);\n            } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {\n                setTheme('dark');\n            }\n        }\n    }[\"ThemeProvider.useEffect\"], []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"ThemeProvider.useEffect\": ()=>{\n            if (theme === 'dark') {\n                document.documentElement.classList.add('dark');\n            } else {\n                document.documentElement.classList.remove('dark');\n            }\n            localStorage.setItem('theme', theme);\n        }\n    }[\"ThemeProvider.useEffect\"], [\n        theme\n    ]);\n    const toggleTheme = ()=>{\n        setTheme(theme === 'dark' ? 'light' : 'dark');\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ThemeContext.Provider, {\n        value: {\n            theme,\n            setTheme,\n            toggleTheme\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Miguel Gomes\\\\Documents\\\\Site\\\\site_for_something\\\\context\\\\ThemeContext.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\nconst useTheme = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ThemeContext);\n    if (!context) {\n        throw new Error('useTheme must be used within a ThemeProvider');\n    }\n    return context;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbnRleHQvVGhlbWVDb250ZXh0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFrRjtBQVVsRixzQkFBc0I7QUFDZixNQUFNSSw2QkFBZUosb0RBQWFBLENBQStCSyxXQUFXO0FBRTVFLE1BQU1DLGdCQUFnQixDQUFDLEVBQUVDLFFBQVEsRUFBMkI7SUFDakUsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQSxDQUFRO0lBRTFDQyxnREFBU0E7bUNBQUM7WUFDUixNQUFNTyxjQUFjQyxhQUFhQyxPQUFPLENBQUM7WUFDekMsSUFBSUYsZ0JBQWdCLFdBQVdBLGdCQUFnQixRQUFRO2dCQUNyREQsU0FBU0M7WUFDWCxPQUFPLElBQUlHLE9BQU9DLFVBQVUsQ0FBQyxnQ0FBZ0NDLE9BQU8sRUFBRTtnQkFDcEVOLFNBQVM7WUFDWDtRQUNGO2tDQUFHLEVBQUU7SUFFTE4sZ0RBQVNBO21DQUFDO1lBQ1IsSUFBSUssVUFBVSxRQUFRO2dCQUNwQlEsU0FBU0MsZUFBZSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQztZQUN6QyxPQUFPO2dCQUNMSCxTQUFTQyxlQUFlLENBQUNDLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDO1lBQzVDO1lBQ0FULGFBQWFVLE9BQU8sQ0FBQyxTQUFTYjtRQUNoQztrQ0FBRztRQUFDQTtLQUFNO0lBRVYsTUFBTWMsY0FBYztRQUNsQmIsU0FBU0QsVUFBVSxTQUFTLFVBQVU7SUFDeEM7SUFFQSxxQkFDRSw4REFBQ0osYUFBYW1CLFFBQVE7UUFBQ0MsT0FBTztZQUFFaEI7WUFBT0M7WUFBVWE7UUFBWTtrQkFDMURmOzs7Ozs7QUFHUCxFQUFFO0FBRUssTUFBTWtCLFdBQVc7SUFDdEIsTUFBTUMsVUFBVXpCLGlEQUFVQSxDQUFDRztJQUMzQixJQUFJLENBQUNzQixTQUFTO1FBQ1osTUFBTSxJQUFJQyxNQUFNO0lBQ2xCO0lBQ0EsT0FBT0Q7QUFDVCxFQUFFIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXE1pZ3VlbCBHb21lc1xcRG9jdW1lbnRzXFxTaXRlXFxzaXRlX2Zvcl9zb21ldGhpbmdcXGNvbnRleHRcXFRoZW1lQ29udGV4dC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUsIFJlYWN0Tm9kZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxudHlwZSBUaGVtZSA9ICdsaWdodCcgfCAnZGFyayc7XHJcblxyXG5pbnRlcmZhY2UgVGhlbWVDb250ZXh0VHlwZSB7XHJcbiAgdGhlbWU6IFRoZW1lO1xyXG4gIHNldFRoZW1lOiAodGhlbWU6IFRoZW1lKSA9PiB2b2lkO1xyXG4gIHRvZ2dsZVRoZW1lOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG4vLyBFeHBvcnQgVGhlbWVDb250ZXh0XHJcbmV4cG9ydCBjb25zdCBUaGVtZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0PFRoZW1lQ29udGV4dFR5cGUgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XHJcblxyXG5leHBvcnQgY29uc3QgVGhlbWVQcm92aWRlciA9ICh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0Tm9kZSB9KSA9PiB7XHJcbiAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZTxUaGVtZT4oJ2xpZ2h0Jyk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZWRUaGVtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpO1xyXG4gICAgaWYgKHN0b3JlZFRoZW1lID09PSAnbGlnaHQnIHx8IHN0b3JlZFRoZW1lID09PSAnZGFyaycpIHtcclxuICAgICAgc2V0VGhlbWUoc3RvcmVkVGhlbWUpO1xyXG4gICAgfSBlbHNlIGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLm1hdGNoZXMpIHtcclxuICAgICAgc2V0VGhlbWUoJ2RhcmsnKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodGhlbWUgPT09ICdkYXJrJykge1xyXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZGFyaycpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmsnKTtcclxuICAgIH1cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsIHRoZW1lKTtcclxuICB9LCBbdGhlbWVdKTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlVGhlbWUgPSAoKSA9PiB7XHJcbiAgICBzZXRUaGVtZSh0aGVtZSA9PT0gJ2RhcmsnID8gJ2xpZ2h0JyA6ICdkYXJrJyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxUaGVtZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdGhlbWUsIHNldFRoZW1lLCB0b2dnbGVUaGVtZSB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9UaGVtZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VUaGVtZSA9ICgpOiBUaGVtZUNvbnRleHRUeXBlID0+IHtcclxuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xyXG4gIGlmICghY29udGV4dCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCd1c2VUaGVtZSBtdXN0IGJlIHVzZWQgd2l0aGluIGEgVGhlbWVQcm92aWRlcicpO1xyXG4gIH1cclxuICByZXR1cm4gY29udGV4dDtcclxufTsiXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlRoZW1lQ29udGV4dCIsInVuZGVmaW5lZCIsIlRoZW1lUHJvdmlkZXIiLCJjaGlsZHJlbiIsInRoZW1lIiwic2V0VGhlbWUiLCJzdG9yZWRUaGVtZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwic2V0SXRlbSIsInRvZ2dsZVRoZW1lIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZVRoZW1lIiwiY29udGV4dCIsIkVycm9yIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./context/ThemeContext.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./i18n.js":
/*!*****************!*\
  !*** ./i18n.js ***!
  \*****************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18next */ \"i18next\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ \"react-i18next\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([i18next__WEBPACK_IMPORTED_MODULE_0__, react_i18next__WEBPACK_IMPORTED_MODULE_1__]);\n([i18next__WEBPACK_IMPORTED_MODULE_0__, react_i18next__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst resources = {\n    en: {\n        translation: {\n            welcome: 'Welcome to Our Restaurant',\n            reserve: 'Reserve your table with ease',\n            book_now: 'Book Now'\n        }\n    },\n    pt: {\n        translation: {\n            welcome: 'Bem-vindo ao Nosso Restaurante',\n            reserve: 'Reserve sua mesa com facilidade',\n            book_now: 'Reserve Agora'\n        }\n    }\n};\ni18next__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(react_i18next__WEBPACK_IMPORTED_MODULE_1__.initReactI18next).init({\n    resources,\n    lng: 'en',\n    interpolation: {\n        escapeValue: false\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (i18next__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2kxOG4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTJCO0FBQ3NCO0FBRWpELE1BQU1FLFlBQVk7SUFDZEMsSUFBSTtRQUNGQyxhQUFhO1lBQ1hDLFNBQVM7WUFDVEMsU0FBUztZQUNUQyxVQUFVO1FBQ1o7SUFDRjtJQUNBQyxJQUFJO1FBQ0ZKLGFBQWE7WUFDWEMsU0FBUztZQUNUQyxTQUFTO1lBQ1RDLFVBQVU7UUFDWjtJQUNGO0FBQ0Y7QUFFRlAsbURBQVEsQ0FBQ0MsMkRBQWdCQSxFQUFFUyxJQUFJLENBQUM7SUFDOUJSO0lBQ0FTLEtBQUs7SUFDTEMsZUFBZTtRQUNiQyxhQUFhO0lBQ2Y7QUFDRjtBQUVBLGlFQUFlYiwrQ0FBSUEsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxNaWd1ZWwgR29tZXNcXERvY3VtZW50c1xcU2l0ZVxcc2l0ZV9mb3Jfc29tZXRoaW5nXFxpMThuLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpMThuIGZyb20gJ2kxOG5leHQnO1xyXG5pbXBvcnQgeyBpbml0UmVhY3RJMThuZXh0IH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XHJcblxyXG5jb25zdCByZXNvdXJjZXMgPSB7XHJcbiAgICBlbjoge1xyXG4gICAgICB0cmFuc2xhdGlvbjoge1xyXG4gICAgICAgIHdlbGNvbWU6ICdXZWxjb21lIHRvIE91ciBSZXN0YXVyYW50JyxcclxuICAgICAgICByZXNlcnZlOiAnUmVzZXJ2ZSB5b3VyIHRhYmxlIHdpdGggZWFzZScsXHJcbiAgICAgICAgYm9va19ub3c6ICdCb29rIE5vdydcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHB0OiB7XHJcbiAgICAgIHRyYW5zbGF0aW9uOiB7XHJcbiAgICAgICAgd2VsY29tZTogJ0JlbS12aW5kbyBhbyBOb3NzbyBSZXN0YXVyYW50ZScsXHJcbiAgICAgICAgcmVzZXJ2ZTogJ1Jlc2VydmUgc3VhIG1lc2EgY29tIGZhY2lsaWRhZGUnLFxyXG4gICAgICAgIGJvb2tfbm93OiAnUmVzZXJ2ZSBBZ29yYSdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG5pMThuLnVzZShpbml0UmVhY3RJMThuZXh0KS5pbml0KHtcclxuICByZXNvdXJjZXMsXHJcbiAgbG5nOiAnZW4nLFxyXG4gIGludGVycG9sYXRpb246IHtcclxuICAgIGVzY2FwZVZhbHVlOiBmYWxzZSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGkxOG47Il0sIm5hbWVzIjpbImkxOG4iLCJpbml0UmVhY3RJMThuZXh0IiwicmVzb3VyY2VzIiwiZW4iLCJ0cmFuc2xhdGlvbiIsIndlbGNvbWUiLCJyZXNlcnZlIiwiYm9va19ub3ciLCJwdCIsInVzZSIsImluaXQiLCJsbmciLCJpbnRlcnBvbGF0aW9uIiwiZXNjYXBlVmFsdWUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./i18n.js\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"(pages-dir-node)/./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_ThemeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/ThemeContext */ \"(pages-dir-node)/./context/ThemeContext.tsx\");\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../i18n */ \"(pages-dir-node)/./i18n.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_i18n__WEBPACK_IMPORTED_MODULE_4__]);\n_i18n__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nfunction ContentWrapper({ Component, pageProps }) {\n    const { theme } = (0,_context_ThemeContext__WEBPACK_IMPORTED_MODULE_3__.useTheme)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"ContentWrapper.useEffect\": ()=>{\n            document.documentElement.classList.toggle('dark', theme === 'dark');\n        }\n    }[\"ContentWrapper.useEffect\"], [\n        theme\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Miguel Gomes\\\\Documents\\\\Site\\\\site_for_something\\\\pages\\\\_app.tsx\",\n        lineNumber: 16,\n        columnNumber: 10\n    }, this);\n}\nfunction MyApp(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_ThemeContext__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentWrapper, {\n            ...props\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Miguel Gomes\\\\Documents\\\\Site\\\\site_for_something\\\\pages\\\\_app.tsx\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Miguel Gomes\\\\Documents\\\\Site\\\\site_for_something\\\\pages\\\\_app.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDK0I7QUFDTDtBQUN3QztBQUVqRDtBQUNpQjtBQUVsQyxTQUFTSSxlQUFlLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZO0lBQ3hELE1BQU0sRUFBRUMsS0FBSyxFQUFFLEdBQUdMLCtEQUFRQTtJQUUxQkMsZ0RBQVNBO29DQUFDO1lBQ1JLLFNBQVNDLGVBQWUsQ0FBQ0MsU0FBUyxDQUFDQyxNQUFNLENBQUMsUUFBUUosVUFBVTtRQUM5RDttQ0FBRztRQUFDQTtLQUFNO0lBRVYscUJBQU8sOERBQUNGO1FBQVcsR0FBR0MsU0FBUzs7Ozs7O0FBQ2pDO0FBRWUsU0FBU00sTUFBTUMsS0FBZTtJQUMzQyxxQkFDRSw4REFBQ1osZ0VBQWFBO2tCQUNaLDRFQUFDRztZQUFnQixHQUFHUyxLQUFLOzs7Ozs7Ozs7OztBQUcvQiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxNaWd1ZWwgR29tZXNcXERvY3VtZW50c1xcU2l0ZVxcc2l0ZV9mb3Jfc29tZXRoaW5nXFxwYWdlc1xcX2FwcC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciwgdXNlVGhlbWUgfSBmcm9tICcuLi9jb250ZXh0L1RoZW1lQ29udGV4dCc7XHJcbmltcG9ydCB7IGFwcFdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ25leHQtaTE4bmV4dCc7XHJcbmltcG9ydCAnLi4vaTE4bic7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIENvbnRlbnRXcmFwcGVyKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcclxuICBjb25zdCB7IHRoZW1lIH0gPSB1c2VUaGVtZSgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2RhcmsnLCB0aGVtZSA9PT0gJ2RhcmsnKTtcclxuICB9LCBbdGhlbWVdKTtcclxuXHJcbiAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHByb3BzOiBBcHBQcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8VGhlbWVQcm92aWRlcj5cclxuICAgICAgPENvbnRlbnRXcmFwcGVyIHsuLi5wcm9wc30gLz5cclxuICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlRoZW1lUHJvdmlkZXIiLCJ1c2VUaGVtZSIsInVzZUVmZmVjdCIsIkNvbnRlbnRXcmFwcGVyIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidGhlbWUiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsIk15QXBwIiwicHJvcHMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "i18next":
/*!**************************!*\
  !*** external "i18next" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = import("i18next");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-i18next":
/*!********************************!*\
  !*** external "react-i18next" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-i18next");;

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