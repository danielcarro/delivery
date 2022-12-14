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

/***/ "./contexts/app/hook.ts":
/*!******************************!*\
  !*** ./contexts/app/hook.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useAppContext\": () => (/* binding */ useAppContext)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ \"./contexts/app/index.tsx\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ \"./contexts/app/types.ts\");\n\n\n\nconst useAppContext = ()=>{\n    const { state , dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(___WEBPACK_IMPORTED_MODULE_1__.AppContext);\n    return {\n        ...state,\n        setTenant: (tenant)=>{\n            dispatch({\n                type: _types__WEBPACK_IMPORTED_MODULE_2__.Actions.SET_TENAT,\n                payload: {\n                    tenant\n                }\n            });\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9hcHAvaG9vay50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFrQztBQUNKO0FBRUk7QUFFM0IsTUFBTUcsYUFBYSxHQUFHLElBQU07SUFDOUIsTUFBTSxFQUFFQyxLQUFLLEdBQUVDLFFBQVEsR0FBRSxHQUFHTCxpREFBVSxDQUFDQyx5Q0FBVSxDQUFDO0lBRWxELE9BQU87UUFDSixHQUFHRyxLQUFLO1FBQ1JFLFNBQVMsRUFBRSxDQUFDQyxNQUFjLEdBQUs7WUFDM0JGLFFBQVEsQ0FBQztnQkFDTEcsSUFBSSxFQUFFTixxREFBaUI7Z0JBQ3ZCUSxPQUFPLEVBQUU7b0JBQUVILE1BQU07aUJBQUM7YUFDckIsQ0FBQztRQUNOLENBQUM7S0FDSDtBQUNOLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZWxpdmVyeS8uL2NvbnRleHRzL2FwcC9ob29rLnRzPzIzOWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IEFwcENvbnRleHQgfSBmcm9tIFwiLlwiXHJcbmltcG9ydCB7IFRlbmFudCB9IGZyb20gXCIuLi8uLi90eXBlcy9UZW5hbnRcIjtcclxuaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gXCIuL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQXBwQ29udGV4dCA9ICgpID0+IHtcclxuICAgICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcclxuXHJcbiAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBzZXRUZW5hbnQ6ICh0ZW5hbnQ6IFRlbmFudCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBBY3Rpb25zLlNFVF9URU5BVCxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHsgdGVuYW50fVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICB9XHJcbn0iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsIkFwcENvbnRleHQiLCJBY3Rpb25zIiwidXNlQXBwQ29udGV4dCIsInN0YXRlIiwiZGlzcGF0Y2giLCJzZXRUZW5hbnQiLCJ0ZW5hbnQiLCJ0eXBlIiwiU0VUX1RFTkFUIiwicGF5bG9hZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./contexts/app/hook.ts\n");

/***/ }),

