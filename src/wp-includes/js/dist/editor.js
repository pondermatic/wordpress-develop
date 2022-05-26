/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/editor/build-module/components/autocompleters/index.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/autocompleters/index.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "userAutocompleter": function() { return /* reexport safe */ _user__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ "./node_modules/@wordpress/editor/build-module/components/autocompleters/user.js");



/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/autocompleters/user.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/autocompleters/user.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getUserLabel": function() { return /* binding */ getUserLabel; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__);


/**
 * WordPress dependencies
 */



/** @typedef {import('@wordpress/components').WPCompleter} WPCompleter */

function getUserLabel(user) {
  const avatar = user.avatar_urls && user.avatar_urls[24] ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "editor-autocompleters__user-avatar",
    alt: "",
    src: user.avatar_urls[24]
  }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "editor-autocompleters__no-avatar"
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, avatar, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "editor-autocompleters__user-name"
  }, user.name), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "editor-autocompleters__user-slug"
  }, user.slug));
}
/**
 * A user mentions completer.
 *
 * @type {WPCompleter}
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'users',
  className: 'editor-autocompleters__user',
  triggerPrefix: '@',

  useItems(filterValue) {
    const users = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
      const {
        getUsers
      } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store);
      return getUsers({
        context: 'view',
        search: encodeURIComponent(filterValue)
      });
    }, [filterValue]);
    const options = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => users ? users.map(user => ({
      key: `user-${user.slug}`,
      value: user,
      label: getUserLabel(user)
    })) : [], [users]);
    return [options];
  },

  getOptionCompletion(user) {
    return `@${user.slug}`;
  }

});


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/autosave-monitor/index.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/autosave-monitor/index.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutosaveMonitor": function() { return /* binding */ AutosaveMonitor; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");
/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


/**
 * AutosaveMonitor invokes `props.autosave()` within at most `interval` seconds after an unsaved change is detected.
 *
 * The logic is straightforward: a check is performed every `props.interval` seconds. If any changes are detected, `props.autosave()` is called.
 * The time between the change and the autosave varies but is no larger than `props.interval` seconds. Refer to the code below for more details, such as
 * the specific way of detecting changes.
 *
 * There are two caveats:
 * * If `props.isAutosaveable` happens to be false at a time of checking for changes, the check is retried every second.
 * * The timer may be disabled by setting `props.disableIntervalChecks` to `true`. In that mode, any change will immediately trigger `props.autosave()`.
 */

class AutosaveMonitor extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.needsAutosave = !!(props.isDirty && props.isAutosaveable);
  }

  componentDidMount() {
    if (!this.props.disableIntervalChecks) {
      this.setAutosaveTimer();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.disableIntervalChecks) {
      if (this.props.editsReference !== prevProps.editsReference) {
        this.props.autosave();
      }

      return;
    }

    if (this.props.interval !== prevProps.interval) {
      clearTimeout(this.timerId);
      this.setAutosaveTimer();
    }

    if (!this.props.isDirty) {
      this.needsAutosave = false;
      return;
    }

    if (this.props.isAutosaving && !prevProps.isAutosaving) {
      this.needsAutosave = false;
      return;
    }

    if (this.props.editsReference !== prevProps.editsReference) {
      this.needsAutosave = true;
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timerId);
  }

  setAutosaveTimer() {
    let timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.interval * 1000;
    this.timerId = setTimeout(() => {
      this.autosaveTimerHandler();
    }, timeout);
  }

  autosaveTimerHandler() {
    if (!this.props.isAutosaveable) {
      this.setAutosaveTimer(1000);
      return;
    }

    if (this.needsAutosave) {
      this.needsAutosave = false;
      this.props.autosave();
    }

    this.setAutosaveTimer();
  }

  render() {
    return null;
  }

}
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.compose)([(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.withSelect)((select, ownProps) => {
  const {
    getReferenceByDistinctEdits
  } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.store);
  const {
    isEditedPostDirty,
    isEditedPostAutosaveable,
    isAutosavingPost,
    getEditorSettings
  } = select(_store__WEBPACK_IMPORTED_MODULE_4__.store);
  const {
    interval = getEditorSettings().autosaveInterval
  } = ownProps;
  return {
    editsReference: getReferenceByDistinctEdits(),
    isDirty: isEditedPostDirty(),
    isAutosaveable: isEditedPostAutosaveable(),
    isAutosaving: isAutosavingPost(),
    interval
  };
}), (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.withDispatch)((dispatch, ownProps) => ({
  autosave() {
    const {
      autosave = dispatch(_store__WEBPACK_IMPORTED_MODULE_4__.store).autosave
    } = ownProps;
    autosave();
  }

}))])(AutosaveMonitor));


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/character-count/index.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/character-count/index.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CharacterCount; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_wordcount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/wordcount */ "@wordpress/wordcount");
/* harmony import */ var _wordpress_wordcount__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_wordcount__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


function CharacterCount() {
  const content = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => select(_store__WEBPACK_IMPORTED_MODULE_2__.store).getEditedPostAttribute('content'), []);
  return (0,_wordpress_wordcount__WEBPACK_IMPORTED_MODULE_1__.count)(content, 'characters_including_spaces');
}


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/deprecated.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/deprecated.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlignmentToolbar": function() { return /* binding */ AlignmentToolbar; },
/* harmony export */   "Autocomplete": function() { return /* binding */ Autocomplete; },
/* harmony export */   "BlockAlignmentToolbar": function() { return /* binding */ BlockAlignmentToolbar; },
/* harmony export */   "BlockControls": function() { return /* binding */ BlockControls; },
/* harmony export */   "BlockEdit": function() { return /* binding */ BlockEdit; },
/* harmony export */   "BlockEditorKeyboardShortcuts": function() { return /* binding */ BlockEditorKeyboardShortcuts; },
/* harmony export */   "BlockFormatControls": function() { return /* binding */ BlockFormatControls; },
/* harmony export */   "BlockIcon": function() { return /* binding */ BlockIcon; },
/* harmony export */   "BlockInspector": function() { return /* binding */ BlockInspector; },
/* harmony export */   "BlockList": function() { return /* binding */ BlockList; },
/* harmony export */   "BlockMover": function() { return /* binding */ BlockMover; },
/* harmony export */   "BlockNavigationDropdown": function() { return /* binding */ BlockNavigationDropdown; },
/* harmony export */   "BlockSelectionClearer": function() { return /* binding */ BlockSelectionClearer; },
/* harmony export */   "BlockSettingsMenu": function() { return /* binding */ BlockSettingsMenu; },
/* harmony export */   "BlockTitle": function() { return /* binding */ BlockTitle; },
/* harmony export */   "BlockToolbar": function() { return /* binding */ BlockToolbar; },
/* harmony export */   "ColorPalette": function() { return /* binding */ ColorPalette; },
/* harmony export */   "ContrastChecker": function() { return /* binding */ ContrastChecker; },
/* harmony export */   "CopyHandler": function() { return /* binding */ CopyHandler; },
/* harmony export */   "DefaultBlockAppender": function() { return /* binding */ DefaultBlockAppender; },
/* harmony export */   "FontSizePicker": function() { return /* binding */ FontSizePicker; },
/* harmony export */   "InnerBlocks": function() { return /* binding */ InnerBlocks; },
/* harmony export */   "Inserter": function() { return /* binding */ Inserter; },
/* harmony export */   "InspectorAdvancedControls": function() { return /* binding */ InspectorAdvancedControls; },
/* harmony export */   "InspectorControls": function() { return /* binding */ InspectorControls; },
/* harmony export */   "MediaPlaceholder": function() { return /* binding */ MediaPlaceholder; },
/* harmony export */   "MediaUpload": function() { return /* binding */ MediaUpload; },
/* harmony export */   "MediaUploadCheck": function() { return /* binding */ MediaUploadCheck; },
/* harmony export */   "MultiSelectScrollIntoView": function() { return /* binding */ MultiSelectScrollIntoView; },
/* harmony export */   "NavigableToolbar": function() { return /* binding */ NavigableToolbar; },
/* harmony export */   "ObserveTyping": function() { return /* binding */ ObserveTyping; },
/* harmony export */   "PanelColorSettings": function() { return /* binding */ PanelColorSettings; },
/* harmony export */   "PlainText": function() { return /* binding */ PlainText; },
/* harmony export */   "RichText": function() { return /* binding */ RichText; },
/* harmony export */   "RichTextShortcut": function() { return /* binding */ RichTextShortcut; },
/* harmony export */   "RichTextToolbarButton": function() { return /* binding */ RichTextToolbarButton; },
/* harmony export */   "ServerSideRender": function() { return /* reexport default from dynamic */ _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_4___default.a; },
/* harmony export */   "SkipToSelectedBlock": function() { return /* binding */ SkipToSelectedBlock; },
/* harmony export */   "URLInput": function() { return /* binding */ URLInput; },
/* harmony export */   "URLInputButton": function() { return /* binding */ URLInputButton; },
/* harmony export */   "URLPopover": function() { return /* binding */ URLPopover; },
/* harmony export */   "Warning": function() { return /* binding */ Warning; },
/* harmony export */   "WritingFlow": function() { return /* binding */ WritingFlow; },
/* harmony export */   "__unstableRichTextInputEvent": function() { return /* binding */ __unstableRichTextInputEvent; },
/* harmony export */   "createCustomColorsHOC": function() { return /* binding */ createCustomColorsHOC; },
/* harmony export */   "getColorClassName": function() { return /* binding */ getColorClassName; },
/* harmony export */   "getColorObjectByAttributeValues": function() { return /* binding */ getColorObjectByAttributeValues; },
/* harmony export */   "getColorObjectByColorValue": function() { return /* binding */ getColorObjectByColorValue; },
/* harmony export */   "getFontSize": function() { return /* binding */ getFontSize; },
/* harmony export */   "getFontSizeClass": function() { return /* binding */ getFontSizeClass; },
/* harmony export */   "withColorContext": function() { return /* binding */ withColorContext; },
/* harmony export */   "withColors": function() { return /* binding */ withColors; },
/* harmony export */   "withFontSizes": function() { return /* binding */ withFontSizes; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/deprecated */ "@wordpress/deprecated");
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_4__);


// Block Creation Components.

/**
 * WordPress dependencies
 */





function deprecateComponent(name, Wrapped) {
  let staticsToHoist = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  const Component = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref) => {
    _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_2___default()('wp.editor.' + name, {
      since: '5.3',
      alternative: 'wp.blockEditor.' + name,
      version: '6.2'
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Wrapped, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ref: ref
    }, props));
  });
  staticsToHoist.forEach(staticName => {
    Component[staticName] = deprecateComponent(name + '.' + staticName, Wrapped[staticName]);
  });
  return Component;
}

function deprecateFunction(name, func) {
  return function () {
    _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_2___default()('wp.editor.' + name, {
      since: '5.3',
      alternative: 'wp.blockEditor.' + name,
      version: '6.2'
    });
    return func(...arguments);
  };
}

const RichText = deprecateComponent('RichText', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, ['Content']);
RichText.isEmpty = deprecateFunction('RichText.isEmpty', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText.isEmpty);

const Autocomplete = deprecateComponent('Autocomplete', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.Autocomplete);
const AlignmentToolbar = deprecateComponent('AlignmentToolbar', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.AlignmentToolbar);
const BlockAlignmentToolbar = deprecateComponent('BlockAlignmentToolbar', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockAlignmentToolbar);
const BlockControls = deprecateComponent('BlockControls', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockControls, ['Slot']);
const BlockEdit = deprecateComponent('BlockEdit', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockEdit);
const BlockEditorKeyboardShortcuts = deprecateComponent('BlockEditorKeyboardShortcuts', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockEditorKeyboardShortcuts);
const BlockFormatControls = deprecateComponent('BlockFormatControls', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockFormatControls, ['Slot']);
const BlockIcon = deprecateComponent('BlockIcon', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockIcon);
const BlockInspector = deprecateComponent('BlockInspector', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockInspector);
const BlockList = deprecateComponent('BlockList', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockList);
const BlockMover = deprecateComponent('BlockMover', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockMover);
const BlockNavigationDropdown = deprecateComponent('BlockNavigationDropdown', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockNavigationDropdown);
const BlockSelectionClearer = deprecateComponent('BlockSelectionClearer', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockSelectionClearer);
const BlockSettingsMenu = deprecateComponent('BlockSettingsMenu', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockSettingsMenu);
const BlockTitle = deprecateComponent('BlockTitle', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockTitle);
const BlockToolbar = deprecateComponent('BlockToolbar', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockToolbar);
const ColorPalette = deprecateComponent('ColorPalette', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.ColorPalette);
const ContrastChecker = deprecateComponent('ContrastChecker', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.ContrastChecker);
const CopyHandler = deprecateComponent('CopyHandler', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.CopyHandler);
const DefaultBlockAppender = deprecateComponent('DefaultBlockAppender', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.DefaultBlockAppender);
const FontSizePicker = deprecateComponent('FontSizePicker', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.FontSizePicker);
const Inserter = deprecateComponent('Inserter', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.Inserter);
const InnerBlocks = deprecateComponent('InnerBlocks', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks, ['ButtonBlockAppender', 'DefaultBlockAppender', 'Content']);
const InspectorAdvancedControls = deprecateComponent('InspectorAdvancedControls', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorAdvancedControls, ['Slot']);
const InspectorControls = deprecateComponent('InspectorControls', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, ['Slot']);
const PanelColorSettings = deprecateComponent('PanelColorSettings', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings);
const PlainText = deprecateComponent('PlainText', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PlainText);
const RichTextShortcut = deprecateComponent('RichTextShortcut', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichTextShortcut);
const RichTextToolbarButton = deprecateComponent('RichTextToolbarButton', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichTextToolbarButton);
const __unstableRichTextInputEvent = deprecateComponent('__unstableRichTextInputEvent', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__unstableRichTextInputEvent);
const MediaPlaceholder = deprecateComponent('MediaPlaceholder', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaPlaceholder);
const MediaUpload = deprecateComponent('MediaUpload', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload);
const MediaUploadCheck = deprecateComponent('MediaUploadCheck', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUploadCheck);
const MultiSelectScrollIntoView = deprecateComponent('MultiSelectScrollIntoView', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MultiSelectScrollIntoView);
const NavigableToolbar = deprecateComponent('NavigableToolbar', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.NavigableToolbar);
const ObserveTyping = deprecateComponent('ObserveTyping', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.ObserveTyping);
const SkipToSelectedBlock = deprecateComponent('SkipToSelectedBlock', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.SkipToSelectedBlock);
const URLInput = deprecateComponent('URLInput', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.URLInput);
const URLInputButton = deprecateComponent('URLInputButton', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.URLInputButton);
const URLPopover = deprecateComponent('URLPopover', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.URLPopover);
const Warning = deprecateComponent('Warning', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.Warning);
const WritingFlow = deprecateComponent('WritingFlow', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.WritingFlow);
const createCustomColorsHOC = deprecateFunction('createCustomColorsHOC', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.createCustomColorsHOC);
const getColorClassName = deprecateFunction('getColorClassName', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getColorClassName);
const getColorObjectByAttributeValues = deprecateFunction('getColorObjectByAttributeValues', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getColorObjectByAttributeValues);
const getColorObjectByColorValue = deprecateFunction('getColorObjectByColorValue', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getColorObjectByColorValue);
const getFontSize = deprecateFunction('getFontSize', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getFontSize);
const getFontSizeClass = deprecateFunction('getFontSizeClass', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getFontSizeClass);
const withColorContext = deprecateFunction('withColorContext', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.withColorContext);
const withColors = deprecateFunction('withColors', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.withColors);
const withFontSizes = deprecateFunction('withFontSizes', _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.withFontSizes);


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/document-outline/check.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/document-outline/check.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




function DocumentOutlineCheck(_ref) {
  let {
    blocks,
    children
  } = _ref;
  const headings = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.filter)(blocks, block => block.name === 'core/heading');

  if (headings.length < 1) {
    return null;
  }

  return children;
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.withSelect)(select => ({
  blocks: select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.store).getBlocks()
}))(DocumentOutlineCheck));


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/document-outline/index.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/document-outline/index.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentOutline": function() { return /* binding */ DocumentOutline; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./item */ "./node_modules/@wordpress/editor/build-module/components/document-outline/item.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");


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
 * Module constants
 */

const emptyHeadingContent = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("em", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('(Empty heading)'));
const incorrectLevelContent = [(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", {
  key: "incorrect-break"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("em", {
  key: "incorrect-message"
}, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('(Incorrect heading level)'))];
const singleH1Headings = [(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", {
  key: "incorrect-break-h1"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("em", {
  key: "incorrect-message-h1"
}, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('(Your theme may already use a H1 for the post title)'))];
const multipleH1Headings = [(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", {
  key: "incorrect-break-multiple-h1"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("em", {
  key: "incorrect-message-multiple-h1"
}, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('(Multiple H1 headings are not recommended)'))];
/**
 * Returns an array of heading blocks enhanced with the following properties:
 * level   - An integer with the heading level.
 * isEmpty - Flag indicating if the heading has no content.
 *
 * @param {?Array} blocks An array of blocks.
 *
 * @return {Array} An array of heading blocks enhanced with the properties described above.
 */

const computeOutlineHeadings = function () {
  let blocks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return (0,lodash__WEBPACK_IMPORTED_MODULE_1__.flatMap)(blocks, function () {
    let block = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (block.name === 'core/heading') {
      return { ...block,
        level: block.attributes.level,
        isEmpty: isEmptyHeading(block)
      };
    }

    return computeOutlineHeadings(block.innerBlocks);
  });
};

const isEmptyHeading = heading => !heading.attributes.content || heading.attributes.content.length === 0;

const DocumentOutline = _ref => {
  let {
    blocks = [],
    title,
    onSelect,
    isTitleSupported,
    hasOutlineItemsDisabled
  } = _ref;
  const headings = computeOutlineHeadings(blocks);

  if (headings.length < 1) {
    return null;
  }

  let prevHeadingLevel = 1; // Not great but it's the simplest way to locate the title right now.

  const titleNode = document.querySelector('.editor-post-title__input');
  const hasTitle = isTitleSupported && title && titleNode;
  const countByLevel = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.countBy)(headings, 'level');
  const hasMultipleH1 = countByLevel[1] > 1;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "document-outline"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, hasTitle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_item__WEBPACK_IMPORTED_MODULE_9__["default"], {
    level: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title'),
    isValid: true,
    onSelect: onSelect,
    href: `#${titleNode.id}`,
    isDisabled: hasOutlineItemsDisabled
  }, title), headings.map((item, index) => {
    // Headings remain the same, go up by one, or down by any amount.
    // Otherwise there are missing levels.
    const isIncorrectLevel = item.level > prevHeadingLevel + 1;
    const isValid = !item.isEmpty && !isIncorrectLevel && !!item.level && (item.level !== 1 || !hasMultipleH1 && !hasTitle);
    prevHeadingLevel = item.level;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_item__WEBPACK_IMPORTED_MODULE_9__["default"], {
      key: index,
      level: `H${item.level}`,
      isValid: isValid,
      isDisabled: hasOutlineItemsDisabled,
      href: `#block-${item.clientId}`,
      onSelect: onSelect
    }, item.isEmpty ? emptyHeadingContent : (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_5__.getTextContent)((0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_5__.create)({
      html: item.attributes.content
    })), isIncorrectLevel && incorrectLevelContent, item.level === 1 && hasMultipleH1 && multipleH1Headings, hasTitle && item.level === 1 && !hasMultipleH1 && singleH1Headings);
  })));
};
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.compose)((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.withSelect)(select => {
  const {
    getBlocks
  } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.store);
  const {
    getEditedPostAttribute
  } = select(_store__WEBPACK_IMPORTED_MODULE_8__.store);
  const {
    getPostType
  } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_7__.store);
  const postType = getPostType(getEditedPostAttribute('type'));
  return {
    title: getEditedPostAttribute('title'),
    blocks: getBlocks(),
    isTitleSupported: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(postType, ['supports', 'title'], false)
  };
}))(DocumentOutline));


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/document-outline/item.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/document-outline/item.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);


/**
 * External dependencies
 */


const TableOfContentsItem = _ref => {
  let {
    children,
    isValid,
    level,
    href,
    onSelect
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('document-outline__item', `is-${level.toLowerCase()}`, {
      'is-invalid': !isValid
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: href,
    className: "document-outline__button",
    onClick: onSelect
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "document-outline__emdash",
    "aria-hidden": "true"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", {
    className: "document-outline__level"
  }, level), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "document-outline__item-content"
  }, children)));
};

/* harmony default export */ __webpack_exports__["default"] = (TableOfContentsItem);


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/editor-history/redo.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/editor-history/redo.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/redo.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/undo.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");



/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



function EditorHistoryRedo(props, ref) {
  const hasRedo = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => select(_store__WEBPACK_IMPORTED_MODULE_6__.store).hasEditorRedo(), []);
  const {
    redo
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_6__.store);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ref: ref,
    icon: !(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.isRTL)() ? _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__["default"] : _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__["default"]
    /* translators: button label text should, if possible, be under 16 characters. */
    ,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Redo'),
    shortcut: _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5__.displayShortcut.primaryShift('z') // If there are no redo levels we don't want to actually disable this
    // button, because it will remove focus for keyboard users.
    // See: https://github.com/WordPress/gutenberg/issues/3486
    ,
    "aria-disabled": !hasRedo,
    onClick: hasRedo ? redo : undefined,
    className: "editor-history__redo"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(EditorHistoryRedo));


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/editor-history/undo.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/editor-history/undo.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/undo.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/redo.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");



/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



function EditorHistoryUndo(props, ref) {
  const hasUndo = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => select(_store__WEBPACK_IMPORTED_MODULE_6__.store).hasEditorUndo(), []);
  const {
    undo
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_6__.store);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ref: ref,
    icon: !(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.isRTL)() ? _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__["default"] : _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__["default"]
    /* translators: button label text should, if possible, be under 16 characters. */
    ,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Undo'),
    shortcut: _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5__.displayShortcut.primary('z') // If there are no undo levels we don't want to actually disable this
    // button, because it will remove focus for keyboard users.
    // See: https://github.com/WordPress/gutenberg/issues/3486
    ,
    "aria-disabled": !hasUndo,
    onClick: hasUndo ? undo : undefined,
    className: "editor-history__undo"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(EditorHistoryUndo));


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/editor-notices/index.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/editor-notices/index.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditorNotices": function() { return /* binding */ EditorNotices; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _template_validation_notice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../template-validation-notice */ "./node_modules/@wordpress/editor/build-module/components/template-validation-notice/index.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


function EditorNotices(_ref) {
  let {
    notices,
    onRemove
  } = _ref;
  const dismissibleNotices = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.filter)(notices, {
    isDismissible: true,
    type: 'default'
  });
  const nonDismissibleNotices = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.filter)(notices, {
    isDismissible: false,
    type: 'default'
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.NoticeList, {
    notices: nonDismissibleNotices,
    className: "components-editor-notices__pinned"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.NoticeList, {
    notices: dismissibleNotices,
    className: "components-editor-notices__dismissible",
    onRemove: onRemove
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_template_validation_notice__WEBPACK_IMPORTED_MODULE_6__["default"], null)));
}
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.compose)([(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.withSelect)(select => ({
  notices: select(_wordpress_notices__WEBPACK_IMPORTED_MODULE_5__.store).getNotices()
})), (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.withDispatch)(dispatch => ({
  onRemove: dispatch(_wordpress_notices__WEBPACK_IMPORTED_MODULE_5__.store).removeNotice
}))])(EditorNotices));


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/editor-snackbars/index.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/editor-snackbars/index.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EditorSnackbars; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_4__);


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




function EditorSnackbars() {
  const notices = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_wordpress_notices__WEBPACK_IMPORTED_MODULE_4__.store).getNotices(), []);
  const {
    removeNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_4__.store);
  const snackbarNotices = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.filter)(notices, {
    type: 'snackbar'
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SnackbarList, {
    notices: snackbarNotices,
    className: "components-editor-notices__snackbar",
    onRemove: removeNotice
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/entities-saved-states/entity-record-item.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/entities-saved-states/entity-record-item.js ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EntityRecordItem; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");


/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */


function EntityRecordItem(_ref) {
  let {
    record,
    checked,
    onChange,
    closePanel
  } = _ref;
  const {
    name,
    kind,
    title,
    key
  } = record;
  const parentBlockId = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    var _blocks$;

    // Get entity's blocks.
    const {
      blocks = []
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.store).getEditedEntityRecord(kind, name, key); // Get parents of the entity's first block.

    const parents = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.store).getBlockParents((_blocks$ = blocks[0]) === null || _blocks$ === void 0 ? void 0 : _blocks$.clientId); // Return closest parent block's clientId.

    return parents[parents.length - 1];
  }, []); // Handle templates that might use default descriptive titles.

  const entityRecordTitle = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    if ('postType' !== kind || 'wp_template' !== name) {
      return title;
    }

    const template = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.store).getEditedEntityRecord(kind, name, key);
    return select(_store__WEBPACK_IMPORTED_MODULE_7__.store).__experimentalGetTemplateInfo(template).title;
  }, [name, kind, title, key]);
  const isSelected = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    const selectedBlockId = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.store).getSelectedBlockClientId();
    return selectedBlockId === parentBlockId;
  }, [parentBlockId]);
  const isSelectedText = isSelected ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Selected') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select');
  const {
    selectBlock
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.store);
  const selectParentBlock = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => selectBlock(parentBlockId), [parentBlockId]);
  const selectAndDismiss = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    selectBlock(parentBlockId);
    closePanel();
  }, [parentBlockId]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CheckboxControl, {
    label: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_6__.decodeEntities)(entityRecordTitle) || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Untitled')),
    checked: checked,
    onChange: onChange
  }), parentBlockId ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    onClick: selectParentBlock,
    className: "entities-saved-states__find-entity",
    disabled: isSelected
  }, isSelectedText), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    onClick: selectAndDismiss,
    className: "entities-saved-states__find-entity-small",
    disabled: isSelected
  }, isSelectedText)) : null);
}


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/entities-saved-states/entity-type-list.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/entities-saved-states/entity-type-list.js ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EntityTypeList; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _entity_record_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./entity-record-item */ "./node_modules/@wordpress/editor/build-module/components/entities-saved-states/entity-record-item.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



function getEntityDescription(entity, count) {
  switch (entity) {
    case 'site':
      return 1 === count ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('This change will affect your whole site.') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('These changes will affect your whole site.');

    case 'wp_template':
      return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('This change will affect pages and posts that use this template.');

    case 'page':
    case 'post':
      return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('The following content has been modified.');
  }
}

function EntityTypeList(_ref) {
  let {
    list,
    unselectedEntities,
    setUnselectedEntities,
    closePanel
  } = _ref;
  const count = list.length;
  const firstRecord = list[0];
  const entityConfig = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.store).getEntityConfig(firstRecord.kind, firstRecord.name), [firstRecord.kind, firstRecord.name]);
  const {
    name
  } = firstRecord;
  let entityLabel = entityConfig.label;

  if (name === 'wp_template_part') {
    entityLabel = 1 === count ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Template Part') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Template Parts');
  } // Set description based on type of entity.


  const description = getEntityDescription(name, count);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: entityLabel,
    initialOpen: true
  }, description && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, description), list.map(record => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_entity_record_item__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: record.key || record.property,
      record: record,
      checked: !(0,lodash__WEBPACK_IMPORTED_MODULE_1__.some)(unselectedEntities, elt => elt.kind === record.kind && elt.name === record.name && elt.key === record.key && elt.property === record.property),
      onChange: value => setUnselectedEntities(record, value),
      closePanel: closePanel
    });
  }));
}


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/entities-saved-states/index.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/entities-saved-states/index.js ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EntitiesSavedStates; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _entity_type_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./entity-type-list */ "./node_modules/@wordpress/editor/build-module/components/entities-saved-states/entity-type-list.js");



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */









/**
 * Internal dependencies
 */


const TRANSLATED_SITE_PROPERTIES = {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Title'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Tagline'),
  site_logo: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Logo'),
  site_icon: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Icon'),
  show_on_front: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Show on front'),
  page_on_front: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Page on front')
};
const PUBLISH_ON_SAVE_ENTITIES = [{
  kind: 'postType',
  name: 'wp_navigation'
}];
function EntitiesSavedStates(_ref) {
  let {
    close
  } = _ref;
  const saveButtonRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const {
    dirtyEntityRecords
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => {
    const dirtyRecords = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__.store).__experimentalGetDirtyEntityRecords(); // Remove site object and decouple into its edited pieces.


    const dirtyRecordsWithoutSite = dirtyRecords.filter(record => !(record.kind === 'root' && record.name === 'site'));
    const siteEdits = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__.store).getEntityRecordEdits('root', 'site');
    const siteEditsAsEntities = [];

    for (const property in siteEdits) {
      siteEditsAsEntities.push({
        kind: 'root',
        name: 'site',
        title: TRANSLATED_SITE_PROPERTIES[property] || property,
        property
      });
    }

    const dirtyRecordsWithSiteItems = [...dirtyRecordsWithoutSite, ...siteEditsAsEntities];
    return {
      dirtyEntityRecords: dirtyRecordsWithSiteItems
    };
  }, []);
  const {
    editEntityRecord,
    saveEditedEntityRecord,
    __experimentalSaveSpecifiedEntityEdits: saveSpecifiedEntityEdits
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useDispatch)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__.store);
  const {
    __unstableMarkLastChangeAsPersistent
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useDispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.store);
  const {
    createSuccessNotice,
    createErrorNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_9__.store); // To group entities by type.

  const partitionedSavables = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.groupBy)(dirtyEntityRecords, 'name'); // Sort entity groups.

  const {
    site: siteSavables,
    wp_template: templateSavables,
    wp_template_part: templatePartSavables,
    ...contentSavables
  } = partitionedSavables;
  const sortedPartitionedSavables = [siteSavables, templateSavables, templatePartSavables, ...Object.values(contentSavables)].filter(Array.isArray); // Unchecked entities to be ignored by save function.

  const [unselectedEntities, _setUnselectedEntities] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)([]);

  const setUnselectedEntities = (_ref2, checked) => {
    let {
      kind,
      name,
      key,
      property
    } = _ref2;

    if (checked) {
      _setUnselectedEntities(unselectedEntities.filter(elt => elt.kind !== kind || elt.name !== name || elt.key !== key || elt.property !== property));
    } else {
      _setUnselectedEntities([...unselectedEntities, {
        kind,
        name,
        key,
        property
      }]);
    }
  };

  const saveCheckedEntities = () => {
    const entitiesToSave = dirtyEntityRecords.filter(_ref3 => {
      let {
        kind,
        name,
        key,
        property
      } = _ref3;
      return !(0,lodash__WEBPACK_IMPORTED_MODULE_2__.some)(unselectedEntities, elt => elt.kind === kind && elt.name === name && elt.key === key && elt.property === property);
    });
    close(entitiesToSave);
    const siteItemsToSave = [];
    const pendingSavedRecords = [];
    entitiesToSave.forEach(_ref4 => {
      let {
        kind,
        name,
        key,
        property
      } = _ref4;

      if ('root' === kind && 'site' === name) {
        siteItemsToSave.push(property);
      } else {
        if (PUBLISH_ON_SAVE_ENTITIES.some(typeToPublish => typeToPublish.kind === kind && typeToPublish.name === name)) {
          editEntityRecord(kind, name, key, {
            status: 'publish'
          });
        }

        pendingSavedRecords.push(saveEditedEntityRecord(kind, name, key));
      }
    });

    if (siteItemsToSave.length) {
      pendingSavedRecords.push(saveSpecifiedEntityEdits('root', 'site', undefined, siteItemsToSave));
    }

    __unstableMarkLastChangeAsPersistent();

    Promise.all(pendingSavedRecords).then(values => {
      if (values.some(value => typeof value === 'undefined')) {
        createErrorNotice((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Saving failed.'));
      } else {
        createSuccessNotice((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Site updated.'), {
          type: 'snackbar'
        });
      }
    }).catch(error => createErrorNotice(`${(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Saving failed.')} ${error}`));
  }; // Explicitly define this with no argument passed.  Using `close` on
  // its own will use the event object in place of the expected saved entities.


  const dismissPanel = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => close(), [close]);
  const [saveDialogRef, saveDialogProps] = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_8__.__experimentalUseDialog)({
    onClose: () => dismissPanel()
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: saveDialogRef
  }, saveDialogProps, {
    className: "entities-saved-states__panel"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Flex, {
    className: "entities-saved-states__panel-header",
    gap: 2
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FlexItem, {
    isBlock: true,
    as: _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button,
    ref: saveButtonRef,
    variant: "primary",
    disabled: dirtyEntityRecords.length - unselectedEntities.length === 0,
    onClick: saveCheckedEntities,
    className: "editor-entities-saved-states__save-button"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Save')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FlexItem, {
    isBlock: true,
    as: _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button,
    variant: "secondary",
    onClick: dismissPanel
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Cancel'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "entities-saved-states__text-prompt"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Are you ready to save?')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('The following changes have been made to your site, templates, and content.'))), sortedPartitionedSavables.map(list => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_entity_type_list__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: list[0].name,
      list: list,
      closePanel: dismissPanel,
      unselectedEntities: unselectedEntities,
      setUnselectedEntities: setUnselectedEntities
    });
  }));
}


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/error-boundary/index.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/error-boundary/index.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");


/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



function CopyButton(_ref) {
  let {
    text,
    children
  } = _ref;
  const ref = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__.useCopyToClipboard)(text);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "secondary",
    ref: ref
  }, children);
}

class ErrorBoundary extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments);
    this.reboot = this.reboot.bind(this);
    this.getContent = this.getContent.bind(this);
    this.state = {
      error: null
    };
  }

  componentDidCatch(error) {
    this.setState({
      error
    });
  }

  reboot() {
    this.props.onError();
  }

  getContent() {
    try {
      // While `select` in a component is generally discouraged, it is
      // used here because it (a) reduces the chance of data loss in the
      // case of additional errors by performing a direct retrieval and
      // (b) avoids the performance cost associated with unnecessary
      // content serialization throughout the lifetime of a non-erroring
      // application.
      return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.select)(_store__WEBPACK_IMPORTED_MODULE_6__.store).getEditedPostContent();
    } catch (error) {}
  }

  render() {
    const {
      error
    } = this.state;

    if (!error) {
      return this.props.children;
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.Warning, {
      className: "editor-error-boundary",
      actions: [(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        key: "recovery",
        onClick: this.reboot,
        variant: "secondary"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Attempt Recovery')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CopyButton, {
        key: "copy-post",
        text: this.getContent
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Copy Post Text')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CopyButton, {
        key: "copy-error",
        text: error.stack
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Copy Error'))]
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The editor has encountered an unexpected error.'));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ErrorBoundary);


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/global-keyboard-shortcuts/register-shortcuts.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/global-keyboard-shortcuts/register-shortcuts.js ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/keyboard-shortcuts */ "@wordpress/keyboard-shortcuts");
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_4__);


/**
 * WordPress dependencies
 */






function EditorKeyboardShortcutsRegister() {
  // Registering the shortcuts.
  const {
    registerShortcut
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_4__.store);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    registerShortcut({
      name: 'core/editor/save',
      category: 'global',
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Save your changes.'),
      keyCombination: {
        modifier: 'primary',
        character: 's'
      }
    });
    registerShortcut({
      name: 'core/editor/undo',
      category: 'global',
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Undo your last changes.'),
      keyCombination: {
        modifier: 'primary',
        character: 'z'
      }
    });
    registerShortcut({
      name: 'core/editor/redo',
      category: 'global',
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Redo your last undo.'),
      keyCombination: {
        modifier: 'primaryShift',
        character: 'z'
      }
    });
  }, [registerShortcut]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockEditorKeyboardShortcuts.Register, null);
}

/* harmony default export */ __webpack_exports__["default"] = (EditorKeyboardShortcutsRegister);


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/global-keyboard-shortcuts/save-shortcut.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/global-keyboard-shortcuts/save-shortcut.js ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/keyboard-shortcuts */ "@wordpress/keyboard-shortcuts");
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



function SaveShortcut(_ref) {
  let {
    resetBlocksOnSave
  } = _ref;
  const {
    resetEditorBlocks,
    savePost
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_3__.store);
  const {
    isEditedPostDirty,
    getPostEdits,
    isPostSavingLocked
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(_store__WEBPACK_IMPORTED_MODULE_3__.store);
  (0,_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_0__.useShortcut)('core/editor/save', event => {
    event.preventDefault();
    /**
     * Do not save the post if post saving is locked.
     */

    if (isPostSavingLocked()) {
      return;
    } // TODO: This should be handled in the `savePost` effect in
    // considering `isSaveable`. See note on `isEditedPostSaveable`
    // selector about dirtiness and meta-boxes.
    //
    // See: `isEditedPostSaveable`


    if (!isEditedPostDirty()) {
      return;
    } // The text editor requires that editor blocks are updated for a
    // save to work correctly. Usually this happens when the textarea
    // for the code editors blurs, but the shortcut can be used without
    // blurring the textarea.


    if (resetBlocksOnSave) {
      const postEdits = getPostEdits();

      if (postEdits.content && typeof postEdits.content === 'string') {
        const blocks = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.parse)(postEdits.content);
        resetEditorBlocks(blocks);
      }
    }

    savePost();
  });
  return null;
}

/* harmony default export */ __webpack_exports__["default"] = (SaveShortcut);


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/global-keyboard-shortcuts/text-editor-shortcuts.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/global-keyboard-shortcuts/text-editor-shortcuts.js ***!
  \*******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TextEditorGlobalKeyboardShortcuts; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _save_shortcut__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save-shortcut */ "./node_modules/@wordpress/editor/build-module/components/global-keyboard-shortcuts/save-shortcut.js");


/**
 * Internal dependencies
 */

function TextEditorGlobalKeyboardShortcuts() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_save_shortcut__WEBPACK_IMPORTED_MODULE_1__["default"], {
    resetBlocksOnSave: true
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/global-keyboard-shortcuts/visual-editor-shortcuts.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/global-keyboard-shortcuts/visual-editor-shortcuts.js ***!
  \*********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/keyboard-shortcuts */ "@wordpress/keyboard-shortcuts");
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _save_shortcut__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save-shortcut */ "./node_modules/@wordpress/editor/build-module/components/global-keyboard-shortcuts/save-shortcut.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




function VisualEditorGlobalKeyboardShortcuts() {
  const {
    redo,
    undo
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_3__.store);
  (0,_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_1__.useShortcut)('core/editor/undo', event => {
    undo();
    event.preventDefault();
  });
  (0,_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_1__.useShortcut)('core/editor/redo', event => {
    redo();
    event.preventDefault();
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_save_shortcut__WEBPACK_IMPORTED_MODULE_4__["default"], null);
}

/* harmony default export */ __webpack_exports__["default"] = (VisualEditorGlobalKeyboardShortcuts);


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/index.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlignmentToolbar": function() { return /* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_63__.AlignmentToolbar; },
/* harmony export */   "Autocomplete": function() { return /* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_63__.Autocomplete; },
/* harmony export */   "AutosaveMonitor": function() { return /* reexport safe */ _autosave_monitor__WEBPACK_IMPORTED_MODULE_1__["default"]; },
/* harmony export */   "BlockAlignmentToolbar": function() { return /* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_63__.BlockAlignmentToolbar; },
/* harmony export */   "BlockControls": function() { return /* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_63__.BlockControls; },
/* harmony export */   "BlockEdit": function() { return /* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_63__.BlockEdit; },
/* harmony export */   "BlockEditorKeyboardShortcuts": function() { return /* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_63__.BlockEditorKeyboardShortcuts; },
/* harmony export */   "BlockFormatControls": function() { return /* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_63__.BlockFormatControls; },
/* harmony export */   "BlockIcon": function() { return /* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_63__.BlockIcon; },
/* harmony export */   "BlockInspector": function() { return /* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_63__.BlockInspector; },
/* harmony export */   "BlockList": function() { return /* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_63__.BlockList; },
/* harmony export */   "BlockMover": function() { return /* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_63__.BlockMover; },
/* harmony export */   "BlockNavigationDropdown": function() { return /* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_63__.BlockNavigationDropdown; },
/* harmony export */   "BlockSelectionClearer": function() { return /* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_63__.BlockSelectionClearer; },
/* harmony export */   "BlockSettingsMenu": function() { return /* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_63__.BlockSettingsMenu; },
/* harmony export */   "BlockTitle": function() { return /* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_63__.BlockTitle; },
/* harmony export */   "BlockToolbar": function() { return /* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_63__.BlockToolbar; },
/* harmony export */   "ColorPalette": function() { return /* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_63__.ColorPalette; },
/* harmony export */   "ContrastChecker": function() { return /* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_63__.ContrastChecker; },
/* harmony export */   "CopyHandler": function() { return /* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_63__.CopyHandler; },
/* harmony export */   "DefaultBlockAppender": function() { return /* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_63__.DefaultBlockAppender; },
/* harmony export */   "DocumentOutline": function() { return /* reexport safe */ _document_outline__WEBPACK_IMPORTED_MODULE_2__["default"]; },
/* harmony export */   "DocumentOutlineCheck": function() { return /* reexport safe */ _document_outline_check__WEBPACK_IMPORTED_MODULE_3__["default"]; },
/* harmony export */   "EditorHistoryRedo": function() { return /* reexport safe */ _editor_history_redo__WEBPACK_IMPORTED_MODULE_7__["default"]; },
/* harmony export */   "EditorHistoryUndo": function() { return /* reexport safe */ _editor_history_undo__WEBPACK_IMPORTED_MODULE_8__["default"]; },
/* harmony export */   "EditorKeyboardShortcutsRegister": function() { return /* reexport safe */ _global_keyboard_shortcuts_register_shortcuts__WEBPACK_IMPORTED_MODULE_6__["default"]; },
/* harmony export */   "EditorNotices": function() { return /* reexport safe */ _editor_notices__WEBPACK_IMPORTED_MODULE_9__["default"]; },
/* harmony export */   "EditorProvider": function() { return /* reexport safe */ _provider__WEBPACK_IMPORTED_MODULE_62__["default"]; },
/* harmony export */   "EditorSnackbars": function() { return /* reexport safe */ _editor_snackbars__WEBPACK_IMPORTED_MODULE_10__["default"]; },
/* harmony export */   "EntitiesSavedStates": function() { return /* reexport safe */ _entities_saved_states__WEBPACK_IMPORTED_MODULE_11__["default"]; },
/* harmony export */   "ErrorBoundary": function() { return /* reexport safe */ _error_boundary__WEBPACK_IMPORTED_MODULE_12__["default"]; },
/* harmony export */   "FontSizePicker": function() { return /* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_63__.FontSizePicker; },
/* harmony export */   "InnerBlocks": function() { return /* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_63__.InnerBlocks; },
/* harmony export */   "Inserter": function() { return /* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_63__.Inserter; },
/* harmony export */   "InspectorAdvancedControls": function() { return /* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_63__.InspectorAdvancedControls; },
/* harmony export */   "InspectorControls": function() { return /* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_63__.InspectorControls; },
/* harmony export */   "LocalAutosaveMonitor": function() { return /* reexport safe */ _local_autosave_monitor__WEBPACK_IMPORTED_MODULE_13__["default"]; },
/* harmony export */   "MediaPlaceholder": function() { return /* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_63__.MediaPlaceholder; },
/* harmony export */   "MediaUpload": function() { return /* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_63__.MediaUpload; },
/* harmony export */   "MediaUploadCheck": function() { return /* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_63__.MediaUploadCheck; },
/* harmony export */   "MultiSelectScrollIntoView": function() { return /* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_63__.MultiSelectScrollIntoView; },
/* harmony export */   "NavigableToolbar": function() { return /* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_63__.NavigableToolbar; },
/* harmony export */   "ObserveTyping": function() { return /* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_63__.ObserveTyping; },
/* harmony export */   "PageAttributesCheck": function() { return /* reexport safe */ _page_attributes_check__WEBPACK_IMPORTED_MODULE_14__["default"]; },
/* harmony export */   "PageAttributesOrder": function() { return /* reexport safe */ _page_attributes_order__WEBPACK_IMPORTED_MODULE_15__["default"]; },
/* harmony export */   "PageAttributesParent": function() { return /* reexport safe */ _page_attributes_parent__WEBPACK_IMPORTED_MODULE_16__["default"]; },
/* harmony export */   "PageTemplate": function() { return /* reexport safe */ _post_template__WEBPACK_IMPORTED_MODULE_17__["default"]; },
/* harmony export */   "PanelColorSettings": function() { return /* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_63__.PanelColorSettings; },
/* harmony export */   "PlainText": function() { return /* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_63__.PlainText; },
/* harmony export */   "PostAuthor": function() { return /* reexport safe */ _post_author__WEBPACK_IMPORTED_MODULE_18__["default"]; },
/* harmony export */   "PostAuthorCheck": function() { return /* reexport safe */ _post_author_check__WEBPACK_IMPORTED_MODULE_19__["default"]; },
/* harmony export */   "PostComments": function() { return /* reexport safe */ _post_comments__WEBPACK_IMPORTED_MODULE_20__["default"]; },
/* harmony export */   "PostExcerpt": function() { return /* reexport safe */ _post_excerpt__WEBPACK_IMPORTED_MODULE_21__["default"]; },
/* harmony export */   "PostExcerptCheck": function() { return /* reexport safe */ _post_excerpt_check__WEBPACK_IMPORTED_MODULE_22__["default"]; },
/* harmony export */   "PostFeaturedImage": function() { return /* reexport safe */ _post_featured_image__WEBPACK_IMPORTED_MODULE_23__["default"]; },
/* harmony export */   "PostFeaturedImageCheck": function() { return /* reexport safe */ _post_featured_image_check__WEBPACK_IMPORTED_MODULE_24__["default"]; },
/* harmony export */   "PostFormat": function() { return /* reexport safe */ _post_format__WEBPACK_IMPORTED_MODULE_25__["default"]; },
/* harmony export */   "PostFormatCheck": function() { return /* reexport safe */ _post_format_check__WEBPACK_IMPORTED_MODULE_26__["default"]; },
/* harmony export */   "PostLastRevision": function() { return /* reexport safe */ _post_last_revision__WEBPACK_IMPORTED_MODULE_27__["default"]; },
/* harmony export */   "PostLastRevisionCheck": function() { return /* reexport safe */ _post_last_revision_check__WEBPACK_IMPORTED_MODULE_28__["default"]; },
/* harmony export */   "PostLockedModal": function() { return /* reexport safe */ _post_locked_modal__WEBPACK_IMPORTED_MODULE_29__["default"]; },
/* harmony export */   "PostPendingStatus": function() { return /* reexport safe */ _post_pending_status__WEBPACK_IMPORTED_MODULE_30__["default"]; },
/* harmony export */   "PostPendingStatusCheck": function() { return /* reexport safe */ _post_pending_status_check__WEBPACK_IMPORTED_MODULE_31__["default"]; },
/* harmony export */   "PostPingbacks": function() { return /* reexport safe */ _post_pingbacks__WEBPACK_IMPORTED_MODULE_32__["default"]; },
/* harmony export */   "PostPreviewButton": function() { return /* reexport safe */ _post_preview_button__WEBPACK_IMPORTED_MODULE_33__["default"]; },
/* harmony export */   "PostPublishButton": function() { return /* reexport safe */ _post_publish_button__WEBPACK_IMPORTED_MODULE_34__["default"]; },
/* harmony export */   "PostPublishButtonLabel": function() { return /* reexport safe */ _post_publish_button_label__WEBPACK_IMPORTED_MODULE_35__["default"]; },
/* harmony export */   "PostPublishPanel": function() { return /* reexport safe */ _post_publish_panel__WEBPACK_IMPORTED_MODULE_36__["default"]; },
/* harmony export */   "PostSavedState": function() { return /* reexport safe */ _post_saved_state__WEBPACK_IMPORTED_MODULE_37__["default"]; },
/* harmony export */   "PostSchedule": function() { return /* reexport safe */ _post_schedule__WEBPACK_IMPORTED_MODULE_38__["default"]; },
/* harmony export */   "PostScheduleCheck": function() { return /* reexport safe */ _post_schedule_check__WEBPACK_IMPORTED_MODULE_39__["default"]; },
/* harmony export */   "PostScheduleLabel": function() { return /* reexport safe */ _post_schedule_label__WEBPACK_IMPORTED_MODULE_40__["default"]; },
/* harmony export */   "PostSlug": function() { return /* reexport safe */ _post_slug__WEBPACK_IMPORTED_MODULE_41__["default"]; },
/* harmony export */   "PostSlugCheck": function() { return /* reexport safe */ _post_slug_check__WEBPACK_IMPORTED_MODULE_42__["default"]; },
/* harmony export */   "PostSticky": function() { return /* reexport safe */ _post_sticky__WEBPACK_IMPORTED_MODULE_43__["default"]; },
/* harmony export */   "PostStickyCheck": function() { return /* reexport safe */ _post_sticky_check__WEBPACK_IMPORTED_MODULE_44__["default"]; },
/* harmony export */   "PostSwitchToDraftButton": function() { return /* reexport safe */ _post_switch_to_draft_button__WEBPACK_IMPORTED_MODULE_45__["default"]; },
/* harmony export */   "PostTaxonomies": function() { return /* reexport safe */ _post_taxonomies__WEBPACK_IMPORTED_MODULE_46__["default"]; },
/* harmony export */   "PostTaxonomiesCheck": function() { return /* reexport safe */ _post_taxonomies_check__WEBPACK_IMPORTED_MODULE_49__["default"]; },
/* harmony export */   "PostTaxonomiesFlatTermSelector": function() { return /* reexport safe */ _post_taxonomies_flat_term_selector__WEBPACK_IMPORTED_MODULE_47__["default"]; },
/* harmony export */   "PostTaxonomiesHierarchicalTermSelector": function() { return /* reexport safe */ _post_taxonomies_hierarchical_term_selector__WEBPACK_IMPORTED_MODULE_48__["default"]; },
/* harmony export */   "PostTextEditor": function() { return /* reexport safe */ _post_text_editor__WEBPACK_IMPORTED_MODULE_50__["default"]; },
/* harmony export */   "PostTitle": function() { return /* reexport safe */ _post_title__WEBPACK_IMPORTED_MODULE_51__["default"]; },
/* harmony export */   "PostTrash": function() { return /* reexport safe */ _post_trash__WEBPACK_IMPORTED_MODULE_52__["default"]; },
/* harmony export */   "PostTrashCheck": function() { return /* reexport safe */ _post_trash_check__WEBPACK_IMPORTED_MODULE_53__["default"]; },
/* harmony export */   "PostTypeSupportCheck": function() { return /* reexport safe */ _post_type_support_check__WEBPACK_IMPORTED_MODULE_54__["default"]; },
/* harmony export */   "PostVisibility": function() { return /* reexport safe */ _post_visibility__WEBPACK_IMPORTED_MODULE_55__["default"]; },
/* harmony export */   "PostVisibilityCheck": function() { return /* reexport safe */ _post_visibility_check__WEBPACK_IMPORTED_MODULE_57__["default"]; },
/* harmony export */   "PostVisibilityLabel": function() { return /* reexport safe */ _post_visibility_label__WEBPACK_IMPORTED_MODULE_56__["default"]; },
/* harmony export */   "RichText": function() { return /* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_63__.RichText; },
/* harmony export */   "RichTextShortcut": function() { return /* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_63__.RichTextShortcut; },
/* harmony export */   "RichTextToolbarButton": function() { return /* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_63__.RichTextToolbarButton; },
/* harmony export */   "ServerSideRender": function() { return /* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_63__.ServerSideRender; },
/* harmony export */   "SkipToSelectedBlock": function() { return /* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_63__.SkipToSelectedBlock; },
/* harmony export */   "TableOfContents": function() { return /* reexport safe */ _table_of_contents__WEBPACK_IMPORTED_MODULE_58__["default"]; },
/* harmony export */   "TextEditorGlobalKeyboardShortcuts": function() { return /* reexport safe */ _global_keyboard_shortcuts_text_editor_shortcuts__WEBPACK_IMPORTED_MODULE_5__["default"]; },
/* harmony export */   "ThemeSupportCheck": function() { return /* reexport safe */ _theme_support_check__WEBPACK_IMPORTED_MODULE_59__["default"]; },
/* harmony export */   "URLInput": function() { return /* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_63__.URLInput; },
/* harmony export */   "URLInputButton": function() { return /* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_63__.URLInputButton; },
/* harmony export */   "URLPopover": function() { return /* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_63__.URLPopover; },
/* harmony export */   "UnsavedChangesWarning": function() { return /* reexport safe */ _unsaved_changes_warning__WEBPACK_IMPORTED_MODULE_60__["default"]; },
/* harmony export */   "VisualEditorGlobalKeyboardShortcuts": function() { return /* reexport safe */ _global_keyboard_shortcuts_visual_editor_shortcuts__WEBPACK_IMPORTED_MODULE_4__["default"]; },
/* harmony export */   "Warning": function() { return /* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_63__.Warning; },
/* harmony export */   "WordCount": function() { return /* reexport safe */ _word_count__WEBPACK_IMPORTED_MODULE_61__["default"]; },
/* harmony export */   "WritingFlow": function() { return /* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_63__.WritingFlow; },
/* harmony export */   "__unstableRichTextInputEvent": function() { return /* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_63__.__unstableRichTextInputEvent; },
/* harmony export */   "createCustomColorsHOC": function() { return /* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_63__.createCustomColorsHOC; },
/* harmony export */   "getColorClassName": function() { return /* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_63__.getColorClassName; },
/* harmony export */   "getColorObjectByAttributeValues": function() { return /* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_63__.getColorObjectByAttributeValues; },
/* harmony export */   "getColorObjectByColorValue": function() { return /* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_63__.getColorObjectByColorValue; },
/* harmony export */   "getFontSize": function() { return /* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_63__.getFontSize; },
/* harmony export */   "getFontSizeClass": function() { return /* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_63__.getFontSizeClass; },
/* harmony export */   "userAutocompleter": function() { return /* reexport safe */ _autocompleters__WEBPACK_IMPORTED_MODULE_0__.userAutocompleter; },
/* harmony export */   "withColorContext": function() { return /* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_63__.withColorContext; },
/* harmony export */   "withColors": function() { return /* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_63__.withColors; },
/* harmony export */   "withFontSizes": function() { return /* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_63__.withFontSizes; }
/* harmony export */ });
/* harmony import */ var _autocompleters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./autocompleters */ "./node_modules/@wordpress/editor/build-module/components/autocompleters/index.js");
/* harmony import */ var _autosave_monitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./autosave-monitor */ "./node_modules/@wordpress/editor/build-module/components/autosave-monitor/index.js");
/* harmony import */ var _document_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./document-outline */ "./node_modules/@wordpress/editor/build-module/components/document-outline/index.js");
/* harmony import */ var _document_outline_check__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./document-outline/check */ "./node_modules/@wordpress/editor/build-module/components/document-outline/check.js");
/* harmony import */ var _global_keyboard_shortcuts_visual_editor_shortcuts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./global-keyboard-shortcuts/visual-editor-shortcuts */ "./node_modules/@wordpress/editor/build-module/components/global-keyboard-shortcuts/visual-editor-shortcuts.js");
/* harmony import */ var _global_keyboard_shortcuts_text_editor_shortcuts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./global-keyboard-shortcuts/text-editor-shortcuts */ "./node_modules/@wordpress/editor/build-module/components/global-keyboard-shortcuts/text-editor-shortcuts.js");
/* harmony import */ var _global_keyboard_shortcuts_register_shortcuts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./global-keyboard-shortcuts/register-shortcuts */ "./node_modules/@wordpress/editor/build-module/components/global-keyboard-shortcuts/register-shortcuts.js");
/* harmony import */ var _editor_history_redo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor-history/redo */ "./node_modules/@wordpress/editor/build-module/components/editor-history/redo.js");
/* harmony import */ var _editor_history_undo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./editor-history/undo */ "./node_modules/@wordpress/editor/build-module/components/editor-history/undo.js");
/* harmony import */ var _editor_notices__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./editor-notices */ "./node_modules/@wordpress/editor/build-module/components/editor-notices/index.js");
/* harmony import */ var _editor_snackbars__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./editor-snackbars */ "./node_modules/@wordpress/editor/build-module/components/editor-snackbars/index.js");
/* harmony import */ var _entities_saved_states__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./entities-saved-states */ "./node_modules/@wordpress/editor/build-module/components/entities-saved-states/index.js");
/* harmony import */ var _error_boundary__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./error-boundary */ "./node_modules/@wordpress/editor/build-module/components/error-boundary/index.js");
/* harmony import */ var _local_autosave_monitor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./local-autosave-monitor */ "./node_modules/@wordpress/editor/build-module/components/local-autosave-monitor/index.js");
/* harmony import */ var _page_attributes_check__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./page-attributes/check */ "./node_modules/@wordpress/editor/build-module/components/page-attributes/check.js");
/* harmony import */ var _page_attributes_order__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./page-attributes/order */ "./node_modules/@wordpress/editor/build-module/components/page-attributes/order.js");
/* harmony import */ var _page_attributes_parent__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./page-attributes/parent */ "./node_modules/@wordpress/editor/build-module/components/page-attributes/parent.js");
/* harmony import */ var _post_template__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./post-template */ "./node_modules/@wordpress/editor/build-module/components/post-template/index.js");
/* harmony import */ var _post_author__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./post-author */ "./node_modules/@wordpress/editor/build-module/components/post-author/index.js");
/* harmony import */ var _post_author_check__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./post-author/check */ "./node_modules/@wordpress/editor/build-module/components/post-author/check.js");
/* harmony import */ var _post_comments__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./post-comments */ "./node_modules/@wordpress/editor/build-module/components/post-comments/index.js");
/* harmony import */ var _post_excerpt__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./post-excerpt */ "./node_modules/@wordpress/editor/build-module/components/post-excerpt/index.js");
/* harmony import */ var _post_excerpt_check__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./post-excerpt/check */ "./node_modules/@wordpress/editor/build-module/components/post-excerpt/check.js");
/* harmony import */ var _post_featured_image__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./post-featured-image */ "./node_modules/@wordpress/editor/build-module/components/post-featured-image/index.js");
/* harmony import */ var _post_featured_image_check__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./post-featured-image/check */ "./node_modules/@wordpress/editor/build-module/components/post-featured-image/check.js");
/* harmony import */ var _post_format__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./post-format */ "./node_modules/@wordpress/editor/build-module/components/post-format/index.js");
/* harmony import */ var _post_format_check__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./post-format/check */ "./node_modules/@wordpress/editor/build-module/components/post-format/check.js");
/* harmony import */ var _post_last_revision__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./post-last-revision */ "./node_modules/@wordpress/editor/build-module/components/post-last-revision/index.js");
/* harmony import */ var _post_last_revision_check__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./post-last-revision/check */ "./node_modules/@wordpress/editor/build-module/components/post-last-revision/check.js");
/* harmony import */ var _post_locked_modal__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./post-locked-modal */ "./node_modules/@wordpress/editor/build-module/components/post-locked-modal/index.js");
/* harmony import */ var _post_pending_status__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./post-pending-status */ "./node_modules/@wordpress/editor/build-module/components/post-pending-status/index.js");
/* harmony import */ var _post_pending_status_check__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./post-pending-status/check */ "./node_modules/@wordpress/editor/build-module/components/post-pending-status/check.js");
/* harmony import */ var _post_pingbacks__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./post-pingbacks */ "./node_modules/@wordpress/editor/build-module/components/post-pingbacks/index.js");
/* harmony import */ var _post_preview_button__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./post-preview-button */ "./node_modules/@wordpress/editor/build-module/components/post-preview-button/index.js");
/* harmony import */ var _post_publish_button__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./post-publish-button */ "./node_modules/@wordpress/editor/build-module/components/post-publish-button/index.js");
/* harmony import */ var _post_publish_button_label__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./post-publish-button/label */ "./node_modules/@wordpress/editor/build-module/components/post-publish-button/label.js");
/* harmony import */ var _post_publish_panel__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./post-publish-panel */ "./node_modules/@wordpress/editor/build-module/components/post-publish-panel/index.js");
/* harmony import */ var _post_saved_state__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./post-saved-state */ "./node_modules/@wordpress/editor/build-module/components/post-saved-state/index.js");
/* harmony import */ var _post_schedule__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./post-schedule */ "./node_modules/@wordpress/editor/build-module/components/post-schedule/index.js");
/* harmony import */ var _post_schedule_check__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./post-schedule/check */ "./node_modules/@wordpress/editor/build-module/components/post-schedule/check.js");
/* harmony import */ var _post_schedule_label__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./post-schedule/label */ "./node_modules/@wordpress/editor/build-module/components/post-schedule/label.js");
/* harmony import */ var _post_slug__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./post-slug */ "./node_modules/@wordpress/editor/build-module/components/post-slug/index.js");
/* harmony import */ var _post_slug_check__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./post-slug/check */ "./node_modules/@wordpress/editor/build-module/components/post-slug/check.js");
/* harmony import */ var _post_sticky__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./post-sticky */ "./node_modules/@wordpress/editor/build-module/components/post-sticky/index.js");
/* harmony import */ var _post_sticky_check__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./post-sticky/check */ "./node_modules/@wordpress/editor/build-module/components/post-sticky/check.js");
/* harmony import */ var _post_switch_to_draft_button__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./post-switch-to-draft-button */ "./node_modules/@wordpress/editor/build-module/components/post-switch-to-draft-button/index.js");
/* harmony import */ var _post_taxonomies__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./post-taxonomies */ "./node_modules/@wordpress/editor/build-module/components/post-taxonomies/index.js");
/* harmony import */ var _post_taxonomies_flat_term_selector__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./post-taxonomies/flat-term-selector */ "./node_modules/@wordpress/editor/build-module/components/post-taxonomies/flat-term-selector.js");
/* harmony import */ var _post_taxonomies_hierarchical_term_selector__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./post-taxonomies/hierarchical-term-selector */ "./node_modules/@wordpress/editor/build-module/components/post-taxonomies/hierarchical-term-selector.js");
/* harmony import */ var _post_taxonomies_check__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./post-taxonomies/check */ "./node_modules/@wordpress/editor/build-module/components/post-taxonomies/check.js");
/* harmony import */ var _post_text_editor__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./post-text-editor */ "./node_modules/@wordpress/editor/build-module/components/post-text-editor/index.js");
/* harmony import */ var _post_title__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./post-title */ "./node_modules/@wordpress/editor/build-module/components/post-title/index.js");
/* harmony import */ var _post_trash__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./post-trash */ "./node_modules/@wordpress/editor/build-module/components/post-trash/index.js");
/* harmony import */ var _post_trash_check__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./post-trash/check */ "./node_modules/@wordpress/editor/build-module/components/post-trash/check.js");
/* harmony import */ var _post_type_support_check__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./post-type-support-check */ "./node_modules/@wordpress/editor/build-module/components/post-type-support-check/index.js");
/* harmony import */ var _post_visibility__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./post-visibility */ "./node_modules/@wordpress/editor/build-module/components/post-visibility/index.js");
/* harmony import */ var _post_visibility_label__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./post-visibility/label */ "./node_modules/@wordpress/editor/build-module/components/post-visibility/label.js");
/* harmony import */ var _post_visibility_check__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./post-visibility/check */ "./node_modules/@wordpress/editor/build-module/components/post-visibility/check.js");
/* harmony import */ var _table_of_contents__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./table-of-contents */ "./node_modules/@wordpress/editor/build-module/components/table-of-contents/index.js");
/* harmony import */ var _theme_support_check__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./theme-support-check */ "./node_modules/@wordpress/editor/build-module/components/theme-support-check/index.js");
/* harmony import */ var _unsaved_changes_warning__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./unsaved-changes-warning */ "./node_modules/@wordpress/editor/build-module/components/unsaved-changes-warning/index.js");
/* harmony import */ var _word_count__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./word-count */ "./node_modules/@wordpress/editor/build-module/components/word-count/index.js");
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./provider */ "./node_modules/@wordpress/editor/build-module/components/provider/index.js");
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./deprecated */ "./node_modules/@wordpress/editor/build-module/components/deprecated.js");
// Block Creation Components.
 // Post Related Components.





























































 // State Related Components.





/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/local-autosave-monitor/index.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/local-autosave-monitor/index.js ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _autosave_monitor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../autosave-monitor */ "./node_modules/@wordpress/editor/build-module/components/autosave-monitor/index.js");
/* harmony import */ var _store_local_autosave__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/local-autosave */ "./node_modules/@wordpress/editor/build-module/store/local-autosave.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */




const requestIdleCallback = window.requestIdleCallback ? window.requestIdleCallback : window.requestAnimationFrame;
/**
 * Function which returns true if the current environment supports browser
 * sessionStorage, or false otherwise. The result of this function is cached and
 * reused in subsequent invocations.
 */

const hasSessionStorageSupport = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.once)(() => {
  try {
    // Private Browsing in Safari 10 and earlier will throw an error when
    // attempting to set into sessionStorage. The test here is intentional in
    // causing a thrown error as condition bailing from local autosave.
    window.sessionStorage.setItem('__wpEditorTestSessionStorage', '');
    window.sessionStorage.removeItem('__wpEditorTestSessionStorage');
    return true;
  } catch (error) {
    return false;
  }
});
/**
 * Custom hook which manages the creation of a notice prompting the user to
 * restore a local autosave, if one exists.
 */

function useAutosaveNotice() {
  const {
    postId,
    isEditedPostNew,
    hasRemoteAutosave
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => ({
    postId: select(_store__WEBPACK_IMPORTED_MODULE_7__.store).getCurrentPostId(),
    isEditedPostNew: select(_store__WEBPACK_IMPORTED_MODULE_7__.store).isEditedPostNew(),
    hasRemoteAutosave: !!select(_store__WEBPACK_IMPORTED_MODULE_7__.store).getEditorSettings().autosave
  }), []);
  const {
    getEditedPostAttribute
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(_store__WEBPACK_IMPORTED_MODULE_7__.store);
  const {
    createWarningNotice,
    removeNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_6__.store);
  const {
    editPost,
    resetEditorBlocks
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_7__.store);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let localAutosave = (0,_store_local_autosave__WEBPACK_IMPORTED_MODULE_8__.localAutosaveGet)(postId, isEditedPostNew);

    if (!localAutosave) {
      return;
    }

    try {
      localAutosave = JSON.parse(localAutosave);
    } catch (error) {
      // Not usable if it can't be parsed.
      return;
    }

    const {
      post_title: title,
      content,
      excerpt
    } = localAutosave;
    const edits = {
      title,
      content,
      excerpt
    };
    {
      // Only display a notice if there is a difference between what has been
      // saved and that which is stored in sessionStorage.
      const hasDifference = Object.keys(edits).some(key => {
        return edits[key] !== getEditedPostAttribute(key);
      });

      if (!hasDifference) {
        // If there is no difference, it can be safely ejected from storage.
        (0,_store_local_autosave__WEBPACK_IMPORTED_MODULE_8__.localAutosaveClear)(postId, isEditedPostNew);
        return;
      }
    }

    if (hasRemoteAutosave) {
      return;
    }

    const noticeId = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.uniqueId)('wpEditorAutosaveRestore');
    createWarningNotice((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('The backup of this post in your browser is different from the version below.'), {
      id: noticeId,
      actions: [{
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Restore the backup'),

        onClick() {
          editPost((0,lodash__WEBPACK_IMPORTED_MODULE_1__.omit)(edits, ['content']));
          resetEditorBlocks((0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__.parse)(edits.content));
          removeNotice(noticeId);
        }

      }]
    });
  }, [isEditedPostNew, postId]);
}
/**
 * Custom hook which ejects a local autosave after a successful save occurs.
 */


function useAutosavePurge() {
  const {
    postId,
    isEditedPostNew,
    isDirty,
    isAutosaving,
    didError
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => ({
    postId: select(_store__WEBPACK_IMPORTED_MODULE_7__.store).getCurrentPostId(),
    isEditedPostNew: select(_store__WEBPACK_IMPORTED_MODULE_7__.store).isEditedPostNew(),
    isDirty: select(_store__WEBPACK_IMPORTED_MODULE_7__.store).isEditedPostDirty(),
    isAutosaving: select(_store__WEBPACK_IMPORTED_MODULE_7__.store).isAutosavingPost(),
    didError: select(_store__WEBPACK_IMPORTED_MODULE_7__.store).didPostSaveRequestFail()
  }), []);
  const lastIsDirty = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(isDirty);
  const lastIsAutosaving = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(isAutosaving);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!didError && (lastIsAutosaving.current && !isAutosaving || lastIsDirty.current && !isDirty)) {
      (0,_store_local_autosave__WEBPACK_IMPORTED_MODULE_8__.localAutosaveClear)(postId, isEditedPostNew);
    }

    lastIsDirty.current = isDirty;
    lastIsAutosaving.current = isAutosaving;
  }, [isDirty, isAutosaving, didError]); // Once the isEditedPostNew changes from true to false, let's clear the auto-draft autosave.

  const wasEditedPostNew = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.usePrevious)(isEditedPostNew);
  const prevPostId = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.usePrevious)(postId);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (prevPostId === postId && wasEditedPostNew && !isEditedPostNew) {
      (0,_store_local_autosave__WEBPACK_IMPORTED_MODULE_8__.localAutosaveClear)(postId, true);
    }
  }, [isEditedPostNew, postId]);
}

function LocalAutosaveMonitor() {
  const {
    autosave
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_7__.store);
  const deferredAutosave = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    requestIdleCallback(() => autosave({
      local: true
    }));
  }, []);
  useAutosaveNotice();
  useAutosavePurge();
  const {
    localAutosaveInterval
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => ({
    localAutosaveInterval: select(_store__WEBPACK_IMPORTED_MODULE_7__.store).getEditorSettings().localAutosaveInterval
  }), []);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_autosave_monitor__WEBPACK_IMPORTED_MODULE_9__["default"], {
    interval: localAutosaveInterval,
    autosave: deferredAutosave
  });
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.ifCondition)(hasSessionStorageSupport)(LocalAutosaveMonitor));


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/page-attributes/check.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/page-attributes/check.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageAttributesCheck": function() { return /* binding */ PageAttributesCheck; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


function PageAttributesCheck(_ref) {
  let {
    children
  } = _ref;
  const postType = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    const {
      getEditedPostAttribute
    } = select(_store__WEBPACK_IMPORTED_MODULE_3__.store);
    const {
      getPostType
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store);
    return getPostType(getEditedPostAttribute('type'));
  }, []);
  const supportsPageAttributes = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(postType, ['supports', 'page-attributes'], false); // Only render fields if post type supports page attributes or available templates exist.

  if (!supportsPageAttributes) {
    return null;
  }

  return children;
}
/* harmony default export */ __webpack_exports__["default"] = (PageAttributesCheck);


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/page-attributes/order.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/page-attributes/order.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageAttributesOrder": function() { return /* binding */ PageAttributesOrder; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _post_type_support_check__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../post-type-support-check */ "./node_modules/@wordpress/editor/build-module/components/post-type-support-check/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



const PageAttributesOrder = _ref => {
  let {
    onUpdateOrder,
    order = 0
  } = _ref;
  const [orderInput, setOrderInput] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);

  const setUpdatedOrder = value => {
    setOrderInput(value);
    const newOrder = Number(value);

    if (Number.isInteger(newOrder) && (0,lodash__WEBPACK_IMPORTED_MODULE_1__.invoke)(value, ['trim']) !== '') {
      onUpdateOrder(Number(value));
    }
  };

  const value = orderInput === null ? order : orderInput;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    className: "editor-page-attributes__order",
    type: "number",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Order'),
    value: value,
    onChange: setUpdatedOrder,
    size: 6,
    onBlur: () => {
      setOrderInput(null);
    }
  });
};

function PageAttributesOrderWithChecks(props) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_post_type_support_check__WEBPACK_IMPORTED_MODULE_7__["default"], {
    supportKeys: "page-attributes"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PageAttributesOrder, props));
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__.compose)([(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.withSelect)(select => {
  return {
    order: select(_store__WEBPACK_IMPORTED_MODULE_6__.store).getEditedPostAttribute('menu_order')
  };
}), (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.withDispatch)(dispatch => ({
  onUpdateOrder(order) {
    dispatch(_store__WEBPACK_IMPORTED_MODULE_6__.store).editPost({
      menu_order: order
    });
  }

}))])(PageAttributesOrderWithChecks));


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/page-attributes/parent.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/page-attributes/parent.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageAttributesParent": function() { return /* binding */ PageAttributesParent; },
/* harmony export */   "getItemPriority": function() { return /* binding */ getItemPriority; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_terms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/terms */ "./node_modules/@wordpress/editor/build-module/utils/terms.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */




function getTitle(post) {
  var _post$title;

  return post !== null && post !== void 0 && (_post$title = post.title) !== null && _post$title !== void 0 && _post$title.rendered ? (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__.decodeEntities)(post.title.rendered) : `#${post.id} (${(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('no title')})`;
}

const getItemPriority = (name, searchValue) => {
  const normalizedName = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.deburr)(name).toLowerCase();
  const normalizedSearch = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.deburr)(searchValue).toLowerCase();

  if (normalizedName === normalizedSearch) {
    return 0;
  }

  if (normalizedName.startsWith(normalizedSearch)) {
    return normalizedName.length;
  }

  return Infinity;
};
function PageAttributesParent() {
  const {
    editPost
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_7__.store);
  const [fieldValue, setFieldValue] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    parentPost,
    parentPostId,
    items,
    postType
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    const {
      getPostType,
      getEntityRecords,
      getEntityRecord
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__.store);
    const {
      getCurrentPostId,
      getEditedPostAttribute
    } = select(_store__WEBPACK_IMPORTED_MODULE_7__.store);
    const postTypeSlug = getEditedPostAttribute('type');
    const pageId = getEditedPostAttribute('parent');
    const pType = getPostType(postTypeSlug);
    const postId = getCurrentPostId();
    const isHierarchical = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(pType, ['hierarchical'], false);
    const query = {
      per_page: 100,
      exclude: postId,
      parent_exclude: postId,
      orderby: 'menu_order',
      order: 'asc',
      _fields: 'id,title,parent'
    }; // Perform a search when the field is changed.

    if (!!fieldValue) {
      query.search = fieldValue;
    }

    return {
      parentPostId: pageId,
      parentPost: pageId ? getEntityRecord('postType', postTypeSlug, pageId) : null,
      items: isHierarchical ? getEntityRecords('postType', postTypeSlug, query) : [],
      postType: pType
    };
  }, [fieldValue]);
  const isHierarchical = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(postType, ['hierarchical'], false);
  const parentPageLabel = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(postType, ['labels', 'parent_item_colon']);
  const pageItems = items || [];
  const parentOptions = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const getOptionsFromTree = function (tree) {
      let level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      const mappedNodes = tree.map(treeNode => [{
        value: treeNode.id,
        label: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.repeat)('— ', level) + (0,lodash__WEBPACK_IMPORTED_MODULE_1__.unescape)(treeNode.name),
        rawName: treeNode.name
      }, ...getOptionsFromTree(treeNode.children || [], level + 1)]);
      const sortedNodes = mappedNodes.sort((_ref, _ref2) => {
        let [a] = _ref;
        let [b] = _ref2;
        const priorityA = getItemPriority(a.rawName, fieldValue);
        const priorityB = getItemPriority(b.rawName, fieldValue);
        return priorityA >= priorityB ? 1 : -1;
      });
      return (0,lodash__WEBPACK_IMPORTED_MODULE_1__.flatten)(sortedNodes);
    };

    let tree = pageItems.map(item => ({
      id: item.id,
      parent: item.parent,
      name: getTitle(item)
    })); // Only build a hierarchical tree when not searching.

    if (!fieldValue) {
      tree = (0,_utils_terms__WEBPACK_IMPORTED_MODULE_8__.buildTermsTree)(tree);
    }

    const opts = getOptionsFromTree(tree); // Ensure the current parent is in the options list.

    const optsHasParent = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.find)(opts, item => item.value === parentPostId);

    if (parentPost && !optsHasParent) {
      opts.unshift({
        value: parentPostId,
        label: getTitle(parentPost)
      });
    }

    return opts;
  }, [pageItems, fieldValue]);

  if (!isHierarchical || !parentPageLabel) {
    return null;
  }
  /**
   * Handle user input.
   *
   * @param {string} inputValue The current value of the input field.
   */


  const handleKeydown = inputValue => {
    setFieldValue(inputValue);
  };
  /**
   * Handle author selection.
   *
   * @param {Object} selectedPostId The selected Author.
   */


  const handleChange = selectedPostId => {
    editPost({
      parent: selectedPostId
    });
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ComboboxControl, {
    className: "editor-page-attributes__parent",
    label: parentPageLabel,
    value: parentPostId,
    options: parentOptions,
    onFilterValueChange: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.debounce)(handleKeydown, 300),
    onChange: handleChange
  });
}
/* harmony default export */ __webpack_exports__["default"] = (PageAttributesParent);


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/post-author/check.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/post-author/check.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PostAuthorCheck; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _post_type_support_check__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../post-type-support-check */ "./node_modules/@wordpress/editor/build-module/components/post-type-support-check/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./node_modules/@wordpress/editor/build-module/components/post-author/constants.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */




function PostAuthorCheck(_ref) {
  let {
    children
  } = _ref;
  const {
    hasAssignAuthorAction,
    hasAuthors
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    const post = select(_store__WEBPACK_IMPORTED_MODULE_4__.store).getCurrentPost();
    const authors = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.store).getUsers(_constants__WEBPACK_IMPORTED_MODULE_5__.AUTHORS_QUERY);
    return {
      hasAssignAuthorAction: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(post, ['_links', 'wp:action-assign-author'], false),
      hasAuthors: (authors === null || authors === void 0 ? void 0 : authors.length) >= 1
    };
  }, []);

  if (!hasAssignAuthorAction || !hasAuthors) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_post_type_support_check__WEBPACK_IMPORTED_MODULE_6__["default"], {
    supportKeys: "author"
  }, children);
}


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/post-author/combobox.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/post-author/combobox.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants */ "./node_modules/@wordpress/editor/build-module/components/post-author/constants.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */




function PostAuthorCombobox() {
  const [fieldValue, setFieldValue] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const {
    authorId,
    isLoading,
    authors,
    postAuthor
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    const {
      getUser,
      getUsers,
      isResolving
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__.store);
    const {
      getEditedPostAttribute
    } = select(_store__WEBPACK_IMPORTED_MODULE_7__.store);
    const author = getUser(getEditedPostAttribute('author'), {
      context: 'view'
    });
    const query = { ..._constants__WEBPACK_IMPORTED_MODULE_8__.AUTHORS_QUERY
    };

    if (fieldValue) {
      query.search = fieldValue;
    }

    return {
      authorId: getEditedPostAttribute('author'),
      postAuthor: author,
      authors: getUsers(query),
      isLoading: isResolving('core', 'getUsers', [query])
    };
  }, [fieldValue]);
  const {
    editPost
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_7__.store);
  const authorOptions = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const fetchedAuthors = (authors !== null && authors !== void 0 ? authors : []).map(author => {
      return {
        value: author.id,
        label: (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__.decodeEntities)(author.name)
      };
    }); // Ensure the current author is included in the dropdown list.

    const foundAuthor = fetchedAuthors.findIndex(_ref => {
      let {
        value
      } = _ref;
      return (postAuthor === null || postAuthor === void 0 ? void 0 : postAuthor.id) === value;
    });

    if (foundAuthor < 0 && postAuthor) {
      return [{
        value: postAuthor.id,
        label: (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__.decodeEntities)(postAuthor.name)
      }, ...fetchedAuthors];
    }

    return fetchedAuthors;
  }, [authors, postAuthor]);
  /**
   * Handle author selection.
   *
   * @param {number} postAuthorId The selected Author.
   */

  const handleSelect = postAuthorId => {
    if (!postAuthorId) {
      return;
    }

    editPost({
      author: postAuthorId
    });
  };
  /**
   * Handle user input.
   *
   * @param {string} inputValue The current value of the input field.
   */


  const handleKeydown = inputValue => {
    setFieldValue(inputValue);
  };

  if (!postAuthor) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ComboboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Author'),
    options: authorOptions,
    value: authorId,
    onFilterValueChange: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.debounce)(handleKeydown, 300),
    onChange: handleSelect,
    isLoading: isLoading,
    allowReset: false
  });
}

/* harmony default export */ __webpack_exports__["default"] = (PostAuthorCombobox);


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/post-author/constants.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/post-author/constants.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AUTHORS_QUERY": function() { return /* binding */ AUTHORS_QUERY; }
/* harmony export */ });
const AUTHORS_QUERY = {
  who: 'authors',
  per_page: 50,
  _fields: 'id,name',
  context: 'view' // Allows non-admins to perform requests.

};


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/post-author/index.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/post-author/index.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _combobox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./combobox */ "./node_modules/@wordpress/editor/build-module/components/post-author/combobox.js");
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select */ "./node_modules/@wordpress/editor/build-module/components/post-author/select.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./node_modules/@wordpress/editor/build-module/components/post-author/constants.js");


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




const minimumUsersForCombobox = 25;

function PostAuthor() {
  const showCombobox = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    const authors = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store).getUsers(_constants__WEBPACK_IMPORTED_MODULE_3__.AUTHORS_QUERY);
    return (authors === null || authors === void 0 ? void 0 : authors.length) >= minimumUsersForCombobox;
  }, []);

  if (showCombobox) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_combobox__WEBPACK_IMPORTED_MODULE_4__["default"], null);
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_select__WEBPACK_IMPORTED_MODULE_5__["default"], null);
}

/* harmony default export */ __webpack_exports__["default"] = (PostAuthor);


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/post-author/select.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/post-author/select.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants */ "./node_modules/@wordpress/editor/build-module/components/post-author/constants.js");


/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */




function PostAuthorSelect() {
  const {
    editPost
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_6__.store);
  const {
    postAuthor,
    authors
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    return {
      postAuthor: select(_store__WEBPACK_IMPORTED_MODULE_6__.store).getEditedPostAttribute('author'),
      authors: select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.store).getUsers(_constants__WEBPACK_IMPORTED_MODULE_7__.AUTHORS_QUERY)
    };
  }, []);
  const authorOptions = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return (authors !== null && authors !== void 0 ? authors : []).map(author => {
      return {
        value: author.id,
        label: (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__.decodeEntities)(author.name)
      };
    });
  }, [authors]);

  const setAuthorId = value => {
    const author = Number(value);
    editPost({
      author
    });
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    className: "post-author-selector",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Author'),
    options: authorOptions,
    onChange: setAuthorId,
    value: postAuthor
  });
}

/* harmony default export */ __webpack_exports__["default"] = (PostAuthorSelect);


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/post-comments/index.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/post-comments/index.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



function PostComments(_ref) {
  let {
    commentStatus = 'open',
    ...props
  } = _ref;

  const onToggleComments = () => props.editPost({
    comment_status: commentStatus === 'open' ? 'closed' : 'open'
  });

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Allow comments'),
    checked: commentStatus === 'open',
    onChange: onToggleComments
  });
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.compose)([(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.withSelect)(select => {
  return {
    commentStatus: select(_store__WEBPACK_IMPORTED_MODULE_5__.store).getEditedPostAttribute('comment_status')
  };
}), (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.withDispatch)(dispatch => ({
  editPost: dispatch(_store__WEBPACK_IMPORTED_MODULE_5__.store).editPost
}))])(PostComments));


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/post-excerpt/check.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/post-excerpt/check.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _post_type_support_check__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../post-type-support-check */ "./node_modules/@wordpress/editor/build-module/components/post-type-support-check/index.js");



/**
 * Internal dependencies
 */


function PostExcerptCheck(props) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_post_type_support_check__WEBPACK_IMPORTED_MODULE_2__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    supportKeys: "excerpt"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PostExcerptCheck);


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/post-excerpt/index.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/post-excerpt/index.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



function PostExcerpt(_ref) {
  let {
    excerpt,
    onUpdateExcerpt
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "editor-post-excerpt"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextareaControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Write an excerpt (optional)'),
    className: "editor-post-excerpt__textarea",
    onChange: value => onUpdateExcerpt(value),
    value: excerpt
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ExternalLink, {
    href: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('https://wordpress.org/support/article/settings-sidebar/#excerpt')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Learn more about manual excerpts')));
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.compose)([(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.withSelect)(select => {
  return {
    excerpt: select(_store__WEBPACK_IMPORTED_MODULE_5__.store).getEditedPostAttribute('excerpt')
  };
}), (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.withDispatch)(dispatch => ({
  onUpdateExcerpt(excerpt) {
    dispatch(_store__WEBPACK_IMPORTED_MODULE_5__.store).editPost({
      excerpt
    });
  }

}))])(PostExcerpt));


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/post-featured-image/check.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/post-featured-image/check.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _post_type_support_check__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../post-type-support-check */ "./node_modules/@wordpress/editor/build-module/components/post-type-support-check/index.js");
/* harmony import */ var _theme_support_check__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme-support-check */ "./node_modules/@wordpress/editor/build-module/components/theme-support-check/index.js");



/**
 * Internal dependencies
 */



function PostFeaturedImageCheck(props) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_theme_support_check__WEBPACK_IMPORTED_MODULE_2__["default"], {
    supportKeys: "post-thumbnails"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_post_type_support_check__WEBPACK_IMPORTED_MODULE_3__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    supportKeys: "thumbnail"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (PostFeaturedImageCheck);


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/post-featured-image/index.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/post-featured-image/index.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _check__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./check */ "./node_modules/@wordpress/editor/build-module/components/post-featured-image/check.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */



const ALLOWED_MEDIA_TYPES = ['image']; // Used when labels from post type were not yet loaded or when they are not present.

const DEFAULT_FEATURE_IMAGE_LABEL = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Featured image');

const DEFAULT_SET_FEATURE_IMAGE_LABEL = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Set featured image');

const DEFAULT_REMOVE_FEATURE_IMAGE_LABEL = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Remove image');

function PostFeaturedImage(_ref) {
  var _media$media_details$, _media$media_details$2;

  let {
    currentPostId,
    featuredImageId,
    onUpdateImage,
    onDropImage,
    onRemoveImage,
    media,
    postType,
    noticeUI
  } = _ref;
  const postLabel = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(postType, ['labels'], {});
  const instructions = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('To edit the featured image, you need permission to upload media.'));
  let mediaWidth, mediaHeight, mediaSourceUrl;

  if (media) {
    const mediaSize = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.applyFilters)('editor.PostFeaturedImage.imageSize', 'post-thumbnail', media.id, currentPostId);

    if ((0,lodash__WEBPACK_IMPORTED_MODULE_1__.has)(media, ['media_details', 'sizes', mediaSize])) {
      // Use mediaSize when available.
      mediaWidth = media.media_details.sizes[mediaSize].width;
      mediaHeight = media.media_details.sizes[mediaSize].height;
      mediaSourceUrl = media.media_details.sizes[mediaSize].source_url;
    } else {
      // Get fallbackMediaSize if mediaSize is not available.
      const fallbackMediaSize = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.applyFilters)('editor.PostFeaturedImage.imageSize', 'thumbnail', media.id, currentPostId);

      if ((0,lodash__WEBPACK_IMPORTED_MODULE_1__.has)(media, ['media_details', 'sizes', fallbackMediaSize])) {
        // Use fallbackMediaSize when mediaSize is not available.
        mediaWidth = media.media_details.sizes[fallbackMediaSize].width;
        mediaHeight = media.media_details.sizes[fallbackMediaSize].height;
        mediaSourceUrl = media.media_details.sizes[fallbackMediaSize].source_url;
      } else {
        // Use full image size when mediaFallbackSize and mediaSize are not available.
        mediaWidth = media.media_details.width;
        mediaHeight = media.media_details.height;
        mediaSourceUrl = media.source_url;
      }
    }
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_check__WEBPACK_IMPORTED_MODULE_10__["default"], null, noticeUI, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "editor-post-featured-image"
  }, media && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: `editor-post-featured-image-${featuredImageId}-describedby`,
    className: "hidden"
  }, media.alt_text && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)( // Translators: %s: The selected image alt text.
  (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Current image: %s'), media.alt_text), !media.alt_text && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)( // Translators: %s: The selected image filename.
  (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('The current image has no alternative text. The file name is: %s'), ((_media$media_details$ = media.media_details.sizes) === null || _media$media_details$ === void 0 ? void 0 : (_media$media_details$2 = _media$media_details$.full) === null || _media$media_details$2 === void 0 ? void 0 : _media$media_details$2.file) || media.slug)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, {
    fallback: instructions
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUpload, {
    title: postLabel.featured_image || DEFAULT_FEATURE_IMAGE_LABEL,
    onSelect: onUpdateImage,
    unstableFeaturedImageFlow: true,
    allowedTypes: ALLOWED_MEDIA_TYPES,
    modalClass: "editor-post-featured-image__media-modal",
    render: _ref2 => {
      let {
        open
      } = _ref2;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "editor-post-featured-image__container"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        className: !featuredImageId ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview',
        onClick: open,
        "aria-label": !featuredImageId ? null : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Edit or update the image'),
        "aria-describedby": !featuredImageId ? null : `editor-post-featured-image-${featuredImageId}-describedby`
      }, !!featuredImageId && media && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ResponsiveWrapper, {
        naturalWidth: mediaWidth,
        naturalHeight: mediaHeight,
        isInline: true
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: mediaSourceUrl,
        alt: ""
      })), !!featuredImageId && !media && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Spinner, null), !featuredImageId && (postLabel.set_featured_image || DEFAULT_SET_FEATURE_IMAGE_LABEL)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.DropZone, {
        onFilesDrop: onDropImage
      }));
    },
    value: featuredImageId
  })), !!featuredImageId && media && !media.isLoading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUpload, {
    title: postLabel.featured_image || DEFAULT_FEATURE_IMAGE_LABEL,
    onSelect: onUpdateImage,
    unstableFeaturedImageFlow: true,
    allowedTypes: ALLOWED_MEDIA_TYPES,
    modalClass: "editor-post-featured-image__media-modal",
    render: _ref3 => {
      let {
        open
      } = _ref3;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        onClick: open,
        variant: "secondary"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Replace Image'));
    }
  })), !!featuredImageId && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    onClick: onRemoveImage,
    variant: "link",
    isDestructive: true
  }, postLabel.remove_featured_image || DEFAULT_REMOVE_FEATURE_IMAGE_LABEL))));
}

const applyWithSelect = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_6__.withSelect)(select => {
  const {
    getMedia,
    getPostType
  } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_8__.store);
  const {
    getCurrentPostId,
    getEditedPostAttribute
  } = select(_store__WEBPACK_IMPORTED_MODULE_9__.store);
  const featuredImageId = getEditedPostAttribute('featured_media');
  return {
    media: featuredImageId ? getMedia(featuredImageId, {
      context: 'view'
    }) : null,
    currentPostId: getCurrentPostId(),
    postType: getPostType(getEditedPostAttribute('type')),
    featuredImageId
  };
});
const applyWithDispatch = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_6__.withDispatch)((dispatch, _ref4, _ref5) => {
  let {
    noticeOperations
  } = _ref4;
  let {
    select
  } = _ref5;
  const {
    editPost
  } = dispatch(_store__WEBPACK_IMPORTED_MODULE_9__.store);
  return {
    onUpdateImage(image) {
      editPost({
        featured_media: image.id
      });
    },

    onDropImage(filesList) {
      select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.store).getSettings().mediaUpload({
        allowedTypes: ['image'],
        filesList,

        onFileChange(_ref6) {
          let [image] = _ref6;
          editPost({
            featured_media: image.id
          });
        },

        onError(message) {
          noticeOperations.removeAllNotices();
          noticeOperations.createErrorNotice(message);
        }

      });
    },

    onRemoveImage() {
      editPost({
        featured_media: 0
      });
    }

  };
});
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__.compose)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.withNotices, applyWithSelect, applyWithDispatch, (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.withFilters)('editor.PostFeaturedImage'))(PostFeaturedImage));


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/post-format/check.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/post-format/check.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _post_type_support_check__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../post-type-support-check */ "./node_modules/@wordpress/editor/build-module/components/post-type-support-check/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");



/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */




function PostFormatCheck(_ref) {
  let {
    disablePostFormats,
    ...props
  } = _ref;
  return !disablePostFormats && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_post_type_support_check__WEBPACK_IMPORTED_MODULE_4__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    supportKeys: "post-formats"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.withSelect)(select => {
  const editorSettings = select(_store__WEBPACK_IMPORTED_MODULE_3__.store).getEditorSettings();
  return {
    disablePostFormats: editorSettings.disablePostFormats
  };
})(PostFormatCheck));


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/post-format/index.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/post-format/index.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "POST_FORMATS": function() { return /* binding */ POST_FORMATS; },
/* harmony export */   "default": function() { return /* binding */ PostFormat; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _check__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./check */ "./node_modules/@wordpress/editor/build-module/components/post-format/check.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */


 // All WP post formats, sorted alphabetically by translated name.

const POST_FORMATS = [{
  id: 'aside',
  caption: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Aside')
}, {
  id: 'audio',
  caption: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Audio')
}, {
  id: 'chat',
  caption: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Chat')
}, {
  id: 'gallery',
  caption: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Gallery')
}, {
  id: 'image',
  caption: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Image')
}, {
  id: 'link',
  caption: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Link')
}, {
  id: 'quote',
  caption: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Quote')
}, {
  id: 'standard',
  caption: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Standard')
}, {
  id: 'status',
  caption: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Status')
}, {
  id: 'video',
  caption: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Video')
}].sort((a, b) => {
  const normalizedA = a.caption.toUpperCase();
  const normalizedB = b.caption.toUpperCase();

  if (normalizedA < normalizedB) {
    return -1;
  }

  if (normalizedA > normalizedB) {
    return 1;
  }

  return 0;
});
function PostFormat() {
  const instanceId = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__.useInstanceId)(PostFormat);
  const postFormatSelectorId = `post-format-selector-${instanceId}`;
  const {
    postFormat,
    suggestedFormat,
    supportedFormats
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    const {
      getEditedPostAttribute,
      getSuggestedPostFormat
    } = select(_store__WEBPACK_IMPORTED_MODULE_7__.store);

    const _postFormat = getEditedPostAttribute('format');

    const themeSupports = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__.store).getThemeSupports();
    return {
      postFormat: _postFormat !== null && _postFormat !== void 0 ? _postFormat : 'standard',
      suggestedFormat: getSuggestedPostFormat(),
      supportedFormats: themeSupports.formats
    };
  }, []);
  const formats = POST_FORMATS.filter(format => {
    // Ensure current format is always in the set.
    // The current format may not be a format supported by the theme.
    return (0,lodash__WEBPACK_IMPORTED_MODULE_1__.includes)(supportedFormats, format.id) || postFormat === format.id;
  });
  const suggestion = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.find)(formats, format => format.id === suggestedFormat);
  const {
    editPost
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_7__.store);

  const onUpdatePostFormat = format => editPost({
    format
  });

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_check__WEBPACK_IMPORTED_MODULE_8__["default"], null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "editor-post-format"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "editor-post-format__content"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: postFormatSelectorId
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Post Format')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    value: postFormat,
    onChange: format => onUpdatePostFormat(format),
    id: postFormatSelectorId,
    options: formats.map(format => ({
      label: format.caption,
      value: format.id
    }))
  })), suggestion && suggestion.id !== postFormat && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "editor-post-format__suggestion"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Suggestion:'), ' ', (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    variant: "link",
    onClick: () => onUpdatePostFormat(suggestion.id)
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)(
  /* translators: %s: post format */
  (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Apply format: %s'), suggestion.caption)))));
}


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/post-last-revision/check.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/post-last-revision/check.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostLastRevisionCheck": function() { return /* binding */ PostLastRevisionCheck; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _post_type_support_check__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../post-type-support-check */ "./node_modules/@wordpress/editor/build-module/components/post-type-support-check/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */



function PostLastRevisionCheck(_ref) {
  let {
    lastRevisionId,
    revisionsCount,
    children
  } = _ref;

  if (!lastRevisionId || revisionsCount < 2) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_post_type_support_check__WEBPACK_IMPORTED_MODULE_3__["default"], {
    supportKeys: "revisions"
  }, children);
}
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.withSelect)(select => {
  const {
    getCurrentPostLastRevisionId,
    getCurrentPostRevisionsCount
  } = select(_store__WEBPACK_IMPORTED_MODULE_2__.store);
  return {
    lastRevisionId: getCurrentPostLastRevisionId(),
    revisionsCount: getCurrentPostRevisionsCount()
  };
})(PostLastRevisionCheck));


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/post-last-revision/index.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/post-last-revision/index.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/backup.js");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _check__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./check */ "./node_modules/@wordpress/editor/build-module/components/post-last-revision/check.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */




function LastRevision(_ref) {
  let {
    lastRevisionId,
    revisionsCount
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_check__WEBPACK_IMPORTED_MODULE_6__["default"], null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    href: (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_4__.addQueryArgs)('revision.php', {
      revision: lastRevisionId,
      gutenberg: true
    }),
    className: "editor-post-last-revision__title",
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__["default"]
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)(
  /* translators: %d: number of revisions */
  (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._n)('%d Revision', '%d Revisions', revisionsCount), revisionsCount)));
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.withSelect)(select => {
  const {
    getCurrentPostLastRevisionId,
    getCurrentPostRevisionsCount
  } = select(_store__WEBPACK_IMPORTED_MODULE_5__.store);
  return {
    lastRevisionId: getCurrentPostLastRevisionId(),
    revisionsCount: getCurrentPostRevisionsCount()
  };
})(LastRevision));


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/post-locked-modal/index.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/post-locked-modal/index.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PostLockedModal; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */









/**
 * Internal dependencies
 */


function PostLockedModal() {
  const instanceId = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__.useInstanceId)(PostLockedModal);
  const hookName = 'core/editor/post-locked-modal-' + instanceId;
  const {
    autosave,
    updatePostLock
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_9__.store);
  const {
    isLocked,
    isTakeover,
    user,
    postId,
    postLockUtils,
    activePostLock,
    postType,
    previewLink
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    const {
      isPostLocked,
      isPostLockTakeover,
      getPostLockUser,
      getCurrentPostId,
      getActivePostLock,
      getEditedPostAttribute,
      getEditedPostPreviewLink,
      getEditorSettings
    } = select(_store__WEBPACK_IMPORTED_MODULE_9__.store);
    const {
      getPostType
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_8__.store);
    return {
      isLocked: isPostLocked(),
      isTakeover: isPostLockTakeover(),
      user: getPostLockUser(),
      postId: getCurrentPostId(),
      postLockUtils: getEditorSettings().postLockUtils,
      activePostLock: getActivePostLock(),
      postType: getPostType(getEditedPostAttribute('type')),
      previewLink: getEditedPostPreviewLink()
    };
  }, []);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    /**
     * Keep the lock refreshed.
     *
     * When the user does not send a heartbeat in a heartbeat-tick
     * the user is no longer editing and another user can start editing.
     *
     * @param {Object} data Data to send in the heartbeat request.
     */
    function sendPostLock(data) {
      if (isLocked) {
        return;
      }

      data['wp-refresh-post-lock'] = {
        lock: activePostLock,
        post_id: postId
      };
    }
    /**
     * Refresh post locks: update the lock string or show the dialog if somebody has taken over editing.
     *
     * @param {Object} data Data received in the heartbeat request
     */


    function receivePostLock(data) {
      if (!data['wp-refresh-post-lock']) {
        return;
      }

      const received = data['wp-refresh-post-lock'];

      if (received.lock_error) {
        // Auto save and display the takeover modal.
        autosave();
        updatePostLock({
          isLocked: true,
          isTakeover: true,
          user: {
            name: received.lock_error.name,
            avatar: received.lock_error.avatar_src_2x
          }
        });
      } else if (received.new_lock) {
        updatePostLock({
          isLocked: false,
          activePostLock: received.new_lock
        });
      }
    }
    /**
     * Unlock the post before the window is exited.
     */


    function releasePostLock() {
      if (isLocked || !activePostLock) {
        return;
      }

      const data = new window.FormData();
      data.append('action', 'wp-remove-post-lock');
      data.append('_wpnonce', postLockUtils.unlockNonce);
      data.append('post_ID', postId);
      data.append('active_post_lock', activePostLock);

      if (window.navigator.sendBeacon) {
        window.navigator.sendBeacon(postLockUtils.ajaxUrl, data);
      } else {
        const xhr = new window.XMLHttpRequest();
        xhr.open('POST', postLockUtils.ajaxUrl, false);
        xhr.send(data);
      }
    } // Details on these events on the Heartbeat API docs
    // https://developer.wordpress.org/plugins/javascript/heartbeat-api/


    (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_6__.addAction)('heartbeat.send', hookName, sendPostLock);
    (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_6__.addAction)('heartbeat.tick', hookName, receivePostLock);
    window.addEventListener('beforeunload', releasePostLock);
    return () => {
      (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_6__.removeAction)('heartbeat.send', hookName);
      (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_6__.removeAction)('heartbeat.tick', hookName);
      window.removeEventListener('beforeunload', releasePostLock);
    };
  }, []);

  if (!isLocked) {
    return null;
  }

  const userDisplayName = user.name;
  const userAvatar = user.avatar;
  const unlockUrl = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_5__.addQueryArgs)('post.php', {
    'get-post-lock': '1',
    lockKey: true,
    post: postId,
    action: 'edit',
    _wpnonce: postLockUtils.nonce
  });
  const allPostsUrl = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_5__.addQueryArgs)('edit.php', {
    post_type: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(postType, ['slug'])
  });

  const allPostsLabel = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Exit editor');

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Modal, {
    title: isTakeover ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Someone else has taken over this post') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('This post is already being edited'),
    focusOnMount: true,
    shouldCloseOnClickOutside: false,
    shouldCloseOnEsc: false,
    isDismissible: false,
    className: "editor-post-locked-modal"
  }, !!userAvatar && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: userAvatar,
    alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Avatar'),
    className: "editor-post-locked-modal__avatar",
    width: 64,
    height: 64
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, !!isTakeover && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createInterpolateElement)(userDisplayName ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)(
  /* translators: %s: user's display name */
  (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('<strong>%s</strong> now has editing control of this posts (<PreviewLink />). Don’t worry, your changes up to this moment have been saved.'), userDisplayName) : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Another user now has editing control of this post (<PreviewLink />). Don’t worry, your changes up to this moment have been saved.'), {
    strong: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null),
    PreviewLink: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ExternalLink, {
      href: previewLink
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('preview'))
  })), !isTakeover && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createInterpolateElement)(userDisplayName ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)(
  /* translators: %s: user's display name */
  (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('<strong>%s</strong> is currently working on this post (<PreviewLink />), which means you cannot make changes, unless you take over.'), userDisplayName) : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Another user is currently working on this post (<PreviewLink />), which means you cannot make changes, unless you take over.'), {
    strong: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null),
    PreviewLink: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ExternalLink, {
      href: previewLink
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('preview'))
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('If you take over, the other user will lose editing control to the post, but their changes will be saved.'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Flex, {
    className: "editor-post-locked-modal__buttons",
    justify: "flex-end",
    expanded: false
  }, !isTakeover && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    variant: "tertiary",
    href: unlockUrl
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Take over'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    variant: "primary",
    href: allPostsUrl
  }, allPostsLabel)))));
}


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/post-pending-status/check.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/post-pending-status/check.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostPendingStatusCheck": function() { return /* binding */ PostPendingStatusCheck; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


function PostPendingStatusCheck(_ref) {
  let {
    hasPublishAction,
    isPublished,
    children
  } = _ref;

  if (isPublished || !hasPublishAction) {
    return null;
  }

  return children;
}
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.compose)((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.withSelect)(select => {
  const {
    isCurrentPostPublished,
    getCurrentPostType,
    getCurrentPost
  } = select(_store__WEBPACK_IMPORTED_MODULE_3__.store);
  return {
    hasPublishAction: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(getCurrentPost(), ['_links', 'wp:action-publish'], false),
    isPublished: isCurrentPostPublished(),
    postType: getCurrentPostType()
  };
}))(PostPendingStatusCheck));


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/post-pending-status/index.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/post-pending-status/index.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostPendingStatus": function() { return /* binding */ PostPendingStatus; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _check__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./check */ "./node_modules/@wordpress/editor/build-module/components/post-pending-status/check.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



function PostPendingStatus(_ref) {
  let {
    status,
    onUpdateStatus
  } = _ref;

  const togglePendingStatus = () => {
    const updatedStatus = status === 'pending' ? 'draft' : 'pending';
    onUpdateStatus(updatedStatus);
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_check__WEBPACK_IMPORTED_MODULE_6__["default"], null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Pending review'),
    checked: status === 'pending',
    onChange: togglePendingStatus
  }));
}
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.compose)((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.withSelect)(select => ({
  status: select(_store__WEBPACK_IMPORTED_MODULE_5__.store).getEditedPostAttribute('status')
})), (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.withDispatch)(dispatch => ({
  onUpdateStatus(status) {
    dispatch(_store__WEBPACK_IMPORTED_MODULE_5__.store).editPost({
      status
    });
  }

})))(PostPendingStatus));


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/post-pingbacks/index.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/post-pingbacks/index.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



function PostPingbacks(_ref) {
  let {
    pingStatus = 'open',
    ...props
  } = _ref;

  const onTogglePingback = () => props.editPost({
    ping_status: pingStatus === 'open' ? 'closed' : 'open'
  });

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Allow pingbacks & trackbacks'),
    checked: pingStatus === 'open',
    onChange: onTogglePingback
  });
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.compose)([(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.withSelect)(select => {
  return {
    pingStatus: select(_store__WEBPACK_IMPORTED_MODULE_5__.store).getEditedPostAttribute('ping_status')
  };
}), (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.withDispatch)(dispatch => ({
  editPost: dispatch(_store__WEBPACK_IMPORTED_MODULE_5__.store).editPost
}))])(PostPingbacks));


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/post-preview-button/index.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/post-preview-button/index.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostPreviewButton": function() { return /* binding */ PostPreviewButton; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");


/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */



function writeInterstitialMessage(targetDocument) {
  let markup = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.renderToString)((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "editor-post-preview-button__interstitial-message"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SVG, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 96 96"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Path, {
    className: "outer",
    d: "M48 12c19.9 0 36 16.1 36 36S67.9 84 48 84 12 67.9 12 48s16.1-36 36-36",
    fill: "none"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Path, {
    className: "inner",
    d: "M69.5 46.4c0-3.9-1.4-6.7-2.6-8.8-1.6-2.6-3.1-4.9-3.1-7.5 0-2.9 2.2-5.7 5.4-5.7h.4C63.9 19.2 56.4 16 48 16c-11.2 0-21 5.7-26.7 14.4h2.1c3.3 0 8.5-.4 8.5-.4 1.7-.1 1.9 2.4.2 2.6 0 0-1.7.2-3.7.3L40 67.5l7-20.9L42 33c-1.7-.1-3.3-.3-3.3-.3-1.7-.1-1.5-2.7.2-2.6 0 0 5.3.4 8.4.4 3.3 0 8.5-.4 8.5-.4 1.7-.1 1.9 2.4.2 2.6 0 0-1.7.2-3.7.3l11.5 34.3 3.3-10.4c1.6-4.5 2.4-7.8 2.4-10.5zM16.1 48c0 12.6 7.3 23.5 18 28.7L18.8 35c-1.7 4-2.7 8.4-2.7 13zm32.5 2.8L39 78.6c2.9.8 5.9 1.3 9 1.3 3.7 0 7.3-.6 10.6-1.8-.1-.1-.2-.3-.2-.4l-9.8-26.9zM76.2 36c0 3.2-.6 6.9-2.4 11.4L64 75.6c9.5-5.5 15.9-15.8 15.9-27.6 0-5.5-1.4-10.8-3.9-15.3.1 1 .2 2.1.2 3.3z",
    fill: "none"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Generating preview…'))));
  markup += `
		<style>
			body {
				margin: 0;
			}
			.editor-post-preview-button__interstitial-message {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				height: 100vh;
				width: 100vw;
			}
			@-webkit-keyframes paint {
				0% {
					stroke-dashoffset: 0;
				}
			}
			@-moz-keyframes paint {
				0% {
					stroke-dashoffset: 0;
				}
			}
			@-o-keyframes paint {
				0% {
					stroke-dashoffset: 0;
				}
			}
			@keyframes paint {
				0% {
					stroke-dashoffset: 0;
				}
			}
			.editor-post-preview-button__interstitial-message svg {
				width: 192px;
				height: 192px;
				stroke: #555d66;
				stroke-width: 0.75;
			}
			.editor-post-preview-button__interstitial-message svg .outer,
			.editor-post-preview-button__interstitial-message svg .inner {
				stroke-dasharray: 280;
				stroke-dashoffset: 280;
				-webkit-animation: paint 1.5s ease infinite alternate;
				-moz-animation: paint 1.5s ease infinite alternate;
				-o-animation: paint 1.5s ease infinite alternate;
				animation: paint 1.5s ease infinite alternate;
			}
			p {
				text-align: center;
				font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
			}
		</style>
	`;
  /**
   * Filters the interstitial message shown when generating previews.
   *
   * @param {string} markup The preview interstitial markup.
   */

  markup = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_7__.applyFilters)('editor.PostPreview.interstitialMarkup', markup);
  targetDocument.write(markup);
  targetDocument.title = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Generating preview…');
  targetDocument.close();
}

class PostPreviewButton extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments);
    this.buttonRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createRef)();
    this.openPreviewWindow = this.openPreviewWindow.bind(this);
  }

  componentDidUpdate(prevProps) {
    const {
      previewLink
    } = this.props; // This relies on the window being responsible to unset itself when
    // navigation occurs or a new preview window is opened, to avoid
    // unintentional forceful redirects.

    if (previewLink && !prevProps.previewLink) {
      this.setPreviewWindowLink(previewLink);
    }
  }
  /**
   * Sets the preview window's location to the given URL, if a preview window
   * exists and is not closed.
   *
   * @param {string} url URL to assign as preview window location.
   */


  setPreviewWindowLink(url) {
    const {
      previewWindow
    } = this;

    if (previewWindow && !previewWindow.closed) {
      previewWindow.location = url;

      if (this.buttonRef.current) {
        this.buttonRef.current.focus();
      }
    }
  }

  getWindowTarget() {
    const {
      postId
    } = this.props;
    return `wp-preview-${postId}`;
  }

  openPreviewWindow(event) {
    // Our Preview button has its 'href' and 'target' set correctly for a11y
    // purposes. Unfortunately, though, we can't rely on the default 'click'
    // handler since sometimes it incorrectly opens a new tab instead of reusing
    // the existing one.
    // https://github.com/WordPress/gutenberg/pull/8330
    event.preventDefault(); // Open up a Preview tab if needed. This is where we'll show the preview.

    if (!this.previewWindow || this.previewWindow.closed) {
      this.previewWindow = window.open('', this.getWindowTarget());
    } // Focus the Preview tab. This might not do anything, depending on the browser's
    // and user's preferences.
    // https://html.spec.whatwg.org/multipage/interaction.html#dom-window-focus


    this.previewWindow.focus();

    if ( // If we don't need to autosave the post before previewing, then we simply
    // load the Preview URL in the Preview tab.
    !this.props.isAutosaveable || // Do not save or overwrite the post, if the post is already locked.
    this.props.isPostLocked) {
      this.setPreviewWindowLink(event.target.href);
      return;
    } // Request an autosave. This happens asynchronously and causes the component
    // to update when finished.


    if (this.props.isDraft) {
      this.props.savePost({
        isPreview: true
      });
    } else {
      this.props.autosave({
        isPreview: true
      });
    } // Display a 'Generating preview' message in the Preview tab while we wait for the
    // autosave to finish.


    writeInterstitialMessage(this.previewWindow.document);
  }

  render() {
    const {
      previewLink,
      currentPostLink,
      isSaveable,
      role
    } = this.props; // Link to the `?preview=true` URL if we have it, since this lets us see
    // changes that were autosaved since the post was last published. Otherwise,
    // just link to the post's URL.

    const href = previewLink || currentPostLink;
    const classNames = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      'editor-post-preview': !this.props.className
    }, this.props.className);
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      variant: !this.props.className ? 'tertiary' : undefined,
      className: classNames,
      href: href,
      target: this.getWindowTarget(),
      disabled: !isSaveable,
      onClick: this.openPreviewWindow,
      ref: this.buttonRef,
      role: role
    }, this.props.textContent ? this.props.textContent : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__._x)('Preview', 'imperative verb'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.VisuallyHidden, {
      as: "span"
    },
    /* translators: accessibility text */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('(opens in a new tab)'))));
  }

}
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__.compose)([(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.withSelect)((select, _ref) => {
  let {
    forcePreviewLink,
    forceIsAutosaveable
  } = _ref;
  const {
    getCurrentPostId,
    getCurrentPostAttribute,
    getEditedPostAttribute,
    isEditedPostSaveable,
    isEditedPostAutosaveable,
    getEditedPostPreviewLink,
    isPostLocked
  } = select(_store__WEBPACK_IMPORTED_MODULE_9__.store);
  const {
    getPostType
  } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_8__.store);
  const previewLink = getEditedPostPreviewLink();
  const postType = getPostType(getEditedPostAttribute('type'));
  return {
    postId: getCurrentPostId(),
    currentPostLink: getCurrentPostAttribute('link'),
    previewLink: forcePreviewLink !== undefined ? forcePreviewLink : previewLink,
    isSaveable: isEditedPostSaveable(),
    isAutosaveable: forceIsAutosaveable || isEditedPostAutosaveable(),
    isViewable: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(postType, ['viewable'], false),
    isDraft: ['draft', 'auto-draft'].indexOf(getEditedPostAttribute('status')) !== -1,
    isPostLocked: isPostLocked()
  };
}), (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.withDispatch)(dispatch => ({
  autosave: dispatch(_store__WEBPACK_IMPORTED_MODULE_9__.store).autosave,
  savePost: dispatch(_store__WEBPACK_IMPORTED_MODULE_9__.store).savePost
})), (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__.ifCondition)(_ref2 => {
  let {
    isViewable
  } = _ref2;
  return isViewable;
})])(PostPreviewButton));


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/post-publish-button/index.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/post-publish-button/index.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostPublishButton": function() { return /* binding */ PostPublishButton; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./label */ "./node_modules/@wordpress/editor/build-module/components/post-publish-button/label.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");



/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



class PostPublishButton extends _wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    this.buttonNode = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createRef)();
    this.createOnClick = this.createOnClick.bind(this);
    this.closeEntitiesSavedStates = this.closeEntitiesSavedStates.bind(this);
    this.state = {
      entitiesSavedStatesCallback: false
    };
  }

  componentDidMount() {
    if (this.props.focusOnMount) {
      this.buttonNode.current.focus();
    }
  }

  createOnClick(callback) {
    var _this = this;

    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      const {
        hasNonPostEntityChanges,
        setEntitiesSavedStatesCallback
      } = _this.props; // If a post with non-post entities is published, but the user
      // elects to not save changes to the non-post entities, those
      // entities will still be dirty when the Publish button is clicked.
      // We also need to check that the `setEntitiesSavedStatesCallback`
      // prop was passed. See https://github.com/WordPress/gutenberg/pull/37383

      if (hasNonPostEntityChanges && setEntitiesSavedStatesCallback) {
        // The modal for multiple entity saving will open,
        // hold the callback for saving/publishing the post
        // so that we can call it if the post entity is checked.
        _this.setState({
          entitiesSavedStatesCallback: () => callback(...args)
        }); // Open the save panel by setting its callback.
        // To set a function on the useState hook, we must set it
        // with another function (() => myFunction). Passing the
        // function on its own will cause an error when called.


        setEntitiesSavedStatesCallback(() => _this.closeEntitiesSavedStates);
        return lodash__WEBPACK_IMPORTED_MODULE_2__.noop;
      }

      return callback(...args);
    };
  }

  closeEntitiesSavedStates(savedEntities) {
    const {
      postType,
      postId
    } = this.props;
    const {
      entitiesSavedStatesCallback
    } = this.state;
    this.setState({
      entitiesSavedStatesCallback: false
    }, () => {
      if (savedEntities && (0,lodash__WEBPACK_IMPORTED_MODULE_2__.some)(savedEntities, elt => elt.kind === 'postType' && elt.name === postType && elt.key === postId)) {
        // The post entity was checked, call the held callback from `createOnClick`.
        entitiesSavedStatesCallback();
      }
    });
  }

  render() {
    const {
      forceIsDirty,
      forceIsSaving,
      hasPublishAction,
      isBeingScheduled,
      isOpen,
      isPostSavingLocked,
      isPublishable,
      isPublished,
      isSaveable,
      isSaving,
      isAutoSaving,
      isToggle,
      onSave,
      onStatusChange,
      onSubmit = lodash__WEBPACK_IMPORTED_MODULE_2__.noop,
      onToggle,
      visibility,
      hasNonPostEntityChanges,
      isSavingNonPostEntityChanges
    } = this.props;
    const isButtonDisabled = (isSaving || forceIsSaving || !isSaveable || isPostSavingLocked || !isPublishable && !forceIsDirty) && (!hasNonPostEntityChanges || isSavingNonPostEntityChanges);
    const isToggleDisabled = (isPublished || isSaving || forceIsSaving || !isSaveable || !isPublishable && !forceIsDirty) && (!hasNonPostEntityChanges || isSavingNonPostEntityChanges);
    let publishStatus;

    if (!hasPublishAction) {
      publishStatus = 'pending';
    } else if (visibility === 'private') {
      publishStatus = 'private';
    } else if (isBeingScheduled) {
      publishStatus = 'future';
    } else {
      publishStatus = 'publish';
    }

    const onClickButton = () => {
      if (isButtonDisabled) {
        return;
      }

      onSubmit();
      onStatusChange(publishStatus);
      onSave();
    };

    const onClickToggle = () => {
      if (isToggleDisabled) {
        return;
      }

      onToggle();
    };

    const buttonProps = {
      'aria-disabled': isButtonDisabled,
      className: 'editor-post-publish-button',
      isBusy: !isAutoSaving && isSaving && isPublished,
      variant: 'primary',
      onClick: this.createOnClick(onClickButton)
    };
    const toggleProps = {
      'aria-disabled': isToggleDisabled,
      'aria-expanded': isOpen,
      className: 'editor-post-publish-panel__toggle',
      isBusy: isSaving && isPublished,
      variant: 'primary',
      onClick: this.createOnClick(onClickToggle)
    };
    const toggleChildren = isBeingScheduled ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Schedule…') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Publish');
    const buttonChildren = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_label__WEBPACK_IMPORTED_MODULE_9__["default"], {
      forceIsSaving: forceIsSaving,
      hasNonPostEntityChanges: hasNonPostEntityChanges
    });
    const componentProps = isToggle ? toggleProps : buttonProps;
    const componentChildren = isToggle ? toggleChildren : buttonChildren;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ref: this.buttonNode
    }, componentProps, {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(componentProps.className, 'editor-post-publish-button__button', {
        'has-changes-dot': hasNonPostEntityChanges
      })
    }), componentChildren));
  }

}
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__.compose)([(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.withSelect)(select => {
  const {
    isSavingPost,
    isAutosavingPost,
    isEditedPostBeingScheduled,
    getEditedPostVisibility,
    isCurrentPostPublished,
    isEditedPostSaveable,
    isEditedPostPublishable,
    isPostSavingLocked,
    getCurrentPost,
    getCurrentPostType,
    getCurrentPostId,
    hasNonPostEntityChanges,
    isSavingNonPostEntityChanges
  } = select(_store__WEBPACK_IMPORTED_MODULE_8__.store);

  const _isAutoSaving = isAutosavingPost();

  return {
    isSaving: isSavingPost() || _isAutoSaving,
    isAutoSaving: _isAutoSaving,
    isBeingScheduled: isEditedPostBeingScheduled(),
    visibility: getEditedPostVisibility(),
    isSaveable: isEditedPostSaveable(),
    isPostSavingLocked: isPostSavingLocked(),
    isPublishable: isEditedPostPublishable(),
    isPublished: isCurrentPostPublished(),
    hasPublishAction: (0,lodash__WEBPACK_IMPORTED_MODULE_2__.get)(getCurrentPost(), ['_links', 'wp:action-publish'], false),
    postType: getCurrentPostType(),
    postId: getCurrentPostId(),
    hasNonPostEntityChanges: hasNonPostEntityChanges(),
    isSavingNonPostEntityChanges: isSavingNonPostEntityChanges()
  };
}), (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.withDispatch)(dispatch => {
  const {
    editPost,
    savePost
  } = dispatch(_store__WEBPACK_IMPORTED_MODULE_8__.store);
  return {
    onStatusChange: status => editPost({
      status
    }, {
      undoIgnore: true
    }),
    onSave: savePost
  };
})])(PostPublishButton));


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/post-publish-button/label.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/post-publish-button/label.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublishButtonLabel": function() { return /* binding */ PublishButtonLabel; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


function PublishButtonLabel(_ref) {
  let {
    isPublished,
    isBeingScheduled,
    isSaving,
    isPublishing,
    hasPublishAction,
    isAutosaving,
    hasNonPostEntityChanges
  } = _ref;

  if (isPublishing) {
    /* translators: button label text should, if possible, be under 16 characters. */
    return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Publishing…');
  } else if (isPublished && isSaving && !isAutosaving) {
    /* translators: button label text should, if possible, be under 16 characters. */
    return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Updating…');
  } else if (isBeingScheduled && isSaving && !isAutosaving) {
    /* translators: button label text should, if possible, be under 16 characters. */
    return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Scheduling…');
  }

  if (!hasPublishAction) {
    return hasNonPostEntityChanges ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Submit for Review…') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Submit for Review');
  } else if (isPublished) {
    return hasNonPostEntityChanges ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Update…') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Update');
  } else if (isBeingScheduled) {
    return hasNonPostEntityChanges ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Schedule…') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Schedule');
  }

  return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Publish');
}
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.compose)([(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.withSelect)((select, _ref2) => {
  let {
    forceIsSaving
  } = _ref2;
  const {
    isCurrentPostPublished,
    isEditedPostBeingScheduled,
    isSavingPost,
    isPublishingPost,
    getCurrentPost,
    getCurrentPostType,
    isAutosavingPost
  } = select(_store__WEBPACK_IMPORTED_MODULE_4__.store);
  return {
    isPublished: isCurrentPostPublished(),
    isBeingScheduled: isEditedPostBeingScheduled(),
    isSaving: forceIsSaving || isSavingPost(),
    isPublishing: isPublishingPost(),
    hasPublishAction: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(getCurrentPost(), ['_links', 'wp:action-publish'], false),
    postType: getCurrentPostType(),
    isAutosaving: isAutosavingPost()
  };
})])(PublishButtonLabel));


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/post-publish-panel/index.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/post-publish-panel/index.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostPublishPanel": function() { return /* binding */ PostPublishPanel; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/close-small.js");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _post_publish_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../post-publish-button */ "./node_modules/@wordpress/editor/build-module/components/post-publish-button/index.js");
/* harmony import */ var _prepublish__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./prepublish */ "./node_modules/@wordpress/editor/build-module/components/post-publish-panel/prepublish.js");
/* harmony import */ var _postpublish__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./postpublish */ "./node_modules/@wordpress/editor/build-module/components/post-publish-panel/postpublish.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */





class PostPublishPanel extends _wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor() {
    super(...arguments);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    // Automatically collapse the publish sidebar when a post
    // is published and the user makes an edit.
    if (prevProps.isPublished && !this.props.isSaving && this.props.isDirty) {
      this.props.onClose();
    }
  }

  onSubmit() {
    const {
      onClose,
      hasPublishAction,
      isPostTypeViewable
    } = this.props;

    if (!hasPublishAction || !isPostTypeViewable) {
      onClose();
    }
  }

  render() {
    const {
      forceIsDirty,
      forceIsSaving,
      isBeingScheduled,
      isPublished,
      isPublishSidebarEnabled,
      isScheduled,
      isSaving,
      isSavingNonPostEntityChanges,
      onClose,
      onTogglePublishSidebar,
      PostPublishExtension,
      PrePublishExtension,
      ...additionalProps
    } = this.props;
    const propsForPanel = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.omit)(additionalProps, ['hasPublishAction', 'isDirty', 'isPostTypeViewable']);
    const isPublishedOrScheduled = isPublished || isScheduled && isBeingScheduled;
    const isPrePublish = !isPublishedOrScheduled && !isSaving;
    const isPostPublish = isPublishedOrScheduled && !isSaving;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: "editor-post-publish-panel"
    }, propsForPanel), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "editor-post-publish-panel__header"
    }, isPostPublish ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
      onClick: onClose,
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__["default"],
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Close panel')
    }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "editor-post-publish-panel__header-publish-button"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_post_publish_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
      focusOnMount: true,
      onSubmit: this.onSubmit,
      forceIsDirty: forceIsDirty,
      forceIsSaving: forceIsSaving
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "editor-post-publish-panel__header-cancel-button"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
      disabled: isSavingNonPostEntityChanges,
      onClick: onClose,
      variant: "secondary"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Cancel'))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "editor-post-publish-panel__content"
    }, isPrePublish && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_prepublish__WEBPACK_IMPORTED_MODULE_11__["default"], null, PrePublishExtension && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PrePublishExtension, null)), isPostPublish && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_postpublish__WEBPACK_IMPORTED_MODULE_12__["default"], {
      focusOnMount: true
    }, PostPublishExtension && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PostPublishExtension, null)), isSaving && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Spinner, null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "editor-post-publish-panel__footer"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.CheckboxControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Always show pre-publish checks.'),
      checked: isPublishSidebarEnabled,
      onChange: onTogglePublishSidebar
    })));
  }

}
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__.compose)([(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.withSelect)(select => {
  const {
    getPostType
  } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_7__.store);
  const {
    getCurrentPost,
    getEditedPostAttribute,
    isCurrentPostPublished,
    isCurrentPostScheduled,
    isEditedPostBeingScheduled,
    isEditedPostDirty,
    isSavingPost,
    isSavingNonPostEntityChanges
  } = select(_store__WEBPACK_IMPORTED_MODULE_8__.store);
  const {
    isPublishSidebarEnabled
  } = select(_store__WEBPACK_IMPORTED_MODULE_8__.store);
  const postType = getPostType(getEditedPostAttribute('type'));
  return {
    hasPublishAction: (0,lodash__WEBPACK_IMPORTED_MODULE_2__.get)(getCurrentPost(), ['_links', 'wp:action-publish'], false),
    isPostTypeViewable: (0,lodash__WEBPACK_IMPORTED_MODULE_2__.get)(postType, ['viewable'], false),
    isBeingScheduled: isEditedPostBeingScheduled(),
    isDirty: isEditedPostDirty(),
    isPublished: isCurrentPostPublished(),
    isPublishSidebarEnabled: isPublishSidebarEnabled(),
    isSaving: isSavingPost(),
    isSavingNonPostEntityChanges: isSavingNonPostEntityChanges(),
    isScheduled: isCurrentPostScheduled()
  };
}), (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.withDispatch)((dispatch, _ref) => {
  let {
    isPublishSidebarEnabled
  } = _ref;
  const {
    disablePublishSidebar,
    enablePublishSidebar
  } = dispatch(_store__WEBPACK_IMPORTED_MODULE_8__.store);
  return {
    onTogglePublishSidebar: () => {
      if (isPublishSidebarEnabled) {
        disablePublishSidebar();
      } else {
        enablePublishSidebar();
      }
    }
  };
}), _wordpress_components__WEBPACK_IMPORTED_MODULE_4__.withFocusReturn, _wordpress_components__WEBPACK_IMPORTED_MODULE_4__.withConstrainedTabbing])(PostPublishPanel));


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/post-publish-panel/maybe-category-panel.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/post-publish-panel/maybe-category-panel.js ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _post_taxonomies_hierarchical_term_selector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../post-taxonomies/hierarchical-term-selector */ "./node_modules/@wordpress/editor/build-module/components/post-taxonomies/hierarchical-term-selector.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */




function MaybeCategoryPanel() {
  const hasNoCategory = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    var _select$getEntityReco;

    const postType = select(_store__WEBPACK_IMPORTED_MODULE_6__.store).getCurrentPostType();
    const categoriesTaxonomy = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.store).getTaxonomy('category');
    const defaultCategorySlug = 'uncategorized';
    const defaultCategory = (_select$getEntityReco = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.store).getEntityRecords('taxonomy', 'category', {
      slug: defaultCategorySlug
    })) === null || _select$getEntityReco === void 0 ? void 0 : _select$getEntityReco[0];
    const postTypeSupportsCategories = categoriesTaxonomy && (0,lodash__WEBPACK_IMPORTED_MODULE_1__.some)(categoriesTaxonomy.types, type => type === postType);
    const categories = categoriesTaxonomy && select(_store__WEBPACK_IMPORTED_MODULE_6__.store).getEditedPostAttribute(categoriesTaxonomy.rest_base); // This boolean should return true if everything is loaded
    // ( categoriesTaxonomy, defaultCategory )
    // and the post has not been assigned a category different than "uncategorized".

    return !!categoriesTaxonomy && !!defaultCategory && postTypeSupportsCategories && ((categories === null || categories === void 0 ? void 0 : categories.length) === 0 || (categories === null || categories === void 0 ? void 0 : categories.length) === 1 && defaultCategory.id === categories[0]);
  }, []);
  const [shouldShowPanel, setShouldShowPanel] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // We use state to avoid hiding the panel if the user edits the categories
    // and adds one within the panel itself (while visible).
    if (hasNoCategory) {
      setShouldShowPanel(true);
    }
  }, [hasNoCategory]);

  if (!shouldShowPanel) {
    return null;
  }

  const panelBodyTitle = [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Suggestion:'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "editor-post-publish-panel__link",
    key: "label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Assign a category'))];
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    initialOpen: false,
    title: panelBodyTitle
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Categories provide a helpful way to group related posts together and to quickly tell readers what a post is about.')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_post_taxonomies_hierarchical_term_selector__WEBPACK_IMPORTED_MODULE_7__["default"], {
    slug: "category"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (MaybeCategoryPanel);


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/post-publish-panel/maybe-post-format-panel.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/post-publish-panel/maybe-post-format-panel.js ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PostFormatPanel; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _post_format__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../post-format */ "./node_modules/@wordpress/editor/build-module/components/post-format/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */




const getSuggestion = (supportedFormats, suggestedPostFormat) => {
  const formats = _post_format__WEBPACK_IMPORTED_MODULE_7__.POST_FORMATS.filter(format => (0,lodash__WEBPACK_IMPORTED_MODULE_1__.includes)(supportedFormats, format.id));
  return (0,lodash__WEBPACK_IMPORTED_MODULE_1__.find)(formats, format => format.id === suggestedPostFormat);
};

const PostFormatSuggestion = _ref => {
  let {
    suggestedPostFormat,
    suggestionText,
    onUpdatePostFormat
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "link",
    onClick: () => onUpdatePostFormat(suggestedPostFormat)
  }, suggestionText);
};

function PostFormatPanel() {
  const {
    currentPostFormat,
    suggestion
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    const {
      getEditedPostAttribute,
      getSuggestedPostFormat
    } = select(_store__WEBPACK_IMPORTED_MODULE_6__.store);
    const supportedFormats = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.store).getThemeSupports(), ['formats'], []);
    return {
      currentPostFormat: getEditedPostAttribute('format'),
      suggestion: getSuggestion(supportedFormats, getSuggestedPostFormat())
    };
  }, []);
  const {
    editPost
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_6__.store);

  const onUpdatePostFormat = format => editPost({
    format
  });

  const panelBodyTitle = [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Suggestion:'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "editor-post-publish-panel__link",
    key: "label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Use a post format'))];

  if (!suggestion || suggestion.id === currentPostFormat) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    initialOpen: false,
    title: panelBodyTitle
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Your theme uses post formats to highlight different kinds of content, like images or videos. Apply a post format to see this special styling.')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PostFormatSuggestion, {
    onUpdatePostFormat: onUpdatePostFormat,
    suggestedPostFormat: suggestion.id,
    suggestionText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.sprintf)(
    /* translators: %s: post format */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Apply the "%1$s" format.'), suggestion.caption)
  })));
}


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/post-publish-panel/maybe-tags-panel.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/post-publish-panel/maybe-tags-panel.js ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _post_taxonomies_flat_term_selector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../post-taxonomies/flat-term-selector */ "./node_modules/@wordpress/editor/build-module/components/post-taxonomies/flat-term-selector.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */




const TagsPanel = () => {
  const panelBodyTitle = [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Suggestion:'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "editor-post-publish-panel__link",
    key: "label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add tags'))];
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    initialOpen: false,
    title: panelBodyTitle
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tags help users and search engines navigate your site and find your content. Add a few keywords to describe your post.')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_post_taxonomies_flat_term_selector__WEBPACK_IMPORTED_MODULE_8__["default"], {
    slug: 'post_tag'
  }));
};

class MaybeTagsPanel extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      hadTagsWhenOpeningThePanel: props.hasTags
    };
  }
  /*
   * We only want to show the tag panel if the post didn't have
   * any tags when the user hit the Publish button.
   *
   * We can't use the prop.hasTags because it'll change to true
   * if the user adds a new tag within the pre-publish panel.
   * This would force a re-render and a new prop.hasTags check,
   * hiding this panel and keeping the user from adding
   * more than one tag.
   */


  render() {
    if (!this.state.hadTagsWhenOpeningThePanel) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TagsPanel, null);
    }

    return null;
  }

}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.compose)((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.withSelect)(select => {
  const postType = select(_store__WEBPACK_IMPORTED_MODULE_7__.store).getCurrentPostType();
  const tagsTaxonomy = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__.store).getTaxonomy('post_tag');
  const tags = tagsTaxonomy && select(_store__WEBPACK_IMPORTED_MODULE_7__.store).getEditedPostAttribute(tagsTaxonomy.rest_base);
  return {
    areTagsFetched: tagsTaxonomy !== undefined,
    isPostTypeSupported: tagsTaxonomy && (0,lodash__WEBPACK_IMPORTED_MODULE_1__.some)(tagsTaxonomy.types, type => type === postType),
    hasTags: tags && tags.length
  };
}), (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.ifCondition)(_ref => {
  let {
    areTagsFetched,
    isPostTypeSupported
  } = _ref;
  return isPostTypeSupported && areTagsFetched;
}))(MaybeTagsPanel));


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/post-publish-panel/postpublish.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/post-publish-panel/postpublish.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _post_schedule_label__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../post-schedule/label */ "./node_modules/@wordpress/editor/build-module/components/post-schedule/label.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */









/**
 * Internal dependencies
 */



const POSTNAME = '%postname%';
/**
 * Returns URL for a future post.
 *
 * @param {Object} post Post object.
 *
 * @return {string} PostPublish URL.
 */

const getFuturePostUrl = post => {
  const {
    slug
  } = post;

  if (post.permalink_template.includes(POSTNAME)) {
    return post.permalink_template.replace(POSTNAME, slug);
  }

  return post.permalink_template;
};

function CopyButton(_ref) {
  let {
    text,
    onCopy,
    children
  } = _ref;
  const ref = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__.useCopyToClipboard)(text, onCopy);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "secondary",
    ref: ref
  }, children);
}

class PostPublishPanelPostpublish extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments);
    this.state = {
      showCopyConfirmation: false
    };
    this.onCopy = this.onCopy.bind(this);
    this.onSelectInput = this.onSelectInput.bind(this);
    this.postLink = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createRef)();
  }

  componentDidMount() {
    if (this.props.focusOnMount) {
      this.postLink.current.focus();
    }
  }

  componentWillUnmount() {
    clearTimeout(this.dismissCopyConfirmation);
  }

  onCopy() {
    this.setState({
      showCopyConfirmation: true
    });
    clearTimeout(this.dismissCopyConfirmation);
    this.dismissCopyConfirmation = setTimeout(() => {
      this.setState({
        showCopyConfirmation: false
      });
    }, 4000);
  }

  onSelectInput(event) {
    event.target.select();
  }

  render() {
    const {
      children,
      isScheduled,
      post,
      postType
    } = this.props;
    const postLabel = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(postType, ['labels', 'singular_name']);
    const viewPostLabel = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(postType, ['labels', 'view_item']);
    const addNewPostLabel = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(postType, ['labels', 'add_new_item']);
    const link = post.status === 'future' ? getFuturePostUrl(post) : post.link;
    const addLink = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_5__.addQueryArgs)('post-new.php', {
      post_type: post.type
    });
    const postPublishNonLinkHeader = isScheduled ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('is now scheduled. It will go live on'), ' ', (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_post_schedule_label__WEBPACK_IMPORTED_MODULE_10__["default"], null), ".") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('is now live.');
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "post-publish-panel__postpublish"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      className: "post-publish-panel__postpublish-header"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      ref: this.postLink,
      href: link
    }, (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_6__.decodeEntities)(post.title) || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('(no title)')), ' ', postPublishNonLinkHeader), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "post-publish-panel__postpublish-subheader"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('What’s next?'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "post-publish-panel__postpublish-post-address-container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
      className: "post-publish-panel__postpublish-post-address",
      readOnly: true,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.sprintf)(
      /* translators: %s: post type singular name */
      (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('%s address'), postLabel),
      value: (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_5__.safeDecodeURIComponent)(link),
      onFocus: this.onSelectInput
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "post-publish-panel__postpublish-post-address__copy-button-wrap"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CopyButton, {
      text: link,
      onCopy: this.onCopy
    }, this.state.showCopyConfirmation ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Copied!') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Copy')))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "post-publish-panel__postpublish-buttons"
    }, !isScheduled && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      variant: "primary",
      href: link
    }, viewPostLabel), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      variant: isScheduled ? 'primary' : 'secondary',
      href: addLink
    }, addNewPostLabel))), children);
  }

}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.withSelect)(select => {
  const {
    getEditedPostAttribute,
    getCurrentPost,
    isCurrentPostScheduled
  } = select(_store__WEBPACK_IMPORTED_MODULE_9__.store);
  const {
    getPostType
  } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_8__.store);
  return {
    post: getCurrentPost(),
    postType: getPostType(getEditedPostAttribute('type')),
    isScheduled: isCurrentPostScheduled()
  };
})(PostPublishPanelPostpublish));


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/post-publish-panel/prepublish.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/post-publish-panel/prepublish.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/wordpress.js");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _post_visibility__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../post-visibility */ "./node_modules/@wordpress/editor/build-module/components/post-visibility/index.js");
/* harmony import */ var _post_visibility_label__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../post-visibility/label */ "./node_modules/@wordpress/editor/build-module/components/post-visibility/label.js");
/* harmony import */ var _post_schedule__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../post-schedule */ "./node_modules/@wordpress/editor/build-module/components/post-schedule/index.js");
/* harmony import */ var _post_schedule_label__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../post-schedule/label */ "./node_modules/@wordpress/editor/build-module/components/post-schedule/label.js");
/* harmony import */ var _maybe_tags_panel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./maybe-tags-panel */ "./node_modules/@wordpress/editor/build-module/components/post-publish-panel/maybe-tags-panel.js");
/* harmony import */ var _maybe_post_format_panel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./maybe-post-format-panel */ "./node_modules/@wordpress/editor/build-module/components/post-publish-panel/maybe-post-format-panel.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");
/* harmony import */ var _maybe_category_panel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./maybe-category-panel */ "./node_modules/@wordpress/editor/build-module/components/post-publish-panel/maybe-category-panel.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */










function PostPublishPanelPrepublish(_ref) {
  let {
    children
  } = _ref;
  const {
    isBeingScheduled,
    isRequestingSiteIcon,
    hasPublishAction,
    siteIconUrl,
    siteTitle,
    siteHome
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    const {
      getCurrentPost,
      isEditedPostBeingScheduled
    } = select(_store__WEBPACK_IMPORTED_MODULE_8__.store);
    const {
      getEntityRecord,
      isResolving
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__.store);
    const siteData = getEntityRecord('root', '__unstableBase', undefined) || {};
    return {
      hasPublishAction: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(getCurrentPost(), ['_links', 'wp:action-publish'], false),
      isBeingScheduled: isEditedPostBeingScheduled(),
      isRequestingSiteIcon: isResolving('getEntityRecord', ['root', '__unstableBase', undefined]),
      siteIconUrl: siteData.site_icon_url,
      siteTitle: siteData.name,
      siteHome: siteData.home && (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_5__.filterURLForDisplay)(siteData.home)
    };
  }, []);
  let siteIcon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
    className: "components-site-icon",
    size: "36px",
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__["default"]
  });

  if (siteIconUrl) {
    siteIcon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Site Icon'),
      className: "components-site-icon",
      src: siteIconUrl
    });
  }

  if (isRequestingSiteIcon) {
    siteIcon = null;
  }

  let prePublishTitle, prePublishBodyText;

  if (!hasPublishAction) {
    prePublishTitle = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Are you ready to submit for review?');
    prePublishBodyText = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('When you’re ready, submit your work for review, and an Editor will be able to approve it for you.');
  } else if (isBeingScheduled) {
    prePublishTitle = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Are you ready to schedule?');
    prePublishBodyText = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Your work will be published at the specified date and time.');
  } else {
    prePublishTitle = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Are you ready to publish?');
    prePublishBodyText = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Double-check your settings before publishing.');
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "editor-post-publish-panel__prepublish"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, prePublishTitle)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, prePublishBodyText), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "components-site-card"
  }, siteIcon, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "components-site-info"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "components-site-name"
  }, (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_7__.decodeEntities)(siteTitle) || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('(Untitled)')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "components-site-home"
  }, siteHome))), hasPublishAction && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    initialOpen: false,
    title: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Visibility:'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "editor-post-publish-panel__link",
      key: "label"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_post_visibility_label__WEBPACK_IMPORTED_MODULE_10__["default"], null))]
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_post_visibility__WEBPACK_IMPORTED_MODULE_11__["default"], null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    initialOpen: false,
    title: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Publish:'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "editor-post-publish-panel__link",
      key: "label"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_post_schedule_label__WEBPACK_IMPORTED_MODULE_12__["default"], null))]
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_post_schedule__WEBPACK_IMPORTED_MODULE_13__["default"], null))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_maybe_post_format_panel__WEBPACK_IMPORTED_MODULE_14__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_maybe_tags_panel__WEBPACK_IMPORTED_MODULE_15__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_maybe_category_panel__WEBPACK_IMPORTED_MODULE_16__["default"], null), children);
}

/* harmony default export */ __webpack_exports__["default"] = (PostPublishPanelPrepublish);


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/post-saved-state/index.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/post-saved-state/index.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PostSavedState; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/cloud-upload.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/icon/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/check.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/cloud.js");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _post_switch_to_draft_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../post-switch-to-draft-button */ "./node_modules/@wordpress/editor/build-module/components/post-switch-to-draft-button/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");


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
 * Component showing whether the post is saved or not and providing save
 * buttons.
 *
 * @param {Object}   props                Component props.
 * @param {?boolean} props.forceIsDirty   Whether to force the post to be marked
 *                                        as dirty.
 * @param {?boolean} props.forceIsSaving  Whether to force the post to be marked
 *                                        as being saved.
 * @param {?boolean} props.showIconLabels Whether interface buttons show labels instead of icons
 * @return {import('@wordpress/element').WPComponent} The component.
 */

function PostSavedState(_ref) {
  let {
    forceIsDirty,
    forceIsSaving,
    showIconLabels = false
  } = _ref;
  const [forceSavedMessage, setForceSavedMessage] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const isLargeViewport = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.useViewportMatch)('small');
  const {
    isAutosaving,
    isDirty,
    isNew,
    isPending,
    isPublished,
    isSaveable,
    isSaving,
    isScheduled,
    hasPublishAction
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    var _getCurrentPost$_link, _getCurrentPost, _getCurrentPost$_link2;

    const {
      isEditedPostNew,
      isCurrentPostPublished,
      isCurrentPostScheduled,
      isEditedPostDirty,
      isSavingPost,
      isEditedPostSaveable,
      getCurrentPost,
      isAutosavingPost,
      getEditedPostAttribute
    } = select(_store__WEBPACK_IMPORTED_MODULE_7__.store);
    return {
      isAutosaving: isAutosavingPost(),
      isDirty: forceIsDirty || isEditedPostDirty(),
      isNew: isEditedPostNew(),
      isPending: 'pending' === getEditedPostAttribute('status'),
      isPublished: isCurrentPostPublished(),
      isSaving: forceIsSaving || isSavingPost(),
      isSaveable: isEditedPostSaveable(),
      isScheduled: isCurrentPostScheduled(),
      hasPublishAction: (_getCurrentPost$_link = (_getCurrentPost = getCurrentPost()) === null || _getCurrentPost === void 0 ? void 0 : (_getCurrentPost$_link2 = _getCurrentPost._links) === null || _getCurrentPost$_link2 === void 0 ? void 0 : _getCurrentPost$_link2['wp:action-publish']) !== null && _getCurrentPost$_link !== void 0 ? _getCurrentPost$_link : false
    };
  }, [forceIsDirty, forceIsSaving]);
  const {
    savePost
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_7__.store);
  const wasSaving = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.usePrevious)(isSaving);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let timeoutId;

    if (wasSaving && !isSaving) {
      setForceSavedMessage(true);
      timeoutId = setTimeout(() => {
        setForceSavedMessage(false);
      }, 1000);
    }

    return () => clearTimeout(timeoutId);
  }, [isSaving]); // Once the post has been submitted for review this button
  // is not needed for the contributor role.

  if (!hasPublishAction && isPending) {
    return null;
  }

  if (isPublished || isScheduled) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_post_switch_to_draft_button__WEBPACK_IMPORTED_MODULE_8__["default"], null);
  }
  /* translators: button label text should, if possible, be under 16 characters. */


  const label = isPending ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Save as pending') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Save draft');
  /* translators: button label text should, if possible, be under 16 characters. */

  const shortLabel = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Save');

  const isSaved = forceSavedMessage || !isNew && !isDirty;
  const isSavedState = isSaving || isSaved;
  const isDisabled = isSaving || isSaved || !isSaveable;
  let text;

  if (isSaving) {
    text = isAutosaving ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Autosaving') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Saving');
  } else if (isSaved) {
    text = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Saved');
  } else if (isLargeViewport) {
    text = label;
  } else if (showIconLabels) {
    text = shortLabel;
  } // Use common Button instance for all saved states so that focus is not
  // lost.


  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: isSaveable || isSaving ? classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      'editor-post-save-draft': !isSavedState,
      'editor-post-saved-state': isSavedState,
      'is-saving': isSaving,
      'is-autosaving': isAutosaving,
      'is-saved': isSaved,
      [(0,_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__unstableGetAnimateClassName)({
        type: 'loading'
      })]: isSaving
    }) : undefined,
    onClick: isDisabled ? undefined : () => savePost(),
    shortcut: _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_6__.displayShortcut.primary('s'),
    variant: isLargeViewport ? 'tertiary' : undefined,
    icon: isLargeViewport ? undefined : _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__["default"],
    label: showIconLabels ? undefined : label,
    "aria-disabled": isDisabled
  }, isSavedState && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_10__["default"], {
    icon: isSaved ? _wordpress_icons__WEBPACK_IMPORTED_MODULE_11__["default"] : _wordpress_icons__WEBPACK_IMPORTED_MODULE_12__["default"]
  }), text);
}


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/post-schedule/check.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/post-schedule/check.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostScheduleCheck": function() { return /* binding */ PostScheduleCheck; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


function PostScheduleCheck(_ref) {
  let {
    hasPublishAction,
    children
  } = _ref;

  if (!hasPublishAction) {
    return null;
  }

  return children;
}
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.compose)([(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.withSelect)(select => {
  const {
    getCurrentPost,
    getCurrentPostType
  } = select(_store__WEBPACK_IMPORTED_MODULE_3__.store);
  return {
    hasPublishAction: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(getCurrentPost(), ['_links', 'wp:action-publish'], false),
    postType: getCurrentPostType()
  };
})])(PostScheduleCheck));


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/post-schedule/index.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/post-schedule/index.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PostSchedule; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/date */ "@wordpress/date");
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_date__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



function getDayOfTheMonth() {
  let date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
  let firstDay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  const d = new Date(date);
  return new Date(d.getFullYear(), d.getMonth() + (firstDay ? 0 : 1), firstDay ? 1 : 0).toISOString();
}

function PostSchedule() {
  const {
    postDate,
    postType
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => ({
    postDate: select(_store__WEBPACK_IMPORTED_MODULE_5__.store).getEditedPostAttribute('date'),
    postType: select(_store__WEBPACK_IMPORTED_MODULE_5__.store).getCurrentPostType()
  }), []);
  const {
    editPost
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_5__.store);

  const onUpdateDate = date => editPost({
    date
  });

  const [previewedMonth, setPreviewedMonth] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(getDayOfTheMonth(postDate)); // Pick up published and schduled site posts.

  const eventsByPostType = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.store).getEntityRecords('postType', postType, {
    status: 'publish,future',
    after: getDayOfTheMonth(previewedMonth),
    before: getDayOfTheMonth(previewedMonth, false),
    exclude: [select(_store__WEBPACK_IMPORTED_MODULE_5__.store).getCurrentPostId()]
  }), [previewedMonth, postType]);
  const events = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (eventsByPostType || []).map(_ref => {
    let {
      title,
      type,
      date: eventDate
    } = _ref;
    return {
      title: title === null || title === void 0 ? void 0 : title.rendered,
      type,
      date: new Date(eventDate)
    };
  }), [eventsByPostType]);
  const ref = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  const settings = (0,_wordpress_date__WEBPACK_IMPORTED_MODULE_1__.__experimentalGetSettings)(); // To know if the current timezone is a 12 hour time with look for "a" in the time format
  // We also make sure this a is not escaped by a "/"


  const is12HourTime = /a(?!\\)/i.test(settings.formats.time.toLowerCase() // Test only the lower case a.
  .replace(/\\\\/g, '') // Replace "//" with empty strings.
  .split('').reverse().join('') // Reverse the string and test for "a" not followed by a slash.
  );

  function onChange(newDate) {
    onUpdateDate(newDate);
    const {
      ownerDocument
    } = ref.current;
    ownerDocument.activeElement.blur();
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.DateTimePicker, {
    ref: ref,
    currentDate: postDate,
    onChange: onChange,
    is12Hour: is12HourTime,
    events: events,
    onMonthPreviewed: setPreviewedMonth
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/post-schedule/label.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/post-schedule/label.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostScheduleLabel": function() { return /* binding */ PostScheduleLabel; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/date */ "@wordpress/date");
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_date__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


function PostScheduleLabel(_ref) {
  let {
    date,
    isFloating
  } = _ref;

  const settings = (0,_wordpress_date__WEBPACK_IMPORTED_MODULE_1__.__experimentalGetSettings)();

  return date && !isFloating ? (0,_wordpress_date__WEBPACK_IMPORTED_MODULE_1__.format)(`${settings.formats.date} ${settings.formats.time}`, date) : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Immediately');
}
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.withSelect)(select => {
  return {
    date: select(_store__WEBPACK_IMPORTED_MODULE_3__.store).getEditedPostAttribute('date'),
    isFloating: select(_store__WEBPACK_IMPORTED_MODULE_3__.store).isEditedPostDateFloating()
  };
})(PostScheduleLabel));


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/post-slug/check.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/post-slug/check.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PostSlugCheck; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _post_type_support_check__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../post-type-support-check */ "./node_modules/@wordpress/editor/build-module/components/post-type-support-check/index.js");


/**
 * Internal dependencies
 */

function PostSlugCheck(_ref) {
  let {
    children
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_post_type_support_check__WEBPACK_IMPORTED_MODULE_1__["default"], {
    supportKeys: "slug"
  }, children);
}


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/post-slug/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/post-slug/index.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostSlug": function() { return /* binding */ PostSlug; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _check__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./check */ "./node_modules/@wordpress/editor/build-module/components/post-slug/check.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



class PostSlug extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(_ref) {
    let {
      postSlug,
      postTitle,
      postID
    } = _ref;
    super(...arguments);
    this.state = {
      editedSlug: (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_4__.safeDecodeURIComponent)(postSlug) || (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_4__.cleanForSlug)(postTitle) || postID
    };
    this.setSlug = this.setSlug.bind(this);
  }

  setSlug(event) {
    const {
      postSlug,
      onUpdateSlug
    } = this.props;
    const {
      value
    } = event.target;
    const editedSlug = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_4__.cleanForSlug)(value);

    if (editedSlug === postSlug) {
      return;
    }

    onUpdateSlug(editedSlug);
  }

  render() {
    const {
      instanceId
    } = this.props;
    const {
      editedSlug
    } = this.state;
    const inputId = 'editor-post-slug-' + instanceId;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_check__WEBPACK_IMPORTED_MODULE_6__["default"], null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      htmlFor: inputId
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Slug')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      autoComplete: "off",
      spellCheck: "false",
      type: "text",
      id: inputId,
      value: editedSlug,
      onChange: event => this.setState({
        editedSlug: event.target.value
      }),
      onBlur: this.setSlug,
      className: "editor-post-slug__input"
    }));
  }

}
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.compose)([(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.withSelect)(select => {
  const {
    getCurrentPost,
    getEditedPostAttribute
  } = select(_store__WEBPACK_IMPORTED_MODULE_5__.store);
  const {
    id
  } = getCurrentPost();
  return {
    postSlug: getEditedPostAttribute('slug'),
    postTitle: getEditedPostAttribute('title'),
    postID: id
  };
}), (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.withDispatch)(dispatch => {
  const {
    editPost
  } = dispatch(_store__WEBPACK_IMPORTED_MODULE_5__.store);
  return {
    onUpdateSlug(slug) {
      editPost({
        slug
      });
    }

  };
}), _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.withInstanceId])(PostSlug));


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/post-sticky/check.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/post-sticky/check.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostStickyCheck": function() { return /* binding */ PostStickyCheck; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


function PostStickyCheck(_ref) {
  let {
    hasStickyAction,
    postType,
    children
  } = _ref;

  if (postType !== 'post' || !hasStickyAction) {
    return null;
  }

  return children;
}
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.compose)([(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.withSelect)(select => {
  const post = select(_store__WEBPACK_IMPORTED_MODULE_3__.store).getCurrentPost();
  return {
    hasStickyAction: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(post, ['_links', 'wp:action-sticky'], false),
    postType: select(_store__WEBPACK_IMPORTED_MODULE_3__.store).getCurrentPostType()
  };
})])(PostStickyCheck));


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/post-sticky/index.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/post-sticky/index.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostSticky": function() { return /* binding */ PostSticky; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _check__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./check */ "./node_modules/@wordpress/editor/build-module/components/post-sticky/check.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



function PostSticky(_ref) {
  let {
    onUpdateSticky,
    postSticky = false
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_check__WEBPACK_IMPORTED_MODULE_6__["default"], null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Stick to the top of the blog'),
    checked: postSticky,
    onChange: () => onUpdateSticky(!postSticky)
  }));
}
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.compose)([(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.withSelect)(select => {
  return {
    postSticky: select(_store__WEBPACK_IMPORTED_MODULE_5__.store).getEditedPostAttribute('sticky')
  };
}), (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.withDispatch)(dispatch => {
  return {
    onUpdateSticky(postSticky) {
      dispatch(_store__WEBPACK_IMPORTED_MODULE_5__.store).editPost({
        sticky: postSticky
      });
    }

  };
})])(PostSticky));


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/post-switch-to-draft-button/index.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/post-switch-to-draft-button/index.js ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



function PostSwitchToDraftButton(_ref) {
  let {
    isSaving,
    isPublished,
    isScheduled,
    onClick
  } = _ref;
  const isMobileViewport = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.useViewportMatch)('small', '<');
  const [showConfirmDialog, setShowConfirmDialog] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  if (!isPublished && !isScheduled) {
    return null;
  }

  let alertMessage;

  if (isPublished) {
    alertMessage = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Are you sure you want to unpublish this post?');
  } else if (isScheduled) {
    alertMessage = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Are you sure you want to unschedule this post?');
  }

  const handleConfirm = () => {
    setShowConfirmDialog(false);
    onClick();
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: "editor-post-switch-to-draft",
    onClick: () => {
      setShowConfirmDialog(true);
    },
    disabled: isSaving,
    variant: "tertiary"
  }, isMobileViewport ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Draft') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Switch to draft')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalConfirmDialog, {
    isOpen: showConfirmDialog,
    onConfirm: handleConfirm,
    onCancel: () => setShowConfirmDialog(false)
  }, alertMessage));
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.compose)([(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.withSelect)(select => {
  const {
    isSavingPost,
    isCurrentPostPublished,
    isCurrentPostScheduled
  } = select(_store__WEBPACK_IMPORTED_MODULE_5__.store);
  return {
    isSaving: isSavingPost(),
    isPublished: isCurrentPostPublished(),
    isScheduled: isCurrentPostScheduled()
  };
}), (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.withDispatch)(dispatch => {
  const {
    editPost,
    savePost
  } = dispatch(_store__WEBPACK_IMPORTED_MODULE_5__.store);
  return {
    onClick: () => {
      editPost({
        status: 'draft'
      });
      savePost();
    }
  };
})])(PostSwitchToDraftButton));


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/post-taxonomies/check.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/post-taxonomies/check.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostTaxonomiesCheck": function() { return /* binding */ PostTaxonomiesCheck; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


function PostTaxonomiesCheck(_ref) {
  let {
    postType,
    taxonomies,
    children
  } = _ref;
  const hasTaxonomies = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.some)(taxonomies, taxonomy => (0,lodash__WEBPACK_IMPORTED_MODULE_0__.includes)(taxonomy.types, postType));

  if (!hasTaxonomies) {
    return null;
  }

  return children;
}
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.compose)([(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.withSelect)(select => {
  return {
    postType: select(_store__WEBPACK_IMPORTED_MODULE_4__.store).getCurrentPostType(),
    taxonomies: select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.store).getTaxonomies({
      per_page: -1
    })
  };
})])(PostTaxonomiesCheck));


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/post-taxonomies/flat-term-selector.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/post-taxonomies/flat-term-selector.js ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/a11y */ "@wordpress/a11y");
/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_a11y__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");
/* harmony import */ var _utils_terms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/terms */ "./node_modules/@wordpress/editor/build-module/utils/terms.js");
/* harmony import */ var _most_used_terms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./most-used-terms */ "./node_modules/@wordpress/editor/build-module/components/post-taxonomies/most-used-terms.js");


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
 * Shared reference to an empty array for cases where it is important to avoid
 * returning a new array reference on every invocation.
 *
 * @type {Array<any>}
 */

const EMPTY_ARRAY = [];
/**
 * Module constants
 */

const MAX_TERMS_SUGGESTIONS = 20;
const DEFAULT_QUERY = {
  per_page: MAX_TERMS_SUGGESTIONS,
  orderby: 'count',
  order: 'desc',
  _fields: 'id,name',
  context: 'view'
};

const isSameTermName = (termA, termB) => (0,_utils_terms__WEBPACK_IMPORTED_MODULE_11__.unescapeString)(termA).toLowerCase() === (0,_utils_terms__WEBPACK_IMPORTED_MODULE_11__.unescapeString)(termB).toLowerCase();

const termNamesToIds = (names, terms) => {
  return names.map(termName => (0,lodash__WEBPACK_IMPORTED_MODULE_1__.find)(terms, term => isSameTermName(term.name, termName)).id);
}; // Tries to create a term or fetch it if it already exists.


function findOrCreateTerm(termName, restBase) {
  const escapedTermName = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.escape)(termName);
  return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_7___default()({
    path: `/wp/v2/${restBase}`,
    method: 'POST',
    data: {
      name: escapedTermName
    }
  }).catch(error => {
    const errorCode = error.code;

    if (errorCode === 'term_exists') {
      // If the terms exist, fetch it instead of creating a new one.
      const addRequest = _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_7___default()({
        path: (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_8__.addQueryArgs)(`/wp/v2/${restBase}`, { ...DEFAULT_QUERY,
          search: escapedTermName
        })
      }).then(_utils_terms__WEBPACK_IMPORTED_MODULE_11__.unescapeTerms);
      return addRequest.then(searchResult => {
        return (0,lodash__WEBPACK_IMPORTED_MODULE_1__.find)(searchResult, result => isSameTermName(result.name, termName));
      });
    }

    return Promise.reject(error);
  }).then(_utils_terms__WEBPACK_IMPORTED_MODULE_11__.unescapeTerm);
}

function FlatTermSelector(_ref) {
  let {
    slug
  } = _ref;
  const [values, setValues] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [search, setSearch] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const debouncedSearch = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__.useDebounce)(setSearch, 500);
  const {
    terms,
    termIds,
    taxonomy,
    hasAssignAction,
    hasCreateAction,
    hasResolvedTerms
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    const {
      getCurrentPost,
      getEditedPostAttribute
    } = select(_store__WEBPACK_IMPORTED_MODULE_10__.store);
    const {
      getEntityRecords,
      getTaxonomy,
      hasFinishedResolution
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.store);
    const post = getCurrentPost();

    const _taxonomy = getTaxonomy(slug);

    const _termIds = _taxonomy ? getEditedPostAttribute(_taxonomy.rest_base) : EMPTY_ARRAY;

    const query = { ...DEFAULT_QUERY,
      include: _termIds.join(','),
      per_page: -1
    };
    return {
      hasCreateAction: _taxonomy ? (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(post, ['_links', 'wp:action-create-' + _taxonomy.rest_base], false) : false,
      hasAssignAction: _taxonomy ? (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(post, ['_links', 'wp:action-assign-' + _taxonomy.rest_base], false) : false,
      taxonomy: _taxonomy,
      termIds: _termIds,
      terms: _termIds.length ? getEntityRecords('taxonomy', slug, query) : EMPTY_ARRAY,
      hasResolvedTerms: hasFinishedResolution('getEntityRecords', ['taxonomy', slug, query])
    };
  }, [slug]);
  const {
    searchResults
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    const {
      getEntityRecords
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.store);
    return {
      searchResults: !!search ? getEntityRecords('taxonomy', slug, { ...DEFAULT_QUERY,
        search
      }) : EMPTY_ARRAY
    };
  }, [search]); // Update terms state only after the selectors are resolved.
  // We're using this to avoid terms temporarily disappearing on slow networks
  // while core data makes REST API requests.

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (hasResolvedTerms) {
      const newValues = (terms !== null && terms !== void 0 ? terms : []).map(term => (0,_utils_terms__WEBPACK_IMPORTED_MODULE_11__.unescapeString)(term.name));
      setValues(newValues);
    }
  }, [terms, hasResolvedTerms]);
  const suggestions = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return (searchResults !== null && searchResults !== void 0 ? searchResults : []).map(term => (0,_utils_terms__WEBPACK_IMPORTED_MODULE_11__.unescapeString)(term.name));
  }, [searchResults]);
  const {
    editPost
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_10__.store);

  if (!hasAssignAction) {
    return null;
  }

  function onUpdateTerms(newTermIds) {
    editPost({
      [taxonomy.rest_base]: newTermIds
    });
  }

  function onChange(termNames) {
    const availableTerms = [...(terms !== null && terms !== void 0 ? terms : []), ...(searchResults !== null && searchResults !== void 0 ? searchResults : [])];
    const uniqueTerms = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.uniqBy)(termNames, term => term.toLowerCase());
    const newTermNames = uniqueTerms.filter(termName => !(0,lodash__WEBPACK_IMPORTED_MODULE_1__.find)(availableTerms, term => isSameTermName(term.name, termName))); // Optimistically update term values.
    // The selector will always re-fetch terms later.

    setValues(uniqueTerms);

    if (newTermNames.length === 0) {
      return onUpdateTerms(termNamesToIds(uniqueTerms, availableTerms));
    }

    if (!hasCreateAction) {
      return;
    }

    Promise.all(newTermNames.map(termName => findOrCreateTerm(termName, taxonomy.rest_base))).then(newTerms => {
      const newAvailableTerms = availableTerms.concat(newTerms);
      return onUpdateTerms(termNamesToIds(uniqueTerms, newAvailableTerms));
    });
  }

  function appendTerm(newTerm) {
    if (termIds.includes(newTerm.id)) {
      return;
    }

    const newTermIds = [...termIds, newTerm.id];
    const termAddedMessage = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)(
    /* translators: %s: term name. */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('%s added', 'term'), (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(taxonomy, ['labels', 'singular_name'], slug === 'post_tag' ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tag') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Term')));
    (0,_wordpress_a11y__WEBPACK_IMPORTED_MODULE_9__.speak)(termAddedMessage, 'assertive');
    onUpdateTerms(newTermIds);
  }

  const newTermLabel = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(taxonomy, ['labels', 'add_new_item'], slug === 'post_tag' ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add new tag') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add new Term'));
  const singularName = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(taxonomy, ['labels', 'singular_name'], slug === 'post_tag' ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tag') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Term'));
  const termAddedLabel = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)(
  /* translators: %s: term name. */
  (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('%s added', 'term'), singularName);
  const termRemovedLabel = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)(
  /* translators: %s: term name. */
  (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('%s removed', 'term'), singularName);
  const removeTermLabel = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)(
  /* translators: %s: term name. */
  (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('Remove %s', 'term'), singularName);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FormTokenField, {
    value: values,
    suggestions: suggestions,
    onChange: onChange,
    onInputChange: debouncedSearch,
    maxSuggestions: MAX_TERMS_SUGGESTIONS,
    label: newTermLabel,
    messages: {
      added: termAddedLabel,
      removed: termRemovedLabel,
      remove: removeTermLabel
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_most_used_terms__WEBPACK_IMPORTED_MODULE_12__["default"], {
    taxonomy: taxonomy,
    onSelect: appendTerm
  }));
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.withFilters)('editor.PostTaxonomyType')(FlatTermSelector));


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/post-taxonomies/hierarchical-term-selector.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/post-taxonomies/hierarchical-term-selector.js ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findTerm": function() { return /* binding */ findTerm; },
/* harmony export */   "getFilterMatcher": function() { return /* binding */ getFilterMatcher; },
/* harmony export */   "sortBySelected": function() { return /* binding */ sortBySelected; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/a11y */ "@wordpress/a11y");
/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_a11y__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_terms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/terms */ "./node_modules/@wordpress/editor/build-module/utils/terms.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");


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
 * Module Constants
 */

const DEFAULT_QUERY = {
  per_page: -1,
  orderby: 'name',
  order: 'asc',
  _fields: 'id,name,parent',
  context: 'view'
};
const MIN_TERMS_COUNT_FOR_FILTER = 8;
const EMPTY_ARRAY = [];
/**
 * Sort Terms by Selected.
 *
 * @param {Object[]} termsTree Array of terms in tree format.
 * @param {number[]} terms     Selected terms.
 *
 * @return {Object[]} Sorted array of terms.
 */

function sortBySelected(termsTree, terms) {
  const treeHasSelection = termTree => {
    if (terms.indexOf(termTree.id) !== -1) {
      return true;
    }

    if (undefined === termTree.children) {
      return false;
    }

    return termTree.children.map(treeHasSelection).filter(child => child).length > 0;
  };

  const termOrChildIsSelected = (termA, termB) => {
    const termASelected = treeHasSelection(termA);
    const termBSelected = treeHasSelection(termB);

    if (termASelected === termBSelected) {
      return 0;
    }

    if (termASelected && !termBSelected) {
      return -1;
    }

    if (!termASelected && termBSelected) {
      return 1;
    }

    return 0;
  };

  const newTermTree = [...termsTree];
  newTermTree.sort(termOrChildIsSelected);
  return newTermTree;
}
/**
 * Find term by parent id or name.
 *
 * @param {Object[]}      terms  Array of Terms.
 * @param {number|string} parent id.
 * @param {string}        name   Term name.
 * @return {Object} Term object.
 */

function findTerm(terms, parent, name) {
  return (0,lodash__WEBPACK_IMPORTED_MODULE_1__.find)(terms, term => {
    return (!term.parent && !parent || parseInt(term.parent) === parseInt(parent)) && term.name.toLowerCase() === name.toLowerCase();
  });
}
/**
 * Get filter matcher function.
 *
 * @param {string} filterValue Filter value.
 * @return {(function(Object): (Object|boolean))} Matcher function.
 */

function getFilterMatcher(filterValue) {
  const matchTermsForFilter = originalTerm => {
    if ('' === filterValue) {
      return originalTerm;
    } // Shallow clone, because we'll be filtering the term's children and
    // don't want to modify the original term.


    const term = { ...originalTerm
    }; // Map and filter the children, recursive so we deal with grandchildren
    // and any deeper levels.

    if (term.children.length > 0) {
      term.children = term.children.map(matchTermsForFilter).filter(child => child);
    } // If the term's name contains the filterValue, or it has children
    // (i.e. some child matched at some point in the tree) then return it.


    if (-1 !== term.name.toLowerCase().indexOf(filterValue.toLowerCase()) || term.children.length > 0) {
      return term;
    } // Otherwise, return false. After mapping, the list of terms will need
    // to have false values filtered out.


    return false;
  };

  return matchTermsForFilter;
}
/**
 * Hierarchical term selector.
 *
 * @param {Object} props      Component props.
 * @param {string} props.slug Taxonomy slug.
 * @return {WPElement}        Hierarchical term selector component.
 */

function HierarchicalTermSelector(_ref) {
  let {
    slug
  } = _ref;
  const [adding, setAdding] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [formName, setFormName] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  /**
   * @type {[number|'', Function]}
   */

  const [formParent, setFormParent] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [showForm, setShowForm] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [filterValue, setFilterValue] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [filteredTermsTree, setFilteredTermsTree] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const debouncedSpeak = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__.useDebounce)(_wordpress_a11y__WEBPACK_IMPORTED_MODULE_7__.speak, 500);
  const {
    hasCreateAction,
    hasAssignAction,
    terms,
    loading,
    availableTerms,
    taxonomy
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    const {
      getCurrentPost,
      getEditedPostAttribute
    } = select(_store__WEBPACK_IMPORTED_MODULE_8__.store);
    const {
      getTaxonomy,
      getEntityRecords,
      isResolving
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__.store);

    const _taxonomy = getTaxonomy(slug);

    return {
      hasCreateAction: _taxonomy ? (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(getCurrentPost(), ['_links', 'wp:action-create-' + _taxonomy.rest_base], false) : false,
      hasAssignAction: _taxonomy ? (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(getCurrentPost(), ['_links', 'wp:action-assign-' + _taxonomy.rest_base], false) : false,
      terms: _taxonomy ? getEditedPostAttribute(_taxonomy.rest_base) : EMPTY_ARRAY,
      loading: isResolving('getEntityRecords', ['taxonomy', slug, DEFAULT_QUERY]),
      availableTerms: getEntityRecords('taxonomy', slug, DEFAULT_QUERY) || EMPTY_ARRAY,
      taxonomy: _taxonomy
    };
  }, [slug]);
  const {
    editPost
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_8__.store);
  const {
    saveEntityRecord
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__.store);
  const availableTermsTree = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => sortBySelected((0,_utils_terms__WEBPACK_IMPORTED_MODULE_9__.buildTermsTree)(availableTerms), terms), // Remove `terms` from the dependency list to avoid reordering every time
  // checking or unchecking a term.
  [availableTerms]);

  if (!hasAssignAction) {
    return null;
  }
  /**
   * Append new term.
   *
   * @param {Object} term Term object.
   * @return {Promise} A promise that resolves to save term object.
   */


  const addTerm = term => {
    return saveEntityRecord('taxonomy', slug, term);
  };
  /**
   * Update terms for post.
   *
   * @param {number[]} termIds Term ids.
   */


  const onUpdateTerms = termIds => {
    editPost({
      [taxonomy.rest_base]: termIds
    });
  };
  /**
   * Handler for checking term.
   *
   * @param {number} termId
   */


  const onChange = termId => {
    const hasTerm = terms.includes(termId);
    const newTerms = hasTerm ? (0,lodash__WEBPACK_IMPORTED_MODULE_1__.without)(terms, termId) : [...terms, termId];
    onUpdateTerms(newTerms);
  };

  const onChangeFormName = value => {
    setFormName(value);
  };
  /**
   * Handler for changing form parent.
   *
   * @param {number|''} parentId Parent post id.
   */


  const onChangeFormParent = parentId => {
    setFormParent(parentId);
  };

  const onToggleForm = () => {
    setShowForm(!showForm);
  };

  const onAddTerm = async event => {
    event.preventDefault();

    if (formName === '' || adding) {
      return;
    } // Check if the term we are adding already exists.


    const existingTerm = findTerm(availableTerms, formParent, formName);

    if (existingTerm) {
      // If the term we are adding exists but is not selected select it.
      if (!(0,lodash__WEBPACK_IMPORTED_MODULE_1__.some)(terms, term => term === existingTerm.id)) {
        onUpdateTerms([...terms, existingTerm.id]);
      }

      setFormName('');
      setFormParent('');
      return;
    }

    setAdding(true);
    const newTerm = await addTerm({
      name: formName,
      parent: formParent ? formParent : undefined
    });
    const termAddedMessage = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)(
    /* translators: %s: taxonomy name */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('%s added', 'term'), (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(taxonomy, ['labels', 'singular_name'], slug === 'category' ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Category') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Term')));
    (0,_wordpress_a11y__WEBPACK_IMPORTED_MODULE_7__.speak)(termAddedMessage, 'assertive');
    setAdding(false);
    setFormName('');
    setFormParent('');
    onUpdateTerms([...terms, newTerm.id]);
  };

  const setFilter = value => {
    const newFilteredTermsTree = availableTermsTree.map(getFilterMatcher(value)).filter(term => term);

    const getResultCount = termsTree => {
      let count = 0;

      for (let i = 0; i < termsTree.length; i++) {
        count++;

        if (undefined !== termsTree[i].children) {
          count += getResultCount(termsTree[i].children);
        }
      }

      return count;
    };

    setFilterValue(value);
    setFilteredTermsTree(newFilteredTermsTree);
    const resultCount = getResultCount(newFilteredTermsTree);
    const resultsFoundMessage = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)(
    /* translators: %d: number of results */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._n)('%d result found.', '%d results found.', resultCount), resultCount);
    debouncedSpeak(resultsFoundMessage, 'assertive');
  };

  const renderTerms = renderedTerms => {
    return renderedTerms.map(term => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        key: term.id,
        className: "editor-post-taxonomies__hierarchical-terms-choice"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CheckboxControl, {
        checked: terms.indexOf(term.id) !== -1,
        onChange: () => {
          const termId = parseInt(term.id, 10);
          onChange(termId);
        },
        label: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.unescape)(term.name)
      }), !!term.children.length && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "editor-post-taxonomies__hierarchical-terms-subchoices"
      }, renderTerms(term.children)));
    });
  };

  const labelWithFallback = (labelProperty, fallbackIsCategory, fallbackIsNotCategory) => (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(taxonomy, ['labels', labelProperty], slug === 'category' ? fallbackIsCategory : fallbackIsNotCategory);

  const newTermButtonLabel = labelWithFallback('add_new_item', (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add new category'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add new term'));
  const newTermLabel = labelWithFallback('new_item_name', (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add new category'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add new term'));
  const parentSelectLabel = labelWithFallback('parent_item', (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Parent Category'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Parent Term'));
  const noParentOption = `— ${parentSelectLabel} —`;
  const newTermSubmitLabel = newTermButtonLabel;
  const filterLabel = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(taxonomy, ['labels', 'search_items'], (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Search Terms'));
  const groupLabel = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(taxonomy, ['name'], (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Terms'));
  const showFilter = availableTerms.length >= MIN_TERMS_COUNT_FOR_FILTER;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, showFilter && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    className: "editor-post-taxonomies__hierarchical-terms-filter",
    label: filterLabel,
    value: filterValue,
    onChange: setFilter
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "editor-post-taxonomies__hierarchical-terms-list",
    tabIndex: "0",
    role: "group",
    "aria-label": groupLabel
  }, renderTerms('' !== filterValue ? filteredTermsTree : availableTermsTree)), !loading && hasCreateAction && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    onClick: onToggleForm,
    className: "editor-post-taxonomies__hierarchical-terms-add",
    "aria-expanded": showForm,
    variant: "link"
  }, newTermButtonLabel), showForm && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
    onSubmit: onAddTerm
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    className: "editor-post-taxonomies__hierarchical-terms-input",
    label: newTermLabel,
    value: formName,
    onChange: onChangeFormName,
    required: true
  }), !!availableTerms.length && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TreeSelect, {
    label: parentSelectLabel,
    noOptionLabel: noParentOption,
    onChange: onChangeFormParent,
    selectedId: formParent,
    tree: availableTermsTree
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    variant: "secondary",
    type: "submit",
    className: "editor-post-taxonomies__hierarchical-terms-submit"
  }, newTermSubmitLabel)));
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.withFilters)('editor.PostTaxonomyType')(HierarchicalTermSelector));


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/post-taxonomies/index.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/post-taxonomies/index.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostTaxonomies": function() { return /* binding */ PostTaxonomies; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hierarchical_term_selector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hierarchical-term-selector */ "./node_modules/@wordpress/editor/build-module/components/post-taxonomies/hierarchical-term-selector.js");
/* harmony import */ var _flat_term_selector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./flat-term-selector */ "./node_modules/@wordpress/editor/build-module/components/post-taxonomies/flat-term-selector.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */




function PostTaxonomies(_ref) {
  let {
    postType,
    taxonomies,
    taxonomyWrapper = lodash__WEBPACK_IMPORTED_MODULE_1__.identity
  } = _ref;
  const availableTaxonomies = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.filter)(taxonomies, taxonomy => (0,lodash__WEBPACK_IMPORTED_MODULE_1__.includes)(taxonomy.types, postType));
  const visibleTaxonomies = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.filter)(availableTaxonomies, // In some circumstances .visibility can end up as undefined so optional chaining operator required.
  // https://github.com/WordPress/gutenberg/issues/40326
  taxonomy => {
    var _taxonomy$visibility;

    return (_taxonomy$visibility = taxonomy.visibility) === null || _taxonomy$visibility === void 0 ? void 0 : _taxonomy$visibility.show_ui;
  });
  return visibleTaxonomies.map(taxonomy => {
    const TaxonomyComponent = taxonomy.hierarchical ? _hierarchical_term_selector__WEBPACK_IMPORTED_MODULE_6__["default"] : _flat_term_selector__WEBPACK_IMPORTED_MODULE_7__["default"];
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: `taxonomy-${taxonomy.slug}`
    }, taxonomyWrapper((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TaxonomyComponent, {
      slug: taxonomy.slug
    }), taxonomy));
  });
}
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.compose)([(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.withSelect)(select => {
  return {
    postType: select(_store__WEBPACK_IMPORTED_MODULE_5__.store).getCurrentPostType(),
    taxonomies: select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.store).getTaxonomies({
      per_page: -1
    })
  };
})])(PostTaxonomies));


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/post-taxonomies/most-used-terms.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/post-taxonomies/most-used-terms.js ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MostUsedTerms; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_terms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/terms */ "./node_modules/@wordpress/editor/build-module/utils/terms.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


const MIN_MOST_USED_TERMS = 3;
const DEFAULT_QUERY = {
  per_page: 10,
  orderby: 'count',
  order: 'desc',
  hide_empty: true,
  _fields: 'id,name,count',
  context: 'view'
};
function MostUsedTerms(_ref) {
  let {
    onSelect,
    taxonomy
  } = _ref;
  const {
    _terms,
    showTerms
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    const mostUsedTerms = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.store).getEntityRecords('taxonomy', taxonomy.slug, DEFAULT_QUERY);
    return {
      _terms: mostUsedTerms,
      showTerms: (mostUsedTerms === null || mostUsedTerms === void 0 ? void 0 : mostUsedTerms.length) >= MIN_MOST_USED_TERMS
    };
  }, []);

  if (!showTerms) {
    return null;
  }

  const terms = (0,_utils_terms__WEBPACK_IMPORTED_MODULE_5__.unescapeTerms)(_terms);
  const label = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(taxonomy, ['labels', 'most_used']);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "editor-post-taxonomies__flat-term-most-used"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "editor-post-taxonomies__flat-term-most-used-label"
  }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    role: "list",
    className: "editor-post-taxonomies__flat-term-most-used-list"
  }, terms.map(term => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    key: term.id
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "link",
    onClick: () => onSelect(term)
  }, term.name)))));
}


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/post-template/index.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/post-template/index.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostTemplate": function() { return /* binding */ PostTemplate; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


function PostTemplate(_ref) {
  let {} = _ref;
  const {
    availableTemplates,
    selectedTemplate,
    isViewable
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    var _getPostType$viewable, _getPostType;

    const {
      getEditedPostAttribute,
      getEditorSettings,
      getCurrentPostType
    } = select(_store__WEBPACK_IMPORTED_MODULE_6__.store);
    const {
      getPostType
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.store);
    return {
      selectedTemplate: getEditedPostAttribute('template'),
      availableTemplates: getEditorSettings().availableTemplates,
      isViewable: (_getPostType$viewable = (_getPostType = getPostType(getCurrentPostType())) === null || _getPostType === void 0 ? void 0 : _getPostType.viewable) !== null && _getPostType$viewable !== void 0 ? _getPostType$viewable : false
    };
  }, []);
  const {
    editPost
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_6__.store);

  if (!isViewable || (0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(availableTemplates)) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Template:'),
    value: selectedTemplate,
    onChange: templateSlug => {
      editPost({
        template: templateSlug || ''
      });
    },
    options: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.map)(availableTemplates, (templateName, templateSlug) => ({
      value: templateSlug,
      label: templateName
    }))
  });
}
/* harmony default export */ __webpack_exports__["default"] = (PostTemplate);


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/post-text-editor/index.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/post-text-editor/index.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PostTextEditor; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_autosize_textarea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-autosize-textarea */ "./node_modules/react-autosize-textarea/lib/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */


function PostTextEditor() {
  const postContent = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => select(_store__WEBPACK_IMPORTED_MODULE_7__.store).getEditedPostContent(), []);
  const {
    editPost,
    resetEditorBlocks
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_7__.store);
  const [value, setValue] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(postContent);
  const [isDirty, setIsDirty] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const instanceId = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__.useInstanceId)(PostTextEditor);
  const valueRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  if (!isDirty && value !== postContent) {
    setValue(postContent);
  }
  /**
   * Handles a textarea change event to notify the onChange prop callback and
   * reflect the new value in the component's own state. This marks the start
   * of the user's edits, if not already changed, preventing future props
   * changes to value from replacing the rendered value. This is expected to
   * be followed by a reset to dirty state via `stopEditing`.
   *
   * @see stopEditing
   *
   * @param {Event} event Change event.
   */


  const onChange = event => {
    const newValue = event.target.value;
    editPost({
      content: newValue
    });
    setValue(newValue);
    setIsDirty(true);
  };
  /**
   * Function called when the user has completed their edits, responsible for
   * ensuring that changes, if made, are surfaced to the onPersist prop
   * callback and resetting dirty state.
   */


  const stopEditing = () => {
    if (isDirty) {
      const blocks = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.parse)(value);
      resetEditorBlocks(blocks);
      setIsDirty(false);
    }
  };

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    valueRef.current = value;
  }, [value]); // Ensure changes aren't lost when component unmounts.

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return () => {
      const blocks = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.parse)(valueRef.current);
      resetEditorBlocks(blocks);
    };
  }, []);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.VisuallyHidden, {
    as: "label",
    htmlFor: `post-content-${instanceId}`
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Type text or HTML')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_autosize_textarea__WEBPACK_IMPORTED_MODULE_1__["default"], {
    autoComplete: "off",
    dir: "auto",
    value: value,
    onChange: onChange,
    onBlur: stopEditing,
    className: "editor-post-text-editor",
    id: `post-content-${instanceId}`,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Start writing with text or HTML')
  }));
}


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/post-title/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/post-title/index.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PostTitle; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _post_type_support_check__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../post-type-support-check */ "./node_modules/@wordpress/editor/build-module/components/post-type-support-check/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");


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
 * Constants
 */

const REGEXP_NEWLINES = /[\r\n]+/g;
function PostTitle() {
  const ref = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const [isSelected, setIsSelected] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    editPost
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_10__.store);
  const {
    insertDefaultBlock,
    clearSelectedBlock,
    insertBlocks
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useDispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.store);
  const {
    isCleanNewPost,
    title,
    placeholder,
    isFocusMode,
    hasFixedToolbar
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => {
    const {
      getEditedPostAttribute,
      isCleanNewPost: _isCleanNewPost
    } = select(_store__WEBPACK_IMPORTED_MODULE_10__.store);
    const {
      getSettings
    } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.store);
    const {
      titlePlaceholder,
      focusMode,
      hasFixedToolbar: _hasFixedToolbar
    } = getSettings();
    return {
      isCleanNewPost: _isCleanNewPost(),
      title: getEditedPostAttribute('title'),
      placeholder: titlePlaceholder,
      isFocusMode: focusMode,
      hasFixedToolbar: _hasFixedToolbar
    };
  }, []);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!ref.current) {
      return;
    }

    const {
      ownerDocument
    } = ref.current;
    const {
      activeElement,
      body
    } = ownerDocument; // Only autofocus the title when the post is entirely empty. This should
    // only happen for a new post, which means we focus the title on new
    // post so the author can start typing right away, without needing to
    // click anything.

    if (isCleanNewPost && (!activeElement || body === activeElement)) {
      ref.current.focus();
    }
  }, [isCleanNewPost]);

  function onEnterPress() {
    insertDefaultBlock(undefined, undefined, 0);
  }

  function onInsertBlockAfter(blocks) {
    insertBlocks(blocks, 0);
  }

  function onUpdate(newTitle) {
    editPost({
      title: newTitle
    });
  }

  const [selection, setSelection] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({});

  function onSelect() {
    setIsSelected(true);
    clearSelectedBlock();
  }

  function onUnselect() {
    setIsSelected(false);
    setSelection({});
  }

  function onChange(value) {
    onUpdate(value.replace(REGEXP_NEWLINES, ' '));
  }

  function onKeyDown(event) {
    if (event.keyCode === _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4__.ENTER) {
      event.preventDefault();
      onEnterPress();
    }
  }

  function onPaste(event) {
    const clipboardData = event.clipboardData;
    let plainText = '';
    let html = ''; // IE11 only supports `Text` as an argument for `getData` and will
    // otherwise throw an invalid argument error, so we try the standard
    // arguments first, then fallback to `Text` if they fail.

    try {
      plainText = clipboardData.getData('text/plain');
      html = clipboardData.getData('text/html');
    } catch (error1) {
      try {
        html = clipboardData.getData('Text');
      } catch (error2) {
        // Some browsers like UC Browser paste plain text by default and
        // don't support clipboardData at all, so allow default
        // behaviour.
        return;
      }
    } // Allows us to ask for this information when we get a report.


    window.console.log('Received HTML:\n\n', html);
    window.console.log('Received plain text:\n\n', plainText);
    const content = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__.pasteHandler)({
      HTML: html,
      plainText
    });

    if (typeof content !== 'string' && content.length) {
      event.preventDefault();
      const [firstBlock] = content;

      if (!title && (firstBlock.name === 'core/heading' || firstBlock.name === 'core/paragraph')) {
        onUpdate(firstBlock.attributes.content);
        onInsertBlockAfter(content.slice(1));
      } else {
        onInsertBlockAfter(content);
      }
    }
  } // The wp-block className is important for editor styles.
  // This same block is used in both the visual and the code editor.


  const className = classnames__WEBPACK_IMPORTED_MODULE_1___default()('wp-block wp-block-post-title block-editor-block-list__block editor-post-title editor-post-title__input rich-text', {
    'is-selected': isSelected,
    'is-focus-mode': isFocusMode,
    'has-fixed-toolbar': hasFixedToolbar
  });

  const decodedPlaceholder = (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__.decodeEntities)(placeholder) || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add title');

  const {
    ref: richTextRef
  } = (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_8__.__unstableUseRichText)({
    value: title,
    onChange,
    placeholder: decodedPlaceholder,
    selectionStart: selection.start,
    selectionEnd: selection.end,

    onSelectionChange(newStart, newEnd) {
      setSelection(sel => {
        const {
          start,
          end
        } = sel;

        if (start === newStart && end === newEnd) {
          return sel;
        }

        return {
          start: newStart,
          end: newEnd
        };
      });
    },

    __unstableDisableFormats: true,
    preserveWhiteSpace: true
  });
  /* eslint-disable jsx-a11y/heading-has-content, jsx-a11y/no-noninteractive-element-to-interactive-role */

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_post_type_support_check__WEBPACK_IMPORTED_MODULE_11__["default"], {
    supportKeys: "title"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    ref: (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_9__.useMergeRefs)([richTextRef, ref]),
    contentEditable: true,
    className: className,
    "aria-label": decodedPlaceholder,
    role: "textbox",
    "aria-multiline": "true",
    onFocus: onSelect,
    onBlur: onUnselect,
    onKeyDown: onKeyDown,
    onKeyPress: onUnselect,
    onPaste: onPaste
  }));
  /* eslint-enable jsx-a11y/heading-has-content, jsx-a11y/no-noninteractive-element-to-interactive-role */
}


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/post-trash/check.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/post-trash/check.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



function PostTrashCheck(_ref) {
  let {
    isNew,
    postId,
    canUserDelete,
    children
  } = _ref;

  if (isNew || !postId || !canUserDelete) {
    return null;
  }

  return children;
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.withSelect)(select => {
  const {
    isEditedPostNew,
    getCurrentPostId,
    getCurrentPostType
  } = select(_store__WEBPACK_IMPORTED_MODULE_2__.store);
  const {
    getPostType,
    canUser
  } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store);
  const postId = getCurrentPostId();
  const postType = getPostType(getCurrentPostType());
  const resource = (postType === null || postType === void 0 ? void 0 : postType.rest_base) || ''; // eslint-disable-line camelcase

  return {
    isNew: isEditedPostNew(),
    postId,
    canUserDelete: postId && resource ? canUser('delete', resource, postId) : false
  };
})(PostTrashCheck));


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/post-trash/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/post-trash/index.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PostTrash; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


function PostTrash() {
  const {
    isNew,
    postId
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    const store = select(_store__WEBPACK_IMPORTED_MODULE_4__.store);
    return {
      isNew: store.isEditedPostNew(),
      postId: store.getCurrentPostId()
    };
  }, []);
  const {
    trashPost
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_4__.store);

  if (isNew || !postId) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: "editor-post-trash",
    isDestructive: true,
    variant: "secondary",
    onClick: () => trashPost()
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Move to trash'));
}


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/post-type-support-check/index.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/post-type-support-check/index.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostTypeSupportCheck": function() { return /* binding */ PostTypeSupportCheck; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");
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
 * A component which renders its own children only if the current editor post
 * type supports one of the given `supportKeys` prop.
 *
 * @param {Object}            props             Props.
 * @param {string}            [props.postType]  Current post type.
 * @param {WPElement}         props.children    Children to be rendered if post
 *                                              type supports.
 * @param {(string|string[])} props.supportKeys String or string array of keys
 *                                              to test.
 *
 * @return {WPComponent} The component to be rendered.
 */

function PostTypeSupportCheck(_ref) {
  let {
    postType,
    children,
    supportKeys
  } = _ref;
  let isSupported = true;

  if (postType) {
    isSupported = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.some)((0,lodash__WEBPACK_IMPORTED_MODULE_0__.castArray)(supportKeys), key => !!postType.supports[key]);
  }

  if (!isSupported) {
    return null;
  }

  return children;
}
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.withSelect)(select => {
  const {
    getEditedPostAttribute
  } = select(_store__WEBPACK_IMPORTED_MODULE_3__.store);
  const {
    getPostType
  } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store);
  return {
    postType: getPostType(getEditedPostAttribute('type'))
  };
})(PostTypeSupportCheck));


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/post-visibility/check.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/post-visibility/check.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostVisibilityCheck": function() { return /* binding */ PostVisibilityCheck; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


function PostVisibilityCheck(_ref) {
  let {
    hasPublishAction,
    render
  } = _ref;
  const canEdit = hasPublishAction;
  return render({
    canEdit
  });
}
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.compose)([(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.withSelect)(select => {
  const {
    getCurrentPost,
    getCurrentPostType
  } = select(_store__WEBPACK_IMPORTED_MODULE_3__.store);
  return {
    hasPublishAction: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(getCurrentPost(), ['_links', 'wp:action-publish'], false),
    postType: getCurrentPostType()
  };
})])(PostVisibilityCheck));


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/post-visibility/index.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/post-visibility/index.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostVisibility": function() { return /* binding */ PostVisibility; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./node_modules/@wordpress/editor/build-module/components/post-visibility/utils.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");



/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



class PostVisibility extends _wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(...arguments);

    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "confirmPrivate", () => {
      const {
        onUpdateVisibility,
        onSave
      } = this.props;
      onUpdateVisibility('private');
      this.setState({
        hasPassword: false,
        showPrivateConfirmDialog: false
      });
      onSave();
    });

    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleDialogCancel", () => {
      this.setState({
        showPrivateConfirmDialog: false
      });
    });

    this.setPublic = this.setPublic.bind(this);
    this.setPrivate = this.setPrivate.bind(this);
    this.setPasswordProtected = this.setPasswordProtected.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.state = {
      hasPassword: !!props.password,
      showPrivateConfirmDialog: false
    };
  }

  setPublic() {
    const {
      visibility,
      onUpdateVisibility,
      status
    } = this.props;
    onUpdateVisibility(visibility === 'private' ? 'draft' : status);
    this.setState({
      hasPassword: false
    });
  }

  setPrivate() {
    this.setState({
      showPrivateConfirmDialog: true
    });
  }

  setPasswordProtected() {
    const {
      visibility,
      onUpdateVisibility,
      status,
      password
    } = this.props;
    onUpdateVisibility(visibility === 'private' ? 'draft' : status, password || '');
    this.setState({
      hasPassword: true
    });
  }

  updatePassword(event) {
    const {
      status,
      onUpdateVisibility
    } = this.props;
    onUpdateVisibility(status, event.target.value);
  }

  render() {
    const {
      visibility,
      password,
      instanceId
    } = this.props;
    const visibilityHandlers = {
      public: {
        onSelect: this.setPublic,
        checked: visibility === 'public' && !this.state.hasPassword
      },
      private: {
        onSelect: this.setPrivate,
        checked: visibility === 'private'
      },
      password: {
        onSelect: this.setPasswordProtected,
        checked: this.state.hasPassword
      }
    };
    return [(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("fieldset", {
      key: "visibility-selector",
      className: "editor-post-visibility__dialog-fieldset"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("legend", {
      className: "editor-post-visibility__dialog-legend"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Post Visibility')), _utils__WEBPACK_IMPORTED_MODULE_7__.visibilityOptions.map(_ref => {
      let {
        value,
        label,
        info
      } = _ref;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
        key: value,
        className: "editor-post-visibility__choice"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("input", {
        type: "radio",
        name: `editor-post-visibility__setting-${instanceId}`,
        value: value,
        onChange: visibilityHandlers[value].onSelect,
        checked: visibilityHandlers[value].checked,
        id: `editor-post-${value}-${instanceId}`,
        "aria-describedby": `editor-post-${value}-${instanceId}-description`,
        className: "editor-post-visibility__dialog-radio"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("label", {
        htmlFor: `editor-post-${value}-${instanceId}`,
        className: "editor-post-visibility__dialog-label"
      }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", {
        id: `editor-post-${value}-${instanceId}-description`,
        className: "editor-post-visibility__dialog-info"
      }, info));
    })), this.state.hasPassword && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "editor-post-visibility__dialog-password",
      key: "password-selector"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.VisuallyHidden, {
      as: "label",
      htmlFor: `editor-post-visibility__dialog-password-input-${instanceId}`
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Create password')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("input", {
      className: "editor-post-visibility__dialog-password-input",
      id: `editor-post-visibility__dialog-password-input-${instanceId}`,
      type: "text",
      onChange: this.updatePassword,
      value: password,
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Use a secure password')
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalConfirmDialog, {
      key: "private-publish-confirmation",
      isOpen: this.state.showPrivateConfirmDialog,
      onConfirm: this.confirmPrivate,
      onCancel: this.handleDialogCancel
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Would you like to privately publish this post now?'))];
  }

}
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.compose)([(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.withSelect)(select => {
  const {
    getEditedPostAttribute,
    getEditedPostVisibility
  } = select(_store__WEBPACK_IMPORTED_MODULE_6__.store);
  return {
    status: getEditedPostAttribute('status'),
    visibility: getEditedPostVisibility(),
    password: getEditedPostAttribute('password')
  };
}), (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.withDispatch)(dispatch => {
  const {
    savePost,
    editPost
  } = dispatch(_store__WEBPACK_IMPORTED_MODULE_6__.store);
  return {
    onSave: savePost,

    onUpdateVisibility(status) {
      let password = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      editPost({
        status,
        password
      });
    }

  };
}), _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.withInstanceId])(PostVisibility));


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/post-visibility/label.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/post-visibility/label.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./node_modules/@wordpress/editor/build-module/components/post-visibility/utils.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




function PostVisibilityLabel(_ref) {
  let {
    visibility
  } = _ref;

  const getVisibilityLabel = () => (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(_utils__WEBPACK_IMPORTED_MODULE_3__.visibilityOptions, {
    value: visibility
  }).label;

  return getVisibilityLabel(visibility);
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.withSelect)(select => ({
  visibility: select(_store__WEBPACK_IMPORTED_MODULE_2__.store).getEditedPostVisibility()
}))(PostVisibilityLabel));


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/post-visibility/utils.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/post-visibility/utils.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "visibilityOptions": function() { return /* binding */ visibilityOptions; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

const visibilityOptions = [{
  value: 'public',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Public'),
  info: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Visible to everyone.')
}, {
  value: 'private',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Private'),
  info: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Only visible to site admins and editors.')
}, {
  value: 'password',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Password Protected'),
  info: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Protected with a password you choose. Only those with the password can view this post.')
}];


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/provider/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/provider/index.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_reusable_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/reusable-blocks */ "@wordpress/reusable-blocks");
/* harmony import */ var _wordpress_reusable_blocks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_reusable_blocks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _with_registry_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./with-registry-provider */ "./node_modules/@wordpress/editor/build-module/components/provider/with-registry-provider.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");
/* harmony import */ var _use_block_editor_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./use-block-editor-settings */ "./node_modules/@wordpress/editor/build-module/components/provider/use-block-editor-settings.js");


/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */





function EditorProvider(_ref) {
  let {
    __unstableTemplate,
    post,
    settings,
    recovery,
    initialEdits,
    children
  } = _ref;
  const defaultBlockContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (post.type === 'wp_template') {
      return {};
    }

    return {
      postId: post.id,
      postType: post.type
    };
  }, [post.id, post.type]);
  const {
    selection,
    isReady
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    const {
      getEditorSelection,
      __unstableIsEditorReady
    } = select(_store__WEBPACK_IMPORTED_MODULE_7__.store);
    return {
      isReady: __unstableIsEditorReady(),
      selection: getEditorSelection()
    };
  }, []);
  const {
    id,
    type
  } = __unstableTemplate !== null && __unstableTemplate !== void 0 ? __unstableTemplate : post;
  const [blocks, onInput, onChange] = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.useEntityBlockEditor)('postType', type, {
    id
  });
  const editorSettings = (0,_use_block_editor_settings__WEBPACK_IMPORTED_MODULE_8__["default"])(settings, !!__unstableTemplate);
  const {
    updatePostLock,
    setupEditor,
    updateEditorSettings,
    __experimentalTearDownEditor
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_7__.store);
  const {
    createWarningNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_6__.store); // Initialize and tear down the editor.
  // Ideally this should be synced on each change and not just something you do once.

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    // Assume that we don't need to initialize in the case of an error recovery.
    if (recovery) {
      return;
    }

    updatePostLock(settings.postLock);
    setupEditor(post, initialEdits, settings.template);

    if (settings.autosave) {
      createWarningNotice((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('There is an autosave of this post that is more recent than the version below.'), {
        id: 'autosave-exists',
        actions: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('View the autosave'),
          url: settings.autosave.editLink
        }]
      });
    }

    return () => {
      __experimentalTearDownEditor();
    };
  }, []); // Synchronize the editor settings as they change.

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    updateEditorSettings(settings);
  }, [settings]);

  if (!isReady) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.EntityProvider, {
    kind: "root",
    type: "site"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.EntityProvider, {
    kind: "postType",
    type: post.type,
    id: post.id
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.BlockContextProvider, {
    value: defaultBlockContext
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.BlockEditorProvider, {
    value: blocks,
    onChange: onChange,
    onInput: onInput,
    selection: selection,
    settings: editorSettings,
    useSubRegistry: false
  }, children, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_reusable_blocks__WEBPACK_IMPORTED_MODULE_5__.ReusableBlocksMenuItems, null)))));
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_with_registry_provider__WEBPACK_IMPORTED_MODULE_9__["default"])(EditorProvider));


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/provider/use-block-editor-settings.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/provider/use-block-editor-settings.js ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "./node_modules/@wordpress/editor/build-module/utils/media-upload/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");
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
 * React hook used to compute the block editor settings to use for the post editor.
 *
 * @param {Object}  settings    EditorProvider settings prop.
 * @param {boolean} hasTemplate Whether template mode is enabled.
 *
 * @return {Object} Block Editor Settings.
 */

function useBlockEditorSettings(settings, hasTemplate) {
  var _settings$__experimen, _settings$__experimen2;

  const {
    reusableBlocks,
    hasUploadPermissions,
    canUseUnfilteredHTML,
    userCanCreatePages,
    pageOnFront
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    const {
      canUserUseUnfilteredHTML
    } = select(_store__WEBPACK_IMPORTED_MODULE_5__.store);
    const isWeb = _wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Platform.OS === 'web';
    const {
      canUser,
      getEntityRecord
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.store);
    const siteSettings = getEntityRecord('root', 'site');
    return {
      canUseUnfilteredHTML: canUserUseUnfilteredHTML(),
      reusableBlocks: isWeb ? select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.store).getEntityRecords('postType', 'wp_block', {
        per_page: -1
      }) : [],
      // Reusable blocks are fetched in the native version of this hook.
      hasUploadPermissions: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.defaultTo)(canUser('create', 'media'), true),
      userCanCreatePages: canUser('create', 'pages'),
      pageOnFront: siteSettings === null || siteSettings === void 0 ? void 0 : siteSettings.page_on_front
    };
  }, []);
  const settingsBlockPatterns = (_settings$__experimen = settings.__experimentalAdditionalBlockPatterns) !== null && _settings$__experimen !== void 0 ? _settings$__experimen : // WP 6.0
  settings.__experimentalBlockPatterns; // WP 5.9

  const settingsBlockPatternCategories = (_settings$__experimen2 = settings.__experimentalAdditionalBlockPatternCategories) !== null && _settings$__experimen2 !== void 0 ? _settings$__experimen2 : // WP 6.0
  settings.__experimentalBlockPatternCategories; // WP 5.9

  const {
    restBlockPatterns,
    restBlockPatternCategories
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => ({
    restBlockPatterns: select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.store).getBlockPatterns(),
    restBlockPatternCategories: select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.store).getBlockPatternCategories()
  }), []);
  const blockPatterns = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,lodash__WEBPACK_IMPORTED_MODULE_0__.unionBy)(settingsBlockPatterns, restBlockPatterns, 'name'), [settingsBlockPatterns, restBlockPatterns]);
  const blockPatternCategories = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,lodash__WEBPACK_IMPORTED_MODULE_0__.unionBy)(settingsBlockPatternCategories, restBlockPatternCategories, 'name'), [settingsBlockPatternCategories, restBlockPatternCategories]);
  const {
    undo
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_5__.store);
  const {
    saveEntityRecord
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.store);
  /**
   * Creates a Post entity.
   * This is utilised by the Link UI to allow for on-the-fly creation of Posts/Pages.
   *
   * @param {Object} options parameters for the post being created. These mirror those used on 3rd param of saveEntityRecord.
   * @return {Object} the post type object that was created.
   */

  const createPageEntity = options => {
    if (!userCanCreatePages) {
      return Promise.reject({
        message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('You do not have permission to create Pages.')
      });
    }

    return saveEntityRecord('postType', 'page', options);
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => ({ ...(0,lodash__WEBPACK_IMPORTED_MODULE_0__.pick)(settings, ['__experimentalBlockDirectory', '__experimentalDiscussionSettings', '__experimentalFeatures', '__experimentalPreferredStyleVariations', '__experimentalSetIsInserterOpened', '__unstableGalleryWithImageBlocks', 'alignWide', 'allowedBlockTypes', 'bodyPlaceholder', 'canLockBlocks', 'codeEditingEnabled', 'colors', 'disableCustomColors', 'disableCustomFontSizes', 'disableCustomGradients', 'enableCustomLineHeight', 'enableCustomSpacing', 'enableCustomUnits', 'focusMode', 'fontSizes', 'gradients', 'generateAnchors', 'hasFixedToolbar', 'hasReducedUI', 'imageDefaultSize', 'imageDimensions', 'imageEditing', 'imageSizes', 'isRTL', 'keepCaretInsideBlock', 'maxWidth', 'onUpdateDefaultBlockStyles', 'styles', 'template', 'templateLock', 'titlePlaceholder', 'supportsLayout', 'widgetTypesToHideFromLegacyWidgetBlock', '__unstableResolvedAssets']),
    mediaUpload: hasUploadPermissions ? _utils__WEBPACK_IMPORTED_MODULE_6__["default"] : undefined,
    __experimentalReusableBlocks: reusableBlocks,
    __experimentalBlockPatterns: blockPatterns,
    __experimentalBlockPatternCategories: blockPatternCategories,
    __experimentalFetchLinkSuggestions: (search, searchOptions) => (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.__experimentalFetchLinkSuggestions)(search, searchOptions, settings),
    __experimentalFetchRichUrlData: _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.__experimentalFetchUrlData,
    __experimentalCanUserUseUnfilteredHTML: canUseUnfilteredHTML,
    __experimentalUndo: undo,
    outlineMode: hasTemplate,
    __experimentalCreatePageEntity: createPageEntity,
    __experimentalUserCanCreatePages: userCanCreatePages,
    pageOnFront,
    __experimentalPreferPatternsOnRoot: hasTemplate
  }), [settings, hasUploadPermissions, reusableBlocks, blockPatterns, blockPatternCategories, canUseUnfilteredHTML, undo, hasTemplate, userCanCreatePages, pageOnFront]);
}

/* harmony default export */ __webpack_exports__["default"] = (useBlockEditorSettings);


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/provider/with-registry-provider.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/provider/with-registry-provider.js ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


const withRegistryProvider = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.createHigherOrderComponent)(WrappedComponent => (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.withRegistry)(props => {
  const {
    useSubRegistry = true,
    registry,
    ...additionalProps
  } = props;

  if (!useSubRegistry) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(WrappedComponent, additionalProps);
  }

  const [subRegistry, setSubRegistry] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const newRegistry = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.createRegistry)({
      'core/block-editor': _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.storeConfig
    }, registry);
    newRegistry.registerStore('core/editor', _store__WEBPACK_IMPORTED_MODULE_4__.storeConfig);
    setSubRegistry(newRegistry);
  }, [registry]);

  if (!subRegistry) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.RegistryProvider, {
    value: subRegistry
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(WrappedComponent, additionalProps));
}), 'withRegistryProvider');
/* harmony default export */ __webpack_exports__["default"] = (withRegistryProvider);


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/table-of-contents/index.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/table-of-contents/index.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/info.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _panel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./panel */ "./node_modules/@wordpress/editor/build-module/components/table-of-contents/panel.js");



/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



function TableOfContents(_ref, ref) {
  let {
    hasOutlineItemsDisabled,
    repositionDropdown,
    ...props
  } = _ref;
  const hasBlocks = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => !!select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.store).getBlockCount(), []);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Dropdown, {
    position: repositionDropdown ? 'middle right right' : 'bottom',
    className: "table-of-contents",
    contentClassName: "table-of-contents__popover",
    renderToggle: _ref2 => {
      let {
        isOpen,
        onToggle
      } = _ref2;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        ref: ref,
        onClick: hasBlocks ? onToggle : undefined,
        icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"],
        "aria-expanded": isOpen,
        "aria-haspopup": "true"
        /* translators: button label text should, if possible, be under 16 characters. */
        ,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Details'),
        tooltipPosition: "bottom",
        "aria-disabled": !hasBlocks
      }));
    },
    renderContent: _ref3 => {
      let {
        onClose
      } = _ref3;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_panel__WEBPACK_IMPORTED_MODULE_7__["default"], {
        onRequestClose: onClose,
        hasOutlineItemsDisabled: hasOutlineItemsDisabled
      });
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(TableOfContents));


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/table-of-contents/panel.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/table-of-contents/panel.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _word_count__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../word-count */ "./node_modules/@wordpress/editor/build-module/components/word-count/index.js");
/* harmony import */ var _document_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../document-outline */ "./node_modules/@wordpress/editor/build-module/components/document-outline/index.js");
/* harmony import */ var _character_count__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../character-count */ "./node_modules/@wordpress/editor/build-module/components/character-count/index.js");


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */





function TableOfContentsPanel(_ref) {
  let {
    hasOutlineItemsDisabled,
    onRequestClose
  } = _ref;
  const {
    headingCount,
    paragraphCount,
    numberOfBlocks
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    const {
      getGlobalBlockCount
    } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.store);
    return {
      headingCount: getGlobalBlockCount('core/heading'),
      paragraphCount: getGlobalBlockCount('core/paragraph'),
      numberOfBlocks: getGlobalBlockCount()
    };
  }, []);
  return (
    /*
     * Disable reason: The `list` ARIA role is redundant but
     * Safari+VoiceOver won't announce the list otherwise.
     */

    /* eslint-disable jsx-a11y/no-redundant-roles */
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "table-of-contents__wrapper",
      role: "note",
      "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Document Statistics'),
      tabIndex: "0"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
      role: "list",
      className: "table-of-contents__counts"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: "table-of-contents__count"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Characters'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "table-of-contents__number"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_character_count__WEBPACK_IMPORTED_MODULE_4__["default"], null))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: "table-of-contents__count"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Words'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_word_count__WEBPACK_IMPORTED_MODULE_5__["default"], null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: "table-of-contents__count"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Headings'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "table-of-contents__number"
    }, headingCount)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: "table-of-contents__count"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Paragraphs'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "table-of-contents__number"
    }, paragraphCount)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: "table-of-contents__count"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Blocks'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "table-of-contents__number"
    }, numberOfBlocks)))), headingCount > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      className: "table-of-contents__title"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Document Outline')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_document_outline__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onSelect: onRequestClose,
      hasOutlineItemsDisabled: hasOutlineItemsDisabled
    })))
    /* eslint-enable jsx-a11y/no-redundant-roles */

  );
}

/* harmony default export */ __webpack_exports__["default"] = (TableOfContentsPanel);


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/template-validation-notice/index.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/template-validation-notice/index.js ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);


/**
 * WordPress dependencies
 */






function TemplateValidationNotice(_ref) {
  let {
    isValid,
    ...props
  } = _ref;

  if (isValid) {
    return null;
  }

  const confirmSynchronization = () => {
    if ( // eslint-disable-next-line no-alert
    window.confirm((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Resetting the template may result in loss of content, do you want to continue?'))) {
      props.synchronizeTemplate();
    }
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Notice, {
    className: "editor-template-validation-notice",
    isDismissible: false,
    status: "warning",
    actions: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Keep it as is'),
      onClick: props.resetTemplateValidity
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Reset the template'),
      onClick: confirmSynchronization
    }]
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('The content of your post doesn’t match the template assigned to your post type.'));
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.compose)([(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.withSelect)(select => ({
  isValid: select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.store).isValidTemplate()
})), (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.withDispatch)(dispatch => {
  const {
    setTemplateValidity,
    synchronizeTemplate
  } = dispatch(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.store);
  return {
    resetTemplateValidity: () => setTemplateValidity(true),
    synchronizeTemplate
  };
})])(TemplateValidationNotice));


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/theme-support-check/index.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/theme-support-check/index.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeSupportCheck": function() { return /* binding */ ThemeSupportCheck; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


function ThemeSupportCheck(_ref) {
  let {
    themeSupports,
    children,
    postType,
    supportKeys
  } = _ref;
  const isSupported = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.some)((0,lodash__WEBPACK_IMPORTED_MODULE_0__.castArray)(supportKeys), key => {
    const supported = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(themeSupports, [key], false); // 'post-thumbnails' can be boolean or an array of post types.
    // In the latter case, we need to verify `postType` exists
    // within `supported`. If `postType` isn't passed, then the check
    // should fail.

    if ('post-thumbnails' === key && (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(supported)) {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.includes)(supported, postType);
    }

    return supported;
  });

  if (!isSupported) {
    return null;
  }

  return children;
}
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.withSelect)(select => {
  const {
    getThemeSupports
  } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store);
  const {
    getEditedPostAttribute
  } = select(_store__WEBPACK_IMPORTED_MODULE_3__.store);
  return {
    postType: getEditedPostAttribute('type'),
    themeSupports: getThemeSupports()
  };
})(ThemeSupportCheck));


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/unsaved-changes-warning/index.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/unsaved-changes-warning/index.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ UnsavedChangesWarning; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__);
/**
 * WordPress dependencies
 */




/**
 * Warns the user if there are unsaved changes before leaving the editor.
 * Compatible with Post Editor and Site Editor.
 *
 * @return {WPComponent} The component.
 */

function UnsavedChangesWarning() {
  const isDirty = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    return () => {
      const {
        __experimentalGetDirtyEntityRecords
      } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.store);

      const dirtyEntityRecords = __experimentalGetDirtyEntityRecords();

      return dirtyEntityRecords.length > 0;
    };
  }, []);
  /**
   * Warns the user if there are unsaved changes before leaving the editor.
   *
   * @param {Event} event `beforeunload` event.
   *
   * @return {?string} Warning prompt message, if unsaved changes exist.
   */

  const warnIfUnsavedChanges = event => {
    // We need to call the selector directly in the listener to avoid race
    // conditions with `BrowserURL` where `componentDidUpdate` gets the
    // new value of `isEditedPostDirty` before this component does,
    // causing this component to incorrectly think a trashed post is still dirty.
    if (isDirty()) {
      event.returnValue = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('You have unsaved changes. If you proceed, they will be lost.');
      return event.returnValue;
    }
  };

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    window.addEventListener('beforeunload', warnIfUnsavedChanges);
    return () => {
      window.removeEventListener('beforeunload', warnIfUnsavedChanges);
    };
  }, []);
  return null;
}


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/components/word-count/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/components/word-count/index.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ WordCount; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_wordcount__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/wordcount */ "@wordpress/wordcount");
/* harmony import */ var _wordpress_wordcount__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_wordcount__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


function WordCount() {
  const content = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => select(_store__WEBPACK_IMPORTED_MODULE_4__.store).getEditedPostAttribute('content'), []);
  /*
   * translators: If your word count is based on single characters (e.g. East Asian characters),
   * enter 'characters_excluding_spaces' or 'characters_including_spaces'. Otherwise, enter 'words'.
   * Do not translate into your own language.
   */

  const wordCountType = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('words', 'Word count type. Do not translate!');

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "word-count"
  }, (0,_wordpress_wordcount__WEBPACK_IMPORTED_MODULE_3__.count)(content, wordCountType));
}


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/hooks/custom-sources-backwards-compatibility.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/hooks/custom-sources-backwards-compatibility.js ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */


/** @typedef {import('@wordpress/compose').WPHigherOrderComponent} WPHigherOrderComponent */

/** @typedef {import('@wordpress/blocks').WPBlockSettings} WPBlockSettings */

/**
 * Object whose keys are the names of block attributes, where each value
 * represents the meta key to which the block attribute is intended to save.
 *
 * @see https://developer.wordpress.org/reference/functions/register_meta/
 *
 * @typedef {Object<string,string>} WPMetaAttributeMapping
 */

/**
 * Given a mapping of attribute names (meta source attributes) to their
 * associated meta key, returns a higher order component that overrides its
 * `attributes` and `setAttributes` props to sync any changes with the edited
 * post's meta keys.
 *
 * @param {WPMetaAttributeMapping} metaAttributes Meta attribute mapping.
 *
 * @return {WPHigherOrderComponent} Higher-order component.
 */

const createWithMetaAttributeSource = metaAttributes => (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__.createHigherOrderComponent)(BlockEdit => _ref => {
  let {
    attributes,
    setAttributes,
    ...props
  } = _ref;
  const postType = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => select(_store__WEBPACK_IMPORTED_MODULE_8__.store).getCurrentPostType(), []);
  const [meta, setMeta] = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.useEntityProp)('postType', postType, 'meta');
  const mergedAttributes = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => ({ ...attributes,
    ...(0,lodash__WEBPACK_IMPORTED_MODULE_2__.mapValues)(metaAttributes, metaKey => meta[metaKey])
  }), [attributes, meta]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockEdit, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    attributes: mergedAttributes,
    setAttributes: nextAttributes => {
      const nextMeta = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.mapKeys)( // Filter to intersection of keys between the updated
      // attributes and those with an associated meta key.
      (0,lodash__WEBPACK_IMPORTED_MODULE_2__.pickBy)(nextAttributes, (value, key) => metaAttributes[key]), // Rename the keys to the expected meta key name.
      (value, attributeKey) => metaAttributes[attributeKey]);

      if (!(0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(nextMeta)) {
        setMeta(nextMeta);
      }

      setAttributes(nextAttributes);
    }
  }, props));
}, 'withMetaAttributeSource');
/**
 * Filters a registered block's settings to enhance a block's `edit` component
 * to upgrade meta-sourced attributes to use the post's meta entity property.
 *
 * @param {WPBlockSettings} settings Registered block settings.
 *
 * @return {WPBlockSettings} Filtered block settings.
 */


function shimAttributeSource(settings) {
  /** @type {WPMetaAttributeMapping} */
  const metaAttributes = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.mapValues)((0,lodash__WEBPACK_IMPORTED_MODULE_2__.pickBy)(settings.attributes, {
    source: 'meta'
  }), 'meta');

  if (!(0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(metaAttributes)) {
    settings.edit = createWithMetaAttributeSource(metaAttributes)(settings.edit);
  }

  return settings;
}

(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_7__.addFilter)('blocks.registerBlockType', 'core/editor/custom-sources-backwards-compatibility/shim-attribute-source', shimAttributeSource); // The above filter will only capture blocks registered after the filter was
// added. There may already be blocks registered by this point, and those must
// be updated to apply the shim.
//
// The following implementation achieves this, albeit with a couple caveats:
// - Only blocks registered on the global store will be modified.
// - The block settings are directly mutated, since there is currently no
//   mechanism to update an existing block registration. This is the reason for
//   `getBlockType` separate from `getBlockTypes`, since the latter returns a
//   _copy_ of the block registration (i.e. the mutation would not affect the
//   actual registered block settings).
//
// `getBlockTypes` or `getBlockType` implementation could change in the future
// in regards to creating settings clones, but the corresponding end-to-end
// tests for meta blocks should cover against any potential regressions.
//
// In the future, we could support updating block settings, at which point this
// implementation could use that mechanism instead.

(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.select)(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.store).getBlockTypes().map(_ref2 => {
  let {
    name
  } = _ref2;
  return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.select)(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.store).getBlockType(name);
}).forEach(shimAttributeSource);


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/hooks/default-autocompleters.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/hooks/default-autocompleters.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ "./node_modules/@wordpress/editor/build-module/components/autocompleters/user.js");
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



function setDefaultCompleters() {
  let completers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  // Provide copies so filters may directly modify them.
  completers.push((0,lodash__WEBPACK_IMPORTED_MODULE_0__.clone)(_components__WEBPACK_IMPORTED_MODULE_2__["default"]));
  return completers;
}

(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('editor.Autocomplete.completers', 'editor/autocompleters/set-default-completers', setDefaultCompleters);


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/hooks/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/hooks/index.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _custom_sources_backwards_compatibility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-sources-backwards-compatibility */ "./node_modules/@wordpress/editor/build-module/hooks/custom-sources-backwards-compatibility.js");
/* harmony import */ var _default_autocompleters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default-autocompleters */ "./node_modules/@wordpress/editor/build-module/hooks/default-autocompleters.js");
/**
 * Internal dependencies
 */




/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/store/actions.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/store/actions.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__experimentalTearDownEditor": function() { return /* binding */ __experimentalTearDownEditor; },
/* harmony export */   "autosave": function() { return /* binding */ autosave; },
/* harmony export */   "clearSelectedBlock": function() { return /* binding */ clearSelectedBlock; },
/* harmony export */   "createUndoLevel": function() { return /* binding */ createUndoLevel; },
/* harmony export */   "disablePublishSidebar": function() { return /* binding */ disablePublishSidebar; },
/* harmony export */   "editPost": function() { return /* binding */ editPost; },
/* harmony export */   "enablePublishSidebar": function() { return /* binding */ enablePublishSidebar; },
/* harmony export */   "enterFormattedText": function() { return /* binding */ enterFormattedText; },
/* harmony export */   "exitFormattedText": function() { return /* binding */ exitFormattedText; },
/* harmony export */   "hideInsertionPoint": function() { return /* binding */ hideInsertionPoint; },
/* harmony export */   "insertBlock": function() { return /* binding */ insertBlock; },
/* harmony export */   "insertBlocks": function() { return /* binding */ insertBlocks; },
/* harmony export */   "insertDefaultBlock": function() { return /* binding */ insertDefaultBlock; },
/* harmony export */   "lockPostAutosaving": function() { return /* binding */ lockPostAutosaving; },
/* harmony export */   "lockPostSaving": function() { return /* binding */ lockPostSaving; },
/* harmony export */   "mergeBlocks": function() { return /* binding */ mergeBlocks; },
/* harmony export */   "moveBlockToPosition": function() { return /* binding */ moveBlockToPosition; },
/* harmony export */   "moveBlocksDown": function() { return /* binding */ moveBlocksDown; },
/* harmony export */   "moveBlocksUp": function() { return /* binding */ moveBlocksUp; },
/* harmony export */   "multiSelect": function() { return /* binding */ multiSelect; },
/* harmony export */   "receiveBlocks": function() { return /* binding */ receiveBlocks; },
/* harmony export */   "redo": function() { return /* binding */ redo; },
/* harmony export */   "refreshPost": function() { return /* binding */ refreshPost; },
/* harmony export */   "removeBlock": function() { return /* binding */ removeBlock; },
/* harmony export */   "removeBlocks": function() { return /* binding */ removeBlocks; },
/* harmony export */   "replaceBlock": function() { return /* binding */ replaceBlock; },
/* harmony export */   "replaceBlocks": function() { return /* binding */ replaceBlocks; },
/* harmony export */   "resetBlocks": function() { return /* binding */ resetBlocks; },
/* harmony export */   "resetEditorBlocks": function() { return /* binding */ resetEditorBlocks; },
/* harmony export */   "resetPost": function() { return /* binding */ resetPost; },
/* harmony export */   "savePost": function() { return /* binding */ savePost; },
/* harmony export */   "selectBlock": function() { return /* binding */ selectBlock; },
/* harmony export */   "setTemplateValidity": function() { return /* binding */ setTemplateValidity; },
/* harmony export */   "setupEditor": function() { return /* binding */ setupEditor; },
/* harmony export */   "setupEditorState": function() { return /* binding */ setupEditorState; },
/* harmony export */   "showInsertionPoint": function() { return /* binding */ showInsertionPoint; },
/* harmony export */   "startMultiSelect": function() { return /* binding */ startMultiSelect; },
/* harmony export */   "startTyping": function() { return /* binding */ startTyping; },
/* harmony export */   "stopMultiSelect": function() { return /* binding */ stopMultiSelect; },
/* harmony export */   "stopTyping": function() { return /* binding */ stopTyping; },
/* harmony export */   "synchronizeTemplate": function() { return /* binding */ synchronizeTemplate; },
/* harmony export */   "toggleBlockMode": function() { return /* binding */ toggleBlockMode; },
/* harmony export */   "toggleSelection": function() { return /* binding */ toggleSelection; },
/* harmony export */   "trashPost": function() { return /* binding */ trashPost; },
/* harmony export */   "undo": function() { return /* binding */ undo; },
/* harmony export */   "unlockPostAutosaving": function() { return /* binding */ unlockPostAutosaving; },
/* harmony export */   "unlockPostSaving": function() { return /* binding */ unlockPostSaving; },
/* harmony export */   "updateBlock": function() { return /* binding */ updateBlock; },
/* harmony export */   "updateBlockAttributes": function() { return /* binding */ updateBlockAttributes; },
/* harmony export */   "updateBlockListSettings": function() { return /* binding */ updateBlockListSettings; },
/* harmony export */   "updateEditorSettings": function() { return /* binding */ updateEditorSettings; },
/* harmony export */   "updatePost": function() { return /* binding */ updatePost; },
/* harmony export */   "updatePostLock": function() { return /* binding */ updatePostLock; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/deprecated */ "@wordpress/deprecated");
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./constants */ "./node_modules/@wordpress/editor/build-module/store/constants.js");
/* harmony import */ var _local_autosave__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./local-autosave */ "./node_modules/@wordpress/editor/build-module/store/local-autosave.js");
/* harmony import */ var _utils_notice_builder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/notice-builder */ "./node_modules/@wordpress/editor/build-module/store/utils/notice-builder.js");
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
 * Returns an action generator used in signalling that editor has initialized with
 * the specified post object and editor settings.
 *
 * @param {Object} post     Post object.
 * @param {Object} edits    Initial edited attributes object.
 * @param {Array?} template Block Template.
 */

const setupEditor = (post, edits, template) => _ref => {
  let {
    dispatch
  } = _ref;
  dispatch.setupEditorState(post); // Apply a template for new posts only, if exists.

  const isNewPost = post.status === 'auto-draft';

  if (isNewPost && template) {
    // In order to ensure maximum of a single parse during setup, edits are
    // included as part of editor setup action. Assume edited content as
    // canonical if provided, falling back to post.
    let content;

    if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.has)(edits, ['content'])) {
      content = edits.content;
    } else {
      content = post.content.raw;
    }

    let blocks = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.parse)(content);
    blocks = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.synchronizeBlocksWithTemplate)(blocks, template);
    dispatch.resetEditorBlocks(blocks, {
      __unstableShouldCreateUndoLevel: false
    });
  }

  if (edits && Object.values(edits).some(_ref2 => {
    var _post$key$raw, _post$key;

    let [key, edit] = _ref2;
    return edit !== ((_post$key$raw = (_post$key = post[key]) === null || _post$key === void 0 ? void 0 : _post$key.raw) !== null && _post$key$raw !== void 0 ? _post$key$raw : post[key]);
  })) {
    dispatch.editPost(edits);
  }
};
/**
 * Returns an action object signalling that the editor is being destroyed and
 * that any necessary state or side-effect cleanup should occur.
 *
 * @return {Object} Action object.
 */

function __experimentalTearDownEditor() {
  return {
    type: 'TEAR_DOWN_EDITOR'
  };
}
/**
 * Returns an action object used in signalling that the latest version of the
 * post has been received, either by initialization or save.
 *
 * @deprecated Since WordPress 6.0.
 */

function resetPost() {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_2___default()("wp.data.dispatch( 'core/editor' ).resetPost", {
    since: '6.0',
    version: '6.3',
    alternative: 'Initialize the editor with the setupEditorState action'
  });
  return {
    type: 'DO_NOTHING'
  };
}
/**
 * Returns an action object used in signalling that a patch of updates for the
 * latest version of the post have been received.
 *
 * @return {Object} Action object.
 * @deprecated since Gutenberg 9.7.0.
 */

function updatePost() {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_2___default()("wp.data.dispatch( 'core/editor' ).updatePost", {
    since: '5.7',
    alternative: 'Use the core entities store instead'
  });
  return {
    type: 'DO_NOTHING'
  };
}
/**
 * Returns an action object used to setup the editor state when first opening
 * an editor.
 *
 * @param {Object} post Post object.
 *
 * @return {Object} Action object.
 */

function setupEditorState(post) {
  return {
    type: 'SETUP_EDITOR_STATE',
    post
  };
}
/**
 * Returns an action object used in signalling that attributes of the post have
 * been edited.
 *
 * @param {Object} edits   Post attributes to edit.
 * @param {Object} options Options for the edit.
 */

const editPost = (edits, options) => _ref3 => {
  let {
    select,
    registry
  } = _ref3;
  const {
    id,
    type
  } = select.getCurrentPost();
  registry.dispatch(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.store).editEntityRecord('postType', type, id, edits, options);
};
/**
 * Action for saving the current post in the editor.
 *
 * @param {Object} options
 */

const savePost = function () {
  let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return async _ref4 => {
    let {
      select,
      dispatch,
      registry
    } = _ref4;

    if (!select.isEditedPostSaveable()) {
      return;
    }

    const content = select.getEditedPostContent();

    if (!options.isAutosave) {
      dispatch.editPost({
        content
      }, {
        undoIgnore: true
      });
    }

    const previousRecord = select.getCurrentPost();
    const edits = {
      id: previousRecord.id,
      ...registry.select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.store).getEntityRecordNonTransientEdits('postType', previousRecord.type, previousRecord.id),
      content
    };
    dispatch({
      type: 'REQUEST_POST_UPDATE_START',
      options
    });
    await registry.dispatch(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.store).saveEntityRecord('postType', previousRecord.type, edits, options);
    dispatch({
      type: 'REQUEST_POST_UPDATE_FINISH',
      options
    });
    const error = registry.select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.store).getLastEntitySaveError('postType', previousRecord.type, previousRecord.id);

    if (error) {
      const args = (0,_utils_notice_builder__WEBPACK_IMPORTED_MODULE_8__.getNotificationArgumentsForSaveFail)({
        post: previousRecord,
        edits,
        error
      });

      if (args.length) {
        registry.dispatch(_wordpress_notices__WEBPACK_IMPORTED_MODULE_4__.store).createErrorNotice(...args);
      }
    } else {
      const updatedRecord = select.getCurrentPost();
      const args = (0,_utils_notice_builder__WEBPACK_IMPORTED_MODULE_8__.getNotificationArgumentsForSaveSuccess)({
        previousPost: previousRecord,
        post: updatedRecord,
        postType: await registry.resolveSelect(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.store).getPostType(updatedRecord.type),
        options
      });

      if (args.length) {
        registry.dispatch(_wordpress_notices__WEBPACK_IMPORTED_MODULE_4__.store).createSuccessNotice(...args);
      } // Make sure that any edits after saving create an undo level and are
      // considered for change detection.


      if (!options.isAutosave) {
        registry.dispatch(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.store).__unstableMarkLastChangeAsPersistent();
      }
    }
  };
};
/**
 * Action for refreshing the current post.
 *
 * @deprecated Since WordPress 6.0.
 */

function refreshPost() {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_2___default()("wp.data.dispatch( 'core/editor' ).refreshPost", {
    since: '6.0',
    version: '6.3',
    alternative: 'Use the core entities store instead'
  });
  return {
    type: 'DO_NOTHING'
  };
}
/**
 * Action for trashing the current post in the editor.
 */

const trashPost = () => async _ref5 => {
  let {
    select,
    dispatch,
    registry
  } = _ref5;
  const postTypeSlug = select.getCurrentPostType();
  const postType = await registry.resolveSelect(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.store).getPostType(postTypeSlug);
  registry.dispatch(_wordpress_notices__WEBPACK_IMPORTED_MODULE_4__.store).removeNotice(_constants__WEBPACK_IMPORTED_MODULE_9__.TRASH_POST_NOTICE_ID);

  try {
    const post = select.getCurrentPost();
    await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
      path: `/wp/v2/${postType.rest_base}/${post.id}`,
      method: 'DELETE'
    });
    await dispatch.savePost();
  } catch (error) {
    registry.dispatch(_wordpress_notices__WEBPACK_IMPORTED_MODULE_4__.store).createErrorNotice(...(0,_utils_notice_builder__WEBPACK_IMPORTED_MODULE_8__.getNotificationArgumentsForTrashFail)({
      error
    }));
  }
};
/**
 * Action that autosaves the current post.  This
 * includes server-side autosaving (default) and client-side (a.k.a. local)
 * autosaving (e.g. on the Web, the post might be committed to Session
 * Storage).
 *
 * @param {Object?} options Extra flags to identify the autosave.
 */

const autosave = function () {
  let {
    local = false,
    ...options
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return async _ref6 => {
    let {
      select,
      dispatch
    } = _ref6;

    if (local) {
      const post = select.getCurrentPost();
      const isPostNew = select.isEditedPostNew();
      const title = select.getEditedPostAttribute('title');
      const content = select.getEditedPostAttribute('content');
      const excerpt = select.getEditedPostAttribute('excerpt');
      (0,_local_autosave__WEBPACK_IMPORTED_MODULE_10__.localAutosaveSet)(post.id, isPostNew, title, content, excerpt);
    } else {
      await dispatch.savePost({
        isAutosave: true,
        ...options
      });
    }
  };
};
/**
 * Action that restores last popped state in undo history.
 */

const redo = () => _ref7 => {
  let {
    registry
  } = _ref7;
  registry.dispatch(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.store).redo();
};
/**
 * Action that pops a record from undo history and undoes the edit.
 */

const undo = () => _ref8 => {
  let {
    registry
  } = _ref8;
  registry.dispatch(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.store).undo();
};
/**
 * Action that creates an undo history record.
 *
 * @deprecated Since WordPress 6.0
 */

function createUndoLevel() {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_2___default()("wp.data.dispatch( 'core/editor' ).createUndoLevel", {
    since: '6.0',
    version: '6.3',
    alternative: 'Use the core entities store instead'
  });
  return {
    type: 'DO_NOTHING'
  };
}
/**
 * Action that locks the editor.
 *
 * @param {Object} lock Details about the post lock status, user, and nonce.
 * @return {Object} Action object.
 */

function updatePostLock(lock) {
  return {
    type: 'UPDATE_POST_LOCK',
    lock
  };
}
/**
 * Enable the publish sidebar.
 */

const enablePublishSidebar = () => _ref9 => {
  let {
    registry
  } = _ref9;
  registry.dispatch(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_7__.store).set('core/edit-post', 'isPublishSidebarEnabled', true);
};
/**
 * Disables the publish sidebar.
 */

const disablePublishSidebar = () => _ref10 => {
  let {
    registry
  } = _ref10;
  registry.dispatch(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_7__.store).set('core/edit-post', 'isPublishSidebarEnabled', false);
};
/**
 * Action that locks post saving.
 *
 * @param {string} lockName The lock name.
 *
 * @example
 * ```
 * const { subscribe } = wp.data;
 *
 * const initialPostStatus = wp.data.select( 'core/editor' ).getEditedPostAttribute( 'status' );
 *
 * // Only allow publishing posts that are set to a future date.
 * if ( 'publish' !== initialPostStatus ) {
 *
 * 	// Track locking.
 * 	let locked = false;
 *
 * 	// Watch for the publish event.
 * 	let unssubscribe = subscribe( () => {
 * 		const currentPostStatus = wp.data.select( 'core/editor' ).getEditedPostAttribute( 'status' );
 * 		if ( 'publish' !== currentPostStatus ) {
 *
 * 			// Compare the post date to the current date, lock the post if the date isn't in the future.
 * 			const postDate = new Date( wp.data.select( 'core/editor' ).getEditedPostAttribute( 'date' ) );
 * 			const currentDate = new Date();
 * 			if ( postDate.getTime() <= currentDate.getTime() ) {
 * 				if ( ! locked ) {
 * 					locked = true;
 * 					wp.data.dispatch( 'core/editor' ).lockPostSaving( 'futurelock' );
 * 				}
 * 			} else {
 * 				if ( locked ) {
 * 					locked = false;
 * 					wp.data.dispatch( 'core/editor' ).unlockPostSaving( 'futurelock' );
 * 				}
 * 			}
 * 		}
 * 	} );
 * }
 * ```
 *
 * @return {Object} Action object
 */

function lockPostSaving(lockName) {
  return {
    type: 'LOCK_POST_SAVING',
    lockName
  };
}
/**
 * Action that unlocks post saving.
 *
 * @param {string} lockName The lock name.
 *
 * @example
 * ```
 * // Unlock post saving with the lock key `mylock`:
 * wp.data.dispatch( 'core/editor' ).unlockPostSaving( 'mylock' );
 * ```
 *
 * @return {Object} Action object
 */

function unlockPostSaving(lockName) {
  return {
    type: 'UNLOCK_POST_SAVING',
    lockName
  };
}
/**
 * Action that locks post autosaving.
 *
 * @param {string} lockName The lock name.
 *
 * @example
 * ```
 * // Lock post autosaving with the lock key `mylock`:
 * wp.data.dispatch( 'core/editor' ).lockPostAutosaving( 'mylock' );
 * ```
 *
 * @return {Object} Action object
 */

function lockPostAutosaving(lockName) {
  return {
    type: 'LOCK_POST_AUTOSAVING',
    lockName
  };
}
/**
 * Action that unlocks post autosaving.
 *
 * @param {string} lockName The lock name.
 *
 * @example
 * ```
 * // Unlock post saving with the lock key `mylock`:
 * wp.data.dispatch( 'core/editor' ).unlockPostAutosaving( 'mylock' );
 * ```
 *
 * @return {Object} Action object
 */

function unlockPostAutosaving(lockName) {
  return {
    type: 'UNLOCK_POST_AUTOSAVING',
    lockName
  };
}
/**
 * Returns an action object used to signal that the blocks have been updated.
 *
 * @param {Array}   blocks  Block Array.
 * @param {?Object} options Optional options.
 */

const resetEditorBlocks = function (blocks) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return _ref11 => {
    let {
      select,
      dispatch,
      registry
    } = _ref11;
    const {
      __unstableShouldCreateUndoLevel,
      selection
    } = options;
    const edits = {
      blocks,
      selection
    };

    if (__unstableShouldCreateUndoLevel !== false) {
      const {
        id,
        type
      } = select.getCurrentPost();
      const noChange = registry.select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.store).getEditedEntityRecord('postType', type, id).blocks === edits.blocks;

      if (noChange) {
        registry.dispatch(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.store).__unstableCreateUndoLevel('postType', type, id);

        return;
      } // We create a new function here on every persistent edit
      // to make sure the edit makes the post dirty and creates
      // a new undo level.


      edits.content = _ref12 => {
        let {
          blocks: blocksForSerialization = []
        } = _ref12;
        return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.__unstableSerializeAndClean)(blocksForSerialization);
      };
    }

    dispatch.editPost(edits);
  };
};
/*
 * Returns an action object used in signalling that the post editor settings have been updated.
 *
 * @param {Object} settings Updated settings
 *
 * @return {Object} Action object
 */

function updateEditorSettings(settings) {
  return {
    type: 'UPDATE_EDITOR_SETTINGS',
    settings
  };
}
/**
 * Backward compatibility
 */

const getBlockEditorAction = name => function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return _ref13 => {
    let {
      registry
    } = _ref13;
    _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_2___default()("`wp.data.dispatch( 'core/editor' )." + name + '`', {
      since: '5.3',
      alternative: "`wp.data.dispatch( 'core/block-editor' )." + name + '`',
      version: '6.2'
    });
    registry.dispatch(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.store)[name](...args);
  };
};
/**
 * @see resetBlocks in core/block-editor store.
 */


const resetBlocks = getBlockEditorAction('resetBlocks');
/**
 * @see receiveBlocks in core/block-editor store.
 */

const receiveBlocks = getBlockEditorAction('receiveBlocks');
/**
 * @see updateBlock in core/block-editor store.
 */

const updateBlock = getBlockEditorAction('updateBlock');
/**
 * @see updateBlockAttributes in core/block-editor store.
 */

const updateBlockAttributes = getBlockEditorAction('updateBlockAttributes');
/**
 * @see selectBlock in core/block-editor store.
 */

const selectBlock = getBlockEditorAction('selectBlock');
/**
 * @see startMultiSelect in core/block-editor store.
 */

const startMultiSelect = getBlockEditorAction('startMultiSelect');
/**
 * @see stopMultiSelect in core/block-editor store.
 */

const stopMultiSelect = getBlockEditorAction('stopMultiSelect');
/**
 * @see multiSelect in core/block-editor store.
 */

const multiSelect = getBlockEditorAction('multiSelect');
/**
 * @see clearSelectedBlock in core/block-editor store.
 */

const clearSelectedBlock = getBlockEditorAction('clearSelectedBlock');
/**
 * @see toggleSelection in core/block-editor store.
 */

const toggleSelection = getBlockEditorAction('toggleSelection');
/**
 * @see replaceBlocks in core/block-editor store.
 */

const replaceBlocks = getBlockEditorAction('replaceBlocks');
/**
 * @see replaceBlock in core/block-editor store.
 */

const replaceBlock = getBlockEditorAction('replaceBlock');
/**
 * @see moveBlocksDown in core/block-editor store.
 */

const moveBlocksDown = getBlockEditorAction('moveBlocksDown');
/**
 * @see moveBlocksUp in core/block-editor store.
 */

const moveBlocksUp = getBlockEditorAction('moveBlocksUp');
/**
 * @see moveBlockToPosition in core/block-editor store.
 */

const moveBlockToPosition = getBlockEditorAction('moveBlockToPosition');
/**
 * @see insertBlock in core/block-editor store.
 */

const insertBlock = getBlockEditorAction('insertBlock');
/**
 * @see insertBlocks in core/block-editor store.
 */

const insertBlocks = getBlockEditorAction('insertBlocks');
/**
 * @see showInsertionPoint in core/block-editor store.
 */

const showInsertionPoint = getBlockEditorAction('showInsertionPoint');
/**
 * @see hideInsertionPoint in core/block-editor store.
 */

const hideInsertionPoint = getBlockEditorAction('hideInsertionPoint');
/**
 * @see setTemplateValidity in core/block-editor store.
 */

const setTemplateValidity = getBlockEditorAction('setTemplateValidity');
/**
 * @see synchronizeTemplate in core/block-editor store.
 */

const synchronizeTemplate = getBlockEditorAction('synchronizeTemplate');
/**
 * @see mergeBlocks in core/block-editor store.
 */

const mergeBlocks = getBlockEditorAction('mergeBlocks');
/**
 * @see removeBlocks in core/block-editor store.
 */

const removeBlocks = getBlockEditorAction('removeBlocks');
/**
 * @see removeBlock in core/block-editor store.
 */

const removeBlock = getBlockEditorAction('removeBlock');
/**
 * @see toggleBlockMode in core/block-editor store.
 */

const toggleBlockMode = getBlockEditorAction('toggleBlockMode');
/**
 * @see startTyping in core/block-editor store.
 */

const startTyping = getBlockEditorAction('startTyping');
/**
 * @see stopTyping in core/block-editor store.
 */

const stopTyping = getBlockEditorAction('stopTyping');
/**
 * @see enterFormattedText in core/block-editor store.
 */

const enterFormattedText = getBlockEditorAction('enterFormattedText');
/**
 * @see exitFormattedText in core/block-editor store.
 */

const exitFormattedText = getBlockEditorAction('exitFormattedText');
/**
 * @see insertDefaultBlock in core/block-editor store.
 */

const insertDefaultBlock = getBlockEditorAction('insertDefaultBlock');
/**
 * @see updateBlockListSettings in core/block-editor store.
 */

const updateBlockListSettings = getBlockEditorAction('updateBlockListSettings');


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/store/constants.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/store/constants.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AUTOSAVE_PROPERTIES": function() { return /* binding */ AUTOSAVE_PROPERTIES; },
/* harmony export */   "EDIT_MERGE_PROPERTIES": function() { return /* binding */ EDIT_MERGE_PROPERTIES; },
/* harmony export */   "ONE_MINUTE_IN_MS": function() { return /* binding */ ONE_MINUTE_IN_MS; },
/* harmony export */   "PERMALINK_POSTNAME_REGEX": function() { return /* binding */ PERMALINK_POSTNAME_REGEX; },
/* harmony export */   "SAVE_POST_NOTICE_ID": function() { return /* binding */ SAVE_POST_NOTICE_ID; },
/* harmony export */   "STORE_NAME": function() { return /* binding */ STORE_NAME; },
/* harmony export */   "TRASH_POST_NOTICE_ID": function() { return /* binding */ TRASH_POST_NOTICE_ID; }
/* harmony export */ });
/**
 * Set of post properties for which edits should assume a merging behavior,
 * assuming an object value.
 *
 * @type {Set}
 */
const EDIT_MERGE_PROPERTIES = new Set(['meta']);
/**
 * Constant for the store module (or reducer) key.
 *
 * @type {string}
 */

const STORE_NAME = 'core/editor';
const SAVE_POST_NOTICE_ID = 'SAVE_POST_NOTICE_ID';
const TRASH_POST_NOTICE_ID = 'TRASH_POST_NOTICE_ID';
const PERMALINK_POSTNAME_REGEX = /%(?:postname|pagename)%/;
const ONE_MINUTE_IN_MS = 60 * 1000;
const AUTOSAVE_PROPERTIES = ['title', 'excerpt', 'content'];


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/store/defaults.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/store/defaults.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EDITOR_SETTINGS_DEFAULTS": function() { return /* binding */ EDITOR_SETTINGS_DEFAULTS; }
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

/**
 * The default post editor settings.
 *
 * @property {boolean|Array} allowedBlockTypes     Allowed block types
 * @property {boolean}       richEditingEnabled    Whether rich editing is enabled or not
 * @property {boolean}       codeEditingEnabled    Whether code editing is enabled or not
 * @property {boolean}       enableCustomFields    Whether the WordPress custom fields are enabled or not.
 *                                                 true  = the user has opted to show the Custom Fields panel at the bottom of the editor.
 *                                                 false = the user has opted to hide the Custom Fields panel at the bottom of the editor.
 *                                                 undefined = the current environment does not support Custom Fields, so the option toggle in Preferences -> Panels to enable the Custom Fields panel is not displayed.
 * @property {number}        autosaveInterval      How often in seconds the post will be auto-saved via the REST API.
 * @property {number}        localAutosaveInterval How often in seconds the post will be backed up to sessionStorage.
 * @property {Array?}        availableTemplates    The available post templates
 * @property {boolean}       disablePostFormats    Whether or not the post formats are disabled
 * @property {Array?}        allowedMimeTypes      List of allowed mime types and file extensions
 * @property {number}        maxUploadFileSize     Maximum upload file size
 * @property {boolean}       supportsLayout        Whether the editor supports layouts.
 */

const EDITOR_SETTINGS_DEFAULTS = { ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.SETTINGS_DEFAULTS,
  richEditingEnabled: true,
  codeEditingEnabled: true,
  enableCustomFields: undefined,
  supportsLayout: true
};


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/store/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/store/index.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "store": function() { return /* binding */ store; },
/* harmony export */   "storeConfig": function() { return /* binding */ storeConfig; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./node_modules/@wordpress/editor/build-module/store/reducer.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ "./node_modules/@wordpress/editor/build-module/store/selectors.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./node_modules/@wordpress/editor/build-module/store/actions.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./node_modules/@wordpress/editor/build-module/store/constants.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */





/**
 * Post editor data store configuration.
 *
 * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/data/README.md#registerStore
 *
 * @type {Object}
 */

const storeConfig = {
  reducer: _reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_2__,
  actions: _actions__WEBPACK_IMPORTED_MODULE_3__
};
/**
 * Store definition for the editor namespace.
 *
 * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/data/README.md#createReduxStore
 *
 * @type {Object}
 */

const store = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createReduxStore)(_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME, { ...storeConfig
});
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.register)(store);


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/store/local-autosave.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/store/local-autosave.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "localAutosaveClear": function() { return /* binding */ localAutosaveClear; },
/* harmony export */   "localAutosaveGet": function() { return /* binding */ localAutosaveGet; },
/* harmony export */   "localAutosaveSet": function() { return /* binding */ localAutosaveSet; }
/* harmony export */ });
/**
 * Function returning a sessionStorage key to set or retrieve a given post's
 * automatic session backup.
 *
 * Keys are crucially prefixed with 'wp-autosave-' so that wp-login.php's
 * `loggedout` handler can clear sessionStorage of any user-private content.
 *
 * @see https://github.com/WordPress/wordpress-develop/blob/6dad32d2aed47e6c0cf2aee8410645f6d7aba6bd/src/wp-login.php#L103
 *
 * @param {string}  postId    Post ID.
 * @param {boolean} isPostNew Whether post new.
 *
 * @return {string} sessionStorage key
 */
function postKey(postId, isPostNew) {
  return `wp-autosave-block-editor-post-${isPostNew ? 'auto-draft' : postId}`;
}

function localAutosaveGet(postId, isPostNew) {
  return window.sessionStorage.getItem(postKey(postId, isPostNew));
}
function localAutosaveSet(postId, isPostNew, title, content, excerpt) {
  window.sessionStorage.setItem(postKey(postId, isPostNew), JSON.stringify({
    post_title: title,
    content,
    excerpt
  }));
}
function localAutosaveClear(postId, isPostNew) {
  window.sessionStorage.removeItem(postKey(postId, isPostNew));
}


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/store/reducer.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/store/reducer.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editorSettings": function() { return /* binding */ editorSettings; },
/* harmony export */   "getPostRawValue": function() { return /* binding */ getPostRawValue; },
/* harmony export */   "hasSameKeys": function() { return /* binding */ hasSameKeys; },
/* harmony export */   "isReady": function() { return /* binding */ isReady; },
/* harmony export */   "isUpdatingSamePostProperty": function() { return /* binding */ isUpdatingSamePostProperty; },
/* harmony export */   "postAutosavingLock": function() { return /* binding */ postAutosavingLock; },
/* harmony export */   "postId": function() { return /* binding */ postId; },
/* harmony export */   "postLock": function() { return /* binding */ postLock; },
/* harmony export */   "postSavingLock": function() { return /* binding */ postSavingLock; },
/* harmony export */   "postType": function() { return /* binding */ postType; },
/* harmony export */   "saving": function() { return /* binding */ saving; },
/* harmony export */   "shouldOverwriteState": function() { return /* binding */ shouldOverwriteState; },
/* harmony export */   "template": function() { return /* binding */ template; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaults */ "./node_modules/@wordpress/editor/build-module/store/defaults.js");
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
 * Returns a post attribute value, flattening nested rendered content using its
 * raw value in place of its original object form.
 *
 * @param {*} value Original value.
 *
 * @return {*} Raw value.
 */

function getPostRawValue(value) {
  if (value && 'object' === typeof value && 'raw' in value) {
    return value.raw;
  }

  return value;
}
/**
 * Returns true if the two object arguments have the same keys, or false
 * otherwise.
 *
 * @param {Object} a First object.
 * @param {Object} b Second object.
 *
 * @return {boolean} Whether the two objects have the same keys.
 */

function hasSameKeys(a, b) {
  return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEqual)((0,lodash__WEBPACK_IMPORTED_MODULE_0__.keys)(a), (0,lodash__WEBPACK_IMPORTED_MODULE_0__.keys)(b));
}
/**
 * Returns true if, given the currently dispatching action and the previously
 * dispatched action, the two actions are editing the same post property, or
 * false otherwise.
 *
 * @param {Object} action         Currently dispatching action.
 * @param {Object} previousAction Previously dispatched action.
 *
 * @return {boolean} Whether actions are updating the same post property.
 */

function isUpdatingSamePostProperty(action, previousAction) {
  return action.type === 'EDIT_POST' && hasSameKeys(action.edits, previousAction.edits);
}
/**
 * Returns true if, given the currently dispatching action and the previously
 * dispatched action, the two actions are modifying the same property such that
 * undo history should be batched.
 *
 * @param {Object} action         Currently dispatching action.
 * @param {Object} previousAction Previously dispatched action.
 *
 * @return {boolean} Whether to overwrite present state.
 */

function shouldOverwriteState(action, previousAction) {
  if (action.type === 'RESET_EDITOR_BLOCKS') {
    return !action.shouldCreateUndoLevel;
  }

  if (!previousAction || action.type !== previousAction.type) {
    return false;
  }

  return isUpdatingSamePostProperty(action, previousAction);
}
function postId() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SETUP_EDITOR_STATE':
      return action.post.id;
  }

  return state;
}
function postType() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SETUP_EDITOR_STATE':
      return action.post.type;
  }

  return state;
}
/**
 * Reducer returning whether the post blocks match the defined template or not.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {boolean} Updated state.
 */

function template() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isValid: true
  };
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SET_TEMPLATE_VALIDITY':
      return { ...state,
        isValid: action.isValid
      };
  }

  return state;
}
/**
 * Reducer returning current network request state (whether a request to
 * the WP REST API is in progress, successful, or failed).
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function saving() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'REQUEST_POST_UPDATE_START':
    case 'REQUEST_POST_UPDATE_FINISH':
      return {
        pending: action.type === 'REQUEST_POST_UPDATE_START',
        options: action.options || {}
      };
  }

  return state;
}
/**
 * Post Lock State.
 *
 * @typedef {Object} PostLockState
 *
 * @property {boolean}  isLocked       Whether the post is locked.
 * @property {?boolean} isTakeover     Whether the post editing has been taken over.
 * @property {?boolean} activePostLock Active post lock value.
 * @property {?Object}  user           User that took over the post.
 */

/**
 * Reducer returning the post lock status.
 *
 * @param {PostLockState} state  Current state.
 * @param {Object}        action Dispatched action.
 *
 * @return {PostLockState} Updated state.
 */

function postLock() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isLocked: false
  };
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'UPDATE_POST_LOCK':
      return action.lock;
  }

  return state;
}
/**
 * Post saving lock.
 *
 * When post saving is locked, the post cannot be published or updated.
 *
 * @param {PostLockState} state  Current state.
 * @param {Object}        action Dispatched action.
 *
 * @return {PostLockState} Updated state.
 */

function postSavingLock() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'LOCK_POST_SAVING':
      return { ...state,
        [action.lockName]: true
      };

    case 'UNLOCK_POST_SAVING':
      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omit)(state, action.lockName);
  }

  return state;
}
/**
 * Post autosaving lock.
 *
 * When post autosaving is locked, the post will not autosave.
 *
 * @param {PostLockState} state  Current state.
 * @param {Object}        action Dispatched action.
 *
 * @return {PostLockState} Updated state.
 */

function postAutosavingLock() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'LOCK_POST_AUTOSAVING':
      return { ...state,
        [action.lockName]: true
      };

    case 'UNLOCK_POST_AUTOSAVING':
      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omit)(state, action.lockName);
  }

  return state;
}
/**
 * Reducer returning whether the editor is ready to be rendered.
 * The editor is considered ready to be rendered once
 * the post object is loaded properly and the initial blocks parsed.
 *
 * @param {boolean} state
 * @param {Object}  action
 *
 * @return {boolean} Updated state.
 */

function isReady() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SETUP_EDITOR_STATE':
      return true;

    case 'TEAR_DOWN_EDITOR':
      return false;
  }

  return state;
}
/**
 * Reducer returning the post editor setting.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function editorSettings() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _defaults__WEBPACK_IMPORTED_MODULE_2__.EDITOR_SETTINGS_DEFAULTS;
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'UPDATE_EDITOR_SETTINGS':
      return { ...state,
        ...action.settings
      };
  }

  return state;
}
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  postId,
  postType,
  saving,
  postLock,
  template,
  postSavingLock,
  isReady,
  editorSettings,
  postAutosavingLock
}));


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/store/selectors.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/store/selectors.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__experimentalGetDefaultTemplatePartAreas": function() { return /* binding */ __experimentalGetDefaultTemplatePartAreas; },
/* harmony export */   "__experimentalGetDefaultTemplateType": function() { return /* binding */ __experimentalGetDefaultTemplateType; },
/* harmony export */   "__experimentalGetDefaultTemplateTypes": function() { return /* binding */ __experimentalGetDefaultTemplateTypes; },
/* harmony export */   "__experimentalGetTemplateInfo": function() { return /* binding */ __experimentalGetTemplateInfo; },
/* harmony export */   "__unstableIsEditorReady": function() { return /* binding */ __unstableIsEditorReady; },
/* harmony export */   "canInsertBlockType": function() { return /* binding */ canInsertBlockType; },
/* harmony export */   "canUserUseUnfilteredHTML": function() { return /* binding */ canUserUseUnfilteredHTML; },
/* harmony export */   "didPostSaveRequestFail": function() { return /* binding */ didPostSaveRequestFail; },
/* harmony export */   "didPostSaveRequestSucceed": function() { return /* binding */ didPostSaveRequestSucceed; },
/* harmony export */   "getActivePostLock": function() { return /* binding */ getActivePostLock; },
/* harmony export */   "getAdjacentBlockClientId": function() { return /* binding */ getAdjacentBlockClientId; },
/* harmony export */   "getAutosaveAttribute": function() { return /* binding */ getAutosaveAttribute; },
/* harmony export */   "getBlock": function() { return /* binding */ getBlock; },
/* harmony export */   "getBlockAttributes": function() { return /* binding */ getBlockAttributes; },
/* harmony export */   "getBlockCount": function() { return /* binding */ getBlockCount; },
/* harmony export */   "getBlockHierarchyRootClientId": function() { return /* binding */ getBlockHierarchyRootClientId; },
/* harmony export */   "getBlockIndex": function() { return /* binding */ getBlockIndex; },
/* harmony export */   "getBlockInsertionPoint": function() { return /* binding */ getBlockInsertionPoint; },
/* harmony export */   "getBlockListSettings": function() { return /* binding */ getBlockListSettings; },
/* harmony export */   "getBlockMode": function() { return /* binding */ getBlockMode; },
/* harmony export */   "getBlockName": function() { return /* binding */ getBlockName; },
/* harmony export */   "getBlockOrder": function() { return /* binding */ getBlockOrder; },
/* harmony export */   "getBlockRootClientId": function() { return /* binding */ getBlockRootClientId; },
/* harmony export */   "getBlockSelectionEnd": function() { return /* binding */ getBlockSelectionEnd; },
/* harmony export */   "getBlockSelectionStart": function() { return /* binding */ getBlockSelectionStart; },
/* harmony export */   "getBlocks": function() { return /* binding */ getBlocks; },
/* harmony export */   "getBlocksByClientId": function() { return /* binding */ getBlocksByClientId; },
/* harmony export */   "getClientIdsOfDescendants": function() { return /* binding */ getClientIdsOfDescendants; },
/* harmony export */   "getClientIdsWithDescendants": function() { return /* binding */ getClientIdsWithDescendants; },
/* harmony export */   "getCurrentPost": function() { return /* binding */ getCurrentPost; },
/* harmony export */   "getCurrentPostAttribute": function() { return /* binding */ getCurrentPostAttribute; },
/* harmony export */   "getCurrentPostId": function() { return /* binding */ getCurrentPostId; },
/* harmony export */   "getCurrentPostLastRevisionId": function() { return /* binding */ getCurrentPostLastRevisionId; },
/* harmony export */   "getCurrentPostRevisionsCount": function() { return /* binding */ getCurrentPostRevisionsCount; },
/* harmony export */   "getCurrentPostType": function() { return /* binding */ getCurrentPostType; },
/* harmony export */   "getEditedPostAttribute": function() { return /* binding */ getEditedPostAttribute; },
/* harmony export */   "getEditedPostContent": function() { return /* binding */ getEditedPostContent; },
/* harmony export */   "getEditedPostPreviewLink": function() { return /* binding */ getEditedPostPreviewLink; },
/* harmony export */   "getEditedPostSlug": function() { return /* binding */ getEditedPostSlug; },
/* harmony export */   "getEditedPostVisibility": function() { return /* binding */ getEditedPostVisibility; },
/* harmony export */   "getEditorBlocks": function() { return /* binding */ getEditorBlocks; },
/* harmony export */   "getEditorSelection": function() { return /* binding */ getEditorSelection; },
/* harmony export */   "getEditorSelectionEnd": function() { return /* binding */ getEditorSelectionEnd; },
/* harmony export */   "getEditorSelectionStart": function() { return /* binding */ getEditorSelectionStart; },
/* harmony export */   "getEditorSettings": function() { return /* binding */ getEditorSettings; },
/* harmony export */   "getFirstMultiSelectedBlockClientId": function() { return /* binding */ getFirstMultiSelectedBlockClientId; },
/* harmony export */   "getGlobalBlockCount": function() { return /* binding */ getGlobalBlockCount; },
/* harmony export */   "getInserterItems": function() { return /* binding */ getInserterItems; },
/* harmony export */   "getLastMultiSelectedBlockClientId": function() { return /* binding */ getLastMultiSelectedBlockClientId; },
/* harmony export */   "getMultiSelectedBlockClientIds": function() { return /* binding */ getMultiSelectedBlockClientIds; },
/* harmony export */   "getMultiSelectedBlocks": function() { return /* binding */ getMultiSelectedBlocks; },
/* harmony export */   "getMultiSelectedBlocksEndClientId": function() { return /* binding */ getMultiSelectedBlocksEndClientId; },
/* harmony export */   "getMultiSelectedBlocksStartClientId": function() { return /* binding */ getMultiSelectedBlocksStartClientId; },
/* harmony export */   "getNextBlockClientId": function() { return /* binding */ getNextBlockClientId; },
/* harmony export */   "getPermalink": function() { return /* binding */ getPermalink; },
/* harmony export */   "getPermalinkParts": function() { return /* binding */ getPermalinkParts; },
/* harmony export */   "getPostEdits": function() { return /* binding */ getPostEdits; },
/* harmony export */   "getPostLockUser": function() { return /* binding */ getPostLockUser; },
/* harmony export */   "getPostTypeLabel": function() { return /* binding */ getPostTypeLabel; },
/* harmony export */   "getPreviousBlockClientId": function() { return /* binding */ getPreviousBlockClientId; },
/* harmony export */   "getSelectedBlock": function() { return /* binding */ getSelectedBlock; },
/* harmony export */   "getSelectedBlockClientId": function() { return /* binding */ getSelectedBlockClientId; },
/* harmony export */   "getSelectedBlockCount": function() { return /* binding */ getSelectedBlockCount; },
/* harmony export */   "getSelectedBlocksInitialCaretPosition": function() { return /* binding */ getSelectedBlocksInitialCaretPosition; },
/* harmony export */   "getStateBeforeOptimisticTransaction": function() { return /* binding */ getStateBeforeOptimisticTransaction; },
/* harmony export */   "getSuggestedPostFormat": function() { return /* binding */ getSuggestedPostFormat; },
/* harmony export */   "getTemplate": function() { return /* binding */ getTemplate; },
/* harmony export */   "getTemplateLock": function() { return /* binding */ getTemplateLock; },
/* harmony export */   "hasChangedContent": function() { return /* binding */ hasChangedContent; },
/* harmony export */   "hasEditorRedo": function() { return /* binding */ hasEditorRedo; },
/* harmony export */   "hasEditorUndo": function() { return /* binding */ hasEditorUndo; },
/* harmony export */   "hasInserterItems": function() { return /* binding */ hasInserterItems; },
/* harmony export */   "hasMultiSelection": function() { return /* binding */ hasMultiSelection; },
/* harmony export */   "hasNonPostEntityChanges": function() { return /* binding */ hasNonPostEntityChanges; },
/* harmony export */   "hasSelectedBlock": function() { return /* binding */ hasSelectedBlock; },
/* harmony export */   "hasSelectedInnerBlock": function() { return /* binding */ hasSelectedInnerBlock; },
/* harmony export */   "inSomeHistory": function() { return /* binding */ inSomeHistory; },
/* harmony export */   "isAncestorMultiSelected": function() { return /* binding */ isAncestorMultiSelected; },
/* harmony export */   "isAutosavingPost": function() { return /* binding */ isAutosavingPost; },
/* harmony export */   "isBlockInsertionPointVisible": function() { return /* binding */ isBlockInsertionPointVisible; },
/* harmony export */   "isBlockMultiSelected": function() { return /* binding */ isBlockMultiSelected; },
/* harmony export */   "isBlockSelected": function() { return /* binding */ isBlockSelected; },
/* harmony export */   "isBlockValid": function() { return /* binding */ isBlockValid; },
/* harmony export */   "isBlockWithinSelection": function() { return /* binding */ isBlockWithinSelection; },
/* harmony export */   "isCaretWithinFormattedText": function() { return /* binding */ isCaretWithinFormattedText; },
/* harmony export */   "isCleanNewPost": function() { return /* binding */ isCleanNewPost; },
/* harmony export */   "isCurrentPostPending": function() { return /* binding */ isCurrentPostPending; },
/* harmony export */   "isCurrentPostPublished": function() { return /* binding */ isCurrentPostPublished; },
/* harmony export */   "isCurrentPostScheduled": function() { return /* binding */ isCurrentPostScheduled; },
/* harmony export */   "isEditedPostAutosaveable": function() { return /* binding */ isEditedPostAutosaveable; },
/* harmony export */   "isEditedPostBeingScheduled": function() { return /* binding */ isEditedPostBeingScheduled; },
/* harmony export */   "isEditedPostDateFloating": function() { return /* binding */ isEditedPostDateFloating; },
/* harmony export */   "isEditedPostDirty": function() { return /* binding */ isEditedPostDirty; },
/* harmony export */   "isEditedPostEmpty": function() { return /* binding */ isEditedPostEmpty; },
/* harmony export */   "isEditedPostNew": function() { return /* binding */ isEditedPostNew; },
/* harmony export */   "isEditedPostPublishable": function() { return /* binding */ isEditedPostPublishable; },
/* harmony export */   "isEditedPostSaveable": function() { return /* binding */ isEditedPostSaveable; },
/* harmony export */   "isFirstMultiSelectedBlock": function() { return /* binding */ isFirstMultiSelectedBlock; },
/* harmony export */   "isMultiSelecting": function() { return /* binding */ isMultiSelecting; },
/* harmony export */   "isPermalinkEditable": function() { return /* binding */ isPermalinkEditable; },
/* harmony export */   "isPostAutosavingLocked": function() { return /* binding */ isPostAutosavingLocked; },
/* harmony export */   "isPostLockTakeover": function() { return /* binding */ isPostLockTakeover; },
/* harmony export */   "isPostLocked": function() { return /* binding */ isPostLocked; },
/* harmony export */   "isPostSavingLocked": function() { return /* binding */ isPostSavingLocked; },
/* harmony export */   "isPreviewingPost": function() { return /* binding */ isPreviewingPost; },
/* harmony export */   "isPublishSidebarEnabled": function() { return /* binding */ isPublishSidebarEnabled; },
/* harmony export */   "isPublishingPost": function() { return /* binding */ isPublishingPost; },
/* harmony export */   "isSavingNonPostEntityChanges": function() { return /* binding */ isSavingNonPostEntityChanges; },
/* harmony export */   "isSavingPost": function() { return /* binding */ isSavingPost; },
/* harmony export */   "isSelectionEnabled": function() { return /* binding */ isSelectionEnabled; },
/* harmony export */   "isTyping": function() { return /* binding */ isTyping; },
/* harmony export */   "isValidTemplate": function() { return /* binding */ isValidTemplate; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rememo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rememo */ "./node_modules/rememo/es/rememo.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/date */ "@wordpress/date");
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_date__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/deprecated */ "@wordpress/deprecated");
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/layout.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./constants */ "./node_modules/@wordpress/editor/build-module/store/constants.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./reducer */ "./node_modules/@wordpress/editor/build-module/store/reducer.js");
/* harmony import */ var _utils_get_template_part_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/get-template-part-icon */ "./node_modules/@wordpress/editor/build-module/utils/get-template-part-icon.js");
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
 * Shared reference to an empty object for cases where it is important to avoid
 * returning a new object reference on every invocation, as in a connected or
 * other pure component which performs `shouldComponentUpdate` check on props.
 * This should be used as a last resort, since the normalized data should be
 * maintained by the reducer result in state.
 */

const EMPTY_OBJECT = {};
/**
 * Shared reference to an empty array for cases where it is important to avoid
 * returning a new array reference on every invocation, as in a connected or
 * other pure component which performs `shouldComponentUpdate` check on props.
 * This should be used as a last resort, since the normalized data should be
 * maintained by the reducer result in state.
 */

const EMPTY_ARRAY = [];
/**
 * Returns true if any past editor history snapshots exist, or false otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether undo history exists.
 */

const hasEditorUndo = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.createRegistrySelector)(select => () => {
  return select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_9__.store).hasUndo();
});
/**
 * Returns true if any future editor history snapshots exist, or false
 * otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether redo history exists.
 */

const hasEditorRedo = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.createRegistrySelector)(select => () => {
  return select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_9__.store).hasRedo();
});
/**
 * Returns true if the currently edited post is yet to be saved, or false if
 * the post has been saved.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the post is new.
 */

function isEditedPostNew(state) {
  return getCurrentPost(state).status === 'auto-draft';
}
/**
 * Returns true if content includes unsaved changes, or false otherwise.
 *
 * @param {Object} state Editor state.
 *
 * @return {boolean} Whether content includes unsaved changes.
 */

function hasChangedContent(state) {
  const edits = getPostEdits(state);
  return 'blocks' in edits || // `edits` is intended to contain only values which are different from
  // the saved post, so the mere presence of a property is an indicator
  // that the value is different than what is known to be saved. While
  // content in Visual mode is represented by the blocks state, in Text
  // mode it is tracked by `edits.content`.
  'content' in edits;
}
/**
 * Returns true if there are unsaved values for the current edit session, or
 * false if the editing state matches the saved or new post.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether unsaved values exist.
 */

const isEditedPostDirty = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.createRegistrySelector)(select => state => {
  // Edits should contain only fields which differ from the saved post (reset
  // at initial load and save complete). Thus, a non-empty edits state can be
  // inferred to contain unsaved values.
  const postType = getCurrentPostType(state);
  const postId = getCurrentPostId(state);

  if (select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_9__.store).hasEditsForEntityRecord('postType', postType, postId)) {
    return true;
  }

  return false;
});
/**
 * Returns true if there are unsaved edits for entities other than
 * the editor's post, and false otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether there are edits or not.
 */

const hasNonPostEntityChanges = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.createRegistrySelector)(select => state => {
  const dirtyEntityRecords = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_9__.store).__experimentalGetDirtyEntityRecords();

  const {
    type,
    id
  } = getCurrentPost(state);
  return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.some)(dirtyEntityRecords, entityRecord => entityRecord.kind !== 'postType' || entityRecord.name !== type || entityRecord.key !== id);
});
/**
 * Returns true if there are no unsaved values for the current edit session and
 * if the currently edited post is new (has never been saved before).
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether new post and unsaved values exist.
 */

function isCleanNewPost(state) {
  return !isEditedPostDirty(state) && isEditedPostNew(state);
}
/**
 * Returns the post currently being edited in its last known saved state, not
 * including unsaved edits. Returns an object containing relevant default post
 * values if the post has not yet been saved.
 *
 * @param {Object} state Global application state.
 *
 * @return {Object} Post object.
 */

const getCurrentPost = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.createRegistrySelector)(select => state => {
  const postId = getCurrentPostId(state);
  const postType = getCurrentPostType(state);
  const post = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_9__.store).getRawEntityRecord('postType', postType, postId);

  if (post) {
    return post;
  } // This exists for compatibility with the previous selector behavior
  // which would guarantee an object return based on the editor reducer's
  // default empty object state.


  return EMPTY_OBJECT;
});
/**
 * Returns the post type of the post currently being edited.
 *
 * @param {Object} state Global application state.
 *
 * @return {string} Post type.
 */

function getCurrentPostType(state) {
  return state.postType;
}
/**
 * Returns the ID of the post currently being edited, or null if the post has
 * not yet been saved.
 *
 * @param {Object} state Global application state.
 *
 * @return {?number} ID of current post.
 */

function getCurrentPostId(state) {
  return state.postId;
}
/**
 * Returns the number of revisions of the post currently being edited.
 *
 * @param {Object} state Global application state.
 *
 * @return {number} Number of revisions.
 */

function getCurrentPostRevisionsCount(state) {
  return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(getCurrentPost(state), ['_links', 'version-history', 0, 'count'], 0);
}
/**
 * Returns the last revision ID of the post currently being edited,
 * or null if the post has no revisions.
 *
 * @param {Object} state Global application state.
 *
 * @return {?number} ID of the last revision.
 */

function getCurrentPostLastRevisionId(state) {
  return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(getCurrentPost(state), ['_links', 'predecessor-version', 0, 'id'], null);
}
/**
 * Returns any post values which have been changed in the editor but not yet
 * been saved.
 *
 * @param {Object} state Global application state.
 *
 * @return {Object} Object of key value pairs comprising unsaved edits.
 */

const getPostEdits = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.createRegistrySelector)(select => state => {
  const postType = getCurrentPostType(state);
  const postId = getCurrentPostId(state);
  return select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_9__.store).getEntityRecordEdits('postType', postType, postId) || EMPTY_OBJECT;
});
/**
 * Returns an attribute value of the saved post.
 *
 * @param {Object} state         Global application state.
 * @param {string} attributeName Post attribute name.
 *
 * @return {*} Post attribute value.
 */

function getCurrentPostAttribute(state, attributeName) {
  switch (attributeName) {
    case 'type':
      return getCurrentPostType(state);

    case 'id':
      return getCurrentPostId(state);

    default:
      const post = getCurrentPost(state);

      if (!post.hasOwnProperty(attributeName)) {
        break;
      }

      return (0,_reducer__WEBPACK_IMPORTED_MODULE_11__.getPostRawValue)(post[attributeName]);
  }
}
/**
 * Returns a single attribute of the post being edited, preferring the unsaved
 * edit if one exists, but merging with the attribute value for the last known
 * saved state of the post (this is needed for some nested attributes like meta).
 *
 * @param {Object} state         Global application state.
 * @param {string} attributeName Post attribute name.
 *
 * @return {*} Post attribute value.
 */

const getNestedEditedPostProperty = (state, attributeName) => {
  const edits = getPostEdits(state);

  if (!edits.hasOwnProperty(attributeName)) {
    return getCurrentPostAttribute(state, attributeName);
  }

  return { ...getCurrentPostAttribute(state, attributeName),
    ...edits[attributeName]
  };
};
/**
 * Returns a single attribute of the post being edited, preferring the unsaved
 * edit if one exists, but falling back to the attribute for the last known
 * saved state of the post.
 *
 * @param {Object} state         Global application state.
 * @param {string} attributeName Post attribute name.
 *
 * @return {*} Post attribute value.
 */


function getEditedPostAttribute(state, attributeName) {
  // Special cases.
  switch (attributeName) {
    case 'content':
      return getEditedPostContent(state);
  } // Fall back to saved post value if not edited.


  const edits = getPostEdits(state);

  if (!edits.hasOwnProperty(attributeName)) {
    return getCurrentPostAttribute(state, attributeName);
  } // Merge properties are objects which contain only the patch edit in state,
  // and thus must be merged with the current post attribute.


  if (_constants__WEBPACK_IMPORTED_MODULE_12__.EDIT_MERGE_PROPERTIES.has(attributeName)) {
    return getNestedEditedPostProperty(state, attributeName);
  }

  return edits[attributeName];
}
/**
 * Returns an attribute value of the current autosave revision for a post, or
 * null if there is no autosave for the post.
 *
 * @deprecated since 5.6. Callers should use the `getAutosave( postType, postId, userId )` selector
 * 			   from the '@wordpress/core-data' package and access properties on the returned
 * 			   autosave object using getPostRawValue.
 *
 * @param {Object} state         Global application state.
 * @param {string} attributeName Autosave attribute name.
 *
 * @return {*} Autosave attribute value.
 */

const getAutosaveAttribute = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.createRegistrySelector)(select => (state, attributeName) => {
  if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.includes)(_constants__WEBPACK_IMPORTED_MODULE_12__.AUTOSAVE_PROPERTIES, attributeName) && attributeName !== 'preview_link') {
    return;
  }

  const postType = getCurrentPostType(state);
  const postId = getCurrentPostId(state);
  const currentUserId = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_9__.store).getCurrentUser(), ['id']);
  const autosave = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_9__.store).getAutosave(postType, postId, currentUserId);

  if (autosave) {
    return (0,_reducer__WEBPACK_IMPORTED_MODULE_11__.getPostRawValue)(autosave[attributeName]);
  }
});
/**
 * Returns the current visibility of the post being edited, preferring the
 * unsaved value if different than the saved post. The return value is one of
 * "private", "password", or "public".
 *
 * @param {Object} state Global application state.
 *
 * @return {string} Post visibility.
 */

function getEditedPostVisibility(state) {
  const status = getEditedPostAttribute(state, 'status');

  if (status === 'private') {
    return 'private';
  }

  const password = getEditedPostAttribute(state, 'password');

  if (password) {
    return 'password';
  }

  return 'public';
}
/**
 * Returns true if post is pending review.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether current post is pending review.
 */

function isCurrentPostPending(state) {
  return getCurrentPost(state).status === 'pending';
}
/**
 * Return true if the current post has already been published.
 *
 * @param {Object}  state       Global application state.
 * @param {Object?} currentPost Explicit current post for bypassing registry selector.
 *
 * @return {boolean} Whether the post has been published.
 */

function isCurrentPostPublished(state, currentPost) {
  const post = currentPost || getCurrentPost(state);
  return ['publish', 'private'].indexOf(post.status) !== -1 || post.status === 'future' && !(0,_wordpress_date__WEBPACK_IMPORTED_MODULE_3__.isInTheFuture)(new Date(Number((0,_wordpress_date__WEBPACK_IMPORTED_MODULE_3__.getDate)(post.date)) - _constants__WEBPACK_IMPORTED_MODULE_12__.ONE_MINUTE_IN_MS));
}
/**
 * Returns true if post is already scheduled.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether current post is scheduled to be posted.
 */

function isCurrentPostScheduled(state) {
  return getCurrentPost(state).status === 'future' && !isCurrentPostPublished(state);
}
/**
 * Return true if the post being edited can be published.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the post can been published.
 */

function isEditedPostPublishable(state) {
  const post = getCurrentPost(state); // TODO: Post being publishable should be superset of condition of post
  // being saveable. Currently this restriction is imposed at UI.
  //
  //  See: <PostPublishButton /> (`isButtonEnabled` assigned by `isSaveable`).

  return isEditedPostDirty(state) || ['publish', 'private', 'future'].indexOf(post.status) === -1;
}
/**
 * Returns true if the post can be saved, or false otherwise. A post must
 * contain a title, an excerpt, or non-empty content to be valid for save.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the post can be saved.
 */

function isEditedPostSaveable(state) {
  if (isSavingPost(state)) {
    return false;
  } // TODO: Post should not be saveable if not dirty. Cannot be added here at
  // this time since posts where meta boxes are present can be saved even if
  // the post is not dirty. Currently this restriction is imposed at UI, but
  // should be moved here.
  //
  //  See: `isEditedPostPublishable` (includes `isEditedPostDirty` condition)
  //  See: <PostSavedState /> (`forceIsDirty` prop)
  //  See: <PostPublishButton /> (`forceIsDirty` prop)
  //  See: https://github.com/WordPress/gutenberg/pull/4184.


  return !!getEditedPostAttribute(state, 'title') || !!getEditedPostAttribute(state, 'excerpt') || !isEditedPostEmpty(state) || _wordpress_element__WEBPACK_IMPORTED_MODULE_7__.Platform.OS === 'native';
}
/**
 * Returns true if the edited post has content. A post has content if it has at
 * least one saveable block or otherwise has a non-empty content property
 * assigned.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether post has content.
 */

function isEditedPostEmpty(state) {
  // While the condition of truthy content string is sufficient to determine
  // emptiness, testing saveable blocks length is a trivial operation. Since
  // this function can be called frequently, optimize for the fast case as a
  // condition of the mere existence of blocks. Note that the value of edited
  // content takes precedent over block content, and must fall through to the
  // default logic.
  const blocks = getEditorBlocks(state);

  if (blocks.length) {
    // Pierce the abstraction of the serializer in knowing that blocks are
    // joined with with newlines such that even if every individual block
    // produces an empty save result, the serialized content is non-empty.
    if (blocks.length > 1) {
      return false;
    } // There are two conditions under which the optimization cannot be
    // assumed, and a fallthrough to getEditedPostContent must occur:
    //
    // 1. getBlocksForSerialization has special treatment in omitting a
    //    single unmodified default block.
    // 2. Comment delimiters are omitted for a freeform or unregistered
    //    block in its serialization. The freeform block specifically may
    //    produce an empty string in its saved output.
    //
    // For all other content, the single block is assumed to make a post
    // non-empty, if only by virtue of its own comment delimiters.


    const blockName = blocks[0].name;

    if (blockName !== (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.getDefaultBlockName)() && blockName !== (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.getFreeformContentHandlerName)()) {
      return false;
    }
  }

  return !getEditedPostContent(state);
}
/**
 * Returns true if the post can be autosaved, or false otherwise.
 *
 * @param {Object} state    Global application state.
 * @param {Object} autosave A raw autosave object from the REST API.
 *
 * @return {boolean} Whether the post can be autosaved.
 */

const isEditedPostAutosaveable = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.createRegistrySelector)(select => state => {
  // A post must contain a title, an excerpt, or non-empty content to be valid for autosaving.
  if (!isEditedPostSaveable(state)) {
    return false;
  } // A post is not autosavable when there is a post autosave lock.


  if (isPostAutosavingLocked(state)) {
    return false;
  }

  const postType = getCurrentPostType(state);
  const postId = getCurrentPostId(state);
  const hasFetchedAutosave = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_9__.store).hasFetchedAutosaves(postType, postId);
  const currentUserId = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_9__.store).getCurrentUser(), ['id']); // Disable reason - this line causes the side-effect of fetching the autosave
  // via a resolver, moving below the return would result in the autosave never
  // being fetched.
  // eslint-disable-next-line @wordpress/no-unused-vars-before-return

  const autosave = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_9__.store).getAutosave(postType, postId, currentUserId); // If any existing autosaves have not yet been fetched, this function is
  // unable to determine if the post is autosaveable, so return false.

  if (!hasFetchedAutosave) {
    return false;
  } // If we don't already have an autosave, the post is autosaveable.


  if (!autosave) {
    return true;
  } // To avoid an expensive content serialization, use the content dirtiness
  // flag in place of content field comparison against the known autosave.
  // This is not strictly accurate, and relies on a tolerance toward autosave
  // request failures for unnecessary saves.


  if (hasChangedContent(state)) {
    return true;
  } // If the title or excerpt has changed, the post is autosaveable.


  return ['title', 'excerpt'].some(field => (0,_reducer__WEBPACK_IMPORTED_MODULE_11__.getPostRawValue)(autosave[field]) !== getEditedPostAttribute(state, field));
});
/**
 * Return true if the post being edited is being scheduled. Preferring the
 * unsaved status values.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the post has been published.
 */

function isEditedPostBeingScheduled(state) {
  const date = getEditedPostAttribute(state, 'date'); // Offset the date by one minute (network latency).

  const checkedDate = new Date(Number((0,_wordpress_date__WEBPACK_IMPORTED_MODULE_3__.getDate)(date)) - _constants__WEBPACK_IMPORTED_MODULE_12__.ONE_MINUTE_IN_MS);
  return (0,_wordpress_date__WEBPACK_IMPORTED_MODULE_3__.isInTheFuture)(checkedDate);
}
/**
 * Returns whether the current post should be considered to have a "floating"
 * date (i.e. that it would publish "Immediately" rather than at a set time).
 *
 * Unlike in the PHP backend, the REST API returns a full date string for posts
 * where the 0000-00-00T00:00:00 placeholder is present in the database. To
 * infer that a post is set to publish "Immediately" we check whether the date
 * and modified date are the same.
 *
 * @param {Object} state Editor state.
 *
 * @return {boolean} Whether the edited post has a floating date value.
 */

function isEditedPostDateFloating(state) {
  const date = getEditedPostAttribute(state, 'date');
  const modified = getEditedPostAttribute(state, 'modified'); // This should be the status of the persisted post
  // It shouldn't use the "edited" status otherwise it breaks the
  // inferred post data floating status
  // See https://github.com/WordPress/gutenberg/issues/28083.

  const status = getCurrentPost(state).status;

  if (status === 'draft' || status === 'auto-draft' || status === 'pending') {
    return date === modified || date === null;
  }

  return false;
}
/**
 * Returns true if the post is currently being saved, or false otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether post is being saved.
 */

const isSavingPost = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.createRegistrySelector)(select => state => {
  const postType = getCurrentPostType(state);
  const postId = getCurrentPostId(state);
  return select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_9__.store).isSavingEntityRecord('postType', postType, postId);
});
/**
 * Returns true if non-post entities are currently being saved, or false otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether non-post entities are being saved.
 */

const isSavingNonPostEntityChanges = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.createRegistrySelector)(select => state => {
  const entitiesBeingSaved = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_9__.store).__experimentalGetEntitiesBeingSaved();

  const {
    type,
    id
  } = getCurrentPost(state);
  return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.some)(entitiesBeingSaved, entityRecord => entityRecord.kind !== 'postType' || entityRecord.name !== type || entityRecord.key !== id);
});
/**
 * Returns true if a previous post save was attempted successfully, or false
 * otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the post was saved successfully.
 */

const didPostSaveRequestSucceed = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.createRegistrySelector)(select => state => {
  const postType = getCurrentPostType(state);
  const postId = getCurrentPostId(state);
  return !select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_9__.store).getLastEntitySaveError('postType', postType, postId);
});
/**
 * Returns true if a previous post save was attempted but failed, or false
 * otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the post save failed.
 */

const didPostSaveRequestFail = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.createRegistrySelector)(select => state => {
  const postType = getCurrentPostType(state);
  const postId = getCurrentPostId(state);
  return !!select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_9__.store).getLastEntitySaveError('postType', postType, postId);
});
/**
 * Returns true if the post is autosaving, or false otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the post is autosaving.
 */

function isAutosavingPost(state) {
  if (!isSavingPost(state)) {
    return false;
  }

  return !!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(state.saving, ['options', 'isAutosave']);
}
/**
 * Returns true if the post is being previewed, or false otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the post is being previewed.
 */

function isPreviewingPost(state) {
  if (!isSavingPost(state)) {
    return false;
  }

  return !!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(state.saving, ['options', 'isPreview']);
}
/**
 * Returns the post preview link
 *
 * @param {Object} state Global application state.
 *
 * @return {string?} Preview Link.
 */

function getEditedPostPreviewLink(state) {
  if (state.saving.pending || isSavingPost(state)) {
    return;
  }

  let previewLink = getAutosaveAttribute(state, 'preview_link'); // Fix for issue: https://github.com/WordPress/gutenberg/issues/33616
  // If the post is draft, ignore the preview link from the autosave record,
  // because the preview could be a stale autosave if the post was switched from
  // published to draft.
  // See: https://github.com/WordPress/gutenberg/pull/37952.

  if (!previewLink || 'draft' === getCurrentPost(state).status) {
    previewLink = getEditedPostAttribute(state, 'link');

    if (previewLink) {
      previewLink = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_4__.addQueryArgs)(previewLink, {
        preview: true
      });
    }
  }

  const featuredImageId = getEditedPostAttribute(state, 'featured_media');

  if (previewLink && featuredImageId) {
    return (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_4__.addQueryArgs)(previewLink, {
      _thumbnail_id: featuredImageId
    });
  }

  return previewLink;
}
/**
 * Returns a suggested post format for the current post, inferred only if there
 * is a single block within the post and it is of a type known to match a
 * default post format. Returns null if the format cannot be determined.
 *
 * @param {Object} state Global application state.
 *
 * @return {?string} Suggested post format.
 */

function getSuggestedPostFormat(state) {
  const blocks = getEditorBlocks(state);
  if (blocks.length > 2) return null;
  let name; // If there is only one block in the content of the post grab its name
  // so we can derive a suitable post format from it.

  if (blocks.length === 1) {
    name = blocks[0].name; // Check for core/embed `video` and `audio` eligible suggestions.

    if (name === 'core/embed') {
      var _blocks$0$attributes;

      const provider = (_blocks$0$attributes = blocks[0].attributes) === null || _blocks$0$attributes === void 0 ? void 0 : _blocks$0$attributes.providerNameSlug;

      if (['youtube', 'vimeo'].includes(provider)) {
        name = 'core/video';
      } else if (['spotify', 'soundcloud'].includes(provider)) {
        name = 'core/audio';
      }
    }
  } // If there are two blocks in the content and the last one is a text blocks
  // grab the name of the first one to also suggest a post format from it.


  if (blocks.length === 2 && blocks[1].name === 'core/paragraph') {
    name = blocks[0].name;
  } // We only convert to default post formats in core.


  switch (name) {
    case 'core/image':
      return 'image';

    case 'core/quote':
    case 'core/pullquote':
      return 'quote';

    case 'core/gallery':
      return 'gallery';

    case 'core/video':
      return 'video';

    case 'core/audio':
      return 'audio';

    default:
      return null;
  }
}
/**
 * Returns the content of the post being edited.
 *
 * @param {Object} state Global application state.
 *
 * @return {string} Post content.
 */

const getEditedPostContent = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.createRegistrySelector)(select => state => {
  const postId = getCurrentPostId(state);
  const postType = getCurrentPostType(state);
  const record = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_9__.store).getEditedEntityRecord('postType', postType, postId);

  if (record) {
    if (typeof record.content === 'function') {
      return record.content(record);
    } else if (record.blocks) {
      return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.__unstableSerializeAndClean)(record.blocks);
    } else if (record.content) {
      return record.content;
    }
  }

  return '';
});
/**
 * Returns true if the post is being published, or false otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether post is being published.
 */

function isPublishingPost(state) {
  return isSavingPost(state) && !isCurrentPostPublished(state) && getEditedPostAttribute(state, 'status') === 'publish';
}
/**
 * Returns whether the permalink is editable or not.
 *
 * @param {Object} state Editor state.
 *
 * @return {boolean} Whether or not the permalink is editable.
 */

function isPermalinkEditable(state) {
  const permalinkTemplate = getEditedPostAttribute(state, 'permalink_template');
  return _constants__WEBPACK_IMPORTED_MODULE_12__.PERMALINK_POSTNAME_REGEX.test(permalinkTemplate);
}
/**
 * Returns the permalink for the post.
 *
 * @param {Object} state Editor state.
 *
 * @return {?string} The permalink, or null if the post is not viewable.
 */

function getPermalink(state) {
  const permalinkParts = getPermalinkParts(state);

  if (!permalinkParts) {
    return null;
  }

  const {
    prefix,
    postName,
    suffix
  } = permalinkParts;

  if (isPermalinkEditable(state)) {
    return prefix + postName + suffix;
  }

  return prefix;
}
/**
 * Returns the slug for the post being edited, preferring a manually edited
 * value if one exists, then a sanitized version of the current post title, and
 * finally the post ID.
 *
 * @param {Object} state Editor state.
 *
 * @return {string} The current slug to be displayed in the editor
 */

function getEditedPostSlug(state) {
  return getEditedPostAttribute(state, 'slug') || (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_4__.cleanForSlug)(getEditedPostAttribute(state, 'title')) || getCurrentPostId(state);
}
/**
 * Returns the permalink for a post, split into it's three parts: the prefix,
 * the postName, and the suffix.
 *
 * @param {Object} state Editor state.
 *
 * @return {Object} An object containing the prefix, postName, and suffix for
 *                  the permalink, or null if the post is not viewable.
 */

function getPermalinkParts(state) {
  const permalinkTemplate = getEditedPostAttribute(state, 'permalink_template');

  if (!permalinkTemplate) {
    return null;
  }

  const postName = getEditedPostAttribute(state, 'slug') || getEditedPostAttribute(state, 'generated_slug');
  const [prefix, suffix] = permalinkTemplate.split(_constants__WEBPACK_IMPORTED_MODULE_12__.PERMALINK_POSTNAME_REGEX);
  return {
    prefix,
    postName,
    suffix
  };
}
/**
 * Returns whether the post is locked.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Is locked.
 */

function isPostLocked(state) {
  return state.postLock.isLocked;
}
/**
 * Returns whether post saving is locked.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Is locked.
 */

function isPostSavingLocked(state) {
  return Object.keys(state.postSavingLock).length > 0;
}
/**
 * Returns whether post autosaving is locked.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Is locked.
 */

function isPostAutosavingLocked(state) {
  return Object.keys(state.postAutosavingLock).length > 0;
}
/**
 * Returns whether the edition of the post has been taken over.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Is post lock takeover.
 */

function isPostLockTakeover(state) {
  return state.postLock.isTakeover;
}
/**
 * Returns details about the post lock user.
 *
 * @param {Object} state Global application state.
 *
 * @return {Object} A user object.
 */

function getPostLockUser(state) {
  return state.postLock.user;
}
/**
 * Returns the active post lock.
 *
 * @param {Object} state Global application state.
 *
 * @return {Object} The lock object.
 */

function getActivePostLock(state) {
  return state.postLock.activePostLock;
}
/**
 * Returns whether or not the user has the unfiltered_html capability.
 *
 * @param {Object} state Editor state.
 *
 * @return {boolean} Whether the user can or can't post unfiltered HTML.
 */

function canUserUseUnfilteredHTML(state) {
  return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.has)(getCurrentPost(state), ['_links', 'wp:action-unfiltered-html']);
}
/**
 * Returns whether the pre-publish panel should be shown
 * or skipped when the user clicks the "publish" button.
 *
 * @return {boolean} Whether the pre-publish panel should be shown or not.
 */

const isPublishSidebarEnabled = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.createRegistrySelector)(select => () => !!select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_10__.store).get('core/edit-post', 'isPublishSidebarEnabled'));
/**
 * Return the current block list.
 *
 * @param {Object} state
 * @return {Array} Block list.
 */

function getEditorBlocks(state) {
  return getEditedPostAttribute(state, 'blocks') || EMPTY_ARRAY;
}
/**
 * A block selection object.
 *
 * @typedef {Object} WPBlockSelection
 *
 * @property {string} clientId     A block client ID.
 * @property {string} attributeKey A block attribute key.
 * @property {number} offset       An attribute value offset, based on the rich
 *                                 text value. See `wp.richText.create`.
 */

/**
 * Returns the current selection start.
 *
 * @param {Object} state
 * @return {WPBlockSelection} The selection start.
 *
 * @deprecated since Gutenberg 10.0.0.
 */

function getEditorSelectionStart(state) {
  var _getEditedPostAttribu;

  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_6___default()("select('core/editor').getEditorSelectionStart", {
    since: '5.8',
    alternative: "select('core/editor').getEditorSelection"
  });
  return (_getEditedPostAttribu = getEditedPostAttribute(state, 'selection')) === null || _getEditedPostAttribu === void 0 ? void 0 : _getEditedPostAttribu.selectionStart;
}
/**
 * Returns the current selection end.
 *
 * @param {Object} state
 * @return {WPBlockSelection} The selection end.
 *
 * @deprecated since Gutenberg 10.0.0.
 */

function getEditorSelectionEnd(state) {
  var _getEditedPostAttribu2;

  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_6___default()("select('core/editor').getEditorSelectionStart", {
    since: '5.8',
    alternative: "select('core/editor').getEditorSelection"
  });
  return (_getEditedPostAttribu2 = getEditedPostAttribute(state, 'selection')) === null || _getEditedPostAttribu2 === void 0 ? void 0 : _getEditedPostAttribu2.selectionEnd;
}
/**
 * Returns the current selection.
 *
 * @param {Object} state
 * @return {WPBlockSelection} The selection end.
 */

function getEditorSelection(state) {
  return getEditedPostAttribute(state, 'selection');
}
/**
 * Is the editor ready
 *
 * @param {Object} state
 * @return {boolean} is Ready.
 */

function __unstableIsEditorReady(state) {
  return state.isReady;
}
/**
 * Returns the post editor settings.
 *
 * @param {Object} state Editor state.
 *
 * @return {Object} The editor settings object.
 */

function getEditorSettings(state) {
  return state.editorSettings;
}
/*
 * Backward compatibility
 */

/**
 * Returns state object prior to a specified optimist transaction ID, or `null`
 * if the transaction corresponding to the given ID cannot be found.
 *
 * @deprecated since Gutenberg 9.7.0.
 */

function getStateBeforeOptimisticTransaction() {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_6___default()("select('core/editor').getStateBeforeOptimisticTransaction", {
    since: '5.7',
    hint: 'No state history is kept on this store anymore'
  });
  return null;
}
/**
 * Returns true if an optimistic transaction is pending commit, for which the
 * before state satisfies the given predicate function.
 *
 * @deprecated since Gutenberg 9.7.0.
 */

function inSomeHistory() {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_6___default()("select('core/editor').inSomeHistory", {
    since: '5.7',
    hint: 'No state history is kept on this store anymore'
  });
  return false;
}

function getBlockEditorSelector(name) {
  return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.createRegistrySelector)(select => function (state) {
    _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_6___default()("`wp.data.select( 'core/editor' )." + name + '`', {
      since: '5.3',
      alternative: "`wp.data.select( 'core/block-editor' )." + name + '`',
      version: '6.2'
    });

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.store)[name](...args);
  });
}
/**
 * @see getBlockName in core/block-editor store.
 */


const getBlockName = getBlockEditorSelector('getBlockName');
/**
 * @see isBlockValid in core/block-editor store.
 */

const isBlockValid = getBlockEditorSelector('isBlockValid');
/**
 * @see getBlockAttributes in core/block-editor store.
 */

const getBlockAttributes = getBlockEditorSelector('getBlockAttributes');
/**
 * @see getBlock in core/block-editor store.
 */

const getBlock = getBlockEditorSelector('getBlock');
/**
 * @see getBlocks in core/block-editor store.
 */

const getBlocks = getBlockEditorSelector('getBlocks');
/**
 * @see getClientIdsOfDescendants in core/block-editor store.
 */

const getClientIdsOfDescendants = getBlockEditorSelector('getClientIdsOfDescendants');
/**
 * @see getClientIdsWithDescendants in core/block-editor store.
 */

const getClientIdsWithDescendants = getBlockEditorSelector('getClientIdsWithDescendants');
/**
 * @see getGlobalBlockCount in core/block-editor store.
 */

const getGlobalBlockCount = getBlockEditorSelector('getGlobalBlockCount');
/**
 * @see getBlocksByClientId in core/block-editor store.
 */

const getBlocksByClientId = getBlockEditorSelector('getBlocksByClientId');
/**
 * @see getBlockCount in core/block-editor store.
 */

const getBlockCount = getBlockEditorSelector('getBlockCount');
/**
 * @see getBlockSelectionStart in core/block-editor store.
 */

const getBlockSelectionStart = getBlockEditorSelector('getBlockSelectionStart');
/**
 * @see getBlockSelectionEnd in core/block-editor store.
 */

const getBlockSelectionEnd = getBlockEditorSelector('getBlockSelectionEnd');
/**
 * @see getSelectedBlockCount in core/block-editor store.
 */

const getSelectedBlockCount = getBlockEditorSelector('getSelectedBlockCount');
/**
 * @see hasSelectedBlock in core/block-editor store.
 */

const hasSelectedBlock = getBlockEditorSelector('hasSelectedBlock');
/**
 * @see getSelectedBlockClientId in core/block-editor store.
 */

const getSelectedBlockClientId = getBlockEditorSelector('getSelectedBlockClientId');
/**
 * @see getSelectedBlock in core/block-editor store.
 */

const getSelectedBlock = getBlockEditorSelector('getSelectedBlock');
/**
 * @see getBlockRootClientId in core/block-editor store.
 */

const getBlockRootClientId = getBlockEditorSelector('getBlockRootClientId');
/**
 * @see getBlockHierarchyRootClientId in core/block-editor store.
 */

const getBlockHierarchyRootClientId = getBlockEditorSelector('getBlockHierarchyRootClientId');
/**
 * @see getAdjacentBlockClientId in core/block-editor store.
 */

const getAdjacentBlockClientId = getBlockEditorSelector('getAdjacentBlockClientId');
/**
 * @see getPreviousBlockClientId in core/block-editor store.
 */

const getPreviousBlockClientId = getBlockEditorSelector('getPreviousBlockClientId');
/**
 * @see getNextBlockClientId in core/block-editor store.
 */

const getNextBlockClientId = getBlockEditorSelector('getNextBlockClientId');
/**
 * @see getSelectedBlocksInitialCaretPosition in core/block-editor store.
 */

const getSelectedBlocksInitialCaretPosition = getBlockEditorSelector('getSelectedBlocksInitialCaretPosition');
/**
 * @see getMultiSelectedBlockClientIds in core/block-editor store.
 */

const getMultiSelectedBlockClientIds = getBlockEditorSelector('getMultiSelectedBlockClientIds');
/**
 * @see getMultiSelectedBlocks in core/block-editor store.
 */

const getMultiSelectedBlocks = getBlockEditorSelector('getMultiSelectedBlocks');
/**
 * @see getFirstMultiSelectedBlockClientId in core/block-editor store.
 */

const getFirstMultiSelectedBlockClientId = getBlockEditorSelector('getFirstMultiSelectedBlockClientId');
/**
 * @see getLastMultiSelectedBlockClientId in core/block-editor store.
 */

const getLastMultiSelectedBlockClientId = getBlockEditorSelector('getLastMultiSelectedBlockClientId');
/**
 * @see isFirstMultiSelectedBlock in core/block-editor store.
 */

const isFirstMultiSelectedBlock = getBlockEditorSelector('isFirstMultiSelectedBlock');
/**
 * @see isBlockMultiSelected in core/block-editor store.
 */

const isBlockMultiSelected = getBlockEditorSelector('isBlockMultiSelected');
/**
 * @see isAncestorMultiSelected in core/block-editor store.
 */

const isAncestorMultiSelected = getBlockEditorSelector('isAncestorMultiSelected');
/**
 * @see getMultiSelectedBlocksStartClientId in core/block-editor store.
 */

const getMultiSelectedBlocksStartClientId = getBlockEditorSelector('getMultiSelectedBlocksStartClientId');
/**
 * @see getMultiSelectedBlocksEndClientId in core/block-editor store.
 */

const getMultiSelectedBlocksEndClientId = getBlockEditorSelector('getMultiSelectedBlocksEndClientId');
/**
 * @see getBlockOrder in core/block-editor store.
 */

const getBlockOrder = getBlockEditorSelector('getBlockOrder');
/**
 * @see getBlockIndex in core/block-editor store.
 */

const getBlockIndex = getBlockEditorSelector('getBlockIndex');
/**
 * @see isBlockSelected in core/block-editor store.
 */

const isBlockSelected = getBlockEditorSelector('isBlockSelected');
/**
 * @see hasSelectedInnerBlock in core/block-editor store.
 */

const hasSelectedInnerBlock = getBlockEditorSelector('hasSelectedInnerBlock');
/**
 * @see isBlockWithinSelection in core/block-editor store.
 */

const isBlockWithinSelection = getBlockEditorSelector('isBlockWithinSelection');
/**
 * @see hasMultiSelection in core/block-editor store.
 */

const hasMultiSelection = getBlockEditorSelector('hasMultiSelection');
/**
 * @see isMultiSelecting in core/block-editor store.
 */

const isMultiSelecting = getBlockEditorSelector('isMultiSelecting');
/**
 * @see isSelectionEnabled in core/block-editor store.
 */

const isSelectionEnabled = getBlockEditorSelector('isSelectionEnabled');
/**
 * @see getBlockMode in core/block-editor store.
 */

const getBlockMode = getBlockEditorSelector('getBlockMode');
/**
 * @see isTyping in core/block-editor store.
 */

const isTyping = getBlockEditorSelector('isTyping');
/**
 * @see isCaretWithinFormattedText in core/block-editor store.
 */

const isCaretWithinFormattedText = getBlockEditorSelector('isCaretWithinFormattedText');
/**
 * @see getBlockInsertionPoint in core/block-editor store.
 */

const getBlockInsertionPoint = getBlockEditorSelector('getBlockInsertionPoint');
/**
 * @see isBlockInsertionPointVisible in core/block-editor store.
 */

const isBlockInsertionPointVisible = getBlockEditorSelector('isBlockInsertionPointVisible');
/**
 * @see isValidTemplate in core/block-editor store.
 */

const isValidTemplate = getBlockEditorSelector('isValidTemplate');
/**
 * @see getTemplate in core/block-editor store.
 */

const getTemplate = getBlockEditorSelector('getTemplate');
/**
 * @see getTemplateLock in core/block-editor store.
 */

const getTemplateLock = getBlockEditorSelector('getTemplateLock');
/**
 * @see canInsertBlockType in core/block-editor store.
 */

const canInsertBlockType = getBlockEditorSelector('canInsertBlockType');
/**
 * @see getInserterItems in core/block-editor store.
 */

const getInserterItems = getBlockEditorSelector('getInserterItems');
/**
 * @see hasInserterItems in core/block-editor store.
 */

const hasInserterItems = getBlockEditorSelector('hasInserterItems');
/**
 * @see getBlockListSettings in core/block-editor store.
 */

const getBlockListSettings = getBlockEditorSelector('getBlockListSettings');
/**
 * Returns the default template types.
 *
 * @param {Object} state Global application state.
 *
 * @return {Object} The template types.
 */

function __experimentalGetDefaultTemplateTypes(state) {
  var _getEditorSettings;

  return (_getEditorSettings = getEditorSettings(state)) === null || _getEditorSettings === void 0 ? void 0 : _getEditorSettings.defaultTemplateTypes;
}
/**
 * Returns the default template part areas.
 *
 * @param {Object} state Global application state.
 *
 * @return {Array} The template part areas.
 */

const __experimentalGetDefaultTemplatePartAreas = (0,rememo__WEBPACK_IMPORTED_MODULE_1__["default"])(state => {
  var _getEditorSettings2;

  const areas = ((_getEditorSettings2 = getEditorSettings(state)) === null || _getEditorSettings2 === void 0 ? void 0 : _getEditorSettings2.defaultTemplatePartAreas) || [];
  return areas === null || areas === void 0 ? void 0 : areas.map(item => {
    return { ...item,
      icon: (0,_utils_get_template_part_icon__WEBPACK_IMPORTED_MODULE_13__.getTemplatePartIcon)(item.icon)
    };
  });
}, state => {
  var _getEditorSettings3;

  return [(_getEditorSettings3 = getEditorSettings(state)) === null || _getEditorSettings3 === void 0 ? void 0 : _getEditorSettings3.defaultTemplatePartAreas];
});
/**
 * Returns a default template type searched by slug.
 *
 * @param {Object} state Global application state.
 * @param {string} slug  The template type slug.
 *
 * @return {Object} The template type.
 */

const __experimentalGetDefaultTemplateType = (0,rememo__WEBPACK_IMPORTED_MODULE_1__["default"])((state, slug) => (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(__experimentalGetDefaultTemplateTypes(state), {
  slug
}) || {}, (state, slug) => [__experimentalGetDefaultTemplateTypes(state), slug]);
/**
 * Given a template entity, return information about it which is ready to be
 * rendered, such as the title, description, and icon.
 *
 * @param {Object} state    Global application state.
 * @param {Object} template The template for which we need information.
 * @return {Object} Information about the template, including title, description, and icon.
 */

function __experimentalGetTemplateInfo(state, template) {
  var _experimentalGetDefa;

  if (!template) {
    return {};
  }

  const {
    excerpt,
    slug,
    title,
    area
  } = template;

  const {
    title: defaultTitle,
    description: defaultDescription
  } = __experimentalGetDefaultTemplateType(state, slug);

  const templateTitle = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isString)(title) ? title : title === null || title === void 0 ? void 0 : title.rendered;
  const templateDescription = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isString)(excerpt) ? excerpt : excerpt === null || excerpt === void 0 ? void 0 : excerpt.raw;
  const templateIcon = ((_experimentalGetDefa = __experimentalGetDefaultTemplatePartAreas(state).find(item => area === item.area)) === null || _experimentalGetDefa === void 0 ? void 0 : _experimentalGetDefa.icon) || _wordpress_icons__WEBPACK_IMPORTED_MODULE_14__["default"];
  return {
    title: templateTitle && templateTitle !== slug ? templateTitle : defaultTitle || slug,
    description: templateDescription || defaultDescription,
    icon: templateIcon
  };
}
/**
 * Returns a post type label depending on the current post.
 *
 * @param {Object} state Global application state.
 *
 * @return {string|undefined} The post type label if available, otherwise undefined.
 */

const getPostTypeLabel = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.createRegistrySelector)(select => state => {
  var _postType$labels;

  const currentPostType = getCurrentPostType(state);
  const postType = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_9__.store).getPostType(currentPostType); // Disable reason: Post type labels object is shaped like this.
  // eslint-disable-next-line camelcase

  return postType === null || postType === void 0 ? void 0 : (_postType$labels = postType.labels) === null || _postType$labels === void 0 ? void 0 : _postType$labels.singular_name;
});


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/store/utils/notice-builder.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/store/utils/notice-builder.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNotificationArgumentsForSaveFail": function() { return /* binding */ getNotificationArgumentsForSaveFail; },
/* harmony export */   "getNotificationArgumentsForSaveSuccess": function() { return /* binding */ getNotificationArgumentsForSaveSuccess; },
/* harmony export */   "getNotificationArgumentsForTrashFail": function() { return /* binding */ getNotificationArgumentsForTrashFail; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./node_modules/@wordpress/editor/build-module/store/constants.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


/**
 * External dependencies
 */


/**
 * Builds the arguments for a success notification dispatch.
 *
 * @param {Object} data Incoming data to build the arguments from.
 *
 * @return {Array} Arguments for dispatch. An empty array signals no
 *                 notification should be sent.
 */

function getNotificationArgumentsForSaveSuccess(data) {
  const {
    previousPost,
    post,
    postType
  } = data; // Autosaves are neither shown a notice nor redirected.

  if ((0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(data.options, ['isAutosave'])) {
    return [];
  } // No notice is shown after trashing a post


  if (post.status === 'trash' && previousPost.status !== 'trash') {
    return [];
  }

  const publishStatus = ['publish', 'private', 'future'];
  const isPublished = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.includes)(publishStatus, previousPost.status);
  const willPublish = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.includes)(publishStatus, post.status);
  let noticeMessage;
  let shouldShowLink = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(postType, ['viewable'], false);
  let isDraft; // Always should a notice, which will be spoken for accessibility.

  if (!isPublished && !willPublish) {
    // If saving a non-published post, don't show notice.
    noticeMessage = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Draft saved.');
    isDraft = true;
  } else if (isPublished && !willPublish) {
    // If undoing publish status, show specific notice.
    noticeMessage = postType.labels.item_reverted_to_draft;
    shouldShowLink = false;
  } else if (!isPublished && willPublish) {
    // If publishing or scheduling a post, show the corresponding
    // publish message.
    noticeMessage = {
      publish: postType.labels.item_published,
      private: postType.labels.item_published_privately,
      future: postType.labels.item_scheduled
    }[post.status];
  } else {
    // Generic fallback notice.
    noticeMessage = postType.labels.item_updated;
  }

  const actions = [];

  if (shouldShowLink) {
    actions.push({
      label: isDraft ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('View Preview') : postType.labels.view_item,
      url: post.link
    });
  }

  return [noticeMessage, {
    id: _constants__WEBPACK_IMPORTED_MODULE_2__.SAVE_POST_NOTICE_ID,
    type: 'snackbar',
    actions
  }];
}
/**
 * Builds the fail notification arguments for dispatch.
 *
 * @param {Object} data Incoming data to build the arguments with.
 *
 * @return {Array} Arguments for dispatch. An empty array signals no
 *                 notification should be sent.
 */

function getNotificationArgumentsForSaveFail(data) {
  const {
    post,
    edits,
    error
  } = data;

  if (error && 'rest_autosave_no_changes' === error.code) {
    // Autosave requested a new autosave, but there were no changes. This shouldn't
    // result in an error notice for the user.
    return [];
  }

  const publishStatus = ['publish', 'private', 'future'];
  const isPublished = publishStatus.indexOf(post.status) !== -1; // If the post was being published, we show the corresponding publish error message
  // Unless we publish an "updating failed" message.

  const messages = {
    publish: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Publishing failed.'),
    private: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Publishing failed.'),
    future: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Scheduling failed.')
  };
  let noticeMessage = !isPublished && publishStatus.indexOf(edits.status) !== -1 ? messages[edits.status] : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Updating failed.'); // Check if message string contains HTML. Notice text is currently only
  // supported as plaintext, and stripping the tags may muddle the meaning.

  if (error.message && !/<\/?[^>]*>/.test(error.message)) {
    noticeMessage = [noticeMessage, error.message].join(' ');
  }

  return [noticeMessage, {
    id: _constants__WEBPACK_IMPORTED_MODULE_2__.SAVE_POST_NOTICE_ID
  }];
}
/**
 * Builds the trash fail notification arguments for dispatch.
 *
 * @param {Object} data
 *
 * @return {Array} Arguments for dispatch.
 */

function getNotificationArgumentsForTrashFail(data) {
  return [data.error.message && data.error.code !== 'unknown_error' ? data.error.message : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Trashing failed'), {
    id: _constants__WEBPACK_IMPORTED_MODULE_2__.TRASH_POST_NOTICE_ID
  }];
}


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/utils/get-template-part-icon.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/utils/get-template-part-icon.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTemplatePartIcon": function() { return /* binding */ getTemplatePartIcon; }
/* harmony export */ });
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/header.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/footer.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/sidebar.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/symbol-filled.js");
/**
 * WordPress dependencies
 */

/**
 * Helper function to retrieve the corresponding icon by name.
 *
 * @param {string} iconName The name of the icon.
 *
 * @return {Object} The corresponding icon.
 */

function getTemplatePartIcon(iconName) {
  if ('header' === iconName) {
    return _wordpress_icons__WEBPACK_IMPORTED_MODULE_0__["default"];
  } else if ('footer' === iconName) {
    return _wordpress_icons__WEBPACK_IMPORTED_MODULE_1__["default"];
  } else if ('sidebar' === iconName) {
    return _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__["default"];
  }

  return _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__["default"];
}


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/utils/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/utils/index.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cleanForSlug": function() { return /* reexport safe */ _url_js__WEBPACK_IMPORTED_MODULE_1__.cleanForSlug; },
/* harmony export */   "getTemplatePartIcon": function() { return /* reexport safe */ _get_template_part_icon__WEBPACK_IMPORTED_MODULE_2__.getTemplatePartIcon; },
/* harmony export */   "mediaUpload": function() { return /* reexport safe */ _media_upload__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _media_upload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media-upload */ "./node_modules/@wordpress/editor/build-module/utils/media-upload/index.js");
/* harmony import */ var _url_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./url.js */ "./node_modules/@wordpress/editor/build-module/utils/url.js");
/* harmony import */ var _get_template_part_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-template-part-icon */ "./node_modules/@wordpress/editor/build-module/utils/get-template-part-icon.js");
/**
 * Internal dependencies
 */






/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/utils/media-upload/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/utils/media-upload/index.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ mediaUpload; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_media_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/media-utils */ "@wordpress/media-utils");
/* harmony import */ var _wordpress_media_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_media_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/editor/build-module/store/index.js");
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
 * Upload a media file when the file upload button is activated.
 * Wrapper around mediaUpload() that injects the current post ID.
 *
 * @param {Object}   $0                   Parameters object passed to the function.
 * @param {?Object}  $0.additionalData    Additional data to include in the request.
 * @param {string}   $0.allowedTypes      Array with the types of media that can be uploaded, if unset all types are allowed.
 * @param {Array}    $0.filesList         List of files.
 * @param {?number}  $0.maxUploadFileSize Maximum upload size in bytes allowed for the site.
 * @param {Function} $0.onError           Function called when an error happens.
 * @param {Function} $0.onFileChange      Function called each time a file or a temporary representation of the file is available.
 */

function mediaUpload(_ref) {
  let {
    additionalData = {},
    allowedTypes,
    filesList,
    maxUploadFileSize,
    onError = lodash__WEBPACK_IMPORTED_MODULE_0__.noop,
    onFileChange
  } = _ref;
  const {
    getCurrentPostId,
    getEditorSettings
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.select)(_store__WEBPACK_IMPORTED_MODULE_3__.store);
  const wpAllowedMimeTypes = getEditorSettings().allowedMimeTypes;
  maxUploadFileSize = maxUploadFileSize || getEditorSettings().maxUploadFileSize;
  (0,_wordpress_media_utils__WEBPACK_IMPORTED_MODULE_2__.uploadMedia)({
    allowedTypes,
    filesList,
    onFileChange,
    additionalData: {
      post: getCurrentPostId(),
      ...additionalData
    },
    maxUploadFileSize,
    onError: _ref2 => {
      let {
        message
      } = _ref2;
      return onError(message);
    },
    wpAllowedMimeTypes
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/utils/terms.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/utils/terms.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildTermsTree": function() { return /* binding */ buildTermsTree; },
/* harmony export */   "unescapeString": function() { return /* binding */ unescapeString; },
/* harmony export */   "unescapeTerm": function() { return /* binding */ unescapeTerm; },
/* harmony export */   "unescapeTerms": function() { return /* binding */ unescapeTerms; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

/**
 * Returns terms in a tree form.
 *
 * @param {Array} flatTerms Array of terms in flat format.
 *
 * @return {Array} Array of terms in tree format.
 */

function buildTermsTree(flatTerms) {
  const flatTermsWithParentAndChildren = flatTerms.map(term => {
    return {
      children: [],
      parent: null,
      ...term
    };
  });
  const termsByParent = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.groupBy)(flatTermsWithParentAndChildren, 'parent');

  if (termsByParent.null && termsByParent.null.length) {
    return flatTermsWithParentAndChildren;
  }

  const fillWithChildren = terms => {
    return terms.map(term => {
      const children = termsByParent[term.id];
      return { ...term,
        children: children && children.length ? fillWithChildren(children) : []
      };
    });
  };

  return fillWithChildren(termsByParent['0'] || []);
} // Lodash unescape function handles &#39; but not &#039; which may be return in some API requests.

const unescapeString = arg => {
  return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.unescape)(arg.replace('&#039;', "'"));
};
/**
 * Returns a term object with name unescaped.
 * The unescape of the name property is done using lodash unescape function.
 *
 * @param {Object} term The term object to unescape.
 *
 * @return {Object} Term object with name property unescaped.
 */

const unescapeTerm = term => {
  return { ...term,
    name: unescapeString(term.name)
  };
};
/**
 * Returns an array of term objects with names unescaped.
 * The unescape of each term is performed using the unescapeTerm function.
 *
 * @param {Object[]} terms Array of term objects to unescape.
 *
 * @return {Object[]} Array of term objects unescaped.
 */

const unescapeTerms = terms => {
  return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(terms, unescapeTerm);
};


/***/ }),

/***/ "./node_modules/@wordpress/editor/build-module/utils/url.js":
/*!******************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/utils/url.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cleanForSlug": function() { return /* binding */ cleanForSlug; }
/* harmony export */ });
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/deprecated */ "@wordpress/deprecated");
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


/**
 * Performs some basic cleanup of a string for use as a post slug
 *
 * This replicates some of what sanitize_title() does in WordPress core, but
 * is only designed to approximate what the slug will be.
 *
 * Converts Latin-1 Supplement and Latin Extended-A letters to basic Latin letters.
 * Removes combining diacritical marks. Converts whitespace, periods,
 * and forward slashes to hyphens. Removes any remaining non-word characters
 * except hyphens and underscores. Converts remaining string to lowercase.
 * It does not account for octets, HTML entities, or other encoded characters.
 *
 * @param {string} string Title or slug to be processed
 *
 * @return {string} Processed string
 */

function cleanForSlug(string) {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_1___default()('wp.editor.cleanForSlug', {
    since: '12.7',
    plugin: 'Gutenberg',
    alternative: 'wp.url.cleanForSlug'
  });
  return (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_0__.cleanForSlug)(string);
}


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/icon/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/icon/index.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/***/ "./node_modules/@wordpress/icons/build-module/library/backup.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/backup.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const backup = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M5.5 12h1.75l-2.5 3-2.5-3H4a8 8 0 113.134 6.35l.907-1.194A6.5 6.5 0 105.5 12zm9.53 1.97l-2.28-2.28V8.5a.75.75 0 00-1.5 0V12a.747.747 0 00.218.529l1.282-.84-1.28.842 2.5 2.5a.75.75 0 101.06-1.061z"
}));
/* harmony default export */ __webpack_exports__["default"] = (backup);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/check.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/check.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const check = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"
}));
/* harmony default export */ __webpack_exports__["default"] = (check);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/close-small.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/close-small.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const closeSmall = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"
}));
/* harmony default export */ __webpack_exports__["default"] = (closeSmall);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/cloud-upload.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/cloud-upload.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const cloudUpload = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M17.3 10.1c0-2.5-2.1-4.4-4.8-4.4-2.2 0-4.1 1.4-4.6 3.3h-.2C5.7 9 4 10.7 4 12.8c0 2.1 1.7 3.8 3.7 3.8h9c1.8 0 3.2-1.5 3.2-3.3.1-1.6-1.1-2.9-2.6-3.2zm-.5 5.1h-4v-2.4L14 14l1-1-3-3-3 3 1 1 1.2-1.2v2.4H7.7c-1.2 0-2.2-1.1-2.2-2.3s1-2.4 2.2-2.4H9l.3-1.1c.4-1.3 1.7-2.2 3.2-2.2 1.8 0 3.3 1.3 3.3 2.9v1.3l1.3.2c.8.1 1.4.9 1.4 1.8 0 1-.8 1.8-1.7 1.8z"
}));
/* harmony default export */ __webpack_exports__["default"] = (cloudUpload);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/cloud.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/cloud.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const cloud = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M17.3 10.1c0-2.5-2.1-4.4-4.8-4.4-2.2 0-4.1 1.4-4.6 3.3h-.2C5.7 9 4 10.7 4 12.8c0 2.1 1.7 3.8 3.7 3.8h9c1.8 0 3.2-1.5 3.2-3.3.1-1.6-1.1-2.9-2.6-3.2zm-.5 5.1h-9c-1.2 0-2.2-1.1-2.2-2.3s1-2.4 2.2-2.4h1.3l.3-1.1c.4-1.3 1.7-2.2 3.2-2.2 1.8 0 3.3 1.3 3.3 2.9v1.3l1.3.2c.8.1 1.4.9 1.4 1.8-.1 1-.9 1.8-1.8 1.8z"
}));
/* harmony default export */ __webpack_exports__["default"] = (cloud);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/footer.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/footer.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const footer = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fillRule: "evenodd",
  d: "M18 5.5h-8v8h8.5V6a.5.5 0 00-.5-.5zm-9.5 8h-3V6a.5.5 0 01.5-.5h2.5v8zM6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (footer);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/header.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/header.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const header = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M18.5 10.5H10v8h8a.5.5 0 00.5-.5v-7.5zm-10 0h-3V18a.5.5 0 00.5.5h2.5v-8zM6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (header);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/info.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/info.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const info = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M12 3.2c-4.8 0-8.8 3.9-8.8 8.8 0 4.8 3.9 8.8 8.8 8.8 4.8 0 8.8-3.9 8.8-8.8 0-4.8-4-8.8-8.8-8.8zm0 16c-4 0-7.2-3.3-7.2-7.2C4.8 8 8 4.8 12 4.8s7.2 3.3 7.2 7.2c0 4-3.2 7.2-7.2 7.2zM11 17h2v-6h-2v6zm0-8h2V7h-2v2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (info);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/layout.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/layout.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const layout = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M18 5.5H6a.5.5 0 00-.5.5v3h13V6a.5.5 0 00-.5-.5zm.5 5H10v8h8a.5.5 0 00.5-.5v-7.5zm-10 0h-3V18a.5.5 0 00.5.5h2.5v-8zM6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (layout);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/redo.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/redo.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const redo = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M15.6 6.5l-1.1 1 2.9 3.3H8c-.9 0-1.7.3-2.3.9-1.4 1.5-1.4 4.2-1.4 5.6v.2h1.5v-.3c0-1.1 0-3.5 1-4.5.3-.3.7-.5 1.3-.5h9.2L14.5 15l1.1 1.1 4.6-4.6-4.6-5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (redo);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/sidebar.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/sidebar.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const sidebar = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M18 5.5H6a.5.5 0 00-.5.5v3h13V6a.5.5 0 00-.5-.5zm.5 5H10v8h8a.5.5 0 00.5-.5v-7.5zM6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (sidebar);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/symbol-filled.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/symbol-filled.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const symbolFilled = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M21.3 10.8l-5.6-5.6c-.7-.7-1.8-.7-2.5 0l-5.6 5.6c-.7.7-.7 1.8 0 2.5l5.6 5.6c.3.3.8.5 1.2.5s.9-.2 1.2-.5l5.6-5.6c.8-.7.8-1.9.1-2.5zm-17.6 1L10 5.5l-1-1-6.3 6.3c-.7.7-.7 1.8 0 2.5L9 19.5l1.1-1.1-6.3-6.3c-.2 0-.2-.2-.1-.3z"
}));
/* harmony default export */ __webpack_exports__["default"] = (symbolFilled);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/undo.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/undo.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const undo = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M18.3 11.7c-.6-.6-1.4-.9-2.3-.9H6.7l2.9-3.3-1.1-1-4.5 5L8.5 16l1-1-2.7-2.7H16c.5 0 .9.2 1.3.5 1 1 1 3.4 1 4.5v.3h1.5v-.2c0-1.5 0-4.3-1.5-5.7z"
}));
/* harmony default export */ __webpack_exports__["default"] = (undo);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/wordpress.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/wordpress.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const wordpress = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M20 10c0-5.51-4.49-10-10-10C4.48 0 0 4.49 0 10c0 5.52 4.48 10 10 10 5.51 0 10-4.48 10-10zM7.78 15.37L4.37 6.22c.55-.02 1.17-.08 1.17-.08.5-.06.44-1.13-.06-1.11 0 0-1.45.11-2.37.11-.18 0-.37 0-.58-.01C4.12 2.69 6.87 1.11 10 1.11c2.33 0 4.45.87 6.05 2.34-.68-.11-1.65.39-1.65 1.58 0 .74.45 1.36.9 2.1.35.61.55 1.36.55 2.46 0 1.49-1.4 5-1.4 5l-3.03-8.37c.54-.02.82-.17.82-.17.5-.05.44-1.25-.06-1.22 0 0-1.44.12-2.38.12-.87 0-2.33-.12-2.33-.12-.5-.03-.56 1.2-.06 1.22l.92.08 1.26 3.41zM17.41 10c.24-.64.74-1.87.43-4.25.7 1.29 1.05 2.71 1.05 4.25 0 3.29-1.73 6.24-4.4 7.78.97-2.59 1.94-5.2 2.92-7.78zM6.1 18.09C3.12 16.65 1.11 13.53 1.11 10c0-1.3.23-2.48.72-3.59C3.25 10.3 4.67 14.2 6.1 18.09zm4.03-6.63l2.58 6.98c-.86.29-1.76.45-2.71.45-.79 0-1.57-.11-2.29-.33.81-2.38 1.62-4.74 2.42-7.1z"
}));
/* harmony default export */ __webpack_exports__["default"] = (wordpress);


/***/ }),

/***/ "./node_modules/autosize/dist/autosize.js":
/*!************************************************!*\
  !*** ./node_modules/autosize/dist/autosize.js ***!
  \************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	autosize 4.0.4
	license: MIT
	http://www.jacklmoore.com/autosize
*/
(function (global, factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else { var mod; }
})(this, function (module, exports) {
	'use strict';

	var map = typeof Map === "function" ? new Map() : function () {
		var keys = [];
		var values = [];

		return {
			has: function has(key) {
				return keys.indexOf(key) > -1;
			},
			get: function get(key) {
				return values[keys.indexOf(key)];
			},
			set: function set(key, value) {
				if (keys.indexOf(key) === -1) {
					keys.push(key);
					values.push(value);
				}
			},
			delete: function _delete(key) {
				var index = keys.indexOf(key);
				if (index > -1) {
					keys.splice(index, 1);
					values.splice(index, 1);
				}
			}
		};
	}();

	var createEvent = function createEvent(name) {
		return new Event(name, { bubbles: true });
	};
	try {
		new Event('test');
	} catch (e) {
		// IE does not support `new Event()`
		createEvent = function createEvent(name) {
			var evt = document.createEvent('Event');
			evt.initEvent(name, true, false);
			return evt;
		};
	}

	function assign(ta) {
		if (!ta || !ta.nodeName || ta.nodeName !== 'TEXTAREA' || map.has(ta)) return;

		var heightOffset = null;
		var clientWidth = null;
		var cachedHeight = null;

		function init() {
			var style = window.getComputedStyle(ta, null);

			if (style.resize === 'vertical') {
				ta.style.resize = 'none';
			} else if (style.resize === 'both') {
				ta.style.resize = 'horizontal';
			}

			if (style.boxSizing === 'content-box') {
				heightOffset = -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom));
			} else {
				heightOffset = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
			}
			// Fix when a textarea is not on document body and heightOffset is Not a Number
			if (isNaN(heightOffset)) {
				heightOffset = 0;
			}

			update();
		}

		function changeOverflow(value) {
			{
				// Chrome/Safari-specific fix:
				// When the textarea y-overflow is hidden, Chrome/Safari do not reflow the text to account for the space
				// made available by removing the scrollbar. The following forces the necessary text reflow.
				var width = ta.style.width;
				ta.style.width = '0px';
				// Force reflow:
				/* jshint ignore:start */
				ta.offsetWidth;
				/* jshint ignore:end */
				ta.style.width = width;
			}

			ta.style.overflowY = value;
		}

		function getParentOverflows(el) {
			var arr = [];

			while (el && el.parentNode && el.parentNode instanceof Element) {
				if (el.parentNode.scrollTop) {
					arr.push({
						node: el.parentNode,
						scrollTop: el.parentNode.scrollTop
					});
				}
				el = el.parentNode;
			}

			return arr;
		}

		function resize() {
			if (ta.scrollHeight === 0) {
				// If the scrollHeight is 0, then the element probably has display:none or is detached from the DOM.
				return;
			}

			var overflows = getParentOverflows(ta);
			var docTop = document.documentElement && document.documentElement.scrollTop; // Needed for Mobile IE (ticket #240)

			ta.style.height = '';
			ta.style.height = ta.scrollHeight + heightOffset + 'px';

			// used to check if an update is actually necessary on window.resize
			clientWidth = ta.clientWidth;

			// prevents scroll-position jumping
			overflows.forEach(function (el) {
				el.node.scrollTop = el.scrollTop;
			});

			if (docTop) {
				document.documentElement.scrollTop = docTop;
			}
		}

		function update() {
			resize();

			var styleHeight = Math.round(parseFloat(ta.style.height));
			var computed = window.getComputedStyle(ta, null);

			// Using offsetHeight as a replacement for computed.height in IE, because IE does not account use of border-box
			var actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(computed.height)) : ta.offsetHeight;

			// The actual height not matching the style height (set via the resize method) indicates that 
			// the max-height has been exceeded, in which case the overflow should be allowed.
			if (actualHeight < styleHeight) {
				if (computed.overflowY === 'hidden') {
					changeOverflow('scroll');
					resize();
					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
				}
			} else {
				// Normally keep overflow set to hidden, to avoid flash of scrollbar as the textarea expands.
				if (computed.overflowY !== 'hidden') {
					changeOverflow('hidden');
					resize();
					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
				}
			}

			if (cachedHeight !== actualHeight) {
				cachedHeight = actualHeight;
				var evt = createEvent('autosize:resized');
				try {
					ta.dispatchEvent(evt);
				} catch (err) {
					// Firefox will throw an error on dispatchEvent for a detached element
					// https://bugzilla.mozilla.org/show_bug.cgi?id=889376
				}
			}
		}

		var pageResize = function pageResize() {
			if (ta.clientWidth !== clientWidth) {
				update();
			}
		};

		var destroy = function (style) {
			window.removeEventListener('resize', pageResize, false);
			ta.removeEventListener('input', update, false);
			ta.removeEventListener('keyup', update, false);
			ta.removeEventListener('autosize:destroy', destroy, false);
			ta.removeEventListener('autosize:update', update, false);

			Object.keys(style).forEach(function (key) {
				ta.style[key] = style[key];
			});

			map.delete(ta);
		}.bind(ta, {
			height: ta.style.height,
			resize: ta.style.resize,
			overflowY: ta.style.overflowY,
			overflowX: ta.style.overflowX,
			wordWrap: ta.style.wordWrap
		});

		ta.addEventListener('autosize:destroy', destroy, false);

		// IE9 does not fire onpropertychange or oninput for deletions,
		// so binding to onkeyup to catch most of those events.
		// There is no way that I know of to detect something like 'cut' in IE9.
		if ('onpropertychange' in ta && 'oninput' in ta) {
			ta.addEventListener('keyup', update, false);
		}

		window.addEventListener('resize', pageResize, false);
		ta.addEventListener('input', update, false);
		ta.addEventListener('autosize:update', update, false);
		ta.style.overflowX = 'hidden';
		ta.style.wordWrap = 'break-word';

		map.set(ta, {
			destroy: destroy,
			update: update
		});

		init();
	}

	function destroy(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.destroy();
		}
	}

	function update(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.update();
		}
	}

	var autosize = null;

	// Do nothing in Node.js environment and IE8 (or lower)
	if (typeof window === 'undefined' || typeof window.getComputedStyle !== 'function') {
		autosize = function autosize(el) {
			return el;
		};
		autosize.destroy = function (el) {
			return el;
		};
		autosize.update = function (el) {
			return el;
		};
	} else {
		autosize = function autosize(el, options) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], function (x) {
					return assign(x, options);
				});
			}
			return el;
		};
		autosize.destroy = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], destroy);
			}
			return el;
		};
		autosize.update = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], update);
			}
			return el;
		};
	}

	exports.default = autosize;
	module.exports = exports['default'];
});

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/computed-style/dist/computedStyle.commonjs.js":
/*!********************************************************************!*\
  !*** ./node_modules/computed-style/dist/computedStyle.commonjs.js ***!
  \********************************************************************/
/***/ (function(module) {

// This code has been refactored for 140 bytes
// You can see the original here: https://github.com/twolfson/computedStyle/blob/04cd1da2e30fa45844f95f5cb1ac898e9b9ef050/lib/computedStyle.js
var computedStyle = function (el, prop, getComputedStyle) {
  getComputedStyle = window.getComputedStyle;

  // In one fell swoop
  return (
    // If we have getComputedStyle
    getComputedStyle ?
      // Query it
      // TODO: From CSS-Query notes, we might need (node, null) for FF
      getComputedStyle(el) :

    // Otherwise, we are in IE and use currentStyle
      el.currentStyle
  )[
    // Switch to camelCase for CSSOM
    // DEV: Grabbed from jQuery
    // https://github.com/jquery/jquery/blob/1.9-stable/src/css.js#L191-L194
    // https://github.com/jquery/jquery/blob/1.9-stable/src/core.js#L593-L597
    prop.replace(/-(\w)/gi, function (word, letter) {
      return letter.toUpperCase();
    })
  ];
};

module.exports = computedStyle;


/***/ }),

/***/ "./node_modules/line-height/lib/line-height.js":
/*!*****************************************************!*\
  !*** ./node_modules/line-height/lib/line-height.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Load in dependencies
var computedStyle = __webpack_require__(/*! computed-style */ "./node_modules/computed-style/dist/computedStyle.commonjs.js");

/**
 * Calculate the `line-height` of a given node
 * @param {HTMLElement} node Element to calculate line height of. Must be in the DOM.
 * @returns {Number} `line-height` of the element in pixels
 */
function lineHeight(node) {
  // Grab the line-height via style
  var lnHeightStr = computedStyle(node, 'line-height');
  var lnHeight = parseFloat(lnHeightStr, 10);

  // If the lineHeight did not contain a unit (i.e. it was numeric), convert it to ems (e.g. '2.3' === '2.3em')
  if (lnHeightStr === lnHeight + '') {
    // Save the old lineHeight style and update the em unit to the element
    var _lnHeightStyle = node.style.lineHeight;
    node.style.lineHeight = lnHeightStr + 'em';

    // Calculate the em based height
    lnHeightStr = computedStyle(node, 'line-height');
    lnHeight = parseFloat(lnHeightStr, 10);

    // Revert the lineHeight style
    if (_lnHeightStyle) {
      node.style.lineHeight = _lnHeightStyle;
    } else {
      delete node.style.lineHeight;
    }
  }

  // If the lineHeight is in `pt`, convert it to pixels (4px for 3pt)
  // DEV: `em` units are converted to `pt` in IE6
  // Conversion ratio from https://developer.mozilla.org/en-US/docs/Web/CSS/length
  if (lnHeightStr.indexOf('pt') !== -1) {
    lnHeight *= 4;
    lnHeight /= 3;
  // Otherwise, if the lineHeight is in `mm`, convert it to pixels (96px for 25.4mm)
  } else if (lnHeightStr.indexOf('mm') !== -1) {
    lnHeight *= 96;
    lnHeight /= 25.4;
  // Otherwise, if the lineHeight is in `cm`, convert it to pixels (96px for 2.54cm)
  } else if (lnHeightStr.indexOf('cm') !== -1) {
    lnHeight *= 96;
    lnHeight /= 2.54;
  // Otherwise, if the lineHeight is in `in`, convert it to pixels (96px for 1in)
  } else if (lnHeightStr.indexOf('in') !== -1) {
    lnHeight *= 96;
  // Otherwise, if the lineHeight is in `pc`, convert it to pixels (12pt for 1pc)
  } else if (lnHeightStr.indexOf('pc') !== -1) {
    lnHeight *= 16;
  }

  // Continue our computation
  lnHeight = Math.round(lnHeight);

  // If the line-height is "normal", calculate by font-size
  if (lnHeightStr === 'normal') {
    // Create a temporary node
    var nodeName = node.nodeName;
    var _node = document.createElement(nodeName);
    _node.innerHTML = '&nbsp;';

    // If we have a text area, reset it to only 1 row
    // https://github.com/twolfson/line-height/issues/4
    if (nodeName.toUpperCase() === 'TEXTAREA') {
      _node.setAttribute('rows', '1');
    }

    // Set the font-size of the element
    var fontSizeStr = computedStyle(node, 'font-size');
    _node.style.fontSize = fontSizeStr;

    // Remove default padding/border which can affect offset height
    // https://github.com/twolfson/line-height/issues/4
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetHeight
    _node.style.padding = '0px';
    _node.style.border = '0px';

    // Append it to the body
    var body = document.body;
    body.appendChild(_node);

    // Assume the line height of the element is the height
    var height = _node.offsetHeight;
    lnHeight = height;

    // Remove our child from the DOM
    body.removeChild(_node);
  }

  // Return the calculated height
  return lnHeight;
}

// Export lineHeight
module.exports = lineHeight;


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ (function(module) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ (function(module) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
  !*** ./node_modules/prop-types/lib/has.js ***!
  \********************************************/
/***/ (function(module) {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/react-autosize-textarea/lib/TextareaAutosize.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-autosize-textarea/lib/TextareaAutosize.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
exports.__esModule = true;
var React = __webpack_require__(/*! react */ "react");
var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
var autosize = __webpack_require__(/*! autosize */ "./node_modules/autosize/dist/autosize.js");
var _getLineHeight = __webpack_require__(/*! line-height */ "./node_modules/line-height/lib/line-height.js");
var getLineHeight = _getLineHeight;
var RESIZED = "autosize:resized";
/**
 * A light replacement for built-in textarea component
 * which automaticaly adjusts its height to match the content
 */
var TextareaAutosizeClass = /** @class */ (function (_super) {
    __extends(TextareaAutosizeClass, _super);
    function TextareaAutosizeClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            lineHeight: null
        };
        _this.textarea = null;
        _this.onResize = function (e) {
            if (_this.props.onResize) {
                _this.props.onResize(e);
            }
        };
        _this.updateLineHeight = function () {
            if (_this.textarea) {
                _this.setState({
                    lineHeight: getLineHeight(_this.textarea)
                });
            }
        };
        _this.onChange = function (e) {
            var onChange = _this.props.onChange;
            _this.currentValue = e.currentTarget.value;
            onChange && onChange(e);
        };
        return _this;
    }
    TextareaAutosizeClass.prototype.componentDidMount = function () {
        var _this = this;
        var _a = this.props, maxRows = _a.maxRows, async = _a.async;
        if (typeof maxRows === "number") {
            this.updateLineHeight();
        }
        if (typeof maxRows === "number" || async) {
            /*
              the defer is needed to:
                - force "autosize" to activate the scrollbar when this.props.maxRows is passed
                - support StyledComponents (see #71)
            */
            setTimeout(function () { return _this.textarea && autosize(_this.textarea); });
        }
        else {
            this.textarea && autosize(this.textarea);
        }
        if (this.textarea) {
            this.textarea.addEventListener(RESIZED, this.onResize);
        }
    };
    TextareaAutosizeClass.prototype.componentWillUnmount = function () {
        if (this.textarea) {
            this.textarea.removeEventListener(RESIZED, this.onResize);
            autosize.destroy(this.textarea);
        }
    };
    TextareaAutosizeClass.prototype.render = function () {
        var _this = this;
        var _a = this, _b = _a.props, onResize = _b.onResize, maxRows = _b.maxRows, onChange = _b.onChange, style = _b.style, innerRef = _b.innerRef, children = _b.children, props = __rest(_b, ["onResize", "maxRows", "onChange", "style", "innerRef", "children"]), lineHeight = _a.state.lineHeight;
        var maxHeight = maxRows && lineHeight ? lineHeight * maxRows : null;
        return (React.createElement("textarea", __assign({}, props, { onChange: this.onChange, style: maxHeight ? __assign({}, style, { maxHeight: maxHeight }) : style, ref: function (element) {
                _this.textarea = element;
                if (typeof _this.props.innerRef === 'function') {
                    _this.props.innerRef(element);
                }
                else if (_this.props.innerRef) {
                    _this.props.innerRef.current = element;
                }
            } }), children));
    };
    TextareaAutosizeClass.prototype.componentDidUpdate = function () {
        this.textarea && autosize.update(this.textarea);
    };
    TextareaAutosizeClass.defaultProps = {
        rows: 1,
        async: false
    };
    TextareaAutosizeClass.propTypes = {
        rows: PropTypes.number,
        maxRows: PropTypes.number,
        onResize: PropTypes.func,
        innerRef: PropTypes.any,
        async: PropTypes.bool
    };
    return TextareaAutosizeClass;
}(React.Component));
exports.TextareaAutosize = React.forwardRef(function (props, ref) {
    return React.createElement(TextareaAutosizeClass, __assign({}, props, { innerRef: ref }));
});


/***/ }),

/***/ "./node_modules/react-autosize-textarea/lib/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-autosize-textarea/lib/index.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var TextareaAutosize_1 = __webpack_require__(/*! ./TextareaAutosize */ "./node_modules/react-autosize-textarea/lib/TextareaAutosize.js");
exports["default"] = TextareaAutosize_1.TextareaAutosize;


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/rememo/es/rememo.js":
/*!******************************************!*\
  !*** ./node_modules/rememo/es/rememo.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });


var LEAF_KEY, hasWeakMap;

/**
 * Arbitrary value used as key for referencing cache object in WeakMap tree.
 *
 * @type {Object}
 */
LEAF_KEY = {};

/**
 * Whether environment supports WeakMap.
 *
 * @type {boolean}
 */
hasWeakMap = typeof WeakMap !== 'undefined';

/**
 * Returns the first argument as the sole entry in an array.
 *
 * @param {*} value Value to return.
 *
 * @return {Array} Value returned as entry in array.
 */
function arrayOf( value ) {
	return [ value ];
}

/**
 * Returns true if the value passed is object-like, or false otherwise. A value
 * is object-like if it can support property assignment, e.g. object or array.
 *
 * @param {*} value Value to test.
 *
 * @return {boolean} Whether value is object-like.
 */
function isObjectLike( value ) {
	return !! value && 'object' === typeof value;
}

/**
 * Creates and returns a new cache object.
 *
 * @return {Object} Cache object.
 */
function createCache() {
	var cache = {
		clear: function() {
			cache.head = null;
		},
	};

	return cache;
}

/**
 * Returns true if entries within the two arrays are strictly equal by
 * reference from a starting index.
 *
 * @param {Array}  a         First array.
 * @param {Array}  b         Second array.
 * @param {number} fromIndex Index from which to start comparison.
 *
 * @return {boolean} Whether arrays are shallowly equal.
 */
function isShallowEqual( a, b, fromIndex ) {
	var i;

	if ( a.length !== b.length ) {
		return false;
	}

	for ( i = fromIndex; i < a.length; i++ ) {
		if ( a[ i ] !== b[ i ] ) {
			return false;
		}
	}

	return true;
}

/**
 * Returns a memoized selector function. The getDependants function argument is
 * called before the memoized selector and is expected to return an immutable
 * reference or array of references on which the selector depends for computing
 * its own return value. The memoize cache is preserved only as long as those
 * dependant references remain the same. If getDependants returns a different
 * reference(s), the cache is cleared and the selector value regenerated.
 *
 * @param {Function} selector      Selector function.
 * @param {Function} getDependants Dependant getter returning an immutable
 *                                 reference or array of reference used in
 *                                 cache bust consideration.
 *
 * @return {Function} Memoized selector.
 */
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector, getDependants ) {
	var rootCache, getCache;

	// Use object source as dependant if getter not provided
	if ( ! getDependants ) {
		getDependants = arrayOf;
	}

	/**
	 * Returns the root cache. If WeakMap is supported, this is assigned to the
	 * root WeakMap cache set, otherwise it is a shared instance of the default
	 * cache object.
	 *
	 * @return {(WeakMap|Object)} Root cache object.
	 */
	function getRootCache() {
		return rootCache;
	}

	/**
	 * Returns the cache for a given dependants array. When possible, a WeakMap
	 * will be used to create a unique cache for each set of dependants. This
	 * is feasible due to the nature of WeakMap in allowing garbage collection
	 * to occur on entries where the key object is no longer referenced. Since
	 * WeakMap requires the key to be an object, this is only possible when the
	 * dependant is object-like. The root cache is created as a hierarchy where
	 * each top-level key is the first entry in a dependants set, the value a
	 * WeakMap where each key is the next dependant, and so on. This continues
	 * so long as the dependants are object-like. If no dependants are object-
	 * like, then the cache is shared across all invocations.
	 *
	 * @see isObjectLike
	 *
	 * @param {Array} dependants Selector dependants.
	 *
	 * @return {Object} Cache object.
	 */
	function getWeakMapCache( dependants ) {
		var caches = rootCache,
			isUniqueByDependants = true,
			i, dependant, map, cache;

		for ( i = 0; i < dependants.length; i++ ) {
			dependant = dependants[ i ];

			// Can only compose WeakMap from object-like key.
			if ( ! isObjectLike( dependant ) ) {
				isUniqueByDependants = false;
				break;
			}

			// Does current segment of cache already have a WeakMap?
			if ( caches.has( dependant ) ) {
				// Traverse into nested WeakMap.
				caches = caches.get( dependant );
			} else {
				// Create, set, and traverse into a new one.
				map = new WeakMap();
				caches.set( dependant, map );
				caches = map;
			}
		}

		// We use an arbitrary (but consistent) object as key for the last item
		// in the WeakMap to serve as our running cache.
		if ( ! caches.has( LEAF_KEY ) ) {
			cache = createCache();
			cache.isUniqueByDependants = isUniqueByDependants;
			caches.set( LEAF_KEY, cache );
		}

		return caches.get( LEAF_KEY );
	}

	// Assign cache handler by availability of WeakMap
	getCache = hasWeakMap ? getWeakMapCache : getRootCache;

	/**
	 * Resets root memoization cache.
	 */
	function clear() {
		rootCache = hasWeakMap ? new WeakMap() : createCache();
	}

	// eslint-disable-next-line jsdoc/check-param-names
	/**
	 * The augmented selector call, considering first whether dependants have
	 * changed before passing it to underlying memoize function.
	 *
	 * @param {Object} source    Source object for derivation.
	 * @param {...*}   extraArgs Additional arguments to pass to selector.
	 *
	 * @return {*} Selector result.
	 */
	function callSelector( /* source, ...extraArgs */ ) {
		var len = arguments.length,
			cache, node, i, args, dependants;

		// Create copy of arguments (avoid leaking deoptimization).
		args = new Array( len );
		for ( i = 0; i < len; i++ ) {
			args[ i ] = arguments[ i ];
		}

		dependants = getDependants.apply( null, args );
		cache = getCache( dependants );

		// If not guaranteed uniqueness by dependants (primitive type or lack
		// of WeakMap support), shallow compare against last dependants and, if
		// references have changed, destroy cache to recalculate result.
		if ( ! cache.isUniqueByDependants ) {
			if ( cache.lastDependants && ! isShallowEqual( dependants, cache.lastDependants, 0 ) ) {
				cache.clear();
			}

			cache.lastDependants = dependants;
		}

		node = cache.head;
		while ( node ) {
			// Check whether node arguments match arguments
			if ( ! isShallowEqual( node.args, args, 1 ) ) {
				node = node.next;
				continue;
			}

			// At this point we can assume we've found a match

			// Surface matched node to head if not already
			if ( node !== cache.head ) {
				// Adjust siblings to point to each other.
				node.prev.next = node.next;
				if ( node.next ) {
					node.next.prev = node.prev;
				}

				node.next = cache.head;
				node.prev = null;
				cache.head.prev = node;
				cache.head = node;
			}

			// Return immediately
			return node.val;
		}

		// No cached value found. Continue to insertion phase:

		node = {
			// Generate the result from original function
			val: selector.apply( null, args ),
		};

		// Avoid including the source object in the cache.
		args[ 0 ] = null;
		node.args = args;

		// Don't need to check whether node is already head, since it would
		// have been returned above already if it was

		// Shift existing head down list
		if ( cache.head ) {
			cache.head.prev = node;
			node.next = cache.head;
		}

		cache.head = node;

		return node.val;
	}

	callSelector.getDependants = getDependants;
	callSelector.clear = clear;
	clear();

	return callSelector;
}


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/a11y":
/*!******************************!*\
  !*** external ["wp","a11y"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["a11y"];

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/date":
/*!******************************!*\
  !*** external ["wp","date"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["date"];

/***/ }),

/***/ "@wordpress/deprecated":
/*!************************************!*\
  !*** external ["wp","deprecated"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["deprecated"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/html-entities":
/*!**************************************!*\
  !*** external ["wp","htmlEntities"] ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["htmlEntities"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/keyboard-shortcuts":
/*!*******************************************!*\
  !*** external ["wp","keyboardShortcuts"] ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["keyboardShortcuts"];

/***/ }),

/***/ "@wordpress/keycodes":
/*!**********************************!*\
  !*** external ["wp","keycodes"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["keycodes"];

/***/ }),

/***/ "@wordpress/media-utils":
/*!************************************!*\
  !*** external ["wp","mediaUtils"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["mediaUtils"];

/***/ }),

/***/ "@wordpress/notices":
/*!*********************************!*\
  !*** external ["wp","notices"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["notices"];

/***/ }),

/***/ "@wordpress/preferences":
/*!*************************************!*\
  !*** external ["wp","preferences"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["preferences"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "@wordpress/reusable-blocks":
/*!****************************************!*\
  !*** external ["wp","reusableBlocks"] ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["reusableBlocks"];

/***/ }),

/***/ "@wordpress/rich-text":
/*!**********************************!*\
  !*** external ["wp","richText"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["richText"];

/***/ }),

/***/ "@wordpress/server-side-render":
/*!******************************************!*\
  !*** external ["wp","serverSideRender"] ***!
  \******************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["serverSideRender"];

/***/ }),

/***/ "@wordpress/url":
/*!*****************************!*\
  !*** external ["wp","url"] ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["url"];

/***/ }),

/***/ "@wordpress/wordcount":
/*!***********************************!*\
  !*** external ["wp","wordcount"] ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["wordcount"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!**************************************************************!*\
  !*** ./node_modules/@wordpress/editor/build-module/index.js ***!
  \**************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlignmentToolbar": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.AlignmentToolbar; },
/* harmony export */   "Autocomplete": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.Autocomplete; },
/* harmony export */   "AutosaveMonitor": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.AutosaveMonitor; },
/* harmony export */   "BlockAlignmentToolbar": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.BlockAlignmentToolbar; },
/* harmony export */   "BlockControls": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.BlockControls; },
/* harmony export */   "BlockEdit": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.BlockEdit; },
/* harmony export */   "BlockEditorKeyboardShortcuts": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.BlockEditorKeyboardShortcuts; },
/* harmony export */   "BlockFormatControls": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.BlockFormatControls; },
/* harmony export */   "BlockIcon": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.BlockIcon; },
/* harmony export */   "BlockInspector": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.BlockInspector; },
/* harmony export */   "BlockList": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.BlockList; },
/* harmony export */   "BlockMover": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.BlockMover; },
/* harmony export */   "BlockNavigationDropdown": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.BlockNavigationDropdown; },
/* harmony export */   "BlockSelectionClearer": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.BlockSelectionClearer; },
/* harmony export */   "BlockSettingsMenu": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.BlockSettingsMenu; },
/* harmony export */   "BlockTitle": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.BlockTitle; },
/* harmony export */   "BlockToolbar": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.BlockToolbar; },
/* harmony export */   "ColorPalette": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.ColorPalette; },
/* harmony export */   "ContrastChecker": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.ContrastChecker; },
/* harmony export */   "CopyHandler": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.CopyHandler; },
/* harmony export */   "DefaultBlockAppender": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.DefaultBlockAppender; },
/* harmony export */   "DocumentOutline": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.DocumentOutline; },
/* harmony export */   "DocumentOutlineCheck": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.DocumentOutlineCheck; },
/* harmony export */   "EditorHistoryRedo": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.EditorHistoryRedo; },
/* harmony export */   "EditorHistoryUndo": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.EditorHistoryUndo; },
/* harmony export */   "EditorKeyboardShortcutsRegister": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.EditorKeyboardShortcutsRegister; },
/* harmony export */   "EditorNotices": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.EditorNotices; },
/* harmony export */   "EditorProvider": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.EditorProvider; },
/* harmony export */   "EditorSnackbars": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.EditorSnackbars; },
/* harmony export */   "EntitiesSavedStates": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.EntitiesSavedStates; },
/* harmony export */   "ErrorBoundary": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.ErrorBoundary; },
/* harmony export */   "FontSizePicker": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.FontSizePicker; },
/* harmony export */   "InnerBlocks": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks; },
/* harmony export */   "Inserter": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.Inserter; },
/* harmony export */   "InspectorAdvancedControls": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.InspectorAdvancedControls; },
/* harmony export */   "InspectorControls": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.InspectorControls; },
/* harmony export */   "LocalAutosaveMonitor": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.LocalAutosaveMonitor; },
/* harmony export */   "MediaPlaceholder": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.MediaPlaceholder; },
/* harmony export */   "MediaUpload": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.MediaUpload; },
/* harmony export */   "MediaUploadCheck": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck; },
/* harmony export */   "MultiSelectScrollIntoView": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.MultiSelectScrollIntoView; },
/* harmony export */   "NavigableToolbar": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.NavigableToolbar; },
/* harmony export */   "ObserveTyping": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.ObserveTyping; },
/* harmony export */   "PageAttributesCheck": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.PageAttributesCheck; },
/* harmony export */   "PageAttributesOrder": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.PageAttributesOrder; },
/* harmony export */   "PageAttributesParent": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.PageAttributesParent; },
/* harmony export */   "PageTemplate": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.PageTemplate; },
/* harmony export */   "PanelColorSettings": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings; },
/* harmony export */   "PlainText": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.PlainText; },
/* harmony export */   "PostAuthor": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.PostAuthor; },
/* harmony export */   "PostAuthorCheck": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.PostAuthorCheck; },
/* harmony export */   "PostComments": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.PostComments; },
/* harmony export */   "PostExcerpt": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.PostExcerpt; },
/* harmony export */   "PostExcerptCheck": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.PostExcerptCheck; },
/* harmony export */   "PostFeaturedImage": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.PostFeaturedImage; },
/* harmony export */   "PostFeaturedImageCheck": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.PostFeaturedImageCheck; },
/* harmony export */   "PostFormat": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.PostFormat; },
/* harmony export */   "PostFormatCheck": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.PostFormatCheck; },
/* harmony export */   "PostLastRevision": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.PostLastRevision; },
/* harmony export */   "PostLastRevisionCheck": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.PostLastRevisionCheck; },
/* harmony export */   "PostLockedModal": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.PostLockedModal; },
/* harmony export */   "PostPendingStatus": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.PostPendingStatus; },
/* harmony export */   "PostPendingStatusCheck": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.PostPendingStatusCheck; },
/* harmony export */   "PostPingbacks": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.PostPingbacks; },
/* harmony export */   "PostPreviewButton": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.PostPreviewButton; },
/* harmony export */   "PostPublishButton": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.PostPublishButton; },
/* harmony export */   "PostPublishButtonLabel": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.PostPublishButtonLabel; },
/* harmony export */   "PostPublishPanel": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.PostPublishPanel; },
/* harmony export */   "PostSavedState": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.PostSavedState; },
/* harmony export */   "PostSchedule": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.PostSchedule; },
/* harmony export */   "PostScheduleCheck": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.PostScheduleCheck; },
/* harmony export */   "PostScheduleLabel": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.PostScheduleLabel; },
/* harmony export */   "PostSlug": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.PostSlug; },
/* harmony export */   "PostSlugCheck": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.PostSlugCheck; },
/* harmony export */   "PostSticky": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.PostSticky; },
/* harmony export */   "PostStickyCheck": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.PostStickyCheck; },
/* harmony export */   "PostSwitchToDraftButton": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.PostSwitchToDraftButton; },
/* harmony export */   "PostTaxonomies": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.PostTaxonomies; },
/* harmony export */   "PostTaxonomiesCheck": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.PostTaxonomiesCheck; },
/* harmony export */   "PostTaxonomiesFlatTermSelector": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.PostTaxonomiesFlatTermSelector; },
/* harmony export */   "PostTaxonomiesHierarchicalTermSelector": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.PostTaxonomiesHierarchicalTermSelector; },
/* harmony export */   "PostTextEditor": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.PostTextEditor; },
/* harmony export */   "PostTitle": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.PostTitle; },
/* harmony export */   "PostTrash": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.PostTrash; },
/* harmony export */   "PostTrashCheck": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.PostTrashCheck; },
/* harmony export */   "PostTypeSupportCheck": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.PostTypeSupportCheck; },
/* harmony export */   "PostVisibility": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.PostVisibility; },
/* harmony export */   "PostVisibilityCheck": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.PostVisibilityCheck; },
/* harmony export */   "PostVisibilityLabel": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.PostVisibilityLabel; },
/* harmony export */   "RichText": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.RichText; },
/* harmony export */   "RichTextShortcut": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.RichTextShortcut; },
/* harmony export */   "RichTextToolbarButton": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.RichTextToolbarButton; },
/* harmony export */   "ServerSideRender": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.ServerSideRender; },
/* harmony export */   "SkipToSelectedBlock": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.SkipToSelectedBlock; },
/* harmony export */   "TableOfContents": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.TableOfContents; },
/* harmony export */   "TextEditorGlobalKeyboardShortcuts": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.TextEditorGlobalKeyboardShortcuts; },
/* harmony export */   "ThemeSupportCheck": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.ThemeSupportCheck; },
/* harmony export */   "URLInput": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.URLInput; },
/* harmony export */   "URLInputButton": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.URLInputButton; },
/* harmony export */   "URLPopover": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.URLPopover; },
/* harmony export */   "UnsavedChangesWarning": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.UnsavedChangesWarning; },
/* harmony export */   "VisualEditorGlobalKeyboardShortcuts": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.VisualEditorGlobalKeyboardShortcuts; },
/* harmony export */   "Warning": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.Warning; },
/* harmony export */   "WordCount": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.WordCount; },
/* harmony export */   "WritingFlow": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.WritingFlow; },
/* harmony export */   "__unstableRichTextInputEvent": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.__unstableRichTextInputEvent; },
/* harmony export */   "cleanForSlug": function() { return /* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.cleanForSlug; },
/* harmony export */   "createCustomColorsHOC": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.createCustomColorsHOC; },
/* harmony export */   "getColorClassName": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.getColorClassName; },
/* harmony export */   "getColorObjectByAttributeValues": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.getColorObjectByAttributeValues; },
/* harmony export */   "getColorObjectByColorValue": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.getColorObjectByColorValue; },
/* harmony export */   "getFontSize": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.getFontSize; },
/* harmony export */   "getFontSizeClass": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.getFontSizeClass; },
/* harmony export */   "getTemplatePartIcon": function() { return /* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.getTemplatePartIcon; },
/* harmony export */   "mediaUpload": function() { return /* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.mediaUpload; },
/* harmony export */   "store": function() { return /* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_1__.store; },
/* harmony export */   "storeConfig": function() { return /* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_1__.storeConfig; },
/* harmony export */   "transformStyles": function() { return /* reexport safe */ _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.transformStyles; },
/* harmony export */   "userAutocompleter": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.userAutocompleter; },
/* harmony export */   "withColorContext": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.withColorContext; },
/* harmony export */   "withColors": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.withColors; },
/* harmony export */   "withFontSizes": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.withFontSizes; }
/* harmony export */ });
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hooks */ "./node_modules/@wordpress/editor/build-module/hooks/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "./node_modules/@wordpress/editor/build-module/store/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./node_modules/@wordpress/editor/build-module/components/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./node_modules/@wordpress/editor/build-module/utils/index.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/**
 * Internal dependencies
 */




/*
 * Backward compatibility
 */



}();
(window.wp = window.wp || {}).editor = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=editor.js.map