$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();
    


    // TODO 2 - Create Platforms
      createPlatform(300, 650, 150, 20, "#ff7b00ff");
      createPlatform(650, 540, 250, 20, "#bbff00ff");
      createPlatform(450, 410, 100, 20, "#00ff80ff");
      createPlatform(1050, 425, 250, 20, "#0059ffff");
      createPlatform(300, 300, 100, 10, "#68196bfb")
      createPlatform(550, 200, 250, 10, "#003cffff")
      createPlatform(1000, 200, 50, 10, "#ddbdbdff")
      createPlatform(1190, 280, 300, 10, "#fbff00ff")
      createPlatform(1390, 280, 10, -100, "#fbff00ff")
    // TODO 3 - Create Collectables
      createCollectable("bronze", 375, 600, 0.5, 0.5);
      createCollectable("silver", 1250, 350, 0.5, 0.5);
      createCollectable("gold", 650, 50, 0.5, 0.5);
      createCollectable("platinum", 1200, 100, 0.5, 0.5);
      createCollectable("logo", 350, 250, 0.5, 0.5);
    // TODO 4 - Create Cannons
      createCannon("top", 650, 2000);
      createCannon("right", 450, 2750);
      createCannon("bottom", 530, 3000);
      createCannon("left", 100, 4000);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
