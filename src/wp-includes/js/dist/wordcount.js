/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/wordcount/build-module/defaultSettings.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/wordcount/build-module/defaultSettings.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultSettings": function() { return /* binding */ defaultSettings; }
/* harmony export */ });
/** @typedef {import('./index').WPWordCountStrategy} WPWordCountStrategy */

/** @typedef {Partial<{type: WPWordCountStrategy, shortcodes: string[]}>} WPWordCountL10n */

/**
 * @typedef WPWordCountSettingsFields
 * @property {RegExp}              HTMLRegExp                        Regular expression that matches HTML tags
 * @property {RegExp}              HTMLcommentRegExp                 Regular expression that matches HTML comments
 * @property {RegExp}              spaceRegExp                       Regular expression that matches spaces in HTML
 * @property {RegExp}              HTMLEntityRegExp                  Regular expression that matches HTML entities
 * @property {RegExp}              connectorRegExp                   Regular expression that matches word connectors, like em-dash
 * @property {RegExp}              removeRegExp                      Regular expression that matches various characters to be removed when counting
 * @property {RegExp}              astralRegExp                      Regular expression that matches astral UTF-16 code points
 * @property {RegExp}              wordsRegExp                       Regular expression that matches words
 * @property {RegExp}              characters_excluding_spacesRegExp Regular expression that matches characters excluding spaces
 * @property {RegExp}              characters_including_spacesRegExp Regular expression that matches characters including spaces
 * @property {RegExp}              shortcodesRegExp                  Regular expression that matches WordPress shortcodes
 * @property {string[]}            shortcodes                        List of all shortcodes
 * @property {WPWordCountStrategy} type                              Describes what and how are we counting
 * @property {WPWordCountL10n}     l10n                              Object with human translations
 */

/**
 * Lower-level settings for word counting that can be overridden.
 *
 * @typedef {Partial<WPWordCountSettingsFields>} WPWordCountUserSettings
 */
// Disable reason: JSDoc linter doesn't seem to parse the union (`&`) correctly: https://github.com/jsdoc/jsdoc/issues/1285

/* eslint-disable jsdoc/valid-types */

/**
 * Word counting settings that include non-optional values we set if missing
 *
 * @typedef {WPWordCountUserSettings & typeof defaultSettings} WPWordCountDefaultSettings
 */

/* eslint-enable jsdoc/valid-types */
const defaultSettings = {
  HTMLRegExp: /<\/?[a-z][^>]*?>/gi,
  HTMLcommentRegExp: /<!--[\s\S]*?-->/g,
  spaceRegExp: /&nbsp;|&#160;/gi,
  HTMLEntityRegExp: /&\S+?;/g,
  // \u2014 = em-dash.
  connectorRegExp: /--|\u2014/g,
  // Characters to be removed from input text.
  removeRegExp: new RegExp(['[', // Basic Latin (extract)
  '\u0021-\u002F\u003A-\u0040\u005B-\u0060\u007B-\u007E', // Latin-1 Supplement (extract)
  '\u0080-\u00BF\u00D7\u00F7',
  /*
   * The following range consists of:
   * General Punctuation
   * Superscripts and Subscripts
   * Currency Symbols
   * Combining Diacritical Marks for Symbols
   * Letterlike Symbols
   * Number Forms
   * Arrows
   * Mathematical Operators
   * Miscellaneous Technical
   * Control Pictures
   * Optical Character Recognition
   * Enclosed Alphanumerics
   * Box Drawing
   * Block Elements
   * Geometric Shapes
   * Miscellaneous Symbols
   * Dingbats
   * Miscellaneous Mathematical Symbols-A
   * Supplemental Arrows-A
   * Braille Patterns
   * Supplemental Arrows-B
   * Miscellaneous Mathematical Symbols-B
   * Supplemental Mathematical Operators
   * Miscellaneous Symbols and Arrows
   */
  '\u2000-\u2BFF', // Supplemental Punctuation.
  '\u2E00-\u2E7F', ']'].join(''), 'g'),
  // Remove UTF-16 surrogate points, see https://en.wikipedia.org/wiki/UTF-16#U.2BD800_to_U.2BDFFF
  astralRegExp: /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
  wordsRegExp: /\S\s+/g,
  characters_excluding_spacesRegExp: /\S/g,

  /*
   * Match anything that is not a formatting character, excluding:
   * \f = form feed
   * \n = new line
   * \r = carriage return
   * \t = tab
   * \v = vertical tab
   * \u00AD = soft hyphen
   * \u2028 = line separator
   * \u2029 = paragraph separator
   */
  characters_including_spacesRegExp: /[^\f\n\r\t\v\u00AD\u2028\u2029]/g,
  l10n: {
    type: 'words'
  }
};


/***/ }),

/***/ "./node_modules/@wordpress/wordcount/build-module/stripConnectors.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/wordcount/build-module/stripConnectors.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ stripConnectors; }
/* harmony export */ });
/**
 * Replaces items matched in the regex with spaces.
 *
 * @param {import('./index').WPWordCountSettings} settings The main settings object containing regular expressions
 * @param {string}                                text     The string being counted.
 *
 * @return {string} The manipulated text.
 */
function stripConnectors(settings, text) {
  return text.replace(settings.connectorRegExp, ' ');
}


/***/ }),

/***/ "./node_modules/@wordpress/wordcount/build-module/stripHTMLComments.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@wordpress/wordcount/build-module/stripHTMLComments.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ stripHTMLComments; }
/* harmony export */ });
/**
 * Removes items matched in the regex.
 *
 * @param {import('./index').WPWordCountSettings} settings The main settings object containing regular expressions
 * @param {string}                                text     The string being counted.
 *
 * @return {string} The manipulated text.
 */
function stripHTMLComments(settings, text) {
  return text.replace(settings.HTMLcommentRegExp, '');
}


/***/ }),

/***/ "./node_modules/@wordpress/wordcount/build-module/stripHTMLEntities.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@wordpress/wordcount/build-module/stripHTMLEntities.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ stripHTMLEntities; }
/* harmony export */ });
/**
 * Removes items matched in the regex.
 *
 * @param {import('./index').WPWordCountSettings} settings The main settings object containing regular expressions
 * @param {string}                                text     The string being counted.
 *
 * @return {string} The manipulated text.
 */
function stripHTMLEntities(settings, text) {
  return text.replace(settings.HTMLEntityRegExp, '');
}


/***/ }),

/***/ "./node_modules/@wordpress/wordcount/build-module/stripRemovables.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/wordcount/build-module/stripRemovables.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ stripRemovables; }
/* harmony export */ });
/**
 * Removes items matched in the regex.
 *
 * @param {import('./index').WPWordCountSettings} settings The main settings object containing regular expressions
 * @param {string}                                text     The string being counted.
 *
 * @return {string} The manipulated text.
 */
function stripRemovables(settings, text) {
  return text.replace(settings.removeRegExp, '');
}


/***/ }),

/***/ "./node_modules/@wordpress/wordcount/build-module/stripShortcodes.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/wordcount/build-module/stripShortcodes.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ stripShortcodes; }
/* harmony export */ });
/**
 * Replaces items matched in the regex with a new line.
 *
 * @param {import('./index').WPWordCountSettings} settings The main settings object containing regular expressions
 * @param {string}                                text     The string being counted.
 *
 * @return {string} The manipulated text.
 */
function stripShortcodes(settings, text) {
  if (settings.shortcodesRegExp) {
    return text.replace(settings.shortcodesRegExp, '\n');
  }

  return text;
}


/***/ }),

/***/ "./node_modules/@wordpress/wordcount/build-module/stripSpaces.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/wordcount/build-module/stripSpaces.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ stripSpaces; }
/* harmony export */ });
/**
 * Replaces items matched in the regex with spaces.
 *
 * @param {import('./index').WPWordCountSettings} settings The main settings object containing regular expressions
 * @param {string}                                text     The string being counted.
 *
 * @return {string} The manipulated text.
 */
function stripSpaces(settings, text) {
  return text.replace(settings.spaceRegExp, ' ');
}


/***/ }),

/***/ "./node_modules/@wordpress/wordcount/build-module/stripTags.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/wordcount/build-module/stripTags.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ stripTags; }
/* harmony export */ });
/**
 * Replaces items matched in the regex with new line
 *
 * @param {import('./index').WPWordCountSettings} settings The main settings object containing regular expressions
 * @param {string}                                text     The string being counted.
 *
 * @return {string} The manipulated text.
 */
function stripTags(settings, text) {
  return text.replace(settings.HTMLRegExp, '\n');
}