/***/ "./contexts/app/index.tsx":
/*!********************************!*\
  !*** ./contexts/app/index.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AppContext\": () => (/* binding */ AppContext),\n/* harmony export */   \"Provider\": () => (/* binding */ Provider),\n/* harmony export */   \"useAppContext\": () => (/* reexport safe */ _hook__WEBPACK_IMPORTED_MODULE_3__.useAppContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer */ \"./contexts/app/reducer.ts\");\n/* harmony import */ var _hook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hook */ \"./contexts/app/hook.ts\");\n\n\n\n\nconst InitialState = {\n    tenant: null\n};\nconst AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    state: InitialState,\n    dispatch: ()=>{}\n});\nconst Provider = ({ children  })=>{\n    const { 0: state , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_reducer__WEBPACK_IMPORTED_MODULE_2__.reducer, InitialState);\n    const value = {\n        state,\n        dispatch\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\servidor\\\\htdocs\\\\aulas\\\\next\\\\delivery\\\\contexts\\\\app\\\\index.tsx\",\n        lineNumber: 20,\n        columnNumber: 1\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9hcHAvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQWtEO0FBRWQ7QUFFRztBQUV2QyxNQUFNSSxZQUFZLEdBQWE7SUFDM0JDLE1BQU0sRUFBRSxJQUFJO0NBQ2Y7QUFFTSxNQUFNQyxVQUFVLGlCQUFHTixvREFBYSxDQUFjO0lBQ2pETyxLQUFLLEVBQUVILFlBQVk7SUFDbkJJLFFBQVEsRUFBRSxJQUFNLENBQUMsQ0FBQztDQUNyQixDQUFDLENBQUM7QUFFSSxNQUFNQyxRQUFRLEdBQUcsQ0FBQyxFQUFFQyxRQUFRLEdBQWdCLEdBQUk7SUFDbkQsTUFBTSxLQUFDSCxLQUFLLE1BQUVDLFFBQVEsTUFBSVAsaURBQVUsQ0FBQ0MsNkNBQU8sRUFBRUUsWUFBWSxDQUFDO0lBQzNELE1BQU1PLEtBQUssR0FBRztRQUFFSixLQUFLO1FBQUVDLFFBQVE7S0FBQztJQUNwQyxxQkFDQSw4REFBQ0YsVUFBVSxDQUFDRyxRQUFRO1FBQUNFLEtBQUssRUFBRUEsS0FBSztrQkFDNUJELFFBQVE7Ozs7O2lCQUNTLENBQ3BCO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbGl2ZXJ5Ly4vY29udGV4dHMvYXBwL2luZGV4LnRzeD84MDViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbnRleHRUeXBlLCBEYXRhVHlwZSwgUHJvdmlkZXJUeXBlIH0gZnJvbSAnLi90eXBlcyc7XHJcbmltcG9ydCB7IHJlZHVjZXIgfSBmcm9tICcuL3JlZHVjZXInO1xyXG5cclxuZXhwb3J0IHsgdXNlQXBwQ29udGV4dCB9IGZyb20gJy4vaG9vayc7XHJcblxyXG5jb25zdCBJbml0aWFsU3RhdGU6IERhdGFUeXBlID0ge1xyXG4gICAgdGVuYW50OiBudWxsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBcHBDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxDb250ZXh0VHlwZT4oe1xyXG4gICAgc3RhdGU6IEluaXRpYWxTdGF0ZSxcclxuICAgIGRpc3BhdGNoOiAoKSA9PiB7fVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm92aWRlciA9ICh7IGNoaWxkcmVuIH06IFByb3ZpZGVyVHlwZSkgPT57XHJcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgSW5pdGlhbFN0YXRlKTtcclxuICAgIGNvbnN0IHZhbHVlID0geyBzdGF0ZSwgZGlzcGF0Y2h9O1xyXG5yZXR1cm4gKFxyXG48QXBwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PlxyXG4gICAge2NoaWxkcmVufVxyXG48L0FwcENvbnRleHQuUHJvdmlkZXI+XHJcbik7XHJcbn0iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVJlZHVjZXIiLCJyZWR1Y2VyIiwidXNlQXBwQ29udGV4dCIsIkluaXRpYWxTdGF0ZSIsInRlbmFudCIsIkFwcENvbnRleHQiLCJzdGF0ZSIsImRpc3BhdGNoIiwiUHJvdmlkZXIiLCJjaGlsZHJlbiIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contexts/app/index.tsx\n");

/***/ }),

