function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
    
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Let's Read ";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Hope you Enjoyed";
    moreText.style.display = "inline";
  }
}