/***/ }),

/***/ "./node_modules/@wordpress/wordcount/build-module/transposeAstralsToCountableChar.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@wordpress/wordcount/build-module/transposeAstralsToCountableChar.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ transposeAstralsToCountableChar; }
/* harmony export */ });
/**
 * Replaces items matched in the regex with character.
 *
 * @param {import('./index').WPWordCountSettings} settings The main settings object containing regular expressions
 * @param {string}                                text     The string being counted.
 *
 * @return {string} The manipulated text.
 */
function transposeAstralsToCountableChar(settings, text) {
  return text.replace(settings.astralRegExp, 'a');
}


/***/ }),

/***/ "./node_modules/@wordpress/wordcount/build-module/transposeHTMLEntitiesToCountableChars.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@wordpress/wordcount/build-module/transposeHTMLEntitiesToCountableChars.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ transposeHTMLEntitiesToCountableChars; }
/* harmony export */ });
/**
 * Replaces items matched in the regex with a single character.
 *
 * @param {import('./index').WPWordCountSettings} settings The main settings object containing regular expressions
 * @param {string}                                text     The string being counted.
 *
 * @return {string} The manipulated text.
 */
function transposeHTMLEntitiesToCountableChars(settings, text) {
  return text.replace(settings.HTMLEntityRegExp, 'a');
}


/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ (function(module) {

module.exports = window["lodash"];

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
/*!*****************************************************************!*\
  !*** ./node_modules/@wordpress/wordcount/build-module/index.js ***!
  \*****************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "count": function() { return /* binding */ count; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _defaultSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultSettings */ "./node_modules/@wordpress/wordcount/build-module/defaultSettings.js");
/* harmony import */ var _stripTags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stripTags */ "./node_modules/@wordpress/wordcount/build-module/stripTags.js");
/* harmony import */ var _transposeAstralsToCountableChar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./transposeAstralsToCountableChar */ "./node_modules/@wordpress/wordcount/build-module/transposeAstralsToCountableChar.js");
/* harmony import */ var _stripHTMLEntities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stripHTMLEntities */ "./node_modules/@wordpress/wordcount/build-module/stripHTMLEntities.js");
/* harmony import */ var _stripConnectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stripConnectors */ "./node_modules/@wordpress/wordcount/build-module/stripConnectors.js");
/* harmony import */ var _stripRemovables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stripRemovables */ "./node_modules/@wordpress/wordcount/build-module/stripRemovables.js");
/* harmony import */ var _stripHTMLComments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stripHTMLComments */ "./node_modules/@wordpress/wordcount/build-module/stripHTMLComments.js");
/* harmony import */ var _stripShortcodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stripShortcodes */ "./node_modules/@wordpress/wordcount/build-module/stripShortcodes.js");
/* harmony import */ var _stripSpaces__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stripSpaces */ "./node_modules/@wordpress/wordcount/build-module/stripSpaces.js");
/* harmony import */ var _transposeHTMLEntitiesToCountableChars__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./transposeHTMLEntitiesToCountableChars */ "./node_modules/@wordpress/wordcount/build-module/transposeHTMLEntitiesToCountableChars.js");
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */











/**
 * @typedef {import('./defaultSettings').WPWordCountDefaultSettings}  WPWordCountSettings
 * @typedef {import('./defaultSettings').WPWordCountUserSettings}     WPWordCountUserSettings
 */

/**
 * Possible ways of counting.
 *
 * @typedef {'words'|'characters_excluding_spaces'|'characters_including_spaces'} WPWordCountStrategy
 */

/**
 * Private function to manage the settings.
 *
 * @param {WPWordCountStrategy}     type         The type of count to be done.
 * @param {WPWordCountUserSettings} userSettings Custom settings for the count.
 *
 * @return {WPWordCountSettings} The combined settings object to be used.
 */

