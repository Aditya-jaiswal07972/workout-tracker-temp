document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("registerForm");
    const loginForm = document.getElementById("loginForm");

    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Registration successful!");
            window.location.href = "login.html";
        });
    }

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Login successful!");
            window.location.href = "dashboard.html"; // Redirect to dashboard after login
        });
    }
});
