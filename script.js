document.addEventListener("DOMContentLoaded", function () {
    const admissionForm = document.getElementById("admissionForm");
    const loginForm = document.getElementById("loginForm");

    admissionForm.addEventListener("submit", function (event) {
        event.preventDefault();
        // Validation logic for the admission form goes here
        // ...

        alert("Admission form submitted successfully!");
        admissionForm.reset();
    });

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        // Validation logic for the login form goes here
        // ...

        alert("Logged in successfully!");
        loginForm.reset();
    });
});
