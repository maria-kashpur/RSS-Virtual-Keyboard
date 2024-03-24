import View from "./View/view.js";
import { Keys } from "./keyboard/keyboard.js";
import "./style.css";

View.createKeyboardSection();

const keyboard = new Keys();
keyboard.createView();
