import './App.css'

function App() {
  const element1 = <h1>ელემენტი</h1>;
  const element2 = <h1>{element1}</h1>;
  const element3 = <h1>{element2}</h1>;
  const element4 = <h1>{element3}</h1>;


  // console.log(element)

  // let leri = "gajaviki"


  return (
    <>
    {element4}
    </>
  )
}

export default App
