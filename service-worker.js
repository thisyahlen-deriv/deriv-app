/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-461a00f8'], (function (workbox) { 'use strict';

  /**
  * Welcome to your Workbox-powered service worker!
  *
  * You'll need to register this file in your web app.
  * See https://goo.gl/nhQhGp
  *
  * The rest of the code is auto-generated. Please don't update this file
  * directly; instead, make changes to your Workbox build configuration
  * and re-run your build process.
  * See https://goo.gl/2aRDsh
  */

  self.skipWaiting();
  workbox.clientsClaim();
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */

  workbox.precacheAndRoute([{
    "url": "/appstore/js/appstore.appstore.651b7b47e33523736637.js",
    "revision": "cf235809dd7d2b06e462065e8d3eec95"
  }, {
    "url": "/appstore/js/appstore.vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_cssW-9a2d27.6471bb0a1f7d6a37d7d9.js",
    "revision": "bacfb981b02dcc41b09aae2e529720d4"
  }, {
    "url": "/appstore/js/index.js",
    "revision": "5215859e0ee1ea8f8bc1be094270633f"
  }, {
    "url": "/cfd/css/cfd.cfd-app.68dcf1e950388cee0a50.css",
    "revision": "72f76af441b22d635961ccea45271e0e"
  }, {
    "url": "/cfd/js/cfd.404.fc25d64939f5696d4263.js",
    "revision": "81877dfd4858efaa21ac986d8323355f"
  }, {
    "url": "/cfd/js/cfd.cfd-app.4371667880dbd2da51b6.js",
    "revision": "b374bae9ce1dee9560231919921d03cb"
  }, {
    "url": "/cfd/js/cfd.js",
    "revision": "d7451a171ed4a57ff62f881e4e414559"
  }, {
    "url": "/cfd/js/cfd.vendors-node_modules_classnames_index_js-node_modules_formik_dist_formik_esm_js-node_modules_-611d03.84adde2259ac28334f4f.js",
    "revision": "b4e32495e1b5aa843d197f8c1de3e4ce"
  }, {
    "url": "/css/core.chunk.account-signup-modal.ad24b7330307616a6ae8.css",
    "revision": null
  }, {
    "url": "/css/core.chunk.cfd~account_dist_account_css_reset-trading-password-modal_css_e0dafe2b.6f4eaff62bb21641f116.css",
    "revision": null
  }, {
    "url": "/css/core.chunk.close-mx-mlt-account-modal.ae97e8b0c2586db536b8.css",
    "revision": null
  }, {
    "url": "/css/core.chunk.complaints-policy.53d18a47133c1c361e4b.css",
    "revision": null
  }, {
    "url": "/css/core.chunk.set-residence-modal.afdf6e9925f0446996ba.css",
    "revision": null
  }, {
    "url": "/css/core.main~A.dc8f335df7c1ed2489a6.main.css",
    "revision": null
  }, {
    "url": "/css/core.main~c.edd5ebc0e53882f33b52.main.css",
    "revision": null
  }, {
    "url": "/css/core.main~components_src_components_a.b25dd81654e4eaedbff0.main.css",
    "revision": null
  }, {
    "url": "/css/core.main~components_src_components_c.aa32eb13aeeacdd4e978.main.css",
    "revision": null
  }, {
    "url": "/css/core.main~components_src_components_l.9c60e7e4d8dacfeb475f.main.css",
    "revision": null
  }, {
    "url": "/css/core.main~s.0a12a77d1e51a4d8c745.main.css",
    "revision": null
  }, {
    "url": "/css/core.vendors-node_modules_deriv_deriv-api_dist_DerivAPIBasic_js-node_modules_deriv_deriv-onboardin-a0d54e.1078ab12527339fed36e.main.css",
    "revision": null
  }, {
    "url": "/js/core.account-info.2d65bcb713d7ca7c0c19.js",
    "revision": null
  }, {
    "url": "/js/core.account-signup-modal.e1e11be8ca2e6fa6cddd.js",
    "revision": null
  }, {
    "url": "/js/core.account.d6d1be756e6e5e71a924.js",
    "revision": null
  }, {
    "url": "/js/core.appstore.aa08dff485fd9d0d3ee4.js",
    "revision": null
  }, {
    "url": "/js/core.bot.e3592541c7bd9cbf860d.js",
    "revision": null
  }, {
    "url": "/js/core.cashier.c47a183d9995a2cad3cd.js",
    "revision": null
  }, {
    "url": "/js/core.cfd~account_dist_account_c.5a8b19b9b37d318e3f4a.js",
    "revision": null
  }, {
    "url": "/js/core.cfd~account_dist_account_js_poa-e.d9700ee9ee6e52b7d2a0.js",
    "revision": null
  }, {
    "url": "/js/core.cfd~account_dist_account_js_reset-trading-password-modal_js_ff517517.abb27a8473f3abf56be9.js",
    "revision": null
  }, {
    "url": "/js/core.cfd~cfd_dist_cfd_js_cfd_js_3be34de1.dc52b10f881afce3262f.js",
    "revision": null
  }, {
    "url": "/js/core.close-mx-mlt-account-modal.06dca10cf9a265d6dc0a.js",
    "revision": null
  }, {
    "url": "/js/core.complaints-policy.abfdb9f5be30c477c424.js",
    "revision": null
  }, {
    "url": "/js/core.default-account_dist_account_js_sent-email-modal_js.48a04ebaf328d1fdd406.js",
    "revision": null
  }, {
    "url": "/js/core.main~App_C.00f2a6d9e1c970e763a3.js",
    "revision": null
  }, {
    "url": "/js/core.main~App_Components_E.4164469f5c590f2a52bc.js",
    "revision": null
  }, {
    "url": "/js/core.main~App_Cons.2ff44405323f0f974e73.js",
    "revision": null
  }, {
    "url": "/js/core.main~As.085ff03b0fc5168b5b09.js",
    "revision": null
  }, {
    "url": "/js/core.main~Se.d5b3e7251b2ca61f5c6f.js",
    "revision": null
  }, {
    "url": "/js/core.main~Stores_c.1914d778f41dcba2ddc3.js",
    "revision": null
  }, {
    "url": "/js/core.main~Stores_m.b531435d502b5d22d743.js",
    "revision": null
  }, {
    "url": "/js/core.main~U.441185d0ca5bfa2b8fea.js",
    "revision": null
  }, {
    "url": "/js/core.main~account_dist_account_js_a.249620d16cade1d31a31.js",
    "revision": null
  }, {
    "url": "/js/core.main~account_dist_account_js_account-limits_js_501e634c.50a76f6b2fc2274e9dfa.js",
    "revision": null
  }, {
    "url": "/js/core.main~account_dist_account_js_address-details_js_0928415f.8f876087d609a40fa4dd.js",
    "revision": null
  }, {
    "url": "/js/core.main~account_dist_account_js_api-token_js_a71678f7.107e061688bbd87fec8c.js",
    "revision": null
  }, {
    "url": "/js/core.main~account_dist_account_js_currency-selector_js_f2f9c8d9.e2b8b7024e7a382d3579.js",
    "revision": null
  }, {
    "url": "/js/core.main~account_dist_account_js_financial-details_js_0e7eaa58.7622fff02d8b92ff703c.js",
    "revision": null
  }, {
    "url": "/js/core.main~account_dist_account_js_personal-details_js_21b2d6f5.3648e09af5406110c6a7.js",
    "revision": null
  }, {
    "url": "/js/core.main~account_dist_account_js_self-exclusion_js_6be4b9cc.8c81949fdf780c89c439.js",
    "revision": null
  }, {
    "url": "/js/core.main~account_dist_account_js_terms-of-use_js_d9e09153.98ed9c7ce4a4befcd119.js",
    "revision": null
  }, {
    "url": "/js/core.main~c.75db6ffe9801dd257a10.js",
    "revision": null
  }, {
    "url": "/js/core.main~cashier_dist_cashier_js_cashier-store_js_77e8332f.30f8a841606152244015.js",
    "revision": null
  }, {
    "url": "/js/core.main~components_src_components_a.131ddb63f5b2fe12045c.js",
    "revision": null
  }, {
    "url": "/js/core.main~components_src_components_c.923c3044dee2f5708642.js",
    "revision": null
  }, {
    "url": "/js/core.main~components_src_components_l.604e5e7781af51baa156.js",
    "revision": null
  }, {
    "url": "/js/core.main~s.942653a122b7cb51c4fd.js",
    "revision": null
  }, {
    "url": "/js/core.reality-check-modal.e8a5acd3d813a47130e2.js",
    "revision": null
  }, {
    "url": "/js/core.reset-email-modal.f3a9d0132c1276ebf8a1.js",
    "revision": null
  }, {
    "url": "/js/core.reset-or-unlink-password-modal.bce8fa87f0c3233a1010.js",
    "revision": null
  }, {
    "url": "/js/core.reset-password-modal.ee4bc5c1bf35ca93e753.js",
    "revision": null
  }, {
    "url": "/js/core.set-residence-modal.f7c03ed4ae28da5ad114.js",
    "revision": null
  }, {
    "url": "/js/core.settings-language.eaad1ce1f5636118c194.js",
    "revision": null
  }, {
    "url": "/js/core.settings-theme.ea112e28e87e1b55faec.js",
    "revision": null
  }, {
    "url": "/js/core.trader.3e795eea08370beef093.js",
    "revision": null
  }, {
    "url": "/js/core.update-email-modal.785ba17f413c9d281ea6.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_attr-accept_dist_es_index_js-node_modules_babel-polyfill_lib_index_js-no-0a26ff.241e6fdce6b10956cef9.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_contentpass_zxcvbn_lib_frequency_lists_js.6314af75fb93509061cc.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_contentpass_zxcvbn_lib_main_js.3a05d03cce725e083ad0.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_core-js_fn_regexp_escape_js-node_modules_core-js_shim_js-node_modules_cr-1e24ef.e6086a3f68d1a56cfe96.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_deriv_deriv-api_dist_DerivAPIBasic_js-node_modules_deriv_deriv-onboardin-a0d54e.33f3b126233858640f50.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_emotion_memoize_dist_memoize_browser_esm_js-node_modules_emotion_stylis_-c87176.b318d80a4d65559bcb1e.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_file-selector_dist_es5_index_js-node_modules_focus-lock_dist_es2015_inde-6f23a7.18eceb8c4a77b8362ca8.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_html-escaper_esm_index_js-node_modules_html-parse-stringify_dist_html-pa-7ef592.df302d1760063ebd31c7.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_is-callable_index_js-node_modules_is-date-object_index_js-node_modules_i-2fb22e.2033b97765beec6a9cdb.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_mini-create-react-context_dist_esm_index_js-node_modules_mobx-react_dist-7803fa.2d4c6b77a8344fd3531b.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_moment_moment_js.aef452b86ea61092e2b4.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_object-assign_index_js-node_modules_object-inspect_index_js-node_modules-47ff9e.335020b5d9a7623f934b.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_promise-polyfill_src_index_js-node_modules_prop-types_index_js.b836b0dc31f0b5406149.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_raf_index_js-node_modules_react-content-loader_dist_react-content-loader-0730e5.e09eccb8b93bd3af161f.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_react-lifecycles-compat_react-lifecycles-compat_es_js-node_modules_react-b45a5f.4380b38c296c6026ac1e.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_react-transition-group_esm_CSSTransition_js-node_modules_react-transitio-85c8d7.259be7f9880d6fe824bd.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_react-transition-group_esm_index_js.c82e77b566ed04920c9a.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_react_index_js.b704f78ef2abc20ca4ea.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_rooks_use-mutation-observer_lib_index_esm_js-node_modules_scheduler_inde-a1a9fe.f95c2826c9ad889be437.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_scroll-smooth_dist_index_js-node_modules_scrollparent_scrollparent_js-no-e650d6.9daece6876815209ad5a.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_web-push-notifications_lib_index_js.bd027dd80524ed7ba87a.js",
    "revision": null
  }, {
    "url": "/js/core.welcome-modal~Ap.59bf186c0c5aeb1ee001.js",
    "revision": null
  }, {
    "url": "/js/core.welcome-modal~Assets_SvgComponents_onboarding_cfds_svg_af25ac66.1a71e744aad539675cd1.js",
    "revision": null
  }, {
    "url": "/js/core.welcome-modal~Assets_SvgComponents_onboarding_digital-options-mobile_svg_a765406b.746837f1f5e1f09b43e3.js",
    "revision": null
  }, {
    "url": "/js/core.welcome-modal~Assets_SvgComponents_onboarding_digital-options_svg_6a6a8cad.807227e37900ca345fbf.js",
    "revision": null
  }, {
    "url": "/js/core.welcome-modal~Assets_SvgComponents_onboarding_multipliers-mobile_svg_48db1f53.9b6d542e4b970ac5a38c.js",
    "revision": null
  }, {
    "url": "/js/core.welcome-modal~Assets_SvgComponents_onboarding_multipliers_svg_67df4c4b.0424adfe4efa50488187.js",
    "revision": null
  }, {
    "url": "/js/core.welcome-modal~Assets_SvgComponents_onboarding_not-sure-mobile_svg_9ad91f0b.b53d581de5280e10de8e.js",
    "revision": null
  }, {
    "url": "/js/core.welcome-modal~Assets_SvgComponents_onboarding_not-sure_svg_a469acfa.2e56a368d9cc878795a8.js",
    "revision": null
  }, {
    "url": "/public/images/app/header/dbot-logo.svg",
    "revision": "74dd603772623201c277552d07db9dea"
  }, {
    "url": "/public/images/app/header/dmt5-logo.svg",
    "revision": "bb9d72a69387257a410f35d42763287d"
  }, {
    "url": "/public/images/app/header/dtrader-logo.svg",
    "revision": "e0d36a7365f13540be65f2ba83781f83"
  }, {
    "url": "/public/images/common/404.png",
    "revision": "b2fd89fd64d75b5b75bb7e75f2bb9029"
  }, {
    "url": "/public/images/common/close_account_banner.png",
    "revision": "47457964f57828ac882a49dcd4009a1d"
  }, {
    "url": "/public/images/common/derivgo_banner.png",
    "revision": "cfa6bac9d229ecf1a60adcf0f9c283f9"
  }, {
    "url": "/public/images/common/dp2p_banner.png",
    "revision": "efbd723ab548be783bb6411d18cf168a"
  }, {
    "url": "/public/images/common/ke_alien_card.png",
    "revision": "8fc3d3345db92d1333e59a72ba5be769"
  }, {
    "url": "/public/images/common/ke_national_identity_card.png",
    "revision": "3d54bcbb6a019c272e28b15601774a2a"
  }, {
    "url": "/public/images/common/ke_passport.png",
    "revision": "d111da0604e97583feb278a206c8c5c3"
  }, {
    "url": "/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png",
    "revision": "8b90a2d122bd63b19b2987d8fca2c75d"
  }, {
    "url": "/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png",
    "revision": "cc6cdd9391b053108005c72f5dcc3a57"
  }, {
    "url": "/public/images/common/ng_drivers_license.png",
    "revision": "ad0c31da5da08e640308d2ea3447b681"
  }, {
    "url": "/public/images/common/ng_nin_slip.png",
    "revision": "d743586bddc5ddd91e0bb820f0718597"
  }, {
    "url": "/public/images/common/ng_voter_id.png",
    "revision": "47f0de9fd4bf1da1b9bda784889d7fd0"
  }, {
    "url": "/public/images/common/trustpilot_banner.png",
    "revision": "1561d90dfa4e20595ff9a3c4b3b8e239"
  }, {
    "url": "/public/images/common/welcome-bg-blue.b45a36e7985e837390d4dbec26bf1dce.svg",
    "revision": "d3de1dd75990ffc283952ec5e747d03c"
  }, {
    "url": "/public/images/common/welcome-bg-red.439aaf362ccc377e019dedcb7ddc34e0.svg",
    "revision": "f4e868a5a4c6bdab25fab2aaa04dbac5"
  }, {
    "url": "/public/images/common/za_national_identity_card.png",
    "revision": "48c0447163401fe1d2705072a7f1c9e8"
  }, {
    "url": "/public/sprites/brand.b3f15ed36d0d2db95a0646380655b7a2.svg",
    "revision": "20ad1e2992e66ccbba6c61f2e9079be0"
  }, {
    "url": "/public/sprites/cashier.4bb2c1f73ca1c7b098276b444a89f91d.svg",
    "revision": "0ccf4b8fea62ceab3335ad9eb381c88b"
  }, {
    "url": "/public/sprites/common.7ae6ed129006c85807c311831272ebbd.svg",
    "revision": "69543c6258a4c0fd1e3406f9a1335262"
  }, {
    "url": "/public/sprites/contract.1ca5743a5b5f7fd7201608c9301cc540.svg",
    "revision": "b505df6ba2e73a30257f3ccb7e1af7e1"
  }, {
    "url": "/public/sprites/currency.bb01e214db4460f58372ecb28c62765e.svg",
    "revision": "3955f98d0403f371acffa892627a39c6"
  }, {
    "url": "/public/sprites/dxtrade.3a8eee97254a48a1ca9cff7ba17491c8.svg",
    "revision": "177fb07c55e16c9e2f392e73fca70a89"
  }, {
    "url": "/public/sprites/flag.2679f4a3231842793a9c71fec07e0f8b.svg",
    "revision": "0b6be63adf18362585e1f439d7d20bae"
  }, {
    "url": "/public/sprites/mt5.9eefdebfceac37a07bc45349dfcb533f.svg",
    "revision": "c7c45ecc8d96bafbcd71b31389e3d078"
  }, {
    "url": "/public/sprites/option.3971bb040600e58a1e30dc008551a163.svg",
    "revision": "be90e5e9d25a16c5ebabf8c6b698dd57"
  }, {
    "url": "/public/sprites/stock.1a672b1203ae2066f107a58ffb137c9c.svg",
    "revision": "d8505022d6f871323ddb92c18208246a"
  }, {
    "url": "/public/sprites/tradetype.b9ed31953cc8da3d84bafb6f5e62ee3b.svg",
    "revision": "04d969ea5b62d0ad45915b5ace954021"
  }, {
    "url": "/public/sprites/underlying.8a87b48f77ed0ef90c3956e0388cb2e1.svg",
    "revision": "9f46924f43ab90194b035a6071eebace"
  }, {
    "url": "/public/sprites/wallet.04e5a96d8a64d80ba390218d17c0a487.svg",
    "revision": "a385d07b496daa519f7d61ca8cda77df"
  }], {});
  workbox.cleanupOutdatedCaches();

}));
//# sourceMappingURL=service-worker.js.map
