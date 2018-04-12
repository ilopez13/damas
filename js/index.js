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
}