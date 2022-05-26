/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/core-data/build-module/actions.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/actions.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__experimentalBatch": function() { return /* binding */ __experimentalBatch; },
/* harmony export */   "__experimentalReceiveCurrentGlobalStylesId": function() { return /* binding */ __experimentalReceiveCurrentGlobalStylesId; },
/* harmony export */   "__experimentalReceiveThemeBaseGlobalStyles": function() { return /* binding */ __experimentalReceiveThemeBaseGlobalStyles; },
/* harmony export */   "__experimentalReceiveThemeGlobalStyleVariations": function() { return /* binding */ __experimentalReceiveThemeGlobalStyleVariations; },
/* harmony export */   "__experimentalSaveSpecifiedEntityEdits": function() { return /* binding */ __experimentalSaveSpecifiedEntityEdits; },
/* harmony export */   "__unstableCreateUndoLevel": function() { return /* binding */ __unstableCreateUndoLevel; },
/* harmony export */   "addEntities": function() { return /* binding */ addEntities; },
/* harmony export */   "deleteEntityRecord": function() { return /* binding */ deleteEntityRecord; },
/* harmony export */   "editEntityRecord": function() { return /* binding */ editEntityRecord; },
/* harmony export */   "receiveAutosaves": function() { return /* binding */ receiveAutosaves; },
/* harmony export */   "receiveCurrentTheme": function() { return /* binding */ receiveCurrentTheme; },
/* harmony export */   "receiveCurrentUser": function() { return /* binding */ receiveCurrentUser; },
/* harmony export */   "receiveEmbedPreview": function() { return /* binding */ receiveEmbedPreview; },
/* harmony export */   "receiveEntityRecords": function() { return /* binding */ receiveEntityRecords; },
/* harmony export */   "receiveThemeSupports": function() { return /* binding */ receiveThemeSupports; },
/* harmony export */   "receiveUploadPermissions": function() { return /* binding */ receiveUploadPermissions; },
/* harmony export */   "receiveUserPermission": function() { return /* binding */ receiveUserPermission; },
/* harmony export */   "receiveUserQuery": function() { return /* binding */ receiveUserQuery; },
/* harmony export */   "redo": function() { return /* binding */ redo; },
/* harmony export */   "saveEditedEntityRecord": function() { return /* binding */ saveEditedEntityRecord; },
/* harmony export */   "saveEntityRecord": function() { return /* binding */ saveEntityRecord; },
/* harmony export */   "undo": function() { return /* binding */ undo; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/deprecated */ "@wordpress/deprecated");
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _queried_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./queried-data */ "./node_modules/@wordpress/core-data/build-module/queried-data/actions.js");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./entities */ "./node_modules/@wordpress/core-data/build-module/entities.js");
/* harmony import */ var _batch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./batch */ "./node_modules/@wordpress/core-data/build-module/batch/create-batch.js");
/* harmony import */ var _name__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./name */ "./node_modules/@wordpress/core-data/build-module/name.js");
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
 * Returns an action object used in signalling that authors have been received.
 *
 * @param {string}       queryID Query ID.
 * @param {Array|Object} users   Users received.
 *
 * @return {Object} Action object.
 */

function receiveUserQuery(queryID, users) {
  return {
    type: 'RECEIVE_USER_QUERY',
    users: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.castArray)(users),
    queryID
  };
}
/**
 * Returns an action used in signalling that the current user has been received.
 *
 * @param {Object} currentUser Current user object.
 *
 * @return {Object} Action object.
 */

function receiveCurrentUser(currentUser) {
  return {
    type: 'RECEIVE_CURRENT_USER',
    currentUser
  };
}
/**
 * Returns an action object used in adding new entities.
 *
 * @param {Array} entities Entities received.
 *
 * @return {Object} Action object.
 */

function addEntities(entities) {
  return {
    type: 'ADD_ENTITIES',
    entities
  };
}
/**
 * Returns an action object used in signalling that entity records have been received.
 *
 * @param {string}       kind            Kind of the received entity record.
 * @param {string}       name            Name of the received entity record.
 * @param {Array|Object} records         Records received.
 * @param {?Object}      query           Query Object.
 * @param {?boolean}     invalidateCache Should invalidate query caches.
 * @param {?Object}      edits           Edits to reset.
 * @return {Object} Action object.
 */

function receiveEntityRecords(kind, name, records, query) {
  let invalidateCache = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  let edits = arguments.length > 5 ? arguments[5] : undefined;

  // Auto drafts should not have titles, but some plugins rely on them so we can't filter this
  // on the server.
  if (kind === 'postType') {
    records = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.castArray)(records).map(record => record.status === 'auto-draft' ? { ...record,
      title: ''
    } : record);
  }

  let action;

  if (query) {
    action = (0,_queried_data__WEBPACK_IMPORTED_MODULE_4__.receiveQueriedItems)(records, query, edits);
  } else {
    action = (0,_queried_data__WEBPACK_IMPORTED_MODULE_4__.receiveItems)(records, edits);
  }

  return { ...action,
    kind,
    name,
    invalidateCache
  };
}
/**
 * Returns an action object used in signalling that the current theme has been received.
 *
 * @param {Object} currentTheme The current theme.
 *
 * @return {Object} Action object.
 */

function receiveCurrentTheme(currentTheme) {
  return {
    type: 'RECEIVE_CURRENT_THEME',
    currentTheme
  };
}
/**
 * Returns an action object used in signalling that the current global styles id has been received.
 *
 * @param {string} currentGlobalStylesId The current global styles id.
 *
 * @return {Object} Action object.
 */

function __experimentalReceiveCurrentGlobalStylesId(currentGlobalStylesId) {
  return {
    type: 'RECEIVE_CURRENT_GLOBAL_STYLES_ID',
    id: currentGlobalStylesId
  };
}
/**
 * Returns an action object used in signalling that the theme base global styles have been received
 *
 * @param {string} stylesheet   The theme's identifier
 * @param {Object} globalStyles The global styles object.
 *
 * @return {Object} Action object.
 */

function __experimentalReceiveThemeBaseGlobalStyles(stylesheet, globalStyles) {
  return {
    type: 'RECEIVE_THEME_GLOBAL_STYLES',
    stylesheet,
    globalStyles
  };
}
/**
 * Returns an action object used in signalling that the theme global styles variations have been received.
 *
 * @param {string} stylesheet The theme's identifier
 * @param {Array}  variations The global styles variations.
 *
 * @return {Object} Action object.
 */

function __experimentalReceiveThemeGlobalStyleVariations(stylesheet, variations) {
  return {
    type: 'RECEIVE_THEME_GLOBAL_STYLE_VARIATIONS',
    stylesheet,
    variations
  };
}
/**
 * Returns an action object used in signalling that the index has been received.
 *
 * @deprecated since WP 5.9, this is not useful anymore, use the selector direclty.
 *
 * @return {Object} Action object.
 */

function receiveThemeSupports() {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_3___default()("wp.data.dispatch( 'core' ).receiveThemeSupports", {
    since: '5.9'
  });
  return {
    type: 'DO_NOTHING'
  };
}
/**
 * Returns an action object used in signalling that the preview data for
 * a given URl has been received.
 *
 * @param {string} url     URL to preview the embed for.
 * @param {*}      preview Preview data.
 *
 * @return {Object} Action object.
 */

function receiveEmbedPreview(url, preview) {
  return {
    type: 'RECEIVE_EMBED_PREVIEW',
    url,
    preview
  };
}
/**
 * Action triggered to delete an entity record.
 *
 * @param {string}   kind                         Kind of the deleted entity.
 * @param {string}   name                         Name of the deleted entity.
 * @param {string}   recordId                     Record ID of the deleted entity.
 * @param {?Object}  query                        Special query parameters for the
 *                                                DELETE API call.
 * @param {Object}   [options]                    Delete options.
 * @param {Function} [options.__unstableFetch]    Internal use only. Function to
 *                                                call instead of `apiFetch()`.
 *                                                Must return a promise.
 * @param {boolean}  [options.throwOnError=false] If false, this action suppresses all
 *                                                the exceptions. Defaults to false.
 */

const deleteEntityRecord = function (kind, name, recordId, query) {
  let {
    __unstableFetch = (_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()),
    throwOnError = false
  } = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  return async _ref => {
    let {
      dispatch
    } = _ref;
    const configs = await dispatch((0,_entities__WEBPACK_IMPORTED_MODULE_5__.getOrLoadEntitiesConfig)(kind));
    const entityConfig = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(configs, {
      kind,
      name
    });
    let error;
    let deletedRecord = false;

    if (!entityConfig || entityConfig !== null && entityConfig !== void 0 && entityConfig.__experimentalNoFetch) {
      return;
    }

    const lock = await dispatch.__unstableAcquireStoreLock(_name__WEBPACK_IMPORTED_MODULE_6__.STORE_NAME, ['entities', 'records', kind, name, recordId], {
      exclusive: true
    });

    try {
      dispatch({
        type: 'DELETE_ENTITY_RECORD_START',
        kind,
        name,
        recordId
      });
      let hasError = false;

      try {
        let path = `${entityConfig.baseURL}/${recordId}`;

        if (query) {
          path = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_2__.addQueryArgs)(path, query);
        }

        deletedRecord = await __unstableFetch({
          path,
          method: 'DELETE'
        });
        await dispatch((0,_queried_data__WEBPACK_IMPORTED_MODULE_4__.removeItems)(kind, name, recordId, true));
      } catch (_error) {
        hasError = true;
        error = _error;
      }

      dispatch({
        type: 'DELETE_ENTITY_RECORD_FINISH',
        kind,
        name,
        recordId,
        error
      });

      if (hasError && throwOnError) {
        throw error;
      }

      return deletedRecord;
    } finally {
      dispatch.__unstableReleaseStoreLock(lock);
    }
  };
};
/**
 * Returns an action object that triggers an
 * edit to an entity record.
 *
 * @param {string}  kind                 Kind of the edited entity record.
 * @param {string}  name                 Name of the edited entity record.
 * @param {number}  recordId             Record ID of the edited entity record.
 * @param {Object}  edits                The edits.
 * @param {Object}  options              Options for the edit.
 * @param {boolean} [options.undoIgnore] Whether to ignore the edit in undo history or not.
 *
 * @return {Object} Action object.
 */

const editEntityRecord = function (kind, name, recordId, edits) {
  let options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  return _ref2 => {
    let {
      select,
      dispatch
    } = _ref2;
    const entityConfig = select.getEntityConfig(kind, name);

    if (!entityConfig) {
      throw new Error(`The entity being edited (${kind}, ${name}) does not have a loaded config.`);
    }

    const {
      transientEdits = {},
      mergedEdits = {}
    } = entityConfig;
    const record = select.getRawEntityRecord(kind, name, recordId);
    const editedRecord = select.getEditedEntityRecord(kind, name, recordId);
    const edit = {
      kind,
      name,
      recordId,
      // Clear edits when they are equal to their persisted counterparts
      // so that the property is not considered dirty.
      edits: Object.keys(edits).reduce((acc, key) => {
        const recordValue = record[key];
        const editedRecordValue = editedRecord[key];
        const value = mergedEdits[key] ? { ...editedRecordValue,
          ...edits[key]
        } : edits[key];
        acc[key] = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEqual)(recordValue, value) ? undefined : value;
        return acc;
      }, {}),
      transientEdits
    };
    dispatch({
      type: 'EDIT_ENTITY_RECORD',
      ...edit,
      meta: {
        undo: !options.undoIgnore && { ...edit,
          // Send the current values for things like the first undo stack entry.
          edits: Object.keys(edits).reduce((acc, key) => {
            acc[key] = editedRecord[key];
            return acc;
          }, {})
        }
      }
    });
  };
};
/**
 * Action triggered to undo the last edit to
 * an entity record, if any.
 */

const undo = () => _ref3 => {
  let {
    select,
    dispatch
  } = _ref3;
  const undoEdit = select.getUndoEdit();

  if (!undoEdit) {
    return;
  }

  dispatch({
    type: 'EDIT_ENTITY_RECORD',
    ...undoEdit,
    meta: {
      isUndo: true
    }
  });
};
/**
 * Action triggered to redo the last undoed
 * edit to an entity record, if any.
 */

const redo = () => _ref4 => {
  let {
    select,
    dispatch
  } = _ref4;
  const redoEdit = select.getRedoEdit();

  if (!redoEdit) {
    return;
  }

  dispatch({
    type: 'EDIT_ENTITY_RECORD',
    ...redoEdit,
    meta: {
      isRedo: true
    }
  });
};
/**
 * Forces the creation of a new undo level.
 *
 * @return {Object} Action object.
 */

function __unstableCreateUndoLevel() {
  return {
    type: 'CREATE_UNDO_LEVEL'
  };
}
/**
 * Action triggered to save an entity record.
 *
 * @param {string}   kind                         Kind of the received entity.
 * @param {string}   name                         Name of the received entity.
 * @param {Object}   record                       Record to be saved.
 * @param {Object}   options                      Saving options.
 * @param {boolean}  [options.isAutosave=false]   Whether this is an autosave.
 * @param {Function} [options.__unstableFetch]    Internal use only. Function to
 *                                                call instead of `apiFetch()`.
 *                                                Must return a promise.
 * @param {boolean}  [options.throwOnError=false] If false, this action suppresses all
 *                                                the exceptions. Defaults to false.
 */

const saveEntityRecord = function (kind, name, record) {
  let {
    isAutosave = false,
    __unstableFetch = (_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()),
    throwOnError = false
  } = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  return async _ref5 => {
    let {
      select,
      resolveSelect,
      dispatch
    } = _ref5;
    const configs = await dispatch((0,_entities__WEBPACK_IMPORTED_MODULE_5__.getOrLoadEntitiesConfig)(kind));
    const entityConfig = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(configs, {
      kind,
      name
    });

    if (!entityConfig || entityConfig !== null && entityConfig !== void 0 && entityConfig.__experimentalNoFetch) {
      return;
    }

    const entityIdKey = entityConfig.key || _entities__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_ENTITY_KEY;
    const recordId = record[entityIdKey];
    const lock = await dispatch.__unstableAcquireStoreLock(_name__WEBPACK_IMPORTED_MODULE_6__.STORE_NAME, ['entities', 'records', kind, name, recordId || (0,uuid__WEBPACK_IMPORTED_MODULE_7__["default"])()], {
      exclusive: true
    });

    try {
      // Evaluate optimized edits.
      // (Function edits that should be evaluated on save to avoid expensive computations on every edit.)
      for (const [key, value] of Object.entries(record)) {
        if (typeof value === 'function') {
          const evaluatedValue = value(select.getEditedEntityRecord(kind, name, recordId));
          dispatch.editEntityRecord(kind, name, recordId, {
            [key]: evaluatedValue
          }, {
            undoIgnore: true
          });
          record[key] = evaluatedValue;
        }
      }

      dispatch({
        type: 'SAVE_ENTITY_RECORD_START',
        kind,
        name,
        recordId,
        isAutosave
      });
      let updatedRecord;
      let error;
      let hasError = false;

      try {
        const path = `${entityConfig.baseURL}${recordId ? '/' + recordId : ''}`;
        const persistedRecord = select.getRawEntityRecord(kind, name, recordId);

        if (isAutosave) {
          // Most of this autosave logic is very specific to posts.
          // This is fine for now as it is the only supported autosave,
          // but ideally this should all be handled in the back end,
          // so the client just sends and receives objects.
          const currentUser = select.getCurrentUser();
          const currentUserId = currentUser ? currentUser.id : undefined;
          const autosavePost = await resolveSelect.getAutosave(persistedRecord.type, persistedRecord.id, currentUserId); // Autosaves need all expected fields to be present.
          // So we fallback to the previous autosave and then
          // to the actual persisted entity if the edits don't
          // have a value.

          let data = { ...persistedRecord,
            ...autosavePost,
            ...record
          };
          data = Object.keys(data).reduce((acc, key) => {
            if (['title', 'excerpt', 'content'].includes(key)) {
              acc[key] = data[key];
            }

            return acc;
          }, {
            status: data.status === 'auto-draft' ? 'draft' : data.status
          });
          updatedRecord = await __unstableFetch({
            path: `${path}/autosaves`,
            method: 'POST',
            data
          }); // An autosave may be processed by the server as a regular save
          // when its update is requested by the author and the post had
          // draft or auto-draft status.

          if (persistedRecord.id === updatedRecord.id) {
            let newRecord = { ...persistedRecord,
              ...data,
              ...updatedRecord
            };
            newRecord = Object.keys(newRecord).reduce((acc, key) => {
              // These properties are persisted in autosaves.
              if (['title', 'excerpt', 'content'].includes(key)) {
                acc[key] = newRecord[key];
              } else if (key === 'status') {
                // Status is only persisted in autosaves when going from
                // "auto-draft" to "draft".
                acc[key] = persistedRecord.status === 'auto-draft' && newRecord.status === 'draft' ? newRecord.status : persistedRecord.status;
              } else {
                // These properties are not persisted in autosaves.
                acc[key] = persistedRecord[key];
              }

              return acc;
            }, {});
            dispatch.receiveEntityRecords(kind, name, newRecord, undefined, true);
          } else {
            dispatch.receiveAutosaves(persistedRecord.id, updatedRecord);
          }
        } else {
          let edits = record;

          if (entityConfig.__unstablePrePersist) {
            edits = { ...edits,
              ...entityConfig.__unstablePrePersist(persistedRecord, edits)
            };
          }

          updatedRecord = await __unstableFetch({
            path,
            method: recordId ? 'PUT' : 'POST',
            data: edits
          });
          dispatch.receiveEntityRecords(kind, name, updatedRecord, undefined, true, edits);
        }
      } catch (_error) {
        hasError = true;
        error = _error;
      }

      dispatch({
        type: 'SAVE_ENTITY_RECORD_FINISH',
        kind,
        name,
        recordId,
        error,
        isAutosave
      });

      if (hasError && throwOnError) {
        throw error;
      }

      return updatedRecord;
    } finally {
      dispatch.__unstableReleaseStoreLock(lock);
    }
  };
};
/**
 * Runs multiple core-data actions at the same time using one API request.
 *
 * Example:
 *
 * ```
 * const [ savedRecord, updatedRecord, deletedRecord ] =
 *   await dispatch( 'core' ).__experimentalBatch( [
 *     ( { saveEntityRecord } ) => saveEntityRecord( 'root', 'widget', widget ),
 *     ( { saveEditedEntityRecord } ) => saveEntityRecord( 'root', 'widget', 123 ),
 *     ( { deleteEntityRecord } ) => deleteEntityRecord( 'root', 'widget', 123, null ),
 *   ] );
 * ```
 *
 * @param {Array} requests Array of functions which are invoked simultaneously.
 *                         Each function is passed an object containing
 *                         `saveEntityRecord`, `saveEditedEntityRecord`, and
 *                         `deleteEntityRecord`.
 *
 * @return {(thunkArgs: Object) => Promise} A promise that resolves to an array containing the return
 *                                          values of each function given in `requests`.
 */

const __experimentalBatch = requests => async _ref6 => {
  let {
    dispatch
  } = _ref6;
  const batch = (0,_batch__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const api = {
    saveEntityRecord(kind, name, record, options) {
      return batch.add(add => dispatch.saveEntityRecord(kind, name, record, { ...options,
        __unstableFetch: add
      }));
    },

    saveEditedEntityRecord(kind, name, recordId, options) {
      return batch.add(add => dispatch.saveEditedEntityRecord(kind, name, recordId, { ...options,
        __unstableFetch: add
      }));
    },

    deleteEntityRecord(kind, name, recordId, query, options) {
      return batch.add(add => dispatch.deleteEntityRecord(kind, name, recordId, query, { ...options,
        __unstableFetch: add
      }));
    }

  };
  const resultPromises = requests.map(request => request(api));
  const [, ...results] = await Promise.all([batch.run(), ...resultPromises]);
  return results;
};
/**
 * Action triggered to save an entity record's edits.
 *
 * @param {string} kind     Kind of the entity.
 * @param {string} name     Name of the entity.
 * @param {Object} recordId ID of the record.
 * @param {Object} options  Saving options.
 */

const saveEditedEntityRecord = (kind, name, recordId, options) => async _ref7 => {
  let {
    select,
    dispatch
  } = _ref7;

  if (!select.hasEditsForEntityRecord(kind, name, recordId)) {
    return;
  }

  const configs = await dispatch((0,_entities__WEBPACK_IMPORTED_MODULE_5__.getOrLoadEntitiesConfig)(kind));
  const entityConfig = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(configs, {
    kind,
    name
  });

  if (!entityConfig) {
    return;
  }

  const entityIdKey = entityConfig.key || _entities__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_ENTITY_KEY;
  const edits = select.getEntityRecordNonTransientEdits(kind, name, recordId);
  const record = {
    [entityIdKey]: recordId,
    ...edits
  };
  return await dispatch.saveEntityRecord(kind, name, record, options);
};
/**
 * Action triggered to save only specified properties for the entity.
 *
 * @param {string} kind        Kind of the entity.
 * @param {string} name        Name of the entity.
 * @param {Object} recordId    ID of the record.
 * @param {Array}  itemsToSave List of entity properties to save.
 * @param {Object} options     Saving options.
 */

const __experimentalSaveSpecifiedEntityEdits = (kind, name, recordId, itemsToSave, options) => async _ref8 => {
  let {
    select,
    dispatch
  } = _ref8;

  if (!select.hasEditsForEntityRecord(kind, name, recordId)) {
    return;
  }

  const edits = select.getEntityRecordNonTransientEdits(kind, name, recordId);
  const editsToSave = {};

  for (const edit in edits) {
    if (itemsToSave.some(item => item === edit)) {
      editsToSave[edit] = edits[edit];
    }
  }

  return await dispatch.saveEntityRecord(kind, name, editsToSave, options);
};
/**
 * Returns an action object used in signalling that Upload permissions have been received.
 *
 * @deprecated since WP 5.9, use receiveUserPermission instead.
 *
 * @param {boolean} hasUploadPermissions Does the user have permission to upload files?
 *
 * @return {Object} Action object.
 */

function receiveUploadPermissions(hasUploadPermissions) {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_3___default()("wp.data.dispatch( 'core' ).receiveUploadPermissions", {
    since: '5.9',
    alternative: 'receiveUserPermission'
  });
  return receiveUserPermission('create/media', hasUploadPermissions);
}
/**
 * Returns an action object used in signalling that the current user has
 * permission to perform an action on a REST resource.
 *
 * @param {string}  key       A key that represents the action and REST resource.
 * @param {boolean} isAllowed Whether or not the user can perform the action.
 *
 * @return {Object} Action object.
 */

function receiveUserPermission(key, isAllowed) {
  return {
    type: 'RECEIVE_USER_PERMISSION',
    key,
    isAllowed
  };
}
/**
 * Returns an action object used in signalling that the autosaves for a
 * post have been received.
 *
 * @param {number}       postId    The id of the post that is parent to the autosave.
 * @param {Array|Object} autosaves An array of autosaves or singular autosave object.
 *
 * @return {Object} Action object.
 */

function receiveAutosaves(postId, autosaves) {
  return {
    type: 'RECEIVE_AUTOSAVES',
    postId,
    autosaves: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.castArray)(autosaves)
  };
}


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/batch/create-batch.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/batch/create-batch.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createBatch; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _default_processor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default-processor */ "./node_modules/@wordpress/core-data/build-module/batch/default-processor.js");
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


