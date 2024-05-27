import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CommentList from './CommentList.jsx'
import Comment from './Comment.jsx'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <CommentList></CommentList>
    </>
  )
}

export default App
