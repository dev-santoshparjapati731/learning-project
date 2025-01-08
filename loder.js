// JavaScript to hide loader and show content after 5 seconds
setTimeout(function() {
    // Hide the loader
    document.querySelector('.circle-loader').style.display = 'none';

    // Show the page content
    document.querySelector('.content').style.display = 'block';
}, 5000); // 5000 milliseconds = 5 seconds