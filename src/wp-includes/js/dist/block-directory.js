/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/block-directory/build-module/components/auto-block-uninstaller/index.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@wordpress/block-directory/build-module/components/auto-block-uninstaller/index.js ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AutoBlockUninstaller; }
/* harmony export */ });
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/block-directory/build-module/store/index.js");
/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


function AutoBlockUninstaller() {
  const {
    uninstallBlockType
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_4__.store);
  const shouldRemoveBlockTypes = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    const {
      isAutosavingPost,
      isSavingPost
    } = select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.store);
    return isSavingPost() && !isAutosavingPost();
  }, []);
  const unusedBlockTypes = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => select(_store__WEBPACK_IMPORTED_MODULE_4__.store).getUnusedBlockTypes(), []);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (shouldRemoveBlockTypes && unusedBlockTypes.length) {
      unusedBlockTypes.forEach(blockType => {
        uninstallBlockType(blockType);
        (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.unregisterBlockType)(blockType.name);
      });
    }
  }, [shouldRemoveBlockTypes]);
  return null;
}


/***/ }),

/***/ "./node_modules/@wordpress/block-directory/build-module/components/block-ratings/index.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@wordpress/block-directory/build-module/components/block-ratings/index.js ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlockRatings": function() { return /* binding */ BlockRatings; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stars */ "./node_modules/@wordpress/block-directory/build-module/components/block-ratings/stars.js");


/**
 * Internal dependencies
 */

const BlockRatings = _ref => {
  let {
    rating
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "block-directory-block-ratings"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_stars__WEBPACK_IMPORTED_MODULE_1__["default"], {
    rating: rating
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (BlockRatings);


/***/ }),

/***/ "./node_modules/@wordpress/block-directory/build-module/components/block-ratings/stars.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@wordpress/block-directory/build-module/components/block-ratings/stars.js ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/icon/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/star-filled.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/star-half.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/star-empty.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




function Stars(_ref) {
  let {
    rating
  } = _ref;
  const stars = Math.round(rating / 0.5) * 0.5;
  const fullStarCount = Math.floor(rating);
  const halfStarCount = Math.ceil(rating - fullStarCount);
  const emptyStarCount = 5 - (fullStarCount + halfStarCount);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)(
    /* translators: %s: number of stars. */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%s out of 5 stars'), stars)
  }, (0,lodash__WEBPACK_IMPORTED_MODULE_1__.times)(fullStarCount, i => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: `full_stars_${i}`,
    className: "block-directory-block-ratings__star-full",
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"],
    size: 16
  })), (0,lodash__WEBPACK_IMPORTED_MODULE_1__.times)(halfStarCount, i => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: `half_stars_${i}`,
    className: "block-directory-block-ratings__star-half-full",
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"],
    size: 16
  })), (0,lodash__WEBPACK_IMPORTED_MODULE_1__.times)(emptyStarCount, i => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: `empty_stars_${i}`,
    className: "block-directory-block-ratings__star-empty",
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"],
    size: 16
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Stars);


/***/ }),

/***/ "./node_modules/@wordpress/block-directory/build-module/components/compact-list/index.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@wordpress/block-directory/build-module/components/compact-list/index.js ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CompactList; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _downloadable_block_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../downloadable-block-icon */ "./node_modules/@wordpress/block-directory/build-module/components/downloadable-block-icon/index.js");


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


function CompactList(_ref) {
  let {
    items
  } = _ref;

  if (!items.length) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "block-directory-compact-list"
  }, items.map(_ref2 => {
    let {
      icon,
      id,
      title,
      author
    } = _ref2;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      key: id,
      className: "block-directory-compact-list__item"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_downloadable_block_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
      icon: icon,
      title: title
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "block-directory-compact-list__item-details"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "block-directory-compact-list__item-title"
    }, title), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "block-directory-compact-list__item-author"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)(
    /* translators: %s: Name of the block author. */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('By %s'), author))));
  }));
}


/***/ }),

/***/ "./node_modules/@wordpress/block-directory/build-module/components/downloadable-block-icon/index.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@wordpress/block-directory/build-module/components/downloadable-block-icon/index.js ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */


function DownloadableBlockIcon(_ref) {
  let {
    icon
  } = _ref;
  const className = 'block-directory-downloadable-block-icon';
  return icon.match(/\.(jpeg|jpg|gif|png|svg)(?:\?.*)?$/) !== null ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: className,
    src: icon,
    alt: ""
  }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockIcon, {
    className: className,
    icon: icon,
    showColors: true
  });
}

/* harmony default export */ __webpack_exports__["default"] = (DownloadableBlockIcon);


/***/ }),

/***/ "./node_modules/@wordpress/block-directory/build-module/components/downloadable-block-list-item/index.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/block-directory/build-module/components/downloadable-block-list-item/index.js ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _block_ratings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../block-ratings */ "./node_modules/@wordpress/block-directory/build-module/components/block-ratings/index.js");
/* harmony import */ var _downloadable_block_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../downloadable-block-icon */ "./node_modules/@wordpress/block-directory/build-module/components/downloadable-block-icon/index.js");
/* harmony import */ var _downloadable_block_notice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../downloadable-block-notice */ "./node_modules/@wordpress/block-directory/build-module/components/downloadable-block-notice/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/block-directory/build-module/store/index.js");



/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */




 // Return the appropriate block item label, given the block data and status.

function getDownloadableBlockLabel(_ref, _ref2) {
  let {
    title,
    rating,
    ratingCount
  } = _ref;
  let {
    hasNotice,
    isInstalled,
    isInstalling
  } = _ref2;
  const stars = Math.round(rating / 0.5) * 0.5;

  if (!isInstalled && hasNotice) {
    /* translators: %1$s: block title */
    return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)('Retry installing %s.', (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_4__.decodeEntities)(title));
  }

  if (isInstalled) {
    /* translators: %1$s: block title */
    return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)('Add %s.', (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_4__.decodeEntities)(title));
  }

  if (isInstalling) {
    /* translators: %1$s: block title */
    return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)('Installing %s.', (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_4__.decodeEntities)(title));
  } // No ratings yet, just use the title.


  if (ratingCount < 1) {
    /* translators: %1$s: block title */
    return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)('Install %s.', (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_4__.decodeEntities)(title));
  }

  return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)(
  /* translators: %1$s: block title, %2$s: average rating, %3$s: total ratings count. */
  (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._n)('Install %1$s. %2$s stars with %3$s review.', 'Install %1$s. %2$s stars with %3$s reviews.', ratingCount), (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_4__.decodeEntities)(title), stars, ratingCount);
}

