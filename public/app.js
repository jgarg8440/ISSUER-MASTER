// Select all elements with the class "open-close"
const openCloseButtons = document.querySelectorAll(".open-close");

// Add a click event listener to each button
openCloseButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.innerHTML === "Open") {
            btn.innerHTML = "Close";
            btn.style.backgroundColor = "red";
        } 
    });
});
