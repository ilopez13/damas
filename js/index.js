var gameTable = Array();
var ctx;
var canvasWidth = 800;
var canvasHeight = 800;
var boxWidth;
var boxHeight;
var margin = 105;

//document load
$(document).ready(function() {
    loadInitialData();
    $("#startGame").click(function() {
        loadGame();
        showCurrentPlayer();
    });
});

function loadInitialData(){
	var canvas = document.getElementById("stageDamas");

    ctx = canvas.getContext("2d"); 
    
    //canvas click
    canvas.onclick = function(value) {        
        processRound(value);
        showCurrentPlayer();
    }
}

function processRound(){
	
}
function showCurrentPlayer(){

}


/**
 * loadGameTable()
 * picks the input numbers from width and height boxes, then uses those valors
 *      to generate an array with Box objects
 *      Finally, calls the paint function to draw on canvas
 */
function loadGame() {
	canvasWidth = 896;
  	canvasHeight = 896;
    //resets the canvas and the game table
    ctx.clearRect(0,0, canvasWidth, canvasHeight);
    gameTable = [];
    
    //picks measures and validates it
    boxWidth = canvasWidth/16;
 	boxHeight = canvasHeight/16;
    
    //generates the game table
    for (var i=0; i<boxWidth; i++) {
    	
        gameTable[i] = []; 
        for (var j=0; j<boxHeight; j++) {
        	console.log("dentro for");
            var b = new Box();
            b.construct(j*boxHeight, i*boxWidth, boxWidth, boxHeight, "black");
            b.paint();
            gameTable[i][j] = b;                        
        }
    }
    //game = new Game(gameTable);
}

