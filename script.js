function validateForm() {
    // Validate username
    var username = document.querySelector('input[name="username"]').value;
    if (username.length < 10) {
      alert('Username must be at least 10 characters long.');
      return false;
    }
  
    // Validate password
    var password = document.querySelector('input[name="password"]').value;
    if (password.length < 10) {
      alert('Password must be at least 10 characters long.');
      return false;
    }
  
    // Validate password regex
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{10,})$/;
    if (!passwordRegex.test(password)) {
      alert('Password must contain at least one uppercase letter, one lowercase letter, one number, and one symbol.');
      return false;
    }
  
    // Validate confirm password
    var confirmPassword = document.querySelector('input[name="confirm_password"]').value;
    if (confirmPassword !== password) {
      alert('Confirm password does not match password.');
      return false;
    }
  
    //call to back end to save data
  }