let addBtn = document.getElementById("add-btn");
let dltBtn = document.getElementById("delete-btn");
let crBtn = document.getElementById("clear-btn");
let forImg = document.getElementById("imgs"); 

let images = [];

addBtn.addEventListener("click", add);
dltBtn.addEventListener("click", dlt);
crBtn.addEventListener("click", clr);

function add() {
    let img = document.createElement("img");
    img.src = "data:image/jpeg;base64,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";
    img.alt = "Image";
    forImg.appendChild(img);
    images.push(img);
}

function dlt() {
    let lastImg = images.pop();
    forImg.removeChild(lastImg);
}

function clr() {
    forImg.innerHTML = "";
    images = [];
}