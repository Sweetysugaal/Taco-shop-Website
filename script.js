const year = document.getElementById("year");
const thisYear = new Date(). getFullYear()

year.setAttribute("datetime", thisYear)
year.textContent = thisYear

const themeToggle = document.getElementById('theme-toggle');
const themeStylesheet = document.getElementById('theme-stylesheet');
let darkModeEnabled = false;

themeToggle.addEventListener('click', () => {
    darkModeEnabled = !darkModeEnabled;
    if (darkModeEnabled) {
        themeStylesheet.href = 'dark-theme.css';
        themeToggle.textContent = 'Toggle Light Mode';
    } else {
        themeStylesheet.href = 'light-theme.css';
        themeToggle.textContent = 'Toggle Dark Mode';
    }
});
