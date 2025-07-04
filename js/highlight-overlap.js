document.addEventListener('DOMContentLoaded', function() {
    // Get the elements
    const highlightText = document.querySelector('.highlight-text');
    const reklikElement = document.querySelector('.fs-300');
    
    // Check if elements exist
    if (!highlightText || !reklikElement) return;
    
    // Function to check if elements are overlapping
    function isOverlapping(element1, element2) {
        const rect1 = element1.getBoundingClientRect();
        const rect2 = element2.getBoundingClientRect();
        
        return !(
            rect1.right < rect2.left || 
            rect1.left > rect2.right || 
            rect1.bottom < rect2.top || 
            rect1.top > rect2.bottom
        );
    }
    
    // Function to handle scroll and resize events
    function checkOverlap() {
        if (isOverlapping(highlightText, reklikElement)) {
            highlightText.classList.add('overlapping');
        } else {
            highlightText.classList.remove('overlapping');
        }
    }
    
    // Initial check
    checkOverlap();
    
    // Add event listeners
    window.addEventListener('scroll', checkOverlap);
    window.addEventListener('resize', checkOverlap);
});
