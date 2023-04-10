var cores = ["green", "red", "yellow", "blue"];
var jogadorClicks = [];
var jogoClicks = [];
var level = 0;
var comecar = false;

$(document).keydown(function(){
    if(!comecar){
        comecar = true;
        $("#level-title").text("Nivel " + level);
        proximo();
    }
});

$(".btn").click(function click(){
    var userClick = $(this).attr("id");
    jogadorClicks.push(userClick);
    fazerSom(userClick);
    resposta();
    });



function fazerSom(key){
    switch (key) {
        case "green":
            var audio = new Audio("sounds/green.mp3");
            audio.play();
            $("#green").fadeOut(100).fadeIn(100);
            break;
        case "red":
            $("#red").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
            var audio = new Audio("sounds/red.mp3");
            audio.play();
            break;
        case "yellow":
            $("#yellow").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
            var audio = new Audio("sounds/yellow.mp3");
            audio.play();
            break;
        case "blue":
            $("#blue").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
            var audio = new Audio("sounds/blue.mp3");
            audio.play();
            break;
        default:
            break;
    }
}

function proximo(){
    jogadorClicks = [];
    level ++;
    $("#level-title").text("Nivel " + level);
    var randomCor = Math.floor(Math.random() * cores.length);
    var jogoClick = cores[randomCor];
    jogoClicks.push(jogoClick);
    fazerSom(jogoClick);
}

function resposta(){
    currentLevel = jogadorClicks.length - 1;
    if (jogoClicks[currentLevel] === jogadorClicks[currentLevel]){
        if(jogoClicks.length === jogadorClicks.length){
        setTimeout(function(){
            proximo();
        }, 1000);
    }

    }else{
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 100);
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();
        $("#level-title").text("Você perdeu, pressione qualquer tecla para recomeçar.");
        startOver();
    }
}

function startOver(){
    level = 0;
    jogadorClicks = [];
    jogoClicks = [];
    comecar = false;

}
