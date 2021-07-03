function readmore() {
    var dots = document.getElementById("more");
    var moreText = document.getElementById("moretext");
    var readmorebtn = document.getElementById("readmorebtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      readmorebtn.innerHTML =("Read More &nbsp;" + '<i class="fa fa-arrow-circle-o-down" aria-hidden="true"></i>');
      readmorebtn.style. backgroundColor = '#2196f3';
      moreText.style.display = "none";
  
    } 
    else {
      dots.style.display = "none";
      readmorebtn.innerHTML = ("Read less &nbsp;"+ '<i class="fa fa-arrow-circle-o-up" aria-hidden="true"></i>');
      readmorebtn.style. backgroundColor = 'Red';
      moreText.style.display = "inline";
      moreText.className="fadeIn";
    }
  }