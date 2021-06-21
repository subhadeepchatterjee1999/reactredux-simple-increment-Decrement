import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch } from "react-redux"
import {incNumber, decNumber} from "./actions/index"
 function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div className="container">
        <div className="col">
          <h1 className="text-secondary">Increment/Decrement</h1>
        </div>

        <div className="col">
          <a title="Decrement" className="btn btn-secondary text-white" onClick={() => dispatch(decNumber())  }>-</a>
          <input type="text" name="quantity" value={myState} className="text-center"/>
          <a title="Increment" className="btn btn-secondary text-white" onClick={() => dispatch(incNumber())  }>+</a>
        </div>
      </div>
    </div>
  );
}

export default App;
