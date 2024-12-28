document.getElementById('alert-button').addEventListener('click', () => {
    alert('Button clicked!');
});

// Automatically update current year of footer
const yearSpan = document.getElementById("year");
yearSpan.textContent = new Date().getFullYear();
