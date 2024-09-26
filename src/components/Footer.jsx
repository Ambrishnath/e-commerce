import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="mb-0 text-center navbar-dark bg-dark py-3 sticky-top"style={{ position: "Fixed", top: "88%", width: "100%", height: "20%" }}>
        <div className="d-flex align-items-center justify-content-center pb-5">
          <div className="col-md-6">
            <p className="mb-3 mb-md-0 text-light">Made by- {" "}
              <a href="https://www.linkedin.com/in/ambrishnath/" className="text-decoration-underline text-light fs-5" target="_blank" rel="noreferrer">Ambrishnath Mishra</a>
            </p>
            <a className="text-light fs-4" href="https://github.com/Ambrishnath" target="_blank" rel="noreferrer">
              <i className="fa fa-github"></i>
            </a>
            &ensp;
            <a className="text-light fs-4" href="https://www.linkedin.com/in/ambrishnath/" target="_blank" rel="noreferrer">
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
