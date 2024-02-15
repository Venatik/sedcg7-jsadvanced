// file system access
const { addText, appendText, readText } = require('./textService');
let file = "text.txt"

export function addText(text) {
    writeFileSync(file, text, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log(`The file was saved.`);
    });
}
export function appendText(text) {
    appendFileSync(file, text, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log(`The file was updated.`);
    });
}
export function readText() {
    return readFileSync(file, { encoding: "utf-8" });
}
export function removeText() {
    return truncateSync(file, 0);
}
export function deleteFile() {
    return unlinkSync(file, 0);
}