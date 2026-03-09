import React from 'react';


// pages
import HeroScetionPage from "../components/HeroScetion.jsx"
import AboutPage from "../pages/About.jsx"
import SkillsPage from "../pages/Skills.jsx"
import ProjectsPage from "../pages/Projects.jsx"
import ContactPage from "../pages/Contact.jsx"
import Experience  from '../pages/Experience.jsx'

export default function Home() {
  return (
      <>
      <div className="min-h-screen">
        <HeroScetionPage/>
        <AboutPage/>
        <SkillsPage/>
        <Experience/>
        <ProjectsPage/>
        <ContactPage/>
      </div>
      </>
  )
}
