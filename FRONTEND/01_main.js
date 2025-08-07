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

// category images
 let imgTag = document.querySelector(".img")
    let right = document.querySelector(".right-arrow")
    let left = document.querySelector(".left-arrow")


    let img2 = "https://wallpapers.com/images/hd/dark-city-4k-3gzv7hgd8xp1ph2j.jpg"
    let img3 = "https://i.pinimg.com/736x/04/cb/c0/04cbc0f02df7957fc77b6c5515c32111--room-goals-pictures.jpg"
    let img4 = "https://tse3.mm.bing.net/th/id/OIP.GvntOdvz80txbfbW4rz2kAHaEo?rs=1&pid=ImgDetMain&o=7&rm=3"
    let img5 = "https://etimg.etb2bimg.com/photo/81478822.cms"


    let imgArr = [img2, img3, img4, img5]
    let current = 0

    right.addEventListener("click", () => {
        current++;
        if (current >= imgArr.length) {
            current = 0; // Loop back to first image
        }
        imgTag.src = imgArr[current];
    });

    left.addEventListener("click", () => {
        current--;
        if (current < 0) {
            current = imgArr.length - 1; // Loop to last image
        }
        imgTag.src = imgArr[current];
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










