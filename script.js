document.addEventListener('DOMContentLoaded', function() {
    // Create a mapping of class names to URLs
    const classToUrlMap = {
        'real-fruit': 'https://realfruitbubbletea.com/index.html', // Replace with your desired URL for class 'real-fruit-1'
        'boba-tea-shop': 'https://bubbleteashop.com', // Replace with your desired URL for class 'real-fruit-2'
        'happy-lemon': 'https://happylemonusa.com'  // Replace with your desired URL for class 'real-fruit-3'
    };

    // Iterate over each class in the mapping
    for (let className in classToUrlMap) {
        // Select all images with the current class
        const images = document.querySelectorAll(`img.${className}`);

        images.forEach(function(image) {
            // Add a click event listener to each image
            image.addEventListener('click', function() {
                // Get the URL for the current class
                const url = classToUrlMap[className];
                
                // Open the URL in a new tab
                window.open(url, '_blank');
            });
        });
    }
});
