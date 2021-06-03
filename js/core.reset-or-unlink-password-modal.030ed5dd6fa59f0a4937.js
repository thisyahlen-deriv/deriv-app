(self.webpackChunk=self.webpackChunk||[]).push([[708],{27381:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>z});var n=r(32735),s=r(75672),a=r(77395),o=r(58468),i=r(60216),l=r.n(i),c=r(40841),u=r.n(c),d=r(44066),p=r(48680),_=r(20374);function m(e,t,r,n,s,a,o){try{var i=e[a](o),l=i.value}catch(e){return void r(e)}i.done?t(l):Promise.resolve(l).then(n,s)}var g=function(e){var t=e.logoutClient,r=e.social_identity_provider,s=e.toggleResetPasswordModal,i=e.verification_code,l=function(e,t){if(t.setSubmitting(!1),t.resetForm({password:""}),e)return console.error(e),void t.setStatus({error_msg:e});t.setStatus({reset_complete:!0})};return n.createElement("div",{className:"unlink-password"},n.createElement(d.Formik,{initialValues:{password:""},initialStatus:{reset_complete:!1,error_msg:""},validate:function(e){var t={};return(0,p.validLength)(e.password,{min:8,max:25})?(0,p.validPassword)(e.password)||(t.password=(0,p.getErrorMessages)().password()):t.password=(0,_.localize)("You should enter {{min_number}}-{{max_number}} characters.",{min_number:8,max_number:25}),t},onSubmit:function(e,t){var r={reset_password:1,new_password:e.password,verification_code:i};o.WS.resetPassword(r).then(function(){var e,r=(e=regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.error?l(r.error.message,t):l(null,t);case 1:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,s){var a=e.apply(t,r);function o(e){m(a,n,s,o,i,"next",e)}function i(e){m(a,n,s,o,i,"throw",e)}o(void 0)}))});return function(e){return r.apply(this,arguments)}}())}},(function(e){var o=e.handleBlur,i=e.errors,l=e.values,c=e.touched,m=e.isSubmitting,g=e.handleChange,f=e.status;return n.createElement(d.Form,null,n.createElement(n.Fragment,null,f.reset_complete?n.createElement("div",{className:"unlink-password__password-success"},n.createElement(a.Icon,{className:"unlink-password__icon",icon:"IcUnlink".concat((0,p.toTitleCase)(r)),size:128}),n.createElement(a.Text,{as:"p",weight:"bold",className:"unlink-password__heading"},n.createElement(_.Localize,{i18n_default_text:"Success!"})),n.createElement(a.Text,{align:"center",as:"p",size:"xs",className:"unlink-password__subtext"},n.createElement(_.Localize,{i18n_default_text:"Your Deriv account is unlinked from {{social_identity_provider}}. Use your email and password for future log in.",values:{social_identity_provider:(0,p.toTitleCase)(r)}})),n.createElement(a.Button,{type:"button",onClick:function(){s(!1),t().then((function(){(0,p.redirectToLogin)(!1,(0,_.getLanguage)(),!1)}))},primary:!0,large:!0},n.createElement(_.Localize,{i18n_default_text:"Got it"}))):n.createElement("div",{className:"unlink-password__set-password"},n.createElement(a.Text,{as:"p",weight:"bold",className:"unlink-password__heading"},n.createElement(_.Localize,{i18n_default_text:"Deriv password"})),n.createElement(a.Text,{as:"p",size:"xs",className:"unlink-password__subtext"},n.createElement(_.Localize,{i18n_default_text:"Enter a new password for your Deriv account."})),n.createElement("fieldset",{className:"unlink-password__input-field"},n.createElement(a.PasswordMeter,{input:l.password,has_error:!(!c.password||!i.password),custom_feedback_messages:(0,p.getErrorMessages)().password_warnings},n.createElement(a.PasswordInput,{autoComplete:"new-password",className:"unlink-password__password-field",name:"password",label:(0,_.localize)("Deriv password"),onChange:g,onBlur:o,error:c.password&&i.password,value:l.password,"data-lpignore":"true",required:!0}))),n.createElement(a.Text,{as:"p",size:"xs",className:"unlink-password__hint"},f.error_msg?(0,_.localize)(f.error_msg):n.createElement(_.Localize,{i18n_default_text:"Strong passwords contain at least 8 characters, combine uppercase and lowercase letters, numbers, and symbols."})),n.createElement(a.Button,{className:u()("unlink-password__btn",{"unlink-password__btn--disabled":!l.password||i.password||m}),type:"submit",is_disabled:!l.password||!!i.password||m,primary:!0,large:!0},n.createElement(_.Localize,{i18n_default_text:"Confirm"})))))})))};g.propTypes={logoutClient:l().func,toggleResetPasswordModal:l().func,verification_code:l().string};var f=function(e){var t=e.disableApp,r=e.enableApp,s=e.is_loading,o=e.is_visible,i=e.logoutClient,l=e.social_identity_provider,c=e.toggleResetPasswordModal,u=e.verification_code;return n.createElement(a.Dialog,{className:"unlink-password__dialog",is_visible:o,disableApp:t,enableApp:r,is_loading:s},n.createElement(g,{logoutClient:i,social_identity_provider:l,toggleResetPasswordModal:c,verification_code:u}))};f.propTypes={disableApp:l().func,enableApp:l().func,is_loading:l().bool,is_visible:l().bool,logoutClient:l().func,toggleResetPasswordModal:l().func,verification_code:l().string};const w=(0,s.$j)((function(e){var t=e.ui,r=e.client;return{disableApp:t.disableApp,enableApp:t.enableApp,is_loading:t.is_loading,is_visible:t.is_reset_password_modal_visible,logoutClient:r.logout,social_identity_provider:r.social_identity_provider,toggleResetPasswordModal:t.toggleResetPasswordModal,verification_code:r.verification_code.reset_password}}))(f);function v(e,t,r,n,s,a,o){try{var i=e[a](o),l=i.value}catch(e){return void r(e)}i.done?t(l):Promise.resolve(l).then(n,s)}var b=function(e){var t=e.logoutClient,r=e.verification_code,s=function(e,r){if(r.setSubmitting(!1),e)return r.resetForm({password:""}),console.error(e),void r.setStatus({error_msg:e});r.setStatus({reset_complete:!0}),t().then((function(){(0,p.redirectToLogin)(!1,(0,_.getLanguage)(),!1)}))};return n.createElement("div",{className:"reset-password"},n.createElement(d.Formik,{initialValues:{password:""},initialStatus:{reset_complete:!1,error_msg:""},validate:function(e){var t={};return(0,p.validLength)(e.password,{min:8,max:25})?(0,p.validPassword)(e.password)||(t.password=(0,p.getErrorMessages)().password()):t.password=(0,_.localize)("You should enter {{min_number}}-{{max_number}} characters.",{min_number:8,max_number:25}),t},onSubmit:function(e,t){var n={reset_password:1,new_password:e.password,verification_code:r};o.WS.resetPassword(n).then(function(){var e,r=(e=regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.error?s(r.error.message,t):s(null,t);case 1:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,s){var a=e.apply(t,r);function o(e){v(a,n,s,o,i,"next",e)}function i(e){v(a,n,s,o,i,"throw",e)}o(void 0)}))});return function(e){return r.apply(this,arguments)}}())}},(function(e){var t=e.handleBlur,r=e.errors,s=e.values,o=e.touched,i=e.isSubmitting,l=e.handleChange,c=e.status;return n.createElement(d.Form,null,n.createElement(n.Fragment,null,c.reset_complete?n.createElement("div",{className:"reset-password__password-selection"},n.createElement(a.Text,{as:"p",weight:"bold",className:"reset-password__heading"},n.createElement(_.Localize,{i18n_default_text:"Your password has been changed"})),n.createElement(a.Text,{align:"center",as:"p",size:"xxs",className:"reset-password__subtext"},n.createElement(_.Localize,{i18n_default_text:"We will now redirect you to the login page."}))):n.createElement("div",{className:"reset-password__password-selection"},n.createElement(a.Text,{as:"p",weight:"bold",className:"reset-password__heading"},n.createElement(_.Localize,{i18n_default_text:"Choose a new password"})),n.createElement("fieldset",{className:"reset-password__fieldset"},n.createElement(a.PasswordMeter,{input:s.password,has_error:!(!o.password||!r.password)||c.error_msg,custom_feedback_messages:(0,p.getErrorMessages)().password_warnings},n.createElement(a.PasswordInput,{autoComplete:"new-password",className:"reset-password__password-field",name:"password",label:(0,_.localize)("Create a password"),onChange:l,onBlur:t,error:o.password&&r.password||c.error_msg,value:s.password,"data-lpignore":"true",required:!0}))),n.createElement(a.Text,{align:"center",as:"p",size:"xxs",className:"reset-password__subtext"},c.error_msg?n.createElement(_.Localize,{i18n_default_text:"{{error_msg}}",values:{error_msg:c.error_msg}}):n.createElement(_.Localize,{i18n_default_text:"Strong passwords contain at least 8 characters, combine uppercase and lowercase letters, numbers, and symbols."})),n.createElement(a.Button,{className:u()("reset-password__btn",{"reset-password__btn--disabled":!s.password||r.password||i}),type:"submit",is_disabled:!s.password||!!r.password||i,primary:!0},n.createElement(_.Localize,{i18n_default_text:"Reset my password"})))))})))};b.propTypes={logoutClient:l().func,verification_code:l().string};var h=function(e){var t=e.disableApp,r=e.enableApp,s=e.is_loading,o=e.is_visible,i=e.logoutClient,l=e.verification_code;return n.createElement(a.Dialog,{is_visible:o,disableApp:t,enableApp:r,is_loading:s},n.createElement(b,{verification_code:l,logoutClient:i}))};h.propTypes={disableApp:l().func,enableApp:l().func,is_loading:l().bool,is_visible:l().bool,logoutClient:l().func,verification_code:l().string};const y=(0,s.$j)((function(e){var t=e.ui,r=e.client;return{disableApp:t.disableApp,enableApp:t.enableApp,is_loading:t.is_loading,is_visible:t.is_reset_password_modal_visible,logoutClient:r.logout,verification_code:r.verification_code.reset_password}}))(h);function E(e,t,r,n,s,a,o){try{var i=e[a](o),l=i.value}catch(e){return void r(e)}i.done?t(l):Promise.resolve(l).then(n,s)}function x(e){return function(){var t=this,r=arguments;return new Promise((function(n,s){var a=e.apply(t,r);function o(e){E(a,n,s,o,i,"next",e)}function i(e){E(a,n,s,o,i,"throw",e)}o(void 0)}))}}function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){C(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function C(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,s=!1,a=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){s=!0,a=e}finally{try{n||null==i.return||i.return()}finally{if(s)throw a}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return S(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return S(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const z=(0,s.$j)((function(e){return{is_logged_in:e.client.is_logged_in}}))((function(e){var t=e.is_logged_in,r=A(n.useReducer((function(e,t){return P(P({},e),t)}),{is_loading:!0,is_unlinking:!1}),2),s=r[0],i=r[1];return n.useEffect((function(){function e(){return(e=x(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=7;break}return e.next=3,o.WS.wait("get_account_status");case 3:null!=(n=e.sent)&&null!==(r=n.get_account_status)&&void 0!==r&&r.social_identity_provider?i({is_unlinking:!0,is_loading:!1}):i({is_unlinking:!1,is_loading:!1}),e.next=8;break;case 7:i({is_unlinking:!1,is_loading:!1});case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),s.is_loading?n.createElement(a.Loading,{is_fullscreen:!1}):s.is_unlinking?n.createElement(w,null):n.createElement(y,null)}))}}]);