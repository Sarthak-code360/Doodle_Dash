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

/***/ "./common/components/portal/components/Portal.ts":
/*!*******************************************************!*\
  !*** ./common/components/portal/components/Portal.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Portal = ({ children })=>{\n    const [portal, setPortal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const node = document.getElementById(\"portal\");\n        if (node) setPortal(node);\n    }, []);\n    if (!portal) return null;\n    return (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(children, portal);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Portal);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21tb24vY29tcG9uZW50cy9wb3J0YWwvY29tcG9uZW50cy9Qb3J0YWwudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNEM7QUFFSDtBQUV6QyxNQUFNRyxTQUFTLENBQUMsRUFBRUMsUUFBUSxFQUE2QztJQUNyRSxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0wsK0NBQVFBO0lBRXBDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1PLE9BQU9DLFNBQVNDLGNBQWMsQ0FBQztRQUNyQyxJQUFJRixNQUFNRCxVQUFVQztJQUN0QixHQUFHLEVBQUU7SUFFTCxJQUFJLENBQUNGLFFBQVEsT0FBTztJQUVwQixPQUFPSCx1REFBWUEsQ0FBQ0UsVUFBVUM7QUFDaEM7QUFFQSxpRUFBZUYsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbGxhYmlvLy4vY29tbW9uL2NvbXBvbmVudHMvcG9ydGFsL2NvbXBvbmVudHMvUG9ydGFsLnRzP2Y1OTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IGNyZWF0ZVBvcnRhbCB9IGZyb20gJ3JlYWN0LWRvbSc7XHJcblxyXG5jb25zdCBQb3J0YWwgPSAoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBKU1guRWxlbWVudCB8IEpTWC5FbGVtZW50W10gfSkgPT4ge1xyXG4gIGNvbnN0IFtwb3J0YWwsIHNldFBvcnRhbF0gPSB1c2VTdGF0ZTxIVE1MRWxlbWVudD4oKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9ydGFsJyk7XHJcbiAgICBpZiAobm9kZSkgc2V0UG9ydGFsKG5vZGUpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgaWYgKCFwb3J0YWwpIHJldHVybiBudWxsO1xyXG5cclxuICByZXR1cm4gY3JlYXRlUG9ydGFsKGNoaWxkcmVuLCBwb3J0YWwpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9ydGFsO1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjcmVhdGVQb3J0YWwiLCJQb3J0YWwiLCJjaGlsZHJlbiIsInBvcnRhbCIsInNldFBvcnRhbCIsIm5vZGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./common/components/portal/components/Portal.ts\n");

/***/ }),

/***/ "./common/constants/easings.ts":
/*!*************************************!*\
  !*** ./common/constants/easings.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DEFAULT_EASE: () => (/* binding */ DEFAULT_EASE)\n/* harmony export */ });\nconst DEFAULT_EASE = [\n    0.6,\n    0.01,\n    -0.05,\n    0.9\n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21tb24vY29uc3RhbnRzL2Vhc2luZ3MudHMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLGVBQWU7SUFBQztJQUFLO0lBQU0sQ0FBQztJQUFNO0NBQUksQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbGxhYmlvLy4vY29tbW9uL2NvbnN0YW50cy9lYXNpbmdzLnRzPzYzNzkiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IERFRkFVTFRfRUFTRSA9IFswLjYsIDAuMDEsIC0wLjA1LCAwLjldO1xyXG4iXSwibmFtZXMiOlsiREVGQVVMVF9FQVNFIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./common/constants/easings.ts\n");

/***/ }),

