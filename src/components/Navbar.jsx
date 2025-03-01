function Navbar({ darkMode, setDarkMode }) {
    return (
        <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px", borderBottom: "1px solid #ccc" }}>
            <>ROT-n Cipher</>
            <button onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
            </button>
        </nav>
    );
}

export default Navbar;
