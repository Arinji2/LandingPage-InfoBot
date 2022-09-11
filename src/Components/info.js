import React, { Component } from "react";
import "./Components.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
class Info extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <p className="p-10"></p>
        <h1 className="text-3xl pb-5">
          About the InfoBot<span className="text-yellow-500">?</span>
        </h1>
        <div className="flex items-center md:justify-around pt-5 pb-5 flex-col md:flex-row space-y-8 md:space-y-0">
          <div className="pb-3 w-2/3 md:w-2/5 shadow-md shadow-white transition hover:cursor-pointer ease-in-out hover:scale-110 rounded-lg">
            <p className="text-center text-5xl p-5">
              <FontAwesomeIcon icon={faCode} />
            </p>
            <p className="text-yellow-500 text-2xl p-3">Java Programs</p>
            <p>
              InfoBot contains Java Program, all error checked and fine tuned
              for School Use. Just Search, Understand, Copy and Paste into your
              favorite IDE.
            </p>
          </div>
          <div className="pb-3 w-2/3 md:w-2/5 shadow-md shadow-white transition hover:cursor-pointer ease-in-out hover:scale-110 rounded-lg">
            <p className="text-center text-5xl p-5">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </p>
            <p className="text-yellow-500 text-2xl p-3">Indexed</p>
            <p>
              Long Gone are the Days of looking through huge Lists, All of the
              Topics are organized into Sections, each having its own Search
              Engine type Interface.
            </p>
          </div>
        </div>
        <div className="border-b-2 rounded-lg border-white pb-10 flex justify-center items-center pt-5 flex-col md:">
          <div className="pb-3 w-2/3 md:w-2/5 shadow-md shadow-white transition hover:cursor-pointer ease-in-out hover:scale-110 rounded-lg">
            <p className="text-center text-5xl p-5">
              <FontAwesomeIcon icon={faUser} />
            </p>
            <p className="text-yellow-500 text-2xl p-3">User Friendly</p>
            <p>
              Here at InfoBot we value Understanding over Memorizing. Each
              Program Article has 2 sets of explanations, one for the Program
              itself and one for the Logic.
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Info;
