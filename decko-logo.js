var s = Snap("#decko_logo");
var cards = new Array(5);
var rotationDegrees = ['r355', 'r345', 'r332', 'r312', 'r302']
var colors = ['#ebebeb', 'black'];
var cp = [
  [0, 0, 202, 164, 12.5, 12.5],
  [6, 4, 190, 158, 12.5, 12.5],
  [18, 20, 168, 124, 12.5, 12.5],
  [33, 28, 140, 106, 12.5, 12.5],
  [48, 35, 110, 92, 12.5, 12.5]
];
var shadow = s.filter(Snap.filter.shadow(1, 0, 11, "#00000", 0.1));

// function createCards() {
//   cards[0] = s.rect(cp[0]).attr({
//     fill: colors[0]
//   }).transform(rotationDegrees[0]);
//
//   cards[1] = s.rect(cp[1]).attr({
//     fill: colors[1]
//   }).transform(rotationDegrees[1]);
//
//   cards[2] = s.rect(cp[2]).attr({
//     fill: colors[0]
//   }).transform(rotationDegrees[2]);
//
//   cards[3] = s.rect(cp[3]).attr({
//     fill: colors[1]
//   }).transform(rotationDegrees[3]);
//
//   cards[4] = s.rect(cp[4]).attr({
//     fill: colors[0]
//   }).transform(rotationDegrees[4]);
// }

function createCards() {
  for (var i = 0; i < cards.length; i++) {
    cards[i] = s.rect(cp[i][0], cp[i][1], cp[i][2], cp[i][3], cp[i][4], cp[i][5]).attr({
      fill: (i % 2 == 0) ? colors[0] : colors[1],
      // filter: shadow
    }).transform(rotationDegrees[i]);
  }
}

function rotate(angle) {
  for (var i = 0; i < cards.length; i++) {
    cards[i].animate({
      transform: angle ? angle : rotationDegrees[i]
    }, 1000, mina.bounce)
  }
}

function changeSize() {
  for (var i = 0; i < cards.length; i++) {
    cards[i].animate({
      width: 202,
      height: 164,
      x: 0,
      y: 0
    }, 1000, mina.bounce)
  }
}

function changeToOriginal(){
  for (var i = 0; i < cards.length; i++) {
    cards[i].animate({
      width: cp[i][2],
      height: cp[i][3],
      x: cp[i][0],
      y: cp[i][1]
    }, 1000, mina.bounce)
  }
}

function animationSequence() {
  rotate()
  rotate("r0")
}

function animate() {
  setTimeout(function() { rotate("r0"); }, 1000);
  setTimeout(function() { changeSize(); }, 2200);
  setTimeout(function() { rotate(); }, 3400);
  setTimeout(function() { changeToOriginal(); }, 4500);
}

createCards();
animate()
