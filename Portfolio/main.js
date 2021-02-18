function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

function themeSelector() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
        document.getElementById('theme-toggle').style.transform = "translateX(0%)"
    }
    else {
        setTheme('theme-dark');
        document.getElementById('theme-toggle').style.transform = "translateX(100%)"
    }
}

(function () {
    console.log(localStorage.getItem('theme'))
    if (localStorage.getItem('theme') === 'theme-light') {
        setTheme('theme-light');
        document.getElementById('theme-toggle').style.transform = "translateX(0%)"
    }
    else {
        setTheme('theme-dark');
        document.getElementById('theme-toggle').style.transform = "translateX(100%)"
    }
}) ();