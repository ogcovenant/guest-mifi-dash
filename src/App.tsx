import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import "./index.css";

const App = () => {

  const navigate = useNavigate()

  useEffect(() => {
    navigate("/login")
  }, [])

  return (
    <></>
  )
}

export default App