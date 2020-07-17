class cactus {
  constructor(type = 0) {
    // type 0 - cactus ; type 1 - ufo
    this.type = type;
    if (this.type == 0) {
      this.x = canvas.width + 150;
      this.y = canvas.height - 130;
      this.width = 120;
      this.height = 200;
      this.xspeed = 15;
      this.count = 0;
      this.model = new Image();
      this.model.src = "/dinozzz/img/cactus1.png";
    } else if (this.type == 1) {
      this.x = canvas.width + 150;
      this.y = canvas.height - 260;
      this.width = 120;
      this.height = 100;
      this.xspeed = 15;
      this.count = 0;
      this.model = new Image();
      this.model.src = "/dinozzz/img/ufo1.png";
    }
  }
  show() {
    //ctx.fillRect(this.x, this.y, this.width, this.height);
    if (this.type == 1) {
      ctx.drawImage(this.model, this.x, this.y);
    } else if (this.type == 0) {
      ctx.drawImage(this.model, this.x, this.y - 70);
    }
  }

  move() {
    this.x -= this.xspeed;

    if (this.x < player.x) {
      this.count++;
    }

    if (this.count == 1) {
      game.points++;
      pointsDiv.innerHTML = game.points;
    }
  }
}
