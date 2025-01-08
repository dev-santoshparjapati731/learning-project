let cursor = document.getElementById("cursor-move");
let crsr = document.getElementById("crsr");

cursor.addEventListener("mousemove", function(dets) {
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
})


// Simulate loading time (for demonstration purposes)
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    loader.style.display = 'none'; // Hide loader once page is fully loaded
});