import {useState} from "react";
import "./style.css"

function App(){
    const [number1, setNumber]= useState(0)
    const [number2, setNumber2]= useState(0)
    const [result, setResult]= useState(0)

    return(
        <div className="allcont" >
            <div className="incont">
                <h1>Result: {result}</h1>
                </div>
            <div className="incont">
                    <input onChange={e=>setNumber(parseFloat(e.target.value))}/>
                    <input onChange={e=>setNumber2(parseFloat(e.target.value))}/>
            </div>
<br/>
            <div className="btncont" >
                <button id="sum"onClick={()=>
                setResult(number1+number2)
                }>
                    ➕
                </button>
                
                <button id="rest" onClick={()=>
                setResult(number1-number2)
                }>
                    ➖
                </button>
            </div>

            <div className="btncont">
                <button id="mult" onClick={()=>
                setResult(number1*number2)
                }>
                    ✖️
                </button>

                <button id="divid"onClick={()=>
                setResult(number1/number2)
                }>
                    ➗
                </button>
            </div>
        </div>
    )
}

export default App