/***/ "./contexts/app/reducer.ts":
/*!*********************************!*\
  !*** ./contexts/app/reducer.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reducer\": () => (/* binding */ reducer)\n/* harmony export */ });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ \"./contexts/app/types.ts\");\n\nconst reducer = (state, action)=>{\n    switch(action.type){\n        case _types__WEBPACK_IMPORTED_MODULE_0__.Actions.SET_TENAT:\n            return {\n                ...state,\n                tenant: action.payload.tenant\n            };\n            break;\n        default:\n            return state;\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9hcHAvcmVkdWNlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF3RDtBQUVqRCxNQUFNQyxPQUFPLEdBQUcsQ0FBQ0MsS0FBZSxFQUFFQyxNQUFrQixHQUFLO0lBQzVELE9BQVFBLE1BQU0sQ0FBQ0MsSUFBSTtRQUNmLEtBQUtKLHFEQUFpQjtZQUNsQixPQUFPO2dCQUFFLEdBQUdFLEtBQUs7Z0JBQUVJLE1BQU0sRUFBRUgsTUFBTSxDQUFDSSxPQUFPLENBQUNELE1BQU07YUFBRSxDQUFDO1lBQ25ELE1BQU07UUFDTjtZQUFTLE9BQU9KLEtBQUssQ0FBQztLQUM3QjtBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZWxpdmVyeS8uL2NvbnRleHRzL2FwcC9yZWR1Y2VyLnRzPzE2MjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVR5cGUsIEFjdGlvblR5cGUsIEFjdGlvbnMgfSBmcm9tICcuL3R5cGVzJztcclxuXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VyID0gKHN0YXRlOiBEYXRhVHlwZSwgYWN0aW9uOiBBY3Rpb25UeXBlKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBBY3Rpb25zLlNFVF9URU5BVDpcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHRlbmFudDogYWN0aW9uLnBheWxvYWQudGVuYW50IH07XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiQWN0aW9ucyIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJTRVRfVEVOQVQiLCJ0ZW5hbnQiLCJwYXlsb2FkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contexts/app/reducer.ts\n");

/***/ }),

