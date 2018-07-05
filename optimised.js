"use strict";

var deckoLogo = function() {
  // opts = typeof opts !== 'undefined' ? opts : {};
  // this.logoCards = new Array(4);
  // var rotationDegrees = ['r355', 'r345', 'r332', 'r318', 'r202']
  this.s = Snap("#decko-animated-logo");
  this.rotationDegrees = ['r345', 'r332', 'r318', 'r302'];
  this.colors = ['black', '#ebebeb'];
  this.css_id = "js-svg-card-";
  this.cp = [ // x, y, width, height, roundcornerX, roundcornerY
    // [0, 0, 202, 164, 12.5, 12.5],
    [6, 4, 190, 158, 12.5, 12.5],
    [18, 20, 168, 124, 12.5, 12.5],
    [33, 28, 140, 106, 12.5, 12.5],
    [44, 36, 113, 91, 12.5, 12.5]
  ];
  this.shadow = this.s.filter(Snap.filter.shadow(1, 0, 11, "#00000", 0.1));
  this.duration = 1000;
  this.easing = mina.bounce;
}

var _deckoLogo = deckoLogo.prototype;
var logoCards = new Array(4);

_deckoLogo.createlogoCards = function() {
  var cp = this.cp,
    colors = this.colors,
    css_id = this.css_id,
    rotationDegrees = this.rotationDegrees,
    s = this.s;

  for (var i = 0; i < logoCards.length; i++) {
    logoCards[i] = s.rect(cp[i][0], cp[i][1], cp[i][2], cp[i][3], cp[i][4], cp[i][5]).attr({
      fill: (i % 2 === 0) ? colors[0] : colors[1],
      id: css_id + "i"
      // filter: shadow
    }).transform(rotationDegrees[i]);
  }
}

_deckoLogo.createlogoCards2 = function() {
  var cp = this.cp,
    colors = this.colors,
    css_id = this.css_id,
    rotationDegrees = this.rotationDegrees,
    s = this.s;

  for (var i = 0; i < logoCards.length; i++) {
    logoCards[i] = s.rect(0, 0, 202, 164, cp[i][4], cp[i][5]).attr({
      fill: (i % 2 === 0) ? colors[0] : colors[1],
      id: css_id + "i"
      // filter: shadow
    }).transform(rotationDegrees[i]);
  }
}

_deckoLogo.rotate = function(angle) {
  var duration = this.duration,
    easing = this.easing,
    rotationDegrees = this.rotationDegrees;

  for (var i = 0; i < logoCards.length; i++) {
    logoCards[i].animate({
      transform: angle ? angle : rotationDegrees[i]
    }, duration, easing);
  }
}

_deckoLogo.changeSize = function() {
  var cp = this.cp,
    duration = this.duration,
    easing = this.easing;

  for (var i = 0; i < logoCards.length; i++) {
    logoCards[i].animate({
      width: cp[0][2],
      height: cp[0][3],
      x: 0,
      y: 0
    }, duration, easing);
  }
}

_deckoLogo.changeToOriginal = function() {
  var cp = this.cp,
    duration = this.duration,
    easing = this.easing;

  for (var i = 0; i < logoCards.length; i++) {
    logoCards[i].animate({
      width: cp[i][2],
      height: cp[i][3],
      x: cp[i][0],
      y: cp[i][1]
    }, duration, easing);
  }
}

_deckoLogo.animateSequence = function() {
  // setTimeout(function() { changeSize(); }, 1000);
  // setTimeout(function() { rotate("r0"); }, 2200);
  // setTimeout(function() { rotate(); }, 3400);
  var $this = this;
  setTimeout(function() {
    $this.changeToOriginal();
  }, 1000);
}
