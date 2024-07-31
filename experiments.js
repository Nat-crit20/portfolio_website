// c.fillStyle = "rgba(255,0,100,0.5)";
// c.fillRect(100, 100, 100, 100);

// c.fillStyle = "rgba(255,100,100,0.5)";
// c.fillRect(400, 100, 100, 100);
// c.fillStyle = "rgba(255,200,150,0.5)";
// c.fillRect(300, 300, 100, 100);

// //line
// let x = 0;
// let amp = 100;
// let vert = 250;
// let hor = (2 * Math.PI) / 200;
// let y = amp * Math.sin(hor * x) + vert;
// c.beginPath();
// c.moveTo(x, y)
// for (let i = 1; i < window.innerWidth; i++) {
//   c.lineTo(x, y);
//   x = i;
//   y = amp * Math.sin(hor * x) + vert;
// }
// c.strokeStyle = "#f3f00f";
// c.stroke();

// function sinLine(x, amp, vert) {
//   this.x = 0;
//   this.amp = 100;
//   this.vert = 250;
//   this.hor = (2 * Math.PI) / 200;
//   this.y = this.amp * Math.sin(this.hor * this.x) + this.vert;
// }
/*
function calcY(x, offset, amp) {
  let vert = 250;
  let hor = (2 * Math.PI) / 200;
  let y = amp * Math.sin(hor * x + offset) + vert;
  return y;
}
class Cord {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class LineSine {
  constructor(x, dx, offset, amp, color) {
    this.x = x;
    this.y = calcY(x, offset, amp);
    this.color = color;
    this.offset = offset;
    this.amp = amp;
    this.dx = dx;
    this.cords = [];
  }

  draw() {
    c.beginPath();
    if (this.cords.length > 0) {
      c.moveTo(this.cords[0].x, this.cords[0].y);
    }
    //Grab and loop through the cords array create line
    for (let i = 0; i < this.cords.length; i++) {
      if (
        this.cords.length > window.innerWidth ||
        this.cords[this.cords.length - 1].x > window.innerWidth
      ) {
        this.cords[i].x -= 1;
      }
      c.lineTo(this.cords[i].x, this.cords[i].y);
    }
    c.strokeStyle = this.color;
    c.stroke();
  }

  update() {
    this.draw();
    this.x += this.dx;
    this.y = calcY(this.x, this.offset, this.amp);
    const cord = new Cord(this.x, this.y);
    this.cords.push(cord);
  }
}

let lineArray = [];
*/
let colorArray = [
  "#042940",
  "#005C53",
  "#9FC131",
  "#DBF227",
  "#D6D58E",
  "#042940",
  "#005C53",
  "#9FC131",
  "#DBF227",
  "#D6D58E",
];

// function init() {
//   lineArray = [];
//   for (let i = 1; i <= colorArray.length; i++) {
//     let amp = 25 * i;
//     let dx = 3; //Speed
//     lineArray.push(new LineSine(i, dx, x / 4, amp, colorArray[i]));
//   }
// }

// lineArray.push(new LineSine(Math.PI, dx, 2, "black"));
// lineArray.push(new LineSine(Math.PI / 2, dx, 3, "yellow"));
// lineArray.push(new LineSine(2 * Math.PI, dx, 4, "red"));

// function animate() {
//   requestAnimationFrame(animate);
//   c.clearRect(0, 0, innerWidth, innerHeight);
//   for (let i = 0; i < lineArray.length; i++) {
//     lineArray[i].update();
//   }
// }
// init();
// console.log(lineArray);
// animate();
//Arc/ Circle
// for (let i = 0; i < 5; i++) {
//   c.beginPath();
//   let x = Math.floor(Math.random() * window.innerWidth);
//   let y = Math.floor(Math.random() * window.innerHeight);
//   c.arc(x, y, 30, 0, Math.PI * 2, false);
//   let color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
//     Math.random() * 255
//   )}, ${Math.floor(Math.random() * 255)})`;
//   console.log(color);
//   c.strokeStyle = color;
//   c.stroke();
// }

// function Circle(x, y, dx, dy, radius) {
//   this.x = x;
//   this.y = y;
//   this.dx = dx;
//   this.dy = dy;
//   this.radius = radius;
//   this.minRadius = radius;
//   this.color = randomColor(colorArray);
//   this.draw = function () {
//     c.beginPath();

//     c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

//     c.fillStyle = this.color;
//     c.fill();
//   };

//   this.update = function () {
//     if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
//       this.dx = -this.dx;
//     }
//     if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
//       this.dy = -this.dy;
//     }
//     this.x += this.dx;
//     this.y += this.dy;

//     //Interactivity
//     if (
//       mouse.x - this.x < 50 &&
//       mouse.x - this.x > -50 &&
//       mouse.y - this.y < 50 &&
//       mouse.y - this.y > -50
//     ) {
//       if (this.radius < maxRadius) {
//         this.radius += 1;
//       }
//     } else if (this.radius > this.minRadius) {
//       this.radius -= 1;
//     }

//     this.draw();
//   };
// }

