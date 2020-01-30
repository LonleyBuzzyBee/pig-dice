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
    
  


// // toss button
//   tossInto() {
//     var diceRoll = $(".btn").val();
//     initToss(diceRoll);

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
      initTurn =0;
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
});