/**
 * Creates a batch, which can be used to combine multiple API requests into one
 * API request using the WordPress batch processing API (/v1/batch).
 *
 * ```
 * const batch = createBatch();
 * const dunePromise = batch.add( {
 *   path: '/v1/books',
 *   method: 'POST',
 *   data: { title: 'Dune' }
 * } );
 * const lotrPromise = batch.add( {
 *   path: '/v1/books',
 *   method: 'POST',
 *   data: { title: 'Lord of the Rings' }
 * } );
 * const isSuccess = await batch.run(); // Sends one POST to /v1/batch.
 * if ( isSuccess ) {
 *   console.log(
 *     'Saved two books:',
 *     await dunePromise,
 *     await lotrPromise
 *   );
 * }
 * ```
 *
 * @param {Function} [processor] Processor function. Can be used to replace the
 *                               default functionality which is to send an API
 *                               request to /v1/batch. Is given an array of
 *                               inputs and must return a promise that
 *                               resolves to an array of objects containing
 *                               either `output` or `error`.
 */

function createBatch() {
  let processor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _default_processor__WEBPACK_IMPORTED_MODULE_1__["default"];
  let lastId = 0;
  /** @type {Array<{ input: any; resolve: ( value: any ) => void; reject: ( error: any ) => void }>} */

  let queue = [];
  const pending = new ObservableSet();
  return {
    /**
     * Adds an input to the batch and returns a promise that is resolved or
     * rejected when the input is processed by `batch.run()`.
     *
     * You may also pass a thunk which allows inputs to be added
     * asychronously.
     *
     * ```
     * // Both are allowed:
     * batch.add( { path: '/v1/books', ... } );
     * batch.add( ( add ) => add( { path: '/v1/books', ... } ) );
     * ```
     *
     * If a thunk is passed, `batch.run()` will pause until either:
     *
     * - The thunk calls its `add` argument, or;
     * - The thunk returns a promise and that promise resolves, or;
     * - The thunk returns a non-promise.
     *
     * @param {any|Function} inputOrThunk Input to add or thunk to execute.
     *
     * @return {Promise|any} If given an input, returns a promise that
     *                       is resolved or rejected when the batch is
     *                       processed. If given a thunk, returns the return
     *                       value of that thunk.
     */
    add(inputOrThunk) {
      const id = ++lastId;
      pending.add(id);

      const add = input => new Promise((resolve, reject) => {
        queue.push({
          input,
          resolve,
          reject
        });
        pending.delete(id);
      });

      if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isFunction)(inputOrThunk)) {
        return Promise.resolve(inputOrThunk(add)).finally(() => {
          pending.delete(id);
        });
      }

      return add(inputOrThunk);
    },

    /**
     * Runs the batch. This calls `batchProcessor` and resolves or rejects
     * all promises returned by `add()`.
     *
     * @return {Promise<boolean>} A promise that resolves to a boolean that is true
     *                   if the processor returned no errors.
     */
    async run() {
      if (pending.size) {
        await new Promise(resolve => {
          const unsubscribe = pending.subscribe(() => {
            if (!pending.size) {
              unsubscribe();
              resolve(undefined);
            }
          });
        });
      }

      let results;

      try {
        results = await processor(queue.map(_ref => {
          let {
            input
          } = _ref;
          return input;
        }));

        if (results.length !== queue.length) {
          throw new Error('run: Array returned by processor must be same size as input array.');
        }
      } catch (error) {
        for (const {
          reject
        } of queue) {
          reject(error);
        }

        throw error;
      }

      let isSuccess = true;

      for (const pair of (0,lodash__WEBPACK_IMPORTED_MODULE_0__.zip)(results, queue)) {
        /** @type {{error?: unknown, output?: unknown}} */
        const result = pair[0];
        /** @type {{resolve: (value: any) => void; reject: (error: any) => void} | undefined} */

        const queueItem = pair[1];

        if (result !== null && result !== void 0 && result.error) {
          queueItem === null || queueItem === void 0 ? void 0 : queueItem.reject(result.error);
          isSuccess = false;
        } else {
          var _result$output;

          queueItem === null || queueItem === void 0 ? void 0 : queueItem.resolve((_result$output = result === null || result === void 0 ? void 0 : result.output) !== null && _result$output !== void 0 ? _result$output : result);
        }
      }

      queue = [];
      return isSuccess;
    }

  };
}

class ObservableSet {
  constructor() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    this.set = new Set(...args);
    this.subscribers = new Set();
  }

  get size() {
    return this.set.size;
  }

  add(value) {
    this.set.add(value);
    this.subscribers.forEach(subscriber => subscriber());
    return this;
  }

  delete(value) {
    const isSuccess = this.set.delete(value);
    this.subscribers.forEach(subscriber => subscriber());
    return isSuccess;
  }

  subscribe(subscriber) {
    this.subscribers.add(subscriber);
    return () => {
      this.subscribers.delete(subscriber);
    };
  }

}


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/batch/default-processor.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/batch/default-processor.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ defaultProcessor; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Maximum number of requests to place in a single batch request. Obtained by
 * sending a preflight OPTIONS request to /batch/v1/.
 *
 * @type {number?}
 */

let maxItems = null;
/**
 * Default batch processor. Sends its input requests to /batch/v1.
 *
 * @param {Array} requests List of API requests to perform at once.
 *
 * @return {Promise} Promise that resolves to a list of objects containing
 *                   either `output` (if that request was succesful) or `error`
 *                   (if not ).
 */

async function defaultProcessor(requests) {
  if (maxItems === null) {
    const preflightResponse = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
      path: '/batch/v1',
      method: 'OPTIONS'
    });
    maxItems = preflightResponse.endpoints[0].args.requests.maxItems;
  }

  const results = []; // @ts-ignore We would have crashed or never gotten to this point if we hadn't received the maxItems count.

  for (const batchRequests of (0,lodash__WEBPACK_IMPORTED_MODULE_0__.chunk)(requests, maxItems)) {
    const batchResponse = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
      path: '/batch/v1',
      method: 'POST',
      data: {
        validation: 'require-all-validate',
        requests: batchRequests.map(request => ({
          path: request.path,
          body: request.data,
          // Rename 'data' to 'body'.
          method: request.method,
          headers: request.headers
        }))
      }
    });
    let batchResults;

    if (batchResponse.failed) {
      batchResults = batchResponse.responses.map(response => ({
        error: response === null || response === void 0 ? void 0 : response.body
      }));
    } else {
      batchResults = batchResponse.responses.map(response => {
        const result = {};

        if (response.status >= 200 && response.status < 300) {
          result.output = response.body;
        } else {
          result.error = response.body;
        }

        return result;
      });
    }

    results.push(...batchResults);
  }

  return results;
}


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/entities.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/entities.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_ENTITY_KEY": function() { return /* binding */ DEFAULT_ENTITY_KEY; },
/* harmony export */   "additionalEntityConfigLoaders": function() { return /* binding */ additionalEntityConfigLoaders; },
/* harmony export */   "getMethodName": function() { return /* binding */ getMethodName; },
/* harmony export */   "getOrLoadEntitiesConfig": function() { return /* binding */ getOrLoadEntitiesConfig; },
/* harmony export */   "prePersistPostType": function() { return /* binding */ prePersistPostType; },
/* harmony export */   "rootEntitiesConfig": function() { return /* binding */ rootEntitiesConfig; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./node_modules/@wordpress/core-data/build-module/actions.js");
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


const DEFAULT_ENTITY_KEY = 'id';
const POST_RAW_ATTRIBUTES = ['title', 'excerpt', 'content'];
const rootEntitiesConfig = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Base'),
  name: '__unstableBase',
  kind: 'root',
  baseURL: '/',
  baseURLParams: {
    _fields: ['description', 'gmt_offset', 'home', 'name', 'site_icon', 'site_icon_url', 'site_logo', 'timezone_string', 'url'].join(',')
  }
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Site'),
  name: 'site',
  kind: 'root',
  baseURL: '/wp/v2/settings',
  getTitle: record => {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(record, ['title'], (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Site Title'));
  }
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Post Type'),
  name: 'postType',
  kind: 'root',
  key: 'slug',
  baseURL: '/wp/v2/types',
  baseURLParams: {
    context: 'edit'
  },
  rawAttributes: POST_RAW_ATTRIBUTES
}, {
  name: 'media',
  kind: 'root',
  baseURL: '/wp/v2/media',
  baseURLParams: {
    context: 'edit'
  },
  plural: 'mediaItems',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Media'),
  rawAttributes: ['caption', 'title', 'description']
}, {
  name: 'taxonomy',
  kind: 'root',
  key: 'slug',
  baseURL: '/wp/v2/taxonomies',
  baseURLParams: {
    context: 'edit'
  },
  plural: 'taxonomies',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Taxonomy')
}, {
  name: 'sidebar',
  kind: 'root',
  baseURL: '/wp/v2/sidebars',
  plural: 'sidebars',
  transientEdits: {
    blocks: true
  },
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Widget areas')
}, {
  name: 'widget',
  kind: 'root',
  baseURL: '/wp/v2/widgets',
  baseURLParams: {
    context: 'edit'
  },
  plural: 'widgets',
  transientEdits: {
    blocks: true
  },
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Widgets')
}, {
  name: 'widgetType',
  kind: 'root',
  baseURL: '/wp/v2/widget-types',
  baseURLParams: {
    context: 'edit'
  },
  plural: 'widgetTypes',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Widget types')
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('User'),
  name: 'user',
  kind: 'root',
  baseURL: '/wp/v2/users',
  baseURLParams: {
    context: 'edit'
  },
  plural: 'users'
}, {
  name: 'comment',
  kind: 'root',
  baseURL: '/wp/v2/comments',
  baseURLParams: {
    context: 'edit'
  },
  plural: 'comments',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Comment')
}, {
  name: 'menu',
  kind: 'root',
  baseURL: '/wp/v2/menus',
  baseURLParams: {
    context: 'edit'
  },
  plural: 'menus',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Menu')
}, {
  name: 'menuItem',
  kind: 'root',
  baseURL: '/wp/v2/menu-items',
  baseURLParams: {
    context: 'edit'
  },
  plural: 'menuItems',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Menu Item'),
  rawAttributes: ['title', 'content']
}, {
  name: 'menuLocation',
  kind: 'root',
  baseURL: '/wp/v2/menu-locations',
  baseURLParams: {
    context: 'edit'
  },
  plural: 'menuLocations',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Menu Location'),
  key: 'name'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Global Styles'),
  name: 'globalStyles',
  kind: 'root',
  baseURL: '/wp/v2/global-styles',
  baseURLParams: {
    context: 'edit'
  },
  plural: 'globalStylesVariations',
  // Should be different than name.
  getTitle: record => {
    var _record$title;

    return (record === null || record === void 0 ? void 0 : (_record$title = record.title) === null || _record$title === void 0 ? void 0 : _record$title.rendered) || (record === null || record === void 0 ? void 0 : record.title);
  }
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Themes'),
  name: 'theme',
  kind: 'root',
  baseURL: '/wp/v2/themes',
  baseURLParams: {
    context: 'edit'
  },
  key: 'stylesheet'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Plugins'),
  name: 'plugin',
  kind: 'root',
  baseURL: '/wp/v2/plugins',
  baseURLParams: {
    context: 'edit'
  },
  key: 'plugin'
}];
const additionalEntityConfigLoaders = [{
  kind: 'postType',
  loadEntities: loadPostTypeEntities
}, {
  kind: 'taxonomy',
  loadEntities: loadTaxonomyEntities
}];
/**
 * Returns a function to be used to retrieve extra edits to apply before persisting a post type.
 *
 * @param {Object} persistedRecord Already persisted Post
 * @param {Object} edits           Edits.
 * @return {Object} Updated edits.
 */

const prePersistPostType = (persistedRecord, edits) => {
  const newEdits = {};

  if ((persistedRecord === null || persistedRecord === void 0 ? void 0 : persistedRecord.status) === 'auto-draft') {
    // Saving an auto-draft should create a draft by default.
    if (!edits.status && !newEdits.status) {
      newEdits.status = 'draft';
    } // Fix the auto-draft default title.


    if ((!edits.title || edits.title === 'Auto Draft') && !newEdits.title && (!(persistedRecord !== null && persistedRecord !== void 0 && persistedRecord.title) || (persistedRecord === null || persistedRecord === void 0 ? void 0 : persistedRecord.title) === 'Auto Draft')) {
      newEdits.title = '';
    }
  }

  return newEdits;
};
/**
 * Returns the list of post type entities.
 *
 * @return {Promise} Entities promise
 */

async function loadPostTypeEntities() {
  const postTypes = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
    path: '/wp/v2/types?context=view'
  });
  return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(postTypes, (postType, name) => {
    var _postType$rest_namesp;

    const isTemplate = ['wp_template', 'wp_template_part'].includes(name);
    const namespace = (_postType$rest_namesp = postType === null || postType === void 0 ? void 0 : postType.rest_namespace) !== null && _postType$rest_namesp !== void 0 ? _postType$rest_namesp : 'wp/v2';
    return {
      kind: 'postType',
      baseURL: `/${namespace}/${postType.rest_base}`,
      baseURLParams: {
        context: 'edit'
      },
      name,
      label: postType.name,
      transientEdits: {
        blocks: true,
        selection: true
      },
      mergedEdits: {
        meta: true
      },
      rawAttributes: POST_RAW_ATTRIBUTES,
      getTitle: record => {
        var _record$title2;

        return (record === null || record === void 0 ? void 0 : (_record$title2 = record.title) === null || _record$title2 === void 0 ? void 0 : _record$title2.rendered) || (record === null || record === void 0 ? void 0 : record.title) || (isTemplate ? (0,lodash__WEBPACK_IMPORTED_MODULE_0__.startCase)(record.slug) : String(record.id));
      },
      __unstablePrePersist: isTemplate ? undefined : prePersistPostType,
      __unstable_rest_base: postType.rest_base
    };
  });
}
/**
 * Returns the list of the taxonomies entities.
 *
 * @return {Promise} Entities promise
 */


async function loadTaxonomyEntities() {
  const taxonomies = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
    path: '/wp/v2/taxonomies?context=view'
  });
  return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(taxonomies, (taxonomy, name) => {
    var _taxonomy$rest_namesp;

    const namespace = (_taxonomy$rest_namesp = taxonomy === null || taxonomy === void 0 ? void 0 : taxonomy.rest_namespace) !== null && _taxonomy$rest_namesp !== void 0 ? _taxonomy$rest_namesp : 'wp/v2';
    return {
      kind: 'taxonomy',
      baseURL: `/${namespace}/${taxonomy.rest_base}`,
      baseURLParams: {
        context: 'edit'
      },
      name,
      label: taxonomy.name
    };
  });
}
/**
 * Returns the entity's getter method name given its kind and name.
 *
 * @example
 * ```js
 * const nameSingular = getMethodName( 'root', 'theme', 'get' );
 * // nameSingular is getRootTheme
 *
 * const namePlural = getMethodName( 'root', 'theme', 'set' );
 * // namePlural is setRootThemes
 * ```
 *
 * @param {string}  kind      Entity kind.
 * @param {string}  name      Entity name.
 * @param {string}  prefix    Function prefix.
 * @param {boolean} usePlural Whether to use the plural form or not.
 *
 * @return {string} Method name
 */


const getMethodName = function (kind, name) {
  let prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'get';
  let usePlural = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  const entityConfig = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(rootEntitiesConfig, {
    kind,
    name
  });
  const kindPrefix = kind === 'root' ? '' : (0,lodash__WEBPACK_IMPORTED_MODULE_0__.upperFirst)((0,lodash__WEBPACK_IMPORTED_MODULE_0__.camelCase)(kind));
  const nameSuffix = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.upperFirst)((0,lodash__WEBPACK_IMPORTED_MODULE_0__.camelCase)(name)) + (usePlural ? 's' : '');
  const suffix = usePlural && entityConfig !== null && entityConfig !== void 0 && entityConfig.plural ? (0,lodash__WEBPACK_IMPORTED_MODULE_0__.upperFirst)((0,lodash__WEBPACK_IMPORTED_MODULE_0__.camelCase)(entityConfig.plural)) : nameSuffix;
  return `${prefix}${kindPrefix}${suffix}`;
};
/**
 * Loads the kind entities into the store.
 *
 * @param {string} kind Kind
 *
 * @return {(thunkArgs: object) => Promise<Array>} Entities
 */

const getOrLoadEntitiesConfig = kind => async _ref => {
  let {
    select,
    dispatch
  } = _ref;
  let configs = select.getEntitiesConfig(kind);

  if (configs && configs.length !== 0) {
    return configs;
  }

  const loader = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(additionalEntityConfigLoaders, {
    kind
  });

  if (!loader) {
    return [];
  }

  configs = await loader.loadEntities();
  dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_3__.addEntities)(configs));
  return configs;
};


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/entity-provider.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/entity-provider.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EntityProvider; },
/* harmony export */   "useEntityBlockEditor": function() { return /* binding */ useEntityBlockEditor; },
/* harmony export */   "useEntityId": function() { return /* binding */ useEntityId; },
/* harmony export */   "useEntityProp": function() { return /* binding */ useEntityProp; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./name */ "./node_modules/@wordpress/core-data/build-module/name.js");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entities */ "./node_modules/@wordpress/core-data/build-module/entities.js");


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


/** @typedef {import('@wordpress/blocks').WPBlock} WPBlock */

const EMPTY_ARRAY = [];
/**
 * Internal dependencies
 */


const entityContexts = { ..._entities__WEBPACK_IMPORTED_MODULE_3__.rootEntitiesConfig.reduce((acc, loader) => {
    if (!acc[loader.kind]) {
      acc[loader.kind] = {};
    }

    acc[loader.kind][loader.name] = {
      context: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined)
    };
    return acc;
  }, {}),
  ..._entities__WEBPACK_IMPORTED_MODULE_3__.additionalEntityConfigLoaders.reduce((acc, loader) => {
    acc[loader.kind] = {};
    return acc;
  }, {})
};

const getEntityContext = (kind, name) => {
  if (!entityContexts[kind]) {
    throw new Error(`Missing entity config for kind: ${kind}.`);
  }

  if (!entityContexts[kind][name]) {
    entityContexts[kind][name] = {
      context: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined)
    };
  }

  return entityContexts[kind][name].context;
};
/**
 * Context provider component for providing
 * an entity for a specific entity.
 *
 * @param {Object} props          The component's props.
 * @param {string} props.kind     The entity kind.
 * @param {string} props.type     The entity name.
 * @param {number} props.id       The entity ID.
 * @param {*}      props.children The children to wrap.
 *
 * @return {Object} The provided children, wrapped with
 *                   the entity's context provider.
 */


function EntityProvider(_ref) {
  let {
    kind,
    type: name,
    id,
    children
  } = _ref;
  const Provider = getEntityContext(kind, name).Provider;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Provider, {
    value: id
  }, children);
}
/**
 * Hook that returns the ID for the nearest
 * provided entity of the specified type.
 *
 * @param {string} kind The entity kind.
 * @param {string} name The entity name.
 */

function useEntityId(kind, name) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(getEntityContext(kind, name));
}
/**
 * Hook that returns the value and a setter for the
 * specified property of the nearest provided
 * entity of the specified type.
 *
 * @param {string} kind  The entity kind.
 * @param {string} name  The entity name.
 * @param {string} prop  The property name.
 * @param {string} [_id] An entity ID to use instead of the context-provided one.
 *
 * @return {[*, Function, *]} An array where the first item is the
 *                            property value, the second is the
 *                            setter and the third is the full value
 * 							  object from REST API containing more
 * 							  information like `raw`, `rendered` and
 * 							  `protected` props.
 */

