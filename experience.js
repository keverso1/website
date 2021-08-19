//OBJECT ARRAY FOR ALL MY REFERENCES 
var references = [
  {name: "Brittany Jonaitis", email: "brittanyj@gmail.com", business: "VacationRoost"},
  {name: "Jeff Gauvin", email: "jgauvin@opulentvacations.com", business: "Opulent Vacations"},
  {name: "Ashley Berman", email: "ashb@gmail.com", business: "Mountain Reservations"}
];

//select items

const name = document.getElementById("name");
const email = document.getElementById("email");
const business = document.getElementById("business");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item

let currentItem = 0;

// load intial item
window.addEventListener("DOMContentLoaded", function(){
showPerson(currentItem);
});

// show person based on item

function showPerson(person) {
const item = references[person];
name.textContent = item.name;
email.textContent = item.email;
business.textContent = item.business;
}

// show next person

nextBtn.addEventListener("click", function(){
currentItem++;
if(currentItem < 0) {
  currentItem = references.length - 1;
}
showPerson(currentItem);
});

// show previous person

prevBtn.addEventListener("click", function(){
currentItem--;
if(currentItem > references.length - 1) {
  currentItem = 0;
}
showPerson(currentItem);
});

// show random person

randomBtn.addEventListener("click", function() {
currentItem = Math.floor(Math.random() * references.length);
showPerson(currentItem);
});

//Hide & Show Experience
$("#showhide").hide();
$(document).ready(function(){
$("#hide").click(function(){
  $("#showhide").hide();
});
$("#show").click(function(){
  $("#showhide").show();
});
});
















/* var refNames = ["John Doe",
"Jane Doe",
"Jules Doe"
];

var refComp = ["Company #1",
"Company #2",
"Company #3"
];
var refEmail = ["johndoe@email.com",
"janedoe@email.com",
"julesdoe@email.com"
];

var i = 0;
var txt = "";
txt += "<table style=\"width:100%\">";
txt += "<tr>";
txt += "<th>Name</th>";
txt += "<th>Company</th>";
txt += "<th>Email</th>";
txt += "</tr>";

while (i < refNames.length) {
txt += "<tr> <td>" + refNames[i] + "</td><td>" +
    refComp[i] + "</td> <td>" +
    refEmail[i] + "</td> </tr>";
i++;

}
txt += "</table>";
document.getElementById("references").innerHTML += txt;




$("document").ready(function () {
$("button#references").click(function () {
    let value = $("#input1").val();
    $("#demo").html("<b>" + value + "</b>");
  });
}*/ 

