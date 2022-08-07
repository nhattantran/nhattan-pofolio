import React from "react";
import { Container, Row, Col } from "react-bootstrap"
import './style/about.css';

import {
    FaRegHandPointRight,
    FaPython,
    FaLaravel,
} from 'react-icons/fa';

import {
    CgCPlusPlus,
} from 'react-icons/cg'

import {
    IoLogoJavascript,
} from 'react-icons/io'

import {
    DiNodejs,
    DiPhp,
    DiGitBranch,
    DiVisualstudio,
} from 'react-icons/di'

import {
    GrReactjs,
} from 'react-icons/gr'

import {
    SiMongodb,
    SiMysql,
    SiPostman,
} from 'react-icons/si'

function About() {
    return (
        <section>
            <Container fluid className="about-page-section">
                    <Container className="about-main-content">
                        <Row>
                            <Col className="about-page-description" md={7}>
                                <h1>
                                    Who <span className="purple">Am I</span> ?
                                </h1>
                                <p className="about-page-body">
                                    Hi everyone, my name is <span className="purple">Tran Nhat Tan</span>, from <span className="purple">Quang Ngai, Viet Nam</span>
                                    <br/>
                                    I am studying <span className="purple">Computer Engineering</span> at <span className="purple">Ho Chi Minh University of Technology</span>
                                    <br />
                                    <br />
                                    Apart from programming, there are some other activities that I love to do!
                                </p>
                                <p className="activities">
                                    <FaRegHandPointRight className="point-icon" /> Playing guitar &#127931;
                                    <br />
                                    <FaRegHandPointRight className="point-icon" /> Playing piano &#127929;
                                    <br />
                                    <FaRegHandPointRight className="point-icon" /> Travelling
                                </p>
                                <p className="quote">
                                    "You only understand something thoroughly when you have the ability to make other people understand it"
                                    <br/>
                                    - Tran Nhat Tan -
                                </p>
                            </Col>
                            <Col md={5} className="about-heading-image">
                                <img className="img-fluid" src="https://www.soumya-jit.tech/static/media/about.aee0f771fbfc1e7b8fa8.png" alt="" />
                            </Col>
                        </Row>
                        <h1 className="about-heading-skill">Technical <span className="purple">skills</span></h1>
                        <Row className="about-skill-list">
                            <Col md={2} className="about-tech-icon">
                                <CgCPlusPlus />
                            </Col>
                            <Col md={2} className="about-tech-icon">
                                <IoLogoJavascript />
                            </Col>
                            <Col md={2} className="about-tech-icon">
                                <DiNodejs />
                            </Col>
                            <Col md={2} className="about-tech-icon">
                                <GrReactjs />
                            </Col>
                            <Col md={2} className="about-tech-icon">
                                <DiGitBranch />
                            </Col>
                            <Col md={2} className="about-tech-icon">
                                <SiMongodb />
                            </Col>
                            <Col md={2} className="about-tech-icon">
                                <FaPython />
                            </Col>
                            <Col md={2} className="about-tech-icon">
                                <SiMysql />
                            </Col>
                            <Col md={2} className="about-tech-icon">
                                <DiPhp />
                            </Col>
                            <Col md={2} className="about-tech-icon">
                                <FaLaravel />
                            </Col>
                        </Row>
                        <h1 className="about-heading-skill"><span className="purple">Tools</span> I Use</h1>
                        <Row className="about-skill-list">
                            <Col md={2} className="about-tech-icon">
                                <DiVisualstudio />
                            </Col>
                            <Col md={2} className="about-tech-icon">
                                <SiPostman />
                            </Col>
                        </Row>
                    </Container>
                </Container>
                
        </section>
    )
}

export default About;