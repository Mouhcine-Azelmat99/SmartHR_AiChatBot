import { getAugmentedNamespace } from './index-B-pQLZz2.js';
import './index-DpgUatDd.js';

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * @param {string} textToCopy
 * @returns {Promise.<void>}
 */
async function JS_CopyToClipboard(textToCopy) {
  // BEGIN USER CODE
  navigator.clipboard.writeText(textToCopy);
  // END USER CODE
}

var JS_CopyToClipboard$1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	JS_CopyToClipboard: JS_CopyToClipboard
});

var require$$0 = /*@__PURE__*/getAugmentedNamespace(JS_CopyToClipboard$1);

export { require$$0 };
