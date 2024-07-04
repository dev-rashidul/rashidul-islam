import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import contact from "../../../../images/contact.png";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2fezdti",
        "template_48lvgsh",
        form.current,
        "RvrTO6Xiu-Kjsbl9g"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset()
  };

  return (
    <section id='contact'>
      <div className="container mx-auto px-5 md:px-0 mt-32">
        <div className="contact-wrapper overflow-hidden">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-violet-700 font-semibold pb-16">
            Get In Touch
          </h2>
          <div className="md:flex justify-between items-center" data-aos="fade-right">
            <div className="w-full md:w-1/2 lg:pr-24">
              <form ref={form} onSubmit={sendEmail}>
                <div className="form-group mb-5">
                  <label className="text-lg text-violet-700">Name</label>
                  <input
                    className="input input-bordered w-full mt-2"
                    type="text"
                    name="name"
                    placeholder="Your Full Name"
                    required
                  />
                </div>
                <div className="form-group mb-5">
                  <label className="text-lg text-violet-700">Email</label>
                  <input
                    className="input input-bordered w-full mt-2"
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div className="form-group mb-5">
                  <label className="text-lg text-violet-700">Subject</label>
                  <input
                    className="input input-bordered w-full mt-2"
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-group mb-5">
                  <label className="text-lg text-violet-700">Message</label>
                  <textarea
                    className="textarea textarea-bordered w-full mt-2"
                    rows="3"
                    name="message"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div>
                  <input
                    className="text-base text-white bg-violet-700 py-3 px-6 rounded-lg w-full cursor-pointer hover:bg-violet-500 duration-300"
                    type="submit"
                    value="Submit"
                    required
                  />
                </div>
              </form>
            </div>
            <div className="w-full md:w-1/2 pt-16 pt-md-0" data-aos="fade-left">
              <div className="w-full md:w-2/3 mx-auto">
                <img src={contact} alt="contact" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
