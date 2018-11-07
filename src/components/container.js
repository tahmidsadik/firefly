import React, { Component } from "react";

export default class Container extends Component {
  render() {
    return (
      <div className="container mx-auto">
        <div className="container mx-auto w-1/3 bg-grey-lighter mt-24 py-2 px-4 shadow-md">
          <p className="container mx-auto w-full text-center list-reset text-xl font-sans">
            A thing of beauty is a{" "}
            <span className="text-pink-light font-medium">joy</span> for ever
          </p>
          <p className="pt-4">
            Hello, <br />
            Thank you for passing by my website. You can learn more about me
            here.
          </p>
        </div>
      </div>
    );
  }
}
