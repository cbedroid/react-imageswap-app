// Destruct Javascript String prototype and Add python-like string format method
export function stringFormat(string, ...args) {
  var i = 0;
  return string.replace(/{}/g, function () {
    return typeof args[i] != "undefined" ? args[i++] : "";
  });
}
