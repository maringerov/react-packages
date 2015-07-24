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
var Template = Package.templating.Template;
var React = Package['react-runtime'].React;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var HTML = Package.htmljs.HTML;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/react-template-helper/react-template-helper.js                                                           //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
// Empty template; logic in `onRendered` below                                                                       // 1
Template.React = new Template("Template.React", function () { return []; });                                         // 2
                                                                                                                     // 3
Template.React.onRendered(function () {                                                                              // 4
  var parentTemplate = parentTemplateName();                                                                         // 5
  var container = this.firstNode.parentNode;                                                                         // 6
  this.container = container;                                                                                        // 7
                                                                                                                     // 8
  this.autorun(function (c) {                                                                                        // 9
    var data = Blaze.getData();                                                                                      // 10
                                                                                                                     // 11
    var comp = data && data.component;                                                                               // 12
    if (! comp) {                                                                                                    // 13
      throw new Error(                                                                                               // 14
        "In template " + parentTemplate + ", call to `{{> React ... }}` missing " +                                  // 15
          "`component` argument.");                                                                                  // 16
    }                                                                                                                // 17
                                                                                                                     // 18
    // Remove this block of code once we ship Meteor 1.1.1 or above,                                                 // 19
    // where we detect these cases (and more) when templates are                                                     // 20
    // compiled:                                                                                                     // 21
    // https://github.com/meteor/meteor/commit/29d907e8365fa28b22994cb63311de60fd58cc1f                              // 22
                                                                                                                     // 23
    // expected nodes that aren't whitespace-only text nodes                                                         // 24
    var expectedContainerChildNodes = c.firstRun ? 0 : 1;                                                            // 25
    if (numChildNodes(container) > expectedContainerChildNodes) {                                                    // 26
      var compDescriptor = comp.displayName                                                                          // 27
            ? "the React component " + comp.displayName                                                              // 28
            : "a React component";                                                                                   // 29
                                                                                                                     // 30
      throw new Error(                                                                                               // 31
        "Template " + parentTemplate + " must render " + compDescriptor +                                            // 32
          " as the only child of its parent element. Learn more at " +                                               // 33
          "https://github.com/meteor/meteor/wiki/React-components-must-be-the-only-thing-in-their-wrapper-element");
    }                                                                                                                // 35
                                                                                                                     // 36
    // End block of code to remove with Meteor 1.1.1                                                                 // 37
                                                                                                                     // 38
    var props = _.omit(data, 'component');                                                                           // 39
    React.render(React.createElement(comp, props), container);                                                       // 40
  });                                                                                                                // 41
});                                                                                                                  // 42
                                                                                                                     // 43
Template.React.onDestroyed(function () {                                                                             // 44
  React.unmountComponentAtNode(this.container);                                                                      // 45
});                                                                                                                  // 46
                                                                                                                     // 47
// Gets the name of the template inside of which this instance of `{{>                                               // 48
// React ...}}` is being used. Used to print more explicit error messages                                            // 49
function parentTemplateName () {                                                                                     // 50
  var view = Blaze.getView();                                                                                        // 51
  if (view.name !== "Template.React")                                                                                // 52
    throw new Error("Unexpected: called outside of Template.React");                                                 // 53
                                                                                                                     // 54
  view = view.parentView;                                                                                            // 55
  while (! view.template)                                                                                            // 56
    view = view.parentView;                                                                                          // 57
                                                                                                                     // 58
  var match = view.name.match(/Template\.(.*)/);                                                                     // 59
  if (! match)                                                                                                       // 60
    throw new Error("Unexpected: View doesn't correspond to a template? " + view.name);                              // 61
                                                                                                                     // 62
  return match[1];                                                                                                   // 63
};                                                                                                                   // 64
                                                                                                                     // 65
// Gets the number of child nodes of `el` that aren't only whitespace                                                // 66
function numChildNodes (el) {                                                                                        // 67
  var numChildNodes = 0;                                                                                             // 68
  for (var node = el.firstChild; node; node = node.nextSibling) {                                                    // 69
    if (!(node.nodeType === Node.TEXT_NODE && node.nodeValue.match(/^\s*$/))) {                                      // 70
      numChildNodes++;                                                                                               // 71
    }                                                                                                                // 72
  }                                                                                                                  // 73
                                                                                                                     // 74
  return numChildNodes;                                                                                              // 75
};                                                                                                                   // 76
                                                                                                                     // 77
                                                                                                                     // 78
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['react-template-helper'] = {};

})();
