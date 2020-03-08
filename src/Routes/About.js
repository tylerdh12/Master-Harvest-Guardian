import React from "react";

export default function About(props) {
  return (
    <div className="cover-container h-100 d-flex p-3 mx-auto flex-column">
      <header className="">
        <div className="container rounded-corners neumorphic text-dark h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center">
              <h1 className="font-weight-light p-4 mt-5 mb-0">
                Vertically Centered Masthead Content
              </h1>
              <p className="lead p-4 mt-0">
                A great starter layout for a landing page
              </p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