/***/ "./modules/modal/animations/ModalManager.animations.ts":
/*!*************************************************************!*\
  !*** ./modules/modal/animations/ModalManager.animations.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   bgAnimation: () => (/* binding */ bgAnimation),\n/* harmony export */   modalAnimation: () => (/* binding */ modalAnimation)\n/* harmony export */ });\nconst bgAnimation = {\n    closed: {\n        opacity: 0\n    },\n    opened: {\n        opacity: 1\n    }\n};\nconst modalAnimation = {\n    closed: {\n        y: -100\n    },\n    opened: {\n        y: 0\n    },\n    exited: {\n        y: 100\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2R1bGVzL21vZGFsL2FuaW1hdGlvbnMvTW9kYWxNYW5hZ2VyLmFuaW1hdGlvbnMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxNQUFNQSxjQUFjO0lBQ3pCQyxRQUFRO1FBQUVDLFNBQVM7SUFBRTtJQUNyQkMsUUFBUTtRQUFFRCxTQUFTO0lBQUU7QUFDdkIsRUFBRTtBQUVLLE1BQU1FLGlCQUFpQjtJQUM1QkgsUUFBUTtRQUFFSSxHQUFHLENBQUM7SUFBSTtJQUNsQkYsUUFBUTtRQUFFRSxHQUFHO0lBQUU7SUFDZkMsUUFBUTtRQUFFRCxHQUFHO0lBQUk7QUFDbkIsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbGxhYmlvLy4vbW9kdWxlcy9tb2RhbC9hbmltYXRpb25zL01vZGFsTWFuYWdlci5hbmltYXRpb25zLnRzPzA2MzEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGJnQW5pbWF0aW9uID0ge1xyXG4gIGNsb3NlZDogeyBvcGFjaXR5OiAwIH0sXHJcbiAgb3BlbmVkOiB7IG9wYWNpdHk6IDEgfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBtb2RhbEFuaW1hdGlvbiA9IHtcclxuICBjbG9zZWQ6IHsgeTogLTEwMCB9LFxyXG4gIG9wZW5lZDogeyB5OiAwIH0sXHJcbiAgZXhpdGVkOiB7IHk6IDEwMCB9LFxyXG59O1xyXG4iXSwibmFtZXMiOlsiYmdBbmltYXRpb24iLCJjbG9zZWQiLCJvcGFjaXR5Iiwib3BlbmVkIiwibW9kYWxBbmltYXRpb24iLCJ5IiwiZXhpdGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./modules/modal/animations/ModalManager.animations.ts\n");

/***/ }),

