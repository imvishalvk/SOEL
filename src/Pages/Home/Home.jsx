import React from 'react'
import Header from '../../Components/header/Header'
import Hero1 from '../../Components/Hero Section/Hero1'
import Subjects from '../../Components/Subjects/Subjects'
import About from '../../Components/About/About'
import FAQSection from '../../Components/FAQ/FAQSection'
import CourseSection from '../../Components/Courses/CourseSection'
import Recognition from '../../Components/Recognition/Recognition'
import Footer from '../../Components/Footer/Footer'

function Home() {
  return (
    <>
      <Header/>
      <Hero1/>
      <Subjects/>
      <About/>
      <FAQSection/>
      <CourseSection/>
      <Recognition/>
      <Footer/>
    </>
  )
}

export default Home