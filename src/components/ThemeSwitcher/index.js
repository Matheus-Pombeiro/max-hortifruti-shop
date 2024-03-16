const ThemeSwitcher = () => {   // Theme Switcher component
    const handleThemeSwitcher = (e) => {     // Theme switcher handler
        document.documentElement.classList.toggle("dark");
        document.documentElement.classList.contains("dark") ? e.target.src = '/assets/moon.png' : e.target.src = '/assets/sun.png';
    };

    // JSX
    return (
        <button onClick={handleThemeSwitcher}>
            <img src="/assets/sun.png" alt="Theme Switcher" className="header-btn"/>
        </button>
    )
};

export default ThemeSwitcher;