// let circleArray = [];
// function init() {
//   circleArray = [];
//   for (let i = 0; i <= 800; i++) {
//     let radius = Math.floor(Math.random() * 5) + 1;
//     let x = Math.random() * (window.innerWidth - radius * 2) + radius;
//     let y = Math.random() * (window.innerHeight - radius * 2) + radius;
//     let dx = (Math.random() - 0.5) * 4; //Speed
//     let dy = (Math.random() - 0.5) * 4;
//     circleArray.push(new Circle(x, y, dx, dy, radius));
//   }
// }

// function animate() {
//   requestAnimationFrame(animate);
//   c.clearRect(0, 0, innerWidth, innerHeight);
//   for (let i = 0; i < circleArray.length; i++) {
//     circleArray[i].update();
//   }
// }

// init();
// animate();
///////////////////////////////////////////////////////////
//Implementation of gravity
// addEventListener("click", function () {
//   init();
// });
const gravity = 1;
const fiction = 0.59;

// function Ball(x, y, dx, dy, radius) {
//   this.x = x;
//   this.y = y;
//   this.dx = dx;
//   this.dy = dy;
//   this.radius = radius;
//   this.minRadius = radius;
//   this.color = randomColor(colorArray);
//   this.draw = function () {
//     c.beginPath();

//     c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

//     c.fillStyle = this.color;
//     c.fill();
//   };

//   this.update = function () {
//     if (this.y + this.radius + this.dy > canvas.height) {
//       //By multiply the fiction we are lowering the dy velocity
//       this.dy = -this.dy * fiction;
//     } else {
//       //acceleration
//       this.dy += gravity;
//     }
//     if (
//       this.x + this.radius + this.dx > canvas.width ||
//       this.x - this.radius <= 0
//     ) {
//       this.dx = -this.dx;
//     }
//     this.x += this.dx;
//     this.y += this.dy;
//     this.draw();
//   };
// }

// class Ball {
//   constructor(x, y, dx, dy, radius, canvas) {
//     this.x = x;
//     this.y = y;
//     this.dx = dx;
//     this.dy = dy;
//     this.radius = radius;
//     this.color = randomColor(colorArray);
//     this.canvas = canvas;
//     this.jump = 2;
//   }

//   draw() {
//     c.beginPath();
//     c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//     c.fillStyle = this.color;
//     c.fill();
//   }

//   update() {
//     if (
//       this.y + this.radius + this.dy > window.innerHeight ||
//       this.y - this.radius + this.dy < 0
//     ) {
//       this.dy = -this.dy * fiction;
//     } else {
//       this.dy += gravity;
//     }
//     if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
//       this.dx = -this.dx;
//     }

//     this.x += this.dx;
//     this.y += this.dy;
//     this.draw();
//   }

//   jumpUp() {
//     this.dy = -20;
//   }
// }

// addEventListener("keydown", function (e) {
//   if (e.key === " ") {
//     ballArray[0].jumpUp();
//   }
// });

// let ballArray = [];
// let radius = 40;
// function init() {
//   ballArray = [];
//   for (let i = 0; i < 1; i++) {
//     ballArray.push(
//       new Ball(
//         randomInFromRange(0 + radius, canvas.width - radius),
//         randomInFromRange(0, canvas.height - radius),
//         randomInFromRange(-2, 2),
//         randomInFromRange(-2, 2),
//         radius
//       )
//     );
//   }
// }

// function animate() {
//   requestAnimationFrame(animate);
//   c.clearRect(0, 0, innerWidth, innerHeight);
//   for (let i = 0; i < ballArray.length; i++) {
//     ballArray[i].update();
//   }
// }

// init();

// animate();

///////////////////////////////////
//Collision
/*
  class Circle {
    constructor(x, y, radius) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = randomColor(colorArray);
    }
  
    draw() {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.fillStyle = this.color;
      c.fill();
    }
  
    update() {
      this.draw();
    }
  }
  
  function getDistance(x1, y1, x2, y2) {
    let xDistance = x2 - x1;
    let yDistance = y2 - y1;
    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
  }
  
  let circle1;
  let circle2;
  function init() {
    circle1 = new Circle(300, 300, 100);
    circle2 = new Circle(undefined, undefined, 30);
  }
  init();
  
  function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    circle1.update();
    let totalRad = circle1.radius + circle2.radius;
    circle2.update();
  
    circle2.x = mouse.x;
    circle2.y = mouse.y;
    let circleDistance = getDistance(circle1.x, circle1.y, circle2.x, circle2.y);
    if (circleDistance < totalRad) {
      circle1.color = "red";
    } else {
      circle1.color = "black";
    }
  }
  
  animate();
  */

