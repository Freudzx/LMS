// Toggle password visibility
const togglePassword = document.querySelector('#togglePassword');
const passwordField = document.querySelector('#password');

togglePassword.addEventListener('click', function () {
    const type = passwordField.type === 'password' ? 'text' : 'password';
    passwordField.type = type;

    this.classList.toggle('bx-show');
    this.classList.toggle('bx-hide');
});

// Form submission logic
const form = document.querySelector("#form");
const errorMessage = document.querySelector("#error-message");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form submission

    const studentnum = form.studentnum.value.trim();
    const password = form.password.value.trim();

    const authenticated = authenticateUser(studentnum, password);

    if (authenticated) {
        window.location.href = "user.html"; // Redirect to dashboard
    } else {
        errorMessage.style.display = "block"; // Show error message
        errorMessage.textContent = "Invalid student number or password.";
    }
});

// Authentication function
function authenticateUser(studentnum, password) {
    return studentnum === "0910848" && password === "password";
}
