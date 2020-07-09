import React from 'react';

import { Row, Container } from 'react-bootstrap';
import Resume from '../assets/Vincent-Yao.pdf';

function Contact() {
    const icons = [
        {
            name: "linkedin",
            link: "https://www.linkedin.com/in/vincentyao95/",
            iconName: "logo-linkedIn"
        },
        {
            name: "github",
            link: "https://github.com/vyao95",
            iconName: "logo-github",
        },
        {
            name: "resume",
            link: Resume,
            iconName: "document-text"
        },
    ];

    return (
        <section id="contact">
            <div className="contact-container">
                <Container>
                    <div className="inner">
                        <Row className="justify-content-center">
                            { icons.map(icon => {
                                const { link, iconName } = icon;
                                return (
                                    <div className="contact-item">
                                        <a href={link}>
                                            <ion-icon name={iconName}></ion-icon>
                                        </a>
                                    </div>
                                );
                            }) }
                        </Row>
                    </div>
                </Container>
            </div>
        </section>
    );
}

export default Contact;