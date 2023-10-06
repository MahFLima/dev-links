const btn = document.querySelector(".btn");
const html = document.querySelector("html");

btn.addEventListener("click", () => {
    html.classList.toggle("light")
})