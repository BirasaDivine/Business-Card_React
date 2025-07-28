import About from "./components/About"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Interests from "./components/Interests"
import './App.css'

function App() {
  

  return (
    <div className="head">
      <Header />
      <div className="middle">
        <About />
        <Interests />
      </div>
      <Footer />
    </div>
    
  )
}

export default App
