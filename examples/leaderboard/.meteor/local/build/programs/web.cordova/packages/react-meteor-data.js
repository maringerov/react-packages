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
var babelHelpers = Package['babel-runtime'].babelHelpers;

/* Package-scope variables */
var ReactMeteorData;

(function(){

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
// packages/react-meteor-data/meteor-data-mixin.jsx.js                       //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////
                                                                             //
ReactMeteorData = {                                                          // 1
  componentWillMount: function () {                                          // 2
    this.data = {};                                                          // 3
    this._meteorDataManager = new MeteorDataManager(this);                   // 4
    var newData = this._meteorDataManager.calculateData();                   // 5
    this._meteorDataManager.updateData(newData);                             // 6
  },                                                                         //
  componentWillUpdate: function (nextProps, nextState) {                     // 8
    var saveProps = this.props;                                              // 9
    var saveState = this.state;                                              // 10
    var newData = undefined;                                                 // 11
    try {                                                                    // 12
      // Temporarily assign this.state and this.props,                       //
      // so that they are seen by getMeteorData!                             //
      // This is a simulation of how the proposed Observe API                //
      // for React will work, which calls observe() after                    //
      // componentWillUpdate and after props and state are                   //
      // updated, but before render() is called.                             //
      // See https://github.com/facebook/react/issues/3398.                  //
      this.props = nextProps;                                                // 20
      this.state = nextState;                                                // 21
      newData = this._meteorDataManager.calculateData();                     // 22
    } finally {                                                              //
      this.props = saveProps;                                                // 24
      this.state = saveState;                                                // 25
    }                                                                        //
                                                                             //
    this._meteorDataManager.updateData(newData);                             // 28
  },                                                                         //
  componentWillUnmount: function () {                                        // 30
    this._meteorDataManager.dispose();                                       // 31
  }                                                                          //
};                                                                           //
                                                                             //
// A class to keep the state and utility methods needed to manage            //
// the Meteor data for a component.                                          //
                                                                             //
var MeteorDataManager = (function () {                                       //
  function MeteorDataManager(component) {                                    // 38
    babelHelpers.classCallCheck(this, MeteorDataManager);                    //
                                                                             //
    this.component = component;                                              // 39
    this.computation = null;                                                 // 40
    this.oldData = null;                                                     // 41
  }                                                                          //
                                                                             //
  MeteorDataManager.prototype.dispose = function dispose() {                 // 37
    if (this.computation) {                                                  // 45
      this.computation.stop();                                               // 46
      this.computation = null;                                               // 47
    }                                                                        //
  };                                                                         //
                                                                             //
  MeteorDataManager.prototype.calculateData = function calculateData() {     // 37
    var component = this.component;                                          // 52
    var props = component.props;                                             //
    var state = component.state;                                             //
                                                                             //
    if (!component.getMeteorData) {                                          // 55
      return null;                                                           // 56
    }                                                                        //
                                                                             //
    if (this.computation) {                                                  // 59
      this.computation.stop();                                               // 60
      this.computation = null;                                               // 61
    }                                                                        //
                                                                             //
    var data = undefined;                                                    // 64
    // Use Tracker.nonreactive in case we are inside a Tracker Computation.  //
    // This can happen if someone calls `React.render` inside a Computation.
    // In that case, we want to opt out of the normal behavior of nested     //
    // Computations, where if the outer one is invalidated or stopped,       //
    // it stops the inner one.                                               //
    this.computation = Tracker.nonreactive(function () {                     // 70
      return Tracker.autorun(function (c) {                                  // 71
        if (c.firstRun) {                                                    // 72
          data = component.getMeteorData();                                  // 73
        } else {                                                             //
          // Stop this computation instead of using the re-run.              //
          // We use a brand-new autorun for each call to getMeteorData       //
          // to capture dependencies on any reactive data sources that       //
          // are accessed.  The reason we can't use a single autorun         //
          // for the lifetime of the component is that Tracker only          //
          // re-runs autoruns at flush time, while we need to be able to     //
          // re-call getMeteorData synchronously whenever we want, e.g.      //
          // from componentWillUpdate.                                       //
          c.stop();                                                          // 83
          // Calling forceUpdate() triggers componentWillUpdate which        //
          // recalculates getMeteorData() and re-renders the component.      //
          component.forceUpdate();                                           // 86
        }                                                                    //
      });                                                                    //
    });                                                                      //
    return data;                                                             // 90
  };                                                                         //
                                                                             //
  MeteorDataManager.prototype.updateData = function updateData(newData) {    // 37
    var component = this.component;                                          // 94
    var oldData = this.oldData;                                              // 95
                                                                             //
    if (!(newData && typeof newData === "object")) {                         // 97
      throw new Error("Expected object returned from getMeteorData");        // 98
    }                                                                        //
    // update componentData in place based on newData                        //
    for (var key in newData) {                                               // 101
      component.data[key] = newData[key];                                    // 102
    }                                                                        //
    // if there is oldData (which is every time this method is called        //
    // except the first), delete keys in newData that aren't in              //
    // oldData.  don't interfere with other keys, in case we are             //
    // co-existing with something else that writes to a component's          //
    // this.data.                                                            //
    if (oldData) {                                                           // 109
      for (var key in oldData) {                                             // 110
        if (!(key in newData)) {                                             // 111
          delete component.data[key];                                        // 112
        }                                                                    //
      }                                                                      //
    }                                                                        //
    this.oldData = newData;                                                  // 116
  };                                                                         //
                                                                             //
  return MeteorDataManager;                                                  //
})();                                                                        //
///////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['react-meteor-data'] = {
  ReactMeteorData: ReactMeteorData
};

})();
