import React from "react";
import '../../style.css';

function About() {
    return (

        <div className="container">
            <div id="about-me-text">
                <p>
                    My name is Kayla Kuhlman and I am a motivated full-stack web developer new to the field. With a background in analytical chemistry and quality management, I bring a strong problem-solving skill-set to the table.
    </p>

                <h2>Skills</h2>

                <div className="row">
                    <div className="col-md-6">

                        <b>MERN Full-Stack Web Development:</b><br />
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
                        ORM Programming <br />
                        Jest (Testing) <br />
                    </div>
                    <div className="col-md-6">
                        <b>Additional Skills:</b><br />
                        Microsoft Access and Excel<br />
                        Quality Management<br />
                        Technical/SOP Writing<br />
                        Meeting Leadership<br />
                        Drive and passion to become a Full Stack Developer!<br />

                    </div>
                </div>
                <h2>About Me</h2>
                <p>
                    After graduating with a BS in Chemistry from Winona State University in 2014 and holding successful roles as an analytical chemist and quality manager, I found a lot of passion in making changes to the laboratory databases and updating documentation.
                    I have self-taught skills in building access databases and have been able to work with the IT departments in my previous positions. When I started looking into coding languages such as javaScript, I was blown away by the possibilities.
    </p>
                <p>
                    I enjoy using code to solve problems, big and small. I also understand the importance of appearance and a good user interface so that the functionality and efficiency of your application can be fully utilized. I love working with others and collaborating
                    ideas to make a successful product.  I also do great work independently and have a lot of drive to make my career change a reality. I'm excited to see what 2020 has in store for me.
    </p>
                <p>
                    When I am not coding, I enjoy traveling, rock climbing, playing board games, and hanging out with my Siberian cat, Kronk.
    </p>
                <p>
                    <img src={"../../images/me.jpg"} className="rounded aboutmepicture" style={{ height: 200 + "px" }} />
                    <img src={"../../images/travel-headshot.jpg"} className="rounded aboutmepicture" style={{ height: 200 + "px" }} />
                    <img src={"../../images/headshot.jpg"} className="rounded aboutmepicture" style={{ height: 200 + "px" }} />
                    <img src={"../../images/travel.jpg"} className="rounded aboutmepicture" style={{ height: 200 + "px" }} />
                    <img src={"../../images/kronk.jpg"} className="rounded aboutmepicture" style={{ height: 200 + "px" }} />
                </p>
            </div>

        </div>
    );
}

export default About;