///////////////////////
//Collision part 2
/*
  function getDistance(x1, y1, x2, y2) {
    const xDist = x2 - x1;
    const yDist = y2 - y1;
  
    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
  }
  
  function rotate(velocity, angle) {
    const rotatedVelocity = {
      x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
      y: velocity.x * Math.sin(angle) - velocity.y * Math.cos(angle),
    };
    return rotatedVelocity;
  }
  
  // Function to resolve collision between two particles
  function resolveCollision(particle, otherParticle) {
    const xVelocityDiff = particle.velocity.x - otherParticle.velocity.x;
    const yVelocityDiff = particle.velocity.y - otherParticle.velocity.y;
  
    const xDist = otherParticle.x - particle.x;
    const yDist = otherParticle.y - particle.y;
  
    // Prevent accidental overlap of particles by performing the dot product on the difference
    if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
      const angle = -Math.atan2(yDist, xDist);
      const m1 = particle.mass;
      const m2 = otherParticle.mass;
  
      // Velocity before equation
      const u1 = rotate(particle.velocity, angle);
      const u2 = rotate(otherParticle.velocity, angle);
  
      // Velocity after 1D collision equation
      const v1 = { x: (u1.x * (m1 - m2) + 2 * m2 * u2.x) / (m1 + m2), y: u1.y };
      const v2 = { x: (u2.x * (m2 - m1) + 2 * m1 * u1.x) / (m1 + m2), y: u2.y };
  
      // Rotate back to original position
      const finalV1 = rotate(v1, -angle);
      const finalV2 = rotate(v2, -angle);
  
      // Update velocities
      particle.velocity.x = finalV1.x;
      particle.velocity.y = finalV1.y;
      otherParticle.velocity.x = finalV2.x;
      otherParticle.velocity.y = finalV2.y;
  
      // Handle overlap to prevent particles from sticking
      const overlap =
        particle.radius +
        otherParticle.radius -
        getDistance(particle.x, particle.y, otherParticle.x, otherParticle.y);
      const overlapAngle = Math.atan2(
        otherParticle.y - particle.y,
        otherParticle.x - particle.x
      );
  
      if (overlap > 0) {
        const moveX = overlap * Math.cos(overlapAngle);
        const moveY = overlap * Math.sin(overlapAngle);
  
        particle.x -= moveX;
        particle.y -= moveY;
        otherParticle.x += moveX;
        otherParticle.y += moveY;
      }
    }
  }
  
  class Particle {
    constructor(x, y, radius) {
      this.x = x;
      this.y = y;
      this.velocity = {
        x: Math.random() - 0.5,
        y: Math.random() - 0.5,
      };
      this.radius = radius;
      this.color = randomColor(colorArray);
      this.mass = 1;
      this.opacity = 0;
    }
  
    draw() {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.save();
      c.globalAlpha = this.opacity;
      c.fillStyle = this.color;
      c.fill();
  
      c.restore();
      c.strokeStyle = this.color;
      c.stroke();
      c.closePath();
    }
  
    update(particles) {
      this.draw();
      for (let i = 0; i < particles.length; i++) {
        if (this === particles[i]) continue;
  
        const distance = getDistance(
          this.x,
          this.y,
          particles[i].x,
          particles[i].y
        );
  
        if (distance - this.radius * 2 <= 0) {
          resolveCollision(this, particles[i]);
        }
      }
  
      if (this.x + this.radius >= canvas.height || this.x - this.radius <= 0) {
        this.velocity.x = -this.velocity.x;
      }
      if (
        this.y + this.radius + this.velocity.y >= canvas.height ||
        this.y - this.radius - this.velocity.y <= 0
      ) {
        this.velocity.y = -this.velocity.y * fiction;
      } else {
        this.y += 2;
      }
  
      //mouse collision detection
      if (
        getDistance(mouse.x, mouse.y, this.x, this.y) < 80 &&
        this.opacity < 0.2
      ) {
        this.opacity += 0.02;
      } else if (this.opacity > 0) {
        this.opacity -= 0.02;
        this.opacity = Math.max(0, this.opacity);
      }
      this.x += this.velocity.x;
      this.y += this.velocity.y;
    }
  }
  
  let particles;
  function init() {
    particles = [];
    const radius = 20;
    for (let i = 0; i < 40; i++) {
      let x = randomInFromRange(radius, canvas.width - radius);
      let y = randomInFromRange(radius, canvas.height - radius);
  
      if (i !== 0) {
        for (let j = 0; j < particles.length; j++) {
          if (
            getDistance(x, y, particles[j].x, particles[j].y) - radius * 2 <=
            0
          ) {
            x = randomInFromRange(radius, canvas.width - radius);
            y = randomInFromRange(radius, canvas.height - radius);
            j = -1;
          }
        }
      }
      particles.push(new Particle(x, y, radius));
    }
  }
  
  function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    particles.forEach((particle) => {
      particle.update(particles);
    });
  }
  init();
  animate();
  */
/////////////////////\
//Circular Motion
/*
  const circularColors = ["#F20574", "#04D9D9", "#ABD904", "#F2B705", "#F25C05"];
  
  function Particle(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = randomColor(circularColors);
    this.radians = Math.random() * Math.PI * 2;
    this.velocity = 0.05;
    this.distanceFromCenter = randomInFromRange(50, 500);
    this.lastMouse = { x: x, y: y };
  
    this.draw = (lastPoint) => {
      c.beginPath();
      c.strokeStyle = this.color;
      c.lineWidth = this.radius;
      c.moveTo(lastPoint.x, lastPoint.y);
      c.lineTo(this.x, this.y);
      c.stroke();
      c.closePath();
    };
  
    this.update = () => {
      const lastPoint = { x: this.x, y: this.y };
  
      this.radians += this.velocity;
  
      this.lastMouse.x += (mouse.x - this.lastMouse.x) * 0.5;
      this.lastMouse.y += (mouse.y - this.lastMouse.y) * 0.5;
  
      this.x = x + Math.cos(this.radians) * this.distanceFromCenter;
      this.y = y + Math.sin(this.radians) * this.distanceFromCenter;
      this.draw(lastPoint);
    };
  }
  let particles;
  function init() {
    particles = [];
    for (let i = 0; i < 100; i++) {
      const radius = Math.random() * 2 + 1;
      particles.push(new Particle(canvas.width / 2, canvas.height / 2, radius));
    }
  }
  
  function animate() {
    requestAnimationFrame(animate);
    c.fillStyle = "rgba(255,255,255, 0.05)";
    c.fillRect(0, 0, innerWidth, innerHeight);
  
    particles.forEach((particle) => {
      particle.update();
    });
  }
  init();
  animate();
  */
