import { useState } from 'react';
import TextInputSection from './components/TextInputSection';
import ResultSelection from './components/ResultSection';

function App() {
  const [inputText, setInputText] = useState("");
  const [rotType, setRotType] = useState(13); 
  const [mode, setMode] = useState("encrypt"); 
  const [outputText, setOutputText] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <div>
        <TextInputSection
          inputText={inputText}
          setInputText={setInputText}
          mode={mode}
          setmMode={setMode}
        />

        <ResultSelection outputText={outputText} mode={mode} />
      </div>
    </>
  )
}

export default App
