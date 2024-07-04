import React from "react";
import southernAbout from "../../../../images/southern-about.png";
import southernHome from "../../../../images/southern-home.png";
import southernService from "../../../../images/southern-service.png";

const SoutherConstruction = () => {
  return (
    <section>
      <div className="py-32 px-5 md:px-0">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-violet-700 font-semibold">
            Souther Construction
          </h2>
          <div className="pt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <img
                className="shadow-xl rounded-lg"
                src={southernHome}
                alt="coding-home"
              />
              <img
                className="shadow-xl rounded-lg"
                src={southernAbout}
                alt="coding-course"
              />
              <img
                className="shadow-xl rounded-lg"
                src={southernService}
                alt="coding-course-details"
              />
            </div>
          </div>
          <div className="pt-12">
            <h3 className="text-2xl md:text-3xl text-violet-700 font-semibold">
              Project Name : Souther Construction
            </h3>
            <div className="pt-5">
              <h5 className="text-xl md:text-2xl text-dark font-medium">
                Project Features :
              </h5>
              <ul className="list-disc pl-8 pt-4">
                <li>This is a Construction Service Website.</li>
                <li>I have converted Figma to HTML</li>
              </ul>
            </div>
          </div>
          <div className="pt-12">
            <h5 className="text-xl md:text-2xl text-dark font-medium pb-4">
              Technology Used :
            </h5>
            <div className="flex flex-wrap">
              <span className="bg-violet-200 px-2 mr-2 mb-2 rounded-sm">
                HTML
              </span>
              <span className="bg-violet-200 px-2 mr-2 mb-2 rounded-sm">
                CSS
              </span>
              <span className="bg-violet-200 px-2 mr-2 mb-2 rounded-sm">
                Bootstrap
              </span>
              <span className="bg-violet-200 px-2 mr-2 mb-2 rounded-sm">
                JavaScript
              </span>
              <span className="bg-violet-200 px-2 mr-2 mb-2 rounded-sm">
                Jquery
              </span>
              <span className="bg-violet-200 px-2 mr-2 mb-2 rounded-sm">
                Figma
              </span>
            </div>
          </div>
          <div className="pt-8">
            <a
              href="https://southern-construction.netlify.app"
              rel="noreferrer"
              target="_blank"
              className="text-base text-white bg-violet-700 py-3 px-6 rounded-md hover:bg-violet-500 duration-300"
            >
              Live Website
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoutherConstruction;