/*
  function Particle(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.radians = Math.random() * Math.PI * 2;
    this.velocity = 0.01;
  
    this.draw = () => {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      c.fillStyle = "blue";
      c.fill();
      c.closePath();
    };
    this.update = () => {
      this.draw();
      this.radians += this.velocity;
      this.x = x + Math.cos(this.radians) * 100;
      this.y = y + Math.sin(this.radians) * 100;
    };
  }
  let particle;
  function init() {
    particle = new Particle(canvas.width / 2, canvas.height / 2, 4);
  }
  
  function animate() {
    requestAnimationFrame(animate);
    c.fillStyle = "rgba(255,255,255, 0.07)";
    c.fillRect(0, 0, innerWidth, innerHeight);
  
    particle.update();
  }
  init();
  animate();
  
  */
//Sine Wave
/*
  import GUI from "https://cdn.jsdelivr.net/npm/lil-gui@0.19/+esm";
  const gui = new GUI();
  
  const wave = {
    y: canvas.height / 2,
    length: 0.01,
    amplitude: 100,
    frequency: 0.01,
  };
  
  const strokeColor = {
    h: 200,
    s: 50,
    l: 50,
  };
  const fillColor = {
    r: 0,
    g: 0,
    b: 0,
    a: 0.1,
  };
  const waveFolder = gui.addFolder("wave");
  
  waveFolder.add(wave, "y", 0, canvas.height);
  waveFolder.add(wave, "length", -0.01, 0.01);
  waveFolder.add(wave, "amplitude", -300, 300);
  waveFolder.add(wave, "frequency", -0.01, 0.01);
  waveFolder.open;
  const strokeFolder = gui.addFolder("stroke");
  strokeFolder.add(strokeColor, "h", 0, 255);
  strokeFolder.add(strokeColor, "s", 0, 100);
  strokeFolder.add(strokeColor, "l", 0, 100);
  strokeFolder.open;
  
  const fillFolder = gui.addFolder("background");
  fillFolder.add(fillColor, "r", 0, 255);
  fillFolder.add(fillColor, "g", 0, 255);
  fillFolder.add(fillColor, "b", 0, 255);
  fillFolder.add(fillColor, "a", 0, 1);
  fillFolder.open;
  
  let increment = wave.frequency;
  
  function animate() {
    requestAnimationFrame(animate);
    // c.clearRect(0, 0, innerWidth, innerHeight);
    c.fillStyle = `rgba(${fillColor.r},${fillColor.g},${fillColor.b},${fillColor.a})`;
    c.fillRect(0, 0, canvas.width, canvas.height);
  
    c.beginPath();
    c.moveTo(0, wave.y);
    for (let i = 0; i < canvas.width; i++) {
      c.lineTo(
        i,
        wave.y + Math.sin(wave.length * i) * wave.amplitude * Math.cos(increment)
      );
    }
    c.strokeStyle = `hsl(${Math.abs(strokeColor.h * Math.sin(increment))},${
      strokeColor.s
    }%, ${strokeColor.l}%)`;
    increment += wave.frequency;
    c.stroke();
  }
  animate();
  */
/*
  const wave = {
    y: canvas.height / 2,
    length: 0.01,
    amplitude: 100,
    frequency: 0.01,
  };
  let increment = wave.frequency;
  function animate() {
    requestAnimationFrame(animate);
    c.fillStyle = "rgba(0,0,0,0.05)";
    c.fillRect(0, 0, innerWidth, innerHeight);
    c.fill();
    c.beginPath();
    c.moveTo(0, wave.y);
    for (let i = 0; i < canvas.width; i++) {
      c.lineTo(
        i,
        wave.amplitude *
          Math.sin(increment + wave.length * i) *
          Math.tan(increment) +
          wave.y
      );
    }
    increment += wave.frequency;
    c.strokeStyle = "hsl(200,50%,50%)";
    c.stroke();
  }
  animate();
  */
//////////////
//Rect Collision Detection
/*
  function init() {
    c.fillStyle = "#e862662";
    c.fillRect(mouse.x, mouse.y, 100, 100);
  }
  
  function animate() {
    requestAnimationFrame(animate);
    c.fillStyle = "#1a1a23";
    c.fillRect(0, 0, innerWidth, innerHeight);
  
    if (
      mouse.x + 100 >= canvas.width / 2 - 50 &&
      mouse.x <= canvas.width / 2 - 50 + 100 &&
      mouse.y + 100 >= canvas.height / 2 - 50 &&
      mouse.y <= canvas.height / 2 - 50 + 100
    ) {
      console.log("Colliding");
    }
  
    //Red square
    c.fillStyle = "#e86266";
    c.fillRect(mouse.x, mouse.y, 100, 100);
  
    //Blue square
    c.fillStyle = "#92abea";
    c.fillRect(canvas.width / 2 - 50, canvas.height / 2 - 50, 100, 100);
  }
  // init();
  animate();
  */
