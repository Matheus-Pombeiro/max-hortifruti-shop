const Header = () => {      // Header component
    const handleThemeSwitcher = (e) => {     // Theme switcher handler
        document.documentElement.classList.toggle("dark");
        document.documentElement.classList.contains("dark") ? e.target.src = '/assets/moon.png' : e.target.src = '/assets/sun.png';
    };

    // JSX
    return (
        <header className="w-screen h-60 lg:w-7/12 lg:h-72 mx-auto rounded-b-lg shadow-xl bg-cover flex flex-col justify-center items-center gap-3" style={{ backgroundImage:"url(/assets/background.jpg)" }}>
                <div>
                    <h1 className="text-white text-2xl lg:text-3xl font-bold text-center">Max Hortifruti Shop</h1>
                    <p className="text-white text-lg font-medium">Check it out our fresh fruits and vegetables</p>
                </div>
                <nav className="flex justify-between items-center gap-1">
                    <button onClick={handleThemeSwitcher}>
                        <img src="/assets/sun.png" alt="Theme Switcher" className="header-btn"/>
                    </button>
                    <button>
                        <img src="/assets/british-flag.png" alt="English" className="header-btn"/>
                    </button>
                    <button>
                        <img src="/assets/portuguese-flag.png" alt="Portuguese" className="header-btn"/>
                    </button>
                </nav>
        </header>
    )
};

export default Header;