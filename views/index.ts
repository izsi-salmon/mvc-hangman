const ask = require('prompt-sync')();
import {Game} from "../models";

export class UserInterface {
    game: Game;


    constructor(game: Game) {
        this.game = game;
    }

    WelcomeUser() {
        console.log("Welcome to Hangman!");
        this.DisplayTurnResult();
    };

    AskForGuess() {
        return ask("Enter your guess... ");
    };

    DisplayTurnResult() {
        console.log(`You have ${this.game.livesRemaining} lives.`);
        console.log(this.game.GetRedactedWord(" "));
    };
}