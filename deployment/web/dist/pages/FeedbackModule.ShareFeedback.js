import { LogManager, asProperty, getSession, handleError, DescribedError, fromConstant$, dynUnavailable, pageScope, getNanoflowArguments$, toFriendlyId, nanoflowEngine, ensure, readUntracked, MxObject, available, unavailable, getAugmentedNamespace, selectTranslation, reactExports, asPluginWidgets } from '../index-BgmvTcvh.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-Cb4MO343.js';
import { ActionButton, ActionProperty } from '../ActionButton-7BeRw6Eb.js';
import '../AttributeProperty-DLZOHEVl.js';
import { DerivedUniqueIdProperty } from '../DerivedUniqueIdProperty-Bivq5vCz.js';
import { handleDataSourceExecutionError } from '../BMuJrVqQ-CCtMHjkn.js';
import { fromObjectProperty$ } from '../CkBXggmw-DpOc9R4C.js';
import { TextProperty } from '../TextProperty-BV2oKBbq.js';
import { FormGroup, ValidationProperty } from '../FormGroup-Clh5YKWK.js';
import { WebIconProperty } from '../WebIconProperty-MLEi2sc0.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-D6sB2G5T.js';
import { Container } from '../Container-LyamVXag.js';
import { DataView } from '../DataView-BlzHzMI2.js';
import { Div } from '../Div-DznaFJxI.js';
import { ImageWidgetModule } from '../Image-CNc12AI2.js';
import { Label } from '../Label-CtWq-WVv.js';
import { Text } from '../Text-mON8QAZM.js';
import { TextArea } from '../TextArea-CVgm5cpf.js';
import { TextBox } from '../TextBox-Fm7_ARBG.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-CdvE1MzX.js';
import '../index-DQ4aW2Di.js';
import { AttributeProperty } from '../CTQxk13g-Cpo2G8Em.js';
import '../uEIG9e6s-BfLfin4i.js';
import '../CxoxYXlg-DglkwELR.js';
import '../bdxqAC6d-DXeZKQMd.js';
import '../index-BuuMIVCm.js';
import '../InlineText-D4EmJMFt.js';
import '../B6nacfjo-CjNcAaDz.js';
import '../B7_8A3ct-D5Y5qINW.js';
import '../F-L0MxFU-C_ISpEfs.js';
import '../ScrollContainer-U0HrQ4Hh.js';

const logger = LogManager.get().getLogger(), NanoflowObjectProperty = asProperty((config, store, widgetId) => {
  const allowedRoles = config.source.allowedRoles, session = getSession();
  if (void 0 !== allowedRoles && !session.hasSomeRole(allowedRoles))
    return handleError(new DescribedError("Unable to execute action because you do not have sufficient permissions.")), fromConstant$(dynUnavailable());
  const [currentForm$] = store.useSlot(pageScope, "form");
  return fromObjectProperty$(config, store, widgetId, getNanoflowArguments$(config.argMap, store, widgetId, `data source of ${widgetId}`), async (args) => {
    !function(args2) {
      logger.debug(`Fetching object using nanoflow '${config.source.nanoflow}' for widget ${toFriendlyId(widgetId)}`, "parameter mapping:", args2);
    }(args);
    try {
      const result = await nanoflowEngine.execute(config.source.nanoflow, args, ensure(readUntracked(currentForm$))[0]), mxObject = result instanceof MxObject ? result : void 0;
      return function(mxObject2) {
        logger.debug(mxObject2 ? `Received object '${mxObject2.getGuid()}' for widget ${toFriendlyId(widgetId)}` : `Received no object for widget ${toFriendlyId(widgetId)}`);
      }(mxObject), mxObject ? available(mxObject) : unavailable();
    } catch (e) {
      return handleDataSourceExecutionError(widgetId, e, "nanoflow"), unavailable();
    }
  });
});

// BEGIN EXTRA CODE
const handleUserRoles = async () => {
  if (!mx) return undefined;
  try {
    return await mx.session.getUserRoleNames();
  } catch (error) {
    console.error("Error getting user role names", error);
    return undefined;
  }
};
const handlePagePath = async () => {
  if (!mx) return undefined;
  try {
    const mendixVersion = mx.version;
    const mendixMajorVersion = mendixVersion.split('.')[0];
    switch (mendixMajorVersion) {
      case '9':
      case '10':
        return mx.ui.getContentForm().path.toString();
      default:
        return undefined;
    }
    ;
  } catch {
    console.error("Error getting page path", error);
    return undefined;
  }
};
// END EXTRA CODE

/**
 * What does this JavaScript action do?
 * 
 * Returns meta data from the clients internet browser. 
 * 
 * This includes; 
 * 
 * ActiveUserRoles
 * PageName
 * EnvironmentURL
 * Browser
 * ScreenWidth
 * ScreenHeight
 * @param {MxObject} feedback
 * @returns {Promise.<MxObject>}
 */
async function JS_PopulateFeedbackMetadata(feedback) {
  // BEGIN USER CODE
  try {
    const userRoles = await handleUserRoles();
    const pagePath = await handlePagePath();
    feedback.set("ActiveUserRoles", userRoles);
    feedback.set("PageName", pagePath);
    feedback.set("EnvironmentURL", window.location.href);
    feedback.set("Browser", navigator.userAgent);
    feedback.set("ScreenWidth", window.screen.width);
    feedback.set("ScreenHeight", window.screen.height);
    return feedback;
  } catch (error) {
    console.error("Error setting meta data", error);
  }
  // END USER CODE
}

var JS_PopulateFeedbackMetadata$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    JS_PopulateFeedbackMetadata: JS_PopulateFeedbackMetadata
});

var require$$0$4 = /*@__PURE__*/getAugmentedNamespace(JS_PopulateFeedbackMetadata$1);

var AsyncStorage = {};

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * Store a Mendix object in device storage, identified by a unique key. Can be accesed by the GetStargeItemObject action. Please note that users can clear the device storage.
 * @param {string} key - This field is required.
 * @param {MxObject} value - This field is required.
 * @returns {Promise.<void>}
 */
async function SetStorageItemObject(key, value) {
  // BEGIN USER CODE
  if (!key) {
    return Promise.reject(new Error("Input parameter 'Key' is required"));
  }
  if (!value) {
    return Promise.reject(new Error("Input parameter 'Value' is required"));
  }
  const serializedObject = serializeMxObject(value);
  return setItem(key, JSON.stringify(serializedObject));
  function setItem(key, value) {
    if (navigator && navigator.product === "ReactNative") {
      return AsyncStorage.setItem(key, value);
    }
    if (window) {
      window.localStorage.setItem(key, value);
      return Promise.resolve();
    }
    return Promise.reject(new Error("No storage API available"));
  }
  function serializeMxObject(object) {
    return object.getAttributes().reduce((accumulator, attributeName) => {
      accumulator[attributeName] = object.get(attributeName);
      return accumulator;
    }, {
      guid: object.getGuid()
    });
  }
  // END USER CODE
}

var SetStorageItemObject$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    SetStorageItemObject: SetStorageItemObject
});

var require$$0$3 = /*@__PURE__*/getAugmentedNamespace(SetStorageItemObject$1);

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * What does this JavaScript action do?
 * 
 * Get locally stored JSON object stored in clients internet browser. Identified by a unique key. Can be accessed by the GetStorageItemObject action. Please note that users can clear the device storage.
 * @param {string} key - This field is required.
 * @param {string} entity - This field is required.
 * @returns {Promise.<MxObject>}
 */
