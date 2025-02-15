document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("register-form");
    const loginForm = document.getElementById("login-form");
    const errorMessage = document.getElementById("error-message");

    // Show error message
    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = "block";
        setTimeout(() => {
            errorMessage.style.display = "none";
        }, 3000);
    }

    // Handle Registration
    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const fullName = document.getElementById("reg-fullname").value.trim();
        const email = document.getElementById("reg-email").value.trim();
        const password = document.getElementById("reg-password").value.trim();

        if (!fullName || !email || !password) {
            showError("All fields are required.");
            return;
        }

        if (!/^\S+@\S+\.\S+$/.test(email)) {
            showError("Enter a valid email address.");
            return;
        }

        if (password.length < 6) {
            showError("Password must be at least 6 characters long.");
            return;
        }

        alert("Registration Successful!");
        registerForm.reset();
    });

    // Handle Login
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("login-email").value.trim();
        const password = document.getElementById("login-password").value.trim();

        if (!email || !password) {
            showError("Email and Password are required.");
            return;
        }

        if (!/^\S+@\S+\.\S+$/.test(email)) {
            showError("Enter a valid email address.");
            return;
        }

        alert("Login Successful!");
        loginForm.reset();
    });
});
