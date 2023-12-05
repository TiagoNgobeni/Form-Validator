function validateForm() {
    // Get form and input values
    var form = document.getElementById("myForm");
    var firstName = form.elements["first-name"].value;
    var lastName = form.elements["last-name"].value;
    var email = form.elements["user-mail"].value;
    var password = form.elements["pass-code"].value;

    // Reset previous error messages
    document.getElementById("FirstNameErrorMessage").textContent = "";
    document.getElementById("LastNameErrorMessage").textContent = "";
    document.getElementById("UserEmailErrorMessage").textContent = "";
    document.getElementById("PasswordErrorMessage").textContent = "";

    // Check if any required input field is empty
    if (firstName === "") {
        document.getElementById("FirstNameErrorMessage").textContent = "First Name cannot be empty";
    }

    if (lastName == "") {
        document.getElementById("LastNameErrorMessage").textContent = "Last Name cannot be empty.";
    }

    if (email === "") {
        document.getElementById("UserEmailErrorMessage").textContent = "Email Address cannot be empty";
    }
    
    if (password === "") {
        document.getElementById("PasswordErrorMessage").textContent = "Password cannot be empty.";
    }

    // Check if the email is incorrectly formatted
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email !== "" && !emailRegex.test(email)) {
      document.getElementById("UserEmailErrorMessage").textContent = "Incorrect email format.";
    }
  }