/*
  class Particle {
    constructor(x, y, radius, color, velocity) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
      this.velocity = velocity;
      this.ttl = 1000;
    }
  
    draw() {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
  
      c.fillStyle = this.color;
      c.fill();
      c.closePath();
    }
  
    update() {
      this.draw();
      this.x += this.velocity.x;
      this.y += this.velocity.y;
      this.ttl--;
    }
  }
  
  let particles;
  let hue = 0;
  function init() {
    particles = [];
    const radius = 100;
    for (let i = 0; i < 80; i++) {
      //Full circle  = pi*2 radians
      const radian = (Math.PI * 2) / 30;
      const x = canvas.width / 2;
      const y = canvas.height / 2;
      const velocity = {
        x: Math.cos(radian * i) * 3,
        y: Math.sin(radian * i) * 3,
      };
      particles.push(new Particle(x, y, 5, `hsl(${hue},50%,50%)`, velocity));
    }
  }
  
  // const radian = (Math.PI * 2) / 30;
  // const x = canvas.width / 2 + Math.cos(radian * i) * radius;
  // const y = canvas.height / 2 + Math.sin(radian * i) * radius;
  
  let hueRadians = 0;
  function generateRing() {
    setTimeout(generateRing, 200);
    hue = Math.abs(Math.sin(hueRadians) * 360);
    for (let i = 0; i < 80; i++) {
      //Full circle  = pi*2 radians
  
      const radian = (Math.PI * 2) / 30;
      const x = mouse.x;
      const y = mouse.y;
      const velocity = {
        x: Math.cos(radian * i) * 3,
        y: Math.sin(radian * i) * 3,
      };
      particles.push(new Particle(x, y, 5, `hsl(${hue},50%,50%)`, velocity));
    }
    hueRadians += 0.01;
  }
  
  function animate() {
    requestAnimationFrame(animate);
    c.fillStyle = "rgba(0,0,0,.1)";
    c.fillRect(0, 0, innerWidth, innerHeight);
    particles.forEach((particle, i) => {
      if (particle.ttl < 0) {
        particles.splice(i, 1);
      } else {
        particle.update();
      }
    });
  }
  init();
  animate();
  generateRing();
  */
/*
  class Particle {
    constructor(x, y, radius, radians, amp, color) {
      this.x = x;
      this.y = y;
      this.radius = radius;
  
      this.radians = radians;
      this.amp = amp;
      this.velocity = 0.05;
      this.startingPosition = {
        x: x,
        y: y,
      };
    }
  
    draw() {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
  
      c.fillStyle = `hsl(${this.radians * 255}, 50%, 50%)`;
      //c.fillStyle = `Blue`;
      c.fill();
      c.closePath();
    }
  
    update() {
      this.draw();
  
      this.x =
        this.startingPosition.x + Math.cos(this.radians + this.amp) * this.amp;
      this.y =
        this.startingPosition.y + Math.sin(this.radians + this.amp) * this.amp;
      this.radians += this.velocity;
    }
  }
  let particles = [];
  function init() {
    particles = [];
    let amp = 50;
    for (let j = 1; j <= 5; j++) {
      for (let i = 0; i < 10; i++) {
        let radians = (2 * Math.PI * i) / 10;
        const currentAmp = j * amp;
        const x = canvas.width / 2 - Math.cos(radians) * currentAmp;
        const y = canvas.height / 2 - Math.sin(radians) * currentAmp;
        particles.push(new Particle(x, y, 10, radians, currentAmp, "blue"));
      }
    }
  }
  
  function animate() {
    requestAnimationFrame(animate);
    c.fillStyle = "rgba(0,0,0,.1)";
    c.fillRect(0, 0, innerWidth, innerHeight);
    particles.forEach((particle) => {
      particle.update();
    });
  }
  
  init();
  animate();
  */
/*
  class Particle {
    constructor(x, y, radius, color) {
      this.x = x;
      this.y = y;
      this.radius = radius;
  
      this.color = color;
    }
  
    draw() {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
      c.shadowColor = this.color;
      c.shadowBlur = 15;
      c.fillStyle = this.color;
      c.fill();
      c.closePath();
    }
  
    update() {
      this.draw();
    }
  }
  const circularColors = ["#F20574", "#04D9D9", "#ABD904", "#F2B705", "#F25C05"];
  
  let particles;
  function init() {
    particles = [];
    for (let i = 0; i < 400; i++) {
      const x = randomInFromRange(
        -canvas.width / 2 - 300,
        canvas.width / 2 + 300
      );
  
      const y = randomInFromRange(
        -canvas.height / 2 - 300,
        canvas.height / 2 + 300
      );
      const radius = Math.random() * 2;
      particles.push(new Particle(x, y, radius, randomColor(circularColors)));
    }
  }
  let canvasRadians = 0;
  let incr = 0.001;
  let alpha = 1;
  let mouseDown;
  addEventListener("mousedown", function () {
    mouseDown = true;
    incr = 0.003;
  });
  addEventListener("mouseup", function () {
    mouseDown = false;
    incr = 0.001;
  });
  function animate() {
    requestAnimationFrame(animate);
    c.fillStyle = `rgba(10,10,10,${alpha})`;
    c.fillRect(0, 0, innerWidth, innerHeight);
    c.fill();
  
    c.save();
    c.translate(canvas.width / 2, canvas.height / 2);
    c.rotate(canvasRadians);
    particles.forEach((particle) => {
      particle.update();
    });
    c.restore();
    canvasRadians += incr;
    if (mouseDown && alpha >= 0.08) {
      alpha -= 0.01;
    } else if (!mouseDown && alpha < 1) {
      alpha += 0.001;
    }
  }
  
  init();
  animate();
  */

