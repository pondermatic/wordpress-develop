/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/edit-site/build-module/components/add-new-template/index.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/add-new-template/index.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AddNewTemplate; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _new_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-template */ "./node_modules/@wordpress/edit-site/build-module/components/add-new-template/new-template.js");
/* harmony import */ var _new_template_part__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-template-part */ "./node_modules/@wordpress/edit-site/build-module/components/add-new-template/new-template-part.js");


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



function AddNewTemplate(_ref) {
  let {
    templateType = 'wp_template'
  } = _ref;
  const postType = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store).getPostType(templateType), [templateType]);

  if (!postType) {
    return null;
  }

  if (templateType === 'wp_template') {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_new_template__WEBPACK_IMPORTED_MODULE_3__["default"], {
      postType: postType
    });
  } else if (templateType === 'wp_template_part') {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_new_template_part__WEBPACK_IMPORTED_MODULE_4__["default"], {
      postType: postType
    });
  }

  return null;
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/add-new-template/new-template-part.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/add-new-template/new-template-part.js ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ NewTemplatePart; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../routes */ "./node_modules/@wordpress/edit-site/build-module/components/routes/index.js");
/* harmony import */ var _create_template_part_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../create-template-part-modal */ "./node_modules/@wordpress/edit-site/build-module/components/create-template-part-modal/index.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */



function NewTemplatePart(_ref) {
  let {
    postType
  } = _ref;
  const history = (0,_routes__WEBPACK_IMPORTED_MODULE_7__.useHistory)();
  const [isModalOpen, setIsModalOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    createErrorNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_5__.store);
  const {
    saveEntityRecord
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__.store);

  async function createTemplatePart(_ref2) {
    let {
      title,
      area
    } = _ref2;

    if (!title) {
      createErrorNotice((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Title is not defined.'), {
        type: 'snackbar'
      });
      return;
    }

    try {
      // Currently template parts only allow latin chars.
      // Fallback slug will receive suffix by default.
      const cleanSlug = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.kebabCase)(title).replace(/[^\w-]+/g, '') || 'wp-custom-part';
      const templatePart = await saveEntityRecord('postType', 'wp_template_part', {
        slug: cleanSlug,
        title,
        content: '',
        area
      }, {
        throwOnError: true
      });
      setIsModalOpen(false); // Navigate to the created template part editor.

      history.push({
        postId: templatePart.id,
        postType: templatePart.type
      }); // TODO: Add a success notice?
    } catch (error) {
      const errorMessage = error.message && error.code !== 'unknown_error' ? error.message : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('An error occurred while creating the template part.');
      createErrorNotice(errorMessage, {
        type: 'snackbar'
      });
      setIsModalOpen(false);
    }
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    variant: "primary",
    onClick: () => {
      setIsModalOpen(true);
    }
  }, postType.labels.add_new), isModalOpen && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_create_template_part_modal__WEBPACK_IMPORTED_MODULE_8__["default"], {
    closeModal: () => setIsModalOpen(false),
    onCreate: createTemplatePart
  }));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/add-new-template/new-template.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/add-new-template/new-template.js ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ NewTemplate; }
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
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/home.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/post.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/page.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/archive.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/search.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/not-found.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/list.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/category.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/post-author.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/block-meta.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/post-date.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/tag.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/media.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../routes */ "./node_modules/@wordpress/edit-site/build-module/components/routes/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/edit-site/build-module/store/index.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */



const DEFAULT_TEMPLATE_SLUGS = ['front-page', 'single-post', 'page', 'index', 'archive', 'author', 'category', 'date', 'tag', 'taxonomy', 'search', '404'];
const TEMPLATE_ICONS = {
  'front-page': _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__["default"],
  'single-post': _wordpress_icons__WEBPACK_IMPORTED_MODULE_11__["default"],
  page: _wordpress_icons__WEBPACK_IMPORTED_MODULE_12__["default"],
  archive: _wordpress_icons__WEBPACK_IMPORTED_MODULE_13__["default"],
  search: _wordpress_icons__WEBPACK_IMPORTED_MODULE_14__["default"],
  404: _wordpress_icons__WEBPACK_IMPORTED_MODULE_15__["default"],
  index: _wordpress_icons__WEBPACK_IMPORTED_MODULE_16__["default"],
  category: _wordpress_icons__WEBPACK_IMPORTED_MODULE_17__["default"],
  author: _wordpress_icons__WEBPACK_IMPORTED_MODULE_18__["default"],
  taxonomy: _wordpress_icons__WEBPACK_IMPORTED_MODULE_19__["default"],
  date: _wordpress_icons__WEBPACK_IMPORTED_MODULE_20__["default"],
  tag: _wordpress_icons__WEBPACK_IMPORTED_MODULE_21__["default"],
  attachment: _wordpress_icons__WEBPACK_IMPORTED_MODULE_22__["default"]
};
function NewTemplate(_ref) {
  let {
    postType
  } = _ref;
  const history = (0,_routes__WEBPACK_IMPORTED_MODULE_8__.useHistory)();
  const {
    templates,
    defaultTemplateTypes
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => ({
    templates: select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.store).getEntityRecords('postType', 'wp_template', {
      per_page: -1
    }),
    defaultTemplateTypes: select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__.store).__experimentalGetDefaultTemplateTypes()
  }), []);
  const {
    saveEntityRecord
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.store);
  const {
    createErrorNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_7__.store);
  const {
    setTemplate
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_9__.store);

  async function createTemplate(_ref2) {
    let {
      slug
    } = _ref2;

    try {
      const {
        title,
        description
      } = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.find)(defaultTemplateTypes, {
        slug
      });
      const template = await saveEntityRecord('postType', 'wp_template', {
        excerpt: description,
        // Slugs need to be strings, so this is for template `404`
        slug: slug.toString(),
        status: 'publish',
        title
      }, {
        throwOnError: true
      }); // Set template before navigating away to avoid initial stale value.

      setTemplate(template.id, template.slug); // Navigate to the created template editor.

      history.push({
        postId: template.id,
        postType: template.type
      }); // TODO: Add a success notice?
    } catch (error) {
      const errorMessage = error.message && error.code !== 'unknown_error' ? error.message : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('An error occurred while creating the template.');
      createErrorNotice(errorMessage, {
        type: 'snackbar'
      });
    }
  }

  const existingTemplateSlugs = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.map)(templates, 'slug');
  const missingTemplates = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.filter)(defaultTemplateTypes, template => (0,lodash__WEBPACK_IMPORTED_MODULE_1__.includes)(DEFAULT_TEMPLATE_SLUGS, template.slug) && !(0,lodash__WEBPACK_IMPORTED_MODULE_1__.includes)(existingTemplateSlugs, template.slug));

  if (!missingTemplates.length) {
    return null;
  } // Update the sort order to match the DEFAULT_TEMPLATE_SLUGS order.


  missingTemplates.sort((template1, template2) => {
    return DEFAULT_TEMPLATE_SLUGS.indexOf(template1.slug) - DEFAULT_TEMPLATE_SLUGS.indexOf(template2.slug);
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.DropdownMenu, {
    className: "edit-site-new-template-dropdown",
    icon: null,
    text: postType.labels.add_new,
    label: postType.labels.add_new_item,
    popoverProps: {
      noArrow: false
    },
    toggleProps: {
      variant: 'primary'
    }
  }, () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.NavigableMenu, {
    className: "edit-site-new-template-dropdown__popover"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuGroup, {
    label: postType.labels.add_new_item
  }, (0,lodash__WEBPACK_IMPORTED_MODULE_1__.map)(missingTemplates, _ref3 => {
    let {
      title,
      description,
      slug
    } = _ref3;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
      icon: TEMPLATE_ICONS[slug],
      iconPosition: "left",
      info: description,
      key: slug,
      onClick: () => {
        createTemplate({
          slug
        }); // We will be navigated way so no need to close the dropdown.
      }
    }, title);
  }))));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/app/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/app/index.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EditSiteApp; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../routes */ "./node_modules/@wordpress/edit-site/build-module/components/routes/index.js");
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../editor */ "./node_modules/@wordpress/edit-site/build-module/components/editor/index.js");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../list */ "./node_modules/@wordpress/edit-site/build-module/components/list/index.js");
/* harmony import */ var _navigation_sidebar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../navigation-sidebar */ "./node_modules/@wordpress/edit-site/build-module/components/navigation-sidebar/index.js");
/* harmony import */ var _utils_get_is_list_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/get-is-list-page */ "./node_modules/@wordpress/edit-site/build-module/utils/get-is-list-page.js");


/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */






function EditSiteApp(_ref) {
  let {
    reboot
  } = _ref;
  const {
    createErrorNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_3__.store);

  function onPluginAreaError(name) {
    createErrorNotice((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.sprintf)(
    /* translators: %s: plugin name */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('The "%s" plugin has encountered an error and cannot be rendered.'), name));
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SlotFillProvider, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.UnsavedChangesWarning, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_routes__WEBPACK_IMPORTED_MODULE_7__.Routes, null, _ref2 => {
    let {
      params
    } = _ref2;
    const isListPage = (0,_utils_get_is_list_page__WEBPACK_IMPORTED_MODULE_11__["default"])(params);
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, isListPage ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_list__WEBPACK_IMPORTED_MODULE_9__["default"], null) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_editor__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onError: reboot
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_6__.PluginArea, {
      onError: onPluginAreaError
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_navigation_sidebar__WEBPACK_IMPORTED_MODULE_10__["default"] // Open the navigation sidebar by default when in the list page.
    , {
      isDefaultOpen: !!isListPage,
      activeTemplateType: isListPage ? params.postType : undefined
    }));
  }));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/block-editor/back-button.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/block-editor/back-button.js ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/arrow-left.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routes */ "./node_modules/@wordpress/edit-site/build-module/components/routes/index.js");


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



function BackButton() {
  var _location$state;

  const location = (0,_routes__WEBPACK_IMPORTED_MODULE_3__.useLocation)();
  const history = (0,_routes__WEBPACK_IMPORTED_MODULE_3__.useHistory)();
  const isTemplatePart = location.params.postType === 'wp_template_part';
  const previousTemplateId = (_location$state = location.state) === null || _location$state === void 0 ? void 0 : _location$state.fromTemplateId;

  if (!isTemplatePart || !previousTemplateId) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: "edit-site-visual-editor__back-button",
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"],
    onClick: () => {
      history.back();
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Back'));
}

/* harmony default export */ __webpack_exports__["default"] = (BackButton);


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/block-editor/block-inspector-button.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/block-editor/block-inspector-button.js ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BlockInspectorButton; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/a11y */ "@wordpress/a11y");
/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_a11y__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/interface */ "./node_modules/@wordpress/interface/build-module/index.js");
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/keyboard-shortcuts */ "@wordpress/keyboard-shortcuts");
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/edit-site/build-module/store/index.js");
/* harmony import */ var _store_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/constants */ "./node_modules/@wordpress/edit-site/build-module/store/constants.js");
/* harmony import */ var _sidebar_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sidebar/constants */ "./node_modules/@wordpress/edit-site/build-module/components/sidebar/constants.js");


/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */




function BlockInspectorButton(_ref) {
  let {
    onClick = () => {}
  } = _ref;
  const {
    shortcut,
    isBlockInspectorOpen
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => ({
    shortcut: select(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_6__.store).getShortcutRepresentation('core/edit-site/toggle-block-settings-sidebar'),
    isBlockInspectorOpen: select(_wordpress_interface__WEBPACK_IMPORTED_MODULE_5__.store).getActiveComplementaryArea(_store__WEBPACK_IMPORTED_MODULE_7__.store.name) === _sidebar_constants__WEBPACK_IMPORTED_MODULE_9__.SIDEBAR_BLOCK
  }), []);
  const {
    enableComplementaryArea,
    disableComplementaryArea
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_wordpress_interface__WEBPACK_IMPORTED_MODULE_5__.store);
  const label = isBlockInspectorOpen ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hide more settings') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show more settings');
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
    onClick: () => {
      if (isBlockInspectorOpen) {
        disableComplementaryArea(_store_constants__WEBPACK_IMPORTED_MODULE_8__.STORE_NAME);
        (0,_wordpress_a11y__WEBPACK_IMPORTED_MODULE_2__.speak)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Block settings closed'));
      } else {
        enableComplementaryArea(_store_constants__WEBPACK_IMPORTED_MODULE_8__.STORE_NAME, _sidebar_constants__WEBPACK_IMPORTED_MODULE_9__.SIDEBAR_BLOCK);
        (0,_wordpress_a11y__WEBPACK_IMPORTED_MODULE_2__.speak)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Additional settings are now available in the Editor block settings sidebar'));
      } // Close dropdown menu.


      onClick();
    },
    shortcut: shortcut
  }, label);
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/block-editor/index.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/block-editor/index.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BlockEditor; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_reusable_blocks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/reusable-blocks */ "@wordpress/reusable-blocks");
/* harmony import */ var _wordpress_reusable_blocks__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_reusable_blocks__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/list-view.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _wordpress_interface__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/interface */ "./node_modules/@wordpress/interface/build-module/index.js");
/* harmony import */ var _template_part_converter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../template-part-converter */ "./node_modules/@wordpress/edit-site/build-module/components/template-part-converter/index.js");
/* harmony import */ var _navigate_to_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../navigate-to-link */ "./node_modules/@wordpress/edit-site/build-module/components/navigate-to-link/index.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../sidebar */ "./node_modules/@wordpress/edit-site/build-module/components/sidebar/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/edit-site/build-module/store/index.js");
/* harmony import */ var _block_inspector_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./block-inspector-button */ "./node_modules/@wordpress/edit-site/build-module/components/block-editor/block-inspector-button.js");
/* harmony import */ var _edit_template_part_menu_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../edit-template-part-menu-button */ "./node_modules/@wordpress/edit-site/build-module/components/edit-template-part-menu-button/index.js");
/* harmony import */ var _back_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./back-button */ "./node_modules/@wordpress/edit-site/build-module/components/block-editor/back-button.js");
/* harmony import */ var _resizable_editor__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./resizable-editor */ "./node_modules/@wordpress/edit-site/build-module/components/block-editor/resizable-editor.js");



/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */











/**
 * Internal dependencies
 */









const LAYOUT = {
  type: 'default',
  // At the root level of the site editor, no alignments should be allowed.
  alignments: []
};
function BlockEditor(_ref) {
  var _storedSettings$__exp, _storedSettings$__exp2;

  let {
    setIsInserterOpen
  } = _ref;
  const {
    storedSettings,
    templateType,
    templateId,
    page
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    const {
      getSettings,
      getEditedPostType,
      getEditedPostId,
      getPage
    } = select(_store__WEBPACK_IMPORTED_MODULE_15__.store);
    return {
      storedSettings: getSettings(setIsInserterOpen),
      templateType: getEditedPostType(),
      templateId: getEditedPostId(),
      page: getPage()
    };
  }, [setIsInserterOpen]);
  const settingsBlockPatterns = (_storedSettings$__exp = storedSettings.__experimentalAdditionalBlockPatterns) !== null && _storedSettings$__exp !== void 0 ? _storedSettings$__exp : // WP 6.0
  storedSettings.__experimentalBlockPatterns; // WP 5.9

  const settingsBlockPatternCategories = (_storedSettings$__exp2 = storedSettings.__experimentalAdditionalBlockPatternCategories) !== null && _storedSettings$__exp2 !== void 0 ? _storedSettings$__exp2 : // WP 6.0
  storedSettings.__experimentalBlockPatternCategories; // WP 5.9

  const {
    restBlockPatterns,
    restBlockPatternCategories
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => ({
    restBlockPatterns: select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.store).getBlockPatterns(),
    restBlockPatternCategories: select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.store).getBlockPatternCategories()
  }), []);
  const blockPatterns = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,lodash__WEBPACK_IMPORTED_MODULE_3__.unionBy)(settingsBlockPatterns, restBlockPatterns, 'name'), [settingsBlockPatterns, restBlockPatterns]);
  const blockPatternCategories = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,lodash__WEBPACK_IMPORTED_MODULE_3__.unionBy)(settingsBlockPatternCategories, restBlockPatternCategories, 'name'), [settingsBlockPatternCategories, restBlockPatternCategories]);
  const settings = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => ({ ...(0,lodash__WEBPACK_IMPORTED_MODULE_3__.omit)(storedSettings, ['__experimentalAdditionalBlockPatterns', '__experimentalAdditionalBlockPatternCategories']),
    __experimentalBlockPatterns: blockPatterns,
    __experimentalBlockPatternCategories: blockPatternCategories
  }), [storedSettings, blockPatterns, blockPatternCategories]);
  const [blocks, onInput, onChange] = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.useEntityBlockEditor)('postType', templateType);
  const {
    setPage
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_15__.store);
  const {
    enableComplementaryArea
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_wordpress_interface__WEBPACK_IMPORTED_MODULE_11__.store);
  const openNavigationSidebar = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    enableComplementaryArea('core/edit-site', 'edit-site/navigation-menu');
  }, [enableComplementaryArea]);
  const contentRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const mergedRefs = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__.useMergeRefs)([contentRef, (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.__unstableUseTypingObserver)()]);
  const isMobileViewport = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__.useViewportMatch)('small', '<');
  const {
    clearSelectedBlock
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.store);
  const isTemplatePart = templateType === 'wp_template_part';
  const hasBlocks = blocks.length !== 0;

  const NavMenuSidebarToggle = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.ToolbarGroup, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.ToolbarButton, {
    className: "components-toolbar__control",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Open list view'),
    onClick: openNavigationSidebar,
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_20__["default"]
  })); // Conditionally include NavMenu sidebar in Plugin only.
  // Optimise for dead code elimination.
  // See https://github.com/WordPress/gutenberg/blob/trunk/docs/how-to-guides/feature-flags.md#dead-code-elimination.


  let MaybeNavMenuSidebarToggle = _wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment;

  if (false) {}

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.BlockEditorProvider, {
    settings: settings,
    value: blocks,
    onInput: onInput,
    onChange: onChange,
    useSubRegistry: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_edit_template_part_menu_button__WEBPACK_IMPORTED_MODULE_17__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_template_part_converter__WEBPACK_IMPORTED_MODULE_12__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.__experimentalLinkControl.ViewerFill, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(fillProps => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_navigate_to_link__WEBPACK_IMPORTED_MODULE_13__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, fillProps, {
    activePage: page,
    onActivePageChange: setPage
  })), [page])), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_sidebar__WEBPACK_IMPORTED_MODULE_14__.SidebarInspectorFill, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.BlockInspector, null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.BlockTools, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('edit-site-visual-editor', {
      'is-focus-mode': isTemplatePart
    }),
    __unstableContentRef: contentRef,
    onClick: event => {
      // Clear selected block when clicking on the gray background.
      if (event.target === event.currentTarget) {
        clearSelectedBlock();
      }
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.BlockEditorKeyboardShortcuts.Register, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_back_button__WEBPACK_IMPORTED_MODULE_18__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_resizable_editor__WEBPACK_IMPORTED_MODULE_19__["default"] // Reinitialize the editor and reset the states when the template changes.
  , {
    key: templateId,
    enableResizing: isTemplatePart && // Disable resizing in mobile viewport.
    !isMobileViewport,
    settings: settings,
    contentRef: mergedRefs
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.BlockList, {
    className: "edit-site-block-editor__block-list wp-site-blocks",
    __experimentalLayout: LAYOUT,
    renderAppender: isTemplatePart && hasBlocks ? false : undefined
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.__unstableBlockSettingsMenuFirstItem, null, _ref2 => {
    let {
      onClose
    } = _ref2;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_block_inspector_button__WEBPACK_IMPORTED_MODULE_16__["default"], {
      onClick: onClose
    });
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.__unstableBlockToolbarLastItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.__unstableBlockNameContext.Consumer, null, blockName => blockName === 'core/navigation' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(MaybeNavMenuSidebarToggle, null)))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_reusable_blocks__WEBPACK_IMPORTED_MODULE_8__.ReusableBlocksMenuItems, null));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/block-editor/resizable-editor.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/block-editor/resizable-editor.js ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/edit-site/build-module/store/index.js");
/* harmony import */ var _resize_handle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resize-handle */ "./node_modules/@wordpress/edit-site/build-module/components/block-editor/resize-handle.js");



/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



const DEFAULT_STYLES = {
  width: '100%',
  height: '100%'
}; // Removes the inline styles in the drag handles.

const HANDLE_STYLES_OVERRIDE = {
  position: undefined,
  userSelect: undefined,
  cursor: undefined,
  width: undefined,
  height: undefined,
  top: undefined,
  right: undefined,
  bottom: undefined,
  left: undefined
};

function ResizableEditor(_ref) {
  let {
    enableResizing,
    settings,
    children,
    ...props
  } = _ref;
  const deviceType = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => select(_store__WEBPACK_IMPORTED_MODULE_6__.store).__experimentalGetPreviewDeviceType(), []);
  const deviceStyles = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalUseResizeCanvas)(deviceType);
  const [width, setWidth] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_STYLES.width);
  const [height, setHeight] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_STYLES.height);
  const iframeRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const mouseMoveTypingResetRef = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__unstableUseMouseMoveTypingReset)();
  const ref = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__.useMergeRefs)([iframeRef, mouseMoveTypingResetRef]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function autoResizeIframeHeight() {
    const iframe = iframeRef.current;

    if (!iframe || !enableResizing) {
      return;
    }

    let animationFrame = null;

    function resizeHeight() {
      if (!animationFrame) {
        // Throttle the updates on animation frame.
        animationFrame = iframe.contentWindow.requestAnimationFrame(() => {
          setHeight(iframe.contentDocument.documentElement.scrollHeight);
          animationFrame = null;
        });
      }
    }

    let resizeObserver;

    function registerObserver() {
      var _resizeObserver;

      (_resizeObserver = resizeObserver) === null || _resizeObserver === void 0 ? void 0 : _resizeObserver.disconnect();
      resizeObserver = new iframe.contentWindow.ResizeObserver(resizeHeight); // Observing the <html> rather than the <body> because the latter
      // gets destroyed and remounted after initialization in <Iframe>.

      resizeObserver.observe(iframe.contentDocument.documentElement);
      resizeHeight();
    } // This is only required in Firefox for some unknown reasons.


    iframe.addEventListener('load', registerObserver); // This is required in Chrome and Safari.

    registerObserver();
    return () => {
      var _iframe$contentWindow, _resizeObserver2;

      (_iframe$contentWindow = iframe.contentWindow) === null || _iframe$contentWindow === void 0 ? void 0 : _iframe$contentWindow.cancelAnimationFrame(animationFrame);
      (_resizeObserver2 = resizeObserver) === null || _resizeObserver2 === void 0 ? void 0 : _resizeObserver2.disconnect();
      iframe.removeEventListener('load', registerObserver);
    };
  }, [enableResizing]);
  const resizeWidthBy = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(deltaPixels => {
    if (iframeRef.current) {
      setWidth(iframeRef.current.offsetWidth + deltaPixels);
    }
  }, []);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ResizableBox, {
    size: {
      width,
      height
    },
    onResizeStop: (event, direction, element) => {
      setWidth(element.style.width);
    },
    minWidth: 300,
    maxWidth: "100%",
    maxHeight: "100%",
    enable: {
      right: enableResizing,
      left: enableResizing
    },
    showHandle: enableResizing // The editor is centered horizontally, resizing it only
    // moves half the distance. Hence double the ratio to correctly
    // align the cursor to the resizer handle.
    ,
    resizeRatio: 2,
    handleComponent: {
      left: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_resize_handle__WEBPACK_IMPORTED_MODULE_7__["default"], {
        direction: "left",
        resizeWidthBy: resizeWidthBy
      }),
      right: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_resize_handle__WEBPACK_IMPORTED_MODULE_7__["default"], {
        direction: "right",
        resizeWidthBy: resizeWidthBy
      })
    },
    handleClasses: undefined,
    handleStyles: {
      left: HANDLE_STYLES_OVERRIDE,
      right: HANDLE_STYLES_OVERRIDE
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__unstableIframe, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    style: enableResizing ? undefined : deviceStyles,
    head: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__unstableEditorStyles, {
      styles: settings.styles
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("style", null, // Forming a "block formatting context" to prevent margin collapsing.
    // @see https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context
    `.is-root-container { display: flow-root; }`), enableResizing && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("style", null, // Force the <html> and <body>'s heights to fit the content.
    `html, body { height: -moz-fit-content !important; height: fit-content !important; min-height: 0 !important; }`, // Some themes will have `min-height: 100vh` for the root container,
    // which isn't a requirement in auto resize mode.
    `.is-root-container { min-height: 0 !important; }`)),
    assets: settings.__unstableResolvedAssets,
    ref: ref,
    name: "editor-canvas",
    className: "edit-site-visual-editor__editor-canvas"
  }, props), settings.svgFilters, children));
}

/* harmony default export */ __webpack_exports__["default"] = (ResizableEditor);


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/block-editor/resize-handle.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/block-editor/resize-handle.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ResizeHandle; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);


/**
 * WordPress dependencies
 */



const DELTA_DISTANCE = 20; // The distance to resize per keydown in pixels.

function ResizeHandle(_ref) {
  let {
    direction,
    resizeWidthBy
  } = _ref;

  function handleKeyDown(event) {
    const {
      keyCode
    } = event;

    if (direction === 'left' && keyCode === _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_2__.LEFT || direction === 'right' && keyCode === _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_2__.RIGHT) {
      resizeWidthBy(DELTA_DISTANCE);
    } else if (direction === 'left' && keyCode === _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_2__.RIGHT || direction === 'right' && keyCode === _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_2__.LEFT) {
      resizeWidthBy(-DELTA_DISTANCE);
    }
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: `resizable-editor__drag-handle is-${direction}`,
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Drag to resize'),
    "aria-describedby": `resizable-editor__resize-help-${direction}`,
    onKeyDown: handleKeyDown
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.VisuallyHidden, {
    id: `resizable-editor__resize-help-${direction}`
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Use left and right arrow keys to resize the canvas.')));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/code-editor/code-editor-text-area.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/code-editor/code-editor-text-area.js ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CodeEditorTextArea; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_autosize_textarea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-autosize-textarea */ "./node_modules/react-autosize-textarea/lib/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

/**
 * WordPress dependencies
 */

/**
 * WordPress dependencies
 */





function CodeEditorTextArea(_ref) {
  let {
    value,
    onChange,
    onInput
  } = _ref;
  const [stateValue, setStateValue] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(value);
  const [isDirty, setIsDirty] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const instanceId = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.useInstanceId)(CodeEditorTextArea);

  if (!isDirty && stateValue !== value) {
    setStateValue(value);
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


  const onChangeHandler = event => {
    const newValue = event.target.value;
    onInput(newValue);
    setStateValue(newValue);
    setIsDirty(true);
  };
  /**
   * Function called when the user has completed their edits, responsible for
   * ensuring that changes, if made, are surfaced to the onPersist prop
   * callback and resetting dirty state.
   */


  const stopEditing = () => {
    if (isDirty) {
      onChange(stateValue);
      setIsDirty(false);
    }
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.VisuallyHidden, {
    as: "label",
    htmlFor: `code-editor-text-area-${instanceId}`
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Type text or HTML')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_autosize_textarea__WEBPACK_IMPORTED_MODULE_1__["default"], {
    autoComplete: "off",
    dir: "auto",
    value: stateValue,
    onChange: onChangeHandler,
    onBlur: stopEditing,
    className: "edit-site-code-editor-text-area",
    id: `code-editor-text-area-${instanceId}`,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Start writing with text or HTML')
  }));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/code-editor/index.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/code-editor/index.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CodeEditor; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/keyboard-shortcuts */ "@wordpress/keyboard-shortcuts");
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/edit-site/build-module/store/index.js");
/* harmony import */ var _code_editor_text_area__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./code-editor-text-area */ "./node_modules/@wordpress/edit-site/build-module/components/code-editor/code-editor-text-area.js");


/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



function CodeEditor() {
  const {
    templateType,
    shortcut
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    const {
      getEditedPostType
    } = select(_store__WEBPACK_IMPORTED_MODULE_7__.store);
    const {
      getShortcutRepresentation
    } = select(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_4__.store);
    return {
      templateType: getEditedPostType(),
      shortcut: getShortcutRepresentation('core/edit-site/toggle-mode')
    };
  }, []);
  const [contentStructure, setContent] = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.useEntityProp)('postType', templateType, 'content');
  const [blocks,, onChange] = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.useEntityBlockEditor)('postType', templateType);
  const content = contentStructure instanceof Function ? contentStructure({
    blocks
  }) : contentStructure;
  const {
    switchEditorMode
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_7__.store);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edit-site-code-editor"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edit-site-code-editor__toolbar"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Editing code')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
    variant: "tertiary",
    onClick: () => switchEditorMode('visual'),
    shortcut: shortcut
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Exit code editor'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edit-site-code-editor__body"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_code_editor_text_area__WEBPACK_IMPORTED_MODULE_8__["default"], {
    value: content,
    onChange: newContent => {
      onChange((0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.parse)(newContent), {
        selection: undefined
      });
    },
    onInput: setContent
  })));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/create-template-part-modal/index.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/create-template-part-modal/index.js ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CreateTemplatePartModal; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/check.js");
/* harmony import */ var _store_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/constants */ "./node_modules/@wordpress/edit-site/build-module/store/constants.js");


/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */


function CreateTemplatePartModal(_ref) {
  let {
    closeModal,
    onCreate
  } = _ref;
  const [title, setTitle] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [area, setArea] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(_store_constants__WEBPACK_IMPORTED_MODULE_6__.TEMPLATE_PART_AREA_GENERAL);
  const [isSubmitting, setIsSubmitting] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const instanceId = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.useInstanceId)(CreateTemplatePartModal);
  const templatePartAreas = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__.store).__experimentalGetDefaultTemplatePartAreas(), []);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Modal, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Create a template part'),
    closeLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Close'),
    onRequestClose: closeModal,
    overlayClassName: "edit-site-create-template-part-modal"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
    onSubmit: async event => {
      event.preventDefault();

      if (!title) {
        return;
      }

      setIsSubmitting(true);
      await onCreate({
        title,
        area
      });
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Name'),
    value: title,
    onChange: setTitle,
    required: true
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Area'),
    id: `edit-site-create-template-part-modal__area-selection-${instanceId}`,
    className: "edit-site-create-template-part-modal__area-base-control"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalRadioGroup, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Area'),
    className: "edit-site-create-template-part-modal__area-radio-group",
    id: `edit-site-create-template-part-modal__area-selection-${instanceId}`,
    onChange: setArea,
    checked: area
  }, templatePartAreas.map(_ref2 => {
    let {
      icon,
      label,
      area: value,
      description
    } = _ref2;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalRadio, {
      key: label,
      value: value,
      className: "edit-site-create-template-part-modal__area-radio"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex, {
      align: "start",
      justify: "start"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
      icon: icon
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexBlock, {
      className: "edit-site-create-template-part-modal__option-label"
    }, label, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, description)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, {
      className: "edit-site-create-template-part-modal__checkbox"
    }, area === value && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__["default"]
    }))));
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex, {
    className: "edit-site-create-template-part-modal__modal-actions",
    justify: "flex-end"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "secondary",
    onClick: () => {
      closeModal();
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Cancel'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "primary",
    type: "submit",
    disabled: !title,
    isBusy: isSubmitting
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Create'))))));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/edit-template-part-menu-button/index.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/edit-template-part-menu-button/index.js ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EditTemplatePartMenuButton; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../routes */ "./node_modules/@wordpress/edit-site/build-module/components/routes/index.js");
/* harmony import */ var _routes_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../routes/link */ "./node_modules/@wordpress/edit-site/build-module/components/routes/link.js");



/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



function EditTemplatePartMenuButton() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockSettingsMenuControls, null, _ref => {
    let {
      selectedClientIds,
      onClose
    } = _ref;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(EditTemplatePartMenuItem, {
      selectedClientId: selectedClientIds[0],
      onClose: onClose
    });
  });
}

function EditTemplatePartMenuItem(_ref2) {
  let {
    selectedClientId,
    onClose
  } = _ref2;
  const {
    params
  } = (0,_routes__WEBPACK_IMPORTED_MODULE_8__.useLocation)();
  const selectedTemplatePart = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    const block = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.store).getBlock(selectedClientId);

    if (block && (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__.isTemplatePart)(block)) {
      const {
        theme,
        slug
      } = block.attributes;
      return select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.store).getEntityRecord('postType', 'wp_template_part', // Ideally this should be an official public API.
      `${theme}//${slug}`);
    }
  }, [selectedClientId]);
  const linkProps = (0,_routes_link__WEBPACK_IMPORTED_MODULE_9__.useLink)({
    postId: selectedTemplatePart === null || selectedTemplatePart === void 0 ? void 0 : selectedTemplatePart.id,
    postType: selectedTemplatePart === null || selectedTemplatePart === void 0 ? void 0 : selectedTemplatePart.type
  }, {
    fromTemplateId: params.postId
  });

  if (!selectedTemplatePart) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.MenuItem, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, linkProps, {
    onClick: event => {
      linkProps.onClick(event);
      onClose();
    }
  }),
  /* translators: %s: template part title */
  (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Edit %s'), selectedTemplatePart.slug));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/editor/global-styles-renderer.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/editor/global-styles-renderer.js ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalStylesRenderer": function() { return /* binding */ GlobalStylesRenderer; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/edit-site/build-module/store/index.js");
/* harmony import */ var _global_styles_use_global_styles_output__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../global-styles/use-global-styles-output */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/use-global-styles-output.js");
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
 * Internal dependencies
 */



function useGlobalStylesRenderer() {
  const [styles, settings, svgFilters] = (0,_global_styles_use_global_styles_output__WEBPACK_IMPORTED_MODULE_4__.useGlobalStylesOutput)();
  const {
    getSettings
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(_store__WEBPACK_IMPORTED_MODULE_3__.store);
  const {
    updateSettings
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_3__.store);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!styles || !settings) {
      return;
    }

    const currentStoreSettings = getSettings();
    const nonGlobalStyles = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.filter)(currentStoreSettings.styles, style => !style.isGlobalStyles);
    updateSettings({ ...currentStoreSettings,
      styles: [...nonGlobalStyles, ...styles],
      svgFilters,
      __experimentalFeatures: settings
    });
  }, [styles, settings]);
}

function GlobalStylesRenderer() {
  useGlobalStylesRenderer();
  return null;
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/editor/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/editor/index.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/interface */ "./node_modules/@wordpress/interface/build-module/index.js");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/keyboard-shortcuts */ "@wordpress/keyboard-shortcuts");
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../header */ "./node_modules/@wordpress/edit-site/build-module/components/header/index.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../sidebar */ "./node_modules/@wordpress/edit-site/build-module/components/sidebar/index.js");
/* harmony import */ var _navigation_sidebar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../navigation-sidebar */ "./node_modules/@wordpress/edit-site/build-module/components/navigation-sidebar/index.js");
/* harmony import */ var _block_editor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../block-editor */ "./node_modules/@wordpress/edit-site/build-module/components/block-editor/index.js");
/* harmony import */ var _code_editor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../code-editor */ "./node_modules/@wordpress/edit-site/build-module/components/code-editor/index.js");
/* harmony import */ var _keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../keyboard-shortcuts */ "./node_modules/@wordpress/edit-site/build-module/components/keyboard-shortcuts/index.js");
/* harmony import */ var _url_query_controller__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../url-query-controller */ "./node_modules/@wordpress/edit-site/build-module/components/url-query-controller/index.js");
/* harmony import */ var _secondary_sidebar_inserter_sidebar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../secondary-sidebar/inserter-sidebar */ "./node_modules/@wordpress/edit-site/build-module/components/secondary-sidebar/inserter-sidebar.js");
/* harmony import */ var _secondary_sidebar_list_view_sidebar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../secondary-sidebar/list-view-sidebar */ "./node_modules/@wordpress/edit-site/build-module/components/secondary-sidebar/list-view-sidebar.js");
/* harmony import */ var _error_boundary__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../error-boundary */ "./node_modules/@wordpress/edit-site/build-module/components/error-boundary/index.js");
/* harmony import */ var _welcome_guide__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../welcome-guide */ "./node_modules/@wordpress/edit-site/build-module/components/welcome-guide/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/edit-site/build-module/store/index.js");
/* harmony import */ var _global_styles_renderer__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./global-styles-renderer */ "./node_modules/@wordpress/edit-site/build-module/components/editor/global-styles-renderer.js");
/* harmony import */ var _global_styles_global_styles_provider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../global-styles/global-styles-provider */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/global-styles-provider.js");
/* harmony import */ var _routes_use_title__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../routes/use-title */ "./node_modules/@wordpress/edit-site/build-module/components/routes/use-title.js");


/**
 * WordPress dependencies
 */










/**
 * Internal dependencies
 */
















const interfaceLabels = {
  drawer: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Navigation Sidebar')
};

function Editor(_ref) {
  let {
    onError
  } = _ref;
  const {
    isInserterOpen,
    isListViewOpen,
    sidebarIsOpened,
    settings,
    entityId,
    templateType,
    page,
    template,
    templateResolved,
    isNavigationOpen,
    previousShortcut,
    nextShortcut,
    editorMode,
    showIconLabels
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    const {
      isInserterOpened,
      isListViewOpened,
      getSettings,
      getEditedPostType,
      getEditedPostId,
      getPage,
      isNavigationOpened,
      getEditorMode
    } = select(_store__WEBPACK_IMPORTED_MODULE_21__.store);
    const {
      hasFinishedResolution,
      getEntityRecord
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.store);
    const postType = getEditedPostType();
    const postId = getEditedPostId(); // The currently selected entity to display. Typically template or template part.

    return {
      isInserterOpen: isInserterOpened(),
      isListViewOpen: isListViewOpened(),
      sidebarIsOpened: !!select(_wordpress_interface__WEBPACK_IMPORTED_MODULE_5__.store).getActiveComplementaryArea(_store__WEBPACK_IMPORTED_MODULE_21__.store.name),
      settings: getSettings(),
      templateType: postType,
      page: getPage(),
      template: postId ? getEntityRecord('postType', postType, postId) : null,
      templateResolved: postId ? hasFinishedResolution('getEntityRecord', ['postType', postType, postId]) : false,
      entityId: postId,
      isNavigationOpen: isNavigationOpened(),
      previousShortcut: select(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_8__.store).getAllShortcutKeyCombinations('core/edit-site/previous-region'),
      nextShortcut: select(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_8__.store).getAllShortcutKeyCombinations('core/edit-site/next-region'),
      editorMode: getEditorMode(),
      showIconLabels: select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_9__.store).get('core/edit-site', 'showIconLabels')
    };
  }, []);
  const {
    setPage,
    setIsInserterOpened
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_21__.store);
  const {
    enableComplementaryArea
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_wordpress_interface__WEBPACK_IMPORTED_MODULE_5__.store);
  const [isEntitiesSavedStatesOpen, setIsEntitiesSavedStatesOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const openEntitiesSavedStates = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => setIsEntitiesSavedStatesOpen(true), []);
  const closeEntitiesSavedStates = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    setIsEntitiesSavedStatesOpen(false);
  }, []);
  const blockContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({ ...(page === null || page === void 0 ? void 0 : page.context),
    queryContext: [(page === null || page === void 0 ? void 0 : page.context.queryContext) || {
      page: 1
    }, newQueryContext => setPage({ ...page,
      context: { ...(page === null || page === void 0 ? void 0 : page.context),
        queryContext: { ...(page === null || page === void 0 ? void 0 : page.context.queryContext),
          ...newQueryContext
        }
      }
    })]
  }), [page === null || page === void 0 ? void 0 : page.context]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isNavigationOpen) {
      document.body.classList.add('is-navigation-sidebar-open');
    } else {
      document.body.classList.remove('is-navigation-sidebar-open');
    }
  }, [isNavigationOpen]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function openGlobalStylesOnLoad() {
    const searchParams = new URLSearchParams(window.location.search);

    if (searchParams.get('styles') === 'open') {
      enableComplementaryArea('core/edit-site', 'edit-site/global-styles');
    }
  }, [enableComplementaryArea]); // Don't render the Editor until the settings are set and loaded.

  const isReady = (settings === null || settings === void 0 ? void 0 : settings.siteUrl) && templateType !== undefined && entityId !== undefined;
  const secondarySidebarLabel = isListViewOpen ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('List View') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Block Library');

  const secondarySidebar = () => {
    if (editorMode === 'visual' && isInserterOpen) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_secondary_sidebar_inserter_sidebar__WEBPACK_IMPORTED_MODULE_17__["default"], null);
    }

    if (editorMode === 'visual' && isListViewOpen) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_secondary_sidebar_list_view_sidebar__WEBPACK_IMPORTED_MODULE_18__["default"], null);
    }

    return null;
  }; // Only announce the title once the editor is ready to prevent "Replace"
  // action in <URlQueryController> from double-announcing.


  (0,_routes_use_title__WEBPACK_IMPORTED_MODULE_24__["default"])(isReady && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Editor (beta)'));
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_url_query_controller__WEBPACK_IMPORTED_MODULE_16__["default"], null), isReady && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_8__.ShortcutProvider, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.EntityProvider, {
    kind: "root",
    type: "site"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.EntityProvider, {
    kind: "postType",
    type: templateType,
    id: entityId
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_global_styles_global_styles_provider__WEBPACK_IMPORTED_MODULE_23__.GlobalStylesProvider, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.BlockContextProvider, {
    value: blockContext
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_global_styles_renderer__WEBPACK_IMPORTED_MODULE_22__.GlobalStylesRenderer, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_error_boundary__WEBPACK_IMPORTED_MODULE_19__["default"], {
    onError: onError
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_15__["default"].Register, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_sidebar__WEBPACK_IMPORTED_MODULE_11__.SidebarComplementaryAreaFills, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_interface__WEBPACK_IMPORTED_MODULE_5__.InterfaceSkeleton, {
    labels: { ...interfaceLabels,
      secondarySidebar: secondarySidebarLabel
    },
    className: showIconLabels && 'show-icon-labels',
    secondarySidebar: secondarySidebar(),
    sidebar: sidebarIsOpened && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_interface__WEBPACK_IMPORTED_MODULE_5__.ComplementaryArea.Slot, {
      scope: "core/edit-site"
    }),
    drawer: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_navigation_sidebar__WEBPACK_IMPORTED_MODULE_12__["default"].Slot, null),
    header: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_header__WEBPACK_IMPORTED_MODULE_10__["default"], {
      openEntitiesSavedStates: openEntitiesSavedStates,
      showIconLabels: showIconLabels
    }),
    notices: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__.EditorSnackbars, null),
    content: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__.EditorNotices, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.BlockStyles.Slot, {
      scope: "core/block-inspector"
    }), editorMode === 'visual' && template && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_editor__WEBPACK_IMPORTED_MODULE_13__["default"], {
      setIsInserterOpen: setIsInserterOpened
    }), editorMode === 'text' && template && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_code_editor__WEBPACK_IMPORTED_MODULE_14__["default"], null), templateResolved && !template && (settings === null || settings === void 0 ? void 0 : settings.siteUrl) && entityId && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Notice, {
      status: "warning",
      isDismissible: false
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)("You attempted to edit an item that doesn't exist. Perhaps it was deleted?")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_15__["default"], {
      openEntitiesSavedStates: openEntitiesSavedStates
    })),
    actions: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, isEntitiesSavedStatesOpen ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__.EntitiesSavedStates, {
      close: closeEntitiesSavedStates
    }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "edit-site-editor__toggle-save-panel"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      variant: "secondary",
      className: "edit-site-editor__toggle-save-panel-button",
      onClick: openEntitiesSavedStates,
      "aria-expanded": false
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Open save panel')))),
    footer: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.BlockBreadcrumb, {
      rootLabelText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Template')
    }),
    shortcuts: {
      previous: previousShortcut,
      next: nextShortcut
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_welcome_guide__WEBPACK_IMPORTED_MODULE_20__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Popover.Slot, null))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Editor);


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/error-boundary/index.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/error-boundary/index.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ErrorBoundary; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _warning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./warning */ "./node_modules/@wordpress/edit-site/build-module/components/error-boundary/warning.js");


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


class ErrorBoundary extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments);
    this.reboot = this.reboot.bind(this);
    this.state = {
      error: null
    };
  }

  static getDerivedStateFromError(error) {
    return {
      error
    };
  }

  reboot() {
    this.props.onError();
  }

  render() {
    const {
      error
    } = this.state;

    if (!error) {
      return this.props.children;
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_warning__WEBPACK_IMPORTED_MODULE_2__["default"], {
      message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The editor has encountered an unexpected error.'),
      error: error,
      reboot: this.reboot
    });
  }

}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/error-boundary/warning.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/error-boundary/warning.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ErrorBoundaryWarning; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);


/**
 * WordPress dependencies
 */





function CopyButton(_ref) {
  let {
    text,
    children
  } = _ref;
  const ref = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.useCopyToClipboard)(text);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "secondary",
    ref: ref
  }, children);
}

function ErrorBoundaryWarning(_ref2) {
  let {
    message,
    error,
    reboot,
    dashboardLink
  } = _ref2;
  const actions = [];

  if (reboot) {
    actions.push((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      key: "recovery",
      onClick: reboot,
      variant: "secondary"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Attempt Recovery')));
  }

  if (error) {
    actions.push((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CopyButton, {
      key: "copy-error",
      text: error.stack
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Copy Error')));
  }

  if (dashboardLink) {
    actions.push((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      key: "back-to-dashboard",
      variant: "secondary",
      href: dashboardLink
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Back to dashboard')));
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.Warning, {
    className: "editor-error-boundary",
    actions: actions
  }, message);
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/border-panel.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/global-styles/border-panel.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BorderPanel; },
/* harmony export */   "useHasBorderPanel": function() { return /* binding */ useHasBorderPanel; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/hooks.js");


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


const MIN_BORDER_WIDTH = 0;
function useHasBorderPanel(name) {
  const controls = [useHasBorderColorControl(name), useHasBorderRadiusControl(name), useHasBorderStyleControl(name), useHasBorderWidthControl(name)];
  return controls.some(Boolean);
}

function useHasBorderColorControl(name) {
  const supports = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.getSupportedGlobalStylesPanels)(name);
  return (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useSetting)('border.color', name)[0] && supports.includes('borderColor');
}

function useHasBorderRadiusControl(name) {
  const supports = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.getSupportedGlobalStylesPanels)(name);
  return (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useSetting)('border.radius', name)[0] && supports.includes('borderRadius');
}

function useHasBorderStyleControl(name) {
  const supports = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.getSupportedGlobalStylesPanels)(name);
  return (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useSetting)('border.style', name)[0] && supports.includes('borderStyle');
}

function useHasBorderWidthControl(name) {
  const supports = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.getSupportedGlobalStylesPanels)(name);
  return (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useSetting)('border.width', name)[0] && supports.includes('borderWidth');
}

function BorderPanel(_ref) {
  let {
    name
  } = _ref;
  // To better reflect if the user has customized a value we need to
  // ensure the style value being checked is from the `user` origin.
  const [userBorderStyles] = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useStyle)('border', name, 'user');

  const createHasValueCallback = feature => () => !!(userBorderStyles !== null && userBorderStyles !== void 0 && userBorderStyles[feature]);

  const createResetCallback = setStyle => () => setStyle(undefined);

  const handleOnChange = setStyle => value => {
    setStyle(value || undefined);
  };

  const units = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUseCustomUnits)({
    availableUnits: (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useSetting)('spacing.units')[0] || ['px', 'em', 'rem']
  }); // Border width.

  const showBorderWidth = useHasBorderWidthControl(name);
  const [borderWidthValue, setBorderWidth] = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useStyle)('border.width', name); // Border style.

  const showBorderStyle = useHasBorderStyleControl(name);
  const [borderStyle, setBorderStyle] = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useStyle)('border.style', name); // When we set a border color or width ensure we have a style so the user
  // can see a visible border.

  const handleOnChangeWithStyle = setStyle => value => {
    if (!!value && !borderStyle) {
      setBorderStyle('solid');
    }

    setStyle(value || undefined);
  }; // Border color.


  const showBorderColor = useHasBorderColorControl(name);
  const [borderColor, setBorderColor] = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useStyle)('border.color', name);
  const disableCustomColors = !(0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useSetting)('color.custom')[0];
  const disableCustomGradients = !(0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useSetting)('color.customGradient')[0];
  const borderColorSettings = [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Color'),
    colors: (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useColorsPerOrigin)(name),
    colorValue: borderColor,
    onColorChange: handleOnChangeWithStyle(setBorderColor),
    clearable: false
  }]; // Border radius.

  const showBorderRadius = useHasBorderRadiusControl(name);
  const [borderRadiusValues, setBorderRadius] = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useStyle)('border.radius', name);

  const hasBorderRadius = () => {
    const borderValues = userBorderStyles === null || userBorderStyles === void 0 ? void 0 : userBorderStyles.radius;

    if (typeof borderValues === 'object') {
      return Object.entries(borderValues).some(Boolean);
    }

    return !!borderValues;
  };

  const resetAll = () => {
    setBorderColor(undefined);
    setBorderRadius(undefined);
    setBorderStyle(undefined);
    setBorderWidth(undefined);
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToolsPanel, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Border'),
    resetAll: resetAll
  }, showBorderWidth && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToolsPanelItem, {
    className: "single-column",
    hasValue: createHasValueCallback('width'),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Width'),
    onDeselect: createResetCallback(setBorderWidth),
    isShownByDefault: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
    value: borderWidthValue,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Width'),
    min: MIN_BORDER_WIDTH,
    onChange: handleOnChangeWithStyle(setBorderWidth),
    units: units
  })), showBorderStyle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToolsPanelItem, {
    className: "single-column",
    hasValue: createHasValueCallback('style'),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Style'),
    onDeselect: createResetCallback(setBorderStyle),
    isShownByDefault: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.__experimentalBorderStyleControl, {
    value: borderStyle,
    onChange: handleOnChange(setBorderStyle)
  })), showBorderColor && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToolsPanelItem, {
    hasValue: createHasValueCallback('color'),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Color'),
    onDeselect: createResetCallback(setBorderColor),
    isShownByDefault: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.__experimentalColorGradientSettingsDropdown, {
    __experimentalHasMultipleOrigins: true,
    __experimentalIsRenderedInSidebar: true,
    disableCustomColors: disableCustomColors,
    disableCustomGradients: disableCustomGradients,
    enableAlpha: true,
    settings: borderColorSettings
  })), showBorderRadius && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToolsPanelItem, {
    hasValue: hasBorderRadius,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Radius'),
    onDeselect: createResetCallback(setBorderRadius),
    isShownByDefault: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.__experimentalBorderRadiusControl, {
    values: borderRadiusValues,
    onChange: handleOnChange(setBorderRadius)
  })));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/color-indicator-wrapper.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/global-styles/color-indicator-wrapper.js ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



function ColorIndicatorWrapper(_ref) {
  let {
    className,
    ...props
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Flex, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('edit-site-global-styles__color-indicator-wrapper', className)
  }, props));
}

/* harmony default export */ __webpack_exports__["default"] = (ColorIndicatorWrapper);


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/color-palette-panel.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/global-styles/color-palette-panel.js ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ColorPalettePanel; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/hooks.js");


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


function ColorPalettePanel(_ref) {
  let {
    name
  } = _ref;
  const [themeColors, setThemeColors] = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useSetting)('color.palette.theme', name);
  const [baseThemeColors] = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useSetting)('color.palette.theme', name, 'base');
  const [defaultColors, setDefaultColors] = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useSetting)('color.palette.default', name);
  const [baseDefaultColors] = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useSetting)('color.palette.default', name, 'base');
  const [customColors, setCustomColors] = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useSetting)('color.palette.custom', name);
  const [defaultPaletteEnabled] = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useSetting)('color.defaultPalette', name);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalVStack, {
    className: "edit-site-global-styles-color-palette-panel",
    spacing: 10
  }, !!themeColors && !!themeColors.length && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalPaletteEdit, {
    canReset: themeColors !== baseThemeColors,
    canOnlyChangeValues: true,
    colors: themeColors,
    onChange: setThemeColors,
    paletteLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Theme')
  }), !!defaultColors && !!defaultColors.length && !!defaultPaletteEnabled && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalPaletteEdit, {
    canReset: defaultColors !== baseDefaultColors,
    canOnlyChangeValues: true,
    colors: defaultColors,
    onChange: setDefaultColors,
    paletteLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Default')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalPaletteEdit, {
    colors: customColors,
    onChange: setCustomColors,
    paletteLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Custom'),
    emptyMessage: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Custom colors are empty! Add some colors to create your own color palette.'),
    slugPrefix: "custom-"
  }));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/color-utils.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/global-styles/color-utils.js ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useHasColorPanel": function() { return /* binding */ useHasColorPanel; }
/* harmony export */ });
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hooks */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/hooks.js");
/**
 * Internal dependencies
 */

function useHasColorPanel(name) {
  const supports = (0,_hooks__WEBPACK_IMPORTED_MODULE_0__.getSupportedGlobalStylesPanels)(name);
  return supports.includes('color') || supports.includes('backgroundColor') || supports.includes('background') || supports.includes('linkColor');
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/context-menu.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/global-styles/context-menu.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/typography.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/color.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/layout.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _border_panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./border-panel */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/border-panel.js");
/* harmony import */ var _color_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./color-utils */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/color-utils.js");
/* harmony import */ var _dimensions_panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dimensions-panel */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/dimensions-panel.js");
/* harmony import */ var _typography_panel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./typography-panel */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/typography-panel.js");
/* harmony import */ var _navigation_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navigation-button */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/navigation-button.js");


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */







function ContextMenu(_ref) {
  let {
    name,
    parentMenu = ''
  } = _ref;
  const hasTypographyPanel = (0,_typography_panel__WEBPACK_IMPORTED_MODULE_6__.useHasTypographyPanel)(name);
  const hasColorPanel = (0,_color_utils__WEBPACK_IMPORTED_MODULE_4__.useHasColorPanel)(name);
  const hasBorderPanel = (0,_border_panel__WEBPACK_IMPORTED_MODULE_3__.useHasBorderPanel)(name);
  const hasDimensionsPanel = (0,_dimensions_panel__WEBPACK_IMPORTED_MODULE_5__.useHasDimensionsPanel)(name);
  const hasLayoutPanel = hasBorderPanel || hasDimensionsPanel;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalItemGroup, null, hasTypographyPanel && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_navigation_button__WEBPACK_IMPORTED_MODULE_7__.NavigationButton, {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__["default"],
    path: parentMenu + '/typography'
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography')), hasColorPanel && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_navigation_button__WEBPACK_IMPORTED_MODULE_7__.NavigationButton, {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__["default"],
    path: parentMenu + '/colors'
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Colors')), hasLayoutPanel && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_navigation_button__WEBPACK_IMPORTED_MODULE_7__.NavigationButton, {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__["default"],
    path: parentMenu + '/layout'
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Layout')));
}

/* harmony default export */ __webpack_exports__["default"] = (ContextMenu);


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/context.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/global-styles/context.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_GLOBAL_STYLES_CONTEXT": function() { return /* binding */ DEFAULT_GLOBAL_STYLES_CONTEXT; },
/* harmony export */   "GlobalStylesContext": function() { return /* binding */ GlobalStylesContext; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

const DEFAULT_GLOBAL_STYLES_CONTEXT = {
  user: {},
  base: {},
  merged: {},
  setUserConfig: () => {}
};
const GlobalStylesContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)(DEFAULT_GLOBAL_STYLES_CONTEXT);


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/dimensions-panel.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/global-styles/dimensions-panel.js ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DimensionsPanel; },
/* harmony export */   "useHasDimensionsPanel": function() { return /* binding */ useHasDimensionsPanel; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/hooks.js");


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


const AXIAL_SIDES = ['horizontal', 'vertical'];
function useHasDimensionsPanel(name) {
  const hasPadding = useHasPadding(name);
  const hasMargin = useHasMargin(name);
  const hasGap = useHasGap(name);
  return hasPadding || hasMargin || hasGap;
}

function useHasPadding(name) {
  const supports = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.getSupportedGlobalStylesPanels)(name);
  const [settings] = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useSetting)('spacing.padding', name);
  return settings && supports.includes('padding');
}

function useHasMargin(name) {
  const supports = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.getSupportedGlobalStylesPanels)(name);
  const [settings] = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useSetting)('spacing.margin', name);
  return settings && supports.includes('margin');
}

function useHasGap(name) {
  const supports = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.getSupportedGlobalStylesPanels)(name);
  const [settings] = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useSetting)('spacing.blockGap', name); // Do not show the gap control panel for block-level global styles
  // as they do not work on the frontend.
  // See: https://github.com/WordPress/gutenberg/pull/39845.
  // We can revert this condition when they're working again.

  return !!name ? false : settings && supports.includes('--wp--style--block-gap');
}

function filterValuesBySides(values, sides) {
  if (!sides) {
    // If no custom side configuration all sides are opted into by default.
    return values;
  } // Only include sides opted into within filtered values.


  const filteredValues = {};
  sides.forEach(side => {
    if (side === 'vertical') {
      filteredValues.top = values.top;
      filteredValues.bottom = values.bottom;
    }

    if (side === 'horizontal') {
      filteredValues.left = values.left;
      filteredValues.right = values.right;
    }

    filteredValues[side] = values[side];
  });
  return filteredValues;
}

function splitStyleValue(value) {
  // Check for shorthand value ( a string value ).
  if (value && typeof value === 'string') {
    // Convert to value for individual sides for BoxControl.
    return {
      top: value,
      right: value,
      bottom: value,
      left: value
    };
  }

  return value;
}

function DimensionsPanel(_ref) {
  let {
    name
  } = _ref;
  const showPaddingControl = useHasPadding(name);
  const showMarginControl = useHasMargin(name);
  const showGapControl = useHasGap(name);
  const units = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUseCustomUnits)({
    availableUnits: (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useSetting)('spacing.units', name)[0] || ['%', 'px', 'em', 'rem', 'vw']
  });
  const [rawPadding, setRawPadding] = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useStyle)('spacing.padding', name);
  const paddingValues = splitStyleValue(rawPadding);
  const paddingSides = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalUseCustomSides)(name, 'padding');
  const isAxialPadding = paddingSides && paddingSides.some(side => AXIAL_SIDES.includes(side));

  const setPaddingValues = newPaddingValues => {
    const padding = filterValuesBySides(newPaddingValues, paddingSides);
    setRawPadding(padding);
  };

  const resetPaddingValue = () => setPaddingValues({});

  const hasPaddingValue = () => !!paddingValues && Object.keys(paddingValues).length;

  const [rawMargin, setRawMargin] = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useStyle)('spacing.margin', name);
  const marginValues = splitStyleValue(rawMargin);
  const marginSides = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalUseCustomSides)(name, 'margin');
  const isAxialMargin = marginSides && marginSides.some(side => AXIAL_SIDES.includes(side));

  const setMarginValues = newMarginValues => {
    const margin = filterValuesBySides(newMarginValues, marginSides);
    setRawMargin(margin);
  };

  const resetMarginValue = () => setMarginValues({});

  const hasMarginValue = () => !!marginValues && Object.keys(marginValues).length;

  const [gapValue, setGapValue] = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useStyle)('spacing.blockGap', name);

  const resetGapValue = () => setGapValue(undefined);

  const hasGapValue = () => !!gapValue;

  const resetAll = () => {
    resetPaddingValue();
    resetMarginValue();
    resetGapValue();
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToolsPanel, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Dimensions'),
    resetAll: resetAll
  }, showPaddingControl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToolsPanelItem, {
    hasValue: hasPaddingValue,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Padding'),
    onDeselect: resetPaddingValue,
    isShownByDefault: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalBoxControl, {
    values: paddingValues,
    onChange: setPaddingValues,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Padding'),
    sides: paddingSides,
    units: units,
    allowReset: false,
    splitOnAxis: isAxialPadding
  })), showMarginControl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToolsPanelItem, {
    hasValue: hasMarginValue,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Margin'),
    onDeselect: resetMarginValue,
    isShownByDefault: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalBoxControl, {
    values: marginValues,
    onChange: setMarginValues,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Margin'),
    sides: marginSides,
    units: units,
    allowReset: false,
    splitOnAxis: isAxialMargin
  })), showGapControl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToolsPanelItem, {
    hasValue: hasGapValue,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Block spacing'),
    onDeselect: resetGapValue,
    isShownByDefault: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Block spacing'),
    __unstableInputWidth: "80px",
    min: 0,
    onChange: setGapValue,
    units: units,
    value: gapValue
  })));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/global-styles-provider.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/global-styles/global-styles-provider.js ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalStylesProvider": function() { return /* binding */ GlobalStylesProvider; },
/* harmony export */   "mergeBaseAndUserConfigs": function() { return /* binding */ mergeBaseAndUserConfigs; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/context.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



function mergeTreesCustomizer(_, srcValue) {
  // We only pass as arrays the presets,
  // in which case we want the new array of values
  // to override the old array (no merging).
  if (Array.isArray(srcValue)) {
    return srcValue;
  }
}

function mergeBaseAndUserConfigs(base, user) {
  return (0,lodash__WEBPACK_IMPORTED_MODULE_1__.mergeWith)({}, base, user, mergeTreesCustomizer);
}

const cleanEmptyObject = object => {
  if (!(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isObject)(object) || Array.isArray(object)) {
    return object;
  }

  const cleanedNestedObjects = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.pickBy)((0,lodash__WEBPACK_IMPORTED_MODULE_1__.mapValues)(object, cleanEmptyObject), lodash__WEBPACK_IMPORTED_MODULE_1__.identity);
  return (0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(cleanedNestedObjects) ? undefined : cleanedNestedObjects;
};

function useGlobalStylesUserConfig() {
  const {
    globalStylesId,
    settings,
    styles
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    const _globalStylesId = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.store).__experimentalGetCurrentGlobalStylesId();

    const record = _globalStylesId ? select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.store).getEditedEntityRecord('root', 'globalStyles', _globalStylesId) : undefined;
    return {
      globalStylesId: _globalStylesId,
      settings: record === null || record === void 0 ? void 0 : record.settings,
      styles: record === null || record === void 0 ? void 0 : record.styles
    };
  }, []);
  const {
    getEditedEntityRecord
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.store);
  const {
    editEntityRecord
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.store);
  const config = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return {
      settings: settings !== null && settings !== void 0 ? settings : {},
      styles: styles !== null && styles !== void 0 ? styles : {}
    };
  }, [settings, styles]);
  const setConfig = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(callback => {
    var _record$styles, _record$settings;

    const record = getEditedEntityRecord('root', 'globalStyles', globalStylesId);
    const currentConfig = {
      styles: (_record$styles = record === null || record === void 0 ? void 0 : record.styles) !== null && _record$styles !== void 0 ? _record$styles : {},
      settings: (_record$settings = record === null || record === void 0 ? void 0 : record.settings) !== null && _record$settings !== void 0 ? _record$settings : {}
    };
    const updatedConfig = callback(currentConfig);
    editEntityRecord('root', 'globalStyles', globalStylesId, {
      styles: cleanEmptyObject(updatedConfig.styles) || {},
      settings: cleanEmptyObject(updatedConfig.settings) || {}
    });
  }, [globalStylesId]);
  return [!!settings || !!styles, config, setConfig];
}

function useGlobalStylesBaseConfig() {
  const baseConfig = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    return select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.store).__experimentalGetCurrentThemeBaseGlobalStyles();
  }, []);
  return [!!baseConfig, baseConfig];
}

function useGlobalStylesContext() {
  const [isUserConfigReady, userConfig, setUserConfig] = useGlobalStylesUserConfig();
  const [isBaseConfigReady, baseConfig] = useGlobalStylesBaseConfig();
  const mergedConfig = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!baseConfig || !userConfig) {
      return {};
    }

    return mergeBaseAndUserConfigs(baseConfig, userConfig);
  }, [userConfig, baseConfig]);
  const context = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return {
      isReady: isUserConfigReady && isBaseConfigReady,
      user: userConfig,
      base: baseConfig,
      merged: mergedConfig,
      setUserConfig
    };
  }, [mergedConfig, userConfig, baseConfig, setUserConfig, isUserConfigReady, isBaseConfigReady]);
  return context;
}

function GlobalStylesProvider(_ref) {
  let {
    children
  } = _ref;
  const context = useGlobalStylesContext();

  if (!context.isReady) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_context__WEBPACK_IMPORTED_MODULE_4__.GlobalStylesContext.Provider, {
    value: context
  }, children);
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/gradients-palette-panel.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/global-styles/gradients-palette-panel.js ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ GradientPalettePanel; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/hooks.js");
/* harmony import */ var _subtitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subtitle */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/subtitle.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



function GradientPalettePanel(_ref) {
  let {
    name
  } = _ref;
  const [themeGradients, setThemeGradients] = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useSetting)('color.gradients.theme', name);
  const [baseThemeGradients] = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useSetting)('color.gradients.theme', name, 'base');
  const [defaultGradients, setDefaultGradients] = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useSetting)('color.gradients.default', name);
  const [baseDefaultGradients] = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useSetting)('color.gradients.default', name, 'base');
  const [customGradients, setCustomGradients] = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useSetting)('color.gradients.custom', name);
  const [defaultPaletteEnabled] = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useSetting)('color.defaultGradients', name);
  const [duotonePalette] = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useSetting)('color.duotone') || [];
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalVStack, {
    className: "edit-site-global-styles-gradient-palette-panel",
    spacing: 10
  }, !!themeGradients && !!themeGradients.length && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalPaletteEdit, {
    canReset: themeGradients !== baseThemeGradients,
    canOnlyChangeValues: true,
    gradients: themeGradients,
    onChange: setThemeGradients,
    paletteLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Theme')
  }), !!defaultGradients && !!defaultGradients.length && !!defaultPaletteEnabled && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalPaletteEdit, {
    canReset: defaultGradients !== baseDefaultGradients,
    canOnlyChangeValues: true,
    gradients: defaultGradients,
    onChange: setDefaultGradients,
    paletteLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalPaletteEdit, {
    gradients: customGradients,
    onChange: setCustomGradients,
    paletteLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Custom'),
    emptyMessage: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Custom gradients are empty! Add some gradients to create your own palette.'),
    slugPrefix: "custom-"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_subtitle__WEBPACK_IMPORTED_MODULE_5__["default"], null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Duotone')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalSpacer, {
    margin: 3
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.DuotonePicker, {
    duotonePalette: duotonePalette,
    disableCustomDuotone: true,
    disableCustomColors: true,
    clearable: false,
    onChange: lodash__WEBPACK_IMPORTED_MODULE_1__.noop
  })));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/header.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/global-styles/header.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/chevron-right.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/chevron-left.js");
/* harmony import */ var _navigation_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation-button */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/navigation-button.js");


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



function ScreenHeader(_ref) {
  let {
    title,
    description
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalVStack, {
    spacing: 2
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalHStack, {
    spacing: 2
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalView, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_navigation_button__WEBPACK_IMPORTED_MODULE_3__.NavigationBackButton, {
    icon: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.isRTL)() ? _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"] : _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"],
    size: "small",
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Navigate to the previous view')
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalSpacer, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalHeading, {
    level: 5
  }, title))), description && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-global-styles-header__description"
  }, description));
}

/* harmony default export */ __webpack_exports__["default"] = (ScreenHeader);


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/hooks.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/global-styles/hooks.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSupportedGlobalStylesPanels": function() { return /* binding */ getSupportedGlobalStylesPanels; },
/* harmony export */   "useColorsPerOrigin": function() { return /* binding */ useColorsPerOrigin; },
/* harmony export */   "useGlobalStylesReset": function() { return /* binding */ useGlobalStylesReset; },
/* harmony export */   "useGradientsPerOrigin": function() { return /* binding */ useGradientsPerOrigin; },
/* harmony export */   "useSetting": function() { return /* binding */ useSetting; },
/* harmony export */   "useStyle": function() { return /* binding */ useStyle; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/utils.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./context */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/context.js");
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



const EMPTY_CONFIG = {
  settings: {},
  styles: {}
};
const useGlobalStylesReset = () => {
  const {
    user: config,
    setUserConfig
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context__WEBPACK_IMPORTED_MODULE_5__.GlobalStylesContext);
  const canReset = !!config && !(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEqual)(config, EMPTY_CONFIG);
  return [canReset, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => setUserConfig(() => EMPTY_CONFIG), [setUserConfig])];
};
function useSetting(path, blockName) {
  var _getSettingValueForCo;

  let source = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'all';
  const {
    merged: mergedConfig,
    base: baseConfig,
    user: userConfig,
    setUserConfig
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context__WEBPACK_IMPORTED_MODULE_5__.GlobalStylesContext);
  const fullPath = !blockName ? `settings.${path}` : `settings.blocks.${blockName}.${path}`;

  const setSetting = newValue => {
    setUserConfig(currentConfig => {
      const newUserConfig = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(currentConfig);
      const pathToSet = _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.__EXPERIMENTAL_PATHS_WITH_MERGE[path] ? fullPath + '.custom' : fullPath;
      (0,lodash__WEBPACK_IMPORTED_MODULE_0__.set)(newUserConfig, pathToSet, newValue);
      return newUserConfig;
    });
  };

  const getSettingValueForContext = name => {
    const currentPath = !name ? `settings.${path}` : `settings.blocks.${name}.${path}`;

    const getSettingValue = configToUse => {
      const result = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(configToUse, currentPath);

      if (_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.__EXPERIMENTAL_PATHS_WITH_MERGE[path]) {
        var _ref, _result$custom;

        return (_ref = (_result$custom = result === null || result === void 0 ? void 0 : result.custom) !== null && _result$custom !== void 0 ? _result$custom : result === null || result === void 0 ? void 0 : result.theme) !== null && _ref !== void 0 ? _ref : result === null || result === void 0 ? void 0 : result.default;
      }

      return result;
    };

    let result;

    switch (source) {
      case 'all':
        result = getSettingValue(mergedConfig);
        break;

      case 'user':
        result = getSettingValue(userConfig);
        break;

      case 'base':
        result = getSettingValue(baseConfig);
        break;

      default:
        throw 'Unsupported source';
    }

    return result;
  }; // Unlike styles settings get inherited from top level settings.


  const resultWithFallback = (_getSettingValueForCo = getSettingValueForContext(blockName)) !== null && _getSettingValueForCo !== void 0 ? _getSettingValueForCo : getSettingValueForContext();
  return [resultWithFallback, setSetting];
}
function useStyle(path, blockName) {
  var _get;

  let source = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'all';
  const {
    merged: mergedConfig,
    base: baseConfig,
    user: userConfig,
    setUserConfig
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context__WEBPACK_IMPORTED_MODULE_5__.GlobalStylesContext);
  const finalPath = !blockName ? `styles.${path}` : `styles.blocks.${blockName}.${path}`;

  const setStyle = newValue => {
    setUserConfig(currentConfig => {
      const newUserConfig = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(currentConfig);
      (0,lodash__WEBPACK_IMPORTED_MODULE_0__.set)(newUserConfig, finalPath, (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getPresetVariableFromValue)(mergedConfig.settings, blockName, path, newValue));
      return newUserConfig;
    });
  };

  let result;

  switch (source) {
    case 'all':
      result = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getValueFromVariable)(mergedConfig.settings, blockName, (_get = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(userConfig, finalPath)) !== null && _get !== void 0 ? _get : (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(baseConfig, finalPath));
      break;

    case 'user':
      result = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getValueFromVariable)(mergedConfig.settings, blockName, (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(userConfig, finalPath));
      break;

    case 'base':
      result = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getValueFromVariable)(baseConfig.settings, blockName, (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(baseConfig, finalPath));
      break;

    default:
      throw 'Unsupported source';
  }

  return [result, setStyle];
}
const ROOT_BLOCK_SUPPORTS = ['background', 'backgroundColor', 'color', 'linkColor', 'fontFamily', 'fontSize', 'fontStyle', 'fontWeight', 'lineHeight', 'textDecoration', 'textTransform', 'padding'];
function getSupportedGlobalStylesPanels(name) {
  if (!name) {
    return ROOT_BLOCK_SUPPORTS;
  }

  const blockType = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.getBlockType)(name);

  if (!blockType) {
    return [];
  }

  const supportKeys = [];
  Object.keys(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.__EXPERIMENTAL_STYLE_PROPERTY).forEach(styleName => {
    if (!_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.__EXPERIMENTAL_STYLE_PROPERTY[styleName].support) {
      return;
    } // Opting out means that, for certain support keys like background color,
    // blocks have to explicitly set the support value false. If the key is
    // unset, we still enable it.


    if (_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.__EXPERIMENTAL_STYLE_PROPERTY[styleName].requiresOptOut) {
      if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.has)(blockType.supports, _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.__EXPERIMENTAL_STYLE_PROPERTY[styleName].support[0]) && (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(blockType.supports, _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.__EXPERIMENTAL_STYLE_PROPERTY[styleName].support) !== false) {
        return supportKeys.push(styleName);
      }
    }

    if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(blockType.supports, _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.__EXPERIMENTAL_STYLE_PROPERTY[styleName].support, false)) {
      return supportKeys.push(styleName);
    }
  });
  return supportKeys;
}
function useColorsPerOrigin(name) {
  const [customColors] = useSetting('color.palette.custom', name);
  const [themeColors] = useSetting('color.palette.theme', name);
  const [defaultColors] = useSetting('color.palette.default', name);
  const [shouldDisplayDefaultColors] = useSetting('color.defaultPalette');
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    const result = [];

    if (themeColors && themeColors.length) {
      result.push({
        name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Theme', 'Indicates this palette comes from the theme.'),
        colors: themeColors
      });
    }

    if (shouldDisplayDefaultColors && defaultColors && defaultColors.length) {
      result.push({
        name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Default', 'Indicates this palette comes from WordPress.'),
        colors: defaultColors
      });
    }

    if (customColors && customColors.length) {
      result.push({
        name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Custom', 'Indicates this palette is created by the user.'),
        colors: customColors
      });
    }

    return result;
  }, [customColors, themeColors, defaultColors]);
}
function useGradientsPerOrigin(name) {
  const [customGradients] = useSetting('color.gradients.custom', name);
  const [themeGradients] = useSetting('color.gradients.theme', name);
  const [defaultGradients] = useSetting('color.gradients.default', name);
  const [shouldDisplayDefaultGradients] = useSetting('color.defaultGradients');
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    const result = [];

    if (themeGradients && themeGradients.length) {
      result.push({
        name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Theme', 'Indicates this palette comes from the theme.'),
        gradients: themeGradients
      });
    }

    if (shouldDisplayDefaultGradients && defaultGradients && defaultGradients.length) {
      result.push({
        name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Default', 'Indicates this palette comes from WordPress.'),
        gradients: defaultGradients
      });
    }

    if (customGradients && customGradients.length) {
      result.push({
        name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Custom', 'Indicates this palette is created by the user.'),
        gradients: customGradients
      });
    }

    return result;
  }, [customGradients, themeGradients, defaultGradients]);
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/icon-with-current-color.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/global-styles/icon-with-current-color.js ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconWithCurrentColor": function() { return /* binding */ IconWithCurrentColor; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


function IconWithCurrentColor(_ref) {
  let {
    className,
    ...props
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'edit-site-global-styles-icon-with-current-color')
  }, props));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/index.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/global-styles/index.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalStylesUI": function() { return /* reexport safe */ _ui__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   "useGlobalStylesOutput": function() { return /* reexport safe */ _use_global_styles_output__WEBPACK_IMPORTED_MODULE_2__.useGlobalStylesOutput; },
/* harmony export */   "useGlobalStylesReset": function() { return /* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.useGlobalStylesReset; },
/* harmony export */   "useSetting": function() { return /* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.useSetting; },
/* harmony export */   "useStyle": function() { return /* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.useStyle; }
/* harmony export */ });
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/ui.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hooks */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/hooks.js");
/* harmony import */ var _use_global_styles_output__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-global-styles-output */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/use-global-styles-output.js");





/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/navigation-button.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/global-styles/navigation-button.js ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationBackButton": function() { return /* binding */ NavigationBackButton; },
/* harmony export */   "NavigationButton": function() { return /* binding */ NavigationButton; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icon_with_current_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon-with-current-color */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/icon-with-current-color.js");



/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */



function GenericNavigationButton(_ref) {
  let {
    icon,
    children,
    ...props
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalItem, props, icon && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalHStack, {
    justify: "flex-start"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_icon_with_current_color__WEBPACK_IMPORTED_MODULE_3__.IconWithCurrentColor, {
    icon: icon,
    size: 24
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, children)), !icon && children);
}

function NavigationButton(props) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalNavigatorButton, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    as: GenericNavigationButton
  }, props));
}

function NavigationBackButton(props) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalNavigatorBackButton, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    as: GenericNavigationButton
  }, props));
}




/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/palette.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/global-styles/palette.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _subtitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subtitle */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/subtitle.js");
/* harmony import */ var _navigation_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation-button */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/navigation-button.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/hooks.js");
/* harmony import */ var _color_indicator_wrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./color-indicator-wrapper */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/color-indicator-wrapper.js");


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */





const EMPTY_COLORS = [];

function Palette(_ref) {
  let {
    name
  } = _ref;
  const [customColors] = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__.useSetting)('color.palette.custom');
  const [themeColors] = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__.useSetting)('color.palette.theme');
  const [defaultColors] = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__.useSetting)('color.palette.default');
  const [defaultPaletteEnabled] = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__.useSetting)('color.defaultPalette', name);
  const colors = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => [...(customColors || EMPTY_COLORS), ...(themeColors || EMPTY_COLORS), ...(defaultColors && defaultPaletteEnabled ? defaultColors : EMPTY_COLORS)], [customColors, themeColors, defaultColors, defaultPaletteEnabled]);
  const screenPath = !name ? '/colors/palette' : '/blocks/' + name + '/colors/palette';
  const paletteButtonText = colors.length > 0 ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)( // Translators: %d: Number of palette colors.
  (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._n)('%d color', '%d colors', colors.length), colors.length) : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add custom colors');
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalVStack, {
    spacing: 3
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_subtitle__WEBPACK_IMPORTED_MODULE_3__["default"], null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Palette')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalItemGroup, {
    isBordered: true,
    isSeparated: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_navigation_button__WEBPACK_IMPORTED_MODULE_4__.NavigationButton, {
    path: screenPath
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalHStack, {
    direction: colors.length === 0 ? 'row-reverse' : 'row'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalZStack, {
    isLayered: false,
    offset: -8
  }, colors.slice(0, 5).map(_ref2 => {
    let {
      color
    } = _ref2;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_color_indicator_wrapper__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: color
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorIndicator, {
      colorValue: color
    }));
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FlexItem, null, paletteButtonText)))));
}

/* harmony default export */ __webpack_exports__["default"] = (Palette);


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/preview.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/global-styles/preview.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/hooks.js");
/* harmony import */ var _use_global_styles_output__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./use-global-styles-output */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/use-global-styles-output.js");


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



const firstFrame = {
  start: {
    opacity: 1,
    display: 'block'
  },
  hover: {
    opacity: 0,
    display: 'none'
  }
};
const secondFrame = {
  hover: {
    opacity: 1,
    display: 'block'
  },
  start: {
    opacity: 0,
    display: 'none'
  }
};
const normalizedWidth = 248;
const normalizedHeight = 152;
const normalizedColorSwatchSize = 32;

const StylesPreview = _ref => {
  let {
    label,
    isFocused
  } = _ref;
  const [fontWeight] = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useStyle)('typography.fontWeight');
  const [fontFamily = 'serif'] = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useStyle)('typography.fontFamily');
  const [headingFontFamily = fontFamily] = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useStyle)('elements.h1.typography.fontFamily');
  const [headingFontWeight = fontWeight] = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useStyle)('elements.h1.typography.fontWeight');
  const [textColor = 'black'] = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useStyle)('color.text');
  const [headingColor = textColor] = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useStyle)('elements.h1.color.text');
  const [linkColor = 'blue'] = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useStyle)('elements.link.color.text');
  const [backgroundColor = 'white'] = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useStyle)('color.background');
  const [gradientValue] = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useStyle)('color.gradient');
  const [styles] = (0,_use_global_styles_output__WEBPACK_IMPORTED_MODULE_5__.useGlobalStylesOutput)();
  const disableMotion = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.useReducedMotion)();
  const [coreColors] = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useSetting)('color.palette.core');
  const [themeColors] = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useSetting)('color.palette.theme');
  const [customColors] = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useSetting)('color.palette.custom');
  const [isHovered, setIsHovered] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [containerResizeListener, {
    width
  }] = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.useResizeObserver)();
  const ratio = width ? width / normalizedWidth : 1;
  const paletteColors = (themeColors !== null && themeColors !== void 0 ? themeColors : []).concat(customColors !== null && customColors !== void 0 ? customColors : []).concat(coreColors !== null && coreColors !== void 0 ? coreColors : []);
  const highlightedColors = paletteColors.filter( // we exclude these two colors because they are already visible in the preview.
  _ref2 => {
    let {
      color
    } = _ref2;
    return color !== backgroundColor && color !== headingColor;
  }).slice(0, 2); // Reset leaked styles from WP common.css.

  const editorStyles = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (styles) {
      return [...styles, {
        css: 'body{min-width: 0;}',
        isGlobalStyles: true
      }];
    }

    return styles;
  }, [styles]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.__unstableIframe, {
    className: "edit-site-global-styles-preview__iframe",
    head: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.__unstableEditorStyles, {
      styles: editorStyles
    }),
    style: {
      height: normalizedHeight * ratio,
      visibility: !width ? 'hidden' : 'visible'
    },
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    tabIndex: -1
  }, containerResizeListener, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__unstableMotion.div, {
    style: {
      height: normalizedHeight * ratio,
      width: '100%',
      background: gradientValue !== null && gradientValue !== void 0 ? gradientValue : backgroundColor,
      cursor: 'pointer'
    },
    initial: "start",
    animate: (isHovered || isFocused) && !disableMotion ? 'hover' : 'start'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__unstableMotion.div, {
    variants: firstFrame,
    style: {
      height: '100%',
      overflow: 'hidden'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalHStack, {
    spacing: 10 * ratio,
    justify: "center",
    style: {
      height: '100%',
      overflow: 'hidden'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      fontFamily: headingFontFamily,
      fontSize: 65 * ratio,
      color: headingColor,
      fontWeight: headingFontWeight
    }
  }, "Aa"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalVStack, {
    spacing: 4 * ratio
  }, highlightedColors.map(_ref3 => {
    let {
      slug,
      color
    } = _ref3;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: slug,
      style: {
        height: normalizedColorSwatchSize * ratio,
        width: normalizedColorSwatchSize * ratio,
        background: color,
        borderRadius: normalizedColorSwatchSize * ratio / 2
      }
    });
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__unstableMotion.div, {
    variants: secondFrame,
    style: {
      height: '100%',
      overflow: 'hidden'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalVStack, {
    spacing: 3 * ratio,
    justify: "center",
    style: {
      height: '100%',
      overflow: 'hidden',
      padding: 10 * ratio,
      boxSizing: 'border-box'
    }
  }, label && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      fontSize: 35 * ratio,
      fontFamily: headingFontFamily,
      color: headingColor,
      fontWeight: headingFontWeight,
      lineHeight: '1em'
    }
  }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalHStack, {
    spacing: 2 * ratio,
    justify: "flex-start"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      fontFamily,
      fontSize: 24 * ratio,
      color: textColor
    }
  }, "Aa"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      fontFamily,
      fontSize: 24 * ratio,
      color: linkColor
    }
  }, "Aa")), paletteColors && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalHStack, {
    spacing: 0
  }, paletteColors.slice(0, 4).map((_ref4, index) => {
    let {
      color
    } = _ref4;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: index,
      style: {
        height: 10 * ratio,
        width: 30 * ratio,
        background: color,
        flexGrow: 1
      }
    });
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (StylesPreview);


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/screen-background-color.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/global-styles/screen-background-color.js ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/header.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/hooks.js");



/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




function ScreenBackgroundColor(_ref) {
  let {
    name
  } = _ref;
  const supports = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__.getSupportedGlobalStylesPanels)(name);
  const [solids] = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__.useSetting)('color.palette', name);
  const [gradients] = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__.useSetting)('color.gradients', name);
  const [areCustomSolidsEnabled] = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__.useSetting)('color.custom', name);
  const [areCustomGradientsEnabled] = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__.useSetting)('color.customGradient', name);
  const colorsPerOrigin = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__.useColorsPerOrigin)(name);
  const gradientsPerOrigin = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__.useGradientsPerOrigin)(name);
  const [isBackgroundEnabled] = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__.useSetting)('color.background', name);
  const hasBackgroundColor = supports.includes('backgroundColor') && isBackgroundEnabled && (solids.length > 0 || areCustomSolidsEnabled);
  const hasGradientColor = supports.includes('background') && (gradients.length > 0 || areCustomGradientsEnabled);
  const [backgroundColor, setBackgroundColor] = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__.useStyle)('color.background', name);
  const [userBackgroundColor] = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__.useStyle)('color.background', name, 'user');
  const [gradient, setGradient] = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__.useStyle)('color.gradient', name);
  const [userGradient] = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__.useStyle)('color.gradient', name, 'user');

  if (!hasBackgroundColor && !hasGradientColor) {
    return null;
  }

  let backgroundSettings = {};

  if (hasBackgroundColor) {
    backgroundSettings = {
      colorValue: backgroundColor,
      onColorChange: setBackgroundColor
    };

    if (backgroundColor) {
      backgroundSettings.clearable = backgroundColor === userBackgroundColor;
    }
  }

  let gradientSettings = {};

  if (hasGradientColor) {
    gradientSettings = {
      gradientValue: gradient,
      onGradientChange: setGradient
    };

    if (gradient) {
      gradientSettings.clearable = gradient === userGradient;
    }
  }

  const controlProps = { ...backgroundSettings,
    ...gradientSettings
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background'),
    description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Set a background color or gradient for the whole site.')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalColorGradientControl, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "edit-site-screen-background-color__control",
    colors: colorsPerOrigin,
    gradients: gradientsPerOrigin,
    disableCustomColors: !areCustomSolidsEnabled,
    disableCustomGradients: !areCustomGradientsEnabled,
    __experimentalHasMultipleOrigins: true,
    showTitle: false,
    enableAlpha: true,
    __experimentalIsRenderedInSidebar: true
  }, controlProps)));
}

/* harmony default export */ __webpack_exports__["default"] = (ScreenBackgroundColor);


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/screen-block-list.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/global-styles/screen-block-list.js ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/a11y */ "@wordpress/a11y");
/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_a11y__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _border_panel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./border-panel */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/border-panel.js");
/* harmony import */ var _color_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./color-utils */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/color-utils.js");
/* harmony import */ var _dimensions_panel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dimensions-panel */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/dimensions-panel.js");
/* harmony import */ var _typography_panel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./typography-panel */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/typography-panel.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./header */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/header.js");
/* harmony import */ var _navigation_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./navigation-button */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/navigation-button.js");


/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */








function useSortedBlockTypes() {
  const blockItems = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => select(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.store).getBlockTypes(), []); // Ensure core blocks are prioritized in the returned results,
  // because third party blocks can be registered earlier than
  // the core blocks (usually by using the `init` action),
  // thus affecting the display order.
  // We don't sort reusable blocks as they are handled differently.

  const groupByType = (blocks, block) => {
    const {
      core,
      noncore
    } = blocks;
    const type = block.name.startsWith('core/') ? core : noncore;
    type.push(block);
    return blocks;
  };

  const {
    core: coreItems,
    noncore: nonCoreItems
  } = blockItems.reduce(groupByType, {
    core: [],
    noncore: []
  });
  return [...coreItems, ...nonCoreItems];
}

function BlockMenuItem(_ref) {
  let {
    block
  } = _ref;
  const hasTypographyPanel = (0,_typography_panel__WEBPACK_IMPORTED_MODULE_11__.useHasTypographyPanel)(block.name);
  const hasColorPanel = (0,_color_utils__WEBPACK_IMPORTED_MODULE_9__.useHasColorPanel)(block.name);
  const hasBorderPanel = (0,_border_panel__WEBPACK_IMPORTED_MODULE_8__.useHasBorderPanel)(block.name);
  const hasDimensionsPanel = (0,_dimensions_panel__WEBPACK_IMPORTED_MODULE_10__.useHasDimensionsPanel)(block.name);
  const hasLayoutPanel = hasBorderPanel || hasDimensionsPanel;
  const hasBlockMenuItem = hasTypographyPanel || hasColorPanel || hasLayoutPanel;

  if (!hasBlockMenuItem) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_navigation_button__WEBPACK_IMPORTED_MODULE_13__.NavigationButton, {
    path: '/blocks/' + block.name
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalHStack, {
    justify: "flex-start"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.BlockIcon, {
    icon: block.icon
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FlexItem, null, block.title)));
}

function ScreenBlockList() {
  const sortedBlockTypes = useSortedBlockTypes();
  const [filterValue, setFilterValue] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const debouncedSpeak = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__.useDebounce)(_wordpress_a11y__WEBPACK_IMPORTED_MODULE_7__.speak, 500);
  const isMatchingSearchTerm = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => select(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.store).isMatchingSearchTerm, []);
  const filteredBlockTypes = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!filterValue) {
      return sortedBlockTypes;
    }

    return sortedBlockTypes.filter(blockType => isMatchingSearchTerm(blockType, filterValue));
  }, [filterValue, sortedBlockTypes, isMatchingSearchTerm]);
  const blockTypesListRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(); // Announce search results on change

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!filterValue) {
      return;
    } // We extract the results from the wrapper div's `ref` because
    // filtered items can contain items that will eventually not
    // render and there is no reliable way to detect when a child
    // will return `null`.
    // TODO: We should find a better way of handling this as it's
    // fragile and depends on the number of rendered elements of `BlockMenuItem`,
    // which is now one.
    // @see https://github.com/WordPress/gutenberg/pull/39117#discussion_r816022116


    const count = blockTypesListRef.current.childElementCount;
    const resultsFoundMessage = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)(
    /* translators: %d: number of results. */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._n)('%d result found.', '%d results found.', count), count);
    debouncedSpeak(resultsFoundMessage, count);
  }, [filterValue, debouncedSpeak]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_header__WEBPACK_IMPORTED_MODULE_12__["default"], {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Blocks'),
    description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Customize the appearance of specific blocks and for the whole site.')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SearchControl, {
    className: "edit-site-block-types-search",
    onChange: setFilterValue,
    value: filterValue,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Search for blocks'),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Search')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ref: blockTypesListRef,
    className: "edit-site-block-types-item-list"
  }, filteredBlockTypes.map(block => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockMenuItem, {
    block: block,
    key: 'menu-itemblock-' + block.name
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (ScreenBlockList);


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/screen-block.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/global-styles/screen-block.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context-menu */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/context-menu.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/header.js");


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */




function ScreenBlock(_ref) {
  let {
    name
  } = _ref;
  const blockType = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.getBlockType)(name);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: blockType.title
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_context_menu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    parentMenu: '/blocks/' + name,
    name: name
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ScreenBlock);


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/screen-color-palette.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/global-styles/screen-color-palette.js ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _color_palette_panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./color-palette-panel */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/color-palette-panel.js");
/* harmony import */ var _gradients_palette_panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gradients-palette-panel */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/gradients-palette-panel.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/header.js");


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */





function ScreenColorPalette(_ref) {
  let {
    name
  } = _ref;
  const [currentTab, setCurrentTab] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('solid');
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Palette'),
    description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Palettes are used to provide default color options for blocks and various design tools. Here you can edit the colors with their labels.')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToggleGroupControl, {
    className: "edit-site-screen-color-palette-toggle",
    value: currentTab,
    onChange: setCurrentTab,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select palette type'),
    hideLabelFromVision: true,
    isBlock: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToggleGroupControlOption, {
    value: "solid",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Solid')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToggleGroupControlOption, {
    value: "gradient",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Gradient')
  })), currentTab === 'solid' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_color_palette_panel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: name
  }), currentTab === 'gradient' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_gradients_palette_panel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: name
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ScreenColorPalette);


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/screen-colors.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/global-styles/screen-colors.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/header.js");
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./palette */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/palette.js");
/* harmony import */ var _navigation_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navigation-button */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/navigation-button.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/hooks.js");
/* harmony import */ var _subtitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./subtitle */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/subtitle.js");
/* harmony import */ var _color_indicator_wrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./color-indicator-wrapper */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/color-indicator-wrapper.js");


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */








function BackgroundColorItem(_ref) {
  let {
    name,
    parentMenu
  } = _ref;
  const supports = (0,_hooks__WEBPACK_IMPORTED_MODULE_6__.getSupportedGlobalStylesPanels)(name);
  const hasSupport = supports.includes('backgroundColor') || supports.includes('background');
  const [backgroundColor] = (0,_hooks__WEBPACK_IMPORTED_MODULE_6__.useStyle)('color.background', name);
  const [gradientValue] = (0,_hooks__WEBPACK_IMPORTED_MODULE_6__.useStyle)('color.gradient', name);

  if (!hasSupport) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_navigation_button__WEBPACK_IMPORTED_MODULE_5__.NavigationButton, {
    path: parentMenu + '/colors/background'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalHStack, {
    justify: "flex-start"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_color_indicator_wrapper__WEBPACK_IMPORTED_MODULE_8__["default"], {
    expanded: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorIndicator, {
    colorValue: gradientValue !== null && gradientValue !== void 0 ? gradientValue : backgroundColor
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background'))));
}

function TextColorItem(_ref2) {
  let {
    name,
    parentMenu
  } = _ref2;
  const supports = (0,_hooks__WEBPACK_IMPORTED_MODULE_6__.getSupportedGlobalStylesPanels)(name);
  const hasSupport = supports.includes('color');
  const [color] = (0,_hooks__WEBPACK_IMPORTED_MODULE_6__.useStyle)('color.text', name);

  if (!hasSupport) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_navigation_button__WEBPACK_IMPORTED_MODULE_5__.NavigationButton, {
    path: parentMenu + '/colors/text'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalHStack, {
    justify: "flex-start"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_color_indicator_wrapper__WEBPACK_IMPORTED_MODULE_8__["default"], {
    expanded: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorIndicator, {
    colorValue: color
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text'))));
}

function LinkColorItem(_ref3) {
  let {
    name,
    parentMenu
  } = _ref3;
  const supports = (0,_hooks__WEBPACK_IMPORTED_MODULE_6__.getSupportedGlobalStylesPanels)(name);
  const hasSupport = supports.includes('linkColor');
  const [color] = (0,_hooks__WEBPACK_IMPORTED_MODULE_6__.useStyle)('elements.link.color.text', name);

  if (!hasSupport) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_navigation_button__WEBPACK_IMPORTED_MODULE_5__.NavigationButton, {
    path: parentMenu + '/colors/link'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalHStack, {
    justify: "flex-start"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_color_indicator_wrapper__WEBPACK_IMPORTED_MODULE_8__["default"], {
    expanded: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorIndicator, {
    colorValue: color
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Links'))));
}

function ScreenColors(_ref4) {
  let {
    name
  } = _ref4;
  const parentMenu = name === undefined ? '' : '/blocks/' + name;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Colors'),
    description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Manage palettes and the default color of different global elements on the site.')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edit-site-global-styles-screen-colors"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalVStack, {
    spacing: 10
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_palette__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: name
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalVStack, {
    spacing: 3
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_subtitle__WEBPACK_IMPORTED_MODULE_7__["default"], null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Elements')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalItemGroup, {
    isBordered: true,
    isSeparated: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BackgroundColorItem, {
    name: name,
    parentMenu: parentMenu
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextColorItem, {
    name: name,
    parentMenu: parentMenu
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(LinkColorItem, {
    name: name,
    parentMenu: parentMenu
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (ScreenColors);


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/screen-layout.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/global-styles/screen-layout.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _border_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./border-panel */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/border-panel.js");
/* harmony import */ var _dimensions_panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dimensions-panel */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/dimensions-panel.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/header.js");


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */





function ScreenLayout(_ref) {
  let {
    name
  } = _ref;
  const hasBorderPanel = (0,_border_panel__WEBPACK_IMPORTED_MODULE_2__.useHasBorderPanel)(name);
  const hasDimensionsPanel = (0,_dimensions_panel__WEBPACK_IMPORTED_MODULE_3__.useHasDimensionsPanel)(name);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Layout')
  }), hasDimensionsPanel && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_dimensions_panel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: name
  }), hasBorderPanel && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_border_panel__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: name
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ScreenLayout);


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/screen-link-color.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/global-styles/screen-link-color.js ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/header.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/hooks.js");


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




function ScreenLinkColor(_ref) {
  let {
    name
  } = _ref;
  const supports = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.getSupportedGlobalStylesPanels)(name);
  const [solids] = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useSetting)('color.palette', name);
  const [areCustomSolidsEnabled] = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useSetting)('color.custom', name);
  const colorsPerOrigin = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useColorsPerOrigin)(name);
  const [isLinkEnabled] = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useSetting)('color.link', name);
  const hasLinkColor = supports.includes('linkColor') && isLinkEnabled && (solids.length > 0 || areCustomSolidsEnabled);
  const [linkColor, setLinkColor] = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useStyle)('elements.link.color.text', name);
  const [userLinkColor] = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useStyle)('elements.link.color.text', name, 'user');

  if (!hasLinkColor) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Links'),
    description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Set the default color used for links across the site.')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalColorGradientControl, {
    className: "edit-site-screen-link-color__control",
    colors: colorsPerOrigin,
    disableCustomColors: !areCustomSolidsEnabled,
    __experimentalHasMultipleOrigins: true,
    showTitle: false,
    enableAlpha: true,
    __experimentalIsRenderedInSidebar: true,
    colorValue: linkColor,
    onColorChange: setLinkColor,
    clearable: linkColor === userLinkColor
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ScreenLinkColor);


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/screen-root.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/global-styles/screen-root.js ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/chevron-left.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/chevron-right.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _icon_with_current_color__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icon-with-current-color */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/icon-with-current-color.js");
/* harmony import */ var _navigation_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navigation-button */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/navigation-button.js");
/* harmony import */ var _context_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./context-menu */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/context-menu.js");
/* harmony import */ var _preview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./preview */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/preview.js");


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */






function ScreenRoot() {
  const {
    variations
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    return {
      variations: select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.store).__experimentalGetCurrentThemeGlobalStylesVariations()
    };
  }, []);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Card, {
    size: "small"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalVStack, {
    spacing: 2
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Card, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardMedia, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_preview__WEBPACK_IMPORTED_MODULE_8__["default"], null))), !!(variations !== null && variations !== void 0 && variations.length) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_navigation_button__WEBPACK_IMPORTED_MODULE_6__.NavigationButton, {
    path: "/variations"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalHStack, {
    justify: "space-between"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FlexItem, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Browse styles')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_icon_with_current_color__WEBPACK_IMPORTED_MODULE_5__.IconWithCurrentColor, {
    icon: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.isRTL)() ? _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__["default"] : _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__["default"]
  }))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_context_menu__WEBPACK_IMPORTED_MODULE_7__["default"], null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardDivider, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalItemGroup, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalItem, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Customize the appearance of specific blocks for the whole site.')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_navigation_button__WEBPACK_IMPORTED_MODULE_6__.NavigationButton, {
    path: "/blocks"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalHStack, {
    justify: "space-between"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FlexItem, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Blocks')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_icon_with_current_color__WEBPACK_IMPORTED_MODULE_5__.IconWithCurrentColor, {
    icon: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.isRTL)() ? _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__["default"] : _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__["default"]
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (ScreenRoot);


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/screen-style-variations.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/global-styles/screen-style-variations.js ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _global_styles_provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./global-styles-provider */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/global-styles-provider.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./context */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/context.js");
/* harmony import */ var _preview__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./preview */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/preview.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/header.js");


/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */






function compareVariations(a, b) {
  return (0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEqual)(a.styles, b.styles) && (0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEqual)(a.settings, b.settings);
}

function Variation(_ref) {
  let {
    variation
  } = _ref;
  const [isFocused, setIsFocused] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    base,
    user,
    setUserConfig
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_9__.GlobalStylesContext);
  const context = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    var _variation$settings, _variation$styles;

    return {
      user: {
        settings: (_variation$settings = variation.settings) !== null && _variation$settings !== void 0 ? _variation$settings : {},
        styles: (_variation$styles = variation.styles) !== null && _variation$styles !== void 0 ? _variation$styles : {}
      },
      base,
      merged: (0,_global_styles_provider__WEBPACK_IMPORTED_MODULE_8__.mergeBaseAndUserConfigs)(base, variation),
      setUserConfig: () => {}
    };
  }, [variation, base]);

  const selectVariation = () => {
    setUserConfig(() => {
      return {
        settings: variation.settings,
        styles: variation.styles
      };
    });
  };

  const selectOnEnter = event => {
    if (event.keyCode === _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5__.ENTER) {
      event.preventDefault();
      selectVariation();
    }
  };

  const isActive = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return compareVariations(user, variation);
  }, [user, variation]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_context__WEBPACK_IMPORTED_MODULE_9__.GlobalStylesContext.Provider, {
    value: context
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('edit-site-global-styles-variations_item', {
      'is-active': isActive
    }),
    role: "button",
    onClick: selectVariation,
    onKeyDown: selectOnEnter,
    tabIndex: "0",
    "aria-label": variation === null || variation === void 0 ? void 0 : variation.title,
    onFocus: () => setIsFocused(true),
    onBlur: () => setIsFocused(false)
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edit-site-global-styles-variations_item-preview"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_preview__WEBPACK_IMPORTED_MODULE_10__["default"], {
    label: variation === null || variation === void 0 ? void 0 : variation.title,
    isFocused: isFocused
  }))));
}

function ScreenStyleVariations() {
  const {
    variations
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    return {
      variations: select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.store).__experimentalGetCurrentThemeGlobalStylesVariations()
    };
  }, []);
  const withEmptyVariation = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return [{
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Default'),
      settings: {},
      styles: {}
    }, ...variations];
  }, [variations]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_header__WEBPACK_IMPORTED_MODULE_11__["default"], {
    back: "/",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Browse styles'),
    description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Choose a different style combination for the theme styles')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Card, {
    size: "small",
    isBorderless: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.CardBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.__experimentalGrid, {
    columns: 2
  }, withEmptyVariation === null || withEmptyVariation === void 0 ? void 0 : withEmptyVariation.map((variation, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Variation, {
    key: index,
    variation: variation
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (ScreenStyleVariations);


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/screen-text-color.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/global-styles/screen-text-color.js ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/header.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/hooks.js");


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




function ScreenTextColor(_ref) {
  let {
    name
  } = _ref;
  const supports = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.getSupportedGlobalStylesPanels)(name);
  const [solids] = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useSetting)('color.palette', name);
  const [areCustomSolidsEnabled] = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useSetting)('color.custom', name);
  const [isTextEnabled] = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useSetting)('color.text', name);
  const colorsPerOrigin = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useColorsPerOrigin)(name);
  const hasTextColor = supports.includes('color') && isTextEnabled && (solids.length > 0 || areCustomSolidsEnabled);
  const [color, setColor] = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useStyle)('color.text', name);
  const [userColor] = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useStyle)('color.text', name, 'user');

  if (!hasTextColor) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text'),
    description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Set the default color used for text across the site.')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalColorGradientControl, {
    className: "edit-site-screen-text-color__control",
    colors: colorsPerOrigin,
    disableCustomColors: !areCustomSolidsEnabled,
    __experimentalHasMultipleOrigins: true,
    showTitle: false,
    enableAlpha: true,
    __experimentalIsRenderedInSidebar: true,
    colorValue: color,
    onColorChange: setColor,
    clearable: color === userColor
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ScreenTextColor);


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/screen-typography-element.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/global-styles/screen-typography-element.js ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _typography_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./typography-panel */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/typography-panel.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/header.js");


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */



const elements = {
  text: {
    description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Manage the fonts used on the site.'),
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text')
  },
  link: {
    description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Manage the fonts and typography used on the links.'),
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Links')
  }
};

function ScreenTypographyElement(_ref) {
  let {
    name,
    element
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: elements[element].title,
    description: elements[element].description
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_typography_panel__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: name,
    element: element
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ScreenTypographyElement);


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/screen-typography.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/global-styles/screen-typography.js ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/header.js");
/* harmony import */ var _navigation_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation-button */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/navigation-button.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/hooks.js");
/* harmony import */ var _subtitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subtitle */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/subtitle.js");
/* harmony import */ var _typography_panel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./typography-panel */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/typography-panel.js");


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */







function Item(_ref) {
  let {
    name,
    parentMenu,
    element,
    label
  } = _ref;
  const hasSupport = !name;
  const prefix = element === 'text' || !element ? '' : `elements.${element}.`;
  const extraStyles = element === 'link' ? {
    textDecoration: 'underline'
  } : {};
  const [fontFamily] = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__.useStyle)(prefix + 'typography.fontFamily', name);
  const [fontStyle] = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__.useStyle)(prefix + 'typography.fontStyle', name);
  const [fontWeight] = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__.useStyle)(prefix + 'typography.fontWeight', name);
  const [letterSpacing] = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__.useStyle)(prefix + 'typography.letterSpacing', name);
  const [backgroundColor] = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__.useStyle)(prefix + 'color.background', name);
  const [gradientValue] = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__.useStyle)(prefix + 'color.gradient', name);
  const [color] = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__.useStyle)(prefix + 'color.text', name);

  if (!hasSupport) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_navigation_button__WEBPACK_IMPORTED_MODULE_4__.NavigationButton, {
    path: parentMenu + '/typography/' + element
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalHStack, {
    justify: "flex-start"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, {
    className: "edit-site-global-styles-screen-typography__indicator",
    style: {
      fontFamily: fontFamily !== null && fontFamily !== void 0 ? fontFamily : 'serif',
      background: gradientValue !== null && gradientValue !== void 0 ? gradientValue : backgroundColor,
      color,
      fontStyle,
      fontWeight,
      letterSpacing,
      ...extraStyles
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Aa')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, label)));
}

function ScreenTypography(_ref2) {
  let {
    name
  } = _ref2;
  const parentMenu = name === undefined ? '' : '/blocks/' + name;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Typography'),
    description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Manage the typography settings for different elements.')
  }), !name && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edit-site-global-styles-screen-typography"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalVStack, {
    spacing: 3
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_subtitle__WEBPACK_IMPORTED_MODULE_6__["default"], null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Elements')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalItemGroup, {
    isBordered: true,
    isSeparated: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Item, {
    name: name,
    parentMenu: parentMenu,
    element: "text",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Item, {
    name: name,
    parentMenu: parentMenu,
    element: "link",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Links')
  })))), !!name && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_typography_panel__WEBPACK_IMPORTED_MODULE_7__["default"], {
    name: name,
    element: "text"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ScreenTypography);


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/subtitle.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/global-styles/subtitle.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */


function Subtitle(_ref) {
  let {
    children
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalHeading, {
    className: "edit-site-global-styles-subtitle",
    level: 2
  }, children);
}

/* harmony default export */ __webpack_exports__["default"] = (Subtitle);


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/typography-panel.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/global-styles/typography-panel.js ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TypographyPanel; },
/* harmony export */   "useHasTypographyPanel": function() { return /* binding */ useHasTypographyPanel; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/hooks.js");


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


function useHasTypographyPanel(name) {
  const hasLineHeight = useHasLineHeightControl(name);
  const hasFontAppearance = useHasAppearanceControl(name);
  const hasLetterSpacing = useHasLetterSpacingControl(name);
  const supports = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.getSupportedGlobalStylesPanels)(name);
  return hasLineHeight || hasFontAppearance || hasLetterSpacing || supports.includes('fontSize');
}

function useHasLineHeightControl(name) {
  const supports = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.getSupportedGlobalStylesPanels)(name);
  return (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useSetting)('typography.lineHeight', name)[0] && supports.includes('lineHeight');
}

function useHasAppearanceControl(name) {
  const supports = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.getSupportedGlobalStylesPanels)(name);
  const hasFontStyles = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useSetting)('typography.fontStyle', name)[0] && supports.includes('fontStyle');
  const hasFontWeights = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useSetting)('typography.fontWeight', name)[0] && supports.includes('fontWeight');
  return hasFontStyles || hasFontWeights;
}

function useHasLetterSpacingControl(name) {
  const supports = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.getSupportedGlobalStylesPanels)(name);
  return (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useSetting)('typography.letterSpacing', name)[0] && supports.includes('letterSpacing');
}

function TypographyPanel(_ref) {
  let {
    name,
    element
  } = _ref;
  const supports = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.getSupportedGlobalStylesPanels)(name);
  const prefix = element === 'text' || !element ? '' : `elements.${element}.`;
  const [fontSizes] = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useSetting)('typography.fontSizes', name);
  const disableCustomFontSizes = !(0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useSetting)('typography.customFontSize', name)[0];
  const [fontFamilies] = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useSetting)('typography.fontFamilies', name);
  const hasFontStyles = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useSetting)('typography.fontStyle', name)[0] && supports.includes('fontStyle');
  const hasFontWeights = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useSetting)('typography.fontWeight', name)[0] && supports.includes('fontWeight');
  const hasLineHeightEnabled = useHasLineHeightControl(name);
  const hasAppearanceControl = useHasAppearanceControl(name);
  const hasLetterSpacingControl = useHasLetterSpacingControl(name);
  const [fontFamily, setFontFamily] = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useStyle)(prefix + 'typography.fontFamily', name);
  const [fontSize, setFontSize] = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useStyle)(prefix + 'typography.fontSize', name);
  const [fontStyle, setFontStyle] = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useStyle)(prefix + 'typography.fontStyle', name);
  const [fontWeight, setFontWeight] = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useStyle)(prefix + 'typography.fontWeight', name);
  const [lineHeight, setLineHeight] = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useStyle)(prefix + 'typography.lineHeight', name);
  const [letterSpacing, setLetterSpacing] = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useStyle)(prefix + 'typography.letterSpacing', name);
  const [backgroundColor] = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useStyle)(prefix + 'color.background', name);
  const [gradientValue] = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useStyle)(prefix + 'color.gradient', name);
  const [color] = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useStyle)(prefix + 'color.text', name);
  const extraStyles = element === 'link' ? {
    textDecoration: 'underline'
  } : {};
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "edit-site-typography-panel",
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edit-site-typography-panel__preview",
    style: {
      fontFamily: fontFamily !== null && fontFamily !== void 0 ? fontFamily : 'serif',
      background: gradientValue !== null && gradientValue !== void 0 ? gradientValue : backgroundColor,
      color,
      fontSize,
      fontStyle,
      fontWeight,
      letterSpacing,
      ...extraStyles
    }
  }, "Aa"), supports.includes('fontFamily') && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.__experimentalFontFamilyControl, {
    fontFamilies: fontFamilies,
    value: fontFamily,
    onChange: setFontFamily
  }), supports.includes('fontSize') && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FontSizePicker, {
    value: fontSize,
    onChange: setFontSize,
    fontSizes: fontSizes,
    disableCustomFontSizes: disableCustomFontSizes
  }), hasLineHeightEnabled && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalSpacer, {
    marginBottom: 6
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.LineHeightControl, {
    __nextHasNoMarginBottom: true,
    value: lineHeight,
    onChange: setLineHeight
  })), hasAppearanceControl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.__experimentalFontAppearanceControl, {
    value: {
      fontStyle,
      fontWeight
    },
    onChange: _ref2 => {
      let {
        fontStyle: newFontStyle,
        fontWeight: newFontWeight
      } = _ref2;
      setFontStyle(newFontStyle);
      setFontWeight(newFontWeight);
    },
    hasFontStyles: hasFontStyles,
    hasFontWeights: hasFontWeights
  }), hasLetterSpacingControl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.__experimentalLetterSpacingControl, {
    value: letterSpacing,
    onChange: setLetterSpacing
  }));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/ui.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/global-styles/ui.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _screen_root__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./screen-root */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/screen-root.js");
/* harmony import */ var _screen_block_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./screen-block-list */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/screen-block-list.js");
/* harmony import */ var _screen_block__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./screen-block */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/screen-block.js");
/* harmony import */ var _screen_typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./screen-typography */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/screen-typography.js");
/* harmony import */ var _screen_typography_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./screen-typography-element */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/screen-typography-element.js");
/* harmony import */ var _screen_colors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./screen-colors */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/screen-colors.js");
/* harmony import */ var _screen_color_palette__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./screen-color-palette */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/screen-color-palette.js");
/* harmony import */ var _screen_background_color__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./screen-background-color */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/screen-background-color.js");
/* harmony import */ var _screen_text_color__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./screen-text-color */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/screen-text-color.js");
/* harmony import */ var _screen_link_color__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./screen-link-color */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/screen-link-color.js");
/* harmony import */ var _screen_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./screen-layout */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/screen-layout.js");
/* harmony import */ var _screen_style_variations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./screen-style-variations */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/screen-style-variations.js");



/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */














function GlobalStylesNavigationScreen(_ref) {
  let {
    className,
    ...props
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalNavigatorScreen, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: ['edit-site-global-styles-sidebar__navigator-screen', className].filter(Boolean).join(' ')
  }, props));
}

function ContextScreens(_ref2) {
  let {
    name
  } = _ref2;
  const parentMenu = name === undefined ? '' : '/blocks/' + name;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(GlobalStylesNavigationScreen, {
    path: parentMenu + '/typography'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_screen_typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
    name: name
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(GlobalStylesNavigationScreen, {
    path: parentMenu + '/typography/text'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_screen_typography_element__WEBPACK_IMPORTED_MODULE_8__["default"], {
    name: name,
    element: "text"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(GlobalStylesNavigationScreen, {
    path: parentMenu + '/typography/link'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_screen_typography_element__WEBPACK_IMPORTED_MODULE_8__["default"], {
    name: name,
    element: "link"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(GlobalStylesNavigationScreen, {
    path: parentMenu + '/colors'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_screen_colors__WEBPACK_IMPORTED_MODULE_9__["default"], {
    name: name
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(GlobalStylesNavigationScreen, {
    path: parentMenu + '/colors/palette'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_screen_color_palette__WEBPACK_IMPORTED_MODULE_10__["default"], {
    name: name
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(GlobalStylesNavigationScreen, {
    path: parentMenu + '/colors/background'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_screen_background_color__WEBPACK_IMPORTED_MODULE_11__["default"], {
    name: name
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(GlobalStylesNavigationScreen, {
    path: parentMenu + '/colors/text'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_screen_text_color__WEBPACK_IMPORTED_MODULE_12__["default"], {
    name: name
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(GlobalStylesNavigationScreen, {
    path: parentMenu + '/colors/link'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_screen_link_color__WEBPACK_IMPORTED_MODULE_13__["default"], {
    name: name
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(GlobalStylesNavigationScreen, {
    path: parentMenu + '/layout'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_screen_layout__WEBPACK_IMPORTED_MODULE_14__["default"], {
    name: name
  })));
}

function GlobalStylesUI() {
  const blocks = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.getBlockTypes)();
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalNavigatorProvider, {
    className: "edit-site-global-styles-sidebar__navigator-provider",
    initialPath: "/"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(GlobalStylesNavigationScreen, {
    path: "/"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_screen_root__WEBPACK_IMPORTED_MODULE_4__["default"], null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(GlobalStylesNavigationScreen, {
    path: "/variations"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_screen_style_variations__WEBPACK_IMPORTED_MODULE_15__["default"], null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(GlobalStylesNavigationScreen, {
    path: "/blocks"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_screen_block_list__WEBPACK_IMPORTED_MODULE_5__["default"], null)), blocks.map(block => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(GlobalStylesNavigationScreen, {
    key: 'menu-block-' + block.name,
    path: '/blocks/' + block.name
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_screen_block__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: block.name
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ContextScreens, null), blocks.map(block => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ContextScreens, {
    key: 'screens-block-' + block.name,
    name: block.name
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (GlobalStylesUI);


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/use-global-styles-output.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/global-styles/use-global-styles-output.js ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNodesWithSettings": function() { return /* binding */ getNodesWithSettings; },
/* harmony export */   "getNodesWithStyles": function() { return /* binding */ getNodesWithStyles; },
/* harmony export */   "toCustomProperties": function() { return /* binding */ toCustomProperties; },
/* harmony export */   "toStyles": function() { return /* binding */ toStyles; },
/* harmony export */   "toSvgFilters": function() { return /* binding */ toSvgFilters; },
/* harmony export */   "useGlobalStylesOutput": function() { return /* binding */ useGlobalStylesOutput; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_style_engine__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/style-engine */ "./node_modules/@wordpress/style-engine/build-module/index.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/utils.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./context */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/context.js");


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
 * Internal dependencies
 */




function compileStyleValue(uncompiledValue) {
  const VARIABLE_REFERENCE_PREFIX = 'var:';
  const VARIABLE_PATH_SEPARATOR_TOKEN_ATTRIBUTE = '|';
  const VARIABLE_PATH_SEPARATOR_TOKEN_STYLE = '--';

  if ((0,lodash__WEBPACK_IMPORTED_MODULE_1__.startsWith)(uncompiledValue, VARIABLE_REFERENCE_PREFIX)) {
    const variable = uncompiledValue.slice(VARIABLE_REFERENCE_PREFIX.length).split(VARIABLE_PATH_SEPARATOR_TOKEN_ATTRIBUTE).join(VARIABLE_PATH_SEPARATOR_TOKEN_STYLE);
    return `var(--wp--${variable})`;
  }

  return uncompiledValue;
}
/**
 * Transform given preset tree into a set of style declarations.
 *
 * @param {Object} blockPresets
 *
 * @return {Array} An array of style declarations.
 */


function getPresetsDeclarations() {
  let blockPresets = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0,lodash__WEBPACK_IMPORTED_MODULE_1__.reduce)(_utils__WEBPACK_IMPORTED_MODULE_4__.PRESET_METADATA, (declarations, _ref) => {
    let {
      path,
      valueKey,
      valueFunc,
      cssVarInfix
    } = _ref;
    const presetByOrigin = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(blockPresets, path, []);
    ['default', 'theme', 'custom'].forEach(origin => {
      if (presetByOrigin[origin]) {
        presetByOrigin[origin].forEach(value => {
          if (valueKey) {
            declarations.push(`--wp--preset--${cssVarInfix}--${(0,lodash__WEBPACK_IMPORTED_MODULE_1__.kebabCase)(value.slug)}: ${value[valueKey]}`);
          } else if (valueFunc && typeof valueFunc === 'function') {
            declarations.push(`--wp--preset--${cssVarInfix}--${(0,lodash__WEBPACK_IMPORTED_MODULE_1__.kebabCase)(value.slug)}: ${valueFunc(value)}`);
          }
        });
      }
    });
    return declarations;
  }, []);
}
/**
 * Transform given preset tree into a set of preset class declarations.
 *
 * @param {string} blockSelector
 * @param {Object} blockPresets
 * @return {string} CSS declarations for the preset classes.
 */


function getPresetsClasses(blockSelector) {
  let blockPresets = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (0,lodash__WEBPACK_IMPORTED_MODULE_1__.reduce)(_utils__WEBPACK_IMPORTED_MODULE_4__.PRESET_METADATA, (declarations, _ref2) => {
    let {
      path,
      cssVarInfix,
      classes
    } = _ref2;

    if (!classes) {
      return declarations;
    }

    const presetByOrigin = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(blockPresets, path, []);
    ['default', 'theme', 'custom'].forEach(origin => {
      if (presetByOrigin[origin]) {
        presetByOrigin[origin].forEach(_ref3 => {
          let {
            slug
          } = _ref3;
          classes.forEach(_ref4 => {
            let {
              classSuffix,
              propertyName
            } = _ref4;
            const classSelectorToUse = `.has-${(0,lodash__WEBPACK_IMPORTED_MODULE_1__.kebabCase)(slug)}-${classSuffix}`;
            const selectorToUse = blockSelector.split(',') // Selector can be "h1, h2, h3"
            .map(selector => `${selector}${classSelectorToUse}`).join(',');
            const value = `var(--wp--preset--${cssVarInfix}--${(0,lodash__WEBPACK_IMPORTED_MODULE_1__.kebabCase)(slug)})`;
            declarations += `${selectorToUse}{${propertyName}: ${value} !important;}`;
          });
        });
      }
    });
    return declarations;
  }, '');
}

function getPresetsSvgFilters() {
  let blockPresets = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _utils__WEBPACK_IMPORTED_MODULE_4__.PRESET_METADATA.filter( // Duotone are the only type of filters for now.
  metadata => metadata.path.at(-1) === 'duotone').flatMap(metadata => {
    const presetByOrigin = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(blockPresets, metadata.path, {});
    return ['default', 'theme'].filter(origin => presetByOrigin[origin]).flatMap(origin => presetByOrigin[origin].map(preset => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__unstablePresetDuotoneFilter, {
      preset: preset,
      key: preset.slug
    })));
  });
}

function flattenTree() {
  let input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let prefix = arguments.length > 1 ? arguments[1] : undefined;
  let token = arguments.length > 2 ? arguments[2] : undefined;
  let result = [];
  Object.keys(input).forEach(key => {
    const newKey = prefix + (0,lodash__WEBPACK_IMPORTED_MODULE_1__.kebabCase)(key.replace('/', '-'));
    const newLeaf = input[key];

    if (newLeaf instanceof Object) {
      const newPrefix = newKey + token;
      result = [...result, ...flattenTree(newLeaf, newPrefix, token)];
    } else {
      result.push(`${newKey}: ${newLeaf}`);
    }
  });
  return result;
}
/**
 * Transform given style tree into a set of style declarations.
 *
 * @param {Object} blockStyles Block styles.
 *
 * @return {Array} An array of style declarations.
 */


function getStylesDeclarations() {
  let blockStyles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const output = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.reduce)(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.__EXPERIMENTAL_STYLE_PROPERTY, (declarations, _ref5, key) => {
    let {
      value,
      properties,
      useEngine
    } = _ref5;
    const pathToValue = value;

    if ((0,lodash__WEBPACK_IMPORTED_MODULE_1__.first)(pathToValue) === 'elements' || useEngine) {
      return declarations;
    }

    const styleValue = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(blockStyles, pathToValue);

    if (!!properties && !(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isString)(styleValue)) {
      Object.entries(properties).forEach(entry => {
        const [name, prop] = entry;

        if (!(0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(styleValue, [prop], false)) {
          // Do not create a declaration
          // for sub-properties that don't have any value.
          return;
        }

        const cssProperty = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.kebabCase)(name);
        declarations.push(`${cssProperty}: ${compileStyleValue((0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(styleValue, [prop]))}`);
      });
    } else if ((0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(blockStyles, pathToValue, false)) {
      const cssProperty = key.startsWith('--') ? key : (0,lodash__WEBPACK_IMPORTED_MODULE_1__.kebabCase)(key);
      declarations.push(`${cssProperty}: ${compileStyleValue((0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(blockStyles, pathToValue))}`);
    }

    return declarations;
  }, []); // The goal is to move everything to server side generated engine styles
  // This is temporary as we absorb more and more styles into the engine.

  const extraRules = (0,_wordpress_style_engine__WEBPACK_IMPORTED_MODULE_6__.getCSSRules)(blockStyles, {
    selector: 'self'
  });
  extraRules.forEach(rule => {
    if (rule.selector !== 'self') {
      throw "This style can't be added as inline style";
    }

    const cssProperty = rule.key.startsWith('--') ? rule.key : (0,lodash__WEBPACK_IMPORTED_MODULE_1__.kebabCase)(rule.key);
    output.push(`${cssProperty}: ${compileStyleValue(rule.value)}`);
  });
  return output;
}

const getNodesWithStyles = (tree, blockSelectors) => {
  var _tree$styles, _tree$styles2;

  const nodes = [];

  if (!(tree !== null && tree !== void 0 && tree.styles)) {
    return nodes;
  }

  const pickStyleKeys = treeToPickFrom => (0,lodash__WEBPACK_IMPORTED_MODULE_1__.pickBy)(treeToPickFrom, (value, key) => ['border', 'color', 'spacing', 'typography', 'filter'].includes(key)); // Top-level.


  const styles = pickStyleKeys(tree.styles);

  if (!!styles) {
    nodes.push({
      styles,
      selector: _utils__WEBPACK_IMPORTED_MODULE_4__.ROOT_BLOCK_SELECTOR
    });
  }

  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.forEach)((_tree$styles = tree.styles) === null || _tree$styles === void 0 ? void 0 : _tree$styles.elements, (value, key) => {
    if (!!value && !!_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.__EXPERIMENTAL_ELEMENTS[key]) {
      nodes.push({
        styles: value,
        selector: _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.__EXPERIMENTAL_ELEMENTS[key]
      });
    }
  }); // Iterate over blocks: they can have styles & elements.

  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.forEach)((_tree$styles2 = tree.styles) === null || _tree$styles2 === void 0 ? void 0 : _tree$styles2.blocks, (node, blockName) => {
    var _blockSelectors$block;

    const blockStyles = pickStyleKeys(node);

    if (!!blockStyles && !!(blockSelectors !== null && blockSelectors !== void 0 && (_blockSelectors$block = blockSelectors[blockName]) !== null && _blockSelectors$block !== void 0 && _blockSelectors$block.selector)) {
      nodes.push({
        styles: blockStyles,
        selector: blockSelectors[blockName].selector,
        duotoneSelector: blockSelectors[blockName].duotoneSelector
      });
    }

    (0,lodash__WEBPACK_IMPORTED_MODULE_1__.forEach)(node === null || node === void 0 ? void 0 : node.elements, (value, elementName) => {
      if (!!value && !!(blockSelectors !== null && blockSelectors !== void 0 && blockSelectors[blockName]) && !!(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.__EXPERIMENTAL_ELEMENTS !== null && _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.__EXPERIMENTAL_ELEMENTS !== void 0 && _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.__EXPERIMENTAL_ELEMENTS[elementName])) {
        nodes.push({
          styles: value,
          selector: blockSelectors[blockName].selector.split(',').map(sel => sel + ' ' + _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.__EXPERIMENTAL_ELEMENTS[elementName]).join(',')
        });
      }
    });
  });
  return nodes;
};
const getNodesWithSettings = (tree, blockSelectors) => {
  var _tree$settings, _tree$settings2;

  const nodes = [];

  if (!(tree !== null && tree !== void 0 && tree.settings)) {
    return nodes;
  }

  const pickPresets = treeToPickFrom => {
    const presets = {};
    _utils__WEBPACK_IMPORTED_MODULE_4__.PRESET_METADATA.forEach(_ref6 => {
      let {
        path
      } = _ref6;
      const value = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(treeToPickFrom, path, false);

      if (value !== false) {
        (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(presets, path, value);
      }
    });
    return presets;
  }; // Top-level.


  const presets = pickPresets(tree.settings);
  const custom = (_tree$settings = tree.settings) === null || _tree$settings === void 0 ? void 0 : _tree$settings.custom;

  if (!(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(presets) || !!custom) {
    nodes.push({
      presets,
      custom,
      selector: _utils__WEBPACK_IMPORTED_MODULE_4__.ROOT_BLOCK_SELECTOR
    });
  } // Blocks.


  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.forEach)((_tree$settings2 = tree.settings) === null || _tree$settings2 === void 0 ? void 0 : _tree$settings2.blocks, (node, blockName) => {
    const blockPresets = pickPresets(node);
    const blockCustom = node.custom;

    if (!(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(blockPresets) || !!blockCustom) {
      nodes.push({
        presets: blockPresets,
        custom: blockCustom,
        selector: blockSelectors[blockName].selector
      });
    }
  });
  return nodes;
};
const toCustomProperties = (tree, blockSelectors) => {
  const settings = getNodesWithSettings(tree, blockSelectors);
  let ruleset = '';
  settings.forEach(_ref7 => {
    let {
      presets,
      custom,
      selector
    } = _ref7;
    const declarations = getPresetsDeclarations(presets);
    const customProps = flattenTree(custom, '--wp--custom--', '--');

    if (customProps.length > 0) {
      declarations.push(...customProps);
    }

    if (declarations.length > 0) {
      ruleset = ruleset + `${selector}{${declarations.join(';')};}`;
    }
  });
  return ruleset;
};
const toStyles = (tree, blockSelectors) => {
  const nodesWithStyles = getNodesWithStyles(tree, blockSelectors);
  const nodesWithSettings = getNodesWithSettings(tree, blockSelectors);
  /*
   * Reset default browser margin on the root body element.
   * This is set on the root selector **before** generating the ruleset
   * from the `theme.json`. This is to ensure that if the `theme.json` declares
   * `margin` in its `spacing` declaration for the `body` element then these
   * user-generated values take precedence in the CSS cascade.
   * @link https://github.com/WordPress/gutenberg/issues/36147.
   */

  let ruleset = 'body {margin: 0;}';
  nodesWithStyles.forEach(_ref8 => {
    let {
      selector,
      duotoneSelector,
      styles
    } = _ref8;
    const duotoneStyles = {};

    if (styles !== null && styles !== void 0 && styles.filter) {
      duotoneStyles.filter = styles.filter;
      delete styles.filter;
    } // Process duotone styles (they use color.__experimentalDuotone selector).


    if (duotoneSelector) {
      const duotoneDeclarations = getStylesDeclarations(duotoneStyles);

      if (duotoneDeclarations.length === 0) {
        return;
      }

      ruleset = ruleset + `${duotoneSelector}{${duotoneDeclarations.join(';')};}`;
    } // Process the remaning block styles (they use either normal block class or __experimentalSelector).


    const declarations = getStylesDeclarations(styles);

    if (declarations.length === 0) {
      return;
    }

    ruleset = ruleset + `${selector}{${declarations.join(';')};}`;
  });
  nodesWithSettings.forEach(_ref9 => {
    let {
      selector,
      presets
    } = _ref9;

    if (_utils__WEBPACK_IMPORTED_MODULE_4__.ROOT_BLOCK_SELECTOR === selector) {
      // Do not add extra specificity for top-level classes.
      selector = '';
    }

    const classes = getPresetsClasses(selector, presets);

    if (!(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(classes)) {
      ruleset = ruleset + classes;
    }
  });
  return ruleset;
};
function toSvgFilters(tree, blockSelectors) {
  const nodesWithSettings = getNodesWithSettings(tree, blockSelectors);
  return nodesWithSettings.flatMap(_ref10 => {
    let {
      presets
    } = _ref10;
    return getPresetsSvgFilters(presets);
  });
}

const getBlockSelectors = blockTypes => {
  const result = {};
  blockTypes.forEach(blockType => {
    var _blockType$supports$_, _blockType$supports, _blockType$supports$c, _blockType$supports2, _blockType$supports2$;

    const name = blockType.name;
    const selector = (_blockType$supports$_ = blockType === null || blockType === void 0 ? void 0 : (_blockType$supports = blockType.supports) === null || _blockType$supports === void 0 ? void 0 : _blockType$supports.__experimentalSelector) !== null && _blockType$supports$_ !== void 0 ? _blockType$supports$_ : '.wp-block-' + name.replace('core/', '').replace('/', '-');
    const duotoneSelector = (_blockType$supports$c = blockType === null || blockType === void 0 ? void 0 : (_blockType$supports2 = blockType.supports) === null || _blockType$supports2 === void 0 ? void 0 : (_blockType$supports2$ = _blockType$supports2.color) === null || _blockType$supports2$ === void 0 ? void 0 : _blockType$supports2$.__experimentalDuotone) !== null && _blockType$supports$c !== void 0 ? _blockType$supports$c : null;
    result[name] = {
      name,
      selector,
      duotoneSelector
    };
  });
  return result;
};

function useGlobalStylesOutput() {
  const [stylesheets, setStylesheets] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [settings, setSettings] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [svgFilters, setSvgFilters] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const {
    merged: mergedConfig
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_5__.GlobalStylesContext);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!(mergedConfig !== null && mergedConfig !== void 0 && mergedConfig.styles) || !(mergedConfig !== null && mergedConfig !== void 0 && mergedConfig.settings)) {
      return;
    }

    const blockSelectors = getBlockSelectors((0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.getBlockTypes)());
    const customProperties = toCustomProperties(mergedConfig, blockSelectors);
    const globalStyles = toStyles(mergedConfig, blockSelectors);
    const filters = toSvgFilters(mergedConfig, blockSelectors);
    setStylesheets([{
      css: customProperties,
      isGlobalStyles: true
    }, {
      css: globalStyles,
      isGlobalStyles: true
    }]);
    setSettings(mergedConfig.settings);
    setSvgFilters(filters);
  }, [mergedConfig]);
  return [stylesheets, settings, svgFilters];
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/utils.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/global-styles/utils.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PRESET_METADATA": function() { return /* binding */ PRESET_METADATA; },
/* harmony export */   "ROOT_BLOCK_NAME": function() { return /* binding */ ROOT_BLOCK_NAME; },
/* harmony export */   "ROOT_BLOCK_SELECTOR": function() { return /* binding */ ROOT_BLOCK_SELECTOR; },
/* harmony export */   "ROOT_BLOCK_SUPPORTS": function() { return /* binding */ ROOT_BLOCK_SUPPORTS; },
/* harmony export */   "getPresetVariableFromValue": function() { return /* binding */ getPresetVariableFromValue; },
/* harmony export */   "getValueFromVariable": function() { return /* binding */ getValueFromVariable; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

/* Supporting data. */

const ROOT_BLOCK_NAME = 'root';
const ROOT_BLOCK_SELECTOR = 'body';
const ROOT_BLOCK_SUPPORTS = ['background', 'backgroundColor', 'color', 'linkColor', 'fontFamily', 'fontSize', 'fontStyle', 'fontWeight', 'lineHeight', 'textDecoration', 'textTransform', 'padding'];
const PRESET_METADATA = [{
  path: ['color', 'palette'],
  valueKey: 'color',
  cssVarInfix: 'color',
  classes: [{
    classSuffix: 'color',
    propertyName: 'color'
  }, {
    classSuffix: 'background-color',
    propertyName: 'background-color'
  }, {
    classSuffix: 'border-color',
    propertyName: 'border-color'
  }]
}, {
  path: ['color', 'gradients'],
  valueKey: 'gradient',
  cssVarInfix: 'gradient',
  classes: [{
    classSuffix: 'gradient-background',
    propertyName: 'background'
  }]
}, {
  path: ['color', 'duotone'],
  cssVarInfix: 'duotone',
  valueFunc: _ref => {
    let {
      slug
    } = _ref;
    return `url( '#wp-duotone-${slug}' )`;
  },
  classes: []
}, {
  path: ['typography', 'fontSizes'],
  valueKey: 'size',
  cssVarInfix: 'font-size',
  classes: [{
    classSuffix: 'font-size',
    propertyName: 'font-size'
  }]
}, {
  path: ['typography', 'fontFamilies'],
  valueKey: 'fontFamily',
  cssVarInfix: 'font-family',
  classes: [{
    classSuffix: 'font-family',
    propertyName: 'font-family'
  }]
}];
const STYLE_PATH_TO_CSS_VAR_INFIX = {
  'color.background': 'color',
  'color.text': 'color',
  'elements.link.color.text': 'color',
  'color.gradient': 'gradient',
  'typography.fontSize': 'font-size',
  'typography.fontFamily': 'font-family'
};

function findInPresetsBy(features, blockName, presetPath, presetProperty, presetValueValue) {
  // Block presets take priority above root level presets.
  const orderedPresetsByOrigin = [(0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(features, ['blocks', blockName, ...presetPath]), (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(features, presetPath)];

  for (const presetByOrigin of orderedPresetsByOrigin) {
    if (presetByOrigin) {
      // Preset origins ordered by priority.
      const origins = ['custom', 'theme', 'default'];

      for (const origin of origins) {
        const presets = presetByOrigin[origin];

        if (presets) {
          const presetObject = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(presets, preset => preset[presetProperty] === presetValueValue);

          if (presetObject) {
            if (presetProperty === 'slug') {
              return presetObject;
            } // If there is a highest priority preset with the same slug but different value the preset we found was overwritten and should be ignored.


            const highestPresetObjectWithSameSlug = findInPresetsBy(features, blockName, presetPath, 'slug', presetObject.slug);

            if (highestPresetObjectWithSameSlug[presetProperty] === presetObject[presetProperty]) {
              return presetObject;
            }

            return undefined;
          }
        }
      }
    }
  }
}

function getPresetVariableFromValue(features, blockName, variableStylePath, presetPropertyValue) {
  if (!presetPropertyValue) {
    return presetPropertyValue;
  }

  const cssVarInfix = STYLE_PATH_TO_CSS_VAR_INFIX[variableStylePath];
  const metadata = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(PRESET_METADATA, ['cssVarInfix', cssVarInfix]);

  if (!metadata) {
    // The property doesn't have preset data
    // so the value should be returned as it is.
    return presetPropertyValue;
  }

  const {
    valueKey,
    path
  } = metadata;
  const presetObject = findInPresetsBy(features, blockName, path, valueKey, presetPropertyValue);

  if (!presetObject) {
    // Value wasn't found in the presets,
    // so it must be a custom value.
    return presetPropertyValue;
  }

  return `var:preset|${cssVarInfix}|${presetObject.slug}`;
}

function getValueFromPresetVariable(features, blockName, variable, _ref2) {
  let [presetType, slug] = _ref2;
  const metadata = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(PRESET_METADATA, ['cssVarInfix', presetType]);

  if (!metadata) {
    return variable;
  }

  const presetObject = findInPresetsBy(features, blockName, metadata.path, 'slug', slug);

  if (presetObject) {
    const {
      valueKey
    } = metadata;
    const result = presetObject[valueKey];
    return getValueFromVariable(features, blockName, result);
  }

  return variable;
}

function getValueFromCustomVariable(features, blockName, variable, path) {
  var _get;

  const result = (_get = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(features, ['blocks', blockName, 'custom', ...path])) !== null && _get !== void 0 ? _get : (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(features, ['custom', ...path]);

  if (!result) {
    return variable;
  } // A variable may reference another variable so we need recursion until we find the value.


  return getValueFromVariable(features, blockName, result);
}

function getValueFromVariable(features, blockName, variable) {
  if (!variable || !(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isString)(variable)) {
    return variable;
  }

  const USER_VALUE_PREFIX = 'var:';
  const THEME_VALUE_PREFIX = 'var(--wp--';
  const THEME_VALUE_SUFFIX = ')';
  let parsedVar;

  if (variable.startsWith(USER_VALUE_PREFIX)) {
    parsedVar = variable.slice(USER_VALUE_PREFIX.length).split('|');
  } else if (variable.startsWith(THEME_VALUE_PREFIX) && variable.endsWith(THEME_VALUE_SUFFIX)) {
    parsedVar = variable.slice(THEME_VALUE_PREFIX.length, -THEME_VALUE_SUFFIX.length).split('--');
  } else {
    // We don't know how to parse the value: either is raw of uses complex CSS such as `calc(1px * var(--wp--variable) )`
    return variable;
  }

  const [type, ...path] = parsedVar;

  if (type === 'preset') {
    return getValueFromPresetVariable(features, blockName, variable, path);
  }

  if (type === 'custom') {
    return getValueFromCustomVariable(features, blockName, variable, path);
  }

  return variable;
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/header/document-actions/index.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/header/document-actions/index.js ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DocumentActions; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/chevron-down.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__);


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */









function getBlockDisplayText(block) {
  if (block) {
    const blockType = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.getBlockType)(block.name);
    return blockType ? (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.__experimentalGetBlockLabel)(blockType, block.attributes) : null;
  }

  return null;
}

function useSecondaryText() {
  const {
    getBlock
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.store);
  const activeEntityBlockId = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.store).__experimentalGetActiveBlockIdByBlockNames(['core/template-part']), []);

  if (activeEntityBlockId) {
    return {
      label: getBlockDisplayText(getBlock(activeEntityBlockId)),
      isActive: true
    };
  }

  return {};
}
/**
 * @param {Object}   props                Props for the DocumentActions component.
 * @param {string}   props.entityTitle    The title to display.
 * @param {string}   props.entityLabel    A label to use for entity-related options.
 *                                        E.g. "template" would be used for "edit
 *                                        template" and "show template details".
 * @param {boolean}  props.isLoaded       Whether the data is available.
 * @param {Function} props.children       React component to use for the
 *                                        information dropdown area. Should be a
 *                                        function which accepts dropdown props.
 * @param {boolean}  props.showIconLabels Whether buttons display icons or text labels.
 */


function DocumentActions(_ref) {
  let {
    entityTitle,
    entityLabel,
    isLoaded,
    children: dropdownContent,
    showIconLabels
  } = _ref;
  const {
    label
  } = useSecondaryText(); // The title ref is passed to the popover as the anchorRef so that the
  // dropdown is centered over the whole title area rather than just one
  // part of it.

  const titleRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(); // Return a simple loading indicator until we have information to show.

  if (!isLoaded) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "edit-site-document-actions"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Loading…'));
  } // Return feedback that the template does not seem to exist.


  if (!entityTitle) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "edit-site-document-actions"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Template not found'));
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('edit-site-document-actions', {
      'has-secondary-label': !!label
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ref: titleRef,
    className: "edit-site-document-actions__title-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.__experimentalText, {
    size: "body",
    className: "edit-site-document-actions__title",
    as: "h1"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.VisuallyHidden, {
    as: "span"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)(
  /* translators: %s: the entity being edited, like "template"*/
  (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Editing %s: '), entityLabel)), entityTitle), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.__experimentalText, {
    size: "body",
    className: "edit-site-document-actions__secondary-item"
  }, label !== null && label !== void 0 ? label : ''), dropdownContent && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Dropdown, {
    popoverProps: {
      anchorRef: titleRef.current
    },
    position: "bottom center",
    renderToggle: _ref2 => {
      let {
        isOpen,
        onToggle
      } = _ref2;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
        className: "edit-site-document-actions__get-info",
        icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__["default"],
        "aria-expanded": isOpen,
        "aria-haspopup": "true",
        onClick: onToggle,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)(
        /* translators: %s: the entity to see details about, like "template"*/
        (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show %s details'), entityLabel)
      }, showIconLabels && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Details'));
    },
    contentClassName: "edit-site-document-actions__info-dropdown",
    renderContent: dropdownContent
  })));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/header/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/header/index.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/interface */ "./node_modules/@wordpress/interface/build-module/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/plus.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/list-view.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/keyboard-shortcuts */ "@wordpress/keyboard-shortcuts");
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _more_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./more-menu */ "./node_modules/@wordpress/edit-site/build-module/components/header/more-menu/index.js");
/* harmony import */ var _save_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../save-button */ "./node_modules/@wordpress/edit-site/build-module/components/save-button/index.js");
/* harmony import */ var _undo_redo_undo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./undo-redo/undo */ "./node_modules/@wordpress/edit-site/build-module/components/header/undo-redo/undo.js");
/* harmony import */ var _undo_redo_redo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./undo-redo/redo */ "./node_modules/@wordpress/edit-site/build-module/components/header/undo-redo/redo.js");
/* harmony import */ var _document_actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./document-actions */ "./node_modules/@wordpress/edit-site/build-module/components/header/document-actions/index.js");
/* harmony import */ var _template_details__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../template-details */ "./node_modules/@wordpress/edit-site/build-module/components/template-details/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/edit-site/build-module/store/index.js");


/**
 * WordPress dependencies
 */











/**
 * Internal dependencies
 */









const preventDefault = event => {
  event.preventDefault();
};

function Header(_ref) {
  let {
    openEntitiesSavedStates,
    isEntitiesSavedStatesOpen,
    showIconLabels
  } = _ref;
  const inserterButton = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const {
    deviceType,
    entityTitle,
    template,
    templateType,
    isInserterOpen,
    isListViewOpen,
    listViewShortcut,
    isLoaded,
    isVisualMode
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    const {
      __experimentalGetPreviewDeviceType,
      getEditedPostType,
      getEditedPostId,
      isInserterOpened,
      isListViewOpened,
      getEditorMode
    } = select(_store__WEBPACK_IMPORTED_MODULE_16__.store);
    const {
      getEditedEntityRecord
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_9__.store);
    const {
      __experimentalGetTemplateInfo: getTemplateInfo
    } = select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_8__.store);
    const {
      getShortcutRepresentation
    } = select(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_7__.store);
    const postType = getEditedPostType();
    const postId = getEditedPostId();
    const record = getEditedEntityRecord('postType', postType, postId);

    const _isLoaded = !!postId;

    return {
      deviceType: __experimentalGetPreviewDeviceType(),
      entityTitle: getTemplateInfo(record).title,
      isLoaded: _isLoaded,
      template: record,
      templateType: postType,
      isInserterOpen: isInserterOpened(),
      isListViewOpen: isListViewOpened(),
      listViewShortcut: getShortcutRepresentation('core/edit-site/toggle-list-view'),
      isVisualMode: getEditorMode() === 'visual'
    };
  }, []);
  const {
    __experimentalSetPreviewDeviceType: setPreviewDeviceType,
    setIsInserterOpened,
    setIsListViewOpened
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_16__.store);
  const isLargeViewport = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.useViewportMatch)('medium');
  const openInserter = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (isInserterOpen) {
      // Focusing the inserter button closes the inserter popover.
      inserterButton.current.focus();
    } else {
      setIsInserterOpened(true);
    }
  }, [isInserterOpen, setIsInserterOpened]);
  const toggleListView = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => setIsListViewOpened(!isListViewOpen), [setIsListViewOpened, isListViewOpen]);
  const isFocusMode = templateType === 'wp_template_part';
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edit-site-header"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edit-site-header_start"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edit-site-header__toolbar"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
    ref: inserterButton,
    variant: "primary",
    isPressed: isInserterOpen,
    className: "edit-site-header-toolbar__inserter-toggle",
    disabled: !isVisualMode,
    onMouseDown: preventDefault,
    onClick: openInserter,
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_17__["default"],
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__._x)('Toggle block inserter', 'Generic label for block inserter button')
  }, showIconLabels && (!isInserterOpen ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Add') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Close'))), isLargeViewport && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToolbarItem, {
    as: _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.ToolSelector,
    disabled: !isVisualMode
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_undo_redo_undo__WEBPACK_IMPORTED_MODULE_12__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_undo_redo_redo__WEBPACK_IMPORTED_MODULE_13__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
    className: "edit-site-header-toolbar__list-view-toggle",
    disabled: !isVisualMode,
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_18__["default"],
    isPressed: isListViewOpen
    /* translators: button label text should, if possible, be under 16 characters. */
    ,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('List View'),
    onClick: toggleListView,
    shortcut: listViewShortcut
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edit-site-header_center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_document_actions__WEBPACK_IMPORTED_MODULE_14__["default"], {
    entityTitle: entityTitle,
    entityLabel: templateType === 'wp_template_part' ? 'template part' : 'template',
    isLoaded: isLoaded,
    showIconLabels: showIconLabels
  }, _ref2 => {
    let {
      onClose
    } = _ref2;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_template_details__WEBPACK_IMPORTED_MODULE_15__["default"], {
      template: template,
      onClose: onClose
    });
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edit-site-header_end"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edit-site-header__actions"
  }, !isFocusMode && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalPreviewOptions, {
    deviceType: deviceType,
    setDeviceType: setPreviewDeviceType
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_save_button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    openEntitiesSavedStates: openEntitiesSavedStates,
    isEntitiesSavedStatesOpen: isEntitiesSavedStatesOpen
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_interface__WEBPACK_IMPORTED_MODULE_4__.PinnedItems.Slot, {
    scope: "core/edit-site"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_more_menu__WEBPACK_IMPORTED_MODULE_10__["default"], null))));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/header/mode-switcher/index.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/header/mode-switcher/index.js ***!
  \*************************************************************************************************/
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
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/keyboard-shortcuts */ "@wordpress/keyboard-shortcuts");
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store */ "./node_modules/@wordpress/edit-site/build-module/store/index.js");


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */

/**
 * Internal dependencies
 */


/**
 * Set of available mode options.
 *
 * @type {Array}
 */

const MODES = [{
  value: 'visual',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Visual editor')
}, {
  value: 'text',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Code editor')
}];

function ModeSwitcher() {
  const {
    shortcut,
    mode
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => ({
    shortcut: select(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_4__.store).getShortcutRepresentation('core/edit-site/toggle-mode'),
    isRichEditingEnabled: select(_store__WEBPACK_IMPORTED_MODULE_5__.store).getSettings().richEditingEnabled,
    isCodeEditingEnabled: select(_store__WEBPACK_IMPORTED_MODULE_5__.store).getSettings().codeEditingEnabled,
    mode: select(_store__WEBPACK_IMPORTED_MODULE_5__.store).getEditorMode()
  }), []);
  const {
    switchEditorMode
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_5__.store);
  const choices = MODES.map(choice => {
    if (choice.value !== mode) {
      return { ...choice,
        shortcut
      };
    }

    return choice;
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuGroup, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Editor')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuItemsChoice, {
    choices: choices,
    value: mode,
    onSelect: switchEditorMode
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ModeSwitcher);


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/header/more-menu/copy-content-menu-item.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/header/more-menu/copy-content-menu-item.js ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CopyContentMenuItem; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../store */ "./node_modules/@wordpress/edit-site/build-module/store/index.js");


/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */


function CopyContentMenuItem() {
  const {
    createNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_5__.store);
  const getText = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    return () => {
      const {
        getEditedPostId,
        getEditedPostType
      } = select(_store__WEBPACK_IMPORTED_MODULE_8__.store);
      const {
        getEditedEntityRecord
      } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__.store);
      const record = getEditedEntityRecord('postType', getEditedPostType(), getEditedPostId());

      if (record) {
        if (typeof record.content === 'function') {
          return record.content(record);
        } else if (record.blocks) {
          return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_7__.__unstableSerializeAndClean)(record.blocks);
        } else if (record.content) {
          return record.content;
        }
      }

      return '';
    };
  }, []);

  function onSuccess() {
    createNotice('info', (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('All content copied.'), {
      isDismissible: true,
      type: 'snackbar'
    });
  }

  const ref = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.useCopyToClipboard)(getText, onSuccess);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
    ref: ref
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Copy all content'));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/header/more-menu/index.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/header/more-menu/index.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MoreMenu; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/keyboard-shortcuts */ "@wordpress/keyboard-shortcuts");
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/external.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/interface */ "./node_modules/@wordpress/interface/build-module/index.js");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _keyboard_shortcut_help_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../keyboard-shortcut-help-modal */ "./node_modules/@wordpress/edit-site/build-module/components/keyboard-shortcut-help-modal/index.js");
/* harmony import */ var _preferences_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../preferences-modal */ "./node_modules/@wordpress/edit-site/build-module/components/preferences-modal/index.js");
/* harmony import */ var _tools_more_menu_group__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tools-more-menu-group */ "./node_modules/@wordpress/edit-site/build-module/components/header/tools-more-menu-group/index.js");
/* harmony import */ var _site_export__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./site-export */ "./node_modules/@wordpress/edit-site/build-module/components/header/more-menu/site-export.js");
/* harmony import */ var _welcome_guide_menu_item__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./welcome-guide-menu-item */ "./node_modules/@wordpress/edit-site/build-module/components/header/more-menu/welcome-guide-menu-item.js");
/* harmony import */ var _copy_content_menu_item__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./copy-content-menu-item */ "./node_modules/@wordpress/edit-site/build-module/components/header/more-menu/copy-content-menu-item.js");
/* harmony import */ var _mode_switcher__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../mode-switcher */ "./node_modules/@wordpress/edit-site/build-module/components/header/mode-switcher/index.js");


/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */








function MoreMenu() {
  const [isModalActive, toggleModal] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useReducer)(isActive => !isActive, false);
  const [isPreferencesModalActive, togglePreferencesModal] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useReducer)(isActive => !isActive, false);
  (0,_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_2__.useShortcut)('core/edit-site/keyboard-shortcuts', toggleModal);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_interface__WEBPACK_IMPORTED_MODULE_5__.MoreMenuDropdown, null, _ref => {
    let {
      onClose
    } = _ref;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.MenuGroup, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('View', 'noun')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_6__.PreferenceToggleMenuItem, {
      scope: "core/edit-site",
      name: "fixedToolbar",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Top toolbar'),
      info: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Access all block and document tools in a single place'),
      messageActivated: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Top toolbar activated'),
      messageDeactivated: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Top toolbar deactivated')
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_6__.PreferenceToggleMenuItem, {
      scope: "core/edit-site",
      name: "focusMode",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Spotlight mode'),
      info: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Focus on one block at a time'),
      messageActivated: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Spotlight mode activated'),
      messageDeactivated: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Spotlight mode deactivated')
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_mode_switcher__WEBPACK_IMPORTED_MODULE_13__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_interface__WEBPACK_IMPORTED_MODULE_5__.ActionItem.Slot, {
      name: "core/edit-site/plugin-more-menu",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Plugins'),
      as: _wordpress_components__WEBPACK_IMPORTED_MODULE_4__.MenuGroup,
      fillProps: {
        onClick: onClose
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.MenuGroup, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tools')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_site_export__WEBPACK_IMPORTED_MODULE_10__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
      onClick: toggleModal,
      shortcut: _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_3__.displayShortcut.access('h')
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Keyboard shortcuts')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_welcome_guide_menu_item__WEBPACK_IMPORTED_MODULE_11__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_copy_content_menu_item__WEBPACK_IMPORTED_MODULE_12__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_14__["default"],
      role: "menuitem",
      href: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('https://wordpress.org/support/article/site-editor/'),
      target: "_blank",
      rel: "noopener noreferrer"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Help'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.VisuallyHidden, {
      as: "span"
    },
    /* translators: accessibility text */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('(opens in a new tab)'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_tools_more_menu_group__WEBPACK_IMPORTED_MODULE_9__["default"].Slot, {
      fillProps: {
        onClose
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.MenuGroup, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
      onClick: togglePreferencesModal
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Preferences'))));
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_keyboard_shortcut_help_modal__WEBPACK_IMPORTED_MODULE_7__["default"], {
    isModalActive: isModalActive,
    toggleModal: toggleModal
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_preferences_modal__WEBPACK_IMPORTED_MODULE_8__["default"], {
    isModalActive: isPreferencesModalActive,
    toggleModal: togglePreferencesModal
  }));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/header/more-menu/site-export.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/header/more-menu/site-export.js ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SiteExport; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var downloadjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! downloadjs */ "./node_modules/downloadjs/download.js");
/* harmony import */ var downloadjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(downloadjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/download.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_6__);


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */







function SiteExport() {
  const {
    createErrorNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_6__.store);

  async function handleExport() {
    try {
      const response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()({
        path: '/wp-block-editor/v1/export',
        parse: false
      });
      const blob = await response.blob();
      const contentDisposition = response.headers.get('content-disposition');
      const contentDispositionMatches = contentDisposition.match(/=(.+)\.zip/);
      const fileName = contentDispositionMatches[1] ? contentDispositionMatches[1] : 'edit-site-export';
      downloadjs__WEBPACK_IMPORTED_MODULE_1___default()(blob, fileName + '.zip', 'application/zip');
    } catch (errorResponse) {
      let error = {};

      try {
        error = await errorResponse.json();
      } catch (e) {}

      const errorMessage = error.message && error.code !== 'unknown_error' ? error.message : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('An error occurred while creating the site export.');
      createErrorNotice(errorMessage, {
        type: 'snackbar'
      });
    }
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
    role: "menuitem",
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__["default"],
    onClick: handleExport,
    info: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Download your theme with updated templates and styles.')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('Export', 'site exporter menu item'));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/header/more-menu/welcome-guide-menu-item.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/header/more-menu/welcome-guide-menu-item.js ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ WelcomeGuideMenuItem; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_4__);


/**
 * WordPress dependencies
 */




function WelcomeGuideMenuItem() {
  const {
    toggle
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_4__.store);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
    onClick: () => toggle('core/edit-site', 'welcomeGuide')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Welcome Guide'));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/header/plugin-more-menu-item/index.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/header/plugin-more-menu-item/index.js ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/interface */ "./node_modules/@wordpress/interface/build-module/index.js");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_3__);
/**
 * WordPress dependencies
 */




/**
 * Renders a menu item in `Plugins` group in `More Menu` drop down, and can be used to as a button or link depending on the props provided.
 * The text within the component appears as the menu item label.
 *
 * @param {Object}                props                                 Component properties.
 * @param {string}                [props.href]                          When `href` is provided then the menu item is represented as an anchor rather than button. It corresponds to the `href` attribute of the anchor.
 * @param {WPBlockTypeIconRender} [props.icon=inherits from the plugin] The [Dashicon](https://developer.wordpress.org/resource/dashicons/) icon slug string, or an SVG WP element, to be rendered to the left of the menu item label.
 * @param {Function}              [props.onClick=noop]                  The callback function to be executed when the user clicks the menu item.
 * @param {...*}                  [props.other]                         Any additional props are passed through to the underlying [Button](/packages/components/src/button/README.md) component.
 *
 * @example
 * ```js
 * // Using ES5 syntax
 * var __ = wp.i18n.__;
 * var PluginMoreMenuItem = wp.editSite.PluginMoreMenuItem;
 * var moreIcon = wp.element.createElement( 'svg' ); //... svg element.
 *
 * function onButtonClick() {
 * 	alert( 'Button clicked.' );
 * }
 *
 * function MyButtonMoreMenuItem() {
 * 	return wp.element.createElement(
 * 		PluginMoreMenuItem,
 * 		{
 * 			icon: moreIcon,
 * 			onClick: onButtonClick,
 * 		},
 * 		__( 'My button title' )
 * 	);
 * }
 * ```
 *
 * @example
 * ```jsx
 * // Using ESNext syntax
 * import { __ } from '@wordpress/i18n';
 * import { PluginMoreMenuItem } from '@wordpress/edit-site';
 * import { more } from '@wordpress/icons';
 *
 * function onButtonClick() {
 * 	alert( 'Button clicked.' );
 * }
 *
 * const MyButtonMoreMenuItem = () => (
 * 	<PluginMoreMenuItem
 * 		icon={ more }
 * 		onClick={ onButtonClick }
 * 	>
 * 		{ __( 'My button title' ) }
 * 	</PluginMoreMenuItem>
 * );
 * ```
 *
 * @return {WPComponent} The component to be rendered.
 */

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.compose)((0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_3__.withPluginContext)((context, ownProps) => {
  var _ownProps$as;

  return {
    as: (_ownProps$as = ownProps.as) !== null && _ownProps$as !== void 0 ? _ownProps$as : _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuItem,
    icon: ownProps.icon || context.icon,
    name: 'core/edit-site/plugin-more-menu'
  };
}))(_wordpress_interface__WEBPACK_IMPORTED_MODULE_0__.ActionItem));


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/header/plugin-sidebar-more-menu-item/index.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/header/plugin-sidebar-more-menu-item/index.js ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PluginSidebarMoreMenuItem; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/interface */ "./node_modules/@wordpress/interface/build-module/index.js");



/**
 * WordPress dependencies
 */

/**
 * Renders a menu item in `Plugins` group in `More Menu` drop down,
 * and can be used to activate the corresponding `PluginSidebar` component.
 * The text within the component appears as the menu item label.
 *
 * @param {Object}                props                                 Component props.
 * @param {string}                props.target                          A string identifying the target sidebar you wish to be activated by this menu item. Must be the same as the `name` prop you have given to that sidebar.
 * @param {WPBlockTypeIconRender} [props.icon=inherits from the plugin] The [Dashicon](https://developer.wordpress.org/resource/dashicons/) icon slug string, or an SVG WP element, to be rendered to the left of the menu item label.
 *
 * @example
 * ```js
 * // Using ES5 syntax
 * var __ = wp.i18n.__;
 * var PluginSidebarMoreMenuItem = wp.editSite.PluginSidebarMoreMenuItem;
 * var moreIcon = wp.element.createElement( 'svg' ); //... svg element.
 *
 * function MySidebarMoreMenuItem() {
 * 	return wp.element.createElement(
 * 		PluginSidebarMoreMenuItem,
 * 		{
 * 			target: 'my-sidebar',
 * 			icon: moreIcon,
 * 		},
 * 		__( 'My sidebar title' )
 * 	)
 * }
 * ```
 *
 * @example
 * ```jsx
 * // Using ESNext syntax
 * import { __ } from '@wordpress/i18n';
 * import { PluginSidebarMoreMenuItem } from '@wordpress/edit-site';
 * import { more } from '@wordpress/icons';
 *
 * const MySidebarMoreMenuItem = () => (
 * 	<PluginSidebarMoreMenuItem
 * 		target="my-sidebar"
 * 		icon={ more }
 * 	>
 * 		{ __( 'My sidebar title' ) }
 * 	</PluginSidebarMoreMenuItem>
 * );
 * ```
 *
 * @return {WPComponent} The component to be rendered.
 */

function PluginSidebarMoreMenuItem(props) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_interface__WEBPACK_IMPORTED_MODULE_2__.ComplementaryAreaMoreMenuItem // Menu item is marked with unstable prop for backward compatibility.
  // @see https://github.com/WordPress/gutenberg/issues/14457
  , (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    __unstableExplicitMenuItem: true,
    scope: "core/edit-site"
  }, props));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/header/tools-more-menu-group/index.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/header/tools-more-menu-group/index.js ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


const {
  Fill: ToolsMoreMenuGroup,
  Slot
} = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.createSlotFill)('EditSiteToolsMoreMenuGroup');

ToolsMoreMenuGroup.Slot = _ref => {
  let {
    fillProps
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Slot, {
    fillProps: fillProps
  }, fills => !(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(fills) && fills);
};

/* harmony default export */ __webpack_exports__["default"] = (ToolsMoreMenuGroup);


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/header/undo-redo/redo.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/header/undo-redo/redo.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ RedoButton; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/redo.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/undo.js");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__);


/**
 * WordPress dependencies
 */






function RedoButton() {
  const hasRedo = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.store).hasRedo(), []);
  const {
    redo
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.store);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: !(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.isRTL)() ? _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"] : _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__["default"],
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Redo'),
    shortcut: _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4__.displayShortcut.primaryShift('z') // If there are no undo levels we don't want to actually disable this
    // button, because it will remove focus for keyboard users.
    // See: https://github.com/WordPress/gutenberg/issues/3486
    ,
    "aria-disabled": !hasRedo,
    onClick: hasRedo ? redo : undefined
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/header/undo-redo/undo.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/header/undo-redo/undo.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ UndoButton; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/undo.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/redo.js");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__);


/**
 * WordPress dependencies
 */






function UndoButton() {
  const hasUndo = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.store).hasUndo(), []);
  const {
    undo
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.store);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: !(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.isRTL)() ? _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"] : _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__["default"],
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Undo'),
    shortcut: _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4__.displayShortcut.primary('z') // If there are no undo levels we don't want to actually disable this
    // button, because it will remove focus for keyboard users.
    // See: https://github.com/WordPress/gutenberg/issues/3486
    ,
    "aria-disabled": !hasUndo,
    onClick: hasUndo ? undo : undefined
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/keyboard-shortcut-help-modal/config.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/keyboard-shortcut-help-modal/config.js ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "textFormattingShortcuts": function() { return /* binding */ textFormattingShortcuts; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

const textFormattingShortcuts = [{
  keyCombination: {
    modifier: 'primary',
    character: 'b'
  },
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Make the selected text bold.')
}, {
  keyCombination: {
    modifier: 'primary',
    character: 'i'
  },
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Make the selected text italic.')
}, {
  keyCombination: {
    modifier: 'primary',
    character: 'k'
  },
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Convert the selected text into a link.')
}, {
  keyCombination: {
    modifier: 'primaryShift',
    character: 'k'
  },
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove a link.')
}, {
  keyCombination: {
    modifier: 'primary',
    character: 'u'
  },
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Underline the selected text.')
}];


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/keyboard-shortcut-help-modal/dynamic-shortcut.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/keyboard-shortcut-help-modal/dynamic-shortcut.js ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DynamicShortcut; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/keyboard-shortcuts */ "@wordpress/keyboard-shortcuts");
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shortcut__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shortcut */ "./node_modules/@wordpress/edit-site/build-module/components/keyboard-shortcut-help-modal/shortcut.js");


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


function DynamicShortcut(_ref) {
  let {
    name
  } = _ref;
  const {
    keyCombination,
    description,
    aliases
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    const {
      getShortcutKeyCombination,
      getShortcutDescription,
      getShortcutAliases
    } = select(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_2__.store);
    return {
      keyCombination: getShortcutKeyCombination(name),
      aliases: getShortcutAliases(name),
      description: getShortcutDescription(name)
    };
  }, [name]);

  if (!keyCombination) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_shortcut__WEBPACK_IMPORTED_MODULE_3__["default"], {
    keyCombination: keyCombination,
    description: description,
    aliases: aliases
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/keyboard-shortcut-help-modal/index.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/keyboard-shortcut-help-modal/index.js ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ KeyboardShortcutHelpModal; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/keyboard-shortcuts */ "@wordpress/keyboard-shortcuts");
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./config */ "./node_modules/@wordpress/edit-site/build-module/components/keyboard-shortcut-help-modal/config.js");
/* harmony import */ var _shortcut__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shortcut */ "./node_modules/@wordpress/edit-site/build-module/components/keyboard-shortcut-help-modal/shortcut.js");
/* harmony import */ var _dynamic_shortcut__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dynamic-shortcut */ "./node_modules/@wordpress/edit-site/build-module/components/keyboard-shortcut-help-modal/dynamic-shortcut.js");


/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */





const ShortcutList = _ref => {
  let {
    shortcuts
  } = _ref;
  return (
    /*
     * Disable reason: The `list` ARIA role is redundant but
     * Safari+VoiceOver won't announce the list otherwise.
     */

    /* eslint-disable jsx-a11y/no-redundant-roles */
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
      className: "edit-site-keyboard-shortcut-help-modal__shortcut-list",
      role: "list"
    }, shortcuts.map((shortcut, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: "edit-site-keyboard-shortcut-help-modal__shortcut",
      key: index
    }, (0,lodash__WEBPACK_IMPORTED_MODULE_2__.isString)(shortcut) ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_dynamic_shortcut__WEBPACK_IMPORTED_MODULE_9__["default"], {
      name: shortcut
    }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_shortcut__WEBPACK_IMPORTED_MODULE_8__["default"], shortcut))))
    /* eslint-enable jsx-a11y/no-redundant-roles */

  );
};

const ShortcutSection = _ref2 => {
  let {
    title,
    shortcuts,
    className
  } = _ref2;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('edit-site-keyboard-shortcut-help-modal__section', className)
  }, !!title && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "edit-site-keyboard-shortcut-help-modal__section-title"
  }, title), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ShortcutList, {
    shortcuts: shortcuts
  }));
};

const ShortcutCategorySection = _ref3 => {
  let {
    title,
    categoryName,
    additionalShortcuts = []
  } = _ref3;
  const categoryShortcuts = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_6__.useSelect)(select => {
    return select(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_5__.store).getCategoryShortcuts(categoryName);
  }, [categoryName]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ShortcutSection, {
    title: title,
    shortcuts: categoryShortcuts.concat(additionalShortcuts)
  });
};

function KeyboardShortcutHelpModal(_ref4) {
  let {
    isModalActive,
    toggleModal
  } = _ref4;

  if (!isModalActive) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Modal, {
    className: "edit-site-keyboard-shortcut-help-modal",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Keyboard shortcuts'),
    closeLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Close'),
    onRequestClose: toggleModal
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ShortcutSection, {
    className: "edit-site-keyboard-shortcut-help-modal__main-shortcuts",
    shortcuts: ['core/edit-site/keyboard-shortcuts']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ShortcutCategorySection, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Global shortcuts'),
    categoryName: "global"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ShortcutCategorySection, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Selection shortcuts'),
    categoryName: "selection"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ShortcutCategorySection, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Block shortcuts'),
    categoryName: "block",
    additionalShortcuts: [{
      keyCombination: {
        character: '/'
      },
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Change the block type after adding a new paragraph.'),

      /* translators: The forward-slash character. e.g. '/'. */
      ariaLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Forward-slash')
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ShortcutSection, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Text formatting'),
    shortcuts: _config__WEBPACK_IMPORTED_MODULE_7__.textFormattingShortcuts
  }));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/keyboard-shortcut-help-modal/shortcut.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/keyboard-shortcut-help-modal/shortcut.js ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Shortcut; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_2__);


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




function KeyCombination(_ref) {
  let {
    keyCombination,
    forceAriaLabel
  } = _ref;
  const shortcut = keyCombination.modifier ? _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_2__.displayShortcutList[keyCombination.modifier](keyCombination.character) : keyCombination.character;
  const ariaLabel = keyCombination.modifier ? _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_2__.shortcutAriaLabel[keyCombination.modifier](keyCombination.character) : keyCombination.character;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("kbd", {
    className: "edit-site-keyboard-shortcut-help-modal__shortcut-key-combination",
    "aria-label": forceAriaLabel || ariaLabel
  }, (0,lodash__WEBPACK_IMPORTED_MODULE_1__.castArray)(shortcut).map((character, index) => {
    if (character === '+') {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: index
      }, character);
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("kbd", {
      key: index,
      className: "edit-site-keyboard-shortcut-help-modal__shortcut-key"
    }, character);
  }));
}

function Shortcut(_ref2) {
  let {
    description,
    keyCombination,
    aliases = [],
    ariaLabel
  } = _ref2;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edit-site-keyboard-shortcut-help-modal__shortcut-description"
  }, description), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edit-site-keyboard-shortcut-help-modal__shortcut-term"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(KeyCombination, {
    keyCombination: keyCombination,
    forceAriaLabel: ariaLabel
  }), aliases.map((alias, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(KeyCombination, {
    keyCombination: alias,
    forceAriaLabel: ariaLabel,
    key: index
  }))));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/keyboard-shortcuts/index.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/keyboard-shortcuts/index.js ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/keyboard-shortcuts */ "@wordpress/keyboard-shortcuts");
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/interface */ "./node_modules/@wordpress/interface/build-module/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/edit-site/build-module/store/index.js");
/* harmony import */ var _sidebar_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sidebar/constants */ "./node_modules/@wordpress/edit-site/build-module/components/sidebar/constants.js");
/* harmony import */ var _store_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/constants */ "./node_modules/@wordpress/edit-site/build-module/store/constants.js");
/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */





function KeyboardShortcuts(_ref) {
  let {
    openEntitiesSavedStates
  } = _ref;
  const {
    __experimentalGetDirtyEntityRecords,
    isSavingEntityRecord
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.store);
  const {
    getEditorMode
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(_store__WEBPACK_IMPORTED_MODULE_6__.store);
  const isListViewOpen = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => select(_store__WEBPACK_IMPORTED_MODULE_6__.store).isListViewOpened(), []);
  const isBlockInspectorOpen = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => select(_wordpress_interface__WEBPACK_IMPORTED_MODULE_5__.store).getActiveComplementaryArea(_store__WEBPACK_IMPORTED_MODULE_6__.store.name) === _sidebar_constants__WEBPACK_IMPORTED_MODULE_7__.SIDEBAR_BLOCK, []);
  const {
    redo,
    undo
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.store);
  const {
    setIsListViewOpened,
    switchEditorMode
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_6__.store);
  const {
    enableComplementaryArea,
    disableComplementaryArea
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_wordpress_interface__WEBPACK_IMPORTED_MODULE_5__.store);
  (0,_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_1__.useShortcut)('core/edit-site/save', event => {
    event.preventDefault();

    const dirtyEntityRecords = __experimentalGetDirtyEntityRecords();

    const isDirty = !!dirtyEntityRecords.length;
    const isSaving = dirtyEntityRecords.some(record => isSavingEntityRecord(record.kind, record.name, record.key));

    if (!isSaving && isDirty) {
      openEntitiesSavedStates();
    }
  });
  (0,_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_1__.useShortcut)('core/edit-site/undo', event => {
    undo();
    event.preventDefault();
  });
  (0,_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_1__.useShortcut)('core/edit-site/redo', event => {
    redo();
    event.preventDefault();
  });
  (0,_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_1__.useShortcut)('core/edit-site/toggle-list-view', () => {
    setIsListViewOpened(!isListViewOpen);
  });
  (0,_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_1__.useShortcut)('core/edit-site/toggle-block-settings-sidebar', event => {
    // This shortcut has no known clashes, but use preventDefault to prevent any
    // obscure shortcuts from triggering.
    event.preventDefault();

    if (isBlockInspectorOpen) {
      disableComplementaryArea(_store_constants__WEBPACK_IMPORTED_MODULE_8__.STORE_NAME);
    } else {
      enableComplementaryArea(_store_constants__WEBPACK_IMPORTED_MODULE_8__.STORE_NAME, _sidebar_constants__WEBPACK_IMPORTED_MODULE_7__.SIDEBAR_BLOCK);
    }
  });
  (0,_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_1__.useShortcut)('core/edit-site/toggle-mode', () => {
    switchEditorMode(getEditorMode() === 'visual' ? 'text' : 'visual');
  });
  return null;
}

function KeyboardShortcutsRegister() {
  // Registering the shortcuts.
  const {
    registerShortcut
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_1__.store);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    registerShortcut({
      name: 'core/edit-site/save',
      category: 'global',
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Save your changes.'),
      keyCombination: {
        modifier: 'primary',
        character: 's'
      }
    });
    registerShortcut({
      name: 'core/edit-site/undo',
      category: 'global',
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Undo your last changes.'),
      keyCombination: {
        modifier: 'primary',
        character: 'z'
      }
    });
    registerShortcut({
      name: 'core/edit-site/redo',
      category: 'global',
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Redo your last undo.'),
      keyCombination: {
        modifier: 'primaryShift',
        character: 'z'
      }
    });
    registerShortcut({
      name: 'core/edit-site/toggle-list-view',
      category: 'global',
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Open the block list view.'),
      keyCombination: {
        modifier: 'access',
        character: 'o'
      }
    });
    registerShortcut({
      name: 'core/edit-site/toggle-block-settings-sidebar',
      category: 'global',
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Show or hide the block settings sidebar.'),
      keyCombination: {
        modifier: 'primaryShift',
        character: ','
      }
    });
    registerShortcut({
      name: 'core/edit-site/keyboard-shortcuts',
      category: 'main',
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Display these keyboard shortcuts.'),
      keyCombination: {
        modifier: 'access',
        character: 'h'
      }
    });
    registerShortcut({
      name: 'core/edit-site/next-region',
      category: 'global',
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Navigate to the next part of the editor.'),
      keyCombination: {
        modifier: 'ctrl',
        character: '`'
      },
      aliases: [{
        modifier: 'access',
        character: 'n'
      }]
    });
    registerShortcut({
      name: 'core/edit-site/previous-region',
      category: 'global',
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Navigate to the previous part of the editor.'),
      keyCombination: {
        modifier: 'ctrlShift',
        character: '`'
      },
      aliases: [{
        modifier: 'access',
        character: 'p'
      }]
    });
    registerShortcut({
      name: 'core/edit-site/toggle-mode',
      category: 'global',
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Switch between visual editor and code editor.'),
      keyCombination: {
        modifier: 'secondary',
        character: 'm'
      }
    });
  }, [registerShortcut]);
  return null;
}

KeyboardShortcuts.Register = KeyboardShortcutsRegister;
/* harmony default export */ __webpack_exports__["default"] = (KeyboardShortcuts);


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/list/actions/index.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/list/actions/index.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Actions; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/more-vertical.js");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store */ "./node_modules/@wordpress/edit-site/build-module/store/index.js");
/* harmony import */ var _utils_is_template_removable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/is-template-removable */ "./node_modules/@wordpress/edit-site/build-module/utils/is-template-removable.js");
/* harmony import */ var _utils_is_template_revertable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils/is-template-revertable */ "./node_modules/@wordpress/edit-site/build-module/utils/is-template-revertable.js");
/* harmony import */ var _rename_menu_item__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./rename-menu-item */ "./node_modules/@wordpress/edit-site/build-module/components/list/actions/rename-menu-item.js");


/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */





function Actions(_ref) {
  let {
    template
  } = _ref;
  const {
    removeTemplate,
    revertTemplate
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_6__.store);
  const {
    saveEditedEntityRecord
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store);
  const {
    createSuccessNotice,
    createErrorNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_5__.store);
  const isRemovable = (0,_utils_is_template_removable__WEBPACK_IMPORTED_MODULE_7__["default"])(template);
  const isRevertable = (0,_utils_is_template_revertable__WEBPACK_IMPORTED_MODULE_8__["default"])(template);

  if (!isRemovable && !isRevertable) {
    return null;
  }

  async function revertAndSaveTemplate() {
    try {
      await revertTemplate(template, {
        allowUndo: false
      });
      await saveEditedEntityRecord('postType', template.type, template.id);
      createSuccessNotice((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Entity reverted.'), {
        type: 'snackbar'
      });
    } catch (error) {
      const errorMessage = error.message && error.code !== 'unknown_error' ? error.message : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('An error occurred while reverting the entity.');
      createErrorNotice(errorMessage, {
        type: 'snackbar'
      });
    }
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.DropdownMenu, {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__["default"],
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Actions'),
    className: "edit-site-list-table__actions"
  }, _ref2 => {
    let {
      onClose
    } = _ref2;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.MenuGroup, null, isRemovable && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_rename_menu_item__WEBPACK_IMPORTED_MODULE_9__["default"], {
      template: template,
      onClose: onClose
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
      isDestructive: true,
      isTertiary: true,
      onClick: () => {
        removeTemplate(template);
        onClose();
      }
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Delete'))), isRevertable && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
      info: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Restore to default state'),
      onClick: () => {
        revertAndSaveTemplate();
        onClose();
      }
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Clear customizations')));
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/list/actions/rename-menu-item.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/list/actions/rename-menu-item.js ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ RenameMenuItem; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_5__);


/**
 * WordPress dependencies
 */






function RenameMenuItem(_ref) {
  let {
    template,
    onClose
  } = _ref;
  const [title, setTitle] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(() => template.title.rendered);
  const [isModalOpen, setIsModalOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    editEntityRecord,
    saveEditedEntityRecord
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.store);
  const {
    createSuccessNotice,
    createErrorNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_5__.store);

  if (!template.is_custom) {
    return null;
  }

  async function onTemplateRename(event) {
    event.preventDefault();

    try {
      await editEntityRecord('postType', template.type, template.id, {
        title
      }); // Update state before saving rerenders the list.

      setTitle('');
      setIsModalOpen(false);
      onClose(); // Persist edited entity.

      await saveEditedEntityRecord('postType', template.type, template.id, {
        throwOnError: true
      });
      createSuccessNotice((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Entity renamed.'), {
        type: 'snackbar'
      });
    } catch (error) {
      const errorMessage = error.message && error.code !== 'unknown_error' ? error.message : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('An error occurred while renaming the entity.');
      createErrorNotice(errorMessage, {
        type: 'snackbar'
      });
    }
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
    onClick: () => {
      setIsModalOpen(true);
      setTitle(template.title.rendered);
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Rename')), isModalOpen && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Modal, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Rename'),
    closeLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Close'),
    onRequestClose: () => {
      setIsModalOpen(false);
    },
    overlayClassName: "edit-site-list__rename-modal"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
    onSubmit: onTemplateRename
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Flex, {
    align: "flex-start",
    gap: 8
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Name'),
    value: title,
    onChange: setTitle,
    required: true
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Flex, {
    className: "edit-site-list__rename-modal-actions",
    justify: "flex-end",
    expanded: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    variant: "tertiary",
    onClick: () => {
      setIsModalOpen(false);
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Cancel'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    variant: "primary",
    type: "submit"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Save')))))));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/list/added-by.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/list/added-by.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AddedBy; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/layout.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/plugins.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/comment-author-avatar.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/globe.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */







const TEMPLATE_POST_TYPE_NAMES = ['wp_template', 'wp_template_part'];

function CustomizedTooltip(_ref) {
  let {
    isCustomized,
    children
  } = _ref;

  if (!isCustomized) {
    return children;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('This template has been customized')
  }, children);
}

function BaseAddedBy(_ref2) {
  let {
    text,
    icon,
    imageUrl,
    isCustomized
  } = _ref2;
  const [isImageLoaded, setIsImageLoaded] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalHStack, {
    alignment: "left"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CustomizedTooltip, {
    isCustomized: isCustomized
  }, imageUrl ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('edit-site-list-added-by__avatar', {
      'is-loaded': isImageLoaded
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    onLoad: () => setIsImageLoaded(true),
    alt: "",
    src: imageUrl
  })) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('edit-site-list-added-by__icon', {
      'is-customized': isCustomized
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
    icon: icon
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, text));
}

function AddedByTheme(_ref3) {
  var _theme$name;

  let {
    slug,
    isCustomized
  } = _ref3;
  const theme = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.store).getTheme(slug), [slug]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BaseAddedBy, {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"],
    text: (theme === null || theme === void 0 ? void 0 : (_theme$name = theme.name) === null || _theme$name === void 0 ? void 0 : _theme$name.rendered) || slug,
    isCustomized: isCustomized
  });
}

function AddedByPlugin(_ref4) {
  let {
    slug,
    isCustomized
  } = _ref4;
  const plugin = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.store).getPlugin(slug), [slug]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BaseAddedBy, {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__["default"],
    text: (plugin === null || plugin === void 0 ? void 0 : plugin.name) || slug,
    isCustomized: isCustomized
  });
}

function AddedByAuthor(_ref5) {
  var _user$avatar_urls;

  let {
    id
  } = _ref5;
  const user = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.store).getUser(id), [id]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BaseAddedBy, {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__["default"],
    imageUrl: user === null || user === void 0 ? void 0 : (_user$avatar_urls = user.avatar_urls) === null || _user$avatar_urls === void 0 ? void 0 : _user$avatar_urls[48],
    text: user === null || user === void 0 ? void 0 : user.nickname
  });
}

function AddedBySite() {
  const {
    name,
    logoURL
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    var _getMedia;

    const {
      getEntityRecord,
      getMedia
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.store);
    const siteData = getEntityRecord('root', '__unstableBase');
    return {
      name: siteData === null || siteData === void 0 ? void 0 : siteData.name,
      logoURL: siteData !== null && siteData !== void 0 && siteData.site_logo ? (_getMedia = getMedia(siteData.site_logo)) === null || _getMedia === void 0 ? void 0 : _getMedia.source_url : undefined
    };
  }, []);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BaseAddedBy, {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__["default"],
    imageUrl: logoURL,
    text: name
  });
}

function AddedBy(_ref6) {
  let {
    templateType,
    template
  } = _ref6;

  if (!template) {
    return;
  }

  if (TEMPLATE_POST_TYPE_NAMES.includes(templateType)) {
    // Template originally provided by a theme, but customized by a user.
    // Templates originally didn't have the 'origin' field so identify
    // older customized templates by checking for no origin and a 'theme'
    // or 'custom' source.
    if (template.has_theme_file && (template.origin === 'theme' || !template.origin && ['theme', 'custom'].includes(template.source))) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(AddedByTheme, {
        slug: template.theme,
        isCustomized: template.source === 'custom'
      });
    } // Template originally provided by a plugin, but customized by a user.


    if (template.has_theme_file && template.origin === 'plugin') {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(AddedByPlugin, {
        slug: template.theme,
        isCustomized: template.source === 'custom'
      });
    } // Template was created from scratch, but has no author. Author support
    // was only added to templates in WordPress 5.9. Fallback to showing the
    // site logo and title.


    if (!template.has_theme_file && template.source === 'custom' && !template.author) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(AddedBySite, null);
    }
  } // Simply show the author for templates created from scratch that have an
  // author or for any other post type.


  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(AddedByAuthor, {
    id: template.author
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/list/header.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/list/header.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _add_new_template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../add-new-template */ "./node_modules/@wordpress/edit-site/build-module/components/add-new-template/index.js");


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


function Header(_ref) {
  var _postType$labels;

  let {
    templateType
  } = _ref;
  const postType = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store).getPostType(templateType), [templateType]);

  if (!postType) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("header", {
    className: "edit-site-list-header"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalHeading, {
    level: 1,
    className: "edit-site-list-header__title"
  }, (_postType$labels = postType.labels) === null || _postType$labels === void 0 ? void 0 : _postType$labels.name), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edit-site-list-header__right"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_add_new_template__WEBPACK_IMPORTED_MODULE_4__["default"], {
    templateType: templateType
  })));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/list/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/list/index.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ List; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/interface */ "./node_modules/@wordpress/interface/build-module/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/keyboard-shortcuts */ "@wordpress/keyboard-shortcuts");
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _use_register_shortcuts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./use-register-shortcuts */ "./node_modules/@wordpress/edit-site/build-module/components/list/use-register-shortcuts.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header */ "./node_modules/@wordpress/edit-site/build-module/components/list/header.js");
/* harmony import */ var _navigation_sidebar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../navigation-sidebar */ "./node_modules/@wordpress/edit-site/build-module/components/navigation-sidebar/index.js");
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./table */ "./node_modules/@wordpress/edit-site/build-module/components/list/table.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/edit-site/build-module/store/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../routes */ "./node_modules/@wordpress/edit-site/build-module/components/routes/index.js");
/* harmony import */ var _routes_use_title__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../routes/use-title */ "./node_modules/@wordpress/edit-site/build-module/components/routes/use-title.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */








function List() {
  var _postType$labels, _postType$labels2;

  const {
    params: {
      postType: templateType
    }
  } = (0,_routes__WEBPACK_IMPORTED_MODULE_13__.useLocation)();
  (0,_use_register_shortcuts__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const {
    previousShortcut,
    nextShortcut,
    isNavigationOpen
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    return {
      previousShortcut: select(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_6__.store).getAllShortcutKeyCombinations('core/edit-site/previous-region'),
      nextShortcut: select(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_6__.store).getAllShortcutKeyCombinations('core/edit-site/next-region'),
      isNavigationOpen: select(_store__WEBPACK_IMPORTED_MODULE_12__.store).isNavigationOpened()
    };
  }, []);
  const postType = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store).getPostType(templateType), [templateType]);
  (0,_routes_use_title__WEBPACK_IMPORTED_MODULE_14__["default"])(postType === null || postType === void 0 ? void 0 : (_postType$labels = postType.labels) === null || _postType$labels === void 0 ? void 0 : _postType$labels.name); // `postType` could load in asynchronously. Only provide the detailed region labels if
  // the postType has loaded, otherwise `InterfaceSkeleton` will fallback to the defaults.

  const itemsListLabel = postType === null || postType === void 0 ? void 0 : (_postType$labels2 = postType.labels) === null || _postType$labels2 === void 0 ? void 0 : _postType$labels2.items_list;
  const detailedRegionLabels = postType ? {
    header: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.sprintf)( // translators: %s - the name of the page, 'Header' as in the header area of that page.
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('%s - Header'), itemsListLabel),
    body: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.sprintf)( // translators: %s - the name of the page, 'Content' as in the content area of that page.
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('%s - Content'), itemsListLabel)
  } : undefined;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_interface__WEBPACK_IMPORTED_MODULE_4__.InterfaceSkeleton, {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('edit-site-list', {
      'is-navigation-open': isNavigationOpen
    }),
    labels: {
      drawer: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Navigation Sidebar'),
      ...detailedRegionLabels
    },
    header: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_header__WEBPACK_IMPORTED_MODULE_9__["default"], {
      templateType: templateType
    }),
    drawer: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_navigation_sidebar__WEBPACK_IMPORTED_MODULE_10__["default"].Slot, null),
    notices: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_7__.EditorSnackbars, null),
    content: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_table__WEBPACK_IMPORTED_MODULE_11__["default"], {
      templateType: templateType
    }),
    shortcuts: {
      previous: previousShortcut,
      next: nextShortcut
    }
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/list/table.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/list/table.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Table; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _routes_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../routes/link */ "./node_modules/@wordpress/edit-site/build-module/components/routes/link.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./actions */ "./node_modules/@wordpress/edit-site/build-module/components/list/actions/index.js");
/* harmony import */ var _added_by__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./added-by */ "./node_modules/@wordpress/edit-site/build-module/components/list/added-by.js");


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */




function Table(_ref) {
  let {
    templateType
  } = _ref;
  const {
    records: templates,
    isResolving: isLoading
  } = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.__experimentalUseEntityRecords)('postType', templateType, {
    per_page: -1
  });
  const postType = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store).getPostType(templateType), [templateType]);

  if (!templates || isLoading) {
    return null;
  }

  if (!templates.length) {
    var _postType$labels, _postType$labels$name;

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.sprintf)( // translators: The template type name, should be either "templates" or "template parts".
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('No %s found.'), postType === null || postType === void 0 ? void 0 : (_postType$labels = postType.labels) === null || _postType$labels === void 0 ? void 0 : (_postType$labels$name = _postType$labels.name) === null || _postType$labels$name === void 0 ? void 0 : _postType$labels$name.toLowerCase()));
  }

  return (// These explicit aria roles are needed for Safari.
    // See https://developer.mozilla.org/en-US/docs/Web/CSS/display#tables
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
      className: "edit-site-list-table",
      role: "table"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      className: "edit-site-list-table-head",
      role: "row"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      className: "edit-site-list-table-column",
      role: "columnheader"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Template')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      className: "edit-site-list-table-column",
      role: "columnheader"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Added by')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      className: "edit-site-list-table-column",
      role: "columnheader"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.VisuallyHidden, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Actions'))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, templates.map(template => {
      var _template$title;

      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
        key: template.id,
        className: "edit-site-list-table-row",
        role: "row"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
        className: "edit-site-list-table-column",
        role: "cell"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalHeading, {
        level: 4
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_routes_link__WEBPACK_IMPORTED_MODULE_6__["default"], {
        params: {
          postId: template.id,
          postType: template.type
        }
      }, (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__.decodeEntities)(((_template$title = template.title) === null || _template$title === void 0 ? void 0 : _template$title.rendered) || template.slug))), template.description), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
        className: "edit-site-list-table-column",
        role: "cell"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_added_by__WEBPACK_IMPORTED_MODULE_8__["default"], {
        templateType: templateType,
        template: template
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
        className: "edit-site-list-table-column",
        role: "cell"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_actions__WEBPACK_IMPORTED_MODULE_7__["default"], {
        template: template
      })));
    })))
  );
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/list/use-register-shortcuts.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/list/use-register-shortcuts.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useRegisterShortcuts; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/keyboard-shortcuts */ "@wordpress/keyboard-shortcuts");
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_3__);
/**
 * WordPress dependencies
 */




function useRegisterShortcuts() {
  const {
    registerShortcut
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useDispatch)(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_3__.store);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    registerShortcut({
      name: 'core/edit-site/next-region',
      category: 'global',
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Navigate to the next part of the editor.'),
      keyCombination: {
        modifier: 'ctrl',
        character: '`'
      },
      aliases: [{
        modifier: 'access',
        character: 'n'
      }]
    });
    registerShortcut({
      name: 'core/edit-site/previous-region',
      category: 'global',
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Navigate to the previous part of the editor.'),
      keyCombination: {
        modifier: 'ctrlShift',
        character: '`'
      },
      aliases: [{
        modifier: 'access',
        character: 'p'
      }]
    });
  }, []);
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/main-dashboard-button/index.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/main-dashboard-button/index.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const slotName = '__experimentalMainDashboardButton';
const {
  Fill,
  Slot: MainDashboardButtonSlot
} = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.createSlotFill)(slotName);
const MainDashboardButton = Fill;

const Slot = _ref => {
  let {
    children
  } = _ref;
  const slot = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalUseSlot)(slotName);
  const hasFills = Boolean(slot.fills && slot.fills.length);

  if (!hasFills) {
    return children;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MainDashboardButtonSlot, {
    bubblesVirtually: true
  });
};

MainDashboardButton.Slot = Slot;
/* harmony default export */ __webpack_exports__["default"] = (MainDashboardButton);


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/navigate-to-link/index.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/navigate-to-link/index.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ NavigateToLink; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/edit.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__);


/**
 * WordPress dependencies
 */







function NavigateToLink(_ref) {
  let {
    type,
    id,
    activePage,
    onActivePageChange
  } = _ref;
  const post = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => type && id && type !== 'URL' && select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.store).getEntityRecord('postType', type, id), [type, id]);
  const onClick = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!(post !== null && post !== void 0 && post.link)) return null;
    const path = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_1__.getPathAndQueryString)(post.link);
    if (path === (activePage === null || activePage === void 0 ? void 0 : activePage.path)) return null;
    return () => onActivePageChange({
      type,
      slug: post.slug,
      path,
      context: {
        postType: post.type,
        postId: post.id
      }
    });
  }, [post, activePage === null || activePage === void 0 ? void 0 : activePage.path, onActivePageChange]);
  return onClick && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"],
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Edit Page Template'),
    onClick: onClick
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/navigation-sidebar/index.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/navigation-sidebar/index.js ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationPanelPreviewFill": function() { return /* binding */ NavigationPanelPreviewFill; },
/* harmony export */   "NavigationPanelPreviewSlot": function() { return /* binding */ NavigationPanelPreviewSlot; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/edit-site/build-module/store/index.js");
/* harmony import */ var _navigation_panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navigation-panel */ "./node_modules/@wordpress/edit-site/build-module/components/navigation-sidebar/navigation-panel/index.js");
/* harmony import */ var _navigation_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navigation-toggle */ "./node_modules/@wordpress/edit-site/build-module/components/navigation-sidebar/navigation-toggle/index.js");


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */




const {
  Fill: NavigationPanelPreviewFill,
  Slot: NavigationPanelPreviewSlot
} = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.createSlotFill)('EditSiteNavigationPanelPreview');
const {
  Fill: NavigationSidebarFill,
  Slot: NavigationSidebarSlot
} = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.createSlotFill)('EditSiteNavigationSidebar');

function NavigationSidebar(_ref) {
  let {
    isDefaultOpen = false,
    activeTemplateType
  } = _ref;
  const isDesktopViewport = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.useViewportMatch)('medium');
  const {
    setIsNavigationPanelOpened
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_4__.store);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function autoOpenNavigationPanelOnViewportChange() {
    setIsNavigationPanelOpened(isDefaultOpen && isDesktopViewport);
  }, [isDefaultOpen, isDesktopViewport, setIsNavigationPanelOpened]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(NavigationSidebarFill, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_navigation_toggle__WEBPACK_IMPORTED_MODULE_6__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_navigation_panel__WEBPACK_IMPORTED_MODULE_5__["default"], {
    activeItem: activeTemplateType
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(NavigationPanelPreviewSlot, null));
}

NavigationSidebar.Slot = NavigationSidebarSlot;
/* harmony default export */ __webpack_exports__["default"] = (NavigationSidebar);


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/navigation-sidebar/navigation-panel/constants.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/navigation-sidebar/navigation-panel/constants.js ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MENU_ROOT": function() { return /* binding */ MENU_ROOT; },
/* harmony export */   "MENU_TEMPLATES": function() { return /* binding */ MENU_TEMPLATES; },
/* harmony export */   "MENU_TEMPLATES_GENERAL": function() { return /* binding */ MENU_TEMPLATES_GENERAL; },
/* harmony export */   "MENU_TEMPLATES_PAGES": function() { return /* binding */ MENU_TEMPLATES_PAGES; },
/* harmony export */   "MENU_TEMPLATES_POSTS": function() { return /* binding */ MENU_TEMPLATES_POSTS; },
/* harmony export */   "MENU_TEMPLATES_UNUSED": function() { return /* binding */ MENU_TEMPLATES_UNUSED; },
/* harmony export */   "MENU_TEMPLATE_PARTS": function() { return /* binding */ MENU_TEMPLATE_PARTS; },
/* harmony export */   "MENU_TEMPLATE_PARTS_FOOTERS": function() { return /* binding */ MENU_TEMPLATE_PARTS_FOOTERS; },
/* harmony export */   "MENU_TEMPLATE_PARTS_GENERAL": function() { return /* binding */ MENU_TEMPLATE_PARTS_GENERAL; },
/* harmony export */   "MENU_TEMPLATE_PARTS_HEADERS": function() { return /* binding */ MENU_TEMPLATE_PARTS_HEADERS; },
/* harmony export */   "MENU_TEMPLATE_PARTS_SIDEBARS": function() { return /* binding */ MENU_TEMPLATE_PARTS_SIDEBARS; },
/* harmony export */   "TEMPLATES_GENERAL": function() { return /* binding */ TEMPLATES_GENERAL; },
/* harmony export */   "TEMPLATES_PAGES_PREFIXES": function() { return /* binding */ TEMPLATES_PAGES_PREFIXES; },
/* harmony export */   "TEMPLATES_POSTS_PREFIXES": function() { return /* binding */ TEMPLATES_POSTS_PREFIXES; },
/* harmony export */   "TEMPLATES_PRIMARY": function() { return /* binding */ TEMPLATES_PRIMARY; },
/* harmony export */   "TEMPLATES_SECONDARY": function() { return /* binding */ TEMPLATES_SECONDARY; },
/* harmony export */   "TEMPLATES_TOP_LEVEL": function() { return /* binding */ TEMPLATES_TOP_LEVEL; },
/* harmony export */   "TEMPLATE_OVERRIDES": function() { return /* binding */ TEMPLATE_OVERRIDES; },
/* harmony export */   "TEMPLATE_PARTS_SUB_MENUS": function() { return /* binding */ TEMPLATE_PARTS_SUB_MENUS; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../store/constants */ "./node_modules/@wordpress/edit-site/build-module/store/constants.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


const TEMPLATES_PRIMARY = ['index', 'singular', 'archive', 'single', 'page', 'home', '404', 'search'];
const TEMPLATES_SECONDARY = ['author', 'category', 'taxonomy', 'date', 'tag', 'attachment', 'single-post', 'front-page'];
const TEMPLATES_TOP_LEVEL = [...TEMPLATES_PRIMARY, ...TEMPLATES_SECONDARY];
const TEMPLATES_GENERAL = ['page-home'];
const TEMPLATES_POSTS_PREFIXES = ['post-', 'author-', 'single-post-', 'tag-'];
const TEMPLATES_PAGES_PREFIXES = ['page-'];
const TEMPLATE_OVERRIDES = {
  singular: ['single', 'page'],
  index: ['archive', '404', 'search', 'singular', 'home'],
  home: ['front-page']
};
const MENU_ROOT = 'root';
const MENU_TEMPLATE_PARTS = 'template-parts';
const MENU_TEMPLATES = 'templates';
const MENU_TEMPLATES_GENERAL = 'templates-general';
const MENU_TEMPLATES_PAGES = 'templates-pages';
const MENU_TEMPLATES_POSTS = 'templates-posts';
const MENU_TEMPLATES_UNUSED = 'templates-unused';
const MENU_TEMPLATE_PARTS_HEADERS = 'template-parts-headers';
const MENU_TEMPLATE_PARTS_FOOTERS = 'template-parts-footers';
const MENU_TEMPLATE_PARTS_SIDEBARS = 'template-parts-sidebars';
const MENU_TEMPLATE_PARTS_GENERAL = 'template-parts-general';
const TEMPLATE_PARTS_SUB_MENUS = [{
  area: _store_constants__WEBPACK_IMPORTED_MODULE_1__.TEMPLATE_PART_AREA_HEADER,
  menu: MENU_TEMPLATE_PARTS_HEADERS,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('headers')
}, {
  area: _store_constants__WEBPACK_IMPORTED_MODULE_1__.TEMPLATE_PART_AREA_FOOTER,
  menu: MENU_TEMPLATE_PARTS_FOOTERS,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('footers')
}, {
  area: _store_constants__WEBPACK_IMPORTED_MODULE_1__.TEMPLATE_PART_AREA_SIDEBAR,
  menu: MENU_TEMPLATE_PARTS_SIDEBARS,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('sidebars')
}, {
  area: _store_constants__WEBPACK_IMPORTED_MODULE_1__.TEMPLATE_PART_AREA_GENERAL,
  menu: MENU_TEMPLATE_PARTS_GENERAL,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('general')
}];


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/navigation-sidebar/navigation-panel/index.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/navigation-sidebar/navigation-panel/index.js ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/home.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/layout.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/symbol-filled.js");
/* harmony import */ var _routes_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../routes/link */ "./node_modules/@wordpress/edit-site/build-module/components/routes/link.js");
/* harmony import */ var _main_dashboard_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../main-dashboard-button */ "./node_modules/@wordpress/edit-site/build-module/components/main-dashboard-button/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../store */ "./node_modules/@wordpress/edit-site/build-module/store/index.js");



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */




const SITE_EDITOR_KEY = 'site-editor';

function NavLink(_ref) {
  let {
    params,
    replace,
    ...props
  } = _ref;
  const linkProps = (0,_routes_link__WEBPACK_IMPORTED_MODULE_9__.useLink)(params, replace);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalNavigationItem, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, linkProps, props));
}

const NavigationPanel = _ref2 => {
  let {
    activeItem = SITE_EDITOR_KEY
  } = _ref2;
  const {
    homeTemplate,
    isNavigationOpen,
    siteTitle
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => {
    const {
      getEntityRecord
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.store);
    const {
      getSettings,
      isNavigationOpened
    } = select(_store__WEBPACK_IMPORTED_MODULE_11__.store);
    const siteData = getEntityRecord('root', '__unstableBase', undefined) || {};
    return {
      siteTitle: siteData.name,
      homeTemplate: getSettings().__unstableHomeTemplate,
      isNavigationOpen: isNavigationOpened()
    };
  }, []);
  const {
    setIsNavigationPanelOpened
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_11__.store);

  const closeOnEscape = event => {
    if (event.keyCode === _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_7__.ESCAPE && !event.defaultPrevented) {
      event.preventDefault();
      setIsNavigationPanelOpened(false);
    }
  };

  return (// eslint-disable-next-line jsx-a11y/no-static-element-interactions
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(`edit-site-navigation-panel`, {
        'is-open': isNavigationOpen
      }),
      onKeyDown: closeOnEscape
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "edit-site-navigation-panel__inner"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "edit-site-navigation-panel__site-title-container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "edit-site-navigation-panel__site-title"
    }, (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_8__.decodeEntities)(siteTitle))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "edit-site-navigation-panel__scroll-container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalNavigation, {
      activeItem: activeItem
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_main_dashboard_button__WEBPACK_IMPORTED_MODULE_10__["default"].Slot, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalNavigationBackButton, {
      backButtonLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Dashboard'),
      className: "edit-site-navigation-panel__back-to-dashboard",
      href: "index.php"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalNavigationMenu, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalNavigationGroup, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Editor')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(NavLink, {
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_12__["default"],
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Site'),
      item: SITE_EDITOR_KEY,
      params: {
        postId: homeTemplate === null || homeTemplate === void 0 ? void 0 : homeTemplate.postId,
        postType: homeTemplate === null || homeTemplate === void 0 ? void 0 : homeTemplate.postType
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(NavLink, {
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_13__["default"],
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Templates'),
      item: "wp_template",
      params: {
        postId: undefined,
        postType: 'wp_template'
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(NavLink, {
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_14__["default"],
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Template Parts'),
      item: "wp_template_part",
      params: {
        postId: undefined,
        postType: 'wp_template_part'
      }
    })))))))
  );
};

/* harmony default export */ __webpack_exports__["default"] = (NavigationPanel);


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/navigation-sidebar/navigation-panel/template-hierarchy.js":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/navigation-sidebar/navigation-panel/template-hierarchy.js ***!
  \*****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTemplateLocation": function() { return /* binding */ getTemplateLocation; },
/* harmony export */   "getTemplatesLocationMap": function() { return /* binding */ getTemplatesLocationMap; },
/* harmony export */   "getUnusedTemplates": function() { return /* binding */ getUnusedTemplates; },
/* harmony export */   "isTemplateSuperseded": function() { return /* binding */ isTemplateSuperseded; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/@wordpress/edit-site/build-module/components/navigation-sidebar/navigation-panel/constants.js");
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


function isTemplateSuperseded(slug, existingSlugs, showOnFront) {
  if (!_constants__WEBPACK_IMPORTED_MODULE_1__.TEMPLATE_OVERRIDES[slug]) {
    return false;
  } // `home` template is unused if it is superseded by `front-page`
  // or "show on front" is set to show a page rather than blog posts.


  if (slug === 'home' && showOnFront !== 'posts') {
    return true;
  }

  return _constants__WEBPACK_IMPORTED_MODULE_1__.TEMPLATE_OVERRIDES[slug].every(overrideSlug => existingSlugs.includes(overrideSlug) || isTemplateSuperseded(overrideSlug, existingSlugs, showOnFront));
}
function getTemplateLocation(slug) {
  const isTopLevelTemplate = _constants__WEBPACK_IMPORTED_MODULE_1__.TEMPLATES_TOP_LEVEL.includes(slug);

  if (isTopLevelTemplate) {
    return _constants__WEBPACK_IMPORTED_MODULE_1__.MENU_TEMPLATES;
  }

  const isGeneralTemplate = _constants__WEBPACK_IMPORTED_MODULE_1__.TEMPLATES_GENERAL.includes(slug);

  if (isGeneralTemplate) {
    return _constants__WEBPACK_IMPORTED_MODULE_1__.MENU_TEMPLATES_GENERAL;
  }

  const isPostsTemplate = _constants__WEBPACK_IMPORTED_MODULE_1__.TEMPLATES_POSTS_PREFIXES.some(prefix => slug.startsWith(prefix));

  if (isPostsTemplate) {
    return _constants__WEBPACK_IMPORTED_MODULE_1__.MENU_TEMPLATES_POSTS;
  }

  const isPagesTemplate = _constants__WEBPACK_IMPORTED_MODULE_1__.TEMPLATES_PAGES_PREFIXES.some(prefix => slug.startsWith(prefix));

  if (isPagesTemplate) {
    return _constants__WEBPACK_IMPORTED_MODULE_1__.MENU_TEMPLATES_PAGES;
  }

  return _constants__WEBPACK_IMPORTED_MODULE_1__.MENU_TEMPLATES_GENERAL;
}
function getUnusedTemplates(templates, showOnFront) {
  const templateSlugs = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(templates, 'slug');
  const supersededTemplates = templates.filter(_ref => {
    let {
      slug
    } = _ref;
    return isTemplateSuperseded(slug, templateSlugs, showOnFront);
  });
  return supersededTemplates;
}
function getTemplatesLocationMap(templates) {
  return templates.reduce((obj, template) => {
    obj[template.slug] = getTemplateLocation(template.slug);
    return obj;
  }, {});
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/navigation-sidebar/navigation-toggle/index.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/navigation-sidebar/navigation-toggle/index.js ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/wordpress.js");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../store */ "./node_modules/@wordpress/edit-site/build-module/store/index.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */



function NavigationToggle(_ref) {
  let {
    icon
  } = _ref;
  const {
    isNavigationOpen,
    isRequestingSiteIcon,
    siteIconUrl
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    const {
      getEntityRecord,
      isResolving
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.store);
    const siteData = getEntityRecord('root', '__unstableBase', undefined) || {};
    return {
      isNavigationOpen: select(_store__WEBPACK_IMPORTED_MODULE_7__.store).isNavigationOpened(),
      isRequestingSiteIcon: isResolving('core', 'getEntityRecord', ['root', '__unstableBase', undefined]),
      siteIconUrl: siteData.site_icon_url
    };
  }, []);
  const {
    setIsNavigationPanelOpened
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_7__.store);
  const disableMotion = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__.useReducedMotion)();
  const navigationToggleRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // TODO: Remove this effect when alternative solution is merged.
    // See: https://github.com/WordPress/gutenberg/pull/37314
    if (!isNavigationOpen) {
      navigationToggleRef.current.focus();
    }
  }, [isNavigationOpen]);

  const toggleNavigationPanel = () => setIsNavigationPanelOpened(!isNavigationOpen);

  let buttonIcon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
    size: "36px",
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__["default"]
  });
  const effect = {
    expand: {
      scale: 1.25,
      transition: {
        type: 'tween',
        duration: '0.3'
      }
    }
  };

  if (siteIconUrl) {
    buttonIcon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__unstableMotion.img, {
      variants: !disableMotion && effect,
      alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Site Icon'),
      className: "edit-site-navigation-toggle__site-icon",
      src: siteIconUrl
    });
  } else if (isRequestingSiteIcon) {
    buttonIcon = null;
  } else if (icon) {
    buttonIcon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
      size: "36px",
      icon: icon
    });
  }

  const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
    'edit-site-navigation-toggle__button': true,
    'has-icon': siteIconUrl
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__unstableMotion.div, {
    className: 'edit-site-navigation-toggle' + (isNavigationOpen ? ' is-open' : ''),
    whileHover: "expand"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    className: classes,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Toggle navigation'),
    ref: navigationToggleRef // isPressed will add unwanted styles.
    ,
    "aria-pressed": isNavigationOpen,
    onClick: toggleNavigationPanel,
    showTooltip: true
  }, buttonIcon));
}

/* harmony default export */ __webpack_exports__["default"] = (NavigationToggle);


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/preferences-modal/enable-feature.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/preferences-modal/enable-feature.js ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EnableFeature; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/interface */ "./node_modules/@wordpress/interface/build-module/index.js");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_4__);



/**
 * WordPress dependencies
 */



function EnableFeature(props) {
  const {
    featureName,
    ...remainingProps
  } = props;
  const isChecked = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => !!select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_4__.store).get('core/edit-site', featureName), [featureName]);
  const {
    toggle
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_4__.store);

  const onChange = () => toggle('core/edit-site', featureName);

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_interface__WEBPACK_IMPORTED_MODULE_3__.___unstablePreferencesModalBaseOption, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    onChange: onChange,
    isChecked: isChecked
  }, remainingProps));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/preferences-modal/index.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/preferences-modal/index.js ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EditSitePreferencesModal; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/interface */ "./node_modules/@wordpress/interface/build-module/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _enable_feature__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enable-feature */ "./node_modules/@wordpress/edit-site/build-module/components/preferences-modal/enable-feature.js");


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


function EditSitePreferencesModal(_ref) {
  let {
    isModalActive,
    toggleModal
  } = _ref;
  const sections = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => [{
    name: 'general',
    tabLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('General'),
    content: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_interface__WEBPACK_IMPORTED_MODULE_1__.PreferencesModalSection, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Appearance'),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Customize options related to the block editor interface and editing flow.')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_enable_feature__WEBPACK_IMPORTED_MODULE_3__["default"], {
      featureName: "focusMode",
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Highlights the current block and fades other content.'),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Spotlight mode')
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_enable_feature__WEBPACK_IMPORTED_MODULE_3__["default"], {
      featureName: "showIconLabels",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show button text labels'),
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show text instead of icons on buttons')
    }))
  }, {
    name: 'blocks',
    tabLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Blocks'),
    content: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_interface__WEBPACK_IMPORTED_MODULE_1__.PreferencesModalSection, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Block interactions'),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Customize how you interact with blocks in the block library and editing canvas.')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_enable_feature__WEBPACK_IMPORTED_MODULE_3__["default"], {
      featureName: "keepCaretInsideBlock",
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Aids screen readers by stopping text caret from leaving blocks.'),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Contain text cursor inside block')
    }))
  }]);

  if (!isModalActive) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_interface__WEBPACK_IMPORTED_MODULE_1__.PreferencesModal, {
    closeModal: toggleModal
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_interface__WEBPACK_IMPORTED_MODULE_1__.PreferencesModalTabs, {
    sections: sections
  }));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/routes/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/routes/index.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Routes": function() { return /* binding */ Routes; },
/* harmony export */   "useHistory": function() { return /* binding */ useHistory; },
/* harmony export */   "useLocation": function() { return /* binding */ useLocation; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/history */ "./node_modules/@wordpress/edit-site/build-module/utils/history.js");


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


const RoutesContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)();
const HistoryContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)();
function useLocation() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(RoutesContext);
}
function useHistory() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(HistoryContext);
}

function getLocationWithParams(location) {
  const searchParams = new URLSearchParams(location.search);
  return { ...location,
    params: Object.fromEntries(searchParams.entries())
  };
}

function Routes(_ref) {
  let {
    children
  } = _ref;
  const [location, setLocation] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(() => getLocationWithParams(_utils_history__WEBPACK_IMPORTED_MODULE_1__["default"].location));
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return _utils_history__WEBPACK_IMPORTED_MODULE_1__["default"].listen(_ref2 => {
      let {
        location: updatedLocation
      } = _ref2;
      setLocation(getLocationWithParams(updatedLocation));
    });
  }, []);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(HistoryContext.Provider, {
    value: _utils_history__WEBPACK_IMPORTED_MODULE_1__["default"]
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RoutesContext.Provider, {
    value: location
  }, children(location)));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/routes/link.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/routes/link.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Link; },
/* harmony export */   "useLink": function() { return /* binding */ useLink; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ "./node_modules/@wordpress/edit-site/build-module/components/routes/index.js");



/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


function useLink() {
  let params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let state = arguments.length > 1 ? arguments[1] : undefined;
  let shouldReplace = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  const history = (0,_index__WEBPACK_IMPORTED_MODULE_3__.useHistory)();

  function onClick(event) {
    event.preventDefault();

    if (shouldReplace) {
      history.replace(params, state);
    } else {
      history.push(params, state);
    }
  }

  return {
    href: (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_2__.addQueryArgs)(window.location.href, params),
    onClick
  };
}
function Link(_ref) {
  let {
    params = {},
    state,
    replace: shouldReplace = false,
    children,
    ...props
  } = _ref;
  const {
    href,
    onClick
  } = useLink(params, state, shouldReplace);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    href: href,
    onClick: onClick
  }, props), children);
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/routes/use-title.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/routes/use-title.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useTitle; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/a11y */ "@wordpress/a11y");
/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_a11y__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index */ "./node_modules/@wordpress/edit-site/build-module/components/routes/index.js");
/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


function useTitle(title) {
  const location = (0,_index__WEBPACK_IMPORTED_MODULE_5__.useLocation)();
  const siteTitle = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    var _select$getEntityReco;

    return (_select$getEntityReco = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store).getEntityRecord('root', 'site')) === null || _select$getEntityReco === void 0 ? void 0 : _select$getEntityReco.title;
  }, []);
  const isInitialLocationRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    isInitialLocationRef.current = false;
  }, [location]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Don't update or announce the title for initial page load.
    if (isInitialLocationRef.current) {
      return;
    }

    if (title && siteTitle) {
      // @see https://github.com/WordPress/wordpress-develop/blob/94849898192d271d533e09756007e176feb80697/src/wp-admin/admin-header.php#L67-L68
      const formattedTitle = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.sprintf)(
      /* translators: Admin screen title. 1: Admin screen name, 2: Network or site name. */
      (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('%1$s ‹ %2$s — WordPress'), title, siteTitle);
      document.title = formattedTitle; // Announce title on route change for screen readers.

      (0,_wordpress_a11y__WEBPACK_IMPORTED_MODULE_4__.speak)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.sprintf)(
      /* translators: The page title that is currently displaying. */
      (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Now displaying: %s'), document.title), 'assertive');
    }
  }, [title, siteTitle, location]);
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/save-button/index.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/save-button/index.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SaveButton; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__);


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





function SaveButton(_ref) {
  let {
    openEntitiesSavedStates,
    isEntitiesSavedStatesOpen
  } = _ref;
  const {
    isDirty,
    isSaving
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    const {
      __experimentalGetDirtyEntityRecords,
      isSavingEntityRecord
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.store);

    const dirtyEntityRecords = __experimentalGetDirtyEntityRecords();

    return {
      isDirty: dirtyEntityRecords.length > 0,
      isSaving: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.some)(dirtyEntityRecords, record => isSavingEntityRecord(record.kind, record.name, record.key))
    };
  }, []);
  const disabled = !isDirty || isSaving;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    variant: "primary",
    className: "edit-site-save-button__button",
    "aria-disabled": disabled,
    "aria-expanded": isEntitiesSavedStatesOpen,
    disabled: disabled,
    isBusy: isSaving,
    onClick: disabled ? undefined : openEntitiesSavedStates
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Save')));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/secondary-sidebar/inserter-sidebar.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/secondary-sidebar/inserter-sidebar.js ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ InserterSidebar; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/close.js");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/edit-site/build-module/store/index.js");



/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */


function InserterSidebar() {
  const {
    setIsInserterOpened
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_7__.store);
  const insertionPoint = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => select(_store__WEBPACK_IMPORTED_MODULE_7__.store).__experimentalGetInsertionPoint(), []);
  const isMobile = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__.useViewportMatch)('medium', '<');
  const TagName = !isMobile ? _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.VisuallyHidden : 'div';
  const [inserterDialogRef, inserterDialogProps] = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__.__experimentalUseDialog)({
    onClose: () => setIsInserterOpened(false),
    focusOnMount: null
  });
  const libraryRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    libraryRef.current.focusSearch();
  }, []);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: inserterDialogRef
  }, inserterDialogProps, {
    className: "edit-site-editor__inserter-panel"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TagName, {
    className: "edit-site-editor__inserter-panel-header"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__["default"],
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Close block inserter'),
    onClick: () => setIsInserterOpened(false)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "edit-site-editor__inserter-panel-content"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.__experimentalLibrary, {
    showInserterHelpPanel: true,
    shouldFocusBlock: isMobile,
    rootClientId: insertionPoint.rootClientId,
    __experimentalInsertionIndex: insertionPoint.insertionIndex,
    __experimentalFilterValue: insertionPoint.filterValue,
    ref: libraryRef
  })));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/secondary-sidebar/list-view-sidebar.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/secondary-sidebar/list-view-sidebar.js ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ListViewSidebar; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/close-small.js");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/edit-site/build-module/store/index.js");


/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */


function ListViewSidebar() {
  const {
    setIsListViewOpened
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_7__.store);
  const focusOnMountRef = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.useFocusOnMount)('firstElement');
  const headerFocusReturnRef = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.useFocusReturn)();
  const contentFocusReturnRef = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.useFocusReturn)();

  function closeOnEscape(event) {
    if (event.keyCode === _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_6__.ESCAPE && !event.defaultPrevented) {
      setIsListViewOpened(false);
    }
  }

  const instanceId = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.useInstanceId)(ListViewSidebar);
  const labelId = `edit-site-editor__list-view-panel-label-${instanceId}`;
  return (// eslint-disable-next-line jsx-a11y/no-static-element-interactions
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      "aria-labelledby": labelId,
      className: "edit-site-editor__list-view-panel",
      onKeyDown: closeOnEscape
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "edit-site-editor__list-view-panel-header",
      ref: headerFocusReturnRef
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", {
      id: labelId
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('List View')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__["default"],
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Close List View Sidebar'),
      onClick: () => setIsListViewOpened(false)
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "edit-site-editor__list-view-panel-content",
      ref: (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.useMergeRefs)([contentFocusReturnRef, focusOnMountRef])
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.__experimentalListView, {
      showNestedBlocks: true,
      __experimentalFeatures: true,
      __experimentalPersistentListViewFeatures: true
    })))
  );
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/sidebar/constants.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/sidebar/constants.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SIDEBAR_BLOCK": function() { return /* binding */ SIDEBAR_BLOCK; },
/* harmony export */   "SIDEBAR_TEMPLATE": function() { return /* binding */ SIDEBAR_TEMPLATE; }
/* harmony export */ });
const SIDEBAR_TEMPLATE = 'edit-site/template';
const SIDEBAR_BLOCK = 'edit-site/block-inspector';


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/sidebar/default-sidebar.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/sidebar/default-sidebar.js ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DefaultSidebar; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/interface */ "./node_modules/@wordpress/interface/build-module/index.js");


/**
 * WordPress dependencies
 */

function DefaultSidebar(_ref) {
  let {
    className,
    identifier,
    title,
    icon,
    children,
    closeLabel,
    header,
    headerClassName,
    panelClassName
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_interface__WEBPACK_IMPORTED_MODULE_1__.ComplementaryArea, {
    className: className,
    scope: "core/edit-site",
    identifier: identifier,
    title: title,
    icon: icon,
    closeLabel: closeLabel,
    header: header,
    headerClassName: headerClassName,
    panelClassName: panelClassName
  }, children), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_interface__WEBPACK_IMPORTED_MODULE_1__.ComplementaryAreaMoreMenuItem, {
    scope: "core/edit-site",
    identifier: identifier,
    icon: icon
  }, title));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/sidebar/global-styles-sidebar.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/sidebar/global-styles-sidebar.js ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ GlobalStylesSidebar; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/styles.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/more-vertical.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _default_sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./default-sidebar */ "./node_modules/@wordpress/edit-site/build-module/components/sidebar/default-sidebar.js");
/* harmony import */ var _global_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../global-styles */ "./node_modules/@wordpress/edit-site/build-module/components/global-styles/index.js");


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



function GlobalStylesSidebar() {
  const [canReset, onReset] = (0,_global_styles__WEBPACK_IMPORTED_MODULE_6__.useGlobalStylesReset)();
  const {
    toggle
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_4__.store);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_default_sidebar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "edit-site-global-styles-sidebar",
    identifier: "edit-site/global-styles",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Styles'),
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__["default"],
    closeLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Close global styles sidebar'),
    panelClassName: "edit-site-global-styles-sidebar__panel",
    header: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Flex, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FlexBlock, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Styles')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "edit-site-global-styles-sidebar__beta"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Beta'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.DropdownMenu, {
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__["default"],
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('More Global Styles Actions'),
      controls: [{
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Reset to defaults'),
        onClick: onReset,
        isDisabled: !canReset
      }, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Welcome Guide'),
        onClick: () => toggle('core/edit-site', 'welcomeGuideStyles')
      }]
    })))
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_global_styles__WEBPACK_IMPORTED_MODULE_6__.GlobalStylesUI, null));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/sidebar/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/sidebar/index.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComplementaryAreaFills": function() { return /* binding */ SidebarComplementaryAreaFills; },
/* harmony export */   "SidebarInspectorFill": function() { return /* binding */ SidebarInspectorFill; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/cog.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/interface */ "./node_modules/@wordpress/interface/build-module/index.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _default_sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./default-sidebar */ "./node_modules/@wordpress/edit-site/build-module/components/sidebar/default-sidebar.js");
/* harmony import */ var _global_styles_sidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./global-styles-sidebar */ "./node_modules/@wordpress/edit-site/build-module/components/sidebar/global-styles-sidebar.js");
/* harmony import */ var _navigation_menu_sidebar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navigation-menu-sidebar */ "./node_modules/@wordpress/edit-site/build-module/components/sidebar/navigation-menu-sidebar/index.js");
/* harmony import */ var _store_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/constants */ "./node_modules/@wordpress/edit-site/build-module/store/constants.js");
/* harmony import */ var _settings_header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./settings-header */ "./node_modules/@wordpress/edit-site/build-module/components/sidebar/settings-header/index.js");
/* harmony import */ var _template_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./template-card */ "./node_modules/@wordpress/edit-site/build-module/components/sidebar/template-card/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./constants */ "./node_modules/@wordpress/edit-site/build-module/components/sidebar/constants.js");


/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */








const {
  Slot: InspectorSlot,
  Fill: InspectorFill
} = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.createSlotFill)('EditSiteSidebarInspector');
const SidebarInspectorFill = InspectorFill;
function SidebarComplementaryAreaFills() {
  const {
    sidebar,
    isEditorSidebarOpened,
    hasBlockSelection
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    const _sidebar = select(_wordpress_interface__WEBPACK_IMPORTED_MODULE_4__.store).getActiveComplementaryArea(_store_constants__WEBPACK_IMPORTED_MODULE_9__.STORE_NAME);

    const _isEditorSidebarOpened = [_constants__WEBPACK_IMPORTED_MODULE_12__.SIDEBAR_BLOCK, _constants__WEBPACK_IMPORTED_MODULE_12__.SIDEBAR_TEMPLATE].includes(_sidebar);

    return {
      sidebar: _sidebar,
      isEditorSidebarOpened: _isEditorSidebarOpened,
      hasBlockSelection: !!select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.store).getBlockSelectionStart()
    };
  }, []);
  const {
    enableComplementaryArea
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_wordpress_interface__WEBPACK_IMPORTED_MODULE_4__.store);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isEditorSidebarOpened) return;

    if (hasBlockSelection) {
      enableComplementaryArea(_store_constants__WEBPACK_IMPORTED_MODULE_9__.STORE_NAME, _constants__WEBPACK_IMPORTED_MODULE_12__.SIDEBAR_BLOCK);
    } else {
      enableComplementaryArea(_store_constants__WEBPACK_IMPORTED_MODULE_9__.STORE_NAME, _constants__WEBPACK_IMPORTED_MODULE_12__.SIDEBAR_TEMPLATE);
    }
  }, [hasBlockSelection, isEditorSidebarOpened]);
  let sidebarName = sidebar;

  if (!isEditorSidebarOpened) {
    sidebarName = hasBlockSelection ? _constants__WEBPACK_IMPORTED_MODULE_12__.SIDEBAR_BLOCK : _constants__WEBPACK_IMPORTED_MODULE_12__.SIDEBAR_TEMPLATE;
  } // Conditionally include NavMenu sidebar in Plugin only.
  // Optimise for dead code elimination.
  // See https://github.com/WordPress/gutenberg/blob/trunk/docs/how-to-guides/feature-flags.md#dead-code-elimination.


  let MaybeNavigationMenuSidebar = _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment;

  if (false) {}

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_default_sidebar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    identifier: sidebarName,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Settings'),
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_13__["default"],
    closeLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Close settings sidebar'),
    header: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_settings_header__WEBPACK_IMPORTED_MODULE_10__["default"], {
      sidebarName: sidebarName
    }),
    headerClassName: "edit-site-sidebar__panel-tabs"
  }, sidebarName === _constants__WEBPACK_IMPORTED_MODULE_12__.SIDEBAR_TEMPLATE && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_template_card__WEBPACK_IMPORTED_MODULE_11__["default"], null)), sidebarName === _constants__WEBPACK_IMPORTED_MODULE_12__.SIDEBAR_BLOCK && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorSlot, {
    bubblesVirtually: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_global_styles_sidebar__WEBPACK_IMPORTED_MODULE_7__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MaybeNavigationMenuSidebar, null));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/sidebar/navigation-menu-sidebar/index.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/sidebar/navigation-menu-sidebar/index.js ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ NavigationMenuSidebar; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/navigation.js");
/* harmony import */ var _default_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../default-sidebar */ "./node_modules/@wordpress/edit-site/build-module/components/sidebar/default-sidebar.js");
/* harmony import */ var _navigation_inspector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation-inspector */ "./node_modules/@wordpress/edit-site/build-module/components/sidebar/navigation-menu-sidebar/navigation-inspector.js");


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



function NavigationMenuSidebar() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_default_sidebar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "edit-site-navigation-menu-sidebar",
    identifier: "edit-site/navigation-menu",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Navigation Menus'),
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"],
    closeLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Close navigation menu sidebar'),
    panelClassName: "edit-site-navigation-menu-sidebar__panel",
    header: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Flex, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FlexBlock, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Navigation Menus'))))
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_navigation_inspector__WEBPACK_IMPORTED_MODULE_4__["default"], null));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/sidebar/navigation-menu-sidebar/navigation-inspector.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/sidebar/navigation-menu-sidebar/navigation-inspector.js ***!
  \***************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ NavigationInspector; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/a11y */ "@wordpress/a11y");
/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_a11y__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _navigation_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navigation-menu */ "./node_modules/@wordpress/edit-site/build-module/components/sidebar/navigation-menu-sidebar/navigation-menu.js");


/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */


const NAVIGATION_MENUS_QUERY = [{
  per_page: -1,
  status: 'publish'
}];
function NavigationInspector() {
  var _navigationMenus$;

  const {
    selectedNavigationBlockId,
    clientIdToRef,
    navigationMenus,
    isResolvingNavigationMenus,
    hasResolvedNavigationMenus,
    firstNavigationBlockId
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    const {
      __experimentalGetActiveBlockIdByBlockNames,
      __experimentalGetGlobalBlocksByName,
      getBlock
    } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.store);
    const {
      getEntityRecords,
      hasFinishedResolution,
      isResolving
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.store);
    const navigationMenusQuery = ['postType', 'wp_navigation', NAVIGATION_MENUS_QUERY[0]]; // Get the active Navigation block (if present).

    const selectedNavId = __experimentalGetActiveBlockIdByBlockNames('core/navigation'); // Get all Navigation blocks currently within the editor canvas.


    const navBlockIds = __experimentalGetGlobalBlocksByName('core/navigation');

    const idToRef = {};
    navBlockIds.forEach(id => {
      var _getBlock, _getBlock$attributes;

      idToRef[id] = (_getBlock = getBlock(id)) === null || _getBlock === void 0 ? void 0 : (_getBlock$attributes = _getBlock.attributes) === null || _getBlock$attributes === void 0 ? void 0 : _getBlock$attributes.ref;
    });
    return {
      selectedNavigationBlockId: selectedNavId,
      firstNavigationBlockId: navBlockIds === null || navBlockIds === void 0 ? void 0 : navBlockIds[0],
      clientIdToRef: idToRef,
      navigationMenus: getEntityRecords(...navigationMenusQuery),
      isResolvingNavigationMenus: isResolving('getEntityRecords', navigationMenusQuery),
      hasResolvedNavigationMenus: hasFinishedResolution('getEntityRecords', navigationMenusQuery)
    };
  }, []);
  const navMenuListId = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__.useInstanceId)(_navigation_menu__WEBPACK_IMPORTED_MODULE_8__["default"], 'edit-site-navigation-inspector-menu');
  const firstNavRefInTemplate = clientIdToRef[firstNavigationBlockId];
  const firstNavigationMenuRef = navigationMenus === null || navigationMenus === void 0 ? void 0 : (_navigationMenus$ = navigationMenus[0]) === null || _navigationMenus$ === void 0 ? void 0 : _navigationMenus$.id; // Default Navigation Menu is either:
  // - the Navigation Menu referenced by the first Nav block within the template.
  // - the first of the available Navigation Menus (`wp_navigation`) posts.

  const defaultNavigationMenuId = firstNavRefInTemplate || firstNavigationMenuRef; // The Navigation Menu manually selected by the user within the Nav inspector.

  const [currentMenuId, setCurrentMenuId] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(firstNavRefInTemplate); // If a Nav block is selected within the canvas then set the
  // Navigation Menu referenced by it's `ref` attribute  to be
  // active within the Navigation sidebar.

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (selectedNavigationBlockId) {
      setCurrentMenuId(clientIdToRef[selectedNavigationBlockId]);
    }
  }, [selectedNavigationBlockId]);
  let options = [];

  if (navigationMenus) {
    options = navigationMenus.map(_ref => {
      let {
        id,
        title
      } = _ref;
      return {
        value: id,
        label: title.rendered
      };
    });
  }

  const [innerBlocks, onInput, onChange] = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.useEntityBlockEditor)('postType', 'wp_navigation', {
    id: currentMenuId || defaultNavigationMenuId
  });
  const {
    isLoadingInnerBlocks,
    hasLoadedInnerBlocks
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    const {
      isResolving,
      hasFinishedResolution
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.store);
    return {
      isLoadingInnerBlocks: isResolving('getEntityRecord', ['postType', 'wp_navigation', currentMenuId || defaultNavigationMenuId]),
      hasLoadedInnerBlocks: hasFinishedResolution('getEntityRecord', ['postType', 'wp_navigation', currentMenuId || defaultNavigationMenuId])
    };
  }, [currentMenuId, defaultNavigationMenuId]);
  const isLoading = !(hasResolvedNavigationMenus && hasLoadedInnerBlocks);
  const hasMoreThanOneNavigationMenu = (navigationMenus === null || navigationMenus === void 0 ? void 0 : navigationMenus.length) > 1;
  const hasNavigationMenus = !!(navigationMenus !== null && navigationMenus !== void 0 && navigationMenus.length); // Entity block editor will return entities that are not currently published.
  // Guard by only allowing their usage if there are published Nav Menus.

  const publishedInnerBlocks = hasNavigationMenus ? innerBlocks : [];
  const hasInnerBlocks = !!(publishedInnerBlocks !== null && publishedInnerBlocks !== void 0 && publishedInnerBlocks.length);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isResolvingNavigationMenus) {
      (0,_wordpress_a11y__WEBPACK_IMPORTED_MODULE_5__.speak)('Loading Navigation sidebar menus.');
    }

    if (hasResolvedNavigationMenus) {
      (0,_wordpress_a11y__WEBPACK_IMPORTED_MODULE_5__.speak)('Navigation sidebar menus have loaded.');
    }
  }, [isResolvingNavigationMenus, hasResolvedNavigationMenus]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isLoadingInnerBlocks) {
      (0,_wordpress_a11y__WEBPACK_IMPORTED_MODULE_5__.speak)('Loading Navigation sidebar selected menu items.');
    }

    if (hasLoadedInnerBlocks) {
      (0,_wordpress_a11y__WEBPACK_IMPORTED_MODULE_5__.speak)('Navigation sidebar selected menu items have loaded.');
    }
  }, [isLoadingInnerBlocks, hasLoadedInnerBlocks]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edit-site-navigation-inspector"
  }, hasResolvedNavigationMenus && !hasNavigationMenus && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-navigation-inspector__empty-msg"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('There are no Navigation Menus.')), !hasResolvedNavigationMenus && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edit-site-navigation-inspector__placeholder"
  }), hasResolvedNavigationMenus && hasMoreThanOneNavigationMenu && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    "aria-controls": // aria-controls should only apply when referenced element is in DOM
    hasLoadedInnerBlocks ? navMenuListId : undefined,
    value: currentMenuId || defaultNavigationMenuId,
    options: options,
    onChange: newMenuId => setCurrentMenuId(Number(newMenuId))
  }), isLoading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edit-site-navigation-inspector__placeholder is-child"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edit-site-navigation-inspector__placeholder is-child"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edit-site-navigation-inspector__placeholder is-child"
  })), hasInnerBlocks && !isLoading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.BlockEditorProvider, {
    value: publishedInnerBlocks,
    onChange: onChange,
    onInput: onInput
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_navigation_menu__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: navMenuListId,
    innerBlocks: publishedInnerBlocks
  })), !hasInnerBlocks && !isLoading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-navigation-inspector__empty-msg"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Navigation Menu is empty.')));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/sidebar/navigation-menu-sidebar/navigation-menu.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/sidebar/navigation-menu-sidebar/navigation-menu.js ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ NavigationMenu; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);


/**
 * WordPress dependencies
 */



const ALLOWED_BLOCKS = {
  'core/navigation': ['core/navigation-link', 'core/search', 'core/social-links', 'core/page-list', 'core/spacer', 'core/home-link', 'core/site-title', 'core/site-logo', 'core/navigation-submenu'],
  'core/social-links': ['core/social-link'],
  'core/navigation-submenu': ['core/navigation-link', 'core/navigation-submenu'],
  'core/navigation-link': ['core/navigation-link', 'core/navigation-submenu']
};
function NavigationMenu(_ref) {
  let {
    innerBlocks,
    id
  } = _ref;
  const {
    updateBlockListSettings
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.store); //TODO: Block settings are normally updated as a side effect of rendering InnerBlocks in BlockList
  //Think through a better way of doing this, possible with adding allowed blocks to block library metadata

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    updateBlockListSettings('', {
      allowedBlocks: ALLOWED_BLOCKS['core/navigation']
    });
    innerBlocks.forEach(block => {
      if (ALLOWED_BLOCKS[block.name]) {
        updateBlockListSettings(block.clientId, {
          allowedBlocks: ALLOWED_BLOCKS[block.name]
        });
      }
    });
  }, [updateBlockListSettings, innerBlocks]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.__experimentalListView, {
    id: id,
    showNestedBlocks: true,
    expandNested: false,
    __experimentalFeatures: true,
    __experimentalPersistentListViewFeatures: true
  }));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/sidebar/plugin-sidebar/index.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/sidebar/plugin-sidebar/index.js ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PluginSidebarEditSite; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/interface */ "./node_modules/@wordpress/interface/build-module/index.js");



/**
 * WordPress dependencies
 */

/**
 * Renders a sidebar when activated. The contents within the `PluginSidebar` will appear as content within the sidebar.
 * It also automatically renders a corresponding `PluginSidebarMenuItem` component when `isPinnable` flag is set to `true`.
 * If you wish to display the sidebar, you can with use the `PluginSidebarMoreMenuItem` component or the `wp.data.dispatch` API:
 *
 * ```js
 * wp.data.dispatch( 'core/edit-site' ).openGeneralSidebar( 'plugin-name/sidebar-name' );
 * ```
 *
 * @see PluginSidebarMoreMenuItem
 *
 * @param {Object}                props                                 Element props.
 * @param {string}                props.name                            A string identifying the sidebar. Must be unique for every sidebar registered within the scope of your plugin.
 * @param {string}                [props.className]                     An optional class name added to the sidebar body.
 * @param {string}                props.title                           Title displayed at the top of the sidebar.
 * @param {boolean}               [props.isPinnable=true]               Whether to allow to pin sidebar to the toolbar. When set to `true` it also automatically renders a corresponding menu item.
 * @param {WPBlockTypeIconRender} [props.icon=inherits from the plugin] The [Dashicon](https://developer.wordpress.org/resource/dashicons/) icon slug string, or an SVG WP element, to be rendered when the sidebar is pinned to toolbar.
 *
 * @example
 * ```js
 * // Using ES5 syntax
 * var __ = wp.i18n.__;
 * var el = wp.element.createElement;
 * var PanelBody = wp.components.PanelBody;
 * var PluginSidebar = wp.editSite.PluginSidebar;
 * var moreIcon = wp.element.createElement( 'svg' ); //... svg element.
 *
 * function MyPluginSidebar() {
 * 	return el(
 * 			PluginSidebar,
 * 			{
 * 				name: 'my-sidebar',
 * 				title: 'My sidebar title',
 * 				icon: moreIcon,
 * 			},
 * 			el(
 * 				PanelBody,
 * 				{},
 * 				__( 'My sidebar content' )
 * 			)
 * 	);
 * }
 * ```
 *
 * @example
 * ```jsx
 * // Using ESNext syntax
 * import { __ } from '@wordpress/i18n';
 * import { PanelBody } from '@wordpress/components';
 * import { PluginSidebar } from '@wordpress/edit-site';
 * import { more } from '@wordpress/icons';
 *
 * const MyPluginSidebar = () => (
 * 	<PluginSidebar
 * 		name="my-sidebar"
 * 		title="My sidebar title"
 * 		icon={ more }
 * 	>
 * 		<PanelBody>
 * 			{ __( 'My sidebar content' ) }
 * 		</PanelBody>
 * 	</PluginSidebar>
 * );
 * ```
 */

function PluginSidebarEditSite(_ref) {
  let {
    className,
    ...props
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_interface__WEBPACK_IMPORTED_MODULE_2__.ComplementaryArea, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    panelClassName: className,
    className: "edit-site-sidebar",
    scope: "core/edit-site"
  }, props));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/sidebar/settings-header/index.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/sidebar/settings-header/index.js ***!
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
/* harmony import */ var _wordpress_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/interface */ "./node_modules/@wordpress/interface/build-module/index.js");
/* harmony import */ var _store_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/constants */ "./node_modules/@wordpress/edit-site/build-module/store/constants.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants */ "./node_modules/@wordpress/edit-site/build-module/components/sidebar/constants.js");


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */




const SettingsHeader = _ref => {
  let {
    sidebarName
  } = _ref;
  const {
    enableComplementaryArea
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_wordpress_interface__WEBPACK_IMPORTED_MODULE_4__.store);

  const openTemplateSettings = () => enableComplementaryArea(_store_constants__WEBPACK_IMPORTED_MODULE_5__.STORE_NAME, _constants__WEBPACK_IMPORTED_MODULE_6__.SIDEBAR_TEMPLATE);

  const openBlockSettings = () => enableComplementaryArea(_store_constants__WEBPACK_IMPORTED_MODULE_5__.STORE_NAME, _constants__WEBPACK_IMPORTED_MODULE_6__.SIDEBAR_BLOCK);

  const [templateAriaLabel, templateActiveClass] = sidebarName === _constants__WEBPACK_IMPORTED_MODULE_6__.SIDEBAR_TEMPLATE ? // translators: ARIA label for the Template sidebar tab, selected.
  [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Template (selected)'), 'is-active'] : // translators: ARIA label for the Template Settings Sidebar tab, not selected.
  [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Template'), ''];
  const [blockAriaLabel, blockActiveClass] = sidebarName === _constants__WEBPACK_IMPORTED_MODULE_6__.SIDEBAR_BLOCK ? // translators: ARIA label for the Block Settings Sidebar tab, selected.
  [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Block (selected)'), 'is-active'] : // translators: ARIA label for the Block Settings Sidebar tab, not selected.
  [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Block'), ''];
  /* Use a list so screen readers will announce how many tabs there are. */

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    onClick: openTemplateSettings,
    className: `edit-site-sidebar__panel-tab ${templateActiveClass}`,
    "aria-label": templateAriaLabel // translators: Data label for the Template Settings Sidebar tab.
    ,
    "data-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Template')
  }, // translators: Text label for the Template Settings Sidebar tab.
  (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Template'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    onClick: openBlockSettings,
    className: `edit-site-sidebar__panel-tab ${blockActiveClass}`,
    "aria-label": blockAriaLabel // translators: Data label for the Block Settings Sidebar tab.
    ,
    "data-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Block')
  }, // translators: Text label for the Block Settings Sidebar tab.
  (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Block'))));
};

/* harmony default export */ __webpack_exports__["default"] = (SettingsHeader);


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/sidebar/template-card/index.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/sidebar/template-card/index.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TemplateCard; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store */ "./node_modules/@wordpress/edit-site/build-module/store/index.js");
/* harmony import */ var _template_areas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./template-areas */ "./node_modules/@wordpress/edit-site/build-module/components/sidebar/template-card/template-areas.js");


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



function TemplateCard() {
  const {
    title,
    description,
    icon
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    const {
      getEditedPostType,
      getEditedPostId
    } = select(_store__WEBPACK_IMPORTED_MODULE_5__.store);
    const {
      getEntityRecord
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.store);
    const {
      __experimentalGetTemplateInfo: getTemplateInfo
    } = select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.store);
    const postType = getEditedPostType();
    const postId = getEditedPostId();
    const record = getEntityRecord('postType', postType, postId);
    const info = record ? getTemplateInfo(record) : {};
    return info;
  }, []);

  if (!title && !description) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edit-site-template-card"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
    className: "edit-site-template-card__icon",
    icon: icon
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edit-site-template-card__content"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "edit-site-template-card__title"
  }, title), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edit-site-template-card__description"
  }, description), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_template_areas__WEBPACK_IMPORTED_MODULE_6__["default"], null)));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/sidebar/template-card/template-areas.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/sidebar/template-card/template-areas.js ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TemplateAreas; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store */ "./node_modules/@wordpress/edit-site/build-module/store/index.js");


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



function TemplateAreaItem(_ref) {
  let {
    area,
    clientId
  } = _ref;
  const {
    selectBlock,
    toggleBlockHighlight
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.store);
  const templatePartArea = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    const defaultAreas = select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.store).__experimentalGetDefaultTemplatePartAreas();

    return defaultAreas.find(defaultArea => defaultArea.area === area);
  }, [area]);

  const highlightBlock = () => toggleBlockHighlight(clientId, true);

  const cancelHighlightBlock = () => toggleBlockHighlight(clientId, false);

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: "edit-site-template-card__template-areas-item",
    icon: templatePartArea === null || templatePartArea === void 0 ? void 0 : templatePartArea.icon,
    onMouseOver: highlightBlock,
    onMouseLeave: cancelHighlightBlock,
    onFocus: highlightBlock,
    onBlur: cancelHighlightBlock,
    onClick: () => {
      selectBlock(clientId);
    }
  }, templatePartArea === null || templatePartArea === void 0 ? void 0 : templatePartArea.label);
}

function TemplateAreas() {
  const templateParts = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => select(_store__WEBPACK_IMPORTED_MODULE_6__.store).getCurrentTemplateTemplateParts(), []);

  if (!templateParts.length) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    className: "edit-site-template-card__template-areas"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalHeading, {
    level: 3,
    className: "edit-site-template-card__template-areas-title"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Areas')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "edit-site-template-card__template-areas-list"
  }, templateParts.map(_ref2 => {
    let {
      templatePart,
      block
    } = _ref2;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      key: templatePart.slug
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TemplateAreaItem, {
      area: templatePart.area,
      clientId: block.clientId
    }));
  })));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/template-details/edit-template-title.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/template-details/edit-template-title.js ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EditTemplateTitle; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__);


/**
 * WordPress dependencies
 */



function EditTemplateTitle(_ref) {
  let {
    template
  } = _ref;
  const [title, setTitle] = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.useEntityProp)('postType', template.type, 'title', template.id);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Title'),
    value: title,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Give the template a title that indicates its purpose, e.g. "Full Width".'),
    onChange: newTitle => {
      setTitle(newTitle || template.slug);
    }
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/template-details/index.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/template-details/index.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TemplateDetails; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_is_template_revertable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/is-template-revertable */ "./node_modules/@wordpress/edit-site/build-module/utils/is-template-revertable.js");
/* harmony import */ var _navigation_sidebar_navigation_panel_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../navigation-sidebar/navigation-panel/constants */ "./node_modules/@wordpress/edit-site/build-module/components/navigation-sidebar/navigation-panel/constants.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/edit-site/build-module/store/index.js");
/* harmony import */ var _template_areas__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./template-areas */ "./node_modules/@wordpress/edit-site/build-module/components/template-details/template-areas.js");
/* harmony import */ var _edit_template_title__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./edit-template-title */ "./node_modules/@wordpress/edit-site/build-module/components/template-details/edit-template-title.js");
/* harmony import */ var _routes_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../routes/link */ "./node_modules/@wordpress/edit-site/build-module/components/routes/link.js");



/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */







function TemplateDetails(_ref) {
  let {
    template,
    onClose
  } = _ref;
  const {
    title,
    description
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__.store).__experimentalGetTemplateInfo(template), []);
  const {
    revertTemplate
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_8__.store);
  const templateSubMenu = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if ((template === null || template === void 0 ? void 0 : template.type) === 'wp_template') {
      return {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('templates'),
        menu: _navigation_sidebar_navigation_panel_constants__WEBPACK_IMPORTED_MODULE_7__.MENU_TEMPLATES
      };
    }

    return _navigation_sidebar_navigation_panel_constants__WEBPACK_IMPORTED_MODULE_7__.TEMPLATE_PARTS_SUB_MENUS.find(_ref2 => {
      let {
        area
      } = _ref2;
      return area === (template === null || template === void 0 ? void 0 : template.area);
    });
  }, [template]);
  const browseAllLinkProps = (0,_routes_link__WEBPACK_IMPORTED_MODULE_11__.useLink)({
    // TODO: We should update this to filter by template part's areas as well.
    postType: template.type,
    postId: undefined
  }); // Only user-created and non-default templates can change the name.

  const canEditTitle = template.is_custom && !template.has_theme_file;

  if (!template) {
    return null;
  }

  const revert = () => {
    revertTemplate(template);
    onClose();
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "edit-site-template-details"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "edit-site-template-details__group"
  }, canEditTitle ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_edit_template_title__WEBPACK_IMPORTED_MODULE_10__["default"], {
    template: template
  }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalHeading, {
    level: 4,
    weight: 600,
    className: "edit-site-template-details__title"
  }, title), description && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalText, {
    size: "body",
    className: "edit-site-template-details__description",
    as: "p"
  }, description)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_template_areas__WEBPACK_IMPORTED_MODULE_9__["default"], {
    closeTemplateDetailsDropdown: onClose
  }), (0,_utils_is_template_revertable__WEBPACK_IMPORTED_MODULE_6__["default"])(template) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.MenuGroup, {
    className: "edit-site-template-details__group edit-site-template-details__revert"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
    className: "edit-site-template-details__revert-button",
    info: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Restore template to default state'),
    onClick: revert
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Clear customizations'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "edit-site-template-details__show-all-button"
  }, browseAllLinkProps), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)(
  /* translators: the template part's area name ("Headers", "Sidebars") or "templates". */
  (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Browse all %s'), templateSubMenu.title)));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/template-details/template-areas.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/template-details/template-areas.js ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TemplateAreas; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/more-vertical.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/edit-site/build-module/store/index.js");
/* harmony import */ var _utils_is_template_revertable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/is-template-revertable */ "./node_modules/@wordpress/edit-site/build-module/utils/is-template-revertable.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../routes */ "./node_modules/@wordpress/edit-site/build-module/components/routes/index.js");
/* harmony import */ var _routes_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../routes/link */ "./node_modules/@wordpress/edit-site/build-module/components/routes/link.js");



/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */






function TemplatePartItemMore(_ref) {
  var _templatePart$title;

  let {
    onClose,
    templatePart,
    closeTemplateDetailsDropdown
  } = _ref;
  const {
    revertTemplate
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_7__.store);
  const {
    params
  } = (0,_routes__WEBPACK_IMPORTED_MODULE_9__.useLocation)();
  const editLinkProps = (0,_routes_link__WEBPACK_IMPORTED_MODULE_10__.useLink)({
    postId: templatePart.id,
    postType: templatePart.type
  }, {
    fromTemplateId: params.postId
  });

  function editTemplatePart(event) {
    editLinkProps.onClick(event);
    onClose();
    closeTemplateDetailsDropdown();
  }

  function clearCustomizations() {
    revertTemplate(templatePart);
    onClose();
    closeTemplateDetailsDropdown();
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.MenuGroup, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.MenuItem, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, editLinkProps, {
    onClick: editTemplatePart
  }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)(
  /* translators: %s: template part title */
  (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Edit %s'), (_templatePart$title = templatePart.title) === null || _templatePart$title === void 0 ? void 0 : _templatePart$title.rendered))), (0,_utils_is_template_revertable__WEBPACK_IMPORTED_MODULE_8__["default"])(templatePart) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.MenuGroup, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
    info: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Restore template to default state'),
    onClick: clearCustomizations
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Clear customizations'))));
}

function TemplatePartItem(_ref2) {
  let {
    templatePart,
    clientId,
    closeTemplateDetailsDropdown
  } = _ref2;
  const {
    selectBlock,
    toggleBlockHighlight
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.store);
  const templatePartArea = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    const defaultAreas = select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__.store).__experimentalGetDefaultTemplatePartAreas();

    return defaultAreas.find(defaultArea => defaultArea.area === templatePart.area);
  }, [templatePart.area]);

  const highlightBlock = () => toggleBlockHighlight(clientId, true);

  const cancelHighlightBlock = () => toggleBlockHighlight(clientId, false);

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    role: "menuitem",
    className: "edit-site-template-details__template-areas-item"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
    role: "button",
    icon: templatePartArea === null || templatePartArea === void 0 ? void 0 : templatePartArea.icon,
    iconPosition: "left",
    onClick: () => {
      selectBlock(clientId);
    },
    onMouseOver: highlightBlock,
    onMouseLeave: cancelHighlightBlock,
    onFocus: highlightBlock,
    onBlur: cancelHighlightBlock
  }, templatePartArea === null || templatePartArea === void 0 ? void 0 : templatePartArea.label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.DropdownMenu, {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_11__["default"],
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('More options'),
    className: "edit-site-template-details__template-areas-item-more"
  }, _ref3 => {
    let {
      onClose
    } = _ref3;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TemplatePartItemMore, {
      onClose: onClose,
      templatePart: templatePart,
      closeTemplateDetailsDropdown: closeTemplateDetailsDropdown
    });
  }));
}

function TemplateAreas(_ref4) {
  let {
    closeTemplateDetailsDropdown
  } = _ref4;
  const templateParts = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => select(_store__WEBPACK_IMPORTED_MODULE_7__.store).getCurrentTemplateTemplateParts(), []);

  if (!templateParts.length) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.MenuGroup, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Areas'),
    className: "edit-site-template-details__group edit-site-template-details__template-areas"
  }, templateParts.map(_ref5 => {
    let {
      templatePart,
      block
    } = _ref5;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TemplatePartItem, {
      key: templatePart.slug,
      clientId: block.clientId,
      templatePart: templatePart,
      closeTemplateDetailsDropdown: closeTemplateDetailsDropdown
    });
  }));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/template-part-converter/convert-to-regular.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/template-part-converter/convert-to-regular.js ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ConvertToRegularBlocks; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);


/**
 * WordPress dependencies
 */




function ConvertToRegularBlocks(_ref) {
  let {
    clientId
  } = _ref;
  const {
    getBlocks
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.store);
  const {
    replaceBlocks
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.store);
  const canRemove = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.store).canRemoveBlock(clientId), [clientId]);

  if (!canRemove) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockSettingsMenuControls, null, _ref2 => {
    let {
      onClose
    } = _ref2;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
      onClick: () => {
        replaceBlocks(clientId, getBlocks(clientId));
        onClose();
      }
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Detach blocks from template part'));
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/template-part-converter/convert-to-template-part.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/template-part-converter/convert-to-template-part.js ***!
  \***********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ConvertToTemplatePart; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _create_template_part_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../create-template-part-modal */ "./node_modules/@wordpress/edit-site/build-module/components/create-template-part-modal/index.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */









/**
 * Internal dependencies
 */


function ConvertToTemplatePart(_ref) {
  let {
    clientIds,
    blocks
  } = _ref;
  const [isModalOpen, setIsModalOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    replaceBlocks
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.store);
  const {
    saveEntityRecord
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_7__.store);
  const {
    createSuccessNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_8__.store);

  const onConvert = async _ref2 => {
    let {
      title,
      area
    } = _ref2;
    // Currently template parts only allow latin chars.
    // Fallback slug will receive suffix by default.
    const cleanSlug = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.kebabCase)(title).replace(/[^\w-]+/g, '') || 'wp-custom-part';
    const templatePart = await saveEntityRecord('postType', 'wp_template_part', {
      slug: cleanSlug,
      title,
      content: (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__.serialize)(blocks),
      area
    });
    replaceBlocks(clientIds, (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__.createBlock)('core/template-part', {
      slug: templatePart.slug,
      theme: templatePart.theme
    }));
    createSuccessNotice((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Template part created.'), {
      type: 'snackbar'
    }); // The modal and this component will be unmounted because of `replaceBlocks` above,
    // so no need to call `closeModal` or `onClose`.
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockSettingsMenuControls, null, () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
    onClick: () => {
      setIsModalOpen(true);
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Make template part'))), isModalOpen && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_create_template_part_modal__WEBPACK_IMPORTED_MODULE_9__["default"], {
    closeModal: () => {
      setIsModalOpen(false);
    },
    onCreate: onConvert
  }));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/template-part-converter/index.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/template-part-converter/index.js ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TemplatePartConverter; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _convert_to_regular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./convert-to-regular */ "./node_modules/@wordpress/edit-site/build-module/components/template-part-converter/convert-to-regular.js");
/* harmony import */ var _convert_to_template_part__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./convert-to-template-part */ "./node_modules/@wordpress/edit-site/build-module/components/template-part-converter/convert-to-template-part.js");


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



function TemplatePartConverter() {
  var _blocks$;

  const {
    clientIds,
    blocks
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    const {
      getSelectedBlockClientIds,
      getBlocksByClientId
    } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.store);
    const selectedBlockClientIds = getSelectedBlockClientIds();
    return {
      clientIds: selectedBlockClientIds,
      blocks: getBlocksByClientId(selectedBlockClientIds)
    };
  }, []); // Allow converting a single template part to standard blocks.

  if (blocks.length === 1 && ((_blocks$ = blocks[0]) === null || _blocks$ === void 0 ? void 0 : _blocks$.name) === 'core/template-part') {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_convert_to_regular__WEBPACK_IMPORTED_MODULE_3__["default"], {
      clientId: clientIds[0]
    });
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_convert_to_template_part__WEBPACK_IMPORTED_MODULE_4__["default"], {
    clientIds: clientIds,
    blocks: blocks
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/url-query-controller/index.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/url-query-controller/index.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ URLQueryController; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes */ "./node_modules/@wordpress/edit-site/build-module/components/routes/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/edit-site/build-module/store/index.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



function URLQueryController() {
  const {
    setTemplate,
    setTemplatePart,
    setPage
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_3__.store);
  const {
    params: {
      postId,
      postType
    }
  } = (0,_routes__WEBPACK_IMPORTED_MODULE_2__.useLocation)(); // Set correct entity on page navigation.

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if ('page' === postType || 'post' === postType) {
      setPage({
        context: {
          postType,
          postId
        }
      }); // Resolves correct template based on ID.
    } else if ('wp_template' === postType) {
      setTemplate(postId);
    } else if ('wp_template_part' === postType) {
      setTemplatePart(postId);
    }
  }, [postId, postType]);
  return null;
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/welcome-guide/editor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/welcome-guide/editor.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ WelcomeGuideEditor; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./image */ "./node_modules/@wordpress/edit-site/build-module/components/welcome-guide/image.js");


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


function WelcomeGuideEditor() {
  const {
    toggle
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_4__.store);
  const isActive = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => !!select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_4__.store).get('core/edit-site', 'welcomeGuide'), []);

  if (!isActive) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Guide, {
    className: "edit-site-welcome-guide",
    contentLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Welcome to the site editor'),
    finishButtonText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Get Started'),
    onFinish: () => toggle('core/edit-site', 'welcomeGuide'),
    pages: [{
      image: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_image__WEBPACK_IMPORTED_MODULE_5__["default"], {
        nonAnimatedSrc: "https://s.w.org/images/block-editor/edit-your-site.svg?1",
        animatedSrc: "https://s.w.org/images/block-editor/edit-your-site.gif?1"
      }),
      content: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
        className: "edit-site-welcome-guide__heading"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Edit your site')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
        className: "edit-site-welcome-guide__text"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Design everything on your site — from the header right down to the footer — using blocks.')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
        className: "edit-site-welcome-guide__text"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createInterpolateElement)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Click <StylesIconImage /> to start designing your blocks, and choose your typography, layout, and colors.'), {
        StylesIconImage: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
          alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('styles'),
          src: "data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 4c-4.4 0-8 3.6-8 8v.1c0 4.1 3.2 7.5 7.2 7.9h.8c4.4 0 8-3.6 8-8s-3.6-8-8-8zm0 15V5c3.9 0 7 3.1 7 7s-3.1 7-7 7z' fill='%231E1E1E'/%3E%3C/svg%3E%0A"
        })
      })))
    }]
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/welcome-guide/image.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/welcome-guide/image.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ WelcomeGuideImage; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

function WelcomeGuideImage(_ref) {
  let {
    nonAnimatedSrc,
    animatedSrc
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("picture", {
    className: "edit-site-welcome-guide__image"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
    srcSet: nonAnimatedSrc,
    media: "(prefers-reduced-motion: reduce)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: animatedSrc,
    width: "312",
    height: "240",
    alt: ""
  }));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/welcome-guide/index.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/welcome-guide/index.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ WelcomeGuide; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor */ "./node_modules/@wordpress/edit-site/build-module/components/welcome-guide/editor.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./node_modules/@wordpress/edit-site/build-module/components/welcome-guide/styles.js");


/**
 * Internal dependencies
 */


function WelcomeGuide() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_editor__WEBPACK_IMPORTED_MODULE_1__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_styles__WEBPACK_IMPORTED_MODULE_2__["default"], null));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/components/welcome-guide/styles.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/components/welcome-guide/styles.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ WelcomeGuideStyles; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/interface */ "./node_modules/@wordpress/interface/build-module/index.js");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./image */ "./node_modules/@wordpress/edit-site/build-module/components/welcome-guide/image.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/edit-site/build-module/store/index.js");


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



function WelcomeGuideStyles() {
  const {
    toggle
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_5__.store);
  const {
    isActive,
    isStylesOpen
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    const sidebar = select(_wordpress_interface__WEBPACK_IMPORTED_MODULE_4__.store).getActiveComplementaryArea(_store__WEBPACK_IMPORTED_MODULE_7__.store.name);
    return {
      isActive: !!select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_5__.store).get('core/edit-site', 'welcomeGuideStyles'),
      isStylesOpen: sidebar === 'edit-site/global-styles'
    };
  }, []);

  if (!isActive || !isStylesOpen) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Guide, {
    className: "edit-site-welcome-guide",
    contentLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Welcome to styles'),
    finishButtonText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Get Started'),
    onFinish: () => toggle('core/edit-site', 'welcomeGuideStyles'),
    pages: [{
      image: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_image__WEBPACK_IMPORTED_MODULE_6__["default"], {
        nonAnimatedSrc: "https://s.w.org/images/block-editor/welcome-to-styles.svg?1",
        animatedSrc: "https://s.w.org/images/block-editor/welcome-to-styles.gif?1"
      }),
      content: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
        className: "edit-site-welcome-guide__heading"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Welcome to Styles')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
        className: "edit-site-welcome-guide__text"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Tweak your site, or give it a whole new look! Get creative — how about a new color palette for your buttons, or choosing a new font? Take a look at what you can do here.')))
    }, {
      image: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_image__WEBPACK_IMPORTED_MODULE_6__["default"], {
        nonAnimatedSrc: "https://s.w.org/images/block-editor/set-the-design.svg?1",
        animatedSrc: "https://s.w.org/images/block-editor/set-the-design.gif?1"
      }),
      content: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
        className: "edit-site-welcome-guide__heading"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Set the design')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
        className: "edit-site-welcome-guide__text"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('You can customize your site as much as you like with different colors, typography, and layouts. Or if you prefer, just leave it up to your theme to handle! ')))
    }, {
      image: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_image__WEBPACK_IMPORTED_MODULE_6__["default"], {
        nonAnimatedSrc: "https://s.w.org/images/block-editor/personalize-blocks.svg?1",
        animatedSrc: "https://s.w.org/images/block-editor/personalize-blocks.gif?1"
      }),
      content: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
        className: "edit-site-welcome-guide__heading"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Personalize blocks')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
        className: "edit-site-welcome-guide__text"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('You can adjust your blocks to ensure a cohesive experience across your site — add your unique colors to a branded Button block, or adjust the Heading block to your preferred size.')))
    }, {
      image: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_image__WEBPACK_IMPORTED_MODULE_6__["default"], {
        nonAnimatedSrc: "https://s.w.org/images/block-editor/welcome-documentation.svg",
        animatedSrc: "https://s.w.org/images/block-editor/welcome-documentation.gif"
      }),
      content: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
        className: "edit-site-welcome-guide__heading"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Learn more')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
        className: "edit-site-welcome-guide__text"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('New to block themes and styling your site? '), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ExternalLink, {
        href: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('https://wordpress.org/support/article/styles-overview/')
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Here’s a detailed guide to learn how to make the most of it.'))))
    }]
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/hooks/components.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/hooks/components.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_media_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/media-utils */ "@wordpress/media-utils");
/* harmony import */ var _wordpress_media_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_media_utils__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('editor.MediaUpload', 'core/edit-site/components/media-upload', () => _wordpress_media_utils__WEBPACK_IMPORTED_MODULE_1__.MediaUpload);


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/hooks/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/hooks/index.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./node_modules/@wordpress/edit-site/build-module/hooks/components.js");
/**
 * Internal dependencies
 */



/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/store/actions.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/store/actions.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__experimentalSetPreviewDeviceType": function() { return /* binding */ __experimentalSetPreviewDeviceType; },
/* harmony export */   "addTemplate": function() { return /* binding */ addTemplate; },
/* harmony export */   "closeGeneralSidebar": function() { return /* binding */ closeGeneralSidebar; },
/* harmony export */   "openGeneralSidebar": function() { return /* binding */ openGeneralSidebar; },
/* harmony export */   "openNavigationPanelToMenu": function() { return /* binding */ openNavigationPanelToMenu; },
/* harmony export */   "removeTemplate": function() { return /* binding */ removeTemplate; },
/* harmony export */   "revertTemplate": function() { return /* binding */ revertTemplate; },
/* harmony export */   "setHomeTemplateId": function() { return /* binding */ setHomeTemplateId; },
/* harmony export */   "setIsInserterOpened": function() { return /* binding */ setIsInserterOpened; },
/* harmony export */   "setIsListViewOpened": function() { return /* binding */ setIsListViewOpened; },
/* harmony export */   "setIsNavigationPanelOpened": function() { return /* binding */ setIsNavigationPanelOpened; },
/* harmony export */   "setNavigationPanelActiveMenu": function() { return /* binding */ setNavigationPanelActiveMenu; },
/* harmony export */   "setPage": function() { return /* binding */ setPage; },
/* harmony export */   "setTemplate": function() { return /* binding */ setTemplate; },
/* harmony export */   "setTemplatePart": function() { return /* binding */ setTemplatePart; },
/* harmony export */   "switchEditorMode": function() { return /* binding */ switchEditorMode; },
/* harmony export */   "toggleFeature": function() { return /* binding */ toggleFeature; },
/* harmony export */   "updateSettings": function() { return /* binding */ updateSettings; }
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/deprecated */ "@wordpress/deprecated");
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_interface__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/interface */ "./node_modules/@wordpress/interface/build-module/index.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/a11y */ "@wordpress/a11y");
/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_a11y__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./constants */ "./node_modules/@wordpress/edit-site/build-module/store/constants.js");
/* harmony import */ var _utils_is_template_revertable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/is-template-revertable */ "./node_modules/@wordpress/edit-site/build-module/utils/is-template-revertable.js");
/**
 * WordPress dependencies
 */











/**
 * Internal dependencies
 */



/**
 * Dispatches an action that toggles a feature flag.
 *
 * @param {string} featureName Feature name.
 */

function toggleFeature(featureName) {
  return function (_ref) {
    let {
      registry
    } = _ref;
    _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_2___default()("select( 'core/edit-site' ).toggleFeature( featureName )", {
      since: '6.0',
      alternative: "select( 'core/preferences').toggle( 'core/edit-site', featureName )"
    });
    registry.dispatch(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_10__.store).toggle('core/edit-site', featureName);
  };
}
/**
 * Action that changes the width of the editing canvas.
 *
 * @param {string} deviceType
 *
 * @return {Object} Action object.
 */

function __experimentalSetPreviewDeviceType(deviceType) {
  return {
    type: 'SET_PREVIEW_DEVICE_TYPE',
    deviceType
  };
}
/**
 * Action that sets a template, optionally fetching it from REST API.
 *
 * @param {number} templateId   The template ID.
 * @param {string} templateSlug The template slug.
 * @return {Object} Action object.
 */

const setTemplate = (templateId, templateSlug) => async _ref2 => {
  let {
    dispatch,
    registry
  } = _ref2;

  if (!templateSlug) {
    const template = await registry.resolveSelect(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__.store).getEntityRecord('postType', 'wp_template', templateId);
    templateSlug = template === null || template === void 0 ? void 0 : template.slug;
  }

  dispatch({
    type: 'SET_TEMPLATE',
    templateId,
    page: {
      context: {
        templateSlug
      }
    }
  });
};
/**
 * Action that adds a new template and sets it as the current template.
 *
 * @param {Object} template The template.
 *
 * @return {Object} Action object used to set the current template.
 */

const addTemplate = template => async _ref3 => {
  let {
    dispatch,
    registry
  } = _ref3;
  const newTemplate = await registry.dispatch(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__.store).saveEntityRecord('postType', 'wp_template', template);

  if (template.content) {
    registry.dispatch(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__.store).editEntityRecord('postType', 'wp_template', newTemplate.id, {
      blocks: (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.parse)(template.content)
    }, {
      undoIgnore: true
    });
  }

  dispatch({
    type: 'SET_TEMPLATE',
    templateId: newTemplate.id,
    page: {
      context: {
        templateSlug: newTemplate.slug
      }
    }
  });
};
/**
 * Action that removes a template.
 *
 * @param {Object} template The template object.
 */

const removeTemplate = template => async _ref4 => {
  let {
    registry
  } = _ref4;

  try {
    await registry.dispatch(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__.store).deleteEntityRecord('postType', template.type, template.id, {
      force: true
    });
    const lastError = registry.select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__.store).getLastEntityDeleteError('postType', template.type, template.id);

    if (lastError) {
      throw lastError;
    }

    registry.dispatch(_wordpress_notices__WEBPACK_IMPORTED_MODULE_5__.store).createSuccessNotice((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.sprintf)(
    /* translators: The template/part's name. */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('"%s" deleted.'), template.title.rendered), {
      type: 'snackbar'
    });
  } catch (error) {
    const errorMessage = error.message && error.code !== 'unknown_error' ? error.message : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('An error occurred while deleting the template.');
    registry.dispatch(_wordpress_notices__WEBPACK_IMPORTED_MODULE_5__.store).createErrorNotice(errorMessage, {
      type: 'snackbar'
    });
  }
};
/**
 * Action that sets a template part.
 *
 * @param {string} templatePartId The template part ID.
 *
 * @return {Object} Action object.
 */

function setTemplatePart(templatePartId) {
  return {
    type: 'SET_TEMPLATE_PART',
    templatePartId
  };
}
/**
 * Action that sets the home template ID to the template ID of the page resolved
 * from a given path.
 *
 * @param {number} homeTemplateId The template ID for the homepage.
 */

function setHomeTemplateId(homeTemplateId) {
  return {
    type: 'SET_HOME_TEMPLATE',
    homeTemplateId
  };
}
/**
 * Resolves the template for a page and displays both. If no path is given, attempts
 * to use the postId to generate a path like `?p=${ postId }`.
 *
 * @param {Object} page         The page object.
 * @param {string} page.type    The page type.
 * @param {string} page.slug    The page slug.
 * @param {string} page.path    The page path.
 * @param {Object} page.context The page context.
 *
 * @return {number} The resolved template ID for the page route.
 */

const setPage = page => async _ref5 => {
  var _page$context;

  let {
    dispatch,
    registry
  } = _ref5;

  if (!page.path && (_page$context = page.context) !== null && _page$context !== void 0 && _page$context.postId) {
    const entity = await registry.resolveSelect(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__.store).getEntityRecord('postType', page.context.postType || 'post', page.context.postId); // If the entity is undefined for some reason, path will resolve to "/"

    page.path = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_3__.getPathAndQueryString)(entity === null || entity === void 0 ? void 0 : entity.link);
  }

  const template = await registry.resolveSelect(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__.store).__experimentalGetTemplateForLink(page.path);

  if (!template) {
    return;
  }

  dispatch({
    type: 'SET_PAGE',
    page: template.slug ? { ...page,
      context: { ...page.context,
        templateSlug: template.slug
      }
    } : page,
    templateId: template.id
  });
  return template.id;
};
/**
 * Action that sets the active navigation panel menu.
 *
 * @param {string} menu Menu prop of active menu.
 *
 * @return {Object} Action object.
 */

function setNavigationPanelActiveMenu(menu) {
  return {
    type: 'SET_NAVIGATION_PANEL_ACTIVE_MENU',
    menu
  };
}
/**
 * Opens the navigation panel and sets its active menu at the same time.
 *
 * @param {string} menu Identifies the menu to open.
 */

function openNavigationPanelToMenu(menu) {
  return {
    type: 'OPEN_NAVIGATION_PANEL_TO_MENU',
    menu
  };
}
/**
 * Sets whether the navigation panel should be open.
 *
 * @param {boolean} isOpen If true, opens the nav panel. If false, closes it. It
 *                         does not toggle the state, but sets it directly.
 */

function setIsNavigationPanelOpened(isOpen) {
  return {
    type: 'SET_IS_NAVIGATION_PANEL_OPENED',
    isOpen
  };
}
/**
 * Opens or closes the inserter.
 *
 * @param {boolean|Object} value                Whether the inserter should be
 *                                              opened (true) or closed (false).
 *                                              To specify an insertion point,
 *                                              use an object.
 * @param {string}         value.rootClientId   The root client ID to insert at.
 * @param {number}         value.insertionIndex The index to insert at.
 *
 * @return {Object} Action object.
 */

function setIsInserterOpened(value) {
  return {
    type: 'SET_IS_INSERTER_OPENED',
    value
  };
}
/**
 * Returns an action object used to update the settings.
 *
 * @param {Object} settings New settings.
 *
 * @return {Object} Action object.
 */

function updateSettings(settings) {
  return {
    type: 'UPDATE_SETTINGS',
    settings
  };
}
/**
 * Sets whether the list view panel should be open.
 *
 * @param {boolean} isOpen If true, opens the list view. If false, closes it.
 *                         It does not toggle the state, but sets it directly.
 */

function setIsListViewOpened(isOpen) {
  return {
    type: 'SET_IS_LIST_VIEW_OPENED',
    isOpen
  };
}
/**
 * Reverts a template to its original theme-provided file.
 *
 * @param {Object}  template            The template to revert.
 * @param {Object}  [options]
 * @param {boolean} [options.allowUndo] Whether to allow the user to undo
 *                                      reverting the template. Default true.
 */

const revertTemplate = function (template) {
  let {
    allowUndo = true
  } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return async _ref6 => {
    let {
      registry
    } = _ref6;

    if (!(0,_utils_is_template_revertable__WEBPACK_IMPORTED_MODULE_12__["default"])(template)) {
      registry.dispatch(_wordpress_notices__WEBPACK_IMPORTED_MODULE_5__.store).createErrorNotice((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('This template is not revertable.'), {
        type: 'snackbar'
      });
      return;
    }

    try {
      var _fileTemplate$content;

      const templateEntityConfig = registry.select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__.store).getEntityConfig('postType', template.type);

      if (!templateEntityConfig) {
        registry.dispatch(_wordpress_notices__WEBPACK_IMPORTED_MODULE_5__.store).createErrorNotice((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('The editor has encountered an unexpected error. Please reload.'), {
          type: 'snackbar'
        });
        return;
      }

      const fileTemplatePath = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_3__.addQueryArgs)(`${templateEntityConfig.baseURL}/${template.id}`, {
        context: 'edit',
        source: 'theme'
      });
      const fileTemplate = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
        path: fileTemplatePath
      });

      if (!fileTemplate) {
        registry.dispatch(_wordpress_notices__WEBPACK_IMPORTED_MODULE_5__.store).createErrorNotice((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('The editor has encountered an unexpected error. Please reload.'), {
          type: 'snackbar'
        });
        return;
      }

      const serializeBlocks = _ref7 => {
        let {
          blocks: blocksForSerialization = []
        } = _ref7;
        return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.__unstableSerializeAndClean)(blocksForSerialization);
      };

      const edited = registry.select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__.store).getEditedEntityRecord('postType', template.type, template.id); // We are fixing up the undo level here to make sure we can undo
      // the revert in the header toolbar correctly.

      registry.dispatch(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__.store).editEntityRecord('postType', template.type, template.id, {
        content: serializeBlocks,
        // Required to make the `undo` behave correctly.
        blocks: edited.blocks,
        // Required to revert the blocks in the editor.
        source: 'custom' // required to avoid turning the editor into a dirty state

      }, {
        undoIgnore: true // Required to merge this edit with the last undo level.

      });
      const blocks = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.parse)(fileTemplate === null || fileTemplate === void 0 ? void 0 : (_fileTemplate$content = fileTemplate.content) === null || _fileTemplate$content === void 0 ? void 0 : _fileTemplate$content.raw);
      registry.dispatch(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__.store).editEntityRecord('postType', template.type, fileTemplate.id, {
        content: serializeBlocks,
        blocks,
        source: 'theme'
      });

      if (allowUndo) {
        const undoRevert = () => {
          registry.dispatch(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__.store).editEntityRecord('postType', template.type, edited.id, {
            content: serializeBlocks,
            blocks: edited.blocks,
            source: 'custom'
          });
        };

        registry.dispatch(_wordpress_notices__WEBPACK_IMPORTED_MODULE_5__.store).createSuccessNotice((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Template reverted.'), {
          type: 'snackbar',
          actions: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Undo'),
            onClick: undoRevert
          }]
        });
      } else {
        registry.dispatch(_wordpress_notices__WEBPACK_IMPORTED_MODULE_5__.store).createSuccessNotice((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Template reverted.'));
      }
    } catch (error) {
      const errorMessage = error.message && error.code !== 'unknown_error' ? error.message : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Template revert failed. Please reload.');
      registry.dispatch(_wordpress_notices__WEBPACK_IMPORTED_MODULE_5__.store).createErrorNotice(errorMessage, {
        type: 'snackbar'
      });
    }
  };
};
/**
 * Action that opens an editor sidebar.
 *
 * @param {?string} name Sidebar name to be opened.
 */

const openGeneralSidebar = name => _ref8 => {
  let {
    registry
  } = _ref8;
  registry.dispatch(_wordpress_interface__WEBPACK_IMPORTED_MODULE_7__.store).enableComplementaryArea(_constants__WEBPACK_IMPORTED_MODULE_11__.STORE_NAME, name);
};
/**
 * Action that closes the sidebar.
 */

const closeGeneralSidebar = () => _ref9 => {
  let {
    registry
  } = _ref9;
  registry.dispatch(_wordpress_interface__WEBPACK_IMPORTED_MODULE_7__.store).disableComplementaryArea(_constants__WEBPACK_IMPORTED_MODULE_11__.STORE_NAME);
};
const switchEditorMode = mode => _ref10 => {
  let {
    registry
  } = _ref10;
  registry.dispatch('core/preferences').set('core/edit-site', 'editorMode', mode); // Unselect blocks when we switch to a non visual mode.

  if (mode !== 'visual') {
    registry.dispatch(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.store).clearSelectedBlock();
  }

  if (mode === 'visual') {
    (0,_wordpress_a11y__WEBPACK_IMPORTED_MODULE_9__.speak)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Visual editor selected'), 'assertive');
  } else if (mode === 'mosaic') {
    (0,_wordpress_a11y__WEBPACK_IMPORTED_MODULE_9__.speak)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Mosaic view selected'), 'assertive');
  }
};


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/store/constants.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/store/constants.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STORE_NAME": function() { return /* binding */ STORE_NAME; },
/* harmony export */   "TEMPLATE_PART_AREA_FOOTER": function() { return /* binding */ TEMPLATE_PART_AREA_FOOTER; },
/* harmony export */   "TEMPLATE_PART_AREA_GENERAL": function() { return /* binding */ TEMPLATE_PART_AREA_GENERAL; },
/* harmony export */   "TEMPLATE_PART_AREA_HEADER": function() { return /* binding */ TEMPLATE_PART_AREA_HEADER; },
/* harmony export */   "TEMPLATE_PART_AREA_SIDEBAR": function() { return /* binding */ TEMPLATE_PART_AREA_SIDEBAR; }
/* harmony export */ });
/**
 * The identifier for the data store.
 *
 * @type {string}
 */
const STORE_NAME = 'core/edit-site';
const TEMPLATE_PART_AREA_HEADER = 'header';
const TEMPLATE_PART_AREA_FOOTER = 'footer';
const TEMPLATE_PART_AREA_SIDEBAR = 'sidebar';
const TEMPLATE_PART_AREA_GENERAL = 'uncategorized';


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/store/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/store/index.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "store": function() { return /* binding */ store; },
/* harmony export */   "storeConfig": function() { return /* binding */ storeConfig; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./node_modules/@wordpress/edit-site/build-module/store/reducer.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./node_modules/@wordpress/edit-site/build-module/store/actions.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectors */ "./node_modules/@wordpress/edit-site/build-module/store/selectors.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./node_modules/@wordpress/edit-site/build-module/store/constants.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */





const storeConfig = {
  reducer: _reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  actions: _actions__WEBPACK_IMPORTED_MODULE_2__,
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_3__
};
const store = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createReduxStore)(_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME, storeConfig);
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.register)(store);


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/store/reducer.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/store/reducer.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "blockInserterPanel": function() { return /* binding */ blockInserterPanel; },
/* harmony export */   "deviceType": function() { return /* binding */ deviceType; },
/* harmony export */   "editedPost": function() { return /* binding */ editedPost; },
/* harmony export */   "homeTemplateId": function() { return /* binding */ homeTemplateId; },
/* harmony export */   "listViewPanel": function() { return /* binding */ listViewPanel; },
/* harmony export */   "navigationPanel": function() { return /* binding */ navigationPanel; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_navigation_sidebar_navigation_panel_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/navigation-sidebar/navigation-panel/constants */ "./node_modules/@wordpress/edit-site/build-module/components/navigation-sidebar/navigation-panel/constants.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


/**
 * Reducer returning the editing canvas device type.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function deviceType() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Desktop';
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SET_PREVIEW_DEVICE_TYPE':
      return action.deviceType;
  }

  return state;
}
/**
 * Reducer returning the settings.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function settings() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'UPDATE_SETTINGS':
      return { ...state,
        ...action.settings
      };
  }

  return state;
}
/**
 * Reducer keeping track of the currently edited Post Type,
 * Post Id and the context provided to fill the content of the block editor.
 *
 * @param {Object} state  Current edited post.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function editedPost() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SET_TEMPLATE':
    case 'SET_PAGE':
      return {
        type: 'wp_template',
        id: action.templateId,
        page: action.page
      };

    case 'SET_TEMPLATE_PART':
      return {
        type: 'wp_template_part',
        id: action.templatePartId
      };
  }

  return state;
}
/**
 * Reducer for information about the site's homepage.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function homeTemplateId(state, action) {
  switch (action.type) {
    case 'SET_HOME_TEMPLATE':
      return action.homeTemplateId;
  }

  return state;
}
/**
 * Reducer for information about the navigation panel, such as its active menu
 * and whether it should be opened or closed.
 *
 * Note: this reducer interacts with the inserter and list view panels reducers
 * to make sure that only one of the three panels is open at the same time.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 */

function navigationPanel() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    menu: _components_navigation_sidebar_navigation_panel_constants__WEBPACK_IMPORTED_MODULE_1__.MENU_ROOT,
    isOpen: false
  };
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SET_NAVIGATION_PANEL_ACTIVE_MENU':
      return { ...state,
        menu: action.menu
      };

    case 'OPEN_NAVIGATION_PANEL_TO_MENU':
      return { ...state,
        isOpen: true,
        menu: action.menu
      };

    case 'SET_IS_NAVIGATION_PANEL_OPENED':
      return { ...state,
        menu: !action.isOpen ? _components_navigation_sidebar_navigation_panel_constants__WEBPACK_IMPORTED_MODULE_1__.MENU_ROOT : state.menu,
        // Set menu to root when closing panel.
        isOpen: action.isOpen
      };

    case 'SET_IS_LIST_VIEW_OPENED':
      return { ...state,
        menu: state.isOpen && action.isOpen ? _components_navigation_sidebar_navigation_panel_constants__WEBPACK_IMPORTED_MODULE_1__.MENU_ROOT : state.menu,
        // Set menu to root when closing panel.
        isOpen: action.isOpen ? false : state.isOpen
      };

    case 'SET_IS_INSERTER_OPENED':
      return { ...state,
        menu: state.isOpen && action.value ? _components_navigation_sidebar_navigation_panel_constants__WEBPACK_IMPORTED_MODULE_1__.MENU_ROOT : state.menu,
        // Set menu to root when closing panel.
        isOpen: action.value ? false : state.isOpen
      };
  }

  return state;
}
/**
 * Reducer to set the block inserter panel open or closed.
 *
 * Note: this reducer interacts with the navigation and list view panels reducers
 * to make sure that only one of the three panels is open at the same time.
 *
 * @param {boolean|Object} state  Current state.
 * @param {Object}         action Dispatched action.
 */

function blockInserterPanel() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'OPEN_NAVIGATION_PANEL_TO_MENU':
      return false;

    case 'SET_IS_NAVIGATION_PANEL_OPENED':
    case 'SET_IS_LIST_VIEW_OPENED':
      return action.isOpen ? false : state;

    case 'SET_IS_INSERTER_OPENED':
      return action.value;
  }

  return state;
}
/**
 * Reducer to set the list view panel open or closed.
 *
 * Note: this reducer interacts with the navigation and inserter panels reducers
 * to make sure that only one of the three panels is open at the same time.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 */

function listViewPanel() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'OPEN_NAVIGATION_PANEL_TO_MENU':
      return false;

    case 'SET_IS_NAVIGATION_PANEL_OPENED':
      return action.isOpen ? false : state;

    case 'SET_IS_INSERTER_OPENED':
      return action.value ? false : state;

    case 'SET_IS_LIST_VIEW_OPENED':
      return action.isOpen;
  }

  return state;
}
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  deviceType,
  settings,
  editedPost,
  homeTemplateId,
  navigationPanel,
  blockInserterPanel,
  listViewPanel
}));


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/store/selectors.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/store/selectors.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__experimentalGetInsertionPoint": function() { return /* binding */ __experimentalGetInsertionPoint; },
/* harmony export */   "__experimentalGetPreviewDeviceType": function() { return /* binding */ __experimentalGetPreviewDeviceType; },
/* harmony export */   "__unstableGetPreference": function() { return /* binding */ __unstableGetPreference; },
/* harmony export */   "getCanUserCreateMedia": function() { return /* binding */ getCanUserCreateMedia; },
/* harmony export */   "getCurrentTemplateNavigationPanelSubMenu": function() { return /* binding */ getCurrentTemplateNavigationPanelSubMenu; },
/* harmony export */   "getCurrentTemplateTemplateParts": function() { return /* binding */ getCurrentTemplateTemplateParts; },
/* harmony export */   "getEditedPostId": function() { return /* binding */ getEditedPostId; },
/* harmony export */   "getEditedPostType": function() { return /* binding */ getEditedPostType; },
/* harmony export */   "getEditorMode": function() { return /* binding */ getEditorMode; },
/* harmony export */   "getHomeTemplateId": function() { return /* binding */ getHomeTemplateId; },
/* harmony export */   "getNavigationPanelActiveMenu": function() { return /* binding */ getNavigationPanelActiveMenu; },
/* harmony export */   "getPage": function() { return /* binding */ getPage; },
/* harmony export */   "getReusableBlocks": function() { return /* binding */ getReusableBlocks; },
/* harmony export */   "getSettings": function() { return /* binding */ getSettings; },
/* harmony export */   "isFeatureActive": function() { return /* binding */ isFeatureActive; },
/* harmony export */   "isInserterOpened": function() { return /* binding */ isInserterOpened; },
/* harmony export */   "isListViewOpened": function() { return /* binding */ isListViewOpened; },
/* harmony export */   "isNavigationOpened": function() { return /* binding */ isNavigationOpened; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rememo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rememo */ "./node_modules/rememo/es/rememo.js");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/deprecated */ "@wordpress/deprecated");
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_media_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/media-utils */ "@wordpress/media-utils");
/* harmony import */ var _wordpress_media_utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_media_utils__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_navigation_sidebar_navigation_panel_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/navigation-sidebar/navigation-panel/constants */ "./node_modules/@wordpress/edit-site/build-module/components/navigation-sidebar/navigation-panel/constants.js");
/* harmony import */ var _components_navigation_sidebar_navigation_panel_template_hierarchy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/navigation-sidebar/navigation-panel/template-hierarchy */ "./node_modules/@wordpress/edit-site/build-module/components/navigation-sidebar/navigation-panel/template-hierarchy.js");
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
 * @typedef {'template'|'template_type'} TemplateType Template type.
 */

/**
 * Helper for getting a preference from the preferences store.
 *
 * This is only present so that `getSettings` doesn't need to be made a
 * registry selector.
 *
 * It's unstable because the selector needs to be exported and so part of the
 * public API to work.
 */

const __unstableGetPreference = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.createRegistrySelector)(select => (state, name) => select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_8__.store).get('core/edit-site', name));
/**
 * Returns whether the given feature is enabled or not.
 *
 * @param {Object} state       Global application state.
 * @param {string} featureName Feature slug.
 *
 * @return {boolean} Is active.
 */

function isFeatureActive(state, featureName) {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_4___default()(`select( 'core/interface' ).isFeatureActive`, {
    since: '6.0',
    alternative: `select( 'core/preferences' ).get`
  });
  return !!__unstableGetPreference(state, featureName);
}
/**
 * Returns the current editing canvas device type.
 *
 * @param {Object} state Global application state.
 *
 * @return {string} Device type.
 */

function __experimentalGetPreviewDeviceType(state) {
  return state.deviceType;
}
/**
 * Returns whether the current user can create media or not.
 *
 * @param {Object} state Global application state.
 *
 * @return {Object} Whether the current user can create media or not.
 */

const getCanUserCreateMedia = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.createRegistrySelector)(select => () => select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store).canUser('create', 'media'));
/**
 * Returns any available Reusable blocks.
 *
 * @param {Object} state Global application state.
 *
 * @return {Array} The available reusable blocks.
 */

const getReusableBlocks = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.createRegistrySelector)(select => () => {
  const isWeb = _wordpress_element__WEBPACK_IMPORTED_MODULE_7__.Platform.OS === 'web';
  return isWeb ? select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store).getEntityRecords('postType', 'wp_block', {
    per_page: -1
  }) : [];
});
/**
 * Returns the settings, taking into account active features and permissions.
 *
 * @param {Object}   state             Global application state.
 * @param {Function} setIsInserterOpen Setter for the open state of the global inserter.
 *
 * @return {Object} Settings.
 */

const getSettings = (0,rememo__WEBPACK_IMPORTED_MODULE_1__["default"])((state, setIsInserterOpen) => {
  const settings = { ...state.settings,
    outlineMode: true,
    focusMode: !!__unstableGetPreference(state, 'focusMode'),
    hasFixedToolbar: !!__unstableGetPreference(state, 'fixedToolbar'),
    keepCaretInsideBlock: !!__unstableGetPreference(state, 'keepCaretInsideBlock'),
    showIconLabels: !!__unstableGetPreference(state, 'showIconLabels'),
    __experimentalSetIsInserterOpened: setIsInserterOpen,
    __experimentalReusableBlocks: getReusableBlocks(state),
    __experimentalPreferPatternsOnRoot: 'wp_template' === getEditedPostType(state)
  };
  const canUserCreateMedia = getCanUserCreateMedia(state);

  if (!canUserCreateMedia) {
    return settings;
  }

  settings.mediaUpload = _ref => {
    let {
      onError,
      ...rest
    } = _ref;
    (0,_wordpress_media_utils__WEBPACK_IMPORTED_MODULE_5__.uploadMedia)({
      wpAllowedMimeTypes: state.settings.allowedMimeTypes,
      onError: _ref2 => {
        let {
          message
        } = _ref2;
        return onError(message);
      },
      ...rest
    });
  };

  return settings;
}, state => [getCanUserCreateMedia(state), state.settings, __unstableGetPreference(state, 'focusMode'), __unstableGetPreference(state, 'fixedToolbar'), __unstableGetPreference(state, 'keepCaretInsideBlock'), __unstableGetPreference(state, 'showIconLabels'), getReusableBlocks(state), getEditedPostType(state)]);
/**
 * Returns the current home template ID.
 *
 * @param {Object} state Global application state.
 *
 * @return {number?} Home template ID.
 */

function getHomeTemplateId(state) {
  return state.homeTemplateId;
}

function getCurrentEditedPost(state) {
  return state.editedPost;
}
/**
 * Returns the current edited post type (wp_template or wp_template_part).
 *
 * @param {Object} state Global application state.
 *
 * @return {TemplateType?} Template type.
 */


function getEditedPostType(state) {
  return getCurrentEditedPost(state).type;
}
/**
 * Returns the ID of the currently edited template or template part.
 *
 * @param {Object} state Global application state.
 *
 * @return {string?} Post ID.
 */

function getEditedPostId(state) {
  return getCurrentEditedPost(state).id;
}
/**
 * Returns the current page object.
 *
 * @param {Object} state Global application state.
 *
 * @return {Object} Page.
 */

function getPage(state) {
  return getCurrentEditedPost(state).page;
}
/**
 * Returns the active menu in the navigation panel.
 *
 * @param {Object} state Global application state.
 *
 * @return {string} Active menu.
 */

function getNavigationPanelActiveMenu(state) {
  return state.navigationPanel.menu;
}
/**
 * Returns the current template or template part's corresponding
 * navigation panel's sub menu, to be used with `openNavigationPanelToMenu`.
 *
 * @param {Object} state Global application state.
 *
 * @return {string} The current template or template part's sub menu.
 */

const getCurrentTemplateNavigationPanelSubMenu = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.createRegistrySelector)(select => state => {
  const templateType = getEditedPostType(state);
  const templateId = getEditedPostId(state);
  const template = templateId ? select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store).getEntityRecord('postType', templateType, templateId) : null;

  if (!template) {
    return _components_navigation_sidebar_navigation_panel_constants__WEBPACK_IMPORTED_MODULE_9__.MENU_ROOT;
  }

  if ('wp_template_part' === templateType) {
    var _TEMPLATE_PARTS_SUB_M;

    return ((_TEMPLATE_PARTS_SUB_M = _components_navigation_sidebar_navigation_panel_constants__WEBPACK_IMPORTED_MODULE_9__.TEMPLATE_PARTS_SUB_MENUS.find(submenu => submenu.area === (template === null || template === void 0 ? void 0 : template.area))) === null || _TEMPLATE_PARTS_SUB_M === void 0 ? void 0 : _TEMPLATE_PARTS_SUB_M.menu) || _components_navigation_sidebar_navigation_panel_constants__WEBPACK_IMPORTED_MODULE_9__.MENU_TEMPLATE_PARTS;
  }

  const templates = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store).getEntityRecords('postType', 'wp_template');
  const showOnFront = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store).getEditedEntityRecord('root', 'site').show_on_front;

  if ((0,_components_navigation_sidebar_navigation_panel_template_hierarchy__WEBPACK_IMPORTED_MODULE_10__.isTemplateSuperseded)(template.slug, (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(templates, 'slug'), showOnFront)) {
    return _components_navigation_sidebar_navigation_panel_constants__WEBPACK_IMPORTED_MODULE_9__.MENU_TEMPLATES_UNUSED;
  }

  return (0,_components_navigation_sidebar_navigation_panel_template_hierarchy__WEBPACK_IMPORTED_MODULE_10__.getTemplateLocation)(template.slug);
});
/**
 * Returns the current opened/closed state of the navigation panel.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} True if the navigation panel should be open; false if closed.
 */

function isNavigationOpened(state) {
  return state.navigationPanel.isOpen;
}
/**
 * Returns the current opened/closed state of the inserter panel.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} True if the inserter panel should be open; false if closed.
 */

function isInserterOpened(state) {
  return !!state.blockInserterPanel;
}
/**
 * Get the insertion point for the inserter.
 *
 * @param {Object} state Global application state.
 *
 * @return {Object} The root client ID, index to insert at and starting filter value.
 */

function __experimentalGetInsertionPoint(state) {
  const {
    rootClientId,
    insertionIndex,
    filterValue
  } = state.blockInserterPanel;
  return {
    rootClientId,
    insertionIndex,
    filterValue
  };
}
/**
 * Returns the current opened/closed state of the list view panel.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} True if the list view panel should be open; false if closed.
 */

function isListViewOpened(state) {
  return state.listViewPanel;
}
/**
 * Returns the template parts and their blocks for the current edited template.
 *
 * @param {Object} state Global application state.
 * @return {Array} Template parts and their blocks in an array.
 */

const getCurrentTemplateTemplateParts = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.createRegistrySelector)(select => state => {
  var _template$blocks;

  const templateType = getEditedPostType(state);
  const templateId = getEditedPostId(state);
  const template = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store).getEditedEntityRecord('postType', templateType, templateId);
  const templateParts = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store).getEntityRecords('postType', 'wp_template_part', {
    per_page: -1
  });
  const templatePartsById = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.keyBy)(templateParts, templatePart => templatePart.id);
  return ((_template$blocks = template.blocks) !== null && _template$blocks !== void 0 ? _template$blocks : []).filter(block => (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__.isTemplatePart)(block)).map(block => {
    const {
      attributes: {
        theme,
        slug
      }
    } = block;
    const templatePartId = `${theme}//${slug}`;
    const templatePart = templatePartsById[templatePartId];
    return {
      templatePart,
      block
    };
  }).filter(_ref3 => {
    let {
      templatePart
    } = _ref3;
    return !!templatePart;
  });
});
/**
 * Returns the current editing mode.
 *
 * @param {Object} state Global application state.
 *
 * @return {string} Editing mode.
 */

function getEditorMode(state) {
  return __unstableGetPreference(state, 'editorMode');
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/utils/get-is-list-page.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/utils/get-is-list-page.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getIsListPage; }
/* harmony export */ });
/**
 * Returns if the params match the list page route.
 *
 * @param {Object} params          The search params.
 * @param {string} params.postId   The post ID.
 * @param {string} params.postType The post type.
 * @return {boolean} Is list page or not.
 */
function getIsListPage(_ref) {
  let {
    postId,
    postType
  } = _ref;
  return !!(!postId && postType);
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/utils/history.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/utils/history.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! history */ "./node_modules/history/index.js");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


const history = (0,history__WEBPACK_IMPORTED_MODULE_1__.createBrowserHistory)();
const originalHistoryPush = history.push;
const originalHistoryReplace = history.replace;

function push(params, state) {
  return originalHistoryPush.call(history, (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_0__.addQueryArgs)(window.location.href, params), state);
}

function replace(params, state) {
  return originalHistoryReplace.call(history, (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_0__.addQueryArgs)(window.location.href, params), state);
}

history.push = push;
history.replace = replace;
/* harmony default export */ __webpack_exports__["default"] = (history);


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/utils/is-template-removable.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/utils/is-template-removable.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ isTemplateRemovable; }
/* harmony export */ });
/**
 * Check if a template is removable.
 *
 * @param {Object} template The template entity to check.
 * @return {boolean} Whether the template is revertable.
 */
function isTemplateRemovable(template) {
  if (!template) {
    return false;
  }

  return template.source === 'custom' && !template.has_theme_file;
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-site/build-module/utils/is-template-revertable.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/utils/is-template-revertable.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ isTemplateRevertable; }
/* harmony export */ });
/**
 * Check if a template is revertable to its original theme-provided template file.
 *
 * @param {Object} template The template entity to check.
 * @return {boolean} Whether the template is revertable.
 */
function isTemplateRevertable(template) {
  if (!template) {
    return false;
  }
  /* eslint-disable camelcase */


  return (template === null || template === void 0 ? void 0 : template.source) === 'custom' && (template === null || template === void 0 ? void 0 : template.has_theme_file);
  /* eslint-enable camelcase */
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

/***/ "./node_modules/@wordpress/icons/build-module/library/archive.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/archive.js ***!
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

const archive = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M19 6.2h-5.9l-.6-1.1c-.3-.7-1-1.1-1.8-1.1H5c-1.1 0-2 .9-2 2v11.8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8.2c0-1.1-.9-2-2-2zm.5 11.6c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h5.8c.2 0 .4.1.4.3l1 2H19c.3 0 .5.2.5.5v9.5zM8 12.8h8v-1.5H8v1.5zm0 3h8v-1.5H8v1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (archive);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/arrow-left.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/arrow-left.js ***!
  \**************************************************************************/
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

const arrowLeft = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M20 10.8H6.7l4.1-4.5-1.1-1.1-5.8 6.3 5.8 5.8 1.1-1.1-4-3.9H20z"
}));
/* harmony default export */ __webpack_exports__["default"] = (arrowLeft);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/block-meta.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/block-meta.js ***!
  \**************************************************************************/
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

const blockDefault = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  "fill-rule": "evenodd",
  d: "M8.95 11.25H4v1.5h4.95v4.5H13V18c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2v-3c0-1.1-.9-2-2-2h-3c-1.1 0-2 .9-2 2v.75h-2.55v-7.5H13V9c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3c-1.1 0-2 .9-2 2v.75H8.95v4.5ZM14.5 15v3c0 .3.2.5.5.5h3c.3 0 .5-.2.5-.5v-3c0-.3-.2-.5-.5-.5h-3c-.3 0-.5.2-.5.5Zm0-6V6c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5v3c0 .3-.2.5-.5.5h-3c-.3 0-.5-.2-.5-.5Z",
  "clip-rule": "evenodd"
}));
/* harmony default export */ __webpack_exports__["default"] = (blockDefault);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/category.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/category.js ***!
  \************************************************************************/
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

const category = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M6 5.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM4 6a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm11-.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM13 6a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2h-3a2 2 0 01-2-2V6zm5 8.5h-3a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5zM15 13a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2v-3a2 2 0 00-2-2h-3zm-9 1.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5zM4 15a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3z",
  fillRule: "evenodd",
  clipRule: "evenodd"
}));
/* harmony default export */ __webpack_exports__["default"] = (category);


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

/***/ "./node_modules/@wordpress/icons/build-module/library/chevron-down.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/chevron-down.js ***!
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

const chevronDown = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (chevronDown);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/chevron-left.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/chevron-left.js ***!
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

const chevronLeft = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M14.6 7l-1.2-1L8 12l5.4 6 1.2-1-4.6-5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (chevronLeft);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/chevron-right.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/chevron-right.js ***!
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

const chevronRight = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M10.6 6L9.4 7l4.6 5-4.6 5 1.2 1 5.4-6z"
}));
/* harmony default export */ __webpack_exports__["default"] = (chevronRight);


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

/***/ "./node_modules/@wordpress/icons/build-module/library/close.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/close.js ***!
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

const close = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"
}));
/* harmony default export */ __webpack_exports__["default"] = (close);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/cog.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/cog.js ***!
  \*******************************************************************/
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

const cog = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fillRule: "evenodd",
  d: "M10.289 4.836A1 1 0 0111.275 4h1.306a1 1 0 01.987.836l.244 1.466c.787.26 1.503.679 2.108 1.218l1.393-.522a1 1 0 011.216.437l.653 1.13a1 1 0 01-.23 1.273l-1.148.944a6.025 6.025 0 010 2.435l1.149.946a1 1 0 01.23 1.272l-.653 1.13a1 1 0 01-1.216.437l-1.394-.522c-.605.54-1.32.958-2.108 1.218l-.244 1.466a1 1 0 01-.987.836h-1.306a1 1 0 01-.986-.836l-.244-1.466a5.995 5.995 0 01-2.108-1.218l-1.394.522a1 1 0 01-1.217-.436l-.653-1.131a1 1 0 01.23-1.272l1.149-.946a6.026 6.026 0 010-2.435l-1.148-.944a1 1 0 01-.23-1.272l.653-1.131a1 1 0 011.217-.437l1.393.522a5.994 5.994 0 012.108-1.218l.244-1.466zM14.929 12a3 3 0 11-6 0 3 3 0 016 0z",
  clipRule: "evenodd"
}));
/* harmony default export */ __webpack_exports__["default"] = (cog);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/color.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/color.js ***!
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

const color = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M17.2 10.9c-.5-1-1.2-2.1-2.1-3.2-.6-.9-1.3-1.7-2.1-2.6L12 4l-1 1.1c-.6.9-1.3 1.7-2 2.6-.8 1.2-1.5 2.3-2 3.2-.6 1.2-1 2.2-1 3 0 3.4 2.7 6.1 6.1 6.1s6.1-2.7 6.1-6.1c0-.8-.3-1.8-1-3zm-5.1 7.6c-2.5 0-4.6-2.1-4.6-4.6 0-.3.1-1 .8-2.3.5-.9 1.1-1.9 2-3.1.7-.9 1.3-1.7 1.8-2.3.7.8 1.3 1.6 1.8 2.3.8 1.1 1.5 2.2 2 3.1.7 1.3.8 2 .8 2.3 0 2.5-2.1 4.6-4.6 4.6z"
}));
/* harmony default export */ __webpack_exports__["default"] = (color);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/comment-author-avatar.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/comment-author-avatar.js ***!
  \*************************************************************************************/
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

const commentAuthorAvatar = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fillRule: "evenodd",
  d: "M7.25 16.437a6.5 6.5 0 1 1 9.5 0V16A2.75 2.75 0 0 0 14 13.25h-4A2.75 2.75 0 0 0 7.25 16v.437Zm1.5 1.193a6.47 6.47 0 0 0 3.25.87 6.47 6.47 0 0 0 3.25-.87V16c0-.69-.56-1.25-1.25-1.25h-4c-.69 0-1.25.56-1.25 1.25v1.63ZM4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
  clipRule: "evenodd"
}));
/* harmony default export */ __webpack_exports__["default"] = (commentAuthorAvatar);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/download.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/download.js ***!
  \************************************************************************/
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

const download = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M18 11.3l-1-1.1-4 4V3h-1.5v11.3L7 10.2l-1 1.1 6.2 5.8 5.8-5.8zm.5 3.7v3.5h-13V15H4v5h16v-5h-1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (download);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/edit.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/edit.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pencil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pencil */ "./node_modules/@wordpress/icons/build-module/library/pencil.js");
/**
 * Internal dependencies
 */

/* harmony default export */ __webpack_exports__["default"] = (_pencil__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/external.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/external.js ***!
  \************************************************************************/
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

const external = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M18.2 17c0 .7-.6 1.2-1.2 1.2H7c-.7 0-1.2-.6-1.2-1.2V7c0-.7.6-1.2 1.2-1.2h3.2V4.2H7C5.5 4.2 4.2 5.5 4.2 7v10c0 1.5 1.2 2.8 2.8 2.8h10c1.5 0 2.8-1.2 2.8-2.8v-3.6h-1.5V17zM14.9 3v1.5h3.7l-6.4 6.4 1.1 1.1 6.4-6.4v3.7h1.5V3h-6.3z"
}));
/* harmony default export */ __webpack_exports__["default"] = (external);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/globe.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/globe.js ***!
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

const globe = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M12 3.3c-4.8 0-8.8 3.9-8.8 8.8 0 4.8 3.9 8.8 8.8 8.8 4.8 0 8.8-3.9 8.8-8.8s-4-8.8-8.8-8.8zm6.5 5.5h-2.6C15.4 7.3 14.8 6 14 5c2 .6 3.6 2 4.5 3.8zm.7 3.2c0 .6-.1 1.2-.2 1.8h-2.9c.1-.6.1-1.2.1-1.8s-.1-1.2-.1-1.8H19c.2.6.2 1.2.2 1.8zM12 18.7c-1-.7-1.8-1.9-2.3-3.5h4.6c-.5 1.6-1.3 2.9-2.3 3.5zm-2.6-4.9c-.1-.6-.1-1.1-.1-1.8 0-.6.1-1.2.1-1.8h5.2c.1.6.1 1.1.1 1.8s-.1 1.2-.1 1.8H9.4zM4.8 12c0-.6.1-1.2.2-1.8h2.9c-.1.6-.1 1.2-.1 1.8 0 .6.1 1.2.1 1.8H5c-.2-.6-.2-1.2-.2-1.8zM12 5.3c1 .7 1.8 1.9 2.3 3.5H9.7c.5-1.6 1.3-2.9 2.3-3.5zM10 5c-.8 1-1.4 2.3-1.8 3.8H5.5C6.4 7 8 5.6 10 5zM5.5 15.3h2.6c.4 1.5 1 2.8 1.8 3.7-1.8-.6-3.5-2-4.4-3.7zM14 19c.8-1 1.4-2.2 1.8-3.7h2.6C17.6 17 16 18.4 14 19z"
}));
/* harmony default export */ __webpack_exports__["default"] = (globe);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/home.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/home.js ***!
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

const home = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M12 4L4 7.9V20h16V7.9L12 4zm6.5 14.5H14V13h-4v5.5H5.5V8.8L12 5.7l6.5 3.1v9.7z"
}));
/* harmony default export */ __webpack_exports__["default"] = (home);


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

/***/ "./node_modules/@wordpress/icons/build-module/library/list-view.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/list-view.js ***!
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

const listView = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M13.8 5.2H3v1.5h10.8V5.2zm-3.6 12v1.5H21v-1.5H10.2zm7.2-6H6.6v1.5h10.8v-1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (listView);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/list.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/list.js ***!
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

const list = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M4 4v1.5h16V4H4zm8 8.5h8V11h-8v1.5zM4 20h16v-1.5H4V20zm4-8c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (list);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/media.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/media.js ***!
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

const media = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M18.7 3H5.3C4 3 3 4 3 5.3v13.4C3 20 4 21 5.3 21h13.4c1.3 0 2.3-1 2.3-2.3V5.3C21 4 20 3 18.7 3zm.8 15.7c0 .4-.4.8-.8.8H5.3c-.4 0-.8-.4-.8-.8V5.3c0-.4.4-.8.8-.8h13.4c.4 0 .8.4.8.8v13.4zM10 15l5-3-5-3v6z"
}));
/* harmony default export */ __webpack_exports__["default"] = (media);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/more-vertical.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/more-vertical.js ***!
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

const moreVertical = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M13 19h-2v-2h2v2zm0-6h-2v-2h2v2zm0-6h-2V5h2v2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (moreVertical);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/navigation.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/navigation.js ***!
  \**************************************************************************/
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

const navigation = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M12 4c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14.5c-3.6 0-6.5-2.9-6.5-6.5S8.4 5.5 12 5.5s6.5 2.9 6.5 6.5-2.9 6.5-6.5 6.5zM9 16l4.5-3L15 8.4l-4.5 3L9 16z"
}));
/* harmony default export */ __webpack_exports__["default"] = (navigation);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/not-found.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/not-found.js ***!
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

const notFound = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M19 5H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm.5 12c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V7c0-.3.2-.5.5-.5h14c.3 0 .5.2.5.5v10zm-11-7.6h-.7l-3.1 4.3h2.8V15h1v-1.3h.7v-.8h-.7V9.4zm-.9 3.5H6.3l1.2-1.7v1.7zm5.6-3.2c-.4-.2-.8-.4-1.2-.4-.5 0-.9.1-1.2.4-.4.2-.6.6-.8 1-.2.4-.3.9-.3 1.5s.1 1.1.3 1.6c.2.4.5.8.8 1 .4.2.8.4 1.2.4.5 0 .9-.1 1.2-.4.4-.2.6-.6.8-1 .2-.4.3-1 .3-1.6 0-.6-.1-1.1-.3-1.5-.1-.5-.4-.8-.8-1zm0 3.6c-.1.3-.3.5-.5.7-.2.1-.4.2-.7.2-.3 0-.5-.1-.7-.2-.2-.1-.4-.4-.5-.7-.1-.3-.2-.7-.2-1.2 0-.7.1-1.2.4-1.5.3-.3.6-.5 1-.5s.7.2 1 .5c.3.3.4.8.4 1.5-.1.5-.1.9-.2 1.2zm5-3.9h-.7l-3.1 4.3h2.8V15h1v-1.3h.7v-.8h-.7V9.4zm-1 3.5H16l1.2-1.7v1.7z"
}));
/* harmony default export */ __webpack_exports__["default"] = (notFound);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/page.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/page.js ***!
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

const page = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M7 5.5h10a.5.5 0 01.5.5v12a.5.5 0 01-.5.5H7a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM17 4H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2zm-1 3.75H8v1.5h8v-1.5zM8 11h8v1.5H8V11zm6 3.25H8v1.5h6v-1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (page);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/pencil.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/pencil.js ***!
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

const pencil = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M20.1 5.1L16.9 2 6.2 12.7l-1.3 4.4 4.5-1.3L20.1 5.1zM4 20.8h8v-1.5H4v1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (pencil);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/plugins.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/plugins.js ***!
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

const plugins = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M10.5 4v4h3V4H15v4h1.5a1 1 0 011 1v4l-3 4v2a1 1 0 01-1 1h-3a1 1 0 01-1-1v-2l-3-4V9a1 1 0 011-1H9V4h1.5zm.5 12.5v2h2v-2l3-4v-3H8v3l3 4z"
}));
/* harmony default export */ __webpack_exports__["default"] = (plugins);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/plus.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/plus.js ***!
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

const plus = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z"
}));
/* harmony default export */ __webpack_exports__["default"] = (plus);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/post-author.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/post-author.js ***!
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

const postAuthor = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M10 4.5a1 1 0 11-2 0 1 1 0 012 0zm1.5 0a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm2.25 7.5v-1A2.75 2.75 0 0011 8.25H7A2.75 2.75 0 004.25 11v1h1.5v-1c0-.69.56-1.25 1.25-1.25h4c.69 0 1.25.56 1.25 1.25v1h1.5zM4 20h9v-1.5H4V20zm16-4H4v-1.5h16V16z",
  fillRule: "evenodd",
  clipRule: "evenodd"
}));
/* harmony default export */ __webpack_exports__["default"] = (postAuthor);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/post-date.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/post-date.js ***!
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

const postDate = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M11.696 13.972c.356-.546.599-.958.728-1.235a1.79 1.79 0 00.203-.783c0-.264-.077-.47-.23-.618-.148-.153-.354-.23-.618-.23-.295 0-.569.07-.82.212a3.413 3.413 0 00-.738.571l-.147-1.188c.289-.234.59-.41.903-.526.313-.117.66-.175 1.041-.175.375 0 .695.08.959.24.264.153.46.362.59.626.135.265.203.556.203.876 0 .362-.08.734-.24 1.115-.154.381-.427.87-.82 1.466l-.756 1.152H14v1.106h-4l1.696-2.609z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M19.5 7h-15v12a.5.5 0 00.5.5h14a.5.5 0 00.5-.5V7zM3 7V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"
}));
/* harmony default export */ __webpack_exports__["default"] = (postDate);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/post.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/post.js ***!
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

const post = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "m7.3 9.7 1.4 1.4c.2-.2.3-.3.4-.5 0 0 0-.1.1-.1.3-.5.4-1.1.3-1.6L12 7 9 4 7.2 6.5c-.6-.1-1.1 0-1.6.3 0 0-.1 0-.1.1-.3.1-.4.2-.6.4l1.4 1.4L4 11v1h1l2.3-2.3zM4 20h9v-1.5H4V20zm0-5.5V16h16v-1.5H4z"
}));
/* harmony default export */ __webpack_exports__["default"] = (post);


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

/***/ "./node_modules/@wordpress/icons/build-module/library/search.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/search.js ***!
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

const search = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M13.5 6C10.5 6 8 8.5 8 11.5c0 1.1.3 2.1.9 3l-3.4 3 1 1.1 3.4-2.9c1 .9 2.2 1.4 3.6 1.4 3 0 5.5-2.5 5.5-5.5C19 8.5 16.5 6 13.5 6zm0 9.5c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"
}));
/* harmony default export */ __webpack_exports__["default"] = (search);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/star-empty.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/star-empty.js ***!
  \**************************************************************************/
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

"use strict";
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

/***/ "./node_modules/@wordpress/icons/build-module/library/styles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/styles.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const styles = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M12 4c-4.4 0-8 3.6-8 8v.1c0 4.1 3.2 7.5 7.2 7.9h.8c4.4 0 8-3.6 8-8s-3.6-8-8-8zm0 15V5c3.9 0 7 3.1 7 7s-3.1 7-7 7z"
}));
/* harmony default export */ __webpack_exports__["default"] = (styles);


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

/***/ "./node_modules/@wordpress/icons/build-module/library/tag.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/tag.js ***!
  \*******************************************************************/
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

const tag = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M20.1 11.2l-6.7-6.7c-.1-.1-.3-.2-.5-.2H5c-.4-.1-.8.3-.8.7v7.8c0 .2.1.4.2.5l6.7 6.7c.2.2.5.4.7.5s.6.2.9.2c.3 0 .6-.1.9-.2.3-.1.5-.3.8-.5l5.6-5.6c.4-.4.7-1 .7-1.6.1-.6-.2-1.2-.6-1.6zM19 13.4L13.4 19c-.1.1-.2.1-.3.2-.2.1-.4.1-.6 0-.1 0-.2-.1-.3-.2l-6.5-6.5V5.8h6.8l6.5 6.5c.2.2.2.4.2.6 0 .1 0 .3-.2.5zM9 8c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1z"
}));
/* harmony default export */ __webpack_exports__["default"] = (tag);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/typography.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/typography.js ***!
  \**************************************************************************/
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

const typography = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M6.9 7L3 17.8h1.7l1-2.8h4.1l1 2.8h1.7L8.6 7H6.9zm-.7 6.6l1.5-4.3 1.5 4.3h-3zM21.6 17c-.1.1-.2.2-.3.2-.1.1-.2.1-.4.1s-.3-.1-.4-.2c-.1-.1-.1-.3-.1-.6V12c0-.5 0-1-.1-1.4-.1-.4-.3-.7-.5-1-.2-.2-.5-.4-.9-.5-.4 0-.8-.1-1.3-.1s-1 .1-1.4.2c-.4.1-.7.3-1 .4-.2.2-.4.3-.6.5-.1.2-.2.4-.2.7 0 .3.1.5.2.8.2.2.4.3.8.3.3 0 .6-.1.8-.3.2-.2.3-.4.3-.7 0-.3-.1-.5-.2-.7-.2-.2-.4-.3-.6-.4.2-.2.4-.3.7-.4.3-.1.6-.1.8-.1.3 0 .6 0 .8.1.2.1.4.3.5.5.1.2.2.5.2.9v1.1c0 .3-.1.5-.3.6-.2.2-.5.3-.9.4-.3.1-.7.3-1.1.4-.4.1-.8.3-1.1.5-.3.2-.6.4-.8.7-.2.3-.3.7-.3 1.2 0 .6.2 1.1.5 1.4.3.4.9.5 1.6.5.5 0 1-.1 1.4-.3.4-.2.8-.6 1.1-1.1 0 .4.1.7.3 1 .2.3.6.4 1.2.4.4 0 .7-.1.9-.2.2-.1.5-.3.7-.4h-.3zm-3-.9c-.2.4-.5.7-.8.8-.3.2-.6.2-.8.2-.4 0-.6-.1-.9-.3-.2-.2-.3-.6-.3-1.1 0-.5.1-.9.3-1.2s.5-.5.8-.7c.3-.2.7-.3 1-.5.3-.1.6-.3.7-.6v3.4z"
}));
/* harmony default export */ __webpack_exports__["default"] = (typography);


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

/***/ "./node_modules/@wordpress/interface/build-module/components/action-item/index.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/components/action-item/index.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




function ActionItemSlot(_ref) {
  let {
    name,
    as: Component = _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup,
    fillProps = {},
    bubblesVirtually,
    ...props
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Slot, {
    name: name,
    bubblesVirtually: bubblesVirtually,
    fillProps: fillProps
  }, fills => {
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Children.toArray(fills))) {
      return null;
    } // Special handling exists for backward compatibility.
    // It ensures that menu items created by plugin authors aren't
    // duplicated with automatically injected menu items coming
    // from pinnable plugin sidebars.
    // @see https://github.com/WordPress/gutenberg/issues/14457


    const initializedByPlugins = [];
    _wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Children.forEach(fills, _ref2 => {
      let {
        props: {
          __unstableExplicitMenuItem,
          __unstableTarget
        }
      } = _ref2;

      if (__unstableTarget && __unstableExplicitMenuItem) {
        initializedByPlugins.push(__unstableTarget);
      }
    });
    const children = _wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Children.map(fills, child => {
      if (!child.props.__unstableExplicitMenuItem && initializedByPlugins.includes(child.props.__unstableTarget)) {
        return null;
      }

      return child;
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Component, props, children);
  });
}

function ActionItem(_ref3) {
  let {
    name,
    as: Component = _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button,
    onClick,
    ...props
  } = _ref3;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Fill, {
    name: name
  }, _ref4 => {
    let {
      onClick: fpOnClick
    } = _ref4;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      onClick: onClick || fpOnClick ? function () {
        (onClick || lodash__WEBPACK_IMPORTED_MODULE_2__.noop)(...arguments);
        (fpOnClick || lodash__WEBPACK_IMPORTED_MODULE_2__.noop)(...arguments);
      } : undefined
    }, props));
  });
}

ActionItem.Slot = ActionItemSlot;
/* harmony default export */ __webpack_exports__["default"] = (ActionItem);


/***/ }),

/***/ "./node_modules/@wordpress/interface/build-module/components/complementary-area-context/index.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/components/complementary-area-context/index.js ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_0__.withPluginContext)((context, ownProps) => {
  return {
    icon: ownProps.icon || context.icon,
    identifier: ownProps.identifier || `${context.name}/${ownProps.name}`
  };
}));


/***/ }),

/***/ "./node_modules/@wordpress/interface/build-module/components/complementary-area-header/index.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/components/complementary-area-header/index.js ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/close-small.js");
/* harmony import */ var _complementary_area_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../complementary-area-toggle */ "./node_modules/@wordpress/interface/build-module/components/complementary-area-toggle/index.js");



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



const ComplementaryAreaHeader = _ref => {
  let {
    smallScreenTitle,
    children,
    className,
    toggleButtonProps
  } = _ref;
  const toggleButton = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_complementary_area_toggle__WEBPACK_IMPORTED_MODULE_3__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"]
  }, toggleButtonProps));
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "components-panel__header interface-complementary-area-header__small"
  }, smallScreenTitle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: "interface-complementary-area-header__small-title"
  }, smallScreenTitle), toggleButton), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('components-panel__header', 'interface-complementary-area-header', className),
    tabIndex: -1
  }, children, toggleButton));
};

/* harmony default export */ __webpack_exports__["default"] = (ComplementaryAreaHeader);


/***/ }),

/***/ "./node_modules/@wordpress/interface/build-module/components/complementary-area-more-menu-item/index.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/components/complementary-area-more-menu-item/index.js ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ComplementaryAreaMoreMenuItem; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/check.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _complementary_area_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../complementary-area-toggle */ "./node_modules/@wordpress/interface/build-module/components/complementary-area-toggle/index.js");
/* harmony import */ var _action_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../action-item */ "./node_modules/@wordpress/interface/build-module/components/action-item/index.js");



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */




const PluginsMenuItem = props => // Menu item is marked with unstable prop for backward compatibility.
// They are removed so they don't leak to DOM elements.
// @see https://github.com/WordPress/gutenberg/issues/14457
(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.MenuItem, (0,lodash__WEBPACK_IMPORTED_MODULE_2__.omit)(props, ['__unstableExplicitMenuItem', '__unstableTarget']));

function ComplementaryAreaMoreMenuItem(_ref) {
  let {
    scope,
    target,
    __unstableExplicitMenuItem,
    ...props
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_complementary_area_toggle__WEBPACK_IMPORTED_MODULE_4__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    as: toggleProps => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_action_item__WEBPACK_IMPORTED_MODULE_5__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        __unstableExplicitMenuItem: __unstableExplicitMenuItem,
        __unstableTarget: `${scope}/${target}`,
        as: PluginsMenuItem,
        name: `${scope}/plugin-more-menu`
      }, toggleProps));
    },
    role: "menuitemcheckbox",
    selectedIcon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"],
    name: target,
    scope: scope
  }, props));
}


/***/ }),

/***/ "./node_modules/@wordpress/interface/build-module/components/complementary-area-toggle/index.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/components/complementary-area-toggle/index.js ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/interface/build-module/store/index.js");
/* harmony import */ var _complementary_area_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../complementary-area-context */ "./node_modules/@wordpress/interface/build-module/components/complementary-area-context/index.js");



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */




function ComplementaryAreaToggle(_ref) {
  let {
    as = _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button,
    scope,
    identifier,
    icon,
    selectedIcon,
    ...props
  } = _ref;
  const ComponentToUse = as;
  const isSelected = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => select(_store__WEBPACK_IMPORTED_MODULE_5__.store).getActiveComplementaryArea(scope) === identifier, [identifier]);
  const {
    enableComplementaryArea,
    disableComplementaryArea
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_5__.store);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ComponentToUse, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    icon: selectedIcon && isSelected ? selectedIcon : icon,
    onClick: () => {
      if (isSelected) {
        disableComplementaryArea(scope);
      } else {
        enableComplementaryArea(scope, identifier);
      }
    }
  }, (0,lodash__WEBPACK_IMPORTED_MODULE_2__.omit)(props, ['name'])));
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_complementary_area_context__WEBPACK_IMPORTED_MODULE_6__["default"])(ComplementaryAreaToggle));


/***/ }),

/***/ "./node_modules/@wordpress/interface/build-module/components/complementary-area/index.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/components/complementary-area/index.js ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/check.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/star-filled.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/star-empty.js");
/* harmony import */ var _wordpress_viewport__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/viewport */ "@wordpress/viewport");
/* harmony import */ var _wordpress_viewport__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_viewport__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _complementary_area_header__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../complementary-area-header */ "./node_modules/@wordpress/interface/build-module/components/complementary-area-header/index.js");
/* harmony import */ var _complementary_area_more_menu_item__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../complementary-area-more-menu-item */ "./node_modules/@wordpress/interface/build-module/components/complementary-area-more-menu-item/index.js");
/* harmony import */ var _complementary_area_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../complementary-area-toggle */ "./node_modules/@wordpress/interface/build-module/components/complementary-area-toggle/index.js");
/* harmony import */ var _complementary_area_context__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../complementary-area-context */ "./node_modules/@wordpress/interface/build-module/components/complementary-area-context/index.js");
/* harmony import */ var _pinned_items__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pinned-items */ "./node_modules/@wordpress/interface/build-module/components/pinned-items/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/interface/build-module/store/index.js");



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */








function ComplementaryAreaSlot(_ref) {
  let {
    scope,
    ...props
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Slot, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    name: `ComplementaryArea/${scope}`
  }, props));
}

function ComplementaryAreaFill(_ref2) {
  let {
    scope,
    children,
    className
  } = _ref2;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Fill, {
    name: `ComplementaryArea/${scope}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: className
  }, children));
}

function useAdjustComplementaryListener(scope, identifier, activeArea, isActive, isSmall) {
  const previousIsSmall = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
  const shouldOpenWhenNotSmall = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
  const {
    enableComplementaryArea,
    disableComplementaryArea
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_7__.store);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    // If the complementary area is active and the editor is switching from a big to a small window size.
    if (isActive && isSmall && !previousIsSmall.current) {
      // Disable the complementary area.
      disableComplementaryArea(scope); // Flag the complementary area to be reopened when the window size goes from small to big.

      shouldOpenWhenNotSmall.current = true;
    } else if ( // If there is a flag indicating the complementary area should be enabled when we go from small to big window size
    // and we are going from a small to big window size.
    shouldOpenWhenNotSmall.current && !isSmall && previousIsSmall.current) {
      // Remove the flag indicating the complementary area should be enabled.
      shouldOpenWhenNotSmall.current = false; // Enable the complementary area.

      enableComplementaryArea(scope, identifier);
    } else if ( // If the flag is indicating the current complementary should be reopened but another complementary area becomes active,
    // remove the flag.
    shouldOpenWhenNotSmall.current && activeArea && activeArea !== identifier) {
      shouldOpenWhenNotSmall.current = false;
    }

    if (isSmall !== previousIsSmall.current) {
      previousIsSmall.current = isSmall;
    }
  }, [isActive, isSmall, scope, identifier, activeArea]);
}

function ComplementaryArea(_ref3) {
  let {
    children,
    className,
    closeLabel = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Close plugin'),
    identifier,
    header,
    headerClassName,
    icon,
    isPinnable = true,
    panelClassName,
    scope,
    name,
    smallScreenTitle,
    title,
    toggleShortcut,
    isActiveByDefault,
    showIconLabels = false
  } = _ref3;
  const {
    isActive,
    isPinned,
    activeArea,
    isSmall,
    isLarge
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    const {
      getActiveComplementaryArea,
      isItemPinned
    } = select(_store__WEBPACK_IMPORTED_MODULE_7__.store);

    const _activeArea = getActiveComplementaryArea(scope);

    return {
      isActive: _activeArea === identifier,
      isPinned: isItemPinned(scope, identifier),
      activeArea: _activeArea,
      isSmall: select(_wordpress_viewport__WEBPACK_IMPORTED_MODULE_6__.store).isViewportMatch('< medium'),
      isLarge: select(_wordpress_viewport__WEBPACK_IMPORTED_MODULE_6__.store).isViewportMatch('large')
    };
  }, [identifier, scope]);
  useAdjustComplementaryListener(scope, identifier, activeArea, isActive, isSmall);
  const {
    enableComplementaryArea,
    disableComplementaryArea,
    pinItem,
    unpinItem
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_7__.store);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (isActiveByDefault && activeArea === undefined && !isSmall) {
      enableComplementaryArea(scope, identifier);
    }
  }, [activeArea, isActiveByDefault, scope, identifier, isSmall]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, isPinnable && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_pinned_items__WEBPACK_IMPORTED_MODULE_8__["default"], {
    scope: scope
  }, isPinned && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_complementary_area_toggle__WEBPACK_IMPORTED_MODULE_9__["default"], {
    scope: scope,
    identifier: identifier,
    isPressed: isActive && (!showIconLabels || isLarge),
    "aria-expanded": isActive,
    label: title,
    icon: showIconLabels ? _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__["default"] : icon,
    showTooltip: !showIconLabels,
    variant: showIconLabels ? 'tertiary' : undefined
  })), name && isPinnable && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_complementary_area_more_menu_item__WEBPACK_IMPORTED_MODULE_11__["default"], {
    target: name,
    scope: scope,
    icon: icon
  }, title), isActive && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ComplementaryAreaFill, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('interface-complementary-area', className),
    scope: scope
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_complementary_area_header__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: headerClassName,
    closeLabel: closeLabel,
    onClose: () => disableComplementaryArea(scope),
    smallScreenTitle: smallScreenTitle,
    toggleButtonProps: {
      label: closeLabel,
      shortcut: toggleShortcut,
      scope,
      identifier
    }
  }, header || (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("strong", null, title), isPinnable && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    className: "interface-complementary-area__pin-unpin-item",
    icon: isPinned ? _wordpress_icons__WEBPACK_IMPORTED_MODULE_13__["default"] : _wordpress_icons__WEBPACK_IMPORTED_MODULE_14__["default"],
    label: isPinned ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Unpin from toolbar') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Pin to toolbar'),
    onClick: () => (isPinned ? unpinItem : pinItem)(scope, identifier),
    isPressed: isPinned,
    "aria-expanded": isPinned
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Panel, {
    className: panelClassName
  }, children)));
}

const ComplementaryAreaWrapped = (0,_complementary_area_context__WEBPACK_IMPORTED_MODULE_15__["default"])(ComplementaryArea);
ComplementaryAreaWrapped.Slot = ComplementaryAreaSlot;
/* harmony default export */ __webpack_exports__["default"] = (ComplementaryAreaWrapped);


/***/ }),

/***/ "./node_modules/@wordpress/interface/build-module/components/fullscreen-mode/index.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/components/fullscreen-mode/index.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */


const FullscreenMode = _ref => {
  let {
    isActive
  } = _ref;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let isSticky = false; // `is-fullscreen-mode` is set in PHP as a body class by Gutenberg, and this causes
    // `sticky-menu` to be applied by WordPress and prevents the admin menu being scrolled
    // even if `is-fullscreen-mode` is then removed. Let's remove `sticky-menu` here as
    // a consequence of the FullscreenMode setup.

    if (document.body.classList.contains('sticky-menu')) {
      isSticky = true;
      document.body.classList.remove('sticky-menu');
    }

    return () => {
      if (isSticky) {
        document.body.classList.add('sticky-menu');
      }
    };
  }, []);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isActive) {
      document.body.classList.add('is-fullscreen-mode');
    } else {
      document.body.classList.remove('is-fullscreen-mode');
    }

    return () => {
      if (isActive) {
        document.body.classList.remove('is-fullscreen-mode');
      }
    };
  }, [isActive]);
  return null;
};

/* harmony default export */ __webpack_exports__["default"] = (FullscreenMode);


/***/ }),

/***/ "./node_modules/@wordpress/interface/build-module/components/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/components/index.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionItem": function() { return /* reexport safe */ _action_item__WEBPACK_IMPORTED_MODULE_7__["default"]; },
/* harmony export */   "ComplementaryArea": function() { return /* reexport safe */ _complementary_area__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   "ComplementaryAreaMoreMenuItem": function() { return /* reexport safe */ _complementary_area_more_menu_item__WEBPACK_IMPORTED_MODULE_1__["default"]; },
/* harmony export */   "FullscreenMode": function() { return /* reexport safe */ _fullscreen_mode__WEBPACK_IMPORTED_MODULE_2__["default"]; },
/* harmony export */   "InterfaceSkeleton": function() { return /* reexport safe */ _interface_skeleton__WEBPACK_IMPORTED_MODULE_3__["default"]; },
/* harmony export */   "MoreMenuDropdown": function() { return /* reexport safe */ _more_menu_dropdown__WEBPACK_IMPORTED_MODULE_5__["default"]; },
/* harmony export */   "MoreMenuFeatureToggle": function() { return /* reexport safe */ _more_menu_feature_toggle__WEBPACK_IMPORTED_MODULE_6__["default"]; },
/* harmony export */   "PinnedItems": function() { return /* reexport safe */ _pinned_items__WEBPACK_IMPORTED_MODULE_4__["default"]; },
/* harmony export */   "PreferencesModal": function() { return /* reexport safe */ _preferences_modal__WEBPACK_IMPORTED_MODULE_8__["default"]; },
/* harmony export */   "PreferencesModalSection": function() { return /* reexport safe */ _preferences_modal_section__WEBPACK_IMPORTED_MODULE_10__["default"]; },
/* harmony export */   "PreferencesModalTabs": function() { return /* reexport safe */ _preferences_modal_tabs__WEBPACK_IMPORTED_MODULE_9__["default"]; },
/* harmony export */   "___unstablePreferencesModalBaseOption": function() { return /* reexport safe */ _preferences_modal_base_option__WEBPACK_IMPORTED_MODULE_11__["default"]; }
/* harmony export */ });
/* harmony import */ var _complementary_area__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./complementary-area */ "./node_modules/@wordpress/interface/build-module/components/complementary-area/index.js");
/* harmony import */ var _complementary_area_more_menu_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./complementary-area-more-menu-item */ "./node_modules/@wordpress/interface/build-module/components/complementary-area-more-menu-item/index.js");
/* harmony import */ var _fullscreen_mode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fullscreen-mode */ "./node_modules/@wordpress/interface/build-module/components/fullscreen-mode/index.js");
/* harmony import */ var _interface_skeleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interface-skeleton */ "./node_modules/@wordpress/interface/build-module/components/interface-skeleton/index.js");
/* harmony import */ var _pinned_items__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pinned-items */ "./node_modules/@wordpress/interface/build-module/components/pinned-items/index.js");
/* harmony import */ var _more_menu_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./more-menu-dropdown */ "./node_modules/@wordpress/interface/build-module/components/more-menu-dropdown/index.js");
/* harmony import */ var _more_menu_feature_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./more-menu-feature-toggle */ "./node_modules/@wordpress/interface/build-module/components/more-menu-feature-toggle/index.js");
/* harmony import */ var _action_item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./action-item */ "./node_modules/@wordpress/interface/build-module/components/action-item/index.js");
/* harmony import */ var _preferences_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./preferences-modal */ "./node_modules/@wordpress/interface/build-module/components/preferences-modal/index.js");
/* harmony import */ var _preferences_modal_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./preferences-modal-tabs */ "./node_modules/@wordpress/interface/build-module/components/preferences-modal-tabs/index.js");
/* harmony import */ var _preferences_modal_section__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./preferences-modal-section */ "./node_modules/@wordpress/interface/build-module/components/preferences-modal-section/index.js");
/* harmony import */ var _preferences_modal_base_option__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./preferences-modal-base-option */ "./node_modules/@wordpress/interface/build-module/components/preferences-modal-base-option/index.js");














/***/ }),

/***/ "./node_modules/@wordpress/interface/build-module/components/interface-skeleton/index.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/components/interface-skeleton/index.js ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

/**
 * WordPress dependencies
 */






function useHTMLClass(className) {
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const element = document && document.querySelector(`html:not(.${className})`);

    if (!element) {
      return;
    }

    element.classList.toggle(className);
    return () => {
      element.classList.toggle(className);
    };
  }, [className]);
}

function InterfaceSkeleton(_ref, ref) {
  let {
    footer,
    header,
    sidebar,
    secondarySidebar,
    notices,
    content,
    drawer,
    actions,
    labels,
    className,
    shortcuts
  } = _ref;
  const navigateRegionsProps = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__unstableUseNavigateRegions)(shortcuts);
  useHTMLClass('interface-interface-skeleton__html-container');
  const defaultLabels = {
    /* translators: accessibility text for the nav bar landmark region. */
    drawer: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Drawer'),

    /* translators: accessibility text for the top bar landmark region. */
    header: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Header'),

    /* translators: accessibility text for the content landmark region. */
    body: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Content'),

    /* translators: accessibility text for the secondary sidebar landmark region. */
    secondarySidebar: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Block Library'),

    /* translators: accessibility text for the settings landmark region. */
    sidebar: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Settings'),

    /* translators: accessibility text for the publish landmark region. */
    actions: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Publish'),

    /* translators: accessibility text for the footer landmark region. */
    footer: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Footer')
  };
  const mergedLabels = { ...defaultLabels,
    ...labels
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, navigateRegionsProps, {
    ref: (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__.useMergeRefs)([ref, navigateRegionsProps.ref]),
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'interface-interface-skeleton', navigateRegionsProps.className, !!footer && 'has-footer')
  }), !!drawer && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "interface-interface-skeleton__drawer",
    role: "region",
    "aria-label": mergedLabels.drawer,
    tabIndex: "-1"
  }, drawer), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "interface-interface-skeleton__editor"
  }, !!header && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "interface-interface-skeleton__header",
    role: "region",
    "aria-label": mergedLabels.header,
    tabIndex: "-1"
  }, header), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "interface-interface-skeleton__body"
  }, !!secondarySidebar && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "interface-interface-skeleton__secondary-sidebar",
    role: "region",
    "aria-label": mergedLabels.secondarySidebar,
    tabIndex: "-1"
  }, secondarySidebar), !!notices && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "interface-interface-skeleton__notices"
  }, notices), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "interface-interface-skeleton__content",
    role: "region",
    "aria-label": mergedLabels.body,
    tabIndex: "-1"
  }, content), !!sidebar && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "interface-interface-skeleton__sidebar",
    role: "region",
    "aria-label": mergedLabels.sidebar,
    tabIndex: "-1"
  }, sidebar), !!actions && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "interface-interface-skeleton__actions",
    role: "region",
    "aria-label": mergedLabels.actions,
    tabIndex: "-1"
  }, actions))), !!footer && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "interface-interface-skeleton__footer",
    role: "region",
    "aria-label": mergedLabels.footer,
    tabIndex: "-1"
  }, footer));
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(InterfaceSkeleton));


/***/ }),

/***/ "./node_modules/@wordpress/interface/build-module/components/more-menu-dropdown/index.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/components/more-menu-dropdown/index.js ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MoreMenuDropdown; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/more-vertical.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




function MoreMenuDropdown(_ref) {
  let {
    as: DropdownComponent = _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.DropdownMenu,
    className,

    /* translators: button label text should, if possible, be under 16 characters. */
    label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Options'),
    popoverProps,
    toggleProps,
    children
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownComponent, {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('interface-more-menu-dropdown', className),
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"],
    label: label,
    popoverProps: {
      position: 'bottom left',
      ...popoverProps,
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('interface-more-menu-dropdown__content', popoverProps === null || popoverProps === void 0 ? void 0 : popoverProps.className)
    },
    toggleProps: {
      tooltipPosition: 'bottom',
      ...toggleProps
    }
  }, onClose => children(onClose));
}


/***/ }),

/***/ "./node_modules/@wordpress/interface/build-module/components/more-menu-feature-toggle/index.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/components/more-menu-feature-toggle/index.js ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MoreMenuFeatureToggle; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/check.js");
/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/a11y */ "@wordpress/a11y");
/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_a11y__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/interface/build-module/store/index.js");


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


function MoreMenuFeatureToggle(_ref) {
  let {
    scope,
    label,
    info,
    messageActivated,
    messageDeactivated,
    shortcut,
    feature
  } = _ref;
  const isActive = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => select(_store__WEBPACK_IMPORTED_MODULE_5__.store).isFeatureActive(scope, feature), [feature]);
  const {
    toggleFeature
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_5__.store);

  const speakMessage = () => {
    if (isActive) {
      (0,_wordpress_a11y__WEBPACK_IMPORTED_MODULE_4__.speak)(messageDeactivated || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Feature deactivated'));
    } else {
      (0,_wordpress_a11y__WEBPACK_IMPORTED_MODULE_4__.speak)(messageActivated || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Feature activated'));
    }
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
    icon: isActive && _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"],
    isSelected: isActive,
    onClick: () => {
      toggleFeature(scope, feature);
      speakMessage();
    },
    role: "menuitemcheckbox",
    info: info,
    shortcut: shortcut
  }, label);
}


/***/ }),

/***/ "./node_modules/@wordpress/interface/build-module/components/pinned-items/index.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/components/pinned-items/index.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);



/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */



function PinnedItems(_ref) {
  let {
    scope,
    ...props
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Fill, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    name: `PinnedItems/${scope}`
  }, props));
}

function PinnedItemsSlot(_ref2) {
  let {
    scope,
    className,
    ...props
  } = _ref2;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Slot, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    name: `PinnedItems/${scope}`
  }, props), fills => !(0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(fills) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, 'interface-pinned-items')
  }, fills));
}

PinnedItems.Slot = PinnedItemsSlot;
/* harmony default export */ __webpack_exports__["default"] = (PinnedItems);


/***/ }),

/***/ "./node_modules/@wordpress/interface/build-module/components/preferences-modal-base-option/index.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/components/preferences-modal-base-option/index.js ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */


function BaseOption(_ref) {
  let {
    help,
    label,
    isChecked,
    onChange,
    children
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "interface-preferences-modal__option"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    help: help,
    label: label,
    checked: isChecked,
    onChange: onChange
  }), children);
}

/* harmony default export */ __webpack_exports__["default"] = (BaseOption);


/***/ }),

/***/ "./node_modules/@wordpress/interface/build-module/components/preferences-modal-section/index.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/components/preferences-modal-section/index.js ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


const Section = _ref => {
  let {
    description,
    title,
    children
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("fieldset", {
    className: "interface-preferences-modal__section"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("legend", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "interface-preferences-modal__section-title"
  }, title), description && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "interface-preferences-modal__section-description"
  }, description)), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Section);


/***/ }),

/***/ "./node_modules/@wordpress/interface/build-module/components/preferences-modal-tabs/index.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/components/preferences-modal-tabs/index.js ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PreferencesModalTabs; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/icon/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/chevron-left.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/chevron-right.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);


/**
 * WordPress dependencies
 */





const PREFERENCES_MENU = 'preferences-menu';
function PreferencesModalTabs(_ref) {
  let {
    sections
  } = _ref;
  const isLargeViewport = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.useViewportMatch)('medium'); // This is also used to sync the two different rendered components
  // between small and large viewports.

  const [activeMenu, setActiveMenu] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(PREFERENCES_MENU);
  /**
   * Create helper objects from `sections` for easier data handling.
   * `tabs` is used for creating the `TabPanel` and `sectionsContentMap`
   * is used for easier access to active tab's content.
   */

  const {
    tabs,
    sectionsContentMap
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    let mappedTabs = {
      tabs: [],
      sectionsContentMap: {}
    };

    if (sections.length) {
      mappedTabs = sections.reduce((accumulator, _ref2) => {
        let {
          name,
          tabLabel: title,
          content
        } = _ref2;
        accumulator.tabs.push({
          name,
          title
        });
        accumulator.sectionsContentMap[name] = content;
        return accumulator;
      }, {
        tabs: [],
        sectionsContentMap: {}
      });
    }

    return mappedTabs;
  }, [sections]);
  const getCurrentTab = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(tab => sectionsContentMap[tab.name] || null, [sectionsContentMap]);
  let modalContent; // We render different components based on the viewport size.

  if (isLargeViewport) {
    modalContent = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
      className: "interface-preferences__tabs",
      tabs: tabs,
      initialTabName: activeMenu !== PREFERENCES_MENU ? activeMenu : undefined,
      onSelect: setActiveMenu,
      orientation: "vertical"
    }, getCurrentTab);
  } else {
    modalContent = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalNavigatorProvider, {
      initialPath: "/",
      className: "interface-preferences__provider"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalNavigatorScreen, {
      path: "/"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Card, {
      isBorderless: true,
      size: "small"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CardBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalItemGroup, null, tabs.map(tab => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalNavigatorButton, {
        key: tab.name,
        path: tab.name,
        as: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalItem,
        isAction: true
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalHStack, {
        justify: "space-between"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalTruncate, null, tab.title)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"], {
        icon: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.isRTL)() ? _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"] : _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"]
      }))));
    }))))), sections.length && sections.map(section => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalNavigatorScreen, {
        key: `${section.name}-menu`,
        path: section.name
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Card, {
        isBorderless: true,
        size: "large"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CardHeader, {
        isBorderless: false,
        justify: "left",
        size: "small",
        gap: "6"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalNavigatorBackButton, {
        icon: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.isRTL)() ? _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"] : _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"],
        "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Navigate to the previous view')
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalText, {
        size: "16"
      }, section.tabLabel)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CardBody, null, section.content)));
    }));
  }

  return modalContent;
}


/***/ }),

/***/ "./node_modules/@wordpress/interface/build-module/components/preferences-modal/index.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/components/preferences-modal/index.js ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PreferencesModal; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);


/**
 * WordPress dependencies
 */


function PreferencesModal(_ref) {
  let {
    closeModal,
    children
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    className: "interface-preferences-modal",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Preferences'),
    closeLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Close'),
    onRequestClose: closeModal
  }, children);
}


/***/ }),

/***/ "./node_modules/@wordpress/interface/build-module/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/index.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionItem": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.ActionItem; },
/* harmony export */   "ComplementaryArea": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.ComplementaryArea; },
/* harmony export */   "ComplementaryAreaMoreMenuItem": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.ComplementaryAreaMoreMenuItem; },
/* harmony export */   "FullscreenMode": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.FullscreenMode; },
/* harmony export */   "InterfaceSkeleton": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.InterfaceSkeleton; },
/* harmony export */   "MoreMenuDropdown": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.MoreMenuDropdown; },
/* harmony export */   "MoreMenuFeatureToggle": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.MoreMenuFeatureToggle; },
/* harmony export */   "PinnedItems": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.PinnedItems; },
/* harmony export */   "PreferencesModal": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.PreferencesModal; },
/* harmony export */   "PreferencesModalSection": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.PreferencesModalSection; },
/* harmony export */   "PreferencesModalTabs": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.PreferencesModalTabs; },
/* harmony export */   "___unstablePreferencesModalBaseOption": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.___unstablePreferencesModalBaseOption; },
/* harmony export */   "store": function() { return /* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_1__.store; }
/* harmony export */ });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./node_modules/@wordpress/interface/build-module/components/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "./node_modules/@wordpress/interface/build-module/store/index.js");




/***/ }),

/***/ "./node_modules/@wordpress/interface/build-module/store/actions.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/store/actions.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "disableComplementaryArea": function() { return /* binding */ disableComplementaryArea; },
/* harmony export */   "enableComplementaryArea": function() { return /* binding */ enableComplementaryArea; },
/* harmony export */   "pinItem": function() { return /* binding */ pinItem; },
/* harmony export */   "setFeatureDefaults": function() { return /* binding */ setFeatureDefaults; },
/* harmony export */   "setFeatureValue": function() { return /* binding */ setFeatureValue; },
/* harmony export */   "toggleFeature": function() { return /* binding */ toggleFeature; },
/* harmony export */   "unpinItem": function() { return /* binding */ unpinItem; }
/* harmony export */ });
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/deprecated */ "@wordpress/deprecated");
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


/**
 * Enable the complementary area.
 *
 * @param {string} scope Complementary area scope.
 * @param {string} area  Area identifier.
 */

const enableComplementaryArea = (scope, area) => _ref => {
  let {
    registry
  } = _ref;

  // Return early if there's no area.
  if (!area) {
    return;
  }

  registry.dispatch(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__.store).set(scope, 'complementaryArea', area);
};
/**
 * Disable the complementary area.
 *
 * @param {string} scope Complementary area scope.
 */

const disableComplementaryArea = scope => _ref2 => {
  let {
    registry
  } = _ref2;
  registry.dispatch(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__.store).set(scope, 'complementaryArea', null);
};
/**
 * Pins an item.
 *
 * @param {string} scope Item scope.
 * @param {string} item  Item identifier.
 *
 * @return {Object} Action object.
 */

const pinItem = (scope, item) => _ref3 => {
  let {
    registry
  } = _ref3;

  // Return early if there's no item.
  if (!item) {
    return;
  }

  const pinnedItems = registry.select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__.store).get(scope, 'pinnedItems'); // The item is already pinned, there's nothing to do.

  if ((pinnedItems === null || pinnedItems === void 0 ? void 0 : pinnedItems[item]) === true) {
    return;
  }

  registry.dispatch(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__.store).set(scope, 'pinnedItems', { ...pinnedItems,
    [item]: true
  });
};
/**
 * Unpins an item.
 *
 * @param {string} scope Item scope.
 * @param {string} item  Item identifier.
 */

const unpinItem = (scope, item) => _ref4 => {
  let {
    registry
  } = _ref4;

  // Return early if there's no item.
  if (!item) {
    return;
  }

  const pinnedItems = registry.select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__.store).get(scope, 'pinnedItems');
  registry.dispatch(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__.store).set(scope, 'pinnedItems', { ...pinnedItems,
    [item]: false
  });
};
/**
 * Returns an action object used in signalling that a feature should be toggled.
 *
 * @param {string} scope       The feature scope (e.g. core/edit-post).
 * @param {string} featureName The feature name.
 */

function toggleFeature(scope, featureName) {
  return function (_ref5) {
    let {
      registry
    } = _ref5;
    _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0___default()(`dispatch( 'core/interface' ).toggleFeature`, {
      since: '6.0',
      alternative: `dispatch( 'core/preferences' ).toggle`
    });
    registry.dispatch(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__.store).toggle(scope, featureName);
  };
}
/**
 * Returns an action object used in signalling that a feature should be set to
 * a true or false value
 *
 * @param {string}  scope       The feature scope (e.g. core/edit-post).
 * @param {string}  featureName The feature name.
 * @param {boolean} value       The value to set.
 *
 * @return {Object} Action object.
 */

function setFeatureValue(scope, featureName, value) {
  return function (_ref6) {
    let {
      registry
    } = _ref6;
    _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0___default()(`dispatch( 'core/interface' ).setFeatureValue`, {
      since: '6.0',
      alternative: `dispatch( 'core/preferences' ).set`
    });
    registry.dispatch(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__.store).set(scope, featureName, !!value);
  };
}
/**
 * Returns an action object used in signalling that defaults should be set for features.
 *
 * @param {string}                  scope    The feature scope (e.g. core/edit-post).
 * @param {Object<string, boolean>} defaults A key/value map of feature names to values.
 *
 * @return {Object} Action object.
 */

function setFeatureDefaults(scope, defaults) {
  return function (_ref7) {
    let {
      registry
    } = _ref7;
    _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0___default()(`dispatch( 'core/interface' ).setFeatureDefaults`, {
      since: '6.0',
      alternative: `dispatch( 'core/preferences' ).setDefaults`
    });
    registry.dispatch(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__.store).setDefaults(scope, defaults);
  };
}


/***/ }),

/***/ "./node_modules/@wordpress/interface/build-module/store/constants.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/store/constants.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STORE_NAME": function() { return /* binding */ STORE_NAME; }
/* harmony export */ });
/**
 * The identifier for the data store.
 *
 * @type {string}
 */
const STORE_NAME = 'core/interface';


/***/ }),

/***/ "./node_modules/@wordpress/interface/build-module/store/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/store/index.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "store": function() { return /* binding */ store; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./node_modules/@wordpress/interface/build-module/store/actions.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectors */ "./node_modules/@wordpress/interface/build-module/store/selectors.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/@wordpress/interface/build-module/store/constants.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */




/**
 * Store definition for the interface namespace.
 *
 * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/data/README.md#createReduxStore
 *
 * @type {Object}
 */

const store = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createReduxStore)(_constants__WEBPACK_IMPORTED_MODULE_1__.STORE_NAME, {
  reducer: () => {},
  actions: _actions__WEBPACK_IMPORTED_MODULE_2__,
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_3__
}); // Once we build a more generic persistence plugin that works across types of stores
// we'd be able to replace this with a register call.

(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.register)(store);


/***/ }),

/***/ "./node_modules/@wordpress/interface/build-module/store/selectors.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/store/selectors.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getActiveComplementaryArea": function() { return /* binding */ getActiveComplementaryArea; },
/* harmony export */   "isFeatureActive": function() { return /* binding */ isFeatureActive; },
/* harmony export */   "isItemPinned": function() { return /* binding */ isItemPinned; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/deprecated */ "@wordpress/deprecated");
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_2__);
/**
 * WordPress dependencies
 */



/**
 * Returns the complementary area that is active in a given scope.
 *
 * @param {Object} state Global application state.
 * @param {string} scope Item scope.
 *
 * @return {string} The complementary area that is active in the given scope.
 */

const getActiveComplementaryArea = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)(select => (state, scope) => {
  return select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_2__.store).get(scope, 'complementaryArea');
});
/**
 * Returns a boolean indicating if an item is pinned or not.
 *
 * @param {Object} state Global application state.
 * @param {string} scope Scope.
 * @param {string} item  Item to check.
 *
 * @return {boolean} True if the item is pinned and false otherwise.
 */

const isItemPinned = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)(select => (state, scope, item) => {
  var _pinnedItems$item;

  const pinnedItems = select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_2__.store).get(scope, 'pinnedItems');
  return (_pinnedItems$item = pinnedItems === null || pinnedItems === void 0 ? void 0 : pinnedItems[item]) !== null && _pinnedItems$item !== void 0 ? _pinnedItems$item : true;
});
/**
 * Returns a boolean indicating whether a feature is active for a particular
 * scope.
 *
 * @param {Object} state       The store state.
 * @param {string} scope       The scope of the feature (e.g. core/edit-post).
 * @param {string} featureName The name of the feature.
 *
 * @return {boolean} Is the feature enabled?
 */

const isFeatureActive = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)(select => (state, scope, featureName) => {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_1___default()(`select( 'core/interface' ).isFeatureActive( scope, featureName )`, {
    since: '6.0',
    alternative: `select( 'core/preferences' ).get( scope, featureName )`
  });
  return !!select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_2__.store).get(scope, featureName);
});


/***/ }),

/***/ "./node_modules/@wordpress/style-engine/build-module/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/style-engine/build-module/index.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generate": function() { return /* binding */ generate; },
/* harmony export */   "getCSSRules": function() { return /* binding */ getCSSRules; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./node_modules/@wordpress/style-engine/build-module/styles/index.js");
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


/**
 * Generates a stylesheet for a given style object and selector.
 *
 * @param  style   Style object.
 * @param  options Options object with settings to adjust how the styles are generated.
 *
 * @return generated stylesheet.
 */

function generate(style, options) {
  const rules = getCSSRules(style, options);
  const groupedRules = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.groupBy)(rules, 'selector');
  const selectorRules = Object.keys(groupedRules).reduce((acc, subSelector) => {
    acc.push(`${subSelector} { ${groupedRules[subSelector].map(rule => `${(0,lodash__WEBPACK_IMPORTED_MODULE_0__.kebabCase)(rule.key)}: ${rule.value};`).join(' ')} }`);
    return acc;
  }, []);
  return selectorRules.join('\n');
}
/**
 * Returns a JSON representation of the generated CSS rules.
 *
 * @param  style   Style object.
 * @param  options Options object with settings to adjust how the styles are generated.
 *
 * @return generated styles.
 */

function getCSSRules(style, options) {
  const rules = [];
  _styles__WEBPACK_IMPORTED_MODULE_1__.styleDefinitions.forEach(definition => {
    rules.push(...definition.generate(style, options));
  });
  return rules;
}


/***/ }),

/***/ "./node_modules/@wordpress/style-engine/build-module/styles/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/style-engine/build-module/styles/index.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styleDefinitions": function() { return /* binding */ styleDefinitions; }
/* harmony export */ });
/* harmony import */ var _padding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./padding */ "./node_modules/@wordpress/style-engine/build-module/styles/padding.js");
/* harmony import */ var _margin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./margin */ "./node_modules/@wordpress/style-engine/build-module/styles/margin.js");
/**
 * Internal dependencies
 */


const styleDefinitions = [_margin__WEBPACK_IMPORTED_MODULE_0__["default"], _padding__WEBPACK_IMPORTED_MODULE_1__["default"]];


/***/ }),

/***/ "./node_modules/@wordpress/style-engine/build-module/styles/margin.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/style-engine/build-module/styles/margin.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/@wordpress/style-engine/build-module/styles/utils.js");
/**
 * Internal dependencies
 */

const margin = {
  name: 'margin',
  generate: (style, options) => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateBoxRules)(style, options, ['spacing', 'margin'], 'margin');
  }
};
/* harmony default export */ __webpack_exports__["default"] = (margin);


/***/ }),

/***/ "./node_modules/@wordpress/style-engine/build-module/styles/padding.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@wordpress/style-engine/build-module/styles/padding.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/@wordpress/style-engine/build-module/styles/utils.js");
/**
 * Internal dependencies
 */

const padding = {
  name: 'padding',
  generate: (style, options) => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateBoxRules)(style, options, ['spacing', 'padding'], 'padding');
  }
};
/* harmony default export */ __webpack_exports__["default"] = (padding);


/***/ }),

/***/ "./node_modules/@wordpress/style-engine/build-module/styles/utils.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/style-engine/build-module/styles/utils.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateBoxRules": function() { return /* binding */ generateBoxRules; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */

function generateBoxRules(style, options, path, ruleKey) {
  const boxStyle = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(style, path);

  if (!boxStyle) {
    return [];
  }

  const rules = [];

  if (typeof boxStyle === 'string') {
    rules.push({
      selector: options.selector,
      key: ruleKey,
      value: boxStyle
    });
  } else {
    const sideRules = ['top', 'right', 'bottom', 'left'].reduce((acc, side) => {
      const value = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(boxStyle, [side]);

      if (value) {
        acc.push({
          selector: options.selector,
          key: `${ruleKey}${(0,lodash__WEBPACK_IMPORTED_MODULE_0__.upperFirst)(side)}`,
          value
        });
      }

      return acc;
    }, []);
    rules.push(...sideRules);
  }

  return rules;
}


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

/***/ "./node_modules/downloadjs/download.js":
/*!*********************************************!*\
  !*** ./node_modules/downloadjs/download.js ***!
  \*********************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//download.js v4.2, by dandavis; 2008-2016. [MIT] see http://danml.com/download.html for tests/usage
// v1 landed a FF+Chrome compat way of downloading strings to local un-named files, upgraded to use a hidden frame and optional mime
// v2 added named files via a[download], msSaveBlob, IE (10+) support, and window.URL support for larger+faster saves than dataURLs
// v3 added dataURL and Blob Input, bind-toggle arity, and legacy dataURL fallback was improved with force-download mime and base64 support. 3.1 improved safari handling.
// v4 adds AMD/UMD, commonJS, and plain browser support
// v4.1 adds url download capability via solo URL argument (same domain/CORS only)
// v4.2 adds semantic variable names, long (over 2MB) dataURL support, and hidden by default temp anchors
// https://github.com/rndme/download

(function (root, factory) {
	if (true) {
		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}(this, function () {

	return function download(data, strFileName, strMimeType) {

		var self = window, // this script is only for browsers anyway...
			defaultMime = "application/octet-stream", // this default mime also triggers iframe downloads
			mimeType = strMimeType || defaultMime,
			payload = data,
			url = !strFileName && !strMimeType && payload,
			anchor = document.createElement("a"),
			toString = function(a){return String(a);},
			myBlob = (self.Blob || self.MozBlob || self.WebKitBlob || toString),
			fileName = strFileName || "download",
			blob,
			reader;
			myBlob= myBlob.call ? myBlob.bind(self) : Blob ;
	  
		if(String(this)==="true"){ //reverse arguments, allowing download.bind(true, "text/xml", "export.xml") to act as a callback
			payload=[payload, mimeType];
			mimeType=payload[0];
			payload=payload[1];
		}


		if(url && url.length< 2048){ // if no filename and no mime, assume a url was passed as the only argument
			fileName = url.split("/").pop().split("?")[0];
			anchor.href = url; // assign href prop to temp anchor
		  	if(anchor.href.indexOf(url) !== -1){ // if the browser determines that it's a potentially valid url path:
        		var ajax=new XMLHttpRequest();
        		ajax.open( "GET", url, true);
        		ajax.responseType = 'blob';
        		ajax.onload= function(e){ 
				  download(e.target.response, fileName, defaultMime);
				};
        		setTimeout(function(){ ajax.send();}, 0); // allows setting custom ajax headers using the return:
			    return ajax;
			} // end if valid url?
		} // end if url?


		//go ahead and download dataURLs right away
		if(/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(payload)){
		
			if(payload.length > (1024*1024*1.999) && myBlob !== toString ){
				payload=dataUrlToBlob(payload);
				mimeType=payload.type || defaultMime;
			}else{			
				return navigator.msSaveBlob ?  // IE10 can't do a[download], only Blobs:
					navigator.msSaveBlob(dataUrlToBlob(payload), fileName) :
					saver(payload) ; // everyone else can save dataURLs un-processed
			}
			
		}else{//not data url, is it a string with special needs?
			if(/([\x80-\xff])/.test(payload)){			  
				var i=0, tempUiArr= new Uint8Array(payload.length), mx=tempUiArr.length;
				for(i;i<mx;++i) tempUiArr[i]= payload.charCodeAt(i);
			 	payload=new myBlob([tempUiArr], {type: mimeType});
			}		  
		}
		blob = payload instanceof myBlob ?
			payload :
			new myBlob([payload], {type: mimeType}) ;


		function dataUrlToBlob(strUrl) {
			var parts= strUrl.split(/[:;,]/),
			type= parts[1],
			decoder= parts[2] == "base64" ? atob : decodeURIComponent,
			binData= decoder( parts.pop() ),
			mx= binData.length,
			i= 0,
			uiArr= new Uint8Array(mx);

			for(i;i<mx;++i) uiArr[i]= binData.charCodeAt(i);

			return new myBlob([uiArr], {type: type});
		 }

		function saver(url, winMode){

			if ('download' in anchor) { //html5 A[download]
				anchor.href = url;
				anchor.setAttribute("download", fileName);
				anchor.className = "download-js-link";
				anchor.innerHTML = "downloading...";
				anchor.style.display = "none";
				document.body.appendChild(anchor);
				setTimeout(function() {
					anchor.click();
					document.body.removeChild(anchor);
					if(winMode===true){setTimeout(function(){ self.URL.revokeObjectURL(anchor.href);}, 250 );}
				}, 66);
				return true;
			}

			// handle non-a[download] safari as best we can:
			if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent)) {
				if(/^data:/.test(url))	url="data:"+url.replace(/^data:([\w\/\-\+]+)/, defaultMime);
				if(!window.open(url)){ // popup blocked, offer direct download:
					if(confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.")){ location.href=url; }
				}
				return true;
			}

			//do iframe dataURL download (old ch+FF):
			var f = document.createElement("iframe");
			document.body.appendChild(f);

			if(!winMode && /^data:/.test(url)){ // force a mime that will download:
				url="data:"+url.replace(/^data:([\w\/\-\+]+)/, defaultMime);
			}
			f.src=url;
			setTimeout(function(){ document.body.removeChild(f); }, 333);

		}//end saver




		if (navigator.msSaveBlob) { // IE10+ : (has Blob, but not a[download] or URL)
			return navigator.msSaveBlob(blob, fileName);
		}

		if(self.URL){ // simple fast and modern way using Blob and URL:
			saver(self.URL.createObjectURL(blob), true);
		}else{
			// handle non-Blob()+non-URL browsers:
			if(typeof blob === "string" || blob.constructor===toString ){
				try{
					return saver( "data:" +  mimeType   + ";base64,"  +  self.btoa(blob)  );
				}catch(y){
					return saver( "data:" +  mimeType   + "," + encodeURIComponent(blob)  );
				}
			}

			// Blob but not URL support:
			reader=new FileReader();
			reader.onload=function(e){
				saver(this.result);
			};
			reader.readAsDataURL(blob);
		}
		return true;
	}; /* end download() */
}));


/***/ }),

/***/ "./node_modules/history/index.js":
/*!***************************************!*\
  !*** ./node_modules/history/index.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Action": function() { return /* binding */ Action; },
/* harmony export */   "createBrowserHistory": function() { return /* binding */ createBrowserHistory; },
/* harmony export */   "createHashHistory": function() { return /* binding */ createHashHistory; },
/* harmony export */   "createMemoryHistory": function() { return /* binding */ createMemoryHistory; },
/* harmony export */   "createPath": function() { return /* binding */ createPath; },
/* harmony export */   "parsePath": function() { return /* binding */ parsePath; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");


/**
 * Actions represent the type of change to a location value.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#action
 */
var Action;

(function (Action) {
  /**
   * A POP indicates a change to an arbitrary index in the history stack, such
   * as a back or forward navigation. It does not describe the direction of the
   * navigation, only that the current index changed.
   *
   * Note: This is the default action for newly created history objects.
   */
  Action["Pop"] = "POP";
  /**
   * A PUSH indicates a new entry being added to the history stack, such as when
   * a link is clicked and a new page loads. When this happens, all subsequent
   * entries in the stack are lost.
   */

  Action["Push"] = "PUSH";
  /**
   * A REPLACE indicates the entry at the current index in the history stack
   * being replaced by a new one.
   */

  Action["Replace"] = "REPLACE";
})(Action || (Action = {}));

var readOnly =  true ? function (obj) {
  return Object.freeze(obj);
} : 0;

function warning(cond, message) {
  if (!cond) {
    // eslint-disable-next-line no-console
    if (typeof console !== 'undefined') console.warn(message);

    try {
      // Welcome to debugging history!
      //
      // This error is thrown as a convenience so you can more easily
      // find the source for a warning that appears in the console by
      // enabling "pause on exceptions" in your JavaScript debugger.
      throw new Error(message); // eslint-disable-next-line no-empty
    } catch (e) {}
  }
}

var BeforeUnloadEventType = 'beforeunload';
var HashChangeEventType = 'hashchange';
var PopStateEventType = 'popstate';
/**
 * Browser history stores the location in regular URLs. This is the standard for
 * most web apps, but it requires some configuration on the server to ensure you
 * serve the same app at multiple URLs.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createbrowserhistory
 */

function createBrowserHistory(options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$window = _options.window,
      window = _options$window === void 0 ? document.defaultView : _options$window;
  var globalHistory = window.history;

  function getIndexAndLocation() {
    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var state = globalHistory.state || {};
    return [state.idx, readOnly({
      pathname: pathname,
      search: search,
      hash: hash,
      state: state.usr || null,
      key: state.key || 'default'
    })];
  }

  var blockedPopTx = null;

  function handlePop() {
    if (blockedPopTx) {
      blockers.call(blockedPopTx);
      blockedPopTx = null;
    } else {
      var nextAction = Action.Pop;

      var _getIndexAndLocation = getIndexAndLocation(),
          nextIndex = _getIndexAndLocation[0],
          nextLocation = _getIndexAndLocation[1];

      if (blockers.length) {
        if (nextIndex != null) {
          var delta = index - nextIndex;

          if (delta) {
            // Revert the POP
            blockedPopTx = {
              action: nextAction,
              location: nextLocation,
              retry: function retry() {
                go(delta * -1);
              }
            };
            go(delta);
          }
        } else {
          // Trying to POP to a location with no index. We did not create
          // this location, so we can't effectively block the navigation.
           true ? warning(false, // TODO: Write up a doc that explains our blocking strategy in
          // detail and link to it here so people can understand better what
          // is going on and how to avoid it.
          "You are trying to block a POP navigation to a location that was not " + "created by the history library. The block will fail silently in " + "production, but in general you should do all navigation with the " + "history library (instead of using window.history.pushState directly) " + "to avoid this situation.") : 0;
        }
      } else {
        applyTx(nextAction);
      }
    }
  }

  window.addEventListener(PopStateEventType, handlePop);
  var action = Action.Pop;

  var _getIndexAndLocation2 = getIndexAndLocation(),
      index = _getIndexAndLocation2[0],
      location = _getIndexAndLocation2[1];

  var listeners = createEvents();
  var blockers = createEvents();

  if (index == null) {
    index = 0;
    globalHistory.replaceState((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, globalHistory.state, {
      idx: index
    }), '');
  }

  function createHref(to) {
    return typeof to === 'string' ? to : createPath(to);
  } // state defaults to `null` because `window.history.state` does


  function getNextLocation(to, state) {
    if (state === void 0) {
      state = null;
    }

    return readOnly((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      pathname: location.pathname,
      hash: '',
      search: ''
    }, typeof to === 'string' ? parsePath(to) : to, {
      state: state,
      key: createKey()
    }));
  }

  function getHistoryStateAndUrl(nextLocation, index) {
    return [{
      usr: nextLocation.state,
      key: nextLocation.key,
      idx: index
    }, createHref(nextLocation)];
  }

  function allowTx(action, location, retry) {
    return !blockers.length || (blockers.call({
      action: action,
      location: location,
      retry: retry
    }), false);
  }

  function applyTx(nextAction) {
    action = nextAction;

    var _getIndexAndLocation3 = getIndexAndLocation();

    index = _getIndexAndLocation3[0];
    location = _getIndexAndLocation3[1];
    listeners.call({
      action: action,
      location: location
    });
  }

  function push(to, state) {
    var nextAction = Action.Push;
    var nextLocation = getNextLocation(to, state);

    function retry() {
      push(to, state);
    }

    if (allowTx(nextAction, nextLocation, retry)) {
      var _getHistoryStateAndUr = getHistoryStateAndUrl(nextLocation, index + 1),
          historyState = _getHistoryStateAndUr[0],
          url = _getHistoryStateAndUr[1]; // TODO: Support forced reloading
      // try...catch because iOS limits us to 100 pushState calls :/


      try {
        globalHistory.pushState(historyState, '', url);
      } catch (error) {
        // They are going to lose state here, but there is no real
        // way to warn them about it since the page will refresh...
        window.location.assign(url);
      }

      applyTx(nextAction);
    }
  }

  function replace(to, state) {
    var nextAction = Action.Replace;
    var nextLocation = getNextLocation(to, state);

    function retry() {
      replace(to, state);
    }

    if (allowTx(nextAction, nextLocation, retry)) {
      var _getHistoryStateAndUr2 = getHistoryStateAndUrl(nextLocation, index),
          historyState = _getHistoryStateAndUr2[0],
          url = _getHistoryStateAndUr2[1]; // TODO: Support forced reloading


      globalHistory.replaceState(historyState, '', url);
      applyTx(nextAction);
    }
  }

  function go(delta) {
    globalHistory.go(delta);
  }

  var history = {
    get action() {
      return action;
    },

    get location() {
      return location;
    },

    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    back: function back() {
      go(-1);
    },
    forward: function forward() {
      go(1);
    },
    listen: function listen(listener) {
      return listeners.push(listener);
    },
    block: function block(blocker) {
      var unblock = blockers.push(blocker);

      if (blockers.length === 1) {
        window.addEventListener(BeforeUnloadEventType, promptBeforeUnload);
      }

      return function () {
        unblock(); // Remove the beforeunload listener so the document may
        // still be salvageable in the pagehide event.
        // See https://html.spec.whatwg.org/#unloading-documents

        if (!blockers.length) {
          window.removeEventListener(BeforeUnloadEventType, promptBeforeUnload);
        }
      };
    }
  };
  return history;
}
/**
 * Hash history stores the location in window.location.hash. This makes it ideal
 * for situations where you don't want to send the location to the server for
 * some reason, either because you do cannot configure it or the URL space is
 * reserved for something else.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createhashhistory
 */

function createHashHistory(options) {
  if (options === void 0) {
    options = {};
  }

  var _options2 = options,
      _options2$window = _options2.window,
      window = _options2$window === void 0 ? document.defaultView : _options2$window;
  var globalHistory = window.history;

  function getIndexAndLocation() {
    var _parsePath = parsePath(window.location.hash.substr(1)),
        _parsePath$pathname = _parsePath.pathname,
        pathname = _parsePath$pathname === void 0 ? '/' : _parsePath$pathname,
        _parsePath$search = _parsePath.search,
        search = _parsePath$search === void 0 ? '' : _parsePath$search,
        _parsePath$hash = _parsePath.hash,
        hash = _parsePath$hash === void 0 ? '' : _parsePath$hash;

    var state = globalHistory.state || {};
    return [state.idx, readOnly({
      pathname: pathname,
      search: search,
      hash: hash,
      state: state.usr || null,
      key: state.key || 'default'
    })];
  }

  var blockedPopTx = null;

  function handlePop() {
    if (blockedPopTx) {
      blockers.call(blockedPopTx);
      blockedPopTx = null;
    } else {
      var nextAction = Action.Pop;

      var _getIndexAndLocation4 = getIndexAndLocation(),
          nextIndex = _getIndexAndLocation4[0],
          nextLocation = _getIndexAndLocation4[1];

      if (blockers.length) {
        if (nextIndex != null) {
          var delta = index - nextIndex;

          if (delta) {
            // Revert the POP
            blockedPopTx = {
              action: nextAction,
              location: nextLocation,
              retry: function retry() {
                go(delta * -1);
              }
            };
            go(delta);
          }
        } else {
          // Trying to POP to a location with no index. We did not create
          // this location, so we can't effectively block the navigation.
           true ? warning(false, // TODO: Write up a doc that explains our blocking strategy in
          // detail and link to it here so people can understand better
          // what is going on and how to avoid it.
          "You are trying to block a POP navigation to a location that was not " + "created by the history library. The block will fail silently in " + "production, but in general you should do all navigation with the " + "history library (instead of using window.history.pushState directly) " + "to avoid this situation.") : 0;
        }
      } else {
        applyTx(nextAction);
      }
    }
  }

  window.addEventListener(PopStateEventType, handlePop); // popstate does not fire on hashchange in IE 11 and old (trident) Edge
  // https://developer.mozilla.org/de/docs/Web/API/Window/popstate_event

  window.addEventListener(HashChangeEventType, function () {
    var _getIndexAndLocation5 = getIndexAndLocation(),
        nextLocation = _getIndexAndLocation5[1]; // Ignore extraneous hashchange events.


    if (createPath(nextLocation) !== createPath(location)) {
      handlePop();
    }
  });
  var action = Action.Pop;

  var _getIndexAndLocation6 = getIndexAndLocation(),
      index = _getIndexAndLocation6[0],
      location = _getIndexAndLocation6[1];

  var listeners = createEvents();
  var blockers = createEvents();

  if (index == null) {
    index = 0;
    globalHistory.replaceState((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, globalHistory.state, {
      idx: index
    }), '');
  }

  function getBaseHref() {
    var base = document.querySelector('base');
    var href = '';

    if (base && base.getAttribute('href')) {
      var url = window.location.href;
      var hashIndex = url.indexOf('#');
      href = hashIndex === -1 ? url : url.slice(0, hashIndex);
    }

    return href;
  }

  function createHref(to) {
    return getBaseHref() + '#' + (typeof to === 'string' ? to : createPath(to));
  }

  function getNextLocation(to, state) {
    if (state === void 0) {
      state = null;
    }

    return readOnly((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      pathname: location.pathname,
      hash: '',
      search: ''
    }, typeof to === 'string' ? parsePath(to) : to, {
      state: state,
      key: createKey()
    }));
  }

  function getHistoryStateAndUrl(nextLocation, index) {
    return [{
      usr: nextLocation.state,
      key: nextLocation.key,
      idx: index
    }, createHref(nextLocation)];
  }

  function allowTx(action, location, retry) {
    return !blockers.length || (blockers.call({
      action: action,
      location: location,
      retry: retry
    }), false);
  }

  function applyTx(nextAction) {
    action = nextAction;

    var _getIndexAndLocation7 = getIndexAndLocation();

    index = _getIndexAndLocation7[0];
    location = _getIndexAndLocation7[1];
    listeners.call({
      action: action,
      location: location
    });
  }

  function push(to, state) {
    var nextAction = Action.Push;
    var nextLocation = getNextLocation(to, state);

    function retry() {
      push(to, state);
    }

     true ? warning(nextLocation.pathname.charAt(0) === '/', "Relative pathnames are not supported in hash history.push(" + JSON.stringify(to) + ")") : 0;

    if (allowTx(nextAction, nextLocation, retry)) {
      var _getHistoryStateAndUr3 = getHistoryStateAndUrl(nextLocation, index + 1),
          historyState = _getHistoryStateAndUr3[0],
          url = _getHistoryStateAndUr3[1]; // TODO: Support forced reloading
      // try...catch because iOS limits us to 100 pushState calls :/


      try {
        globalHistory.pushState(historyState, '', url);
      } catch (error) {
        // They are going to lose state here, but there is no real
        // way to warn them about it since the page will refresh...
        window.location.assign(url);
      }

      applyTx(nextAction);
    }
  }

  function replace(to, state) {
    var nextAction = Action.Replace;
    var nextLocation = getNextLocation(to, state);

    function retry() {
      replace(to, state);
    }

     true ? warning(nextLocation.pathname.charAt(0) === '/', "Relative pathnames are not supported in hash history.replace(" + JSON.stringify(to) + ")") : 0;

    if (allowTx(nextAction, nextLocation, retry)) {
      var _getHistoryStateAndUr4 = getHistoryStateAndUrl(nextLocation, index),
          historyState = _getHistoryStateAndUr4[0],
          url = _getHistoryStateAndUr4[1]; // TODO: Support forced reloading


      globalHistory.replaceState(historyState, '', url);
      applyTx(nextAction);
    }
  }

  function go(delta) {
    globalHistory.go(delta);
  }

  var history = {
    get action() {
      return action;
    },

    get location() {
      return location;
    },

    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    back: function back() {
      go(-1);
    },
    forward: function forward() {
      go(1);
    },
    listen: function listen(listener) {
      return listeners.push(listener);
    },
    block: function block(blocker) {
      var unblock = blockers.push(blocker);

      if (blockers.length === 1) {
        window.addEventListener(BeforeUnloadEventType, promptBeforeUnload);
      }

      return function () {
        unblock(); // Remove the beforeunload listener so the document may
        // still be salvageable in the pagehide event.
        // See https://html.spec.whatwg.org/#unloading-documents

        if (!blockers.length) {
          window.removeEventListener(BeforeUnloadEventType, promptBeforeUnload);
        }
      };
    }
  };
  return history;
}
/**
 * Memory history stores the current location in memory. It is designed for use
 * in stateful non-browser environments like tests and React Native.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#creatememoryhistory
 */

function createMemoryHistory(options) {
  if (options === void 0) {
    options = {};
  }

  var _options3 = options,
      _options3$initialEntr = _options3.initialEntries,
      initialEntries = _options3$initialEntr === void 0 ? ['/'] : _options3$initialEntr,
      initialIndex = _options3.initialIndex;
  var entries = initialEntries.map(function (entry) {
    var location = readOnly((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      pathname: '/',
      search: '',
      hash: '',
      state: null,
      key: createKey()
    }, typeof entry === 'string' ? parsePath(entry) : entry));
     true ? warning(location.pathname.charAt(0) === '/', "Relative pathnames are not supported in createMemoryHistory({ initialEntries }) (invalid entry: " + JSON.stringify(entry) + ")") : 0;
    return location;
  });
  var index = clamp(initialIndex == null ? entries.length - 1 : initialIndex, 0, entries.length - 1);
  var action = Action.Pop;
  var location = entries[index];
  var listeners = createEvents();
  var blockers = createEvents();

  function createHref(to) {
    return typeof to === 'string' ? to : createPath(to);
  }

  function getNextLocation(to, state) {
    if (state === void 0) {
      state = null;
    }

    return readOnly((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      pathname: location.pathname,
      search: '',
      hash: ''
    }, typeof to === 'string' ? parsePath(to) : to, {
      state: state,
      key: createKey()
    }));
  }

  function allowTx(action, location, retry) {
    return !blockers.length || (blockers.call({
      action: action,
      location: location,
      retry: retry
    }), false);
  }

  function applyTx(nextAction, nextLocation) {
    action = nextAction;
    location = nextLocation;
    listeners.call({
      action: action,
      location: location
    });
  }

  function push(to, state) {
    var nextAction = Action.Push;
    var nextLocation = getNextLocation(to, state);

    function retry() {
      push(to, state);
    }

     true ? warning(location.pathname.charAt(0) === '/', "Relative pathnames are not supported in memory history.push(" + JSON.stringify(to) + ")") : 0;

    if (allowTx(nextAction, nextLocation, retry)) {
      index += 1;
      entries.splice(index, entries.length, nextLocation);
      applyTx(nextAction, nextLocation);
    }
  }

  function replace(to, state) {
    var nextAction = Action.Replace;
    var nextLocation = getNextLocation(to, state);

    function retry() {
      replace(to, state);
    }

     true ? warning(location.pathname.charAt(0) === '/', "Relative pathnames are not supported in memory history.replace(" + JSON.stringify(to) + ")") : 0;

    if (allowTx(nextAction, nextLocation, retry)) {
      entries[index] = nextLocation;
      applyTx(nextAction, nextLocation);
    }
  }

  function go(delta) {
    var nextIndex = clamp(index + delta, 0, entries.length - 1);
    var nextAction = Action.Pop;
    var nextLocation = entries[nextIndex];

    function retry() {
      go(delta);
    }

    if (allowTx(nextAction, nextLocation, retry)) {
      index = nextIndex;
      applyTx(nextAction, nextLocation);
    }
  }

  var history = {
    get index() {
      return index;
    },

    get action() {
      return action;
    },

    get location() {
      return location;
    },

    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    back: function back() {
      go(-1);
    },
    forward: function forward() {
      go(1);
    },
    listen: function listen(listener) {
      return listeners.push(listener);
    },
    block: function block(blocker) {
      return blockers.push(blocker);
    }
  };
  return history;
} ////////////////////////////////////////////////////////////////////////////////
// UTILS
////////////////////////////////////////////////////////////////////////////////

function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
}

function promptBeforeUnload(event) {
  // Cancel the event.
  event.preventDefault(); // Chrome (and legacy IE) requires returnValue to be set.

  event.returnValue = '';
}

function createEvents() {
  var handlers = [];
  return {
    get length() {
      return handlers.length;
    },

    push: function push(fn) {
      handlers.push(fn);
      return function () {
        handlers = handlers.filter(function (handler) {
          return handler !== fn;
        });
      };
    },
    call: function call(arg) {
      handlers.forEach(function (fn) {
        return fn && fn(arg);
      });
    }
  };
}

function createKey() {
  return Math.random().toString(36).substr(2, 8);
}
/**
 * Creates a string URL path from the given pathname, search, and hash components.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createpath
 */


function createPath(_ref) {
  var _ref$pathname = _ref.pathname,
      pathname = _ref$pathname === void 0 ? '/' : _ref$pathname,
      _ref$search = _ref.search,
      search = _ref$search === void 0 ? '' : _ref$search,
      _ref$hash = _ref.hash,
      hash = _ref$hash === void 0 ? '' : _ref$hash;
  if (search && search !== '?') pathname += search.charAt(0) === '?' ? search : '?' + search;
  if (hash && hash !== '#') pathname += hash.charAt(0) === '#' ? hash : '#' + hash;
  return pathname;
}
/**
 * Parses a string URL path into its separate pathname, search, and hash components.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#parsepath
 */

function parsePath(path) {
  var parsedPath = {};

  if (path) {
    var hashIndex = path.indexOf('#');

    if (hashIndex >= 0) {
      parsedPath.hash = path.substr(hashIndex);
      path = path.substr(0, hashIndex);
    }

    var searchIndex = path.indexOf('?');

    if (searchIndex >= 0) {
      parsedPath.search = path.substr(searchIndex);
      path = path.substr(0, searchIndex);
    }

    if (path) {
      parsedPath.pathname = path;
    }
  }

  return parsedPath;
}




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

/***/ "@wordpress/block-library":
/*!**************************************!*\
  !*** external ["wp","blockLibrary"] ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockLibrary"];

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

/***/ "@wordpress/deprecated":
/*!************************************!*\
  !*** external ["wp","deprecated"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["deprecated"];

/***/ }),

/***/ "@wordpress/editor":
/*!********************************!*\
  !*** external ["wp","editor"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["editor"];

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

/***/ "@wordpress/plugins":
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["plugins"];

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

/***/ "@wordpress/url":
/*!*****************************!*\
  !*** external ["wp","url"] ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["url"];

/***/ }),

/***/ "@wordpress/viewport":
/*!**********************************!*\
  !*** external ["wp","viewport"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["viewport"];

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
/*!*****************************************************************!*\
  !*** ./node_modules/@wordpress/edit-site/build-module/index.js ***!
  \*****************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginMoreMenuItem": function() { return /* reexport safe */ _components_header_plugin_more_menu_item__WEBPACK_IMPORTED_MODULE_19__["default"]; },
/* harmony export */   "PluginSidebar": function() { return /* reexport safe */ _components_sidebar_plugin_sidebar__WEBPACK_IMPORTED_MODULE_17__["default"]; },
/* harmony export */   "PluginSidebarMoreMenuItem": function() { return /* reexport safe */ _components_header_plugin_sidebar_more_menu_item__WEBPACK_IMPORTED_MODULE_18__["default"]; },
/* harmony export */   "__experimentalMainDashboardButton": function() { return /* reexport safe */ _components_main_dashboard_button__WEBPACK_IMPORTED_MODULE_15__["default"]; },
/* harmony export */   "__experimentalNavigationToggle": function() { return /* reexport safe */ _components_navigation_sidebar_navigation_toggle__WEBPACK_IMPORTED_MODULE_16__["default"]; },
/* harmony export */   "initializeEditor": function() { return /* binding */ initializeEditor; },
/* harmony export */   "reinitializeEditor": function() { return /* binding */ reinitializeEditor; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-library */ "@wordpress/block-library");
/* harmony import */ var _wordpress_block_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_viewport__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/viewport */ "@wordpress/viewport");
/* harmony import */ var _wordpress_viewport__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_viewport__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hooks */ "./node_modules/@wordpress/edit-site/build-module/hooks/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store */ "./node_modules/@wordpress/edit-site/build-module/store/index.js");
/* harmony import */ var _components_app__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/app */ "./node_modules/@wordpress/edit-site/build-module/components/app/index.js");
/* harmony import */ var _utils_get_is_list_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils/get-is-list-page */ "./node_modules/@wordpress/edit-site/build-module/utils/get-is-list-page.js");
/* harmony import */ var _components_error_boundary_warning__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/error-boundary/warning */ "./node_modules/@wordpress/edit-site/build-module/components/error-boundary/warning.js");
/* harmony import */ var _components_main_dashboard_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/main-dashboard-button */ "./node_modules/@wordpress/edit-site/build-module/components/main-dashboard-button/index.js");
/* harmony import */ var _components_navigation_sidebar_navigation_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/navigation-sidebar/navigation-toggle */ "./node_modules/@wordpress/edit-site/build-module/components/navigation-sidebar/navigation-toggle/index.js");
/* harmony import */ var _components_sidebar_plugin_sidebar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/sidebar/plugin-sidebar */ "./node_modules/@wordpress/edit-site/build-module/components/sidebar/plugin-sidebar/index.js");
/* harmony import */ var _components_header_plugin_sidebar_more_menu_item__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/header/plugin-sidebar-more-menu-item */ "./node_modules/@wordpress/edit-site/build-module/components/header/plugin-sidebar-more-menu-item/index.js");
/* harmony import */ var _components_header_plugin_more_menu_item__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/header/plugin-more-menu-item */ "./node_modules/@wordpress/edit-site/build-module/components/header/plugin-more-menu-item/index.js");


/**
 * WordPress dependencies
 */










/**
 * Internal dependencies
 */






/**
 * Reinitializes the editor after the user chooses to reboot the editor after
 * an unhandled error occurs, replacing previously mounted editor element using
 * an initial state from prior to the crash.
 *
 * @param {Element} target   DOM node in which editor is rendered.
 * @param {?Object} settings Editor settings object.
 */

function reinitializeEditor(target, settings) {
  // Display warning if editor wasn't able to resolve homepage template.
  if (!settings.__unstableHomeTemplate) {
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.render)((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_error_boundary_warning__WEBPACK_IMPORTED_MODULE_14__["default"], {
      message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('The editor is unable to find a block template for the homepage.'),
      dashboardLink: "index.php"
    }), target);
    return;
  } // This will be a no-op if the target doesn't have any React nodes.


  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.unmountComponentAtNode)(target);
  const reboot = reinitializeEditor.bind(null, target, settings); // We dispatch actions and update the store synchronously before rendering
  // so that we won't trigger unnecessary re-renders with useEffect.

  {
    (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.dispatch)(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_6__.store).setDefaults('core/edit-site', {
      editorMode: 'visual',
      fixedToolbar: false,
      focusMode: false,
      keepCaretInsideBlock: false,
      welcomeGuide: true,
      welcomeGuideStyles: true
    });
    (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.dispatch)(_store__WEBPACK_IMPORTED_MODULE_11__.store).updateSettings(settings); // Keep the defaultTemplateTypes in the core/editor settings too,
    // so that they can be selected with core/editor selectors in any editor.
    // This is needed because edit-site doesn't initialize with EditorProvider,
    // which internally uses updateEditorSettings as well.

    (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.dispatch)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__.store).updateEditorSettings({
      defaultTemplateTypes: settings.defaultTemplateTypes,
      defaultTemplatePartAreas: settings.defaultTemplatePartAreas
    });
    const isLandingOnListPage = (0,_utils_get_is_list_page__WEBPACK_IMPORTED_MODULE_13__["default"])((0,_wordpress_url__WEBPACK_IMPORTED_MODULE_9__.getQueryArgs)(window.location.href));

    if (isLandingOnListPage) {
      // Default the navigation panel to be opened when we're in a bigger
      // screen and land in the list screen.
      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.dispatch)(_store__WEBPACK_IMPORTED_MODULE_11__.store).setIsNavigationPanelOpened((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.select)(_wordpress_viewport__WEBPACK_IMPORTED_MODULE_8__.store).isViewportMatch('medium'));
    }
  }
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.render)((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_app__WEBPACK_IMPORTED_MODULE_12__["default"], {
    reboot: reboot
  }), target);
}
/**
 * Initializes the site editor screen.
 *
 * @param {string} id       ID of the root element to render the screen in.
 * @param {Object} settings Editor settings.
 */

function initializeEditor(id, settings) {
  settings.__experimentalFetchLinkSuggestions = (search, searchOptions) => (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.__experimentalFetchLinkSuggestions)(search, searchOptions, settings);

  settings.__experimentalFetchRichUrlData = _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.__experimentalFetchUrlData;
  settings.__experimentalSpotlightEntityBlocks = ['core/template-part'];
  const target = document.getElementById(id);

  (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.dispatch)(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.store).__experimentalReapplyBlockTypeFilters();

  (0,_wordpress_block_library__WEBPACK_IMPORTED_MODULE_2__.registerCoreBlocks)();

  if (false) {}

  reinitializeEditor(target, settings);
}






}();
(window.wp = window.wp || {}).editSite = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=edit-site.js.map