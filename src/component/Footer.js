import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './style/footer.css';

export default function Footer() {
    return (
        <div className="footer-area">
            <Container>
                <Row>
                    <Col md={4} className="footer-item-name">
                        Designed and Developed by Tran Nhat Tan
                    </Col>
                    <Col md={4} className="footer-item-copyright">
                        Copyright © 2022
                    </Col>
                    <Col md={4}>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    )
}