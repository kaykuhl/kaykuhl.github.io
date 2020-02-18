import React from "react";
import '../../style.css';

function Contact(props) {
    return (
        <div className="index-background">
            <div className="index-jumbo jumbotron">
                <div className="contact-links">
                    <a className="btn" href="mailto:kaylaannkuhlman@gmail.com" role="button">
                        <img alt="email icon" src={"../../images/email.png"} style={{ width: 20 + "px" }} /> KaylaAnnKuhlman@gmail.com</a>
                    <br />
                    <a className="btn" href="tel:612-720-4675" role="button">
                        <img alt="phone icon" src={"../../images/phone.png"} style={{ width: 20 + "px" }} /> 612-720-4675</a>
                    <br />
                    <a className="btn" href="../../resume.pdf" target="_blank" role="button">
                        <img alt="pdf icon" src={"../../images/pdf.png"} style={{ width: 20 + "px" }} /> Resume</a>
                    <br />
                    <a className="btn" href="https://www.linkedin.com/in/kaykuhl/" target="_blank" role="button">
                        <img alt="linkedin icon" src={"../images/linked in.png"} style={{ width: 20 + "px" }} /> linkedin.com/in/kaykuhl</a>
                    <br />
                    <a className="btn" href="https://www.github.com/kaykuhl" target="_blank" role="button">
                        <img alt="github icon" src={"../../images/githubicon.png"} style={{ width: 20 + "px" }} /> github.com/kaykuhl</a>


                </div>
            </div>
        </div>
    );
}

export default Contact;