async function GetStorageItemObject(key, entity) {
  // BEGIN USER CODE
  if (!key) {
    return Promise.reject(new Error("Input parameter 'Key' is required"));
  }
  if (!entity) {
    return Promise.reject(new Error("Input parameter 'Entity' is required"));
  }
  return getItem(key).then(result => {
    if (result === null) {
      return Promise.reject(new Error(`Storage item '${key}' does not exist`));
    }
    const value = JSON.parse(result);
    return getOrCreateMxObject(entity, value).then(newObject => {
      const newValue = serializeMxObject(newObject);
      return setItem(key, JSON.stringify(newValue)).then(() => newObject);
    });
  });
  function getItem(key) {
    if (navigator && navigator.product === "ReactNative") {
      return AsyncStorage.getItem(key);
    }
    if (window) {
      const value = window.localStorage.getItem(key);
      return Promise.resolve(value);
    }
    return Promise.reject(new Error("No storage API available"));
  }
  function setItem(key, value) {
    if (navigator && navigator.product === "ReactNative") {
      return AsyncStorage.setItem(key, value);
    }
    if (window) {
      window.localStorage.setItem(key, value);
      return Promise.resolve();
    }
    return Promise.reject(new Error("No storage API available"));
  }
  function getOrCreateMxObject(entity, value) {
    return getMxObject(value.guid).then(existingObject => {
      if (existingObject) {
        return existingObject;
      } else {
        return createMxObject(entity, value);
      }
    });
  }
  function getMxObject(guid) {
    return new Promise((resolve, reject) => {
      mx.data.get({
        guid,
        callback: mxObject => resolve(mxObject),
        error: error => reject(error)
      });
    });
  }
  function createMxObject(entity, value) {
    return new Promise((resolve, reject) => {
      mx.data.create({
        entity,
        callback: mxObject => {
          Object.keys(value).filter(attribute => attribute !== "guid").forEach(attributeName => {
            const attributeValue = value[attributeName];
            mxObject.set(attributeName, attributeValue);
          });
          resolve(mxObject);
        },
        error: () => reject(new Error(`Could not create '${entity}' object`))
      });
    });
  }
  function serializeMxObject(object) {
    return object.getAttributes().reduce((accumulator, attributeName) => {
      accumulator[attributeName] = object.get(attributeName);
      return accumulator;
    }, {
      guid: object.getGuid()
    });
  }
  // END USER CODE
}

var GetStorageItemObject$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    GetStorageItemObject: GetStorageItemObject
});

var require$$0$2 = /*@__PURE__*/getAugmentedNamespace(GetStorageItemObject$1);

const SUB_Feedback_GetOrCreate = {
  "name": "FeedbackModule.SUB_Feedback_GetOrCreate",
  "instructions": [
    {
      "type": "tryCatch",
      "label": "a2095ce5-b44d-436b-b3a5-5272f1710c7e",
      "catchTarget": "fdf09a62-70cb-4b75-916e-aa0a31d7709c",
      "body": [
        {
          "type": "javaScriptActionCall",
          "action": () => require$$0$2.GetStorageItemObject,
          "outputVar": "LocalFeedback",
          "parameters": [
            {
              "kind": "primitive",
              "value": {
                "type": "constant",
                "name": "FeedbackModule.LocalStorageKey"
              }
            },
            {
              "kind": "primitive",
              "value": {
                "type": "literal",
                "value": "FeedbackModule.Feedback"
              }
            }
          ]
        },
        {
          "type": "return",
          "result": {
            "type": "literal",
            "value": true
          },
          "resultKind": "primitive"
        }
      ]
    },
    {
      "type": "switch",
      "label": "8f3409fb-9d15-4404-827a-c1433a2e72d6",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "LocalFeedback"
          },
          {
            "type": "literal",
            "value": null
          }
        ]
      },
      "targets": {
        "false": "9183048c-8599-4531-a752-0987b0f29058",
        "true": "f7bcca8b-dfeb-4d63-89f6-1034d889b283"
      }
    },
    {
      "type": "return",
      "label": "f7bcca8b-dfeb-4d63-89f6-1034d889b283",
      "result": {
        "type": "variable",
        "variable": "LocalFeedback"
      },
      "resultKind": "object"
    },
    {
      "type": "jump",
      "label": "9183048c-8599-4531-a752-0987b0f29058",
      "target": "5c1d9df6-237a-4b63-b33d-b897586c4996"
    },
    {
      "type": "createObject",
      "label": "5c1d9df6-237a-4b63-b33d-b897586c4996",
      "objectType": "FeedbackModule.Feedback",
      "outputVar": "NewFeedback"
    },
    {
      "type": "return",
      "label": "4588386f-8cc9-459d-9e82-fd993bd73b31",
      "result": {
        "type": "variable",
        "variable": "NewFeedback"
      },
      "resultKind": "object"
    },
    {
      "type": "jump",
      "label": "fdf09a62-70cb-4b75-916e-aa0a31d7709c",
      "target": "9183048c-8599-4531-a752-0987b0f29058"
    },
    {
      "type": "jump",
      "label": "9183048c-8599-4531-a752-0987b0f29058",
      "target": "5c1d9df6-237a-4b63-b33d-b897586c4996"
    }
  ]
};

const DS_Feedback_Populate = {
  "name": "FeedbackModule.DS_Feedback_Populate",
  "instructions": [
    {
      "type": "nanoflowCall",
      "label": "54c89a56-bd09-45fb-8e6e-49022ba04a51",
      "flow": () => SUB_Feedback_GetOrCreate,
      "parameters": [],
      "outputVar": "Feedback"
    },
    {
      "type": "microflowCall",
      "label": "bf901330-aee9-4c7f-bd86-b846e34d5eb0",
      "operationId": "+ifxSaHX8leO+x0e9n4+7w",
      "parameters": [
        {
          "name": "Feedback",
          "value": {
            "type": "variable",
            "variable": "Feedback"
          },
          "kind": "object"
        }
      ]
    },
    {
      "type": "changeObject",
      "label": "7be0cd29-cd49-4841-aeda-9c2cdb1fe57f",
      "inputVar": "Feedback",
      "member": "_showEmail",
      "value": {
        "type": "conditional",
        "condition": {
          "type": "conditional",
          "condition": {
            "type": "function",
            "name": "!=",
            "parameters": [
              {
                "type": "variable",
                "variable": "Feedback",
                "path": "SubmitterEmail"
              },
              {
                "type": "literal",
                "value": null
              }
            ]
          },
          "then": {
            "type": "function",
            "name": "!=",
            "parameters": [
              {
                "type": "variable",
                "variable": "Feedback",
                "path": "SubmitterEmail"
              },
              {
                "type": "literal",
                "value": ""
              }
            ]
          },
          "else": {
            "type": "literal",
            "value": false
          }
        },
        "then": {
          "type": "literal",
          "value": false
        },
        "else": {
          "type": "literal",
          "value": true
        }
      }
    },
    {
      "type": "javaScriptActionCall",
      "label": "75ec2776-e39d-4000-9e91-02b0698d5c64",
      "action": () => require$$0$4.JS_PopulateFeedbackMetadata,
      "parameters": [
        {
          "kind": "object",
          "value": {
            "type": "variable",
            "variable": "Feedback"
          }
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "cfcfcaa3-186f-4915-b963-5cdfd1853fb5",
      "action": () => require$$0$3.SetStorageItemObject,
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "constant",
            "name": "FeedbackModule.LocalStorageKey"
          }
        },
        {
          "kind": "object",
          "value": {
            "type": "variable",
            "variable": "Feedback"
          }
        }
      ]
    },
    {
      "type": "return",
      "label": "6d28a48c-aa93-41c9-b027-dc75e236c933",
      "result": {
        "type": "variable",
        "variable": "Feedback"
      },
      "resultKind": "object"
    }
  ]
};

// BEGIN EXTRA CODE
// messageActionTypes are to identify the postMessage types between the JS Action & Feedback Widget.
const messageAction_toggleAnnotateMode$1 = "mxFeedbackWidget_toggleScreenshotMode"; // The Feedback widget reads this to trigger a specific screenshot mode stage.
const messageAction_isBase64$1 = "mxFeedbackWidget_convertedToBase64"; // We expect this string from the widget when screenshot mode in enabled.
const messageAction_actionCancelled$1 = "mxFeedbackWidget_actionCancelled"; // The Feedback widget will send this back if screenshot/annotation actions are cancelled by the user.

/* 
	The widget and JS action communicate with the following postMessage object structure:
	messageObject = {messageActionType: string;messageData: string;}
*/
const messageObject = {
  "messageActionType": messageAction_toggleAnnotateMode$1 //The Feedback widget reads this to trigger a specific Mode.
};
const parseJson = event => {
  try {
    return JSON.parse(event);
  } catch {
    return undefined;
  }
};
// END EXTRA CODE

