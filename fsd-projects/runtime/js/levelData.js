var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Crash Bandiloop: Jungle Jamboree",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "obstacle", x: 400, y: groundY - 110, damage: 20, rotation: 0, size: 27, image: "img/newMissile.png", offsetX: -50, offsetY: -50, scaleX: 0.5, scaleY: 0.5},
          { type: "obstacle", x: 600, y: groundY - 10, damage: 20, rotation: 0, size: 25, image: "img/newBomb.png", offsetX: -30, offsetY: -30, scaleX: 0.25, scaleY: 0.25},
          { type: "obstacle", x: 900, y: groundY - 110, damage: 20, rotation: 0, size: 25, image: "img/newMissile.png", offsetX: -35, offsetY: -25, scaleX: 0.35, scaleY: 0.35},
          { type: "obstacle", x: 1200, y: groundY - 10, damage: 40, rotation: 0, size: 25, image: "img/newTNT.png", offsetX: -25, offsetY: -25, scaleX: 0.10, scaleY: 0.10},
          { type: "obstacle", x: 1500, y: groundY - 10, damage: 10, rotation: 0, size: 20, image: "img/newSpikedShell.png", offsetX: -55, offsetY: -60, scaleX: 0.5, scaleY: 0.5},
          
          { type: "enemy", x: 600, y: groundY - 50, hitZoneSize: 40, image: "img/newJellyfish.png", offsetX: -50, offsetY: -50, scaleX: 0.25, scaleY: 0.25, speed: 3, damage: -10, score: 100},
          { type: "enemy", x: 900, y: groundY - 50, hitZoneSize: 40, image: "img/newNBrio.png", offsetX: -50, offsetY: -100, scaleX: 0.20, scaleY: 0.20, speed: 3, damage: -20, score: 200},
          { type: "enemy", x: 1400, y: groundY - 50, hitZoneSize: 25, image: "img/newNeoCortex.png", offsetX: -50, offsetY: -80, scaleX: 0.25, scaleY: 0.25, speed: 3, damage: -25, score: 500},
          { type: "enemy", x: 1900, y: groundY - 50, hitZoneSize: 40, image: "img/newUkaUka.png", offsetX: -50, offsetY: -90, scaleX: 0.5, scaleY: 0.5, speed: 3, damage: -10, score: 1000},
          
          /*{ type: "reward", x: 500, y: groundY - 100, hitZoneSize: 25, image: "img/newMissile.png", offsetX: -25, offsetY: -25, speed: 3, healthRestored: 20},
          { type: "reward", x: 1000, y: groundY - 100, hitZoneSize: 25, image: "img/newMissile.png", offsetX: -25, offsetY: -25, speed: 3, healthRestored: 20},
          { type: "reward", x: 1500, y: groundY - 100, hitZoneSize: 25, image: "img/newMissile.png", offsetX: -25, offsetY: -25, speed: 3, healthRestored: 20},
          { type: "reward", x: 2000, y: groundY - 100, hitZoneSize: 25, image: "img/newMissile.png", offsetX: -25, offsetY: -25, speed: 3, healthRestored: 20},
          
          { type: "levelMarker", x: 2200, y: groundY - 85, hitZoneSize: 25, image: "img/newMissile.png", offsetX: -25, offsetY: -25, speed: 3, healthRestored: 10},*/
        ],
      },
      {
        name: "Crash Bandiloop: Classic CrashCourse",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "obstacle", x: 400, y: groundY, damage: 20},
          { type: "obstacle", x: 600, y: groundY, damage: 20},
          { type: "obstacle", x: 900, y: groundY, damage: 20},
        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
