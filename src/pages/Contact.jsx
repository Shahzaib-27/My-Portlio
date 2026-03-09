import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {

const contactInfo = [
    {
    icon: <Mail size={20} />,
    title: "Email",
    value: "ShahzaibShahid@example.com"
    },
    {
    icon: <Phone size={20} />,
    title: "Phone",
    value: "+92 XXX XXXXXXX"
    },
    {
    icon: <MapPin size={20} />,
    title: "Location",
    value: "Pakistan"
    }
];

const formFields = [
    {
    label: "Name",
    type: "text",
    placeholder: "Your Full Name"
    },
    {
    label: "Email",
    type: "email",
    placeholder: "your@email.com"
    }
];

return (

<div className="bg-[linear-gradient(100deg,#000000,#131925,#141f58)] py-20 px-6">

    <div className="max-w-6xl mx-auto">

      {/* Heading */}
      <div className="text-center mb-16">
      <h1 className="text-3xl font-bold text-white mb-4">
      Get In Touch
      </h1>

      <p className="text-gray-300">
      Have a project in mind or want to collaborate?
      I'd love to hear from you!
      </p>
      </div>


      <div className="grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT SIDE */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
          Lets Connect
          </h3>

          <p className="text-gray-300 mb-8">
          I'm always open to discussing new opportunities,
          interesting people, or just having a chat about technology
          and development. Feel free to reach out!
          </p>

          <div className="space-y-6">

          {contactInfo.map((item,index)=>(
          <div key={index} className="flex items-start gap-4">

          <div className="bg-blue-600 p-2 rounded-full">
          {item.icon}
        </div>

        <div>
        <h4 className="text-white font-medium">
        {item.title}
        </h4>

        <p className="text-gray-400">
        {item.value}
        </p>
        </div>

        </div>
        ))}

        </div>

        </div>


        {/* RIGHT SIDE FORM */}
        <div className="bg-[#0f172a] p-8 rounded-xl shadow-lg">

        <form className="space-y-6" >

            {formFields.map((field,index)=>(
            <div key={index}>
            <label className="text-white text-sm">
            {field.label}
            </label>

            <input
            type={field.type}
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
          rows="4"
          placeholder="Tell me about your project or just say hello!"
          className="w-full mt-2 p-3 rounded-lg bg-transparent border border-gray-500 text-white focus:outline-none"
          ></textarea>

          </div>


          <button
          type="submit"
          className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg text-white w-full"
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