function DownloadableBlockListItem(_ref3) {
  let {
    composite,
    item,
    onClick
  } = _ref3;
  const {
    author,
    description,
    icon,
    rating,
    title
  } = item; // getBlockType returns a block object if this block exists, or null if not.

  const isInstalled = !!(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__.getBlockType)(item.name);
  const {
    hasNotice,
    isInstalling,
    isInstallable
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_6__.useSelect)(select => {
    const {
      getErrorNoticeForBlock,
      isInstalling: isBlockInstalling
    } = select(_store__WEBPACK_IMPORTED_MODULE_10__.store);
    const notice = getErrorNoticeForBlock(item.id);
    const hasFatal = notice && notice.isFatal;
    return {
      hasNotice: !!notice,
      isInstalling: isBlockInstalling(item.id),
      isInstallable: !hasFatal
    };
  }, [item]);
  let statusText = '';

  if (isInstalled) {
    statusText = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Installed!');
  } else if (isInstalling) {
    statusText = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Installing…');
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__unstableCompositeItem, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    __experimentalIsFocusable: true,
    role: "option",
    as: _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button
  }, composite, {
    className: "block-directory-downloadable-block-list-item",
    onClick: event => {
      event.preventDefault();
      onClick();
    },
    isBusy: isInstalling,
    disabled: isInstalling || !isInstallable,
    label: getDownloadableBlockLabel(item, {
      hasNotice,
      isInstalled,
      isInstalling
    }),
    showTooltip: true,
    tooltipPosition: "top center"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "block-directory-downloadable-block-list-item__icon"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_downloadable_block_icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    icon: icon,
    title: title
  }), isInstalling ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: "block-directory-downloadable-block-list-item__spinner"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Spinner, null)) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_block_ratings__WEBPACK_IMPORTED_MODULE_7__["default"], {
    rating: rating
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: "block-directory-downloadable-block-list-item__details"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: "block-directory-downloadable-block-list-item__title"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createInterpolateElement)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)(
  /* translators: %1$s: block title, %2$s: author name. */
  (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s <span>by %2$s</span>'), (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_4__.decodeEntities)(title), author), {
    span: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
      className: "block-directory-downloadable-block-list-item__author"
    })
  })), hasNotice ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_downloadable_block_notice__WEBPACK_IMPORTED_MODULE_9__["default"], {
    block: item
  }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: "block-directory-downloadable-block-list-item__desc"
  }, !!statusText ? statusText : (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_4__.decodeEntities)(description)), isInstallable && !(isInstalled || isInstalling) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.VisuallyHidden, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Install block')))));
}

/* harmony default export */ __webpack_exports__["default"] = (DownloadableBlockListItem);


/***/ }),

/***/ "./node_modules/@wordpress/block-directory/build-module/components/downloadable-block-notice/index.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/block-directory/build-module/components/downloadable-block-notice/index.js ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DownloadableBlockNotice": function() { return /* binding */ DownloadableBlockNotice; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/block-directory/build-module/store/index.js");


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


const DownloadableBlockNotice = _ref => {
  let {
    block
  } = _ref;
  const errorNotice = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => select(_store__WEBPACK_IMPORTED_MODULE_3__.store).getErrorNoticeForBlock(block.id), [block]);

  if (!errorNotice) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "block-directory-downloadable-block-notice"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "block-directory-downloadable-block-notice__content"
  }, errorNotice.message, errorNotice.isFatal ? ' ' + (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Try reloading the page.') : null));
};
/* harmony default export */ __webpack_exports__["default"] = (DownloadableBlockNotice);


/***/ }),

/***/ "./node_modules/@wordpress/block-directory/build-module/components/downloadable-blocks-list/index.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@wordpress/block-directory/build-module/components/downloadable-blocks-list/index.js ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _downloadable_block_list_item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../downloadable-block-list-item */ "./node_modules/@wordpress/block-directory/build-module/components/downloadable-block-list-item/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/block-directory/build-module/store/index.js");



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */




function DownloadableBlocksList(_ref) {
  let {
    items,
    onHover = lodash__WEBPACK_IMPORTED_MODULE_2__.noop,
    onSelect
  } = _ref;
  const composite = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__unstableUseCompositeState)();
  const {
    installBlockType
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_6__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_8__.store);

  if (!items.length) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__unstableComposite, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, composite, {
    role: "listbox",
    className: "block-directory-downloadable-blocks-list",
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Blocks available for install')
  }), items.map(item => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_downloadable_block_list_item__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: item.id,
      composite: composite,
      onClick: () => {
        // Check if the block is registered (`getBlockType`
        // will return an object). If so, insert the block.
        // This prevents installing existing plugins.
        if ((0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__.getBlockType)(item.name)) {
          onSelect(item);
        } else {
          installBlockType(item).then(success => {
            if (success) {
              onSelect(item);
            }
          });
        }

        onHover(null);
      },
      onHover: onHover,
      item: item
    });
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (DownloadableBlocksList);


/***/ }),

/***/ "./node_modules/@wordpress/block-directory/build-module/components/downloadable-blocks-panel/index.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/block-directory/build-module/components/downloadable-blocks-panel/index.js ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _downloadable_blocks_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../downloadable-blocks-list */ "./node_modules/@wordpress/block-directory/build-module/components/downloadable-blocks-list/index.js");
/* harmony import */ var _inserter_panel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./inserter-panel */ "./node_modules/@wordpress/block-directory/build-module/components/downloadable-blocks-panel/inserter-panel.js");
/* harmony import */ var _no_results__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./no-results */ "./node_modules/@wordpress/block-directory/build-module/components/downloadable-blocks-panel/no-results.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/block-directory/build-module/store/index.js");


/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */






