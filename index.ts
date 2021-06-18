import {Application} from "./controllers";
import {Game} from "./models";
import {UserInterface} from "./views";

const game = new Game();
const ui = new UserInterface(game);

const App = new Application(console, game, ui);

App.StartGame();