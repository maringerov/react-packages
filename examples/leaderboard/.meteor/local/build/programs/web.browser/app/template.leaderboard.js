(function(){
Template.body.addContent((function() {
  var view = this;
  return HTML.DIV({
    "class": "outer"
  }, HTML.Raw('\n    <div class="logo"></div>\n    <h1 class="title">Leaderboard</h1>\n    <div class="subtitle">Select a scientist to give them points</div>\n    '), Spacebars.include(view.lookupTemplate("leaderboard")), "\n  ");
}));
Meteor.startup(Template.body.renderToDocument);

Template.__checkName("leaderboard");
Template["leaderboard"] = new Template("Template.leaderboard", (function() {
  var view = this;
  return [ HTML.DIV("\n    ", Blaze._TemplateWith(function() {
    return {
      component: Spacebars.call(view.lookup("PlayerList")),
      players: Spacebars.call(Spacebars.dot(view.lookup("players"), "fetch")),
      selectedPlayerId: Spacebars.call(view.lookup("selectedPlayerId"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("React"));
  }), "\n  "), "\n\n  ", Blaze.If(function() {
    return Spacebars.call(view.lookup("selectedName"));
  }, function() {
    return [ "\n    ", HTML.DIV({
      "class": "details"
    }, "\n      ", HTML.DIV({
      "class": "name"
    }, Blaze.View("lookup:selectedName", function() {
      return Spacebars.mustache(view.lookup("selectedName"));
    })), "\n      ", HTML.BUTTON({
      "class": "inc"
    }, "Add 5 points"), "\n    "), "\n  " ];
  }, function() {
    return [ "\n    ", HTML.DIV({
      "class": "message"
    }, "Click a player to select"), "\n  " ];
  }) ];
}));

})();
