export { words, getRandomWord };

let words = {
    helloVariants: ["Hello", "Hi", "Hey"],
    goodbyeVariants: ["Goodbye", "Bye", "See ya"]
}

function getRandomWord(wordsArray) {
    return wordsArray[Math.floor(Math.random() * wordsArray.length)];
}