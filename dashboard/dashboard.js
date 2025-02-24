cart.addEventListener("click", () => {
  window.location.href = "cart.html";
});

account.addEventListener("click", function () {
  if (accountdropdown.style.display === "none") {
    accountdropdown.style.display = "block";
  } else {
    accountdropdown.style.display = "none";
  }
});
const imgcarosel = document.querySelectorAll("#imgcarosel");
const secondpart = document.querySelector("#secondpart");
let currentindex = 0;

function imgcaroselfunc() {
  const offset = -currentindex * 100;
  imgcarosel.forEach((img) => {
    img.style.transform = `translateX(${offset}%)`;
  });
}
setInterval(() => {
  currentindex = (currentindex + 1) % imgcarosel.length;
  imgcaroselfunc();
}, 2000);
imgcaroselfunc();
signinbtn.addEventListener("click", () => {
  window.location.href = "../signup/signup.html";
});
