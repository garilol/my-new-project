document.addEventListener('DOMContentLoaded', () => { console.log('Page loaded!'); });
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('h1');
    header.addEventListener('click', () => {
        header.textContent = 'You clicked the title!';
    });
});

// Log a message when the page is fully loaded
document.addEventListener('DOMContentLoaded', () => { 
    console.log('Page loaded!');
});
