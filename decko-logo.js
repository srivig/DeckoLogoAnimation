"use strict";
var s = Snap("#decko-animated-logo");
var cards = new Array(4);
// var rotationDegrees = ['r355', 'r345', 'r332', 'r318', 'r202']
var rotationDegrees =['r345', 'r332', 'r318', 'r302'];
var colors = [ 'black', '#ebebeb'];
var css_id = "js-svg-card-";
var cp = [
  // [0, 0, 202, 164, 12.5, 12.5],
  [6, 4, 190, 158, 12.5, 12.5],
  [18, 20, 168, 124, 12.5, 12.5],
  [33, 28, 140, 106, 12.5, 12.5],
  [44, 36, 113, 91, 12.5, 12.5]
];
var shadow = s.filter(Snap.filter.shadow(1, 0, 11, "#00000", 0.1));
var duration = 1000;
var easing = mina.bounce;

function createCards() {
  for (var i = 0; i < cards.length; i++) {
    cards[i] = s.rect(cp[i][0], cp[i][1], cp[i][2], cp[i][3], cp[i][4], cp[i][5]).attr({
      fill: (i % 2 === 0) ? colors[0] : colors[1],
      id: css_id+"i"
      // filter: shadow
    }).transform(rotationDegrees[i]);
  }
}

function createCards2() {
  for (var i = 0; i < cards.length; i++) {
    cards[i] = s.rect(0, 0, 202, 164, cp[i][4], cp[i][5]).attr({
      fill: (i % 2 === 0) ? colors[0] : colors[1],
      id: css_id+"i"
      // filter: shadow
    }).transform(rotationDegrees[i]);
  }
}

function rotate(angle) {
  for (var i = 0; i < cards.length; i++) {
    cards[i].animate({
      transform: angle ? angle : rotationDegrees[i]
    }, duration, easing);
  }
}

function changeSize() {
  for (var i = 0; i < cards.length; i++) {
    cards[i].animate({
      width:  cp[0][2],
      height: cp[0][3],
      x: 0,
      y: 0
    }, duration, easing);
  }
}

function changeToOriginal(){
  for (var i = 0; i < cards.length; i++) {
    cards[i].animate({
      width: cp[i][2],
      height: cp[i][3],
      x: cp[i][0],
      y: cp[i][1]
    }, duration, easing);
  }
}

function animateSequence() {
  // setTimeout(function() { changeSize(); }, 1000);
  // setTimeout(function() { rotate("r0"); }, 2200);
  // setTimeout(function() { rotate(); }, 3400);
  setTimeout(function() { changeToOriginal(); }, 1000);
}
