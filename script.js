document.getElementById("ShowMore").addEventListener("click", function () {
  console.log("Clicked");

  let divs = document.getElementsByClassName("hide");

  console.log(divs);

  for (let i = 0; i < divs.length; i++) {
    divs[i].style.display = "block";
  }

  document.getElementById("ShowMore").style.display = "none";
});

const menuToggle = document.querySelector('#toggleAside');
menuToggle.addEventListener('click',function(){
  document.querySelector('.side-menu').classList.toggle('open');
// document.body.classList.toggle('pushleft');
 document.querySelector('.bodyOverlay').classList.toggle('show');

})

document.querySelector('.bodyOverlay').addEventListener('click',function(){
  document.querySelector('.side-menu').classList.toggle('open');
  document.querySelector('.bodyOverlay').classList.toggle('show');

});
