import {enumCard} from './enumCard'
export default class statistics {
    
    constructor(thePlayersGame){
        this.playersGame = thePlayersGame;
        this.turnsCounter = -1;
        this.singleCardPlayers = [];
        this.htmlDivsPlayers = new Array(this.playersGame.length);
        // this.gameClock = new clock();
        // this.statisticsComponent;
        // gameClock.run();
    }
    /*
    initialStatisticsTitle() {
        document.getElementById("sidebar").insertBefore(gameName, document.getElementById(enumCard.dives.STATISTICS));
    }
    */

/*
     SetStatistics() {
         for (let i = 0; i < htmlDivsPlayers.length; ++i) {
             htmlDivsPlayers[i] = document.createElement("div");
             htmlDivsPlayers[i].setAttribute("id", Object.keys(enumCard.enumPlayer)[i]);
             document.getElementById(enumCard.dives.STATISTICS).appendChild(htmlDivsPlayers[i]);
         }
     }
*/

     updateStatistics() {
        let massages = [];
        this.turnsCounter++;
         massages[0] = "\n" + "Turns played totally :" + this.turnsCounter;
         for (let i = 0; i < this.playersGame.length; ++i) {
             this.singleCardPlayers[i] = this.playersGame[i].getSingleCardCounter();
             let playerLocal = "\n\n" + Object.keys(enumCard.enumPlayer)[i] + ":\n";
             playerLocal += "Turns played: " + this.playersGame[i].getTurnsPlayed() + "\n";
             playerLocal += "Single cards times: " + this.playersGame[i].getSingleCardCounter() + "\n";
             playerLocal += "Average turn time: " + Math.round(this.playersGame[i].getAverageTimePlayed() * 100) / 100 + " sec";
             massages.push(playerLocal);
         }
         // this.statisticsComponent.changeMassage(massages);
         this.manager.statisticsMassages = massages;
     }

     setManager(statisticsManager) {
         this.manager = statisticsManager;
     }
}