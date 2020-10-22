(window.webpackJsonp=window.webpackJsonp||[]).push([["account-signup-modal"],{669:function(e,t,n){"use strict";var r=n(12),o=n(7),i=n.n(o),a=n(0),c=n(6),s=n(2);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=function(e){var t=e.class_prefix,n=void 0===t?"set-residence":t,o=e.children,i=e.header_text,u=e.errors,p=e.touched,d=e.setFieldTouched,f=e.setFieldValue,b=e.residence_list;return a.createElement("div",{className:"".concat(n,"__residence-selection")},!!i&&a.createElement("p",{className:"".concat(n,"__heading")},i),a.createElement("p",{className:"".concat(n,"__").concat(i?"text":"heading")},Object(s.localize)("Where do you live?")),a.createElement(r.a,{name:"residence"},(function(e){var t=e.field;return a.createElement(a.Fragment,null,a.createElement(c.DesktopWrapper,null,a.createElement(c.Autocomplete,l({},t,{autoComplete:"off",className:"".concat(n,"__residence-field"),type:"text",label:Object(s.localize)("Choose country"),error:p.residence&&u.residence,required:!0,list_items:b,onItemSelection:function(e){var t=e.value,n=e.text;return f("residence",t?n:"",!0)}}))),a.createElement(c.MobileWrapper,null,a.createElement(c.SelectNative,{placeholder:Object(s.localize)("Please select"),label:Object(s.localize)("Choose country"),value:t.value,list_items:b,error:p.residence&&u.residence,required:!0,use_text:!0,onChange:function(e){d("residence",!0),f("residence",e.target.value,!0)}})))})),o)};u.propTypes={children:i.a.node,class_prefix:i.a.string,header_text:i.a.string,residence_list:i.a.arrayOf(i.a.object)},t.a=u},713:function(e,t,n){},729:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return A}));var r=n(10),o=n.n(r),i=n(12),a=n(7),c=n.n(a),s=n(0),l=n(6),u=n(4),p=n(2),d=n(9),f=n(669);n(713);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=E(e);if(t){var o=E(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return j(this,n)}}function j(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var S={password:"",residence:""},x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(c,e);var t,n,r,a=O(c);function c(){var e;v(this,c);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={has_valid_residence:!1,pw_input:""},e.updatePassword=function(t){e.setState({pw_input:t})},e.onResidenceSelection=function(){e.setState({has_valid_residence:!0})},e.onSignupComplete=function(t){if(e.props.isModalVisible(!1),e.props.enableApp(),t)throw Error(t)},e}return t=c,(n=[{key:"render",value:function(){var e=this,t=this.props,n=t.onSignup,r=t.residence_list,a=t.is_account_signup_modal_visible;return s.createElement("div",{className:"account-signup"},s.createElement(i.c,{initialValues:S,validate:function(e){return function(e,t){var n={};if(Object(u.validLength)(e.password,{min:8,max:25})?Object(u.validPassword)(e.password)||(n.password=Object(u.getErrorMessages)().password()):n.password=Object(p.localize)("You should enter {{min_number}}-{{max_number}} characters.",{min_number:8,max_number:25}),e.residence){var r=t.findIndex((function(t){return t.text.toLowerCase()===e.residence.toLowerCase()}));-1!==r&&"DISABLED"!==t[r].disabled||(n.residence=Object(p.localize)("Unfortunately, {{website_name}} is not available in your country.",{website_name:u.website_name}))}else n.residence=!0;return n}(e,r)},onSubmit:function(t){var o=r.findIndex((function(e){return e.text.toLowerCase()===t.residence.toLowerCase()})),i=g(g({},t),{},{residence:r[o].value,is_deriv_crypto:e.context.is_deriv_crypto,is_account_signup_modal_visible:a});n(i,e.onSignupComplete)}},(function(t){var n=t.isSubmitting,a=t.handleBlur,c=t.errors,u=t.handleChange,d=t.values,b=t.setFieldValue,m=t.setFieldTouched,g=t.touched;return s.createElement(i.b,null,s.createElement(s.Fragment,null,e.state.has_valid_residence?s.createElement("div",{className:"account-signup__password-selection"},s.createElement("p",{className:"account-signup__heading"},s.createElement(p.Localize,{i18n_default_text:"Keep your account secure with a password"})),s.createElement(i.a,{name:"password"},(function(t){var n=t.field;return s.createElement(l.PasswordMeter,{input:e.state.pw_input,has_error:!(!g.password||!c.password)},s.createElement(l.PasswordInput,_({},n,{className:"account-signup__password-field",label:Object(p.localize)("Create a password"),error:g.password&&c.password,required:!0,value:d.password,onBlur:a,onChange:function(t){var n=t.target;m("password",!0),n&&e.updatePassword(n.value),u(t)}})))})),s.createElement("p",{className:"account-signup__subtext"},s.createElement(p.Localize,{i18n_default_text:"Strong passwords contain at least 8 characters, combine uppercase and lowercase letters, numbers, and symbols."})),s.createElement(l.Button,{className:o()("account-signup__btn",{"account-signup__btn--disabled":!d.password||c.password||n}),type:"submit",is_disabled:!d.password||!!c.password||n,text:Object(p.localize)("Start trading"),primary:!0})):s.createElement(f.a,{header_text:Object(p.localize)("Thanks for verifying your email"),class_prefix:"account-signup",errors:c,touched:g,setFieldTouched:m,setFieldValue:b,residence_list:r},s.createElement(l.Button,{className:o()("account-signup__btn",{"account-signup__btn--disabled":!d.residence||c.residence}),type:"button",is_disabled:!d.residence||!!c.residence,onClick:e.onResidenceSelection,primary:!0,text:Object(p.localize)("Next")}))))})))}}])&&h(t.prototype,n),r&&h(t,r),c}(s.Component);x.contextType=u.PlatformContext,x.propTypes={onSignup:c.a.func,residence_list:c.a.array};var P=function(e){var t=e.enableApp,n=e.disableApp,r=e.is_eu,o=e.is_loading,i=e.is_visible,a=e.is_logged_in,c=e.logout,u=e.onSignup,p=e.residence_list,d=e.toggleAccountSignupModal;return s.useEffect((function(){i&&a&&c()}),[i,a,c]),s.createElement(l.Dialog,{is_visible:i,disableApp:n,enableApp:t,is_loading:o||!p.length,is_mobile_full_width:!1,is_content_centered:!0},s.createElement(x,{onSignup:u,residence_list:p,is_eu:r,isModalVisible:d,enableApp:t,is_account_signup_modal_visible:i}))};P.propTypes={disableApp:c.a.func,enableApp:c.a.func,is_eu:c.a.bool,is_loading:c.a.bool,is_visible:c.a.bool,onSignup:c.a.func,residence_list:c.a.arrayOf(c.a.object)};var A=Object(d.b)((function(e){var t=e.ui,n=e.client;return{is_visible:t.is_account_signup_modal_visible,toggleAccountSignupModal:t.toggleAccountSignupModal,enableApp:t.enableApp,disableApp:t.disableApp,is_eu:n.is_eu,is_loading:t.is_loading,onSignup:n.onSignup,is_logged_in:n.is_logged_in,residence_list:n.residence_list,logout:n.logout}}))(P)}}]);
//# sourceMappingURL=core.account-signup-modal.e103b3a00756059b79e1.js.map