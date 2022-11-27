import React from "react";

export default function FooterComp(props) {
  return (
    <div className="d-flex flex-column">
      <footer className="footer neumorphic">
        <p className="text-center mx-auto p-2 pt-4">
          Copyright &copy; 2020 | {' '}
          <a href="https://tylerharper.dev">Tyler Harper</a>
        </p>
      </footer>
    </div>
  );
}
