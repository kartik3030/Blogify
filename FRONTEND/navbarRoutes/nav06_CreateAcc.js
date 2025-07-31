let submit = document.querySelector(".submit")

submit.addEventListener("click", (event) => {
    let userName = document.querySelector(".name").value
    let email = document.querySelector(".email").value
    let pass = document.querySelector(".createPass").value
    let confirmPass = document.querySelector(".confirmPass").value

    //checking input feilds
    if (!userName || !email || !pass || !confirmPass) {
        alert("Please fill all details");
        event.preventDefault(); // prevent form submission
        return
    }

    //password verification
    if (pass !== confirmPass) {
        alert("Passwords do not match");
        event.preventDefault(); // prevent form submission
        return
    }

    //password validation
    if (pass.length < 8) {
        alert("Please create a strong password")
        event.preventDefault();
        return
    }

    if (!/[A-Z]/.test(pass) || !/[a-z]/.test(pass)) {
        alert("Password must contain at least one uppercase and one lowercase letter");
        event.preventDefault();
        return
    }
})