function useEntityProp(kind, name, prop, _id) {
  const providerId = useEntityId(kind, name);
  const id = _id !== null && _id !== void 0 ? _id : providerId;
  const {
    value,
    fullValue
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    const {
      getEntityRecord,
      getEditedEntityRecord
    } = select(_name__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME);
    const record = getEntityRecord(kind, name, id); // Trigger resolver.

    const editedRecord = getEditedEntityRecord(kind, name, id);
    return record && editedRecord ? {
      value: editedRecord[prop],
      fullValue: record[prop]
    } : {};
  }, [kind, name, id, prop]);
  const {
    editEntityRecord
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_name__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME);
  const setValue = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(newValue => {
    editEntityRecord(kind, name, id, {
      [prop]: newValue
    });
  }, [kind, name, id, prop]);
  return [value, setValue, fullValue];
}
/**
 * Hook that returns block content getters and setters for
 * the nearest provided entity of the specified type.
 *
 * The return value has the shape `[ blocks, onInput, onChange ]`.
 * `onInput` is for block changes that don't create undo levels
 * or dirty the post, non-persistent changes, and `onChange` is for
 * peristent changes. They map directly to the props of a
 * `BlockEditorProvider` and are intended to be used with it,
 * or similar components or hooks.
 *
 * @param {string} kind         The entity kind.
 * @param {string} name         The entity name.
 * @param {Object} options
 * @param {string} [options.id] An entity ID to use instead of the context-provided one.
 *
 * @return {[WPBlock[], Function, Function]} The block array and setters.
 */

function useEntityBlockEditor(kind, name) {
  let {
    id: _id
  } = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  const providerId = useEntityId(kind, name);
  const id = _id !== null && _id !== void 0 ? _id : providerId;
  const {
    content,
    blocks
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    const {
      getEditedEntityRecord
    } = select(_name__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME);
    const editedRecord = getEditedEntityRecord(kind, name, id);
    return {
      blocks: editedRecord.blocks,
      content: editedRecord.content
    };
  }, [kind, name, id]);
  const {
    __unstableCreateUndoLevel,
    editEntityRecord
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_name__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Load the blocks from the content if not already in state
    // Guard against other instances that might have
    // set content to a function already or the blocks are already in state.
    if (content && typeof content !== 'function' && !blocks) {
      const parsedContent = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.parse)(content);
      editEntityRecord(kind, name, id, {
        blocks: parsedContent
      }, {
        undoIgnore: true
      });
    }
  }, [content]);
  const onChange = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)((newBlocks, options) => {
    const {
      selection
    } = options;
    const edits = {
      blocks: newBlocks,
      selection
    };
    const noChange = blocks === edits.blocks;

    if (noChange) {
      return __unstableCreateUndoLevel(kind, name, id);
    } // We create a new function here on every persistent edit
    // to make sure the edit makes the post dirty and creates
    // a new undo level.


    edits.content = _ref2 => {
      let {
        blocks: blocksForSerialization = []
      } = _ref2;
      return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.__unstableSerializeAndClean)(blocksForSerialization);
    };

    editEntityRecord(kind, name, id, edits);
  }, [kind, name, id, blocks]);
  const onInput = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)((newBlocks, options) => {
    const {
      selection
    } = options;
    const edits = {
      blocks: newBlocks,
      selection
    };
    editEntityRecord(kind, name, id, edits);
  }, [kind, name, id]);
  return [blocks !== null && blocks !== void 0 ? blocks : EMPTY_ARRAY, onInput, onChange];
}


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/fetch/__experimental-fetch-link-suggestions.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/fetch/__experimental-fetch-link-suggestions.js ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/**
 * WordPress dependencies
 */




/**
 * Filters the search by type
 *
 * @typedef { 'attachment' | 'post' | 'term' | 'post-format' } WPLinkSearchType
 */

/**
 * A link with an id may be of kind post-type or taxonomy
 *
 * @typedef { 'post-type' | 'taxonomy' } WPKind
 */

/**
 * @typedef WPLinkSearchOptions
 *
 * @property {boolean}          [isInitialSuggestions] Displays initial search suggestions, when true.
 * @property {WPLinkSearchType} [type]                 Filters by search type.
 * @property {string}           [subtype]              Slug of the post-type or taxonomy.
 * @property {number}           [page]                 Which page of results to return.
 * @property {number}           [perPage]              Search results per page.
 */

/**
 * @typedef WPLinkSearchResult
 *
 * @property {number} id     Post or term id.
 * @property {string} url    Link url.
 * @property {string} title  Title of the link.
 * @property {string} type   The taxonomy or post type slug or type URL.
 * @property {WPKind} [kind] Link kind of post-type or taxonomy
 */

/**
 * @typedef WPLinkSearchResultAugments
 *
 * @property {{kind: WPKind}} [meta]    Contains kind information.
 * @property {WPKind}         [subtype] Optional subtype if it exists.
 */

/**
 * @typedef {WPLinkSearchResult & WPLinkSearchResultAugments} WPLinkSearchResultAugmented
 */

/**
 * @typedef WPEditorSettings
 *
 * @property {boolean} [ disablePostFormats ] Disables post formats, when true.
 */

/**
 * Fetches link suggestions from the API.
 *
 * @async
 * @param {string}              search
 * @param {WPLinkSearchOptions} [searchOptions]
 * @param {WPEditorSettings}    [settings]
 *
 * @example
 * ```js
 * import { __experimentalFetchLinkSuggestions as fetchLinkSuggestions } from '@wordpress/core-data';
 *
 * //...
 *
 * export function initialize( id, settings ) {
 *
 * settings.__experimentalFetchLinkSuggestions = (
 *     search,
 *     searchOptions
 * ) => fetchLinkSuggestions( search, searchOptions, settings );
 * ```
 * @return {Promise< WPLinkSearchResult[] >} List of search suggestions
 */

const fetchLinkSuggestions = async function (search) {
  let searchOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let settings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  const {
    isInitialSuggestions = false,
    type = undefined,
    subtype = undefined,
    page = undefined,
    perPage = isInitialSuggestions ? 3 : 20
  } = searchOptions;
  const {
    disablePostFormats = false
  } = settings;
  /** @type {Promise<WPLinkSearchResult>[]} */

  const queries = [];

  if (!type || type === 'post') {
    queries.push(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
      path: (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_1__.addQueryArgs)('/wp/v2/search', {
        search,
        page,
        per_page: perPage,
        type: 'post',
        subtype
      })
    }).then(results => {
      return results.map(result => {
        return { ...result,
          meta: {
            kind: 'post-type',
            subtype
          }
        };
      });
    }).catch(() => []) // Fail by returning no results.
    );
  }

  if (!type || type === 'term') {
    queries.push(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
      path: (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_1__.addQueryArgs)('/wp/v2/search', {
        search,
        page,
        per_page: perPage,
        type: 'term',
        subtype
      })
    }).then(results => {
      return results.map(result => {
        return { ...result,
          meta: {
            kind: 'taxonomy',
            subtype
          }
        };
      });
    }).catch(() => []) // Fail by returning no results.
    );
  }

  if (!disablePostFormats && (!type || type === 'post-format')) {
    queries.push(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
      path: (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_1__.addQueryArgs)('/wp/v2/search', {
        search,
        page,
        per_page: perPage,
        type: 'post-format',
        subtype
      })
    }).then(results => {
      return results.map(result => {
        return { ...result,
          meta: {
            kind: 'taxonomy',
            subtype
          }
        };
      });
    }).catch(() => []) // Fail by returning no results.
    );
  }

  if (!type || type === 'attachment') {
    queries.push(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
      path: (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_1__.addQueryArgs)('/wp/v2/media', {
        search,
        page,
        per_page: perPage
      })
    }).then(results => {
      return results.map(result => {
        return { ...result,
          meta: {
            kind: 'media'
          }
        };
      });
    }).catch(() => []) // Fail by returning no results.
    );
  }

  return Promise.all(queries).then(results => {
    return results.reduce((
    /** @type {WPLinkSearchResult[]} */
    accumulator, current) => accumulator.concat(current), // Flatten list.
    []).filter(
    /**
     * @param {{ id: number }} result
     */
    result => {
      return !!result.id;
    }).slice(0, perPage).map((
    /** @type {WPLinkSearchResultAugmented} */
    result) => {
      var _result$meta;

      const isMedia = result.type === 'attachment';
      return {
        id: result.id,
        // @ts-ignore fix when we make this a TS file
        url: isMedia ? result.source_url : result.url,
        title: (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_2__.decodeEntities)(isMedia ? // @ts-ignore fix when we make this a TS file
        result.title.rendered : result.title || '') || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('(no title)'),
        type: result.subtype || result.type,
        kind: result === null || result === void 0 ? void 0 : (_result$meta = result.meta) === null || _result$meta === void 0 ? void 0 : _result$meta.kind
      };
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (fetchLinkSuggestions);


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/fetch/__experimental-fetch-url-data.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/fetch/__experimental-fetch-url-data.js ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


/**
 * A simple in-memory cache for requests.
 * This avoids repeat HTTP requests which may be beneficial
 * for those wishing to preserve low-bandwidth.
 */

const CACHE = new Map();
/**
 * @typedef WPRemoteUrlData
 *
 * @property {string} title contents of the remote URL's `<title>` tag.
 */

/**
 * Fetches data about a remote URL.
 * eg: <title> tag, favicon...etc.
 *
 * @async
 * @param {string}  url     the URL to request details from.
 * @param {Object?} options any options to pass to the underlying fetch.
 * @example
 * ```js
 * import { __experimentalFetchUrlData as fetchUrlData } from '@wordpress/core-data';
 *
 * //...
 *
 * export function initialize( id, settings ) {
 *
 * settings.__experimentalFetchUrlData = (
 * url
 * ) => fetchUrlData( url );
 * ```
 * @return {Promise< WPRemoteUrlData[] >} Remote URL data.
 */

const fetchUrlData = async function (url) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const endpoint = '/wp-block-editor/v1/url-details';
  const args = {
    url: (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_1__.prependHTTP)(url)
  };

  if (!(0,_wordpress_url__WEBPACK_IMPORTED_MODULE_1__.isURL)(url)) {
    return Promise.reject(`${url} is not a valid URL.`);
  } // Test for "http" based URL as it is possible for valid
  // yet unusable URLs such as `tel:123456` to be passed.


  const protocol = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_1__.getProtocol)(url);

  if (!protocol || !(0,_wordpress_url__WEBPACK_IMPORTED_MODULE_1__.isValidProtocol)(protocol) || !protocol.startsWith('http') || !/^https?:\/\/[^\/\s]/i.test(url)) {
    return Promise.reject(`${url} does not have a valid protocol. URLs must be "http" based`);
  }

  if (CACHE.has(url)) {
    return CACHE.get(url);
  }

  return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
    path: (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_1__.addQueryArgs)(endpoint, args),
    ...options
  }).then(res => {
    CACHE.set(url, res);
    return res;
  });
};

/* harmony default export */ __webpack_exports__["default"] = (fetchUrlData);


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/fetch/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/fetch/index.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__experimentalFetchLinkSuggestions": function() { return /* reexport safe */ _experimental_fetch_link_suggestions__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   "__experimentalFetchUrlData": function() { return /* reexport safe */ _experimental_fetch_url_data__WEBPACK_IMPORTED_MODULE_1__["default"]; }
/* harmony export */ });
/* harmony import */ var _experimental_fetch_link_suggestions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./__experimental-fetch-link-suggestions */ "./node_modules/@wordpress/core-data/build-module/fetch/__experimental-fetch-link-suggestions.js");
/* harmony import */ var _experimental_fetch_url_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./__experimental-fetch-url-data */ "./node_modules/@wordpress/core-data/build-module/fetch/__experimental-fetch-url-data.js");




/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/hooks/constants.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/hooks/constants.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Status": function() { return /* binding */ Status; }
/* harmony export */ });
/* eslint-disable-next-line no-shadow */
let Status;

(function (Status) {
  Status["Idle"] = "IDLE";
  Status["Resolving"] = "RESOLVING";
  Status["Error"] = "ERROR";
  Status["Success"] = "SUCCESS";
})(Status || (Status = {}));


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/hooks/memoize.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/hooks/memoize.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var memize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! memize */ "./node_modules/memize/index.js");
/* harmony import */ var memize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(memize__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */
 // re-export due to restrictive esModuleInterop setting

/* harmony default export */ __webpack_exports__["default"] = ((memize__WEBPACK_IMPORTED_MODULE_0___default()));


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/hooks/use-entity-record.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/hooks/use-entity-record.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ __experimentalUseEntityRecord; }
/* harmony export */ });
/* harmony import */ var _use_query_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-query-select */ "./node_modules/@wordpress/core-data/build-module/hooks/use-query-select.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ */ "./node_modules/@wordpress/core-data/build-module/index.js");
/**
 * Internal dependencies
 */



/**
 * Resolves the specified entity record.
 *
 * @param  kind                   Kind of the requested entity.
 * @param  name                   Name of the requested  entity.
 * @param  recordId               Record ID of the requested entity.
 * @param  options                Hook options.
 * @param  [options.enabled=true] Whether to run the query or short-circuit and return null. Defaults to true.
 * @example
 * ```js
 * import { useEntityRecord } from '@wordpress/core-data';
 *
 * function PageTitleDisplay( { id } ) {
 *   const { record, isResolving } = useEntityRecord( 'postType', 'page', id );
 *
 *   if ( isResolving ) {
 *     return 'Loading...';
 *   }
 *
 *   return record.title;
 * }
 *
 * // Rendered in the application:
 * // <PageTitleDisplay id={ 1 } />
 * ```
 *
 * In the above example, when `PageTitleDisplay` is rendered into an
 * application, the page and the resolution details will be retrieved from
 * the store state using `getEntityRecord()`, or resolved if missing.
 *
 * @return {EntityRecordResolution<RecordType>} Entity record data.
 * @template RecordType
 */
function __experimentalUseEntityRecord(kind, name, recordId) {
  let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
    enabled: true
  };
  const {
    data: record,
    ...rest
  } = (0,_use_query_select__WEBPACK_IMPORTED_MODULE_1__["default"])(query => {
    if (!options.enabled) {
      return null;
    }

    return query(___WEBPACK_IMPORTED_MODULE_0__.store).getEntityRecord(kind, name, recordId);
  }, [kind, name, recordId, options.enabled]);
  return {
    record,
    ...rest
  };
}


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/hooks/use-entity-records.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/hooks/use-entity-records.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ __experimentalUseEntityRecords; }
/* harmony export */ });
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _use_query_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-query-select */ "./node_modules/@wordpress/core-data/build-module/hooks/use-query-select.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ */ "./node_modules/@wordpress/core-data/build-module/index.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */




/**
 * Resolves the specified entity records.
 *
 * @param  kind      Kind of the requested entities.
 * @param  name      Name of the requested entities.
 * @param  queryArgs HTTP query for the requested entities.
 * @param  options   Hook options.
 * @example
 * ```js
 * import { useEntityRecord } from '@wordpress/core-data';
 *
 * function PageTitlesList() {
 *   const { records, isResolving } = useEntityRecords( 'postType', 'page' );
 *
 *   if ( isResolving ) {
 *     return 'Loading...';
 *   }
 *
 *   return (
 *     <ul>
 *       {records.map(( page ) => (
 *         <li>{ page.title }</li>
 *       ))}
 *     </ul>
 *   );
 * }
 *
 * // Rendered in the application:
 * // <PageTitlesList />
 * ```
 *
 * In the above example, when `PageTitlesList` is rendered into an
 * application, the list of records and the resolution details will be retrieved from
 * the store state using `getEntityRecords()`, or resolved if missing.
 *
 * @return Entity records data.
 * @template RecordType
 */
function __experimentalUseEntityRecords(kind, name) {
  let queryArgs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
    enabled: true
  };
  // Serialize queryArgs to a string that can be safely used as a React dep.
  // We can't just pass queryArgs as one of the deps, because if it is passed
  // as an object literal, then it will be a different object on each call even
  // if the values remain the same.
  const queryAsString = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_0__.addQueryArgs)('', queryArgs);
  const {
    data: records,
    ...rest
  } = (0,_use_query_select__WEBPACK_IMPORTED_MODULE_2__["default"])(query => {
    if (!options.enabled) {
      return {
        data: []
      };
    }

    return query(___WEBPACK_IMPORTED_MODULE_1__.store).getEntityRecords(kind, name, queryArgs);
  }, [kind, name, queryAsString, options.enabled]);
  return {
    records,
    ...rest
  };
}


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/hooks/use-query-select.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/hooks/use-query-select.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "META_SELECTORS": function() { return /* binding */ META_SELECTORS; },
/* harmony export */   "default": function() { return /* binding */ __experimentalUseQuerySelect; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _memoize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./memoize */ "./node_modules/@wordpress/core-data/build-module/hooks/memoize.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@wordpress/core-data/build-module/hooks/constants.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */



const META_SELECTORS = ['getIsResolving', 'hasStartedResolution', 'hasFinishedResolution', 'isResolving', 'getCachedResolvers'];

/**
 * Like useSelect, but the selectors return objects containing
 * both the original data AND the resolution info.
 *
 * @param {Function} mapQuerySelect see useSelect
 * @param {Array}    deps           see useSelect
 *
 * @example
 * ```js
 * import { useQuerySelect } from '@wordpress/data';
 * import { store as coreDataStore } from '@wordpress/core-data';
 *
 * function PageTitleDisplay( { id } ) {
 *   const { data: page, isResolving } = useQuerySelect( ( query ) => {
 *     return query( coreDataStore ).getEntityRecord( 'postType', 'page', id )
 *   }, [ id ] );
 *
 *   if ( isResolving ) {
 *     return 'Loading...';
 *   }
 *
 *   return page.title;
 * }
 *
 * // Rendered in the application:
 * // <PageTitleDisplay id={ 10 } />
 * ```
 *
 * In the above example, when `PageTitleDisplay` is rendered into an
 * application, the page and the resolution details will be retrieved from
 * the store state using the `mapSelect` callback on `useQuerySelect`.
 *
 * If the id prop changes then any page in the state for that id is
 * retrieved. If the id prop doesn't change and other props are passed in
 * that do change, the title will not change because the dependency is just
 * the id.
 * @see useSelect
 *
 * @return {QuerySelectResponse} Queried data.
 */
function __experimentalUseQuerySelect(mapQuerySelect, deps) {
  return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)((select, registry) => {
    const resolve = store => enrichSelectors(select(store));

    return mapQuerySelect(resolve, registry);
  }, deps);
}

/**
 * Transform simple selectors into ones that return an object with the
 * original return value AND the resolution info.
 *
 * @param {Object} selectors Selectors to enrich
 * @return {EnrichedSelectors} Enriched selectors
 */
const enrichSelectors = (0,_memoize__WEBPACK_IMPORTED_MODULE_1__["default"])(selectors => {
  const resolvers = {};

  for (const selectorName in selectors) {
    if (META_SELECTORS.includes(selectorName)) {
      continue;
    }

    Object.defineProperty(resolvers, selectorName, {
      get: () => function () {
        const {
          getIsResolving,
          hasFinishedResolution
        } = selectors;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        const isResolving = !!getIsResolving(selectorName, args);
        const hasResolved = !isResolving && hasFinishedResolution(selectorName, args);
        const data = selectors[selectorName](...args);
        let status;

        if (isResolving) {
          status = _constants__WEBPACK_IMPORTED_MODULE_2__.Status.Resolving;
        } else if (hasResolved) {
          if (data) {
            status = _constants__WEBPACK_IMPORTED_MODULE_2__.Status.Success;
          } else {
            status = _constants__WEBPACK_IMPORTED_MODULE_2__.Status.Error;
          }
        } else {
          status = _constants__WEBPACK_IMPORTED_MODULE_2__.Status.Idle;
        }

        return {
          data,
          status,
          isResolving,
          hasResolved
        };
      }
    });
  }

  return resolvers;
});


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/index.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntityProvider": function() { return /* reexport safe */ _entity_provider__WEBPACK_IMPORTED_MODULE_8__["default"]; },
/* harmony export */   "__experimentalFetchLinkSuggestions": function() { return /* reexport safe */ _fetch__WEBPACK_IMPORTED_MODULE_11__.__experimentalFetchLinkSuggestions; },
/* harmony export */   "__experimentalFetchUrlData": function() { return /* reexport safe */ _fetch__WEBPACK_IMPORTED_MODULE_11__.__experimentalFetchUrlData; },
/* harmony export */   "__experimentalUseEntityRecord": function() { return /* reexport safe */ _hooks_use_entity_record__WEBPACK_IMPORTED_MODULE_9__["default"]; },
/* harmony export */   "__experimentalUseEntityRecords": function() { return /* reexport safe */ _hooks_use_entity_records__WEBPACK_IMPORTED_MODULE_10__["default"]; },
/* harmony export */   "store": function() { return /* binding */ store; },
/* harmony export */   "useEntityBlockEditor": function() { return /* reexport safe */ _entity_provider__WEBPACK_IMPORTED_MODULE_8__.useEntityBlockEditor; },
/* harmony export */   "useEntityId": function() { return /* reexport safe */ _entity_provider__WEBPACK_IMPORTED_MODULE_8__.useEntityId; },
/* harmony export */   "useEntityProp": function() { return /* reexport safe */ _entity_provider__WEBPACK_IMPORTED_MODULE_8__.useEntityProp; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducer */ "./node_modules/@wordpress/core-data/build-module/reducer.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ "./node_modules/@wordpress/core-data/build-module/selectors.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions */ "./node_modules/@wordpress/core-data/build-module/actions.js");
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resolvers */ "./node_modules/@wordpress/core-data/build-module/resolvers.js");
/* harmony import */ var _locks_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./locks/actions */ "./node_modules/@wordpress/core-data/build-module/locks/actions.js");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entities */ "./node_modules/@wordpress/core-data/build-module/entities.js");
/* harmony import */ var _name__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./name */ "./node_modules/@wordpress/core-data/build-module/name.js");
/* harmony import */ var _entity_provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./entity-provider */ "./node_modules/@wordpress/core-data/build-module/entity-provider.js");
/* harmony import */ var _hooks_use_entity_record__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hooks/use-entity-record */ "./node_modules/@wordpress/core-data/build-module/hooks/use-entity-record.js");
/* harmony import */ var _hooks_use_entity_records__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hooks/use-entity-records */ "./node_modules/@wordpress/core-data/build-module/hooks/use-entity-records.js");
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fetch */ "./node_modules/@wordpress/core-data/build-module/fetch/index.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */







 // The entity selectors/resolvers and actions are shortcuts to their generic equivalents
