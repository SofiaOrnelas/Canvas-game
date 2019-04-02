var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width
const CANVAS_HEIGHT = canvas.height

let player1 = new Player(0, 250, 20, 80, 'red')
let player2 = new Player(CANVAS_WIDTH-20, 350, 20, 80, 'blue')
let bg = new Background()
let ball = new Ball()

function animation(){
  updateEverything()
  drawEverything(ctx); 
  window.requestAnimationFrame(animation)
}
animation()

function drawEverything(ctx){
  bg.draw(ctx, "./img/tennis-court-1846813_1280.png")
  /*bg.draw(ctx, "img/tennis-1605799_1280.png")*/
  //ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  
  player1.draw(ctx)
  player2.draw(ctx)

  ball.draw(ctx)

  ctx.fillStyle = "gold";
  ctx.font = "30px Arial";
  ctx.fillText("ATP Tour", 20, 40); 

  // TODO: draw the score
}

function updateEverything(){
  //bg.update()
  player1.update()
  player2.update()
  ball.update()
  if (checkCollisionPlayer1(ball, player1)) {
    ball.vx *= -1
  }
  if (checkCollisionPlayer2(ball, player2)) {
    ball.vx *= -1
  }
  let looserNb = getLooser()
  if (looserNb) {
    // TODO: update the score and replace the ball
  }
}

function checkCollisionPlayer1(ball, player1) {
  return 0 < -(player1.x+player1.width) + ball.x 
    && -(player1.x+player1.width) + ball.x < ball.radius 
    && player1.top() < ball.y 
    && ball.y < player1.bottom()
}

function checkCollisionPlayer2(ball, player2) {
  return 0 < player2.x - ball.x 
    && player2.x - ball.x < ball.radius 
    && player2.top() < ball.y 
    && ball.y < player2.bottom()
}

function getLooser() {
  // TODO
  return undefined // No looser
  return 1 // Player 1 lost
  return 2 // Player 2 lost
}

// ball.move()

window.onkeydown = function(event) {
  switch (event.keyCode) {
    case 38: // up (arrow)
    player2.moveUp();
    break;
    case 40: // down (arrow)
    player2.moveDown();
    break;
    /*     case 39: // right
    player1.x+=10;
      break;
      case 37: // left
      player1.x-=10;
      break; */
      
      
      case 87: // up (W)
      player1.moveUp();
      break;
      case 83: //down (S)
      player1.moveDown();
      break;
/*     case 68: //
      player2.x+=10;
      break;
    case 65: //
      player2.x-=10;
      break; */
  }
  window.onkeyup = function(event) {
    switch (event.keyCode) {
      case 38: // up (arrow)
        player2.stop();
        break;
      case 40: // down (arrow)
        player2.stop();
        break;
      case 87: // up (W)
        player1.stop();
        break;
      case 83: //down (S)
        player1.stop();
        break;
    }
  }
  console.log(event.keyCode)
};