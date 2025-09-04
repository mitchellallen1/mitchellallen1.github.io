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
    toggleGrid();


    // TODO 2 - Create Platforms
      createPlatform(300, 650, 150, 20, "#64a489ff");
      createPlatform(650, 520, 250, 20, "#0f3b7ed3");
      createPlatform(450, 400, 100, 20, "#3618a5d3");
      createPlatform(1050, 400, 250, 20, "#7717e4d3");
      createPlatform(300, 300, 100, 10, "#aa13aad3")


    // TODO 3 - Create Collectables
      createCollectable("database", 375, 600, 0.5, 0.5);
      createCollectable("database", 1250, 300, 0.5, 0.5);

    
    // TODO 4 - Create Cannons
      createCannon("top", 650, 1500);
      createCannon("right", 400, 2750)
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
