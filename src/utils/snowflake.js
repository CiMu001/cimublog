import confetti from 'canvas-confetti';

let duration = 300 * 1000;
let animationEnd = Date.now() + duration;
let skew = 1;

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

(function frame() {
  let timeLeft = animationEnd - Date.now();
  skew = Math.max(0.8, skew - 0.001);

  confetti({
    particleCount: 1,
    startVelocity: 0,
    origin: {
      x: Math.random(),
      y: (Math.random() * skew) - 0.2
    },
    colors: ['#7952b3'],
    shapes: ['circle'],
    gravity: randomInRange(0.4, 0.6),
    scalar: randomInRange(0.4, 1),
    drift: randomInRange(-0.4, 0.4)
  });

  if (timeLeft > 0) {
    requestAnimationFrame(frame);
  }
}());

// 作者：盏灯
// 链接：https://juejin.cn/post/7182091491899080741