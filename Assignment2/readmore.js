
function readmore() {
    var dots = document.getElementById("more");
    var moreText = document.getElementById("moretext");
    var readmorebtn = document.getElementById("readmorebtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      readmorebtn.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      readmorebtn.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }