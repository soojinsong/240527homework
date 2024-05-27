import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './Profile'; 

function App() {
  
  const [count, setCount] = useState(0); // <== 여기 두번째 인자가 조종할 함수 이름임
  
  return(
    <>
      <Profile
        name = "김효중"
        introduction="안녕하세요. 김효중입니다."
        viewCount={1500}
      ></Profile>
      <Profile
        name = "한가한"
        introduction="안녕하세요. 한가한입니다."
        viewCount={2500}
      ></Profile>
      <Profile
        name = "남궁민수"
        introduction="안녕하세요. 남궁민수입니다."
        viewCount={3000}
      ></Profile>
    </>
  );

  
}

export default App 