function DownloadableBlocksPanel(_ref) {
  let {
    downloadableItems,
    onSelect,
    onHover,
    hasLocalBlocks,
    hasPermission,
    isLoading,
    isTyping
  } = _ref;

  if (typeof hasPermission === 'undefined' || isLoading || isTyping) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, hasPermission && !hasLocalBlocks && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "block-directory-downloadable-blocks-panel__no-local"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('No results available from your installed blocks.')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "block-editor-inserter__quick-inserter-separator"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "block-directory-downloadable-blocks-panel has-blocks-loading"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Spinner, null)));
  }

  if (false === hasPermission) {
    if (!hasLocalBlocks) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_no_results__WEBPACK_IMPORTED_MODULE_9__["default"], null);
    }

    return null;
  }

  return !!downloadableItems.length ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inserter_panel__WEBPACK_IMPORTED_MODULE_8__["default"], {
    downloadableItems: downloadableItems,
    hasLocalBlocks: hasLocalBlocks
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_downloadable_blocks_list__WEBPACK_IMPORTED_MODULE_7__["default"], {
    items: downloadableItems,
    onSelect: onSelect,
    onHover: onHover
  })) : !hasLocalBlocks && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_no_results__WEBPACK_IMPORTED_MODULE_9__["default"], null);
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.compose)([(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_6__.withSelect)((select, _ref2) => {
  let {
    filterValue,
    rootClientId = null
  } = _ref2;
  const {
    getDownloadableBlocks,
    isRequestingDownloadableBlocks
  } = select(_store__WEBPACK_IMPORTED_MODULE_10__.store);
  const {
    canInsertBlockType
  } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.store);
  const hasPermission = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.store).canUser('read', 'block-directory/search');

  function getInstallableBlocks(term) {
    return getDownloadableBlocks(term).filter(block => canInsertBlockType(block, rootClientId, true));
  }

  const downloadableItems = hasPermission ? getInstallableBlocks(filterValue) : [];
  const isLoading = isRequestingDownloadableBlocks(filterValue);
  return {
    downloadableItems,
    hasPermission,
    isLoading
  };
})])(DownloadableBlocksPanel));


/***/ }),

/***/ "./node_modules/@wordpress/block-directory/build-module/components/downloadable-blocks-panel/inserter-panel.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/block-directory/build-module/components/downloadable-blocks-panel/inserter-panel.js ***!
  \*********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/a11y */ "@wordpress/a11y");
/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_a11y__WEBPACK_IMPORTED_MODULE_2__);


/**
 * WordPress dependencies
 */




function DownloadableBlocksInserterPanel(_ref) {
  let {
    children,
    downloadableItems,
    hasLocalBlocks
  } = _ref;
  const count = downloadableItems.length;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,_wordpress_a11y__WEBPACK_IMPORTED_MODULE_2__.speak)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)(
    /* translators: %d: number of available blocks. */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._n)('%d additional block is available to install.', '%d additional blocks are available to install.', count), count));
  }, [count]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, !hasLocalBlocks && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "block-directory-downloadable-blocks-panel__no-local"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('No results available from your installed blocks.')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "block-editor-inserter__quick-inserter-separator"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "block-directory-downloadable-blocks-panel"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "block-directory-downloadable-blocks-panel__header"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "block-directory-downloadable-blocks-panel__title"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Available to install')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "block-directory-downloadable-blocks-panel__description"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select a block to install and add it to your post.'))), children));
}

/* harmony default export */ __webpack_exports__["default"] = (DownloadableBlocksInserterPanel);


/***/ }),

/***/ "./node_modules/@wordpress/block-directory/build-module/components/downloadable-blocks-panel/no-results.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/block-directory/build-module/components/downloadable-blocks-panel/no-results.js ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/icon/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/block-default.js");


/**
 * WordPress dependencies
 */



function DownloadableBlocksNoResults() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "block-editor-inserter__no-results"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "block-editor-inserter__no-results-icon",
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('No results found.')));
}

/* harmony default export */ __webpack_exports__["default"] = (DownloadableBlocksNoResults);


/***/ }),

/***/ "./node_modules/@wordpress/block-directory/build-module/plugins/get-install-missing/index.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@wordpress/block-directory/build-module/plugins/get-install-missing/index.js ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _install_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./install-button */ "./node_modules/@wordpress/block-directory/build-module/plugins/get-install-missing/install-button.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/block-directory/build-module/store/index.js");



/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */




const getInstallMissing = OriginalComponent => props => {
  const {
    originalName
  } = props.attributes; // Disable reason: This is a valid component, but it's mistaken for a callback.
  // eslint-disable-next-line react-hooks/rules-of-hooks

  const {
    block,
    hasPermission
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => {
    const {
      getDownloadableBlocks
    } = select(_store__WEBPACK_IMPORTED_MODULE_9__.store);
    const blocks = getDownloadableBlocks('block:' + originalName).filter(_ref => {
      let {
        name
      } = _ref;
      return originalName === name;
    });
    return {
      hasPermission: select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__.store).canUser('read', 'block-directory/search'),
      block: blocks.length && blocks[0]
    };
  }, [originalName]); // The user can't install blocks, or the block isn't available for download.

  if (!hasPermission || !block) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(OriginalComponent, props);
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ModifiedWarning, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    originalBlock: block
  }));
};

const ModifiedWarning = _ref2 => {
  let {
    originalBlock,
    ...props
  } = _ref2;
  const {
    originalName,
    originalUndelimitedContent
  } = props.attributes;
  const {
    replaceBlock
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useDispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.store);

  const convertToHTML = () => {
    replaceBlock(props.clientId, (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.createBlock)('core/html', {
      content: originalUndelimitedContent
    }));
  };

  const hasContent = !!originalUndelimitedContent;
  const hasHTMLBlock = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.getBlockType)('core/html');
  let messageHTML = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)(
  /* translators: %s: block name */
  (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Your site doesn’t include support for the %s block. You can try installing the block or remove it entirely.'), originalBlock.title || originalName);
  const actions = [(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_install_button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    key: "install",
    block: originalBlock,
    attributes: props.attributes,
    clientId: props.clientId
  })];

  if (hasContent && hasHTMLBlock) {
    messageHTML = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)(
    /* translators: %s: block name */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Your site doesn’t include support for the %s block. You can try installing the block, convert it to a Custom HTML block, or remove it entirely.'), originalBlock.title || originalName);
    actions.push((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      key: "convert",
      onClick: convertToHTML,
      variant: "link"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Keep as HTML')));
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.useBlockProps)(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.Warning, {
    actions: actions
  }, messageHTML), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.RawHTML, null, originalUndelimitedContent));
};

