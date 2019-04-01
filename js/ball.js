class Ball{
    constructor(){
        this.x = 245
        this.y = 245
    }

    draw(ctx){
        ctx.save()

        ctx.fillStyle ="gold"
        ctx.beginPath()
        ctx.arc(this.x, this.y, 10, 0, 2*Math.PI)
        ctx.strokeStyle = "white"
        ctx.stroke()
        ctx.fill()

        ctx.restore()
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