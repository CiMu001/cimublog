import confetti from 'canvas-confetti';


let duration = 300 * 1000;        // 持续时间
let animationEnd = Date.now() + duration;       // 结束时间
let skew = 1;

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

(function frame() {
  let timeLeft = animationEnd - Date.now();
  skew = Math.max(0.8, skew - 0.001);

  confetti({
    particleCount: 1,     // 颗粒数量
    startVelocity: 0,     // 不知道
    origin: {     // 发射地点
      x: Math.random(),
      y: (Math.random() * skew) - 0.2
    },
    colors: ['#7952b3'],      // 纸屑颜色
    shapes: ['circle'],       //  纸屑形状
    gravity: randomInRange(0.4, 0.6),       // 下降速度
    scalar: randomInRange(0.4, 1),          // 纸屑大小比例因子
    drift: randomInRange(-0.4, 0.4),        // 纸屑飘到多远
  });

  if (timeLeft > 0) {
    setTimeout(() => {
      requestAnimationFrame(frame);
    }, 100);
  }
}());

// 作者：盏灯
// 链接：https://juejin.cn/post/7182091491899080741