// Write your JS here
let person;
let maxHealth = 10;

const hero = {
  name: "",
  heroic: true,
  inventory: [],
  health: maxHealth,
  weapon: {
    type: "",
    damage: 2
  }
};

//When inn is clicked, the health restores to 10
const innClicked = document.getElementById("inn").addEventListener("click", function() {
  rest(hero);
});

function rest(person){
  if(person.health = maxHealth){
    alert("Your health level is restored!");
  } else {
    person.health = maxHealth;
  }
  return person;
};

//When the dagger is clicked it will add a weapon object to the inventory array with `type`: `dagger` and `damage`: 2 
const weapons = {
  dagger :{type: "dagger", damage: 2},
};

const daggerClicked = document.getElementById("dagger").addEventListener("click", function(){
  pickUpItem(hero, weapons.dagger);
});

function pickUpItem(person, weapon){
  return person.inventory.push(weapon);
};

//EQUIP WEAPON
//Reassigns the 'weapon' property of person to the first element of the person.inventory array

//If the inventroy array of person is empty, the function should do nothing

//When the bag is clicked, it will equip the hero with the first item in the inventory array

const bagClicked = document.getElementById("bag").addEventListener("click", function(){
  equipWeapon(hero);
});

function equipWeapon(person){
  if(person.inventory.length == 0) {
    ;
  } else {
    person.weapon = person.inventory[0];
  }
};

