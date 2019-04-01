class Player{
    constructor(x, y , width, height, color, speed){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.color = color
        this.speed = speed
        this.direction = undefined
    }

    draw(ctx) {
        ctx.save()

        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)

        ctx.restore()
      }

      moveUp(){
          if(this.y > 0){
            this.y-=5
          }
      }

      moveDown(){
        if(this.y > 0){
            this.y+=5
          }
      }
}


      

 



