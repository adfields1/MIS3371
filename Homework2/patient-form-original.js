/*
    Program Name: patient-form-submission.js
    Author: Ashley Danielle Fields
    Date created: June 16th, 2025
    Date last edited: June 18th, 2025
    Version: 1.0
    Description: javascript to handle form field validation
*/

function validate_form() {
    /* let first_name = document.getElementById("first_name").value; /* grabs first_name value from input and applies it to logic below */  
    let first_name_pattern = /^[A-Za-z' -]{1,30}$/; /* same pattern recognition in HTML input form */

    if (!first_name_pattern.test(first_name)) { /* Tests if the inputted value does not match the desired pattern, if it doesn't it will return the message below and will not submit, otherwise it will submit */
        alert("First name should be 1-30 characters with letters, apostrophes, or dashes only")
        return false;
    }
    
    /*same logic as above for last name with applicable regex */
    
    let last_name = document.getElementById("last_name").value; /* grabs last_name value from input and applies it to logic below */
    let last_name_pattern = /^[A-Za-z' -]{1,30}$/; /* same pattern recognition in HTML input form */

    if (!last_name_pattern.test(last_name)) { /* Tests if the inputted value does not match the desired pattern, if it doesn't it will return the message below and will not submit, otherwise it will submit */
        alert("Last name should be 1-30 characters with letters, apostrophes, dashes, and numbers 2-5 only for inherited names")
        return false;
    } */

    /* Date of birth logic to not allow any age older than 110 or younger than 0 to prevent future dates */
    
    let dob = document.getElementById("dob").value;
    let current_date = new Date()
    
    if


    
    else {
        return true;
    }

    
}

/* function validate_form() {   
    const dob = new Date(document.getElementById("dob").value);
    const current_date = new Date();
    const historical_dob_limit = new Date(current_date.getFullYear() - 120, current_date.getMonth(), current_date.getDate()); /* logic to set dob to no older than 120 years to then compare with current date
    
    if (dob < historical_dob_limit) {
        alert("Date of birth can't be more than 120 years ago.");
        return false;
    }

    if (dob > current_date) {
        alert("Can't pick a future date.");
        return false;
    }

    else {
        return true;
    }
    
    

} */