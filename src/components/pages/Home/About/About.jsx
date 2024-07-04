import React from "react";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  return (
    <section id="about">
      <div className="about-wrapper md:mt-10 px-5 md:px-0 overflow-hidden">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-violet-700 font-semibold pb-16">
            About Myself
          </h2>
          <div className="md:flex">
            <div className="w-full md:w-2/3 md:pr-10">
              <div className="about-content" data-aos="fade-right">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold pb-4 md:pb-8">
                  Hi, I am{" "}
                  <span className="text-violet-700 font-bold">
                    <Typewriter
                      words={[
                        "Rashidul Islam",
                        "Web Developer",
                        "Freelancer",
                      ]}
                      loop={5}
                      cursor
                      cursorStyle="."
                      typeSpeed={20}
                      deleteSpeed={30}
                      delaySpeed={1000}
                    />
                  </span>
                </h3>
                <p>
                  Hi, I am Rashidul Islam a professional Web Developer and
                  Freelencer. I am working as a Web Developer for more than 3
                  years. I am very passionate about this field and I can quickly
                  adopt any new technologies and this is my key point.
                </p>
                <br />
                <p>
                  I can create any type of outstanding Website based on clients'
                  needs. I am working as a MERN Stack Developer. I already did
                  some MERN projects. My skills : JavaScript, React.js, Node.js,
                  MongoDB, TypeScript, Next.js etc.
                </p>
                <br />
                <p>
                  Basically, I do that to solve problems and help
                  companies/businesses. Also, I do that to increase my
                  knowledge, achieve new skills and improve myself. I think by
                  doing this I can provide value for any company through my
                  work.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 mt-12 md:mt-0" data-aos="fade-left">
                <div className="about-info">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-violet-50 ring-2 ring-violet-700 rounded-lg text-center py-5">
                            <h4 className="text-xl text-violet-700 font-semibold">Experience</h4>
                            <span className="text-md text-violet-600 font-bold">3 Years +</span>
                        </div>
                        <div className="bg-violet-50 ring-2 ring-violet-700 rounded-lg text-center py-5">
                            <h4 className="text-xl text-violet-700 font-semibold">Completed Project</h4>
                            <span className="text-md text-violet-600 font-bold">210 +</span>
                        </div>
                        <div className="bg-violet-50 ring-2 ring-violet-700 rounded-lg text-center py-5">
                            <h4 className="text-xl text-violet-700 font-semibold">Happy Clients</h4>
                            <span className="text-md text-violet-600 font-bold">207 +</span>
                        </div>
                        <div className="bg-violet-50 ring-2 ring-violet-700 rounded-lg text-center py-5">
                            <h4 className="text-xl text-violet-700 font-semibold">Support</h4>
                            <span className="text-md text-violet-600 font-bold">24/7</span>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
