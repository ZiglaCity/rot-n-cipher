import "../styles/global.css";

function ResultSelection({outputText, mode}){
    var output_label = mode === "encrypt" ? "Decryption" : "Encryption";
    return (
        <div className="cyber-container">
            <label >{output_label}</label>
            <textarea value={outputText} readOnly />
        </div>
    )
}

export default ResultSelection;