//////////////////////////////////////////////////
//Hexagons
/*
  const circularColors = ["#F20574", "#04D9D9", "#ABD904", "#F2B705", "#F25C05"];
  
  class Particle {
    constructor(x, y, velocity, radius, timeLimit, color) {
      this.x = x;
      this.y = y;
      this.startingPosition = {
        x: x,
        y: y,
      };
      this.angle = 60;
      this.radius = radius;
      this.velocity = {
        x: velocity.x,
        y: velocity.y,
      };
      this.timeLimit = timeLimit;
      this.color = color;
    }
    draw() {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
      c.fillStyle = this.color;
  
      c.fill();
      c.closePath();
    }
    update() {
      this.draw();
      this.x += this.velocity.x;
      this.y += this.velocity.y;
      let dist = this.getDistance();
      if (dist >= 75) {
        let newCords = this.rotate();
        this.startingPosition.x = this.x;
        this.startingPosition.y = this.y;
  
        this.velocity = {
          x: newCords.x,
          y: newCords.y,
        };
  
        this.timeLimit--;
      }
    }
    getDistance() {
      const xDist = this.x - this.startingPosition.x;
      const yDist = this.y - this.startingPosition.y;
      return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
    }
    rotate() {
      let randomTurn = Math.random() < 0.5 ? -1 : 1;
      const radian = (randomTurn * (this.angle * Math.PI)) / 180;
      const newX =
        this.velocity.x * Math.cos(radian) - this.velocity.y * Math.sin(radian);
      const newY =
        this.velocity.x * Math.sin(radian) + this.velocity.y * Math.cos(radian);
      return {
        x: newX,
        y: newY,
      };
    }
  }
  
  let velocities = [
    {
      x: 1.25 * Math.sin((60 * Math.PI) / 180),
      y: 1.25 * Math.cos((60 * Math.PI) / 180),
    },
    {
      x: 0 * Math.sin((60 * Math.PI) / 180),
      y: -1.25 * Math.cos((60 * Math.PI) / 180),
    },
    {
      x: -1.25 * Math.sin((60 * Math.PI) / 180),
      y: 1.25 * Math.cos((60 * Math.PI) / 180),
    },
  ];
  let particles;
  function init() {
    particles = [];
  
    const radius = 5;
    let currentColor = randomColor(circularColors);
    for (let i = 0; i < 20; i++) {
      let randVelocity = Math.floor(Math.random() * 3);
      let x = canvas.width / 2;
      let y = canvas.height / 2;
      particles.push(
        new Particle(x, y, velocities[randVelocity], radius, 30 - i, currentColor)
      );
    }
  }
  
  function generateParticles() {
    const radius = 5;
    let currentColor = randomColor(circularColors);
    for (let i = 0; i < 20; i++) {
      let randVelocity = Math.floor(Math.random() * 3);
      let x = canvas.width / 2;
      let y = canvas.height / 2;
      particles.push(
        new Particle(x, y, velocities[randVelocity], radius, 30 - i, currentColor)
      );
    }
  }
  
  function animate() {
    requestAnimationFrame(animate);
    c.fillStyle = "rgba(10,10,10,0.01)";
    c.fillRect(0, 0, innerWidth, innerHeight);
    particles.forEach((particle, i) => {
      if (
        particle.timeLimit <= 0 ||
        particle.y >= canvas.height ||
        particle.y <= 0 ||
        particle.x >= canvas.width ||
        particle.x <= 0
      ) {
        particles.splice(i, 1);
      } else {
        particle.update();
      }
      if (particles.length <= 10) {
        generateParticles();
      }
    });
  }
  init();
  animate();
  */

