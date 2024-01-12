import confetti from 'canvas-confetti';

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

let goon = false;
let skew = 1;

export function snowFrame() {
  skew = Math.max(0.8, skew - 0.001);
  
  confetti({
    particleCount: 1,     // 颗粒数量
    startVelocity: 0,     // 不知道
    origin: {     // 发射地点
      x: Math.random(),
      y: (Math.random() * skew) - 0.2
    },
    colors: ['#fff0f5'],      // 纸屑颜色
    shapes: ['circle'],       //  纸屑形状
    gravity: randomInRange(0.4, 0.6),       // 下降速度
    scalar: randomInRange(0.4, 1),          // 纸屑大小比例因子
    drift: randomInRange(-0.4, 0.4),        // 纸屑飘到多远
  });

  if (goon) {
    requestAnimationFrame(snowFrame);
  }
};

export function switchSnow() {
  goon = !goon;
  snowFrame();
}

// 链接：https://www.kirilv.com/canvas-confetti/