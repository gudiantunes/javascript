let p = document.getElementById('demo');
let testBtn = document.getElementById('test-btn');
let warning = document.getElementById('warning');
let printBtn = document.getElementById('print-page');

p.innerHTML = "Hello Word!";
testBtn.onclick = function() {changeElementBG(p)};
warning.onclick = function() {window.alert('Warning message')};
printBtn.onclick = function() {window.print()};

function changeElementBG(ele) {
  console.log(ele.style.backgroundColor)
  if (ele.style.backgroundColor == '') {
    ele.style.backgroundColor = "red";
  } 
  else if (ele.style.backgroundColor == 'red') {
    ele.style.backgroundColor = 'blue';
    ele.style.color = 'white';
  } 
  else {
    ele.style.backgroundColor = '';
    ele.style.color = 'black';
  }
}