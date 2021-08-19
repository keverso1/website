
/* WEEK 1: 
 - Create a window popup that asks the user what their name is, and then after the user enters their name, it will display another popup window that says, “Hi (Name they Entered)! Thank you for reviewing my resume site.”
    -- Step 1: Create a function that pops up a window with an input field that asks the users name.
    -- Step 2: Create a function that pops up a window that displays the name of the user with the thank you message above.
    -- Step 3: Create the scripts that will integrate the functions into your resume site.
*/


// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


















function myFunction() {

    var txt; 
    var person = prompt("Please enter your name:", "Jane Doe");
    if (person === null || person == "") {
        txt = "User cancelled the prompt";
    } else {
        txt = "Hi " + person + "! Thank you for viewing my resume site!";
    }

    document.getElementById("txt").innerHTML = txt;  

} 

function newMessage(txt){
    alert(txt);

}


/* WEEK 2:   
Use a to add to the popup window created in the previous class and display the appropriate time of day.
    Step 1: Create a function that gets the time of day from the user’s computer and tests to see what time of day it is
    Step 2: Create a conditional statement that will change your second alert window that thanks them for visiting your resume site as follows:
        - If it is between the hours of 5:00 am and before noon change the displayed content to say “Good Morning, (Name they Entered)! Thank you for reviewing my resume site.”
        - If it is between the hours of noon and before 6:00 pm change the displayed content to say “Good Afternoon, (Name they Entered)! Thank you for reviewing my resume site.”
        - If it is after 6:00 pm change the displayed content to say “Good Evening, (Name they Entered)! Thank you for reviewing my resume site.”
*/ 

var today = new Date(); 
var hour = today.getHours(); 

var greeting = prompt("Please enter your name: ");

if(hour >= 5 && hour < 12){
    alert("Good Afternoon, " + greeting + "! Thank you for reviewing my resume site.");
} else if(hour >= 12 && hour < 18){
    alert("Good Afternoon, " + greeting + "! Thank you for reviewing my resume site.");
} else if(hour >= 18){
    alert("Good Evening, " + greeting + "! Thank you for reviewing my resume site.");
} else 
    alert("error")    




/* WEEK 4-A: 
Use JQuery methods to hide and show details on their Job Experience Section of their site when the user clicks on it.
    - Step 1: Make sure you are linking to a valid JQuery library
    - Step 2: Create the code that will hide and/or show certain HTML elements based on a click event
    - Step 3: Integrate the code into your site
    - Step 4: Debug and test the code
*/


/* WEEK 4-B: 
Debug any errors found in your code and add in form validation scripts to your forms via JavaScript.
    - Step 1: Run tests on all scripts to find and debug errors
        -- Hint: so often it is a ; that is missing somewhere
    - Step 2: Create validation scripts for form inputs
    - Step 3: Test validation script
*/







// *** IN CLASS PROJECT 1 



  
  //for (let i = 0; i < arr1.length; i+1) {
  //  arrSum += arr1;
  //}

  /*

  var arr1 = [1,2,3,4,5];
  var arr2 = [1,2,3,4,5];
  
  var sum = 0;
  for (var i = 0; i < arr1.length; i++){
      sum += arr1[i] + arr2[i];
  }
  
 document.getElementById("arraySum").innerHTML = sum;
  
 */
  

// ***IN CLASS PROJECT 1 

   //Use a FOR loop and print all even numbers up to and including N. Don't include 0.   

  // let arr3 = [0,1,2,3,4,5,6,7,8,9]



 //for (var i = 1; i <= )

 //function.
   

   //use mod operator? %2 ?? 




/* OTHER STUFF: 


var date = new Date();
var birthYear = 2010; 
var currentYear = date.getFullYear();
var age = currentYear - birthYear;
var day; 


switch (date.getDay()){
    case 0:
    day = "Sunday"; 
    break;
    
    case 1:
    day = "Monday"; 
    break; 

    case 2: 
    day = "Tuesday";
    break;

    case 3:
    day = "Wednesday";
    break;

    case 4: 
    day = "Thursday";
    break;

    case 5:
    day = "Friday";
    break; 

    case 6:
    day = "Saturday";
    break;

}


document.getElementById("date").innerHTML = "Today is" + day


if(age >= 21){
    alert("You can drink!");

} else if (age >=21 && age <= 30){
    alert("You can drink, and get a free discount!)");
} else if (age > 30){
    alert("You are on the 3rd floor");
} else if (age > 40){
    alert("You are getting old");
} else if (age > 60){
    alert("You doing okay?");
} else if (age > 99){
    alert("Free drinks on the bar");
} 

 
function newMessage(txt){
    alert(txt);

}

var date = new Date();
var birthYear = 2010; 
var currentYear = date.getFullYear();
var age = currentYear - birthYear; 

if(age >= 21){
    alert(“Good Morning, " + ________ + "! Thank you for reviewing my resume site.");

} else {
    alert("Go home!");
}



    var flavors = ["Vanilla", "Chocolate", "Strawberry"];
    var favFlavors = "My favorite ice cream flavors are: <ol>";

    for (let i = 0; i < flavors.length; i++) {
        favFlavors += "<li>" + flavors[i] + "</li>"; 
    }

    favFlavors += "</ol>";

    document.getElementById("results2").innerHTML = favFlavors;