////////////////////////
//Flow fields
/*
  c.lineWidth = 1;
  c.lineCap = "round";
  
  class Particle {
    constructor(effect) {
      this.effect = effect;
      this.x = Math.floor(Math.random() * this.effect.width);
      this.y = Math.floor(Math.random() * this.effect.height);
      this.speedX;
      this.speedY;
      this.speedMod = Math.floor(Math.random() * 5 + 1);
      this.history = [{ x: this.x, y: this.y }];
      this.maxLength = Math.floor(Math.random() * 200 + 10);
      this.angle = 0;
      this.timer = this.maxLength * 2;
      this.colors = [
        "#1c3d73",
        "#1a4487",
        "#20509e",
        "#235cb8",
        "#3574db",
        "#508ef2",
        "#639af2",
        "#87b3fa",
      ];
      this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
    }
    draw(context) {
      context.beginPath();
      context.moveTo(this.history[0].x, this.history[0].y);
      for (let i = 0; i < this.history.length; i++) {
        context.lineTo(this.history[i].x, this.history[i].y);
      }
  
      context.strokeStyle = this.color;
      context.stroke();
    }
    update() {
      this.timer--;
      if (this.timer >= 1) {
        let x = Math.floor(this.x / this.effect.cellSize);
        let y = Math.floor(this.y / this.effect.cellSize);
        let index = y * this.effect.cols + x;
  
        this.angle = this.effect.flowField[index];
        this.speedX = Math.cos(this.angle) * this.speedMod;
        this.speedY = Math.sin(this.angle) * this.speedMod;
        this.x += this.speedX;
        this.y += this.speedY;
  
        this.history.push({ x: this.x, y: this.y });
        if (this.history.length > this.maxLength) {
          this.history.shift();
        }
      } else if (this.history.length > 1) {
        this.history.shift();
      } else {
        this.reset();
      }
    }
    reset() {
      this.x = Math.floor(Math.random() * this.effect.width);
      this.y = Math.floor(Math.random() * this.effect.height);
      this.history = [{ x: this.x, y: this.y }];
      this.timer = this.maxLength * 2;
    }
  }
  
  class Effect {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.particles = [];
      this.numberOfParticles = 2000;
      this.cellSize = 20;
      this.rows;
      this.cols;
      this.curve = 6;
      this.zoom = 0.05;
      this.flowField = [];
      this.init();
      window.addEventListener("resize", (e) => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        this.width = canvas.width;
        this.height = canvas.height;
        this.init();
      });
    }
    init() {
      //Create flow field
      this.rows = Math.floor(this.height / this.cellSize);
      this.cols = Math.floor(this.width / this.cellSize);
      this.flowField = [];
      for (let y = 0; y < this.rows; y++) {
        for (let x = 0; x < this.cols; x++) {
          const angle =
            this.curve * (Math.sin(x * this.zoom) + Math.cos(y * this.zoom));
          this.flowField.push(angle);
        }
      }
      //create particles
      for (let i = 0; i < this.numberOfParticles; i++) {
        this.particles.push(new Particle(this));
      }
    }
    render(context) {
      this.particles.forEach((particle) => {
        particle.draw(context);
        particle.update();
      });
    }
  }
  
  const effect = new Effect(canvas.width, canvas.height);
  
  function animate() {
    requestAnimationFrame(animate);
    c.fillStyle = "rgba(0,0,0,0.2)";
    c.fillRect(0, 0, canvas.width, canvas.height);
    effect.render(c);
  }
  animate();
  */