/***/ "./contexts/app/types.ts":
/*!*******************************!*\
  !*** ./contexts/app/types.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Actions\": () => (/* binding */ Actions)\n/* harmony export */ });\nvar Actions;\n(function(Actions) {\n    Actions[Actions[\"SET_TENAT\"] = 0] = \"SET_TENAT\";\n})(Actions || (Actions = {}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9hcHAvdHlwZXMudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLElBcUJPLE9BRU47VUFGV0EsT0FBTztJQUFQQSxPQUFPLENBQVBBLE9BQU8sQ0FDZkMsV0FBUyxJQUFUQSxDQUFTLElBQVRBLFdBQVM7R0FEREQsT0FBTyxLQUFQQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVsaXZlcnkvLi9jb250ZXh0cy9hcHAvdHlwZXMudHM/ZTFiZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXNwYXRjaCwgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFRlbmFudCB9IGZyb20gXCIuLi8uLi90eXBlcy9UZW5hbnRcIjtcclxuXHJcbmV4cG9ydCB0eXBlIERhdGFUeXBlID0ge1xyXG4gICAgdGVuYW50OiBUZW5hbnQgfCBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBBY3Rpb25UeXBlID0ge1xyXG50eXBlOiBBY3Rpb25zO1xyXG5wYXlsb2FkPzogYW55O1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBDb250ZXh0VHlwZSA9IHtcclxuICAgIHN0YXRlOiBEYXRhVHlwZTtcclxuICAgIGRpc3BhdGNoOiBEaXNwYXRjaDxBY3Rpb25UeXBlPjtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgUHJvdmlkZXJUeXBlID0ge1xyXG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBBY3Rpb25zIHtcclxuICAgIFNFVF9URU5BVFxyXG59Il0sIm5hbWVzIjpbIkFjdGlvbnMiLCJTRVRfVEVOQVQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./contexts/app/types.ts\n");

/***/ }),

/***/ "./contexts/auth/hook.ts":
/*!*******************************!*\
  !*** ./contexts/auth/hook.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useAuthContext\": () => (/* binding */ useAuthContext)\n/* harmony export */ });\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookies-next */ \"cookies-next\");\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ \"./contexts/auth/index.tsx\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ \"./contexts/auth/types.ts\");\n\n\n\n\nconst useAuthContext = ()=>{\n    const { state , dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(___WEBPACK_IMPORTED_MODULE_2__.AppContext);\n    return {\n        ...state,\n        setToken: (token)=>{\n            (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.setCookie)(\"token\", token);\n            dispatch({\n                type: _types__WEBPACK_IMPORTED_MODULE_3__.Actions.SET_TOKEN,\n                payload: {\n                    token\n                }\n            });\n        },\n        setUser: (user)=>{\n            dispatch({\n                type: _types__WEBPACK_IMPORTED_MODULE_3__.Actions.SET_USER,\n                payload: {\n                    user\n                }\n            });\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9hdXRoL2hvb2sudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF5QztBQUNQO0FBQ0o7QUFFSTtBQUUzQixNQUFNSSxjQUFjLEdBQUcsSUFBTTtJQUNoQyxNQUFNLEVBQUVDLEtBQUssR0FBRUMsUUFBUSxHQUFFLEdBQUdMLGlEQUFVLENBQUNDLHlDQUFVLENBQUM7SUFFbEQsT0FBTztRQUNILEdBQUdHLEtBQUs7UUFDUkUsUUFBUSxFQUFFLENBQUNDLEtBQWEsR0FBSztZQUN6QlIsdURBQVMsQ0FBQyxPQUFPLEVBQUVRLEtBQUssQ0FBQyxDQUFDO1lBQzFCRixRQUFRLENBQUM7Z0JBQ0xHLElBQUksRUFBRU4scURBQWlCO2dCQUN2QlEsT0FBTyxFQUFFO29CQUFFSCxLQUFLO2lCQUFFO2FBQ3JCLENBQUMsQ0FBQztRQUNQLENBQUM7UUFDREksT0FBTyxFQUFFLENBQUNDLElBQWlCLEdBQUs7WUFDNUJQLFFBQVEsQ0FBQztnQkFDTEcsSUFBSSxFQUFFTixvREFBZ0I7Z0JBQ3RCUSxPQUFPLEVBQUU7b0JBQUVFLElBQUk7aUJBQUU7YUFDcEIsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztLQUNKO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbGl2ZXJ5Ly4vY29udGV4dHMvYXV0aC9ob29rLnRzP2M4ZjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2V0Q29va2llIH0gZnJvbSBcImNvb2tpZXMtbmV4dFwiO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgQXBwQ29udGV4dCB9IGZyb20gXCIuXCJcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8uLi90eXBlcy9Vc2VyXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMgfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUF1dGhDb250ZXh0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBzZXRUb2tlbjogKHRva2VuOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgc2V0Q29va2llKCd0b2tlbicsIHRva2VuKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogQWN0aW9ucy5TRVRfVE9LRU4sXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7IHRva2VuIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRVc2VyOiAodXNlcjogVXNlciB8IG51bGwpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogQWN0aW9ucy5TRVRfVVNFUixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHsgdXNlciB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJzZXRDb29raWUiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsIkFjdGlvbnMiLCJ1c2VBdXRoQ29udGV4dCIsInN0YXRlIiwiZGlzcGF0Y2giLCJzZXRUb2tlbiIsInRva2VuIiwidHlwZSIsIlNFVF9UT0tFTiIsInBheWxvYWQiLCJzZXRVc2VyIiwidXNlciIsIlNFVF9VU0VSIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contexts/auth/hook.ts\n");

/***/ }),

