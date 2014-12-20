var EnemyCollection = function() {
  this.enemyList = [];
};

EnemyCollection.prototype = {
  constructor: EnemyCollection,
  generateEnemies: function(numOfEnemies, width, height) {
    for (var i = 0; i < numOfEnemies; i++) {
      this.enemyList.push(new Enemy(i, width, height));
    }
    return this.enemyList;
  }
};
