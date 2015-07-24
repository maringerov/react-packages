//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
//                                                                      //
// If you are using Chrome, open the Developer Tools and click the gear //
// icon in its lower right corner. In the General Settings panel, turn  //
// on 'Enable source maps'.                                             //
//                                                                      //
// If you are using Firefox 23, go to `about:config` and set the        //
// `devtools.debugger.source-maps-enabled` preference to true.          //
// (The preference should be on by default in Firefox 24; versions      //
// older than 23 do not support source maps.)                           //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;

/* Package-scope variables */
var babelHelpers;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// packages/babel-runtime/babel-runtime.js                                                                 //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
// The name `babelHelpers` is hard-coded in Babel.  Otherwise we would make it                             // 1
// something capitalized and more descriptive, like `BabelRuntime`.                                        // 2
babelHelpers = {                                                                                           // 3
  // Constructs the object passed to the tag function in a tagged                                          // 4
  // template literal.                                                                                     // 5
  taggedTemplateLiteralLoose: function (strings, raw) {                                                    // 6
    // Babel's own version of this calls Object.freeze on `strings` and                                    // 7
    // `strings.raw`, but it doesn't seem worth the compatibility and                                      // 8
    // performance concerns.  If you're writing code against this helper,                                  // 9
    // don't add properties to these objects.                                                              // 10
    strings.raw = raw;                                                                                     // 11
    return strings;                                                                                        // 12
  },                                                                                                       // 13
                                                                                                           // 14
  // Checks that a class constructor is being called with `new`, and throws                                // 15
  // an error if it is not.                                                                                // 16
  classCallCheck: function (instance, Constructor) {                                                       // 17
    if (!(instance instanceof Constructor)) {                                                              // 18
      throw new TypeError("Cannot call a class as a function");                                            // 19
    }                                                                                                      // 20
  },                                                                                                       // 21
                                                                                                           // 22
  inherits: function (subClass, superClass) {                                                              // 23
    if (typeof superClass !== "function" && superClass !== null) {                                         // 24
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }                                                                                                      // 26
                                                                                                           // 27
    if (superClass) {                                                                                      // 28
      if (Object.create) {                                                                                 // 29
        // All but IE 8                                                                                    // 30
        subClass.prototype = Object.create(superClass.prototype, {                                         // 31
          constructor: {                                                                                   // 32
            value: subClass,                                                                               // 33
            enumerable: false,                                                                             // 34
            writable: true,                                                                                // 35
            configurable: true                                                                             // 36
          }                                                                                                // 37
        });                                                                                                // 38
      } else {                                                                                             // 39
        // IE 8 path.  Slightly worse for modern browsers, because `constructor`                           // 40
        // is enumerable and shows up in the inspector unnecessarily.                                      // 41
        // It's not an "own" property of any instance though.                                              // 42
        //                                                                                                 // 43
        // For correctness when writing code,                                                              // 44
        // don't enumerate all the own-and-inherited properties of an instance                             // 45
        // of a class and expect not to find `constructor` (but who does that?).                           // 46
        var F = function () {                                                                              // 47
          this.constructor = subClass;                                                                     // 48
        };                                                                                                 // 49
        F.prototype = superClass.prototype;                                                                // 50
        subClass.prototype = new F();                                                                      // 51
      }                                                                                                    // 52
                                                                                                           // 53
      // For modern browsers, this would be `subClass.__proto__ = superClass`,                             // 54
      // but IE <=10 don't support `__proto__`, and in this case the difference                            // 55
      // would be detectable; code that works in modern browsers could easily                              // 56
      // fail on IE 8 if we ever used the `__proto__` trick.                                               // 57
      //                                                                                                   // 58
      // There's no perfect way to make static methods inherited if they are                               // 59
      // assigned after declaration of the classes.  The best we can do is                                 // 60
      // to copy them.  In other words, when you write `class Foo                                          // 61
      // extends Bar`, we copy the static methods from Bar onto Foo, but future                            // 62
      // ones are not copied.                                                                              // 63
      //                                                                                                   // 64
      // For correctness when writing code, don't add static methods to a class                            // 65
      // after you subclass it.                                                                            // 66
      for (var k in superClass) {                                                                          // 67
        if (_hasOwnProperty.call(superClass, k)) {                                                         // 68
          subClass[k] = superClass[k];                                                                     // 69
        }                                                                                                  // 70
      }                                                                                                    // 71
    }                                                                                                      // 72
  },                                                                                                       // 73
  // used by es7.objectRestSpread and JSX                                                                  // 74
  _extends: Object.assign || (function (target) {                                                          // 75
    for (var i = 1; i < arguments.length; i++) {                                                           // 76
      var source = arguments[i];                                                                           // 77
      for (var key in source) {                                                                            // 78
        if (_hasOwnProperty.call(source, key)) {                                                           // 79
          target[key] = source[key];                                                                       // 80
        }                                                                                                  // 81
      }                                                                                                    // 82
    }                                                                                                      // 83
    return target;                                                                                         // 84
  }),                                                                                                      // 85
  // used by es6.destructuring                                                                             // 86
  objectWithoutProperties: function (obj, keys) {                                                          // 87
    var target = {};                                                                                       // 88
    for (var i in obj) {                                                                                   // 89
      if (keys.indexOf(i) >= 0) continue;                                                                  // 90
      if (! _hasOwnProperty.call(obj, i)) continue;                                                        // 91
      target[i] = obj[i];                                                                                  // 92
    }                                                                                                      // 93
    return target;                                                                                         // 94
  },                                                                                                       // 95
  // used by es6.destructuring                                                                             // 96
  objectDestructuringEmpty: function (obj) {                                                               // 97
    if (obj == null) throw new TypeError("Cannot destructure undefined");                                  // 98
  }                                                                                                        // 99
};                                                                                                         // 100
                                                                                                           // 101
var _hasOwnProperty = Object.prototype.hasOwnProperty;                                                     // 102
                                                                                                           // 103
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['babel-runtime'] = {
  babelHelpers: babelHelpers
};

})();
