import React, { Component } from "react";
import Typed from "react-typed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import code from "../Assets/Pictures/code.jpg";
import "./Components.css";

class Heading extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div>
          <h3 className="pt-5 text-xl">
            <FontAwesomeIcon icon={faQuoteLeft} className="text-yellow-500" />
            Everything a Computer Student Requires, For Free
            <FontAwesomeIcon icon={faQuoteRight} className="text-yellow-500" />
          </h3>
        </div>
        <div className="p-10"></div>

        <div className="flex flex-row justify-center ">
          <div className="pl-5 md:pl-8 w-5/6 md:w-2/5 text-md md:text-xl border  rounded-full bg-black-950">
            <Typed
              className="float-left"
              strings={[
                "How to Reverse A Word?",
                "Check for Armstrong Number?",
                "Overloading a Function?",
                "Constructors within Classes?",
                "Toggle Case a Sentence",
                "Area of A Circle?",
                "Fibonacci Series?",
                "Greater Among 2 Strings?",
                "Swap Values of Variables",
              ]}
              typeSpeed={70}
              backSpeed={50}
              loop
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="relative right-5 md:right-10 pt-1 float-right text-yellow-500"
            />
          </div>
        </div>
        <div className="p-10"></div>
        <div className="flex justify-center border-b border-white pb-10 rounded-lg">
          <img
            src={code}
            alt={code}
            className="transition hover:cursor-pointer ease-in-out hover:scale-110 w-4/5 md:w-2/5 rounded-lg shadow-lg shadow-white "
          ></img>
        </div>
      </React.Fragment>
    );
  }
}

export default Heading;