/**
 * What does this JavaScript action do?
 * 
 * Lets to take a screenshot of the current visible page
 * 
 * More detailed explanation:
 * The Mendix Feedback Widget handles annotation, screenshot and also renders a default styled button on your page. 
 * 
 * Usage:
 * You should use this JavaScript action to trigger the screenshot functionality.
 * 
 * Return Type:
 * Will return a image base64 string
 * 
 * @returns {Promise.<string>}
 */
async function JS_ToggleFeedbackScreenshotWidget() {
  // BEGIN USER CODE
  postMessage(JSON.stringify(messageObject), window.origin); // Send a message to the Feedback Wiget to trigger screenshot mode.

  return new Promise(resolve => {
    function handleEvent(event) {
      const parsedData = parseJson(event.data);
      if (parsedData && event.origin === window.origin) {
        if (parsedData.messageActionType === messageAction_isBase64$1) {
          window.removeEventListener("message", handleEvent);
          resolve(parsedData.messageData); // Resolve & return the base64 image to the nanoflow.
        }
        ;
        if (parsedData.messageActionType === messageAction_actionCancelled$1) {
          resolve("uploadCancelled");
        }
      }
    }
    ;
    window.addEventListener("message", handleEvent); // Listen and wait for the Feedback Widget to send back the edited screenshot as base64.
  });
  // END USER CODE
}

var JS_ToggleFeedbackScreenshotWidget$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    JS_ToggleFeedbackScreenshotWidget: JS_ToggleFeedbackScreenshotWidget
});

var require$$0$1 = /*@__PURE__*/getAugmentedNamespace(JS_ToggleFeedbackScreenshotWidget$1);

const ACT_Feedback_TriggerScreenshotMode = {
  "name": "FeedbackModule.ACT_Feedback_TriggerScreenshotMode",
  "instructions": [
    {
      "type": "closeForm",
      "label": "e3500cca-c292-4b93-81c6-83feda9c1321"
    },
    {
      "type": "javaScriptActionCall",
      "label": "9c5592e9-bf2d-48b2-b03c-547f45b0c6ed",
      "action": () => require$$0$1.JS_ToggleFeedbackScreenshotWidget,
      "outputVar": "base64FromWidget",
      "parameters": []
    },
    {
      "type": "switch",
      "label": "50eff435-6051-4fda-a563-600908ad855d",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "base64FromWidget"
          },
          {
            "type": "literal",
            "value": "uploadCancelled"
          }
        ]
      },
      "targets": {
        "true": "cccb4914-e9e3-447c-aeab-378e5570b0df",
        "false": "85f1b2b5-f19c-4606-b8a4-28887979e6a6"
      }
    },
    {
      "type": "jump",
      "label": "85f1b2b5-f19c-4606-b8a4-28887979e6a6",
      "target": "0300fe82-f623-4e88-a330-55bf850184a5"
    },
    {
      "type": "jump",
      "label": "0300fe82-f623-4e88-a330-55bf850184a5",
      "target": "03c52bac-4dc4-4bbf-ba5e-989468faa620"
    },
    {
      "type": "jump",
      "label": "03c52bac-4dc4-4bbf-ba5e-989468faa620",
      "target": "1e87d37e-b2cc-4200-b4dd-628515cc77b3"
    },
    {
      "type": "openForm",
      "label": "1e87d37e-b2cc-4200-b4dd-628515cc77b3",
      "path": "FeedbackModule/ShareFeedback.page.xml",
      "params": {
        "name": "FeedbackModule/ShareFeedback.page.xml",
        "location": "modal",
        "resizable": true
      }
    },
    {
      "type": "return",
      "label": "d1d9f582-cc1b-492c-95d5-aac796c27937",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "switch",
      "label": "cccb4914-e9e3-447c-aeab-378e5570b0df",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "base64FromWidget"
          },
          {
            "type": "literal",
            "value": null
          }
        ]
      },
      "targets": {
        "true": "8fbb1ed0-ac00-498e-90c0-9dba1496ea12",
        "false": "5f2fa693-9de2-4366-ac67-907ef4274432"
      }
    },
    {
      "type": "return",
      "label": "5f2fa693-9de2-4366-ac67-907ef4274432",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "changeObject",
      "label": "8fbb1ed0-ac00-498e-90c0-9dba1496ea12",
      "inputVar": "Feedback",
      "member": "ImageB64",
      "value": {
        "type": "variable",
        "variable": "base64FromWidget"
      }
    },
    {
      "type": "commitObjects",
      "operationId": "xXZtzSbF91yFhkO3rX813A",
      "inputVar": "Feedback"
    },
    {
      "type": "jump",
      "label": "03c52bac-4dc4-4bbf-ba5e-989468faa620",
      "target": "1e87d37e-b2cc-4200-b4dd-628515cc77b3"
    }
  ]
};

// BEGIN EXTRA CODE
var isUploading = false;
async function storeFileAndGetResourceUrl(file) {
  return URL.createObjectURL(file); // Saves the file to locally memory and returns a URL path to the Blob object.
}
;
function removeDomElements(_ref) {
  let {
    fileInput,
    progressId
  } = _ref;
  if (progressId) mx.ui.hideProgress(progressId);
  if (fileInput) document.body.removeChild(fileInput);
  isUploading = false;
}
function validateFileTypes(_ref2) {
  let {
    acceptedTypes,
    fileType
  } = _ref2;
  if (!acceptedTypes && !fileType) return false;
  const accepted = acceptedTypes.split(",");
  return accepted.some(type => new RegExp(type).test(fileType));
}
function validateFileSize(_ref3) {
  let {
    uploadedFile,
    maxSize
  } = _ref3;
  if (!uploadedFile && !maxSize) return false;
  const uploadedSize = uploadedFile.size / 1024 / 1024; // Convert to MB
  return uploadedSize < maxSize.c[0] + 0.1; // 0.1 MB extra tolerance
}
// END EXTRA CODE

/**
 * What does this JavaScript Action do?
 * 
 * This is a custom build JavaScript Action that triggers the file upload dialog box to open in your internet browser. 
 * 
 * Dependency Note: 
 * This JavaScript action should be used with the JavaScript Action called 'JS_RevokeUploadedFileFromMemory' so that the image uploaded is removed from local memory :)
 * 
 * Explanation of this JavaScript Action & Memory management.
 * 
 * We use createObjectURL() to upload and store files in local memory. We can access and cosume this in memory image resource via the URL path that is returned from the createObjectURL() method. 
 * 
 * However, each time you call createObjectURL(), a new object is created in memory, even if you've already created one for the same object. 
 * So each of these must be released by calling the JS Action called 'JS_RevokeUploadedFileFromMemory' when you no longer need them.
 * 
 * Browsers will release object URLs automatically when the document is unloaded; however, for optimal performance and memory usage, if there are safe times when you can explicitly unload them, you should do so with the JavaScriptAction called 'JS_RevokeUploadedFileFromMemory'.
 * @param {string} userDefined_mimeTypes
 * @param {Big} userDefined_fileUploadSize
 * @returns {Promise.<string>}
 */
async function JS_UploadAndConvertToFileBlobURL(userDefined_mimeTypes, userDefined_fileUploadSize) {
  // BEGIN USER CODE
  return new Promise((resolve, reject) => {
    try {
      // Create and append the HTML input element to the body
      const fileInput = document.createElement("input");
      fileInput.style.position = "absolute";
      fileInput.style.left = "-9999px";
      fileInput.name = "fileupload";
      fileInput.id = "fileupload";
      fileInput.type = "file";
      if (userDefined_mimeTypes) {
        fileInput.accept = userDefined_mimeTypes;
      }
      fileInput.multiple = false;
      fileInput.onchange = handleFileUpload;
      document.body.appendChild(fileInput);
      fileInput.addEventListener("cancel", () => resolve("uploadCancelled"));
      fileInput.click();

      // A function used to validate & store the uploaded file to local memory.
      function handleFileUpload(event) {
        isUploading = true;
        const newFile = event.target.files[0];
        const progressId = mx.ui.showProgress(null, true);

        // Check if the uploaded file type matches the user defined accepted types.
        if (!validateFileTypes({
          acceptedTypes: fileInput.accept,
          fileType: newFile.type
        })) {
          removeDomElements({
            fileInput,
            progressId
          });
          resolve("fileTypeNotAccepted");
          return;
        }
        // Check if the uploaded file matches the user defined upload size.
        if (!validateFileSize({
          uploadedFile: newFile,
          maxSize: userDefined_fileUploadSize
        })) {
          removeDomElements({
            fileInput,
            progressId
          });
          resolve("fileSizeNotAccepted");
          return;
        }
        // Store file locally on users device and return path to resource.
        storeFileAndGetResourceUrl(newFile).then(fileBlobURL => {
          if (fileBlobURL && typeof fileBlobURL === "string") {
            removeDomElements({
              fileInput,
              progressId
            });
            resolve(fileBlobURL);
          } else {
            removeDomElements({
              fileInput,
              progressId
            });
            resolve("fileNotConverted");
          }
        });
        return;
      }
      ;
    } catch (error) {
      reject(error);
    }
  });
  // END USER CODE
}

