import React from "react";

const Footer = () => {
  return (
    <div className="container mx-auto pt-20">
      <footer className="footer  text-base-content p-10">
        <nav>
          <h6 className="footer-title">Funiro.</h6>
          <p>
            400 University Drive Suite <br /> 200 Coral Gables, <br /> FL 33134
            USA
          </p>
        </nav>
        <nav>
          <h6 className="footer-title">Links</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Shop</a>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Help</h6>
          <a className="link link-hover">Payment Options</a>
          <a className="link link-hover">Returns</a>
          <a className="link link-hover">Privacy Policies</a>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control w-80">
            <div className="join">
              <input
                type="text"
                placeholder="Enter your email address"
                className="input border-b-2 border-gray-300 join-item focus:outline-none focus:border-[#B88E2F]"
              />
              <button className="btn border-b-2 underline px-4 py-2 focus:outline-none">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
      <p className="text-gray-800 font-medium pt-3 ms-6">
        2023 furino. All rights reverved
      </p>
    </div>
  );
};

export default Footer;