/*
  import { noise } from "./node_modules/@chriscourses/perlin-noise/index.js";
  
  class Particle {
    constructor(effect, color) {
      this.effect = effect;
      this.x = Math.floor(Math.random() * this.effect.width);
      this.y = Math.floor(Math.random() * this.effect.height);
      this.speedX;
      this.speedY;
      this.history = [{ x: this.x, y: this.y }];
      this.maxLength = Math.floor(Math.random() * 30 + 15);
      this.time = this.maxLength * 2;
      this.colors = [
        "#1c3d73",
        "#1a4487",
        "#20509e",
        "#235cb8",
        "#3574db",
        "#508ef2",
        "#639af2",
        "#87b3fa",
      ];
      this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
    }
  
    draw(context) {
      context.save(); // Save the current canvas state
  
      context.beginPath();
      // context.arc(this.x, this.y, 5, 0, Math.PI * 2);
      c.lineWidth = 3;
      c.lineCap = "round";
      context.moveTo(this.history.x, this.history.y);
      for (let i = 0; i < this.history.length; i++) {
        context.lineTo(this.history[i].x, this.history[i].y);
      }
  
      context.strokeStyle = this.color;
      context.stroke();
      context.shadowColor = this.color;
      context.shadowBlur = 5;
      // context.fillStyle = this.color;
      // context.fill();
      context.restore();
    }
    update() {
      this.time--;
      if (this.time >= 1) {
        let x = Math.floor(this.x / this.effect.cellSize);
        let y = Math.floor(this.y / this.effect.cellSize);
        let index = y * this.effect.cols + x;
        let angle = this.effect.flowField[index];
        this.speedX = Math.cos(angle) + 0.5;
        this.speedY = Math.sin(angle) + 0.5;
        this.x += this.speedX;
        this.y += this.speedY;
        this.history.push({ x: this.x, y: this.y });
        if (this.history.length > this.maxLength) {
          this.history.shift();
        }
      } else if (this.history.length >= 1) {
        this.history.shift();
      } else {
        this.reset();
      }
    }
    // update() {
    //   // Update position before checking boundaries
    //   let x = Math.floor(this.x / this.effect.cellSize);
    //   let y = Math.floor(this.y / this.effect.cellSize);
    //   let index = y * this.effect.cols + x;
  
    //   // Ensure the index is valid and angle is defined
    //   if (index >= 0 && index < this.effect.flowField.length) {
    //     let angle = this.effect.flowField[index];
  
    //     if (!isNaN(angle)) {
    //       this.speedX = Math.cos(angle);
    //       this.speedY = Math.sin(angle);
  
    //       this.x += this.speedX;
    //       this.y += this.speedY;
    //     }
    //   }
  
    //   // Wrap around horizontal boundaries
    //   if (this.x >= this.effect.width) {
    //     this.x = 0;
    //   } else if (this.x <= 0) {
    //     this.x = this.effect.width;
    //   }
  
    //   // Wrap around vertical boundaries
    //   if (this.y >= this.effect.height) {
    //     this.y = 0;
    //   } else if (this.y <= 0) {
    //     this.y = this.effect.height;
    //   }
    // }
  
    reset() {
      this.x = Math.floor(Math.random() * this.effect.width);
      this.y = Math.floor(Math.random() * this.effect.height);
      this.history = [{ x: this.x, y: this.y }];
      this.time = this.maxLength * 2;
    }
  }
  class Effect {
    constructor(width, height) {
      this.height = height;
      this.width = width;
      this.cellSize = 30;
      this.particleNumber = 1000;
      this.particleArray = [];
      this.flowField = [];
      this.rows;
      this.cols;
      this.zoom = 0.1;
      this.increment = 0.1;
      this.time = 0.1;
      this.init();
    }
    init() {
      this.createFlow();
      for (let i = 0; i < this.particleNumber; i++) {
        this.particleArray.push(new Particle(this, "blue"));
      }
      console.log(this.width, this.height);
    }
  
    createFlow() {
      this.rows = Math.ceil(this.height / this.cellSize);
      this.cols = Math.ceil(this.width / this.cellSize);
      this.flowField = [];
      for (let y = 0; y < this.rows; y++) {
        for (let x = 0; x < this.cols; x++) {
          let angle = this.map(
            noise(x * this.zoom, y * this.zoom, this.time),
            0,
            1,
            0,
            Math.PI * 2
          );
          // this.flowField.push(newNoise);
          //let angle = (Math.sin(x * this.zoom) + Math.cos(y * this.zoom)) * 10;
          this.flowField.push(angle);
        }
      }
    }
    render(context) {
      this.particleArray.forEach((particle) => {
        particle.draw(context);
        particle.update();
      });
    }
  
    updateFlow() {
      this.time += this.increment;
      this.createFlow();
    }
    map(value, start1, stop1, start2, stop2) {
      return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
    }
  }
  
  const effect = new Effect(canvas.width, canvas.height);
  console.log(canvas.width, canvas.height);
  setInterval(() => {
    effect.updateFlow();
  }, 1000);
  
  function animate() {
    requestAnimationFrame(animate);
    c.fillStyle = "rgba(0,0,0,0.1)";
    c.fillRect(0, 0, canvas.width, canvas.height);
  
    c.fill();
    effect.render(c);
  }
  animate();
  console.log(effect.particleArray[0]);
  */

////////////////////
/*
  class Particle {
    constructor(effect) {
      this.effect = effect;
      this.radius = 10;
      this.x = Math.random() * this.effect.width;
      this.y = Math.random() * this.effect.height;
      this.opacity = 1;
      this.speedX =
        (Math.floor(Math.random() * 2 + 1) * (Math.random() < 0.5 ? -1 : 1)) / 2;
      this.speedY =
        (Math.floor(Math.random() * 2 + 1) * (Math.random() < 0.5 ? -1 : 1)) / 2;
    }
  
    draw(context) {
      for (let i = 0; i < this.effect.particles.length; i++) {
        let currentPar = this.effect.particles[i];
        let difX = Math.abs(this.x - currentPar.x);
        let difY = Math.abs(this.y - currentPar.y);
  
        const distance = this.getDistance(difX, difY);
        if (distance < 200) {
          context.save();
          context.beginPath();
          context.moveTo(this.x, this.y);
          context.lineTo(currentPar.x, currentPar.y);
          context.strokeStyle = "hsl(100,50%,50%)";
          context.stroke();
          context.closePath();
          context.restore();
        }
      }
  
      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      context.fillStyle = `rgba(100,200,103, ${this.opacity})`;
      context.fill();
    }
  
    getDistance(x, y) {
      return Math.hypot(x, y);
    }
  
    update() {
      if (this.x >= this.effect.width || this.x <= 0) {
        this.speedX = -this.speedX;
      }
      if (this.y >= this.effect.height || this.y <= 0) {
        this.speedY = -this.speedY;
      }
      let mouseXDis = Math.abs(this.x - mouse.x);
      let mouseYDis = Math.abs(this.y - mouse.y);
      let mouseDis = this.getDistance(mouseXDis, mouseYDis);
  
      this.x += this.speedX;
      this.y += this.speedY;
    }
  }
  
  class Effect {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.particles = [];
      this.particleNums = 150;
      this.init();
    }
    init() {
      this.particles = [];
      for (let i = 0; i < this.particleNums; i++) {
        this.particles.push(new Particle(this));
      }
    }
    render(context) {
      this.particles.forEach((particle, i) => {
        particle.draw(context);
        particle.update();
        if (particle.opacity <= 0) {
          this.particles.splice(i, 1);
        }
      });
      if (this.particles < this.particleNums) {
        this.particles.push(new Particle(this));
      }
    }
  }
  const effect = new Effect(canvas.width, canvas.height);
  
  function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    effect.render(c);
  }
  animate();
  */
