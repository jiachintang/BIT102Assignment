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