/***/ "./modules/modal/components/ModalManager.tsx":
/*!***************************************************!*\
  !*** ./modules/modal/components/ModalManager.tsx ***!
  \***************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _common_components_portal_components_Portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/common/components/portal/components/Portal */ \"./common/components/portal/components/Portal.ts\");\n/* harmony import */ var _animations_ModalManager_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../animations/ModalManager.animations */ \"./modules/modal/animations/ModalManager.animations.ts\");\n/* harmony import */ var _recoil_modal_atom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../recoil/modal.atom */ \"./modules/modal/recoil/modal.atom.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);\nframer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\nconst ModalManager = ()=>{\n    const [{ opened, modal }, setModal] = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilState)(_recoil_modal_atom__WEBPACK_IMPORTED_MODULE_6__.modalAtom);\n    const [portalNode, setPortalNode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!portalNode) {\n            const node = document.getElementById(\"portal\");\n            if (node) setPortalNode(node);\n            return;\n        }\n        if (opened) {\n            portalNode.style.pointerEvents = \"all\";\n        } else {\n            portalNode.style.pointerEvents = \"none\";\n        }\n    }, [\n        opened,\n        portalNode\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_components_portal_components_Portal__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n            className: \"absolute z-40 flex min-h-full w-full items-center justify-center bg-black/80\",\n            onClick: ()=>setModal({\n                    modal: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n                    opened: false\n                }),\n            variants: _animations_ModalManager_animations__WEBPACK_IMPORTED_MODULE_5__.bgAnimation,\n            initial: \"closed\",\n            animate: opened ? \"opened\" : \"closed\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {\n                children: opened && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                    variants: _animations_ModalManager_animations__WEBPACK_IMPORTED_MODULE_5__.modalAnimation,\n                    initial: \"closed\",\n                    animate: \"opened\",\n                    exit: \"exited\",\n                    onClick: (e)=>e.stopPropagation(),\n                    className: \"p-6\",\n                    children: modal\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\DoodleDash\\\\modules\\\\modal\\\\components\\\\ModalManager.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\DoodleDash\\\\modules\\\\modal\\\\components\\\\ModalManager.tsx\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\DoodleDash\\\\modules\\\\modal\\\\components\\\\ModalManager.tsx\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\DoodleDash\\\\modules\\\\modal\\\\components\\\\ModalManager.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalManager);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2R1bGVzL21vZGFsL2NvbXBvbmVudHMvTW9kYWxNYW5hZ2VyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFFWTtBQUNoQjtBQUUwQjtBQUtuQjtBQUNFO0FBRWpELE1BQU1TLGVBQWU7SUFDbkIsTUFBTSxDQUFDLEVBQUVDLE1BQU0sRUFBRUMsS0FBSyxFQUFFLEVBQUVDLFNBQVMsR0FBR1Isc0RBQWNBLENBQUNJLHlEQUFTQTtJQUU5RCxNQUFNLENBQUNLLFlBQVlDLGNBQWMsR0FBR2IsK0NBQVFBO0lBRTVDRCxnREFBU0EsQ0FBQztRQUNSLElBQUksQ0FBQ2EsWUFBWTtZQUNmLE1BQU1FLE9BQU9DLFNBQVNDLGNBQWMsQ0FBQztZQUNyQyxJQUFJRixNQUFNRCxjQUFjQztZQUN4QjtRQUNGO1FBRUEsSUFBSUwsUUFBUTtZQUNWRyxXQUFXSyxLQUFLLENBQUNDLGFBQWEsR0FBRztRQUNuQyxPQUFPO1lBQ0xOLFdBQVdLLEtBQUssQ0FBQ0MsYUFBYSxHQUFHO1FBQ25DO0lBQ0YsR0FBRztRQUFDVDtRQUFRRztLQUFXO0lBRXZCLHFCQUNFLDhEQUFDUixtRkFBTUE7a0JBQ0wsNEVBQUNGLGlEQUFNQSxDQUFDaUIsR0FBRztZQUNUQyxXQUFVO1lBQ1ZDLFNBQVMsSUFBTVYsU0FBUztvQkFBRUQscUJBQU87b0JBQU9ELFFBQVE7Z0JBQU07WUFDdERhLFVBQVVqQiw0RUFBV0E7WUFDckJrQixTQUFRO1lBQ1JDLFNBQVNmLFNBQVMsV0FBVztzQkFFN0IsNEVBQUNSLDBEQUFlQTswQkFDYlEsd0JBQ0MsOERBQUNQLGlEQUFNQSxDQUFDaUIsR0FBRztvQkFDVEcsVUFBVWhCLCtFQUFjQTtvQkFDeEJpQixTQUFRO29CQUNSQyxTQUFRO29CQUNSQyxNQUFLO29CQUNMSixTQUFTLENBQUNLLElBQU1BLEVBQUVDLGVBQWU7b0JBQ2pDUCxXQUFVOzhCQUVUVjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2Y7QUFFQSxpRUFBZUYsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbGxhYmlvLy4vbW9kdWxlcy9tb2RhbC9jb21wb25lbnRzL01vZGFsTWFuYWdlci50c3g/YWQ4OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IHsgdXNlUmVjb2lsU3RhdGUgfSBmcm9tICdyZWNvaWwnO1xyXG5cclxuaW1wb3J0IFBvcnRhbCBmcm9tICdAL2NvbW1vbi9jb21wb25lbnRzL3BvcnRhbC9jb21wb25lbnRzL1BvcnRhbCc7XHJcblxyXG5pbXBvcnQge1xyXG4gIGJnQW5pbWF0aW9uLFxyXG4gIG1vZGFsQW5pbWF0aW9uLFxyXG59IGZyb20gJy4uL2FuaW1hdGlvbnMvTW9kYWxNYW5hZ2VyLmFuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBtb2RhbEF0b20gfSBmcm9tICcuLi9yZWNvaWwvbW9kYWwuYXRvbSc7XHJcblxyXG5jb25zdCBNb2RhbE1hbmFnZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3sgb3BlbmVkLCBtb2RhbCB9LCBzZXRNb2RhbF0gPSB1c2VSZWNvaWxTdGF0ZShtb2RhbEF0b20pO1xyXG5cclxuICBjb25zdCBbcG9ydGFsTm9kZSwgc2V0UG9ydGFsTm9kZV0gPSB1c2VTdGF0ZTxIVE1MRWxlbWVudD4oKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghcG9ydGFsTm9kZSkge1xyXG4gICAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcnRhbCcpO1xyXG4gICAgICBpZiAobm9kZSkgc2V0UG9ydGFsTm9kZShub2RlKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChvcGVuZWQpIHtcclxuICAgICAgcG9ydGFsTm9kZS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2FsbCc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwb3J0YWxOb2RlLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XHJcbiAgICB9XHJcbiAgfSwgW29wZW5lZCwgcG9ydGFsTm9kZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBvcnRhbD5cclxuICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB6LTQwIGZsZXggbWluLWgtZnVsbCB3LWZ1bGwgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWJsYWNrLzgwXCJcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNb2RhbCh7IG1vZGFsOiA8PjwvPiwgb3BlbmVkOiBmYWxzZSB9KX1cclxuICAgICAgICB2YXJpYW50cz17YmdBbmltYXRpb259XHJcbiAgICAgICAgaW5pdGlhbD1cImNsb3NlZFwiXHJcbiAgICAgICAgYW5pbWF0ZT17b3BlbmVkID8gJ29wZW5lZCcgOiAnY2xvc2VkJ31cclxuICAgICAgPlxyXG4gICAgICAgIDxBbmltYXRlUHJlc2VuY2U+XHJcbiAgICAgICAgICB7b3BlbmVkICYmIChcclxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgICB2YXJpYW50cz17bW9kYWxBbmltYXRpb259XHJcbiAgICAgICAgICAgICAgaW5pdGlhbD1cImNsb3NlZFwiXHJcbiAgICAgICAgICAgICAgYW5pbWF0ZT1cIm9wZW5lZFwiXHJcbiAgICAgICAgICAgICAgZXhpdD1cImV4aXRlZFwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC02XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHttb2RhbH1cclxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cclxuICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgPC9Qb3J0YWw+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZGFsTWFuYWdlcjtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQW5pbWF0ZVByZXNlbmNlIiwibW90aW9uIiwidXNlUmVjb2lsU3RhdGUiLCJQb3J0YWwiLCJiZ0FuaW1hdGlvbiIsIm1vZGFsQW5pbWF0aW9uIiwibW9kYWxBdG9tIiwiTW9kYWxNYW5hZ2VyIiwib3BlbmVkIiwibW9kYWwiLCJzZXRNb2RhbCIsInBvcnRhbE5vZGUiLCJzZXRQb3J0YWxOb2RlIiwibm9kZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsInBvaW50ZXJFdmVudHMiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwidmFyaWFudHMiLCJpbml0aWFsIiwiYW5pbWF0ZSIsImV4aXQiLCJlIiwic3RvcFByb3BhZ2F0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./modules/modal/components/ModalManager.tsx\n");