var JS_UploadAndConvertToFileBlobURL$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    JS_UploadAndConvertToFileBlobURL: JS_UploadAndConvertToFileBlobURL
});

var require$$0 = /*@__PURE__*/getAugmentedNamespace(JS_UploadAndConvertToFileBlobURL$1);

// BEGIN EXTRA CODE
// messageActionTypes are to identify the postMessage types between the JS Action & Feedback Widget.
const messageAction_toggleAnnotateMode = "mxFeedbackWidget_toggleAnnotateMode"; // The Feedback widget reads this to trigger a specific screenshot mode stage.
const messageAction_isBase64 = "mxFeedbackWidget_convertedToBase64"; // We expect this string from the widget when screenshot mode in enabled.
const messageAction_actionCancelled = "mxFeedbackWidget_actionCancelled"; // The Feedback widget will send this back if screenshot/annotation actions are cancelled by the user.

const parseJSON = event => {
  try {
    return JSON.parse(event);
  } catch {
    return undefined;
  }
};
// END EXTRA CODE

/**
 * What does this JavaScript action do?
 * 
 * When you upload a screenshot manually the image can be annotatated. 
 * 
 * More detailed explanation:
 * The Mendix Feedback Widget handles annotation and also renders a default styled button on your page. 
 * 
 * In order to trigger the annotation mode you have to use this JavaScript action to send the widget the correct image payload.
 * 
 * Return Type:
 * Will return base 64 image string
 * @param {string} fileBlobURL
 * @returns {Promise.<string>}
 */
async function JS_ToggleFeedbackAnnotateWidget(fileBlobURL) {
  // BEGIN USER CODE
  /* 
  The widget and JS action communicate with the following postMessage object structure:
  messageObject = {messageActionType: string;messageData: string;}
  */
  const messageObject = {
    "messageActionType": messageAction_toggleAnnotateMode,
    // The widget reads this to trigger the Annotate Mode.
    "messageData": fileBlobURL // The widget uses this URL reference to get access to the locally stored image blob.
  };
  postMessage(JSON.stringify(messageObject), window.origin); // Send the serialized message object to Feedback Wiget to trigger annotate mode.

  return new Promise(resolve => {
    function handleEvent(event) {
      const parsedData = parseJSON(event.data); // Convert the received string to an object.

      if (event.origin === window.origin) {
        if (parsedData && parsedData.messageActionType === messageAction_isBase64) {
          window.removeEventListener("message", handleEvent);
          resolve(parsedData.messageData); // Resolve & return the base64 image to the nanoflow.
        }
        ;
        if (parsedData && parsedData.messageActionType === messageAction_actionCancelled) {
          resolve();
        }
      }
    }
    ;
    window.addEventListener("message", handleEvent); // Listen and wait for the Feedback Widget to send the base64 image.
  });
  // END USER CODE
}

var JS_ToggleFeedbackAnnotateWidget$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    JS_ToggleFeedbackAnnotateWidget: JS_ToggleFeedbackAnnotateWidget
});

var require$$1 = /*@__PURE__*/getAugmentedNamespace(JS_ToggleFeedbackAnnotateWidget$1);

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * What does this JavaScript action do?
 * 
 * After you have uploaded an image it removes locally stored image from memory. This is a custom build action.
 * 
 * Dependency Note: 
 * This JavaScript action should be used only when you have inserted the Image Upload JavaScript Action called 'JS_UploadAndConvertToFileBlobURL' into your nanoflow.
 * 
 * More detailed explanation:  Memory management.
 * 
 * To upload a image we use a custom build Javascript action called  'JS_UploadAndConvertToFileBlobURL'.
 * Inside this action we use a JavaScript method called createObjectURL() to upload and store files in local memory. We can access and cosume this in memory image resource via the URL path that is returned from the createObjectURL() method. 
 * 
 * However, each time you call createObjectURL(), a new object is created in memory, even if you've already created one for the same object. 
 * So each of these must be released by calling this action called 'JS_RevokeUploadedFileFromMemory' when you no longer need them.
 * 
 * Browsers will release object URLs automatically when the document is unloaded; however, for optimal performance and memory usage, if there are safe times when you can explicitly unload them, you should do so with the JavaScriptAction called 'JS_RevokeUploadedFileFromMemory'.
 * @param {string} fileBlobURL - You have to pass the fileBlobURL that was created using the URL.createObjectURL() in the JS Action called 'JS_UploadAndConvertToFileBlobURL'
 * @returns {Promise.<void>}
 */
async function JS_RevokeUploadedFileFromMemory(fileBlobURL) {
  // BEGIN USER CODE
  /* We use the URL.createObjectURL() static method which creates a string containing a URL representing the
     image uploaded. 
     The image blob is stored in the clients browser and takes up memory whilst the session is active. So here we 
     revoke the image when the user deletes the image. Note that the image is automaticlly revoked when the browser refreshes
     or closes.
  
     You have to pass the fileBlobURL that was created using the URL.createObjectURL() in the JS Action called 'JS_UploadAndConvertToFileBlobURL'
   */
  if (fileBlobURL && typeof fileBlobURL === "string") {
    URL.revokeObjectURL(fileBlobURL);
  } else {
    throw new Error("Image was not removed from browser memory");
  }
  // END USER CODE
}

var JS_RevokeUploadedFileFromMemory$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    JS_RevokeUploadedFileFromMemory: JS_RevokeUploadedFileFromMemory
});

var require$$3 = /*@__PURE__*/getAugmentedNamespace(JS_RevokeUploadedFileFromMemory$1);

