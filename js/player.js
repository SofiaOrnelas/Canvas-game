class Player{
  constructor(x, y , width, height, color){
    this.x = x
    this.y = y
    this.vy = 0
    this.width = width
    this.height = height
    this.color = color
    this.score = 0
  /* this.direction = undefined */
  }

  draw(ctx, src) {
    let img = new Image()
    img.src = src
    ctx.drawImage(img, this.x, this.y, this.width, this.height)
    //ctx.fillRect(this.x, this.y, this.width, this.height)

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

/*   playerScore(){
    for (let i=1; i<3; i++){
      if (player[i].score === 0 && looserNb !== i){
      player[i].score = 15
    } else if (player[i].score === 15 && looserNb !== i){
      player[i].score = 30
    } else if (player[i].score === 30 && looserNb !== i){
    player[i].score = 40
    }
  }
} */
  
}



      

 



