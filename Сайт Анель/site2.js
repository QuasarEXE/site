document.addEventListener('DOMContentLoaded', () => {
    // Click event listener
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Read more about this article!');
        });
    });

    // Mouseover event listener
    const hoverButton = document.querySelector('.hover-btn');
    hoverButton.addEventListener('mouseover', () => {
        hoverButton.style.backgroundColor = 'red';
        hoverButton.style.color = 'white';
    });
    hoverButton.addEventListener('mouseout', () => {
        hoverButton.style.backgroundColor = 'green';
        hoverButton.style.color = 'white';
    });

    // Keypress event listener
    document.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            alert('Enter key pressed!');
        }
    });
});