/***/ }),

/***/ "./modules/modal/index.ts":
/*!********************************!*\
  !*** ./modules/modal/index.ts ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ModalManager: () => (/* reexport safe */ _components_ModalManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   useModal: () => (/* reexport safe */ _recoil_modal_hooks__WEBPACK_IMPORTED_MODULE_1__.useModal)\n/* harmony export */ });\n/* harmony import */ var _components_ModalManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ModalManager */ \"./modules/modal/components/ModalManager.tsx\");\n/* harmony import */ var _recoil_modal_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recoil/modal.hooks */ \"./modules/modal/recoil/modal.hooks.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ModalManager__WEBPACK_IMPORTED_MODULE_0__]);\n_components_ModalManager__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2R1bGVzL21vZGFsL2luZGV4LnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBcUQ7QUFDTDtBQUVkIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29sbGFiaW8vLi9tb2R1bGVzL21vZGFsL2luZGV4LnRzPzEwYTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vZGFsTWFuYWdlciBmcm9tICcuL2NvbXBvbmVudHMvTW9kYWxNYW5hZ2VyJztcclxuaW1wb3J0IHsgdXNlTW9kYWwgfSBmcm9tICcuL3JlY29pbC9tb2RhbC5ob29rcyc7XHJcblxyXG5leHBvcnQgeyBNb2RhbE1hbmFnZXIsIHVzZU1vZGFsIH07XHJcbiJdLCJuYW1lcyI6WyJNb2RhbE1hbmFnZXIiLCJ1c2VNb2RhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./modules/modal/index.ts\n");

/***/ }),

