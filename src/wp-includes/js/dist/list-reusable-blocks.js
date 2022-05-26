/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/list-reusable-blocks/build-module/components/import-dropdown/index.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@wordpress/list-reusable-blocks/build-module/components/import-dropdown/index.js ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _import_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../import-form */ "./node_modules/@wordpress/list-reusable-blocks/build-module/components/import-form/index.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



function ImportDropdown(_ref) {
  let {
    onUpload
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Dropdown, {
    position: "bottom right",
    contentClassName: "list-reusable-blocks-import-dropdown__content",
    renderToggle: _ref2 => {
      let {
        isOpen,
        onToggle
      } = _ref2;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        "aria-expanded": isOpen,
        onClick: onToggle,
        variant: "primary"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Import from JSON'));
    },
    renderContent: _ref3 => {
      let {
        onClose
      } = _ref3;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_import_form__WEBPACK_IMPORTED_MODULE_4__["default"], {
        onUpload: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.flow)(onClose, onUpload)
      });
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (ImportDropdown);


/***/ }),

/***/ "./node_modules/@wordpress/list-reusable-blocks/build-module/components/import-form/index.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@wordpress/list-reusable-blocks/build-module/components/import-form/index.js ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_import__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/import */ "./node_modules/@wordpress/list-reusable-blocks/build-module/utils/import.js");


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



function ImportForm(_ref) {
  let {
    instanceId,
    onUpload
  } = _ref;
  const inputId = 'list-reusable-blocks-import-form-' + instanceId;
  const formRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const [isLoading, setIsLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [error, setError] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [file, setFile] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);

  const onChangeFile = event => {
    setFile(event.target.files[0]);
    setError(null);
  };

  const onSubmit = event => {
    event.preventDefault();

    if (!file) {
      return;
    }

    setIsLoading({
      isLoading: true
    });
    (0,_utils_import__WEBPACK_IMPORTED_MODULE_4__["default"])(file).then(reusableBlock => {
      if (!formRef) {
        return;
      }

      setIsLoading(false);
      onUpload(reusableBlock);
    }).catch(errors => {
      if (!formRef) {
        return;
      }

      let uiMessage;

      switch (errors.message) {
        case 'Invalid JSON file':
          uiMessage = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Invalid JSON file');
          break;

        case 'Invalid Reusable block JSON file':
          uiMessage = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Invalid Reusable block JSON file');
          break;

        default:
          uiMessage = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Unknown error');
      }

      setIsLoading(false);
      setError(uiMessage);
    });
  };

  const onDismissError = () => {
    setError(null);
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
    className: "list-reusable-blocks-import-form",
    onSubmit: onSubmit,
    ref: formRef
  }, error && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Notice, {
    status: "error",
    onRemove: () => onDismissError()
  }, error), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: inputId,
    className: "list-reusable-blocks-import-form__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('File')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    id: inputId,
    type: "file",
    onChange: onChangeFile
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    type: "submit",
    isBusy: isLoading,
    disabled: !file || isLoading,
    variant: "secondary",
    className: "list-reusable-blocks-import-form__button"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('Import', 'button label')));
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.withInstanceId)(ImportForm));


/***/ }),

/***/ "./node_modules/@wordpress/list-reusable-blocks/build-module/utils/export.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@wordpress/list-reusable-blocks/build-module/utils/export.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _file__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./file */ "./node_modules/@wordpress/list-reusable-blocks/build-module/utils/file.js");
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/**
 * Export a reusable block as a JSON file.
 *
 * @param {number} id
 */

async function exportReusableBlock(id) {
  const postType = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
    path: `/wp/v2/types/wp_block`
  });
  const post = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
    path: `/wp/v2/${postType.rest_base}/${id}?context=edit`
  });
  const title = post.title.raw;
  const content = post.content.raw;
  const fileContent = JSON.stringify({
    __file: 'wp_block',
    title,
    content
  }, null, 2);
  const fileName = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.kebabCase)(title) + '.json';
  (0,_file__WEBPACK_IMPORTED_MODULE_2__.download)(fileName, fileContent, 'application/json');
}

