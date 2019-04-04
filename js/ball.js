class Ball{
    constructor(){
        this.radius = 10
        this.reset()
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

    isStopped() {
        return this.vx === 0 && this.vy === 0
    }

    launch() {
        if (score.playerNbWhoServing === 1){
            this.vx = 10
            this.vy = 2
        }
        else{
            this.vx = -10
            this.vy = 2 
        }
    }
    reset() {
        if (score.playerNbWhoServing === 1){
            this.x = player1.width;
        }
        else {
            this.x = CANVAS_WIDTH - player2.width;
        }
        this.y = CANVAS_HEIGHT/2;
        this.vx = 0;
        this.vy = 0;
    }

}
