
document.querySelector(".submit").addEventListener("click", (e) => {
    e.preventDefault()
    const email = document.querySelector(".email").value
    const password = document.querySelector(".pass").value

    fetch("/verify", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    })
        .then(res => res.text())
        .then(data => {
            if (data === "success") {
                window.location.href = "/blogify/writer"
            } else {
                alert("Invalid email or password")
            }
        })
})