/* harmony default export */ __webpack_exports__["default"] = (getInstallMissing);


/***/ }),

/***/ "./node_modules/@wordpress/block-directory/build-module/plugins/get-install-missing/install-button.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/block-directory/build-module/plugins/get-install-missing/install-button.js ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ InstallButton; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/block-directory/build-module/store/index.js");


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


function InstallButton(_ref) {
  let {
    attributes,
    block,
    clientId
  } = _ref;
  const isInstallingBlock = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => select(_store__WEBPACK_IMPORTED_MODULE_6__.store).isInstalling(block.id), [block.id]);
  const {
    installBlockType
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_6__.store);
  const {
    replaceBlock
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.store);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    onClick: () => installBlockType(block).then(success => {
      if (success) {
        const blockType = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.getBlockType)(block.name);
        const [originalBlock] = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.parse)(attributes.originalContent);

        if (originalBlock && blockType) {
          replaceBlock(clientId, (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.createBlock)(blockType.name, originalBlock.attributes, originalBlock.innerBlocks));
        }
      }
    }),
    disabled: isInstallingBlock,
    isBusy: isInstallingBlock,
    variant: "primary"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)(
  /* translators: %s: block name */
  (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Install %s'), block.title));
}


/***/ }),

/***/ "./node_modules/@wordpress/block-directory/build-module/plugins/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@wordpress/block-directory/build-module/plugins/index.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_auto_block_uninstaller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/auto-block-uninstaller */ "./node_modules/@wordpress/block-directory/build-module/components/auto-block-uninstaller/index.js");
/* harmony import */ var _inserter_menu_downloadable_blocks_panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inserter-menu-downloadable-blocks-panel */ "./node_modules/@wordpress/block-directory/build-module/plugins/inserter-menu-downloadable-blocks-panel/index.js");
/* harmony import */ var _installed_blocks_pre_publish_panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./installed-blocks-pre-publish-panel */ "./node_modules/@wordpress/block-directory/build-module/plugins/installed-blocks-pre-publish-panel/index.js");
/* harmony import */ var _get_install_missing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./get-install-missing */ "./node_modules/@wordpress/block-directory/build-module/plugins/get-install-missing/index.js");


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */





(0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__.registerPlugin)('block-directory', {
  render() {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_auto_block_uninstaller__WEBPACK_IMPORTED_MODULE_3__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inserter_menu_downloadable_blocks_panel__WEBPACK_IMPORTED_MODULE_4__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_installed_blocks_pre_publish_panel__WEBPACK_IMPORTED_MODULE_5__["default"], null));
  }

});
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.addFilter)('blocks.registerBlockType', 'block-directory/fallback', (settings, name) => {
  if (name !== 'core/missing') {
    return settings;
  }

  settings.edit = (0,_get_install_missing__WEBPACK_IMPORTED_MODULE_6__["default"])(settings.edit);
  return settings;
});


/***/ }),

/***/ "./node_modules/@wordpress/block-directory/build-module/plugins/inserter-menu-downloadable-blocks-panel/index.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/block-directory/build-module/plugins/inserter-menu-downloadable-blocks-panel/index.js ***!
  \***********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_downloadable_blocks_panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/downloadable-blocks-panel */ "./node_modules/@wordpress/block-directory/build-module/components/downloadable-blocks-panel/index.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



function InserterMenuDownloadableBlocksPanel() {
  const [debouncedFilterValue, setFilterValue] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const debouncedSetFilterValue = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.debounce)(setFilterValue, 400);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__unstableInserterMenuExtension, null, _ref => {
    let {
      onSelect,
      onHover,
      filterValue,
      hasItems,
      rootClientId
    } = _ref;

    if (debouncedFilterValue !== filterValue) {
      debouncedSetFilterValue(filterValue);
    }

    if (!debouncedFilterValue) {
      return null;
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_downloadable_blocks_panel__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onSelect: onSelect,
      onHover: onHover,
      rootClientId: rootClientId,
      filterValue: debouncedFilterValue,
      hasLocalBlocks: hasItems,
      isTyping: filterValue !== debouncedFilterValue
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (InserterMenuDownloadableBlocksPanel);


/***/ }),

/***/ "./node_modules/@wordpress/block-directory/build-module/plugins/installed-blocks-pre-publish-panel/index.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/block-directory/build-module/plugins/installed-blocks-pre-publish-panel/index.js ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ InstalledBlocksPrePublishPanel; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/edit-post */ "@wordpress/edit-post");
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/block-default.js");
/* harmony import */ var _components_compact_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/compact-list */ "./node_modules/@wordpress/block-directory/build-module/components/compact-list/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/block-directory/build-module/store/index.js");


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



function InstalledBlocksPrePublishPanel() {
  const newBlockTypes = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_store__WEBPACK_IMPORTED_MODULE_5__.store).getNewBlockTypes(), []);

  if (!newBlockTypes.length) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__.PluginPrePublishPanel, {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"],
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)( // translators: %d: number of blocks (number).
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._n)('Added: %d block', 'Added: %d blocks', newBlockTypes.length), newBlockTypes.length),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "installed-blocks-pre-publish-panel__copy"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._n)('The following block has been added to your site.', 'The following blocks have been added to your site.', newBlockTypes.length)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_compact_list__WEBPACK_IMPORTED_MODULE_4__["default"], {
    items: newBlockTypes
  }));
}


/***/ }),

