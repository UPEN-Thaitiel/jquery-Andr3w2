// Create a Javascript code to change the font color to red
// document.querySelector("h1").style.color = "red"

// Create a jQuery code to change the font color to red
// $("h1").css("color","red");

// Add .big-title class using Javascript.
// document.querySelector("h1").classList.add("big-title")

// Add .big-title class using jQuery.
$("h1").addClass("big-title");

// Change h1 text to "Bye" on Javascript
// document.querySelector("h1").innerHTML = "Bye"

// Change h1 text to "Bye" on jQuery
$("h1").text("Bye");

// Change attribute href link to ibm.com
$("a").attr("href", "https://ibm.com/mx-es");

// Add a click event listener in the h1 header to change its color to green using jQuery
$("h1").click(function () {
    $("h1").css("color", "green");
});

// Add a click event listener for each of the buttons to change H1 color to red in JavaScript
$("button").click(function (){
    $("h1").css("color", "red");
});

// Add a click event listener for each of the buttons to change only the clicked button color to red in jQuery
$("button").click(function (){
    $(this).css("color", "red");
});

// Add a mouseover using "on(mouseover,function())" to change h1 element to purple using jQuery
$("h1").on("mouseover", function () {
    $("h1").css("color", "purple");
});

// Create a toggle animation using jQuery for the header clicking buttons.
$("button").click(function(){
    $("h1").toggle(1000);
});

// Create a Fade Toggle animation using jQuery for the header clicking buttons.
// $("button").click(function(){
//    $("h1").fadeToggle(1000);
// });

// Create a slide Toggle animation using jQuery for the header clicking buttons.
// $("button").click(function(){
//    $("h1").slideToggle(1000);
// });

// Create a custom animation using jQuery to change opacity to 0.5
$("button").click(function(){
    $("h1").animate({opacity: 0.5}, 500);
});

/* Now solve the challenge: change the text on each button to a different color and
change the color to its pre-defined value */

const lista = ["red", "green", "blue", "pink", "yellow", "black"];

$("button").each(function(index){
    $(this).text(lista[index]);
});

$("button").click(function(){
    $("h1").css("color", $(this).text());
});
