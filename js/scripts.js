function p1() {
  this.roll1 = 0
}

function initToss() {
  var rando =  Math.floor(Math.random() * 6) + 1;
        console.log(rando);
        return this.roll1 + rando
    
      }
  



// function finalScore() {









$(document).ready(function() {
  $(".btn").click(function(event) {
    event.preventDefault();
    var diceRoll = $(".btn").val();
    initToss(diceRoll);
  });
});