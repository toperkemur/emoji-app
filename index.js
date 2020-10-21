const myEmojis = ["👽", "👺", "🕶"];

const emojiContainer = document.getElementById("emoji-container");
const pushButton = document.getElementById("pushButton");
const unshiftButton = document.getElementById("unshiftButton");
const popButton = document.getElementById("popButton");
const shiftButton = document.getElementById("shiftButton");
const emojiInput = document.getElementById("emoji-input");

function renderEmoji() {
    emojiContainer.innerHTML = "";
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement("span");
        emoji.innerHTML = myEmojis[i];
        emojiContainer.appendChild(emoji);
    }
}

renderEmoji();

pushButton.addEventListener("click", function() {
    emojiInput.value = "";
    myEmojis.push(emojiInput.value);
    emojiContainer.textContent = "";
    renderEmoji();
})

unshiftButton.addEventListener("click", function() {
    emojiInput.value = "";
    myEmojis.unshift(emojiInput.value);
    emojiContainer.textContent = "";
    renderEmoji();
})

popButton.addEventListener("click", function() {
    emojiInput.value = "";
    myEmojis.pop(emojiInput.value);
    emojiContainer.textContent = "";
    renderEmoji();
})

shiftButton.addEventListener("click", function() {
    emojiInput.value = "";
    myEmojis.shift(emojiInput.value);
    emojiContainer.textContent = "";
    renderEmoji();
})