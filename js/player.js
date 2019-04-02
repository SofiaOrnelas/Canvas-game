class Player{
  constructor(x, y , width, height, color){
    this.x = x
    this.y = y
    this.vy = 0
    this.width = width
    this.height = height
    this.color = color
    this.score = 0
  /*   this.vy = vy
    this.direction = undefined */
  }

  draw(ctx) {
    ctx.save()
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.width, this.height)

    ctx.restore()
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



      

 



