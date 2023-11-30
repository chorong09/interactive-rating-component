

const btns = document.querySelectorAll("button");

btns.forEach((button, index1) => {
    btn.addEventListener("click", () => {
        btns.forEach((btn, index2) => {
            index1 >= index2 ? btn.classList.add("active") : btn.classList.remove("active");
        });
    });
});