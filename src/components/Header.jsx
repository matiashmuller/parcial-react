import React from 'react';
import logo from './assets/logo.png';
import lk from './assets/lk.png';
import ig from './assets/ig.png';
import tw from './assets/tw.png';
import fb from './assets/fb.png';

const Header = () => {
    //En este return solo UNA etiqueta que englobe todo lo demás,
    // en este por ej es el div
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                <a className="navbar-brand" href="https://matiashmuller.github.io/parcial-react/">
                    <img src={logo} alt="Logo" title="Virbela's MOTY" style={{width: 40}}/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar"
                    aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <button className="btn btn-outline-info my-2 my-sm-3 mr-3" type="submit">
                                <a href=".\index.html#details">Event details</a>
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-outline-danger my-2 my-sm-3" type="submit">
                                <a href=".\register.html">REGISTER NOW</a>
                            </button>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0 mr-md-3">
                        <a className="" href="https://www.linkedin.com/company/virbela/" target="_blank">
                            <img src={lk} alt="Follow us on Linkedin" width="20" title="Follow us on Linkedin"/>
                        </a>
                    </form>
                    <form className="form-inline my-2 my-lg-0 mr-md-3">
                        <a href="https://www.instagram.com/virbelahq/" target="_blank">
                            <img src={ig} alt="Follow us on Instagram" width="20"
                                title="Follow us on Instagram"/>
                        </a>
                    </form>
                    <form className="form-inline my-2 my-lg-0 mr-md-3">
                        <a href="https://twitter.com/VirbelaHQ" target="_blank">
                            <img src={tw} alt="Follow us on Twitter" width="20" title="Follow us on Twitter"/>
                        </a>
                    </form>
                    <form className="form-inline my-2 my-lg-0 mr-md-3">
                        <a href="https://www.facebook.com/Virbela/" target="_blank">
                            <img src={fb} alt="Follow us on Facebook" width="20" title="Follow us on Facebook"/>
                        </a>
                    </form>
                    <button id="darkMode" className="btn btn-outline-light btn-sm my-2 my-lg-0">Light</button>
                </div>
            </nav>
        </div>
    );
}

export default Header;