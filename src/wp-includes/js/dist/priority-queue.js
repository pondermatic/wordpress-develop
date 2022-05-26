/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/priority-queue/build-module/request-idle-callback.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@wordpress/priority-queue/build-module/request-idle-callback.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createRequestIdleCallback": function() { return /* binding */ createRequestIdleCallback; }
/* harmony export */ });
/**
 * @typedef {( timeOrDeadline: IdleDeadline | number ) => void} Callback
 */

/**
 * @return {(callback: Callback) => void} RequestIdleCallback
 */
function createRequestIdleCallback() {
  if (typeof window === 'undefined') {
    return callback => {
      setTimeout(() => callback(Date.now()), 0);
    };
  }

  return window.requestIdleCallback || window.requestAnimationFrame;
}
/* harmony default export */ __webpack_exports__["default"] = (createRequestIdleCallback());


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
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/priority-queue/build-module/index.js ***!
  \**********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createQueue": function() { return /* binding */ createQueue; }
/* harmony export */ });
/* harmony import */ var _request_idle_callback__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/@wordpress/priority-queue/build-module/request-idle-callback.js");
/**
 * Internal dependencies
 */

/**
 * Enqueued callback to invoke once idle time permits.
 *
 * @typedef {()=>void} WPPriorityQueueCallback
 */

/**
 * An object used to associate callbacks in a particular context grouping.
 *
 * @typedef {{}} WPPriorityQueueContext
 */

/**
 * Function to add callback to priority queue.
 *
 * @typedef {(element:WPPriorityQueueContext,item:WPPriorityQueueCallback)=>void} WPPriorityQueueAdd
 */

/**
 * Function to flush callbacks from priority queue.
 *
 * @typedef {(element:WPPriorityQueueContext)=>boolean} WPPriorityQueueFlush
 */

/**
 * Reset the queue.
 *
 * @typedef {()=>void} WPPriorityQueueReset
 */

/**
 * Priority queue instance.
 *
 * @typedef {Object} WPPriorityQueue
 *
 * @property {WPPriorityQueueAdd}   add   Add callback to queue for context.
 * @property {WPPriorityQueueFlush} flush Flush queue for context.
 * @property {WPPriorityQueueReset} reset Reset queue.
 */

/**
 * Creates a context-aware queue that only executes
 * the last task of a given context.
 *
 * @example
 *```js
 * import { createQueue } from '@wordpress/priority-queue';
 *
 * const queue = createQueue();
 *
 * // Context objects.
 * const ctx1 = {};
 * const ctx2 = {};
 *
 * // For a given context in the queue, only the last callback is executed.
 * queue.add( ctx1, () => console.log( 'This will be printed first' ) );
 * queue.add( ctx2, () => console.log( 'This won\'t be printed' ) );
 * queue.add( ctx2, () => console.log( 'This will be printed second' ) );
 *```
 *
 * @return {WPPriorityQueue} Queue object with `add`, `flush` and `reset` methods.
 */

const createQueue = () => {
  /** @type {WPPriorityQueueContext[]} */
  let waitingList = [];
  /** @type {WeakMap<WPPriorityQueueContext,WPPriorityQueueCallback>} */

  let elementsMap = new WeakMap();
  let isRunning = false;
  /**
   * Callback to process as much queue as time permits.
   *
   * @param {IdleDeadline|number} deadline Idle callback deadline object, or
   *                                       animation frame timestamp.
   */

  const runWaitingList = deadline => {
    const hasTimeRemaining = typeof deadline === 'number' ? () => false : () => deadline.timeRemaining() > 0;

    do {
      if (waitingList.length === 0) {
        isRunning = false;
        return;
      }

      const nextElement =
      /** @type {WPPriorityQueueContext} */
      waitingList.shift();
      const callback =
      /** @type {WPPriorityQueueCallback} */
      elementsMap.get(nextElement); // If errors with undefined callbacks are encountered double check that all of your useSelect calls
      // have all dependecies set correctly in second parameter. Missing dependencies can cause unexpected
      // loops and race conditions in the queue.

      callback();
      elementsMap.delete(nextElement);
    } while (hasTimeRemaining());

    (0,_request_idle_callback__WEBPACK_IMPORTED_MODULE_0__["default"])(runWaitingList);
  };
  /**
   * Add a callback to the queue for a given context.
   *
   * @type {WPPriorityQueueAdd}
   *
   * @param {WPPriorityQueueContext}  element Context object.
   * @param {WPPriorityQueueCallback} item    Callback function.
   */


  const add = (element, item) => {
    if (!elementsMap.has(element)) {
      waitingList.push(element);
    }

    elementsMap.set(element, item);

    if (!isRunning) {
      isRunning = true;
      (0,_request_idle_callback__WEBPACK_IMPORTED_MODULE_0__["default"])(runWaitingList);
    }
  };
  /**
   * Flushes queue for a given context, returning true if the flush was
   * performed, or false if there is no queue for the given context.
   *
   * @type {WPPriorityQueueFlush}
   *
   * @param {WPPriorityQueueContext} element Context object.
   *
   * @return {boolean} Whether flush was performed.
   */


  const flush = element => {
    if (!elementsMap.has(element)) {
      return false;
    }

    const index = waitingList.indexOf(element);
    waitingList.splice(index, 1);
    const callback =
    /** @type {WPPriorityQueueCallback} */
    elementsMap.get(element);
    elementsMap.delete(element);
    callback();
    return true;
  };
  /**
   * Reset the queue without running the pending callbacks.
   *
   * @type {WPPriorityQueueReset}
   */


  const reset = () => {
    waitingList = [];
    elementsMap = new WeakMap();
    isRunning = false;
  };

  return {
    add,
    flush,
    reset
  };
};

}();
(window.wp = window.wp || {}).priorityQueue = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=priority-queue.js.map