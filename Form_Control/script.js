function ch() {
  var name = document.getElementById("name").value;
  var mob = document.getElementById("mob").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var pincode = document.getElementById("pincode").value;
  var aadhar = document.getElementById("aadhar").value;

  var pname = /^[A-Za-z ]{3,30}$/;
  var pmob = /^[0-9]{10}$/;
  var pemail = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
  var ppincode = /^[0-9]{6}$/;
  var paadhar = /^[0-9]{12}$/;

  function validateField(id, pattern) {
    var field = document.getElementById(id);
    if (!pattern.test(field.value) || field.value.length === 0) {
      field.style.border = "2px solid red";
    } else {
      field.style.border = "1px solid #ccc";
    }
  }

  validateField("name", pname);
  validateField("mob", pmob);
  validateField("email", pemail);
  validateField("pincode", ppincode);
  validateField("aadhar", paadhar);

  // Password validation
  var passwordField = document.getElementById("password");
  var passwordCheck = document.getElementById("passwordcheck");
  var passwordStrength = 0;
  var missingInPassword = [];

  if (password.length >= 8) passwordStrength++;
  else missingInPassword.push("at least 8 characters");

  if (/[A-Z]/.test(password)) passwordStrength++;
  else missingInPassword.push("uppercase letter");

  if (/[a-z]/.test(password)) passwordStrength++;
  else missingInPassword.push("lowercase letter");

  if (/[0-9]/.test(password)) passwordStrength++;
  else missingInPassword.push("number");

  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) passwordStrength++;
  else missingInPassword.push("special character");

  var strengthText = "";
  var strengthColor = "";
  if (passwordStrength == 0) {
    passwordField.style.border = "2px solid red";
    strengthText = "Weak";
    strengthColor = "red";
  } else if (passwordStrength < 3) {
    strengthText = "Weak";
    passwordField.style.border = "2px solid red";
    strengthColor = "red";
  } else if (passwordStrength < 5) {
    strengthText = "Moderate";
    passwordField.style.border = "2px solid orange";
    strengthColor = "orange";
  } else {
    strengthText = "Strong";
    passwordField.style.border = "2px solid green";
    strengthColor = "green";
  }

  if (missingInPassword.length > 0) {
    passwordCheck.innerHTML = `<span style="color:${strengthColor}">${strengthText}</span> ${missingInPassword.join(
      ", "
    )}`;
  } else {
    passwordCheck.innerHTML = `<span style="color:${strengthColor}">${strengthText}</span>`;
  }
}

// Add event listeners to all input fields
document.addEventListener("DOMContentLoaded", function () {
  var inputs = document.querySelectorAll(
    'input[type="text"], input[type="email"], input[type="password"], input[type="tel"]'
  );
  inputs.forEach(function (input) {
    input.addEventListener("input", ch);
  });
});