/***/ "./node_modules/@wordpress/block-directory/build-module/store/actions.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@wordpress/block-directory/build-module/store/actions.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addInstalledBlockType": function() { return /* binding */ addInstalledBlockType; },
/* harmony export */   "clearErrorNotice": function() { return /* binding */ clearErrorNotice; },
/* harmony export */   "fetchDownloadableBlocks": function() { return /* binding */ fetchDownloadableBlocks; },
/* harmony export */   "installBlockType": function() { return /* binding */ installBlockType; },
/* harmony export */   "receiveDownloadableBlocks": function() { return /* binding */ receiveDownloadableBlocks; },
/* harmony export */   "removeInstalledBlockType": function() { return /* binding */ removeInstalledBlockType; },
/* harmony export */   "setErrorNotice": function() { return /* binding */ setErrorNotice; },
/* harmony export */   "setIsInstalling": function() { return /* binding */ setIsInstalling; },
/* harmony export */   "uninstallBlockType": function() { return /* binding */ uninstallBlockType; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _load_assets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./load-assets */ "./node_modules/@wordpress/block-directory/build-module/store/load-assets.js");
/* harmony import */ var _utils_get_plugin_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/get-plugin-url */ "./node_modules/@wordpress/block-directory/build-module/store/utils/get-plugin-url.js");
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
 * Returns an action object used in signalling that the downloadable blocks
 * have been requested and are loading.
 *
 * @param {string} filterValue Search string.
 *
 * @return {Object} Action object.
 */

function fetchDownloadableBlocks(filterValue) {
  return {
    type: 'FETCH_DOWNLOADABLE_BLOCKS',
    filterValue
  };
}
/**
 * Returns an action object used in signalling that the downloadable blocks
 * have been updated.
 *
 * @param {Array}  downloadableBlocks Downloadable blocks.
 * @param {string} filterValue        Search string.
 *
 * @return {Object} Action object.
 */

function receiveDownloadableBlocks(downloadableBlocks, filterValue) {
  return {
    type: 'RECEIVE_DOWNLOADABLE_BLOCKS',
    downloadableBlocks,
    filterValue
  };
}
/**
 * Action triggered to install a block plugin.
 *
 * @param {Object} block The block item returned by search.
 *
 * @return {boolean} Whether the block was successfully installed & loaded.
 */

const installBlockType = block => async _ref => {
  let {
    registry,
    dispatch
  } = _ref;
  const {
    id,
    name
  } = block;
  let success = false;
  dispatch.clearErrorNotice(id);

  try {
    dispatch.setIsInstalling(id, true); // If we have a wp:plugin link, the plugin is installed but inactive.

    const url = (0,_utils_get_plugin_url__WEBPACK_IMPORTED_MODULE_7__["default"])(block);
    let links = {};

    if (url) {
      await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default()({
        method: 'PUT',
        url,
        data: {
          status: 'active'
        }
      });
    } else {
      const response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default()({
        method: 'POST',
        path: 'wp/v2/plugins',
        data: {
          slug: id,
          status: 'active'
        }
      }); // Add the `self` link for newly-installed blocks.

      links = response._links;
    }

    dispatch.addInstalledBlockType({ ...block,
      links: { ...block.links,
        ...links
      }
    }); // Ensures that the block metadata is propagated to the editor when registered on the server.

    const metadataFields = ['api_version', 'title', 'category', 'parent', 'icon', 'description', 'keywords', 'attributes', 'provides_context', 'uses_context', 'supports', 'styles', 'example', 'variations'];
    await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default()({
      path: (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_5__.addQueryArgs)(`/wp/v2/block-types/${name}`, {
        _fields: metadataFields
      })
    }) // Ignore when the block is not registered on the server.
    .catch(() => {}).then(response => {
      if (!response) {
        return;
      }

      (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.unstable__bootstrapServerSideBlockDefinitions)({
        [name]: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.pick)(response, metadataFields)
      });
    });
    await (0,_load_assets__WEBPACK_IMPORTED_MODULE_6__.loadAssets)();
    const registeredBlocks = registry.select(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.store).getBlockTypes();

    if (!registeredBlocks.some(i => i.name === name)) {
      throw new Error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Error registering block. Try reloading the page.'));
    }

    registry.dispatch(_wordpress_notices__WEBPACK_IMPORTED_MODULE_4__.store).createInfoNotice((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)( // translators: %s is the block title.
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Block %s installed and added.'), block.title), {
      speak: true,
      type: 'snackbar'
    });
    success = true;
  } catch (error) {
    let message = error.message || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('An error occurred.'); // Errors we throw are fatal.


    let isFatal = error instanceof Error; // Specific API errors that are fatal.

    const fatalAPIErrors = {
      folder_exists: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('This block is already installed. Try reloading the page.'),
      unable_to_connect_to_filesystem: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Error installing block. You can reload the page and try again.')
    };

    if (fatalAPIErrors[error.code]) {
      isFatal = true;
      message = fatalAPIErrors[error.code];
    }

    dispatch.setErrorNotice(id, message, isFatal);
    registry.dispatch(_wordpress_notices__WEBPACK_IMPORTED_MODULE_4__.store).createErrorNotice(message, {
      speak: true,
      isDismissible: true
    });
  }

  dispatch.setIsInstalling(id, false);
  return success;
};
/**
 * Action triggered to uninstall a block plugin.
 *
 * @param {Object} block The blockType object.
 */

const uninstallBlockType = block => async _ref2 => {
  let {
    registry,
    dispatch
  } = _ref2;

  try {
    const url = (0,_utils_get_plugin_url__WEBPACK_IMPORTED_MODULE_7__["default"])(block);
    await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default()({
      method: 'PUT',
      url,
      data: {
        status: 'inactive'
      }
    });
    await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default()({
      method: 'DELETE',
      url
    });
    dispatch.removeInstalledBlockType(block);
  } catch (error) {
    registry.dispatch(_wordpress_notices__WEBPACK_IMPORTED_MODULE_4__.store).createErrorNotice(error.message || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('An error occurred.'));
  }
};
/**
 * Returns an action object used to add a block type to the "newly installed"
 * tracking list.
 *
 * @param {Object} item The block item with the block id and name.
 *
 * @return {Object} Action object.
 */

function addInstalledBlockType(item) {
  return {
    type: 'ADD_INSTALLED_BLOCK_TYPE',
    item
  };
}
/**
 * Returns an action object used to remove a block type from the "newly installed"
 * tracking list.
 *
 * @param {string} item The block item with the block id and name.
 *
 * @return {Object} Action object.
 */

function removeInstalledBlockType(item) {
  return {
    type: 'REMOVE_INSTALLED_BLOCK_TYPE',
    item
  };
}
/**
 * Returns an action object used to indicate install in progress.
 *
 * @param {string}  blockId
 * @param {boolean} isInstalling
 *
 * @return {Object} Action object.
 */

