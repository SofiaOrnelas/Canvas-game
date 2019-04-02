class Ball{
    constructor(){
        this.x = CANVAS_WIDTH/2
        this.y = CANVAS_HEIGHT/2
        this.vx = 2
        this.vy = 1
        this.radius = 10
    }

    draw(ctx){
        ctx.save()

        ctx.fillStyle ="gold"
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI)
        ctx.strokeStyle = "white"
        ctx.stroke()
        ctx.fill()

        ctx.restore()
    }
    update() {
        this.x += this.vx
        this.y += this.vy
        if (this.y+this.radius > CANVAS_HEIGHT) {
            this.vy *= -1
        } 
        if (this.y-this.radius < 0){ //Top
            this.vy *= -1
        }
        // TODO : Do the same with the top
    }

/*     move(){
        setInterval(() => {
            this.x+=5
            this.y+=5
        }, 400);
    } */

}
//if the ball touches the left or right border:
/* if(this.x - this.radius < 0) { 
    updateEverything()
}
if (this.x+this.radius>CANVAS_WIDTH){
    updateEverything()
}
 */