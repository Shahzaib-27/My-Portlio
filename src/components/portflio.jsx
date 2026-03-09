import { useRef } from "react";
import { React,  useState } from "react";


function DATA(){

const Homebtn = useRef();
const Scrolltohome = () => {
    Homebtn.current.scrollIntoView({behavior : "smooth"}) ;
}

const aboutbtn = useRef();
const Scrolltoabout = () => {
    aboutbtn.current.scrollIntoView({behavior : "smooth"}) ;
}

 const Skillsbtn = useRef();
const Scrolltoskills = () => {
    Skillsbtn.current.scrollIntoView({behavior : "smooth"}) ;
}

const Experiencebtn = useRef();
const ScrolltoaExperiencebtn = () => {
    Experiencebtn.current.scrollIntoView({behavior : "smooth"}) ;
}

const Projectsbtn = useRef();
const ScrolltoProjectsbtn = () => {
    Projectsbtn.current.scrollIntoView({behavior : "smooth"}) ;
}

const Contactbtn = useRef();
const ScrolltoContactbtn = () => {
    Contactbtn.current.scrollIntoView({behavior : "smooth"}) ;
}

const [dark, setDark] = useState(false);


const Names = [
  { title:"HTML" },
  { title:"CSS" },
  { title:"JAVASCRIPT" },
  { title:"TYPESCRIPT" },
  { title:"REACT" },
  { title:"GITHUB" },
  { title:"Tailwind" },
]


return(
    <>

<header>
    <nav>
        <div className="navdata_head">
            <div className="navdata font-extralight">
              
                <h3 onClick = { Scrolltohome } >Home</h3>
                <h3 onClick = { Scrolltoabout } >About</h3>
                <h3 onClick = { Scrolltoskills} >Skills</h3>
                <h3 onClick = { ScrolltoaExperiencebtn } >Experience</h3>
                <h3 onClick = { ScrolltoProjectsbtn } >Projects</h3>
                <h3 onClick = { ScrolltoContactbtn }>Contact</h3>
              </div>
            
        </div>
    </nav>
</header>


<main>
    <div className="Main_section" ref={Homebtn}>
        <div className="Main_section_data">
          <h1>Shahzaib Shahid</h1><br />
          <h5>Front-End Developer</h5><br />
          <p>Passionate Front-End Developer dedicated to <br />
            building scalable,efficent and creative solutions
          </p>
          <br />

      <button>
        <i className="fa-regular fa-envelope"></i>
        Hire me
      </button>

    </div>
    </div>

    <div className="Main_section_data_1" ref={aboutbtn}>
          <h1 className="font-bold text-3xl ">About me</h1>
        <div className="About_me_data">
            <img src="./images/WhatsApp Image 2025-11-10 at 14.01.54_27a47e78.jpg" alt="randomimg" />
        <div className="About_me_data_context">
            <h3 className="font-bold">Shahzaib Shahid</h3>
            <h4>Front-End Developer</h4>
            <p>I'm a passionate front-end developer with hands-on experience in building responsive and interactive web
                applications. My work is driven by a commitment to creating user-friendly, visually appealing,
                and high-performance interfaces.  <br /> <br />

I specialize in modern front-end technologies, including HTML, CSS, JavaScript, React, and Next.js, and 
I enjoy leveraging tools like Sass, Tailwind, and Framer Motion to bring designs to life. <br /><br />
I'm always eager to learn new frameworks, experiment with cutting-edge techniques, and 
tackle projects that challenge my skills. <br /><br />

When I'm not coding, I enjoy exploring UI/UX trends, contributing to open-source projects,
and staying up-to-date with the latest developments in web technology to continuously improve my craft. <br />
</p>
</div>
        </div>
    </div>


    <div className="skill_Tecnology_section_header" ref={Skillsbtn}>
        <div className="skill_Tecnology_section">
            <h1>Skills & Tecnology</h1>
            <p>Here are the tecnology and tools I work with to bring idea to life</p>
            <div className="skill_Tecnology_section_data">
               {Names.map((items, index) => (
                  <div key={index} className=" ">
                    <h1 className="mr-10 ">{items.title} </h1>
                  </div>
                ))}
            </div>
        </div>
    </div>


    <div className="Experience_section_header" ref={Experiencebtn}>
        <div className="Experience_Tecnology_section">
            <h1>Experience</h1>
            <p>MY professional journey and the experience that have shaped my career</p>
            <div className="Experience_Tecnology_data">
                <p>Experience Details will appear here once edit by admin</p>
            </div>
        </div>
    </div>



    <div className="Projects_section_header" ref={Projectsbtn}>
        <div className="Projects_Tecnology_section">
            <h1>Featured Projects</h1>
            <p>Here are some of the projects i`ve worked in that showcase my skills and experience</p>

            <div className="Projects_Tecnology_data" 
            onClick = { () => window.open("https://vercel.com/shahzaibs-projects-16eb6656", "_blank")} >
              <p>Click to see Projects</p>
            </div>
        </div>
    </div>


    <div className="Get_In_Touch_section_header" ref={Contactbtn}>

  <div className="Get_In_Touch_section">


    <div className="Get_In_Touch_section_headigs">
      <h1>Get In Touch</h1>
      <p>
        Have a project in mind or want to collaborate?
        Id love to hear from you!
      </p>
    </div>


    <div className="Get_In_Touch_section_data">

      <div className="Get_In_Touch_section_data_1">
        <h3>Lets Connect</h3>
        <p>
          Im always open to discussing new opportunities, <br />
          interesting people, or just having a chat about
          technology <br /> and development. Feel free to reach out!
        </p>

        <div className="Get_In_Touch_section_data_1_icons">

          <div className="icon_item">
            <i className="fa-regular fa-envelope"></i>
            <span>Email <br /></span>
            <p>ShazaibShahid@example.com</p>
          </div>

          <div className="icon_item">
            <i className="fa-solid fa-phone"></i>
            <span>Phone</span>
            <p>+92 XXX XXXXXX</p>
          </div>

          <div className="icon_item">
            <i className="fa-solid fa-location-dot"></i>
            <span>Location</span>
            <p>Pakistan</p>
          </div>

        </div>
      </div>

    
      <div className="Get_In_Touch_section_data_2">
        <form className="forms">

          <div className="form_group">
            <label>Name</label>
            <input type="text" placeholder="Your Full Name" required />
          </div>

          <div className="form_group">
            <label>Email</label>
            <input type="email" placeholder="your@email.com" required />
          </div>

          <div className="form_group">
            <label>Message</label>
            <textarea
              placeholder="Tell me about your project or just say hello!"
              required
            ></textarea>
          </div>

          <div className="butoon_Style">
            <button type="submit">
              <i className="fa-brands fa-telegram"></i>
              Send Message
            </button>
          </div>

        </form>
      </div>

    </div>

  </div>

    </div>



</main>


<footer>
    <div className="Footer_Section ">
        <p >
            @ {new Date().getFullYear()} Shahzaib Shahid. All rights reserved.
        </p>
    </div>
</footer>
                   
</>
);
}

export default DATA;