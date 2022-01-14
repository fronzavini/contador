let num = 0;
const p = document.getElementById("p");
p.innerText = num;

function more() {
  num = num + 1;
  p.innerText = num;
}
function less() {
  num = num - 1;
  p.innerText = num;
}
