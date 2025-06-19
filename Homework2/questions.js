1. Synopis of what website/form is supposed to be doing

    Intake fields for new patient registration
    Logic to maintain data integrity and ensure data being submitted is realistc

2. Happy with what is working

    Password validation, general design and formatting of the site
    

3. Not yet working

    First name and last name field validation using HTML <input pattern> regex and trying multiple versions. When trying values that shouldn't be allowed, the form can still be submitted. Middle_initial works correctly since that just validates a single letter but when trying to allow for other chracters, more complex logic or a different regex pattern seems to be required for this validation. 

    Attempted to try to get the min and max attributes calculated to the current date but did not work so kept as hard-coded values per instructions

                /* function check_box_fields(id) {
                return document.getElementById(id).checked ? "Y" : "N";
            } */

            /* document.getElementById("displayDOB").textContent = document.getElementById("dob").value;
                document.getElementById("displaySSN").textContent = document.getElementById("ssn").value;
                document.getElementById("displayAddress1").textContent = document.getElementById("address1").value;
                document.getElementById("displayAddress2").textContent = document.getElementById("address2").value;
                document.getElementById("displayCity").textContent = document.getElementById("city").value;
                document.getElementById("displayState").textContent = document.getElementById("state").value;
                document.getElementById("displayZipCode").textContent = document.getElementById("zip_code").value;
                document.getElementById("displayEmail").textContent = document.getElementById("email").value;
                document.getElementById("displayPhone").textContent = document.getElementById("phone").value;
                document.getElementById("displaySymptoms").textContent = document.getElementById("current_symptoms").value;
                document.getElementById("displayCancerCheck").textContent = document.check_box_fields("cancer_check");
                document.getElementById("displayArthritisCheck").textContent = document.check_box_fields("arthritis_check");
                document.getElementById("displayCardioCheck").textContent = document.check_box_fields("cardio_check");
                document.getElementById("displayDiabetesCheck").textContent = document.check_box_fields("diabetes_check");
                document.getElementById("displayDepressionCheck").textContent = document.check_box_fields("depression_check");
                document.getElementById("displayGender").textContent = document.getElementById("gender").value;
                document.getElementById("displayVaccinated").textContent = document.getElementById("vaccinated").value;
                document.getElementById("displayInsurance").textContent = document.getElementById("insurance").value;
                document.getElementById("displayHealthScale").textContent = document.getElementById("health_scale").value;
                document.getElementById("displayUserID").textContent = document.getElementById("user_id").value;
                document.getElementById("displayPasswordHashed").textContent = document.getElementById("password_hashed").value;
                document.getElementById("displayPasswordHashedCheck").textContent = document.getElementById("password_hashed_check").value;
                document.getElementById("form_review").style.display = "block"; */
