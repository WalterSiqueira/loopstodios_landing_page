const form = document.getElementById('form');
const ThemeSelector = document.getElementById('sliderInput');
const btnBlock = document.getElementById('buttons_block');
const nodeList = document.querySelectorAll(".btn");
const head = document.getElementById('header');
const calcBody = document.getElementById('calc_body');
const output = document.getElementById('output');
const slider = document.getElementById('sliderInput');
const body = document.getElementById('body');
const reset = document.getElementById('btnreset');
const del = document.getElementById('btndelete');
const equal = document.getElementById('btnequal');
const btnBlockB = document.getElementById('buttons_block');
const OutPutBar = document.getElementById('outputBar');
form.addEventListener('click', function(event) {
  event.preventDefault();
})

slider.addEventListener('change', function() {
    console.log(slider.value)
    if (slider.value === '3') {
        theme3()
    } else if (slider.value === '2') {
        theme2()
    } else if (slider.value === '1') {
        theme1()
    }
});

console.log(slider.value);
//theme 3 colors
var backgroundMainThree = "#160628";
var backgroundSecondaryThree = "#1D0934";
var fontColorThree = "#FFE53D";
var btnBgThree = "#341C4F";
var toggleBackgroundThree = "#00E0D1";
var cyanBgThreeS = "#6CF9F2";
var delResetBgThree = "#58077D";
var delResetBgThreeS = "#BC15F4";

//theme 2 colors
var backgroundMainSecond = "#E6E6E6";
var backgroundSecondarySecond = "#EDEDED";
var btnBg = "#E5E4E1";
var btnBlockBg = "#D1CCCC";
var fontColorSecond = "#35352C";
var toggleBackgroundSecond = "#CA5502";
var delResetBgSecond = "#377F86";
var delResetBgSecondS = "#1B5F65";

//theme 1 colors
var backgroundMainOne = "#3A4764";
var backgroundSecondaryOne = "#232C43";
var fontColorOne = "#FFFFFF";
var toggleBackgroundOne = "#D03F2F";
var btnBgOne = "#EAE3DC";
var btnBlockBgOne = "#182034";
var delResetBgOne = "#637097";


function theme3() {
  body.style.backgroundColor = backgroundMainThree;
  output.style.backgroundColor = backgroundSecondaryThree;
  output.style.color = fontColorThree;
  btnBlockB.style.backgroundColor = backgroundSecondaryThree;
  calcBody.style.backgroundColor = backgroundMainThree;
  head.style.color = fontColorThree;  
  for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].style.backgroundColor = btnBgThree;
    nodeList[i].style.color = fontColorThree;
  }
  reset.style.backgroundColor = delResetBgThree;
  reset.style.color = fontColorOne;
  del.style.backgroundColor = delResetBgThree;
  del.style.color = fontColorOne;
  equal.style.backgroundColor = toggleBackgroundThree;
}


function theme2() {
  body.style.backgroundColor = backgroundMainSecond;
  output.style.backgroundColor = backgroundSecondarySecond;
  output.style.color = fontColorSecond;
  btnBlockB.style.backgroundColor = btnBlockBg;
  calcBody.style.backgroundColor = backgroundMainSecond;
  head.style.color = fontColorSecond;  
  for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].style.backgroundColor = btnBg;
    nodeList[i].style.color = fontColorSecond;
  }
  reset.style.backgroundColor = delResetBgSecond;
  reset.style.color = fontColorOne;
  del.style.backgroundColor = delResetBgSecond;
  del.style.color = fontColorOne;
  equal.style.backgroundColor = toggleBackgroundSecond;
  equal.style.color = fontColorOne
}


function theme1() {
  body.style.backgroundColor = backgroundMainOne; 
  output.style.backgroundColor = backgroundSecondaryOne;
  OutPutBar.style.color = fontColorOne 
  btnBlockB.style.backgroundColor = btnBlockBgOne;
  calcBody.style.backgroundColor = backgroundMainOne;
  head.style.color = fontColorOne; 
  for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].style.backgroundColor = btnBgOne;
    nodeList[i].style.color = backgroundMainOne;
  }
  reset.style.backgroundColor = delResetBgOne;
  reset.style.color = fontColorOne;
  del.style.backgroundColor = delResetBgOne;
  del.style.color = fontColorOne;
  equal.style.backgroundColor = toggleBackgroundOne;
  equal.style.color = fontColorOne;
}








