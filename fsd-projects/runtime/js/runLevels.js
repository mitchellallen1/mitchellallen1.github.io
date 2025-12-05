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
    
    
    function createObstacle(x, y, damage, rotation, size, image, offsetX, offsetY, scaleX, scaleY){
      var hitZoneSize = size; //size of the obstacle collision area
      var damageFromObstacle = damage; //the amount of damage the obstacle inflicts
      var obstacleHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); //creates the actual hitzone and attaches its damage and size; they're all stored in this variable
      
      obstacleHitZone.x = x; //sets the obstacle's x position
      obstacleHitZone.y = y; //sets the obstacle's y position
      
      game.addGameItem(obstacleHitZone); //adds the obstacle to the game
      
      var obstacleImage = draw.bitmap(image); //draws the missile image as a bitmap and stores it as an obstacle image
      
      obstacleHitZone.addChild(obstacleImage); //takes the sawblade picture and adds it as a child to the hitzone
      
      obstacleImage.x = offsetX; //offsets the obstacle image horizontally relative to the hitzone
      obstacleImage.y = offsetY; //offsets the obstacle image vertically relative to the hitzone
      
      obstacleImage.scaleX = scaleX;
      obstacleImage.scaleY = scaleY;

      obstacleHitZone.rotationalVelocity = rotation;
    }

    

    function createEnemy(x, y, hitZoneSize, image, offsetX, offsetY, speed, damage, score){
          var enemy = game.createGameItem("enemy", hitZoneSize); //creates the enemy and makes the hit zone 25, and the stores the enemy in the variable enemy
          var enemyImage = draw.bitmap(image); //creates the image of the enemy and stores it to the variable enemyImage
          
          enemyImage.x = offsetX; //x value offset from image to hit zone
          enemyImage.y = offsetY; //y value offset from image to hit zone
          
          enemy.addChild(enemyImage); //attaches the enemyImage to enemyObject
          
          enemy.x = x; //setting the enemy x position
          enemy.y = y; //setting the enemy y position
          
          game.addGameItem(enemy); //adds the enemy to the game

          enemy.velocityX -= speed //moving your enemy across the screen

          //handles when halle collides with the enemy
          enemy.onPlayerCollision = function(){
            game.changeIntegrity(damage); //reduces player health
          }

        
          //handles when halle shoots the enemy
          enemy.onProjectileCollision = function(){
            game.increaseScore(score); //increases the player's score when halle shoots the enemy
            //on projectile collision, shrinks/fadeOut/flyTo enemy image
            enemy.fadeOut();
            //enemy.shrink();
            //enemy.flyTo(0, 0);
          }

    }
    
    


    function createReward(x, y, hitZoneSize, image, offsetX, offsetY, speed, healthRestored){
          var reward = game.createGameItem("reward", hitZoneSize); //creates the reward and makes the hit zone 25, and the stores the enemy in the variable enemy
          var rewardImage = draw.bitmap(image); //creates the image of the reward and stores it to the variable rewardImage
          
          rewardImage.x = offsetX; //x value offset from image to hit zone
          rewardImage.y = offsetY; //y value offset from image to hit zone
          
          reward.addChild(rewardImage); //attaches the reward to rewardImage
          
          reward.x = x; //setting the enemy x position
          reward.y = y; //setting the enemy y position
          
          game.addGameItem(reward); //adds the reward to the game

          reward.velocityX -= speed //moving your reward across the screen

          //handles when halle collides with the reward
          reward.onPlayerCollision = function(){
              reward.fadeOut();
              game.changeIntegrity(healthRestored); //grants player health
          }

    }
          
    function createLevelMarker(x, y, hitZoneSize, image, offsetX, offsetY, speed, healthRestored){
          var levelMarker = game.createGameItem("level", hitZoneSize); //creates the levelMarker and makes the hit zone 25, and the stores the enemy in the variable enemy
          var levelImage = draw.bitmap(image); //creates the image of the levelMarker and stores it to the variable enemyImage
          
          levelImage.x = offsetX; //x value offset from image to hit zone
          levelImage.y = offsetY; //y value offset from image to hit zone
          
          levelMarker.addChild(levelImage); //attaches the levelImage to levelMarker
          
          levelMarker.x = x; //setting the level marker x position
          levelMarker.y = y; //setting the level marker y position
          
          game.addGameItem(levelMarker); //adds the level marker to the game

          levelMarker.velocityX -= speed //moving the level marker across the screen

          //handles when halle collides with the enemy
          levelMarker.onPlayerCollision = function(){
              levelMarker.fadeOut();
              startLevel();
              game.changeIntegrity(healthRestored); //grants player health
          }

    }

    function startLevel() {
      // TODO 13 goes below here
      var level = levelData[currentLevel]; //fetches the current level from the levelData array, and stores it inside of the level variable
      var levelObjects = level.gameItems //retrieves the array of game items and stores it in the level objects variable
      
      for(var i = 0; i < levelObjects.length; i++){
          var element = levelObjects[i];

          if(element.type === "obstacle"){
            createObstacle(element.x, element.y, element.damage, element.rotation, element.size, element.image, element.offsetX, element.offsetY, element.scaleX, element.scaleY);
          };
          if(element.type === "enemy"){
            createEnemy(element.x, element.y, element.hitZoneSize, element.image, element.offsetX, element.offsetY, element.speed, element.damage, element.score);
          };
          if(element.type === "reward"){
            createReward(element.x, element.y, element.hitZoneSize, element.image, element.offsetX, element.offsetY, element.speed, element.healthRestored);
          };
          if(element.type === "levelMarker"){
            createLevelMarker(element.x, element.y, element.hitZoneSize, element.image, element.offsetX, element.offsetY, element.speed, element.healthRestored);
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
