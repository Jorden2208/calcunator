var tot = 20;
var ball;
var styleBall;
var stylePig;
var marginLeftBall = 1;
var marginTopBall = 1;
var gravity = 0.6;
var push = 3;

function mountain(){
  var random = Math.floor(Math.random() * (14 - 1)) + 1;

  var height = 14 + random;
  var margin = 11.1 - random;
 document.getElementById("mountain").style.marginTop = margin + "vw";
 document.getElementById("mountain").style.height = height + "vw";
 document.getElementById("cannon").style.marginTop = margin + "vw";
 document.getElementById("ball").style.marginTop = margin + "vw";
}

function pig(){
  document.getElementById("ball").style.display = "block";
  setInterval(leap, 0.1);
}﻿


function leap(){
  if(marginLeftBall <= document.getElementById("pig").clientWidth - 60) {

  gravity = gravity-(push/1000);
  ball = document.getElementById("ball");
  styleBall = ball.currentStyle || window.getComputedStyle(ball);
  marginLeftBall = styleBall.marginLeft;
  marginTopBall = styleBall.marginTop;
  marginLeftBall = marginLeftBall.replace("px",'');
  marginTopBall = marginTopBall.replace("px",'');
  marginLeftBall++;
  marginTopBall = marginTopBall - gravity;

    document.getElementById("ball").style.marginLeft = marginLeftBall + "px";
    document.getElementById("ball").style.marginTop = marginTopBall + "px";

}

}
