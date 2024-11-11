import { useEffect, useRef } from "react"
import About from "./sections/About"
import Contact from "./sections/Contact"
import Experience from "./sections/Experience"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import Navbar from "./sections/Navbar"
import Project from "./sections/Project"
import NotFoundDialog from "./components/NotFoundDialog"

const App = () => {
  const dialogRef = useRef()
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Project dialogRef={dialogRef}/>
      <NotFoundDialog open dialogref={dialogRef}/>
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}

export default App