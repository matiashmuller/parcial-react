import React from 'react';
import logo from './assets/logo.png';
import lk from './assets/lk.png';
import ig from './assets/ig.png';
import tw from './assets/tw.png';
import fb from './assets/fb.png';
import uno from './assets/1.jpg';
import dos from './assets/2.jpg';
import tres from './assets/3.jpg';
import cuatro from './assets/4.jpg';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Home = () => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                    <HashLink className="navbar-brand" to={"/parcial-react#titulo"}>
                        <img src={logo} alt="Logo" title="Virbela's MOTY" style={{ width: 40 }} />
                    </HashLink>
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
                            <li className="nav-item">
                                <button className="btn btn-outline-danger my-2 my-sm-3" type="submit">
                                    <Link to="/parcial-react/register">REGISTER NOW</Link>
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
                        <button id="darkMode" className="btn btn-outline-light btn-sm my-2 my-lg-0">Light</button>
                    </div>
                </nav>
            </header>
            <main>
                <section id="titulo" className="p-5 d-flex align-items-center justify-content-center bg-gradient-dark">
                    <article className="mx-5 p-5 text-center">
                        <h1 className="row">Meeting of the Year in Virbela's Metaverse!</h1>
                        <h3 className="row">Join a one-of-a-kind interactive panel discussion with the founders of Virbela, Second Life, High
                            Fidelity,
                            and other thought leaders in XR.</h3>
                    </article>
                </section>
                <section id="topico">
                    <div className="d-md-flex justify-content-center">
                        <div className="px-5 pt-5">
                            <img className="mw-100 mb-5" src={uno} alt="Imagen del metaverso Virbela" />
                        </div>
                        <div className="px-5 pt-md-5">
                            <img className="mw-100 mb-5" src={dos} alt="Imagen del metaverso Virbela" />
                        </div>
                    </div>

                    <article id="topicArt" className="p-5 mx-5 text-center bg-gradient-dark">
                        <h1>TOPIC</h1>
                        <p>In many ways, the Metaverse is already here. Virtual worlds like Roblox, Minecraft, and Fortnite have
                            billions of users and economies that rival small countries. What role will virtual worlds and the
                            Metaverse play in the future of work? Join the world's most prominent thought leaders in XR for a
                            lively
                            discussion as they share their vision and unravel this question.</p>
                    </article>

                    <div className="d-md-flex justify-content-center">
                        <div className="px-5 pt-5">
                            <img className="mw-100 mb-5" src={tres} alt="Imagen del metaverso Virbela" />
                        </div>
                        <div className="px-5 pt-md-5">
                            <img className="mw-100 mb-5" src={cuatro} alt="Imagen del metaverso Virbela" />
                        </div>
                    </div>
                </section>
                <section id="details">
                    <article id="detailsArt" className="p-5 mx-5 bg-gradient-dark">
                        <h1 className="text-center">EVENT DETAILS</h1>
                        <p>Where & When:</p>
                        <p>Friday May 26th, 12:00 pm PT (3:00 pm ET) in our Virbela Open Campus</p>
                        <p>What to expect:</p>
                        <p>Join us for an active discussion about the Metaverse and its impact on the future of work with an
                            esteemed panel of experts. Topics include:</p>
                        <ul>
                            <li>What is the Metaverse and what role will it play in the future of work?</li>
                            <li>Why has the Metaverse and virtual worlds become a more relevant topic today than ever before?
                            </li>
                            <li>What are the technology advancements still needed to encourage mass adoption?</li>
                        </ul>
                        <p>After the panel discussion, stick around for a networking session and opportunity to talk with
                            panelists
                            and other event attendees.</p>
                    </article>
                    <div className="m-5 text-center">
                        <button className="btn btn-danger btn-lg my-2 my-sm-3" type="submit">
                            <Link to="/parcial-react/register">REGISTER NOW</Link>
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Home;