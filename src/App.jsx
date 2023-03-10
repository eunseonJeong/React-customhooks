import React from 'react'
import useInput from './hooks/useInput'
import './App.css'

function App() {
  const [name, onChangeNameHandler] = useInput();
  const [password, onChangePasswordHandler] = useInput();

  return (
    <>
      <div>
        Custom Hooks
    </div>
    <input type="text" 
    value={name}
    onChange={onChangeNameHandler} />
    <input type="password"
    value={password}
    onChange={onChangePasswordHandler} />
    </>
  )
}

export default App
