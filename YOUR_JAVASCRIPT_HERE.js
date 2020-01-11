// Write your JS here
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
  pickUpItem(hero, weapons.dagger)
  ;
});

function pickUpItem(person, weapon){
  let numOfWeapon = person.inventory.push(weapon);
  document.getElementById("weaponType").innerHTML = `Number of weapons: ${numOfWeapon}`
  ;
};

//Reassigns the 'weapon' property of person to the first element of the person.inventory array
//If the inventory array of person is empty, the function should do nothing
//When the bag is clicked, it will equip the hero with the first item in the inventory array

const bagClicked = document.getElementById("bag").addEventListener("click", function(){
  equipWeapon(hero)
  ;
});

function equipWeapon(person){
  if(person.inventory.length == 0) {
    ;
  } else {
    person.weapon = person.inventory[0];
  }
};

//Allow people to change the name of their hero using window.prompt
function enterName(){
  hero.name = prompt("Please enter your hero name!");
  if (hero.name != null) {
    document.getElementById("name").innerHTML = `Hero Name: ${hero.name}`
  } else {
    return true;
  };
  displayStats()
};

//Write displayStats function that writes your hero's name, health, weapontype, weapon damage to the page. Call it at the end of your script
function displayStats(){
  document.getElementById("healthLevel").innerHTML = `Health Level: ${hero.health}`
};