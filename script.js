let canvas = document.querySelector("#canvas1");
let canvas2 = document.querySelector("#canvas2");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas2.width = window.innerWidth;
canvas2.height = window.innerHeight;

//context
let c = canvas.getContext("2d");
let c2 = canvas2.getContext("2d");
let mouse = {
  x: undefined,
  y: undefined,
};

window.addEventListener("mousemove", function (event) {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

let maxRadius = 40;
let minRadius = 2;

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}
function randomInFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

c.fillStyle = "white";
c.strokeStyle = "white";

c2.lineWidth = 2;

class Ball {
  constructor(effect) {
    this.effect = effect;
    this.radius = Math.random() * 10 + 5;
    this.buffer = this.radius * 2;
    this.x = randomInFromRange(this.buffer, this.effect.width - this.buffer);
    this.y = randomInFromRange(this.buffer, this.effect.height - this.buffer);
    // this.x = this.effect.width * 0.5;
    // this.y = this.effect.height * 0.5;
    // this.randomXConner = [
    //   this.buffer + this.radius,
    //   this.effect.width - this.buffer - this.radius,
    // ];
    // this.randomYConner = [
    //   this.buffer + this.radius,
    //   this.effect.height - this.buffer - this.radius,
    // ];
    // this.x = this.randomXConner[Math.floor(Math.random() * 2)];
    // this.y = this.randomYConner[Math.floor(Math.random() * 2)];
    this.speedX = (Math.random() * 2 - 0.5) / 9;
    this.speedY = (Math.random() * 2 - 0.5) / 9;
    this.angle = 0;
    this.va = Math.random() * 0.1 - 0.05;
    this.range = Math.random() * 20 + 15;
    this.pushX = 0;
    this.pushY = 0;
  }
  draw(context) {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    context.fillStyle = "rgba(24,33,43,0.5)";
    context.shadowColor = "white";
    context.shadowBlur = 20;
    context.fill();
  }

  update() {
    if (this.x < this.buffer || this.x > this.effect.width - this.buffer) {
      this.speedX = -this.speedX;
    }
    if (this.y < this.buffer || this.y > this.effect.height - this.buffer) {
      this.speedY = -this.speedY;
    }
    this.angle += this.va;
    this.x += this.speedX * Math.sin(this.angle) * this.range;
    this.y += this.speedY * Math.cos(this.angle) * this.range;
  }

  reset() {
    this.x = randomInFromRange(this.buffer, this.effect.width - this.buffer);
    this.y = randomInFromRange(this.buffer, this.effect.height - this.buffer);
  }
}

class MetalBallsEffect {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.metalBallsArray = [];
    this.mouse = {
      x: 0,
      y: 0,
      pressed: false,
      radius: 200,
    };

    this.init(225);
  }
  init(numberOfBalls) {
    for (let i = 0; i < numberOfBalls; i++) {
      this.metalBallsArray.push(new Ball(this));
    }
  }

  update() {
    this.metalBallsArray.forEach((metalBall) => {
      metalBall.update();
    });
  }
  draw(context, context2) {
    this.createLine(context2);
    this.metalBallsArray.forEach((metalBall) => {
      metalBall.draw(context);
    });
  }

  createLine(context2) {
    const maxDistance = 150;

    for (let i = 0; i < this.metalBallsArray.length; i++) {
      for (let j = i; j < this.metalBallsArray.length; j++) {
        let currentParA = this.metalBallsArray[i];
        let currentParB = this.metalBallsArray[j];
        let difX = Math.abs(currentParA.x - currentParB.x);
        let difY = Math.abs(currentParA.y - currentParB.y); // Corrected line

        const distance = Math.hypot(difX, difY);
        if (distance < maxDistance) {
          context2.save();
          context2.beginPath();
          context2.globalAlpha = Math.abs(0.8 - distance / maxDistance);
          context2.moveTo(currentParA.x, currentParA.y);
          context2.lineTo(currentParB.x, currentParB.y);
          context2.strokeStyle = "#9facf3";
          context2.stroke();
          context2.closePath();
          context2.restore();
        }
      }
    }
  }

  reset(newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
    this.metalBallsArray.forEach((metalBall) => metalBall.reset());
  }
}

const effect = new MetalBallsEffect(canvas.width, canvas.height);

function animate() {
  c.clearRect(0, 0, innerWidth, innerHeight);
  c2.clearRect(0, 0, innerWidth, innerHeight);
  requestAnimationFrame(animate);
  effect.update();
  effect.draw(c, c2);
}
animate();
window.addEventListener("resize", function () {
  canvas.width = this.window.innerWidth;
  canvas.height = this.window.innerHeight;
  canvas2.width = this.window.innerWidth;
  canvas2.height = this.window.innerHeight;
  effect.reset(canvas.width, canvas.height);
});
