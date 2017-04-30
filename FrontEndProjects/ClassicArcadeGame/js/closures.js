var sagas = [];
var hero = aHero();
var newSaga = function() {
  var foil = aFoil();
  sagas.push(function() {
    var deed = aDeed();
    console.log(hero + " " + deed + " " + foil);
  });
};
newSaga();
for(var x = 0; x < 10; x++){
  sagas[0]();
}
newSaga();
console.log("saga 1 :");
sagas[1]();
sagas[1]();
console.log("saga 0 :");
sagas[0]();
sagas[0]();

function aHero() {
  var num = Math.floor(Math.random() * 3) + 1;
  var hero = null;

  if(num == 1) {
    hero = "Frodo";
  }else if(num == 2){
    hero = "Sam";
  }else {
    hero = "Gollum";
  }
  return hero;
}

function aFoil() {
  var num = Math.floor(Math.random() * 3) + 1;
  var foil = null;

  if(num == 1) {
    foil = "Orc";
  }else if(num == 2){
    foil = "Goblin";
  }else {
    foil = "Sauron";
  }
  return foil;
}

function aDeed() {
  var num = Math.floor(Math.random() * 3) + 1;
  var deed = null;

  if(num == 1) {
    deed = "kills";
  }else if(num == 2){
    deed = "loves";
  }else {
    deed = "avoids";
  }
  return deed;
}
