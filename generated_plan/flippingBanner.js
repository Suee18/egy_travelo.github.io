// Setting flaps    <link rel="stylesheet" href="index.css">

const speed = .2; // second
const text = "Find your next trip".toUpperCase().split(""); // A-Z, 0-9, space
const container = document.querySelector(".container");

const char = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
        'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
        'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ' '];

const button = document.querySelector(".container");
let html = "";
for (let i = 0 ; i < text.length ; i++) {
  html += '<div class=splitflap>';
  html += '<div class="top"></div>';
  html += '<div class="bottom"></div>';
  html += '<div class="nextHalf"></div>';
  html += '<div class="nextFull"></div>';
  html += '</div>';
}
button.innerHTML = html;

const tops = document.querySelectorAll(".top");
const bottoms = document.querySelectorAll(".bottom");
const nextFulls = document.querySelectorAll(".nextFull");
const nextHalfs = document.querySelectorAll(".nextHalf");

for (let i = 0 ; i < tops.length ; i++) {
  bottoms[i].style.animationDuration = speed + "s";
  nextHalfs[i].style.animationDuration = speed + "s";
}

const strCount = new Array(text.length);
strCount.fill(0);
const flag = [];
const randomChar = [];

for (let i = 0 ; i < text.length ; i++) {
  const tmp = [];
  const l = Math.floor(Math.random() * 8) + 2;
  for (let j = 0 ; j < l ; j++) {
    tmp.push(char[Math.floor(Math.random() * char.length)])
  }
  randomChar.push(tmp);
}

function flipIt(x) {
  tops[x].innerHTML = strCount[x] === randomChar[x].length ? text[x] : randomChar[x][strCount[x]];
  bottoms[x].innerHTML = strCount[x] === randomChar[x].length ? text[x] : randomChar[x][strCount[x]];
  nextFulls[x].innerHTML = strCount[x] === randomChar[x].length ? text[x] : randomChar[x][strCount[x]];
  nextHalfs[x].innerHTML = strCount[x] === randomChar[x].length ? text[x] : randomChar[x][strCount[x]];

  bottoms[x].classList.remove("flip1");
  bottoms[x].offsetWidth = bottoms[x].offsetWidth;
  bottoms[x].classList.add("flip1");
  nextHalfs[x].classList.remove("flip2");
  nextHalfs[x].offsetWidth = nextHalfs[x].offsetWidth;
  nextHalfs[x].classList.add("flip2");
  
  if (strCount[x] === randomChar[x].length) {
    strCount[x] = 0;
  } else {
    strCount[x]++;
  }
}

function dontFlipIt(x) {
  bottoms[x].classList.remove("flip2");
  bottoms[x].style.backgroundColor = "#ff7289";
  nextHalfs[x].style.backgroundColor = "#ff7289";
}

setInterval(function() {
  for (let x = 0; x < text.length; x++) {
    if (nextFulls[x].innerHTML === text[x]) {
      dontFlipIt(x);
    } else {
      flipIt(x);
    }
  }

}, speed * 1000);


