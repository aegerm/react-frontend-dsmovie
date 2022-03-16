import React from "react";
import './index.css';
import { ReactComponent as GithubIcon } from 'assets/img/github.svg';

function Navbar({title} : {title: any}) {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>{title}</h1>
                    <a href="https://github.com/aegerm">
                        <div className="dsmovie-contact-container">
                            <GithubIcon />
                            <p className="dsmovie-contact-link">/aegerm</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;