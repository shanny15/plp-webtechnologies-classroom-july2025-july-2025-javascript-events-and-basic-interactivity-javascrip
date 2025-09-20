// ===============================
// Part 1: Basic Event Handling
// ===============================
const clickBtn = document.getElementById("clickBtn");
const clickMessage = document.getElementById("clickMessage");

clickBtn.addEventListener("click", () => {
    clickMessage.textContent = "Button was clicked!";
});

// ===============================
// Part 2: Interactive Features
// ===============================

// Feature 1: Light/Dark Mode Toggle
const toggleTheme = document.getElementById("toggleTheme");
toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Feature 2: Counter
let count = 0;
const counterDisplay = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");

incrementBtn.addEventListener("click", () => {
    count++;
    counterDisplay.textContent = count;
});

decrementBtn.addEventListener("click", () => {
    count--;
    counterDisplay.textContent = count;
});

// ===============================
// Part 3: Form Validation
// ===============================
const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", function(event) {
    event.preventDefault(); // prevent form submission
    let valid = true;

    // Name Validation
    const name = document.getElementById("name");
    const nameError = document.getElementById("nameError");
    if(name.value.trim() === "") {
        nameError.textContent = "Name cannot be empty";
        valid = false;
    } else {
        nameError.textContent = "";
    }

    // Email Validation
    const email = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email.value.trim())) {
        emailError.textContent = "Enter a valid email";
        valid = false;
    } else {
        emailError.textContent = "";
    }

    // Password Validation
    const password = document.getElementById("password");
    const passwordError = document.getElementById("passwordError");
    if(password.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        valid = false;
    } else {
        passwordError.textContent = "";
    }

    // If all validations pass
    if(valid) {
        alert("Form submitted successfully!");
        signupForm.reset(); // reset the form
    }
});
