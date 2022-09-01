import React from "react";

function Map() {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9022169588425!2d-0.06435038469131735!3d51.515009917968435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cccd1b8a40b%3A0x4c6ec11c8e244032!2s9%20New%20Rd%2C%20London%20E1%201HE%2C%20UK!5e0!3m2!1sen!2sbd!4v1659157606329!5m2!1sen!2sbd"
        width="100%"
        height="450"
        //style="border:0;"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="map"
      ></iframe>
    </div>
  );
}

export default Map;
