$(document).ready(function() {

    // Account Form
    const loginText = $(".title-text .login");
    const loginForm = $("form.login");
    const loginBtn = $("label.login");
    const signupBtn = $("label.signup");
    
    signupBtn.on("click", function() {
        loginForm.css("margin-left", "-50%");
        loginText.css("margin-left", "-50%");
    });
    
    loginBtn.on("click", function() {
        loginForm.css("margin-left", "0%");
        loginText.css("margin-left", "0%");
    });
    

    // Contact Form
    const emailText = $(".title-text .email");
    const emailForm = $("form.email");
    const emailBtn = $("label.email");
    const socialBtn = $("label.social");
    const socialLink = $("form .signup-link a");
    
    socialBtn.on("click", function() {
        emailForm.css("margin-left", "-50%");
        emailText.css("margin-left", "-50%");
    });
    
    emailBtn.on("click", function() {
        emailForm.css("margin-left", "0%");
        emailText.css("margin-left", "0%");
    });
    

    // Filter Category
    $('.filter').on('change', filterProducts);
    
    function filterProducts() {
        var selectedCategories = $('.filter:checked').map(function() {
            return this.value;
        }).get();

        if (selectedCategories.length === 0) {
        $('.card').show();
        } else {
            $('.card').hide();
            selectedCategories.forEach(function(category) {
                $('.card.' + category).show();
            });
        }
    }
});