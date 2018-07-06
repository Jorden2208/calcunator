var tot = 20;
var ball;
var styleBall;
var marginLeftBall = 1;
var marginTopBall = 1;
var gravity = 0.6;
var push = 3;

function pig(){
  document.getElementById("ball").style.display = "block";
  setInterval(leap, 0.3);
}﻿


function leap(){
  if(marginLeftBall <= document.getElementById("pig").clientWidth - 60) {


  gravity = gravity-0.003;
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
