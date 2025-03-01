function Navbar({ darkMode, setDarkMode }) {
    return (
        <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px", borderBottom: "1px solid #ccc" }}>
            <h1>ROT-N.com</h1>
            <button onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
            </button>
        </nav>
    );
}

export default Navbar;
