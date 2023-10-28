const btn = document.querySelector(".open-close");
btn.addEventListener("click", () => {
    if (btn.innerHTML === "Open") {
        btn.innerHTML = "Close";
        btn.style.backgroundColor = "red";
    } 
});

