import React from 'react';

import { Row, Col, Container } from 'react-bootstrap';
import linkedIn from '../assets/contact/linked-in.svg';
import pdf from '../assets/contact/pdf.svg';
import Resume from '../assets/Vincent-Yao.pdf';
import github from '../assets/contact/github.svg';

class Contact extends React.Component {
    render() {
        return (
            <section id="contact">
                <div className="contact-container">
                    <Container>
                        <div className="inner">
                            <Row className="justify-content-center">
                                <div className="contact-item">
                                    <a href="https://www.linkedin.com/in/vincentyao95/">
                                        <img src={linkedIn} />
                                    </a>
                                </div>
                                <div className="contact-item">
                                    <a href="https://github.com/vyao95">
                                        <img src={github} />
                                    </a>
                                </div>
                                <div className="contact-item">
                                    <a href={Resume}>
                                        <img src={pdf} />
                                    </a>
                                </div>
                            </Row>
                        </div>
                    </Container>
                </div>
            </section>
        );
    }
}
export default Contact;