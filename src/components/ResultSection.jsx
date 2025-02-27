function ResultSelection({outputText, mode}){
    var output_label = ""
    if(mode === "encrypt"){
        output_label = "Decryption"
    }
    else{
        output_label = "Encryption"
    }

    return (
        <div>
            <label >{output_label}</label>
            <textarea value={outputText} readOnly />
        </div>

    )
}

export default ResultSelection;