import About from "./components/About"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Testimonials from "./components/Testimonials"

function App() {

  return (
    <>
    <div className="bg-gray-200 w-full absolute">
       <Hero/>
       <About />
       <Testimonials />
       <Footer />
    </div>
    </>
  )
}

export default App
