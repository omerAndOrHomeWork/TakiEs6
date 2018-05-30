import {enumCard} from './enumCard'
export default class statistics {
    
    constructor(thePlayersGame){
        this.playersGame = thePlayersGame;
        this.turnsCounter = -1;
        this.singleCardPlayers = [];
    }

     updateStatistics() {
        let messages = [];
        this.turnsCounter++;
         messages[0] = "\n" + "Turns played totally :" + this.turnsCounter;
         for (let i = 0; i < this.playersGame.length; ++i) {
             this.singleCardPlayers[i] = this.playersGame[i].getSingleCardCounter();
             let playerLocal = "\n\n" + Object.keys(enumCard.enumPlayer)[i] + ":\n";
             messages.push(playerLocal);
             playerLocal = "Turns played: " + this.playersGame[i].getTurnsPlayed() + "\n";
             messages.push(playerLocal);
             playerLocal = "Single cards times: " + this.playersGame[i].getSingleCardCounter() + "\n";
             messages.push(playerLocal);
             playerLocal = "Average turn time: " + Math.round(this.playersGame[i].getAverageTimePlayed() * 100) / 100 + " sec";
             messages.push(playerLocal);
         }
         this.manager.statisticsMassages = messages;
     }

     setManager(statisticsManager) {
         this.manager = statisticsManager;
     }
}