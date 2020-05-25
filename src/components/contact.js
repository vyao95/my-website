import React from 'react';

import { Row, Container } from 'react-bootstrap';
import Resume from '../assets/Vincent-Yao.pdf';

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
                                        <ion-icon name="logo-linkedin"></ion-icon>
                                    </a>
                                </div>
                                <div className="contact-item">
                                    <a href="https://github.com/vyao95">
                                        <ion-icon name="logo-github"></ion-icon>
                                    </a>
                                </div>
                                <div className="contact-item">
                                    <a href={Resume}>
                                        <ion-icon name="document-text"></ion-icon>
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