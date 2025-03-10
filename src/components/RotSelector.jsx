import "../styles/global.css";

function RotSelector({rotType, setRotType}){
    return (
        <div className="cyber-container">
            <select value={rotType} onChange={(e) => setRotType(Number(e.target.value))}>
                {
                    [...Array(27).keys()].map((i) => 
                    <option value={i} key={i}> {`ROT-${i}`} </option>)
                }
            </select>
        </div>
    )
}

export default RotSelector;