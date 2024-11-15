// import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import Add from './store/action';
import minus from './store/action2';
import UsersComp from './Components/UsersComp';

function App() {

  const hhh = useSelector((state) => state.myReducer);

  const dispatch = useDispatch();
  
  const handleClickAdd = ()=>{
    dispatch(Add(hhh));
  }
  const handleClickMinus = ()=>{
    dispatch(minus(hhh));
  }

  return (
    <div className="App ">
     ola
     <div>{hhh}</div>
     <button onClick={handleClickMinus}>-</button>
     <button onClick={handleClickAdd}>+</button>
     <UsersComp />
    </div>
  );
}

export default App;
