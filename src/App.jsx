import { useEffect, useState } from 'react';
import TextInputSection from './components/TextInputSection';
import ResultSelection from './components/ResultSection';
import RotSelector from './components/RotSelector';

function App() {
  const [inputText, setInputText] = useState("");
  const [rotType, setRotType] = useState(13); 
  const [mode, setMode] = useState("encrypt"); 
  const [outputText, setOutputText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const transformText = (text, shift, mode) => {
    return text
      .split("")
      .map((char) => {
        if (/[a-zA-Z]/.test(char)){
          let base = char === char.toUpperCase() ? 65 : 97;
          let shiftValue = mode === "encrypt" ? shift : 26 - shift;
          return String.fromCharCode(((char.charCodeAt(0) - base + shiftValue) % 26) + base);
        }
        return char;
      })
      .join("");
  };

  useEffect(() => {
    setOutputText(transformText(inputText, rotType, mode));
  }, [inputText, rotType, mode]);

  return (
    <>
      <div>
        <TextInputSection
          inputText={inputText}
          setInputText={setInputText}
          mode={mode}
          setmMode={setMode}
        />
        <RotSelector rotType={rotType} setRotType={setRotType}/>
        <ResultSelection outputText={outputText} mode={mode} />
      </div>
    </>
  )
}

export default App
