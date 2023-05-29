import React from 'react';
import uno from './assets/1.jpg';
import dos from './assets/2.jpg';
import tres from './assets/3.jpg';
import cuatro from './assets/4.jpg';

const Main = () => {
    return (
        <div>
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
                        <img className="mw-100 mb-5" src={uno} alt="Imagen del metaverso Virbela"/>
                    </div>
                    <div className="px-5 pt-md-5">
                        <img className="mw-100 mb-5" src={dos} alt="Imagen del metaverso Virbela"/>
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
                        <img className="mw-100 mb-5" src={tres} alt="Imagen del metaverso Virbela"/>
                    </div>
                    <div className="px-5 pt-md-5">
                        <img className="mw-100 mb-5" src={cuatro} alt="Imagen del metaverso Virbela"/>
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
                        <a href=".\register.html">REGISTER NOW</a>
                    </button>
                </div>
            </section>
        </div>
    );
}

export default Main;