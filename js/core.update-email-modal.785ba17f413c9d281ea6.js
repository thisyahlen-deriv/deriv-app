"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["update-email-modal"],{

/***/ "./App/Containers/UpdateEmailModal/index.js":
/*!**************************************************!*\
  !*** ./App/Containers/UpdateEmailModal/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _update_email_modal_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _update_email_modal_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-email-modal.jsx */ \"./App/Containers/UpdateEmailModal/update-email-modal.jsx\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BcHAvQ29udGFpbmVycy9VcGRhdGVFbWFpbE1vZGFsL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9BcHAvQ29udGFpbmVycy9VcGRhdGVFbWFpbE1vZGFsL2luZGV4LmpzP2VhNGYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnJvbSAnLi91cGRhdGUtZW1haWwtbW9kYWwuanN4JztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./App/Containers/UpdateEmailModal/index.js\n");

/***/ }),

/***/ "./App/Containers/UpdateEmailModal/update-email-modal.jsx":
/*!****************************************************************!*\
  !*** ./App/Containers/UpdateEmailModal/update-email-modal.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../../node_modules/react/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ \"../../../node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var Stores_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Stores/connect */ \"./Stores/connect.js\");\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @deriv/components */ \"../../components/src/index.js\");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @deriv/translations */ \"../../translations/src/index.js\");\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @deriv/shared */ \"../../shared/src/index.js\");\n/* harmony import */ var Services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Services */ \"./Services/index.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\nvar UpdateEmailModal = function UpdateEmailModal(_ref) {\n  var is_visible = _ref.is_visible,\n      toggleUpdateEmailModal = _ref.toggleUpdateEmailModal,\n      logoutClient = _ref.logoutClient,\n      new_email = _ref.new_email,\n      verification_code = _ref.verification_code,\n      is_logged_in = _ref.is_logged_in;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),\n      _React$useState2 = _slicedToArray(_React$useState, 2),\n      is_email_updated = _React$useState2[0],\n      setIsEmailUpdated = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__.useState(null),\n      _React$useState4 = _slicedToArray(_React$useState3, 2),\n      update_email_error = _React$useState4[0],\n      setUpdateEmailMessage = _React$useState4[1];\n\n  var onClickButton = function onClickButton() {\n    toggleUpdateEmailModal(false);\n\n    if (is_logged_in) {\n      logoutClient().then(function () {\n        (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_4__.redirectToLogin)(false, (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_3__.getLanguage)(), false);\n      });\n    } else {\n      (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_4__.redirectToLogin)(false, (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_3__.getLanguage)(), false);\n    }\n  };\n\n  var api_request = {\n    change_email: 'update',\n    new_email: new_email,\n    verification_code: verification_code\n  };\n\n  var sendUpdateEmail = function sendUpdateEmail() {\n    Services__WEBPACK_IMPORTED_MODULE_5__.WS.changeEmail(api_request).then(function (response) {\n      setIsEmailUpdated(true);\n\n      if (response.error) {\n        setUpdateEmailMessage(response.error.message);\n        logoutClient();\n      }\n    });\n  };\n\n  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {\n    if (is_logged_in) {\n      Services__WEBPACK_IMPORTED_MODULE_5__.WS.wait('authorize').then(function () {\n        sendUpdateEmail();\n      });\n      return;\n    }\n\n    sendUpdateEmail();\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Modal, {\n    is_open: is_visible,\n    has_close_icon: false,\n    toggleModal: toggleUpdateEmailModal,\n    width: \"440px\",\n    minHeight: \"400px\"\n  }, is_email_updated ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"change-email-update\"\n  }, !update_email_error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {\n    className: \"change-email-update__modal-icon\",\n    icon: \"IcEmailVerified\",\n    size: 128\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n    className: \"change-email-update__modal-title\",\n    weight: \"bold\",\n    size: \"s\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_translations__WEBPACK_IMPORTED_MODULE_3__.Localize, {\n    i18n_default_text: !update_email_error ? 'Success!' : 'Failed'\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n    className: \"change-email-update__modal-description\",\n    size: \"xs\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_translations__WEBPACK_IMPORTED_MODULE_3__.Localize, {\n    i18n_default_text: !update_email_error ? 'Your email address has changed.<0 />Now, log in with your new email address.' : update_email_error,\n    components: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"br\", {\n      key: 0\n    })]\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Modal.Footer, {\n    className: \"change-email-update__footer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Button, {\n    onClick: onClickButton,\n    has_effect: true,\n    text: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_3__.localize)('Log in'),\n    primary: true,\n    large: true\n  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Loading, {\n    is_fullscreen: false\n  }));\n};\n\nUpdateEmailModal.prototypes = {\n  toggleUpdateEmailModal: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),\n  is_visible: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),\n  logoutClient: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),\n  new_email: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),\n  verification_code: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),\n  is_logged_in: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool)\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,Stores_connect__WEBPACK_IMPORTED_MODULE_1__.connect)(function (_ref2) {\n  var ui = _ref2.ui,\n      client = _ref2.client;\n  return {\n    logoutClient: client.logout,\n    is_visible: ui.is_update_email_modal_visible,\n    toggleUpdateEmailModal: ui.toggleUpdateEmailModal,\n    new_email: client.new_email.system_email_change,\n    verification_code: client.verification_code.system_email_change,\n    is_logged_in: client.is_logged_in\n  };\n})(UpdateEmailModal));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BcHAvQ29udGFpbmVycy9VcGRhdGVFbWFpbE1vZGFsL3VwZGF0ZS1lbWFpbC1tb2RhbC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7O0FBTUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUtBO0FBQUE7QUFBQTtBQU5BO0FBU0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vQXBwL0NvbnRhaW5lcnMvVXBkYXRlRW1haWxNb2RhbC91cGRhdGUtZW1haWwtbW9kYWwuanN4PzA1MDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnU3RvcmVzL2Nvbm5lY3QnO1xuaW1wb3J0IHsgQnV0dG9uLCBNb2RhbCwgVGV4dCwgSWNvbiwgTG9hZGluZyB9IGZyb20gJ0BkZXJpdi9jb21wb25lbnRzJztcbmltcG9ydCB7IGxvY2FsaXplLCBMb2NhbGl6ZSwgZ2V0TGFuZ3VhZ2UgfSBmcm9tICdAZGVyaXYvdHJhbnNsYXRpb25zJztcbmltcG9ydCB7IHJlZGlyZWN0VG9Mb2dpbiB9IGZyb20gJ0BkZXJpdi9zaGFyZWQnO1xuaW1wb3J0IHsgV1MgfSBmcm9tICdTZXJ2aWNlcyc7XG5cbmNvbnN0IFVwZGF0ZUVtYWlsTW9kYWwgPSAoe1xuICAgIGlzX3Zpc2libGUsXG4gICAgdG9nZ2xlVXBkYXRlRW1haWxNb2RhbCxcbiAgICBsb2dvdXRDbGllbnQsXG4gICAgbmV3X2VtYWlsLFxuICAgIHZlcmlmaWNhdGlvbl9jb2RlLFxuICAgIGlzX2xvZ2dlZF9pbixcbn0pID0+IHtcbiAgICBjb25zdCBbaXNfZW1haWxfdXBkYXRlZCwgc2V0SXNFbWFpbFVwZGF0ZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFt1cGRhdGVfZW1haWxfZXJyb3IsIHNldFVwZGF0ZUVtYWlsTWVzc2FnZV0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcblxuICAgIGNvbnN0IG9uQ2xpY2tCdXR0b24gPSAoKSA9PiB7XG4gICAgICAgIHRvZ2dsZVVwZGF0ZUVtYWlsTW9kYWwoZmFsc2UpO1xuICAgICAgICBpZiAoaXNfbG9nZ2VkX2luKSB7XG4gICAgICAgICAgICBsb2dvdXRDbGllbnQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICByZWRpcmVjdFRvTG9naW4oZmFsc2UsIGdldExhbmd1YWdlKCksIGZhbHNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVkaXJlY3RUb0xvZ2luKGZhbHNlLCBnZXRMYW5ndWFnZSgpLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgYXBpX3JlcXVlc3QgPSB7XG4gICAgICAgIGNoYW5nZV9lbWFpbDogJ3VwZGF0ZScsXG4gICAgICAgIG5ld19lbWFpbCxcbiAgICAgICAgdmVyaWZpY2F0aW9uX2NvZGUsXG4gICAgfTtcblxuICAgIGNvbnN0IHNlbmRVcGRhdGVFbWFpbCA9ICgpID0+IHtcbiAgICAgICAgV1MuY2hhbmdlRW1haWwoYXBpX3JlcXVlc3QpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgc2V0SXNFbWFpbFVwZGF0ZWQodHJ1ZSk7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBzZXRVcGRhdGVFbWFpbE1lc3NhZ2UocmVzcG9uc2UuZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgbG9nb3V0Q2xpZW50KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoaXNfbG9nZ2VkX2luKSB7XG4gICAgICAgICAgICBXUy53YWl0KCdhdXRob3JpemUnKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBzZW5kVXBkYXRlRW1haWwoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNlbmRVcGRhdGVFbWFpbCgpO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgaXNfb3Blbj17aXNfdmlzaWJsZX1cbiAgICAgICAgICAgIGhhc19jbG9zZV9pY29uPXtmYWxzZX1cbiAgICAgICAgICAgIHRvZ2dsZU1vZGFsPXt0b2dnbGVVcGRhdGVFbWFpbE1vZGFsfVxuICAgICAgICAgICAgd2lkdGg9JzQ0MHB4J1xuICAgICAgICAgICAgbWluSGVpZ2h0PSc0MDBweCdcbiAgICAgICAgPlxuICAgICAgICAgICAge2lzX2VtYWlsX3VwZGF0ZWQgPyAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NoYW5nZS1lbWFpbC11cGRhdGUnPlxuICAgICAgICAgICAgICAgICAgICB7IXVwZGF0ZV9lbWFpbF9lcnJvciAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9J2NoYW5nZS1lbWFpbC11cGRhdGVfX21vZGFsLWljb24nIGljb249e2BJY0VtYWlsVmVyaWZpZWRgfSBzaXplPXsxMjh9IC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0nY2hhbmdlLWVtYWlsLXVwZGF0ZV9fbW9kYWwtdGl0bGUnIHdlaWdodD0nYm9sZCcgc2l6ZT0ncyc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9jYWxpemUgaTE4bl9kZWZhdWx0X3RleHQ9eyF1cGRhdGVfZW1haWxfZXJyb3IgPyAnU3VjY2VzcyEnIDogJ0ZhaWxlZCd9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSdjaGFuZ2UtZW1haWwtdXBkYXRlX19tb2RhbC1kZXNjcmlwdGlvbicgc2l6ZT0neHMnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExvY2FsaXplXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaTE4bl9kZWZhdWx0X3RleHQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdXBkYXRlX2VtYWlsX2Vycm9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdZb3VyIGVtYWlsIGFkZHJlc3MgaGFzIGNoYW5nZWQuPDAgLz5Ob3csIGxvZyBpbiB3aXRoIHlvdXIgbmV3IGVtYWlsIGFkZHJlc3MuJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB1cGRhdGVfZW1haWxfZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cz17WzxiciBrZXk9ezB9IC8+XX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsLkZvb3RlciBjbGFzc05hbWU9J2NoYW5nZS1lbWFpbC11cGRhdGVfX2Zvb3Rlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tCdXR0b259IGhhc19lZmZlY3QgdGV4dD17bG9jYWxpemUoJ0xvZyBpbicpfSBwcmltYXJ5IGxhcmdlIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8TG9hZGluZyBpc19mdWxsc2NyZWVuPXtmYWxzZX0gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvTW9kYWw+XG4gICAgKTtcbn07XG5cblVwZGF0ZUVtYWlsTW9kYWwucHJvdG90eXBlcyA9IHtcbiAgICB0b2dnbGVVcGRhdGVFbWFpbE1vZGFsOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBpc192aXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBsb2dvdXRDbGllbnQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIG5ld19lbWFpbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB2ZXJpZmljYXRpb25fY29kZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpc19sb2dnZWRfaW46IFByb3BUeXBlcy5ib29sLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgoeyB1aSwgY2xpZW50IH0pID0+ICh7XG4gICAgbG9nb3V0Q2xpZW50OiBjbGllbnQubG9nb3V0LFxuICAgIGlzX3Zpc2libGU6IHVpLmlzX3VwZGF0ZV9lbWFpbF9tb2RhbF92aXNpYmxlLFxuICAgIHRvZ2dsZVVwZGF0ZUVtYWlsTW9kYWw6IHVpLnRvZ2dsZVVwZGF0ZUVtYWlsTW9kYWwsXG4gICAgbmV3X2VtYWlsOiBjbGllbnQubmV3X2VtYWlsLnN5c3RlbV9lbWFpbF9jaGFuZ2UsXG4gICAgdmVyaWZpY2F0aW9uX2NvZGU6IGNsaWVudC52ZXJpZmljYXRpb25fY29kZS5zeXN0ZW1fZW1haWxfY2hhbmdlLFxuICAgIGlzX2xvZ2dlZF9pbjogY2xpZW50LmlzX2xvZ2dlZF9pbixcbn0pKShVcGRhdGVFbWFpbE1vZGFsKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./App/Containers/UpdateEmailModal/update-email-modal.jsx\n");

/***/ })

}]);