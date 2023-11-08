const button = document.getElementsByClassName("btn");
const color = document.getElementsByClassName("color-box");
const cards = document.getElementById("container");
const inputText = document.getElementsByClassName("myinput");


const colorCards = 30;
for (let butn of button) {
    butn.addEventListener("click", () => {
        for (let elem of color) {
            const rgb = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
            elem.style.backgroundColor = rgb;
            elem.nextElementSibling.value = rgb;
        }


    })
}
function createCards() {
    for (let i = 0; i < colorCards; i++) {
        const rgb = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
        const li = document.createElement('li');
        cards.append(li);
        li.innerHTML = `<div class="color-box"></div>
            <input type='text' class="myinput" value='${rgb}' readonly/>`;
        li.classList = "info-box";
        li.children[0].style.backgroundColor = rgb;
    }
}
createCards();

/// copied text
for (let text of inputText) {
    let code;
    text.addEventListener('click', () => {
        navigator.clipboard.writeText(text.value);
        code = text.value;
        console.log(code);
        text.value = "Copied Text !!";
        setTimeout(() => {
            text.value = code;
        }, 500)
    })

}