const ACT_Feedback_UploadImage = {
  "name": "FeedbackModule.ACT_Feedback_UploadImage",
  "instructions": [
    {
      "type": "setVariable",
      "label": "a3fa93be-c66a-4dd4-8016-cff971190225",
      "value": {
        "type": "literal",
        "value": ".gif,.png,.jpg,.jpeg"
      },
      "outputVar": "mimeTypes",
      "outputKind": "primitive"
    },
    {
      "type": "setVariable",
      "label": "f4fd71fb-be1e-43f1-82cc-0f02e0fedd4a",
      "value": {
        "type": "literalNumeric",
        "value": "5"
      },
      "outputVar": "fileUploadSize",
      "outputKind": "primitive"
    },
    {
      "type": "javaScriptActionCall",
      "label": "5bd1afa9-ad4f-4af1-afb9-560d4ba52c80",
      "action": () => require$$0.JS_UploadAndConvertToFileBlobURL,
      "outputVar": "fileBlobURL",
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "variable",
            "variable": "mimeTypes"
          }
        },
        {
          "kind": "primitive",
          "value": {
            "type": "variable",
            "variable": "fileUploadSize"
          }
        }
      ]
    },
    {
      "type": "switch",
      "label": "86e30a57-95c4-4e57-bb7d-78597be940a6",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "fileBlobURL"
          },
          {
            "type": "literal",
            "value": "uploadCancelled"
          }
        ]
      },
      "targets": {
        "true": "2ae40963-c9a4-472a-b21d-9f64707a05af",
        "false": "1b67735f-b124-4ed9-a378-8a8cd2f30d7f"
      }
    },
    {
      "type": "return",
      "label": "1b67735f-b124-4ed9-a378-8a8cd2f30d7f",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "switch",
      "label": "2ae40963-c9a4-472a-b21d-9f64707a05af",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "fileBlobURL"
          },
          {
            "type": "literal",
            "value": null
          }
        ]
      },
      "targets": {
        "false": "cb52f6f0-0051-450a-aece-f0aa0d0da1c1",
        "true": "1c6bc9ab-31e3-441b-8619-20e82947af91"
      }
    },
    {
      "type": "switch",
      "label": "1c6bc9ab-31e3-441b-8619-20e82947af91",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "fileBlobURL"
          },
          {
            "type": "literal",
            "value": "fileSizeNotAccepted"
          }
        ]
      },
      "targets": {
        "true": "a279d33c-2efc-458d-bbba-898bb4d0af3d",
        "false": "0f842f1b-59fd-4d89-b280-533e36fb1f2c"
      }
    },
    {
      "type": "showMessage",
      "label": "0f842f1b-59fd-4d89-b280-533e36fb1f2c",
      "messageType": "error",
      "message": selectTranslation([
        {
          "type": "literal",
          "value": "Maximum image size allowed is 5MB."
        }
      ]),
      "blocking": true
    },
    {
      "type": "return",
      "label": "81e7b9d0-e258-49be-a479-aa553dff4a69",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "switch",
      "label": "a279d33c-2efc-458d-bbba-898bb4d0af3d",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "fileBlobURL"
          },
          {
            "type": "literal",
            "value": "fileTypeNotAccepted"
          }
        ]
      },
      "targets": {
        "false": "996eea55-5d2d-43d5-96c4-6b1051c289ba",
        "true": "1954d1f8-e883-450e-b9d5-80f3515f98a8"
      }
    },
    {
      "type": "closeForm",
      "label": "1954d1f8-e883-450e-b9d5-80f3515f98a8"
    },
    {
      "type": "javaScriptActionCall",
      "label": "5e18f124-4d77-4d87-aff1-f7dd33bdce5e",
      "action": () => require$$1.JS_ToggleFeedbackAnnotateWidget,
      "outputVar": "base64ImageFromWidget",
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "variable",
            "variable": "fileBlobURL"
          }
        }
      ]
    },
    {
      "type": "changeObject",
      "label": "a1d6ba86-4fe5-432e-b420-bf74fddc8d1c",
      "inputVar": "Feedback",
      "member": "ImageB64",
      "value": {
        "type": "variable",
        "variable": "base64ImageFromWidget"
      }
    },
    {
      "type": "commitObjects",
      "operationId": "TO92GgaI2FS/kgMP4O8N7Q",
      "inputVar": "Feedback"
    },
    {
      "type": "openForm",
      "label": "f5e525da-3dd6-45eb-8b60-9a5e8ba7407d",
      "path": "FeedbackModule/ShareFeedback.page.xml",
      "params": {
        "name": "FeedbackModule/ShareFeedback.page.xml",
        "location": "modal",
        "resizable": true
      }
    },
    {
      "type": "javaScriptActionCall",
      "label": "4812521f-fa19-4b33-acbd-8d2160455937",
      "action": () => require$$0$3.SetStorageItemObject,
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "constant",
            "name": "FeedbackModule.LocalStorageKey"
          }
        },
        {
          "kind": "object",
          "value": {
            "type": "variable",
            "variable": "Feedback"
          }
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "e0f679b5-f865-4b40-99b3-fbb6e86d102a",
      "action": () => require$$3.JS_RevokeUploadedFileFromMemory,
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "variable",
            "variable": "fileBlobURL"
          }
        }
      ]
    },
    {
      "type": "return",
      "label": "87e27dd7-b3a7-409d-bcc6-46378b60f4ec",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "showMessage",
      "label": "996eea55-5d2d-43d5-96c4-6b1051c289ba",
      "messageType": "error",
      "message": selectTranslation([
        {
          "type": "literal",
          "value": "Only images with format of .gif .jpg .jpeg .png are allowed"
        }
      ]),
      "blocking": true
    },
    {
      "type": "return",
      "label": "07e42c14-ef45-488a-b7bc-2d9c30f556bb",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "showMessage",
      "label": "cb52f6f0-0051-450a-aece-f0aa0d0da1c1",
      "messageType": "error",
      "message": selectTranslation([
        {
          "type": "literal",
          "value": "Upload failed, please try again."
        }
      ]),
      "blocking": true
    },
    {
      "type": "return",
      "label": "5280810f-418c-4707-b1c0-468078897c0e",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};

const ACT_Feedback_ClearImage = {
  "name": "FeedbackModule.ACT_Feedback_ClearImage",
  "instructions": [
    {
      "type": "changeObject",
      "label": "bd796567-8828-451b-8413-f844eca1b284",
      "inputVar": "Feedback",
      "member": "ImageB64",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "javaScriptActionCall",
      "label": "43036237-5a74-44e1-8e49-49eff4e07165",
      "action": () => require$$0$3.SetStorageItemObject,
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "constant",
            "name": "FeedbackModule.LocalStorageKey"
          }
        },
        {
          "kind": "object",
          "value": {
            "type": "variable",
            "variable": "Feedback"
          }
        }
      ]
    },
    {
      "type": "return",
      "label": "f5bbd885-28dc-4630-aa97-0da562569fd4",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};

const ACT_Feedback_ClearForm = {
  "name": "FeedbackModule.ACT_Feedback_ClearForm",
  "instructions": [
    {
      "type": "changeObject",
      "label": "eb371072-bc5d-4c05-b14c-8d9530921138",
      "inputVar": "Feedback",
      "member": "Subject",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "Description",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "SubmitterEmail",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "ImageB64",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "javaScriptActionCall",
      "label": "af0cafce-e1fe-47e0-a46d-1bf3158b4dde",
      "action": () => require$$0$3.SetStorageItemObject,
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "constant",
            "name": "FeedbackModule.LocalStorageKey"
          }
        },
        {
          "kind": "object",
          "value": {
            "type": "variable",
            "variable": "Feedback"
          }
        }
      ]
    },
    {
      "type": "return",
      "label": "b9e4625f-2603-4d33-b04b-1699cb2c6c5f",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};

const SUB_Feedback_ResetLocalStorage = {
  "name": "FeedbackModule.SUB_Feedback_ResetLocalStorage",
  "instructions": [
    {
      "type": "changeObject",
      "label": "8c1100ea-133c-407a-a0c8-3ebf15566224",
      "inputVar": "Feedback",
      "member": "Subject",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "Description",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "SubmitterEmail",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "SubmitterUUID",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "SubmitterDisplayName",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "ImageB64",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "ActiveUserRoles",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "PageName",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "Browser",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "EnvironmentURL",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "ScreenshotName",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "Priority",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "ScreenWidth",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "ScreenHeight",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "javaScriptActionCall",
      "label": "20fc79b1-c528-46bb-a8f0-bbce25fe086b",
      "action": () => require$$0$3.SetStorageItemObject,
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "constant",
            "name": "FeedbackModule.LocalStorageKey"
          }
        },
        {
          "kind": "object",
          "value": {
            "type": "variable",
            "variable": "Feedback"
          }
        }
      ]
    },
    {
      "type": "return",
      "label": "da3efc38-eae0-4caf-88a2-1505a9eb5c76",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};

