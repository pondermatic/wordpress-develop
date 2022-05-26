/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/server-side-render/build-module/server-side-render.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@wordpress/server-side-render/build-module/server-side-render.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ServerSideRender; },
/* harmony export */   "rendererPath": function() { return /* binding */ rendererPath; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_8__);



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */








function rendererPath(block) {
  let attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  let urlQueryArgs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_6__.addQueryArgs)(`/wp/v2/block-renderer/${block}`, {
    context: 'edit',
    ...(null !== attributes ? {
      attributes
    } : {}),
    ...urlQueryArgs
  });
}

function DefaultEmptyResponsePlaceholder(_ref) {
  let {
    className
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Placeholder, {
    className: className
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Block rendered as empty.'));
}

function DefaultErrorResponsePlaceholder(_ref2) {
  let {
    response,
    className
  } = _ref2;
  const errorMessage = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.sprintf)( // translators: %s: error message describing the problem
  (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Error loading block: %s'), response.errorMsg);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Placeholder, {
    className: className
  }, errorMessage);
}

function DefaultLoadingResponsePlaceholder(_ref3) {
  let {
    children,
    showLoader
  } = _ref3;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    style: {
      position: 'relative'
    }
  }, showLoader && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    style: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: '-9px',
      marginLeft: '-9px'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Spinner, null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    style: {
      opacity: showLoader ? '0.3' : 1
    }
  }, children));
}

function ServerSideRender(props) {
  const {
    attributes,
    block,
    className,
    httpMethod = 'GET',
    urlQueryArgs,
    EmptyResponsePlaceholder = DefaultEmptyResponsePlaceholder,
    ErrorResponsePlaceholder = DefaultErrorResponsePlaceholder,
    LoadingResponsePlaceholder = DefaultLoadingResponsePlaceholder
  } = props;
  const isMountedRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(true);
  const [showLoader, setShowLoader] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const fetchRequestRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const [response, setResponse] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const prevProps = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.usePrevious)(props);
  const [isLoading, setIsLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  function fetchData() {
    if (!isMountedRef.current) {
      return;
    }

    setIsLoading(true);

    const sanitizedAttributes = attributes && (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_8__.__experimentalSanitizeBlockAttributes)(block, attributes); // If httpMethod is 'POST', send the attributes in the request body instead of the URL.
    // This allows sending a larger attributes object than in a GET request, where the attributes are in the URL.


    const isPostRequest = 'POST' === httpMethod;
    const urlAttributes = isPostRequest ? null : sanitizedAttributes !== null && sanitizedAttributes !== void 0 ? sanitizedAttributes : null;
    const path = rendererPath(block, urlAttributes, urlQueryArgs);
    const data = isPostRequest ? {
      attributes: sanitizedAttributes !== null && sanitizedAttributes !== void 0 ? sanitizedAttributes : null
    } : null; // Store the latest fetch request so that when we process it, we can
    // check if it is the current request, to avoid race conditions on slow networks.

    const fetchRequest = fetchRequestRef.current = _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5___default()({
      path,
      data,
      method: isPostRequest ? 'POST' : 'GET'
    }).then(fetchResponse => {
      if (isMountedRef.current && fetchRequest === fetchRequestRef.current && fetchResponse) {
        setResponse(fetchResponse.rendered);
      }
    }).catch(error => {
      if (isMountedRef.current && fetchRequest === fetchRequestRef.current) {
        setResponse({
          error: true,
          errorMsg: error.message
        });
      }
    }).finally(() => {
      if (isMountedRef.current && fetchRequest === fetchRequestRef.current) {
        setIsLoading(false);
      }
    });
    return fetchRequest;
  }

  const debouncedFetchData = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.useDebounce)(fetchData, 500); // When the component unmounts, set isMountedRef to false. This will
  // let the async fetch callbacks know when to stop.

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => () => {
    isMountedRef.current = false;
  }, []);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    // Don't debounce the first fetch. This ensures that the first render
    // shows data as soon as possible.
    if (prevProps === undefined) {
      fetchData();
    } else if (!(0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEqual)(prevProps, props)) {
      debouncedFetchData();
    }
  });
  /**
   * Effect to handle showing the loading placeholder.
   * Show it only if there is no previous response or
   * the request takes more than one second.
   */

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!isLoading) {
      return;
    }

    const timeout = setTimeout(() => {
      setShowLoader(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [isLoading]);
  const hasResponse = !!response;
  const hasEmptyResponse = response === '';
  const hasError = response === null || response === void 0 ? void 0 : response.error;

  if (isLoading) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(LoadingResponsePlaceholder, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      showLoader: showLoader
    }), hasResponse && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.RawHTML, {
      className: className
    }, response));
  }

  if (hasEmptyResponse || !hasResponse) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(EmptyResponsePlaceholder, props);
  }

  if (hasError) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ErrorResponsePlaceholder, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      response: response
    }, props));
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.RawHTML, {
    className: className
  }, response);
}


/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ (function(module) {

module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["compose"];

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

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/url":
/*!*****************************!*\
  !*** external ["wp","url"] ***!
  \*****************************/
/***/ (function(module) {

module.exports = window["wp"]["url"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

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
/*!**************************************************************************!*\
  !*** ./node_modules/@wordpress/server-side-render/build-module/index.js ***!
  \**************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/deprecated */ "@wordpress/deprecated");
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _server_side_render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./server-side-render */ "./node_modules/@wordpress/server-side-render/build-module/server-side-render.js");



/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


/**
 * Constants
 */

const EMPTY_OBJECT = {};
const ExportedServerSideRender = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.withSelect)(select => {
  // FIXME: @wordpress/server-side-render should not depend on @wordpress/editor.
  // It is used by blocks that can be loaded into a *non-post* block editor.
  // eslint-disable-next-line @wordpress/data-no-store-string-literals
  const coreEditorSelect = select('core/editor');

  if (coreEditorSelect) {
    const currentPostId = coreEditorSelect.getCurrentPostId(); // For templates and template parts we use a custom ID format.
    // Since they aren't real posts, we don't want to use their ID
    // for server-side rendering. Since they use a string based ID,
    // we can assume real post IDs are numbers.

    if (currentPostId && typeof currentPostId === 'number') {
      return {
        currentPostId
      };
    }
  }

  return EMPTY_OBJECT;
})(_ref => {
  let {
    urlQueryArgs = EMPTY_OBJECT,
    currentPostId,
    ...props
  } = _ref;
  const newUrlQueryArgs = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if (!currentPostId) {
      return urlQueryArgs;
    }

    return {
      post_id: currentPostId,
      ...urlQueryArgs
    };
  }, [currentPostId, urlQueryArgs]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_server_side_render__WEBPACK_IMPORTED_MODULE_4__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    urlQueryArgs: newUrlQueryArgs
  }, props));
});

if (window && window.wp && window.wp.components) {
  window.wp.components.ServerSideRender = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref) => {
    _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_3___default()('wp.components.ServerSideRender', {
      version: '6.2',
      since: '5.3',
      alternative: 'wp.serverSideRender'
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ExportedServerSideRender, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      ref: ref
    }));
  });
}

/* harmony default export */ __webpack_exports__["default"] = (ExportedServerSideRender);

}();
(window.wp = window.wp || {}).serverSideRender = __webpack_exports__["default"];
/******/ })()
;
//# sourceMappingURL=server-side-render.js.map