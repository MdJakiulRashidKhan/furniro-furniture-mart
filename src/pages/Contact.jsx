import React from "react";
import ContactBanner from "../components/Contact/ContactBanner";
import GetInTouch from "../components/Contact/GetInTouch";
import GoogleMap from "../components/Contact/GoogleMap";
import Footer from "../components/Footer";
import Quality from "../components/Quality";

const Contact = () => {
  return (
    <div>
      <ContactBanner />
      <GetInTouch />
      <Quality />
      <GoogleMap />
      <Footer />
    </div>
  );
};

export default Contact;