/* harmony default export */ __webpack_exports__["default"] = (exportReusableBlock);


/***/ }),

/***/ "./node_modules/@wordpress/list-reusable-blocks/build-module/utils/file.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@wordpress/list-reusable-blocks/build-module/utils/file.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "download": function() { return /* binding */ download; },
/* harmony export */   "readTextFile": function() { return /* binding */ readTextFile; }
/* harmony export */ });
/**
 * Downloads a file.
 *
 * @param {string} fileName    File Name.
 * @param {string} content     File Content.
 * @param {string} contentType File mime type.
 */
function download(fileName, content, contentType) {
  const file = new window.Blob([content], {
    type: contentType
  }); // IE11 can't use the click to download technique
  // we use a specific IE11 technique instead.

  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(file, fileName);
  } else {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}
/**
 * Reads the textual content of the given file.
 *
 * @param {File} file File.
 * @return {Promise<string>}  Content of the file.
 */

function readTextFile(file) {
  const reader = new window.FileReader();
  return new Promise(resolve => {
    reader.onload = () => {
      resolve(reader.result);
    };

    reader.readAsText(file);
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/list-reusable-blocks/build-module/utils/import.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@wordpress/list-reusable-blocks/build-module/utils/import.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _file__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./file */ "./node_modules/@wordpress/list-reusable-blocks/build-module/utils/file.js");
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/**
 * Import a reusable block from a JSON file.
 *
 * @param {File} file File.
 * @return {Promise} Promise returning the imported reusable block.
 */

async function importReusableBlock(file) {
  const fileContent = await (0,_file__WEBPACK_IMPORTED_MODULE_2__.readTextFile)(file);
  let parsedContent;

  try {
    parsedContent = JSON.parse(fileContent);
  } catch (e) {
    throw new Error('Invalid JSON file');
  }

  if (parsedContent.__file !== 'wp_block' || !parsedContent.title || !parsedContent.content || !(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isString)(parsedContent.title) || !(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isString)(parsedContent.content)) {
    throw new Error('Invalid Reusable block JSON file');
  }

  const postType = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
    path: `/wp/v2/types/wp_block`
  });
  const reusableBlock = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
    path: `/wp/v2/${postType.rest_base}`,
    data: {
      title: parsedContent.title,
      content: parsedContent.content,
      status: 'publish'
    },
    method: 'POST'
  });
  return reusableBlock;
}

/* harmony default export */ __webpack_exports__["default"] = (importReusableBlock);


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
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/list-reusable-blocks/build-module/index.js ***!
  \****************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_export__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/export */ "./node_modules/@wordpress/list-reusable-blocks/build-module/utils/export.js");
/* harmony import */ var _components_import_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/import-dropdown */ "./node_modules/@wordpress/list-reusable-blocks/build-module/components/import-dropdown/index.js");


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


 // Setup Export Links.

document.body.addEventListener('click', event => {
  if (!event.target.classList.contains('wp-list-reusable-blocks__export')) {
    return;
  }

  event.preventDefault();
  (0,_utils_export__WEBPACK_IMPORTED_MODULE_2__["default"])(event.target.dataset.id);
}); // Setup Import Form.

document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.page-title-action');

  if (!button) {
    return;
  }

  const showNotice = () => {
    const notice = document.createElement('div');
    notice.className = 'notice notice-success is-dismissible';
    notice.innerHTML = `<p>${(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Reusable block imported successfully!')}</p>`;
    const headerEnd = document.querySelector('.wp-header-end');

    if (!headerEnd) {
      return;
    }

    headerEnd.parentNode.insertBefore(notice, headerEnd);
  };

  const container = document.createElement('div');
  container.className = 'list-reusable-blocks__container';
  button.parentNode.insertBefore(container, button);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.render)((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_import_dropdown__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onUpload: showNotice
  }), container);
});

}();
(window.wp = window.wp || {}).listReusableBlocks = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=list-reusable-blocks.js.map