const button = document.querySelector(".btn");
const image = document.querySelector(".image");
const url = "http://aws.random.cat/meow";


async function fetchHandler() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        image.src = data.file;
    } catch (error) {
        console.log(error);
    }
}

button.addEventListener("click", () => {
    const result = image.complete;
    if (result) {
        fetchHandler()
    }

})



