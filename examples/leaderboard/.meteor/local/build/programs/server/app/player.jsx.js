(function(){PlayerList = React.createClass({
  displayName: "PlayerList",

  propTypes: {
    selectedPlayerId: React.PropTypes.string,
    players: React.PropTypes.array.isRequired
  },

  setSelectedPlayer: function (id) {
    Session.set("selectedPlayer", id);
  },

  render: function () {
    var _this = this;

    return React.createElement(
      "ul",
      { className: "leaderboard" },
      this.props.players.map(function (player) {
        return React.createElement(PlayerItem, {
          key: player._id,
          selectedPlayerId: _this.props.selectedPlayerId,
          setSelectedPlayer: _this.setSelectedPlayer,
          player: player });
      })
    );
  }
});

PlayerItem = React.createClass({
  displayName: "PlayerItem",

  handleClick: function () {
    var playerId = this.props.player._id;
    this.props.setSelectedPlayer(playerId);
  },

  getClassName: function () {
    var selectedId = this.props.selectedPlayerId;
    var playerId = this.props.player._id;
    return selectedId === playerId ? "player selected" : "player";
  },

  render: function () {
    var player = this.props.player;

    return React.createElement(
      "li",
      { className: this.getClassName(), onClick: this.handleClick },
      React.createElement(
        "span",
        { className: "name" },
        player.name
      ),
      React.createElement(
        "span",
        { className: "score" },
        player.score
      )
    );
  }
});

})();

//# sourceMappingURL=player.jsx.js.map
