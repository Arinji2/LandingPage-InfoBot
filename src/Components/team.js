import React, { Component } from "react";
import Arinji from "../Assets/Pictures/Arinji.png";
import Vedika from "../Assets/Pictures/Vedika.jpeg";
import Nilay from "../Assets/Pictures/Nilay.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
class Team extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <p className="p-10"></p>
        <h1 className="text-3xl pb-5">
          Meet the <span className="text-yellow-500">Executives</span>
        </h1>
        <div className="flex items-center md:justify-around pt-5 pb-5 flex-col md:flex-row space-y-8 md:space-y-0">
          <div className="p-3 pb-5 shadow-md shadow-white transition hover:cursor-pointer ease-in-out hover:scale-110 rounded-lg">
            <div className="relative text-transparent transition ease-in-out duration-500 hover:text-black-950 ">
              <img
                src={Vedika}
                alt={Vedika}
                className="rounded-lg pb-3 h-56 w-56"
              ></img>
              <div className="absolute bottom-0 ml-3 mb-5 text-xl ">
                <a href="mailto:vedikapanjwani115@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} className="" />
                </a>
              </div>
              <div className="absolute bottom-0 right-0 mr-3 mb-5 text-xl">
                <a
                  href="https://www.instagram.com/vedika_panjwani/"
                  target="_blank"
                  rel="noreferrer"
                  className=""
                >
                  <FontAwesomeIcon icon={faInstagram} className="" />
                </a>
              </div>
            </div>
            <p className="p-3 border-t-2 border-white text-2xl">
              Vedika Panjwani
            </p>
            <p className="pb-3 text-yellow-500 text-xl">
              Chief Operating Officer
            </p>
            <p className="w-56 break-words text-md">
              An ambivert, someone with whom you become friends very easily.
              Hardcore bollywood fan and hence adapts to the situation easily.
              Loves computer applications, yellow lays and the sky.
            </p>
          </div>
          <div className="p-3 shadow-md shadow-white transition hover:cursor-pointer ease-in-out hover:scale-110 rounded-lg">
            <div className="relative text-transparent transition ease-in-out duration-500 hover:text-black-950 ">
              <img
                src={Arinji}
                alt={Arinji}
                className="rounded-lg pb-3 h-56 w-56"
              ></img>
              <div className="absolute bottom-0 ml-3 mb-5 text-xl ">
                <a href="mailto:arinjaydhar205@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} className="" />
                </a>
              </div>
              <div className="absolute bottom-0 right-0 mr-3 mb-5 text-xl">
                <a
                  href="https://www.instagram.com/34arinji/"
                  target="_blank"
                  rel="noreferrer"
                  className=""
                >
                  <FontAwesomeIcon icon={faInstagram} className="" />
                </a>
              </div>
            </div>
            <p className="p-3 border-t-2 border-white text-2xl">Arinjay Dhar</p>
            <p className="pb-3 text-yellow-500 text-xl">
              Chief Executive Officer
            </p>
            <p className="w-56 break-words">
              Creator of the Site, Extroverted and Excited. Loves coding in
              React Js and aspires to work for Google. Exceptionally bad at
              Hindi and has a weird American Accent. Caffeinated 24/7.
            </p>
          </div>
          <div className="p-3 shadow-md shadow-white transition hover:cursor-pointer ease-in-out hover:scale-110 rounded-lg">
            <div className="relative text-transparent transition ease-in-out duration-500 hover:text-black-950 ">
              <img
                src={Nilay}
                alt={Nilay}
                className="rounded-lg pb-3 h-56 w-56"
              ></img>
              <div className="absolute bottom-0 ml-3 mb-5 text-xl ">
                <a href="mailto:nilay.bagchia7@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} className="" />
                </a>
              </div>
              <div className="absolute bottom-0 right-0 mr-3 mb-5 text-xl">
                <a
                  href="https://www.instagram.com/117nilay/"
                  target="_blank"
                  rel="noreferrer"
                  className=""
                >
                  <FontAwesomeIcon icon={faInstagram} className="" />
                </a>
              </div>
            </div>
            <p className="p-3 border-t-2 border-white text-2xl">Nilay Bagchi</p>
            <p className="pb-3 text-yellow-500 text-xl">
              Chief Financial Officer
            </p>
            <p className="w-56 break-words">
              Calm, Cool and Collected. The chill guy you would go to when you
              feel low. Hopes for depression to be eradicated from the world,
              and does his best to help others against it.
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Team;