// (getEntityRecord, getEntityRecords, updateEntityRecord, updateEntityRecords)
// Instead of getEntityRecord, the consumer could use more user-friendly named selector: getPostType, getTaxonomy...
// The "kind" and the "name" of the entity are combined to generate these shortcuts.

const entitySelectors = _entities__WEBPACK_IMPORTED_MODULE_1__.rootEntitiesConfig.reduce((result, entity) => {
  const {
    kind,
    name
  } = entity;

  result[(0,_entities__WEBPACK_IMPORTED_MODULE_1__.getMethodName)(kind, name)] = (state, key, query) => _selectors__WEBPACK_IMPORTED_MODULE_2__.getEntityRecord(state, kind, name, key, query);

  result[(0,_entities__WEBPACK_IMPORTED_MODULE_1__.getMethodName)(kind, name, 'get', true)] = (state, query) => _selectors__WEBPACK_IMPORTED_MODULE_2__.getEntityRecords(state, kind, name, query);

  return result;
}, {});
const entityResolvers = _entities__WEBPACK_IMPORTED_MODULE_1__.rootEntitiesConfig.reduce((result, entity) => {
  const {
    kind,
    name
  } = entity;

  result[(0,_entities__WEBPACK_IMPORTED_MODULE_1__.getMethodName)(kind, name)] = (key, query) => _resolvers__WEBPACK_IMPORTED_MODULE_3__.getEntityRecord(kind, name, key, query);

  const pluralMethodName = (0,_entities__WEBPACK_IMPORTED_MODULE_1__.getMethodName)(kind, name, 'get', true);

  result[pluralMethodName] = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _resolvers__WEBPACK_IMPORTED_MODULE_3__.getEntityRecords(kind, name, ...args);
  };

  result[pluralMethodName].shouldInvalidate = action => _resolvers__WEBPACK_IMPORTED_MODULE_3__.getEntityRecords.shouldInvalidate(action, kind, name);

  return result;
}, {});
const entityActions = _entities__WEBPACK_IMPORTED_MODULE_1__.rootEntitiesConfig.reduce((result, entity) => {
  const {
    kind,
    name
  } = entity;

  result[(0,_entities__WEBPACK_IMPORTED_MODULE_1__.getMethodName)(kind, name, 'save')] = key => _actions__WEBPACK_IMPORTED_MODULE_4__.saveEntityRecord(kind, name, key);

  result[(0,_entities__WEBPACK_IMPORTED_MODULE_1__.getMethodName)(kind, name, 'delete')] = (key, query) => _actions__WEBPACK_IMPORTED_MODULE_4__.deleteEntityRecord(kind, name, key, query);

  return result;
}, {});

const storeConfig = () => ({
  reducer: _reducer__WEBPACK_IMPORTED_MODULE_5__["default"],
  actions: { ..._actions__WEBPACK_IMPORTED_MODULE_4__,
    ...entityActions,
    ...(0,_locks_actions__WEBPACK_IMPORTED_MODULE_6__["default"])()
  },
  selectors: { ..._selectors__WEBPACK_IMPORTED_MODULE_2__,
    ...entitySelectors
  },
  resolvers: { ..._resolvers__WEBPACK_IMPORTED_MODULE_3__,
    ...entityResolvers
  }
});
/**
 * Store definition for the code data namespace.
 *
 * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/data/README.md#createReduxStore
 *
 * @type {Object}
 */


const store = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createReduxStore)(_name__WEBPACK_IMPORTED_MODULE_7__.STORE_NAME, storeConfig());
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.register)(store);








/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/locks/actions.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/locks/actions.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createLocksActions; }
/* harmony export */ });
/* harmony import */ var _engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine */ "./node_modules/@wordpress/core-data/build-module/locks/engine.js");
/**
 * Internal dependencies
 */

function createLocksActions() {
  const locks = (0,_engine__WEBPACK_IMPORTED_MODULE_0__["default"])();

  function __unstableAcquireStoreLock(store, path, _ref) {
    let {
      exclusive
    } = _ref;
    return () => locks.acquire(store, path, exclusive);
  }

  function __unstableReleaseStoreLock(lock) {
    return () => locks.release(lock);
  }

  return {
    __unstableAcquireStoreLock,
    __unstableReleaseStoreLock
  };
}


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/locks/engine.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/locks/engine.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createLocks; }
/* harmony export */ });
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ "./node_modules/@wordpress/core-data/build-module/locks/reducer.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectors */ "./node_modules/@wordpress/core-data/build-module/locks/selectors.js");
/**
 * Internal dependencies
 */


function createLocks() {
  let state = (0,_reducer__WEBPACK_IMPORTED_MODULE_0__["default"])(undefined, {
    type: '@@INIT'
  });

  function processPendingLockRequests() {
    for (const request of (0,_selectors__WEBPACK_IMPORTED_MODULE_1__.getPendingLockRequests)(state)) {
      const {
        store,
        path,
        exclusive,
        notifyAcquired
      } = request;

      if ((0,_selectors__WEBPACK_IMPORTED_MODULE_1__.isLockAvailable)(state, store, path, {
        exclusive
      })) {
        const lock = {
          store,
          path,
          exclusive
        };
        state = (0,_reducer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, {
          type: 'GRANT_LOCK_REQUEST',
          lock,
          request
        });
        notifyAcquired(lock);
      }
    }
  }

  function acquire(store, path, exclusive) {
    return new Promise(resolve => {
      state = (0,_reducer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, {
        type: 'ENQUEUE_LOCK_REQUEST',
        request: {
          store,
          path,
          exclusive,
          notifyAcquired: resolve
        }
      });
      processPendingLockRequests();
    });
  }

  function release(lock) {
    state = (0,_reducer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, {
      type: 'RELEASE_LOCK',
      lock
    });
    processPendingLockRequests();
  }

  return {
    acquire,
    release
  };
}


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/locks/reducer.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/locks/reducer.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ locks; }
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/@wordpress/core-data/build-module/locks/utils.js");
/**
 * Internal dependencies
 */

const DEFAULT_STATE = {
  requests: [],
  tree: {
    locks: [],
    children: {}
  }
};
/**
 * Reducer returning locks.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function locks() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'ENQUEUE_LOCK_REQUEST':
      {
        const {
          request
        } = action;
        return { ...state,
          requests: [request, ...state.requests]
        };
      }

    case 'GRANT_LOCK_REQUEST':
      {
        const {
          lock,
          request
        } = action;
        const {
          store,
          path
        } = request;
        const storePath = [store, ...path];
        const newTree = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.deepCopyLocksTreePath)(state.tree, storePath);
        const node = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getNode)(newTree, storePath);
        node.locks = [...node.locks, lock];
        return { ...state,
          requests: state.requests.filter(r => r !== request),
          tree: newTree
        };
      }

    case 'RELEASE_LOCK':
      {
        const {
          lock
        } = action;
        const storePath = [lock.store, ...lock.path];
        const newTree = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.deepCopyLocksTreePath)(state.tree, storePath);
        const node = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getNode)(newTree, storePath);
        node.locks = node.locks.filter(l => l !== lock);
        return { ...state,
          tree: newTree
        };
      }
  }

  return state;
}


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/locks/selectors.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/locks/selectors.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPendingLockRequests": function() { return /* binding */ getPendingLockRequests; },
/* harmony export */   "isLockAvailable": function() { return /* binding */ isLockAvailable; }
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/@wordpress/core-data/build-module/locks/utils.js");
/**
 * Internal dependencies
 */

function getPendingLockRequests(state) {
  return state.requests;
}
function isLockAvailable(state, store, path, _ref) {
  let {
    exclusive
  } = _ref;
  const storePath = [store, ...path];
  const locks = state.tree; // Validate all parents and the node itself

  for (const node of (0,_utils__WEBPACK_IMPORTED_MODULE_0__.iteratePath)(locks, storePath)) {
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.hasConflictingLock)({
      exclusive
    }, node.locks)) {
      return false;
    }
  } // iteratePath terminates early if path is unreachable, let's
  // re-fetch the node and check it exists in the tree.


  const node = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getNode)(locks, storePath);

  if (!node) {
    return true;
  } // Validate all nested nodes


  for (const descendant of (0,_utils__WEBPACK_IMPORTED_MODULE_0__.iterateDescendants)(node)) {
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.hasConflictingLock)({
      exclusive
    }, descendant.locks)) {
      return false;
    }
  }

  return true;
}


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/locks/utils.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/locks/utils.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deepCopyLocksTreePath": function() { return /* binding */ deepCopyLocksTreePath; },
/* harmony export */   "getNode": function() { return /* binding */ getNode; },
/* harmony export */   "hasConflictingLock": function() { return /* binding */ hasConflictingLock; },
/* harmony export */   "iterateDescendants": function() { return /* binding */ iterateDescendants; },
/* harmony export */   "iteratePath": function() { return /* binding */ iteratePath; }
/* harmony export */ });
function deepCopyLocksTreePath(tree, path) {
  const newTree = { ...tree
  };
  let currentNode = newTree;

  for (const branchName of path) {
    currentNode.children = { ...currentNode.children,
      [branchName]: {
        locks: [],
        children: {},
        ...currentNode.children[branchName]
      }
    };
    currentNode = currentNode.children[branchName];
  }

  return newTree;
}
function getNode(tree, path) {
  let currentNode = tree;

  for (const branchName of path) {
    const nextNode = currentNode.children[branchName];

    if (!nextNode) {
      return null;
    }

    currentNode = nextNode;
  }

  return currentNode;
}
function* iteratePath(tree, path) {
  let currentNode = tree;
  yield currentNode;

  for (const branchName of path) {
    const nextNode = currentNode.children[branchName];

    if (!nextNode) {
      break;
    }

    yield nextNode;
    currentNode = nextNode;
  }
}
function* iterateDescendants(node) {
  const stack = Object.values(node.children);

  while (stack.length) {
    const childNode = stack.pop();
    yield childNode;
    stack.push(...Object.values(childNode.children));
  }
}
function hasConflictingLock(_ref, locks) {
  let {
    exclusive
  } = _ref;

  if (exclusive && locks.length) {
    return true;
  }

  if (!exclusive && locks.filter(lock => lock.exclusive).length) {
    return true;
  }

  return false;
}


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/name.js":
/*!****************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/name.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STORE_NAME": function() { return /* binding */ STORE_NAME; }
/* harmony export */ });
/**
 * The reducer key used by core data in store registration.
 * This is defined in a separate file to avoid cycle-dependency
 *
 * @type {string}
 */
const STORE_NAME = 'core';


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/queried-data/actions.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/queried-data/actions.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "receiveItems": function() { return /* binding */ receiveItems; },
/* harmony export */   "receiveQueriedItems": function() { return /* binding */ receiveQueriedItems; },
/* harmony export */   "removeItems": function() { return /* binding */ removeItems; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

/**
 * Returns an action object used in signalling that items have been received.
 *
 * @param {Array}   items Items received.
 * @param {?Object} edits Optional edits to reset.
 *
 * @return {Object} Action object.
 */

function receiveItems(items, edits) {
  return {
    type: 'RECEIVE_ITEMS',
    items: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.castArray)(items),
    persistedEdits: edits
  };
}
/**
 * Returns an action object used in signalling that entity records have been
 * deleted and they need to be removed from entities state.
 *
 * @param {string}              kind            Kind of the removed entities.
 * @param {string}              name            Name of the removed entities.
 * @param {Array|number|string} records         Record IDs of the removed entities.
 * @param {boolean}             invalidateCache Controls whether we want to invalidate the cache.
 * @return {Object} Action object.
 */

function removeItems(kind, name, records) {
  let invalidateCache = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  return {
    type: 'REMOVE_ITEMS',
    itemIds: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.castArray)(records),
    kind,
    name,
    invalidateCache
  };
}
/**
 * Returns an action object used in signalling that queried data has been
 * received.
 *
 * @param {Array}   items Queried items received.
 * @param {?Object} query Optional query object.
 * @param {?Object} edits Optional edits to reset.
 *
 * @return {Object} Action object.
 */

function receiveQueriedItems(items) {
  let query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let edits = arguments.length > 2 ? arguments[2] : undefined;
  return { ...receiveItems(items, edits),
    query
  };
}


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/queried-data/get-query-parts.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/queried-data/get-query-parts.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getQueryParts": function() { return /* binding */ getQueryParts; }
/* harmony export */ });
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./node_modules/@wordpress/core-data/build-module/utils/get-normalized-comma-separable.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./node_modules/@wordpress/core-data/build-module/utils/with-weak-map-cache.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


/**
 * An object of properties describing a specific query.
 *
 * @typedef {Object} WPQueriedDataQueryParts
 *
 * @property {number}      page      The query page (1-based index, default 1).
 * @property {number}      perPage   Items per page for query (default 10).
 * @property {string}      stableKey An encoded stable string of all non-
 *                                   pagination, non-fields query parameters.
 * @property {?(string[])} fields    Target subset of fields to derive from
 *                                   item objects.
 * @property {?(number[])} include   Specific item IDs to include.
 * @property {string}      context   Scope under which the request is made;
 *                                   determines returned fields in response.
 */

/**
 * Given a query object, returns an object of parts, including pagination
 * details (`page` and `perPage`, or default values). All other properties are
 * encoded into a stable (idempotent) `stableKey` value.
 *
 * @param {Object} query Optional query object.
 *
 * @return {WPQueriedDataQueryParts} Query parts.
 */

function getQueryParts(query) {
  /**
   * @type {WPQueriedDataQueryParts}
   */
  const parts = {
    stableKey: '',
    page: 1,
    perPage: 10,
    fields: null,
    include: null,
    context: 'default'
  }; // Ensure stable key by sorting keys. Also more efficient for iterating.

  const keys = Object.keys(query).sort();

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    let value = query[key];

    switch (key) {
      case 'page':
        parts[key] = Number(value);
        break;

      case 'per_page':
        parts.perPage = Number(value);
        break;

      case 'context':
        parts.context = value;
        break;

      default:
        // While in theory, we could exclude "_fields" from the stableKey
        // because two request with different fields have the same results
        // We're not able to ensure that because the server can decide to omit
        // fields from the response even if we explicitly asked for it.
        // Example: Asking for titles in posts without title support.
        if (key === '_fields') {
          var _getNormalizedCommaSe;

          parts.fields = (_getNormalizedCommaSe = (0,_utils__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) !== null && _getNormalizedCommaSe !== void 0 ? _getNormalizedCommaSe : []; // Make sure to normalize value for `stableKey`

          value = parts.fields.join();
        } // Two requests with different include values cannot have same results.


        if (key === 'include') {
          var _getNormalizedCommaSe2;

          if (typeof value === 'number') {
            value = value.toString();
          }

          parts.include = ((_getNormalizedCommaSe2 = (0,_utils__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) !== null && _getNormalizedCommaSe2 !== void 0 ? _getNormalizedCommaSe2 : []).map(Number); // Normalize value for `stableKey`.

          value = parts.include.join();
        } // While it could be any deterministic string, for simplicity's
        // sake mimic querystring encoding for stable key.
        //
        // TODO: For consistency with PHP implementation, addQueryArgs
        // should accept a key value pair, which may optimize its
        // implementation for our use here, vs. iterating an object
        // with only a single key.


        parts.stableKey += (parts.stableKey ? '&' : '') + (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_0__.addQueryArgs)('', {
          [key]: value
        }).slice(1);
    }
  }

  return parts;
}
/* harmony default export */ __webpack_exports__["default"] = ((0,_utils__WEBPACK_IMPORTED_MODULE_2__["default"])(getQueryParts));


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/queried-data/reducer.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/queried-data/reducer.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMergedItemIds": function() { return /* binding */ getMergedItemIds; },
/* harmony export */   "itemIsComplete": function() { return /* binding */ itemIsComplete; },
/* harmony export */   "items": function() { return /* binding */ items; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./node_modules/@wordpress/core-data/build-module/utils/conservative-map-item.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./node_modules/@wordpress/core-data/build-module/utils/if-matching-action.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./node_modules/@wordpress/core-data/build-module/utils/replace-action.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils */ "./node_modules/@wordpress/core-data/build-module/utils/on-sub-key.js");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../entities */ "./node_modules/@wordpress/core-data/build-module/entities.js");
/* harmony import */ var _get_query_parts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-query-parts */ "./node_modules/@wordpress/core-data/build-module/queried-data/get-query-parts.js");
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */





function getContextFromAction(action) {
  const {
    query
  } = action;

  if (!query) {
    return 'default';
  }

  const queryParts = (0,_get_query_parts__WEBPACK_IMPORTED_MODULE_2__["default"])(query);
  return queryParts.context;
}
/**
 * Returns a merged array of item IDs, given details of the received paginated
 * items. The array is sparse-like with `undefined` entries where holes exist.
 *
 * @param {?Array<number>} itemIds     Original item IDs (default empty array).
 * @param {number[]}       nextItemIds Item IDs to merge.
 * @param {number}         page        Page of items merged.
 * @param {number}         perPage     Number of items per page.
 *
 * @return {number[]} Merged array of item IDs.
 */


function getMergedItemIds(itemIds, nextItemIds, page, perPage) {
  var _itemIds$length;

  const receivedAllIds = page === 1 && perPage === -1;

  if (receivedAllIds) {
    return nextItemIds;
  }

  const nextItemIdsStartIndex = (page - 1) * perPage; // If later page has already been received, default to the larger known
  // size of the existing array, else calculate as extending the existing.

  const size = Math.max((_itemIds$length = itemIds === null || itemIds === void 0 ? void 0 : itemIds.length) !== null && _itemIds$length !== void 0 ? _itemIds$length : 0, nextItemIdsStartIndex + nextItemIds.length); // Preallocate array since size is known.

  const mergedItemIds = new Array(size);

  for (let i = 0; i < size; i++) {
    // Preserve existing item ID except for subset of range of next items.
    const isInNextItemsRange = i >= nextItemIdsStartIndex && i < nextItemIdsStartIndex + nextItemIds.length;
    mergedItemIds[i] = isInNextItemsRange ? nextItemIds[i - nextItemIdsStartIndex] : itemIds === null || itemIds === void 0 ? void 0 : itemIds[i];
  }

  return mergedItemIds;
}
/**
 * Reducer tracking items state, keyed by ID. Items are assumed to be normal,
 * where identifiers are common across all queries.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Next state.
 */

function items() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'RECEIVE_ITEMS':
      {
        const context = getContextFromAction(action);
        const key = action.key || _entities__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_ENTITY_KEY;
        return { ...state,
          [context]: { ...state[context],
            ...action.items.reduce((accumulator, value) => {
              var _state$context;

              const itemId = value[key];
              accumulator[itemId] = (0,_utils__WEBPACK_IMPORTED_MODULE_4__["default"])(state === null || state === void 0 ? void 0 : (_state$context = state[context]) === null || _state$context === void 0 ? void 0 : _state$context[itemId], value);
              return accumulator;
            }, {})
          }
        };
      }

    case 'REMOVE_ITEMS':
      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.mapValues)(state, contextState => (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omit)(contextState, action.itemIds));
  }

  return state;
}
/**
 * Reducer tracking item completeness, keyed by ID. A complete item is one for
 * which all fields are known. This is used in supporting `_fields` queries,
 * where not all properties associated with an entity are necessarily returned.
 * In such cases, completeness is used as an indication of whether it would be
 * safe to use queried data for a non-`_fields`-limited request.
 *
 * @param {Object<string,Object<string,boolean>>} state  Current state.
 * @param {Object}                                action Dispatched action.
 *
 * @return {Object<string,Object<string,boolean>>} Next state.
 */

function itemIsComplete() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'RECEIVE_ITEMS':
      {
        const context = getContextFromAction(action);
        const {
          query,
          key = _entities__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_ENTITY_KEY
        } = action; // An item is considered complete if it is received without an associated
        // fields query. Ideally, this would be implemented in such a way where the
        // complete aggregate of all fields would satisfy completeness. Since the
        // fields are not consistent across all entities, this would require
        // introspection on the REST schema for each entity to know which fields
        // compose a complete item for that entity.

        const queryParts = query ? (0,_get_query_parts__WEBPACK_IMPORTED_MODULE_2__["default"])(query) : {};
        const isCompleteQuery = !query || !Array.isArray(queryParts.fields);
        return { ...state,
          [context]: { ...state[context],
            ...action.items.reduce((result, item) => {
              var _state$context2;

              const itemId = item[key]; // Defer to completeness if already assigned. Technically the
              // data may be outdated if receiving items for a field subset.

              result[itemId] = (state === null || state === void 0 ? void 0 : (_state$context2 = state[context]) === null || _state$context2 === void 0 ? void 0 : _state$context2[itemId]) || isCompleteQuery;
              return result;
            }, {})
          }
        };
      }

    case 'REMOVE_ITEMS':
      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.mapValues)(state, contextState => (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omit)(contextState, action.itemIds));
  }

  return state;
}
/**
 * Reducer tracking queries state, keyed by stable query key. Each reducer
 * query object includes `itemIds` and `requestingPageByPerPage`.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Next state.
 */

