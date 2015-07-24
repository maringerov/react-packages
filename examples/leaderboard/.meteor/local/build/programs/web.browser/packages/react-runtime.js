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
var ReactProd = Package['react-runtime-prod'].ReactProd;

/* Package-scope variables */
var React;

(function () {

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/react-runtime/react-runtime.js                           //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
if (Package["react-runtime-dev"]) {                                  // 1
  React = Package["react-runtime-dev"].ReactDev;                     // 2
} else {                                                             // 3
  React = ReactProd;                                                 // 4
}                                                                    // 5
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['react-runtime'] = {
  React: React
};

})();
