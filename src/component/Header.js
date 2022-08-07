import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap"
import './style/header.css';

import {
    AiOutlineFundProjectionScreen,
    AiOutlineHome,
    AiFillStar,
} from 'react-icons/ai'

import {
    BsPerson,
} from 'react-icons/bs'

import {
    TiDocumentText,
} from 'react-icons/ti'

import {
    CgGitFork,
} from 'react-icons/cg'

function Header() {
    const [sticky, setSticky] = useState('navbar-fixed');

    useEffect(() => {
        window.onscroll = () => {
            if (window.pageYOffset === 0) setSticky("navbar-fixed");
            else setSticky('navbar-fixed sticky-navbar')
        }
        document.title = "Nhat Tan Tran | Portfolio"
    }, [])

    return (

        <nav className={sticky}>
            <Container>
                <Row className="header-menu">
                    <Col xs={3} sm={3} md={3} lg={2} className="my-name">
                        <span>Nt.</span>
                    </Col>
                    <Col xs={9} sm={9} md={9} lg={10} id="header-button-keep-top">
                        <div className="header-button">
                            <a href="/" className="top-button">
                                <AiOutlineHome className="button-icon" /> <span>Home</span>
                            </a>
                            <a href="/about" className="top-button">
                                <BsPerson className="button-icon" /> <span>About</span>
                            </a>
                            <a href="/project" className="top-button">
                                <AiOutlineFundProjectionScreen className="button-icon button-icon-margin-right" /><span>Projects</span>
                            </a>
                            <a href="/resume" className="top-button">
                                <TiDocumentText className="button-icon button-icon-margin-right" /><span>Resume</span>
                            </a>
                            <a href="/" className="fork-button">
                                <div className="fork-button-inner">
                                    <CgGitFork className="button-icon button-icon-margin-right" />
                                    <AiFillStar className="button-icon" />
                                </div>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </nav>

    )
}

export default Header;