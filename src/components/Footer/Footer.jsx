import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="footer mb-3 mt-2 p-2">
            <h3 className="text-center">Made with 💖 Abhay &copy;{year}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
