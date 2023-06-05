import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer p-10 bg-neutral text-neutral-content">
        <div className="text-center md:pl-40">
          <h2 className="text-3xl font-medium">CONTACT US</h2>
          <p className="mt-6">
            123 ABS Street, Uni 21, Bangladesh <br /> +88 123456789 <br /> Mon -
            Fri: 08:00 - 22:00 <br /> Sat - Sun: 10:00 - 23:00
          </p>
        </div>
        <div className="md:pl-40">
          <h2 className="text-3xl font-medium">Follow US</h2>
          <p className="font-medium text-lg my-4">Join us on social media</p>
          <div className="flex gap-8">
            <div>
              <FaFacebookF className="text-3xl"></FaFacebookF>
            </div>
            <div>
              <FaInstagram className="text-3xl"></FaInstagram>
            </div>
            <div>
              <FaTwitter className="text-3xl"></FaTwitter>
            </div>
          </div>
        </div>
      </div>
      <div className="footer footer-center p-4 bg-black text-white">
        <div>
          <p>Copyright © 2023 - CulinaryCloud. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;