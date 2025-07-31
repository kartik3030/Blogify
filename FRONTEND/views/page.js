let deleteBtn = document.querySelector(".delete-btn")
let askDiv = document.querySelector(".ask-div")
deleteBtn.addEventListener("click", () => {
    askDiv.classList.remove("hidden");
})

let cancelBtn = document.querySelector(".cancel")
cancelBtn.addEventListener("click", () => {
    askDiv.classList.add("hidden")
})

let continueBtn = document.querySelector(".continue")
continueBtn.addEventListener("click", () => {
    const id = continueBtn.getAttribute("data-id");
    fetch(`/blogify/delete/${id}`, {
        method: "DELETE",
    })
        .then(res => {
            if (res.ok) {
                window.location.href = "/blogify/writer";
            } else {
                return res.text().then(text => { throw new Error(text) });
            }
        })
});

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