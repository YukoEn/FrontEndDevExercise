// Wait for the DOM to be ready
$(function () {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("form[name='registration']").validate({
        // Specify validation rules
        rules: {
            // The key name on the left side is the name attribute
            // of an input field. Validation rules are defined
            // on the right side
            firstname: {
                required: true,
                minlength: 2,
                maxlength: 40
            },
            lastname: {
                required: true,
                minlength: 2,
                maxlength: 40
            },
            streetaddress: {
                required: true,
                minlength: 5,
                maxlength: 50
            },
            postalcode: {
                required: true,
                digits: true,
            },
            country: {
                required: true
            },
            company: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
        },
        // Specify validation error messages
        messages: {
            firstname: {
                required: "Please enter your first name",
                minlength: "Your first name must be at least 2 characters long",
                maxlength: "Your first name must be at max 40 characters long"
            },
            lastname: {
                required: "Please enter your last name",
                minlength: "Your first name must be at least 2 characters long",
                maxlength: "Your first name must be at max 40 characters long"
            },
            streetaddress: {
                required: "Please enter street address",
                minlength: "Street address must be at least 5 characters long",
                maxlength: "Street address must be at max 50 characters long"
            },
            postalcode: {
                required: "Please enter postal code",
                digits: "Postal code only accepts digits"
            },
            country: "Please enter country",
            company: "Please enter company",
            email: "Please enter a valid email address"
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function (form) {
            form.submit();
        }
    });
});