function setIsInstalling(blockId, isInstalling) {
  return {
    type: 'SET_INSTALLING_BLOCK',
    blockId,
    isInstalling
  };
}
/**
 * Sets an error notice to be displayed to the user for a given block.
 *
 * @param {string}  blockId The ID of the block plugin. eg: my-block
 * @param {string}  message The message shown in the notice.
 * @param {boolean} isFatal Whether the user can recover from the error.
 *
 * @return {Object} Action object.
 */

function setErrorNotice(blockId, message) {
  let isFatal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return {
    type: 'SET_ERROR_NOTICE',
    blockId,
    message,
    isFatal
  };
}
/**
 * Sets the error notice to empty for specific block.
 *
 * @param {string} blockId The ID of the block plugin. eg: my-block
 *
 * @return {Object} Action object.
 */

function clearErrorNotice(blockId) {
  return {
    type: 'CLEAR_ERROR_NOTICE',
    blockId
  };
}


/***/ }),

/***/ "./node_modules/@wordpress/block-directory/build-module/store/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@wordpress/block-directory/build-module/store/index.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "store": function() { return /* binding */ store; },
/* harmony export */   "storeConfig": function() { return /* binding */ storeConfig; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./node_modules/@wordpress/block-directory/build-module/store/reducer.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ "./node_modules/@wordpress/block-directory/build-module/store/selectors.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./node_modules/@wordpress/block-directory/build-module/store/actions.js");
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resolvers */ "./node_modules/@wordpress/block-directory/build-module/store/resolvers.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */





/**
 * Module Constants
 */

const STORE_NAME = 'core/block-directory';
/**
 * Block editor data store configuration.
 *
 * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/data/README.md#registerStore
 *
 * @type {Object}
 */

const storeConfig = {
  reducer: _reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_2__,
  actions: _actions__WEBPACK_IMPORTED_MODULE_3__,
  resolvers: _resolvers__WEBPACK_IMPORTED_MODULE_4__
};
/**
 * Store definition for the block directory namespace.
 *
 * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/data/README.md#createReduxStore
 *
 * @type {Object}
 */

const store = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createReduxStore)(STORE_NAME, storeConfig);
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.register)(store);


/***/ }),

/***/ "./node_modules/@wordpress/block-directory/build-module/store/load-assets.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@wordpress/block-directory/build-module/store/load-assets.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadAsset": function() { return /* binding */ loadAsset; },
/* harmony export */   "loadAssets": function() { return /* binding */ loadAssets; }
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

/**
 * Load an asset for a block.
 *
 * This function returns a Promise that will resolve once the asset is loaded,
 * or in the case of Stylesheets and Inline JavaScript, will resolve immediately.
 *
 * @param {HTMLElement} el A HTML Element asset to inject.
 *
 * @return {Promise} Promise which will resolve when the asset is loaded.
 */

const loadAsset = el => {
  return new Promise((resolve, reject) => {
    /*
     * Reconstruct the passed element, this is required as inserting the Node directly
     * won't always fire the required onload events, even if the asset wasn't already loaded.
     */
    const newNode = document.createElement(el.nodeName);
    ['id', 'rel', 'src', 'href', 'type'].forEach(attr => {
      if (el[attr]) {
        newNode[attr] = el[attr];
      }
    }); // Append inline <script> contents.

    if (el.innerHTML) {
      newNode.appendChild(document.createTextNode(el.innerHTML));
    }

    newNode.onload = () => resolve(true);

    newNode.onerror = () => reject(new Error('Error loading asset.'));

    document.body.appendChild(newNode); // Resolve Stylesheets and Inline JavaScript immediately.

    if ('link' === newNode.nodeName.toLowerCase() || 'script' === newNode.nodeName.toLowerCase() && !newNode.src) {
      resolve();
    }
  });
};
/**
 * Load the asset files for a block
 */

async function loadAssets() {
  /*
   * Fetch the current URL (post-new.php, or post.php?post=1&action=edit) and compare the
   * JavaScript and CSS assets loaded between the pages. This imports the required assets
   * for the block into the current page while not requiring that we know them up-front.
   * In the future this can be improved by reliance upon block.json and/or a script-loader
   * dependency API.
   */
  const response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
    url: document.location.href,
    parse: false
  });
  const data = await response.text();
  const doc = new window.DOMParser().parseFromString(data, 'text/html');
  const newAssets = Array.from(doc.querySelectorAll('link[rel="stylesheet"],script')).filter(asset => asset.id && !document.getElementById(asset.id));
  /*
   * Load each asset in order, as they may depend upon an earlier loaded script.
   * Stylesheets and Inline Scripts will resolve immediately upon insertion.
   */

  for (const newAsset of newAssets) {
    await loadAsset(newAsset);
  }
}


/***/ }),

/***/ "./node_modules/@wordpress/block-directory/build-module/store/reducer.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@wordpress/block-directory/build-module/store/reducer.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "blockManagement": function() { return /* binding */ blockManagement; },
/* harmony export */   "downloadableBlocks": function() { return /* binding */ downloadableBlocks; },
/* harmony export */   "errorNotices": function() { return /* binding */ errorNotices; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Reducer returning an array of downloadable blocks.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

const downloadableBlocks = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'FETCH_DOWNLOADABLE_BLOCKS':
      return { ...state,
        [action.filterValue]: {
          isRequesting: true
        }
      };

    case 'RECEIVE_DOWNLOADABLE_BLOCKS':
      return { ...state,
        [action.filterValue]: {
          results: action.downloadableBlocks,
          isRequesting: false
        }
      };
  }

  return state;
};
/**
 * Reducer managing the installation and deletion of blocks.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

const blockManagement = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    installedBlockTypes: [],
    isInstalling: {}
  };
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'ADD_INSTALLED_BLOCK_TYPE':
      return { ...state,
        installedBlockTypes: [...state.installedBlockTypes, action.item]
      };

    case 'REMOVE_INSTALLED_BLOCK_TYPE':
      return { ...state,
        installedBlockTypes: state.installedBlockTypes.filter(blockType => blockType.name !== action.item.name)
      };

    case 'SET_INSTALLING_BLOCK':
      return { ...state,
        isInstalling: { ...state.isInstalling,
          [action.blockId]: action.isInstalling
        }
      };
  }

  return state;
};
/**
 * Reducer returning an object of error notices.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

const errorNotices = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SET_ERROR_NOTICE':
      return { ...state,
        [action.blockId]: {
          message: action.message,
          isFatal: action.isFatal
        }
      };

    case 'CLEAR_ERROR_NOTICE':
      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omit)(state, action.blockId);
  }

  return state;
};
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  downloadableBlocks,
  blockManagement,
  errorNotices
}));


/***/ }),

