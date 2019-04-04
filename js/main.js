var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width
const CANVAS_HEIGHT = canvas.height

let score = new Score()
let player1 = new Player(0, 250, 75, 80, 1)
let player2 = new Player(CANVAS_WIDTH-75, 250, 75, 80, 2)
let bg = new Background()
let ball = new Ball()

function animation(){
  updateEverything()
  drawEverything(ctx); 
  window.requestAnimationFrame(animation)
}

animation()

function drawEverything(ctx){
  //bg.draw(ctx, "./img/tennis-court-1846813_1280.png")
  bg.draw(ctx, "img/tennis_AF.png")

  player1.draw(ctx, 'img/Raq_esq.png')
  player2.draw(ctx, 'img/Raq_Dta.png')

  ball.draw(ctx)


  // TODO: draw the score
  score.draw(ctx)
}

function updateEverything(){

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
    // TODO: update the score and replace the ball
  if (looserNb === 1  ) {
    ball.x = CANVAS_WIDTH/2;
    ball.y = CANVAS_HEIGHT/2;
    ball.vx = 0;
    ball.vy = 0;
    ball.update()
    score.increaseScore(2) // Player 1 lost 
  }
  if (looserNb === 2) {
    ball.x = CANVAS_WIDTH/2;
    ball.y = CANVAS_HEIGHT/2;
    ball.vx = 0;
    ball.vy = 0;
    ball.update()
    score.increaseScore(1) // Player 2 lost 
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
    && player2.angleSpeed !== 0

}

function getLooser() {
  // TODO
  if(ball.x < 0){
    return 1
  } // Player 1 lost
  if (ball.x > CANVAS_WIDTH){
    return 2
  } //Player 2 lost 
  else return undefined // No looser
}

window.onkeydown = function(event) {
  switch (event.keyCode) {
    // TODO: shoot when D is pressed

    case 37: // left (arrow)
      player2.shoot();
      break;
    case 38: // up (arrow)
      player2.moveUp();
      break;
    case 40: // down (arrow)
      player2.moveDown();
      break;
    case 87: // up (W)
      player1.moveUp();
      break;
    case 83: //down (S)
      player1.moveDown();
      break;
    case 32: // space
      if (ball.isStopped())
        ball.launch();
      break;
    /*     case 39: // right
    player1.x+=10;
      break;
      case 37: // left
      player1.x-=10;
      break; */
      
      
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