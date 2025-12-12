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
          { type: "obstacle", x: 1300, y: groundY - 110, damage: 20, rotation: 0, size: 27, image: "img/newMissile.png", offsetX: -50, offsetY: -50, scaleX: 0.5, scaleY: 0.5, speed: 8},
          { type: "obstacle", x: 900, y: groundY - 10, damage: 20, rotation: 0, size: 25, image: "img/newBomb.png", offsetX: -30, offsetY: -30, scaleX: 0.25, scaleY: 0.25, speed: 3},
          { type: "obstacle", x: 1400, y: groundY - 110, damage: 20, rotation: 0, size: 25, image: "img/newMissile.png", offsetX: -35, offsetY: -25, scaleX: 0.35, scaleY: 0.35, speed: 8},
          { type: "obstacle", x: 1700, y: groundY - 10, damage: 40, rotation: 0, size: 25, image: "img/newTNT.png", offsetX: -25, offsetY: -25, scaleX: 0.10, scaleY: 0.10, speed: 3},
          { type: "obstacle", x: 2300, y: groundY - 10, damage: 10, rotation: 0, size: 20, image: "img/newSpikedShell.png", offsetX: -55, offsetY: -60, scaleX: 0.5, scaleY: 0.5, speed: 3},
          { type: "obstacle", x: 2800, y: groundY - 110, damage: 20, rotation: 0, size: 27, image: "img/newMissile.png", offsetX: -50, offsetY: -50, scaleX: 0.5, scaleY: 0.5, speed: 5},
          { type: "obstacle", x: 3300, y: groundY - 10, damage: 20, rotation: 0, size: 25, image: "img/newBomb.png", offsetX: -30, offsetY: -30, scaleX: 0.25, scaleY: 0.25, speed: 3},
          { type: "obstacle", x: 3900, y: groundY - 10, damage: 40, rotation: 0, size: 25, image: "img/newTNT.png", offsetX: -25, offsetY: -25, scaleX: 0.10, scaleY: 0.10, speed: 3},
          { type: "obstacle", x: 4200, y: groundY - 10, damage: 20, rotation: 0, size: 25, image: "img/newBomb.png", offsetX: -30, offsetY: -30, scaleX: 0.25, scaleY: 0.25, speed: 3},
          { type: "obstacle", x: 4600, y: groundY - 10, damage: 10, rotation: 0, size: 20, image: "img/newSpikedShell.png", offsetX: -55, offsetY: -60, scaleX: 0.5, scaleY: 0.5, speed: 3},

          { type: "enemy", x: 600, y: groundY - 50, hitZoneSize: 40, image: "img/newJellyfish.png", offsetX: -50, offsetY: -50, scaleX: 0.25, scaleY: 0.25, speed: 4, damage: -10, score: 100},
          { type: "enemy", x: 900, y: groundY - 50, hitZoneSize: 40, image: "img/newNBrio.png", offsetX: -50, offsetY: -100, scaleX: 0.20, scaleY: 0.20, speed: 4, damage: -20, score: 200},
          { type: "enemy", x: 1400, y: groundY - 50, hitZoneSize: 25, image: "img/newNeoCortex.png", offsetX: -50, offsetY: -80, scaleX: 0.25, scaleY: 0.25, speed: 4, damage: -25, score: 500},
          { type: "enemy", x: 3000, y: groundY - 50, hitZoneSize: 40, image: "img/newUkaUka.png", offsetX: -50, offsetY: -90, scaleX: 0.5, scaleY: 0.5, speed: 7, damage: -10, score: 1000},
          
          { type: "reward", x: 600, y: groundY - 100, hitZoneSize: 25, image: "img/wumpaCoin.png", offsetX: -150, offsetY: -50, scaleX: 0.50, scaleY: 0.50, speed: 3, healthRestored: 0, score: 100},
          { type: "reward", x: 800, y: groundY - 100, hitZoneSize: 25, image: "img/wumpaCoin.png", offsetX: -150, offsetY: -50, scaleX: 0.50, scaleY: 0.50, speed: 3, healthRestored: 0, score: 100},
          { type: "reward", x: 1000, y: groundY - 100, hitZoneSize: 25, image: "img/wumpaCrate.png", offsetX: -70, offsetY: -25, scaleX: 0.50, scaleY: 0.50, speed: 3, healthRestored: 0, score: 1000},
          { type: "reward", x: 1500, y: groundY - 100, hitZoneSize: 25, image: "img/newWumpaFruit.png", offsetX: -25, offsetY: -25, scaleX: 0.05, scaleY: 0.05, speed: 3, healthRestored: 15, score: 0},
          { type: "reward", x: 2700, y: groundY - 100, hitZoneSize: 25, image: "img/newAkuAku.png", offsetX: -25, offsetY: -25, scaleX: 0.25, scaleY: 0.25, speed: 3, healthRestored: 60, score: 0},
          { type: "reward", x: 3300, y: groundY - 100, hitZoneSize: 25, image: "img/newBlueGem.png", offsetX: -25, offsetY: -25, scaleX: 0.25, scaleY: 0.25, speed: 3, healthRestored: 0, score: 1000},
          
          { type: "levelMarker", x: 5000, y: groundY - 85, hitZoneSize: 25, image: "img/timeRelic.png", offsetX: -25, offsetY: -25, scaleX: 0.40, scaleY: 0.40, speed: 5, healthRestored: 30},
        ],
      },
      {
        name: "Crash Bandiloop: Classic CrashCourse",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "obstacle", x: 5700, y: groundY - 10, damage: 20, rotation: 0, size: 25, image: "img/classicBomb.png", offsetX: -50, offsetY: -50, scaleX: 0.5, scaleY: 0.5, speed: 3},
          { type: "obstacle", x: 6000, y: groundY - 110, damage: 20, rotation: 0, size: 27, image: "img/classicMissile.png", offsetX: -50, offsetY: -50, scaleX: 0.5, scaleY: 0.5, speed: 3},
          { type: "obstacle", x: 6400, y: groundY - 10, damage: 20, rotation: 0, size: 25, image: "img/classicSpikedShell.png", offsetX: -50, offsetY: -50, scaleX: 0.5, scaleY: 0.5, speed: 3},
          { type: "obstacle", x: 6400, y: groundY - 10, damage: 20, rotation: 0, size: 25, image: "img/classicTNT.png", offsetX: -50, offsetY: -50, scaleX: 0.5, scaleY: 0.5, speed: 3},
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
