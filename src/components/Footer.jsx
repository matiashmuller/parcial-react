import React from 'react';
import logo from './assets/logo.png';
import lk from './assets/lk.png';
import ig from './assets/ig.png';
import tw from './assets/tw.png';
import fb from './assets/fb.png';

const Footer = () => {
    return (
        <div className="bg-dark text-light text-center d-lg-flex">
            <div className="pt-5 col-lg-4">
                <div className="mb-5 mt-lg-2">
                    <a className="mr-3" href="https://www.linkedin.com/company/virbela/" target="_blank">
                        <img src={lk} alt="Follow us on Linkedin" width="30" title="Follow us on Linkedin"/>
                    </a>
                    <a className="mr-3" href="https://www.instagram.com/virbelahq/" target="_blank">
                        <img src={ig} alt="Follow us on Instagram" width="30" title="Follow us on Instagram"/>
                    </a>
                    <a className="mr-3" href="https://twitter.com/VirbelaHQ" target="_blank">
                        <img src={tw} alt="Follow us on Twitter" width="30" title="Follow us on Twitter"/>
                    </a>
                    <a href="https://www.facebook.com/Virbela/" target="_blank">
                        <img src={fb} alt="Follow us on Facebook" width="30" title="Follow us on Facebook"/>
                    </a>
                </div>
                <a href=".\index.html">
                    <img src={logo} alt="Home" width="70" title="Go up"/>
                </a>
            </div>
            <div className="p-5 col-lg-4">
                <h2>Contact us</h2>
                <ul className="list-unstyled">
                    <li className="mb-2">
                        <h4>Sales</h4>
                        <p>1 (844) 714-4210</p>
                    </li>
                    <li className="mb-2">
                        <h4>Press</h4>
                        <p>media@virbela.com</p>
                    </li>
                    <li>
                        <h4>Address</h4>
                        <p>1000 N Garden St, Bellingham, WA 98225, EE. UU.</p>
                    </li>
                </ul>
            </div>
            <div className="pb-5 pt-lg-5 col-lg-4">
                <h2>Location</h2>
                <div className="map-container">
                    <iframe className="mt-3"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5262.01809005433!2d-122.48143181107055!3d48.7435239968304!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485a3b860d114cf%3A0x4d5ebbdcc429072e!2s1000%20N%20Garden%20St%2C%20Bellingham%2C%20WA%2098225%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1683870303351!5m2!1ses-419!2sar"
                        style={{border:0}} allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    );
}

export default Footer;