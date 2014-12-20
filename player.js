var Player = function(width, height) {
  // instantiate at the center of the board
  this.x = width / 2;
  this.y = height / 2;
  this.color = "#0000ff";
};

Player.prototype = {
  constructor: Player,
  drag: function() {
    d3.behavior.drag().on('drag', function() {

      console.log("drag listener")
    });
  },
  dragMove: function(d) {
    console.log(this);
    //d3.select(this)
    //  .attr("cx", d.x = Math.max(15, Math.min(this.width - 15, d3.event.x)))
    //  .attr("cy", d.y = Math.max(15, Math.min(this.height - 15, d3.event.y)));
  }
};