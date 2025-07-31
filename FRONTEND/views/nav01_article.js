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

// latest article animation
const latestArticle = document.querySelector(".latest-article")
window.addEventListener("scroll", () => {
    const position = latestArticle.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100 && position > 0) {
        latestArticle.classList.add("animate");
    } else {
        latestArticle.classList.remove("animate");
    }
})

// recent article animation
let recentArticle = document.querySelector(".recent-article")
window.addEventListener("scroll", () => {
    let position = recentArticle.getBoundingClientRect().top
    let screenSize = window.innerHeight

    if (position < screenSize - 100 && position > 0) {
        recentArticle.classList.add("animate")
    } else {
        recentArticle.classList.remove("animate")
    }

})

let articleClick = document.querySelectorAll(".article-click")
articleClick.forEach(section => {
    section.addEventListener("click", () => {
        const id = section.getAttribute("data-id");
        window.location.href = `/blogify/page/${id}`
    })
});

