
import './App.css'
import { NavigationBar } from './components/NavigationBar'
import Hello from './components/Hello'
import { Cards } from './components/Cards'
import { Card2 } from './components/Card2'
import { Card3 } from './components/Card3'
import Footer from './components/Footer'
import ContactUs from './components/ContactUs'
function App() {
 
  return (
    <>
     <NavigationBar />
     <Hello />
     <Cards />
     <Card2 />
     <Card3 />
     <ContactUs />
     <Footer />
    </>
  )
}

export default App
