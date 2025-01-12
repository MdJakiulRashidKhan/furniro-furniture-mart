import React from "react";

const GoogleMap = () => {
  return (
    <div className="w-full md:w-1/2 mx-auto text-center py-8 space-y-3">
      <h6 className="text-2xl font-semibold mb-4">Our Location</h6>
      <div className="relative w-full h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4490.527946438701!2d90.3662592!3d23.838329299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c16da106644d%3A0xf414c9bfac137ced!2z4KaX4KeL4KaB4KaH4Kao4KeL4Kat4Ka_4Kav4Ka84Ka-4KawIOCmsuCmv-CmruCmv-Cmn-Cnh-CmoS0g4KaH4KafIOCmuOCmvuCmsOCnjeCmreCmv-CmuCB8IOCmh-CmnyDgppXgpqjgprjgpr7gprLgpp_gpr_gpoIg4Kar4Ka-4Kaw4KeN4Kau!5e1!3m2!1sbn!2sbd!4v1736617802977!5m2!1sbn!2sbd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMap;
