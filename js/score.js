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
    revertPlayers() {
        this.changeServer()

        let temp = this.nbOfSetsPlayer1 
        this.nbOfSetsPlayer1 = this.nbOfSetsPlayer2
        this.nbOfSetsPlayer2 = temp

        temp = this.nbOfGamesPlayer1 
        this.nbOfGamesPlayer1 = this.nbOfGamesPlayer2
        this.nbOfGamesPlayer2 = temp

        temp = this.nbOfPointsPlayer1 
        this.nbOfPointsPlayer1 = this.nbOfPointsPlayer2
        this.nbOfPointsPlayer2 = temp
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
        if (playerNb === 2) {
            this.revertPlayers()
            this.increaseScore(1)
            this.revertPlayers()
            return // Stop the function
        }
        else if (playerNb === 1) {
            if (this.nbOfPointsPlayer1 === "40a"){
                this.increaseNbOfGamesPlayer1()
            }
            else if (this.nbOfPointsPlayer1 === 40){
                if (this.nbOfPointsPlayer2 === "40a") {
                    this.nbOfPointsPlayer2 = 40
                }
                else if (this.nbOfPointsPlayer2 === 40) {
                    this.nbOfPointsPlayer1 = "40a"
                }
                else {
                    this.increaseNbOfGamesPlayer1()
                }
            }
            else if (this.nbOfPointsPlayer1 === 30) {
                this.nbOfPointsPlayer1 += 10
            }
            else {
                this.nbOfPointsPlayer1 += 15
            }
        }
        // 5 - 6 
    }
    increaseNbOfGamesPlayer1(){
        this.changeServer()
        this.nbOfGamesPlayer1++
        this.nbOfPointsPlayer1 = 0;
        this.nbOfPointsPlayer2 = 0;
        if (this.nbOfGamesPlayer1 === 7) {
            this.increaseNbOfSetsPlayer1()
        }
        if (this.nbOfGamesPlayer1 === 6) {
            if (this.nbOfGamesPlayer2 < 5) {
                this.increaseNbOfSetsPlayer1()
            }
        }
    }
    increaseNbOfSetsPlayer1(){
        this.nbOfSetsPlayer1++
        this.nbOfGamesPlayer1 = 0;
        this.nbOfGamesPlayer2 = 0;
        this.nbOfPointsPlayer1 = 0;
        this.nbOfPointsPlayer2 = 0;
        if (this.nbOfSetsPlayer1 === 3) {
            this.nbOfSetsPlayer1 = 0;
            this.nbOfSetsPlayer2 = 0;
            this.nbOfGamesPlayer1 = 0;
            this.nbOfGamesPlayer2 = 0;
            this.nbOfPointsPlayer1 = 0;
            this.nbOfPointsPlayer2 = 0;
        }


        let sumSets = this.nbOfSetsPlayer1 + this.nbOfSetsPlayer2
        this.playerNbWhoServing = sumSets%2 + 1
    }
    changeServer() {
        this.playerNbWhoServing = 3 - this.playerNbWhoServing // 2 => 1 and 1 => 2
    }
    draw(ctx) {
        ctx.fillStyle = "black";
        ctx.font = "22px Ubuntu"
        //ctx.fillText( "Game", 75, 25)
        //ctx.fillText( "Set",  125, 25)
        ctx.fillText("P1: "+score.getScore(1), 20, 50)
        ctx.fillText("P2: "+score.getScore(2), 540, 50)
    }
}
