// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"HyW1":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$ = $;
exports.UNDEFINED = exports.TRANSFORM = exports.TINY_NUM = exports.STRING = exports.RGBA = exports.RGB = exports.PROPERTY = exports.OPEN_CLOSED_CHARACTERS = exports.OBJECT = exports.NUMBER = exports.KEYFRAMES = exports.IS_WINDOW = exports.HSLA = exports.HSL = exports.FUNCTION = exports.FILTER = exports.DEFAULT_UNIT_PRESETS = exports.COLOR_MODELS = exports.ARRAY = exports.ANIMATION = void 0;
exports.addClass = addClass;
exports.addEvent = addEvent;
exports.average = average;
exports.between = between;
exports.calculateBoundSize = calculateBoundSize;
exports.camelize = camelize;
exports.cancelAnimationFrame = void 0;
exports.checkBoundSize = checkBoundSize;
exports.convertUnitSize = convertUnitSize;
exports.counter = counter;
exports.cutHex = cutHex;
exports.decamelize = decamelize;
exports.document = void 0;
exports.dot = dot;
exports.find = find;
exports.findIndex = findIndex;
exports.findLast = findLast;
exports.findLastIndex = findLastIndex;
exports.fromCSS = fromCSS;
exports.getCenterPoint = getCenterPoint;
exports.getCrossBrowserProperty = void 0;
exports.getDist = getDist;
exports.getKeys = getKeys;
exports.getRad = getRad;
exports.getShapeDirection = getShapeDirection;
exports.hasClass = hasClass;
exports.hexToRGBA = hexToRGBA;
exports.hslToRGBA = hslToRGBA;
exports.isArray = isArray;
exports.isFunction = isFunction;
exports.isNumber = isNumber;
exports.isObject = isObject;
exports.isString = isString;
exports.isUndefined = isUndefined;
exports.now = now;
exports.removeClass = removeClass;
exports.removeEvent = removeEvent;
exports.replaceOnce = replaceOnce;
exports.requestAnimationFrame = void 0;
exports.sortOrders = sortOrders;
exports.splitBracket = splitBracket;
exports.splitComma = splitComma;
exports.splitSpace = splitSpace;
exports.splitText = splitText;
exports.splitUnit = splitUnit;
exports.stringToRGBA = stringToRGBA;
exports.sum = sum;
exports.throttle = throttle;
exports.throttleArray = throttleArray;
exports.toArray = toArray;
exports.toFullHex = toFullHex;

/*
Copyright (c) 2018 Daybrush
@name: @daybrush/utils
license: MIT
author: Daybrush
repository: https://github.com/daybrush/utils
@version 1.6.0
*/

/**
* @namespace
* @name Consts
*/

/**
* get string "rgb"
* @memberof Color
* @example
import {RGB} from "@daybrush/utils";

console.log(RGB); // "rgb"
*/
var RGB = "rgb";
/**
* get string "rgba"
* @memberof Color
* @example
import {RGBA} from "@daybrush/utils";

console.log(RGBA); // "rgba"
*/

exports.RGB = RGB;
var RGBA = "rgba";
/**
* get string "hsl"
* @memberof Color
* @example
import {HSL} from "@daybrush/utils";

console.log(HSL); // "hsl"
*/

exports.RGBA = RGBA;
var HSL = "hsl";
/**
* get string "hsla"
* @memberof Color
* @example
import {HSLA} from "@daybrush/utils";

console.log(HSLA); // "hsla"
*/

exports.HSL = HSL;
var HSLA = "hsla";
/**
* gets an array of color models.
* @memberof Color
* @example
import {COLOR_MODELS} from "@daybrush/utils";

console.log(COLOR_MODELS); // ["rgb", "rgba", "hsl", "hsla"];
*/

exports.HSLA = HSLA;
var COLOR_MODELS = [RGB, RGBA, HSL, HSLA];
/**
* get string "function"
* @memberof Consts
* @example
import {FUNCTION} from "@daybrush/utils";

console.log(FUNCTION); // "function"
*/

exports.COLOR_MODELS = COLOR_MODELS;
var FUNCTION = "function";
/**
* get string "property"
* @memberof Consts
* @example
import {PROPERTY} from "@daybrush/utils";

console.log(PROPERTY); // "property"
*/

exports.FUNCTION = FUNCTION;
var PROPERTY = "property";
/**
* get string "array"
* @memberof Consts
* @example
import {ARRAY} from "@daybrush/utils";

console.log(ARRAY); // "array"
*/

exports.PROPERTY = PROPERTY;
var ARRAY = "array";
/**
* get string "object"
* @memberof Consts
* @example
import {OBJECT} from "@daybrush/utils";

console.log(OBJECT); // "object"
*/

exports.ARRAY = ARRAY;
var OBJECT = "object";
/**
* get string "string"
* @memberof Consts
* @example
import {STRING} from "@daybrush/utils";

console.log(STRING); // "string"
*/

exports.OBJECT = OBJECT;
var STRING = "string";
/**
* get string "number"
* @memberof Consts
* @example
import {NUMBER} from "@daybrush/utils";

console.log(NUMBER); // "number"
*/

exports.STRING = STRING;
var NUMBER = "number";
/**
* get string "undefined"
* @memberof Consts
* @example
import {UNDEFINED} from "@daybrush/utils";

console.log(UNDEFINED); // "undefined"
*/

exports.NUMBER = NUMBER;
var UNDEFINED = "undefined";
/**
* Check whether the environment is window or node.js.
* @memberof Consts
* @example
import {IS_WINDOW} from "@daybrush/utils";

console.log(IS_WINDOW); // false in node.js
console.log(IS_WINDOW); // true in browser
*/

exports.UNDEFINED = UNDEFINED;
var IS_WINDOW = typeof window !== UNDEFINED;
/**
* Check whether the environment is window or node.js.
* @memberof Consts
* @name document
* @example
import {IS_WINDOW} from "@daybrush/utils";

console.log(IS_WINDOW); // false in node.js
console.log(IS_WINDOW); // true in browser
*/

exports.IS_WINDOW = IS_WINDOW;
var doc = typeof document !== UNDEFINED && document; // FIXME: this type maybe false

exports.document = doc;
var prefixes = ["webkit", "ms", "moz", "o"];
/**
 * @namespace CrossBrowser
 */

/**
* Get a CSS property with a vendor prefix that supports cross browser.
* @function
* @param {string} property - A CSS property
* @return {string} CSS property with cross-browser vendor prefix
* @memberof CrossBrowser
* @example
import {getCrossBrowserProperty} from "@daybrush/utils";

console.log(getCrossBrowserProperty("transform")); // "transform", "-ms-transform", "-webkit-transform"
console.log(getCrossBrowserProperty("filter")); // "filter", "-webkit-filter"
*/

var getCrossBrowserProperty = /*#__PURE__*/function (property) {
  if (!doc) {
    return "";
  }

  var styles = (doc.body || doc.documentElement).style;
  var length = prefixes.length;

  if (typeof styles[property] !== UNDEFINED) {
    return property;
  }

  for (var i = 0; i < length; ++i) {
    var name = "-" + prefixes[i] + "-" + property;

    if (typeof styles[name] !== UNDEFINED) {
      return name;
    }
  }

  return "";
};
/**
* get string "transfrom" with the vendor prefix.
* @memberof CrossBrowser
* @example
import {TRANSFORM} from "@daybrush/utils";

console.log(TRANSFORM); // "transform", "-ms-transform", "-webkit-transform"
*/


exports.getCrossBrowserProperty = getCrossBrowserProperty;
var TRANSFORM = /*#__PURE__*/getCrossBrowserProperty("transform");
/**
* get string "filter" with the vendor prefix.
* @memberof CrossBrowser
* @example
import {FILTER} from "@daybrush/utils";

console.log(FILTER); // "filter", "-ms-filter", "-webkit-filter"
*/

exports.TRANSFORM = TRANSFORM;
var FILTER = /*#__PURE__*/getCrossBrowserProperty("filter");
/**
* get string "animation" with the vendor prefix.
* @memberof CrossBrowser
* @example
import {ANIMATION} from "@daybrush/utils";

console.log(ANIMATION); // "animation", "-ms-animation", "-webkit-animation"
*/

exports.FILTER = FILTER;
var ANIMATION = /*#__PURE__*/getCrossBrowserProperty("animation");
/**
* get string "keyframes" with the vendor prefix.
* @memberof CrossBrowser
* @example
import {KEYFRAMES} from "@daybrush/utils";

console.log(KEYFRAMES); // "keyframes", "-ms-keyframes", "-webkit-keyframes"
*/

exports.ANIMATION = ANIMATION;
var KEYFRAMES = /*#__PURE__*/ANIMATION.replace("animation", "keyframes");
exports.KEYFRAMES = KEYFRAMES;
var OPEN_CLOSED_CHARACTERS = [{
  open: "(",
  close: ")"
}, {
  open: "\"",
  close: "\""
}, {
  open: "'",
  close: "'"
}, {
  open: "\\\"",
  close: "\\\""
}, {
  open: "\\'",
  close: "\\'"
}];
exports.OPEN_CLOSED_CHARACTERS = OPEN_CLOSED_CHARACTERS;
var TINY_NUM = 0.0000001;
exports.TINY_NUM = TINY_NUM;
var DEFAULT_UNIT_PRESETS = {
  "cm": function (pos) {
    return pos * 96 / 2.54;
  },
  "mm": function (pos) {
    return pos * 96 / 254;
  },
  "in": function (pos) {
    return pos * 96;
  },
  "pt": function (pos) {
    return pos * 96 / 72;
  },
  "pc": function (pos) {
    return pos * 96 / 6;
  },
  "%": function (pos, size) {
    return pos * size / 100;
  },
  "vw": function (pos, size) {
    if (size === void 0) {
      size = window.innerWidth;
    }

    return pos / 100 * size;
  },
  "vh": function (pos, size) {
    if (size === void 0) {
      size = window.innerHeight;
    }

    return pos / 100 * size;
  },
  "vmax": function (pos, size) {
    if (size === void 0) {
      size = Math.max(window.innerWidth, window.innerHeight);
    }

    return pos / 100 * size;
  },
  "vmin": function (pos, size) {
    if (size === void 0) {
      size = Math.min(window.innerWidth, window.innerHeight);
    }

    return pos / 100 * size;
  }
};
/**
* @namespace
* @name Utils
*/

/**
 * Returns the inner product of two numbers(`a1`, `a2`) by two criteria(`b1`, `b2`).
 * @memberof Utils
 * @param - The first number
 * @param - The second number
 * @param - The first number to base on the inner product
 * @param - The second number to base on the inner product
 * @return - Returns the inner product
import { dot } from "@daybrush/utils";

console.log(dot(0, 15, 2, 3)); // 6
console.log(dot(5, 15, 2, 3)); // 9
console.log(dot(5, 15, 1, 1)); // 10
 */

exports.DEFAULT_UNIT_PRESETS = DEFAULT_UNIT_PRESETS;

function dot(a1, a2, b1, b2) {
  return (a1 * b2 + a2 * b1) / (b1 + b2);
}
/**
* Check the type that the value is undefined.
* @memberof Utils
* @param {string} value - Value to check the type
* @return {boolean} true if the type is correct, false otherwise
* @example
import {isUndefined} from "@daybrush/utils";

console.log(isUndefined(undefined)); // true
console.log(isUndefined("")); // false
console.log(isUndefined(1)); // false
console.log(isUndefined(null)); // false
*/


function isUndefined(value) {
  return typeof value === UNDEFINED;
}
/**
* Check the type that the value is object.
* @memberof Utils
* @param {string} value - Value to check the type
* @return {} true if the type is correct, false otherwise
* @example
import {isObject} from "@daybrush/utils";

console.log(isObject({})); // true
console.log(isObject(undefined)); // false
console.log(isObject("")); // false
console.log(isObject(null)); // false
*/


function isObject(value) {
  return value && typeof value === OBJECT;
}
/**
* Check the type that the value is isArray.
* @memberof Utils
* @param {string} value - Value to check the type
* @return {} true if the type is correct, false otherwise
* @example
import {isArray} from "@daybrush/utils";

console.log(isArray([])); // true
console.log(isArray({})); // false
console.log(isArray(undefined)); // false
console.log(isArray(null)); // false
*/


function isArray(value) {
  return Array.isArray(value);
}
/**
* Check the type that the value is string.
* @memberof Utils
* @param {string} value - Value to check the type
* @return {} true if the type is correct, false otherwise
* @example
import {isString} from "@daybrush/utils";

console.log(isString("1234")); // true
console.log(isString(undefined)); // false
console.log(isString(1)); // false
console.log(isString(null)); // false
*/


function isString(value) {
  return typeof value === STRING;
}

function isNumber(value) {
  return typeof value === NUMBER;
}
/**
* Check the type that the value is function.
* @memberof Utils
* @param {string} value - Value to check the type
* @return {} true if the type is correct, false otherwise
* @example
import {isFunction} from "@daybrush/utils";

console.log(isFunction(function a() {})); // true
console.log(isFunction(() => {})); // true
console.log(isFunction("1234")); // false
console.log(isFunction(1)); // false
console.log(isFunction(null)); // false
*/


function isFunction(value) {
  return typeof value === FUNCTION;
}

function isEqualSeparator(character, separator) {
  var isCharacterSpace = character === "" || character == " ";
  var isSeparatorSpace = separator === "" || separator == " ";
  return isSeparatorSpace && isCharacterSpace || character === separator;
}

function findOpen(openCharacter, texts, index, length, openCloseCharacters) {
  var isIgnore = findIgnore(openCharacter, texts, index);

  if (!isIgnore) {
    return findClose(openCharacter, texts, index + 1, length, openCloseCharacters);
  }

  return index;
}

function findIgnore(character, texts, index) {
  if (!character.ignore) {
    return null;
  }

  var otherText = texts.slice(Math.max(index - 3, 0), index + 3).join("");
  return new RegExp(character.ignore).exec(otherText);
}

function findClose(closeCharacter, texts, index, length, openCloseCharacters) {
  var _loop_1 = function (i) {
    var character = texts[i].trim();

    if (character === closeCharacter.close && !findIgnore(closeCharacter, texts, i)) {
      return {
        value: i
      };
    }

    var nextIndex = i; // re open

    var openCharacter = find(openCloseCharacters, function (_a) {
      var open = _a.open;
      return open === character;
    });

    if (openCharacter) {
      nextIndex = findOpen(openCharacter, texts, i, length, openCloseCharacters);
    }

    if (nextIndex === -1) {
      return out_i_1 = i, "break";
    }

    i = nextIndex;
    out_i_1 = i;
  };

  var out_i_1;

  for (var i = index; i < length; ++i) {
    var state_1 = _loop_1(i);

    i = out_i_1;
    if (typeof state_1 === "object") return state_1.value;
    if (state_1 === "break") break;
  }

  return -1;
}

function splitText(text, splitOptions) {
  var _a = isString(splitOptions) ? {
    separator: splitOptions
  } : splitOptions,
      _b = _a.separator,
      separator = _b === void 0 ? "," : _b,
      isSeparateFirst = _a.isSeparateFirst,
      isSeparateOnlyOpenClose = _a.isSeparateOnlyOpenClose,
      _c = _a.isSeparateOpenClose,
      isSeparateOpenClose = _c === void 0 ? isSeparateOnlyOpenClose : _c,
      _d = _a.openCloseCharacters,
      openCloseCharacters = _d === void 0 ? OPEN_CLOSED_CHARACTERS : _d;

  var openClosedText = openCloseCharacters.map(function (_a) {
    var open = _a.open,
        close = _a.close;

    if (open === close) {
      return open;
    }

    return open + "|" + close;
  }).join("|");
  var regexText = "(\\s*" + separator + "\\s*|" + openClosedText + "|\\s+)";
  var regex = new RegExp(regexText, "g");
  var texts = text.split(regex).filter(Boolean);
  var length = texts.length;
  var values = [];
  var tempValues = [];

  function resetTemp() {
    if (tempValues.length) {
      values.push(tempValues.join(""));
      tempValues = [];
      return true;
    }

    return false;
  }

  var _loop_2 = function (i) {
    var character = texts[i].trim();
    var nextIndex = i;
    var openCharacter = find(openCloseCharacters, function (_a) {
      var open = _a.open;
      return open === character;
    });
    var closeCharacter = find(openCloseCharacters, function (_a) {
      var close = _a.close;
      return close === character;
    });

    if (openCharacter) {
      nextIndex = findOpen(openCharacter, texts, i, length, openCloseCharacters);

      if (nextIndex !== -1 && isSeparateOpenClose) {
        if (resetTemp() && isSeparateFirst) {
          return out_i_2 = i, "break";
        }

        values.push(texts.slice(i, nextIndex + 1).join(""));
        i = nextIndex;

        if (isSeparateFirst) {
          return out_i_2 = i, "break";
        }

        return out_i_2 = i, "continue";
      }
    } else if (closeCharacter && !findIgnore(closeCharacter, texts, i)) {
      throw new Error("invalid format: " + closeCharacter.close);
    } else if (isEqualSeparator(character, separator) && !isSeparateOnlyOpenClose) {
      resetTemp();

      if (isSeparateFirst) {
        return out_i_2 = i, "break";
      }

      return out_i_2 = i, "continue";
    }

    if (nextIndex === -1) {
      nextIndex = length - 1;
    }

    tempValues.push(texts.slice(i, nextIndex + 1).join(""));
    i = nextIndex;
    out_i_2 = i;
  };

  var out_i_2;

  for (var i = 0; i < length; ++i) {
    var state_2 = _loop_2(i);

    i = out_i_2;
    if (state_2 === "break") break;
  }

  if (tempValues.length) {
    values.push(tempValues.join(""));
  }

  return values;
}
/**
* divide text by space.
* @memberof Utils
* @param {string} text - text to divide
* @return {Array} divided texts
* @example
import {spliceSpace} from "@daybrush/utils";

console.log(splitSpace("a b c d e f g"));
// ["a", "b", "c", "d", "e", "f", "g"]
console.log(splitSpace("'a,b' c 'd,e' f g"));
// ["'a,b'", "c", "'d,e'", "f", "g"]
*/


function splitSpace(text) {
  // divide comma(space)
  return splitText(text, "");
}
/**
* divide text by comma.
* @memberof Utils
* @param {string} text - text to divide
* @return {Array} divided texts
* @example
import {splitComma} from "@daybrush/utils";

console.log(splitComma("a,b,c,d,e,f,g"));
// ["a", "b", "c", "d", "e", "f", "g"]
console.log(splitComma("'a,b',c,'d,e',f,g"));
// ["'a,b'", "c", "'d,e'", "f", "g"]
*/


function splitComma(text) {
  // divide comma(,)
  // "[^"]*"|'[^']*'
  return splitText(text, ",");
}
/**
* divide text by bracket "(", ")".
* @memberof Utils
* @param {string} text - text to divide
* @return {object} divided texts
* @example
import {splitBracket} from "@daybrush/utils";

console.log(splitBracket("a(1, 2)"));
// {prefix: "a", value: "1, 2", suffix: ""}
console.log(splitBracket("a(1, 2)b"));
// {prefix: "a", value: "1, 2", suffix: "b"}
*/


function splitBracket(text) {
  var matches = /([^(]*)\(([\s\S]*)\)([\s\S]*)/g.exec(text);

  if (!matches || matches.length < 4) {
    return {};
  } else {
    return {
      prefix: matches[1],
      value: matches[2],
      suffix: matches[3]
    };
  }
}
/**
* divide text by number and unit.
* @memberof Utils
* @param {string} text - text to divide
* @return {} divided texts
* @example
import {splitUnit} from "@daybrush/utils";

console.log(splitUnit("10px"));
// {prefix: "", value: 10, unit: "px"}
console.log(splitUnit("-10px"));
// {prefix: "", value: -10, unit: "px"}
console.log(splitUnit("a10%"));
// {prefix: "a", value: 10, unit: "%"}
*/


function splitUnit(text) {
  var matches = /^([^\d|e|\-|\+]*)((?:\d|\.|-|e-|e\+)+)(\S*)$/g.exec(text);

  if (!matches) {
    return {
      prefix: "",
      unit: "",
      value: NaN
    };
  }

  var prefix = matches[1];
  var value = matches[2];
  var unit = matches[3];
  return {
    prefix: prefix,
    unit: unit,
    value: parseFloat(value)
  };
}
/**
* transform strings to camel-case
* @memberof Utils
* @param {String} text - string
* @return {String} camel-case string
* @example
import {camelize} from "@daybrush/utils";

console.log(camelize("transform-origin")); // transformOrigin
console.log(camelize("abcd_efg")); // abcdEfg
console.log(camelize("abcd efg")); // abcdEfg
*/


function camelize(str) {
  return str.replace(/[\s-_]([a-z])/g, function (all, letter) {
    return letter.toUpperCase();
  });
}
/**
* transform a camelized string into a lowercased string.
* @memberof Utils
* @param {string} text - a camel-cased string
* @param {string} [separator="-"] - a separator
* @return {string}  a lowercased string
* @example
import {decamelize} from "@daybrush/utils";

console.log(decamelize("transformOrigin")); // transform-origin
console.log(decamelize("abcdEfg", "_")); // abcd_efg
*/


function decamelize(str, separator) {
  if (separator === void 0) {
    separator = "-";
  }

  return str.replace(/([a-z])([A-Z])/g, function (all, letter, letter2) {
    return "" + letter + separator + letter2.toLowerCase();
  });
}
/**
* transforms something in an array into an array.
* @memberof Utils
* @param - Array form
* @return an array
* @example
import {toArray} from "@daybrush/utils";

const arr1 = toArray(document.querySelectorAll(".a")); // Element[]
const arr2 = toArray(document.querySelectorAll<HTMLElement>(".a")); // HTMLElement[]
*/


function toArray(value) {
  return [].slice.call(value);
}
/**
* Date.now() method
* @memberof CrossBrowser
* @return {number} milliseconds
* @example
import {now} from "@daybrush/utils";

console.log(now()); // 12121324241(milliseconds)
*/


function now() {
  return Date.now ? Date.now() : new Date().getTime();
}
/**
* Returns the index of the first element in the array that satisfies the provided testing function.
* @function
* @memberof CrossBrowser
* @param - The array `findIndex` was called upon.
* @param - A function to execute on each value in the array until the function returns true, indicating that the satisfying element was found.
* @param - Returns defaultIndex if not found by the function.
* @example
import { findIndex } from "@daybrush/utils";

findIndex([{a: 1}, {a: 2}, {a: 3}, {a: 4}], ({ a }) => a === 2); // 1
*/


function findIndex(arr, callback, defaultIndex) {
  if (defaultIndex === void 0) {
    defaultIndex = -1;
  }

  var length = arr.length;

  for (var i = 0; i < length; ++i) {
    if (callback(arr[i], i, arr)) {
      return i;
    }
  }

  return defaultIndex;
}
/**
* Returns the reverse direction index of the first element in the array that satisfies the provided testing function.
* @function
* @memberof CrossBrowser
* @param - The array `findLastIndex` was called upon.
* @param - A function to execute on each value in the array until the function returns true, indicating that the satisfying element was found.
* @param - Returns defaultIndex if not found by the function.
* @example
import { findLastIndex } from "@daybrush/utils";

findLastIndex([{a: 1}, {a: 2}, {a: 3}, {a: 4}], ({ a }) => a === 2); // 1
*/


function findLastIndex(arr, callback, defaultIndex) {
  if (defaultIndex === void 0) {
    defaultIndex = -1;
  }

  var length = arr.length;

  for (var i = length - 1; i >= 0; --i) {
    if (callback(arr[i], i, arr)) {
      return i;
    }
  }

  return defaultIndex;
}
/**
* Returns the value of the reverse direction element in the array that satisfies the provided testing function.
* @function
* @memberof CrossBrowser
* @param - The array `findLast` was called upon.
* @param - A function to execute on each value in the array,
* @param - Returns defalutValue if not found by the function.
* @example
import { find } from "@daybrush/utils";

find([{a: 1}, {a: 2}, {a: 3}, {a: 4}], ({ a }) => a === 2); // {a: 2}
*/


function findLast(arr, callback, defalutValue) {
  var index = findLastIndex(arr, callback);
  return index > -1 ? arr[index] : defalutValue;
}
/**
* Returns the value of the first element in the array that satisfies the provided testing function.
* @function
* @memberof CrossBrowser
* @param - The array `find` was called upon.
* @param - A function to execute on each value in the array,
* @param - Returns defalutValue if not found by the function.
* @example
import { find } from "@daybrush/utils";

find([{a: 1}, {a: 2}, {a: 3}, {a: 4}], ({ a }) => a === 2); // {a: 2}
*/


function find(arr, callback, defalutValue) {
  var index = findIndex(arr, callback);
  return index > -1 ? arr[index] : defalutValue;
}
/**
* window.requestAnimationFrame() method with cross browser.
* @function
* @memberof CrossBrowser
* @param {FrameRequestCallback} callback - The function to call when it's time to update your animation for the next repaint.
* @return {number} id
* @example
import {requestAnimationFrame} from "@daybrush/utils";

requestAnimationFrame((timestamp) => {
  console.log(timestamp);
});
*/


var requestAnimationFrame = /*#__PURE__*/function () {
  var firstTime = now();
  var raf = IS_WINDOW && (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame);
  return raf ? raf.bind(window) : function (callback) {
    var currTime = now();
    var id = window.setTimeout(function () {
      callback(currTime - firstTime);
    }, 1000 / 60);
    return id;
  };
}();
/**
* window.cancelAnimationFrame() method with cross browser.
* @function
* @memberof CrossBrowser
* @param {number} handle - the id obtained through requestAnimationFrame method
* @return {void}
* @example
import { requestAnimationFrame, cancelAnimationFrame } from "@daybrush/utils";

const id = requestAnimationFrame((timestamp) => {
  console.log(timestamp);
});

cancelAnimationFrame(id);
*/


exports.requestAnimationFrame = requestAnimationFrame;

var cancelAnimationFrame = /*#__PURE__*/function () {
  var caf = IS_WINDOW && (window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.msCancelAnimationFrame);
  return caf ? caf.bind(window) : function (handle) {
    clearTimeout(handle);
  };
}();
/**
* @function
* @memberof Utils
*/


exports.cancelAnimationFrame = cancelAnimationFrame;

function getKeys(obj) {
  if (Object.keys) {
    return Object.keys(obj);
  }

  var keys = [];

  for (var name in keys) {
    keys.push(name);
  }

  return keys;
}
/**
* @function
* @memberof Utils
*/


function sortOrders(keys, orders) {
  if (orders === void 0) {
    orders = [];
  }

  keys.sort(function (a, b) {
    var index1 = orders.indexOf(a);
    var index2 = orders.indexOf(b);

    if (index2 === -1 && index1 === -1) {
      return 0;
    }

    if (index1 === -1) {
      return 1;
    }

    if (index2 === -1) {
      return -1;
    }

    return index1 - index2;
  });
}
/**
* convert unit size to px size
* @function
* @memberof Utils
*/


function convertUnitSize(pos, size) {
  var _a = splitUnit(pos),
      value = _a.value,
      unit = _a.unit;

  if (isObject(size)) {
    var sizeFunction = size[unit];

    if (sizeFunction) {
      if (isFunction(sizeFunction)) {
        return sizeFunction(value);
      } else if (DEFAULT_UNIT_PRESETS[unit]) {
        return DEFAULT_UNIT_PRESETS[unit](value, sizeFunction);
      }
    }
  } else if (unit === "%") {
    return value * size / 100;
  }

  if (DEFAULT_UNIT_PRESETS[unit]) {
    return DEFAULT_UNIT_PRESETS[unit](value);
  }

  return value;
}
/**
* calculate between min, max
* @function
* @memberof Utils
*/


function between(value, min, max) {
  return Math.max(min, Math.min(value, max));
}

function checkBoundSize(targetSize, compareSize, isMax) {
  return [[throttle(compareSize[0], TINY_NUM), throttle(compareSize[0] * targetSize[1] / targetSize[0], TINY_NUM)], [throttle(compareSize[1] * targetSize[0] / targetSize[1], TINY_NUM), throttle(compareSize[1], TINY_NUM)]].filter(function (size) {
    return size.every(function (value, i) {
      return isMax ? value <= compareSize[i] : value >= compareSize[i];
    });
  })[0] || targetSize;
}
/**
* calculate bound size
* @function
* @memberof Utils
*/


function calculateBoundSize(size, minSize, maxSize, keepRatio) {
  if (!keepRatio) {
    return size.map(function (value, i) {
      return between(value, minSize[i], maxSize[i]);
    });
  }

  var width = size[0],
      height = size[1]; // width : height = minWidth : minHeight;

  var _a = checkBoundSize(size, minSize, false),
      minWidth = _a[0],
      minHeight = _a[1];

  var _b = checkBoundSize(size, maxSize, true),
      maxWidth = _b[0],
      maxHeight = _b[1];

  if (width < minWidth || height < minHeight) {
    width = minWidth;
    height = minHeight;
  } else if (width > maxWidth || height > maxHeight) {
    width = maxWidth;
    height = maxHeight;
  }

  return [width, height];
}
/**
* Add all the numbers.
* @function
* @memberof Utils
*/


function sum(nums) {
  var length = nums.length;
  var total = 0;

  for (var i = length - 1; i >= 0; --i) {
    total += nums[i];
  }

  return total;
}
/**
* Average all numbers.
* @function
* @memberof Utils
*/


function average(nums) {
  var length = nums.length;
  var total = 0;

  for (var i = length - 1; i >= 0; --i) {
    total += nums[i];
  }

  return length ? total / length : 0;
}
/**
* Get the angle of two points. (0 <= rad < 359)
* @function
* @memberof Utils
*/


function getRad(pos1, pos2) {
  var distX = pos2[0] - pos1[0];
  var distY = pos2[1] - pos1[1];
  var rad = Math.atan2(distY, distX);
  return rad >= 0 ? rad : rad + Math.PI * 2;
}
/**
* Get the average point of all points.
* @function
* @memberof Utils
*/


function getCenterPoint(points) {
  return [0, 1].map(function (i) {
    return average(points.map(function (pos) {
      return pos[i];
    }));
  });
}
/**
* Gets the direction of the shape.
* @function
* @memberof Utils
*/


function getShapeDirection(points) {
  var center = getCenterPoint(points);
  var pos1Rad = getRad(center, points[0]);
  var pos2Rad = getRad(center, points[1]);
  return pos1Rad < pos2Rad && pos2Rad - pos1Rad < Math.PI || pos1Rad > pos2Rad && pos2Rad - pos1Rad < -Math.PI ? 1 : -1;
}
/**
* Get the distance between two points.
* @function
* @memberof Utils
*/


function getDist(a, b) {
  return Math.sqrt(Math.pow((b ? b[0] : 0) - a[0], 2) + Math.pow((b ? b[1] : 0) - a[1], 2));
}
/**
* throttle number depending on the unit.
* @function
* @memberof Utils
*/


function throttle(num, unit) {
  if (!unit) {
    return num;
  }

  return Math.round(num / unit) * unit;
}
/**
* throttle number array depending on the unit.
* @function
* @memberof Utils
*/


function throttleArray(nums, unit) {
  nums.forEach(function (_, i) {
    nums[i] = throttle(nums[i], unit);
  });
  return nums;
}
/**
* @function
* @memberof Utils
*/


function counter(num) {
  var nums = [];

  for (var i = 0; i < num; ++i) {
    nums.push(i);
  }

  return nums;
}
/**
* @function
* @memberof Utils
*/


function replaceOnce(text, fromText, toText) {
  var isOnce = false;
  return text.replace(fromText, function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    if (isOnce) {
      return args[0];
    }

    isOnce = true;
    return isString(toText) ? toText : toText.apply(void 0, args);
  });
}
/**
* @namespace
* @name Color
*/

/**
* Remove the # from the hex color.
* @memberof Color
* @param {} hex - hex color
* @return {} hex color
* @example
import {cutHex} from "@daybrush/utils";

console.log(cutHex("#000000")) // "000000"
*/


function cutHex(hex) {
  return hex.replace("#", "");
}
/**
* convert hex color to rgb color.
* @memberof Color
* @param {} hex - hex color
* @return {} rgb color
* @example
import {hexToRGBA} from "@daybrush/utils";

console.log(hexToRGBA("#00000005"));
// [0, 0, 0, 1]
console.log(hexToRGBA("#201045"));
// [32, 16, 69, 1]
*/


function hexToRGBA(hex) {
  var h = cutHex(hex);
  var r = parseInt(h.substring(0, 2), 16);
  var g = parseInt(h.substring(2, 4), 16);
  var b = parseInt(h.substring(4, 6), 16);
  var a = parseInt(h.substring(6, 8), 16) / 255;

  if (isNaN(a)) {
    a = 1;
  }

  return [r, g, b, a];
}
/**
* convert 3(or 4)-digit hex color to 6(or 8)-digit hex color.
* @memberof Color
* @param {} hex - 3(or 4)-digit hex color
* @return {} 6(or 8)-digit hex color
* @example
import {toFullHex} from "@daybrush/utils";

console.log(toFullHex("#123")); // "#112233"
console.log(toFullHex("#123a")); // "#112233aa"
*/


function toFullHex(h) {
  var r = h.charAt(1);
  var g = h.charAt(2);
  var b = h.charAt(3);
  var a = h.charAt(4);
  var arr = ["#", r, r, g, g, b, b, a, a];
  return arr.join("");
}
/**
* convert hsl color to rgba color.
* @memberof Color
* @param {} hsl - hsl color(hue: 0 ~ 360, saturation: 0 ~ 1, lightness: 0 ~ 1, alpha: 0 ~ 1)
* @return {} rgba color
* @example
import {hslToRGBA} from "@daybrush/utils";

console.log(hslToRGBA([150, 0.5, 0.4]));
// [51, 153, 102, 1]
*/


function hslToRGBA(hsl) {
  var _a;

  var h = hsl[0];
  var s = hsl[1];
  var l = hsl[2];

  if (h < 0) {
    h += Math.floor((Math.abs(h) + 360) / 360) * 360;
  }

  h %= 360;
  var c = (1 - Math.abs(2 * l - 1)) * s;
  var x = c * (1 - Math.abs(h / 60 % 2 - 1));
  var m = l - c / 2;
  var rgb;

  if (h < 60) {
    rgb = [c, x, 0];
  } else if (h < 120) {
    rgb = [x, c, 0];
  } else if (h < 180) {
    rgb = [0, c, x];
  } else if (h < 240) {
    rgb = [0, x, c];
  } else if (h < 300) {
    rgb = [x, 0, c];
  } else if (h < 360) {
    rgb = [c, 0, x];
  } else {
    rgb = [0, 0, 0];
  }

  return [Math.round((rgb[0] + m) * 255), Math.round((rgb[1] + m) * 255), Math.round((rgb[2] + m) * 255), (_a = hsl[3]) !== null && _a !== void 0 ? _a : 1];
}
/**
* convert string to rgba color.
* @memberof Color
* @param {} - 3-hex(#000), 4-hex(#0000) 6-hex(#000000), 8-hex(#00000000) or RGB(A), or HSL(A)
* @return {} rgba color
* @example
import {stringToRGBA} from "@daybrush/utils";

console.log(stringToRGBA("#000000")); // [0, 0, 0, 1]
console.log(stringToRGBA("rgb(100, 100, 100)")); // [100, 100, 100, 1]
console.log(stringToRGBA("hsl(150, 0.5, 0.4)")); // [51, 153, 102, 1]
*/


function stringToRGBA(color) {
  if (color.charAt(0) === "#") {
    if (color.length === 4 || color.length === 5) {
      return hexToRGBA(toFullHex(color));
    } else {
      return hexToRGBA(color);
    }
  } else if (color.indexOf("(") !== -1) {
    // in bracket.
    var _a = splitBracket(color),
        prefix = _a.prefix,
        value = _a.value;

    if (!prefix || !value) {
      return undefined;
    }

    var arr = splitComma(value);
    var colorArr = [0, 0, 0, 1];
    var length = arr.length;

    switch (prefix) {
      case RGB:
      case RGBA:
        for (var i = 0; i < length; ++i) {
          colorArr[i] = parseFloat(arr[i]);
        }

        return colorArr;

      case HSL:
      case HSLA:
        for (var i = 0; i < length; ++i) {
          if (arr[i].indexOf("%") !== -1) {
            colorArr[i] = parseFloat(arr[i]) / 100;
          } else {
            colorArr[i] = parseFloat(arr[i]);
          }
        } // hsl, hsla to rgba


        return hslToRGBA(colorArr);
    }
  }

  return undefined;
}
/**
 * Returns all element descendants of node that
 * match selectors.
 */

/**
 * Checks if the specified class value exists in the element's class attribute.
 * @memberof DOM
 * @param - A DOMString containing one or more selectors to match
 * @param - If multi is true, a DOMString containing one or more selectors to match against.
 * @example
import {$} from "@daybrush/utils";

console.log($("div")); // div element
console.log($("div", true)); // [div, div] elements
*/


function $(selectors, multi) {
  return multi ? doc.querySelectorAll(selectors) : doc.querySelector(selectors);
}
/**
* Checks if the specified class value exists in the element's class attribute.
* @memberof DOM
* @param element - target
* @param className - the class name to search
* @return {boolean} return false if the class is not found.
* @example
import {hasClass} from "@daybrush/utils";

console.log(hasClass(element, "start")); // true or false
*/


function hasClass(element, className) {
  if (element.classList) {
    return element.classList.contains(className);
  }

  return !!element.className.match(new RegExp("(\\s|^)" + className + "(\\s|$)"));
}
/**
* Add the specified class value. If these classe already exist in the element's class attribute they are ignored.
* @memberof DOM
* @param element - target
* @param className - the class name to add
* @example
import {addClass} from "@daybrush/utils";

addClass(element, "start");
*/


function addClass(element, className) {
  if (element.classList) {
    element.classList.add(className);
  } else {
    element.className += " " + className;
  }
}
/**
* Removes the specified class value.
* @memberof DOM
* @param element - target
* @param className - the class name to remove
* @example
import {removeClass} from "@daybrush/utils";

removeClass(element, "start");
*/


function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else {
    var reg = new RegExp("(\\s|^)" + className + "(\\s|$)");
    element.className = element.className.replace(reg, " ");
  }
}
/**
* Gets the CSS properties from the element.
* @memberof DOM
* @param elements - elements
* @param properites - the CSS properties
* @return returns CSS properties and values.
* @example
import {fromCSS} from "@daybrush/utils";

console.log(fromCSS(element, ["left", "opacity", "top"])); // {"left": "10px", "opacity": 1, "top": "10px"}
*/


function fromCSS(elements, properties) {
  if (!elements || !properties || !properties.length) {
    return {};
  }

  var element;

  if (elements instanceof Element) {
    element = elements;
  } else if (elements.length) {
    element = elements[0];
  } else {
    return {};
  }

  var cssObject = {};
  var styles = window.getComputedStyle(element);
  var length = properties.length;

  for (var i = 0; i < length; ++i) {
    cssObject[properties[i]] = styles[properties[i]];
  }

  return cssObject;
}
/**
* Sets up a function that will be called whenever the specified event is delivered to the target
* @memberof DOM
* @param - event target
* @param - A case-sensitive string representing the event type to listen for.
* @param - The object which receives a notification (an object that implements the Event interface) when an event of the specified type occurs
* @param - An options object that specifies characteristics about the event listener.
* @example
import {addEvent} from "@daybrush/utils";

addEvent(el, "click", e => {
  console.log(e);
});
*/


function addEvent(el, type, listener, options) {
  el.addEventListener(type, listener, options);
}
/**
* removes from the EventTarget an event listener previously registered with EventTarget.addEventListener()
* @memberof DOM
* @param - event target
* @param - A case-sensitive string representing the event type to listen for.
* @param - The EventListener function of the event handler to remove from the event target.
* @param - An options object that specifies characteristics about the event listener.
* @example
import {addEvent, removeEvent} from "@daybrush/utils";
const listener = e => {
  console.log(e);
};
addEvent(el, "click", listener);
removeEvent(el, "click", listener);
*/


function removeEvent(el, type, listener, options) {
  el.removeEventListener(type, listener, options);
}
},{}],"cKDB":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("@daybrush/utils");

/*
Copyright (c) 2019 Daybrush
name: @scena/event-emitter
license: MIT
author: Daybrush
repository: git+https://github.com/daybrush/gesture.git
version: 1.0.5
*/

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
}
/**
 * Implement EventEmitter on object or component.
 */


var EventEmitter = /*#__PURE__*/function () {
  function EventEmitter() {
    this._events = {};
  }
  /**
   * Add a listener to the registered event.
   * @param - Name of the event to be added
   * @param - listener function of the event to be added
   * @example
   * import EventEmitter from "@scena/event-emitter";
   * cosnt emitter = new EventEmitter();
   *
   * // Add listener in "a" event
   * emitter.on("a", () => {
   * });
   * // Add listeners
   * emitter.on({
   *  a: () => {},
   *  b: () => {},
   * });
   */


  var __proto = EventEmitter.prototype;

  __proto.on = function (eventName, listener) {
    if ((0, _utils.isObject)(eventName)) {
      for (var name in eventName) {
        this.on(name, eventName[name]);
      }
    } else {
      this._addEvent(eventName, listener, {});
    }

    return this;
  };
  /**
   * Remove listeners registered in the event target.
   * @param - Name of the event to be removed
   * @param - listener function of the event to be removed
   * @example
   * import EventEmitter from "@scena/event-emitter";
   * cosnt emitter = new EventEmitter();
   *
   * // Remove all listeners.
   * emitter.off();
   *
   * // Remove all listeners in "A" event.
   * emitter.off("a");
   *
   *
   * // Remove "listener" listener in "a" event.
   * emitter.off("a", listener);
   */


  __proto.off = function (eventName, listener) {
    if (!eventName) {
      this._events = {};
    } else if ((0, _utils.isObject)(eventName)) {
      for (var name in eventName) {
        this.off(name);
      }
    } else if (!listener) {
      this._events[eventName] = [];
    } else {
      var events = this._events[eventName];

      if (events) {
        var index = (0, _utils.findIndex)(events, function (e) {
          return e.listener === listener;
        });

        if (index > -1) {
          events.splice(index, 1);
        }
      }
    }

    return this;
  };
  /**
   * Add a disposable listener and Use promise to the registered event.
   * @param - Name of the event to be added
   * @param - disposable listener function of the event to be added
   * @example
   * import EventEmitter from "@scena/event-emitter";
   * cosnt emitter = new EventEmitter();
   *
   * // Add a disposable listener in "a" event
   * emitter.once("a", () => {
   * });
   *
   * // Use Promise
   * emitter.once("a").then(e => {
   * });
   */


  __proto.once = function (eventName, listener) {
    var _this = this;

    if (listener) {
      this._addEvent(eventName, listener, {
        once: true
      });
    }

    return new Promise(function (resolve) {
      _this._addEvent(eventName, resolve, {
        once: true
      });
    });
  };
  /**
   * Fires an event to call listeners.
   * @param - Event name
   * @param - Event parameter
   * @return If false, stop the event.
   * @example
   *
   * import EventEmitter from "@scena/event-emitter";
   *
   *
   * const emitter = new EventEmitter();
   *
   * emitter.on("a", e => {
   * });
   *
   *
   * emitter.emit("a", {
   *   a: 1,
   * });
   */


  __proto.emit = function (eventName, param) {
    var _this = this;

    if (param === void 0) {
      param = {};
    }

    var events = this._events[eventName];

    if (!eventName || !events) {
      return true;
    }

    var isStop = false;
    param.eventType = eventName;

    param.stop = function () {
      isStop = true;
    };

    param.currentTarget = this;

    __spreadArrays(events).forEach(function (info) {
      info.listener(param);

      if (info.once) {
        _this.off(eventName, info.listener);
      }
    });

    return !isStop;
  };
  /**
   * Fires an event to call listeners.
   * @param - Event name
   * @param - Event parameter
   * @return If false, stop the event.
   * @example
   *
   * import EventEmitter from "@scena/event-emitter";
   *
   *
   * const emitter = new EventEmitter();
   *
   * emitter.on("a", e => {
   * });
   *
   *
   * emitter.emit("a", {
   *   a: 1,
   * });
   */

  /**
  * Fires an event to call listeners.
  * @param - Event name
  * @param - Event parameter
  * @return If false, stop the event.
  * @example
  *
  * import EventEmitter from "@scena/event-emitter";
  *
  *
  * const emitter = new EventEmitter();
  *
  * emitter.on("a", e => {
  * });
  *
  * // emit
  * emitter.trigger("a", {
  *   a: 1,
  * });
  */


  __proto.trigger = function (eventName, param) {
    if (param === void 0) {
      param = {};
    }

    return this.emit(eventName, param);
  };

  __proto._addEvent = function (eventName, listener, options) {
    var events = this._events;
    events[eventName] = events[eventName] || [];
    var listeners = events[eventName];
    listeners.push(__assign({
      listener: listener
    }, options));
  };

  return EventEmitter;
}();

var _default = EventEmitter;
exports.default = _default;
},{"@daybrush/utils":"HyW1"}],"JpZQ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*
Copyright (c) 2019 Daybrush
name: order-map
license: MIT
author: Daybrush
repository: git+https://github.com/daybrush/order-map.git
version: 0.2.2
*/

/**
 *
 */
var OrderMap = /*#__PURE__*/function () {
  /**
   *
   */
  function OrderMap(separator) {
    this.separator = separator;
    this.orderMap = {};
  }
  /**
   *
   */


  var __proto = OrderMap.prototype;

  __proto.getFullName = function (names) {
    return names.join(this.separator);
  };
  /**
   *
   */


  __proto.get = function (names) {
    return this.orderMap[this.getFullName(names)];
  };
  /**
   *
   */


  __proto.gets = function (names, isFull) {
    if (isFull === void 0) {
      isFull = true;
    }

    var fullOrders = [];
    var self = this;

    function pushOrders(nextNames, stack) {
      var orders = self.get(nextNames);

      if (!orders) {
        return;
      }

      orders.forEach(function (name) {
        var nextStack = stack.concat([name]);
        var nextOrders = pushOrders(nextNames.concat([name]), nextStack);

        if (!nextOrders || !nextOrders.length) {
          fullOrders.push(stack.concat([name]));
        }
      });
      return orders;
    }

    pushOrders(names, isFull ? names : []);
    return fullOrders;
  };
  /**
   *
   */


  __proto.set = function (names, orders) {
    var _this = this;

    names.forEach(function (name, i) {
      _this.addName(names.slice(0, i), name);
    });
    this.orderMap[this.getFullName(names)] = orders;
    return orders;
  };
  /**
   *
   */


  __proto.add = function (names) {
    var length = names.length;

    if (!length) {
      return [];
    }

    return this.addName(names.slice(0, -1), names[length - 1]);
  };
  /**
   *
   */


  __proto.addName = function (names, name) {
    var orders = this.get(names) || this.set(names, []);

    if (orders.indexOf(name) === -1) {
      orders.push(name);
    }

    return orders;
  };
  /**
   *
   */


  __proto.findIndex = function (names, orderName) {
    var orders = this.orderMap[this.getFullName(names)];

    if (!orders) {
      return -1;
    }

    return orders.indexOf(orderName);
  };
  /**
   *
   */


  __proto.remove = function (names) {
    var fullName = this.getFullName(names);
    var orderMap = this.orderMap;

    for (var name in orderMap) {
      if (name.indexOf(fullName) === 0) {
        delete orderMap[name];
      }
    }

    var length = names.length;

    if (length) {
      var prevNames = names.slice(0, -1);
      var lastName = names[length - 1];
      this.splice(prevNames, this.findIndex(prevNames, lastName), 1);
    }

    return this;
  };
  /**
   *
   */


  __proto.filter = function (names, callback, isFull) {
    if (isFull === void 0) {
      isFull = true;
    }

    var result = this.gets(names, isFull).filter(callback);
    var map = new OrderMap(this.separator);
    var stack = isFull ? [] : names;
    result.forEach(function (nextNames) {
      map.add(stack.concat(nextNames));
    });
    return map;
  };
  /**
   *
   */


  __proto.splice = function (names, index, deleteCount) {
    var orders = [];

    for (var _i = 3; _i < arguments.length; _i++) {
      orders[_i - 3] = arguments[_i];
    }

    var currentOrders = this.get(names) || this.set(names, []);
    currentOrders.splice.apply(currentOrders, [index, deleteCount].concat(orders));
    return this;
  };
  /**
   *
   */


  __proto.clear = function () {
    this.orderMap = {};
  };
  /**
   *
   */


  __proto.setObject = function (obj) {
    var orderMap = this.orderMap;

    for (var name in obj) {
      orderMap[name] = obj[name].slice();
    }
  };
  /**
   *
   */


  __proto.getObject = function () {
    var nextMap = {};
    var orderMap = this.orderMap;

    for (var name in orderMap) {
      nextMap[name] = orderMap[name].slice();
    }

    return nextMap;
  };
  /**
   *
   */


  __proto.clone = function () {
    var map = new OrderMap(this.separator);
    map.setObject(map.orderMap);
    return map;
  };

  return OrderMap;
}();

var _default = OrderMap;
exports.default = _default;
},{}],"ON0b":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("@daybrush/utils");

/*
Copyright (c) 2019 Daybrush
name: css-styled
license: MIT
author: Daybrush
repository: git+https://github.com/daybrush/css-styled.git
version: 1.0.0
*/
function hash(str) {
  var hash = 5381,
      i = str.length;

  while (i) {
    hash = hash * 33 ^ str.charCodeAt(--i);
  }
  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */


  return hash >>> 0;
}

var stringHash = hash;

function getHash(str) {
  return stringHash(str).toString(36);
}

function getShadowRoot(parentElement) {
  if (parentElement && parentElement.getRootNode) {
    var rootNode = parentElement.getRootNode();

    if (rootNode.nodeType === 11) {
      return rootNode;
    }
  }

  return;
}

function replaceStyle(className, css, options) {
  if (options.original) {
    return css;
  }

  return css.replace(/([^};{\s}][^};{]*|^\s*){/mg, function (_, selector) {
    var trimmedSelector = selector.trim();
    return (trimmedSelector ? (0, _utils.splitComma)(trimmedSelector) : [""]).map(function (subSelector) {
      var trimmedSubSelector = subSelector.trim();

      if (trimmedSubSelector.indexOf("@") === 0) {
        return trimmedSubSelector;
      } else if (trimmedSubSelector.indexOf(":global") > -1) {
        return trimmedSubSelector.replace(/\:global/g, "");
      } else if (trimmedSubSelector.indexOf(":host") > -1) {
        return "" + trimmedSubSelector.replace(/\:host/g, "." + className);
      } else if (trimmedSubSelector) {
        return "." + className + " " + trimmedSubSelector;
      } else {
        return "." + className;
      }
    }).join(", ") + " {";
  });
}

function injectStyle(className, css, options, shadowRoot) {
  var style = document.createElement("style");
  style.setAttribute("type", "text/css");
  style.setAttribute("data-styled-id", className);

  if (options.nonce) {
    style.setAttribute("nonce", options.nonce);
  }

  style.innerHTML = replaceStyle(className, css, options);
  (shadowRoot || document.head || document.body).appendChild(style);
  return style;
}
/**
 * Create an styled object that can be defined and inserted into the css.
 * @param - css styles
 */


function styled(css) {
  var injectClassName = "rCS" + getHash(css);
  var injectCount = 0;
  var injectElement;
  return {
    className: injectClassName,
    inject: function (el, options) {
      if (options === void 0) {
        options = {};
      }

      var shadowRoot = getShadowRoot(el);
      var firstMount = injectCount === 0;
      var styleElement;

      if (shadowRoot || firstMount) {
        styleElement = injectStyle(injectClassName, css, options, shadowRoot);
      }

      if (firstMount) {
        injectElement = styleElement;
      }

      if (!shadowRoot) {
        ++injectCount;
      }

      return {
        destroy: function () {
          if (shadowRoot) {
            el.removeChild(styleElement);
            styleElement = null;
          } else {
            if (injectCount > 0) {
              --injectCount;
            }

            if (injectCount === 0 && injectElement) {
              injectElement.parentNode.removeChild(injectElement);
              injectElement = null;
            }
          }
        }
      };
    }
  };
}

var _default = styled;
exports.default = _default;
},{"@daybrush/utils":"HyW1"}],"kWh4":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SceneItem = exports.STEP_START = exports.STEP_END = exports.ROLES = exports.OPTIONS = exports.NAME_SEPARATOR = exports.LINEAR = exports.Frame = exports.FIXED = exports.EVENTS = exports.EASE_OUT = exports.EASE_IN_OUT = exports.EASE_IN = exports.EASE = exports.Animator = void 0;
exports.animate = animate;
exports.animateItem = animateItem;
exports.bezier = bezier;
exports.default = void 0;
exports.isFrame = isFrame;
exports.isRole = isRole;
exports.isScene = isScene;
exports.isSceneItem = isSceneItem;
exports.setAlias = setAlias;
exports.setRole = setRole;
exports.steps = steps;

var _utils = require("@daybrush/utils");

var _eventEmitter = _interopRequireDefault(require("@scena/event-emitter"));

var _orderMap = _interopRequireDefault(require("order-map"));

var _cssStyled = _interopRequireDefault(require("css-styled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Copyright (c) 2016 Daybrush
name: scenejs
license: MIT
author: Daybrush
repository: https://github.com/daybrush/scenejs.git
version: 1.6.0
*/

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

/* global Reflect, Promise */
var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
  };

  return extendStatics(d, b);
};

function __extends(d, b) {
  extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
}

function cubic(y1, y2, t) {
  var t2 = 1 - t; // Bezier Curve Formula

  return t * t * t + 3 * t * t * t2 * y2 + 3 * t * t2 * t2 * y1;
}

function solveFromX(x1, x2, x) {
  // x  0 ~ 1
  // t 0 ~ 1
  var t = x;
  var solveX = x;
  var dx = 1;

  while (Math.abs(dx) > 1 / 1000) {
    // 예상 t초에 의한 _x값
    solveX = cubic(x1, x2, t);
    dx = solveX - x; // 차이가 미세하면 그 값을 t로 지정

    if (Math.abs(dx) < 1 / 1000) {
      return t;
    }

    t -= dx / 2;
  }

  return t;
}
/**
 * @namespace easing
 */

/**
* Cubic Bezier curve.
* @memberof easing
* @func bezier
* @param {number} [x1] - point1's x
* @param {number} [y1] - point1's y
* @param {number} [x2] - point2's x
* @param {number} [y2] - point2's y
* @return {function} the curve function
* @example
import {bezier} from "scenejs";
Scene.bezier(0, 0, 1, 1) // LINEAR
Scene.bezier(0.25, 0.1, 0.25, 1) // EASE
*/


function bezier(x1, y1, x2, y2) {
  /*
        x = f(t)
        calculate inverse function by x
        t = f-1(x)
    */
  var func = function (x) {
    var t = solveFromX(x1, x2, (0, _utils.between)(x, 0, 1));
    return cubic(y1, y2, t);
  };

  func.easingName = "cubic-bezier(" + x1 + "," + y1 + "," + x2 + "," + y2 + ")";
  return func;
}
/**
* Specifies a stepping function
* @see {@link https://www.w3schools.com/cssref/css3_pr_animation-timing-function.asp|CSS3 Timing Function}
* @memberof easing
* @func steps
* @param {number} count - point1's x
* @param {"start" | "end"} postion - point1's y
* @return {function} the curve function
* @example
import {steps} from "scenejs";
Scene.steps(1, "start") // Scene.STEP_START
Scene.steps(1, "end") // Scene.STEP_END
*/


function steps(count, position) {
  var func = function (time) {
    var level = 1 / count;

    if (time >= 1) {
      return 1;
    }

    return (position === "start" ? level : 0) + Math.floor(time / level) * level;
  };

  func.easingName = "steps(" + count + ", " + position + ")";
  return func;
}
/**
* Equivalent to steps(1, start)
* @memberof easing
* @name STEP_START
* @static
* @type {function}
* @example
import {STEP_START} from "scenejs";
Scene.STEP_START // steps(1, start)
*/


var STEP_START =
/*#__PURE__#*/
steps(1, "start");
/**
* Equivalent to steps(1, end)
* @memberof easing
* @name STEP_END
* @static
* @type {function}
* @example
import {STEP_END} from "scenejs";
Scene.STEP_END // steps(1, end)
*/

exports.STEP_START = STEP_START;
var STEP_END =
/*#__PURE__#*/
steps(1, "end");
/**
* Linear Speed (0, 0, 1, 1)
* @memberof easing
* @name LINEAR
* @static
* @type {function}
* @example
import {LINEAR} from "scenejs";
Scene.LINEAR
*/

exports.STEP_END = STEP_END;
var LINEAR =
/*#__PURE__#*/
bezier(0, 0, 1, 1);
/**
* Ease Speed (0.25, 0.1, 0.25, 1)
* @memberof easing
* @name EASE
* @static
* @type {function}
* @example
import {EASE} from "scenejs";
Scene.EASE
*/

exports.LINEAR = LINEAR;
var EASE =
/*#__PURE__#*/
bezier(0.25, 0.1, 0.25, 1);
/**
* Ease In Speed (0.42, 0, 1, 1)
* @memberof easing
* @name EASE_IN
* @static
* @type {function}
* @example
import {EASE_IN} from "scenejs";
Scene.EASE_IN
*/

exports.EASE = EASE;
var EASE_IN =
/*#__PURE__#*/
bezier(0.42, 0, 1, 1);
/**
* Ease Out Speed (0, 0, 0.58, 1)
* @memberof easing
* @name EASE_OUT
* @static
* @type {function}
* @example
import {EASE_OUT} from "scenejs";
Scene.EASE_OUT
*/

exports.EASE_IN = EASE_IN;
var EASE_OUT =
/*#__PURE__#*/
bezier(0, 0, 0.58, 1);
/**
* Ease In Out Speed (0.42, 0, 0.58, 1)
* @memberof easing
* @name EASE_IN_OUT
* @static
* @type {function}
* @example
import {EASE_IN_OUT} from "scenejs";
Scene.EASE_IN_OUT
*/

exports.EASE_OUT = EASE_OUT;
var EASE_IN_OUT =
/*#__PURE__#*/
bezier(0.42, 0, 0.58, 1);
exports.EASE_IN_OUT = EASE_IN_OUT;

var _a;

var PREFIX = "__SCENEJS_";
var DATA_SCENE_ID = "data-scene-id";
var TIMING_FUNCTION = "animation-timing-function";
var ROLES = {
  transform: {},
  filter: {},
  attribute: {},
  html: true
};
exports.ROLES = ROLES;
var ALIAS = {
  easing: [TIMING_FUNCTION]
};
var FIXED = (_a = {}, _a[TIMING_FUNCTION] = true, _a.contents = true, _a.html = true, _a);
exports.FIXED = FIXED;
var MAXIMUM = 1000000;
var THRESHOLD = 0.000001;
var DURATION = "duration";
var FILL_MODE = "fillMode";
var DIRECTION = "direction";
var ITERATION_COUNT = "iterationCount";
var DELAY = "delay";
var EASING = "easing";
var PLAY_SPEED = "playSpeed";
var EASING_NAME = "easingName";
var ITERATION_TIME = "iterationTime";
var PAUSED = "paused";
var ENDED = "ended";
var TIMEUPDATE = "timeupdate";
var ANIMATE = "animate";
var PLAY = "play";
var RUNNING = "running";
var ITERATION = "iteration";
var START_ANIMATION = "startAnimation";
var PAUSE_ANIMATION = "pauseAnimation";
var ALTERNATE = "alternate";
var REVERSE = "reverse";
var ALTERNATE_REVERSE = "alternate-reverse";
var NORMAL = "normal";
var INFINITE = "infinite";
var PLAY_STATE = "playState";
var PLAY_CSS = "playCSS";
var PREV_TIME = "prevTime";
var TICK_TIME = "tickTime";
var CURRENT_TIME = "currentTime";
var SELECTOR = "selector";
var TRANSFORM_NAME = "transform";
var EASINGS = {
  "linear": LINEAR,
  "ease": EASE,
  "ease-in": EASE_IN,
  "ease-out": EASE_OUT,
  "ease-in-out": EASE_IN_OUT,
  "step-start": STEP_START,
  "step-end": STEP_END
};
var NAME_SEPARATOR = "_///_";
/**
* option name list
* @name Scene.OPTIONS
* @memberof Scene
* @static
* @type {$ts:OptionType}
* @example
* Scene.OPTIONS // ["duration", "fillMode", "direction", "iterationCount", "delay", "easing", "playSpeed"]
*/

exports.NAME_SEPARATOR = NAME_SEPARATOR;
var OPTIONS = [DURATION, FILL_MODE, DIRECTION, ITERATION_COUNT, DELAY, EASING, PLAY_SPEED];
/**
* Event name list
* @name Scene.EVENTS
* @memberof Scene
* @static
* @type {$ts:EventType}
* @example
* Scene.EVENTS // ["paused", "ended", "timeupdate", "animate", "play", "iteration"];
*/

exports.OPTIONS = OPTIONS;
var EVENTS = [PAUSED, ENDED, TIMEUPDATE, ANIMATE, PLAY, ITERATION];
/**
* Make string, array to PropertyObject for the dot product
*/

exports.EVENTS = EVENTS;

var PropertyObject = /*#__PURE__*/function () {
  /**
    * @param - This value is in the array format.
    * @param - options
    * @example
  var obj = new PropertyObject([100,100,100,0.5], {
    "separator" : ",",
    "prefix" : "rgba(",
    "suffix" : ")"
  });
     */
  function PropertyObject(value, options) {
    this.prefix = "";
    this.suffix = "";
    this.model = "";
    this.type = "";
    this.separator = ",";
    options && this.setOptions(options);
    this.value = (0, _utils.isString)(value) ? value.split(this.separator) : value;
  }

  var __proto = PropertyObject.prototype;

  __proto.setOptions = function (newOptions) {
    for (var name in newOptions) {
      this[name] = newOptions[name];
    }

    return this;
  };
  /**
    * the number of values.
    * @example
  const obj1 = new PropertyObject("1,2,3", ",");
  console.log(obj1.length);
  // 3
     */


  __proto.size = function () {
    return this.value.length;
  };
  /**
    * retrieve one of values at the index
    * @param {Number} index - index
    * @return {Object} one of values at the index
    * @example
  const obj1 = new PropertyObject("1,2,3", ",");
  console.log(obj1.get(0));
  // 1
     */


  __proto.get = function (index) {
    return this.value[index];
  };
  /**
    * Set the value at that index
    * @param {Number} index - index
    * @param {Object} value - text, a number, object to set
    * @return {PropertyObject} An instance itself
    * @example
  const obj1 = new PropertyObject("1,2,3", ",");
  obj1.set(0, 2);
  console.log(obj1.toValue());
  // 2,2,3
     */


  __proto.set = function (index, value) {
    this.value[index] = value;
    return this;
  };
  /**
    * create a copy of an instance itself.
    * @return {PropertyObject} clone
    * @example
  const obj1 = new PropertyObject("1,2,3", ",");
  const obj2 = obj1.clone();
     */


  __proto.clone = function () {
    var _a = this,
        separator = _a.separator,
        prefix = _a.prefix,
        suffix = _a.suffix,
        model = _a.model,
        type = _a.type;

    var arr = this.value.map(function (v) {
      return v instanceof PropertyObject ? v.clone() : v;
    });
    return new PropertyObject(arr, {
      separator: separator,
      prefix: prefix,
      suffix: suffix,
      model: model,
      type: type
    });
  };
  /**
    * Make Property Object to String
    * @return {String} Make Property Object to String
    * @example
  //rgba(100, 100, 100, 0.5)
  const obj4 = new PropertyObject([100,100,100,0.5], {
    "separator" : ",",
    "prefix" : "rgba(",
    "suffix" : ")",
  });
  console.log(obj4.toValue());
  // "rgba(100,100,100,0.5)"
    */


  __proto.toValue = function () {
    return this.prefix + this.join() + this.suffix;
  };
  /**
    * Make Property Object's array to String
    * @return {String} Join the elements of an array into a string
    * @example
    //rgba(100, 100, 100, 0.5)
    var obj4 = new PropertyObject([100,100,100,0.5], {
        "separator" : ",",
        "prefix" : "rgba(",
        "suffix" : ")"
    });
    obj4.join();  // =>   "100,100,100,0.5"
     */


  __proto.join = function () {
    return this.value.map(function (v) {
      return v instanceof PropertyObject ? v.toValue() : v;
    }).join(this.separator);
  };
  /**
    * executes a provided function once per array element.
    * @param {Function} callback - Function to execute for each element, taking three arguments
    * @param {All} [callback.currentValue] The current element being processed in the array.
    * @param {Number} [callback.index] The index of the current element being processed in the array.
    * @param {Array} [callback.array] the array.
    * @return {PropertyObject} An instance itself
    * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach|MDN Array.forEach()} reference to MDN document.
    * @example
  //rgba(100, 100, 100, 0.5)
  var obj4 = new PropertyObject([100,100,100,0.5], {
    "separator" : ",",
    "prefix" : "rgba(",
    "suffix" : ")"
  });
  obj4.forEach(t => {
    console.log(t);
  });  // =>   "100,100,100,0.5"
    */


  __proto.forEach = function (func) {
    this.value.forEach(func);
    return this;
  };

  return PropertyObject;
}();
/**
* @namespace
* @name Property
*/


function splitStyle(str) {
  var properties = (0, _utils.splitText)(str, ";");
  var obj = {};
  var totalLength = properties.length;
  var length = totalLength;

  for (var i = 0; i < totalLength; ++i) {
    var matches = (0, _utils.splitText)(properties[i], ":");

    if (matches.length < 2 || !matches[1]) {
      --length;
      continue;
    }

    obj[matches[0].trim()] = toPropertyObject(matches[1].trim());
  }

  return {
    styles: obj,
    length: length
  };
}
/**
* convert array to PropertyObject[type=color].
* default model "rgba"
* @memberof Property
* @function arrayToColorObject
* @param {Array|PropertyObject} value ex) [0, 0, 0, 1]
* @return {PropertyObject} PropertyObject[type=color]
* @example
arrayToColorObject([0, 0, 0])
// => PropertyObject(type="color", model="rgba", value=[0, 0, 0, 1], separator=",")
*/


function arrayToColorObject(arr) {
  var model = _utils.RGBA;

  if (arr.length === 3) {
    arr[3] = 1;
  }

  return new PropertyObject(arr, {
    model: model,
    separator: ",",
    type: "color",
    prefix: model + "(",
    suffix: ")"
  });
}
/**
* convert text with parentheses to object.
* @memberof Property
* @function stringToBracketObject
* @param {String} value ex) "rgba(0,0,0,1)"
* @return {PropertyObject} PropertyObject
* @example
stringToBracketObject("abcde(0, 0, 0,1)")
// => PropertyObject(model="abcde", value=[0, 0, 0,1], separator=",")
*/


function stringToBracketObject(text) {
  // [prefix, value, other]
  var _a = (0, _utils.splitBracket)(text),
      model = _a.prefix,
      value = _a.value,
      afterModel = _a.suffix;

  if (typeof value === "undefined") {
    return text;
  }

  if (_utils.COLOR_MODELS.indexOf(model) > -1) {
    return arrayToColorObject((0, _utils.stringToRGBA)(text));
  } // divide comma(,)


  var obj = toPropertyObject(value, model);
  var arr = [value];
  var separator = ",";
  var prefix = model + "(";
  var suffix = ")" + afterModel;

  if (obj instanceof PropertyObject) {
    separator = obj.separator;
    arr = obj.value;
    prefix += obj.prefix;
    suffix = obj.suffix + suffix;
  }

  return new PropertyObject(arr, {
    separator: separator,
    model: model,
    prefix: prefix,
    suffix: suffix
  });
}

function arrayToPropertyObject(arr, separator) {
  return new PropertyObject(arr, {
    type: "array",
    separator: separator
  });
}
/**
* convert text with parentheses to PropertyObject[type=color].
* If the values are not RGBA model, change them RGBA mdoel.
* @memberof Property
* @function stringToColorObject
* @param {String|PropertyObject} value ex) "rgba(0,0,0,1)"
* @return {PropertyObject} PropertyObject[type=color]
* @example
stringToColorObject("rgba(0, 0, 0,1)")
// => PropertyObject(type="color", model="rgba", value=[0, 0, 0,1], separator=",")
*/


function stringToColorObject(value) {
  var result = (0, _utils.stringToRGBA)(value);
  return result ? arrayToColorObject(result) : value;
}

function toPropertyObject(value, model) {
  if (!(0, _utils.isString)(value)) {
    if ((0, _utils.isArray)(value)) {
      return arrayToPropertyObject(value, ",");
    }

    return value;
  }

  var values = (0, _utils.splitComma)(value);

  if (values.length > 1) {
    return arrayToPropertyObject(values.map(function (v) {
      return toPropertyObject(v);
    }), ",");
  }

  values = (0, _utils.splitSpace)(value);

  if (values.length > 1) {
    return arrayToPropertyObject(values.map(function (v) {
      return toPropertyObject(v);
    }), " ");
  }

  values = /^(['"])([^'"]*)(['"])$/g.exec(value);

  if (values && values[1] === values[3]) {
    // Quotes
    return new PropertyObject([toPropertyObject(values[2])], {
      prefix: values[1],
      suffix: values[1]
    });
  } else if (value.indexOf("(") !== -1) {
    // color
    return stringToBracketObject(value);
  } else if (value.charAt(0) === "#" && model !== "url") {
    return stringToColorObject(value);
  }

  return value;
}

function toObject(object, result) {
  if (result === void 0) {
    result = {};
  }

  var model = object.model;

  if (model) {
    object.setOptions({
      model: "",
      suffix: "",
      prefix: ""
    });
    var value = object.size() > 1 ? object : object.get(0);
    result[model] = value;
  } else {
    object.forEach(function (obj) {
      toObject(obj, result);
    });
  }

  return result;
}

function isPropertyObject(value) {
  return value instanceof PropertyObject;
}

function setAlias(name, alias) {
  ALIAS[name] = alias;
}

function setRole(names, isProperty, isFixedProperty) {
  var length = names.length;
  var roles = ROLES;
  var fixed = FIXED;

  for (var i = 0; i < length - 1; ++i) {
    !roles[names[i]] && (roles[names[i]] = {});
    roles = roles[names[i]];

    if (isFixedProperty) {
      !fixed[names[i]] && (fixed[names[i]] = {});
      fixed = fixed[names[i]];
    }
  }

  isFixedProperty && (fixed[names[length - 1]] = true);
  roles[names[length - 1]] = isProperty ? true : {};
}

function getType(value) {
  var type = typeof value;

  if (type === _utils.OBJECT) {
    if ((0, _utils.isArray)(value)) {
      return _utils.ARRAY;
    } else if (isPropertyObject(value)) {
      return _utils.PROPERTY;
    }
  } else if (type === _utils.STRING || type === _utils.NUMBER) {
    return "value";
  }

  return type;
}

function isPureObject(obj) {
  return (0, _utils.isObject)(obj) && obj.constructor === Object;
}

function getNames(names, stack) {
  var arr = [];

  if (isPureObject(names)) {
    for (var name in names) {
      stack.push(name);
      arr = arr.concat(getNames(names[name], stack));
      stack.pop();
    }
  } else {
    arr.push(stack.slice());
  }

  return arr;
}

function updateFrame(names, properties) {
  for (var name in properties) {
    var value = properties[name];

    if (!isPureObject(value)) {
      names[name] = true;
      continue;
    }

    if (!(0, _utils.isObject)(names[name])) {
      names[name] = {};
    }

    updateFrame(names[name], properties[name]);
  }

  return names;
}

function toFixed(num) {
  return Math.round(num * MAXIMUM) / MAXIMUM;
}

function getValueByNames(names, properties, length) {
  if (length === void 0) {
    length = names.length;
  }

  var value = properties;

  for (var i = 0; i < length; ++i) {
    if (!(0, _utils.isObject)(value) || value == null) {
      return undefined;
    }

    value = value[names[i]];
  }

  return value;
}

function isInProperties(roles, args, isLast) {
  var length = args.length;
  var role = roles;

  if (length === 0) {
    return false;
  }

  for (var i = 0; i < length; ++i) {
    if (role === true) {
      return false;
    }

    role = role[args[i]];

    if (!role || !isLast && role === true) {
      return false;
    }
  }

  return true;
}
/**
 * @memberof Scene
 * @param - Property names
 * @param - Whether the property is the last property that cannot be an object (non-partitionable)
 */


function isRole(args, isLast) {
  return isInProperties(ROLES, args, isLast);
}

function isFixed(args) {
  return isInProperties(FIXED, args, true);
}

function setPlayCSS(item, isActivate) {
  item.state[PLAY_CSS] = isActivate;
}

function isPausedCSS(item) {
  return item.state[PLAY_CSS] && item.isPaused();
}

function isEndedCSS(item) {
  return !item.isEnded() && item.state[PLAY_CSS];
}

function makeId(selector) {
  for (;;) {
    var id = "" + Math.floor(Math.random() * 10000000);

    if (!_utils.IS_WINDOW || !selector) {
      return id;
    }

    var checkElement = (0, _utils.$)("[data-scene-id=\"" + id + "\"]");

    if (!checkElement) {
      return id;
    }
  }
}

function getRealId(item) {
  return item.getId() || item.setId(makeId(false)).getId();
}

function toId(text) {
  return ("" + text).match(/[0-9a-zA-Z]+/g).join("");
}

function playCSS(item, isExportCSS, playClassName, properties) {
  if (properties === void 0) {
    properties = {};
  }

  if (!_utils.ANIMATION || item.getPlayState() === RUNNING) {
    return;
  }

  var className = playClassName || START_ANIMATION;

  if (isPausedCSS(item)) {
    item.addPlayClass(true, className, properties);
  } else {
    if (item.isEnded()) {
      item.setTime(0);
    }

    isExportCSS && item.exportCSS({
      className: className
    });
    var el = item.addPlayClass(false, className, properties);

    if (!el) {
      return;
    }

    addAnimationEvent(item, el);
    setPlayCSS(item, true);
  }

  item.setPlayState(RUNNING);
}

function addAnimationEvent(item, el) {
  var state = item.state;
  var duration = item.getDuration();
  var isZeroDuration = !duration || !isFinite(duration);

  var animationend = function () {
    setPlayCSS(item, false);
    item.finish();
  };

  var animationstart = function () {
    item.trigger(PLAY);
    (0, _utils.addEvent)(el, "animationcancel", animationend);
    (0, _utils.addEvent)(el, "animationend", animationend);
    (0, _utils.addEvent)(el, "animationiteration", animationiteration);
  };

  item.once(ENDED, function () {
    (0, _utils.removeEvent)(el, "animationcancel", animationend);
    (0, _utils.removeEvent)(el, "animationend", animationend);
    (0, _utils.removeEvent)(el, "animationiteration", animationiteration);
    (0, _utils.removeEvent)(el, "animationstart", animationstart);
  });

  var animationiteration = function (_a) {
    var elapsedTime = _a.elapsedTime;
    var currentTime = elapsedTime;
    var iterationCount = isZeroDuration ? 0 : currentTime / duration;
    state[CURRENT_TIME] = currentTime;
    item.setIteration(iterationCount);
  };

  (0, _utils.addEvent)(el, "animationstart", animationstart);
}

function getEasing(curveArray) {
  var easing;

  if ((0, _utils.isString)(curveArray)) {
    if (curveArray in EASINGS) {
      easing = EASINGS[curveArray];
    } else {
      var obj = toPropertyObject(curveArray);

      if ((0, _utils.isString)(obj)) {
        return 0;
      } else {
        if (obj.model === "cubic-bezier") {
          curveArray = obj.value.map(function (v) {
            return parseFloat(v);
          });
          easing = bezier(curveArray[0], curveArray[1], curveArray[2], curveArray[3]);
        } else if (obj.model === "steps") {
          easing = steps(parseFloat(obj.value[0]), obj.value[1]);
        } else {
          return 0;
        }
      }
    }
  } else if ((0, _utils.isArray)(curveArray)) {
    easing = bezier(curveArray[0], curveArray[1], curveArray[2], curveArray[3]);
  } else {
    easing = curveArray;
  }

  return easing;
}

function isScene(value) {
  return value && !!value.constructor.prototype.getItem;
}

function isSceneItem(value) {
  return value && !!value.constructor.prototype.getFrame;
}

function isFrame(value) {
  return value && !!value.constructor.prototype.toCSS;
}

function flatSceneObject(obj, seperator) {
  var newObj = {};

  for (var name in obj) {
    var value = obj[name];

    if (isFrame(value)) {
      newObj[name] = value;
    } else if ((0, _utils.isObject)(value)) {
      var nextObj = flatSceneObject(value, seperator);

      for (var nextName in nextObj) {
        newObj["" + name + seperator + nextName] = nextObj[nextName];
      }
    }
  }

  return newObj;
}

function GetterSetter(getter, setter, parent) {
  return function (constructor) {
    var prototype = constructor.prototype;
    getter.forEach(function (name) {
      prototype[(0, _utils.camelize)("get " + name)] = function () {
        return this[parent][name];
      };
    });
    setter.forEach(function (name) {
      prototype[(0, _utils.camelize)("set " + name)] = function (value) {
        this[parent][name] = value;
        return this;
      };
    });
  };
}

function isDirectionReverse(iteration, iteraiontCount, direction) {
  if (direction === REVERSE) {
    return true;
  } else if (iteraiontCount !== INFINITE && iteration === iteraiontCount && iteraiontCount % 1 === 0) {
    return direction === (iteration % 2 >= 1 ? ALTERNATE_REVERSE : ALTERNATE);
  }

  return direction === (iteration % 2 >= 1 ? ALTERNATE : ALTERNATE_REVERSE);
}
/**
* @typedef {Object} AnimatorState The Animator options. Properties used in css animation.
* @property {number} [duration] The duration property defines how long an animation should take to complete one cycle.
* @property {"none"|"forwards"|"backwards"|"both"} [fillMode] The fillMode property specifies a style for the element when the animation is not playing (before it starts, after it ends, or both).
* @property {"infinite"|number} [iterationCount] The iterationCount property specifies the number of times an animation should be played.
* @property {array|function} [easing] The easing(timing-function) specifies the speed curve of an animation.
* @property {number} [delay] The delay property specifies a delay for the start of an animation.
* @property {"normal"|"reverse"|"alternate"|"alternate-reverse"} [direction] The direction property defines whether an animation should be played forwards, backwards or in alternate cycles.
*/


var setters = ["id", ITERATION_COUNT, DELAY, FILL_MODE, DIRECTION, PLAY_SPEED, DURATION, PLAY_SPEED, ITERATION_TIME, PLAY_STATE];

var getters = __spreadArrays(setters, [EASING, EASING_NAME]);
/**
* play video, animation, the others
* @extends EventEmitter
* @see {@link https://www.w3schools.com/css/css3_animations.asp|CSS3 Animation}
*/


var Animator = /*#__PURE__*/function (_super) {
  __extends(Animator, _super);
  /**
   * @param - animator's options
   * @example
  const animator = new Animator({
    delay: 2,
    diretion: "alternate",
    duration: 2,
    fillMode: "forwards",
    iterationCount: 3,
    easing: Scene.easing.EASE,
  });
   */


  function Animator(options) {
    var _this = _super.call(this) || this;

    _this.timerId = 0;
    _this.state = {
      id: "",
      easing: 0,
      easingName: "linear",
      iterationCount: 1,
      delay: 0,
      fillMode: "forwards",
      direction: NORMAL,
      playSpeed: 1,
      currentTime: 0,
      iterationTime: -1,
      iteration: 0,
      tickTime: 0,
      prevTime: 0,
      playState: PAUSED,
      duration: 0
    };

    _this.setOptions(options);

    return _this;
  }
  /**
    * set animator's easing.
    * @param curverArray - The speed curve of an animation.
    * @return {Animator} An instance itself.
    * @example
  animator.({
    delay: 2,
    diretion: "alternate",
    duration: 2,
    fillMode: "forwards",
    iterationCount: 3,
    easing: Scene.easing.EASE,
  });
    */


  var __proto = Animator.prototype;

  __proto.setEasing = function (curveArray) {
    var easing = getEasing(curveArray);
    var easingName = easing && easing[EASING_NAME] || "linear";
    var state = this.state;
    state[EASING] = easing;
    state[EASING_NAME] = easingName;
    return this;
  };
  /**
    * set animator's options.
    * @see {@link https://www.w3schools.com/css/css3_animations.asp|CSS3 Animation}
    * @param - animator's options
    * @return {Animator} An instance itself.
    * @example
  animator.({
    delay: 2,
    diretion: "alternate",
    duration: 2,
    fillMode: "forwards",
    iterationCount: 3,
    easing: Scene.eaasing.EASE,
  });
    */


  __proto.setOptions = function (options) {
    if (options === void 0) {
      options = {};
    }

    for (var name in options) {
      var value = options[name];

      if (name === EASING) {
        this.setEasing(value);
        continue;
      } else if (name === DURATION) {
        value && this.setDuration(value);
        continue;
      }

      if (OPTIONS.indexOf(name) > -1) {
        this.state[name] = value;
      }
    }

    return this;
  };
  /**
    * Get the animator's total duration including delay
    * @return {number} Total duration
    * @example
  animator.getTotalDuration();
    */


  __proto.getTotalDuration = function () {
    return this.getActiveDuration(true);
  };
  /**
    * Get the animator's total duration excluding delay
    * @return {number} Total duration excluding delay
    * @example
  animator.getActiveDuration();
    */


  __proto.getActiveDuration = function (delay) {
    var state = this.state;
    var count = state[ITERATION_COUNT];

    if (count === INFINITE) {
      return Infinity;
    }

    return (delay ? state[DELAY] : 0) + this.getDuration() * count;
  };
  /**
    * Check if the animator has reached the end.
    * @return {boolean} ended
    * @example
  animator.isEnded(); // true or false
    */


  __proto.isEnded = function () {
    if (this.state[TICK_TIME] === 0 && this.state[PLAY_STATE] === PAUSED) {
      return true;
    } else if (this.getTime() < this.getActiveDuration()) {
      return false;
    }

    return true;
  };
  /**
    *Check if the animator is paused:
    * @return {boolean} paused
    * @example
  animator.isPaused(); // true or false
    */


  __proto.isPaused = function () {
    return this.state[PLAY_STATE] === PAUSED;
  };

  __proto.start = function (delay) {
    if (delay === void 0) {
      delay = this.state[DELAY];
    }

    var state = this.state;
    state[PLAY_STATE] = RUNNING;

    if (state[TICK_TIME] >= delay) {
      /**
       * This event is fired when play animator.
       * @event Animator#play
       */
      this.trigger(PLAY);
      return true;
    }

    return false;
  };
  /**
    * play animator
    * @return {Animator} An instance itself.
    */


  __proto.play = function (toTime) {
    var _this = this;

    var state = this.state;
    var delay = state[DELAY];
    var currentTime = this.getTime();
    state[PLAY_STATE] = RUNNING;

    if (this.isEnded() && (currentTime === 0 || currentTime >= this.getActiveDuration())) {
      this.setTime(-delay, true);
    }

    this.timerId = (0, _utils.requestAnimationFrame)(function (time) {
      state[PREV_TIME] = time;

      _this.tick(time, toTime);
    });
    this.start();
    return this;
  };
  /**
    * pause animator
    * @return {Animator} An instance itself.
    */


  __proto.pause = function () {
    var state = this.state;

    if (state[PLAY_STATE] !== PAUSED) {
      state[PLAY_STATE] = PAUSED;
      /**
       * This event is fired when animator is paused.
       * @event Animator#paused
       */

      this.trigger(PAUSED);
    }

    (0, _utils.cancelAnimationFrame)(this.timerId);
    return this;
  };
  /**
     * end animator
     * @return {Animator} An instance itself.
    */


  __proto.finish = function () {
    this.setTime(0);
    this.state[TICK_TIME] = 0;
    this.end();
    return this;
  };
  /**
     * end animator
     * @return {Animator} An instance itself.
    */


  __proto.end = function () {
    this.pause();
    /**
         * This event is fired when animator is ended.
         * @event Animator#ended
         */

    this.trigger(ENDED);
    return this;
  };
  /**
    * set currentTime
    * @param {Number|String} time - currentTime
    * @return {Animator} An instance itself.
    * @example
  animator.setTime("from"); // 0
  animator.setTime("to"); // 100%
  animator.setTime("50%");
  animator.setTime(10);
  animator.getTime() // 10
    */


  __proto.setTime = function (time, isTick, isParent) {
    var activeDuration = this.getActiveDuration();
    var state = this.state;
    var prevTime = state[TICK_TIME];
    var delay = state[DELAY];
    var currentTime = isTick ? time : this.getUnitTime(time);
    state[TICK_TIME] = delay + currentTime;

    if (currentTime < 0) {
      currentTime = 0;
    } else if (currentTime > activeDuration) {
      currentTime = activeDuration;
    }

    state[CURRENT_TIME] = currentTime;
    this.calculate();

    if (isTick && !isParent) {
      var tickTime = state[TICK_TIME];

      if (prevTime < delay && time >= 0) {
        this.start(0);
      }

      if (tickTime < prevTime || this.isEnded()) {
        this.end();
        return;
      }
    }

    if (this.isDelay()) {
      return this;
    }
    /**
         * This event is fired when the animator updates the time.
         * @event Animator#timeupdate
         * @param {Object} param The object of data to be sent to an event.
         * @param {Number} param.currentTime The total time that the animator is running.
         * @param {Number} param.time The iteration time during duration that the animator is running.
         * @param {Number} param.iterationCount The iteration count that the animator is running.
         */


    this.trigger(TIMEUPDATE, {
      currentTime: currentTime,
      time: this.getIterationTime(),
      iterationCount: state[ITERATION]
    });
    return this;
  };
  /**
    * Get the animator's current time
    * @return {number} current time
    * @example
  animator.getTime();
    */


  __proto.getTime = function () {
    return this.state[CURRENT_TIME];
  };

  __proto.getUnitTime = function (time) {
    if ((0, _utils.isString)(time)) {
      var duration = this.getDuration() || 100;

      if (time === "from") {
        return 0;
      } else if (time === "to") {
        return duration;
      }

      var _a = (0, _utils.splitUnit)(time),
          unit = _a.unit,
          value = _a.value;

      if (unit === "%") {
        !this.getDuration() && this.setDuration(duration);
        return toFixed(parseFloat(time) / 100 * duration);
      } else if (unit === ">") {
        return value + THRESHOLD;
      } else {
        return value;
      }
    } else {
      return toFixed(time);
    }
  };
  /**
     * Check if the current state of animator is delayed.
     * @return {boolean} check delay state
     */


  __proto.isDelay = function () {
    var state = this.state;
    var delay = state[DELAY];
    var tickTime = state[TICK_TIME];
    return delay > 0 && tickTime < delay;
  };

  __proto.setIteration = function (iterationCount) {
    var state = this.state;
    var passIterationCount = Math.floor(iterationCount);
    var maxIterationCount = state[ITERATION_COUNT] === INFINITE ? Infinity : state[ITERATION_COUNT];

    if (state[ITERATION] < passIterationCount && passIterationCount < maxIterationCount) {
      /**
            * The event is fired when an iteration of an animation ends.
            * @event Animator#iteration
            * @param {Object} param The object of data to be sent to an event.
            * @param {Number} param.currentTime The total time that the animator is running.
            * @param {Number} param.iterationCount The iteration count that the animator is running.
            */
      this.trigger(ITERATION, {
        currentTime: state[CURRENT_TIME],
        iterationCount: passIterationCount
      });
    }

    state[ITERATION] = iterationCount;
    return this;
  };

  __proto.calculate = function () {
    var state = this.state;
    var iterationCount = state[ITERATION_COUNT];
    var fillMode = state[FILL_MODE];
    var direction = state[DIRECTION];
    var duration = this.getDuration();
    var time = this.getTime();
    var iteration = duration === 0 ? 0 : time / duration;
    var currentIterationTime = duration ? time % duration : 0;

    if (!duration) {
      this.setIterationTime(0);
      return this;
    }

    this.setIteration(iteration); // direction : normal, reverse, alternate, alternate-reverse
    // fillMode : forwards, backwards, both, none

    var isReverse = isDirectionReverse(iteration, iterationCount, direction);
    var isFiniteDuration = isFinite(duration);

    if (isFiniteDuration && isReverse) {
      currentIterationTime = duration - currentIterationTime;
    }

    if (isFiniteDuration && iterationCount !== INFINITE) {
      var isForwards = fillMode === "both" || fillMode === "forwards"; // fill forwards

      if (iteration >= iterationCount) {
        currentIterationTime = duration * (isForwards ? iterationCount % 1 || 1 : 0);
        isReverse && (currentIterationTime = duration - currentIterationTime);
      }
    }

    this.setIterationTime(currentIterationTime);
    return this;
  };

  __proto.tick = function (now, to) {
    var _this = this;

    if (this.isPaused()) {
      return;
    }

    var state = this.state;
    var playSpeed = state[PLAY_SPEED];
    var prevTime = state[PREV_TIME];
    var delay = state[DELAY];
    var tickTime = state[TICK_TIME];
    var currentTime = tickTime + Math.min(1000, now - prevTime) / 1000 * playSpeed;
    state[PREV_TIME] = now;
    this.setTime(currentTime - delay, true);

    if (to && to * 1000 < now) {
      this.pause();
    }

    if (state[PLAY_STATE] === PAUSED) {
      return;
    }

    this.timerId = (0, _utils.requestAnimationFrame)(function (time) {
      _this.tick(time, to);
    });
  };

  Animator = __decorate([GetterSetter(getters, setters, "state")], Animator);
  return Animator;
}(_eventEmitter.default);

exports.Animator = Animator;

function toInnerProperties(obj, orders) {
  if (orders === void 0) {
    orders = [];
  }

  if (!obj) {
    return "";
  }

  var arrObj = [];
  var keys = (0, _utils.getKeys)(obj);
  (0, _utils.sortOrders)(keys, orders);
  keys.forEach(function (name) {
    arrObj.push(name.replace(/\d$/g, "") + "(" + obj[name] + ")");
  });
  return arrObj.join(" ");
}
/* eslint-disable */


function clone(target, toValue) {
  if (toValue === void 0) {
    toValue = false;
  }

  return merge({}, target, toValue);
}

function merge(to, from, toValue) {
  if (toValue === void 0) {
    toValue = false;
  }

  for (var name in from) {
    var value = from[name];
    var type = getType(value);

    if (type === _utils.PROPERTY) {
      to[name] = toValue ? value.toValue() : value.clone();
    } else if (type === _utils.FUNCTION) {
      to[name] = toValue ? getValue([name], value) : value;
    } else if (type === _utils.ARRAY) {
      to[name] = value.slice();
    } else if (type === _utils.OBJECT) {
      if ((0, _utils.isObject)(to[name]) && !isPropertyObject(to[name])) {
        merge(to[name], value, toValue);
      } else {
        to[name] = clone(value, toValue);
      }
    } else {
      to[name] = from[name];
    }
  }

  return to;
}
/* eslint-enable */


function getPropertyName(args) {
  return args[0] in ALIAS ? ALIAS[args[0]] : args;
}

function getValue(names, value) {
  var type = getType(value);

  if (type === _utils.PROPERTY) {
    return value.toValue();
  } else if (type === _utils.FUNCTION) {
    if (names[0] !== TIMING_FUNCTION) {
      return getValue(names, value());
    }
  } else if (type === _utils.OBJECT) {
    return clone(value, true);
  }

  return value;
}
/**
* Animation's Frame
*/


var Frame = /*#__PURE__*/function () {
  /**
   * @param - properties
   * @example
  const frame = new Scene.Frame({
    display: "none"
    transform: {
        translate: "50px",
        scale: "5, 5",
    }
  });
   */
  function Frame(properties) {
    if (properties === void 0) {
      properties = {};
    }

    this.properties = {};
    this.orderMap = new _orderMap.default(NAME_SEPARATOR);
    this.properties = {}; // this.orders = [];

    this.set(properties);
  }
  /**
    * get property value
    * @param {...Number|String|PropertyObject} args - property name or value
    * @example
    frame.get("display") // => "none", "block", ....
    frame.get("transform", "translate") // => "10px,10px"
    */


  var __proto = Frame.prototype;

  __proto.get = function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    var value = this.raw.apply(this, args);
    return getValue(getPropertyName(args), value);
  };
  /**
    * get properties orders
    * @param - property names
    * @example
    frame.getOrders(["display"]) // => []
    frame.getOrders(["transform"]) // => ["translate", "scale"]
    */


  __proto.getOrders = function (names) {
    return this.orderMap.get(names);
  };
  /**
    * set properties orders
    * @param - property names
    * @param - orders
    * @example
    frame.getOrders(["transform"]) // => ["translate", "scale"]
    frame.setOrders(["transform"], ["scale", "tralsate"])
    */


  __proto.setOrders = function (names, orders) {
    return this.orderMap.set(names, orders);
  };
  /**
    * get properties order object
    * @example
    console.log(frame.getOrderObject());
    */


  __proto.getOrderObject = function () {
    return this.orderMap.getObject();
  };
  /**
    * set properties orders object
    * @param - properties orders object
    * @example
    frame.setOrderObject({
        "": ["transform"],
        "transform": ["scale", "tralsate"],
    });
    */


  __proto.setOrderObject = function (obj) {
    this.orderMap.setObject(obj);
  };
  /**
    * get property keys
    * @param - property names
    * @example
    frame.gets("display") // => []
    frame.gets("transform") // => ["translate"]
    */


  __proto.getKeys = function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    var value = this.raw.apply(this, args);
    var keys = getType(value) === _utils.OBJECT ? (0, _utils.getKeys)(value) : [];
    (0, _utils.sortOrders)(keys, this.orderMap.get(args));
    return keys;
  };
  /**
    * get properties array
    * @param - property names
    * @example
    frame.gets("display") // => []
    frame.gets("transform") // => [{ key: "translate", value: "10px, 10px", children: [] }]
    */


  __proto.gets = function () {
    var _this = this;

    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    var values = this.get.apply(this, args);
    var keys = this.getKeys.apply(this, args);
    return keys.map(function (key) {
      var nextValue = values[key];
      return {
        key: key,
        value: nextValue,
        children: _this.gets.apply(_this, __spreadArrays(args, [key]))
      };
    });
  };

  __proto.raw = function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    return getValueByNames(getPropertyName(args), this.properties);
  };
  /**
    * remove property value
    * @param {...String} args - property name
    * @return {Frame} An instance itself
    * @example
    frame.remove("display")
    */


  __proto.remove = function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    var params = getPropertyName(args);
    var length = params.length;

    if (!length) {
      return this;
    }

    this.orderMap.remove(params);
    var value = getValueByNames(params, this.properties, length - 1);

    if ((0, _utils.isObject)(value)) {
      delete value[params[length - 1]];
    }

    return this;
  };
  /**
    * set property
    * @param {...Number|String|PropertyObject} args - property names or values
    * @return {Frame} An instance itself
    * @example
  // one parameter
  frame.set({
    display: "none",
    transform: {
        translate: "10px, 10px",
        scale: "1",
    },
    filter: {
        brightness: "50%",
        grayscale: "100%"
    }
  });
  // two parameters
  frame.set("transform", {
    translate: "10px, 10px",
    scale: "1",
  });
  // three parameters
  frame.set("transform", "translate", "50px");
  */


  __proto.set = function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    var self = this;
    var length = args.length;
    var params = args.slice(0, -1);
    var value = args[length - 1];
    var firstParam = params[0];

    if (length === 1 && value instanceof Frame) {
      self.merge(value);
    } else if (firstParam in ALIAS) {
      self._set(ALIAS[firstParam], value);
    } else if (length === 2 && (0, _utils.isArray)(firstParam)) {
      self._set(firstParam, value);
    } else if (isPropertyObject(value)) {
      if (isRole(params)) {
        self.set.apply(self, __spreadArrays(params, [toObject(value)]));
      } else {
        self._set(params, value);
      }
    } else if ((0, _utils.isArray)(value)) {
      self._set(params, value);
    } else if ((0, _utils.isObject)(value)) {
      if (!self.has.apply(self, params) && isRole(params)) {
        self._set(params, {});
      }

      for (var name in value) {
        self.set.apply(self, __spreadArrays(params, [name, value[name]]));
      }
    } else if ((0, _utils.isString)(value)) {
      if (isRole(params, true)) {
        if (isFixed(params) || !isRole(params)) {
          this._set(params, value);
        } else {
          var obj = toPropertyObject(value);

          if ((0, _utils.isObject)(obj)) {
            self.set.apply(self, __spreadArrays(params, [obj]));
          }
        }

        return this;
      } else {
        var _a = splitStyle(value),
            styles = _a.styles,
            stylesLength = _a.length;

        for (var name in styles) {
          self.set.apply(self, __spreadArrays(params, [name, styles[name]]));
        }

        if (stylesLength) {
          return this;
        }
      }

      self._set(params, value);
    } else {
      self._set(params, value);
    }

    return self;
  };
  /**
    * Gets the names of properties.
    * @return the names of properties.
    * @example
  // one parameter
  frame.set({
    display: "none",
    transform: {
        translate: "10px, 10px",
        scale: "1",
    },
  });
  // [["display"], ["transform", "translate"], ["transform", "scale"]]
  console.log(frame.getNames());
  */


  __proto.getNames = function () {
    return getNames(this.properties, []);
  };
  /**
    * check that has property.
    * @param {...String} args - property name
    * @example
    frame.has("property", "display") // => true or false
    */


  __proto.has = function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    var params = getPropertyName(args);
    var length = params.length;

    if (!length) {
      return false;
    }

    return !(0, _utils.isUndefined)(getValueByNames(params, this.properties, length));
  };
  /**
    * clone frame.
    * @return {Frame} An instance of clone
    * @example
    frame.clone();
    */


  __proto.clone = function () {
    var frame = new Frame();
    frame.setOrderObject(this.orderMap.orderMap);
    return frame.merge(this);
  };
  /**
    * merge one frame to other frame.
    * @param - target frame.
    * @return {Frame} An instance itself
    * @example
    frame.merge(frame2);
    */


  __proto.merge = function (frame) {
    var properties = this.properties;
    var frameProperties = frame.properties;

    if (frameProperties) {
      merge(properties, frameProperties);
    }

    return this;
  };
  /**
    * Specifies an css object that coverted the frame.
    * @return {object} cssObject
    */


  __proto.toCSSObject = function () {
    var properties = this.get();
    var cssObject = {};

    for (var name in properties) {
      if (isRole([name], true)) {
        continue;
      }

      var value = properties[name];

      if (name === TIMING_FUNCTION) {
        cssObject[TIMING_FUNCTION.replace("animation", _utils.ANIMATION)] = ((0, _utils.isString)(value) ? value : value[EASING_NAME]) || "initial";
      } else {
        cssObject[name] = value;
      }
    }

    var transform = toInnerProperties(properties[TRANSFORM_NAME], this.orderMap.get([TRANSFORM_NAME]));
    var filter = toInnerProperties(properties.filter, this.orderMap.get([_utils.FILTER]));
    _utils.TRANSFORM && transform && (cssObject[_utils.TRANSFORM] = transform);
    _utils.FILTER && filter && (cssObject[_utils.FILTER] = filter);
    return cssObject;
  };
  /**
    * Specifies an css text that coverted the frame.
    * @return {string} cssText
    */


  __proto.toCSS = function () {
    var cssObject = this.toCSSObject();
    var cssArray = [];
    var keys = (0, _utils.getKeys)(cssObject);
    (0, _utils.sortOrders)(keys, this.orderMap.get([]));
    keys.forEach(function (name) {
      cssArray.push(name + ":" + cssObject[name] + ";");
    });
    return cssArray.join("");
  };
  /**
    * Remove All Properties
    * @return {Frame} An instance itself
    */


  __proto.clear = function () {
    this.properties = {};
    this.orderMap.clear();
    return this;
  };

  __proto._set = function (args, value) {
    var properties = this.properties;
    var length = args.length;

    for (var i = 0; i < length - 1; ++i) {
      var name = args[i];
      !(name in properties) && (properties[name] = {});
      properties = properties[name];
    }

    if (!length) {
      return;
    }

    var lastParam = args[length - 1];
    this.orderMap.add(args);

    if (length === 1 && lastParam === TIMING_FUNCTION) {
      properties[lastParam] = getEasing(value);
    } else {
      properties[lastParam] = (0, _utils.isString)(value) && !isFixed(args) ? toPropertyObject(value, lastParam) : value;
    }
  };

  return Frame;
}();

exports.Frame = Frame;

function dotArray(a1, a2, b1, b2) {
  var length = a2.length;
  return a1.map(function (v1, i) {
    if (i >= length) {
      return v1;
    } else {
      return dot(v1, a2[i], b1, b2);
    }
  });
}

function dotColor(color1, color2, b1, b2) {
  // convert array to PropertyObject(type=color)
  var value1 = color1.value;
  var value2 = color2.value; // If the model name is not same, the inner product is impossible.

  var model1 = color1.model;
  var model2 = color2.model;

  if (model1 !== model2) {
    // It is recognized as a string.
    return dot(color1.toValue(), color2.toValue(), b1, b2);
  }

  if (value1.length === 3) {
    value1[3] = 1;
  }

  if (value2.length === 3) {
    value2[3] = 1;
  }

  var v = dotArray(value1, value2, b1, b2);
  var colorModel = model1;

  for (var i = 0; i < 3; ++i) {
    v[i] = parseInt(v[i], 10);
  }

  var object = new PropertyObject(v, {
    type: "color",
    model: colorModel,
    prefix: colorModel + "(",
    suffix: ")"
  });
  return object;
}

function dotObject(a1, a2, b1, b2) {
  var a1Type = a1.type;

  if (a1Type === "color") {
    return dotColor(a1, a2, b1, b2);
  }

  var value1 = a1.value;
  var value2 = a2.value;
  var arr = dotArray(value1, value2, b1, b2);
  return new PropertyObject(arr, {
    type: a1Type,
    separator: a1.separator || a2.separator,
    prefix: a1.prefix || a2.prefix,
    suffix: a1.suffix || a2.suffix,
    model: a1.model || a2.model
  });
}
/**
* The dot product of a1 and a2 for the b1 and b2.
* @memberof Dot
* @function dot
* @param {String|Number|PropertyObject} a1 value1
* @param {String|Number|PropertyObject} a2 value2
* @param {Number} b1 b1 ratio
* @param {Number} b2 b2 ratio
* @return {String} Not Array, Not Separator, Only Number & Unit
* @return {PropertyObject} Array with Separator.
* @example
dot(1, 3, 0.3, 0.7);
// => 1.6
*/


function dot(a1, a2, b1, b2) {
  if (b2 === 0) {
    return a2;
  } else if (b1 === 0 || b1 + b2 === 0) {
    // prevent division by zero.
    return a1;
  } // dot Object


  var type1 = getType(a1);
  var type2 = getType(a2);
  var isFunction1 = type1 === _utils.FUNCTION;
  var isFunction2 = type2 === _utils.FUNCTION;

  if (isFunction1 || isFunction2) {
    return function () {
      return dot(isFunction1 ? toPropertyObject(a1()) : a1, isFunction2 ? toPropertyObject(a2()) : a2, b1, b2);
    };
  } else if (type1 === type2) {
    if (type1 === _utils.PROPERTY) {
      return dotObject(a1, a2, b1, b2);
    } else if (type1 === _utils.ARRAY) {
      return dotArray(a1, a2, b1, b2);
    } else if (type1 !== "value") {
      return a1;
    }
  } else {
    return a1;
  }

  var v1 = (0, _utils.splitUnit)("" + a1);
  var v2 = (0, _utils.splitUnit)("" + a2);
  var v; // 숫자가 아닐경우 첫번째 값을 반환 b2가 0일경우 두번째 값을 반환

  if (isNaN(v1.value) || isNaN(v2.value)) {
    return a1;
  } else {
    v = (0, _utils.dot)(v1.value, v2.value, b1, b2);
  }

  var prefix = v1.prefix || v2.prefix;
  var unit = v1.unit || v2.unit;

  if (!prefix && !unit) {
    return v;
  }

  return prefix + v + unit;
}

function dotValue(time, prevTime, nextTime, prevValue, nextValue, easing) {
  if (time === prevTime) {
    return prevValue;
  } else if (time === nextTime) {
    return nextValue;
  } else if (!easing) {
    return dot(prevValue, nextValue, time - prevTime, nextTime - time);
  }

  var ratio = easing((time - prevTime) / (nextTime - prevTime));
  var value = dot(prevValue, nextValue, ratio, 1 - ratio);
  return value;
}

function getNearTimeIndex(times, time) {
  var length = times.length;

  for (var i = 0; i < length; ++i) {
    if (times[i] === time) {
      return [i, i];
    } else if (times[i] > time) {
      return [i > 0 ? i - 1 : 0, i];
    }
  }

  return [length - 1, length - 1];
}

function makeAnimationProperties(properties) {
  var cssArray = [];

  for (var name in properties) {
    cssArray.push(_utils.ANIMATION + "-" + (0, _utils.decamelize)(name) + ":" + properties[name] + ";");
  }

  return cssArray.join("");
}

function addTime(times, time) {
  var length = times.length;

  for (var i = 0; i < length; ++i) {
    if (time < times[i]) {
      times.splice(i, 0, time);
      return;
    }
  }

  times[length] = time;
}

function addEntry(entries, time, keytime) {
  var prevEntry = entries[entries.length - 1];
  (!prevEntry || prevEntry[0] !== time || prevEntry[1] !== keytime) && entries.push([toFixed(time), toFixed(keytime)]);
}

function getEntries(times, states) {
  var entries = times.map(function (time) {
    return [time, time];
  });
  var nextEntries = [];
  states.forEach(function (state) {
    var iterationCount = state[ITERATION_COUNT];
    var delay = state[DELAY];
    var playSpeed = state[PLAY_SPEED];
    var direction = state[DIRECTION];
    var intCount = Math.ceil(iterationCount);
    var currentDuration = entries[entries.length - 1][0];
    var length = entries.length;
    var lastTime = currentDuration * iterationCount;

    for (var i = 0; i < intCount; ++i) {
      var isReverse = direction === REVERSE || direction === ALTERNATE && i % 2 || direction === ALTERNATE_REVERSE && !(i % 2);

      for (var j = 0; j < length; ++j) {
        var entry = entries[isReverse ? length - j - 1 : j];
        var time = entry[1];
        var currentTime = currentDuration * i + (isReverse ? currentDuration - entry[0] : entry[0]);
        var prevEntry = entries[isReverse ? length - j : j - 1];

        if (currentTime > lastTime) {
          if (j !== 0) {
            var prevTime = currentDuration * i + (isReverse ? currentDuration - prevEntry[0] : prevEntry[0]);
            var divideTime = (0, _utils.dot)(prevEntry[1], time, lastTime - prevTime, currentTime - lastTime);
            addEntry(nextEntries, (delay + currentDuration * iterationCount) / playSpeed, divideTime);
          }

          break;
        } else if (currentTime === lastTime && nextEntries.length && nextEntries[nextEntries.length - 1][0] === lastTime + delay) {
          break;
        }

        addEntry(nextEntries, (delay + currentTime) / playSpeed, time);
      }
    } // delay time


    delay && nextEntries.unshift([0, nextEntries[0][1]]);
    entries = nextEntries;
    nextEntries = [];
  });
  return entries;
}
/**
* manage Frame Keyframes and play keyframes.
* @extends Animator
* @example
const item = new SceneItem({
    0: {
        display: "none",
    },
    1: {
        display: "block",
        opacity: 0,
    },
    2: {
        opacity: 1,
    }
});
*/


var SceneItem = /*#__PURE__*/function (_super) {
  __extends(SceneItem, _super);
  /**
    * @param - properties
    * @param - options
    * @example
    const item = new SceneItem({
        0: {
            display: "none",
        },
        1: {
            display: "block",
            opacity: 0,
        },
        2: {
            opacity: 1,
        }
    });
     */


  function SceneItem(properties, options) {
    var _this = _super.call(this) || this;

    _this.times = [];
    _this.items = {};
    _this.nameMap = new _orderMap.default(NAME_SEPARATOR);
    _this.elements = [];
    _this.needUpdate = true;

    _this.load(properties, options);

    return _this;
  }

  var __proto = SceneItem.prototype;

  __proto.getDuration = function () {
    var times = this.times;
    var length = times.length;
    return (length === 0 ? 0 : times[length - 1]) || this.state[DURATION];
  };
  /**
    * get size of list
    * @return {Number} length of list
    */


  __proto.size = function () {
    return this.times.length;
  };

  __proto.setDuration = function (duration) {
    if (!duration) {
      return this;
    }

    var originalDuration = this.getDuration();

    if (originalDuration > 0) {
      var ratio_1 = duration / originalDuration;

      var _a = this,
          times = _a.times,
          items_1 = _a.items;

      var obj_1 = {};
      this.times = times.map(function (time) {
        var time2 = toFixed(time * ratio_1);
        obj_1[time2] = items_1[time];
        return time2;
      });
      this.items = obj_1;
    } else {
      this.newFrame(duration);
    }

    return this;
  };

  __proto.setId = function (id) {
    var state = this.state;
    var elements = this.elements;
    var length = elements.length;
    state.id = id || makeId(!!length);

    if (length && !state[SELECTOR]) {
      var sceneId_1 = toId(this.getId());
      state[SELECTOR] = "[" + DATA_SCENE_ID + "=\"" + sceneId_1 + "\"]";
      elements.forEach(function (element) {
        element.setAttribute(DATA_SCENE_ID, sceneId_1);
      });
    }

    return this;
  };
  /**
    * Set properties to the sceneItem at that time
    * @param {Number} time - time
    * @param {...String|Object} [properties] - property names or values
    * @return {SceneItem} An instance itself
    * @example
  item.set(0, "a", "b") // item.getFrame(0).set("a", "b")
  console.log(item.get(0, "a")); // "b"
    */


  __proto.set = function (time) {
    var _this = this;

    var args = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }

    if (time instanceof SceneItem) {
      return this.set(0, time);
    } else if ((0, _utils.isArray)(time)) {
      var length = time.length;

      for (var i = 0; i < length; ++i) {
        var t = length === 1 ? 0 : this.getUnitTime(i / (length - 1) * 100 + "%");
        this.set(t, time[i]);
      }
    } else if ((0, _utils.isObject)(time)) {
      var _loop_1 = function (t) {
        var value = time[t];
        (0, _utils.splitComma)(t).forEach(function (eachTime) {
          var realTime = _this.getUnitTime(eachTime);

          if (isNaN(realTime)) {
            getNames(value, [eachTime]).forEach(function (names) {
              var _a;

              var innerValue = getValueByNames(names.slice(1), value);
              var arr = (0, _utils.isArray)(innerValue) ? innerValue : [getValueByNames(names, _this.target), innerValue];
              var length = arr.length;

              for (var i = 0; i < length; ++i) {
                (_a = _this.newFrame(i / (length - 1) * 100 + "%")).set.apply(_a, __spreadArrays(names, [arr[i]]));
              }
            });
          } else {
            _this.set(realTime, value);
          }
        });
      };

      for (var t in time) {
        _loop_1(t);
      }
    } else if (!(0, _utils.isUndefined)(time)) {
      var value_1 = args[0];
      (0, _utils.splitComma)(time + "").forEach(function (eachTime) {
        var realTime = _this.getUnitTime(eachTime);

        if (value_1 instanceof SceneItem) {
          var delay = value_1.getDelay();
          var frames = value_1.toObject(!_this.hasFrame(realTime + delay));
          var duration = value_1.getDuration();
          var direction = value_1.getDirection();
          var isReverse = direction.indexOf("reverse") > -1;

          for (var frameTime in frames) {
            var nextTime = isReverse ? duration - parseFloat(frameTime) : parseFloat(frameTime);

            _this.set(realTime + nextTime, frames[frameTime]);
          }
        } else if (args.length === 1 && (0, _utils.isArray)(value_1)) {
          value_1.forEach(function (item) {
            _this.set(realTime, item);
          });
        } else {
          var frame = _this.newFrame(realTime);

          frame.set.apply(frame, args);
        }
      });
    }

    this.needUpdate = true;
    return this;
  };
  /**
    * Get properties of the sceneItem at that time
    * @param {Number} time - time
    * @param {...String|Object} args property's name or properties
    * @return {Number|String|PropertyObejct} property value
    * @example
  item.get(0, "a"); // item.getFrame(0).get("a");
  item.get(0, "transform", "translate"); // item.getFrame(0).get("transform", "translate");
    */


  __proto.get = function (time) {
    var args = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }

    var frame = this.getFrame(time);
    return frame && frame.get.apply(frame, args);
  };
  /**
    * get properties orders
    * @param - property names
    * @example
    item.getOrders(["display"]) // => []
    item.getOrders(["transform"]) // => ["translate", "scale"]
    */


  __proto.getOrders = function (names) {
    this.needUpdate && this.update();
    return this.nameMap.get(names);
  };
  /**
    * set properties orders
    * @param - property names
    * @param - orders
    * @example
    item.getOrders(["transform"]) // => ["translate", "scale"]
    item.setOrders(["transform"], ["scale", "tralsate"])
    */


  __proto.setOrders = function (names, orders) {
    this.needUpdate && this.update();
    var result = this.nameMap.set(names, orders);
    this.updateFrameOrders();
    return result;
  };
  /**
    * get properties order object
    * @example
    console.log(item.getOrderObject());
    */


  __proto.getOrderObject = function () {
    return this.nameMap.getObject();
  };
  /**
    * set properties orders object
    * @param - properties orders object
    * @example
    item.setOrderObject({
        "": ["transform"],
        "transform": ["scale", "tralsate"],
    });
    */


  __proto.setOrderObject = function (obj) {
    this.nameMap.setObject(obj);
    this.updateFrameOrders();
  };
  /**
    * remove properties to the sceneItem at that time
    * @param {Number} time - time
    * @param {...String|Object} [properties] - property names or values
    * @return {SceneItem} An instance itself
    * @example
  item.remove(0, "a");
    */


  __proto.remove = function (time) {
    var args = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }

    if (args.length) {
      var frame = this.getFrame(time);
      frame && frame.remove.apply(frame, args);
    } else {
      this.removeFrame(time);
    }

    this.needUpdate = true;
    return this;
  };
  /**
    * Append the item or object at the last time.
    * @param - the scene item or item object
    * @return An instance itself
    * @example
  item.append(new SceneItem({
    0: {
        opacity: 0,
    },
    1: {
        opacity: 1,
    }
  }));
  item.append({
    0: {
        opacity: 0,
    },
    1: {
        opacity: 1,
    }
  });
  item.set(item.getDuration(), {
    0: {
        opacity: 0,
    },
    1: {
        opacity: 1,
    }
  });
    */


  __proto.append = function (item) {
    if (item instanceof SceneItem) {
      this.set(this.getDuration(), item);
    } else {
      this.append(new SceneItem(item));
    }

    return this;
  };
  /**
    * Push the front frames for the time and prepend the scene item or item object.
    * @param - the scene item or item object
    * @return An instance itself
    */


  __proto.prepend = function (item) {
    if (item instanceof SceneItem) {
      var unshiftTime = item.getDuration() + item.getDelay();
      var firstFrame = this.getFrame(0); // remove first frame

      this.removeFrame(0);
      this.unshift(unshiftTime);
      this.set(0, item);
      this.set(unshiftTime + THRESHOLD, firstFrame);
    } else {
      this.prepend(new SceneItem(item));
    }

    return this;
  };
  /**
   * Push out the amount of time.
   * @param - time to push
   * @example
  item.get(0); // frame 0
  item.unshift(3);
  item.get(3) // frame 0
   */


  __proto.unshift = function (time) {
    var _a = this,
        times = _a.times,
        items = _a.items;

    var obj = {};
    this.times = times.map(function (t) {
      var time2 = toFixed(time + t);
      obj[time2] = items[t];
      return time2;
    });
    this.items = obj;
    return this;
  };
  /**
   * Get the frames in the item in object form.
   * @return {}
   * @example
  item.toObject();
  // {0: {display: "none"}, 1: {display: "block"}}
   */


  __proto.toObject = function (isStartZero) {
    if (isStartZero === void 0) {
      isStartZero = true;
    }

    var obj = {};
    var delay = this.getDelay();
    this.forEach(function (frame, time) {
      obj[(!time && !isStartZero ? THRESHOLD : 0) + delay + time] = frame.clone();
    });
    return obj;
  };
  /**
   * Specifies an element to synchronize items' keyframes.
   * @param {string} selectors - Selectors to find elements in items.
   * @return {SceneItem} An instance itself
   * @example
  item.setSelector("#id.class");
   */


  __proto.setSelector = function (target) {
    if ((0, _utils.isFunction)(target)) {
      this.setElement(target(this.getId()));
    } else {
      this.setElement(target);
    }

    return this;
  };
  /**
   * Get the elements connected to SceneItem.
   */


  __proto.getElements = function () {
    return this.elements;
  };
  /**
   * Specifies an element to synchronize item's keyframes.
   * @param - elements to synchronize item's keyframes.
   * @param - Make sure that you have peusdo.
   * @return {SceneItem} An instance itself
   * @example
  item.setElement(document.querySelector("#id.class"));
  item.setElement(document.querySelectorAll(".class"));
   */


  __proto.setElements = function (target) {
    return this.setElement(target);
  };
  /**
   * Specifies an element to synchronize item's keyframes.
   * @param - elements to synchronize item's keyframes.
   * @param - Make sure that you have peusdo.
   * @return {SceneItem} An instance itself
   * @example
  item.setElement(document.querySelector("#id.class"));
  item.setElement(document.querySelectorAll(".class"));
   */


  __proto.setElement = function (target) {
    var state = this.state;
    var elements = [];

    if (!target) {
      return this;
    } else if (target === true || (0, _utils.isString)(target)) {
      var selector = target === true ? "" + state.id : target;
      var matches = /([\s\S]+)(:+[a-zA-Z]+)$/g.exec(selector);
      elements = (0, _utils.toArray)((0, _utils.$)(matches ? matches[1] : selector, true));
      state[SELECTOR] = selector;
    } else {
      elements = target instanceof Element ? [target] : (0, _utils.toArray)(target);
    }

    if (!elements.length) {
      return this;
    }

    this.elements = elements;
    this.setId(this.getId());
    this.target = elements[0].style;

    this.targetFunc = function (frame) {
      var attributes = frame.get("attribute");

      if (attributes) {
        var _loop_2 = function (name) {
          elements.forEach(function (el) {
            el.setAttribute(name, attributes[name]);
          });
        };

        for (var name in attributes) {
          _loop_2(name);
        }
      }

      if (frame.has("html")) {
        var html_1 = frame.get("html");
        elements.forEach(function (el) {
          el.innerHTML = html_1;
        });
      }

      var cssText = frame.toCSS();

      if (state.cssText !== cssText) {
        state.cssText = cssText;
        elements.forEach(function (el) {
          el.style.cssText += cssText;
        });
        return frame;
      }
    };

    return this;
  };

  __proto.setTarget = function (target) {
    this.target = target;

    this.targetFunc = function (frame) {
      var obj = frame.get();

      for (var name in obj) {
        target[name] = obj[name];
      }
    };

    return this;
  };
  /**
    * add css styles of items's element to the frame at that time.
    * @param - Time to synchronize and set css
    * @param - elements to synchronize item's keyframes.
    * @return {SceneItem} An instance itself
    * @example
  item.setElement(document.querySelector("#id.class"));
  item.setCSS(0, ["opacity"]);
  item.setCSS(0, ["opacity", "width", "height"]);
    */


  __proto.setCSS = function (time, properties) {
    if (properties === void 0) {
      properties = [];
    }

    this.set(time, (0, _utils.fromCSS)(this.elements, properties));
    return this;
  };

  __proto.setTime = function (time, isTick, isParent, parentEasing) {
    _super.prototype.setTime.call(this, time, isTick, isParent);

    var iterationTime = this.getIterationTime();
    var easing = this.getEasing() || parentEasing;
    var frame = this.getNowFrame(iterationTime, easing);
    var currentTime = this.getTime();
    this.temp = frame;
    /**
     * This event is fired when timeupdate and animate.
     * @event SceneItem#animate
     * @param {Number} param.currentTime The total time that the animator is running.
     * @param {Number} param.time The iteration time during duration that the animator is running.
     * @param {Frame} param.frame frame of that time.
     */

    this.trigger("animate", {
      frame: frame,
      currentTime: currentTime,
      time: iterationTime
    });
    this.targetFunc && this.targetFunc(frame);
    return this;
  };
  /**
    * update property names used in frames.
    * @return {SceneItem} An instance itself
    * @example
  item.update();
    */


  __proto.update = function () {
    var prevNameMap = this.nameMap;
    var names = {};
    this.forEach(function (frame) {
      updateFrame(names, frame.properties);
    });
    var nameMap = new _orderMap.default(NAME_SEPARATOR);

    function pushKeys(map, stack) {
      var keys = (0, _utils.getKeys)(map);
      (0, _utils.sortOrders)(keys, prevNameMap.get(stack));
      nameMap.set(stack, keys);
      keys.forEach(function (key) {
        var nextMap = map[key];

        if ((0, _utils.isObject)(nextMap)) {
          pushKeys(nextMap, __spreadArrays(stack, [key]));
        }
      });
    }

    pushKeys(names, []);
    this.nameMap = nameMap;
    this.forEach(function (frame) {
      frame.setOrderObject(nameMap.orderMap);
    });
    this.needUpdate = false;
    return this;
  };
  /**
    * Create and add a frame to the sceneItem at that time
    * @param {Number} time - frame's time
    * @return {Frame} Created frame.
    * @example
  item.newFrame(time);
    */


  __proto.newFrame = function (time) {
    var frame = this.getFrame(time);

    if (frame) {
      return frame;
    }

    frame = new Frame();
    this.setFrame(time, frame);
    return frame;
  };
  /**
    * Add a frame to the sceneItem at that time
    * @param {Number} time - frame's time
    * @return {SceneItem} An instance itself
    * @example
  item.setFrame(time, frame);
    */


  __proto.setFrame = function (time, frame) {
    var realTime = this.getUnitTime(time);
    this.items[realTime] = frame;
    addTime(this.times, realTime);
    this.needUpdate = true;
    return this;
  };
  /**
    * get sceneItem's frame at that time
    * @param {Number} time - frame's time
    * @return {Frame} sceneItem's frame at that time
    * @example
  const frame = item.getFrame(time);
    */


  __proto.getFrame = function (time) {
    return this.items[this.getUnitTime(time)];
  };
  /**
    * remove sceneItem's frame at that time
    * @param - frame's time
    * @return {SceneItem} An instance itself
    * @example
  item.removeFrame(time);
    */


  __proto.removeFrame = function (time) {
    var realTime = this.getUnitTime(time);
    var items = this.items;
    var index = this.times.indexOf(realTime);
    delete items[realTime]; // remove time

    if (index > -1) {
      this.times.splice(index, 1);
    }

    this.needUpdate = true;
    return this;
  };
  /**
    * check if the item has a frame at that time
    * @param {Number} time - frame's time
    * @return {Boolean} true: the item has a frame // false: not
    * @example
  if (item.hasFrame(10)) {
    // has
  } else {
    // not
  }
    */


  __proto.hasFrame = function (time) {
    return this.getUnitTime(time) in this.items;
  };
  /**
    * Check if keyframes has propery's name
    * @param - property's time
    * @return {boolean} true: if has property, false: not
    * @example
  item.hasName(["transform", "translate"]); // true or not
    */


  __proto.hasName = function (args) {
    this.needUpdate && this.update();
    return !!this.nameMap.get(args);
  };
  /**
    * merge frame of the previous time at the next time.
  * @param - The time of the frame to merge
  * @param - The target frame
    * @return {SceneItem} An instance itself
    * @example
  // getFrame(1) contains getFrame(0)
  item.merge(0, 1);
    */


  __proto.mergeFrame = function (time, frame) {
    if (frame) {
      var toFrame = this.newFrame(time);
      toFrame.merge(frame);
    }

    return this;
  };
  /**
    * Get frame of the current time
    * @param {Number} time - the current time
    * @param {function} easing - the speed curve of an animation
    * @return {Frame} frame of the current time
    * @example
  let item = new SceneItem({
    0: {
        display: "none",
    },
    1: {
        display: "block",
        opacity: 0,
    },
    2: {
        opacity: 1,
    }
  });
  // opacity: 0.7; display:"block";
  const frame = item.getNowFrame(1.7);
    */


  __proto.getNowFrame = function (time, parentEasing, isAccurate) {
    var _this = this;

    this.needUpdate && this.update();
    var frame = new Frame();

    var _a = getNearTimeIndex(this.times, time),
        left = _a[0],
        right = _a[1];

    var realEasing = this.getEasing() || parentEasing;
    var nameMap = this.nameMap;

    if (this.hasName([TIMING_FUNCTION])) {
      var nowEasing = this.getNowValue(time, [TIMING_FUNCTION], left, right, false, 0, true);
      (0, _utils.isFunction)(nowEasing) && (realEasing = nowEasing);
    }

    if (isAccurate) {
      var prevFrame_1 = this.getFrame(time);
      var prevOrderMap = prevFrame_1.orderMap.filter([], function (orders) {
        return prevFrame_1.has.apply(prevFrame_1, orders);
      });

      for (var name in ROLES) {
        var orders = nameMap.get([name]);

        if (prevOrderMap.get([name]) && orders) {
          prevOrderMap.set([name], orders);
        }
      }

      nameMap = prevOrderMap;
    }

    var names = nameMap.gets([]);
    frame.setOrderObject(nameMap.orderMap);
    names.forEach(function (properties) {
      var value = _this.getNowValue(time, properties, left, right, isAccurate, realEasing, isFixed(properties));

      if ((0, _utils.isUndefined)(value)) {
        return;
      }

      frame.set(properties, value);
    });
    return frame;
  };
  /**
   * Get the current computed frame. (If needUpdate is true, get a new computed frame, not the temp that has already been saved.)
   */


  __proto.getCurrentFrame = function (needUpdate, parentEasing) {
    var iterationTime = this.getIterationTime();
    var frame = needUpdate || this.needUpdate || !this.temp ? this.getComputedFrame(iterationTime, parentEasing) : this.temp;
    this.temp = frame;
    return frame;
  };
  /**
   * Get the computed frame corresponding to the time.
   */


  __proto.getComputedFrame = function (time, parentEasing, isAccurate) {
    return this.getNowFrame(time, parentEasing, isAccurate);
  };

  __proto.load = function (properties, options) {
    var _a;

    if (properties === void 0) {
      properties = {};
    }

    if (options === void 0) {
      options = properties.options;
    }

    options && this.setOptions(options);

    if ((0, _utils.isArray)(properties)) {
      this.set(properties);
    } else if (properties.keyframes) {
      this.set(properties.keyframes);
    } else {
      for (var time in properties) {
        if (time !== "options") {
          this.set((_a = {}, _a[time] = properties[time], _a));
        }
      }
    }

    if (options && options[DURATION]) {
      this.setDuration(options[DURATION]);
    }

    return this;
  };
  /**
     * clone SceneItem.
     * @return {SceneItem} An instance of clone
     * @example
     * item.clone();
     */


  __proto.clone = function () {
    var item = new SceneItem();
    item.setOptions(this.state);
    item.setOrderObject(this.nameMap.orderMap);
    this.forEach(function (frame, time) {
      item.setFrame(time, frame.clone());
    });
    return item;
  };
  /**
     * executes a provided function once for each scene item.
     * @param - Function to execute for each element, taking three arguments
     * @return {Keyframes} An instance itself
     */


  __proto.forEach = function (callback) {
    var times = this.times;
    var items = this.items;
    times.forEach(function (time) {
      callback(items[time], time, items);
    });
    return this;
  };

  __proto.setOptions = function (options) {
    if (options === void 0) {
      options = {};
    }

    _super.prototype.setOptions.call(this, options);

    var id = options.id,
        selector = options.selector,
        elements = options.elements,
        element = options.element,
        target = options.target;
    id && this.setId(id);

    if (target) {
      this.setTarget(target);
    } else if (selector) {
      this.setSelector(selector);
    } else if (elements || element) {
      this.setElement(elements || element);
    }

    return this;
  };

  __proto.toCSS = function (playCondition, parentDuration, states) {
    if (playCondition === void 0) {
      playCondition = {
        className: START_ANIMATION
      };
    }

    if (parentDuration === void 0) {
      parentDuration = this.getDuration();
    }

    if (states === void 0) {
      states = [];
    }

    var itemState = this.state;
    var selector = itemState[SELECTOR];

    if (!selector) {
      return "";
    }

    var originalDuration = this.getDuration();
    itemState[DURATION] = originalDuration;
    states.push(itemState);
    var reversedStates = (0, _utils.toArray)(states).reverse();
    var id = toId(getRealId(this));
    var superParent = states[0];
    var infiniteIndex = (0, _utils.findIndex)(reversedStates, function (state) {
      return state[ITERATION_COUNT] === INFINITE || !isFinite(state[DURATION]);
    }, states.length - 1);
    var finiteStates = reversedStates.slice(0, infiniteIndex);
    var duration = parentDuration || finiteStates.reduce(function (prev, cur) {
      return (cur[DELAY] + prev * cur[ITERATION_COUNT]) / cur[PLAY_SPEED];
    }, originalDuration);
    var delay = reversedStates.slice(infiniteIndex).reduce(function (prev, cur) {
      return (prev + cur[DELAY]) / cur[PLAY_SPEED];
    }, 0);
    var easingName = (0, _utils.find)(reversedStates, function (state) {
      return state[EASING] && state[EASING_NAME];
    }, itemState)[EASING_NAME];
    var iterationCount = reversedStates[infiniteIndex][ITERATION_COUNT];
    var fillMode = superParent[FILL_MODE];
    var direction = reversedStates[infiniteIndex][DIRECTION];
    var cssText = makeAnimationProperties({
      fillMode: fillMode,
      direction: direction,
      iterationCount: iterationCount,
      delay: delay + "s",
      name: PREFIX + "KEYFRAMES_" + id,
      duration: duration / superParent[PLAY_SPEED] + "s",
      timingFunction: easingName
    });
    var selectors = (0, _utils.splitComma)(selector).map(function (sel) {
      var matches = /([\s\S]+)(:+[a-zA-Z]+)$/g.exec(sel);

      if (matches) {
        return [matches[1], matches[2]];
      } else {
        return [sel, ""];
      }
    });
    var className = playCondition.className;
    var selectorCallback = playCondition.selector;
    var preselector = (0, _utils.isFunction)(selectorCallback) ? selectorCallback(this, selector) : selectorCallback;
    return "\n    " + (preselector || selectors.map(function (_a) {
      var sel = _a[0],
          peusdo = _a[1];
      return sel + "." + className + peusdo;
    })) + " {" + cssText + "}\n    " + selectors.map(function (_a) {
      var sel = _a[0],
          peusdo = _a[1];
      return sel + "." + PAUSE_ANIMATION + peusdo;
    }) + " {" + _utils.ANIMATION + "-play-state: paused;}\n    @" + _utils.KEYFRAMES + " " + PREFIX + "KEYFRAMES_" + id + "{" + this._toKeyframes(duration, finiteStates, direction) + "}";
  };
  /**
   * Export the CSS of the items to the style.
   * @param - Add a selector or className to play.
   * @return {SceneItem} An instance itself
   */


  __proto.exportCSS = function (playCondition, duration, options) {
    if (!this.elements.length) {
      return "";
    }

    var css = this.toCSS(playCondition, duration, options);
    var isParent = options && !(0, _utils.isUndefined)(options[ITERATION_COUNT]);

    if (!isParent) {
      if (this.styledInjector) {
        this.styledInjector.destroy();
        this.styledInjector = null;
      }

      this.styled = (0, _cssStyled.default)(css);
      this.styledInjector = this.styled.inject(this.getAnimationElement(), {
        original: true
      });
    }

    return this;
  };

  __proto.pause = function () {
    _super.prototype.pause.call(this);

    isPausedCSS(this) && this.pauseCSS();
    return this;
  };

  __proto.pauseCSS = function () {
    this.elements.forEach(function (element) {
      (0, _utils.addClass)(element, PAUSE_ANIMATION);
    });
    return this;
  };

  __proto.endCSS = function () {
    this.elements.forEach(function (element) {
      (0, _utils.removeClass)(element, PAUSE_ANIMATION);
      (0, _utils.removeClass)(element, START_ANIMATION);
    });
    setPlayCSS(this, false);
    return this;
  };

  __proto.end = function () {
    isEndedCSS(this) && this.endCSS();

    _super.prototype.end.call(this);

    return this;
  };
  /**
    * Play using the css animation and keyframes.
    * @param - Check if you want to export css.
    * @param [playClassName="startAnimation"] - Add a class name to play.
    * @param - The shorthand properties for six of the animation properties.
    * @see {@link https://www.w3schools.com/cssref/css3_pr_animation.asp}
    * @example
  item.playCSS();
  item.playCSS(false, "startAnimation", {
    direction: "reverse",
    fillMode: "forwards",
  });
    */


  __proto.playCSS = function (isExportCSS, playClassName, properties) {
    if (isExportCSS === void 0) {
      isExportCSS = true;
    }

    if (properties === void 0) {
      properties = {};
    }

    playCSS(this, isExportCSS, playClassName, properties);
    return this;
  };

  __proto.getAnimationElement = function () {
    return this.elements[0];
  };

  __proto.addPlayClass = function (isPaused, playClassName, properties) {
    if (properties === void 0) {
      properties = {};
    }

    var elements = this.elements;
    var length = elements.length;
    var cssText = makeAnimationProperties(properties);

    if (!length) {
      return;
    }

    if (isPaused) {
      elements.forEach(function (element) {
        (0, _utils.removeClass)(element, PAUSE_ANIMATION);
      });
    } else {
      elements.forEach(function (element) {
        element.style.cssText += cssText;

        if ((0, _utils.hasClass)(element, START_ANIMATION)) {
          (0, _utils.removeClass)(element, START_ANIMATION);
        }
      });
      elements.forEach(function (element) {
        element.clientWidth;
      });
      elements.forEach(function (element) {
        (0, _utils.addClass)(element, START_ANIMATION);
      });
    }

    return elements[0];
  };
  /**
    * Clear All Frames
    * @return {SceneItem} An instance itself
    */


  __proto.clear = function () {
    this.times = [];
    this.items = {};
    this.nameMap = new _orderMap.default(NAME_SEPARATOR);

    if (this.styledInjector) {
      this.styledInjector.destroy();
    }

    this.styled = null;
    this.styledInjector = null;
    this.temp = null;
    this.needUpdate = true;
    return this;
  };

  __proto.getNowValue = function (time, properties, left, right, isAccurate, easing, usePrevValue) {
    var times = this.times;
    var length = times.length;
    var prevTime;
    var nextTime;
    var prevFrame;
    var nextFrame;
    var isUndefinedLeft = (0, _utils.isUndefined)(left);
    var isUndefinedRight = (0, _utils.isUndefined)(right);

    if (isUndefinedLeft || isUndefinedRight) {
      var indicies = getNearTimeIndex(times, time);
      isUndefinedLeft && (left = indicies[0]);
      isUndefinedRight && (right = indicies[1]);
    }

    for (var i = left; i >= 0; --i) {
      var frame = this.getFrame(times[i]);

      if (frame.has.apply(frame, properties)) {
        prevTime = times[i];
        prevFrame = frame;
        break;
      }
    }

    var prevValue = prevFrame && prevFrame.raw.apply(prevFrame, properties);

    if (isAccurate && !isRole([properties[0]])) {
      return prevTime === time ? prevValue : undefined;
    }

    if (usePrevValue) {
      return prevValue;
    }

    for (var i = right; i < length; ++i) {
      var frame = this.getFrame(times[i]);

      if (frame.has.apply(frame, properties)) {
        nextTime = times[i];
        nextFrame = frame;
        break;
      }
    }

    var nextValue = nextFrame && nextFrame.raw.apply(nextFrame, properties);

    if (!prevFrame || (0, _utils.isUndefined)(prevValue)) {
      return nextValue;
    }

    if (!nextFrame || (0, _utils.isUndefined)(nextValue) || prevValue === nextValue) {
      return prevValue;
    }

    return dotValue(time, Math.max(prevTime, 0), nextTime, prevValue, nextValue, easing);
  };

  __proto._toKeyframes = function (duration, states, direction) {
    var _this = this;

    var frames = {};
    var times = this.times.slice();

    if (!times.length) {
      return "";
    }

    var originalDuration = this.getDuration();
    !this.getFrame(0) && times.unshift(0);
    !this.getFrame(originalDuration) && times.push(originalDuration);
    var entries = getEntries(times, states);
    var lastEntry = entries[entries.length - 1]; // end delay time

    lastEntry[0] < duration && addEntry(entries, duration, lastEntry[1]);
    var prevTime = -1;
    return entries.map(function (_a) {
      var time = _a[0],
          keytime = _a[1];

      if (!frames[keytime]) {
        frames[keytime] = (!_this.hasFrame(keytime) || keytime === 0 || keytime === originalDuration ? _this.getNowFrame(keytime) : _this.getNowFrame(keytime, 0, true)).toCSS();
      }

      var frameTime = time / duration * 100;

      if (frameTime - prevTime < THRESHOLD) {
        frameTime += THRESHOLD;
      }

      prevTime = frameTime;
      return Math.min(frameTime, 100) + "%{\n                " + (time === 0 && !isDirectionReverse(0, 1, direction) ? "" : frames[keytime]) + "\n            }";
    }).join("");
  };

  __proto.updateFrameOrders = function () {
    var nameMap = this.nameMap.orderMap;
    this.forEach(function (frame) {
      frame.setOrderObject(nameMap);
    });
  };

  return SceneItem;
}(Animator);
/**
 * manage sceneItems and play Scene.
 * @extends Animator
 * @sort 1
 */


exports.SceneItem = SceneItem;

var Scene = /*#__PURE__*/function (_super) {
  __extends(Scene, _super);
  /**
  * @param - properties
  * @param - options
  * @example
  const scene = new Scene({
    item1: {
      0: {
        display: "none",
      },
      1: {
        display: "block",
        opacity: 0,
      },
      2: {
        opacity: 1,
      },
    },
    item2: {
      2: {
        opacity: 1,
      },
    }
  });
    */


  function Scene(properties, options) {
    var _this = _super.call(this) || this;

    _this.items = {};
    _this.orderMap = new _orderMap.default(NAME_SEPARATOR);

    _this.load(properties, options);

    return _this;
  }

  var __proto = Scene.prototype;

  __proto.getDuration = function () {
    var time = 0;
    this.forEach(function (item) {
      time = Math.max(time, item.getTotalDuration() / item.getPlaySpeed());
    });
    return time || this.state[DURATION];
  };

  __proto.setDuration = function (duration) {
    var items = this.items;
    var sceneDuration = this.getDuration();

    if (duration === 0 || !isFinite(sceneDuration)) {
      return this;
    }

    if (sceneDuration === 0) {
      this.forEach(function (item) {
        item.setDuration(duration);
      });
    } else {
      var ratio_1 = duration / sceneDuration;
      this.forEach(function (item) {
        item.setDelay(item.getDelay() * ratio_1);
        item.setDuration(item.getDuration() * ratio_1);
      });
    }

    _super.prototype.setDuration.call(this, duration);

    return this;
  };
  /**
  * get item in scene by name
  * @param - The item's name
  * @return {Scene | SceneItem} item
  * @example
  const item = scene.getItem("item1")
  */


  __proto.getItem = function (name) {
    return this.items[name];
  };
  /**
  * create item in scene
  * @param {} name - name of item to create
  * @param {} options - The option object of SceneItem
  * @return {} Newly created item
  * @example
  const item = scene.newItem("item1")
  */


  __proto.newItem = function (name, options) {
    if (options === void 0) {
      options = {};
    }

    if (this.items[name]) {
      return this.items[name];
    }

    var item = new SceneItem();
    this.setItem(name, item);
    item.setOptions(options);
    return item;
  };
  /**
  * remove item in scene
  * @param - name of item to remove
  * @return  An instance itself
  * @example
  const item = scene.newItem("item1")
   scene.removeItem("item1");
  */


  __proto.removeItem = function (name) {
    delete this.items[name];
    this.orderMap.remove([name]);
    return this;
  };
  /**
  * add a sceneItem to the scene
  * @param - name of item to create
  * @param - sceneItem
  * @example
  const item = scene.newItem("item1")
  */


  __proto.setItem = function (name, item) {
    item.setId(name);
    this.items[name] = item;
    this.orderMap.add([name]);
    return this;
  };
  /**
  * Get the current computed frames. (If needUpdate is true, get a new computed frames, not the temp that has already been saved.)
  */


  __proto.getCurrentFrames = function (needUpdate, parentEasing) {
    var easing = this.getEasing() || parentEasing;
    var frames = {};
    this.forEach(function (item) {
      var id = item.getId();

      if (isScene(item)) {
        frames[id] = item.getCurrentFrames(needUpdate, easing);
      } else {
        frames[id] = item.getCurrentFrame(needUpdate, easing);
      }
    });
    this.temp = frames;
    return frames;
  };
  /**
  * Get the current flatted computed frames. (If needUpdate is true, get a new computed frames, not the temp that has already been saved.)
  * If there is a scene in the scene, you can get a flatted frame map.
  * @example
  * import Scene, { NAME_SEPARATOR } from "scenejs";
  *
  * {
  *   "a": Frame,
  *   "b": {
  *     "b1": Frame,
  *     "b2": Frame,
  *   },
  * }
  * const frames = scene.getCurrentFrames();
  * {
  *   "a": Frame,
  *   "b_///_b1": Frame,
  *   "b_///_b2": Frame,
  * }
  * const frames = scene.getCurrentFlattedFrames();
  *
  */


  __proto.getCurrentFlattedFrames = function (needUpdate, parentEasing) {
    var frames = this.getCurrentFrames(needUpdate, parentEasing);
    return flatSceneObject(frames, NAME_SEPARATOR);
  };

  __proto.setTime = function (time, isTick, isParent, parentEasing) {
    _super.prototype.setTime.call(this, time, isTick, isParent);

    var iterationTime = this.getIterationTime();
    var easing = this.getEasing() || parentEasing;
    this.forEach(function (item) {
      item.setTime(iterationTime * item.getPlaySpeed() - item.getDelay(), isTick, true, easing);
    });
    var frames = this.getCurrentFrames(false, parentEasing);
    /**
     * This event is fired when timeupdate and animate.
     * @event Scene#animate
     * @param {object} param The object of data to be sent to an event.
     * @param {number} param.currentTime The total time that the animator is running.
     * @param {number} param.time The iteration time during duration that the animator is running.
     * @param {object} param.frames frames of that time.
     * @example
    const scene = new Scene({
    a: {
    0: {
        opacity: 0,
    },
    1: {
        opacity: 1,
    }
    },
    b: {
    0: {
        opacity: 0,
    },
    1: {
        opacity: 1,
    }
    }
    }).on("animate", e => {
    console.log(e.frames);
    // {a: Frame, b: Frame}
    console.log(e.frames.a.get("opacity"));
    });
         */

    this.trigger("animate", {
      frames: frames,
      currentTime: this.getTime(),
      time: iterationTime
    });
    return this;
  };
  /**
   * executes a provided function once for each scene item.
   * @param - Function to execute for each element, taking three arguments
   * @return {Scene} An instance itself
   */


  __proto.forEach = function (func) {
    var items = this.items;
    this.getOrders().forEach(function (id, index) {
      func(items[id], id, index, items);
    });
    return this;
  };

  __proto.toCSS = function (playCondition, duration, parentStates) {
    if (duration === void 0) {
      duration = this.getDuration();
    }

    if (parentStates === void 0) {
      parentStates = [];
    }

    var totalDuration = !duration || !isFinite(duration) ? 0 : duration;
    var styles = [];
    var state = this.state;
    state[DURATION] = this.getDuration();
    this.forEach(function (item) {
      styles.push(item.toCSS(playCondition, totalDuration, parentStates.concat(state)));
    });
    return styles.join("");
  };
  /**
   * Export the CSS of the items to the style.
   * @param - Add a selector or className to play.
   * @return {Scene} An instance itself
   */


  __proto.exportCSS = function (playCondition, duration, parentStates) {
    var css = this.toCSS(playCondition, duration, parentStates);

    if (!parentStates || !parentStates.length) {
      if (this.styledInjector) {
        this.styledInjector.destroy();
        this.styledInjector = null;
      }

      this.styled = (0, _cssStyled.default)(css);
      this.styledInjector = this.styled.inject(this.getAnimationElement(), {
        original: true
      }); // && exportCSS(getRealId(this), css);
    }

    return this;
  };

  __proto.append = function (item) {
    item.setDelay(item.getDelay() + this.getDuration());
    this.setItem(getRealId(item), item);
  };

  __proto.pauseCSS = function () {
    return this.forEach(function (item) {
      item.pauseCSS();
    });
  };

  __proto.pause = function () {
    _super.prototype.pause.call(this);

    isPausedCSS(this) && this.pauseCSS();
    this.forEach(function (item) {
      item.pause();
    });
    return this;
  };

  __proto.endCSS = function () {
    this.forEach(function (item) {
      item.endCSS();
    });
    setPlayCSS(this, false);
  };

  __proto.end = function () {
    isEndedCSS(this) && this.endCSS();

    _super.prototype.end.call(this);

    return this;
  };
  /**
  * get item orders
  * @example
  scene.getOrders() // => ["item1", "item2"]
  */


  __proto.getOrders = function () {
    return this.orderMap.get([]) || [];
  };
  /**
    * set item orders
    * @param - orders
    * @example
    frame.setOrders(["item2", "item1"]) // => ["item2", "item1"]
    */


  __proto.setOrders = function (orders) {
    return this.orderMap.set([], orders);
  };

  __proto.getAnimationElement = function () {
    var animtionElement;
    this.forEach(function (item) {
      var el = item.getAnimationElement();
      !animtionElement && (animtionElement = el);
    });
    return animtionElement;
  };

  __proto.addPlayClass = function (isPaused, playClassName, properties) {
    if (properties === void 0) {
      properties = {};
    }

    var animtionElement;
    this.forEach(function (item) {
      var el = item.addPlayClass(isPaused, playClassName, properties);
      !animtionElement && (animtionElement = el);
    });
    return animtionElement;
  };
  /**
  * Play using the css animation and keyframes.
  * @param - Check if you want to export css.
  * @param [playClassName="startAnimation"] - Add a class name to play.
  * @param - The shorthand properties for six of the animation properties.
  * @return {Scene} An instance itself
  * @see {@link https://www.w3schools.com/cssref/css3_pr_animation.asp}
  * @example
  scene.playCSS();
  scene.playCSS(false, {
  direction: "reverse",
  fillMode: "forwards",
  });
  */


  __proto.playCSS = function (isExportCSS, playClassName, properties) {
    if (isExportCSS === void 0) {
      isExportCSS = true;
    }

    if (properties === void 0) {
      properties = {};
    }

    playCSS(this, isExportCSS, playClassName, properties);
    return this;
  };
  /**
    * Set properties to the Scene.
    * @param - properties
    * @return An instance itself
    * @example
  scene.set({
  ".a": {
      0: {
          opacity: 0,
      },
      1: {
          opacity: 1,
      },
  },
  });
  // 0
  console.log(scene.getItem(".a").get(0, "opacity"));
  // 1
  console.log(scene.getItem(".a").get(1, "opacity"));
    */


  __proto.set = function (properties) {
    this.load(properties);
    return this;
  };
  /**
    * Clear All Items
    * @return {Scene} An instance itself
    */


  __proto.clear = function () {
    this.finish();
    this.items = {};
    this.orderMap = new _orderMap.default(NAME_SEPARATOR);

    if (this.styledInjector) {
      this.styledInjector.destroy();
    }

    this.styled = null;
    this.styledInjector = null;
  };

  __proto.load = function (properties, options) {
    if (properties === void 0) {
      properties = {};
    }

    if (options === void 0) {
      options = properties.options;
    }

    if (!properties) {
      return this;
    }

    var selector = options && options[SELECTOR] || this.state[SELECTOR];

    for (var name in properties) {
      if (name === "options") {
        continue;
      }

      var object = properties[name];
      var item = void 0;

      if (object instanceof Scene || object instanceof SceneItem) {
        this.setItem(name, object);
        item = object;
      } else if ((0, _utils.isFunction)(object) && selector) {
        var elements = _utils.IS_WINDOW ? (0, _utils.$)("" + ((0, _utils.isFunction)(selector) ? selector(name) : name), true) : [];
        var length = elements.length;
        var scene = new Scene();

        for (var i = 0; i < length; ++i) {
          scene.newItem(i).setId().setElement(elements[i]).load(object(i, elements[i]));
        }

        this.setItem(name, scene);
        continue;
      } else {
        item = this.newItem(name);
        item.load(object);
      }

      selector && item.setSelector(selector);
    }

    this.setOptions(options);
  };

  __proto.setOptions = function (options) {
    if (options === void 0) {
      options = {};
    }

    _super.prototype.setOptions.call(this, options);

    var selector = options.selector;

    if (selector) {
      this.state[SELECTOR] = selector;
    }

    return this;
  };

  __proto.setSelector = function (target) {
    var state = this.state;
    var selector = target || state[SELECTOR];
    state[SELECTOR] = selector;
    var isItFunction = (0, _utils.isFunction)(target);

    if (selector) {
      this.forEach(function (item, name) {
        item.setSelector(isItFunction ? target(name) : selector);
      });
    }

    return this;
  };

  __proto.start = function (delay) {
    if (delay === void 0) {
      delay = this.state[DELAY];
    }

    var result = _super.prototype.start.call(this, delay);

    if (result) {
      this.forEach(function (item) {
        item.start(0);
      });
    } else {
      this.forEach(function (item) {
        item.setPlayState(RUNNING);
      });
    }

    return result;
  };
  /**
  * version info
  * @type {string}
  * @example
  * Scene.VERSION // 1.6.0
  */


  Scene.VERSION = "1.6.0";
  return Scene;
}(Animator);

function animate(properties, options) {
  return new Scene(properties, options).play();
}

function animateItem(properties, options) {
  return new SceneItem(properties, options).play();
}

var _default = Scene;
exports.default = _default;
},{"@daybrush/utils":"HyW1","@scena/event-emitter":"cKDB","order-map":"JpZQ","css-styled":"ON0b"}],"qWa8":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = Component;
exports.cloneElement = cloneElement;
exports.createRef = createRef;
exports.default = void 0;
exports.createElement = exports.h = h;
exports.options = void 0;
exports.render = render;
exports.rerender = rerender;

var VNode = function VNode() {};

var options = {};
exports.options = options;
var stack = [];
var EMPTY_CHILDREN = [];

function h(nodeName, attributes) {
  var children = EMPTY_CHILDREN,
      lastSimple,
      child,
      simple,
      i;

  for (i = arguments.length; i-- > 2;) {
    stack.push(arguments[i]);
  }

  if (attributes && attributes.children != null) {
    if (!stack.length) stack.push(attributes.children);
    delete attributes.children;
  }

  while (stack.length) {
    if ((child = stack.pop()) && child.pop !== undefined) {
      for (i = child.length; i--;) {
        stack.push(child[i]);
      }
    } else {
      if (typeof child === 'boolean') child = null;

      if (simple = typeof nodeName !== 'function') {
        if (child == null) child = '';else if (typeof child === 'number') child = String(child);else if (typeof child !== 'string') simple = false;
      }

      if (simple && lastSimple) {
        children[children.length - 1] += child;
      } else if (children === EMPTY_CHILDREN) {
        children = [child];
      } else {
        children.push(child);
      }

      lastSimple = simple;
    }
  }

  var p = new VNode();
  p.nodeName = nodeName;
  p.children = children;
  p.attributes = attributes == null ? undefined : attributes;
  p.key = attributes == null ? undefined : attributes.key;
  if (options.vnode !== undefined) options.vnode(p);
  return p;
}

function extend(obj, props) {
  for (var i in props) {
    obj[i] = props[i];
  }

  return obj;
}

function applyRef(ref, value) {
  if (ref) {
    if (typeof ref == 'function') ref(value);else ref.current = value;
  }
}

var defer = typeof Promise == 'function' ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;

function cloneElement(vnode, props) {
  return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
}

var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
var items = [];

function enqueueRender(component) {
  if (!component._dirty && (component._dirty = true) && items.push(component) == 1) {
    (options.debounceRendering || defer)(rerender);
  }
}

function rerender() {
  var p;

  while (p = items.pop()) {
    if (p._dirty) renderComponent(p);
  }
}

function isSameNodeType(node, vnode, hydrating) {
  if (typeof vnode === 'string' || typeof vnode === 'number') {
    return node.splitText !== undefined;
  }

  if (typeof vnode.nodeName === 'string') {
    return !node._componentConstructor && isNamedNode(node, vnode.nodeName);
  }

  return hydrating || node._componentConstructor === vnode.nodeName;
}

function isNamedNode(node, nodeName) {
  return node.normalizedNodeName === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
}

function getNodeProps(vnode) {
  var props = extend({}, vnode.attributes);
  props.children = vnode.children;
  var defaultProps = vnode.nodeName.defaultProps;

  if (defaultProps !== undefined) {
    for (var i in defaultProps) {
      if (props[i] === undefined) {
        props[i] = defaultProps[i];
      }
    }
  }

  return props;
}

function createNode(nodeName, isSvg) {
  var node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName);
  node.normalizedNodeName = nodeName;
  return node;
}

function removeNode(node) {
  var parentNode = node.parentNode;
  if (parentNode) parentNode.removeChild(node);
}

function setAccessor(node, name, old, value, isSvg) {
  if (name === 'className') name = 'class';

  if (name === 'key') {} else if (name === 'ref') {
    applyRef(old, null);
    applyRef(value, node);
  } else if (name === 'class' && !isSvg) {
    node.className = value || '';
  } else if (name === 'style') {
    if (!value || typeof value === 'string' || typeof old === 'string') {
      node.style.cssText = value || '';
    }

    if (value && typeof value === 'object') {
      if (typeof old !== 'string') {
        for (var i in old) {
          if (!(i in value)) node.style[i] = '';
        }
      }

      for (var i in value) {
        node.style[i] = typeof value[i] === 'number' && IS_NON_DIMENSIONAL.test(i) === false ? value[i] + 'px' : value[i];
      }
    }
  } else if (name === 'dangerouslySetInnerHTML') {
    if (value) node.innerHTML = value.__html || '';
  } else if (name[0] == 'o' && name[1] == 'n') {
    var useCapture = name !== (name = name.replace(/Capture$/, ''));
    name = name.toLowerCase().substring(2);

    if (value) {
      if (!old) node.addEventListener(name, eventProxy, useCapture);
    } else {
      node.removeEventListener(name, eventProxy, useCapture);
    }

    (node._listeners || (node._listeners = {}))[name] = value;
  } else if (name !== 'list' && name !== 'type' && !isSvg && name in node) {
    try {
      node[name] = value == null ? '' : value;
    } catch (e) {}

    if ((value == null || value === false) && name != 'spellcheck') node.removeAttribute(name);
  } else {
    var ns = isSvg && name !== (name = name.replace(/^xlink:?/, ''));

    if (value == null || value === false) {
      if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase());else node.removeAttribute(name);
    } else if (typeof value !== 'function') {
      if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value);else node.setAttribute(name, value);
    }
  }
}

function eventProxy(e) {
  return this._listeners[e.type](options.event && options.event(e) || e);
}

var mounts = [];
var diffLevel = 0;
var isSvgMode = false;
var hydrating = false;

function flushMounts() {
  var c;

  while (c = mounts.shift()) {
    if (options.afterMount) options.afterMount(c);
    if (c.componentDidMount) c.componentDidMount();
  }
}

function diff(dom, vnode, context, mountAll, parent, componentRoot) {
  if (!diffLevel++) {
    isSvgMode = parent != null && parent.ownerSVGElement !== undefined;
    hydrating = dom != null && !('__preactattr_' in dom);
  }

  var ret = idiff(dom, vnode, context, mountAll, componentRoot);
  if (parent && ret.parentNode !== parent) parent.appendChild(ret);

  if (! --diffLevel) {
    hydrating = false;
    if (!componentRoot) flushMounts();
  }

  return ret;
}

function idiff(dom, vnode, context, mountAll, componentRoot) {
  var out = dom,
      prevSvgMode = isSvgMode;
  if (vnode == null || typeof vnode === 'boolean') vnode = '';

  if (typeof vnode === 'string' || typeof vnode === 'number') {
    if (dom && dom.splitText !== undefined && dom.parentNode && (!dom._component || componentRoot)) {
      if (dom.nodeValue != vnode) {
        dom.nodeValue = vnode;
      }
    } else {
      out = document.createTextNode(vnode);

      if (dom) {
        if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
        recollectNodeTree(dom, true);
      }
    }

    out['__preactattr_'] = true;
    return out;
  }

  var vnodeName = vnode.nodeName;

  if (typeof vnodeName === 'function') {
    return buildComponentFromVNode(dom, vnode, context, mountAll);
  }

  isSvgMode = vnodeName === 'svg' ? true : vnodeName === 'foreignObject' ? false : isSvgMode;
  vnodeName = String(vnodeName);

  if (!dom || !isNamedNode(dom, vnodeName)) {
    out = createNode(vnodeName, isSvgMode);

    if (dom) {
      while (dom.firstChild) {
        out.appendChild(dom.firstChild);
      }

      if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
      recollectNodeTree(dom, true);
    }
  }

  var fc = out.firstChild,
      props = out['__preactattr_'],
      vchildren = vnode.children;

  if (props == null) {
    props = out['__preactattr_'] = {};

    for (var a = out.attributes, i = a.length; i--;) {
      props[a[i].name] = a[i].value;
    }
  }

  if (!hydrating && vchildren && vchildren.length === 1 && typeof vchildren[0] === 'string' && fc != null && fc.splitText !== undefined && fc.nextSibling == null) {
    if (fc.nodeValue != vchildren[0]) {
      fc.nodeValue = vchildren[0];
    }
  } else if (vchildren && vchildren.length || fc != null) {
    innerDiffNode(out, vchildren, context, mountAll, hydrating || props.dangerouslySetInnerHTML != null);
  }

  diffAttributes(out, vnode.attributes, props);
  isSvgMode = prevSvgMode;
  return out;
}

function innerDiffNode(dom, vchildren, context, mountAll, isHydrating) {
  var originalChildren = dom.childNodes,
      children = [],
      keyed = {},
      keyedLen = 0,
      min = 0,
      len = originalChildren.length,
      childrenLen = 0,
      vlen = vchildren ? vchildren.length : 0,
      j,
      c,
      f,
      vchild,
      child;

  if (len !== 0) {
    for (var i = 0; i < len; i++) {
      var _child = originalChildren[i],
          props = _child['__preactattr_'],
          key = vlen && props ? _child._component ? _child._component.__key : props.key : null;

      if (key != null) {
        keyedLen++;
        keyed[key] = _child;
      } else if (props || (_child.splitText !== undefined ? isHydrating ? _child.nodeValue.trim() : true : isHydrating)) {
        children[childrenLen++] = _child;
      }
    }
  }

  if (vlen !== 0) {
    for (var i = 0; i < vlen; i++) {
      vchild = vchildren[i];
      child = null;
      var key = vchild.key;

      if (key != null) {
        if (keyedLen && keyed[key] !== undefined) {
          child = keyed[key];
          keyed[key] = undefined;
          keyedLen--;
        }
      } else if (min < childrenLen) {
        for (j = min; j < childrenLen; j++) {
          if (children[j] !== undefined && isSameNodeType(c = children[j], vchild, isHydrating)) {
            child = c;
            children[j] = undefined;
            if (j === childrenLen - 1) childrenLen--;
            if (j === min) min++;
            break;
          }
        }
      }

      child = idiff(child, vchild, context, mountAll);
      f = originalChildren[i];

      if (child && child !== dom && child !== f) {
        if (f == null) {
          dom.appendChild(child);
        } else if (child === f.nextSibling) {
          removeNode(f);
        } else {
          dom.insertBefore(child, f);
        }
      }
    }
  }

  if (keyedLen) {
    for (var i in keyed) {
      if (keyed[i] !== undefined) recollectNodeTree(keyed[i], false);
    }
  }

  while (min <= childrenLen) {
    if ((child = children[childrenLen--]) !== undefined) recollectNodeTree(child, false);
  }
}

function recollectNodeTree(node, unmountOnly) {
  var component = node._component;

  if (component) {
    unmountComponent(component);
  } else {
    if (node['__preactattr_'] != null) applyRef(node['__preactattr_'].ref, null);

    if (unmountOnly === false || node['__preactattr_'] == null) {
      removeNode(node);
    }

    removeChildren(node);
  }
}

function removeChildren(node) {
  node = node.lastChild;

  while (node) {
    var next = node.previousSibling;
    recollectNodeTree(node, true);
    node = next;
  }
}

function diffAttributes(dom, attrs, old) {
  var name;

  for (name in old) {
    if (!(attrs && attrs[name] != null) && old[name] != null) {
      setAccessor(dom, name, old[name], old[name] = undefined, isSvgMode);
    }
  }

  for (name in attrs) {
    if (name !== 'children' && name !== 'innerHTML' && (!(name in old) || attrs[name] !== (name === 'value' || name === 'checked' ? dom[name] : old[name]))) {
      setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
    }
  }
}

var recyclerComponents = [];

function createComponent(Ctor, props, context) {
  var inst,
      i = recyclerComponents.length;

  if (Ctor.prototype && Ctor.prototype.render) {
    inst = new Ctor(props, context);
    Component.call(inst, props, context);
  } else {
    inst = new Component(props, context);
    inst.constructor = Ctor;
    inst.render = doRender;
  }

  while (i--) {
    if (recyclerComponents[i].constructor === Ctor) {
      inst.nextBase = recyclerComponents[i].nextBase;
      recyclerComponents.splice(i, 1);
      return inst;
    }
  }

  return inst;
}

function doRender(props, state, context) {
  return this.constructor(props, context);
}

function setComponentProps(component, props, renderMode, context, mountAll) {
  if (component._disable) return;
  component._disable = true;
  component.__ref = props.ref;
  component.__key = props.key;
  delete props.ref;
  delete props.key;

  if (typeof component.constructor.getDerivedStateFromProps === 'undefined') {
    if (!component.base || mountAll) {
      if (component.componentWillMount) component.componentWillMount();
    } else if (component.componentWillReceiveProps) {
      component.componentWillReceiveProps(props, context);
    }
  }

  if (context && context !== component.context) {
    if (!component.prevContext) component.prevContext = component.context;
    component.context = context;
  }

  if (!component.prevProps) component.prevProps = component.props;
  component.props = props;
  component._disable = false;

  if (renderMode !== 0) {
    if (renderMode === 1 || options.syncComponentUpdates !== false || !component.base) {
      renderComponent(component, 1, mountAll);
    } else {
      enqueueRender(component);
    }
  }

  applyRef(component.__ref, component);
}

function renderComponent(component, renderMode, mountAll, isChild) {
  if (component._disable) return;
  var props = component.props,
      state = component.state,
      context = component.context,
      previousProps = component.prevProps || props,
      previousState = component.prevState || state,
      previousContext = component.prevContext || context,
      isUpdate = component.base,
      nextBase = component.nextBase,
      initialBase = isUpdate || nextBase,
      initialChildComponent = component._component,
      skip = false,
      snapshot = previousContext,
      rendered,
      inst,
      cbase;

  if (component.constructor.getDerivedStateFromProps) {
    state = extend(extend({}, state), component.constructor.getDerivedStateFromProps(props, state));
    component.state = state;
  }

  if (isUpdate) {
    component.props = previousProps;
    component.state = previousState;
    component.context = previousContext;

    if (renderMode !== 2 && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === false) {
      skip = true;
    } else if (component.componentWillUpdate) {
      component.componentWillUpdate(props, state, context);
    }

    component.props = props;
    component.state = state;
    component.context = context;
  }

  component.prevProps = component.prevState = component.prevContext = component.nextBase = null;
  component._dirty = false;

  if (!skip) {
    rendered = component.render(props, state, context);

    if (component.getChildContext) {
      context = extend(extend({}, context), component.getChildContext());
    }

    if (isUpdate && component.getSnapshotBeforeUpdate) {
      snapshot = component.getSnapshotBeforeUpdate(previousProps, previousState);
    }

    var childComponent = rendered && rendered.nodeName,
        toUnmount,
        base;

    if (typeof childComponent === 'function') {
      var childProps = getNodeProps(rendered);
      inst = initialChildComponent;

      if (inst && inst.constructor === childComponent && childProps.key == inst.__key) {
        setComponentProps(inst, childProps, 1, context, false);
      } else {
        toUnmount = inst;
        component._component = inst = createComponent(childComponent, childProps, context);
        inst.nextBase = inst.nextBase || nextBase;
        inst._parentComponent = component;
        setComponentProps(inst, childProps, 0, context, false);
        renderComponent(inst, 1, mountAll, true);
      }

      base = inst.base;
    } else {
      cbase = initialBase;
      toUnmount = initialChildComponent;

      if (toUnmount) {
        cbase = component._component = null;
      }

      if (initialBase || renderMode === 1) {
        if (cbase) cbase._component = null;
        base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, true);
      }
    }

    if (initialBase && base !== initialBase && inst !== initialChildComponent) {
      var baseParent = initialBase.parentNode;

      if (baseParent && base !== baseParent) {
        baseParent.replaceChild(base, initialBase);

        if (!toUnmount) {
          initialBase._component = null;
          recollectNodeTree(initialBase, false);
        }
      }
    }

    if (toUnmount) {
      unmountComponent(toUnmount);
    }

    component.base = base;

    if (base && !isChild) {
      var componentRef = component,
          t = component;

      while (t = t._parentComponent) {
        (componentRef = t).base = base;
      }

      base._component = componentRef;
      base._componentConstructor = componentRef.constructor;
    }
  }

  if (!isUpdate || mountAll) {
    mounts.push(component);
  } else if (!skip) {
    if (component.componentDidUpdate) {
      component.componentDidUpdate(previousProps, previousState, snapshot);
    }

    if (options.afterUpdate) options.afterUpdate(component);
  }

  while (component._renderCallbacks.length) {
    component._renderCallbacks.pop().call(component);
  }

  if (!diffLevel && !isChild) flushMounts();
}

function buildComponentFromVNode(dom, vnode, context, mountAll) {
  var c = dom && dom._component,
      originalComponent = c,
      oldDom = dom,
      isDirectOwner = c && dom._componentConstructor === vnode.nodeName,
      isOwner = isDirectOwner,
      props = getNodeProps(vnode);

  while (c && !isOwner && (c = c._parentComponent)) {
    isOwner = c.constructor === vnode.nodeName;
  }

  if (c && isOwner && (!mountAll || c._component)) {
    setComponentProps(c, props, 3, context, mountAll);
    dom = c.base;
  } else {
    if (originalComponent && !isDirectOwner) {
      unmountComponent(originalComponent);
      dom = oldDom = null;
    }

    c = createComponent(vnode.nodeName, props, context);

    if (dom && !c.nextBase) {
      c.nextBase = dom;
      oldDom = null;
    }

    setComponentProps(c, props, 1, context, mountAll);
    dom = c.base;

    if (oldDom && dom !== oldDom) {
      oldDom._component = null;
      recollectNodeTree(oldDom, false);
    }
  }

  return dom;
}

function unmountComponent(component) {
  if (options.beforeUnmount) options.beforeUnmount(component);
  var base = component.base;
  component._disable = true;
  if (component.componentWillUnmount) component.componentWillUnmount();
  component.base = null;
  var inner = component._component;

  if (inner) {
    unmountComponent(inner);
  } else if (base) {
    if (base['__preactattr_'] != null) applyRef(base['__preactattr_'].ref, null);
    component.nextBase = base;
    removeNode(base);
    recyclerComponents.push(component);
    removeChildren(base);
  }

  applyRef(component.__ref, null);
}

function Component(props, context) {
  this._dirty = true;
  this.context = context;
  this.props = props;
  this.state = this.state || {};
  this._renderCallbacks = [];
}

extend(Component.prototype, {
  setState: function setState(state, callback) {
    if (!this.prevState) this.prevState = this.state;
    this.state = extend(extend({}, this.state), typeof state === 'function' ? state(this.state, this.props) : state);
    if (callback) this._renderCallbacks.push(callback);
    enqueueRender(this);
  },
  forceUpdate: function forceUpdate(callback) {
    if (callback) this._renderCallbacks.push(callback);
    renderComponent(this, 2);
  },
  render: function render() {}
});

function render(vnode, parent, merge) {
  return diff(merge, vnode, {}, false, parent, false);
}

function createRef() {
  return {};
}

var preact = {
  h: h,
  createElement: h,
  cloneElement: cloneElement,
  createRef: createRef,
  Component: Component,
  render: render,
  rerender: rerender,
  options: options
};
var _default = preact;
exports.default = _default;
},{}],"bFv7":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$ = $;
exports.UNDEFINED = exports.TRANSFORM = exports.STRING = exports.RGBA = exports.RGB = exports.PROPERTY = exports.OPEN_CLOSED_CHARACTER = exports.OBJECT = exports.NUMBER = exports.KEYFRAMES = exports.IS_WINDOW = exports.HSLA = exports.HSL = exports.FUNCTION = exports.FILTER = exports.COLOR_MODELS = exports.ARRAY = exports.ANIMATION = void 0;
exports.addClass = addClass;
exports.addEvent = addEvent;
exports.camelize = camelize;
exports.cancelAnimationFrame = void 0;
exports.cutHex = cutHex;
exports.decamelize = decamelize;
exports.document = void 0;
exports.dot = dot;
exports.find = find;
exports.findIndex = findIndex;
exports.fromCSS = fromCSS;
exports.getCrossBrowserProperty = void 0;
exports.hasClass = hasClass;
exports.hexToRGBA = hexToRGBA;
exports.hslToRGBA = hslToRGBA;
exports.isArray = isArray;
exports.isFunction = isFunction;
exports.isObject = isObject;
exports.isString = isString;
exports.isUndefined = isUndefined;
exports.now = now;
exports.removeClass = removeClass;
exports.removeEvent = removeEvent;
exports.requestAnimationFrame = void 0;
exports.splitBracket = splitBracket;
exports.splitComma = splitComma;
exports.splitSpace = splitSpace;
exports.splitText = splitText;
exports.splitUnit = splitUnit;
exports.stringToRGBA = stringToRGBA;
exports.toArray = toArray;
exports.toFullHex = toFullHex;

/*
Copyright (c) 2018 Daybrush
@name: @daybrush/utils
license: MIT
author: Daybrush
repository: https://github.com/daybrush/utils
@version 0.10.5
*/

/**
* @namespace
* @name Consts
*/

/**
* get string "rgb"
* @memberof Color
* @example
import {RGB} from "@daybrush/utils";

console.log(RGB); // "rgb"
*/
var RGB = "rgb";
/**
* get string "rgba"
* @memberof Color
* @example
import {RGBA} from "@daybrush/utils";

console.log(RGBA); // "rgba"
*/

exports.RGB = RGB;
var RGBA = "rgba";
/**
* get string "hsl"
* @memberof Color
* @example
import {HSL} from "@daybrush/utils";

console.log(HSL); // "hsl"
*/

exports.RGBA = RGBA;
var HSL = "hsl";
/**
* get string "hsla"
* @memberof Color
* @example
import {HSLA} from "@daybrush/utils";

console.log(HSLA); // "hsla"
*/

exports.HSL = HSL;
var HSLA = "hsla";
/**
* gets an array of color models.
* @memberof Color
* @example
import {COLOR_MODELS} from "@daybrush/utils";

console.log(COLOR_MODELS); // ["rgb", "rgba", "hsl", "hsla"];
*/

exports.HSLA = HSLA;
var COLOR_MODELS = [RGB, RGBA, HSL, HSLA];
/**
* get string "function"
* @memberof Consts
* @example
import {FUNCTION} from "@daybrush/utils";

console.log(FUNCTION); // "function"
*/

exports.COLOR_MODELS = COLOR_MODELS;
var FUNCTION = "function";
/**
* get string "property"
* @memberof Consts
* @example
import {PROPERTY} from "@daybrush/utils";

console.log(PROPERTY); // "property"
*/

exports.FUNCTION = FUNCTION;
var PROPERTY = "property";
/**
* get string "array"
* @memberof Consts
* @example
import {ARRAY} from "@daybrush/utils";

console.log(ARRAY); // "array"
*/

exports.PROPERTY = PROPERTY;
var ARRAY = "array";
/**
* get string "object"
* @memberof Consts
* @example
import {OBJECT} from "@daybrush/utils";

console.log(OBJECT); // "object"
*/

exports.ARRAY = ARRAY;
var OBJECT = "object";
/**
* get string "string"
* @memberof Consts
* @example
import {STRING} from "@daybrush/utils";

console.log(STRING); // "string"
*/

exports.OBJECT = OBJECT;
var STRING = "string";
/**
* get string "number"
* @memberof Consts
* @example
import {NUMBER} from "@daybrush/utils";

console.log(NUMBER); // "number"
*/

exports.STRING = STRING;
var NUMBER = "number";
/**
* get string "undefined"
* @memberof Consts
* @example
import {UNDEFINED} from "@daybrush/utils";

console.log(UNDEFINED); // "undefined"
*/

exports.NUMBER = NUMBER;
var UNDEFINED = "undefined";
/**
* Check whether the environment is window or node.js.
* @memberof Consts
* @example
import {IS_WINDOW} from "@daybrush/utils";

console.log(IS_WINDOW); // false in node.js
console.log(IS_WINDOW); // true in browser
*/

exports.UNDEFINED = UNDEFINED;
var IS_WINDOW = typeof window !== UNDEFINED;
/**
* Check whether the environment is window or node.js.
* @memberof Consts
* @name document
* @example
import {IS_WINDOW} from "@daybrush/utils";

console.log(IS_WINDOW); // false in node.js
console.log(IS_WINDOW); // true in browser
*/

exports.IS_WINDOW = IS_WINDOW;
var doc = typeof document !== UNDEFINED && document;
exports.document = doc;
var prefixes = ["webkit", "ms", "moz", "o"];
/**
 * @namespace CrossBrowser
 */

/**
* Get a CSS property with a vendor prefix that supports cross browser.
* @function
* @param {string} property - A CSS property
* @return {string} CSS property with cross-browser vendor prefix
* @memberof CrossBrowser
* @example
import {getCrossBrowserProperty} from "@daybrush/utils";

console.log(getCrossBrowserProperty("transform")); // "transform", "-ms-transform", "-webkit-transform"
console.log(getCrossBrowserProperty("filter")); // "filter", "-webkit-filter"
*/

var getCrossBrowserProperty = /*#__PURE__*/function (property) {
  if (!doc) {
    return "";
  }

  var styles = (doc.body || doc.documentElement).style;
  var length = prefixes.length;

  if (typeof styles[property] !== UNDEFINED) {
    return property;
  }

  for (var i = 0; i < length; ++i) {
    var name = "-" + prefixes[i] + "-" + property;

    if (typeof styles[name] !== UNDEFINED) {
      return name;
    }
  }

  return "";
};
/**
* get string "transfrom" with the vendor prefix.
* @memberof CrossBrowser
* @example
import {TRANSFORM} from "@daybrush/utils";

console.log(TRANSFORM); // "transform", "-ms-transform", "-webkit-transform"
*/


exports.getCrossBrowserProperty = getCrossBrowserProperty;
var TRANSFORM = /*#__PURE__*/getCrossBrowserProperty("transform");
/**
* get string "filter" with the vendor prefix.
* @memberof CrossBrowser
* @example
import {FILTER} from "@daybrush/utils";

console.log(FILTER); // "filter", "-ms-filter", "-webkit-filter"
*/

exports.TRANSFORM = TRANSFORM;
var FILTER = /*#__PURE__*/getCrossBrowserProperty("filter");
/**
* get string "animation" with the vendor prefix.
* @memberof CrossBrowser
* @example
import {ANIMATION} from "@daybrush/utils";

console.log(ANIMATION); // "animation", "-ms-animation", "-webkit-animation"
*/

exports.FILTER = FILTER;
var ANIMATION = /*#__PURE__*/getCrossBrowserProperty("animation");
/**
* get string "keyframes" with the vendor prefix.
* @memberof CrossBrowser
* @example
import {KEYFRAMES} from "@daybrush/utils";

console.log(KEYFRAMES); // "keyframes", "-ms-keyframes", "-webkit-keyframes"
*/

exports.ANIMATION = ANIMATION;
var KEYFRAMES = /*#__PURE__*/ANIMATION.replace("animation", "keyframes");
exports.KEYFRAMES = KEYFRAMES;
var OPEN_CLOSED_CHARACTER = ["\"", "'", "\\\"", "\\'"];
/**
* @namespace
* @name Utils
*/

/**
 * Returns the inner product of two numbers(`a1`, `a2`) by two criteria(`b1`, `b2`).
 * @memberof Utils
 * @param - The first number
 * @param - The second number
 * @param - The first number to base on the inner product
 * @param - The second number to base on the inner product
 * @return - Returns the inner product
import { dot } from "@daybrush/utils";

console.log(dot(0, 15, 2, 3)); // 6
console.log(dot(5, 15, 2, 3)); // 9
console.log(dot(5, 15, 1, 1)); // 10
 */

exports.OPEN_CLOSED_CHARACTER = OPEN_CLOSED_CHARACTER;

function dot(a1, a2, b1, b2) {
  return (a1 * b2 + a2 * b1) / (b1 + b2);
}
/**
* Check the type that the value is undefined.
* @memberof Utils
* @param {string} value - Value to check the type
* @return {boolean} true if the type is correct, false otherwise
* @example
import {isUndefined} from "@daybrush/utils";

console.log(isUndefined(undefined)); // true
console.log(isUndefined("")); // false
console.log(isUndefined(1)); // false
console.log(isUndefined(null)); // false
*/


function isUndefined(value) {
  return typeof value === UNDEFINED;
}
/**
* Check the type that the value is object.
* @memberof Utils
* @param {string} value - Value to check the type
* @return {} true if the type is correct, false otherwise
* @example
import {isObject} from "@daybrush/utils";

console.log(isObject({})); // true
console.log(isObject(undefined)); // false
console.log(isObject("")); // false
console.log(isObject(null)); // false
*/


function isObject(value) {
  return value && typeof value === OBJECT;
}
/**
* Check the type that the value is isArray.
* @memberof Utils
* @param {string} value - Value to check the type
* @return {} true if the type is correct, false otherwise
* @example
import {isArray} from "@daybrush/utils";

console.log(isArray([])); // true
console.log(isArray({})); // false
console.log(isArray(undefined)); // false
console.log(isArray(null)); // false
*/


function isArray(value) {
  return Array.isArray(value);
}
/**
* Check the type that the value is string.
* @memberof Utils
* @param {string} value - Value to check the type
* @return {} true if the type is correct, false otherwise
* @example
import {isString} from "@daybrush/utils";

console.log(isString("1234")); // true
console.log(isString(undefined)); // false
console.log(isString(1)); // false
console.log(isString(null)); // false
*/


function isString(value) {
  return typeof value === STRING;
}
/**
* Check the type that the value is function.
* @memberof Utils
* @param {string} value - Value to check the type
* @return {} true if the type is correct, false otherwise
* @example
import {isFunction} from "@daybrush/utils";

console.log(isFunction(function a() {})); // true
console.log(isFunction(() => {})); // true
console.log(isFunction("1234")); // false
console.log(isFunction(1)); // false
console.log(isFunction(null)); // false
*/


function isFunction(value) {
  return typeof value === FUNCTION;
}

function findClosed(closedCharacter, texts, index, length) {
  for (var i = index; i < length; ++i) {
    var character = texts[i].trim();

    if (character === closedCharacter) {
      return i;
    }

    var nextIndex = i;

    if (character === "(") {
      nextIndex = findClosed(")", texts, i + 1, length);
    } else if (OPEN_CLOSED_CHARACTER.indexOf(character) > -1) {
      nextIndex = findClosed(character, texts, i + 1, length);
    }

    if (nextIndex === -1) {
      break;
    }

    i = nextIndex;
  }

  return -1;
}

function splitText(text, separator) {
  var regexText = "(\\s*" + (separator || ",") + "\\s*|\\(|\\)|\"|'|\\\\\"|\\\\'|\\s+)";
  var regex = new RegExp(regexText, "g");
  var texts = text.split(regex).filter(Boolean);
  var length = texts.length;
  var values = [];
  var tempValues = [];

  for (var i = 0; i < length; ++i) {
    var character = texts[i].trim();
    var nextIndex = i;

    if (character === "(") {
      nextIndex = findClosed(")", texts, i + 1, length);
    } else if (character === ")") {
      throw new Error("invalid format");
    } else if (OPEN_CLOSED_CHARACTER.indexOf(character) > -1) {
      nextIndex = findClosed(character, texts, i + 1, length);
    } else if (character === separator) {
      if (tempValues.length) {
        values.push(tempValues.join(""));
        tempValues = [];
      }

      continue;
    }

    if (nextIndex === -1) {
      nextIndex = length - 1;
    }

    tempValues.push(texts.slice(i, nextIndex + 1).join(""));
    i = nextIndex;
  }

  if (tempValues.length) {
    values.push(tempValues.join(""));
  }

  return values;
}
/**
* divide text by space.
* @memberof Utils
* @param {string} text - text to divide
* @return {Array} divided texts
* @example
import {spliceSpace} from "@daybrush/utils";

console.log(splitSpace("a b c d e f g"));
// ["a", "b", "c", "d", "e", "f", "g"]
console.log(splitSpace("'a,b' c 'd,e' f g"));
// ["'a,b'", "c", "'d,e'", "f", "g"]
*/


function splitSpace(text) {
  // divide comma(,)
  return splitText(text, "");
}
/**
* divide text by comma.
* @memberof Utils
* @param {string} text - text to divide
* @return {Array} divided texts
* @example
import {splitComma} from "@daybrush/utils";

console.log(splitComma("a,b,c,d,e,f,g"));
// ["a", "b", "c", "d", "e", "f", "g"]
console.log(splitComma("'a,b',c,'d,e',f,g"));
// ["'a,b'", "c", "'d,e'", "f", "g"]
*/


function splitComma(text) {
  // divide comma(,)
  // "[^"]*"|'[^']*'
  return splitText(text, ",");
}
/**
* divide text by bracket "(", ")".
* @memberof Utils
* @param {string} text - text to divide
* @return {object} divided texts
* @example
import {splitBracket} from "@daybrush/utils";

console.log(splitBracket("a(1, 2)"));
// {prefix: "a", value: "1, 2", suffix: ""}
console.log(splitBracket("a(1, 2)b"));
// {prefix: "a", value: "1, 2", suffix: "b"}
*/


function splitBracket(text) {
  var matches = /([^(]*)\(([\s\S]*)\)([\s\S]*)/g.exec(text);

  if (!matches || matches.length < 4) {
    return {};
  } else {
    return {
      prefix: matches[1],
      value: matches[2],
      suffix: matches[3]
    };
  }
}
/**
* divide text by number and unit.
* @memberof Utils
* @param {string} text - text to divide
* @return {} divided texts
* @example
import {splitUnit} from "@daybrush/utils";

console.log(splitUnit("10px"));
// {prefix: "", value: 10, unit: "px"}
console.log(splitUnit("-10px"));
// {prefix: "", value: -10, unit: "px"}
console.log(splitUnit("a10%"));
// {prefix: "a", value: 10, unit: "%"}
*/


function splitUnit(text) {
  var matches = /^([^\d|e|\-|\+]*)((?:\d|\.|-|e-|e\+)+)(\S*)$/g.exec(text);

  if (!matches) {
    return {
      prefix: "",
      unit: "",
      value: NaN
    };
  }

  var prefix = matches[1];
  var value = matches[2];
  var unit = matches[3];
  return {
    prefix: prefix,
    unit: unit,
    value: parseFloat(value)
  };
}
/**
* transform strings to camel-case
* @memberof Utils
* @param {String} text - string
* @return {String} camel-case string
* @example
import {camelize} from "@daybrush/utils";

console.log(camelize("transform-origin")); // transformOrigin
console.log(camelize("abcd_efg")); // abcdEfg
console.log(camelize("abcd efg")); // abcdEfg
*/


function camelize(str) {
  return str.replace(/[\s-_]([a-z])/g, function (all, letter) {
    return letter.toUpperCase();
  });
}
/**
* transform a camelized string into a lowercased string.
* @memberof Utils
* @param {string} text - a camel-cased string
* @param {string} [separator="-"] - a separator
* @return {string}  a lowercased string
* @example
import {decamelize} from "@daybrush/utils";

console.log(decamelize("transformOrigin")); // transform-origin
console.log(decamelize("abcdEfg", "_")); // abcd_efg
*/


function decamelize(str, separator) {
  if (separator === void 0) {
    separator = "-";
  }

  return str.replace(/([a-z])([A-Z])/g, function (all, letter, letter2) {
    return "" + letter + separator + letter2.toLowerCase();
  });
}
/**
* transforms something in an array into an array.
* @memberof Utils
* @param - Array form
* @return an array
* @example
import {toArray} from "@daybrush/utils";

const arr1 = toArray(document.querySelectorAll(".a")); // Element[]
const arr2 = toArray(document.querySelectorAll<HTMLElement>(".a")); // HTMLElement[]
*/


function toArray(value) {
  return [].slice.call(value);
}
/**
* Date.now() method
* @memberof CrossBrowser
* @return {number} milliseconds
* @example
import {now} from "@daybrush/utils";

console.log(now()); // 12121324241(milliseconds)
*/


function now() {
  return Date.now ? Date.now() : new Date().getTime();
}
/**
* Returns the index of the first element in the array that satisfies the provided testing function.
* @function
* @memberof CrossBrowser
* @param - The array `findIndex` was called upon.
* @param - A function to execute on each value in the array until the function returns true, indicating that the satisfying element was found.
* @param - Returns defaultIndex if not found by the function.
* @example
import { findIndex } from "@daybrush/utils";

findIndex([{a: 1}, {a: 2}, {a: 3}, {a: 4}], ({ a }) => a === 2); // 1
*/


function findIndex(arr, callback, defaultIndex) {
  if (defaultIndex === void 0) {
    defaultIndex = -1;
  }

  var length = arr.length;

  for (var i = 0; i < length; ++i) {
    if (callback(arr[i], i, arr)) {
      return i;
    }
  }

  return defaultIndex;
}
/**
* Returns the value of the first element in the array that satisfies the provided testing function.
* @function
* @memberof CrossBrowser
* @param - The array `find` was called upon.
* @param - A function to execute on each value in the array,
* @param - Returns defalutValue if not found by the function.
* @example
import { find } from "@daybrush/utils";

find([{a: 1}, {a: 2}, {a: 3}, {a: 4}], ({ a }) => a === 2); // {a: 2}
*/


function find(arr, callback, defalutValue) {
  var index = findIndex(arr, callback);
  return index > -1 ? arr[index] : defalutValue;
}
/**
* window.requestAnimationFrame() method with cross browser.
* @function
* @memberof CrossBrowser
* @param {FrameRequestCallback} callback - The function to call when it's time to update your animation for the next repaint.
* @return {number} id
* @example
import {requestAnimationFrame} from "@daybrush/utils";

requestAnimationFrame((timestamp) => {
  console.log(timestamp);
});
*/


var requestAnimationFrame = /*#__PURE__*/function () {
  var firstTime = now();
  var raf = IS_WINDOW && (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame);
  return raf ? raf.bind(window) : function (callback) {
    var currTime = now();
    var id = window.setTimeout(function () {
      callback(currTime - firstTime);
    }, 1000 / 60);
    return id;
  };
}();
/**
* window.cancelAnimationFrame() method with cross browser.
* @function
* @memberof CrossBrowser
* @param {number} handle - the id obtained through requestAnimationFrame method
* @return {void}
* @example
import { requestAnimationFrame, cancelAnimationFrame } from "@daybrush/utils";

const id = requestAnimationFrame((timestamp) => {
  console.log(timestamp);
});

cancelAnimationFrame(id);
*/


exports.requestAnimationFrame = requestAnimationFrame;

var cancelAnimationFrame = /*#__PURE__*/function () {
  var caf = IS_WINDOW && (window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.msCancelAnimationFrame);
  return caf ? caf.bind(window) : function (handle) {
    clearTimeout(handle);
  };
}();
/**
* @namespace
* @name Color
*/

/**
* Remove the # from the hex color.
* @memberof Color
* @param {} hex - hex color
* @return {} hex color
* @example
import {cutHex} from "@daybrush/utils";

console.log(cutHex("#000000")) // "000000"
*/


exports.cancelAnimationFrame = cancelAnimationFrame;

function cutHex(hex) {
  return hex.replace("#", "");
}
/**
* convert hex color to rgb color.
* @memberof Color
* @param {} hex - hex color
* @return {} rgb color
* @example
import {hexToRGBA} from "@daybrush/utils";

console.log(hexToRGBA("#00000005"));
// [0, 0, 0, 1]
console.log(hexToRGBA("#201045"));
// [32, 16, 69, 1]
*/


function hexToRGBA(hex) {
  var h = cutHex(hex);
  var r = parseInt(h.substring(0, 2), 16);
  var g = parseInt(h.substring(2, 4), 16);
  var b = parseInt(h.substring(4, 6), 16);
  var a = parseInt(h.substring(6, 8), 16) / 255;

  if (isNaN(a)) {
    a = 1;
  }

  return [r, g, b, a];
}
/**
* convert 3(or 4)-digit hex color to 6(or 8)-digit hex color.
* @memberof Color
* @param {} hex - 3(or 4)-digit hex color
* @return {} 6(or 8)-digit hex color
* @example
import {toFullHex} from "@daybrush/utils";

console.log(toFullHex("#123")); // "#112233"
console.log(toFullHex("#123a")); // "#112233aa"
*/


function toFullHex(h) {
  var r = h.charAt(1);
  var g = h.charAt(2);
  var b = h.charAt(3);
  var a = h.charAt(4);
  var arr = ["#", r, r, g, g, b, b, a, a];
  return arr.join("");
}
/**
* convert hsl color to rgba color.
* @memberof Color
* @param {} hsl - hsl color(hue: 0 ~ 360, saturation: 0 ~ 1, lightness: 0 ~ 1, alpha: 0 ~ 1)
* @return {} rgba color
* @example
import {hslToRGBA} from "@daybrush/utils";

console.log(hslToRGBA([150, 0.5, 0.4]));
// [51, 153, 102, 1]
*/


function hslToRGBA(hsl) {
  var h = hsl[0];
  var s = hsl[1];
  var l = hsl[2];

  if (h < 0) {
    h += Math.floor((Math.abs(h) + 360) / 360) * 360;
  }

  h %= 360;
  var c = (1 - Math.abs(2 * l - 1)) * s;
  var x = c * (1 - Math.abs(h / 60 % 2 - 1));
  var m = l - c / 2;
  var rgb;

  if (h < 60) {
    rgb = [c, x, 0];
  } else if (h < 120) {
    rgb = [x, c, 0];
  } else if (h < 180) {
    rgb = [0, c, x];
  } else if (h < 240) {
    rgb = [0, x, c];
  } else if (h < 300) {
    rgb = [x, 0, c];
  } else if (h < 360) {
    rgb = [c, 0, x];
  }

  var result = [Math.round((rgb[0] + m) * 255), Math.round((rgb[1] + m) * 255), Math.round((rgb[2] + m) * 255), hsl.length > 3 ? hsl[3] : 1];
  return result;
}
/**
* convert string to rgba color.
* @memberof Color
* @param {} - 3-hex(#000), 4-hex(#0000) 6-hex(#000000), 8-hex(#00000000) or RGB(A), or HSL(A)
* @return {} rgba color
* @example
import {stringToRGBA} from "@daybrush/utils";

console.log(stringToRGBA("#000000")); // [0, 0, 0, 1]
console.log(stringToRGBA("rgb(100, 100, 100)")); // [100, 100, 100, 1]
console.log(stringToRGBA("hsl(150, 0.5, 0.4)")); // [51, 153, 102, 1]
*/


function stringToRGBA(color) {
  if (color.charAt(0) === "#") {
    if (color.length === 4 || color.length === 5) {
      return hexToRGBA(toFullHex(color));
    } else {
      return hexToRGBA(color);
    }
  } else if (color.indexOf("(") !== -1) {
    // in bracket.
    var _a = splitBracket(color),
        prefix = _a.prefix,
        value = _a.value;

    if (!prefix || !value) {
      return;
    }

    var arr = splitComma(value);
    var colorArr = [];
    var length = arr.length;

    switch (prefix) {
      case RGB:
      case RGBA:
        for (var i = 0; i < length; ++i) {
          colorArr[i] = parseFloat(arr[i]);
        }

        return colorArr;

      case HSL:
      case HSLA:
        for (var i = 0; i < length; ++i) {
          if (arr[i].indexOf("%") !== -1) {
            colorArr[i] = parseFloat(arr[i]) / 100;
          } else {
            colorArr[i] = parseFloat(arr[i]);
          }
        } // hsl, hsla to rgba


        return hslToRGBA(colorArr);
    }
  }

  return;
}
/**
 * Returns all element descendants of node that
 * match selectors.
 */

/**
 * Checks if the specified class value exists in the element's class attribute.
 * @memberof DOM
 * @param - A DOMString containing one or more selectors to match
 * @param - If multi is true, a DOMString containing one or more selectors to match against.
 * @example
import {$} from "@daybrush/utils";

console.log($("div")); // div element
console.log($("div", true)); // [div, div] elements
*/


function $(selectors, multi) {
  return multi ? doc.querySelectorAll(selectors) : doc.querySelector(selectors);
}
/**
* Checks if the specified class value exists in the element's class attribute.
* @memberof DOM
* @param element - target
* @param className - the class name to search
* @return {boolean} return false if the class is not found.
* @example
import {hasClass} from "@daybrush/utils";

console.log(hasClass(element, "start")); // true or false
*/


function hasClass(element, className) {
  if (element.classList) {
    return element.classList.contains(className);
  }

  return !!element.className.match(new RegExp("(\\s|^)" + className + "(\\s|$)"));
}
/**
* Add the specified class value. If these classe already exist in the element's class attribute they are ignored.
* @memberof DOM
* @param element - target
* @param className - the class name to add
* @example
import {addClass} from "@daybrush/utils";

addClass(element, "start");
*/


function addClass(element, className) {
  if (element.classList) {
    element.classList.add(className);
  } else {
    element.className += " " + className;
  }
}
/**
* Removes the specified class value.
* @memberof DOM
* @param element - target
* @param className - the class name to remove
* @example
import {removeClass} from "@daybrush/utils";

removeClass(element, "start");
*/


function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else {
    var reg = new RegExp("(\\s|^)" + className + "(\\s|$)");
    element.className = element.className.replace(reg, " ");
  }
}
/**
* Gets the CSS properties from the element.
* @memberof DOM
* @param elements - elements
* @param properites - the CSS properties
* @return returns CSS properties and values.
* @example
import {fromCSS} from "@daybrush/utils";

console.log(fromCSS(element, ["left", "opacity", "top"])); // {"left": "10px", "opacity": 1, "top": "10px"}
*/


function fromCSS(elements, properties) {
  if (!elements || !properties || !properties.length) {
    return {};
  }

  var element;

  if (elements instanceof Element) {
    element = elements;
  } else if (elements.length) {
    element = elements[0];
  } else {
    return {};
  }

  var cssObject = {};
  var styles = window.getComputedStyle(element);
  var length = properties.length;

  for (var i = 0; i < length; ++i) {
    cssObject[properties[i]] = styles[properties[i]];
  }

  return cssObject;
}
/**
* Sets up a function that will be called whenever the specified event is delivered to the target
* @memberof DOM
* @param - event target
* @param - A case-sensitive string representing the event type to listen for.
* @param - The object which receives a notification (an object that implements the Event interface) when an event of the specified type occurs
* @param - An options object that specifies characteristics about the event listener. The available options are:
* @example
import {addEvent} from "@daybrush/utils";

addEvent(el, "click", e => {
  console.log(e);
});
*/


function addEvent(el, type, listener, options) {
  el.addEventListener(type, listener, options);
}
/**
* removes from the EventTarget an event listener previously registered with EventTarget.addEventListener()
* @memberof DOM
* @param - event target
* @param - A case-sensitive string representing the event type to listen for.
* @param - The EventListener function of the event handler to remove from the event target.
* @example
import {addEvent, removeEvent} from "@daybrush/utils";
const listener = e => {
  console.log(e);
};
addEvent(el, "click", listener);
removeEvent(el, "click", listener);
*/


function removeEvent(el, type, listener) {
  el.removeEventListener(type, listener);
}
},{}],"MB9r":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*
Copyright (c) NAVER Corp.
name: @egjs/component
license: MIT
author: NAVER Corp.
repository: https://github.com/naver/egjs-component
version: 2.2.2
*/

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
/*
 * Copyright (c) 2015 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */


function isUndefined(value) {
  return typeof value === "undefined";
}
/**
 * A class used to manage events in a component
 * @ko 컴포넌트의 이벤트을 관리할 수 있게 하는 클래스
 * @alias eg.Component
 */


var Component = /*#__PURE__*/function () {
  /**
   * @support {"ie": "7+", "ch" : "latest", "ff" : "latest",  "sf" : "latest", "edge" : "latest", "ios" : "7+", "an" : "2.1+ (except 3.x)"}
   */
  function Component() {
    /**
     * @deprecated
     * @private
     */
    this.options = {};
    this._eventHandler = {};
  }
  /**
   * Triggers a custom event.
   * @ko 커스텀 이벤트를 발생시킨다
   * @param {string} eventName The name of the custom event to be triggered <ko>발생할 커스텀 이벤트의 이름</ko>
   * @param {object} customEvent Event data to be sent when triggering a custom event <ko>커스텀 이벤트가 발생할 때 전달할 데이터</ko>
   * @param {any[]} restParam Additional parameters when triggering a custom event <ko>커스텀 이벤트가 발생할 때 필요시 추가적으로 전달할 데이터</ko>
   * @return Indicates whether the event has occurred. If the stop() method is called by a custom event handler, it will return false and prevent the event from occurring. <a href="https://github.com/naver/egjs-component/wiki/How-to-make-Component-event-design%3F">Ref</a> <ko>이벤트 발생 여부. 커스텀 이벤트 핸들러에서 stop() 메서드를 호출하면 'false'를 반환하고 이벤트 발생을 중단한다. <a href="https://github.com/naver/egjs-component/wiki/How-to-make-Component-event-design%3F">참고</a></ko>
   * @example
   * ```
   * class Some extends eg.Component {
   *   some(){
   *     if(this.trigger("beforeHi")){ // When event call to stop return false.
   *       this.trigger("hi");// fire hi event.
   *     }
   *   }
   * }
   *
   * const some = new Some();
   * some.on("beforeHi", (e) => {
   *   if(condition){
   *     e.stop(); // When event call to stop, `hi` event not call.
   *   }
   * });
   * some.on("hi", (e) => {
   *   // `currentTarget` is component instance.
   *   console.log(some === e.currentTarget); // true
   * });
   * // If you want to more know event design. You can see article.
   * // https://github.com/naver/egjs-component/wiki/How-to-make-Component-event-design%3F
   * ```
   */


  var __proto = Component.prototype;

  __proto.trigger = function (eventName) {
    var _this = this;

    var params = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      params[_i - 1] = arguments[_i];
    }

    var handlerList = this._eventHandler[eventName] || [];
    var hasHandlerList = handlerList.length > 0;

    if (!hasHandlerList) {
      return true;
    }

    var customEvent = params[0] || {};
    var restParams = params.slice(1); // If detach method call in handler in first time then handler list calls.

    handlerList = handlerList.concat();
    var isCanceled = false; // This should be done like this to pass previous tests

    customEvent.eventType = eventName;

    customEvent.stop = function () {
      isCanceled = true;
    };

    customEvent.currentTarget = this;
    var arg = [customEvent];

    if (restParams.length >= 1) {
      arg = arg.concat(restParams);
    }

    handlerList.forEach(function (handler) {
      handler.apply(_this, arg);
    });
    return !isCanceled;
  };
  /**
   * Executed event just one time.
   * @ko 이벤트가 한번만 실행된다.
   * @param {string} eventName The name of the event to be attached <ko>등록할 이벤트의 이름</ko>
   * @param {function} handlerToAttach The handler function of the event to be attached <ko>등록할 이벤트의 핸들러 함수</ko>
   * @return An instance of a component itself<ko>컴포넌트 자신의 인스턴스</ko>
   * @example
   * ```
   * class Some extends eg.Component {
   * hi() {
   *   alert("hi");
   * }
   * thing() {
   *   this.once("hi", this.hi);
   * }
   *
   * var some = new Some();
   * some.thing();
   * some.trigger("hi");
   * // fire alert("hi");
   * some.trigger("hi");
   * // Nothing happens
   * ```
   */


  __proto.once = function (eventName, handlerToAttach) {
    var _this = this;

    if (typeof eventName === "object" && isUndefined(handlerToAttach)) {
      var eventHash = eventName;

      for (var key in eventHash) {
        this.once(key, eventHash[key]);
      }

      return this;
    } else if (typeof eventName === "string" && typeof handlerToAttach === "function") {
      var listener_1 = function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        handlerToAttach.apply(_this, args);

        _this.off(eventName, listener_1);
      };

      this.on(eventName, listener_1);
    }

    return this;
  };
  /**
   * Checks whether an event has been attached to a component.
   * @ko 컴포넌트에 이벤트가 등록됐는지 확인한다.
   * @param {string} eventName The name of the event to be attached <ko>등록 여부를 확인할 이벤트의 이름</ko>
   * @return {boolean} Indicates whether the event is attached. <ko>이벤트 등록 여부</ko>
   * @example
   * ```
   * class Some extends eg.Component {
   *   some() {
   *     this.hasOn("hi");// check hi event.
   *   }
   * }
   * ```
   */


  __proto.hasOn = function (eventName) {
    return !!this._eventHandler[eventName];
  };
  /**
   * Attaches an event to a component.
   * @ko 컴포넌트에 이벤트를 등록한다.
   * @param {string} eventName The name of the event to be attached <ko>등록할 이벤트의 이름</ko>
   * @param {function} handlerToAttach The handler function of the event to be attached <ko>등록할 이벤트의 핸들러 함수</ko>
   * @return An instance of a component itself<ko>컴포넌트 자신의 인스턴스</ko>
   * @example
   * ```
   * class Some extends eg.Component {
   *   hi() {
   *     console.log("hi");
   *   }
   *   some() {
   *     this.on("hi",this.hi); //attach event
   *   }
   * }
   * ```
   */


  __proto.on = function (eventName, handlerToAttach) {
    if (typeof eventName === "object" && isUndefined(handlerToAttach)) {
      var eventHash = eventName;

      for (var name in eventHash) {
        this.on(name, eventHash[name]);
      }

      return this;
    } else if (typeof eventName === "string" && typeof handlerToAttach === "function") {
      var handlerList = this._eventHandler[eventName];

      if (isUndefined(handlerList)) {
        this._eventHandler[eventName] = [];
        handlerList = this._eventHandler[eventName];
      }

      handlerList.push(handlerToAttach);
    }

    return this;
  };
  /**
   * Detaches an event from the component.
   * @ko 컴포넌트에 등록된 이벤트를 해제한다
   * @param {string} eventName The name of the event to be detached <ko>해제할 이벤트의 이름</ko>
   * @param {function} handlerToDetach The handler function of the event to be detached <ko>해제할 이벤트의 핸들러 함수</ko>
   * @return An instance of a component itself <ko>컴포넌트 자신의 인스턴스</ko>
   * @example
   * ```
   * class Some extends eg.Component {
   *   hi() {
   *     console.log("hi");
   *   }
   *   some() {
   *     this.off("hi",this.hi); //detach event
   *   }
   * }
   * ```
   */


  __proto.off = function (eventName, handlerToDetach) {
    var e_1, _a; // Detach all event handlers.


    if (isUndefined(eventName)) {
      this._eventHandler = {};
      return this;
    } // Detach all handlers for eventname or detach event handlers by object.


    if (isUndefined(handlerToDetach)) {
      if (typeof eventName === "string") {
        delete this._eventHandler[eventName];
        return this;
      } else {
        var eventHash = eventName;

        for (var name in eventHash) {
          this.off(name, eventHash[name]);
        }

        return this;
      }
    } // Detach single event handler


    var handlerList = this._eventHandler[eventName];

    if (handlerList) {
      var idx = 0;

      try {
        for (var handlerList_1 = __values(handlerList), handlerList_1_1 = handlerList_1.next(); !handlerList_1_1.done; handlerList_1_1 = handlerList_1.next()) {
          var handlerFunction = handlerList_1_1.value;

          if (handlerFunction === handlerToDetach) {
            handlerList.splice(idx, 1);
            break;
          }

          idx++;
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (handlerList_1_1 && !handlerList_1_1.done && (_a = handlerList_1.return)) _a.call(handlerList_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
    }

    return this;
  };
  /**
   * Version info string
   * @ko 버전정보 문자열
   * @name VERSION
   * @static
   * @example
   * eg.Component.VERSION;  // ex) 2.0.0
   * @memberof eg.Component
   */


  Component.VERSION = "2.2.2";
  return Component;
}();

var _default = Component;
exports.default = _default;
},{}],"tGET":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getCombi = getCombi;
exports.getKey = getKey;

var _component = _interopRequireDefault(require("@egjs/component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Copyright (c) Daybrush
name: keycon
license: MIT
author: Daybrush
repository: git+https://github.com/daybrush/keycon.git
version: 0.5.0
*/

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

/* global Reflect, Promise */
var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
  };

  return extendStatics(d, b);
};

function __extends(d, b) {
  extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function createCommonjsModule(fn, module) {
  return module = {
    exports: {}
  }, fn(module, module.exports), module.exports;
}

var keycode = createCommonjsModule(function (module, exports) {
  // Source: http://jsfiddle.net/vWx8V/
  // http://stackoverflow.com/questions/5603195/full-list-of-javascript-keycodes

  /**
   * Conenience method returns corresponding value for given keyName or keyCode.
   *
   * @param {Mixed} keyCode {Number} or keyName {String}
   * @return {Mixed}
   * @api public
   */
  function keyCode(searchInput) {
    // Keyboard Events
    if (searchInput && 'object' === typeof searchInput) {
      var hasKeyCode = searchInput.which || searchInput.keyCode || searchInput.charCode;
      if (hasKeyCode) searchInput = hasKeyCode;
    } // Numbers


    if ('number' === typeof searchInput) return names[searchInput]; // Everything else (cast to string)

    var search = String(searchInput); // check codes

    var foundNamedKey = codes[search.toLowerCase()];
    if (foundNamedKey) return foundNamedKey; // check aliases

    var foundNamedKey = aliases[search.toLowerCase()];
    if (foundNamedKey) return foundNamedKey; // weird character?

    if (search.length === 1) return search.charCodeAt(0);
    return undefined;
  }
  /**
   * Compares a keyboard event with a given keyCode or keyName.
   *
   * @param {Event} event Keyboard event that should be tested
   * @param {Mixed} keyCode {Number} or keyName {String}
   * @return {Boolean}
   * @api public
   */


  keyCode.isEventKey = function isEventKey(event, nameOrCode) {
    if (event && 'object' === typeof event) {
      var keyCode = event.which || event.keyCode || event.charCode;

      if (keyCode === null || keyCode === undefined) {
        return false;
      }

      if (typeof nameOrCode === 'string') {
        // check codes
        var foundNamedKey = codes[nameOrCode.toLowerCase()];

        if (foundNamedKey) {
          return foundNamedKey === keyCode;
        } // check aliases


        var foundNamedKey = aliases[nameOrCode.toLowerCase()];

        if (foundNamedKey) {
          return foundNamedKey === keyCode;
        }
      } else if (typeof nameOrCode === 'number') {
        return nameOrCode === keyCode;
      }

      return false;
    }
  };

  exports = module.exports = keyCode;
  /**
   * Get by name
   *
   *   exports.code['enter'] // => 13
   */

  var codes = exports.code = exports.codes = {
    'backspace': 8,
    'tab': 9,
    'enter': 13,
    'shift': 16,
    'ctrl': 17,
    'alt': 18,
    'pause/break': 19,
    'caps lock': 20,
    'esc': 27,
    'space': 32,
    'page up': 33,
    'page down': 34,
    'end': 35,
    'home': 36,
    'left': 37,
    'up': 38,
    'right': 39,
    'down': 40,
    'insert': 45,
    'delete': 46,
    'command': 91,
    'left command': 91,
    'right command': 93,
    'numpad *': 106,
    'numpad +': 107,
    'numpad -': 109,
    'numpad .': 110,
    'numpad /': 111,
    'num lock': 144,
    'scroll lock': 145,
    'my computer': 182,
    'my calculator': 183,
    ';': 186,
    '=': 187,
    ',': 188,
    '-': 189,
    '.': 190,
    '/': 191,
    '`': 192,
    '[': 219,
    '\\': 220,
    ']': 221,
    "'": 222
  }; // Helper aliases

  var aliases = exports.aliases = {
    'windows': 91,
    '⇧': 16,
    '⌥': 18,
    '⌃': 17,
    '⌘': 91,
    'ctl': 17,
    'control': 17,
    'option': 18,
    'pause': 19,
    'break': 19,
    'caps': 20,
    'return': 13,
    'escape': 27,
    'spc': 32,
    'spacebar': 32,
    'pgup': 33,
    'pgdn': 34,
    'ins': 45,
    'del': 46,
    'cmd': 91
  };
  /*!
   * Programatically add the following
   */
  // lower case chars

  for (i = 97; i < 123; i++) codes[String.fromCharCode(i)] = i - 32; // numbers


  for (var i = 48; i < 58; i++) codes[i - 48] = i; // function keys


  for (i = 1; i < 13; i++) codes['f' + i] = i + 111; // numpad keys


  for (i = 0; i < 10; i++) codes['numpad ' + i] = i + 96;
  /**
   * Get by code
   *
   *   exports.name[13] // => 'Enter'
   */


  var names = exports.names = exports.title = {}; // title for backward compat
  // Create reverse mapping

  for (i in codes) names[codes[i]] = i; // Add aliases


  for (var alias in aliases) {
    codes[alias] = aliases[alias];
  }
});
var keycode_1 = keycode.code;
var keycode_2 = keycode.codes;
var keycode_3 = keycode.aliases;
var keycode_4 = keycode.names;
var keycode_5 = keycode.title;
/*
Copyright (c) 2018 Daybrush
@name: @daybrush/utils
license: MIT
author: Daybrush
repository: https://github.com/daybrush/utils
@version 0.10.0
*/

/**
* get string "string"
* @memberof Consts
* @example
import {STRING} from "@daybrush/utils";

console.log(STRING); // "string"
*/

var STRING = "string";
/**
* Check the type that the value is isArray.
* @memberof Utils
* @param {string} value - Value to check the type
* @return {} true if the type is correct, false otherwise
* @example
import {isArray} from "@daybrush/utils";

console.log(isArray([])); // true
console.log(isArray({})); // false
console.log(isArray(undefined)); // false
console.log(isArray(null)); // false
*/

function isArray(value) {
  return Array.isArray(value);
}
/**
* Check the type that the value is string.
* @memberof Utils
* @param {string} value - Value to check the type
* @return {} true if the type is correct, false otherwise
* @example
import {isString} from "@daybrush/utils";

console.log(isString("1234")); // true
console.log(isString(undefined)); // false
console.log(isString(1)); // false
console.log(isString(null)); // false
*/


function isString(value) {
  return typeof value === STRING;
}
/**
* Sets up a function that will be called whenever the specified event is delivered to the target
* @memberof DOM
* @param - event target
* @param - A case-sensitive string representing the event type to listen for.
* @param - The object which receives a notification (an object that implements the Event interface) when an event of the specified type occurs
* @param - An options object that specifies characteristics about the event listener. The available options are:
* @example
import {addEvent} from "@daybrush/utils";

addEvent(el, "click", e => {
  console.log(e);
});
*/


function addEvent(el, type, listener, options) {
  el.addEventListener(type, listener, options);
}

var codeData = {
  "+": "plus",
  "left command": "meta",
  "right command": "meta"
};
var keysSort = {
  shift: 1,
  ctrl: 2,
  alt: 3,
  meta: 4
};
/**
 * @memberof KeyController
 */

function getKey(keyCode) {
  var key = keycode_4[keyCode] || "";

  for (var name in codeData) {
    key = key.replace(name, codeData[name]);
  }

  return key.replace(/\s/g, "");
}
/**
 * @memberof KeyController
 */


function getCombi(e, key) {
  if (key === void 0) {
    key = getKey(e.keyCode);
  }

  var keys = [e.shiftKey && "shift", e.ctrlKey && "ctrl", e.altKey && "alt", e.metaKey && "meta"];
  keys.indexOf(key) === -1 && keys.push(key);
  return keys.filter(Boolean);
}

function getArrangeCombi(keys) {
  var arrangeKeys = keys.slice();
  arrangeKeys.sort(function (prev, next) {
    var prevScore = keysSort[prev] || 5;
    var nextScore = keysSort[next] || 5;
    return prevScore - nextScore;
  });
  return arrangeKeys;
}

var globalKeyController;
/**
 */

var KeyController = /*#__PURE__*/function (_super) {
  __extends(KeyController, _super);
  /**
   *
   */


  function KeyController(container) {
    if (container === void 0) {
      container = window;
    }

    var _this = _super.call(this) || this;
    /**
     */


    _this.ctrlKey = false;
    /**
     */

    _this.altKey = false;
    /**
     *
     */

    _this.shiftKey = false;
    /**
     *
     */

    _this.metaKey = false;

    _this.clear = function () {
      _this.ctrlKey = false;
      _this.altKey = false;
      _this.shiftKey = false;
      _this.metaKey = false;
      return _this;
    };

    _this.keydownEvent = function (e) {
      _this.triggerEvent("keydown", e);
    };

    _this.keyupEvent = function (e) {
      _this.triggerEvent("keyup", e);
    };

    addEvent(container, "blur", _this.clear);
    addEvent(container, "keydown", _this.keydownEvent);
    addEvent(container, "keyup", _this.keyupEvent);
    return _this;
  }

  var __proto = KeyController.prototype;
  Object.defineProperty(KeyController, "global", {
    /**
     */
    get: function () {
      return globalKeyController || (globalKeyController = new KeyController());
    },
    enumerable: true,
    configurable: true
  });
  /**
   *
   */

  __proto.keydown = function (comb, callback) {
    return this.addEvent("keydown", comb, callback);
  };
  /**
   *
   */


  __proto.offKeydown = function (comb, callback) {
    return this.removeEvent("keydown", comb, callback);
  };
  /**
   *
   */


  __proto.offKeyup = function (comb, callback) {
    return this.removeEvent("keyup", comb, callback);
  };
  /**
   *
   */


  __proto.keyup = function (comb, callback) {
    return this.addEvent("keyup", comb, callback);
  };

  __proto.addEvent = function (type, comb, callback) {
    if (isArray(comb)) {
      this.on(type + "." + getArrangeCombi(comb).join("."), callback);
    } else if (isString(comb)) {
      this.on(type + "." + comb, callback);
    } else {
      this.on(type, comb);
    }

    return this;
  };

  __proto.removeEvent = function (type, comb, callback) {
    if (isArray(comb)) {
      this.off(type + "." + getArrangeCombi(comb).join("."), callback);
    } else if (isString(comb)) {
      this.off(type + "." + comb, callback);
    } else {
      this.off(type, comb);
    }

    return this;
  };

  __proto.triggerEvent = function (type, e) {
    this.ctrlKey = e.ctrlKey;
    this.shiftKey = e.shiftKey;
    this.altKey = e.altKey;
    this.metaKey = e.metaKey;
    var key = getKey(e.keyCode);
    var isToggle = key === "ctrl" || key === "shift" || key === "meta" || key === "alt";
    var param = {
      key: key,
      isToggle: isToggle,
      inputEvent: e,
      keyCode: e.keyCode,
      ctrlKey: e.ctrlKey,
      altKey: e.altKey,
      shiftKey: e.shiftKey,
      metaKey: e.metaKey
    };
    this.trigger(type, param);
    this.trigger(type + "." + key, param);
    var combi = getCombi(e, key);
    combi.length > 1 && this.trigger(type + "." + combi.join("."), param);
  };

  return KeyController;
}(_component.default);

var _default = KeyController;
exports.default = _default;
},{"@egjs/component":"MB9r"}],"tOh1":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.drag = setDrag;

var _utils = require("@daybrush/utils");

/*
Copyright (c) 2019 Daybrush
name: @daybrush/drag
license: MIT
author: Daybrush
repository: git+https://github.com/daybrush/drag.git
version: 0.19.3
*/

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

function getRad(pos1, pos2) {
  var distX = pos2[0] - pos1[0];
  var distY = pos2[1] - pos1[1];
  var rad = Math.atan2(distY, distX);
  return rad >= 0 ? rad : rad + Math.PI * 2;
}

function getRotatiion(touches) {
  return getRad([touches[0].clientX, touches[0].clientY], [touches[1].clientX, touches[1].clientY]) / Math.PI * 180;
}

function getPinchDragPosition(clients, prevClients, startClients, startPinchClients) {
  var nowCenter = getAverageClient(clients);
  var prevCenter = getAverageClient(prevClients);
  var startCenter = getAverageClient(startPinchClients);
  var pinchClient = plueClient(startPinchClients[0], minusClient(nowCenter, startCenter));
  var pinchPrevClient = plueClient(startPinchClients[0], minusClient(prevCenter, startCenter));
  return getPosition(pinchClient, pinchPrevClient, startClients[0]);
}

function isMultiTouch(e) {
  return e.touches && e.touches.length >= 2;
}

function getPositionEvent(e) {
  if (e.touches) {
    return getClients(e.touches);
  } else {
    return [getClient(e)];
  }
}

function getPosition(client, prevClient, startClient) {
  var clientX = client.clientX,
      clientY = client.clientY;
  var prevX = prevClient.clientX,
      prevY = prevClient.clientY;
  var startX = startClient.clientX,
      startY = startClient.clientY;
  var deltaX = clientX - prevX;
  var deltaY = clientY - prevY;
  var distX = clientX - startX;
  var distY = clientY - startY;
  return {
    clientX: clientX,
    clientY: clientY,
    deltaX: deltaX,
    deltaY: deltaY,
    distX: distX,
    distY: distY
  };
}

function getDist(clients) {
  return Math.sqrt(Math.pow(clients[0].clientX - clients[1].clientX, 2) + Math.pow(clients[0].clientY - clients[1].clientY, 2));
}

function getPositions(clients, prevClients, startClients) {
  return clients.map(function (client, i) {
    return getPosition(client, prevClients[i], startClients[i]);
  });
}

function getClients(touches) {
  var length = Math.min(touches.length, 2);
  var clients = [];

  for (var i = 0; i < length; ++i) {
    clients.push(getClient(touches[i]));
  }

  return clients;
}

function getClient(e) {
  return {
    clientX: e.clientX,
    clientY: e.clientY
  };
}

function getAverageClient(clients) {
  if (clients.length === 1) {
    return clients[0];
  }

  return {
    clientX: (clients[0].clientX + clients[1].clientX) / 2,
    clientY: (clients[0].clientY + clients[1].clientY) / 2
  };
}

function plueClient(client1, client2) {
  return {
    clientX: client1.clientX + client2.clientX,
    clientY: client1.clientY + client2.clientY
  };
}

function minusClient(client1, client2) {
  return {
    clientX: client1.clientX - client2.clientX,
    clientY: client1.clientY - client2.clientY
  };
}

var INPUT_TAGNAMES = ["textarea", "input"];
/**
 * You can set up drag events in any browser.
 */

var Dragger = /*#__PURE__*/function () {
  /**
   *
   */
  function Dragger(targets, options) {
    var _this = this;

    if (options === void 0) {
      options = {};
    }

    this.options = {};
    this.flag = false;
    this.pinchFlag = false;
    this.datas = {};
    this.isDrag = false;
    this.isPinch = false;
    this.isMouse = false;
    this.isTouch = false;
    this.prevClients = [];
    this.startClients = [];
    this.movement = 0;
    this.startPinchClients = [];
    this.startDistance = 0;
    this.customDist = [0, 0];
    this.targets = [];
    this.prevTime = 0;
    this.isDouble = false;
    this.startRotate = 0;
    /**
     * @method
     */

    this.onDragStart = function (e, isTrusted) {
      if (isTrusted === void 0) {
        isTrusted = true;
      }

      if (!_this.flag && e.cancelable === false) {
        return;
      }

      var _a = _this.options,
          container = _a.container,
          pinchOutside = _a.pinchOutside,
          dragstart = _a.dragstart,
          preventRightClick = _a.preventRightClick,
          preventDefault = _a.preventDefault,
          checkInput = _a.checkInput;
      var isTouch = _this.isTouch;

      if (!_this.flag) {
        var activeElement = document.activeElement;
        var target = e.target;
        var tagName = target.tagName.toLowerCase();
        var hasInput = INPUT_TAGNAMES.indexOf(tagName) > -1;
        var hasContentEditable = target.isContentEditable;

        if (hasInput || hasContentEditable) {
          if (checkInput || activeElement === target) {
            // force false or already focused.
            return false;
          }

          if (activeElement && hasContentEditable && activeElement.isContentEditable && activeElement.contains(target)) {
            return false;
          }
        } else if ((preventDefault || e.type === "touchstart") && activeElement) {
          var activeTagName = activeElement.tagName;

          if (activeElement.isContentEditable || INPUT_TAGNAMES.indexOf(activeTagName) > -1) {
            activeElement.blur();
          }
        }
      }

      var timer = 0;

      if (!_this.flag && isTouch && pinchOutside) {
        timer = setTimeout(function () {
          (0, _utils.addEvent)(container, "touchstart", _this.onDragStart, {
            passive: false
          });
        });
      }

      if (_this.flag && isTouch && pinchOutside) {
        (0, _utils.removeEvent)(container, "touchstart", _this.onDragStart);
      }

      if (isMultiTouch(e)) {
        clearTimeout(timer);

        if (!_this.flag && e.touches.length !== e.changedTouches.length) {
          return;
        }

        if (!_this.pinchFlag) {
          _this.onPinchStart(e);
        }
      }

      if (_this.flag) {
        return;
      }

      var clients = _this.startClients[0] ? _this.startClients : getPositionEvent(e);
      _this.customDist = [0, 0];
      _this.flag = true;
      _this.isDrag = false;
      _this.startClients = clients;
      _this.prevClients = clients;
      _this.datas = {};
      _this.movement = 0;
      var position = getPosition(clients[0], _this.prevClients[0], _this.startClients[0]);

      if (preventRightClick && (e.which === 3 || e.button === 2)) {
        clearTimeout(timer);

        _this.initDrag();

        return false;
      }

      var result = dragstart && dragstart(__assign({
        type: "dragstart",
        datas: _this.datas,
        inputEvent: e,
        isTrusted: isTrusted
      }, position));

      if (result === false) {
        clearTimeout(timer);

        _this.initDrag();
      }

      _this.isDouble = (0, _utils.now)() - _this.prevTime < 200;
      _this.flag && preventDefault && e.preventDefault();
    };

    this.onDrag = function (e, isScroll) {
      if (!_this.flag) {
        return;
      }

      var clients = getPositionEvent(e);

      if (_this.pinchFlag) {
        _this.onPinch(e, clients);
      }

      var result = _this.move([0, 0], e, clients);

      if (!result || !result.deltaX && !result.deltaY) {
        return;
      }

      var drag = _this.options.drag;
      drag && drag(__assign({}, result, {
        isScroll: !!isScroll,
        inputEvent: e
      }));
    };

    this.onDragEnd = function (e) {
      if (!_this.flag) {
        return;
      }

      var _a = _this.options,
          dragend = _a.dragend,
          pinchOutside = _a.pinchOutside,
          container = _a.container;

      if (_this.isTouch && pinchOutside) {
        (0, _utils.removeEvent)(container, "touchstart", _this.onDragStart);
      }

      if (_this.pinchFlag) {
        _this.onPinchEnd(e);
      }

      _this.flag = false;
      var prevClients = _this.prevClients;
      var startClients = _this.startClients;
      var position = _this.pinchFlag ? getPinchDragPosition(prevClients, prevClients, startClients, _this.startPinchClients) : getPosition(prevClients[0], prevClients[0], startClients[0]);
      var currentTime = (0, _utils.now)();
      var isDouble = !_this.isDrag && _this.isDouble;
      _this.prevTime = _this.isDrag || isDouble ? 0 : currentTime;
      _this.startClients = [];
      _this.prevClients = [];
      dragend && dragend(__assign({
        type: "dragend",
        datas: _this.datas,
        isDouble: isDouble,
        isDrag: _this.isDrag,
        inputEvent: e
      }, position));
    };

    var elements = [].concat(targets);
    this.options = __assign({
      checkInput: false,
      container: elements.length > 1 ? window : elements[0],
      preventRightClick: true,
      preventDefault: true,
      pinchThreshold: 0,
      events: ["touch", "mouse"]
    }, options);
    var _a = this.options,
        container = _a.container,
        events = _a.events;
    this.isTouch = events.indexOf("touch") > -1;
    this.isMouse = events.indexOf("mouse") > -1;
    this.customDist = [0, 0];
    this.targets = elements;

    if (this.isMouse) {
      elements.forEach(function (el) {
        (0, _utils.addEvent)(el, "mousedown", _this.onDragStart);
      });
      (0, _utils.addEvent)(container, "mousemove", this.onDrag);
      (0, _utils.addEvent)(container, "mouseup", this.onDragEnd);
      (0, _utils.addEvent)(container, "contextmenu", this.onDragEnd);
    }

    if (this.isTouch) {
      var passive_1 = {
        passive: false
      };
      elements.forEach(function (el) {
        (0, _utils.addEvent)(el, "touchstart", _this.onDragStart, passive_1);
      });
      (0, _utils.addEvent)(container, "touchmove", this.onDrag, passive_1);
      (0, _utils.addEvent)(container, "touchend", this.onDragEnd, passive_1);
      (0, _utils.addEvent)(container, "touchcancel", this.onDragEnd, passive_1);
    }
  }
  /**
   *
   */


  var __proto = Dragger.prototype;

  __proto.isDragging = function () {
    return this.isDrag;
  };
  /**
   *
   */


  __proto.isFlag = function () {
    return this.flag;
  };
  /**
   *
   */


  __proto.isPinchFlag = function () {
    return this.pinchFlag;
  };
  /**
   *
   */


  __proto.isPinching = function () {
    return this.isPinch;
  };
  /**
   *
   */


  __proto.scrollBy = function (deltaX, deltaY, e, isCallDrag) {
    if (isCallDrag === void 0) {
      isCallDrag = true;
    }

    if (!this.flag) {
      return;
    }

    this.startClients.forEach(function (client) {
      client.clientX -= deltaX;
      client.clientY -= deltaY;
    });
    this.prevClients.forEach(function (client) {
      client.clientX -= deltaX;
      client.clientY -= deltaY;
    });
    isCallDrag && this.onDrag(e, true);
  };

  __proto.move = function (_a, inputEvent, clients) {
    var deltaX = _a[0],
        deltaY = _a[1];

    if (clients === void 0) {
      clients = this.prevClients;
    }

    var customDist = this.customDist;
    var prevClients = this.prevClients;
    var startClients = this.startClients;
    var position = this.pinchFlag ? getPinchDragPosition(clients, prevClients, startClients, this.startPinchClients) : getPosition(clients[0], prevClients[0], startClients[0]);
    customDist[0] += deltaX;
    customDist[1] += deltaY;
    position.deltaX += deltaX;
    position.deltaY += deltaY;
    var positionDeltaX = position.deltaX,
        positionDeltaY = position.deltaY;
    position.distX += customDist[0];
    position.distY += customDist[1];
    this.movement += Math.sqrt(positionDeltaX * positionDeltaX + positionDeltaY * positionDeltaY);
    this.prevClients = clients;
    this.isDrag = true;
    return __assign({
      type: "drag",
      datas: this.datas
    }, position, {
      movement: this.movement,
      isDrag: this.isDrag,
      isPinch: this.isPinch,
      isScroll: false,
      inputEvent: inputEvent
    });
  };

  __proto.onPinchStart = function (e) {
    var _a, _b;

    var _c = this.options,
        pinchstart = _c.pinchstart,
        pinchThreshold = _c.pinchThreshold;

    if (this.isDrag && this.movement > pinchThreshold) {
      return;
    }

    var pinchClients = getClients(e.changedTouches);
    this.pinchFlag = true;

    (_a = this.startClients).push.apply(_a, pinchClients);

    (_b = this.prevClients).push.apply(_b, pinchClients);

    this.startDistance = getDist(this.prevClients);
    this.startPinchClients = this.prevClients.slice();

    if (!pinchstart) {
      return;
    }

    var startClients = this.prevClients;
    var startAverageClient = getAverageClient(startClients);
    var centerPosition = getPosition(startAverageClient, startAverageClient, startAverageClient);
    this.startRotate = getRotatiion(startClients);
    pinchstart(__assign({
      type: "pinchstart",
      datas: this.datas,
      angle: this.startRotate,
      touches: getPositions(startClients, startClients, startClients)
    }, centerPosition, {
      inputEvent: e
    }));
  };

  __proto.onPinch = function (e, clients) {
    if (!this.flag || !this.pinchFlag || clients.length < 2) {
      return;
    }

    this.isPinch = true;
    var pinch = this.options.pinch;

    if (!pinch) {
      return;
    }

    var prevClients = this.prevClients;
    var startClients = this.startClients;
    var centerPosition = getPosition(getAverageClient(clients), getAverageClient(prevClients), getAverageClient(startClients));
    var angle = getRotatiion(clients);
    var distance = getDist(clients);
    pinch(__assign({
      type: "pinch",
      datas: this.datas,
      movement: this.movement,
      angle: angle,
      rotation: angle - this.startRotate,
      touches: getPositions(clients, prevClients, startClients),
      scale: distance / this.startDistance,
      distance: distance
    }, centerPosition, {
      inputEvent: e
    }));
  };

  __proto.onPinchEnd = function (e) {
    if (!this.flag || !this.pinchFlag) {
      return;
    }

    var isPinch = this.isPinch;
    this.isPinch = false;
    this.pinchFlag = false;
    var pinchend = this.options.pinchend;

    if (!pinchend) {
      return;
    }

    var prevClients = this.prevClients;
    var startClients = this.startClients;
    var centerPosition = getPosition(getAverageClient(prevClients), getAverageClient(prevClients), getAverageClient(startClients));
    pinchend(__assign({
      type: "pinchend",
      datas: this.datas,
      isPinch: isPinch,
      touches: getPositions(prevClients, prevClients, startClients)
    }, centerPosition, {
      inputEvent: e
    }));
    this.isPinch = false;
    this.pinchFlag = false;
  };

  __proto.triggerDragStart = function (e) {
    this.onDragStart(e, false);
  };
  /**
   *
   */


  __proto.unset = function () {
    var _this = this;

    var targets = this.targets;
    var container = this.options.container;

    if (this.isMouse) {
      targets.forEach(function (target) {
        (0, _utils.removeEvent)(target, "mousedown", _this.onDragStart);
      });
      (0, _utils.removeEvent)(container, "mousemove", this.onDrag);
      (0, _utils.removeEvent)(container, "mouseup", this.onDragEnd);
      (0, _utils.removeEvent)(container, "contextmenu", this.onDragEnd);
    }

    if (this.isTouch) {
      targets.forEach(function (target) {
        (0, _utils.removeEvent)(target, "touchstart", _this.onDragStart);
      });
      (0, _utils.removeEvent)(container, "touchstart", this.onDragStart);
      (0, _utils.removeEvent)(container, "touchmove", this.onDrag);
      (0, _utils.removeEvent)(container, "touchend", this.onDragEnd);
      (0, _utils.removeEvent)(container, "touchcancel", this.onDragEnd);
    }
  };

  __proto.initDrag = function () {
    this.startClients = [];
    this.prevClients = [];
    this.flag = false;
  };

  return Dragger;
}();

function setDrag(el, options) {
  return new Dragger(el, options);
}

var _default = Dragger;
exports.default = _default;
},{"@daybrush/utils":"HyW1"}],"RepT":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var _utils = require("@daybrush/utils");

var _keycon = _interopRequireDefault(require("keycon"));

var _drag = _interopRequireDefault(require("@daybrush/drag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Copyright (c) 2019 Daybrush
name: preact-timeline
license: MIT
author: Daybrush
repository: git+https://github.com/daybrush/scenejs-timeline.git
version: 0.3.1
*/

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

/* global Reflect, Promise */
var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
  };

  return extendStatics(d, b);
};

function __extends(d, b) {
  extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __extends$1 = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var ELEMENTS = 'a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan'.split(' ');
var REACT_ELEMENT_TYPE = typeof Symbol !== 'undefined' && Symbol.for && Symbol.for('react.element') || 0xeac7;
var COMPONENT_WRAPPER_KEY = typeof Symbol !== 'undefined' && Symbol.for ? Symbol.for('__preactCompatWrapper') : '__preactCompatWrapper'; // don't autobind these methods since they already have guaranteed context.

var AUTOBIND_BLACKLIST = {
  constructor: 1,
  render: 1,
  shouldComponentUpdate: 1,
  componentWillReceiveProps: 1,
  componentWillUpdate: 1,
  componentDidUpdate: 1,
  componentWillMount: 1,
  componentDidMount: 1,
  componentWillUnmount: 1,
  componentDidUnmount: 1
};
var CAMEL_PROPS = /^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vector|vert|word|writing|x)[A-Z]/;
var BYPASS_HOOK = {};
/*global process*/

var DEV = false;

try {
  DEV = "production" !== 'production';
} catch (e) {} // make react think we're react.


var VNode = (0, _preact.h)('a', null).constructor;
VNode.prototype.$$typeof = REACT_ELEMENT_TYPE;
VNode.prototype.preactCompatUpgraded = false;
VNode.prototype.preactCompatNormalized = false;
Object.defineProperty(VNode.prototype, 'type', {
  get: function () {
    return this.nodeName;
  },
  set: function (v) {
    this.nodeName = v;
  },
  configurable: true
});
Object.defineProperty(VNode.prototype, 'props', {
  get: function () {
    return this.attributes;
  },
  set: function (v) {
    this.attributes = v;
  },
  configurable: true
});
var oldEventHook = _preact.options.event;

_preact.options.event = function (e) {
  if (oldEventHook) {
    e = oldEventHook(e);
  }

  e.persist = Object;
  e.nativeEvent = e;
  return e;
};

var oldVnodeHook = _preact.options.vnode;

_preact.options.vnode = function (vnode) {
  if (!vnode.preactCompatUpgraded) {
    vnode.preactCompatUpgraded = true;
    var tag = vnode.nodeName,
        attrs = vnode.attributes = vnode.attributes == null ? {} : extend({}, vnode.attributes);

    if (typeof tag === 'function') {
      if (tag[COMPONENT_WRAPPER_KEY] === true || tag.prototype && 'isReactComponent' in tag.prototype) {
        if (vnode.children && String(vnode.children) === '') {
          vnode.children = undefined;
        }

        if (vnode.children) {
          attrs.children = vnode.children;
        }

        if (!vnode.preactCompatNormalized) {
          normalizeVNode(vnode);
        }

        handleComponentVNode(vnode);
      }
    } else {
      if (vnode.children && String(vnode.children) === '') {
        vnode.children = undefined;
      }

      if (vnode.children) {
        attrs.children = vnode.children;
      }

      if (attrs.defaultValue) {
        if (!attrs.value && attrs.value !== 0) {
          attrs.value = attrs.defaultValue;
        }

        delete attrs.defaultValue;
      }

      handleElementVNode(vnode, attrs);
    }
  }

  if (oldVnodeHook) {
    oldVnodeHook(vnode);
  }
};

function handleComponentVNode(vnode) {
  var tag = vnode.nodeName,
      a = vnode.attributes;
  vnode.attributes = {};

  if (tag.defaultProps) {
    extend(vnode.attributes, tag.defaultProps);
  }

  if (a) {
    extend(vnode.attributes, a);
  }
}

function handleElementVNode(vnode, a) {
  var shouldSanitize, attrs, i;

  if (a) {
    for (i in a) {
      if (shouldSanitize = CAMEL_PROPS.test(i)) {
        break;
      }
    }

    if (shouldSanitize) {
      attrs = vnode.attributes = {};

      for (i in a) {
        if (a.hasOwnProperty(i)) {
          attrs[CAMEL_PROPS.test(i) ? i.replace(/([A-Z0-9])/, '-$1').toLowerCase() : i] = a[i];
        }
      }
    }
  }
}

var ContextProvider = function () {};

ContextProvider.prototype.getChildContext = function () {
  return this.props.context;
};

ContextProvider.prototype.render = function (props) {
  return props.children[0];
};

var ARR = [];
/** Track current render() component for ref assignment */

var currentComponent;

function createFactory(type) {
  return createElement.bind(null, type);
}

var DOM = {};

for (var i = ELEMENTS.length; i--;) {
  DOM[ELEMENTS[i]] = createFactory(ELEMENTS[i]);
}

function upgradeToVNodes(arr, offset) {
  for (var i = offset || 0; i < arr.length; i++) {
    var obj = arr[i];

    if (Array.isArray(obj)) {
      upgradeToVNodes(obj);
    } else if (obj && typeof obj === 'object' && !isValidElement(obj) && (obj.props && obj.type || obj.attributes && obj.nodeName || obj.children)) {
      arr[i] = createElement(obj.type || obj.nodeName, obj.props || obj.attributes, obj.children);
    }
  }
}

function isStatelessComponent(c) {
  return typeof c === 'function' && !(c.prototype && c.prototype.render);
} // wraps stateless functional components in a PropTypes validator


function wrapStatelessComponent(WrappedComponent) {
  return createClass({
    displayName: WrappedComponent.displayName || WrappedComponent.name,
    render: function () {
      return WrappedComponent(this.props, this.context);
    }
  });
}

function statelessComponentHook(Ctor) {
  var Wrapped = Ctor[COMPONENT_WRAPPER_KEY];

  if (Wrapped) {
    return Wrapped === true ? Ctor : Wrapped;
  }

  Wrapped = wrapStatelessComponent(Ctor);
  Object.defineProperty(Wrapped, COMPONENT_WRAPPER_KEY, {
    configurable: true,
    value: true
  });
  Wrapped.displayName = Ctor.displayName;
  Wrapped.propTypes = Ctor.propTypes;
  Wrapped.defaultProps = Ctor.defaultProps;
  Object.defineProperty(Ctor, COMPONENT_WRAPPER_KEY, {
    configurable: true,
    value: Wrapped
  });
  return Wrapped;
}

function createElement() {
  var args = [],
      len = arguments.length;

  while (len--) args[len] = arguments[len];

  upgradeToVNodes(args, 2);
  return normalizeVNode(_preact.h.apply(void 0, args));
}

function normalizeVNode(vnode) {
  vnode.preactCompatNormalized = true;
  applyClassName(vnode);

  if (isStatelessComponent(vnode.nodeName)) {
    vnode.nodeName = statelessComponentHook(vnode.nodeName);
  }

  var ref = vnode.attributes.ref,
      type = ref && typeof ref;

  if (currentComponent && (type === 'string' || type === 'number')) {
    vnode.attributes.ref = createStringRefProxy(ref, currentComponent);
  }

  applyEventNormalization(vnode);
  return vnode;
}

function isValidElement(element) {
  return element && (element instanceof VNode || element.$$typeof === REACT_ELEMENT_TYPE);
}

function createStringRefProxy(name, component) {
  return component._refProxies[name] || (component._refProxies[name] = function (resolved) {
    if (component && component.refs) {
      component.refs[name] = resolved;

      if (resolved === null) {
        delete component._refProxies[name];
        component = null;
      }
    }
  });
}

function applyEventNormalization(ref) {
  var nodeName = ref.nodeName;
  var attributes = ref.attributes;

  if (!attributes || typeof nodeName !== 'string') {
    return;
  }

  var props = {};

  for (var i in attributes) {
    props[i.toLowerCase()] = i;
  }

  if (props.ondoubleclick) {
    attributes.ondblclick = attributes[props.ondoubleclick];
    delete attributes[props.ondoubleclick];
  } // for *textual inputs* (incl textarea), normalize `onChange` -> `onInput`:


  if (props.onchange && (nodeName === 'textarea' || nodeName.toLowerCase() === 'input' && !/^fil|che|rad/i.test(attributes.type))) {
    var normalized = props.oninput || 'oninput';

    if (!attributes[normalized]) {
      attributes[normalized] = multihook([attributes[normalized], attributes[props.onchange]]);
      delete attributes[props.onchange];
    }
  }
}

function applyClassName(vnode) {
  var a = vnode.attributes || (vnode.attributes = {});
  classNameDescriptor.enumerable = 'className' in a;

  if (a.className) {
    a.class = a.className;
  }

  Object.defineProperty(a, 'className', classNameDescriptor);
}

var classNameDescriptor = {
  configurable: true,
  get: function () {
    return this.class;
  },
  set: function (v) {
    this.class = v;
  }
};

function extend(base, props) {
  var arguments$1 = arguments;

  for (var i = 1, obj = void 0; i < arguments.length; i++) {
    if (obj = arguments$1[i]) {
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          base[key] = obj[key];
        }
      }
    }
  }

  return base;
}

function shallowDiffers(a, b) {
  for (var i in a) {
    if (!(i in b)) {
      return true;
    }
  }

  for (var i$1 in b) {
    if (a[i$1] !== b[i$1]) {
      return true;
    }
  }

  return false;
}

function findDOMNode(component) {
  return component && (component.base || component.nodeType === 1 && component) || null;
}

function F() {}

function createClass(obj) {
  function cl(props, context) {
    bindAll(this);
    Component$1.call(this, props, context, BYPASS_HOOK);
    newComponentHook.call(this, props, context);
  }

  obj = extend({
    constructor: cl
  }, obj); // We need to apply mixins here so that getDefaultProps is correctly mixed

  if (obj.mixins) {
    applyMixins(obj, collateMixins(obj.mixins));
  }

  if (obj.statics) {
    extend(cl, obj.statics);
  }

  if (obj.propTypes) {
    cl.propTypes = obj.propTypes;
  }

  if (obj.defaultProps) {
    cl.defaultProps = obj.defaultProps;
  }

  if (obj.getDefaultProps) {
    cl.defaultProps = obj.getDefaultProps.call(cl);
  }

  F.prototype = Component$1.prototype;
  cl.prototype = extend(new F(), obj);
  cl.displayName = obj.displayName || 'Component';
  return cl;
} // Flatten an Array of mixins to a map of method name to mixin implementations


function collateMixins(mixins) {
  var keyed = {};

  for (var i = 0; i < mixins.length; i++) {
    var mixin = mixins[i];

    for (var key in mixin) {
      if (mixin.hasOwnProperty(key) && typeof mixin[key] === 'function') {
        (keyed[key] || (keyed[key] = [])).push(mixin[key]);
      }
    }
  }

  return keyed;
} // apply a mapping of Arrays of mixin methods to a component prototype


function applyMixins(proto, mixins) {
  for (var key in mixins) {
    if (mixins.hasOwnProperty(key)) {
      proto[key] = multihook(mixins[key].concat(proto[key] || ARR), key === 'getDefaultProps' || key === 'getInitialState' || key === 'getChildContext');
    }
  }
}

function bindAll(ctx) {
  for (var i in ctx) {
    var v = ctx[i];

    if (typeof v === 'function' && !v.__bound && !AUTOBIND_BLACKLIST.hasOwnProperty(i)) {
      (ctx[i] = v.bind(ctx)).__bound = true;
    }
  }
}

function callMethod(ctx, m, args) {
  if (typeof m === 'string') {
    m = ctx.constructor.prototype[m];
  }

  if (typeof m === 'function') {
    return m.apply(ctx, args);
  }
}

function multihook(hooks, skipDuplicates) {
  return function () {
    var arguments$1 = arguments;
    var this$1 = this;
    var ret;

    for (var i = 0; i < hooks.length; i++) {
      var r = callMethod(this$1, hooks[i], arguments$1);

      if (skipDuplicates && r != null) {
        if (!ret) {
          ret = {};
        }

        for (var key in r) {
          if (r.hasOwnProperty(key)) {
            ret[key] = r[key];
          }
        }
      } else if (typeof r !== 'undefined') {
        ret = r;
      }
    }

    return ret;
  };
}

function newComponentHook(props, context) {
  propsHook.call(this, props, context);
  this.componentWillReceiveProps = multihook([propsHook, this.componentWillReceiveProps || 'componentWillReceiveProps']);
  this.render = multihook([propsHook, beforeRender, this.render || 'render', afterRender]);
}

function propsHook(props, context) {
  if (!props) {
    return;
  } // React annoyingly special-cases single children, and some react components are ridiculously strict about this.


  var c = props.children;

  if (c && Array.isArray(c) && c.length === 1 && (typeof c[0] === 'string' || typeof c[0] === 'function' || c[0] instanceof VNode)) {
    props.children = c[0]; // but its totally still going to be an Array.

    if (props.children && typeof props.children === 'object') {
      props.children.length = 1;
      props.children[0] = props.children;
    }
  } // add proptype checking


  if (DEV) {
    var ctor = typeof this === 'function' ? this : this.constructor,
        propTypes = this.propTypes || ctor.propTypes;
    var displayName = this.displayName || ctor.name;
  }
}

function beforeRender(props) {
  currentComponent = this;
}

function afterRender() {
  if (currentComponent === this) {
    currentComponent = null;
  }
}

function Component$1(props, context, opts) {
  _preact.Component.call(this, props, context);

  this.state = this.getInitialState ? this.getInitialState() : {};
  this.refs = {};
  this._refProxies = {};

  if (opts !== BYPASS_HOOK) {
    newComponentHook.call(this, props, context);
  }
}

extend(Component$1.prototype = new _preact.Component(), {
  constructor: Component$1,
  isReactComponent: {},
  replaceState: function (state, callback) {
    var this$1 = this;
    this.setState(state, callback);

    for (var i in this$1.state) {
      if (!(i in state)) {
        delete this$1.state[i];
      }
    }
  },
  getDOMNode: function () {
    return this.base;
  },
  isMounted: function () {
    return !!this.base;
  }
});

function PureComponent(props, context) {
  Component$1.call(this, props, context);
}

F.prototype = Component$1.prototype;
PureComponent.prototype = new F();
PureComponent.prototype.isPureReactComponent = true;

PureComponent.prototype.shouldComponentUpdate = function (props, state) {
  return shallowDiffers(this.props, props) || shallowDiffers(this.state, state);
};
/*
Copyright (c) 2019 Daybrush
name: framework-utils
license: MIT
author: Daybrush
repository: git+https://github.com/daybrush/framework-utils.git
version: 0.2.1
*/


function prefixNames(prefix) {
  var classNames = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    classNames[_i - 1] = arguments[_i];
  }

  return classNames.map(function (className) {
    return className.split(" ").map(function (name) {
      return name ? "" + prefix + name : "";
    }).join(" ");
  }).join(" ");
}

function prefixCSS(prefix, css) {
  return css.replace(/\.([^{,\s\d.]+)/g, "." + prefix + "$1");
}
/* react */


function ref(target, name) {
  return function (e) {
    e && (target[name] = e);
  };
}

function refs(target, name, i) {
  return function (e) {
    e && (target[name][i] = e);
  };
}
/*
Copyright (c) 2016 Daybrush
name: scenejs
license: MIT
author: Daybrush
repository: https://github.com/daybrush/scenejs.git
version: 1.5.0
*/


function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
}

var _a;

var TIMING_FUNCTION = "animation-timing-function";
var ROLES = {
  transform: {},
  filter: {},
  attribute: {},
  html: true
};
var FIXED = (_a = {}, _a[TIMING_FUNCTION] = true, _a.contents = true, _a.html = true, _a);
var DURATION = "duration";
var FILL_MODE = "fillMode";
var DIRECTION = "direction";
var ITERATION_COUNT = "iterationCount";
var DELAY = "delay";
var EASING = "easing";
var PLAY_SPEED = "playSpeed";
var EASING_NAME = "easingName";
var ITERATION_TIME = "iterationTime";
var PLAY_STATE = "playState";
/**
* @typedef {Object} AnimatorState The Animator options. Properties used in css animation.
* @property {number} [duration] The duration property defines how long an animation should take to complete one cycle.
* @property {"none"|"forwards"|"backwards"|"both"} [fillMode] The fillMode property specifies a style for the element when the animation is not playing (before it starts, after it ends, or both).
* @property {"infinite"|number} [iterationCount] The iterationCount property specifies the number of times an animation should be played.
* @property {array|function} [easing] The easing(timing-function) specifies the speed curve of an animation.
* @property {number} [delay] The delay property specifies a delay for the start of an animation.
* @property {"normal"|"reverse"|"alternate"|"alternate-reverse"} [direction] The direction property defines whether an animation should be played forwards, backwards or in alternate cycles.
*/

var setters = ["id", ITERATION_COUNT, DELAY, FILL_MODE, DIRECTION, PLAY_SPEED, DURATION, PLAY_SPEED, ITERATION_TIME, PLAY_STATE];

var getters = __spreadArrays(setters, [EASING, EASING_NAME]);
/*
Copyright (c) 2019 Daybrush
name: react-pure-props
license: MIT
author: Daybrush
repository: https://github.com/daybrush/pure-props/tree/master/react-pure-props
version: 0.1.5
*/

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

/* global Reflect, Promise */


var extendStatics$1 = function (d, b) {
  extendStatics$1 = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
  };

  return extendStatics$1(d, b);
};

function __extends$2(d, b) {
  extendStatics$1(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
} //


var shallowequal = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB); // Test for A's keys different from B.

  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];
    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || ret === void 0 && valueA !== valueB) {
      return false;
    }
  }

  return true;
};

var PureProps = /*#__PURE__*/function (_super) {
  __extends$2(PureProps, _super);

  function PureProps() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  var __proto = PureProps.prototype;

  __proto.shouldComponentUpdate = function (prevProps, prevState) {
    return prevState !== this.state || !shallowequal(prevProps, this.props);
  };

  return PureProps;
}(Component$1);
/*
Copyright (c) 2019 Daybrush
name: react-css-styler
license: MIT
author: Daybrush
repository: https://github.com/daybrush/css-styler/tree/master/react-css-styler
version: 0.4.1
*/

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

/* global Reflect, Promise */


var extendStatics$2 = function (d, b) {
  extendStatics$2 = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
  };

  return extendStatics$2(d, b);
};

function __extends$3(d, b) {
  extendStatics$2(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign$1 = function () {
  __assign$1 = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign$1.apply(this, arguments);
};

function __rest(s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}

function hash(str) {
  var hash = 5381,
      i = str.length;

  while (i) {
    hash = hash * 33 ^ str.charCodeAt(--i);
  }
  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */


  return hash >>> 0;
}

var stringHash = hash;

function getHash(str) {
  return stringHash(str).toString(36);
}

function injectStyle(className, css) {
  var style = document.createElement("style");
  style.setAttribute("type", "text/css");
  style.innerHTML = css.replace(/([^}{]*){/mg, function (all, selector) {
    return (0, _utils.splitComma)(selector).map(function (subSelector) {
      if (subSelector.indexOf(":global") > -1) {
        return subSelector.replace(/\:global/g, "");
      } else if (subSelector.indexOf(":host") > -1) {
        return "" + subSelector.replace(/\:host/g, "." + className);
      }

      return "." + className + " " + subSelector;
    }).join(", ") + "{";
  });
  (document.head || document.body).appendChild(style);
  return style;
}

function styled(Tag, css) {
  var injectClassName = "rCS" + getHash(css);
  var injectCount = 0;
  var injectElement;
  return /*#__PURE__*/function (_super) {
    __extends$3(Styler, _super);

    function Styler(props) {
      return _super.call(this, props) || this;
    }

    Styler.prototype.render = function () {
      var _a = this.props,
          className = _a.className,
          attributes = __rest(_a, ["className"]);

      return createElement(Tag, __assign$1({
        className: className + " " + injectClassName
      }, attributes));
    };

    Styler.prototype.componentDidMount = function () {
      if (injectCount === 0) {
        injectElement = injectStyle(injectClassName, css);
      }

      ++injectCount;
    };

    Styler.prototype.componentWillUnmount = function () {
      --injectCount;

      if (injectCount === 0 && injectElement) {
        injectElement.parentNode.removeChild(injectElement);
      }
    };

    Styler.prototype.getElement = function () {
      return this.element || (this.element = findDOMNode(this));
    };

    return Styler;
  }(Component$1);
}
/*
Copyright (c) 2019 Daybrush
name: react-scenejs-timeline
license: MIT
author: Daybrush
repository: git+https://github.com/daybrush/scenejs-timeline.git
version: 0.3.2
*/

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

/* global Reflect, Promise */


var extendStatics$3 = function (d, b) {
  extendStatics$3 = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
  };

  return extendStatics$3(d, b);
};

function __extends$4(d, b) {
  extendStatics$3(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign$2 = function () {
  __assign$2 = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign$2.apply(this, arguments);
};

function __rest$1(s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
  return t;
}

var PREFIX = "scenejs-editor-";
var CSS = prefixCSS(PREFIX, "\n{\n    position: relative;\n    width: 100%;\n    font-size: 0;\n    background: #000;\n    display: flex;\n    flex-direction: column;\n}\n* {\n    font-family: sans-serif;\n    box-sizing: border-box;\n    color: #fff;\n}\n.header-area, .scroll-area {\n   width: 100%;\n   position: relative;\n  display: flex;\n  -webkit-align-items: flex-start;\n  align-items: flex-start;\n}\n.header-area {\n  position: relative;\n  z-index: 10;\n  top: 0;\n  height: 30px;\n  min-height: 30px;\n}\n.header-area .keyframes {\n  padding: 0px;\n}\n.header-area .properties-area,\n.header-area .keyframes-area,\n.header-area .values-area,\n.header-area .keyframes-scroll-area {\n    height: 100%;\n}\n.header-area .keyframes-scroll-area {\n    overflow: hidden;\n}\n.header-area .property, .header-area .value, .header-area .keyframes {\n  height: 100%;\n}\n.header-area .property {\n    line-height: 30px;\n}\n.value .add {\n    text-align: center;\n    color: #fff;\n    line-height: 30px;\n    font-weight: bold;\n    font-size: 20px;\n    cursor: pointer;\n}\n.header-area .keyframes-area::-webkit-scrollbar {\n    display: none;\n}\n.header-area .keyframe-cursor {\n    position: absolute;\n    border-top: 10px solid #4af;\n    border-left: 6px solid transparent;\n    border-right: 6px solid transparent;\n    width: 0;\n    height: 0;\n    bottom: 0;\n    top: auto;\n    background: none;\n    cursor: pointer;\n}\n.control-area .keyframes {\n    padding-left: 10px;\n}\n.play-control-area {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n.play-control-area .control {\n    position: relative;\n    display: inline-block;\n    vertical-align: middle;\n    color: white;\n    margin: 0px 15px;\n    cursor: pointer;\n}\n.play {\n    border-left: 14px solid white;\n    border-top: 8px solid transparent;\n    border-bottom: 8px solid transparent;\n}\n.pause {\n    border-left: 4px solid #fff;\n    border-right: 4px solid #fff;\n    width: 14px;\n    height: 16px;\n}\n.prev {\n    border-right: 10px solid white;\n    border-top: 6px solid transparent;\n    border-bottom: 6px solid transparent;\n}\n.prev:before {\n    position: absolute;\n    content: \"\";\n    width: 3px;\n    height: 10px;\n    top: 0;\n    right: 100%;\n    transform: translate(0, -50%);\n    background: white;\n}\n.next {\n    border-left: 10px solid white;\n    border-top: 6px solid transparent;\n    border-bottom: 6px solid transparent;\n}\n.next:before {\n    position: absolute;\n    content: \"\";\n    width: 3px;\n    height: 10px;\n    top: 0;\n    transform: translate(0, -50%);\n    background: white;\n}\n.keytime {\n  position: relative;\n  display: inline-block;\n  height: 100%;\n  font-size: 13px;\n  font-weight: bold;\n  color: #777;\n}\n.keytime:last-child {\n  max-width: 0px;\n}\n.keytime span {\n  position: absolute;\n  line-height: 1;\n  bottom: 12px;\n  display: inline-block;\n  transform: translate(-50%);\n  color: #eee;\n}\n.keytime .graduation {\n  position: absolute;\n  bottom: 0;\n  width: 1px;\n  height: 10px;\n  background: #666;\n  transform: translate(-50%);\n}\n.keytime .graduation.half {\n  left: 50%;\n  height: 7px;\n}\n.keytime .graduation.quarter {\n  left: 25%;\n  height: 5px;\n}\n.keytime .graduation.quarter3 {\n  left: 75%;\n  height: 5px;\n}\n.scroll-area {\n  position: relative;\n  width: 100%;\n  height: calc(100% - 60px);\n  overflow: auto;\n}\n.properties-area, .keyframes-area, .values-area {\n  display: inline-block;\n  position: relative;\n  font-size: 16px;\n  overflow: auto;\n}\n\n.properties-area::-webkit-scrollbar, .keyframes-area::-webkit-scrollbar {\n    display: none;\n}\n.properties-area {\n  width: 30%;\n  max-width: 200px;\n  box-sizing: border-box;\n}\n.values-area {\n    width: 50px;\n    min-width: 50px;\n    display: inline-block;\n    border-right: 1px solid #666;\n    box-sizing: border-box;\n}\n.value input {\n    appearance: none;\n    -webkit-appearance: none;\n    outline: none;\n    position: relative;\n    display: block;\n    width: 100%;\n    height: 100%;\n    background: transparent;\n    color: #4af;\n    font-weight: bold;\n    background: none;\n    border: 0;\n    box-sizing: border-box;\n    text-align: center;\n}\n.value {\n\n}\n:host.alt .value input {\n    cursor: ew-resize;\n}\n.value[data-object=\"1\"] input {\n    display: none;\n}\n.properties-scroll-area {\n  display: inline-block;\n  min-width: 100%;\n}\n.keyframes-area {\n  flex: 1;\n}\n.keyframes-scroll-area {\n  position: relative;\n  min-width: 300px;\n}\n.keyframes, .property, .value {\n  position: relative;\n  height: 30px;\n  line-height: 30px;\n  border-bottom: 1px solid #555;\n  box-sizing: border-box;\n  white-space: nowrap;\n  background: rgba(90, 90, 90, 0.7);\n  z-index: 1;\n}\n\n.property {\n  padding-left: 10px;\n  box-sizing: border-box;\n  font-size: 13px;\n  font-weight: bold;\n  color: #eee;\n}\n.property .remove {\n    position: absolute;\n    display: inline-block;\n    cursor: pointer;\n    width: 18px;\n    height: 18px;\n    top: 0;\n    bottom: 0;\n    right: 10px;\n    margin: auto;\n    border-radius: 50%;\n    border: 2px solid #fff;\n    vertical-align: middle;\n    display: none;\n    margin-left: 10px;\n    box-sizing: border-box;\n}\n.property .remove:before, .property .remove:after {\n    position: absolute;\n    content: \"\";\n    width: 8px;\n    height: 2px;\n    border-radius: 1px;\n    background: #fff;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    margin: auto;\n}\n.property .remove:before {\n    transform: rotate(45deg);\n}\n.property .remove:after {\n    transform: rotate(-45deg);\n}\n.property:hover .remove {\n    display: inline-block;\n}\n\n[data-item=\"1\"], [data-item=\"1\"] .add {\n    height: 30px;\n    line-height: 30px;\n}\n.time-area {\n    position: absolute;\n    top: 0;\n    left: 10px;\n    font-size: 13px;\n    color: #4af;\n    line-height: 30px;\n    font-weight: bold;\n    height: 100%;\n    line-height: 30px;\n    border: 0;\n    background: transparent;\n    outline: 0;\n}\n.time-area:after {\n    content: \"s\";\n}\n.property .arrow {\n    position: relative;\n    display: inline-block;\n    width: 20px;\n    height: 25px;\n    cursor: pointer;\n    vertical-align: middle;\n}\n.property .arrow:after {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    right: 0;\n    left: 0;\n    bottom: 0;\n    margin: auto;\n    width: 0;\n    height: 0;\n    border-top: 6px solid #eee;\n    border-left: 4px solid transparent;\n    border-right: 4px solid transparent;\n}\n.property[data-fold=\"1\"] .arrow:after {\n    border-top: 4px solid transparent;\n    border-bottom: 4px solid transparent;\n    border-right: 0;\n    border-left: 6px solid #eee;\n}\n.property[data-object=\"0\"] .arrow {\n    display: none;\n}\n.property.fold, .keyframes.fold, .value.fold {\n    display: none;\n}\n.property.select, .value.select, .keyframes.select {\n    background: rgba(120, 120, 120, 0.7);\n}\n.keyframes {\n\n}\n.keyframe-delay {\n  position: absolute;\n  top: 3px;\n  bottom: 3px;\n  left: 0;\n  background: #4af;\n  opacity: 0.2;\n  z-index: 0;\n}\n.keyframe-group {\n    position: absolute;\n    top: 3px;\n    bottom: 3px;\n    left: 0;\n    background: #4af;\n    opacity: 0.6;\n    border: 1px solid rgba(0, 0, 0, 0.2);\n    border-left-color: rgba(255, 255, 255, 0.2);\n    border-top-color: rgba(255, 255, 255, 0.2);\n    z-index: 0;\n}\n.keyframe-line {\n  position: absolute;\n  height: 8px;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  background: #666;\n  z-index: 0;\n}\n.keyframe {\n  position: absolute;\n  font-size: 0px;\n  width: 12px;\n  height: 12px;\n  top: 0px;\n  bottom: 0px;\n  margin: auto;\n  background: #fff;\n  border: 2px solid #383838;\n  border-radius: 2px;\n  box-sizing: border-box;\n  transform: translate(-50%) rotate(45deg);\n  z-index: 1;\n  cursor: pointer;\n}\n.keyframe[data-no=\"1\"] {\n    opacity: 0.2;\n}\n.select .keyframe {\n    border-color: #555;\n}\n.keyframe.select {\n    background: #4af;\n}\n.keyframes-container, .line-area {\n  position: relative;\n  width: calc(100% - 30px);\n  left: 15px;\n  height: 100%;\n}\n.line-area {\n  position: absolute;\n  top: 0;\n  z-index: 0;\n}\n.keyframe-cursor {\n  position: absolute;\n  top: 0;\n  z-index: 1;\n  background: #4af;\n  width: 1px;\n  height: 100%;\n  left: 15px;\n  transform: translate(-50%);\n}\n.scroll-area .keyframe-cursor {\n  pointer-events: none;\n}\n.division-line {\n  position: absolute;\n  background: #333;\n  width: 1px;\n  height: 100%;\n  transform: translate(-50%);\n}\n");
var DIRECTION$1 = "direction";
var ITERATION_COUNT$1 = "iterationCount";
var DELAY$1 = "delay";
var PLAY_SPEED$1 = "playSpeed";
var ALTERNATE = "alternate";
var REVERSE = "reverse";
var ALTERNATE_REVERSE = "alternate-reverse";
var INFINITE = "infinite";

function numberFormat(num, count, isRight) {
  var length = ("" + num).length;
  var arr = [];

  if (isRight) {
    arr.push(num);
  }

  for (var i = length; i < count; ++i) {
    arr.push(0);
  }

  if (!isRight) {
    arr.push(num);
  }

  return arr.join("");
}

function keys(value) {
  var arr = [];

  for (var name in value) {
    arr.push(name);
  }

  return arr;
}

function toValue(value) {
  if ((0, _utils.isObject)(value)) {
    if (Array.isArray(value)) {
      return "[" + value.join(", ") + "]";
    }

    return "{" + keys(value).map(function (k) {
      return k + ": " + toValue(value[k]);
    }).join(", ") + "}";
  }

  return value;
}

function flatObject(obj, newObj) {
  if (newObj === void 0) {
    newObj = {};
  }

  for (var name in obj) {
    var value = obj[name];

    if ((0, _utils.isObject)(value)) {
      var nextObj = flatObject(isFrame(value) ? value.get() : value);

      for (var nextName in nextObj) {
        newObj[name + "///" + nextName] = nextObj[nextName];
      }
    } else {
      newObj[name] = value;
    }
  }

  return newObj;
}

function getTarget(target, conditionCallback) {
  var parentTarget = target;

  while (parentTarget && parentTarget !== document.body) {
    if (conditionCallback(parentTarget)) {
      return parentTarget;
    }

    parentTarget = parentTarget.parentNode;
  }

  return null;
}

function hasClass(target, className) {
  return (0, _utils.hasClass)(target, "" + PREFIX + className);
}

function isScene(value) {
  return value && !!value.constructor.prototype.getItem;
}

function isFrame(value) {
  return value && !!value.constructor.prototype.toCSS;
}

function findElementIndexByPosition(elements, pos) {
  return (0, _utils.findIndex)(elements, function (el) {
    var box = el.getBoundingClientRect();
    var top = box.top;
    var bottom = top + box.height;
    return top <= pos && pos < bottom;
  });
}

function prefix() {
  var classNames = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    classNames[_i] = arguments[_i];
  }

  return prefixNames.apply(void 0, [PREFIX].concat(classNames));
}

function checkFolded(foldedInfo, names) {
  var index = (0, _utils.findIndex)(names, function (name, i) {
    return foldedInfo[names.slice(0, i + 1).join("///") + "///"];
  });

  if (index > -1) {
    if (index === names.length - 1) {
      return 2;
    }

    return 1;
  } else {
    return 0;
  }
}

function fold(target, foldedProperty, isNotUpdate) {
  var id = foldedProperty + "///";
  var foldedInfo = target.state.foldedInfo;
  foldedInfo[id] = !foldedInfo[id];

  if (!isNotUpdate) {
    target.setState({
      foldedInfo: __assign$2({}, foldedInfo)
    });
  }
}

var ElementComponent = /*#__PURE__*/function (_super) {
  __extends$4(ElementComponent, _super);

  function ElementComponent() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  var __proto = ElementComponent.prototype;

  __proto.getElement = function () {
    return this.element || (this.element = findDOMNode(this));
  };

  return ElementComponent;
}(PureComponent);

var TimeArea = /*#__PURE__*/function (_super) {
  __extends$4(TimeArea, _super);

  function TimeArea() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  var __proto = TimeArea.prototype;

  __proto.render = function () {
    return createElement("input", {
      className: prefix("time-area")
    });
  };

  __proto.componentDidMount = function () {
    var _this = this;

    new _keycon.default(this.getElement()).keydown(function (e) {
      !e.isToggle && e.inputEvent.stopPropagation();
    }).keyup(function (e) {
      !e.isToggle && e.inputEvent.stopPropagation();
    }).keyup("enter", function () {
      // go to time
      var value = _this.getElement().value;

      var result = /(\d+):(\d+):(\d+)/g.exec(value);

      if (!result) {
        return;
      }

      var minute = parseFloat(result[1]);
      var second = parseFloat(result[2]);
      var milisecond = parseFloat("0." + result[3]);
      var time = minute * 60 + second + milisecond;

      _this.props.timeline.setTime(time);
    });
  };

  return TimeArea;
}(ElementComponent);

var ControlArea = /*#__PURE__*/function (_super) {
  __extends$4(ControlArea, _super);

  function ControlArea() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.state = {
      isPlay: false
    };

    _this.play = function () {
      _this.setState({
        isPlay: true
      });
    };

    _this.pause = function () {
      _this.setState({
        isPlay: false
      });
    };

    _this.togglePlay = function () {
      _this.props.timeline.togglePlay();
    };

    _this.prev = function () {
      _this.props.timeline.prev();
    };

    _this.next = function () {
      _this.props.timeline.next();
    };

    _this.unselect = function () {
      _this.props.timeline.select("", -1);
    };

    return _this;
  }

  var __proto = ControlArea.prototype;

  __proto.render = function () {
    var timeline = this.props.timeline;
    return createElement("div", {
      className: prefix("control-area header-area")
    }, createElement("div", {
      className: prefix("properties-area"),
      onClick: this.unselect
    }, createElement("div", {
      className: prefix("property")
    })), createElement("div", {
      className: prefix("values-area")
    }, createElement("div", {
      className: prefix("value")
    })), createElement("div", {
      className: prefix("keyframes-area")
    }, createElement("div", {
      className: prefix("keyframes")
    }, createElement(TimeArea, {
      ref: ref(this, "timeArea"),
      timeline: timeline
    }), createElement("div", {
      className: prefix("play-control-area")
    }, createElement("div", {
      className: prefix("control prev"),
      onClick: this.prev
    }), createElement("div", {
      className: prefix("control " + (this.state.isPlay ? "pause" : "play")),
      onClick: this.togglePlay
    }), createElement("div", {
      className: prefix("control next"),
      onClick: this.next
    })))));
  };

  __proto.componentDidMount = function () {
    this.initScene(this.props.scene);
  };

  __proto.componentDidUpdate = function (prevProps) {
    if (prevProps.scene !== this.props.scene) {
      this.initScene(this.props.scene);
      this.releaseScene(prevProps.scene);
    }
  };

  __proto.componentWillUnmount = function () {
    this.releaseScene(this.props.scene);
  };

  __proto.initScene = function (scene) {
    if (!scene) {
      return;
    }

    scene.on({
      play: this.play,
      paused: this.pause
    });
  };

  __proto.releaseScene = function (scene) {
    if (!scene) {
      return;
    }

    scene.off("play", this.play);
    scene.off("paused", this.pause);
  };

  return ControlArea;
}(ElementComponent);

var KeyframeCursor = /*#__PURE__*/function (_super) {
  __extends$4(KeyframeCursor, _super);

  function KeyframeCursor() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  var __proto = KeyframeCursor.prototype;

  __proto.render = function () {
    return createElement("div", {
      className: prefix("keyframe-cursor")
    });
  };

  return KeyframeCursor;
}(ElementComponent);

var KeytimesArea = /*#__PURE__*/function (_super) {
  __extends$4(KeytimesArea, _super);

  function KeytimesArea() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.onWheel = function (e) {
      var timeline = _this.props.timeline;
      var delta = e.deltaY;
      timeline.setZoom(timeline.getZoom() + delta / 5000);
      !e.deltaX && e.preventDefault();
    };

    return _this;
  }

  var __proto = KeytimesArea.prototype;

  __proto.renderKeytimes = function () {
    var maxTime = this.props.maxTime;
    var keytimes = [];

    for (var time = 0; time <= maxTime; ++time) {
      keytimes.push(createElement("div", {
        key: time,
        "data-time": time,
        className: prefix("keytime"),
        style: {
          width: 100 / maxTime + "%"
        }
      }, createElement("span", null, time), createElement("div", {
        className: prefix("graduation start")
      }), createElement("div", {
        className: prefix("graduation quarter")
      }), createElement("div", {
        className: prefix("graduation half")
      }), createElement("div", {
        className: prefix("graduation quarter3")
      })));
    }

    return keytimes;
  };

  __proto.render = function () {
    var _a = this.props,
        maxTime = _a.maxTime,
        maxDuration = _a.maxDuration,
        zoom = _a.zoom;
    return createElement("div", {
      className: prefix("keytimes-area keyframes-area")
    }, createElement("div", {
      className: prefix("keyframes-scroll-area"),
      ref: ref(this, "scrollAreaElement"),
      style: {
        minWidth: 50 * maxTime + "px",
        width: Math.min(maxDuration ? maxTime / maxDuration : 1, 2) * zoom * 100 + "%"
      }
    }, createElement("div", {
      className: prefix("keytimes keyframes")
    }, createElement("div", {
      className: prefix("keyframes-container")
    }, this.renderKeytimes()), createElement(KeyframeCursor, {
      ref: ref(this, "cursor")
    }))));
  };

  __proto.componentDidMount = function () {
    var _this = this;

    (0, _utils.addEvent)(this.getElement(), "wheel", this.onWheel);
    this.dragger = new _drag.default(this.cursor.getElement(), {
      dragstart: function (_a) {
        var inputEvent = _a.inputEvent;
        inputEvent.stopPropagation();
      },
      drag: function (_a) {
        var clientX = _a.clientX;

        _this.props.timeline.move(clientX);
      },
      container: window
    });
  };

  __proto.componentWillUnmount = function () {
    (0, _utils.removeEvent)(this.getElement(), "wheel", this.onWheel);
    this.dragger.unset();
  };

  return KeytimesArea;
}(ElementComponent);

var HeaderArea = /*#__PURE__*/function (_super) {
  __extends$4(HeaderArea, _super);

  function HeaderArea() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.openDialog = function () {
      _this.props.timeline.openDialog();
    };

    return _this;
  }

  var __proto = HeaderArea.prototype;

  __proto.render = function () {
    var _a = this.props,
        timelineInfo = _a.timelineInfo,
        maxTime = _a.maxTime,
        maxDuration = _a.maxDuration,
        zoom = _a.zoom,
        timeline = _a.timeline;
    return createElement("div", {
      className: prefix("header-area")
    }, createElement("div", {
      className: prefix("properties-area")
    }, createElement("div", {
      className: prefix("property")
    }, "Name")), createElement("div", {
      className: prefix("values-area")
    }, createElement("div", {
      className: prefix("value")
    }, createElement("div", {
      className: prefix("add"),
      onClick: this.openDialog
    }, "+"))), createElement(KeytimesArea, {
      ref: ref(this, "keytimesArea"),
      timeline: timeline,
      timelineInfo: timelineInfo,
      maxDuration: maxDuration,
      maxTime: maxTime,
      zoom: zoom
    }));
  };

  return HeaderArea;
}(ElementComponent);

var Keyframe = /*#__PURE__*/function (_super) {
  __extends$4(Keyframe, _super);

  function Keyframe() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  var __proto = Keyframe.prototype;

  __proto.render = function () {
    var _a = this.props,
        time = _a.time,
        value = _a.value,
        maxTime = _a.maxTime,
        selected = _a.selected;
    return createElement("div", {
      className: prefix("keyframe" + (selected ? " select" : "")),
      "data-time": time,
      style: {
        left: time / maxTime * 100 + "%"
      }
    }, time, " ", value);
  };

  return Keyframe;
}(ElementComponent);

var KeyframeGroup = /*#__PURE__*/function (_super) {
  __extends$4(KeyframeGroup, _super);

  function KeyframeGroup() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  var __proto = KeyframeGroup.prototype;

  __proto.render = function () {
    var _a = this.props,
        time = _a.time,
        nextTime = _a.nextTime,
        maxTime = _a.maxTime,
        selected = _a.selected;
    return createElement("div", {
      className: prefix("keyframe-group" + (selected ? " select" : "")),
      "data-time": time,
      style: {
        left: time / maxTime * 100 + "%",
        width: (nextTime - time) / maxTime * 100 + "%"
      }
    });
  };

  return KeyframeGroup;
}(PureComponent);

var KeyframeDelay = /*#__PURE__*/function (_super) {
  __extends$4(KeyframeDelay, _super);

  function KeyframeDelay() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  var __proto = KeyframeDelay.prototype;

  __proto.render = function () {
    var _a = this.props,
        time = _a.time,
        nextTime = _a.nextTime,
        maxTime = _a.maxTime;
    return createElement("div", {
      className: prefix("keyframe-delay"),
      style: {
        left: time / maxTime * 100 + "%",
        width: (nextTime - time) / maxTime * 100 + "%"
      }
    });
  };

  return KeyframeDelay;
}(PureComponent);

var KeyframeLine = /*#__PURE__*/function (_super) {
  __extends$4(KeyframeLine, _super);

  function KeyframeLine() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  var __proto = KeyframeLine.prototype;

  __proto.render = function () {
    var _a = this.props,
        time = _a.time,
        nextTime = _a.nextTime,
        maxTime = _a.maxTime;
    return createElement("div", {
      className: prefix("keyframe-line"),
      style: {
        left: time / maxTime * 100 + "%",
        width: (nextTime - time) / maxTime * 100 + "%"
      }
    });
  };

  return KeyframeLine;
}(PureComponent);

var Keyframes = /*#__PURE__*/function (_super) {
  __extends$4(Keyframes, _super);

  function Keyframes() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  var __proto = Keyframes.prototype;

  __proto.render = function () {
    var _a = this.props,
        id = _a.id,
        propertiesInfo = _a.propertiesInfo,
        selected = _a.selected,
        folded = _a.folded;
    return createElement("div", {
      className: prefix("keyframes" + (folded === 1 ? " fold" : "") + (selected ? " select" : "")),
      "data-item": propertiesInfo.isItem ? "1" : "0",
      "data-id": id
    }, createElement("div", {
      className: prefix("keyframes-container")
    }, this.renderList()));
  };

  __proto.renderList = function () {
    var _a = this.props,
        propertiesInfo = _a.propertiesInfo,
        maxTime = _a.maxTime,
        selected = _a.selected,
        selectedTime = _a.selectedTime;
    var item = propertiesInfo.item,
        frames = propertiesInfo.frames,
        properties = propertiesInfo.properties;
    var isItScene = isScene(item);
    var duration = item.getDuration();
    var keyframes = [];
    var keyframeGroups = [];
    var keyframeDelays = [];
    var keyframeLines = [];
    var length = frames.length;
    var hasProperties = properties.length;
    var startIndex = 0;

    if (length >= 2 && !hasProperties) {
      var delayedIndex = 0;

      for (var i = 1; i < length; ++i) {
        var iterationTime = frames[i][1];

        if (frames[i - 1][1] === iterationTime && (iterationTime === 0 || iterationTime === duration)) {
          delayedIndex = i;
        } else {
          break;
        }
      }

      var index = (0, _utils.findIndex)(frames, function (_a) {
        var value = _a[2];
        return !(0, _utils.isUndefined)(value);
      });
      startIndex = Math.min(length - 2, Math.max(delayedIndex, index));
      var startFrame = frames[startIndex];
      var endFrame = frames[length - 1];
      var time = startFrame[0];
      var nextTime = endFrame[0];
      keyframeGroups.push(createElement(KeyframeGroup, {
        key: "group",
        selected: selected && time <= selectedTime && selectedTime <= nextTime,
        time: time,
        nextTime: nextTime,
        maxTime: maxTime
      }));
    }

    frames.forEach(function (_a, i) {
      var time = _a[0],
          iterationTime = _a[1],
          value = _a[2];
      var valueText = toValue(value);

      if (frames[i + 1]) {
        var _b = frames[i + 1],
            nextTime = _b[0],
            nextIterationTime = _b[1];

        if (iterationTime === 0 && nextIterationTime === 0 || iterationTime === duration && nextIterationTime === duration) {
          keyframeDelays.push(createElement(KeyframeDelay, {
            key: "delay" + time + "," + nextTime,
            id: "-1",
            time: time,
            nextTime: nextTime,
            maxTime: maxTime
          }));
        }
      }

      if (i === 0 && time === 0 && iterationTime === 0 && (0, _utils.isUndefined)(value) && !hasProperties) {
        return;
      }

      if (frames[i + 1]) {
        var _c = frames[i + 1],
            nextTime = _c[0],
            nextValue = _c[2];
        var nextValueText = toValue(nextValue);

        if (!isItScene && !(0, _utils.isUndefined)(value) && !(0, _utils.isUndefined)(nextValue) && valueText !== nextValueText && hasProperties) {
          keyframeLines.push(createElement(KeyframeLine, {
            key: "line" + keyframeLines.length,
            time: time,
            id: time + "," + nextTime,
            nextTime: nextTime,
            maxTime: maxTime
          }));
        }
      }

      if (isItScene || i < startIndex) {
        return;
      }

      keyframes.push(createElement(Keyframe, {
        key: "keyframe" + i,
        selected: selected && time === selectedTime,
        time: time,
        value: valueText,
        maxTime: maxTime
      }));
    });
    return keyframeGroups.concat(keyframes, keyframeDelays, keyframeLines);
  };

  return Keyframes;
}(ElementComponent);

var KeyframeLine$1 = /*#__PURE__*/function (_super) {
  __extends$4(KeyframeLine, _super);

  function KeyframeLine() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  var __proto = KeyframeLine.prototype;

  __proto.render = function () {
    var maxTime = this.props.maxTime;
    var lines = [];

    for (var time = 0; time <= maxTime; ++time) {
      lines.push(createElement("div", {
        key: time,
        className: prefix("division-line"),
        style: {
          left: 100 / maxTime * time + "%"
        }
      }));
    }

    return createElement("div", {
      className: prefix("line-area")
    }, lines);
  };

  return KeyframeLine;
}(PureComponent);

var KeyframesArea = /*#__PURE__*/function (_super) {
  __extends$4(KeyframesArea, _super);

  function KeyframesArea() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.keyframesList = [];
    _this.state = {
      foldedInfo: {}
    };

    _this.onWheel = function (e) {
      if (!_keycon.default.global.altKey) {
        return;
      }

      e.preventDefault();
      var delta = e.deltaY;
      var timeline = _this.props.timeline;
      timeline.setZoom(timeline.getZoom() + delta / 5000);
    };

    return _this;
  }

  var __proto = KeyframesArea.prototype;

  __proto.render = function () {
    var _a = this.props,
        timelineInfo = _a.timelineInfo,
        maxTime = _a.maxTime,
        maxDuration = _a.maxDuration,
        zoom = _a.zoom,
        selectedProperty = _a.selectedProperty,
        selectedTime = _a.selectedTime;
    var foldedInfo = this.state.foldedInfo;
    var width = Math.min(maxDuration ? maxTime / maxDuration : 1, 2);
    var keyframesList = [];
    this.keyframesList = [];

    for (var key in timelineInfo) {
      var propertiesInfo = timelineInfo[key];
      var selected = key === selectedProperty;
      var folded = checkFolded(foldedInfo, propertiesInfo.keys);
      keyframesList.push(createElement(Keyframes, {
        ref: refs(this, "keyframesList", keyframesList.length),
        selected: selected,
        folded: folded,
        selectedTime: selectedTime,
        key: key,
        id: key,
        propertiesInfo: propertiesInfo,
        maxTime: maxTime
      }));
    }

    return createElement("div", {
      className: prefix("keyframes-area"),
      onWheel: this.onWheel
    }, createElement("div", {
      className: prefix("keyframes-scroll-area"),
      ref: ref(this, "scrollAreaElement"),
      style: {
        minWidth: 50 * maxTime + "px",
        width: width * zoom * 100 + "%"
      }
    }, keyframesList.concat([createElement(KeyframeCursor, {
      key: "cursor",
      ref: ref(this, "cursor")
    }), createElement(KeyframeLine$1, {
      maxTime: maxTime,
      key: "lines"
    })])));
  };

  return KeyframesArea;
}(ElementComponent);

var Property = /*#__PURE__*/function (_super) {
  __extends$4(Property, _super);

  function Property() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.onClick = function (e) {
      var target = e.target;

      if (hasClass(target, "arrow")) {
        _this.onClickArrow();
      } else if (hasClass(target, "remove")) {
        _this.onClickRemove();
      } else {
        var _a = _this.props,
            timeline = _a.timeline,
            id = _a.id;
        timeline.select(id);
      }
    };

    _this.onClickArrow = function () {
      var _a = _this.props,
          id = _a.id,
          timeline = _a.timeline,
          scrollArea = _a.scrollArea,
          index = _a.index;
      timeline.select(id);
      scrollArea.fold(index);
    };

    _this.onClickRemove = function () {
      var _a = _this.props,
          propertiesInfo = _a.propertiesInfo,
          timeline = _a.timeline;
      var isItem = propertiesInfo.isItem,
          parentItem = propertiesInfo.parentItem,
          targetItem = propertiesInfo.item,
          properties = propertiesInfo.properties;

      if (isItem) {
        var targetName_1 = null;
        parentItem.forEach(function (item, name) {
          if (item === targetItem) {
            targetName_1 = name;
            return;
          }
        });

        if (targetName_1 != null) {
          parentItem.removeItem(targetName_1);
        }
      } else {
        var times = targetItem.times;
        times.forEach(function (time) {
          var _a;

          (_a = targetItem).remove.apply(_a, [time].concat(properties));
        });
      }

      timeline.select("", -1, true);
      timeline.update();
    };

    return _this;
  }

  var __proto = Property.prototype;

  __proto.render = function () {
    var _a = this.props,
        id = _a.id,
        selected = _a.selected,
        folded = _a.folded,
        _b = _a.propertiesInfo,
        propertyNames = _b.keys,
        isItem = _b.isItem,
        isParent = _b.isParent;
    var length = propertyNames.length;
    var name = propertyNames[length - 1];
    return createElement("div", {
      className: prefix("property" + (folded === 1 ? " fold" : "") + (selected ? " select" : "")),
      onClick: this.onClick,
      "data-id": id,
      "data-name": name,
      "data-object": isParent ? 1 : 0,
      "data-item": isItem ? 1 : 0,
      "data-fold": folded === 2 ? 1 : 0,
      style: {
        paddingLeft: 10 + (length - 1) * 20 + "px"
      }
    }, createElement("div", {
      className: prefix("arrow")
    }), createElement("span", null, name), createElement("div", {
      className: prefix("remove")
    }));
  };

  return Property;
}(ElementComponent);

var PropertiesArea = /*#__PURE__*/function (_super) {
  __extends$4(PropertiesArea, _super);

  function PropertiesArea() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.properties = [];
    _this.state = {
      foldedInfo: {}
    };
    return _this;
  }

  var __proto = PropertiesArea.prototype;

  __proto.render = function () {
    var _a = this.props,
        timelineInfo = _a.timelineInfo,
        selectedProperty = _a.selectedProperty,
        timeline = _a.timeline,
        scrollArea = _a.scrollArea;
    var foldedInfo = this.state.foldedInfo;
    var properties = [];
    this.properties = [];
    var index = -1;

    for (var id in timelineInfo) {
      var propertiesInfo = timelineInfo[id];
      var selected = selectedProperty === id;
      var folded = checkFolded(foldedInfo, propertiesInfo.keys);
      ++index;
      properties.push(createElement(Property, {
        ref: refs(this, "properties", index),
        timeline: timeline,
        scrollArea: scrollArea,
        selected: selected,
        folded: folded,
        key: id,
        id: id,
        index: index,
        propertiesInfo: propertiesInfo
      }));
    }

    return createElement("div", {
      className: prefix("properties-area")
    }, createElement("div", {
      className: prefix("properties-scroll-area")
    }, properties));
  };

  return PropertiesArea;
}(ElementComponent);

var Value = /*#__PURE__*/function (_super) {
  __extends$4(Value, _super);

  function Value() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.add = function () {
      var _a = _this.props,
          _b = _a.propertiesInfo,
          item = _b.item,
          properties = _b.properties,
          timeline = _a.timeline;
      timeline.openDialog(item, properties);
    };

    return _this;
  }

  var __proto = Value.prototype;

  __proto.render = function () {
    var _a = this.props,
        id = _a.id,
        selected = _a.selected,
        folded = _a.folded,
        _b = _a.propertiesInfo,
        isItem = _b.isItem,
        isParent = _b.isParent;
    return createElement("div", {
      className: prefix("value" + (folded === 1 ? " fold" : "") + (selected ? " select" : "")),
      "data-id": id,
      "data-object": isParent ? 1 : 0,
      "data-item": isItem ? 1 : 0
    }, this.renderValue());
  };

  __proto.renderValue = function () {
    var isParent = this.props.propertiesInfo.isParent;

    if (isParent) {
      return createElement("div", {
        className: prefix("add"),
        onClick: this.add
      }, "+");
    } else {
      return createElement("input", {
        ref: ref(this, "inputElement")
      });
    }
  };

  return Value;
}(ElementComponent);

var ValuesArea = /*#__PURE__*/function (_super) {
  __extends$4(ValuesArea, _super);

  function ValuesArea() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.values = [];
    _this.state = {
      foldedInfo: {}
    };
    return _this;
  }

  var __proto = ValuesArea.prototype;

  __proto.render = function () {
    var _a = this.props,
        timelineInfo = _a.timelineInfo,
        selectedProperty = _a.selectedProperty,
        timeline = _a.timeline;
    var foldedInfo = this.state.foldedInfo;
    var values = [];
    this.values = [];

    for (var id in timelineInfo) {
      var propertiesInfo = timelineInfo[id];
      var selected = selectedProperty === id;
      var folded = checkFolded(foldedInfo, propertiesInfo.keys);
      values.push(createElement(Value, {
        ref: refs(this, "values", values.length),
        timeline: timeline,
        key: id,
        folded: folded,
        selected: selected,
        id: id,
        propertiesInfo: propertiesInfo
      }));
    }

    return createElement("div", {
      className: prefix("values-area")
    }, values);
  };

  __proto.componentDidMount = function () {
    var _this = this;

    var element = this.getElement();
    var dragTarget;
    var dragTargetValue;
    element.addEventListener("focusout", function (e) {
      _this.props.timeline.setTime();
    });
    this.dragger = new _drag.default(element, {
      container: window,
      dragstart: function (e) {
        dragTarget = e.inputEvent.target;
        dragTargetValue = dragTarget.value;

        if (!_keycon.default.global.altKey || !getTarget(dragTarget, function (el) {
          return el.nodeName === "INPUT";
        })) {
          return false;
        }
      },
      drag: function (e) {
        var nextValue = dragTargetValue.replace(/-?\d+/g, function (num) {
          return "" + (parseFloat(num) + Math.round(e.distX / 2));
        });
        dragTarget.value = nextValue;
      },
      dragend: function (e) {
        _this.edit(dragTarget, dragTarget.value);
      }
    });
    this.keycon = new _keycon.default(element).keydown(function (e) {
      !e.isToggle && e.inputEvent.stopPropagation();
    }).keyup(function (e) {
      !e.isToggle && e.inputEvent.stopPropagation();
    }).keyup("enter", function (e) {
      var target = e.inputEvent.target;

      _this.edit(target, target.value);
    }).keyup("esc", function (e) {
      var target = e.inputEvent.target;
      target.blur();
    });
  };

  __proto.componentWillUnmount = function () {
    this.dragger.unset();
    this.keycon.off();
  };

  __proto.edit = function (target, value) {
    var parentEl = getTarget(target, function (el) {
      return hasClass(el, "value");
    });

    if (!parentEl) {
      return;
    }

    var index = (0, _utils.findIndex)(this.values, function (v) {
      return v.getElement() === parentEl;
    });

    if (index === -1) {
      return;
    }

    this.props.timeline.editKeyframe(index, value);
  };

  return ValuesArea;
}(ElementComponent);

var ScrollArea = /*#__PURE__*/function (_super) {
  __extends$4(ScrollArea, _super);

  function ScrollArea() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  var __proto = ScrollArea.prototype;

  __proto.render = function () {
    var _a = this.props,
        zoom = _a.zoom,
        maxDuration = _a.maxDuration,
        maxTime = _a.maxTime,
        timelineInfo = _a.timelineInfo,
        selectedProperty = _a.selectedProperty,
        selectedTime = _a.selectedTime,
        timeline = _a.timeline;
    return createElement("div", {
      className: prefix("scroll-area")
    }, createElement(PropertiesArea, {
      ref: ref(this, "propertiesArea"),
      timeline: timeline,
      scrollArea: this,
      timelineInfo: timelineInfo,
      selectedProperty: selectedProperty
    }), createElement(ValuesArea, {
      ref: ref(this, "valuesArea"),
      timeline: timeline,
      timelineInfo: timelineInfo,
      selectedProperty: selectedProperty
    }), createElement(KeyframesArea, {
      ref: ref(this, "keyframesArea"),
      timeline: timeline,
      zoom: zoom,
      maxDuration: maxDuration,
      timelineInfo: timelineInfo,
      maxTime: maxTime,
      selectedProperty: selectedProperty,
      selectedTime: selectedTime
    }));
  };

  __proto.componentDidMount = function () {
    this.foldAll();
  };

  __proto.foldAll = function () {
    var _this = this; // fold all


    this.propertiesArea.properties.forEach(function (property, i) {
      var isParent = property.props.propertiesInfo.isParent;

      if (isParent) {
        _this.fold(i);
      }
    });
  };

  __proto.fold = function (index, isNotUpdate) {
    var selectedProperty = this.propertiesArea.properties[index];
    var foldedId = selectedProperty.props.id;
    fold(this.propertiesArea, foldedId, isNotUpdate);
    fold(this.valuesArea, foldedId, isNotUpdate);
    fold(this.keyframesArea, foldedId, isNotUpdate);
  };

  return ScrollArea;
}(ElementComponent);

var prevTime = 0;
var prevX = -1;
var prevY = -1;

function dblCheck(isDrag, e, clientX, clientY, callback) {
  var currentTime = (0, _utils.now)();

  if (!isDrag) {
    if (prevX === clientX && prevY === clientY && currentTime - prevTime <= 500) {
      callback(e, clientX, clientY);
    }

    prevX = clientX;
    prevY = clientY;
    prevTime = currentTime;
  }
}

var MAXIMUM = 1000000;

function toFixed(num) {
  return Math.round(num * MAXIMUM) / MAXIMUM;
}

function addEntry(entries, time, keytime) {
  var prevEntry = entries[entries.length - 1];
  (!prevEntry || prevEntry[0] !== time || prevEntry[1] !== keytime) && entries.push([toFixed(time), toFixed(keytime)]);
}

function getEntries(times, states) {
  if (!times.length) {
    return [];
  }

  var entries = times.map(function (time) {
    return [time, time];
  });
  var nextEntries = [];
  var firstEntry = entries[0];

  if (firstEntry[0] !== 0 && states[states.length - 1][DELAY$1]) {
    entries.unshift([0, 0]);
  }

  states.forEach(function (state) {
    var iterationCount = state[ITERATION_COUNT$1];
    var delay = state[DELAY$1];
    var playSpeed = state[PLAY_SPEED$1];
    var direction = state[DIRECTION$1];
    var intCount = Math.ceil(iterationCount);
    var currentDuration = entries[entries.length - 1][0];
    var length = entries.length;
    var lastTime = currentDuration * iterationCount;

    for (var i = 0; i < intCount; ++i) {
      var isReverse = direction === REVERSE || direction === ALTERNATE && i % 2 || direction === ALTERNATE_REVERSE && !(i % 2);

      for (var j = 0; j < length; ++j) {
        var entry = entries[isReverse ? length - j - 1 : j];
        var time = entry[1];
        var currentTime = currentDuration * i + (isReverse ? currentDuration - entry[0] : entry[0]);
        var prevEntry = entries[isReverse ? length - j : j - 1];

        if (currentTime > lastTime) {
          if (j !== 0) {
            var prevTime = currentDuration * i + (isReverse ? currentDuration - prevEntry[0] : prevEntry[0]);
            var divideTime = (0, _utils.dot)(prevEntry[1], time, lastTime - prevTime, currentTime - lastTime);
            addEntry(nextEntries, (delay + currentDuration * iterationCount) / playSpeed, divideTime);
          }

          break;
        } else if (currentTime === lastTime && nextEntries.length && nextEntries[nextEntries.length - 1][0] === lastTime + delay) {
          break;
        }

        addEntry(nextEntries, (delay + currentTime) / playSpeed, time);
      }
    } // delay time


    delay && nextEntries.unshift([0, nextEntries[0][1]]);
    entries = nextEntries;
    nextEntries = [];
  });
  return entries;
}

function getFiniteEntries(times, states) {
  var infiniteIndex = (0, _utils.findIndex)(states, function (state) {
    return state[ITERATION_COUNT$1] === INFINITE;
  }, states.length - 1) + 1;
  return getEntries(times, states.slice(0, infiniteIndex));
}

function getItemInfo(timelineInfo, items, names, item) {
  item.update();
  var times = item.times.slice();
  var originalDuration = item.getDuration();
  !item.getFrame(0) && times.unshift(0);
  !item.getFrame(originalDuration) && times.push(originalDuration);
  var states = items.slice(1).map(function (animator) {
    return animator.state;
  }).reverse();
  var entries = getFiniteEntries(times, states);
  var parentItem = items[items.length - 2];

  (function getPropertyInfo(itemNames) {
    var properties = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      properties[_i - 1] = arguments[_i];
    }

    var frames = [];
    var isParent = (0, _utils.isObject)(itemNames);
    var isItem = properties.length === 0;
    entries.forEach(function (_a) {
      var time = _a[0],
          iterationTime = _a[1];
      var value = item.get.apply(item, [iterationTime].concat(properties));

      if ((0, _utils.isUndefined)(value) && properties.length) {
        return;
      }

      frames.push([time, iterationTime, value]);
    });
    var keys = names.concat(properties);
    var key = keys.join("///");

    if (key) {
      timelineInfo[key] = {
        key: key,
        keys: keys,
        parentItem: parentItem,
        isParent: isParent,
        isItem: isItem,
        item: item,
        names: names,
        properties: properties,
        frames: frames
      };
    }

    if (isParent) {
      for (var property in itemNames) {
        getPropertyInfo.apply(void 0, [itemNames[property]].concat(properties, [property]));
      }
    }
  })(item.names);
}

function getTimelineInfo(scene) {
  var timelineInfo = {};

  (function sceneForEach() {
    var items = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      items[_i] = arguments[_i];
    }

    var length = items.length;
    var lastItem = items[length - 1];
    var names = items.slice(1).map(function (item) {
      return item.getId();
    });

    if (isScene(lastItem)) {
      if (names.length) {
        var key = names.join("///");
        var times = [0, lastItem.getDuration()];
        var entries = getFiniteEntries(times, items.slice(1).map(function (animator) {
          return animator.state;
        }).reverse());
        var frames_1 = [];
        entries.forEach(function (_a) {
          var time = _a[0],
              iterationTime = _a[1];
          frames_1.push([time, iterationTime, iterationTime]);
        });
        timelineInfo[key] = {
          key: key,
          keys: names,
          isItem: true,
          isParent: true,
          parentItem: items[length - 2],
          item: lastItem,
          names: [],
          properties: [],
          frames: frames_1
        };
      }

      lastItem.forEach(function (item) {
        sceneForEach.apply(void 0, items.concat([item]));
      });
    } else {
      getItemInfo(timelineInfo, items, names, lastItem);
    }
  })(scene);

  return timelineInfo;
}

var TimelineElement = styled("div", CSS);

var Timeline = /*#__PURE__*/function (_super) {
  __extends$4(Timeline, _super);

  function Timeline(props) {
    var _this = _super.call(this, props) || this;

    _this.values = {};
    _this.state = {
      alt: false,
      zoom: 1,
      maxDuration: 0,
      maxTime: 0,
      timelineInfo: {},
      selectedProperty: "",
      selectedTime: -1,
      selectedItem: null,
      init: false,
      updateTime: false
    };
    _this.keyMap = {
      keydown: {
        alt: function () {
          _this.setState({
            alt: true
          });
        },
        space: function (_a) {
          var inputEvent = _a.inputEvent;
          inputEvent.preventDefault();
        },
        left: function () {
          _this.prev();
        },
        right: function () {
          _this.context();
        }
      },
      keyup: {
        alt: function () {
          _this.setState({
            alt: false
          });
        },
        esc: function () {
          _this.finish();
        },
        backspace: function () {
          _this.removeKeyframe(_this.state.selectedProperty);
        },
        space: function () {
          _this.togglePlay();
        }
      }
    };

    _this.update = function (isInit) {
      if (isInit === void 0) {
        isInit = false;
      }

      var scene = _this.props.scene;

      if (!scene) {
        return;
      }

      var maxDuration = Math.ceil(scene.getDuration());
      var maxTime = Math.max(_this.state.maxTime, maxDuration);
      var currentMaxTime = _this.state.maxTime;
      var zoom = _this.state.zoom;
      var nextZoomScale = currentMaxTime > 1 ? maxTime / currentMaxTime : 1;
      var nextZoom = Math.max(1, zoom * nextZoomScale);

      _this.setState({
        timelineInfo: getTimelineInfo(scene),
        maxTime: maxTime,
        maxDuration: maxDuration,
        updateTime: true,
        init: isInit,
        zoom: nextZoom
      });
    };

    _this.prev = function () {
      var scene = _this.props.scene;
      scene && _this.setTime(scene.getTime() - 0.05);
    };

    _this.finish = function () {
      var scene = _this.props.scene;
      scene && scene.finish();
    };

    _this.togglePlay = function () {
      var scene = _this.props.scene;

      if (!scene) {
        return;
      }

      if (scene.getPlayState() === "running") {
        scene.pause();
      } else {
        scene.play();
      }
    };

    _this.getDistTime = function (distX, rect) {
      if (rect === void 0) {
        rect = _this.scrollArea.keyframesArea.scrollAreaElement.getBoundingClientRect();
      }

      var scrollAreaWidth = rect.width - 30;
      var percentage = Math.min(scrollAreaWidth, distX) / scrollAreaWidth;
      var time = _this.state.maxTime * percentage;
      return Math.round(time * 20) / 20;
    };

    _this.getTime = function (clientX) {
      var rect = _this.scrollArea.keyframesArea.scrollAreaElement.getBoundingClientRect();

      var scrollAreaX = rect.left + 15;
      var x = Math.max(clientX - scrollAreaX, 0);
      return _this.getDistTime(x, rect);
    };

    _this.animate = function (e) {
      var time = e.time;
      var minute = numberFormat(Math.floor(time / 60), 2);
      var second = numberFormat(Math.floor(time % 60), 2);
      var milisecond = numberFormat(Math.floor(time % 1 * 100), 3, true);

      _this.moveCursor(time);

      _this.setInputs(flatObject(e.frames || e.frame.get()));

      _this.controlArea.timeArea.getElement().value = minute + ":" + second + ":" + milisecond;
    };

    _this.onBlur = function () {
      if (_this.state.alt === true) {
        _this.setState({
          alt: false
        });
      }
    };

    _this.state = __assign$2({}, _this.state, _this.initScene(_this.props.scene, false));
    return _this;
  }

  var __proto = Timeline.prototype;

  __proto.render = function () {
    var _a = this.props,
        scene = _a.scene,
        className = _a.className,
        keyboard = _a.keyboard,
        onSelect = _a.onSelect,
        attributes = __rest$1(_a, ["scene", "className", "keyboard", "onSelect"]);

    var _b = this.state,
        zoom = _b.zoom,
        alt = _b.alt,
        maxDuration = _b.maxDuration,
        maxTime = _b.maxTime,
        timelineInfo = _b.timelineInfo,
        selectedProperty = _b.selectedProperty,
        selectedTime = _b.selectedTime;
    return createElement(TimelineElement, __assign$2({
      className: prefix("timeline" + (alt ? " alt" : "")) + (className ? " " + className : "")
    }, attributes), createElement(ControlArea, {
      ref: ref(this, "controlArea"),
      scene: scene,
      timeline: this
    }), createElement(HeaderArea, {
      ref: ref(this, "headerArea"),
      timeline: this,
      maxDuration: maxDuration,
      zoom: zoom,
      maxTime: maxTime,
      timelineInfo: timelineInfo
    }), createElement(ScrollArea, {
      ref: ref(this, "scrollArea"),
      timeline: this,
      maxDuration: maxDuration,
      zoom: zoom,
      maxTime: maxTime,
      selectedProperty: selectedProperty,
      selectedTime: selectedTime,
      timelineInfo: timelineInfo
    }));
  };

  __proto.componentDidMount = function () {
    this.initWheelZoom();
    this.initScroll();
    this.initDragKeyframes();
    this.initKeyController();
  };

  __proto.componentDidUpdate = function (prevProps) {
    var scene = this.props.scene;
    var state = this.state;

    if (state.init) {
      state.init = false;
      this.scrollArea.foldAll();
    }

    if (prevProps.scene !== scene) {
      this.releaseScene(prevProps.scene);
      this.setState(this.initScene(scene, true));
    }

    if (state.updateTime) {
      state.updateTime = false;
      this.setTime();
    }
  };

  __proto.componentWillUnmount = function () {
    this.draggers.forEach(function (dragger) {
      dragger.unset();
    });
    this.pinchDragger.unset();
    var keycon = _keycon.default.global;
    var keyMap = this.keyMap;
    var keydownMap = keyMap.keydown;
    var keyupMap = keyMap.keyup;
    (0, _utils.removeEvent)(window, "blur", this.onBlur);
    keycon.offKeydown("alt", keydownMap.alt).offKeyup("alt", keyupMap.alt);

    if (this.props.keyboard) {
      keycon.offKeydown("space", keydownMap.space).offKeydown("left", keydownMap.left).offKeydown("right", keydownMap.right).offKeyup("backspace", keyupMap.backspace).offKeyup("esc", keyupMap.esc).offKeyup("space", keyupMap.space);
    }
  };

  __proto.next = function () {
    var scene = this.props.scene;
    scene && this.setTime(scene.getTime() + 0.05);
  };

  __proto.selectItem = function (scene) {
    var _a = this.state,
        timelineInfo = _a.timelineInfo,
        selectedTime = _a.selectedTime;

    for (var name in timelineInfo) {
      var info = timelineInfo[name];

      if (info.item === scene) {
        this.select(info.key, selectedTime);
        break;
      }
    }
  };

  __proto.select = function (property, time, isNotUpdate) {
    if (time === void 0) {
      time = -1;
    }

    var activeElement = document.activeElement;

    if (activeElement && activeElement.blur) {
      activeElement.blur();
    }

    var scene = this.props.scene;

    if (!scene) {
      return;
    }

    scene.pause();
    var state = this.state;
    var prevSelectedProperty = state.selectedProperty,
        prevSelectedTime = state.selectedTime,
        prevSelectedItem = state.selectedItem,
        timelineInfo = state.timelineInfo;
    var propertiesInfo = timelineInfo[property];
    var selectedItem = property ? propertiesInfo.item : this.props.scene;
    var selectedName = property ? propertiesInfo.names.join("///") : "";

    if (this.props.onSelect) {
      this.props.onSelect({
        selectedItem: selectedItem,
        selectedName: selectedName,
        selectedProperty: property,
        selectedTime: time,
        prevSelectedProperty: prevSelectedProperty,
        prevSelectedTime: prevSelectedTime,
        prevSelectedItem: prevSelectedItem
      });
    }

    if (isNotUpdate) {
      state.selectedProperty = property;
      state.selectedTime = time;
      state.selectedItem = selectedItem;
    } else {
      this.setState({
        selectedProperty: property,
        selectedTime: time,
        selectedItem: selectedItem
      });
    }
  };

  __proto.editKeyframe = function (index, value) {
    var propertiesInfo = this.scrollArea.propertiesArea.properties[index].props.propertiesInfo;
    var isObjectData = propertiesInfo.isParent;

    if (isObjectData) {
      return;
    }

    var item = propertiesInfo.item;
    var properties = propertiesInfo.properties;
    item.set.apply(item, [item.getIterationTime()].concat(properties, [value]));
    this.update();
  };

  __proto.setTime = function (time) {
    var scene = this.props.scene;

    if (!scene) {
      return;
    }

    var direction = scene.getDirection();
    scene.pause();

    if ((0, _utils.isUndefined)(time)) {
      time = scene.getTime();
    }

    if (direction === "normal" || direction === "alternate") {
      scene.setTime(time);
    } else {
      scene.setTime(scene.getDuration() - time);
    }
  };

  __proto.setZoom = function (zoom) {
    this.setState({
      zoom: Math.max(zoom, 1)
    });
  };

  __proto.getZoom = function () {
    return this.state.zoom;
  };

  __proto.getValues = function () {
    return this.values;
  };

  __proto.openDialog = function (item, properties) {
    if (item === void 0) {
      item = this.props.scene;
    }

    if (properties === void 0) {
      properties = [];
    }

    if (!this.props.scene) {
      return;
    }

    if (isScene(item)) {
      this.newItem(item);
    } else {
      this.newProperty(item, properties);
    }
  };

  __proto.move = function (clientX) {
    this.setTime(this.getTime(clientX));
  };

  __proto.newItem = function (scene) {
    var name = prompt("Add Item");

    if (!name) {
      return;
    }

    scene.newItem(name);
    this.update();
  };

  __proto.newProperty = function (item, properties) {
    var property = prompt("Add Property");

    if (!property) {
      return;
    }

    var roles = ROLES;
    var nextProperties = properties.concat([property]);
    var isRole = nextProperties.every(function (name) {
      if ((0, _utils.isObject)(roles[name])) {
        roles = roles[name];
        return true;
      }

      return false;
    });
    item.set.apply(item, [item.getIterationTime()].concat(nextProperties, [isRole ? {} : ""]));
    this.update();
  };

  __proto.moveCursor = function (time) {
    var maxTime = this.state.maxTime;
    var px = 15 - 30 * time / maxTime;
    var percent = 100 * time / maxTime;
    var left = "calc(" + percent + "% + " + px + "px)";
    this.scrollArea.keyframesArea.cursor.getElement().style.left = left;
    this.headerArea.keytimesArea.cursor.getElement().style.left = left;
  };

  __proto.setInputs = function (obj) {
    this.values = obj;
    var valuesArea = this.scrollArea.valuesArea.getElement();

    for (var name in obj) {
      var input = valuesArea.querySelector("[data-id=\"" + name + "\"] input");

      if (input) {
        input.value = obj[name];
      }
    }
  };

  __proto.removeKeyframe = function (property) {
    var propertiesInfo = this.state.timelineInfo[property];

    if (!property || !propertiesInfo || isScene(propertiesInfo.item)) {
      return;
    }

    var properties = propertiesInfo.properties;
    var item = propertiesInfo.item;
    item.remove.apply(item, [item.getIterationTime()].concat(properties));
    this.update();
  };

  __proto.addKeyframe = function (index, time) {
    var keyframesList = this.scrollArea.keyframesArea.keyframesList;
    var id = keyframesList[index].props.id;
    this.select(id, time);
    var inputElement = this.scrollArea.valuesArea.values[index].inputElement;

    if (inputElement) {
      this.editKeyframe(index, inputElement.value);
    }
  };

  __proto.initScene = function (scene, isInit) {
    if (!scene) {
      return {
        timelineInfo: {},
        maxTime: 0,
        maxDuration: 0,
        zoom: 1,
        init: false
      };
    }

    scene.finish();
    scene.on("animate", this.animate);
    var duration = Math.ceil(scene.getDuration());
    return {
      timelineInfo: getTimelineInfo(scene),
      maxTime: duration,
      maxDuration: duration,
      zoom: 1,
      init: isInit || false
    };
  };

  __proto.releaseScene = function (scene) {
    if (!scene) {
      return;
    }

    scene.off("animate", this.animate);
  };

  __proto.initWheelZoom = function () {
    var _this = this;

    var keyframesArea = this.scrollArea.keyframesArea.getElement();
    this.pinchDragger = new _drag.default(keyframesArea, {
      pinchstart: function (_a) {
        var datas = _a.datas;
        datas.zoom = _this.state.zoom;
      },
      pinch: function (_a) {
        var scale = _a.scale,
            datas = _a.datas;
        console.log("SCALE", scale);

        _this.setZoom(datas.zoom * scale);
      }
    });
  };

  __proto.initScroll = function () {
    var isScrollKeyframe = false;
    var headerKeyframesArea = this.headerArea.keytimesArea.getElement();
    var scrollKeyframesArea = this.scrollArea.keyframesArea.getElement();
    headerKeyframesArea.addEventListener("scroll", function () {
      if (isScrollKeyframe) {
        isScrollKeyframe = false;
      } else {
        isScrollKeyframe = true;
        scrollKeyframesArea.scrollLeft = headerKeyframesArea.scrollLeft;
      }
    });
    scrollKeyframesArea.addEventListener("scroll", function (e) {
      if (isScrollKeyframe) {
        isScrollKeyframe = false;
      } else {
        isScrollKeyframe = true;
        headerKeyframesArea.scrollLeft = scrollKeyframesArea.scrollLeft;
      }
    });
  };

  __proto.selectByKeyframe = function (keyframeElement) {
    var keyframesElement = keyframeElement.parentElement.parentElement;
    var time = parseFloat(keyframeElement.getAttribute("data-time") || "0");
    var id = keyframesElement.getAttribute("data-id") || "";
    this.setTime(time);
    this.select(id, time);
  };

  __proto.initDragKeyframes = function () {
    var _this = this;

    var click = function (e, clientX, clientY) {
      var time = _this.getTime(clientX);

      var list = _this.scrollArea.keyframesArea.keyframesList;
      var index = findElementIndexByPosition(list.map(function (keyframes) {
        return keyframes.getElement();
      }), clientY);

      _this.setTime(time);

      index > -1 && _this.select(list[index].props.id, time);
      e.preventDefault();
    };

    var dblclick = function (e, clientX, clientY) {
      var list = _this.scrollArea.keyframesArea.keyframesList;
      var index = findElementIndexByPosition(list.map(function (keyframes) {
        return keyframes.getElement();
      }), clientY);

      if (index === -1) {
        return;
      }

      _this.addKeyframe(index, _this.getTime(clientX));
    };

    var keytimesScrollArea = this.headerArea.keytimesArea.scrollAreaElement;
    var keyframesScrollArea = this.scrollArea.keyframesArea.scrollAreaElement;
    var dragItem;
    var dragDelay = 0;
    var dragTarget;
    this.draggers = [keytimesScrollArea, keyframesScrollArea].map(function (element) {
      return new _drag.default(element, {
        container: window,
        dragstart: function (_a) {
          var clientX = _a.clientX,
              inputEvent = _a.inputEvent;
          var inputTarget = inputEvent.target;
          var keyframeTarget = getTarget(inputTarget, function (el) {
            return hasClass(el, "keyframe");
          });

          if (keyframeTarget) {
            _this.selectByKeyframe(keyframeTarget);

            return false;
          }

          dragTarget = getTarget(inputTarget, function (el) {
            return hasClass(el, "keyframe-group");
          });

          if (dragTarget) {
            var properties = _this.scrollArea.propertiesArea.properties;
            var keyframesElement = getTarget(dragTarget, function (el) {
              return hasClass(el, "keyframes");
            });
            var id_1 = keyframesElement.getAttribute("data-id");
            var property = (0, _utils.find)(properties, function (p) {
              return p.props.id === id_1;
            });
            var propertiesInfo = property.props.propertiesInfo;
            dragItem = propertiesInfo.item;
            dragDelay = dragItem.getDelay();
          }
        },
        drag: function (_a) {
          var distX = _a.distX,
              deltaX = _a.deltaX,
              deltaY = _a.deltaY,
              inputEvent = _a.inputEvent;

          if (dragTarget && dragItem) {
            var nextDelay = Math.max(dragDelay + _this.getDistTime(distX), 0);

            if (dragItem.getDelay() !== nextDelay) {
              dragItem.setDelay(nextDelay);

              _this.update();
            }
          } else {
            _this.scrollArea.keyframesArea.getElement().scrollLeft -= deltaX;
            _this.scrollArea.getElement().scrollTop -= deltaY;
            inputEvent.preventDefault();
          }
        },
        dragend: function (_a) {
          var isDrag = _a.isDrag,
              clientX = _a.clientX,
              clientY = _a.clientY,
              inputEvent = _a.inputEvent;
          dragTarget = null;
          dragItem = null;
          dragDelay = 0;
          !isDrag && click(inputEvent, clientX, clientY);
          dblCheck(isDrag, inputEvent, clientX, clientY, dblclick);
        }
      });
    });
  };

  __proto.initKeyController = function () {
    (0, _utils.addEvent)(window, "blur", this.onBlur);
    var keycon = _keycon.default.global;
    var keyMap = this.keyMap;
    var keydownMap = keyMap.keydown;
    var keyupMap = keyMap.keyup;
    keycon.keydown("alt", keydownMap.alt).keyup("alt", keyupMap.alt);

    if (this.props.keyboard) {
      keycon.keydown("space", keydownMap.space).keydown("left", keydownMap.left).keydown("right", keydownMap.right).keyup("backspace", keyupMap.backspace).keyup("esc", keyupMap.esc).keyup("space", keyupMap.space);
    }
  };

  Timeline.defaultProps = {
    keyboard: true,
    onSelect: function () {}
  };
  return Timeline;
}(PureProps);

var Timeline$1 = /*#__PURE__*/function (_super) {
  __extends(Timeline$1, _super);

  function Timeline$1() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  var __proto = Timeline$1.prototype;

  __proto.render = function () {
    var _this = this;

    return (0, _preact.h)(Timeline, __assign({}, this.props, {
      ref: function (e) {
        _this.timeline = e;
      }
    }));
  };

  __proto.update = function (isInit) {
    this.timeline.update(isInit);
  };

  __proto.prev = function () {
    this.timeline.prev();
  };

  __proto.next = function () {
    this.timeline.next();
  };

  __proto.finish = function () {
    this.timeline.finish();
  };

  __proto.togglePlay = function () {
    this.timeline.togglePlay();
  };

  return Timeline$1;
}(_preact.Component);

var _default = Timeline$1;
exports.default = _default;
},{"preact":"qWa8","@daybrush/utils":"bFv7","keycon":"tGET","@daybrush/drag":"tOh1"}],"wiAn":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preactTimeline = _interopRequireDefault(require("preact-timeline"));

var _component = _interopRequireDefault(require("@egjs/component"));

var _preact = require("preact");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Copyright (c) 2019 Daybrush
name: @scenejs/timeline
license: MIT
author: Daybrush
repository: git+https://github.com/daybrush/scenejs-timeline.git
version: 0.3.0
*/

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

/* global Reflect, Promise */
var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
  };

  return extendStatics(d, b);
};

function __extends(d, b) {
  extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var Timeline = /*#__PURE__*/function (_super) {
  __extends(Timeline, _super);

  function Timeline(scene, parentElement, options) {
    if (options === void 0) {
      options = {};
    }

    var _this = _super.call(this) || this;

    _this.onSelect = function (e) {
      _this.trigger("select", e);
    };

    var element = document.createElement("div");
    (0, _preact.render)((0, _preact.h)(_preactTimeline.default, __assign({
      ref: function (e) {
        e && (_this.timelineArea = e);
      },
      keyboard: true
    }, options, {
      scene: scene,
      onSelect: _this.onSelect
    })), element);
    parentElement.appendChild(element.children[0]);
    return _this;
  }

  var __proto = Timeline.prototype;

  __proto.update = function (isInit) {
    this.timelineArea.update(isInit);
  };

  return Timeline;
}(_component.default);

var _default = Timeline;
exports.default = _default;
},{"preact-timeline":"RepT","@egjs/component":"MB9r","preact":"qWa8"}],"T6ID":[function(require,module,exports) {
"use strict";

var _scenejs = _interopRequireDefault(require("scenejs"));

var _timeline = _interopRequireWildcard(require("@scenejs/timeline"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var scene = new _scenejs.default({
  ".container": {}
}, {
  selector: true
});
var item = scene.getItem(".container"); // function move(startTime, endTime, left, top, rotate, scale) {
//   item.set({
//     [`${startTime}, ${endTime}`]: Scene.kineticFrame({
//       left: `${left}px`,
//       top: `${top}px`,
//     }).set({
//       transform: {
//         rotate: `${rotate}deg`,
//         scale,
//       },
//     }),
//   });
// }
// move(0, 0, 90, 115, 0, 5);
// move(1, 1, 90, 115, 0, 2);
// move(2, 3, 0, 115, 0, 1);
// move(4, 4.5, -100, 0, -90, 2);
// move(5.5, 6, -52, -18, -90, 1.6);
// move(7, 7.5, 30, 45, 0, 2);
// move(8.5, 9, 10, 30, 0, 3);
// move(10, 10.5, 28, 0, 0, 2.2);
// move(11.5, 12, 50, -35, 0, 1.65);
// move(13, 13.5, 35, -70, 0, 2);
// move(14.5, 18, 0, 0, 0, 1);

scene.set({
  "[data-typing='i']": _scenejs.default.typing({
    text: "I ",
    duration: 1
  }),
  "[data-typing='software']": {
    1: _scenejs.default.typing({
      text: "'m a Software",
      duration: 1
    })
  },
  "[data-typing='developer']": {
    1.5: _scenejs.default.typing({
      text: "Developer",
      duration: 1
    })
  },
  "[data-typing='with']": {
    3.3: _scenejs.default.typing({
      text: "with",
      duration: 0.5
    })
  },
  "[data-typing='javascript']": {
    4.5: _scenejs.default.typing({
      text: "JavaScript",
      duration: 1
    })
  },
  "[data-typing='html']": {
    6: _scenejs.default.typing({
      text: "HTML",
      duration: 1
    })
  },
  "[data-typing='css']": {
    7.5: _scenejs.default.typing({
      text: "CSS",
      duration: 0.7
    })
  },
  "[data-typing='nodejs']": {
    9: _scenejs.default.typing({
      text: "Node.js",
      duration: 1
    })
  },
  "[data-typing='vuejs']": {
    10.5: _scenejs.default.typing({
      text: "Vue.js",
      duration: 1
    })
  },
  "[data-typing='java']": {
    12: _scenejs.default.typing({
      text: "& Java",
      duration: 1
    })
  },
  "[data-typing='skills']": {
    13.5: _scenejs.default.typing({
      text: "Skills",
      duration: 1
    })
  }
});
scene.setPlaySpeed(1).setEasing("ease-in-out").setIterationCount("infinite").play(); // new Timeline(scene, document.body);
},{"scenejs":"kWh4","@scenejs/timeline":"wiAn"}]},{},["T6ID"], null)
//# sourceMappingURL=/script.f7c9f48c.js.map