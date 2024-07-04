import React from "react";
import techinsightBlogDetails from "../../../../images/techinsight-blog-details.png";
import techinsightHome from "../../../../images/techinsight-home.png";
import techinsightProfile from "../../../../images/techinsight-profile.png";


const Techinsight = () => {
  return (
    <section>
      <div className="py-32 px-5 md:px-0">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-violet-700 font-semibold">
            Techinsight Hub
          </h2>
          <div className="pt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <img
                className="shadow-xl rounded-lg"
                src={techinsightHome}
                alt="runigo-home"
              />
              <img
                className="shadow-xl rounded-lg"
                src={techinsightBlogDetails}
                alt="runigo-mentor"
              />
              <img
                className="shadow-xl rounded-lg"
                src={techinsightProfile}
                alt="runigo-lesson"
              />
            </div>
          </div>
          <div className="pt-12">
            <h3 className="text-2xl md:text-3xl text-violet-700 font-semibold">
              Project Name : Techinsight Hub
            </h3>
            <div className="pt-5">
              <h5 className="text-xl md:text-2xl text-dark font-medium">
                Project Features :
              </h5>
              <ul className="list-disc pl-8 pt-4">
                <li>This is a Technoloy Blog Website</li>
                <li>
                  In this Website has Blog Post, Edit and Delete option.
                </li>
                <li>This Website has Custom Login/Registration Option.</li>
              </ul>
            </div>
          </div>
          <div className="pt-12">
            <h5 className="text-xl md:text-2xl text-dark font-medium pb-4">
              Technology Used :
            </h5>
            <div className="flex flex-wrap">
              <span className="bg-violet-200 px-2 mr-2 mb-2 rounded-sm">HTML</span>
              <span className="bg-violet-200 px-2 mr-2 mb-2 rounded-sm">CSS</span>
              <span className="bg-violet-200 px-2 mr-2 mb-2 rounded-sm">
                Tailwind
              </span>
              <span className="bg-violet-200 px-2 mr-2 mb-2 rounded-sm">
                ReactJS
              </span>
              <span className="bg-violet-200 px-2 mr-2 mb-2 rounded-sm">NodeJS</span>
              <span className="bg-violet-200 px-2 mr-2 mb-2 rounded-sm">MongoDB</span>
            </div>
          </div>
          <div className="pt-8">
            <a href="https://techinsight-hub.vercel.app" target="_blank"
              className="text-base text-white bg-violet-700 py-3 px-6 rounded-md hover:bg-violet-500 duration-300" rel="noreferrer"
              
            >
              Live Website
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Techinsight;
