
export class Game {
    randomWord: string;
    guessedLetters: string[];
    livesRemaining: number;

    static NUMBER_OF_LIVES = 7;


    constructor(){
        this.randomWord = "orange";
        this.guessedLetters = [];
        this.livesRemaining = this.GetLivesRemaining();
    }

    GetRedactedWord(joiner: string): string {
        return this.randomWord
            .split("")
            .map((letter) => this.guessedLetters.indexOf(letter) > -1 ? letter : "_")
            .join(joiner);
    }

    IsInPlay() {
        return !this.IsLost() && !this.IsWon();
    }

    GetIncorrectGuesses() {
        return this.guessedLetters.filter((letter) => this.randomWord.indexOf(letter) === -1).length;
    }

    GetLivesRemaining(): number {
        return(Game.NUMBER_OF_LIVES - this.GetIncorrectGuesses());
    }

    IsWon() {
        // redacted/displayed word is the same as the stored word
        return this.GetRedactedWord("") === this.randomWord;
    };

    IsLost() {
        // number of incorrect guesses = number of lives
        return this.GetIncorrectGuesses() === Game.NUMBER_OF_LIVES;
    };
}

class Guess {

}