/***/ "./contexts/auth/index.tsx":
/*!*********************************!*\
  !*** ./contexts/auth/index.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AppContext\": () => (/* binding */ AppContext),\n/* harmony export */   \"Provider\": () => (/* binding */ Provider),\n/* harmony export */   \"useAuthContext\": () => (/* reexport safe */ _hook__WEBPACK_IMPORTED_MODULE_3__.useAuthContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer */ \"./contexts/auth/reducer.ts\");\n/* harmony import */ var _hook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hook */ \"./contexts/auth/hook.ts\");\n\n\n\n\nconst InitialState = {\n    token: \"\",\n    user: null\n};\nconst AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    state: InitialState,\n    dispatch: ()=>{}\n});\nconst Provider = ({ children  })=>{\n    const { 0: state , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_reducer__WEBPACK_IMPORTED_MODULE_2__.reducer, InitialState);\n    const value = {\n        state,\n        dispatch\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\servidor\\\\htdocs\\\\aulas\\\\next\\\\delivery\\\\contexts\\\\auth\\\\index.tsx\",\n        lineNumber: 21,\n        columnNumber: 1\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9hdXRoL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUFrRDtBQUVkO0FBRUk7QUFFeEMsTUFBTUksWUFBWSxHQUFhO0lBQzNCQyxLQUFLLEVBQUUsRUFBRTtJQUNUQyxJQUFJLEVBQUUsSUFBSTtDQUNiO0FBRU0sTUFBTUMsVUFBVSxpQkFBR1Asb0RBQWEsQ0FBYztJQUNqRFEsS0FBSyxFQUFFSixZQUFZO0lBQ25CSyxRQUFRLEVBQUUsSUFBTSxDQUFDLENBQUM7Q0FDckIsQ0FBQyxDQUFDO0FBRUksTUFBTUMsUUFBUSxHQUFHLENBQUMsRUFBRUMsUUFBUSxHQUFnQixHQUFJO0lBQ25ELE1BQU0sS0FBQ0gsS0FBSyxNQUFFQyxRQUFRLE1BQUlSLGlEQUFVLENBQUNDLDZDQUFPLEVBQUVFLFlBQVksQ0FBQztJQUMzRCxNQUFNUSxLQUFLLEdBQUc7UUFBRUosS0FBSztRQUFFQyxRQUFRO0tBQUM7SUFDcEMscUJBQ0EsOERBQUNGLFVBQVUsQ0FBQ0csUUFBUTtRQUFDRSxLQUFLLEVBQUVBLEtBQUs7a0JBQzVCRCxRQUFROzs7OztpQkFDUyxDQUNwQjtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZWxpdmVyeS8uL2NvbnRleHRzL2F1dGgvaW5kZXgudHN4P2FlYTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29udGV4dFR5cGUsIERhdGFUeXBlLCBQcm92aWRlclR5cGUgfSBmcm9tICcuL3R5cGVzJztcclxuaW1wb3J0IHsgcmVkdWNlciB9IGZyb20gJy4vcmVkdWNlcic7XHJcblxyXG5leHBvcnQgeyB1c2VBdXRoQ29udGV4dCB9IGZyb20gJy4vaG9vayc7XHJcblxyXG5jb25zdCBJbml0aWFsU3RhdGU6IERhdGFUeXBlID0ge1xyXG4gICAgdG9rZW46ICcnLFxyXG4gICAgdXNlcjogbnVsbFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQXBwQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8Q29udGV4dFR5cGU+KHtcclxuICAgIHN0YXRlOiBJbml0aWFsU3RhdGUsXHJcbiAgICBkaXNwYXRjaDogKCkgPT4ge31cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9OiBQcm92aWRlclR5cGUpID0+e1xyXG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIEluaXRpYWxTdGF0ZSk7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHsgc3RhdGUsIGRpc3BhdGNofTtcclxucmV0dXJuIChcclxuPEFwcENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT5cclxuICAgIHtjaGlsZHJlbn1cclxuPC9BcHBDb250ZXh0LlByb3ZpZGVyPlxyXG4pO1xyXG59Il0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VSZWR1Y2VyIiwicmVkdWNlciIsInVzZUF1dGhDb250ZXh0IiwiSW5pdGlhbFN0YXRlIiwidG9rZW4iLCJ1c2VyIiwiQXBwQ29udGV4dCIsInN0YXRlIiwiZGlzcGF0Y2giLCJQcm92aWRlciIsImNoaWxkcmVuIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./contexts/auth/index.tsx\n");

/***/ }),

