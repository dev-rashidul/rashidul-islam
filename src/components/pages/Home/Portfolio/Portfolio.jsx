import React from "react";
import { Link } from "react-router-dom";
import promki from "../../../../images/promki.png";
import southernConstruction from "../../../../images/southern-construction.png";
import techinsightHub from "../../../../images/techinsight-hub.png";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="portfolio-wrapper px-5 md:px-0 mt-32 overflow-hidden">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-violet-700 font-semibold pb-16">
            Projects
          </h2>
          <div className="md:flex">
            <div
              className="w-full md:w-1/2 lg:w-1/3 px-0 md:px-5 mb-10 md:mb-0"
              data-aos="fade-up-right"
            >
              <div className="portfolio-card relative">
                <div className="rounded-lg">
                  <img src={techinsightHub} alt="Techinsight Hub" />
                </div>
                <h3 className="text-2xl text-violet-700 font-semibold p-8">
                  Techinsight Hub
                </h3>
                <div className="portfolio-content">
                  <Link
                    to="/techinsight"
                    className="text-base text-white bg-violet-700 py-3 px-5 rounded-md hover:bg-violet-500 duration-300"
                  >
                    Project Details
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="w-full md:w-1/2 lg:w-1/3 px-0 md:px-5 mb-10 md:mb-0"
              data-aos="fade-down-left"
            >
              <div className="portfolio-card relative">
                <div className="rounded-lg">
                  <img src={southernConstruction} alt="Southern Construction" />
                </div>
                <h3 className="text-2xl text-violet-700 font-semibold p-8">
                  Southern Construction
                </h3>
                <div className="portfolio-content">
                  <Link
                    className="text-base text-white bg-violet-700 py-3 px-5 rounded-md hover:bg-violet-500 duration-300"
                    to="/souther-construction"
                  >
                    Project Details
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="w-full md:w-1/2 lg:w-1/3 px-0 md:px-5 mb-10 md:mb-0"
              data-aos="fade-up-left"
            >
              <div className="portfolio-card relative">
                <div className="rounded-lg">
                  <img src={promki} alt="promki" />
                </div>
                <h3 className="text-2xl text-violet-700 font-semibold p-8">
                  Promki
                </h3>
                <div className="portfolio-content">
                  <Link
                    to="/Promki"
                    className="text-base text-white bg-violet-700 py-3 px-5 rounded-md hover:bg-violet-500 duration-300"
                  >
                    Project Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