const receiveQueries = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.flowRight)([// Limit to matching action type so we don't attempt to replace action on
// an unhandled action.
(0,_utils__WEBPACK_IMPORTED_MODULE_5__["default"])(action => 'query' in action), // Inject query parts into action for use both in `onSubKey` and reducer.
(0,_utils__WEBPACK_IMPORTED_MODULE_6__["default"])(action => {
  // `ifMatchingAction` still passes on initialization, where state is
  // undefined and a query is not assigned. Avoid attempting to parse
  // parts. `onSubKey` will omit by lack of `stableKey`.
  if (action.query) {
    return { ...action,
      ...(0,_get_query_parts__WEBPACK_IMPORTED_MODULE_2__["default"])(action.query)
    };
  }

  return action;
}), (0,_utils__WEBPACK_IMPORTED_MODULE_7__["default"])('context'), // Queries shape is shared, but keyed by query `stableKey` part. Original
// reducer tracks only a single query object.
(0,_utils__WEBPACK_IMPORTED_MODULE_7__["default"])('stableKey')])(function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  let action = arguments.length > 1 ? arguments[1] : undefined;
  const {
    type,
    page,
    perPage,
    key = _entities__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_ENTITY_KEY
  } = action;

  if (type !== 'RECEIVE_ITEMS') {
    return state;
  }

  return getMergedItemIds(state || [], (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(action.items, key), page, perPage);
});
/**
 * Reducer tracking queries state.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Next state.
 */

const queries = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'RECEIVE_ITEMS':
      return receiveQueries(state, action);

    case 'REMOVE_ITEMS':
      const removedItems = action.itemIds.reduce((result, itemId) => {
        result[itemId] = true;
        return result;
      }, {});
      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.mapValues)(state, contextQueries => {
        return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.mapValues)(contextQueries, queryItems => {
          return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.filter)(queryItems, queryId => {
            return !removedItems[queryId];
          });
        });
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  items,
  itemIsComplete,
  queries
}));


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/queried-data/selectors.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/queried-data/selectors.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getQueriedItems": function() { return /* binding */ getQueriedItems; }
/* harmony export */ });
/* harmony import */ var rememo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rememo */ "./node_modules/rememo/es/rememo.js");
/* harmony import */ var equivalent_key_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! equivalent-key-map */ "./node_modules/equivalent-key-map/equivalent-key-map.js");
/* harmony import */ var equivalent_key_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(equivalent_key_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _get_query_parts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-query-parts */ "./node_modules/@wordpress/core-data/build-module/queried-data/get-query-parts.js");
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */


/**
 * Cache of state keys to EquivalentKeyMap where the inner map tracks queries
 * to their resulting items set. WeakMap allows garbage collection on expired
 * state references.
 *
 * @type {WeakMap<Object,EquivalentKeyMap>}
 */

const queriedItemsCacheByState = new WeakMap();
/**
 * Returns items for a given query, or null if the items are not known.
 *
 * @param {Object}  state State object.
 * @param {?Object} query Optional query.
 *
 * @return {?Array} Query items.
 */

function getQueriedItemsUncached(state, query) {
  var _state$queries, _state$queries$contex;

  const {
    stableKey,
    page,
    perPage,
    include,
    fields,
    context
  } = (0,_get_query_parts__WEBPACK_IMPORTED_MODULE_3__["default"])(query);
  let itemIds;

  if ((_state$queries = state.queries) !== null && _state$queries !== void 0 && (_state$queries$contex = _state$queries[context]) !== null && _state$queries$contex !== void 0 && _state$queries$contex[stableKey]) {
    itemIds = state.queries[context][stableKey];
  }

  if (!itemIds) {
    return null;
  }

  const startOffset = perPage === -1 ? 0 : (page - 1) * perPage;
  const endOffset = perPage === -1 ? itemIds.length : Math.min(startOffset + perPage, itemIds.length);
  const items = [];

  for (let i = startOffset; i < endOffset; i++) {
    var _state$items$context;

    const itemId = itemIds[i];

    if (Array.isArray(include) && !include.includes(itemId)) {
      continue;
    } // Having a target item ID doesn't guarantee that this object has been queried.


    if (!((_state$items$context = state.items[context]) !== null && _state$items$context !== void 0 && _state$items$context.hasOwnProperty(itemId))) {
      return null;
    }

    const item = state.items[context][itemId];
    let filteredItem;

    if (Array.isArray(fields)) {
      filteredItem = {};

      for (let f = 0; f < fields.length; f++) {
        const field = fields[f].split('.');
        const value = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.get)(item, field);
        (0,lodash__WEBPACK_IMPORTED_MODULE_2__.set)(filteredItem, field, value);
      }
    } else {
      var _state$itemIsComplete;

      // If expecting a complete item, validate that completeness, or
      // otherwise abort.
      if (!((_state$itemIsComplete = state.itemIsComplete[context]) !== null && _state$itemIsComplete !== void 0 && _state$itemIsComplete[itemId])) {
        return null;
      }

      filteredItem = item;
    }

    items.push(filteredItem);
  }

  return items;
}
/**
 * Returns items for a given query, or null if the items are not known. Caches
 * result both per state (by reference) and per query (by deep equality).
 * The caching approach is intended to be durable to query objects which are
 * deeply but not referentially equal, since otherwise:
 *
 * `getQueriedItems( state, {} ) !== getQueriedItems( state, {} )`
 *
 * @param {Object}  state State object.
 * @param {?Object} query Optional query.
 *
 * @return {?Array} Query items.
 */


const getQueriedItems = (0,rememo__WEBPACK_IMPORTED_MODULE_0__["default"])(function (state) {
  let query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let queriedItemsCache = queriedItemsCacheByState.get(state);

  if (queriedItemsCache) {
    const queriedItems = queriedItemsCache.get(query);

    if (queriedItems !== undefined) {
      return queriedItems;
    }
  } else {
    queriedItemsCache = new (equivalent_key_map__WEBPACK_IMPORTED_MODULE_1___default())();
    queriedItemsCacheByState.set(state, queriedItemsCache);
  }

  const items = getQueriedItemsUncached(state, query);
  queriedItemsCache.set(query, items);
  return items;
});


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/reducer.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/reducer.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "autosaves": function() { return /* binding */ autosaves; },
/* harmony export */   "blockPatternCategories": function() { return /* binding */ blockPatternCategories; },
/* harmony export */   "blockPatterns": function() { return /* binding */ blockPatterns; },
/* harmony export */   "currentGlobalStylesId": function() { return /* binding */ currentGlobalStylesId; },
/* harmony export */   "currentTheme": function() { return /* binding */ currentTheme; },
/* harmony export */   "currentUser": function() { return /* binding */ currentUser; },
/* harmony export */   "embedPreviews": function() { return /* binding */ embedPreviews; },
/* harmony export */   "entities": function() { return /* binding */ entities; },
/* harmony export */   "entitiesConfig": function() { return /* binding */ entitiesConfig; },
/* harmony export */   "taxonomies": function() { return /* binding */ taxonomies; },
/* harmony export */   "terms": function() { return /* binding */ terms; },
/* harmony export */   "themeBaseGlobalStyles": function() { return /* binding */ themeBaseGlobalStyles; },
/* harmony export */   "themeGlobalStyleVariations": function() { return /* binding */ themeGlobalStyleVariations; },
/* harmony export */   "undo": function() { return /* binding */ undo; },
/* harmony export */   "userPermissions": function() { return /* binding */ userPermissions; },
/* harmony export */   "users": function() { return /* binding */ users; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/is-shallow-equal */ "@wordpress/is-shallow-equal");
/* harmony import */ var _wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./node_modules/@wordpress/core-data/build-module/utils/if-matching-action.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./node_modules/@wordpress/core-data/build-module/utils/replace-action.js");
/* harmony import */ var _queried_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./queried-data */ "./node_modules/@wordpress/core-data/build-module/queried-data/reducer.js");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./entities */ "./node_modules/@wordpress/core-data/build-module/entities.js");
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */




/** @typedef {import('./types').AnyFunction} AnyFunction */

/**
 * Reducer managing terms state. Keyed by taxonomy slug, the value is either
 * undefined (if no request has been made for given taxonomy), null (if a
 * request is in-flight for given taxonomy), or the array of terms for the
 * taxonomy.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function terms() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'RECEIVE_TERMS':
      return { ...state,
        [action.taxonomy]: action.terms
      };
  }

  return state;
}
/**
 * Reducer managing authors state. Keyed by id.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function users() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    byId: {},
    queries: {}
  };
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'RECEIVE_USER_QUERY':
      return {
        byId: { ...state.byId,
          ...(0,lodash__WEBPACK_IMPORTED_MODULE_0__.keyBy)(action.users, 'id')
        },
        queries: { ...state.queries,
          [action.queryID]: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(action.users, user => user.id)
        }
      };
  }

  return state;
}
/**
 * Reducer managing current user state.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function currentUser() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'RECEIVE_CURRENT_USER':
      return action.currentUser;
  }

  return state;
}
/**
 * Reducer managing taxonomies.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function taxonomies() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'RECEIVE_TAXONOMIES':
      return action.taxonomies;
  }

  return state;
}
/**
 * Reducer managing the current theme.
 *
 * @param {string|undefined} state  Current state.
 * @param {Object}           action Dispatched action.
 *
 * @return {string|undefined} Updated state.
 */

function currentTheme() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'RECEIVE_CURRENT_THEME':
      return action.currentTheme.stylesheet;
  }

  return state;
}
/**
 * Reducer managing the current global styles id.
 *
 * @param {string|undefined} state  Current state.
 * @param {Object}           action Dispatched action.
 *
 * @return {string|undefined} Updated state.
 */

function currentGlobalStylesId() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'RECEIVE_CURRENT_GLOBAL_STYLES_ID':
      return action.id;
  }

  return state;
}
/**
 * Reducer managing the theme base global styles.
 *
 * @param {Record<string, object>} state  Current state.
 * @param {Object}                 action Dispatched action.
 *
 * @return {Record<string, object>} Updated state.
 */

function themeBaseGlobalStyles() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'RECEIVE_THEME_GLOBAL_STYLES':
      return { ...state,
        [action.stylesheet]: action.globalStyles
      };
  }

  return state;
}
/**
 * Reducer managing the theme global styles variations.
 *
 * @param {Record<string, object>} state  Current state.
 * @param {Object}                 action Dispatched action.
 *
 * @return {Record<string, object>} Updated state.
 */

function themeGlobalStyleVariations() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'RECEIVE_THEME_GLOBAL_STYLE_VARIATIONS':
      return { ...state,
        [action.stylesheet]: action.variations
      };
  }

  return state;
}
/**
 * Higher Order Reducer for a given entity config. It supports:
 *
 *  - Fetching
 *  - Editing
 *  - Saving
 *
 * @param {Object} entityConfig Entity config.
 *
 * @return {AnyFunction} Reducer.
 */

function entity(entityConfig) {
  return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.flowRight)([// Limit to matching action type so we don't attempt to replace action on
  // an unhandled action.
  (0,_utils__WEBPACK_IMPORTED_MODULE_3__["default"])(action => action.name && action.kind && action.name === entityConfig.name && action.kind === entityConfig.kind), // Inject the entity config into the action.
  (0,_utils__WEBPACK_IMPORTED_MODULE_4__["default"])(action => {
    return { ...action,
      key: entityConfig.key || _entities__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_ENTITY_KEY
    };
  })])((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
    queriedData: _queried_data__WEBPACK_IMPORTED_MODULE_6__["default"],
    edits: function () {
      var _action$query$context, _action$query;

      let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      let action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case 'RECEIVE_ITEMS':
          const context = (_action$query$context = action === null || action === void 0 ? void 0 : (_action$query = action.query) === null || _action$query === void 0 ? void 0 : _action$query.context) !== null && _action$query$context !== void 0 ? _action$query$context : 'default';

          if (context !== 'default') {
            return state;
          }

          const nextState = { ...state
          };

          for (const record of action.items) {
            const recordId = record[action.key];
            const edits = nextState[recordId];

            if (!edits) {
              continue;
            }

            const nextEdits = Object.keys(edits).reduce((acc, key) => {
              // If the edited value is still different to the persisted value,
              // keep the edited value in edits.
              if ( // Edits are the "raw" attribute values, but records may have
              // objects with more properties, so we use `get` here for the
              // comparison.
              !(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEqual)(edits[key], (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(record[key], 'raw', record[key])) && ( // Sometimes the server alters the sent value which means
              // we need to also remove the edits before the api request.
              !action.persistedEdits || !(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEqual)(edits[key], action.persistedEdits[key]))) {
                acc[key] = edits[key];
              }

              return acc;
            }, {});

            if (Object.keys(nextEdits).length) {
              nextState[recordId] = nextEdits;
            } else {
              delete nextState[recordId];
            }
          }

          return nextState;

        case 'EDIT_ENTITY_RECORD':
          const nextEdits = { ...state[action.recordId],
            ...action.edits
          };
          Object.keys(nextEdits).forEach(key => {
            // Delete cleared edits so that the properties
            // are not considered dirty.
            if (nextEdits[key] === undefined) {
              delete nextEdits[key];
            }
          });
          return { ...state,
            [action.recordId]: nextEdits
          };
      }

      return state;
    },
    saving: function () {
      let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      let action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case 'SAVE_ENTITY_RECORD_START':
        case 'SAVE_ENTITY_RECORD_FINISH':
          return { ...state,
            [action.recordId]: {
              pending: action.type === 'SAVE_ENTITY_RECORD_START',
              error: action.error,
              isAutosave: action.isAutosave
            }
          };
      }

      return state;
    },
    deleting: function () {
      let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      let action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case 'DELETE_ENTITY_RECORD_START':
        case 'DELETE_ENTITY_RECORD_FINISH':
          return { ...state,
            [action.recordId]: {
              pending: action.type === 'DELETE_ENTITY_RECORD_START',
              error: action.error
            }
          };
      }

      return state;
    }
  }));
}
/**
 * Reducer keeping track of the registered entities.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */


function entitiesConfig() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _entities__WEBPACK_IMPORTED_MODULE_5__.rootEntitiesConfig;
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'ADD_ENTITIES':
      return [...state, ...action.entities];
  }

  return state;
}
/**
 * Reducer keeping track of the registered entities config and data.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

const entities = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let action = arguments.length > 1 ? arguments[1] : undefined;
  const newConfig = entitiesConfig(state.config, action); // Generates a dynamic reducer for the entities.

  let entitiesDataReducer = state.reducer;

  if (!entitiesDataReducer || newConfig !== state.config) {
    const entitiesByKind = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.groupBy)(newConfig, 'kind');
    entitiesDataReducer = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.combineReducers)(Object.entries(entitiesByKind).reduce((memo, _ref) => {
      let [kind, subEntities] = _ref;
      const kindReducer = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.combineReducers)(subEntities.reduce((kindMemo, entityConfig) => ({ ...kindMemo,
        [entityConfig.name]: entity(entityConfig)
      }), {}));
      memo[kind] = kindReducer;
      return memo;
    }, {}));
  }

  const newData = entitiesDataReducer(state.records, action);

  if (newData === state.records && newConfig === state.config && entitiesDataReducer === state.reducer) {
    return state;
  }

  return {
    reducer: entitiesDataReducer,
    records: newData,
    config: newConfig
  };
};
/**
 * @typedef {Object} UndoStateMeta
 *
 * @property {number} offset          Where in the undo stack we are.
 * @property {Object} [flattenedUndo] Flattened form of undo stack.
 */

/** @typedef {Array<Object> & UndoStateMeta} UndoState */

/**
 * @type {UndoState}
 *
 * @todo Given how we use this we might want to make a custom class for it.
 */

const UNDO_INITIAL_STATE = Object.assign([], {
  offset: 0
});
/** @type {Object} */

let lastEditAction;
/**
 * Reducer keeping track of entity edit undo history.
 *
 * @param {UndoState} state  Current state.
 * @param {Object}    action Dispatched action.
 *
 * @return {UndoState} Updated state.
 */

function undo() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : UNDO_INITIAL_STATE;
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'EDIT_ENTITY_RECORD':
    case 'CREATE_UNDO_LEVEL':
      let isCreateUndoLevel = action.type === 'CREATE_UNDO_LEVEL';
      const isUndoOrRedo = !isCreateUndoLevel && (action.meta.isUndo || action.meta.isRedo);

      if (isCreateUndoLevel) {
        action = lastEditAction;
      } else if (!isUndoOrRedo) {
        // Don't lose the last edit cache if the new one only has transient edits.
        // Transient edits don't create new levels so updating the cache would make
        // us skip an edit later when creating levels explicitly.
        if (Object.keys(action.edits).some(key => !action.transientEdits[key])) {
          lastEditAction = action;
        } else {
          lastEditAction = { ...action,
            edits: { ...(lastEditAction && lastEditAction.edits),
              ...action.edits
            }
          };
        }
      }
      /** @type {UndoState} */


      let nextState;

      if (isUndoOrRedo) {
        // @ts-ignore we might consider using Object.assign({}, state)
        nextState = [...state];
        nextState.offset = state.offset + (action.meta.isUndo ? -1 : 1);

        if (state.flattenedUndo) {
          // The first undo in a sequence of undos might happen while we have
          // flattened undos in state. If this is the case, we want execution
          // to continue as if we were creating an explicit undo level. This
          // will result in an extra undo level being appended with the flattened
          // undo values.
          // We also have to take into account if the `lastEditAction` had opted out
          // of being tracked in undo history, like the action that persists the latest
          // content right before saving. In that case we have to update the `lastEditAction`
          // to avoid returning early before applying the existing flattened undos.
          isCreateUndoLevel = true;

          if (!lastEditAction.meta.undo) {
            lastEditAction.meta.undo = {
              edits: {}
            };
          }

          action = lastEditAction;
        } else {
          return nextState;
        }
      }

      if (!action.meta.undo) {
        return state;
      } // Transient edits don't create an undo level, but are
      // reachable in the next meaningful edit to which they
      // are merged. They are defined in the entity's config.


      if (!isCreateUndoLevel && !Object.keys(action.edits).some(key => !action.transientEdits[key])) {
        // @ts-ignore we might consider using Object.assign({}, state)
        nextState = [...state];
        nextState.flattenedUndo = { ...state.flattenedUndo,
          ...action.edits
        };
        nextState.offset = state.offset;
        return nextState;
      } // Clear potential redos, because this only supports linear history.


      nextState = // @ts-ignore this needs additional cleanup, probably involving code-level changes
      nextState || state.slice(0, state.offset || undefined);
      nextState.offset = nextState.offset || 0;
      nextState.pop();

      if (!isCreateUndoLevel) {
        nextState.push({
          kind: action.meta.undo.kind,
          name: action.meta.undo.name,
          recordId: action.meta.undo.recordId,
          edits: { ...state.flattenedUndo,
            ...action.meta.undo.edits
          }
        });
      } // When an edit is a function it's an optimization to avoid running some expensive operation.
      // We can't rely on the function references being the same so we opt out of comparing them here.


      const comparisonUndoEdits = Object.values(action.meta.undo.edits).filter(edit => typeof edit !== 'function');
      const comparisonEdits = Object.values(action.edits).filter(edit => typeof edit !== 'function');

      if (!_wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_2___default()(comparisonUndoEdits, comparisonEdits)) {
        nextState.push({
          kind: action.kind,
          name: action.name,
          recordId: action.recordId,
          edits: isCreateUndoLevel ? { ...state.flattenedUndo,
            ...action.edits
          } : action.edits
        });
      }

      return nextState;
  }

  return state;
}
/**
 * Reducer managing embed preview data.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function embedPreviews() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'RECEIVE_EMBED_PREVIEW':
      const {
        url,
        preview
      } = action;
      return { ...state,
        [url]: preview
      };
  }

  return state;
}
/**
 * State which tracks whether the user can perform an action on a REST
 * resource.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function userPermissions() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'RECEIVE_USER_PERMISSION':
      return { ...state,
        [action.key]: action.isAllowed
      };
  }

  return state;
}
/**
 * Reducer returning autosaves keyed by their parent's post id.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function autosaves() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'RECEIVE_AUTOSAVES':
      const {
        postId,
        autosaves: autosavesData
      } = action;
      return { ...state,
        [postId]: autosavesData
      };
  }

  return state;
}
function blockPatterns() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'RECEIVE_BLOCK_PATTERNS':
      return action.patterns;
  }

  return state;
}
function blockPatternCategories() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'RECEIVE_BLOCK_PATTERN_CATEGORIES':
      return action.categories;
  }

  return state;
}
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  terms,
  users,
  currentTheme,
  currentGlobalStylesId,
  currentUser,
  themeGlobalStyleVariations,
  themeBaseGlobalStyles,
  taxonomies,
  entities,
  undo,
  embedPreviews,
  userPermissions,
  autosaves,
  blockPatterns,
  blockPatternCategories
}));


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/resolvers.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/resolvers.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__experimentalGetCurrentGlobalStylesId": function() { return /* binding */ __experimentalGetCurrentGlobalStylesId; },
/* harmony export */   "__experimentalGetCurrentThemeBaseGlobalStyles": function() { return /* binding */ __experimentalGetCurrentThemeBaseGlobalStyles; },
/* harmony export */   "__experimentalGetCurrentThemeGlobalStylesVariations": function() { return /* binding */ __experimentalGetCurrentThemeGlobalStylesVariations; },
/* harmony export */   "__experimentalGetTemplateForLink": function() { return /* binding */ __experimentalGetTemplateForLink; },
/* harmony export */   "canUser": function() { return /* binding */ canUser; },
/* harmony export */   "canUserEditEntityRecord": function() { return /* binding */ canUserEditEntityRecord; },
/* harmony export */   "getAuthors": function() { return /* binding */ getAuthors; },
/* harmony export */   "getAutosave": function() { return /* binding */ getAutosave; },
/* harmony export */   "getAutosaves": function() { return /* binding */ getAutosaves; },
/* harmony export */   "getBlockPatternCategories": function() { return /* binding */ getBlockPatternCategories; },
/* harmony export */   "getBlockPatterns": function() { return /* binding */ getBlockPatterns; },
/* harmony export */   "getCurrentTheme": function() { return /* binding */ getCurrentTheme; },
/* harmony export */   "getCurrentUser": function() { return /* binding */ getCurrentUser; },
/* harmony export */   "getEditedEntityRecord": function() { return /* binding */ getEditedEntityRecord; },
/* harmony export */   "getEmbedPreview": function() { return /* binding */ getEmbedPreview; },
/* harmony export */   "getEntityRecord": function() { return /* binding */ getEntityRecord; },
/* harmony export */   "getEntityRecords": function() { return /* binding */ getEntityRecords; },
/* harmony export */   "getRawEntityRecord": function() { return /* binding */ getRawEntityRecord; },
/* harmony export */   "getThemeSupports": function() { return /* binding */ getThemeSupports; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./name */ "./node_modules/@wordpress/core-data/build-module/name.js");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entities */ "./node_modules/@wordpress/core-data/build-module/entities.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./node_modules/@wordpress/core-data/build-module/utils/get-normalized-comma-separable.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./node_modules/@wordpress/core-data/build-module/utils/forward-resolver.js");
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
 * Requests authors from the REST API.
 *
 * @param {Object|undefined} query Optional object of query parameters to
 *                                 include with request.
 */

