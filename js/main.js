var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width
const CANVAS_HEIGHT = canvas.height

let player1 = new Player(0, 200, 20, 80, 'red')
let player2 = new Player(480, 200, 20, 80, 'blue')
let bg = new Background()
let ball = new Ball()

function animation(){
  //updateEverything()
  drawEverything(ctx);   
  window.requestAnimationFrame(animation)
}

function drawEverything(ctx){
  bg.draw(ctx, "img/tennis-court-1846813_1280.png")
  /*bg.draw(ctx, "img/tennis-1605799_1280.png")*/
  //ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  
  player1.draw(ctx)
  player2.draw(ctx)

  ball.draw(ctx)

  ctx.fillStyle = "gold";
  ctx.font = "30px Arial";
  ctx.fillText("ATP Tour", 20, 40); 
}

function updateEverything(){
  bg.update()

  player1.update()
  player2.update()
}

animation()
// ball.move()

window.onkeydown = function(event){
  console.log(event)
  if (event.key === 38) {
    this.direction = 'up'
  }
}