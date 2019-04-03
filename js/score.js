class Score {
    constructor() {
        this.playerNbWhoServing = 1
        this.nbOfSetsPlayer1 = 0
        this.nbOfSetsPlayer2 = 0
        this.nbOfGamesPlayer1 = 0
        this.nbOfGamesPlayer2 = 0
        this.nbOfPointsPlayer1 = 0
        this.nbOfPointsPlayer2 = 0
    }
    getScore(playerNb) {
        let emoji = ""
        if (playerNb === this.playerNbWhoServing) 
            emoji = "🎾"
        if (playerNb === 1) 
            return `${this.nbOfSetsPlayer1} - ${this.nbOfGamesPlayer1} - ${this.nbOfPointsPlayer1} ${emoji}`
        else
            return `${this.nbOfSetsPlayer2} - ${this.nbOfGamesPlayer2} - ${this.nbOfPointsPlayer2} ${emoji}`
    }
    increaseScore(playerNb) {
        
        if (playerNb === 1 && this.nbOfGamesPlayer1 === 6){
            this.nbOfSetsPlayer1++
            this.nbOfGamesPlayer1 = 0;
            this.nbOfPointsPlayer1 = 0;
        } else if (playerNb === 2 && this.nbOfGamesPlayer2 === 6){
            this.nbOfSetsPlayer2++
            this.nbOfGamesPlayer2 = 0;
            this.nbOfPointsPlayer2 = 0;
        }
        else if (playerNb === 1 && this.nbOfPointsPlayer1 === 40){
            this.nbOfGamesPlayer1++ 
            this.nbOfPointsPlayer1 = 0;
        }
        else if(playerNb === 2 && this.nbOfPointsPlayer2 === 40){
            this.nbOfGamesPlayer2++
            this.nbOfPointsPlayer2 = 0;
        }
        else if (playerNb === 1 && this.nbOfPointsPlayer1 === 30) {
            this.nbOfPointsPlayer1 += 10
        }
        else if (playerNb === 2 && this.nbOfPointsPlayer2 === 30) {
            this.nbOfPointsPlayer2 +=10
        }
        else if (playerNb === 1) {
            this.nbOfPointsPlayer1 += 15
        }
        else if (playerNb === 2) {
            this.nbOfPointsPlayer2 += 15
        }
    }
 
}

/* 
if(nbOfPointsPlayer1 === 40 && nbOfPointsPlayer2 !== 40) {
    console.log('game');
  }
    
  if(nbOfPointsPlayer1 == 0) {
    nbOfPointsPlayer1 = 15;
  }
  else if(nbOfPointsPlayer1 == 15) {
    nbOfPointsPlayer1 = 30;
  }
  else {
    nbOfPointsPlayer1 = 40;
  }
  
  if( nbOfPointsPlayer1 == 40 && nbOfPointsPlayer2 == 40) {
    console.log('deuce');
  }


  
} */