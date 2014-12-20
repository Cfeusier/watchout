var Score = function() {
  this.highScore = 0;
  this.currentScore = 0;
  this.collisions = 0;
};

Score.prototype = {
  updateScore: function() {
    d3.select('.scoreboard .current').text('Current score: ' + this.currentScore.toString());
  },
  updateHighScore: function() {
    this.highScore = this.highScore > this.currentScore ? this.highScore : this.currentScore;

    d3.select('.scoreboard .high').text('High score: ' + this.highScore.toString());
  },
  increaseScore: function() {
    this.currentScore++;
    this.updateScore();
    this.updateHighScore();
  },
  resetScore: function() {
    this.currentScore = 0;
    this.updateScore();
    this.collisions++;
    this.updateCollisions();
  },
  updateCollisions: function() {
    d3.select('.scoreboard .collisions').text('Collisions:' + this.collisions.toString());
  }
};