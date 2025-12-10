var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        //////////////////////////////////////////////////////////////////
        // ANIMATION VARIABLES HERE //////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        // TODO (several):
        var tree;
        var buildings = [];
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO 1:
            // this currently fills the background with an obnoxious yellow;
            // you should modify both the height and color to suit your game
            var backgroundImage = draw.bitmap("img/levelBG.png"); //draws a rectangle and stores it inside of backgroundFill
            background.addChild(backgroundImage); //adds backgroundFill as a child of backgroundObject
            
            /* TODO 2: - Add a moon and starfield
            for(var i = 0; i < 50; i++){
                var circle = draw.circle(2, "white", "LightGray", 2); //creates a circle with a specified radius, border color, fill color, and alpha (opacity) and stores it in the variable circle
                circle.x = canvasWidth * Math.random(); //sets a random x position within the canvas's width
                circle.y = groundY * Math.random(); //sets a random y position within groundY
                background.addChild(circle); //adds circle to the background container.
            }
            
            //var moon = draw.bitmap("img/moon.png"); //creates a bitmap object using the image of moon.png, and then stores it in the moon variable
            moon.x = canvas.width - 400; //sets the moon's x position
            moon.y = groundY - 400; //sets the moon's y position
            moon.scaleX = 0.75; //scales the moon's width
            moon.scaleY = 0.75; //scales the moon's height
            background.addChild(moon); //adds the moon to the background container so we can see it
            */
            

            /* TODO 4: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            for (var i = 0; i < 5; ++i) { //creates 5 buildings
                var buildingColors = ["Red", "Orange", "Yellow", "Black", "Cyan"];
                var buildingHeight = 300 * Math.random(400, 700); //creates a variable called buildingHeight that stores the value of the buildings' heights
                var building = draw.rect(75, buildingHeight, buildingColors[i], "Black", 1); //draws a rectangle, stores it in the building variable, and gives it an x value
                building.x = 200 * i; //sets the x value of the buildings in relation to the i value
                building.y = groundY - buildingHeight; //sets the y value of the buildings
                background.addChild(building); //adds building as a child to background so it can be seen
                buildings.push(building); //takes that building, and pushes it to the array so it can be drawn
            }
            */
            // TODO 3: Part 1 - Add a tree
            /*tree = draw.bitmap("img/tree.png"); //creates a bitmap object using the tree image and stores it in the variable tree
            tree.x = 600; //sets the x value of the tree
            tree.y = groundY - 230; //sets the y value of the tree
            background.addChild(tree); //adds tree to the background container
            */
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 3: Part 2 - Move the tree!
            /*tree.x = tree.x - 4; //moves the tree to the left by subtracting from its current x position

            //checks if the tree has gone off the left and resets to the right
            if (tree.x < -200) {
                tree.x = canvasWidth;
            }
            
            // TODO 4: Part 2 - Parallax
            for (var i = 0; i < buildings.length; i++) { 
                var building = buildings[i]; //every time this loop runs it pulls out an index from the building array and stores it in the building variable
                building.x -= 2 //it takes out an x value of the building and subtracts 2 from it to move to the left
                if(building.x < -200){ //checks if the x of the building has gone off the screen
                    building.x = canvas.width; //resets the building back to the right of the canvas
                }
                
  // code to do something with each element
            }
            */
        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
