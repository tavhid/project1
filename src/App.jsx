import { useDispatch, useSelector } from "react-redux"
import Header from "./components/Header"

const App = () => {
  const theme = useSelector(state => state.theme)
  //const dispatch = useDispatch()
  const data = []

  return (
    <div className={`App ${theme}`}>
      <Header />
      Tavhid
    </div>
  )
}

export default App
