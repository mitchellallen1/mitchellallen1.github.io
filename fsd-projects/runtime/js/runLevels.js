var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    
    
    function createObstacle(x, y, damage){
      var hitZoneSize = 25; //size of the obstacle collision area
      var damageFromObstacle = damage; //the amount of damage the obstacle inflicts
      var obstacleHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); //creates the actual hitzone and attaches its damage and size; they're all stored in this variable
      obstacleHitZone.x = x; //sets the obstacle's x position
      obstacleHitZone.y = y; //sets the obstacle's y position
      game.addGameItem(obstacleHitZone); //adds the obstacle to the game
      var obstacleImage = draw.bitmap("img/sawblade.png"); //draws the sawblade image as a bitmap and stores it as an obstacle image
      obstacleHitZone.addChild(obstacleImage); //takes the sawblade picture and adds it as a child to the hitzone
      obstacleImage.x = -25; //offsets the obstacle image horizontally relative to the hitzone
      obstacleImage.y = -25; //offsets the obstacle image vertically relative to the hitzone
    
      obstacleHitZone.rotationalVelocity = 20;
    }

    

    function createEnemy(x, y){
          var enemy = game.createGameItem("enemy", 25); //creates the enemy and makes the hit zone 25, and the stores the enemy in the variable enemy
          var enemyImage = draw.rect(50, 50, "red"); //creates the image of the enemy and stores it to the variable enemyImage
          enemyImage.x = -25; //x value offset from image to hit zone
          enemyImage.y = -25; //y value offset from image to hit zone
          enemy.addChild(enemyImage); //attaches the enemyImage to enemyObject
          enemy.x = x; //setting the enemy x position
          enemy.y = y; //setting the enemy y position
          game.addGameItem(enemy); //adds the enemy to the game

          enemy.velocityX -= 3 //moving your enemy across the screen

          //handles when halle collides with the enemy
          enemy.onPlayerCollision = function(){
          game.changeIntegrity(-10); //reduces player health
          }

        
          //handles when halle shoots the enemy
          enemy.onProjectileCollision = function(){
          game.increaseScore(100); //increases the player's score when halle shoots the enemy
          //on projectile collision, shrinks/fadeOut/flyTo enemy image
          enemy.fadeOut();
          //enemy.shrink();
          //enemy.flyTo(0, 0);
      }

    }
    
    createEnemy(600, groundY - 50);
    createEnemy(1000, groundY - 50);
    createEnemy(1200, groundY - 50);
    


    function createReward(x, y){
          var reward = game.createGameItem("reward", 25); //creates the reward and makes the hit zone 25, and the stores the enemy in the variable enemy
          var rewardImage = draw.rect(50, 50, "blue"); //creates the image of the reward and stores it to the variable rewardImage
          rewardImage.x = -25; //x value offset from image to hit zone
          rewardImage.y = -25; //y value offset from image to hit zone
          reward.addChild(rewardImage); //attaches the reward to rewardImage
          reward.x = x; //setting the enemy x position
          reward.y = y; //setting the enemy y position
          game.addGameItem(reward); //adds the reward to the game

          reward.velocityX -= 3 //moving your reward across the screen

          //handles when halle collides with the reward
            reward.onPlayerCollision = function(){
            reward.fadeOut();
            game.changeIntegrity(5); //grants player health
          }

    }
          createReward(800, groundY - 100);
          createReward(1200, groundY - 100);
          
    function createLevelMarker(x, y){
          var levelMarker = game.createGameItem("level", 25); //creates the levelMarker and makes the hit zone 25, and the stores the enemy in the variable enemy
          var levelImage = draw.rect(50, 50, "yellow"); //creates the image of the levelMarker and stores it to the variable enemyImage
          levelImage.x = -25; //x value offset from image to hit zone
          levelImage.y = -25; //y value offset from image to hit zone
          levelMarker.addChild(levelImage); //attaches the levelImage to levelMarker
          levelMarker.x = x; //setting the level marker x position
          levelMarker.y = y; //setting the level marker y position
          game.addGameItem(levelMarker); //adds the level marker to the game

          levelMarker.velocityX -= 3 //moving the level marker across the screen

          //handles when halle collides with the enemy
          levelMarker.onPlayerCollision = function(){
            levelMarker.fadeOut();
            startLevel();
            game.changeIntegrity(10); //grants player health
          }

    }
          createLevelMarker(2000, groundY - 100);

    function startLevel() {
      // TODO 13 goes below here
      var level = levelData[currentLevel]; //fetches the current level from the levelData array, and stores it inside of the level variable
      var levelObjects = level.gameItems //retrieves the array of game items and stores it in the level objects variable
      
      for(var i = 0; i < levelObjects.length; i++){
          var element = levelObjects[i];

          if(element.type === "obstacle"){
            createObstacle(element.x, element.y, element.damage);
          };

      }

      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
