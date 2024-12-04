document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      validateLoginForm();
    });
  }

  if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
      e.preventDefault();
      validateRegisterForm();
    });
  }

  function validateLoginForm() {
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    if (!validateEmail(email.value)) {
      email.classList.add("is-invalid");
    } else {
      email.classList.remove("is-invalid");
    }

    if (password.value.trim() === "") {
      password.classList.add("is-invalid");
    } else {
      password.classList.remove("is-invalid");
    }
  }

  function validateRegisterForm() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    if (name.value.trim() === "") {
      name.classList.add("is-invalid");
    } else {
      name.classList.remove("is-invalid");
    }

    if (!validateEmail(email.value)) {
      email.classList.add("is-invalid");
    } else {
      email.classList.remove("is-invalid");
    }

    if (password.value.length < 8) {
      password.classList.add("is-invalid");
    } else {
      password.classList.remove("is-invalid");
    }

    if (password.value !== confirmPassword.value) {
      confirmPassword.classList.add("is-invalid");
    } else {
      confirmPassword.classList.remove("is-invalid");
    }
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});