/***/ "./modules/modal/recoil/modal.atom.tsx":
/*!*********************************************!*\
  !*** ./modules/modal/recoil/modal.atom.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   modalAtom: () => (/* binding */ modalAtom)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst modalAtom = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.atom)({\n    key: \"modal\",\n    default: {\n        modal: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n        opened: false\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2R1bGVzL21vZGFsL3JlY29pbC9tb2RhbC5hdG9tLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBOEI7QUFFdkIsTUFBTUMsWUFBWUQsNENBQUlBLENBRzFCO0lBQ0RFLEtBQUs7SUFDTEMsU0FBUztRQUNQQyxxQkFBTztRQUNQQyxRQUFRO0lBQ1Y7QUFDRixHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29sbGFiaW8vLi9tb2R1bGVzL21vZGFsL3JlY29pbC9tb2RhbC5hdG9tLnRzeD9jNDEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF0b20gfSBmcm9tICdyZWNvaWwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1vZGFsQXRvbSA9IGF0b208e1xyXG4gIG1vZGFsOiBKU1guRWxlbWVudCB8IEpTWC5FbGVtZW50W107XHJcbiAgb3BlbmVkOiBib29sZWFuO1xyXG59Pih7XHJcbiAga2V5OiAnbW9kYWwnLFxyXG4gIGRlZmF1bHQ6IHtcclxuICAgIG1vZGFsOiA8PjwvPixcclxuICAgIG9wZW5lZDogZmFsc2UsXHJcbiAgfSxcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJhdG9tIiwibW9kYWxBdG9tIiwia2V5IiwiZGVmYXVsdCIsIm1vZGFsIiwib3BlbmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./modules/modal/recoil/modal.atom.tsx\n");

/***/ }),

