var form = document.getElementById('form');
var ThemeSelector = document.getElementById('sliderInput');
var btnBlock = document.getElementById('buttons_block');
const nodeList = document.querySelectorAll(".btn");
var head = document.getElementById('header');
var calcBody = document.getElementById('calc_body');
var output = document.getElementById('output');

var background = "#58077D";
var background2 = "#341C4F";
var fontColor = "#FFE53D";
function theme3() {
  output.style.backgroundColor = background2;
  calcBody.style.backgroundColor = background;
  head.style.color = fontColor;
  head.style.backgroundColor = background2;
  for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].style.backgroundColor = background2;
    nodeList[i].style.color = fontColor;
  }
}














