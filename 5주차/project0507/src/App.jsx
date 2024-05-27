import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import styled from "styled-components"







export default function App(){
  const [n, setN] = useState(0);
  const[todos, setTodos] = useState([]);
  const[inputValue, setInputValue] = useState('');

  // 텍스트 인식
  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  // 추가
  const handleAddTodo = (e) =>{
    setTodos([...todos, inputValue]);
    console.log(e);
    setInputValue('');
  }

  function add() {
    setN((prev) => prev+1);
    setN((prev) => prev+1);
    setN((prev) => prev+1);
  }

  

  return(
    <>
      <h1>Todo List</h1>
      <div>
        <input onChange={handleChange} placeholder='Enter your todo'></input>
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      {n}
      <button onClick={add}>dd</button>
      
      <div>
        <ul>
          {todos.map((item, index) =>(
             <li key={index}>{item}</li> //화살표 함수에서 중괄호 쓰면 return 써야함
          ))}
        </ul>
      </div>
    
    </>
  )



}








/*
export default function App(){
  const [time, setTime] = useState(1);

  const handleClick = ()=>{
    setTime(time + 1);
  };

  return(
    <>
      <div>
        <h1>Todo List</h1>
      </div>
      <div>
        <input placeholder="Enter your todo"></input>
        <button>Add Todo</button>
      </div>
    </>
  )

}
*/


/*

let SkyBox = styled.div`
  background: ${props => props.background};
  padding: 20px;
  border-radius: 10px;
  width: ${props => props.width};
  height: 100px;
`;



function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <SkyBox background="gold" width="100px"/>
    <SkyBox background="cyan" width="30px"/>
    <SkyBox background="magenta" width="100px"/>
    <SkyBox background="red" width="30px"/>

    

    </>
  )
}

export default App
*/