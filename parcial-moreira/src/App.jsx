
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <div className="App">
      <form onSubmit={submitHandler}></form>
      <Card />
    </div>
  )
}

export default App
