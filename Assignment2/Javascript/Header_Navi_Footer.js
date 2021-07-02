//when hambugerger icon clicked, add another class called hamburger
//when clicked again, removes hamburger class.
//repeat the process
function clickHamburger() {
    var mainNav = document.getElementById("mainNavJS");
    var miscNav = document.getElementById("miscNavJS");
    if (mainNav.className === "mainNav") {
        mainNav.className += " hamburger";
        miscNav.className += " hamburger";
    } else {
        mainNav.className = "mainNav";
        miscNav.className = "miscNav";
    }
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    // Get the navbar
    var navbar = document.getElementById("navbarJS");
    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;
    //Only have Sticky when reach the navbar position
    if (window.pageYOffset >= sticky) {
        navbar.className= "navbar sticky"
        document.getElementById("demo").innerHTML ="fuck yes";
    } else {
        navbar.className= "navbar"
        document.getElementById("demo").innerHTML = "fuck no";
    }
}