function loadSettings(type, userSettings) {
  var _settings$l10n$shortc, _settings$l10n;

  const settings = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.extend)({}, _defaultSettings__WEBPACK_IMPORTED_MODULE_1__.defaultSettings, userSettings);
  settings.shortcodes = (_settings$l10n$shortc = (_settings$l10n = settings.l10n) === null || _settings$l10n === void 0 ? void 0 : _settings$l10n.shortcodes) !== null && _settings$l10n$shortc !== void 0 ? _settings$l10n$shortc : [];

  if (settings.shortcodes && settings.shortcodes.length) {
    settings.shortcodesRegExp = new RegExp('\\[\\/?(?:' + settings.shortcodes.join('|') + ')[^\\]]*?\\]', 'g');
  }

  settings.type = type;

  if (settings.type !== 'characters_excluding_spaces' && settings.type !== 'characters_including_spaces') {
    settings.type = 'words';
  }

  return settings;
}
/**
 * Count the words in text
 *
 * @param {string}              text     The text being processed
 * @param {RegExp}              regex    The regular expression pattern being matched
 * @param {WPWordCountSettings} settings Settings object containing regular expressions for each strip function
 *
 * @return {number} Count of words.
 */


function countWords(text, regex, settings) {
  var _text$match$length, _text$match;

  text = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.flow)(_stripTags__WEBPACK_IMPORTED_MODULE_2__["default"].bind(null, settings), _stripHTMLComments__WEBPACK_IMPORTED_MODULE_3__["default"].bind(null, settings), _stripShortcodes__WEBPACK_IMPORTED_MODULE_4__["default"].bind(null, settings), _stripSpaces__WEBPACK_IMPORTED_MODULE_5__["default"].bind(null, settings), _stripHTMLEntities__WEBPACK_IMPORTED_MODULE_6__["default"].bind(null, settings), _stripConnectors__WEBPACK_IMPORTED_MODULE_7__["default"].bind(null, settings), _stripRemovables__WEBPACK_IMPORTED_MODULE_8__["default"].bind(null, settings))(text);
  text = text + '\n';
  return (_text$match$length = (_text$match = text.match(regex)) === null || _text$match === void 0 ? void 0 : _text$match.length) !== null && _text$match$length !== void 0 ? _text$match$length : 0;
}
/**
 * Count the characters in text
 *
 * @param {string}              text     The text being processed
 * @param {RegExp}              regex    The regular expression pattern being matched
 * @param {WPWordCountSettings} settings Settings object containing regular expressions for each strip function
 *
 * @return {number} Count of characters.
 */


function countCharacters(text, regex, settings) {
  var _text$match$length2, _text$match2;

  text = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.flow)(_stripTags__WEBPACK_IMPORTED_MODULE_2__["default"].bind(null, settings), _stripHTMLComments__WEBPACK_IMPORTED_MODULE_3__["default"].bind(null, settings), _stripShortcodes__WEBPACK_IMPORTED_MODULE_4__["default"].bind(null, settings), _transposeAstralsToCountableChar__WEBPACK_IMPORTED_MODULE_9__["default"].bind(null, settings), _stripSpaces__WEBPACK_IMPORTED_MODULE_5__["default"].bind(null, settings), _transposeHTMLEntitiesToCountableChars__WEBPACK_IMPORTED_MODULE_10__["default"].bind(null, settings))(text);
  text = text + '\n';
  return (_text$match$length2 = (_text$match2 = text.match(regex)) === null || _text$match2 === void 0 ? void 0 : _text$match2.length) !== null && _text$match$length2 !== void 0 ? _text$match$length2 : 0;
}
/**
 * Count some words.
 *
 * @param {string}                  text         The text being processed
 * @param {WPWordCountStrategy}     type         The type of count. Accepts 'words', 'characters_excluding_spaces', or 'characters_including_spaces'.
 * @param {WPWordCountUserSettings} userSettings Custom settings object.
 *
 * @example
 * ```js
 * import { count } from '@wordpress/wordcount';
 * const numberOfWords = count( 'Words to count', 'words', {} )
 * ```
 *
 * @return {number} The word or character count.
 */


function count(text, type, userSettings) {
  const settings = loadSettings(type, userSettings);
  let matchRegExp;

  switch (settings.type) {
    case 'words':
      matchRegExp = settings.wordsRegExp;
      return countWords(text, matchRegExp, settings);

    case 'characters_including_spaces':
      matchRegExp = settings.characters_including_spacesRegExp;
      return countCharacters(text, matchRegExp, settings);

    case 'characters_excluding_spaces':
      matchRegExp = settings.characters_excluding_spacesRegExp;
      return countCharacters(text, matchRegExp, settings);

    default:
      return 0;
  }
}

}();
(window.wp = window.wp || {}).wordcount = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=wordcount.js.map