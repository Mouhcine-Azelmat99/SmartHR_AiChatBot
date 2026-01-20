function debounce(func, timeout) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId), timeoutId = window.setTimeout(function() {
      timeoutId = void 0, func(...args);
    }, timeout);
  };
}

export { debounce };
