var Game = function(width, height, numOfEnemies) {
  this.width = width;
  this.height = height;
  this.numOfEnemies = numOfEnemies;
  this.board = d3.select('body').append('svg').attr('width', width).attr('height', height);
  this.enemies = [];
};

Game.prototype = {
  constructor: Game,
  startGame: function() {
    // create en Objs
    this.createEnemyObjects();
    this.createScoreObjects();
    this.createPlayerObjects();
    this.setupData();

    this.runGameLoop();

    this.runScoreLoop();
  },
  runGameLoop: function() {
    setInterval(this.setupData.bind(this), 1000);
  },

  createScoreObjects: function() {
    this.score = new Score();
  },

  runScoreLoop: function() {
    setInterval(this.score.increaseScore.bind(this.score), 250);
  },

  createEnemyObjects: function() {
    // create enemy objects and store in array
    this.enemies = new EnemyCollection().generateEnemies(this.numOfEnemies, this.width, this.height);
  },

  createPlayerObjects: function() {
    this.player = new Player(this.width, this.height);
    this.playerObj = this.board.append('circle')
      .attr('cx', this.player.x)
      .attr('cy', this.player.y)
      .attr('r', 15)
      .style('fill', this.player.color)
      .call(d3.behavior.drag().on("drag", this.player.dragMove));
  },

  joinData: function() {
    // initial data join between path nodes and enemy objects
    this.enemyNodes = this.board.selectAll('path').data(this.enemies, function(d) { return d.id; });
  },

  enterData: function() {
    // enter
    this.enemyNodes.enter().append('svg:path')
      .attr('d', function(d) { return d.imageRef.path; } )
      .attr('fill', function(d) { return d.imageRef.fill; } )
      .attr('transform' ,function(d) { return 'translate(' + d.x + ',' + d.y + ')'; })
      .style('fill-opacity', 1e-6)
      .transition()
      .duration(750)
      .style('fill-opacity', 1);
  },

  updateData: function() {
    this.enemyNodes.style('fill-opacity', 0.85)
      .transition()
      .duration(750)
      .attr('transform', function(d) {
        return 'translate(' + Math.random() * this.width + ',' + Math.random() * this.height + ')';
      }.bind(this));
  },

  exitData: function() {
    this.enemyNodes.exit().remove();
  },

  setupData: function() {
    this.joinData();
    this.enterData();
    this.updateData();
    this.exitData();
  }
};