/***/ "./node_modules/@wordpress/block-directory/build-module/store/resolvers.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@wordpress/block-directory/build-module/store/resolvers.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDownloadableBlocks": function() { return /* binding */ getDownloadableBlocks; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./node_modules/@wordpress/block-directory/build-module/store/actions.js");
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


const getDownloadableBlocks = filterValue => async _ref => {
  let {
    dispatch
  } = _ref;

  if (!filterValue) {
    return;
  }

  try {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_2__.fetchDownloadableBlocks)(filterValue));
    const results = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
      path: `wp/v2/block-directory/search?term=${filterValue}`
    });
    const blocks = results.map(result => (0,lodash__WEBPACK_IMPORTED_MODULE_0__.mapKeys)(result, (value, key) => (0,lodash__WEBPACK_IMPORTED_MODULE_0__.camelCase)(key)));
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_2__.receiveDownloadableBlocks)(blocks, filterValue));
  } catch {}
};


/***/ }),

/***/ "./node_modules/@wordpress/block-directory/build-module/store/selectors.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@wordpress/block-directory/build-module/store/selectors.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDownloadableBlocks": function() { return /* binding */ getDownloadableBlocks; },
/* harmony export */   "getErrorNoticeForBlock": function() { return /* binding */ getErrorNoticeForBlock; },
/* harmony export */   "getErrorNotices": function() { return /* binding */ getErrorNotices; },
/* harmony export */   "getInstalledBlockTypes": function() { return /* binding */ getInstalledBlockTypes; },
/* harmony export */   "getNewBlockTypes": function() { return /* binding */ getNewBlockTypes; },
/* harmony export */   "getUnusedBlockTypes": function() { return /* binding */ getUnusedBlockTypes; },
/* harmony export */   "isInstalling": function() { return /* binding */ isInstalling; },
/* harmony export */   "isRequestingDownloadableBlocks": function() { return /* binding */ isRequestingDownloadableBlocks; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_has_block_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/has-block-type */ "./node_modules/@wordpress/block-directory/build-module/store/utils/has-block-type.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/**
 * Returns true if application is requesting for downloadable blocks.
 *
 * @param {Object} state       Global application state.
 * @param {string} filterValue Search string.
 *
 * @return {boolean} Whether a request is in progress for the blocks list.
 */

function isRequestingDownloadableBlocks(state, filterValue) {
  var _state$downloadableBl, _state$downloadableBl2;

  return (_state$downloadableBl = (_state$downloadableBl2 = state.downloadableBlocks[filterValue]) === null || _state$downloadableBl2 === void 0 ? void 0 : _state$downloadableBl2.isRequesting) !== null && _state$downloadableBl !== void 0 ? _state$downloadableBl : false;
}
/**
 * Returns the available uninstalled blocks.
 *
 * @param {Object} state       Global application state.
 * @param {string} filterValue Search string.
 *
 * @return {Array} Downloadable blocks.
 */

function getDownloadableBlocks(state, filterValue) {
  var _state$downloadableBl3, _state$downloadableBl4;

  return (_state$downloadableBl3 = (_state$downloadableBl4 = state.downloadableBlocks[filterValue]) === null || _state$downloadableBl4 === void 0 ? void 0 : _state$downloadableBl4.results) !== null && _state$downloadableBl3 !== void 0 ? _state$downloadableBl3 : [];
}
/**
 * Returns the block types that have been installed on the server in this
 * session.
 *
 * @param {Object} state Global application state.
 *
 * @return {Array} Block type items
 */

function getInstalledBlockTypes(state) {
  return state.blockManagement.installedBlockTypes;
}
/**
 * Returns block types that have been installed on the server and used in the
 * current post.
 *
 * @param {Object} state Global application state.
 *
 * @return {Array} Block type items.
 */

const getNewBlockTypes = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)(select => state => {
  const usedBlockTree = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.store).getBlocks();
  const installedBlockTypes = getInstalledBlockTypes(state);
  return installedBlockTypes.filter(blockType => (0,_utils_has_block_type__WEBPACK_IMPORTED_MODULE_2__["default"])(blockType, usedBlockTree));
});
/**
 * Returns the block types that have been installed on the server but are not
 * used in the current post.
 *
 * @param {Object} state Global application state.
 *
 * @return {Array} Block type items.
 */

const getUnusedBlockTypes = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)(select => state => {
  const usedBlockTree = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.store).getBlocks();
  const installedBlockTypes = getInstalledBlockTypes(state);
  return installedBlockTypes.filter(blockType => !(0,_utils_has_block_type__WEBPACK_IMPORTED_MODULE_2__["default"])(blockType, usedBlockTree));
});
/**
 * Returns true if a block plugin install is in progress.
 *
 * @param {Object} state   Global application state.
 * @param {string} blockId Id of the block.
 *
 * @return {boolean} Whether this block is currently being installed.
 */

function isInstalling(state, blockId) {
  return state.blockManagement.isInstalling[blockId] || false;
}
/**
 * Returns all block error notices.
 *
 * @param {Object} state Global application state.
 *
 * @return {Object} Object with error notices.
 */

function getErrorNotices(state) {
  return state.errorNotices;
}
/**
 * Returns the error notice for a given block.
 *
 * @param {Object} state   Global application state.
 * @param {string} blockId The ID of the block plugin. eg: my-block
 *
 * @return {string|boolean} The error text, or false if no error.
 */

function getErrorNoticeForBlock(state, blockId) {
  return state.errorNotices[blockId];
}


/***/ }),

