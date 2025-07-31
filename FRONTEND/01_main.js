// INDEX.html

// menu btn
let menuBtn = document.querySelector(".menu-btn")
let menuList = document.querySelector(".menu-list")
menuBtn.addEventListener("click", () => {
    menuList.classList.toggle("hidden")
})
// Search icon
let searchBox = document.querySelector(".search");
let searchIcon = document.querySelector(".search-icon");

searchIcon.addEventListener("click", () => {
    searchBox.classList.toggle("hidden");
    if (!searchBox.classList.contains("hidden")) {
        searchBox.focus();
    }
});

searchBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        let text = searchBox.value.toLowerCase();
        let allElements = document.querySelectorAll("body *");

        for (let el of allElements) {
            if (el.children.length === 0 && el.innerText.toLowerCase().includes(text)) {
                el.scrollIntoView({ behavior: "smooth", block: "center" });
                break;
            }
        }
    }
});

// Animation for Best Week text
const bestWeek = document.querySelector(".best-week");
window.addEventListener("scroll", () => {
    const position = bestWeek.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100 && position > 0) {
        bestWeek.classList.add("animate");
    } else {
        bestWeek.classList.remove("animate"); // remove when out of view
    }
});

// Animation for category text 
const category = document.querySelector(".category");
window.addEventListener("scroll", () => {
    const position = category.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    if (position < screenHeight - 100 && position > 0) {
        category.classList.add("animate");
    } else {
        category.classList.remove("animate"); // remove when out of view
    }
});


let model = document.querySelector(".model")
model.addEventListener("click", () => {
    window.scrollTo({
        top: 600,
        behavior: "smooth"
    })
})

let greenBox = document.querySelector(".green-box")
greenBox.addEventListener("click",()=>{
window.scrollTo({
    top:document.body.scrollHeight,
    behaviour:"smooth"
})
})