/***/ "./contexts/auth/reducer.ts":
/*!**********************************!*\
  !*** ./contexts/auth/reducer.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reducer\": () => (/* binding */ reducer)\n/* harmony export */ });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ \"./contexts/auth/types.ts\");\n\nconst reducer = (state, action)=>{\n    switch(action.type){\n        case _types__WEBPACK_IMPORTED_MODULE_0__.Actions.SET_TOKEN:\n            if (!action.payload.token) return {\n                ...state,\n                token: \"\",\n                user: null\n            };\n            return {\n                ...state,\n                token: action.payload.token\n            };\n            break;\n        case _types__WEBPACK_IMPORTED_MODULE_0__.Actions.SET_USER:\n            if (!action.payload.user) return {\n                ...state,\n                token: \"\",\n                user: null\n            };\n            return {\n                ...state,\n                user: action.payload.user\n            };\n            break;\n        default:\n            return state;\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9hdXRoL3JlZHVjZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBd0Q7QUFFakQsTUFBTUMsT0FBTyxHQUFHLENBQUNDLEtBQWUsRUFBRUMsTUFBa0IsR0FBSztJQUM1RCxPQUFRQSxNQUFNLENBQUNDLElBQUk7UUFDZixLQUFLSixxREFBaUI7WUFDbEIsSUFBRyxDQUFDRyxNQUFNLENBQUNHLE9BQU8sQ0FBQ0MsS0FBSyxFQUFFLE9BQU87Z0JBQUMsR0FBR0wsS0FBSztnQkFBRUssS0FBSyxFQUFDLEVBQUU7Z0JBQUVDLElBQUksRUFBRSxJQUFJO2FBQUM7WUFDakUsT0FBTztnQkFBRSxHQUFHTixLQUFLO2dCQUFFSyxLQUFLLEVBQUVKLE1BQU0sQ0FBQ0csT0FBTyxDQUFDQyxLQUFLO2FBQUUsQ0FBQztZQUNqRCxNQUFNO1FBQ04sS0FBS1Asb0RBQWdCO1lBQ2pCLElBQUcsQ0FBQ0csTUFBTSxDQUFDRyxPQUFPLENBQUNFLElBQUksRUFBRSxPQUFPO2dCQUFDLEdBQUdOLEtBQUs7Z0JBQUVLLEtBQUssRUFBQyxFQUFFO2dCQUFFQyxJQUFJLEVBQUUsSUFBSTthQUFDO1lBQ2hFLE9BQU87Z0JBQUUsR0FBR04sS0FBSztnQkFBRU0sSUFBSSxFQUFFTCxNQUFNLENBQUNHLE9BQU8sQ0FBQ0UsSUFBSTthQUFFLENBQUM7WUFDL0MsTUFBTTtRQUNWO1lBQVMsT0FBT04sS0FBSyxDQUFDO0tBQzdCO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbGl2ZXJ5Ly4vY29udGV4dHMvYXV0aC9yZWR1Y2VyLnRzPzgzNmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVR5cGUsIEFjdGlvblR5cGUsIEFjdGlvbnMgfSBmcm9tICcuL3R5cGVzJztcclxuXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VyID0gKHN0YXRlOiBEYXRhVHlwZSwgYWN0aW9uOiBBY3Rpb25UeXBlKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBBY3Rpb25zLlNFVF9UT0tFTjpcclxuICAgICAgICAgICAgaWYoIWFjdGlvbi5wYXlsb2FkLnRva2VuKSByZXR1cm4gey4uLnN0YXRlLCB0b2tlbjonJywgdXNlcjogbnVsbH1cclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHRva2VuOiBhY3Rpb24ucGF5bG9hZC50b2tlbiB9O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBY3Rpb25zLlNFVF9VU0VSOlxyXG4gICAgICAgICAgICAgICAgaWYoIWFjdGlvbi5wYXlsb2FkLnVzZXIpIHJldHVybiB7Li4uc3RhdGUsIHRva2VuOicnLCB1c2VyOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHVzZXI6IGFjdGlvbi5wYXlsb2FkLnVzZXIgfTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiQWN0aW9ucyIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJTRVRfVE9LRU4iLCJwYXlsb2FkIiwidG9rZW4iLCJ1c2VyIiwiU0VUX1VTRVIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./contexts/auth/reducer.ts\n");

/***/ }),

