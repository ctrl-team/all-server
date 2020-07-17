const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const pointsDiv = document.getElementById("points");
const ctx = canvas.getContext("2d");
const click = document.getElementById("all");
const start = document.getElementById("Start");
const score = document.getElementById("Score");
const high = document.getElementById("High");
const highscore = document.getElementById("highscorenew");
pointsDiv.style.display = "none";
highscore.style.display = "none";
score.style.display = "none";
const playermodel = new Image();
playermodel.src = "/dinozzz/img/dino.png";
const crouchplayermodel = new Image();
crouchplayermodel.src = "/dinozzz/img/dinocrouch1.png";
const jumpsound = new Audio("/dinozzz/sound/Jump8.wav");
const endsound = new Audio("/dinozzz/sound/Hit_Hurt2.wav");
const crouch = document.getElementById("crouch");

let game = {
  gravity: 1.7,
  points: 0,
  touch: false,
  count: 0
};

if ("ontouchstart" in document.documentElement) {
  game.touch = true;
}
if (!game.touch) crouch.style.display.none;
if (localStorage.getItem("Highscore") == null)
  localStorage.setItem("Highscore", 0);
high.innerHTML = `Highscore: ${localStorage.getItem("Highscore")}`;
let player = {
  jumping: false,
  x: 120,
  y: canvas.height - 250,
  height: 250,
  width: 150,
  yspeed: -33,
  status: "run",
  reset() {
    this.jumping = false;
    this.x = 120;
    this.y = canvas.height - 250;
    this.height = 250;
    this.width = 150;
    this.yspeed = -33;
  },
  jump() {
    if (game.count == 0) jumpsound.play();
    game.count++;
    player.yspeed += game.gravity;
    player.y += player.yspeed;
    if (this.y > canvas.height - this.height) {
      this.reset();
      game.count = 0;
    }
  }
};

let iterate = 1;

function changemodel() {
  if (player.jumping == false) {
    if (iterate < 2) {
      iterate++;
      playermodel.src = "/dinozzz/img/dino1.png";
    } else {
      iterate--;
      playermodel.src = "/dinozzz/img/dino2.png";
    }
  } else {
    playermodel.src = "/dinozzz/img/dino3.png";
  }

  setTimeout(changemodel, 150);
}
changemodel();

let count = 0;
let cactusArr = [];
const interval = [80, 40, 120];

function action() {
  game.clicked = false;
  let loop = window.requestAnimationFrame(action);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  let randomInterv = Math.floor(Math.random() * interval.length);
  count++;

  if (count % interval[randomInterv] == 0) {
    cactusArr.push(new cactus(Math.floor(Math.random() * 2)));
  }

  for (cact of cactusArr) {
    if (
      cact.x < player.x - 30 + player.width &&
      cact.x + cact.width > player.x - 30 &&
      cact.y < player.y + player.height &&
      cact.y + cact.height > player.y
    ) {
      window.cancelAnimationFrame(loop);
      endsound.play();
      start.style.display = "block";
      cactusArr[0].y += 900;
      cactusArr = [];
      pointsDiv.style.display = "none";
      score.style.display = "block";
      player.y = canvas.height + 900;
      score.innerHTML = `Score: ${game.points}`;
      if (localStorage.getItem("Highscore") < game.points) {
        localStorage.setItem("Highscore", game.points);
        highscore.style.display = "block";
      }
      game.clicked = true;
      high.innerHTML = `Highscore: ${localStorage.getItem("Highscore")}`;

      game.points = 0;
      pointsDiv.innerHTML = game.points;
      high.style.display = "block";
    }
    if (cact.x > -150) {
      cact.show();
      cact.move();
    } else {
      cactusArr.shift(0);
    }
  }

  switch (player.status) {
    case "run":
      ctx.drawImage(playermodel, player.x, player.y);
      break;
    case "crouch":
      player.y = canvas.height - 130;
      player.height = 130;
      player.width = 230;
      //ctx.fillRect(player.x, player.y, player.width, player.height);
      ctx.drawImage(crouchplayermodel, player.x, player.y);
      break;
  }

  if (player.jumping == true) {
    player.jump();
  }
}
window.addEventListener("mousedown", function(event) {
  if (game.clicked == false) {
    player.jumping = true;
  }
});

document.onkeydown = e => {
  if (e.key == " " || e.key == "w") {
    if (game.clicked == false) {
      player.jumping = true;
    }
  } else if (e.key == "s") {
    player.status = "crouch";
    game.gravity = 2;
  }
};
document.onkeyup = e => {
  if (e.key == "s") {
    player.status = "run";
    player.y = canvas.height - 250;
    player.height = 250;
    player.width = 150;
    game.gravity = 1.7;
  }
};

start.addEventListener("click", () => {
  game.clicked = true;
  player.reset();
  action();
  pointsDiv.style.display = "block";
  start.style.display = "none";
  score.style.display = "none";
  high.style.display = "none";
  highscore.style.display = "none";
});

crouch.addEventListener("click", () => {
  player.status = "crouch";
});
