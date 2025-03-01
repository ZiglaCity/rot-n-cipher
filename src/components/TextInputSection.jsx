import "../styles/global.css";

function TextInputSection( {inputText, setInputText, mode, setmMode }){
    return (
        <>
            <div className="cyber-container">
                <select value={mode} onChange={(e) => setmMode(e.target.value)}>
                    <option value="encrypt">Encrypt</option>
                    <option value="decrypt">Decrypt</option>
                </select>

                <textarea 
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Enter text to encrypt or decrypt..."
                />
            </div>
        </>
    )
}

export default TextInputSection;