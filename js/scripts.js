function Pc(name) {
  this.name = name;
  this.initScore = 0;
}

// Pc.prototype.initToss = function() {

  function diceToss() {
    return Math.floor(Math.random() * 6) + 1;
      }

  Pc.prototype.newTotalScore = function() {
    this.initScore += standardScore
  }
    
//user logic

//global var for score string, or users scores
var p1 = "";
var p2 = "";
var standardScore = 0;
var initTurn = 1;

// initial submit in user log

$(document).ready(function() {  
  $("form").submit(function(event){
  event.preventDefault();
  var playersName = $("input.name1").val();
  p1 = new Pc(playersName);
  p2 = new Pc(playersName)
  $(".namepc").text(p1.name);
  $(".namepc").text(p2.name);
  console.log(p1.name);
  $(".start").hide();
  $(".play").show();
  });
  // toss button
$(".btn").click(function() {
  var playerRoll = diceToss();
  $(".score").text(playerRoll);
  if (playerRoll == 1) {
    if (initTurn == 1) {
      initTurn = 0;
      $("#play1-turn").hide();
      $("#play2-turn").show();
    } else {
      initTurn = 1;
      $("#play1-turn").show();
      $("#play2-turn").hide();
    }
      standardScore = 0;
      $(".tempScore").text(standardScore);
    } else {
    standardScore =+ playerRoll;
    $(".tempScore").text(standardScore);
  }
});

// hold button
$(".btn-hold").click(function() {
    if (initTurn == 1) {
      p1.newTotalScore();
      $(".toss").text(p1.initScore);
      if (p1.initScore >= 100) {
        $("#play-turn").hide();
        $(".winner").text(p1.name);
        $(".win").show();

       } else { initTurn = 0;
        $(".play1-turn").hide();
        $(".play2-turn").show();
        standardScore= 0;
        $(".tempScore").text(standardScore);
        $(".currentToss").text(0); 

      }
   } else {
        p2.initScore += standardScore;
        $("#play2-score").text(p2.initScore);
          if (p2.initScore >= 100) {
            $("#play-turn").hide();
            $(".winner").text(p2.name);
            $(".win").show();
          } else {
            initTurn = 1;
            $(".play2-turn").hide();
            $(".play1-turn").show();
            standardScore= 0;
            $(".tempScore").text(standardScore);
            $(".currentToss").text(0); 
         }
    }
  });
});
