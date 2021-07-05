const button = document.getElementById("btn");
const color = document.querySelector(".color");



button.addEventListener("click", () => {
    let newColor = generateColor();
    document.body.style.backgroundColor = newColor;
    color.textContent = newColor;
})

function randomColor() {
    return Math.floor(Math.random() * numberColor.length)
}

const numberColor = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"
]

function generateColor() {
    let resultColor = "#";
    for (let index = 0; index < 6; index++) {
        resultColor += numberColor[randomColor()]
    }
    return resultColor


}