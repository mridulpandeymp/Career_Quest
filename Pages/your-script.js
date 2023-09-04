document.addEventListener("DOMContentLoaded", function() {
    const profileButton = document.getElementById("profileButton");
    const modal = document.getElementById("modal");
    const closeModal = document.getElementById("closeModal");
    const signInForm = document.getElementById("signInForm");
    const signUpForm = document.getElementById("signUpForm");

    // Show the modal when the profile button is clicked
    profileButton.addEventListener("click", function() {
        modal.style.display = "block";
    });

    // Close the modal when the close button is clicked
    closeModal.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Switch to the sign up form
    signInForm.style.display = "block";
    signUpForm.style.display = "none";

    // Show the sign up form when the "Sign Up" button is clicked
    document.getElementById("signUpButton").addEventListener("click", function() {
        signInForm.style.display = "none";
        signUpForm.style.display = "block";
    });

    // Show the sign in form when the "Sign In" button is clicked
    document.getElementById("signInButton").addEventListener("click", function() {
        signInForm.style.display = "block";
        signUpForm.style.display = "none";
    });
});
