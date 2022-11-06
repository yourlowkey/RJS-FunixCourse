import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="row">
        <div className="col-6 align-items-center d-flex justify-content-center">
          <div className=" d-flex justify-content-center flex-column">
            <h1>Our Address</h1>
            <p>121, Clear Water Bay Road</p>
            <p>Clear Water Bay , Kowwlo</p>
            <b>HONG KONG</b>
            <div>
              <FontAwesomeIcon icon="fa-solid fa-phone" />: +825 4675 4347
            </div>
            <div>
              <FontAwesomeIcon icon="fa-solid fa-phone-office" />: +825 4675 4347
            </div>
            <div>
              <FontAwesomeIcon icon="fa-solid fa-envelope" />: confusion@gmail.com
            </div>
          </div>
        </div>
        <div className="col-6 align-items-center d-flex justify-content-center">
          <img
            className="logo"
            src="https://www.sendible.com/hs-fs/hubfs/blog-import/2020/20-08-Aug/sm-icons-facebook-logo.png?width=180&name=sm-icons-facebook-logo.png"
          />
          <img
            className="logo"
            src="https://www.sendible.com/hs-fs/hubfs/blog-import/2022/07-22-Jul/every-social-media-logo-and-icon-in-one-handy-place-instagram-app-logo.png?width=174&name=every-social-media-logo-and-icon-in-one-handy-place-instagram-app-logo.png"
          />
          <img
            className="logo"
            src="https://www.sendible.com/hs-fs/hubfs/Imported_Blog_Media/twitter-1.png?width=180&height=180&name=twitter-1.png"
          />
          <img
            className="logo"
            src="https://www.sendible.com/hs-fs/hubfs/blog-import/2020/20-08-Aug/sm-icons-linkedin-in-logo.png?width=120&name=sm-icons-linkedin-in-logo.png"
          />
          <img
            className="logo"
            src="https://www.sendible.com/hs-fs/hubfs/Imported_Blog_Media/pinterest.png?width=180&name=pinterest.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
