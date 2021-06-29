/*const readMoreBtn = document.querySelector('.read-more-btn');
const text = document.querySelector('.text');

readMoreBtn.addEventListener('click',(e)=>{
    text.classList.toogle('show-more');
    if(readMoreBtn.innerText === 'Read More'){
        readMoreBtn.innerText ='Read Less';
    }
    else{
        readMoreBtn.innerText = 'Read More';
    }
})*/
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