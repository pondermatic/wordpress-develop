/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/block-library/build-module/file/utils.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@wordpress/block-library/build-module/file/utils.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "browserSupportsPdfs": function() { return /* binding */ browserSupportsPdfs; },
/* harmony export */   "hidePdfEmbedsOnUnsupportedBrowsers": function() { return /* binding */ hidePdfEmbedsOnUnsupportedBrowsers; }
/* harmony export */ });
/**
 * Uses a combination of user agent matching and feature detection to determine whether
 * the current browser supports rendering PDFs inline.
 *
 * @return {boolean} Whether or not the browser supports inline PDFs.
 */
const browserSupportsPdfs = () => {
  // Most mobile devices include "Mobi" in their UA.
  if (window.navigator.userAgent.indexOf('Mobi') > -1) {
    return false;
  } // Android tablets are the noteable exception.


  if (window.navigator.userAgent.indexOf('Android') > -1) {
    return false;
  } // iPad pretends to be a Mac.


  if (window.navigator.userAgent.indexOf('Macintosh') > -1 && window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 2) {
    return false;
  } // IE only supports PDFs when there's an ActiveX object available for it.


  if (!!(window.ActiveXObject || 'ActiveXObject' in window) && !(createActiveXObject('AcroPDF.PDF') || createActiveXObject('PDF.PdfCtrl'))) {
    return false;
  }

  return true;
};
/**
 * Helper function for creating ActiveX objects, catching any errors that are thrown
 * when it's generated.
 *
 * @param {string} type The name of the ActiveX object to create.
 * @return {window.ActiveXObject|undefined} The generated ActiveXObject, or null if it failed.
 */

const createActiveXObject = type => {
  let ax;

  try {
    ax = new window.ActiveXObject(type);
  } catch (e) {
    ax = undefined;
  }

  return ax;
};
/**
 * Hides all .wp-block-file__embed elements on the document. This function is only intended
 * to be run on the front-end, it may have weird side effects running in the block editor.
 */


const hidePdfEmbedsOnUnsupportedBrowsers = () => {
  if (!browserSupportsPdfs()) {
    const embeds = document.getElementsByClassName('wp-block-file__embed');
    Array.from(embeds).forEach(embed => {
      embed.style.display = 'none';
    });
  }
};


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
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/block-library/build-module/file/view.js ***!
  \*************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/@wordpress/block-library/build-module/file/utils.js");
/**
 * Internal dependencies
 */

(0,_utils__WEBPACK_IMPORTED_MODULE_0__.hidePdfEmbedsOnUnsupportedBrowsers)();

}();
/******/ })()
;
//# sourceMappingURL=view.js.map