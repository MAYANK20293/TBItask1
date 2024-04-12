
        document.getElementById("contactForm").addEventListener("submit", function(event) {
            event.preventDefault();

            var name = document.getElementById("name").value;
            var email = document.getElementById("email").value;
            var message = document.getElementById("message").value;
            var subject = document.getElementById("subject").value;

            if (name === '' || email === '' || message === '' || subject === '') {
                alert("Please fill in all fields.");
                return false;
            }

            
            alert("Form submitted successfully!");
        });