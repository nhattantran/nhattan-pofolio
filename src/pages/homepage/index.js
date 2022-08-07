import React from 'react';
import { Container, Row, Col } from "react-bootstrap"
import Typewriter from 'typewriter-effect';
import './style/homepage.css'
import {
    AiOutlineGithub,
    AiFillInstagram,
} from 'react-icons/ai'

import {
    FaFacebookF,
    FaLinkedinIn,
} from 'react-icons/fa'

export default function Homepage() {
    return (
        <section>
                <Container fluid className="home-section">
                    <Container className="home-content">
                        <Row>
                            <Col className="home-header" md={7}>
                                <h1 className="heading">
                                    Hi There!
                                    <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
                                </h1>
                                <h1 className="heading-name">
                                    I'M
                                    <strong className="main-name"> TRAN NHAT TAN</strong>
                                </h1>
                                <h2 className="heading-skill">
                                    &gt; 	&thinsp;	
                                    <Typewriter
                                        options={{
                                            strings: ['FULL-STACK NODEJS DEVELOPER', 'MACHINE LEARNING DEVELOPER'],
                                            autoStart: true,
                                            loop: true,
                                            cursor: '_',
                                        }}
                                        
                                    />
                                </h2>
                            </Col>
                            <Col md={5} className="heading-image">
                                <img className="img-fluid" src="https://www.soumya-jit.tech/static/media/home-main.541f8179af8209ce03ccf2178fe62dbf.svg" alt="" />
                            </Col>
                        </Row>
                    </Container>
                </Container>
                <Container fluid className="about-section">
                    <Container>
                        <Row>
                            <Col md={8} className="about-description">
                                <h1>
                                    LET ME
                                    <span className="purple"> INTRODUCE </span>
                                    MYSELF
                                </h1>
                                <p className="about-body">
                                    I am currently studying in <span className="purple">Ho Chi Minh University of Technology (HCMUT)</span> and I deeply interested in programming &#128582;
                                    <br />
                                    <br/>
                                    I am fluent at <span className="purple">C++</span> and familiar with <span className="purple">Javascript and Python</span>
                                    <br/>
                                    <br/>
                                    My favorate field are building new <span className="purple">Web App</span> associated with <span className="purple">Machine learning</span> to make it more intelligent
                                    <br />
                                    <br />
                                    Whenever possible, I also apply <span className="purple">Node.js</span> and <span className="purple">Modern Javascript Framework</span> like <span className="purple">React.js</span>
                                </p>
                            </Col>
                            <Col md={4} className="avatar">
                                <img src="https://www.soumya-jit.tech/static/media/avatar.5852f40fbb38aa284829fa3fb7722225.svg" alt="" />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} className="contact">
                                <h1>FIND ME ON</h1>
                                <p>Feel free to <span className="purple">connect</span> with me</p>
                                <div className="about-social-icon">
                                    <a href="https://github.com/nhattantran" target="_blank"  rel="noreferrer" className="social-icon">
                                        <AiOutlineGithub />
                                    </a>
                                    <a href="https://www.linkedin.com/in/tantrannhat/" target="_blank" rel="noreferrer" className="social-icon">
                                        <FaLinkedinIn />
                                    </a>
                                    <a href="https://www.facebook.com/tan.trannhat287" target="_blank" rel="noreferrer" className="social-icon">
                                        <FaFacebookF />
                                    </a>
                                    <a href="https://www.instagram.com/__intelephant/" rel="noreferrer" target="_blank" className="social-icon">
                                        <AiFillInstagram />
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </section>
    )
}