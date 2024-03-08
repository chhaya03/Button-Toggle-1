let mode = document.querySelector("#mode");
let body = document.querySelector("body");
let currentMode = "light";  // dark



mode.addEventListener("click", () => {

    if (currentMode === "light") {
        currentMode = "dark";
        body.style.backgroundColor = 'black';
    }

    else {
        currentMode = "light";
        body.style.backgroundColor = 'white';
    }

    console.log(currentMode);
});
