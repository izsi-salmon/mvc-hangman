
import { Game } from "../models";
import {UserInterface} from "../views";

type Consoleish = {log: (input: string) => void};

export class Application {
    output: Consoleish;
    game: Game;
    ui: UserInterface;

    constructor(output: Consoleish, game: Game, ui: UserInterface) {
        this.output = output;
        this.game = game;
        this.ui = ui;
    }

    StartGame() {
        // Initialise game state, pick word
        // Welcome message, rules, letters, ammount of lives,
        this.ui.WelcomeUser();

        // Play turn:
        // Ask for guess
        // Evaluate guess, return result
        while(this.game.IsInPlay()){
            this.PlayTurn();
        }

        // End of game, display word if lost, display lives left if won
    };

    GetRandomWord() {

    };

    PlayTurn() {
        const userGuess = this.ui.AskForGuess();
        this.EvaluateGuess(userGuess);
    }

    EvaluateGuess(userGuess: string) {
        // Validate input data
        // Add guess to guessed letters
        this.game.guessedLetters.push(userGuess);
        // Display turn result, return lives left
        this.ui.DisplayTurnResult();
    };
}