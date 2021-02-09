import { useDispatch, useSelector } from "react-redux"

const App = () => {
  const theme = useSelector(state => state.theme)
  //const dispatch = useDispatch()
  const data = []


  return (
    <div className={`App ${theme}`}>
      
    </div>
  )
}

export default App
