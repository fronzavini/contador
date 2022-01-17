let num = 0;
function render() {
const p = document.getElementById("p");
p.innerText = num;
}

function more() {
  num = num + 1;
  render()
}
function less() {
  num--
  render()
}
function zerar() {
  num = 0
  render()
}
render()