import React, { Component } from "react";

class Timer extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <p className="p-10"></p>
        <h1 className="text-3xl pb-5">
          When is the Release<span className="text-yellow-500">?</span>
        </h1>
        <h1 className="text-xl">
          The InfoBot is Currently in its Development Phase. The Current ETC for
          the Release is {""}
          <span className="text-yellow-500">10th October 2022</span>
        </h1>
        <h1 className="text-xl p-3">
          Currently We Are:{" "}
          <span className="text-yellow-500">Adding Articles</span>
        </h1>
      </React.Fragment>
    );
  }
}

export default Timer;
