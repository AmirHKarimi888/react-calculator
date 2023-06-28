import { useState } from 'react'
import './App.css'

function App() {

  let [Num, setNum] = useState(0);
  const [firstNum, setFirstNum] = useState(0);
  const [operation, setOperation] = useState('');

  const one = () => {
    if (Num === 0) {
      Num = '';
    }

    Num = Num + "1";
    setNum(Num);
  }

  const two = () => {
    if (Num === 0) {
      Num = '';
    }

    Num = Num + "2";
    setNum(Num);
  }

  const three = () => {
    if (Num === 0) {
      Num = '';
    }

    Num = Num + "3";
    setNum(Num);
  }

  const four = () => {
    if (Num === 0) {
      Num = '';
    }

    Num = Num + "4";
    setNum(Num);
  }

  const five = () => {
    if (Num === 0) {
      Num = '';
    }

    Num = Num + "5";
    setNum(Num);
  }

  const six = () => {
    if (Num === 0) {
      Num = '';
    }

    Num = Num + "6";
    setNum(Num);
  }

  const seven = () => {
    if (Num === 0) {
      Num = '';
    }

    Num = Num + "7";
    setNum(Num);
  }

  const eight = () => {
    if (Num === 0) {
      Num = '';
    }

    Num = Num + "8";
    setNum(Num);
  }

  const nine = () => {
    if (Num === 0) {
      Num = '';
    }

    Num = Num + "9";
    setNum(Num);
  }

  const zero = () => {
    if (Num !== 0) {
      Num = Num + "0";
      setNum(Num);
    }
  }

  const point = () => {
    if(!Num.toString().includes(".")) {
      Num = Num + ".";
      setNum(Num);
    }
  }

  const delAll = () => {
    Num = 0;
    setNum(Num);
  }

  const delChar = () => {
    Num = Num.toString().slice(0, Num.toString().length - 1);
    setNum(Num);
  }


  const root = () => {
    Num = parseFloat(Num.toString());
    Num = Math.sqrt(Num);
    setNum(Num);
  }

  const power = () => {
    setOperation('pow');
    setFirstNum(parseFloat(Num.toString()));
    Num = 0;
    setNum(Num);
  }

  const division = () => {
    setOperation('div');
    setFirstNum(parseFloat(Num.toString()));
    Num = 0;
    setNum(Num);
  }

  const multipication = () => {
    setOperation('mul');
    setFirstNum(parseFloat(Num.toString()));
    Num = 0;
    setNum(Num);
  }

  const addition = () => {
    setOperation('add');
    setFirstNum(parseFloat(Num.toString()));
    Num = 0;
    setNum(Num);
  }

  const subtraction = () => {
    setOperation('sub');
    setFirstNum(parseFloat(Num.toString()));
    Num = 0;
    setNum(Num);
  }

  const equal = () => {

    if(operation === "pow") {
      Num = Math.pow(firstNum, parseFloat(Num.toString()));
      setNum(Num);
      setFirstNum(0);
    } else if(operation === "div") {
      Num = firstNum / parseFloat(Num.toString());
      setNum(Num);
      setFirstNum(0);
    } else if(operation === "mul") {
      Num = firstNum * parseFloat(Num.toString());
      setNum(Num);
      setFirstNum(0);
    } else if(operation === "add") {
      Num = firstNum + parseFloat(Num.toString());
      setNum(Num);
      setFirstNum(0);
    } else if(operation === "sub") {
      Num = firstNum - parseFloat(Num.toString());
      setNum(Num);
      setFirstNum(0);
    }
  }
  return (
    <>
      <div className="card">
        <div className="calculator">
          <div className='input'>
            <input type="text" className='input' onChange={event => setNum(event.target.value)} value={Num} />
          </div>
          <div className="buttons">
            <button onClick={() => root()} className='opBtn'>√</button>
            <button onClick={() => power()} className='opBtn'>^</button>
            <button onClick={() => delAll()} className='delBtn'>C</button>
            <button onClick={() => delChar()} className='delBtn'>DEL</button>
            <br />
            <button onClick={() => seven()}>7</button>
            <button onClick={() => eight()}>8</button>
            <button onClick={() => nine()}>9</button>
            <button onClick={() => division()} className='opBtn'>÷</button>
            <br />
            <button onClick={() => four()}>4</button>
            <button onClick={() => five()}>5</button>
            <button onClick={() => six()}>6</button>
            <button onClick={() => multipication()} className='opBtn'>×</button>
            <br />
            <button onClick={() => one()}>1</button>
            <button onClick={() => two()}>2</button>
            <button onClick={() => three()}>3</button>
            <button onClick={() => subtraction()} className='opBtn'>−</button>
            <br />
            <button onClick={() => zero()}>0</button>
            <button onClick={() => point() }>.</button>
            <button onClick={() => equal()} className='opBtn'>=</button>
            <button onClick={() => addition()} className='opBtn'>+</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