const getAuthors = query => async _ref => {
  let {
    dispatch
  } = _ref;
  const path = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_1__.addQueryArgs)('/wp/v2/users/?who=authors&per_page=100', query);
  const users = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
    path
  });
  dispatch.receiveUserQuery(path, users);
};
/**
 * Requests the current user from the REST API.
 */

const getCurrentUser = () => async _ref2 => {
  let {
    dispatch
  } = _ref2;
  const currentUser = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
    path: '/wp/v2/users/me'
  });
  dispatch.receiveCurrentUser(currentUser);
};
/**
 * Requests an entity's record from the REST API.
 *
 * @param {string}           kind  Entity kind.
 * @param {string}           name  Entity name.
 * @param {number|string}    key   Record's key
 * @param {Object|undefined} query Optional object of query parameters to
 *                                 include with request.
 */

const getEntityRecord = function (kind, name) {
  let key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  let query = arguments.length > 3 ? arguments[3] : undefined;
  return async _ref3 => {
    let {
      select,
      dispatch
    } = _ref3;
    const configs = await dispatch((0,_entities__WEBPACK_IMPORTED_MODULE_3__.getOrLoadEntitiesConfig)(kind));
    const entityConfig = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(configs, {
      kind,
      name
    });

    if (!entityConfig || entityConfig !== null && entityConfig !== void 0 && entityConfig.__experimentalNoFetch) {
      return;
    }

    const lock = await dispatch.__unstableAcquireStoreLock(_name__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME, ['entities', 'records', kind, name, key], {
      exclusive: false
    });

    try {
      if (query !== undefined && query._fields) {
        // If requesting specific fields, items and query association to said
        // records are stored by ID reference. Thus, fields must always include
        // the ID.
        query = { ...query,
          _fields: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.uniq)([...((0,_utils__WEBPACK_IMPORTED_MODULE_5__["default"])(query._fields) || []), entityConfig.key || _entities__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_ENTITY_KEY]).join()
        };
      } // Disable reason: While true that an early return could leave `path`
      // unused, it's important that path is derived using the query prior to
      // additional query modifications in the condition below, since those
      // modifications are relevant to how the data is tracked in state, and not
      // for how the request is made to the REST API.
      // eslint-disable-next-line @wordpress/no-unused-vars-before-return


      const path = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_1__.addQueryArgs)(entityConfig.baseURL + (key ? '/' + key : ''), { ...entityConfig.baseURLParams,
        ...query
      });

      if (query !== undefined) {
        query = { ...query,
          include: [key]
        }; // The resolution cache won't consider query as reusable based on the
        // fields, so it's tested here, prior to initiating the REST request,
        // and without causing `getEntityRecords` resolution to occur.

        const hasRecords = select.hasEntityRecords(kind, name, query);

        if (hasRecords) {
          return;
        }
      }

      const record = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
        path
      });
      dispatch.receiveEntityRecords(kind, name, record, query);
    } finally {
      dispatch.__unstableReleaseStoreLock(lock);
    }
  };
};
/**
 * Requests an entity's record from the REST API.
 */

const getRawEntityRecord = (0,_utils__WEBPACK_IMPORTED_MODULE_6__["default"])('getEntityRecord');
/**
 * Requests an entity's record from the REST API.
 */

const getEditedEntityRecord = (0,_utils__WEBPACK_IMPORTED_MODULE_6__["default"])('getEntityRecord');
/**
 * Requests the entity's records from the REST API.
 *
 * @param {string}  kind  Entity kind.
 * @param {string}  name  Entity name.
 * @param {Object?} query Query Object.
 */

const getEntityRecords = function (kind, name) {
  let query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return async _ref4 => {
    let {
      dispatch
    } = _ref4;
    const configs = await dispatch((0,_entities__WEBPACK_IMPORTED_MODULE_3__.getOrLoadEntitiesConfig)(kind));
    const entityConfig = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(configs, {
      kind,
      name
    });

    if (!entityConfig || entityConfig !== null && entityConfig !== void 0 && entityConfig.__experimentalNoFetch) {
      return;
    }

    const lock = await dispatch.__unstableAcquireStoreLock(_name__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME, ['entities', 'records', kind, name], {
      exclusive: false
    });

    try {
      var _query;

      if (query._fields) {
        // If requesting specific fields, items and query association to said
        // records are stored by ID reference. Thus, fields must always include
        // the ID.
        query = { ...query,
          _fields: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.uniq)([...((0,_utils__WEBPACK_IMPORTED_MODULE_5__["default"])(query._fields) || []), entityConfig.key || _entities__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_ENTITY_KEY]).join()
        };
      }

      const path = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_1__.addQueryArgs)(entityConfig.baseURL, { ...entityConfig.baseURLParams,
        ...query
      });
      let records = Object.values(await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
        path
      })); // If we request fields but the result doesn't contain the fields,
      // explicitely set these fields as "undefined"
      // that way we consider the query "fullfilled".

      if (query._fields) {
        records = records.map(record => {
          query._fields.split(',').forEach(field => {
            if (!record.hasOwnProperty(field)) {
              record[field] = undefined;
            }
          });

          return record;
        });
      }

      dispatch.receiveEntityRecords(kind, name, records, query); // When requesting all fields, the list of results can be used to
      // resolve the `getEntityRecord` selector in addition to `getEntityRecords`.
      // See https://github.com/WordPress/gutenberg/pull/26575

      if (!((_query = query) !== null && _query !== void 0 && _query._fields) && !query.context) {
        const key = entityConfig.key || _entities__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_ENTITY_KEY;
        const resolutionsArgs = records.filter(record => record[key]).map(record => [kind, name, record[key]]);
        dispatch({
          type: 'START_RESOLUTIONS',
          selectorName: 'getEntityRecord',
          args: resolutionsArgs
        });
        dispatch({
          type: 'FINISH_RESOLUTIONS',
          selectorName: 'getEntityRecord',
          args: resolutionsArgs
        });
      }
    } finally {
      dispatch.__unstableReleaseStoreLock(lock);
    }
  };
};

getEntityRecords.shouldInvalidate = (action, kind, name) => {
  return (action.type === 'RECEIVE_ITEMS' || action.type === 'REMOVE_ITEMS') && action.invalidateCache && kind === action.kind && name === action.name;
};
/**
 * Requests the current theme.
 */


const getCurrentTheme = () => async _ref5 => {
  let {
    dispatch,
    resolveSelect
  } = _ref5;
  const activeThemes = await resolveSelect.getEntityRecords('root', 'theme', {
    status: 'active'
  });
  dispatch.receiveCurrentTheme(activeThemes[0]);
};
/**
 * Requests theme supports data from the index.
 */

const getThemeSupports = (0,_utils__WEBPACK_IMPORTED_MODULE_6__["default"])('getCurrentTheme');
/**
 * Requests a preview from the from the Embed API.
 *
 * @param {string} url URL to get the preview for.
 */

const getEmbedPreview = url => async _ref6 => {
  let {
    dispatch
  } = _ref6;

  try {
    const embedProxyResponse = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
      path: (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_1__.addQueryArgs)('/oembed/1.0/proxy', {
        url
      })
    });
    dispatch.receiveEmbedPreview(url, embedProxyResponse);
  } catch (error) {
    // Embed API 404s if the URL cannot be embedded, so we have to catch the error from the apiRequest here.
    dispatch.receiveEmbedPreview(url, false);
  }
};
/**
 * Checks whether the current user can perform the given action on the given
 * REST resource.
 *
 * @param {string}  action   Action to check. One of: 'create', 'read', 'update',
 *                           'delete'.
 * @param {string}  resource REST resource to check, e.g. 'media' or 'posts'.
 * @param {?string} id       ID of the rest resource to check.
 */

const canUser = (action, resource, id) => async _ref7 => {
  var _response$headers;

  let {
    dispatch
  } = _ref7;
  const methods = {
    create: 'POST',
    read: 'GET',
    update: 'PUT',
    delete: 'DELETE'
  };
  const method = methods[action];

  if (!method) {
    throw new Error(`'${action}' is not a valid action.`);
  }

  const path = id ? `/wp/v2/${resource}/${id}` : `/wp/v2/${resource}`;
  let response;

  try {
    response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
      path,
      method: 'OPTIONS',
      parse: false
    });
  } catch (error) {
    // Do nothing if our OPTIONS request comes back with an API error (4xx or
    // 5xx). The previously determined isAllowed value will remain in the store.
    return;
  } // Optional chaining operator is used here because the API requests don't
  // return the expected result in the native version. Instead, API requests
  // only return the result, without including response properties like the headers.


  const allowHeader = (_response$headers = response.headers) === null || _response$headers === void 0 ? void 0 : _response$headers.get('allow');
  const key = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.compact)([action, resource, id]).join('/');
  const isAllowed = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.includes)(allowHeader, method);
  dispatch.receiveUserPermission(key, isAllowed);
};
/**
 * Checks whether the current user can perform the given action on the given
 * REST resource.
 *
 * @param {string} kind     Entity kind.
 * @param {string} name     Entity name.
 * @param {string} recordId Record's id.
 */

const canUserEditEntityRecord = (kind, name, recordId) => async _ref8 => {
  let {
    dispatch
  } = _ref8;
  const configs = await dispatch((0,_entities__WEBPACK_IMPORTED_MODULE_3__.getOrLoadEntitiesConfig)(kind));
  const entityConfig = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(configs, {
    kind,
    name
  });

  if (!entityConfig) {
    return;
  }

  const resource = entityConfig.__unstable_rest_base;
  await dispatch(canUser('update', resource, recordId));
};
/**
 * Request autosave data from the REST API.
 *
 * @param {string} postType The type of the parent post.
 * @param {number} postId   The id of the parent post.
 */

const getAutosaves = (postType, postId) => async _ref9 => {
  let {
    dispatch,
    resolveSelect
  } = _ref9;
  const {
    rest_base: restBase
  } = await resolveSelect.getPostType(postType);
  const autosaves = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
    path: `/wp/v2/${restBase}/${postId}/autosaves?context=edit`
  });

  if (autosaves && autosaves.length) {
    dispatch.receiveAutosaves(postId, autosaves);
  }
};
/**
 * Request autosave data from the REST API.
 *
 * This resolver exists to ensure the underlying autosaves are fetched via
 * `getAutosaves` when a call to the `getAutosave` selector is made.
 *
 * @param {string} postType The type of the parent post.
 * @param {number} postId   The id of the parent post.
 */

const getAutosave = (postType, postId) => async _ref10 => {
  let {
    resolveSelect
  } = _ref10;
  await resolveSelect.getAutosaves(postType, postId);
};
/**
 * Retrieve the frontend template used for a given link.
 *
 * @param {string} link Link.
 */

const __experimentalGetTemplateForLink = link => async _ref11 => {
  let {
    dispatch,
    resolveSelect
  } = _ref11;
  // Ideally this should be using an apiFetch call
  // We could potentially do so by adding a "filter" to the `wp_template` end point.
  // Also it seems the returned object is not a regular REST API post type.
  let template;

  try {
    template = await window.fetch((0,_wordpress_url__WEBPACK_IMPORTED_MODULE_1__.addQueryArgs)(link, {
      '_wp-find-template': true
    })).then(res => res.json()).then(_ref12 => {
      let {
        data
      } = _ref12;
      return data;
    });
  } catch (e) {// For non-FSE themes, it is possible that this request returns an error.
  }

  if (!template) {
    return;
  }

  const record = await resolveSelect.getEntityRecord('postType', 'wp_template', template.id);

  if (record) {
    dispatch.receiveEntityRecords('postType', 'wp_template', [record], {
      'find-template': link
    });
  }
};

__experimentalGetTemplateForLink.shouldInvalidate = action => {
  return (action.type === 'RECEIVE_ITEMS' || action.type === 'REMOVE_ITEMS') && action.invalidateCache && action.kind === 'postType' && action.name === 'wp_template';
};

const __experimentalGetCurrentGlobalStylesId = () => async _ref13 => {
  let {
    dispatch,
    resolveSelect
  } = _ref13;
  const activeThemes = await resolveSelect.getEntityRecords('root', 'theme', {
    status: 'active'
  });
  const globalStylesURL = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(activeThemes, [0, '_links', 'wp:user-global-styles', 0, 'href']);

  if (globalStylesURL) {
    const globalStylesObject = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
      url: globalStylesURL
    });

    dispatch.__experimentalReceiveCurrentGlobalStylesId(globalStylesObject.id);
  }
};
const __experimentalGetCurrentThemeBaseGlobalStyles = () => async _ref14 => {
  let {
    resolveSelect,
    dispatch
  } = _ref14;
  const currentTheme = await resolveSelect.getCurrentTheme();
  const themeGlobalStyles = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
    path: `/wp/v2/global-styles/themes/${currentTheme.stylesheet}`
  });

  dispatch.__experimentalReceiveThemeBaseGlobalStyles(currentTheme.stylesheet, themeGlobalStyles);
};
const __experimentalGetCurrentThemeGlobalStylesVariations = () => async _ref15 => {
  let {
    resolveSelect,
    dispatch
  } = _ref15;
  const currentTheme = await resolveSelect.getCurrentTheme();
  const variations = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
    path: `/wp/v2/global-styles/themes/${currentTheme.stylesheet}/variations`
  });

  dispatch.__experimentalReceiveThemeGlobalStyleVariations(currentTheme.stylesheet, variations);
};
const getBlockPatterns = () => async _ref16 => {
  let {
    dispatch
  } = _ref16;
  const restPatterns = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
    path: '/wp/v2/block-patterns/patterns'
  });
  const patterns = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(restPatterns, pattern => (0,lodash__WEBPACK_IMPORTED_MODULE_0__.mapKeys)(pattern, (value, key) => {
    switch (key) {
      case 'block_types':
        return 'blockTypes';

      case 'viewport_width':
        return 'viewportWidth';

      default:
        return key;
    }
  }));
  dispatch({
    type: 'RECEIVE_BLOCK_PATTERNS',
    patterns
  });
};
const getBlockPatternCategories = () => async _ref17 => {
  let {
    dispatch
  } = _ref17;
  const categories = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
    path: '/wp/v2/block-patterns/categories'
  });
  dispatch({
    type: 'RECEIVE_BLOCK_PATTERN_CATEGORIES',
    categories
  });
};


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/selectors.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/selectors.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__experimentalGetCurrentGlobalStylesId": function() { return /* binding */ __experimentalGetCurrentGlobalStylesId; },
/* harmony export */   "__experimentalGetCurrentThemeBaseGlobalStyles": function() { return /* binding */ __experimentalGetCurrentThemeBaseGlobalStyles; },
/* harmony export */   "__experimentalGetCurrentThemeGlobalStylesVariations": function() { return /* binding */ __experimentalGetCurrentThemeGlobalStylesVariations; },
/* harmony export */   "__experimentalGetDirtyEntityRecords": function() { return /* binding */ __experimentalGetDirtyEntityRecords; },
/* harmony export */   "__experimentalGetEntitiesBeingSaved": function() { return /* binding */ __experimentalGetEntitiesBeingSaved; },
/* harmony export */   "__experimentalGetEntityRecordNoResolver": function() { return /* binding */ __experimentalGetEntityRecordNoResolver; },
/* harmony export */   "__experimentalGetTemplateForLink": function() { return /* binding */ __experimentalGetTemplateForLink; },
/* harmony export */   "canUser": function() { return /* binding */ canUser; },
/* harmony export */   "canUserEditEntityRecord": function() { return /* binding */ canUserEditEntityRecord; },
/* harmony export */   "getAuthors": function() { return /* binding */ getAuthors; },
/* harmony export */   "getAutosave": function() { return /* binding */ getAutosave; },
/* harmony export */   "getAutosaves": function() { return /* binding */ getAutosaves; },
/* harmony export */   "getBlockPatternCategories": function() { return /* binding */ getBlockPatternCategories; },
/* harmony export */   "getBlockPatterns": function() { return /* binding */ getBlockPatterns; },
/* harmony export */   "getCurrentTheme": function() { return /* binding */ getCurrentTheme; },
/* harmony export */   "getCurrentUser": function() { return /* binding */ getCurrentUser; },
/* harmony export */   "getEditedEntityRecord": function() { return /* binding */ getEditedEntityRecord; },
/* harmony export */   "getEmbedPreview": function() { return /* binding */ getEmbedPreview; },
/* harmony export */   "getEntitiesByKind": function() { return /* binding */ getEntitiesByKind; },
/* harmony export */   "getEntitiesConfig": function() { return /* binding */ getEntitiesConfig; },
/* harmony export */   "getEntity": function() { return /* binding */ getEntity; },
/* harmony export */   "getEntityConfig": function() { return /* binding */ getEntityConfig; },
/* harmony export */   "getEntityRecord": function() { return /* binding */ getEntityRecord; },
/* harmony export */   "getEntityRecordEdits": function() { return /* binding */ getEntityRecordEdits; },
/* harmony export */   "getEntityRecordNonTransientEdits": function() { return /* binding */ getEntityRecordNonTransientEdits; },
/* harmony export */   "getEntityRecords": function() { return /* binding */ getEntityRecords; },
/* harmony export */   "getLastEntityDeleteError": function() { return /* binding */ getLastEntityDeleteError; },
/* harmony export */   "getLastEntitySaveError": function() { return /* binding */ getLastEntitySaveError; },
/* harmony export */   "getRawEntityRecord": function() { return /* binding */ getRawEntityRecord; },
/* harmony export */   "getRedoEdit": function() { return /* binding */ getRedoEdit; },
/* harmony export */   "getReferenceByDistinctEdits": function() { return /* binding */ getReferenceByDistinctEdits; },
/* harmony export */   "getThemeSupports": function() { return /* binding */ getThemeSupports; },
/* harmony export */   "getUndoEdit": function() { return /* binding */ getUndoEdit; },
/* harmony export */   "getUserQueryResults": function() { return /* binding */ getUserQueryResults; },
/* harmony export */   "hasEditsForEntityRecord": function() { return /* binding */ hasEditsForEntityRecord; },
/* harmony export */   "hasEntityRecords": function() { return /* binding */ hasEntityRecords; },
/* harmony export */   "hasFetchedAutosaves": function() { return /* binding */ hasFetchedAutosaves; },
/* harmony export */   "hasRedo": function() { return /* binding */ hasRedo; },
/* harmony export */   "hasUndo": function() { return /* binding */ hasUndo; },
/* harmony export */   "isAutosavingEntityRecord": function() { return /* binding */ isAutosavingEntityRecord; },
/* harmony export */   "isDeletingEntityRecord": function() { return /* binding */ isDeletingEntityRecord; },
/* harmony export */   "isPreviewEmbedFallback": function() { return /* binding */ isPreviewEmbedFallback; },
/* harmony export */   "isRequestingEmbedPreview": function() { return /* binding */ isRequestingEmbedPreview; },
/* harmony export */   "isSavingEntityRecord": function() { return /* binding */ isSavingEntityRecord; }
/* harmony export */ });
/* harmony import */ var rememo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rememo */ "./node_modules/rememo/es/rememo.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/deprecated */ "@wordpress/deprecated");
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./name */ "./node_modules/@wordpress/core-data/build-module/name.js");
/* harmony import */ var _queried_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./queried-data */ "./node_modules/@wordpress/core-data/build-module/queried-data/selectors.js");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./entities */ "./node_modules/@wordpress/core-data/build-module/entities.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./node_modules/@wordpress/core-data/build-module/utils/get-normalized-comma-separable.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./node_modules/@wordpress/core-data/build-module/utils/is-raw-attribute.js");
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
 * Returns true if a request is in progress for embed preview data, or false
 * otherwise.
 *
 * @param {Object} state Data state.
 * @param {string} url   URL the preview would be for.
 *
 * @return {boolean} Whether a request is in progress for an embed preview.
 */

const isRequestingEmbedPreview = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.createRegistrySelector)(select => (state, url) => {
  return select(_name__WEBPACK_IMPORTED_MODULE_5__.STORE_NAME).isResolving('getEmbedPreview', [url]);
});
/**
 * Returns all available authors.
 *
 * @deprecated since 11.3. Callers should use `select( 'core' ).getUsers({ who: 'authors' })` instead.
 *
 * @param {Object}           state Data state.
 * @param {Object|undefined} query Optional object of query parameters to
 *                                 include with request.
 * @return {Array} Authors list.
 */

