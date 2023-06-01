import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import lk from '../assets/lk.png';
import ig from '../assets/ig.png';
import tw from '../assets/tw.png';
import fb from '../assets/fb.png';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import '../App.css';

const Register = () => {

    const [oscuro, setTheme] = useState(false);

    const changeTheme = () => {
        setTheme(!oscuro)
    }

    useEffect(() => {
        const button = document.getElementById("darkMode");
        const register = document.getElementById("register");
        const form = document.getElementById("form");
        const btnRegister = document.getElementById("btnRegister");
        const btnReset = document.getElementById("btnReset");

        if (oscuro) {
            register.classList.add("bg-gradient-light");
            form.classList.add("bg-light-custom");
            form.classList.add("text-dark");
            btnRegister.classList.remove("btn-outline-danger")
            btnReset.classList.remove("btn-outline-info")
            btnRegister.classList.add("btn-danger")
            btnReset.classList.add("btn-info")
            button.innerHTML = "Dark"
        } else {
            register.classList.remove("bg-gradient-light");
            form.classList.remove("bg-light-custom");
            form.classList.remove("text-dark");
            btnRegister.classList.add("btn-outline-danger")
            btnReset.classList.add("btn-outline-info")
            btnRegister.classList.remove("btn-danger")
            btnReset.classList.remove("btn-info")
            button.innerHTML = "Light"
        };
    })

    return (
        <div id="registration">
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <Link className="navbar-brand" to="/parcial-react">
                        <img src={logo} alt="Logo" title="Virbela's MOTY" style={{ width: 40 }} />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar"
                        aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbar">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <button className="btn btn-outline-info my-2 my-sm-3 mr-3" type="submit">
                                    <HashLink to="/parcial-react#details">Event details</HashLink>
                                </button>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0 mr-md-3">
                            <a className="" href="https://www.linkedin.com/company/virbela/" target="_blank" rel="noreferrer">
                                <img src={lk} alt="Follow us on Linkedin" width="20" title="Follow us on Linkedin" />
                            </a>
                        </form>
                        <form className="form-inline my-2 my-lg-0 mr-md-3">
                            <a href="https://www.instagram.com/virbelahq/" target="_blank" rel="noreferrer">
                                <img src={ig} alt="Follow us on Instagram" width="20"
                                    title="Follow us on Instagram" />
                            </a>
                        </form>
                        <form className="form-inline my-2 my-lg-0 mr-md-3">
                            <a href="https://twitter.com/VirbelaHQ" target="_blank" rel="noreferrer">
                                <img src={tw} alt="Follow us on Twitter" width="20" title="Follow us on Twitter" />
                            </a>
                        </form>
                        <form className="form-inline my-2 my-lg-0 mr-md-3">
                            <a href="https://www.facebook.com/Virbela/" target="_blank" rel="noreferrer">
                                <img src={fb} alt="Follow us on Facebook" width="20" title="Follow us on Facebook" />
                            </a>
                        </form>
                        <button id="darkMode" onClick={changeTheme} className="btn btn-outline-light btn-sm my-2 my-lg-0">Light</button>
                    </div>
                </nav>
            </header>
            <main>
                <section id="register" className="d-flex align-items-center justify-content-center bg-gradient-dark">
                    <form id="form" className="text-center p-5 m-5 bg-dark" action="mailto:gabriel.molina@unahur.edu.ar"
                        method="post" enctype="text/plain">
                        <h2 className="mb-4">Join the Virbela's MOTY!</h2>
                        <div className="form-group">
                            <label for="firstName">Name</label>
                            <input type="text" name="First name" className="form-control" id="firstName" placeholder="First name" />
                        </div>
                        <div className="form-group">
                            <label for="lastName">Last name</label>
                            <input type="text" name="Last name" className="form-control" id="lastName" placeholder="Last name" />
                        </div>
                        <div className="form-group">
                            <label for="email">Your e-mail</label>
                            <input type="email" name="Email" className="form-control" id="email" aria-describedby="emailHelp"
                                placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                                else.</small>
                        </div>
                        <div className="form-group">
                            <label for="message">Your message</label>
                            <textarea name="Message" className="form-control" id="message" rows="3"></textarea>
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input mt-md-1 mt-lg-2" id="checkbox" />
                            <label className="form-check-label" for="checkbox">I agree to terms of service</label>
                        </div>
                        <div className="mt-4">
                            <button id="btnRegister" type="submit" className="btn btn-outline-danger btn-lg m-1">Register</button>
                            <button id="btnReset" type="reset" className="btn btn-outline-info btn-lg m-1">Reset</button>
                        </div>
                    </form>
                </section>
            </main>
        </div>
    );
}

export default Register;