/***/ "./modules/modal/recoil/modal.hooks.tsx":
/*!**********************************************!*\
  !*** ./modules/modal/recoil/modal.hooks.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useModal: () => (/* binding */ useModal)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modal_atom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.atom */ \"./modules/modal/recoil/modal.atom.tsx\");\n\n\n\nconst useModal = ()=>{\n    const setModal = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useSetRecoilState)(_modal_atom__WEBPACK_IMPORTED_MODULE_2__.modalAtom);\n    const openModal = (modal)=>setModal({\n            modal,\n            opened: true\n        });\n    const closeModal = ()=>setModal({\n            modal: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n            opened: false\n        });\n    return {\n        openModal,\n        closeModal\n    };\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2R1bGVzL21vZGFsL3JlY29pbC9tb2RhbC5ob29rcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEyQztBQUVGO0FBRXpDLE1BQU1FLFdBQVc7SUFDZixNQUFNQyxXQUFXSCx5REFBaUJBLENBQUNDLGtEQUFTQTtJQUU1QyxNQUFNRyxZQUFZLENBQUNDLFFBQ2pCRixTQUFTO1lBQUVFO1lBQU9DLFFBQVE7UUFBSztJQUVqQyxNQUFNQyxhQUFhLElBQU1KLFNBQVM7WUFBRUUscUJBQU87WUFBT0MsUUFBUTtRQUFNO0lBRWhFLE9BQU87UUFBRUY7UUFBV0c7SUFBVztBQUNqQztBQUVvQiIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbGxhYmlvLy4vbW9kdWxlcy9tb2RhbC9yZWNvaWwvbW9kYWwuaG9va3MudHN4P2NlMTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU2V0UmVjb2lsU3RhdGUgfSBmcm9tICdyZWNvaWwnO1xyXG5cclxuaW1wb3J0IHsgbW9kYWxBdG9tIH0gZnJvbSAnLi9tb2RhbC5hdG9tJztcclxuXHJcbmNvbnN0IHVzZU1vZGFsID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNldE1vZGFsID0gdXNlU2V0UmVjb2lsU3RhdGUobW9kYWxBdG9tKTtcclxuXHJcbiAgY29uc3Qgb3Blbk1vZGFsID0gKG1vZGFsOiBKU1guRWxlbWVudCB8IEpTWC5FbGVtZW50W10pID0+XHJcbiAgICBzZXRNb2RhbCh7IG1vZGFsLCBvcGVuZWQ6IHRydWUgfSk7XHJcblxyXG4gIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiBzZXRNb2RhbCh7IG1vZGFsOiA8PjwvPiwgb3BlbmVkOiBmYWxzZSB9KTtcclxuXHJcbiAgcmV0dXJuIHsgb3Blbk1vZGFsLCBjbG9zZU1vZGFsIH07XHJcbn07XHJcblxyXG5leHBvcnQgeyB1c2VNb2RhbCB9O1xyXG4iXSwibmFtZXMiOlsidXNlU2V0UmVjb2lsU3RhdGUiLCJtb2RhbEF0b20iLCJ1c2VNb2RhbCIsInNldE1vZGFsIiwib3Blbk1vZGFsIiwibW9kYWwiLCJvcGVuZWQiLCJjbG9zZU1vZGFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./modules/modal/recoil/modal.hooks.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/styles/global.css */ \"./common/styles/global.css\");\n/* harmony import */ var _common_styles_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_common_styles_global_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _common_constants_easings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/common/constants/easings */ \"./common/constants/easings.ts\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/modules/modal */ \"./modules/modal/index.ts\");\n/* harmony import */ var react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.min.css */ \"./node_modules/react-toastify/dist/ReactToastify.min.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_8__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _modules_modal__WEBPACK_IMPORTED_MODULE_7__]);\n([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _modules_modal__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\nconst App = ({ Component, pageProps })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"DoodleDash | The Whiteboard\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\DoodleDash\\\\pages\\\\_app.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\DoodleDash\\\\pages\\\\_app.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\DoodleDash\\\\pages\\\\_app.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recoil__WEBPACK_IMPORTED_MODULE_5__.RecoilRoot, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_4__.ToastContainer, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\DoodleDash\\\\pages\\\\_app.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.MotionConfig, {\n                        transition: {\n                            ease: _common_constants_easings__WEBPACK_IMPORTED_MODULE_6__.DEFAULT_EASE\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modules_modal__WEBPACK_IMPORTED_MODULE_7__.ModalManager, {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\DoodleDash\\\\pages\\\\_app.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                                ...pageProps\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\DoodleDash\\\\pages\\\\_app.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\DoodleDash\\\\pages\\\\_app.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\DoodleDash\\\\pages\\\\_app.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFxQztBQUNRO0FBRWhCO0FBQ21CO0FBQ1o7QUFFc0I7QUFDWDtBQUVJO0FBRW5ELE1BQU1NLE1BQU0sQ0FBQyxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBWTtJQUM3QyxxQkFDRTs7MEJBQ0UsOERBQUNQLGtEQUFJQTs7a0NBQ0gsOERBQUNRO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBRXhCLDhEQUFDVCw4Q0FBVUE7O2tDQUNULDhEQUFDRCwwREFBY0E7Ozs7O2tDQUNmLDhEQUFDRix1REFBWUE7d0JBQUNhLFlBQVk7NEJBQUVDLE1BQU1WLG1FQUFZQTt3QkFBQzs7MENBQzdDLDhEQUFDQyx3REFBWUE7Ozs7OzBDQUNiLDhEQUFDRTtnQ0FBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtsQztBQUVBLGlFQUFlRixHQUFHQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29sbGFiaW8vLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vY29tbW9uL3N0eWxlcy9nbG9iYWwuY3NzJztcclxuaW1wb3J0IHsgTW90aW9uQ29uZmlnIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgeyBSZWNvaWxSb290IH0gZnJvbSAncmVjb2lsJztcclxuXHJcbmltcG9ydCB7IERFRkFVTFRfRUFTRSB9IGZyb20gJ0AvY29tbW9uL2NvbnN0YW50cy9lYXNpbmdzJztcclxuaW1wb3J0IHsgTW9kYWxNYW5hZ2VyIH0gZnJvbSAnQC9tb2R1bGVzL21vZGFsJztcclxuXHJcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5Lm1pbi5jc3MnO1xyXG5cclxuY29uc3QgQXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkRvb2RsZURhc2ggfCBUaGUgV2hpdGVib2FyZDwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxSZWNvaWxSb290PlxyXG4gICAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxyXG4gICAgICAgIDxNb3Rpb25Db25maWcgdHJhbnNpdGlvbj17eyBlYXNlOiBERUZBVUxUX0VBU0UgfX0+XHJcbiAgICAgICAgICA8TW9kYWxNYW5hZ2VyIC8+XHJcbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgPC9Nb3Rpb25Db25maWc+XHJcbiAgICAgIDwvUmVjb2lsUm9vdD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiJdLCJuYW1lcyI6WyJNb3Rpb25Db25maWciLCJIZWFkIiwiVG9hc3RDb250YWluZXIiLCJSZWNvaWxSb290IiwiREVGQVVMVF9FQVNFIiwiTW9kYWxNYW5hZ2VyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidGl0bGUiLCJsaW5rIiwicmVsIiwiaHJlZiIsInRyYW5zaXRpb24iLCJlYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./common/styles/global.css":
/*!**********************************!*\
  !*** ./common/styles/global.css ***!
  \**********************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "recoil":
/*!*************************!*\
  !*** external "recoil" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("recoil");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/react-toastify"], () => (__webpack_exec__("./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();