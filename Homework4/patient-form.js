/*
    Program Name: patient-form.js
    Author: Ashley Danielle Fields
    Date created: June 23rd, 2025
    Date last edited: July 5th, 2025
    Version: 2.0
    Description: javascript to handle form field validation
*/

function firstName_validation() {
    const first_name = document.getElementById("first_name").value.trim(); /* grabs first_name value from input and applies it to logic below */
    const errorFormat = document.getElementById("first_name_error_message");
    const first_name_pattern = /^[A-Za-z' -]{1,30}$/;
    
    if (!first_name_pattern.test(first_name)) { /* Tests if the inputted value does not match the desired pattern, if it doesn't it will return the message below and will not submit, otherwise it will submit */
        errorFormat.textContent = "First name should be 1-30 characters with letters, apostrophes, or dashes only";
        return false;
    }

    else {
        errorFormat.textContent = ""
        return true;
    }
}

function middleInitial_validation() {
    const middle_initial = document.getElementById("middle_initial").value.trim(); /* grabs middle_initial value from input and applies it to logic below */
    const errorFormat = document.getElementById("middle_initial_error_message");
    const middle_initial_pattern = /^[A-Z^a-z]{0,}$/;
    
    if (!middle_initial_pattern.test(middle_initial)) { /* Tests if the inputted value does not match the desired pattern, if it doesn't it will return the message below and will not submit, otherwise it will submit */
        errorFormat.textContent = "Middle initial should be a letter only";
        return false;
    }

    else {
        errorFormat.textContent = ""
        return true;
    }
}

function lastName_validation() {    
    const last_name = document.getElementById("last_name").value; /* grabs last_name value from input and applies it to logic below */
    const errorFormat = document.getElementById("last_name_error_message");
    const last_name_pattern = /^[A-Za-z'-235]{1,30}$/;
    
    if (!last_name_pattern.test(last_name)) { /* Tests if the inputted value does not match the desired pattern, if it doesn't it will return the message below and will not submit, otherwise it will submit */
        errorFormat.textContent = "Last name should be 1-30 characters with letters, apostrophes, dashes, and numbers 2-5 only for inherited names";
        return false;
    }

    else {
        errorFormat.textContent = ""
        return true;
    }
}

function dob_validation() {
    const dob = new Date(document.getElementById("dob").value);
    const current_date = new Date();
    const historical_dob_limit = new Date(current_date.getFullYear() - 120, current_date.getMonth(), current_date.getDate()); /* logic to set dob to no older than 120 years to then compare with current date */
    const errorFormat = document.getElementById("dob_error_message");
    
    if (dob < historical_dob_limit) {
        errorFormat.textContent = "Date of birth can't be more than 120 years ago.";
        return false;
    }

    if (dob > current_date) {
        errorFormat.textContent = "Can't pick a future date.";
        return false;
    }

    else {
        errorFormat.textContent = ""
        return true;
    }
}

function ssn_format(ssn_input) { /* this is to format the user input to automatically enter in the dashes as the user is typing */
    const ssn_value = ssn_input.value.replace(/\D/g, '');

    let ssn_format = '';
    if (ssn_value.length > 0) {
        ssn_format = ssn_value.substring(0, 3);
    }

    if (ssn_value.length >= 4) {
        ssn_format += '-' + ssn_value.substring(3, 5);
    }

    if (ssn_value.length >= 6) {
        ssn_format += '-' + ssn_value.substring(5, 9);
    }

    ssn_input.value = ssn_format;
}

function ssn_validation() {
    const ssn = document.getElementById("ssn").value.trim(); /* grabs last_name value from input and applies it to logic below */ 
    const ssn_pattern = /^\d{3}-\d{2}-\d{4}$/; /* same pattern recognition in HTML input form */
    const errorFormat = document.getElementById("ssn_error_message");
    
    if (ssn.length !== 11) { /* Tests if the inputted value has the correct amount of characters */
        errorFormat.textContent ="Please enter a valid SSN";
        return false;
    }
    
    if (!ssn_pattern.test(ssn)) { /* Tests if the inputted value does not match the desired pattern, if it doesn't it will return the message below and will not submit, otherwise it will submit */
        errorFormat.textContent ="Please enter a valid SSN";
        return false;
    }

    else {
        errorFormat.textContent = ""
        return true;
    }
}

function address1_validation() {
    const address1 = document.getElementById("address1").value.trim(); /* grabs address1 value from input and applies it to logic below */
    const errorFormat = document.getElementById("address1_error_message");
    const address1_pattern = /^[A-Za-z0-9\s.,'#-]{2,30}$/;
    
    if (!address1_pattern.test(address1)) { /* Tests if the inputted value does not match the desired pattern, if it doesn't it will return the message below and will not submit, otherwise it will submit */
        errorFormat.textContent = "Address line 1 needs to be between 2 and 30 characters";
        return false;
    }

    else {
        errorFormat.textContent = ""
        return true;
    }
}

function city_validation() {
    const city = document.getElementById("city").value.trim(); /* grabs address1 value from input and applies it to logic below */
    const errorFormat = document.getElementById("city_error_message");
    const city_pattern = /^[A-Za-z0-9\s.,'#-]{2,30}$/;
    
    if (!city_pattern.test(city)) { /* Tests if the inputted value does not match the desired pattern, if it doesn't it will return the message below and will not submit, otherwise it will submit */
        errorFormat.textContent = "City needs to be between 2 and 30 characters";
        return false;
    }

    else {
        errorFormat.textContent = ""
        return true;
    }
}

function zip_validation() {
    const zip = document.getElementById("zip_code").value.trim(); /* grabs address1 value from input and applies it to logic below */
    const errorFormat = document.getElementById("zip_error_message");
    const zip_pattern = /^\d{5}$/;
    
    if (!zip_pattern.test(zip)) { /* Tests if the inputted value does not match the desired pattern, if it doesn't it will return the message below and will not submit, otherwise it will submit */
        errorFormat.textContent = "Zip Code needs to be 5 digits";
        return false;
    }

    else {
        errorFormat.textContent = ""
        return true;
    }
}

function address2_validation() {
    const address2 = document.getElementById("address2").value.trim(); /* grabs address1 value from input and applies it to logic below */
    const errorFormat = document.getElementById("address2_error_message");
    const address2_pattern = /^[A-Za-z0-9\s.,'#-]{2,30}$/;
    
    if (address2 === "") {
        errorElement.textContent = "";
    return true;
    }
    
    if (!address2_pattern.test(address2)) { /* Tests if the inputted value does not match the desired pattern, if it doesn't it will return the message below and will not submit, otherwise it will submit */
        errorFormat.textContent = "Address line 2 needs to be between 2 and 30 characters if populated";
        return false;
    }

    else {
        errorFormat.textContent = ""
        return true;
    }
}

function email_validation() {
    const email = document.getElementById("email").value
    const errorFormat = document.getElementById("email_error_message");
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email_pattern.test(email)) { /* Tests if the inputted value does not match the desired pattern, if it doesn't it will return the message below and will not submit, otherwise it will submit */
        errorFormat.textContent = "Please enter a valid email";
        return false;
    }

    else {
        errorFormat.textContent = ""
        return true;
    }
}

function phone_format(phone_input) { /* this is to format the user input to automatically enter in the dashes as the user is typing */
    const phone_value = phone_input.value.replace(/\D/g, '');

    let phone_format = '';
    if (phone_value.length > 0) {
        phone_format = phone_value.substring(0, 3);
    }

    if (phone_value.length >= 4) {
        phone_format += '-' + phone_value.substring(3, 6);
    }

    if (phone_value.length >= 7) {
        phone_format += '-' + phone_value.substring(6, 10);
    }

    phone_input.value = phone_format;
}

function phone_validation() {
    const phone = document.getElementById("phone").value.trim(); /* grabs last_name value from input and applies it to logic below */ 
    const phone_pattern = /^\d{3}-\d{3}-\d{4}$/; /* same pattern recognition in HTML input form */
    const errorFormat = document.getElementById("phone_error_message");
    
    if (phone.length !== 12) { /* Tests if the inputted value has the correct amount of characters */
        errorFormat.textContent ="Please enter a valid phone number";
        return false;
    }
    
    if (!phone_pattern.test(phone)) { /* Tests if the inputted value does not match the desired pattern, if it doesn't it will return the message below and will not submit, otherwise it will submit */
        errorFormat.textContent ="Please enter a valid phone number";
        return false;
    }

    else {
        errorFormat.textContent = ""
        return true;
    }
}

function health_slider() {
    var slider = document.getElementById("health_scale");
    var output = document.getElementById("health_num");
    output.innerHTML = slider.value;

    slider.oninput = function() {
    output.innerHTML = this.value;
    }
}

function userID_validation() {
    const userID = document.getElementById("user_id").value
    const errorFormat = document.getElementById("userID_error_message");
    const userID_pattern = /^[A-Za-z_-][A-Za-z0-9_-]{4,19}$/; /* can't start with a number and needs to be 5-20 characters, no special characters */

    if (!userID_pattern.test(userID)) { /* Tests if the inputted value does not match the desired pattern, if it doesn't it will return the message below and will not submit, otherwise it will submit */
        errorFormat.textContent = "Please enter a valid User ID with 5-20 characters and can't start with a number";
        return false;
    }

    else {
        errorFormat.textContent = ""
        return true;
    }
}

function password_validation () {
    const password = document.getElementById("password_hashed").value
    const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,30}$/; /* Password with 8 to 30 characters, at least 1 upper case letter, and 1 digit excluding quotations */
    const userID = document.getElementById("user_id").value /* for checking that password doesn't match user ID */
    const errorFormat = document.getElementById("password_hashed_error_message");

    if (!password_pattern.test(password)) { /* Tests if the inputted value does not match the desired pattern, if it doesn't it will return the message below and will not submit, otherwise it will submit */
        errorFormat.textContent = "Please enter a valid password with 8-30 characters at least 1 upper case letter, and 1 digit";
        return false;
    }

    if (password === userID) {
        errorFormat.textContent = "Password cannot be your User ID";
    }

    else {
        errorFormat.textContent = ""
        return true;
    }
}

function check_password() {
    const password1 = document.getElementById("password_hashed").value;
    const password2 = document.getElementById("password_hashed_match").value;
    const errorFormat = document.getElementById("password_hashed_match_error_message");

    if (password1 !== password2) {
        errorFormat.textContent = "Passwords do not match";
        return false;
    }

    else {
        errorFormat.textContent = ""
        return true;
    }
}

function validateForm() { /* function to call all pattern validation listed above as user is entering before submitting */
    return firstName_validation() && middleInitial_validation() && lastName_validation() && dob_validation() && ssn_validation() && address1_validation() 
    && city_validation() && zip_validation() && address2_validation() && email_validation() && phone_validation() && health_slider() && userID_validation() 
    && password_validation() && check_password();
}
    
function toggle_Submit() { /* only show the Submit button once all the relevant fields are valid */
    const firstName_check = firstName_validation();
    const lastName_check = lastName_validation();
    const dob_check = dob_validation();
    const ssn_check = ssn_validation();
    const address1_check = address1_validation();
    const city_check = city_validation();
    const zip_check = zip_validation();
    const email_check = email_validation();
    const phone_check = phone_validation();
    const userID_check = userID_validation();
    const password_check = password_validation();

    const all_check = firstName_check &&
                      lastName_check &&
                      dob_check &&
                      ssn_check &&
                      address1_check &&
                      city_check &&
                      zip_check &&
                      phone_check &&
                      userID_check &&
                      password_check;
    submit_button.disabled = !all_check;
}