const ACT_SubmitFeedback = {
  "name": "FeedbackModule.ACT_SubmitFeedback",
  "instructions": [
    {
      "type": "microflowCall",
      "label": "c6d191e1-8524-4a97-9255-2ea94aaf7d27",
      "operationId": "KQF4BSfp5VyiOzExACkDzQ",
      "parameters": [
        {
          "name": "Feedback",
          "value": {
            "type": "variable",
            "variable": "Feedback"
          },
          "kind": "object"
        }
      ],
      "outputVar": "isValid"
    },
    {
      "type": "switch",
      "label": "620eeb33-1275-4b51-9983-657ae3ac2841",
      "condition": {
        "type": "variable",
        "variable": "isValid"
      },
      "targets": {
        "true": "1966c2d6-fcb5-4c56-b7b7-8e6b1edc578f",
        "false": "9f610687-d482-4d5c-b61c-d5353e6aefa2"
      }
    },
    {
      "type": "return",
      "label": "9f610687-d482-4d5c-b61c-d5353e6aefa2",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "microflowCall",
      "label": "1966c2d6-fcb5-4c56-b7b7-8e6b1edc578f",
      "operationId": "TJyamp7vjlqRcTjUaQ6tEw",
      "parameters": [
        {
          "name": "Feedback",
          "value": {
            "type": "variable",
            "variable": "Feedback"
          },
          "kind": "object"
        }
      ],
      "outputVar": "ResponseHelper"
    },
    {
      "type": "closeForm",
      "label": "9a9d9b34-5230-4433-badd-d4f4a7dde756",
      "numberOfPagesToClose": {
        "type": "literalNumeric",
        "value": "1"
      }
    },
    {
      "type": "switch",
      "label": "e201c8c3-d605-4639-b0a6-d06156f6a50c",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "ResponseHelper"
          },
          {
            "type": "literal",
            "value": null
          }
        ]
      },
      "targets": {
        "true": "ab91d536-ed27-4b10-ba1c-c061e67b16a3",
        "false": "541b0f15-d197-4c27-b3f9-daf8177b46c2"
      }
    },
    {
      "type": "jump",
      "label": "541b0f15-d197-4c27-b3f9-daf8177b46c2",
      "target": "1a7482a0-3be6-44dc-8001-7d28db1f706a"
    },
    {
      "type": "openForm",
      "label": "1a7482a0-3be6-44dc-8001-7d28db1f706a",
      "path": "FeedbackModule/PopupFailure.page.xml",
      "params": {
        "name": "FeedbackModule/PopupFailure.page.xml",
        "location": "modal",
        "resizable": false
      }
    },
    {
      "type": "return",
      "label": "7bfcff21-7d45-4459-a847-343f5352b732",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "openForm",
      "label": "ab91d536-ed27-4b10-ba1c-c061e67b16a3",
      "path": "FeedbackModule/PopupSuccess.page.xml",
      "params": {
        "name": "FeedbackModule/PopupSuccess.page.xml",
        "location": "modal",
        "resizable": false
      },
      "inputArgs": {
        "$Response": {
          "type": "variable",
          "variable": "ResponseHelper"
        }
      }
    },
    {
      "type": "nanoflowCall",
      "label": "308b81ba-1179-419f-b52a-f320a562ff31",
      "flow": () => SUB_Feedback_ResetLocalStorage,
      "parameters": [
        {
          "name": "Feedback",
          "value": {
            "type": "variable",
            "variable": "Feedback"
          },
          "kind": "object"
        }
      ]
    },
    {
      "type": "return",
      "label": "5db9a2d6-29a3-4122-adc6-eb11208e8122",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};

const OCH_Feedback_SaveToLocalStorage = {
  "name": "FeedbackModule.OCH_Feedback_SaveToLocalStorage",
  "instructions": [
    {
      "type": "javaScriptActionCall",
      "label": "f4fc9ea9-8271-4bf5-9cd3-89737f4d67fe",
      "action": () => require$$0$3.SetStorageItemObject,
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "constant",
            "name": "FeedbackModule.LocalStorageKey"
          }
        },
        {
          "kind": "object",
          "value": {
            "type": "variable",
            "variable": "Feedback"
          }
        }
      ]
    },
    {
      "type": "return",
      "label": "d0116f88-4305-44e4-b660-b475a9906e99",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};