/***/ "./contexts/auth/types.ts":
/*!********************************!*\
  !*** ./contexts/auth/types.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Actions\": () => (/* binding */ Actions)\n/* harmony export */ });\nvar Actions;\n(function(Actions) {\n    Actions[Actions[\"SET_TOKEN\"] = 0] = \"SET_TOKEN\";\n    Actions[Actions[\"SET_USER\"] = 1] = \"SET_USER\";\n})(Actions || (Actions = {}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9hdXRoL3R5cGVzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxJQXNCTyxPQUdOO1VBSFdBLE9BQU87SUFBUEEsT0FBTyxDQUFQQSxPQUFPLENBQ2ZDLFdBQVMsSUFBVEEsQ0FBUyxJQUFUQSxXQUFTO0lBRERELE9BQU8sQ0FBUEEsT0FBTyxDQUVmRSxVQUFRLElBQVJBLENBQVEsSUFBUkEsVUFBUTtHQUZBRixPQUFPLEtBQVBBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZWxpdmVyeS8uL2NvbnRleHRzL2F1dGgvdHlwZXMudHM/YTNhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXNwYXRjaCwgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vLi4vdHlwZXMvVXNlclwiO1xyXG5cclxuZXhwb3J0IHR5cGUgRGF0YVR5cGUgPSB7XHJcbiAgICB0b2tlbjogc3RyaW5nO1xyXG4gICAgdXNlcjogVXNlciB8IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEFjdGlvblR5cGUgPSB7XHJcbnR5cGU6IEFjdGlvbnM7XHJcbnBheWxvYWQ/OiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIENvbnRleHRUeXBlID0ge1xyXG4gICAgc3RhdGU6IERhdGFUeXBlO1xyXG4gICAgZGlzcGF0Y2g6IERpc3BhdGNoPEFjdGlvblR5cGU+O1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBQcm92aWRlclR5cGUgPSB7XHJcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEFjdGlvbnMge1xyXG4gICAgU0VUX1RPS0VOLFxyXG4gICAgU0VUX1VTRVJcclxufSJdLCJuYW1lcyI6WyJBY3Rpb25zIiwiU0VUX1RPS0VOIiwiU0VUX1VTRVIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./contexts/auth/types.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/app */ \"./contexts/app/index.tsx\");\n/* harmony import */ var _contexts_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/auth */ \"./contexts/auth/index.tsx\");\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_auth__WEBPACK_IMPORTED_MODULE_3__.Provider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_app__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"D:\\\\servidor\\\\htdocs\\\\aulas\\\\next\\\\delivery\\\\pages\\\\_app.tsx\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\servidor\\\\htdocs\\\\aulas\\\\next\\\\delivery\\\\pages\\\\_app.tsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\servidor\\\\htdocs\\\\aulas\\\\next\\\\delivery\\\\pages\\\\_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBOEI7QUFFbUM7QUFDRTtBQUVuRSxTQUFTRyxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQVksRUFBRTtJQUNqRCxxQkFDRSw4REFBQ0gsb0RBQW1CO2tCQUNsQiw0RUFBQ0QsbURBQWtCO3NCQUNqQiw0RUFBQ0csU0FBUztnQkFBRSxHQUFHQyxTQUFTOzs7OztvQkFBSTs7Ozs7Z0JBQ1Q7Ozs7O1lBQ0QsQ0FDdEI7QUFDSixDQUFDO0FBRUQsaUVBQWVGLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZWxpdmVyeS8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgeyBQcm92aWRlciBhcyBBcHBDb250ZXh0UHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0cy9hcHAnO1xuaW1wb3J0IHsgUHJvdmlkZXIgYXMgQXV0aENvbnRleHRQcm92aWRlciB9IGZyb20gJy4uL2NvbnRleHRzL2F1dGgnO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPEF1dGhDb250ZXh0UHJvdmlkZXI+XG4gICAgICA8QXBwQ29udGV4dFByb3ZpZGVyPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0FwcENvbnRleHRQcm92aWRlcj5cbiAgICA8L0F1dGhDb250ZXh0UHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsiUHJvdmlkZXIiLCJBcHBDb250ZXh0UHJvdmlkZXIiLCJBdXRoQ29udGV4dFByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "cookies-next":
/*!*******************************!*\
  !*** external "cookies-next" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("cookies-next");

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
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();