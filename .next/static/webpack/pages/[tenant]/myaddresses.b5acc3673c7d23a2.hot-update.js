"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[tenant]/myaddresses",{

/***/ "./pages/[tenant]/myaddresses.tsx":
/*!****************************************!*\
  !*** ./pages/[tenant]/myaddresses.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_MyAddresses_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../styles/MyAddresses.module.css */ \"./styles/MyAddresses.module.css\");\n/* harmony import */ var _styles_MyAddresses_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_MyAddresses_module_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _contexts_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../contexts/auth */ \"./contexts/auth/index.tsx\");\n/* harmony import */ var _contexts_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../contexts/app */ \"./contexts/app/index.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Header */ \"./components/Header/index.tsx\");\n/* harmony import */ var _libs_useFormatter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../libs/useFormatter */ \"./libs/useFormatter.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Button */ \"./components/Button/index.tsx\");\n/* harmony import */ var _components_AddressItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/AddressItem */ \"./components/AddressItem/index.tsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar MyAddresses = function(data) {\n    _s();\n    var ref = (0,_contexts_auth__WEBPACK_IMPORTED_MODULE_1__.useAuthContext)(), setToken = ref.setToken, setUser = ref.setUser;\n    var ref1 = (0,_contexts_app__WEBPACK_IMPORTED_MODULE_2__.useAppContext)(), tenant = ref1.tenant, setTenant = ref1.setTenant;\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        setTenant(data.tenant);\n        setToken(data.token);\n        if (data.user) setUser(data.user);\n    }, []);\n    var formatter = (0,_libs_useFormatter__WEBPACK_IMPORTED_MODULE_6__.useFormatter)();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    var handleNewAddress = function() {\n        router.push(\"/\".concat(data.tenant.slug, \"/newaddress\"));\n    };\n    var handleAddressSelect = function(adress) {\n        console.log(\"selecionou o endere\\xe7o: \".concat(adress.street, \" \").concat(adress.number));\n    };\n    var handleAddressEdit = function(id) {};\n    var handleAddressDelete = function(id) {};\n    // Menu Events\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0), menuOpened = ref2[0], setMenuOpened = ref2[1];\n    var handleMenuEvent = function(event) {\n        var tagName = event.target.tagName;\n        console.log(tagName);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        window.removeEventListener(\"click\", handleMenuEvent);\n        window.addEventListener(\"click\", handleMenuEvent);\n        return function() {\n            return window.removeEventListener(\"click\", handleMenuEvent);\n        };\n    }, [\n        menuOpened\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_MyAddresses_module_css__WEBPACK_IMPORTED_MODULE_10___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: [\n                        \"Meus Endere\\xe7os | \",\n                        data.tenant.name\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\servidor\\\\htdocs\\\\aulas\\\\next\\\\delivery\\\\pages\\\\[tenant]\\\\myaddresses.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\servidor\\\\htdocs\\\\aulas\\\\next\\\\delivery\\\\pages\\\\[tenant]\\\\myaddresses.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_5__.Header, {\n                backHref: \"/\".concat(data.tenant.slug, \"/checkout\"),\n                color: data.tenant.mainColor,\n                title: \"Meus Endere\\xe7os\"\n            }, void 0, false, {\n                fileName: \"D:\\\\servidor\\\\htdocs\\\\aulas\\\\next\\\\delivery\\\\pages\\\\[tenant]\\\\myaddresses.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_MyAddresses_module_css__WEBPACK_IMPORTED_MODULE_10___default().list),\n                children: data.addresses.map(function(item, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AddressItem__WEBPACK_IMPORTED_MODULE_9__.AddressItem, {\n                        color: data.tenant.mainColor,\n                        address: item,\n                        onSelect: handleAddressSelect,\n                        onEdit: handleAddressEdit,\n                        onDelete: handleAddressDelete,\n                        menuOpened: menuOpened,\n                        setMenuOpened: setMenuOpened\n                    }, index, false, {\n                        fileName: \"D:\\\\servidor\\\\htdocs\\\\aulas\\\\next\\\\delivery\\\\pages\\\\[tenant]\\\\myaddresses.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\servidor\\\\htdocs\\\\aulas\\\\next\\\\delivery\\\\pages\\\\[tenant]\\\\myaddresses.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_MyAddresses_module_css__WEBPACK_IMPORTED_MODULE_10___default().btnArea),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                    color: data.tenant.mainColor,\n                    label: \"Novo Endere\\xe7o\",\n                    onClick: handleNewAddress,\n                    fill: true\n                }, void 0, false, {\n                    fileName: \"D:\\\\servidor\\\\htdocs\\\\aulas\\\\next\\\\delivery\\\\pages\\\\[tenant]\\\\myaddresses.tsx\",\n                    lineNumber: 95,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\servidor\\\\htdocs\\\\aulas\\\\next\\\\delivery\\\\pages\\\\[tenant]\\\\myaddresses.tsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\servidor\\\\htdocs\\\\aulas\\\\next\\\\delivery\\\\pages\\\\[tenant]\\\\myaddresses.tsx\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, _this);\n};\n_s(MyAddresses, \"aZxIGNOteepYsiN6a9S/1IPpgbU=\", false, function() {\n    return [\n        _contexts_auth__WEBPACK_IMPORTED_MODULE_1__.useAuthContext,\n        _contexts_app__WEBPACK_IMPORTED_MODULE_2__.useAppContext,\n        _libs_useFormatter__WEBPACK_IMPORTED_MODULE_6__.useFormatter,\n        next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter\n    ];\n});\n_c = MyAddresses;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyAddresses);\nvar _c;\n$RefreshReg$(_c, \"MyAddresses\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bdGVuYW50XS9teWFkZHJlc3Nlcy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBQXlEO0FBSUo7QUFDRjtBQUNQO0FBR2Y7QUFDb0I7QUFDTTtBQUNmO0FBQ1M7QUFFVTtBQUczRCxJQUFNVyxXQUFXLEdBQUcsU0FBQ0MsSUFBVyxFQUFLOztJQUNuQyxJQUE4QlgsR0FBZ0IsR0FBaEJBLDhEQUFjLEVBQUUsRUFBdENZLFFBQVEsR0FBY1osR0FBZ0IsQ0FBdENZLFFBQVEsRUFBRUMsT0FBTyxHQUFLYixHQUFnQixDQUE1QmEsT0FBTztJQUN6QixJQUE4QlosSUFBZSxHQUFmQSw0REFBYSxFQUFFLEVBQXJDYSxNQUFNLEdBQWdCYixJQUFlLENBQXJDYSxNQUFNLEVBQUVDLFNBQVMsR0FBS2QsSUFBZSxDQUE3QmMsU0FBUztJQUd6QmIsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RhLFNBQVMsQ0FBQ0osSUFBSSxDQUFDRyxNQUFNLENBQUMsQ0FBQztRQUN2QkYsUUFBUSxDQUFDRCxJQUFJLENBQUNLLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLElBQUlMLElBQUksQ0FBQ00sSUFBSSxFQUFFSixPQUFPLENBQUNGLElBQUksQ0FBQ00sSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsSUFBTUMsU0FBUyxHQUFHWixnRUFBWSxFQUFFO0lBRWhDLElBQU1hLE1BQU0sR0FBR1osc0RBQVMsRUFBRTtJQUUxQixJQUFNYSxnQkFBZ0IsR0FBRyxXQUFNO1FBQzdCRCxNQUFNLENBQUNFLElBQUksQ0FBQyxHQUFFLENBQW1CLE1BQVcsQ0FBNUJWLElBQUksQ0FBQ0csTUFBTSxDQUFDUSxJQUFJLEVBQUMsYUFBVyxDQUFDLENBQUM7SUFFaEQsQ0FBQztJQUVELElBQU1DLG1CQUFtQixHQUFHLFNBQUNDLE1BQWUsRUFBSztRQUMvQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsNEJBQXdCLENBQW1CRixNQUFhLENBQTlCQSxNQUFNLENBQUNHLE1BQU0sRUFBQyxHQUFDLENBQWdCLFFBQWRILE1BQU0sQ0FBQ0ksTUFBTSxDQUFFLENBQUM7SUFDekUsQ0FBQztJQUVELElBQU1DLGlCQUFpQixHQUFHLFNBQUNDLEVBQVUsRUFBSyxDQUUxQyxDQUFDO0lBRUQsSUFBTUMsbUJBQW1CLEdBQUcsU0FBQ0QsRUFBVSxFQUFLLENBRTVDLENBQUM7SUFHRCxjQUFjO0lBRWQsSUFBb0MzQixJQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEVBQXhDNkIsVUFBVSxHQUFtQjdCLElBQVcsR0FBOUIsRUFBRThCLGFBQWEsR0FBSTlCLElBQVcsR0FBZjtJQUVoQyxJQUFNK0IsZUFBZSxHQUFHLFNBQUNDLEtBQWlCLEVBQUs7UUFDN0MsSUFBTUMsT0FBTyxHQUFHLEtBQU0sQ0FBQ0MsTUFBTSxDQUFhRCxPQUFPO1FBQ2pEWCxPQUFPLENBQUNDLEdBQUcsQ0FBQ1UsT0FBTyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVEbEMsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RvQyxNQUFNLENBQUNDLG1CQUFtQixDQUFDLE9BQU8sRUFBRUwsZUFBZSxDQUFDLENBQUM7UUFDckRJLE1BQU0sQ0FBQ0UsZ0JBQWdCLENBQUMsT0FBTyxFQUFFTixlQUFlLENBQUMsQ0FBQztRQUNsRCxPQUFPO21CQUFNSSxNQUFNLENBQUNDLG1CQUFtQixDQUFDLE9BQU8sRUFBRUwsZUFBZSxDQUFDO1NBQUEsQ0FBQztJQUNwRSxDQUFDLEVBQUU7UUFBQ0YsVUFBVTtLQUFDLENBQUMsQ0FBQztJQUVqQixxQkFDRSw4REFBQ1MsS0FBRztRQUFDQyxTQUFTLEVBQUUzQyxrRkFBZ0I7OzBCQUM5Qiw4REFBQ0ssa0RBQUk7MEJBQ0gsNEVBQUN3QyxPQUFLOzt3QkFBQyxzQkFBaUI7d0JBQUNqQyxJQUFJLENBQUNHLE1BQU0sQ0FBQytCLElBQUk7Ozs7Ozt5QkFBUzs7Ozs7cUJBQzdDOzBCQUNQLDhEQUFDeEMsc0RBQU07Z0JBQ0x5QyxRQUFRLEVBQUUsR0FBRSxDQUFtQixNQUFTLENBQTFCbkMsSUFBSSxDQUFDRyxNQUFNLENBQUNRLElBQUksRUFBQyxXQUFTLENBQUM7Z0JBQ3pDeUIsS0FBSyxFQUFFcEMsSUFBSSxDQUFDRyxNQUFNLENBQUNrQyxTQUFTO2dCQUM1QkosS0FBSyxFQUFDLG1CQUFnQjs7Ozs7cUJBQ3RCOzBCQUVGLDhEQUFDSCxLQUFHO2dCQUFDQyxTQUFTLEVBQUUzQyw2RUFBVzswQkFDeEJZLElBQUksQ0FBQ3VDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBRUMsS0FBSzt5Q0FDOUIsOERBQUM1QyxnRUFBVzt3QkFFVnNDLEtBQUssRUFBRXBDLElBQUksQ0FBQ0csTUFBTSxDQUFDa0MsU0FBUzt3QkFDNUJNLE9BQU8sRUFBRUYsSUFBSTt3QkFDYkcsUUFBUSxFQUFFaEMsbUJBQW1CO3dCQUM3QmlDLE1BQU0sRUFBRTNCLGlCQUFpQjt3QkFDekI0QixRQUFRLEVBQUUxQixtQkFBbUI7d0JBQzdCQyxVQUFVLEVBQUVBLFVBQVU7d0JBQ3RCQyxhQUFhLEVBQUVBLGFBQWE7dUJBUHZCb0IsS0FBSzs7Ozs2QkFRVjtpQkFDSCxDQUFDOzs7OztxQkFFRTswQkFFTiw4REFBQ1osS0FBRztnQkFBQ0MsU0FBUyxFQUFFM0MsZ0ZBQWM7MEJBQzVCLDRFQUFDUyxzREFBTTtvQkFDTHVDLEtBQUssRUFBRXBDLElBQUksQ0FBQ0csTUFBTSxDQUFDa0MsU0FBUztvQkFDNUJXLEtBQUssRUFBQyxrQkFBZTtvQkFDckJDLE9BQU8sRUFBRXhDLGdCQUFnQjtvQkFDekJ5QyxJQUFJOzs7Ozt5QkFDSjs7Ozs7cUJBQ0U7Ozs7OzthQUVGLENBQ047QUFDSixDQUFDO0dBdEZLbkQsV0FBVzs7UUFDZVYsMERBQWM7UUFDZEMsd0RBQWE7UUFTekJLLDREQUFZO1FBRWZDLGtEQUFTOzs7QUFicEJHLEtBQUFBLFdBQVc7O0FBdUZqQiwrREFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1t0ZW5hbnRdL215YWRkcmVzc2VzLnRzeD9jNTFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL015QWRkcmVzc2VzLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IHsgVGVuYW50IH0gZnJvbSAnLi4vLi4vdHlwZXMvVGVuYW50JztcclxuaW1wb3J0IHsgdXNlQXBpIH0gZnJvbSAnLi4vLi4vbGlicy91c2VBcGknO1xyXG5pbXBvcnQgeyB1c2VBdXRoQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHRzL2F1dGgnO1xyXG5pbXBvcnQgeyB1c2VBcHBDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dHMvYXBwJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL3R5cGVzL1VzZXInO1xyXG5pbXBvcnQgeyBnZXRDb29raWUsIHNldENvb2tpZSB9IGZyb20gJ2Nvb2tpZXMtbmV4dCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSGVhZGVyJztcclxuaW1wb3J0IHsgdXNlRm9ybWF0dGVyIH0gZnJvbSAnLi4vLi4vbGlicy91c2VGb3JtYXR0ZXInO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQnV0dG9uJztcclxuaW1wb3J0IHsgQWRkcmVzcyB9IGZyb20gJy4uLy4uL3R5cGVzL0FkZHJlc3MnO1xyXG5pbXBvcnQgeyBBZGRyZXNzSXRlbSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQWRkcmVzc0l0ZW0nO1xyXG5cclxuXHJcbmNvbnN0IE15QWRkcmVzc2VzID0gKGRhdGE6IFByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBzZXRUb2tlbiwgc2V0VXNlciB9ID0gdXNlQXV0aENvbnRleHQoKTtcclxuICBjb25zdCB7IHRlbmFudCwgc2V0VGVuYW50IH0gPSB1c2VBcHBDb250ZXh0KCk7XHJcblxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0VGVuYW50KGRhdGEudGVuYW50KTtcclxuICAgIHNldFRva2VuKGRhdGEudG9rZW4pO1xyXG4gICAgaWYgKGRhdGEudXNlcikgc2V0VXNlcihkYXRhLnVzZXIpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgZm9ybWF0dGVyID0gdXNlRm9ybWF0dGVyKCk7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBoYW5kbGVOZXdBZGRyZXNzID0gKCkgPT4ge1xyXG4gICAgcm91dGVyLnB1c2goYC8ke2RhdGEudGVuYW50LnNsdWd9L25ld2FkZHJlc3NgKVxyXG5cclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFkZHJlc3NTZWxlY3QgPSAoYWRyZXNzOiBBZGRyZXNzKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhgc2VsZWNpb25vdSBvIGVuZGVyZcOnbzogJHthZHJlc3Muc3RyZWV0fSAke2FkcmVzcy5udW1iZXJ9YClcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFkZHJlc3NFZGl0ID0gKGlkOiBudW1iZXIpID0+IHtcclxuXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVBZGRyZXNzRGVsZXRlID0gKGlkOiBudW1iZXIpID0+IHtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgLy8gTWVudSBFdmVudHNcclxuXHJcbiAgY29uc3QgW21lbnVPcGVuZWQsIHNldE1lbnVPcGVuZWRdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1lbnVFdmVudCA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgY29uc3QgdGFnTmFtZSA9IChldmVudC50YXJnZXQgYXMgRWxlbWVudCkudGFnTmFtZTtcclxuICAgIGNvbnNvbGUubG9nKHRhZ05hbWUpO1xyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZU1lbnVFdmVudCk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVNZW51RXZlbnQpO1xyXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZU1lbnVFdmVudCk7XHJcbiAgfSwgW21lbnVPcGVuZWRdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPk1ldXMgRW5kZXJlw6dvcyB8IHtkYXRhLnRlbmFudC5uYW1lfTwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPEhlYWRlclxyXG4gICAgICAgIGJhY2tIcmVmPXtgLyR7ZGF0YS50ZW5hbnQuc2x1Z30vY2hlY2tvdXRgfVxyXG4gICAgICAgIGNvbG9yPXtkYXRhLnRlbmFudC5tYWluQ29sb3J9XHJcbiAgICAgICAgdGl0bGU9XCJNZXVzIEVuZGVyZcOnb3NcIlxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saXN0fT5cclxuICAgICAgICB7ZGF0YS5hZGRyZXNzZXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPEFkZHJlc3NJdGVtXHJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgIGNvbG9yPXtkYXRhLnRlbmFudC5tYWluQ29sb3J9XHJcbiAgICAgICAgICAgIGFkZHJlc3M9e2l0ZW19XHJcbiAgICAgICAgICAgIG9uU2VsZWN0PXtoYW5kbGVBZGRyZXNzU2VsZWN0fVxyXG4gICAgICAgICAgICBvbkVkaXQ9e2hhbmRsZUFkZHJlc3NFZGl0fVxyXG4gICAgICAgICAgICBvbkRlbGV0ZT17aGFuZGxlQWRkcmVzc0RlbGV0ZX1cclxuICAgICAgICAgICAgbWVudU9wZW5lZD17bWVudU9wZW5lZH1cclxuICAgICAgICAgICAgc2V0TWVudU9wZW5lZD17c2V0TWVudU9wZW5lZH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcblxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnRuQXJlYX0gPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIGNvbG9yPXtkYXRhLnRlbmFudC5tYWluQ29sb3J9XHJcbiAgICAgICAgICBsYWJlbD1cIk5vdm8gRW5kZXJlw6dvXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU5ld0FkZHJlc3N9XHJcbiAgICAgICAgICBmaWxsXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBNeUFkZHJlc3NlcztcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgdGVuYW50OiBUZW5hbnQ7XHJcbiAgdG9rZW46IHN0cmluZztcclxuICB1c2VyOiBVc2VyIHwgbnVsbDtcclxuICBhZGRyZXNzZXM6IEFkZHJlc3NbXVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IHsgdGVuYW50OiB0ZW5hbnRTbHVnIH0gPSBjb250ZXh0LnF1ZXJ5O1xyXG4gIGNvbnN0IGFwaSA9IHVzZUFwaSh0ZW5hbnRTbHVnIGFzIHN0cmluZyk7XHJcblxyXG4gIC8vIEdldCBUZW5hbnRcclxuXHJcbiAgY29uc3QgdGVuYW50ID0gYXdhaXQgYXBpLmdldFRlbmFudCgpO1xyXG4gIGlmICghdGVuYW50KSB7XHJcbiAgICByZXR1cm4geyByZWRpcmVjdDogeyBkZXN0aW5hdGlvbjogJy8nLCBwZXJtYW5lbnQ6IGZhbHNlIH0gfVxyXG4gIH1cclxuXHJcbiAgLy8gR2V0IExvZ2dlZCBVc2VyXHJcbiAgLy9jb25zdCB0b2tlbiA9IGNvbnRleHQucmVxLmNvb2tpZXMudG9rZW47IC8vIGZ1bmNpb25vdVxyXG4gIGNvbnN0IHRva2VuID0gZ2V0Q29va2llKCd0b2tlbicsIGNvbnRleHQpOyAvLyBmdW5jaW9ub3VcclxuICBjb25zdCB1c2VyID0gYXdhaXQgYXBpLmF1dGhvcml6ZVRva2VuKHRva2VuIGFzIHN0cmluZyk7XHJcblxyXG4gIGlmICghdXNlcikge1xyXG4gICAgcmV0dXJuIHsgcmVkaXJlY3Q6IHsgZGVzdGluYXRpb246ICcvbG9naW4nLCBwZXJtYW5lbnQ6IGZhbHNlIH0gfVxyXG4gIH1cclxuXHJcbiAgLy8gR2V0IEFkZHJlc3NlcyBmcm9tIExvZ2dlZCBVc2VyXHJcbiAgY29uc3QgYWRkcmVzc2VzID0gYXdhaXQgYXBpLmdldFVzZXJBZGRyZXNzZXModXNlci5lbWFpbCk7XHJcblxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgdGVuYW50LFxyXG4gICAgICB1c2VyLFxyXG4gICAgICB0b2tlbixcclxuICAgICAgYWRkcmVzc2VzXHJcbiAgICB9XHJcbiAgfVxyXG5cclxufSJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VBdXRoQ29udGV4dCIsInVzZUFwcENvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhlYWQiLCJIZWFkZXIiLCJ1c2VGb3JtYXR0ZXIiLCJ1c2VSb3V0ZXIiLCJCdXR0b24iLCJBZGRyZXNzSXRlbSIsIk15QWRkcmVzc2VzIiwiZGF0YSIsInNldFRva2VuIiwic2V0VXNlciIsInRlbmFudCIsInNldFRlbmFudCIsInRva2VuIiwidXNlciIsImZvcm1hdHRlciIsInJvdXRlciIsImhhbmRsZU5ld0FkZHJlc3MiLCJwdXNoIiwic2x1ZyIsImhhbmRsZUFkZHJlc3NTZWxlY3QiLCJhZHJlc3MiLCJjb25zb2xlIiwibG9nIiwic3RyZWV0IiwibnVtYmVyIiwiaGFuZGxlQWRkcmVzc0VkaXQiLCJpZCIsImhhbmRsZUFkZHJlc3NEZWxldGUiLCJtZW51T3BlbmVkIiwic2V0TWVudU9wZW5lZCIsImhhbmRsZU1lbnVFdmVudCIsImV2ZW50IiwidGFnTmFtZSIsInRhcmdldCIsIndpbmRvdyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwidGl0bGUiLCJuYW1lIiwiYmFja0hyZWYiLCJjb2xvciIsIm1haW5Db2xvciIsImxpc3QiLCJhZGRyZXNzZXMiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJhZGRyZXNzIiwib25TZWxlY3QiLCJvbkVkaXQiLCJvbkRlbGV0ZSIsImJ0bkFyZWEiLCJsYWJlbCIsIm9uQ2xpY2siLCJmaWxsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[tenant]/myaddresses.tsx\n"));

/***/ })

});