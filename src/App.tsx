import { Outlet } from "react-router-dom";
import { Header } from "./components/header";


function App() {
  return (
    <>
    <Header />
    <div style={{
      marginTop:"50px"
    }}><Outlet/></div>
    </>
  )
}

export default App
