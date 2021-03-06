import React from 'react';

/**
 * Header stateless component
 */
// <button className="button-menu">
//  <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 67.75 43.63"><rect width="67.75" height="8.38"/><rect x="4.15" y="17.63" width="59.45" height="8.38" /><rect y="35.25" width="67.75" height="8.38"/></svg>
// </button>
const Header = () => {
    return (
        <header className="codrops-header">
            <h1>The Lusina</h1>

            <p>Software developer.</p>

            <div className="codrops-links">

                <a className="codrops-icon codrops-icon--resume"
                   href="http://lusinaresume.netlify.com/" target="_blank" title="Resume">
                    <span>Resume</span>
                </a>

                <a className="codrops-icon codrops-icon--contact"
                   href="mailto:lusinabrian@gmail.com?Subject=Hello%20Lusina" target="_top"
                   title="Contact">
                    <span>Contact</span>
                </a>

            </div>
        </header>
    );
};


export default Header;