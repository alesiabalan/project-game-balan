'use strict';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;

let spasePressed = false;
let angle = 0;
let hue = 20;
let frame = 0;
let score = 0;
let gamespeed = 2;

const background = new Image();
background.src = 'img/background.png';
const BG = {
  x1: 0,
  x2: canvas.width,
  y: 0,
  width: canvas.width,
  height: canvas.height
}
function handleBackground() {
  if (BG.x1 <= -BG.width + gamespeed) BG.x1 = BG.width;
  else BG.x1 -= gamespeed;
  if (BG.x2 <= -BG.width + gamespeed) BG.x2 = BG.width;
  else BG.x2 -= gamespeed;
  ctx.drawImage(background, BG.x1, BG.y, BG.width, BG.height);
  ctx.drawImage(background, BG.x2, BG.y, BG.width, BG.height);

}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //ctx.fillRect(10, 10, 50, 50);
  handleBackground();
  handleObstacles();
  handleParticles();
  miniPlane.update();
  miniPlane.draw();
  ctx.fillStyle = 'red';
  ctx.font = '90px Georgia';
  ctx.strokeText(score, 450, 70);
  ctx.fillText(score, 450, 70);
  handleCollisions();
  if (handleCollisions()) return;
  requestAnimationFrame(animate);
  angle += 1.12;
  hue++;
  if (hue >= 60) hue = 20;
  frame++;
}

animate();

window.addEventListener('keydown', function (e) {
  if (e.code === 'Space') spasePressed = true;
});
window.addEventListener('keyup', function (e) {
  if (e.code === 'Space') spasePressed = false;
});

window.addEventListener('mousedown', function () {
  spasePressed = true;
});
window.addEventListener('mouseup', function () {
  spasePressed = false;
});

window.addEventListener('touchstart', function () {
  spasePressed = true;
});
window.addEventListener('touchend', function () {
  spasePressed = false;
});

const bang = new Image();
bang.src = 'img/bang.png';
function handleCollisions() {
  for (let i = 0; i < barriersArray.length; i++) {
    if (miniPlane.x < barriersArray[i].x + barriersArray[i].width
      && miniPlane.x + miniPlane.width > barriersArray[i].x
      && ((miniPlane.y < 0 + barriersArray[i].top
        && miniPlane.y + miniPlane.height > 0)
        || (miniPlane.y > canvas.height - barriersArray[i].bottom
          && miniPlane.y + miniPlane.height < canvas.height))) {
      ctx.drawImage(bang, miniPlane.x, miniPlane.y, 50, 50);
      ctx.font = '25px Georgia';
      ctx.fillStyle = 'black';
      ctx.fillText('Game Over, your score is ' + score, 160, canvas.height / 2 - 10);
      return true;
    }
  }
}