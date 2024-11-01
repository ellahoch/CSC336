document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.section-link').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior

            // Get the target section ID from the href attribute
            const targetId = this.getAttribute('href').substring(1);
            
            // Find the element with the corresponding ID
            const targetElement = document.getElementById(targetId);

            // Scroll smoothly to the target section if it exists
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',  // Enable smooth scrolling
                    block: 'start'       // Align to the top of the viewport
                });
            }
        });
    });
});



console.log("Script loaded");

