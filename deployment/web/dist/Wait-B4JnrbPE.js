import { getAugmentedNamespace } from './index-B-pQLZz2.js';

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * Wait for number of milliseconds before continuing nanoflow execution.
 * @param {Big} delay - The number of milliseconds to wait. This field is required.
 * @returns {Promise.<void>}
 */
async function Wait(delay) {
  // BEGIN USER CODE
  if (delay == null) {
    return Promise.reject(new Error("Input parameter 'delay' is required."));
  }
  return new Promise(resolve => {
    setTimeout(() => resolve(), Number(delay));
  });
  // END USER CODE
}

var Wait$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Wait: Wait
});

var require$$0 = /*@__PURE__*/getAugmentedNamespace(Wait$1);

export { require$$0 };
