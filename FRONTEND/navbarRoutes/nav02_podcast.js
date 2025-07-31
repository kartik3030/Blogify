// menu btn
let menuBtn = document.querySelector(".menu-btn")
let menuList = document.querySelector(".menu-list")
menuBtn.addEventListener("click", () => {
    menuList.classList.toggle("hidden")
})

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

// Animation for heading

let newRelease = document.querySelector(".new-release")
window.addEventListener("scroll", () => {
    // check if text is visible on screen
    let screenPosition = window.innerHeight;
    let textPosition = newRelease.getBoundingClientRect().top
    if (textPosition < screenPosition - 100 && textPosition > 0) {
        newRelease.classList.add("animate")
    } else {
        newRelease.classList.remove("animate")
    }

})

let trendingPodcast = document.querySelector(".trending-podcast")
window.addEventListener("scroll", () => {
    // check if text is visible on screen
    let screenPosition = window.innerHeight;
    let textPosition = trendingPodcast.getBoundingClientRect().top
    if (textPosition < screenPosition - 100 && textPosition > 0) {
        trendingPodcast.classList.add("animate")
    } else {
        trendingPodcast.classList.remove("animate")
    }

})