import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {

const contactInfo = [
  {
  icon: <Mail size={20} />,
  title: "Email",
  value: "ShahzaibShahidr10@gmail.com",
  link: "mailto:ShahzaibShahidr10@gmail.com"
  },
  {
  icon: <Phone size={20} />,
  title: "WhatsApp",
  value: "+92 344 6949 382",
  link: "https://wa.me/923446949382",
    action: () => {
      const confirmOpen = window.confirm("Do you want to open WhatsApp chat?");
      if (confirmOpen) {
        window.open("https://wa.me/923446949382", "_blank");
      }
    }
  },
  {
  icon: <MapPin size={20} />,
  title: "Location",
  value: "Pakistan",
  link: "https://www.google.com/maps/place/LSH/@31.4083699,74.1637706,82m/data=!3m1!1e3!4m10!1m2!2m1!1sLSH,+436+D,+PGSHS,+Block+D+Pgshs+1,+Lahore!3m6!1s0x3918ffc3d9ab2239:0x301aed2f5a157a61!8m2!3d31.4083698!4d74.1643339!15sCipMU0gsIDQzNiBELCBQR1NIUywgQmxvY2sgRCBQZ3NocyAxLCBMYWhvcmVaKCImbHNoIDQzNiBkIHBnc2hzIGJsb2NrIGQgcGdzaHMgMSBsYWhvcmWSAQpyZXN0YXVyYW504AEA!16s%2Fg%2F11h874y9b4?entry=ttu&g_ep=EgoyMDI2MDMwOS4wIKXMDSoASAFQAw%3D%3D"
  }
  ];

  const formFields = [
  {
    label: "Name",
    type: "text",
    placeholder: "Your Full Name",
    name: "name"
    },
    {
    label: "Email",
    type: "email",
    placeholder: "your@email.com",
    name: "email"
    }
];

return (

<div className="bg-[linear-gradient(100deg,#000000,#131925,#141f58)] py-20 px-6">
  <div className="max-w-6xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-16">

    <h1 className="text-3xl font-bold  mb-4 bg-[linear-gradient(99deg,rgba(216,205,205,0.747),rgb(0,102,255))] bg-clip-text text-transparent">
    Get In Touch
    </h1>

    <p className="text-gray-300">
    Have a project in mind or want to collaborate? I'd love to hear from you!
    </p>

    </div>


    <div className="grid md:grid-cols-2 gap-16 items-start">


      {/* LEFT SIDE */}
      <div>
      <h3 className="text-xl font-semibold text-white mb-4">
      Contact:
      </h3>

      <p className="text-gray-300 mb-8">
      I'm always open to discussing new opportunities, interesting people,
      or just having a chat about technology and development. Feel free to reach out!
      </p>


      <div className="space-y-6">
        {contactInfo.map((item,index)=>(
        <div key={index} className="flex items-start gap-4">
        <div className="bg-blue-600 p-2 rounded-full text-white">
        {item.icon}
        </div>

        <div>
            <h4 className="text-white font-medium">
            {item.title}
            </h4>

            <a
            href={item.link}
            target="_blank"

            className="text-gray-400 hover:text-blue-400 transition"
            >
            {item.value}
            </a>

              </div>
            </div>
            ))}
        </div>
      </div>


      {/* RIGHT SIDE FORM */}
      <div className="bg-[#0f172a] p-8 rounded-xl shadow-lg">

        <form
        action="https://formspree.io/f/xojkwajk"
        method="POST"
        className="space-y-6"
        >

        {formFields.map((field,index)=>(

        <div key={index}>

        <label className="text-white text-sm">
        {field.label}
        </label>

        <input
        type={field.type}
        name={field.name}
        placeholder={field.placeholder}
        required
        className="w-full mt-2 p-3 rounded-lg bg-transparent border border-gray-500 text-white focus:outline-none"
        />

        </div>

        ))}


          <div>

            <label className="text-white text-sm">
            Message
            </label>

            <textarea
            name="message"
            rows="4"
            placeholder="Tell me about your project or just say hello!"
            required
            className="w-full mt-2 p-3 rounded-lg bg-transparent border border-gray-500 text-white
            focus:outline-none"
            >
            
            </textarea>

          </div>


          <button
          type="submit"
          className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 
          transition px-6 py-3 rounded-lg text-white w-full"
          >
          <Send size={18}/>
          Send Message
          </button>

        </form>

      </div>
    </div>
  </div>
</div>

);
}