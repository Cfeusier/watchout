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
    this.createPlayerObjects();
    this.createScoreObjects();
    this.createEnemyObjects();
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
    this.enemies = new EnemyCollection().generateEnemies(this.numOfEnemies, this.width, this.height, this.score);
  },
  createPlayerObjects: function() {
    this.player = new Player(this.width, this.height, 15);
    this.board.append('circle')
      .attr('cx', this.player.x)
      .attr('cy', this.player.y)
      .attr('r', this.player.radius)
      .style('fill', this.player.color)
      .call(d3.behavior.drag().on("drag", this.player.dragMove));
  },
  checkCollision: function(enemy, game) {
    var player = game.player;
    var score = game.score;

    var xTest = enemy.x > player.x && enemy.x <= player.x + (player.radius * 2);
    var yTest = enemy.y > player.y && enemy.y <= player.y + (player.radius * 2);

    if (xTest && yTest) {
      score.resetScore();
      score.updateCollisions();
    }
  },
  collisionTween: function() {
    var enemyDOM = d3.select(this);
    var enemy = enemyDOM.data()[0];

    var startPos = {
      x: enemy.x,
      y: enemy.y
    };

    var endData = {
      x: enemy.boardSize.width * Math.random(),
      y: enemy.boardSize.height * Math.random()
    };

    var endPos = {
      x: endData.x,
      y: endData.y
    };

    return function(t) {

      var enemyNextPos = {
        x: startPos.x + (endPos.x - startPos.x) * t,
        y: startPos.y + (endPos.y - startPos.y) * t
      };

      enemy.x = enemyNextPos.x;
      enemy.y = enemyNextPos.y;

      Game.prototype.checkCollision(enemy, game);

      enemyDOM.attr('transform', function() {
        return 'translate(' + enemyNextPos.x + ',' + enemyNextPos.y + ')';
      });
    }

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
      .tween('custom', this.collisionTween);
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
