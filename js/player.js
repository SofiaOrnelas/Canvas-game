class Player {
  constructor(x, y, width, height, playerNb, src) {
    this.x = x
    this.y = y
    this.vy = 0
    this.width = width
    this.height = height
    this.playerNb = playerNb
    this.score = 0
    this.angle = 0
    this.angleSpeed = 1
    this.img = new Image()
    this.img.src = src
    /* this.direction = undefined */
  }

  draw(ctx) {
    // TODO: draw in the case of player 1
    ctx.save()
    if (this.playerNb === 1) {
      ctx.translate(this.x, this.y + this.height)
      if (DEBUG) {
        ctx.globalAlpha = 0.5
        ctx.fillRect(0, -this.height, this.width, this.height)
      }
      ctx.rotate(this.angle)
      ctx.drawImage(this.img, 0, -this.height, this.width, this.height)
    }
    if (this.playerNb === 2) {
      ctx.translate(this.x + this.width, this.y + this.height)
      if (DEBUG) {
        ctx.globalAlpha = 0.5
        ctx.fillRect(-this.width, -this.height, this.width, this.height)
      }
      ctx.rotate(this.angle)
      ctx.drawImage(this.img, -this.width, -this.height, this.width*1, this.height*1)
    }


    ctx.restore()

  }
  shoot() {
    if (this.angleSpeed === 0) {
      if (this.playerNb === 1) {
        this.angleSpeed = 0.05
      }
      else {
        this.angleSpeed = -0.05
      }
    }

  }

  moveUp() {
    this.vy = -6 
  }
  moveDown() {
    this.vy = 6
  }
  stop() {
    this.vy = 0
  }
  update() {
    // ----- Change the angle -----
    this.angle += this.angleSpeed

    // If the angle is too important, we revert the angleSpeed
    if (Math.abs(this.angle) > MAX_ANGLE) {
      this.angleSpeed *= -1
    }
    if (Math.abs(this.angle) < Math.abs(this.angleSpeed)) {
      this.angle = 0
      this.angleSpeed = 0
    }

    this.y += this.vy
    if (this.y < 0) {
      this.y = 0
    }
    if (this.y > CANVAS_HEIGHT - this.height) {
      this.y = CANVAS_HEIGHT - this.height
    }

    // ----- Change the ball -----
    if (ball.isStopped() && this.playerNb === score.playerNbWhoServing) {
      ball.y = this.y + 0.2*this.height
    }
  }
  top() {
    return this.y
  }
  bottom() {
    return this.y + this.height
  }

}









