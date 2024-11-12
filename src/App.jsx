import About from "./components/About/About"
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"
import NavBar from "./components/NavBar/NavBar"
import Projects from "./components/projects/Projects"

function App() {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <NavBar/>
      <Home/>
      <About/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App
