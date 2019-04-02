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
        // TODO : Do the same with the top
        if (this.y-this.radius < 0){ 
            this.vy *= -1
        }
    }

}
