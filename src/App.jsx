import './App.css'
import About from './Components/About/About'
import CourseSection from './Components/Courses/CourseSection'
import Footer from './Components/Footer/Footer'
import Header from './Components/header/Header'
import FAQSection from './Components/FAQ/FAQSection'
import Subjects from './Components/Subjects/Subjects'
import Recognition from './Components/Recognition/Recognition'
import Hero1 from './Components/Hero Section/Hero1'



function App() {

  return (
    <>
      <Header/>
      <Hero1/>
      <Subjects/>
      <About />
      <FAQSection/>
      <CourseSection/>
      <Recognition/>
      <Footer/>

    </>
  )
}

export default App
