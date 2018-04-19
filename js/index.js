var gameTable = Array();
var ctx;
var canvasWidth = 800;
var canvasHeight = 800;
var boxWidth;
var boxHeight;
var margin = 105;
var canvas;
var chipGamePlayer1 = Array();
var chipGamePlayer2 = Array();

//document load
$(document).ready(function() {
    loadInitialData();

    $("#startGame").click(function() {
        
        loadGame();
        showCurrentPlayer();
    });
});

function loadInitialData(){
	canvas = document.getElementById("stageDamas");
    
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
	canvasWidth = 768;
  	canvasHeight = 768;
    //resets the canvas and the game table
    ctx.clearRect(0,0, canvasWidth, canvasHeight);
    canvas.style.border="solid";
    gameTable = [];
    chipGamePlayer1= [];
    chipGamePlayer2 =[];
    //picks measures and validates it
    boxWidth = canvasWidth/8;
 	boxHeight = canvasHeight/8;
    
    //generates the game table
    for (var i=0; i<boxWidth; i++) {
    	
        gameTable[i] = []; 
        chipGamePlayer1[i]=[];
        chipGamePlayer2[i]=[];

        for (var j=0; j<boxHeight; j++) {
        	console.log("dentro for");
            var b = new Box();
            var c = new Chip();

            if((i+j)%2==0){

                b.construct(j*boxHeight, i*boxWidth, boxWidth, boxHeight, "brown");    
                b.paint();
                
            }else{
                b.construct(j*boxHeight, i*boxWidth, boxWidth, boxHeight, "black");        
                b.paint();
                if(i<3){
                    c.construct(j*boxHeight+(boxHeight/2), i*boxWidth+(boxWidth/2),  (boxWidth/2.7)-5,1);
                    c.paint();
                    chipGamePlayer1[i][j]=b; 
                }
                if(i>=5){
                    c.construct(j*boxHeight+(boxHeight/2), i*boxWidth+(boxWidth/2),  (boxWidth/2.7)-5,2);
                    c.paint();
                    chipGamePlayer2[i][j]=b; 
                }
            }
            
            //gameTable[i][j] = b; 

        }
    }
    

    //game = new Game(gameTable);
}