function getAuthors(state, query) {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_4___default()("select( 'core' ).getAuthors()", {
    since: '5.9',
    alternative: "select( 'core' ).getUsers({ who: 'authors' })"
  });
  const path = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_3__.addQueryArgs)('/wp/v2/users/?who=authors&per_page=100', query);
  return getUserQueryResults(state, path);
}
/**
 * Returns the current user.
 *
 * @param {Object} state Data state.
 *
 * @return {Object} Current user object.
 */

function getCurrentUser(state) {
  return state.currentUser;
}
/**
 * Returns all the users returned by a query ID.
 *
 * @param {Object} state   Data state.
 * @param {string} queryID Query ID.
 *
 * @return {Array} Users list.
 */

const getUserQueryResults = (0,rememo__WEBPACK_IMPORTED_MODULE_0__["default"])((state, queryID) => {
  const queryResults = state.users.queries[queryID];
  return (0,lodash__WEBPACK_IMPORTED_MODULE_1__.map)(queryResults, id => state.users.byId[id]);
}, (state, queryID) => [state.users.queries[queryID], state.users.byId]);
/**
 * Returns the loaded entities for the given kind.
 *
 * @deprecated since WordPress 6.0. Use getEntitiesConfig instead
 * @param {Object} state Data state.
 * @param {string} kind  Entity kind.
 *
 * @return {Array<Object>} Array of entities with config matching kind.
 */

function getEntitiesByKind(state, kind) {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_4___default()("wp.data.select( 'core' ).getEntitiesByKind()", {
    since: '6.0',
    alternative: "wp.data.select( 'core' ).getEntitiesConfig()"
  });
  return getEntitiesConfig(state, kind);
}
/**
 * Returns the loaded entities for the given kind.
 *
 * @param {Object} state Data state.
 * @param {string} kind  Entity kind.
 *
 * @return {Array<Object>} Array of entities with config matching kind.
 */

function getEntitiesConfig(state, kind) {
  return (0,lodash__WEBPACK_IMPORTED_MODULE_1__.filter)(state.entities.config, {
    kind
  });
}
/**
 * Returns the entity config given its kind and name.
 *
 * @deprecated since WordPress 6.0. Use getEntityConfig instead
 * @param {Object} state Data state.
 * @param {string} kind  Entity kind.
 * @param {string} name  Entity name.
 *
 * @return {Object} Entity config
 */

function getEntity(state, kind, name) {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_4___default()("wp.data.select( 'core' ).getEntity()", {
    since: '6.0',
    alternative: "wp.data.select( 'core' ).getEntityConfig()"
  });
  return getEntityConfig(state, kind, name);
}
/**
 * Returns the entity config given its kind and name.
 *
 * @param {Object} state Data state.
 * @param {string} kind  Entity kind.
 * @param {string} name  Entity name.
 *
 * @return {Object} Entity config
 */

function getEntityConfig(state, kind, name) {
  return (0,lodash__WEBPACK_IMPORTED_MODULE_1__.find)(state.entities.config, {
    kind,
    name
  });
}
/**
 * Returns the Entity's record object by key. Returns `null` if the value is not
 * yet received, undefined if the value entity is known to not exist, or the
 * entity object if it exists and is received.
 *
 * @param {Object}  state State tree
 * @param {string}  kind  Entity kind.
 * @param {string}  name  Entity name.
 * @param {number}  key   Record's key
 * @param {?Object} query Optional query.
 *
 * @return {Object|undefined} Record.
 */

const getEntityRecord = (0,rememo__WEBPACK_IMPORTED_MODULE_0__["default"])((state, kind, name, key, query) => {
  var _query$context, _queriedState$items$c;

  const queriedState = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(state.entities.records, [kind, name, 'queriedData']);

  if (!queriedState) {
    return undefined;
  }

  const context = (_query$context = query === null || query === void 0 ? void 0 : query.context) !== null && _query$context !== void 0 ? _query$context : 'default';

  if (query === undefined) {
    var _queriedState$itemIsC;

    // If expecting a complete item, validate that completeness.
    if (!((_queriedState$itemIsC = queriedState.itemIsComplete[context]) !== null && _queriedState$itemIsC !== void 0 && _queriedState$itemIsC[key])) {
      return undefined;
    }

    return queriedState.items[context][key];
  }

  const item = (_queriedState$items$c = queriedState.items[context]) === null || _queriedState$items$c === void 0 ? void 0 : _queriedState$items$c[key];

  if (item && query._fields) {
    var _getNormalizedCommaSe;

    const filteredItem = {};
    const fields = (_getNormalizedCommaSe = (0,_utils__WEBPACK_IMPORTED_MODULE_6__["default"])(query._fields)) !== null && _getNormalizedCommaSe !== void 0 ? _getNormalizedCommaSe : [];

    for (let f = 0; f < fields.length; f++) {
      const field = fields[f].split('.');
      const value = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(item, field);
      (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(filteredItem, field, value);
    }

    return filteredItem;
  }

  return item;
}, (state, kind, name, recordId, query) => {
  var _query$context2;

  const context = (_query$context2 = query === null || query === void 0 ? void 0 : query.context) !== null && _query$context2 !== void 0 ? _query$context2 : 'default';
  return [(0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(state.entities.records, [kind, name, 'queriedData', 'items', context, recordId]), (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(state.entities.records, [kind, name, 'queriedData', 'itemIsComplete', context, recordId])];
});
/**
 * Returns the Entity's record object by key. Doesn't trigger a resolver nor requests the entity records from the API if the entity record isn't available in the local state.
 *
 * @param {Object} state State tree
 * @param {string} kind  Entity kind.
 * @param {string} name  Entity name.
 * @param {number} key   Record's key
 *
 * @return {Object|null} Record.
 */

function __experimentalGetEntityRecordNoResolver(state, kind, name, key) {
  return getEntityRecord(state, kind, name, key);
}
/**
 * Returns the entity's record object by key,
 * with its attributes mapped to their raw values.
 *
 * @param {Object} state State tree.
 * @param {string} kind  Entity kind.
 * @param {string} name  Entity name.
 * @param {number} key   Record's key.
 *
 * @return {Object?} Object with the entity's raw attributes.
 */

const getRawEntityRecord = (0,rememo__WEBPACK_IMPORTED_MODULE_0__["default"])((state, kind, name, key) => {
  const record = getEntityRecord(state, kind, name, key);
  return record && Object.keys(record).reduce((accumulator, _key) => {
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_7__["default"])(getEntityConfig(state, kind, name), _key)) {
      // Because edits are the "raw" attribute values,
      // we return those from record selectors to make rendering,
      // comparisons, and joins with edits easier.
      accumulator[_key] = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(record[_key], 'raw', record[_key]);
    } else {
      accumulator[_key] = record[_key];
    }

    return accumulator;
  }, {});
}, (state, kind, name, recordId, query) => {
  var _query$context3;

  const context = (_query$context3 = query === null || query === void 0 ? void 0 : query.context) !== null && _query$context3 !== void 0 ? _query$context3 : 'default';
  return [state.entities.config, (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(state.entities.records, [kind, name, 'queriedData', 'items', context, recordId]), (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(state.entities.records, [kind, name, 'queriedData', 'itemIsComplete', context, recordId])];
});
/**
 * Returns true if records have been received for the given set of parameters,
 * or false otherwise.
 *
 * @param {Object}  state State tree
 * @param {string}  kind  Entity kind.
 * @param {string}  name  Entity name.
 * @param {?Object} query Optional terms query.
 *
 * @return {boolean} Whether entity records have been received.
 */

function hasEntityRecords(state, kind, name, query) {
  return Array.isArray(getEntityRecords(state, kind, name, query));
}
/**
 * Returns the Entity's records.
 *
 * @param {Object}  state State tree
 * @param {string}  kind  Entity kind.
 * @param {string}  name  Entity name.
 * @param {?Object} query Optional terms query.
 *
 * @return {?Array} Records.
 */

function getEntityRecords(state, kind, name, query) {
  // Queried data state is prepopulated for all known entities. If this is not
  // assigned for the given parameters, then it is known to not exist.
  const queriedState = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(state.entities.records, [kind, name, 'queriedData']);

  if (!queriedState) {
    return null;
  }

  return (0,_queried_data__WEBPACK_IMPORTED_MODULE_8__.getQueriedItems)(queriedState, query);
}
/**
 * Returns the  list of dirty entity records.
 *
 * @param {Object} state State tree.
 *
 * @return {[{ title: string, key: string, name: string, kind: string }]} The list of updated records
 */

const __experimentalGetDirtyEntityRecords = (0,rememo__WEBPACK_IMPORTED_MODULE_0__["default"])(state => {
  const {
    entities: {
      records
    }
  } = state;
  const dirtyRecords = [];
  Object.keys(records).forEach(kind => {
    Object.keys(records[kind]).forEach(name => {
      const primaryKeys = Object.keys(records[kind][name].edits).filter(primaryKey => // The entity record must exist (not be deleted),
      // and it must have edits.
      getEntityRecord(state, kind, name, primaryKey) && hasEditsForEntityRecord(state, kind, name, primaryKey));

      if (primaryKeys.length) {
        const entityConfig = getEntityConfig(state, kind, name);
        primaryKeys.forEach(primaryKey => {
          var _entityConfig$getTitl;

          const entityRecord = getEditedEntityRecord(state, kind, name, primaryKey);
          dirtyRecords.push({
            // We avoid using primaryKey because it's transformed into a string
            // when it's used as an object key.
            key: entityRecord[entityConfig.key || _entities__WEBPACK_IMPORTED_MODULE_9__.DEFAULT_ENTITY_KEY],
            title: (entityConfig === null || entityConfig === void 0 ? void 0 : (_entityConfig$getTitl = entityConfig.getTitle) === null || _entityConfig$getTitl === void 0 ? void 0 : _entityConfig$getTitl.call(entityConfig, entityRecord)) || '',
            name,
            kind
          });
        });
      }
    });
  });
  return dirtyRecords;
}, state => [state.entities.records]);
/**
 * Returns the list of entities currently being saved.
 *
 * @param {Object} state State tree.
 *
 * @return {[{ title: string, key: string, name: string, kind: string }]} The list of records being saved.
 */

const __experimentalGetEntitiesBeingSaved = (0,rememo__WEBPACK_IMPORTED_MODULE_0__["default"])(state => {
  const {
    entities: {
      records
    }
  } = state;
  const recordsBeingSaved = [];
  Object.keys(records).forEach(kind => {
    Object.keys(records[kind]).forEach(name => {
      const primaryKeys = Object.keys(records[kind][name].saving).filter(primaryKey => isSavingEntityRecord(state, kind, name, primaryKey));

      if (primaryKeys.length) {
        const entityConfig = getEntityConfig(state, kind, name);
        primaryKeys.forEach(primaryKey => {
          var _entityConfig$getTitl2;

          const entityRecord = getEditedEntityRecord(state, kind, name, primaryKey);
          recordsBeingSaved.push({
            // We avoid using primaryKey because it's transformed into a string
            // when it's used as an object key.
            key: entityRecord[entityConfig.key || _entities__WEBPACK_IMPORTED_MODULE_9__.DEFAULT_ENTITY_KEY],
            title: (entityConfig === null || entityConfig === void 0 ? void 0 : (_entityConfig$getTitl2 = entityConfig.getTitle) === null || _entityConfig$getTitl2 === void 0 ? void 0 : _entityConfig$getTitl2.call(entityConfig, entityRecord)) || '',
            name,
            kind
          });
        });
      }
    });
  });
  return recordsBeingSaved;
}, state => [state.entities.records]);
/**
 * Returns the specified entity record's edits.
 *
 * @param {Object} state    State tree.
 * @param {string} kind     Entity kind.
 * @param {string} name     Entity name.
 * @param {number} recordId Record ID.
 *
 * @return {Object?} The entity record's edits.
 */

function getEntityRecordEdits(state, kind, name, recordId) {
  return (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(state.entities.records, [kind, name, 'edits', recordId]);
}
/**
 * Returns the specified entity record's non transient edits.
 *
 * Transient edits don't create an undo level, and
 * are not considered for change detection.
 * They are defined in the entity's config.
 *
 * @param {Object} state    State tree.
 * @param {string} kind     Entity kind.
 * @param {string} name     Entity name.
 * @param {number} recordId Record ID.
 *
 * @return {Object?} The entity record's non transient edits.
 */

const getEntityRecordNonTransientEdits = (0,rememo__WEBPACK_IMPORTED_MODULE_0__["default"])((state, kind, name, recordId) => {
  const {
    transientEdits
  } = getEntityConfig(state, kind, name) || {};
  const edits = getEntityRecordEdits(state, kind, name, recordId) || {};

  if (!transientEdits) {
    return edits;
  }

  return Object.keys(edits).reduce((acc, key) => {
    if (!transientEdits[key]) {
      acc[key] = edits[key];
    }

    return acc;
  }, {});
}, (state, kind, name, recordId) => [state.entities.config, (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(state.entities.records, [kind, name, 'edits', recordId])]);
/**
 * Returns true if the specified entity record has edits,
 * and false otherwise.
 *
 * @param {Object}        state    State tree.
 * @param {string}        kind     Entity kind.
 * @param {string}        name     Entity name.
 * @param {number|string} recordId Record ID.
 *
 * @return {boolean} Whether the entity record has edits or not.
 */

function hasEditsForEntityRecord(state, kind, name, recordId) {
  return isSavingEntityRecord(state, kind, name, recordId) || Object.keys(getEntityRecordNonTransientEdits(state, kind, name, recordId)).length > 0;
}
/**
 * Returns the specified entity record, merged with its edits.
 *
 * @param {Object}        state    State tree.
 * @param {string}        kind     Entity kind.
 * @param {string}        name     Entity name.
 * @param {number|string} recordId Record ID.
 *
 * @return {Object?} The entity record, merged with its edits.
 */

const getEditedEntityRecord = (0,rememo__WEBPACK_IMPORTED_MODULE_0__["default"])((state, kind, name, recordId) => ({ ...getRawEntityRecord(state, kind, name, recordId),
  ...getEntityRecordEdits(state, kind, name, recordId)
}), (state, kind, name, recordId, query) => {
  var _query$context4;

  const context = (_query$context4 = query === null || query === void 0 ? void 0 : query.context) !== null && _query$context4 !== void 0 ? _query$context4 : 'default';
  return [state.entities.config, (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(state.entities.records, [kind, name, 'queriedData', 'items', context, recordId]), (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(state.entities.records, [kind, name, 'queriedData', 'itemIsComplete', context, recordId]), (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(state.entities.records, [kind, name, 'edits', recordId])];
});
/**
 * Returns true if the specified entity record is autosaving, and false otherwise.
 *
 * @param {Object} state    State tree.
 * @param {string} kind     Entity kind.
 * @param {string} name     Entity name.
 * @param {number} recordId Record ID.
 *
 * @return {boolean} Whether the entity record is autosaving or not.
 */

function isAutosavingEntityRecord(state, kind, name, recordId) {
  const {
    pending,
    isAutosave
  } = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(state.entities.records, [kind, name, 'saving', recordId], {});
  return Boolean(pending && isAutosave);
}
/**
 * Returns true if the specified entity record is saving, and false otherwise.
 *
 * @param {Object}        state    State tree.
 * @param {string}        kind     Entity kind.
 * @param {string}        name     Entity name.
 * @param {number|string} recordId Record ID.
 *
 * @return {boolean} Whether the entity record is saving or not.
 */

function isSavingEntityRecord(state, kind, name, recordId) {
  return (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(state.entities.records, [kind, name, 'saving', recordId, 'pending'], false);
}
/**
 * Returns true if the specified entity record is deleting, and false otherwise.
 *
 * @param {Object} state    State tree.
 * @param {string} kind     Entity kind.
 * @param {string} name     Entity name.
 * @param {number} recordId Record ID.
 *
 * @return {boolean} Whether the entity record is deleting or not.
 */

function isDeletingEntityRecord(state, kind, name, recordId) {
  return (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(state.entities.records, [kind, name, 'deleting', recordId, 'pending'], false);
}
/**
 * Returns the specified entity record's last save error.
 *
 * @param {Object} state    State tree.
 * @param {string} kind     Entity kind.
 * @param {string} name     Entity name.
 * @param {number} recordId Record ID.
 *
 * @return {Object?} The entity record's save error.
 */

function getLastEntitySaveError(state, kind, name, recordId) {
  return (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(state.entities.records, [kind, name, 'saving', recordId, 'error']);
}
/**
 * Returns the specified entity record's last delete error.
 *
 * @param {Object} state    State tree.
 * @param {string} kind     Entity kind.
 * @param {string} name     Entity name.
 * @param {number} recordId Record ID.
 *
 * @return {Object?} The entity record's save error.
 */

function getLastEntityDeleteError(state, kind, name, recordId) {
  return (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(state.entities.records, [kind, name, 'deleting', recordId, 'error']);
}
/**
 * Returns the current undo offset for the
 * entity records edits history. The offset
 * represents how many items from the end
 * of the history stack we are at. 0 is the
 * last edit, -1 is the second last, and so on.
 *
 * @param {Object} state State tree.
 *
 * @return {number} The current undo offset.
 */

function getCurrentUndoOffset(state) {
  return state.undo.offset;
}
/**
 * Returns the previous edit from the current undo offset
 * for the entity records edits history, if any.
 *
 * @param {Object} state State tree.
 *
 * @return {Object?} The edit.
 */


function getUndoEdit(state) {
  return state.undo[state.undo.length - 2 + getCurrentUndoOffset(state)];
}
/**
 * Returns the next edit from the current undo offset
 * for the entity records edits history, if any.
 *
 * @param {Object} state State tree.
 *
 * @return {Object?} The edit.
 */

function getRedoEdit(state) {
  return state.undo[state.undo.length + getCurrentUndoOffset(state)];
}
/**
 * Returns true if there is a previous edit from the current undo offset
 * for the entity records edits history, and false otherwise.
 *
 * @param {Object} state State tree.
 *
 * @return {boolean} Whether there is a previous edit or not.
 */

function hasUndo(state) {
  return Boolean(getUndoEdit(state));
}
/**
 * Returns true if there is a next edit from the current undo offset
 * for the entity records edits history, and false otherwise.
 *
 * @param {Object} state State tree.
 *
 * @return {boolean} Whether there is a next edit or not.
 */

function hasRedo(state) {
  return Boolean(getRedoEdit(state));
}
/**
 * Return the current theme.
 *
 * @param {Object} state Data state.
 *
 * @return {Object} The current theme.
 */

function getCurrentTheme(state) {
  return getEntityRecord(state, 'root', 'theme', state.currentTheme);
}
/**
 * Return the ID of the current global styles object.
 *
 * @param {Object} state Data state.
 *
 * @return {string} The current global styles ID.
 */

function __experimentalGetCurrentGlobalStylesId(state) {
  return state.currentGlobalStylesId;
}
/**
 * Return theme supports data in the index.
 *
 * @param {Object} state Data state.
 *
 * @return {*} Index data.
 */

function getThemeSupports(state) {
  var _getCurrentTheme$them, _getCurrentTheme;

  return (_getCurrentTheme$them = (_getCurrentTheme = getCurrentTheme(state)) === null || _getCurrentTheme === void 0 ? void 0 : _getCurrentTheme.theme_supports) !== null && _getCurrentTheme$them !== void 0 ? _getCurrentTheme$them : EMPTY_OBJECT;
}
/**
 * Returns the embed preview for the given URL.
 *
 * @param {Object} state Data state.
 * @param {string} url   Embedded URL.
 *
 * @return {*} Undefined if the preview has not been fetched, otherwise, the preview fetched from the embed preview API.
 */

function getEmbedPreview(state, url) {
  return state.embedPreviews[url];
}
/**
 * Determines if the returned preview is an oEmbed link fallback.
 *
 * WordPress can be configured to return a simple link to a URL if it is not embeddable.
 * We need to be able to determine if a URL is embeddable or not, based on what we
 * get back from the oEmbed preview API.
 *
 * @param {Object} state Data state.
 * @param {string} url   Embedded URL.
 *
 * @return {boolean} Is the preview for the URL an oEmbed link fallback.
 */

function isPreviewEmbedFallback(state, url) {
  const preview = state.embedPreviews[url];
  const oEmbedLinkCheck = '<a href="' + url + '">' + url + '</a>';

  if (!preview) {
    return false;
  }

  return preview.html === oEmbedLinkCheck;
}
/**
 * Returns whether the current user can perform the given action on the given
 * REST resource.
 *
 * Calling this may trigger an OPTIONS request to the REST API via the
 * `canUser()` resolver.
 *
 * https://developer.wordpress.org/rest-api/reference/
 *
 * @param {Object}  state    Data state.
 * @param {string}  action   Action to check. One of: 'create', 'read', 'update', 'delete'.
 * @param {string}  resource REST resource to check, e.g. 'media' or 'posts'.
 * @param {string=} id       Optional ID of the rest resource to check.
 *
 * @return {boolean|undefined} Whether or not the user can perform the action,
 *                             or `undefined` if the OPTIONS request is still being made.
 */

function canUser(state, action, resource, id) {
  const key = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.compact)([action, resource, id]).join('/');
  return (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(state, ['userPermissions', key]);
}
/**
 * Returns whether the current user can edit the given entity.
 *
 * Calling this may trigger an OPTIONS request to the REST API via the
 * `canUser()` resolver.
 *
 * https://developer.wordpress.org/rest-api/reference/
 *
 * @param {Object} state    Data state.
 * @param {string} kind     Entity kind.
 * @param {string} name     Entity name.
 * @param {string} recordId Record's id.
 * @return {boolean|undefined} Whether or not the user can edit,
 * or `undefined` if the OPTIONS request is still being made.
 */

function canUserEditEntityRecord(state, kind, name, recordId) {
  const entityConfig = getEntityConfig(state, kind, name);

  if (!entityConfig) {
    return false;
  }

  const resource = entityConfig.__unstable_rest_base;
  return canUser(state, 'update', resource, recordId);
}
/**
 * Returns the latest autosaves for the post.
 *
 * May return multiple autosaves since the backend stores one autosave per
 * author for each post.
 *
 * @param {Object} state    State tree.
 * @param {string} postType The type of the parent post.
 * @param {number} postId   The id of the parent post.
 *
 * @return {?Array} An array of autosaves for the post, or undefined if there is none.
 */

function getAutosaves(state, postType, postId) {
  return state.autosaves[postId];
}
/**
 * Returns the autosave for the post and author.
 *
 * @param {Object} state    State tree.
 * @param {string} postType The type of the parent post.
 * @param {number} postId   The id of the parent post.
 * @param {number} authorId The id of the author.
 *
 * @return {?Object} The autosave for the post and author.
 */

function getAutosave(state, postType, postId, authorId) {
  if (authorId === undefined) {
    return;
  }

  const autosaves = state.autosaves[postId];
  return (0,lodash__WEBPACK_IMPORTED_MODULE_1__.find)(autosaves, {
    author: authorId
  });
}
/**
 * Returns true if the REST request for autosaves has completed.
 *
 * @param {Object} state    State tree.
 * @param {string} postType The type of the parent post.
 * @param {number} postId   The id of the parent post.
 *
 * @return {boolean} True if the REST request was completed. False otherwise.
 */

const hasFetchedAutosaves = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.createRegistrySelector)(select => (state, postType, postId) => {
  return select(_name__WEBPACK_IMPORTED_MODULE_5__.STORE_NAME).hasFinishedResolution('getAutosaves', [postType, postId]);
});
/**
 * Returns a new reference when edited values have changed. This is useful in
 * inferring where an edit has been made between states by comparison of the
 * return values using strict equality.
 *
 * @example
 *
 * ```
 * const hasEditOccurred = (
 *    getReferenceByDistinctEdits( beforeState ) !==
 *    getReferenceByDistinctEdits( afterState )
 * );
 * ```
 *
 * @param {Object} state Editor state.
 *
 * @return {*} A value whose reference will change only when an edit occurs.
 */

const getReferenceByDistinctEdits = (0,rememo__WEBPACK_IMPORTED_MODULE_0__["default"])(() => [], state => [state.undo.length, state.undo.offset, state.undo.flattenedUndo]);
/**
 * Retrieve the frontend template used for a given link.
 *
 * @param {Object} state Editor state.
 * @param {string} link  Link.
 *
 * @return {Object?} The template record.
 */

function __experimentalGetTemplateForLink(state, link) {
  const records = getEntityRecords(state, 'postType', 'wp_template', {
    'find-template': link
  });
  const template = records !== null && records !== void 0 && records.length ? records[0] : null;

  if (template) {
    return getEditedEntityRecord(state, 'postType', 'wp_template', template.id);
  }

  return template;
}
/**
 * Retrieve the current theme's base global styles
 *
 * @param {Object} state Editor state.
 *
 * @return {Object|null} The Global Styles object.
 */

function __experimentalGetCurrentThemeBaseGlobalStyles(state) {
  const currentTheme = getCurrentTheme(state);

  if (!currentTheme) {
    return null;
  }

  return state.themeBaseGlobalStyles[currentTheme.stylesheet];
}
/**
 * Return the ID of the current global styles object.
 *
 * @param {Object} state Data state.
 *
 * @return {string|null} The current global styles ID.
 */

function __experimentalGetCurrentThemeGlobalStylesVariations(state) {
  const currentTheme = getCurrentTheme(state);

  if (!currentTheme) {
    return null;
  }

  return state.themeGlobalStyleVariations[currentTheme.stylesheet];
}
/**
 * Retrieve the list of registered block patterns.
 *
 * @param {Object} state Data state.
 *
 * @return {Array} Block pattern list.
 */

function getBlockPatterns(state) {
  return state.blockPatterns;
}
/**
 * Retrieve the list of registered block pattern categories.
 *
 * @param {Object} state Data state.
 *
 * @return {Array} Block pattern category list.
 */

function getBlockPatternCategories(state) {
  return state.blockPatternCategories;
}


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/utils/conservative-map-item.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/utils/conservative-map-item.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ conservativeMapItem; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

/**
 * Given the current and next item entity record, returns the minimally "modified"
 * result of the next item, preferring value references from the original item
 * if equal. If all values match, the original item is returned.
 *
 * @param {Object} item     Original item.
 * @param {Object} nextItem Next item.
 *
 * @return {Object} Minimally modified merged item.
 */

function conservativeMapItem(item, nextItem) {
  // Return next item in its entirety if there is no original item.
  if (!item) {
    return nextItem;
  }

  let hasChanges = false;
  const result = {};

  for (const key in nextItem) {
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEqual)(item[key], nextItem[key])) {
      result[key] = item[key];
    } else {
      hasChanges = true;
      result[key] = nextItem[key];
    }
  }

  if (!hasChanges) {
    return item;
  } // Only at this point, backfill properties from the original item which
  // weren't explicitly set into the result above. This is an optimization
  // to allow `hasChanges` to return early.


  for (const key in item) {
    if (!result.hasOwnProperty(key)) {
      result[key] = item[key];
    }
  }

  return result;
}


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/utils/forward-resolver.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/utils/forward-resolver.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Higher-order function which forward the resolution to another resolver with the same arguments.
 *
 * @param {string} resolverName forwarded resolver.
 *
 * @return {Function} Enhanced resolver.
 */
const forwardResolver = resolverName => function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return async _ref => {
    let {
      resolveSelect
    } = _ref;
    await resolveSelect[resolverName](...args);
  };
};

/* harmony default export */ __webpack_exports__["default"] = (forwardResolver);


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/utils/get-normalized-comma-separable.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/utils/get-normalized-comma-separable.js ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Given a value which can be specified as one or the other of a comma-separated
 * string or an array, returns a value normalized to an array of strings, or
 * null if the value cannot be interpreted as either.
 *
 * @param {string|string[]|*} value
 *
 * @return {?(string[])} Normalized field value.
 */
function getNormalizedCommaSeparable(value) {
  if (typeof value === 'string') {
    return value.split(',');
  } else if (Array.isArray(value)) {
    return value;
  }

  return null;
}

/* harmony default export */ __webpack_exports__["default"] = (getNormalizedCommaSeparable);


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/utils/if-matching-action.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/utils/if-matching-action.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** @typedef {import('../types').AnyFunction} AnyFunction */

/**
 * A higher-order reducer creator which invokes the original reducer only if
 * the dispatching action matches the given predicate, **OR** if state is
 * initializing (undefined).
 *
 * @param {AnyFunction} isMatch Function predicate for allowing reducer call.
 *
 * @return {AnyFunction} Higher-order reducer.
 */
const ifMatchingAction = isMatch => reducer => (state, action) => {
  if (state === undefined || isMatch(action)) {
    return reducer(state, action);
  }

  return state;
};

/* harmony default export */ __webpack_exports__["default"] = (ifMatchingAction);


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/utils/is-raw-attribute.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/utils/is-raw-attribute.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ isRawAttribute; }
/* harmony export */ });
/**
 * Checks whether the attribute is a "raw" attribute or not.
 *
 * @param {Object} entity    Entity record.
 * @param {string} attribute Attribute name.
 *
 * @return {boolean} Is the attribute raw
 */
function isRawAttribute(entity, attribute) {
  return (entity.rawAttributes || []).includes(attribute);
}


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/utils/on-sub-key.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/utils/on-sub-key.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onSubKey": function() { return /* binding */ onSubKey; }
/* harmony export */ });
/** @typedef {import('../types').AnyFunction} AnyFunction */

/**
 * Higher-order reducer creator which creates a combined reducer object, keyed
 * by a property on the action object.
 *
 * @param {string} actionProperty Action property by which to key object.
 *
 * @return {AnyFunction} Higher-order reducer.
 */
const onSubKey = actionProperty => reducer => function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let action = arguments.length > 1 ? arguments[1] : undefined;
  // Retrieve subkey from action. Do not track if undefined; useful for cases
  // where reducer is scoped by action shape.
  const key = action[actionProperty];

  if (key === undefined) {
    return state;
  } // Avoid updating state if unchanged. Note that this also accounts for a
  // reducer which returns undefined on a key which is not yet tracked.


  const nextKeyState = reducer(state[key], action);

  if (nextKeyState === state[key]) {
    return state;
  }

  return { ...state,
    [key]: nextKeyState
  };
};
/* harmony default export */ __webpack_exports__["default"] = (onSubKey);


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/utils/replace-action.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/utils/replace-action.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** @typedef {import('../types').AnyFunction} AnyFunction */

/**
 * Higher-order reducer creator which substitutes the action object before
 * passing to the original reducer.
 *
 * @param {AnyFunction} replacer Function mapping original action to replacement.
 *
 * @return {AnyFunction} Higher-order reducer.
 */
const replaceAction = replacer => reducer => (state, action) => {
  return reducer(state, replacer(action));
};

/* harmony default export */ __webpack_exports__["default"] = (replaceAction);


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/utils/with-weak-map-cache.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/utils/with-weak-map-cache.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

/**
 * Given a function, returns an enhanced function which caches the result and
 * tracks in WeakMap. The result is only cached if the original function is
 * passed a valid object-like argument (requirement for WeakMap key).
 *
 * @param {Function} fn Original function.
 *
 * @return {Function} Enhanced caching function.
 */

function withWeakMapCache(fn) {
  const cache = new WeakMap();
  return key => {
    let value;

    if (cache.has(key)) {
      value = cache.get(key);
    } else {
      value = fn(key); // Can reach here if key is not valid for WeakMap, since `has`
      // will return false for invalid key. Since `set` will throw,
      // ensure that key is valid before setting into cache.

      if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isObjectLike)(key)) {
        cache.set(key, value);
      }
    }

    return value;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (withWeakMapCache);


/***/ }),

