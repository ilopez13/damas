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