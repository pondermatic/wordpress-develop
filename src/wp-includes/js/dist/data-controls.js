/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/deprecated":
/*!************************************!*\
  !*** external ["wp","deprecated"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["deprecated"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/data-controls/build-module/index.js ***!
  \*********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__unstableAwaitPromise": function() { return /* binding */ __unstableAwaitPromise; },
/* harmony export */   "apiFetch": function() { return /* binding */ apiFetch; },
/* harmony export */   "controls": function() { return /* binding */ controls; },
/* harmony export */   "dispatch": function() { return /* binding */ dispatch; },
/* harmony export */   "select": function() { return /* binding */ select; },
/* harmony export */   "syncSelect": function() { return /* binding */ syncSelect; }
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/deprecated */ "@wordpress/deprecated");
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_2__);
/**
 * WordPress dependencies
 */



/**
 * Dispatches a control action for triggering an api fetch call.
 *
 * @param {Object} request Arguments for the fetch request.
 *
 * @example
 * ```js
 * import { apiFetch } from '@wordpress/data-controls';
 *
 * // Action generator using apiFetch
 * export function* myAction() {
 * 	const path = '/v2/my-api/items';
 * 	const items = yield apiFetch( { path } );
 * 	// do something with the items.
 * }
 * ```
 *
 * @return {Object} The control descriptor.
 */

function apiFetch(request) {
  return {
    type: 'API_FETCH',
    request
  };
}
/**
 * Control for resolving a selector in a registered data store.
 * Alias for the `resolveSelect` built-in control in the `@wordpress/data` package.
 *
 * @param {Array} args Arguments passed without change to the `@wordpress/data` control.
 */

function select() {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_2___default()('`select` control in `@wordpress/data-controls`', {
    since: '5.7',
    alternative: 'built-in `resolveSelect` control in `@wordpress/data`'
  });
  return _wordpress_data__WEBPACK_IMPORTED_MODULE_1__.controls.resolveSelect(...arguments);
}
/**
 * Control for calling a selector in a registered data store.
 * Alias for the `select` built-in control in the `@wordpress/data` package.
 *
 * @param {Array} args Arguments passed without change to the `@wordpress/data` control.
 */

function syncSelect() {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_2___default()('`syncSelect` control in `@wordpress/data-controls`', {
    since: '5.7',
    alternative: 'built-in `select` control in `@wordpress/data`'
  });
  return _wordpress_data__WEBPACK_IMPORTED_MODULE_1__.controls.select(...arguments);
}
/**
 * Control for dispatching an action in a registered data store.
 * Alias for the `dispatch` control in the `@wordpress/data` package.
 *
 * @param {Array} args Arguments passed without change to the `@wordpress/data` control.
 */

function dispatch() {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_2___default()('`dispatch` control in `@wordpress/data-controls`', {
    since: '5.7',
    alternative: 'built-in `dispatch` control in `@wordpress/data`'
  });
  return _wordpress_data__WEBPACK_IMPORTED_MODULE_1__.controls.dispatch(...arguments);
}
/**
 * Dispatches a control action for awaiting on a promise to be resolved.
 *
 * @param {Object} promise Promise to wait for.
 *
 * @example
 * ```js
 * import { __unstableAwaitPromise } from '@wordpress/data-controls';
 *
 * // Action generator using apiFetch
 * export function* myAction() {
 * 	const promise = getItemsAsync();
 * 	const items = yield __unstableAwaitPromise( promise );
 * 	// do something with the items.
 * }
 * ```
 *
 * @return {Object} The control descriptor.
 */

const __unstableAwaitPromise = function (promise) {
  return {
    type: 'AWAIT_PROMISE',
    promise
  };
};
/**
 * The default export is what you use to register the controls with your custom
 * store.
 *
 * @example
 * ```js
 * // WordPress dependencies
 * import { controls } from '@wordpress/data-controls';
 * import { registerStore } from '@wordpress/data';
 *
 * // Internal dependencies
 * import reducer from './reducer';
 * import * as selectors from './selectors';
 * import * as actions from './actions';
 * import * as resolvers from './resolvers';
 *
 * registerStore( 'my-custom-store', {
 * reducer,
 * controls,
 * actions,
 * selectors,
 * resolvers,
 * } );
 * ```
 * @return {Object} An object for registering the default controls with the
 * store.
 */

const controls = {
  AWAIT_PROMISE: _ref => {
    let {
      promise
    } = _ref;
    return promise;
  },

  API_FETCH(_ref2) {
    let {
      request
    } = _ref2;
    return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()(request);
  }

};

}();
(window.wp = window.wp || {}).dataControls = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data-controls.js.map