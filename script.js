// Front-End Validation - scripts.js

// Task 1: Validate the form on submit
// Implement a validateForm() function that will run when the form is submitted
function validateForm() {

    // Task 2: Retrieve form values
    // Get the values of the username, email, phone, password, and confirm password inputs
    let username = document.getElementById("username").value;
  

    // Task 3: Validate Username - Minimum 3 characters
   if (username.length == 0) {
    alert("User name is required");
   } else if (username.length < 3) {
    alert("User name must be at least three characters long.");
   }

    // Task 4: Validate Email - Must be a valid email format
   // pause to discuss regular expressions
   // go to regexr.com
   // hand out cheat sheet
   // build regex to check for email address
   // what do we know about email address format?


    // Task 5: Validate Phone Number - 10 digits in 123-456-7890 format




    // Task 6: Check for NJ area codes




    // Task 7: Validate Password - Minimum 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character




    // Task 8: Confirm Password Match




    // Task 9: If all validations pass, submit the form
}
