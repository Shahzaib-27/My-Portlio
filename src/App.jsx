import { BrowserRouter , Routes , Route } from "react-router-dom"


// Sign-UP-Form \ Login-Form
// import LoginPage from "./components/LoginPage.jsx"
// import Signupform from "./components/SignPage.jsx"

// HOME
// import Home from "./pages/portflio.jsx";


import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"



// Pages 
import AboutPage from './pages/About.jsx'
import ContactPage from './pages/Contact.jsx'
import ExperiencePage from './pages/Experience.jsx'
import ProjectsPage from './pages/Projects.jsx'
import SkillsPage from './pages/Skills.jsx'
import Home from "./pages/Home.jsx"

export default function App(){

return(
  <div>
    {/* <RouterProvider router = { router } /> */}
    <BrowserRouter>
        <Header/>
          <div className="min-h-screen">
            <Routes>  
              {/* HOME */}
              <Route path="/"  element={<Home/>} /> 

              {/* Sign-UP-Form \ Login-Form */}
              {/* <Route path="/"  element={<Signupform/>} />  */}
              {/* <Route path="/LoginPage"  element={<LoginPage/>} />  */}

              
              {/* PAGES */}
              <Route path="/aboutpage"  element={<AboutPage/>} /> 
              <Route path="/contactpage"  element={<ContactPage/>} /> 
              <Route path="/experiencepage"  element={<ExperiencePage/>} /> 
              <Route path="/projectspage"  element={<ProjectsPage/>} /> 
              <Route path="/skillspage"  element={<SkillsPage/>} /> 
            </Routes>
          </div>
        <Footer/>
    </BrowserRouter>
  </div>
);
}