const React = { createElement: reactExports.createElement };
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;
const { $Div, $DataView, $Container, $Text, $FormGroup, $TextBox, $TextArea, $Label, $ConditionalVisibilityWrapper, $ActionButton, $Image } = asPluginWidgets({ Div, DataView, Container, Text, FormGroup, TextBox, TextArea, Label, ConditionalVisibilityWrapper, ActionButton, Image });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.FeedbackModule.ShareFeedback.layoutGrid1",
      $widgetId: "p.FeedbackModule.ShareFeedback.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.FeedbackModule.ShareFeedback.layoutGrid1$row0",
            $widgetId: "p.FeedbackModule.ShareFeedback.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.FeedbackModule.ShareFeedback.layoutGrid1$row0$column0",
                  $widgetId: "p.FeedbackModule.ShareFeedback.layoutGrid1$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p.FeedbackModule.ShareFeedback.dataView5",
                        $widgetId: "p.FeedbackModule.ShareFeedback.dataView5",
                        class: "mx-name-dataView5 form-vertical",
                        style: void 0,
                        tabIndex: void 0,
                        object: NanoflowObjectProperty({
                          "dataSourceId": "p.20",
                          "editable": true,
                          "source": { "nanoflow": () => DS_Feedback_Populate, "allowedRoles": ["Administrator", "User"] },
                          "argMap": {}
                        }),
                        emptyMessage: TextProperty({
                          "value": selectTranslation([
                            ""
                          ])
                        }),
                        body: [
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.FeedbackModule.ShareFeedback.container5",
                              $widgetId: "p.FeedbackModule.ShareFeedback.container5",
                              class: "mx-name-container5 spacing-outer-bottom-medium",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.FeedbackModule.ShareFeedback.text1",
                                    $widgetId: "p.FeedbackModule.ShareFeedback.text1",
                                    class: "mx-name-text1",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Help us make your experience better and share your feedback with us!" }, "args": {} }
                                      })
                                    ]),
                                    renderMode: "p"
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $FormGroup,
                                  {
                                    key: "p.FeedbackModule.ShareFeedback.feedback_subject$formGroup",
                                    $widgetId: "p.FeedbackModule.ShareFeedback.feedback_subject$formGroup",
                                    class: "mx-name-feedback_subject mx-textbox",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $TextBox,
                                        {
                                          key: "p.FeedbackModule.ShareFeedback.feedback_subject",
                                          $widgetId: "p.FeedbackModule.ShareFeedback.feedback_subject",
                                          inputValue: AttributeProperty({
                                            "scope": "p.FeedbackModule.ShareFeedback.dataView5",
                                            "path": "",
                                            "entity": "FeedbackModule.Feedback",
                                            "attribute": "Subject",
                                            "onChange": { "type": "callNanoflow", "argMap": { "Feedback": { "widget": "p.FeedbackModule.ShareFeedback.dataView5", "source": "object" } }, "config": { "nanoflow": () => OCH_Feedback_SaveToLocalStorage, "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": false },
                                            "isList": false,
                                            "validation": null,
                                            "formatting": {}
                                          }),
                                          isPassword: false,
                                          placeholder: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Summarize your feedback in a few words" }, "args": {} }
                                            })
                                          ]),
                                          mask: "",
                                          readOnlyStyle: "control",
                                          maxLength: 200,
                                          onEnter: void 0,
                                          onLeave: void 0,
                                          onEnterKeyPress: void 0,
                                          ariaLabel: void 0,
                                          autocomplete: "on",
                                          submitWhileEditing: true,
                                          submitDelay: 300,
                                          ariaRequired: void 0,
                                          tabIndex: void 0,
                                          id: DerivedUniqueIdProperty({
                                            "widgetId": "p.FeedbackModule.ShareFeedback.feedback_subject"
                                          })
                                        }
                                      )
                                    ],
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Subject" }, "args": {} }
                                      })
                                    ]),
                                    labelFor: DerivedUniqueIdProperty({
                                      "widgetId": "p.FeedbackModule.ShareFeedback.feedback_subject"
                                    }),
                                    width: void 0,
                                    orientation: "vertical",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p.FeedbackModule.ShareFeedback.feedback_subject"
                                    })
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $FormGroup,
                                  {
                                    key: "p.FeedbackModule.ShareFeedback.textArea2$formGroup",
                                    $widgetId: "p.FeedbackModule.ShareFeedback.textArea2$formGroup",
                                    class: "mx-name-textArea2 mx-textarea",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $TextArea,
                                        {
                                          key: "p.FeedbackModule.ShareFeedback.textArea2",
                                          $widgetId: "p.FeedbackModule.ShareFeedback.textArea2",
                                          inputValue: AttributeProperty({
                                            "scope": "p.FeedbackModule.ShareFeedback.dataView5",
                                            "path": "",
                                            "entity": "FeedbackModule.Feedback",
                                            "attribute": "Description",
                                            "onChange": { "type": "callNanoflow", "argMap": { "Feedback": { "widget": "p.FeedbackModule.ShareFeedback.dataView5", "source": "object" } }, "config": { "nanoflow": () => OCH_Feedback_SaveToLocalStorage, "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": false },
                                            "isList": false,
                                            "validation": null
                                          }),
                                          counterMessage: void 0,
                                          maxLength: void 0,
                                          numberOfLines: 5,
                                          autoGrow: false,
                                          placeholder: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Please add a detailed description, including steps you took before finding issue, or how this idea would help improve the experience for you and other users" }, "args": {} }
                                            })
                                          ]),
                                          readOnlyStyle: "control",
                                          textTooLongMessage: void 0,
                                          onEnter: void 0,
                                          onLeave: void 0,
                                          ariaLabel: void 0,
                                          ariaRequired: void 0,
                                          submitWhileEditing: true,
                                          submitDelay: 300,
                                          tabIndex: void 0,
                                          id: DerivedUniqueIdProperty({
                                            "widgetId": "p.FeedbackModule.ShareFeedback.textArea2"
                                          })
                                        }
                                      )
                                    ],
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Description" }, "args": {} }
                                      })
                                    ]),
                                    labelFor: DerivedUniqueIdProperty({
                                      "widgetId": "p.FeedbackModule.ShareFeedback.textArea2"
                                    }),
                                    width: void 0,
                                    orientation: "vertical",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p.FeedbackModule.ShareFeedback.textArea2"
                                    })
                                  }
                                )
                              ],
                              ariaHidden: false
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.FeedbackModule.ShareFeedback.container4",
                              $widgetId: "p.FeedbackModule.ShareFeedback.container4",
                              class: "mx-name-container4 col-left spacing-outer-bottom",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Label,
                                  {
                                    key: "p.FeedbackModule.ShareFeedback.label1",
                                    $widgetId: "p.FeedbackModule.ShareFeedback.label1",
                                    class: "mx-name-label1 text-semibold spacing-outer-bottom-none",
                                    style: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p.FeedbackModule.ShareFeedback.label1"
                                    }),
                                    caption: TextProperty({
                                      "value": selectTranslation([
                                        "Attachment"
                                      ])
                                    })
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.FeedbackModule.ShareFeedback.text2",
                                    $widgetId: "p.FeedbackModule.ShareFeedback.text2",
                                    class: "mx-name-text2 text-light",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Upload a jpg, jpeg, png or gif image file of max. 5MB." }, "args": {} }
                                      })
                                    ]),
                                    renderMode: "span"
                                  }
                                )
                              ],
                              ariaHidden: false
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.FeedbackModule.ShareFeedback.container2",
                              $widgetId: "p.FeedbackModule.ShareFeedback.container2",
                              class: "mx-name-container2 flexcontainer justify-content-start spacing-outer-bottom-medium",
                              style: {
                                "gap": "8px"
                              },
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $ConditionalVisibilityWrapper,
                                  {
                                    key: "p.FeedbackModule.ShareFeedback.actionButton4$visibility",
                                    $widgetId: "p.FeedbackModule.ShareFeedback.actionButton4$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }] }, "args": {} }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $ActionButton,
                                        {
                                          key: "p.FeedbackModule.ShareFeedback.actionButton4",
                                          $widgetId: "p.FeedbackModule.ShareFeedback.actionButton4",
                                          buttonId: "p.FeedbackModule.ShareFeedback.actionButton4",
                                          class: "mx-name-actionButton4",
                                          style: void 0,
                                          tabIndex: void 0,
                                          renderType: "button",
                                          role: void 0,
                                          buttonClass: "btn-default",
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Take Screenshot" }, "args": {} }
                                            })
                                          ]),
                                          tooltip: TextProperty({
                                            "value": selectTranslation([
                                              ""
                                            ])
                                          }),
                                          icon: WebIconProperty({
                                            "icon": { "type": "glyph", "iconClass": "glyphicon-camera" }
                                          }),
                                          action: ActionProperty({
                                            "action": { "type": "callNanoflow", "argMap": { "Feedback": { "widget": "p.FeedbackModule.ShareFeedback.dataView5", "source": "object" } }, "config": { "nanoflow": () => ACT_Feedback_TriggerScreenshotMode, "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                          })
                                        }
                                      )
                                    ]
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $ConditionalVisibilityWrapper,
                                  {
                                    key: "p.FeedbackModule.ShareFeedback.actionButton5$visibility",
                                    $widgetId: "p.FeedbackModule.ShareFeedback.actionButton5$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }] }, "args": {} }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $ActionButton,
                                        {
                                          key: "p.FeedbackModule.ShareFeedback.actionButton5",
                                          $widgetId: "p.FeedbackModule.ShareFeedback.actionButton5",
                                          buttonId: "p.FeedbackModule.ShareFeedback.actionButton5",
                                          class: "mx-name-actionButton5",
                                          style: void 0,
                                          tabIndex: void 0,
                                          renderType: "button",
                                          role: void 0,
                                          buttonClass: "btn-default",
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Upload" }, "args": {} }
                                            })
                                          ]),
                                          tooltip: TextProperty({
                                            "value": selectTranslation([
                                              ""
                                            ])
                                          }),
                                          icon: WebIconProperty({
                                            "icon": { "type": "glyph", "iconClass": "glyphicon-open" }
                                          }),
                                          action: ActionProperty({
                                            "action": { "type": "callNanoflow", "argMap": { "Feedback": { "widget": "p.FeedbackModule.ShareFeedback.dataView5", "source": "object" } }, "config": { "nanoflow": () => ACT_Feedback_UploadImage, "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                          })
                                        }
                                      )
                                    ]
                                  }
                                )
                              ],
                              ariaHidden: false
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $ConditionalVisibilityWrapper,
                            {
                              key: "p.FeedbackModule.ShareFeedback.container6$visibility",
                              $widgetId: "p.FeedbackModule.ShareFeedback.container6$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "ImageB64" }, { "type": "literal", "value": null }] }, "args": { "currentObject": { "widget": "p.FeedbackModule.ShareFeedback.dataView5", "source": "object" } } }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.FeedbackModule.ShareFeedback.container6",
                                    $widgetId: "p.FeedbackModule.ShareFeedback.container6",
                                    class: "mx-name-container6 mxfeedback-screenshot-preview spacing-outer-bottom-medium",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.FeedbackModule.ShareFeedback.container7",
                                          $widgetId: "p.FeedbackModule.ShareFeedback.container7",
                                          class: "mx-name-container7",
                                          style: {
                                            "position": "relative"
                                          },
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $ConditionalVisibilityWrapper,
                                              {
                                                key: "p.FeedbackModule.ShareFeedback.actionButton1$visibility",
                                                $widgetId: "p.FeedbackModule.ShareFeedback.actionButton1$visibility",
                                                visible: ExpressionProperty({
                                                  "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }] }, "args": {} }
                                                }),
                                                contents: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $ActionButton,
                                                    {
                                                      key: "p.FeedbackModule.ShareFeedback.actionButton1",
                                                      $widgetId: "p.FeedbackModule.ShareFeedback.actionButton1",
                                                      buttonId: "p.FeedbackModule.ShareFeedback.actionButton1",
                                                      class: "mx-name-actionButton1 mxfeedback-screenshot-preview__delete-button",
                                                      style: void 0,
                                                      tabIndex: void 0,
                                                      renderType: "button",
                                                      role: void 0,
                                                      buttonClass: "btn-default",
                                                      caption: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                        })
                                                      ]),
                                                      tooltip: TextProperty({
                                                        "value": selectTranslation([
                                                          ""
                                                        ])
                                                      }),
                                                      icon: WebIconProperty({
                                                        "icon": { "type": "glyph", "iconClass": "glyphicon-remove" }
                                                      }),
                                                      action: ActionProperty({
                                                        "action": { "type": "callNanoflow", "argMap": { "Feedback": { "widget": "p.FeedbackModule.ShareFeedback.dataView5", "source": "object" } }, "config": { "nanoflow": () => ACT_Feedback_ClearImage, "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": true },
                                                        "abortOnServerValidation": true
                                                      })
                                                    }
                                                  )
                                                ]
                                              }
                                            ),
                                            /* @__PURE__ */ React.createElement(
                                              $Image,
                                              {
                                                key: "p.FeedbackModule.ShareFeedback.image1",
                                                $widgetId: "p.FeedbackModule.ShareFeedback.image1",
                                                datasource: "imageUrl",
                                                imageObject: void 0,
                                                defaultImageDynamic: void 0,
                                                imageUrl: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "ImageB64" }, "args": { "currentObject": { "widget": "p.FeedbackModule.ShareFeedback.dataView5", "source": "object" } } }
                                                  })
                                                ]),
                                                imageIcon: void 0,
                                                isBackgroundImage: false,
                                                children: void 0,
                                                onClickType: "action",
                                                onClick: void 0,
                                                alternativeText: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "A Preview of the Feedback image that was from the screenshot or upload" }, "args": {} }
                                                  })
                                                ]),
                                                widthUnit: "auto",
                                                width: 100,
                                                heightUnit: "auto",
                                                height: 100,
                                                iconSize: 14,
                                                displayAs: "fullImage",
                                                responsive: true,
                                                class: "mx-name-image1 mxfeedback-screenshot-preview__image img-center img-contain",
                                                style: {
                                                  "width": "auto"
                                                },
                                                tabIndex: void 0
                                              }
                                            )
                                          ],
                                          ariaHidden: false
                                        }
                                      )
                                    ],
                                    ariaHidden: false
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $ConditionalVisibilityWrapper,
                            {
                              key: "p.FeedbackModule.ShareFeedback.textBox1$formGroup$visibility",
                              $widgetId: "p.FeedbackModule.ShareFeedback.textBox1$formGroup$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "_showEmail" }, "args": { "currentObject": { "widget": "p.FeedbackModule.ShareFeedback.dataView5", "source": "object" } } }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $FormGroup,
                                  {
                                    key: "p.FeedbackModule.ShareFeedback.textBox1$formGroup",
                                    $widgetId: "p.FeedbackModule.ShareFeedback.textBox1$formGroup",
                                    class: "mx-name-textBox1 mx-textbox",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $TextBox,
                                        {
                                          key: "p.FeedbackModule.ShareFeedback.textBox1",
                                          $widgetId: "p.FeedbackModule.ShareFeedback.textBox1",
                                          inputValue: AttributeProperty({
                                            "scope": "p.FeedbackModule.ShareFeedback.dataView5",
                                            "path": "",
                                            "entity": "FeedbackModule.Feedback",
                                            "attribute": "SubmitterEmail",
                                            "onChange": { "type": "callNanoflow", "argMap": { "Feedback": { "widget": "p.FeedbackModule.ShareFeedback.dataView5", "source": "object" } }, "config": { "nanoflow": () => OCH_Feedback_SaveToLocalStorage, "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": false },
                                            "isList": false,
                                            "validation": null,
                                            "formatting": {}
                                          }),
                                          isPassword: false,
                                          placeholder: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "name@company.com" }, "args": {} }
                                            })
                                          ]),
                                          mask: "",
                                          readOnlyStyle: "control",
                                          maxLength: 200,
                                          onEnter: void 0,
                                          onLeave: void 0,
                                          onEnterKeyPress: void 0,
                                          ariaLabel: void 0,
                                          autocomplete: "on",
                                          submitWhileEditing: true,
                                          submitDelay: 300,
                                          ariaRequired: void 0,
                                          tabIndex: void 0,
                                          id: DerivedUniqueIdProperty({
                                            "widgetId": "p.FeedbackModule.ShareFeedback.textBox1"
                                          })
                                        }
                                      )
                                    ],
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Email" }, "args": {} }
                                      })
                                    ]),
                                    labelFor: DerivedUniqueIdProperty({
                                      "widgetId": "p.FeedbackModule.ShareFeedback.textBox1"
                                    }),
                                    width: void 0,
                                    orientation: "vertical",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p.FeedbackModule.ShareFeedback.textBox1"
                                    })
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.FeedbackModule.ShareFeedback.container3",
                              $widgetId: "p.FeedbackModule.ShareFeedback.container3",
                              class: "mx-name-container3 flex-row flexcontainer justify-content-end",
                              style: {
                                "gap": "8px"
                              },
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $ActionButton,
                                  {
                                    key: "p.FeedbackModule.ShareFeedback.feedback_cancel",
                                    $widgetId: "p.FeedbackModule.ShareFeedback.feedback_cancel",
                                    buttonId: "p.FeedbackModule.ShareFeedback.feedback_cancel",
                                    class: "mx-name-feedback_cancel",
                                    style: {
                                      "border": "0"
                                    },
                                    tabIndex: void 0,
                                    renderType: "button",
                                    role: void 0,
                                    buttonClass: "btn-default",
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Cancel" }, "args": {} }
                                      })
                                    ]),
                                    tooltip: TextProperty({
                                      "value": selectTranslation([
                                        ""
                                      ])
                                    }),
                                    icon: void 0,
                                    action: ActionProperty({
                                      "action": { "type": "closePage", "argMap": {}, "config": {}, "disabledDuringExecution": true },
                                      "abortOnServerValidation": true
                                    })
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $ConditionalVisibilityWrapper,
                                  {
                                    key: "p.FeedbackModule.ShareFeedback.feedback_clear$visibility",
                                    $widgetId: "p.FeedbackModule.ShareFeedback.feedback_clear$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }] }, "args": {} }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $ActionButton,
                                        {
                                          key: "p.FeedbackModule.ShareFeedback.feedback_clear",
                                          $widgetId: "p.FeedbackModule.ShareFeedback.feedback_clear",
                                          buttonId: "p.FeedbackModule.ShareFeedback.feedback_clear",
                                          class: "mx-name-feedback_clear btn-bordered",
                                          style: void 0,
                                          tabIndex: void 0,
                                          renderType: "button",
                                          role: void 0,
                                          buttonClass: "btn-default",
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Clear" }, "args": {} }
                                            })
                                          ]),
                                          tooltip: TextProperty({
                                            "value": selectTranslation([
                                              ""
                                            ])
                                          }),
                                          icon: void 0,
                                          action: ActionProperty({
                                            "action": { "type": "callNanoflow", "argMap": { "Feedback": { "widget": "p.FeedbackModule.ShareFeedback.dataView5", "source": "object" } }, "config": { "nanoflow": () => ACT_Feedback_ClearForm, "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                          })
                                        }
                                      )
                                    ]
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $ConditionalVisibilityWrapper,
                                  {
                                    key: "p.FeedbackModule.ShareFeedback.feedback_submit$visibility",
                                    $widgetId: "p.FeedbackModule.ShareFeedback.feedback_submit$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }] }, "args": {} }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $ActionButton,
                                        {
                                          key: "p.FeedbackModule.ShareFeedback.feedback_submit",
                                          $widgetId: "p.FeedbackModule.ShareFeedback.feedback_submit",
                                          buttonId: "p.FeedbackModule.ShareFeedback.feedback_submit",
                                          class: "mx-name-feedback_submit",
                                          style: void 0,
                                          tabIndex: void 0,
                                          renderType: "button",
                                          role: void 0,
                                          buttonClass: "btn-primary",
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Submit" }, "args": {} }
                                            })
                                          ]),
                                          tooltip: TextProperty({
                                            "value": selectTranslation([
                                              ""
                                            ])
                                          }),
                                          icon: void 0,
                                          action: ActionProperty({
                                            "action": { "type": "callNanoflow", "argMap": { "Feedback": { "widget": "p.FeedbackModule.ShareFeedback.dataView5", "source": "object" } }, "config": { "nanoflow": () => ACT_SubmitFeedback, "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                          })
                                        }
                                      )
                                    ]
                                  }
                                )
                              ],
                              ariaHidden: false
                            }
                          )
                        ],
                        hideFooter: true,
                        footer: void 0
                      }
                    )
                  ]
                }
              )
            ]
          }
        )
      ]
    }
  )
]);
const title = selectTranslation([
  "Share your feedback"
]);
const classes = "";
const cancelChangesOperationId = "indOyB24c1WSz8J8EfyRXQ";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, content, style, title };
