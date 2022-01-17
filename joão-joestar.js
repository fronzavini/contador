let num = 0;
const p = document.getElementById("p");
p.innerText = num;

function more() {
  num = num + 1;
  p.innerText = num;
}
function less() {
  num--
  p.innerText = num;
}
function zerar() {
  num = 0
  p.innerText = num
}