let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");
let cross = document.querySelectorAll("i");

btn.addEventListener("click", () => {
    if (inp.value.trim() !== "") {
        let li = document.createElement("li");
        li.innerText = inp.value;

        let cross = document.createElement("i");
        cross.classList.add("fa-solid", "fa-xmark");
        cross.style.cursor = "pointer";

        li.appendChild(cross);
        ul.appendChild(li);
        inp.value = "";
    }
});

ul.addEventListener("click", function (event) {
    if (event.target.tagName == "I") {
        removItm = event.target.parentElement;
        removItm.remove();
    }
});

