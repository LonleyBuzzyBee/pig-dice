function Pc(playerName) {
  this.playerName,
  this.roll1 = 0
}

// Pc.prototype.initToss = function() {

  Pc.prototype.initToss = function() {
  Math.floor(Math.random() * 6) + 1;
    return this.roll1
    
      }
  


// // toss button
//   tossInto() {
//     var diceRoll = $(".btn").val();
//     initToss(diceRoll);





var p1 = "";
var standardScore = 0;
//start page
$(document).ready(function() {  
  event.preventDefault();
  $("form").submit(function(event){
  var name = $("form").val();
  pTurn = New Pc ($("input.name1").val());
  $(".namepc").text(pTurn.name);
  $(".start").show();
  $(".play").hide();
  });
  // toss button
$(".btn").click(function() {
  var playerRoll = initToss();
  $(".score").text(playerRoll);
  if (playerRoll == 1) {
    if (p1 == 1) {
      p1 =0;
      $("#play-turn").hide();
    } else {
      p1 = 1;
      $("#play-turn").show();
    }
    standardScore = 0;
    $

  }

} 
});