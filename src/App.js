import './App.css'
import {
  Contact,
  Question,
  Footer,
  Hero,
  Info,
  Navbar,
  Testimonials
} from './Components'
function App () {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <Info />
      <Testimonials />
      <Contact />
      <Question />
      <Footer />
    </div>
  )
}

export default App
