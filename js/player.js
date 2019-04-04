class Player{
  constructor(x, y , width, height, playerNb){
    this.x = x
    this.y = y
    this.vy = 0
    this.width = width
    this.height = height
    this.playerNb = playerNb
    this.score = 0
    this.angle = 0
    this.angleSpeed = 0
  /* this.direction = undefined */
  }

  draw(ctx, src) {
    // TODO: draw in the case of player 1
    ctx.save()
    ctx.translate(this.x + this.width, this.y + this.height)
    ctx.rotate(this.angle)
    let img = new Image()
    img.src = src
    ctx.drawImage(img, -this.width, -this.height, this.width, this.height)
    ctx.fillRect(-this.width, -this.height, this.width, this.height)
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
    
  moveUp(){
    this.vy = -6
  }
  moveDown(){
    this.vy = 6
  }  
  stop() {
    this.vy = 0
  }
  update()  {
    // ----- Change the angle -----
    this.angle += this.angleSpeed

    // If the angle is too important, we revert the angleSpeed
    if (Math.abs(this.angle) > 1) {
      this.angleSpeed *= -1
    }
    if (Math.abs(this.angle) < this.angleSpeed) {
      this.angle = 0
      this.angleSpeed = 0
    }

    this.y += this.vy
    if(this.y < 0){
      this.y = 0
    }
    if(this.y > CANVAS_HEIGHT - this.height){
      this.y = CANVAS_HEIGHT - this.height
    }
  } 
  top() {
    return this.y
  }
  bottom() {
    return this.y + this.height
  }
  
}



      

 