/***/ "./node_modules/equivalent-key-map/equivalent-key-map.js":
/*!***************************************************************!*\
  !*** ./node_modules/equivalent-key-map/equivalent-key-map.js ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";


function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/**
 * Given an instance of EquivalentKeyMap, returns its internal value pair tuple
 * for a key, if one exists. The tuple members consist of the last reference
 * value for the key (used in efficient subsequent lookups) and the value
 * assigned for the key at the leaf node.
 *
 * @param {EquivalentKeyMap} instance EquivalentKeyMap instance.
 * @param {*} key                     The key for which to return value pair.
 *
 * @return {?Array} Value pair, if exists.
 */
function getValuePair(instance, key) {
  var _map = instance._map,
      _arrayTreeMap = instance._arrayTreeMap,
      _objectTreeMap = instance._objectTreeMap; // Map keeps a reference to the last object-like key used to set the
  // value, which can be used to shortcut immediately to the value.

  if (_map.has(key)) {
    return _map.get(key);
  } // Sort keys to ensure stable retrieval from tree.


  var properties = Object.keys(key).sort(); // Tree by type to avoid conflicts on numeric object keys, empty value.

  var map = Array.isArray(key) ? _arrayTreeMap : _objectTreeMap;

  for (var i = 0; i < properties.length; i++) {
    var property = properties[i];
    map = map.get(property);

    if (map === undefined) {
      return;
    }

    var propertyValue = key[property];
    map = map.get(propertyValue);

    if (map === undefined) {
      return;
    }
  }

  var valuePair = map.get('_ekm_value');

  if (!valuePair) {
    return;
  } // If reached, it implies that an object-like key was set with another
  // reference, so delete the reference and replace with the current.


  _map.delete(valuePair[0]);

  valuePair[0] = key;
  map.set('_ekm_value', valuePair);

  _map.set(key, valuePair);

  return valuePair;
}
/**
 * Variant of a Map object which enables lookup by equivalent (deeply equal)
 * object and array keys.
 */


var EquivalentKeyMap =
/*#__PURE__*/
function () {
  /**
   * Constructs a new instance of EquivalentKeyMap.
   *
   * @param {Iterable.<*>} iterable Initial pair of key, value for map.
   */
  function EquivalentKeyMap(iterable) {
    _classCallCheck(this, EquivalentKeyMap);

    this.clear();

    if (iterable instanceof EquivalentKeyMap) {
      // Map#forEach is only means of iterating with support for IE11.
      var iterablePairs = [];
      iterable.forEach(function (value, key) {
        iterablePairs.push([key, value]);
      });
      iterable = iterablePairs;
    }

    if (iterable != null) {
      for (var i = 0; i < iterable.length; i++) {
        this.set(iterable[i][0], iterable[i][1]);
      }
    }
  }
  /**
   * Accessor property returning the number of elements.
   *
   * @return {number} Number of elements.
   */


  _createClass(EquivalentKeyMap, [{
    key: "set",

    /**
     * Add or update an element with a specified key and value.
     *
     * @param {*} key   The key of the element to add.
     * @param {*} value The value of the element to add.
     *
     * @return {EquivalentKeyMap} Map instance.
     */
    value: function set(key, value) {
      // Shortcut non-object-like to set on internal Map.
      if (key === null || _typeof(key) !== 'object') {
        this._map.set(key, value);

        return this;
      } // Sort keys to ensure stable assignment into tree.


      var properties = Object.keys(key).sort();
      var valuePair = [key, value]; // Tree by type to avoid conflicts on numeric object keys, empty value.

      var map = Array.isArray(key) ? this._arrayTreeMap : this._objectTreeMap;

      for (var i = 0; i < properties.length; i++) {
        var property = properties[i];

        if (!map.has(property)) {
          map.set(property, new EquivalentKeyMap());
        }

        map = map.get(property);
        var propertyValue = key[property];

        if (!map.has(propertyValue)) {
          map.set(propertyValue, new EquivalentKeyMap());
        }

        map = map.get(propertyValue);
      } // If an _ekm_value exists, there was already an equivalent key. Before
      // overriding, ensure that the old key reference is removed from map to
      // avoid memory leak of accumulating equivalent keys. This is, in a
      // sense, a poor man's WeakMap, while still enabling iterability.


      var previousValuePair = map.get('_ekm_value');

      if (previousValuePair) {
        this._map.delete(previousValuePair[0]);
      }

      map.set('_ekm_value', valuePair);

      this._map.set(key, valuePair);

      return this;
    }
    /**
     * Returns a specified element.
     *
     * @param {*} key The key of the element to return.
     *
     * @return {?*} The element associated with the specified key or undefined
     *              if the key can't be found.
     */

  }, {
    key: "get",
    value: function get(key) {
      // Shortcut non-object-like to get from internal Map.
      if (key === null || _typeof(key) !== 'object') {
        return this._map.get(key);
      }

      var valuePair = getValuePair(this, key);

      if (valuePair) {
        return valuePair[1];
      }
    }
    /**
     * Returns a boolean indicating whether an element with the specified key
     * exists or not.
     *
     * @param {*} key The key of the element to test for presence.
     *
     * @return {boolean} Whether an element with the specified key exists.
     */

  }, {
    key: "has",
    value: function has(key) {
      if (key === null || _typeof(key) !== 'object') {
        return this._map.has(key);
      } // Test on the _presence_ of the pair, not its value, as even undefined
      // can be a valid member value for a key.


      return getValuePair(this, key) !== undefined;
    }
    /**
     * Removes the specified element.
     *
     * @param {*} key The key of the element to remove.
     *
     * @return {boolean} Returns true if an element existed and has been
     *                   removed, or false if the element does not exist.
     */

  }, {
    key: "delete",
    value: function _delete(key) {
      if (!this.has(key)) {
        return false;
      } // This naive implementation will leave orphaned child trees. A better
      // implementation should traverse and remove orphans.


      this.set(key, undefined);
      return true;
    }
    /**
     * Executes a provided function once per each key/value pair, in insertion
     * order.
     *
     * @param {Function} callback Function to execute for each element.
     * @param {*}        thisArg  Value to use as `this` when executing
     *                            `callback`.
     */

  }, {
    key: "forEach",
    value: function forEach(callback) {
      var _this = this;

      var thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;

      this._map.forEach(function (value, key) {
        // Unwrap value from object-like value pair.
        if (key !== null && _typeof(key) === 'object') {
          value = value[1];
        }

        callback.call(thisArg, value, key, _this);
      });
    }
    /**
     * Removes all elements.
     */

  }, {
    key: "clear",
    value: function clear() {
      this._map = new Map();
      this._arrayTreeMap = new Map();
      this._objectTreeMap = new Map();
    }
  }, {
    key: "size",
    get: function get() {
      return this._map.size;
    }
  }]);

  return EquivalentKeyMap;
}();

module.exports = EquivalentKeyMap;


/***/ }),

/***/ "./node_modules/memize/index.js":
/*!**************************************!*\
  !*** ./node_modules/memize/index.js ***!
  \**************************************/
/***/ (function(module) {

/**
 * Memize options object.
 *
 * @typedef MemizeOptions
 *
 * @property {number} [maxSize] Maximum size of the cache.
 */

/**
 * Internal cache entry.
 *
 * @typedef MemizeCacheNode
 *
 * @property {?MemizeCacheNode|undefined} [prev] Previous node.
 * @property {?MemizeCacheNode|undefined} [next] Next node.
 * @property {Array<*>}                   args   Function arguments for cache
 *                                               entry.
 * @property {*}                          val    Function result.
 */

/**
 * Properties of the enhanced function for controlling cache.
 *
 * @typedef MemizeMemoizedFunction
 *
 * @property {()=>void} clear Clear the cache.
 */

/**
 * Accepts a function to be memoized, and returns a new memoized function, with
 * optional options.
 *
 * @template {Function} F
 *
 * @param {F}             fn        Function to memoize.
 * @param {MemizeOptions} [options] Options object.
 *
 * @return {F & MemizeMemoizedFunction} Memoized function.
 */
function memize( fn, options ) {
	var size = 0;

	/** @type {?MemizeCacheNode|undefined} */
	var head;

	/** @type {?MemizeCacheNode|undefined} */
	var tail;

	options = options || {};

	function memoized( /* ...args */ ) {
		var node = head,
			len = arguments.length,
			args, i;

		searchCache: while ( node ) {
			// Perform a shallow equality test to confirm that whether the node
			// under test is a candidate for the arguments passed. Two arrays
			// are shallowly equal if their length matches and each entry is
			// strictly equal between the two sets. Avoid abstracting to a
			// function which could incur an arguments leaking deoptimization.

			// Check whether node arguments match arguments length
			if ( node.args.length !== arguments.length ) {
				node = node.next;
				continue;
			}

			// Check whether node arguments match arguments values
			for ( i = 0; i < len; i++ ) {
				if ( node.args[ i ] !== arguments[ i ] ) {
					node = node.next;
					continue searchCache;
				}
			}

			// At this point we can assume we've found a match

			// Surface matched node to head if not already
			if ( node !== head ) {
				// As tail, shift to previous. Must only shift if not also
				// head, since if both head and tail, there is no previous.
				if ( node === tail ) {
					tail = node.prev;
				}

				// Adjust siblings to point to each other. If node was tail,
				// this also handles new tail's empty `next` assignment.
				/** @type {MemizeCacheNode} */ ( node.prev ).next = node.next;
				if ( node.next ) {
					node.next.prev = node.prev;
				}

				node.next = head;
				node.prev = null;
				/** @type {MemizeCacheNode} */ ( head ).prev = node;
				head = node;
			}

			// Return immediately
			return node.val;
		}

		// No cached value found. Continue to insertion phase:

		// Create a copy of arguments (avoid leaking deoptimization)
		args = new Array( len );
		for ( i = 0; i < len; i++ ) {
			args[ i ] = arguments[ i ];
		}

		node = {
			args: args,

			// Generate the result from original function
			val: fn.apply( null, args ),
		};

		// Don't need to check whether node is already head, since it would
		// have been returned above already if it was

		// Shift existing head down list
		if ( head ) {
			head.prev = node;
			node.next = head;
		} else {
			// If no head, follows that there's no tail (at initial or reset)
			tail = node;
		}

		// Trim tail if we're reached max size and are pending cache insertion
		if ( size === /** @type {MemizeOptions} */ ( options ).maxSize ) {
			tail = /** @type {MemizeCacheNode} */ ( tail ).prev;
			/** @type {MemizeCacheNode} */ ( tail ).next = null;
		} else {
			size++;
		}

		head = node;

		return node.val;
	}

	memoized.clear = function() {
		head = null;
		tail = null;
		size = 0;
	};

	if ( false ) {}

	// Ignore reason: There's not a clear solution to create an intersection of
	// the function with additional properties, where the goal is to retain the
	// function signature of the incoming argument and add control properties
	// on the return value.

	// @ts-ignore
	return memoized;
}

module.exports = memize;


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

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ rng; }
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ __webpack_exports__["default"] = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ __webpack_exports__["default"] = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ __webpack_exports__["default"] = (validate);

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blocks"];

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

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

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

/***/ "@wordpress/is-shallow-equal":
/*!****************************************!*\
  !*** external ["wp","isShallowEqual"] ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["isShallowEqual"];

/***/ }),

/***/ "@wordpress/url":
/*!*****************************!*\
  !*** external ["wp","url"] ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["url"];

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./node_modules/@wordpress/core-data/build-module/index.js");
/******/ 	(window.wp = window.wp || {}).coreData = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=core-data.js.map