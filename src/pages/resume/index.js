import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

import './style/resume.css'
import Sample from './style/resume.pdf'

import {
    AiOutlineDownload,
} from 'react-icons/ai'

const {PDFReader}  = require("react-read-pdf");

function Resume() {
    return (
        <Container fluid className="resume-page-section">
            <Container className="resume-main-content">
                <Row className="download-row">
                    <a href="/" className="download-button">
                        <AiOutlineDownload className="download-icon"/>
                        Download CV
                    </a>
                </Row>
                <Row className="main-pdf">
                    <PDFReader
                        url={require("./style/resume.pdf")}
                    />
                </Row>
                <Row className="download-row">
                    <a href="/" className="download-button">
                        <AiOutlineDownload className="download-icon"/>
                        Download CV
                    </a>
                </Row>
            </Container>
        </Container>
    )
}

export default Resume;