const button = document.getElementById("button");
const lose = document.getElementById("lose");

let losed = false;

let czas = 0;
function addTime() {
  if (losed == false) {
    czas += 1;
    console.log("add");
  }
}
function beka() {
  lose.innerHTML = `<p>Przegrałeś trzymałeś przez: ${czas}s</p>`;
}
button.addEventListener("mouseup", () => {
  losed = true;
  lose.style.visibility = "visible";
  lose.innerHTML = `<p>Przegrałeś trzymałeś przez: ${czas}s</p>`;
  setInterval("beka()", 100);
});
button.addEventListener("mousedown", () => {
  setInterval("addTime()", 1000);
  losed = false;
});

if (losed == true) {
  lose.style.visibility = "visible";
  losed = true;
} else {
  lose.style.visibility = "hidden";
  losed = false;
}
