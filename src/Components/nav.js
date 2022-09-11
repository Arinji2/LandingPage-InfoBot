import React, { Component } from "react";

import "./Components.css";

class Nav extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="flex flex-row border-b-white border-b-2 rounded text-2xl pt-4 justify-between sticky top-0 z-50 bg-black-950 ">
          <p className="pl-5">
            InfoBot<span className="text-yellow-500">.</span>
          </p>
          <p className="pr-24"></p>
        </div>
      </React.Fragment>
    );
  }
}

export default Nav;
