let burgers = food;

//skriver ut hamb namn i console
/*
for (var i=0 ; i< burgers.length ; i++){
        console.log(burgers[i].name);
} */



/*Comment out your event listener in JavaScript for now and implement the same functionality in Vue.

var myButton = document.getElementById('myButtonID');
myButton.addEventListener("click", addWord);
function addWord() {
  document.getElementById("text2").innerHTML = document.getElementById("text2").innerHTML + " button clicked ";
}*/


//inte klar, returnerar en array men ska fyllas i de andra fälten också, returnerar endast för "klart""

function getCosutmerInfo() { // eller byt till addWord  kallar på funktionen i j
  var fullname = document.getElementById("fullname").value;
  var email = document.getElementById("mail").value;
  var pay = document.getElementById("payment").value;
  var arr = [fullname, email, pay]; // str, hou, remove
  var radios = document.getElementsByName("gd");

  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      var gender = radios[i].id;
      arr.push(gender);
    }
  }
  return arr;
}



function getBurgerInfo() {
  var chx = document.getElementsByName("burgers");
  var burgerArray = [];
  var infoBurgerArray = [];
  for (var j = 0, lengths = chx.length; j < lengths; j++) {
    if (chx[j].checked) {
      var burger = chx[j].value;
      burgerArray.push(burger);
    }
  }
  for (var i = 0, length = burgerArray.length; i < length; i++) {
    infoBurgerArray.push(burgers[burgerArray[i]].name);
  }
  return infoBurgerArray;
}




/*
  var arr = [fullname, email, str, hou, pay, gender];

  for(var i=0, lengths=chx.length; i <lengths; i++){
    if (chx[i].checked){
      var burger =chx[i].value;
      var arr = [fullname, email, str, hou, pay, gender, burger];
    }

  }

  console.log(arr);
  return arr;
}

}*/


/*VERSION 2 event listener

function addWord() {
  document.getElementById("text").innerHTML = document.getElementById("text").innerHTML + " button clicked ";
}


var m = document.getElementById("Male").value;
var f = document.getElementById("Female").value;
var nb = document.getElementById("Non-Binary").value;
var un = document.getElementById("Undisclosed").value;

var radios =document.getElementsByName("gd")
for (var i=0, length=radios.length; i< length;i++){
  if(radios[i].checked){
    var gender = document.radios[i].value;

  }
}
*/







/*
var myButton = document.getElementbyId('myButtonID');

// In JavaScript you can either trigger an event directly on an object
myButton.onclick = functionName;

// Or using the event handler function
myButton.addEventListener("click", functionName);

// You can pass a defined function as above (no parentheses), or provide an anonymous function
myButton.onclick = function () {
    ...
}
*/

//ger lista men inte i grid
/*
function MenuItem(nm, en, all) {
  this.name = nm;
  this.energy = en;
  this.allergies = all;
  if (all != '') {
    var allergies = true;
  } else {
    var allergies = false;
  }

  this.burgername = function() {
    return this.name + ' ' + this.energy + ' ' + this.allergies;
  };
}

*/




/* Fungerar med endast JS att lägga in en lista */
/*
function MenuItem(nm, en, all){
  this.name=nm;
  this.energy=en;
  this.allergies=all;
  if(all != ''){
    var allergies= true;
  }
  else{
  var allergies=false;}

  this.burger= function(){
    return this.name + ' ' + this.energy;
  };
}

let burgers=[new MenuItem('Invisible burger','40 kcal',''),
new MenuItem('Invisibhej','-750 kcal','gluten'),
new MenuItem('hoppasan','-750 kcal',''),
new MenuItem('Invisible burger','-750 kcal','lactose')];

var myElement = document.getElementById("myJS");
for (var i=0 ; i< burgers.length ; i++){
  var listItem = document.createElement("li");
        var listValue = document.createTextNode(burgers[i].burger());
        listItem.appendChild(listValue);
        myElement.appendChild(listItem);
        console.log(burgers[i].allergies);
}*/




/* **************************************************** */

/* fick till det med vad som visas och inte

HTML:
<div id="header">
  <h1> Välj en burgare</h1>
</div>


<div id="myJS">
   {{ arbitraryVariableName }}
</div>


JS :

function MenuItem(nm, en, all){
  this.name=nm;
  this.energy=en;
  this.allergies=all;
  if(all != ''){
    var allergies= true;
  }
  else{
  var allergies=false;}

  this.burger= function(){
    return this.name + ' ' + this.energy;
  };
}

let burgers=[new MenuItem('Invisible burger','40 kcal',''),
new MenuItem('Invisibhej','-750 kcal','gluten'),
new MenuItem('hoppasan','-750 kcal',''),
new MenuItem('Invisible burger','-750 kcal','lactose')];

var myElement = document.getElementById("myJS");
for (var i=0 ; i< burgers.length ; i++){
  var listItem = document.createElement("li");
        var listValue = document.createTextNode(burgers[i].burger());
        listItem.appendChild(listValue);
        myElement.appendChild(listItem);
        console.log(burgers[i].allergies);
}


HTML MED VUE:
<div id="myID">
  <div v-for="burger in burgers">
    {{burger.burgername()}}

  </div>

</div>

JavaScipt + VUE:
function MenuItem(nm, en, all){
  this.name=nm;
  this.energy=en;
  this.allergies=all;
  if(all != ''){
    var allergies= true;
  }
  else{
  var allergies=false;}

  this.burgername= function(){
    return this.name + ' ' + this.energy + ' ' + this.allergies;
  };
}

new Vue({
el:"#myID",
data:{
burgers: [new MenuItem('Invisible burger','40 kcal',''),
new MenuItem('Invisibhej','-750 kcal','gluten'),
new MenuItem('hoppasan','-750 kcal',''),
new MenuItem('Invisible burger','-750 kcal','lactose')],
},
})







*/
