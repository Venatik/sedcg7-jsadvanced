const saySomething = requre("./sayService.js")
import { addText, appendText, readText } from "./textService.js";

// console.log(saySomething);
// console.log(saySomething.helloFunc("Stefan"));
// console.log(saySomething.byeFunc("Stefan"));

addText("Hello, this is the first line of text.");

appendText("\n\nThis is another line of text.");
appendText("\nThis is a third line of text.");

console.log(readText());

// textService.removeText();

// textService.deleteFile();