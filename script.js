window.onload = function() {
  
  function canvasSecond() {
var canvas = document.getElementById('myCanvas2');
var context = canvas.getContext('2d');
var a = 250;
var b = 50;
var cw = 450;
var ch = 300;

context.fillStyle = "red";
context.fillRect(cw/2-a/2,ch/6+ch/12,a,b);

context.fillStyle = "green";
context.fillRect(cw/2-a/2,ch/6*3+ch/12,a,b);
  }
  
canvasSecond();
  
  function canvasThird() {
var canvas = document.getElementById('myCanvas3');
var context = canvas.getContext('2d');

context.beginPath();
context.strokeStyle = "red";
context.moveTo(0,0);
context.lineTo(450,300);
context.moveTo(450,0);
context.lineTo(0,300);
context.stroke();
  }
  
  canvasThird();

  function canvasFourth() {
var canvas = document.getElementById('myCanvas4');
var context = canvas.getContext('2d');

var cw = canvas.width;
var ch = canvas.height;

context.fillStyle = "orange";

context.beginPath();
context.strokeStyle = "grey";
context.moveTo(cw/2,ch/4);
context.lineTo(cw/4,ch/4*3);
context.lineTo(cw/4*3,ch/4*3);
context.lineTo(cw/2,ch/4);
context.stroke();

context.fill();
  }
  
  canvasFourth();

function canvasFifth() {
var canvas = document.getElementById('myCanvas5');
var context = canvas.getContext('2d');

var cw = canvas.width;
var ch = canvas.height;

context.beginPath();
context.strokeStyle = "green";
context.moveTo(cw/2,0);
context.lineTo(cw/2,ch);
context.stroke();

context.beginPath();
context.strokeStyle = "red";
context.moveTo(0,ch/2);
context.lineTo(cw,ch/2);
context.stroke();
}
  
  canvasFifth();
  
function canvasSixth() {
/* DRY négyzetek */
var canvas = document.getElementById('myCanvas6');
var ctx = canvas.getContext('2d');

var rw = 50;
var rh = 50;
var x = 10;
var y = 10;

for (x=10, y=10; y<240; x=x+25, y=y+25) {
ctx.fillStyle = "rgba(255,200,0,.4)";
ctx.fillRect(x,y,rw,rh);
}
}
  
  canvasSixth();

/*
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var rw = 50;
var rh = 50;
var x = 10;
var y = 10;

for (x=10, y=10; y<240; x=x+60, y=y+57) {
  ctx.fillStyle = "orange";
ctx.fillRect(x,y,rw,rh);
}
  for (x=10, y=67; y<240; x=x+60, y=y+57) {
ctx.fillStyle = "orange";
ctx.fillRect(x,y,rw,rh);
}

  for (x=10, y=124; y<240; x=x+60, y=y+57) {
ctx.fillStyle = "orange";
ctx.fillRect(x,y,rw,rh);
}

  for (x=10, y=181; y<240; x=x+60, y=y+57) {
ctx.fillStyle = "orange";
ctx.fillRect(x,y,rw,rh);
}

  for (x=10, y=238; y<240; x=x+60, y=y+57) {
ctx.fillStyle = "orange";
ctx.fillRect(x,y,rw,rh);
}
*/
  
function canvasSeventh() {
/* sorok */
var canvas = document.getElementById('myCanvas7');
var ctx = canvas.getContext('2d');
var rw = 40;
var rh = 40;
var x = 10;
var y = 10;

for(row=0;row<6;row++) {
  for(col=0;col < row+1; col++)  {
    ctx.fillStyle = "rgb(199,79,120)";
    ctx.fillRect(x + col * 50 ,y + row * 47,rw,rh);
}
}
}
  
  canvasSeventh();

function canvasEight() {
/*színskála (nem tökéletes!!!)*/
var canvas = document.getElementById('myCanvas8');
var ctx = canvas.getContext('2d');
var rw = 25;
var rh = 25;
var x = 10;
var y = 10;

function myFunction() {
  for (x=canvas.width/2-87.5, y=65, red=199, blue=120; y<240; y=y+30, red=red-7, blue=blue+15) {
  ctx.fillStyle = "rgb(" + red + ", 79, " + blue + ")";
  ctx.fillRect(x,y,rw,rh);
};
  for (x=canvas.width/2-57.5, y=65, red=192, blue=120; y<240; y=y+30, red=red-7, blue=blue+15) {
  ctx.fillStyle = "rgb(" + red + ", 79, " + blue + ")";
  ctx.fillRect(x,y,rw,rh);
}
  for (x=canvas.width/2-27.5, y=65, red=185, blue=120; y<240; y=y+30, red=red-7, blue=blue+15) {
  ctx.fillStyle = "rgb(" + red + ", 79, " + blue + ")";
  ctx.fillRect(x,y,rw,rh);
}
    for (x=canvas.width/2 + 2.5, y=65, red=178, blue=120; y<240; y=y+30, red=red-7, blue=blue+15) {
  ctx.fillStyle = "rgb(" + red + ", 79, " + blue + ")";
  ctx.fillRect(x,y,rw,rh);
}
    for (x=canvas.width/2+32.5, y=65, red=171, blue=120; y<240; y=y+30, red=red-7, blue=blue+15) {
  ctx.fillStyle = "rgb(" + red + ", 79, " + blue + ")";
  ctx.fillRect(x,y,rw,rh);
}
    for (x=canvas.width/2+62.5, y=65, red=164, blue=120; y<240; y=y+30, red=red-7, blue=blue+15) {
  ctx.fillStyle = "rgb(" + red + ", 79, " + blue + ")";
  ctx.fillRect(x,y,rw,rh);
}
}

myFunction();
}
  
  canvasEight();

function canvasNineth() {
/* háromszög alagút */
var canvas = document.getElementById('myCanvas9');
var ctx = canvas.getContext('2d');

var x = 100;
var y = 25;
var a = 50;
var b = 150

for (i=1, x=100, y=25, a=50, b=150; i<30; x+=5, y+=5, a+=5, b+=5, i++) {
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(a, b);
ctx.lineTo(b, b);
ctx.lineTo(x, y);
ctx.stroke();
}
}
  
  canvasNineth();
  
function canvasTenth() {
/*szivárvány négyzetek*/
var canvas = document.getElementById('myCanvas10');
var ctx = canvas.getContext('2d');

for (i=1, x=0, y=0, rw=450, rh=300, hue=360; i<=17; i++, x+=10, y+=10, rw-=20, rh-=20, hue=hue-360/17) {
  ctx.fillStyle = "hsla(" + hue + ", 50%, 45%, 1)";
  ctx.fillRect(x,y,rw,rh);
}
}
  
  canvasTenth();
  
  function canvasEleventh() {
/* fizbuzz négyzetek */
var canvas = document.getElementById('myCanvas11');
var ctx = canvas.getContext('2d');

var rw = 30;
var rh = 30;

for (i=1, x=10, y=10; i<=15; i++, x=x+15, y=y+15) {
ctx.fillStyle = "rgba(0,0,0,.4)";
  if (i%3 == 0 && i%5 == 0) {
    ctx.fillStyle = "rgba(0,255,0,.4)";
  } else if (i%5 == 0) {
    ctx.fillStyle = "rgba(255,255,0,.4)";
  } else if (i%3 == 0) {
    ctx.fillStyle = "rgba(0,0,255,.4)";
  }
ctx.fillRect(x,y,rw,rh);
}
  }
  
  canvasEleventh();
   
   function canvasTwelveth() {
/* páratlan piramis */
var canvas = document.getElementById('myCanvas12');
var ctx = canvas.getContext('2d');

var x = canvas.width/2;
var y = 0;
var a = 0;
var b = canvas.height/2;

for (i=1, x=canvas.width/2, y=0, a=0, b=canvas.height/2, z=canvas.height; i<=450; i+=3, a+=3) { 
  if (a%2 == 0) {
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.moveTo(x, y);
ctx.lineTo(a, b);
ctx.stroke();
} else {
  ctx.beginPath();
ctx.strokeStyle = "red";
ctx.moveTo(x, z);
ctx.lineTo(a, b);
ctx.stroke();
}
}
  }
  
  canvasTwelveth();
  
  function canvasFourteenth() {
/* triangle() */
var canvas = document.getElementById('myCanvas14');
var context = canvas.getContext('2d');

var cw = canvas.width;
var ch = canvas.height;

function triangle(x,y,a) {
context.fillStyle = "rgba(255,155,0,.4)";
context.beginPath();
context.strokeStyle = "grey";
context.moveTo(x, y);
context.lineTo(x-a/2, y+a);
context.lineTo(x+a/2, y+a);
context.lineTo(x, y);
context.stroke();

context.fill();
}

triangle(230, 160, 50);
triangle(270,100,50);
triangle(200,50,150);
  }
  
  canvasFourteenth();
  
  
function canvasFifteenth() {
/* filledStars() */
var canvas = document.getElementById('myCanvas15');
var context = canvas.getContext('2d');

var cw = canvas.width;
var ch = canvas.height;

function filledStar(a,y,x) {
  context.fillStyle = "purple";
context.beginPath();
context.strokeStyle = "grey";
context.moveTo(x+a/2, y-a/2);
context.lineTo(x-a/9+a/2, y+a/5-a/2);
context.lineTo(x-a/3+a/2, y+a/5-a/2);
  context.lineTo(x-a/5+a/2, y+a/3-a/2);
  context.lineTo(x-a/4+a/2, y+a*0.6-a/2);
  context.lineTo(x+a/2, y+a*0.4-a/2);
  context.lineTo(x+a/4+a/2, y+a*0.6-a/2);
  context.lineTo(x+a/5+a/2, y+a/3-a/2);
  context.lineTo(x+a/3+a/2, y+a/5-a/2);
  context.lineTo(x+a/9+a/2, y+a/5-a/2);
context.stroke();

context.fill();
}

filledStar(40,50,75);
filledStar(130,120,100);
filledStar(250,220,150);
}
  
  canvasFifteenth();
  
function canvasSixteenth() {
/* lineToCenter */
var canvas = document.getElementById('myCanvas16');
var context = canvas.getContext('2d');
var cw = canvas.width;
var ch = canvas.height;


var randomX = function(max, min) {
  return Math.floor(Math.random()*(max-min+1)+min);
};
var randomY = function(max, min) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

function lineToCenter(x, y, color) {
  context.beginPath();
  context.strokeStyle = color;
  context.moveTo(x, y);
  context.lineTo(cw/2, ch/2);
  context.stroke();
}

for (i=1; i<=1000; i++) {
  if (i%2 == 0) {
lineToCenter(randomX(450, 0), randomY(300, 0), "grey");
} else {
  lineToCenter(randomX(450, 0), randomY(300, 0), "black");
}
}
}
  
  canvasSixteenth();
  
}

  
 