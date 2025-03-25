document.getElementById('welcome-text').addEventListener('click', function() {
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
    const audio = document.getElementById('background-music');
    audio.play();
    typeWord();
});

const words = ["X_x", "x_X", "discord @guwtted"];
let wordIndex = 0;
let letterIndex = 0;
const typingText = document.getElementById("typing-text");

function typeWord() {
    if (letterIndex < words[wordIndex].length) {
        typingText.textContent += words[wordIndex].charAt(letterIndex);
        letterIndex++;
        setTimeout(typeWord, 150);
    } else {
        setTimeout(removeWord, 1000);
    }
}

function removeWord() {
    if (letterIndex > 0) {
        typingText.textContent = words[wordIndex].substring(0, letterIndex);
        letterIndex--;
        setTimeout(removeWord, 100);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        letterIndex = 0;
        typingText.textContent = "";
        setTimeout(typeWord, 500);
    }
}
