import React from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function HomePage() {

    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am Front End Developer
                    <span></span>
                </h1>
                <p className="h-sub-text">
                    I am a young java script developer working with the ReactJS. Pushing forward to gain more experience with React, NodeJs, MongoDB/Postman JavaScript and a litle bit of testing with Jest but basicly I focus on HTML/CSS/JS. Check out my repositories on github by clicking on icon below.
                </p>
                <div className="icons">

                    <a href="https://github.com/login101i" className="icon-holder"
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </a>




                </div>
                <div className="packages">
                    <div className="frontend">
                        <h5>Frontend-najczęstsze paczki</h5>

                        <div className="frontend-packages">
                            <p>bootstap</p>
                            <p>antd</p>
                            <p>@ant-design/icons</p>
                            <p>redux-thunk</p>
                            <p>react-helmet</p>
                            <p>react-redux</p>
                            <p>emailjs-com</p>
                            <p>rc-slider</p>
                            <p>react-alert</p>
                            <p>react-alert-template-basic</p>
                            <p>react-bootstrap</p>
                            <p>react-datepicker</p>
                            <p>react-toastify</p>
                            <p>react-js-pagination</p>
                            <p>react-js-popup</p>
                            <p>@ant-design/icons</p>
                            <p>node-sass</p>
                            <p>@fortawesome/fontawesome-svg-core</p>
                            <p>@fortawesome/free-brands-svg-icons</p>
                            <p>@fortawesome/free-solid-svg-icons</p>
                            <p>react-star-ratings</p>
                            <p>react-modal-image</p>
                            <p>react-image-file-resizer</p>
                            <p>next-page-transitions</p>
                            <p>emailjs-com</p>


                        </div>

                    </div>
                    <div className="backend">
                        <h5>Backend</h5>

                        <div className="backend-packages">
                            <p>express</p>
                            <p>dotenv</p>
                            <p>mongoose</p>
                            <p>morgan</p>
                            <p>concurrently</p>
                            <p>nodemon</p>
                            <p>bcryptjs</p>
                            <p>body-parser</p>
                            <p>cloudinary</p>
                            <p>cooki-parser</p>
                            <p>express-fileupload</p>
                            <p>jsonwebtoken</p>
                            <p>nodemailer</p>
                            <p>stripe</p>
                            <p>validator</p>
                            <p>firebase-admin</p>
                            <p>slugify</p>



                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default HomePage;