/***/ "./node_modules/@wordpress/block-directory/build-module/store/utils/get-plugin-url.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@wordpress/block-directory/build-module/store/utils/get-plugin-url.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getPluginUrl; }
/* harmony export */ });
/**
 * Get the plugin's direct API link out of a block-directory response.
 *
 * @param {Object} block The block object
 *
 * @return {string} The plugin URL, if exists.
 */
function getPluginUrl(block) {
  if (!block) {
    return false;
  }

  const link = block.links['wp:plugin'] || block.links.self;

  if (link && link.length) {
    return link[0].href;
  }

  return false;
}


/***/ }),

/***/ "./node_modules/@wordpress/block-directory/build-module/store/utils/has-block-type.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@wordpress/block-directory/build-module/store/utils/has-block-type.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ hasBlockType; }
/* harmony export */ });
/**
 * Check if a block list contains a specific block type. Recursively searches
 * through `innerBlocks` if they exist.
 *
 * @param {Object}   blockType A block object to search for.
 * @param {Object[]} blocks    The list of blocks to look through.
 *
 * @return {boolean} Whether the blockType is found.
 */
function hasBlockType(blockType) {
  let blocks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (!blocks.length) {
    return false;
  }

  if (blocks.some(_ref => {
    let {
      name
    } = _ref;
    return name === blockType.name;
  })) {
    return true;
  }

  for (let i = 0; i < blocks.length; i++) {
    if (hasBlockType(blockType, blocks[i].innerBlocks)) {
      return true;
    }
  }

  return false;
}


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/icon/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/icon/index.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

/** @typedef {{icon: JSX.Element, size?: number} & import('@wordpress/primitives').SVGProps} IconProps */

/**
 * Return an SVG icon.
 *
 * @param {IconProps} props icon is the SVG component to render
 *                          size is a number specifiying the icon size in pixels
 *                          Other props will be passed to wrapped SVG component
 *
 * @return {JSX.Element}  Icon component
 */

function Icon(_ref) {
  let {
    icon,
    size = 24,
    ...props
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(icon, {
    width: size,
    height: size,
    ...props
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Icon);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/block-default.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/block-default.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const blockDefault = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M19 8h-1V6h-5v2h-2V6H6v2H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm.5 10c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5v-8c0-.3.2-.5.5-.5h14c.3 0 .5.2.5.5v8z"
}));
/* harmony default export */ __webpack_exports__["default"] = (blockDefault);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/star-empty.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/star-empty.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const starEmpty = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fillRule: "evenodd",
  d: "M9.706 8.646a.25.25 0 01-.188.137l-4.626.672a.25.25 0 00-.139.427l3.348 3.262a.25.25 0 01.072.222l-.79 4.607a.25.25 0 00.362.264l4.138-2.176a.25.25 0 01.233 0l4.137 2.175a.25.25 0 00.363-.263l-.79-4.607a.25.25 0 01.072-.222l3.347-3.262a.25.25 0 00-.139-.427l-4.626-.672a.25.25 0 01-.188-.137l-2.069-4.192a.25.25 0 00-.448 0L9.706 8.646zM12 7.39l-.948 1.921a1.75 1.75 0 01-1.317.957l-2.12.308 1.534 1.495c.412.402.6.982.503 1.55l-.362 2.11 1.896-.997a1.75 1.75 0 011.629 0l1.895.997-.362-2.11a1.75 1.75 0 01.504-1.55l1.533-1.495-2.12-.308a1.75 1.75 0 01-1.317-.957L12 7.39z",
  clipRule: "evenodd"
}));
/* harmony default export */ __webpack_exports__["default"] = (starEmpty);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/star-filled.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/star-filled.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const starFilled = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M11.776 4.454a.25.25 0 01.448 0l2.069 4.192a.25.25 0 00.188.137l4.626.672a.25.25 0 01.139.426l-3.348 3.263a.25.25 0 00-.072.222l.79 4.607a.25.25 0 01-.362.263l-4.138-2.175a.25.25 0 00-.232 0l-4.138 2.175a.25.25 0 01-.363-.263l.79-4.607a.25.25 0 00-.071-.222L4.754 9.881a.25.25 0 01.139-.426l4.626-.672a.25.25 0 00.188-.137l2.069-4.192z"
}));
/* harmony default export */ __webpack_exports__["default"] = (starFilled);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/star-half.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/star-half.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const starHalf = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M9.518 8.783a.25.25 0 00.188-.137l2.069-4.192a.25.25 0 01.448 0l2.07 4.192a.25.25 0 00.187.137l4.626.672a.25.25 0 01.139.427l-3.347 3.262a.25.25 0 00-.072.222l.79 4.607a.25.25 0 01-.363.264l-4.137-2.176a.25.25 0 00-.233 0l-4.138 2.175a.25.25 0 01-.362-.263l.79-4.607a.25.25 0 00-.072-.222L4.753 9.882a.25.25 0 01.14-.427l4.625-.672zM12 14.533c.28 0 .559.067.814.2l1.895.997-.362-2.11a1.75 1.75 0 01.504-1.55l1.533-1.495-2.12-.308a1.75 1.75 0 01-1.317-.957L12 7.39v7.143z"
}));
/* harmony default export */ __webpack_exports__["default"] = (starHalf);


/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ (function(module) {

module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/a11y":
/*!******************************!*\
  !*** external ["wp","a11y"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["a11y"];

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

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

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/edit-post":
/*!**********************************!*\
  !*** external ["wp","editPost"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["editPost"];

/***/ }),

/***/ "@wordpress/editor":
/*!********************************!*\
  !*** external ["wp","editor"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["editor"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ (function(module) {

module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/html-entities":
/*!**************************************!*\
  !*** external ["wp","htmlEntities"] ***!
  \**************************************/
/***/ (function(module) {

module.exports = window["wp"]["htmlEntities"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/notices":
/*!*********************************!*\
  !*** external ["wp","notices"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["notices"];

/***/ }),

/***/ "@wordpress/plugins":
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["plugins"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["primitives"];

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
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/block-directory/build-module/index.js ***!
  \***********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "store": function() { return /* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_1__.store; }
/* harmony export */ });
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugins */ "./node_modules/@wordpress/block-directory/build-module/plugins/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "./node_modules/@wordpress/block-directory/build-module/store/index.js");
/**
 * Internal dependencies
 */



}();
(window.wp = window.wp || {}).blockDirectory = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=block-directory.js.map