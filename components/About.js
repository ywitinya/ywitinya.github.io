document.getElementById("About-link").addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior

        // Get the target section's ID from the link's href
        //let targetId = link.getAttribute('href').substring(1);

        // Find the target section by its ID
        let targetSection = document.getElementById("About");

        // Scroll to the target section smoothly
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
