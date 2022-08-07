import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import './style/project.css'

import {
    BsGithub,
} from 'react-icons/bs'

function Projects() {
    return (
        <Container fluid className="project-page-section">
            <Container className="project-main-content">
                <Row>
                    <h1 className="project-heading">My recent <span className="purple">Projects</span></h1>
                    <p className="project-sub-header">Here are my projects I've worked recently</p>
                </Row>
                <Row className="project-list">
                    <Col md={4} className="project-card">
                        <div className="project-card-view card card-box">
                            <img className="card-img-top" src={require('./style/res_pos.PNG')} alt="" />
                            <div className="card-body">
                                <div className="card-title">Restaurant pos 2.0</div>
                                <div className="card-text">A website where people can order food online. Built with PHP, HTML, CSS, Boostrap and MySQL. Have feature which allows restaurant manager to create, edit, delete food, and customer to order them online</div>
                                <div className="card-button">
                                    <a target="_blank" href="https://github.com/nhattantran/resPOS2.0-PHP" className="card-button-small">
                                        <BsGithub className="button-icon"/>
                                        Github
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} className="project-card">
                        <div className="project-card-view card card-box">
                            <img className="card-img-top" src={require('./style/quiz.png')} alt="" />
                            <div className="card-body">
                                <div className="card-title">Proquiz!</div>
                                <div className="card-text">A website where people can create and do quizzes. Built with HTML, CSS, Javascript, PHP and Mongodb. Has feature which allow teachers to create, edit, delete quizzes and track the quiz's statistics</div>
                                <div className="card-button">
                                    <a target="_blank" href="https://github.com/nhattantran/WebProgramming" className="card-button-small">
                                        <BsGithub className="button-icon"/>
                                        Github
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} className="project-card">
                        <div className="project-card-view card card-box">
                            <img className="card-img-top" src={require('./style/bke.png')} alt="" />
                            <div className="card-body">
                                <div className="card-title">Bach Khoa English</div>
                                <div className="card-text">A website where people can learn IELTS and TOEIC by doing quizzes. Built with Reactjs and Golang. Has the feature which allows people to create quizzes, do quizzes and provides statistics for the administrator</div>
                                <div className="card-button">
                                    <a target="_blank" href="https://github.com/nhattantran/bke-fe" className="card-button-small">
                                        <BsGithub className="button-icon"/>
                                        Github
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Projects;