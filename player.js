var Player = function(width, height, radius) {
  // instantiate at the center of the board
  this.x = width / 2;
  this.y = height / 2;
  this.radius = radius;
  this.color = "#0000ff";
};

Player.prototype = {
  constructor: Player,
  dragMove: function() {
    d3.select(this)
      .attr("cx", game.player.x = d3.event.sourceEvent.x)
      .attr("cy", game.player.y = d3.event.sourceEvent.y);
  }
};
