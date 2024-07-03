let parameters = {
    count : false,
    letters : false,
    numbers : false,
    special : false
}

const passwordInput = document.getElementById("password"),
        toggleBtn = document.getElementById("toggle");


passwordInput.oninput = () => {
    parameters.count = passwordInput.value.length >= 8 ? true : false;
    parameters.letters = (/[A-Za-z]/.test(passwordInput.value)) ? true : false;
    parameters.numbers = (/[0-9]/.test(passwordInput.value)) ? true : false;
    parameters.special = (/[!\"$%&/()=?@~`\\.\';:+=^*_-]/.test(passwordInput.value)) ? true : false;

    let parameter = Object.values(parameters).filter(prams => prams);
    const strengthBar = document.getElementById("strength-bar");
    strengthBar.innerHTML = "";
    parameter.forEach(() => {
        const span = document.createElement("span");
        span.classList.add("strength");
        strengthBar.appendChild(span);
        
    }) 
    const spanRef = document.querySelectorAll(".strength");
    const msg = document.getElementById("msg");
    for(let i = 0; i < parameter.length; i++) {
        switch (parameter.length - 1) {
            case 0:
                spanRef[i].style.backgroundColor = "#ff3e36";
                msg.innerHTML = "Your password is very weak";
                msg.style.color = "#ff3e36";
                break;
            case 1:
                spanRef[i].style.backgroundColor = "#ff691f";
                msg.innerHTML = "Your password is weak";
                msg.style.color = "#ff691f";
                break;
            case 2:
                spanRef[i].style.backgroundColor = "#ffda36";
                msg.innerHTML = "Your password is good";
                msg.style.color = "#ffda36";
                break;
            case 3:
                spanRef[i].style.backgroundColor = "#0be881";
                msg.innerHTML = "Your password is strong";
                msg.style.color = "#0be881";
                break;
        }
    }
}

toggleBtn.onclick = () => {
    const correntAttributeName = passwordInput.getAttribute("type"),
    eyeIcon = document.querySelector("#toggle img");
    if(correntAttributeName === "password") {
        passwordInput.setAttribute("type", "text");
        eyeIcon.src = "open.jpg";
    } else {
        passwordInput.setAttribute("type", "password");
        eyeIcon.src = "close.jpg";
    }
}
