import React from "react";
import '../../style.css';



function Skills() {


    return (

        <div className="container">
            <div id="about-me-text">

                <h2>Skills</h2>
                        HTML <br />
                        JavaScript <br />
                        CSS <br />
                        jQuery <br />
                        API/AJAX Calls <br />
                        Responsive Design <br />
                        MongoDB <br />
                        MySQL <br />
                        Express <br />
                        Node.js <br />
                        React <br />
                        Git <br />
                        Heroku <br />

                    <img src={"/portfolio/images/html-icon.png"} style={{width: 100 + "px"}}></img>
                    <img src={"/portfolio/images/css-icon.png"} style={{width: 100 + "px"}}></img>
                    <img src={"/portfolio/images/js-icon.png"} style={{width: 100 + "px"}}></img>
                    <img src={"/portfolio/images/react-icon.png"} style={{width: 100 + "px"}}></img>
                    <img src={"/portfolio/images/desktop-icon.png"} style={{width: 100 + "px"}}></img>
                    <img src={"/portfolio/images/responsive-icon.png"} style={{width: 100 + "px"}}></img>
            </div>

        </div>
    );
}

export default Skills;
