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
let articleClick = document.querySelectorAll(".article-click")
articleClick.forEach(section => {
    section.addEventListener("click", () => {
        const id = section.getAttribute("data-id");
        window.location.href = `/blogify/page/${id}`
    })
});
