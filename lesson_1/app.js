const emailInput = document.querySelector(".emailInput");
const emailCheck = document.querySelector(".emailCheck");
const emailResult = document.querySelector(".emailResult");

console.log(emailInput, emailCheck, emailResult);

const regExp =
  /^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/i;

emailCheck.addEventListener("click", () => {
  if (regExp.test(emailCheck.value)) {
    emailResult.innerText = "ok";
    emailResult.style.color = "green";
  } else {
    emailResult.innerText = "not ok";
    emailResult.style.color = "red";
  }
});
// ------------------------------------

const block = document.querySelector(".block");
const min_block = document.querySelector(".min_block");
let i = 0;
function move() {
  i += 10;
  if (i < 410) {
    min_block.style.left = `${i}px`;
    setTimeout(move, 100);
  }
}
move();
