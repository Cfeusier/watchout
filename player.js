var Player = function(width, height) {
  // instantiate at the center of the board
  this.x = width / 2;
  this.y = height / 2;
  this.color = "#0000ff";
};

Player.prototype = {
  constructor: Player,
  dragMove: function() {
    d3.select(this)
      .attr("cx", this.x = d3.event.sourceEvent.x)
      .attr("cy", this.y = d3.event.sourceEvent.y);
  }
};