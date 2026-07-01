document.addEventListener("DOMContentLoaded", function() {
    const formElement = document.querySelector(".booking-form");
    
    if (formElement) {
        formElement.addEventListener("submit", function(event) {
            const nameInput = document.getElementById("fullName").value;
            const emailInput = document.getElementById("emailAddress").value;
            
            // Check if user fields are blank
            if (nameInput.trim() === "" || emailInput.trim() === "") {
                alert("Oops! Please fill in both your Name and Email address to lodge a reservation.");
                event.preventDefault(); // Stop form from trying to reload page
            } else {
                alert(`Thank you, ${nameInput}! Your room booking request has been successfully processed.`);
            }
        });
    }
});