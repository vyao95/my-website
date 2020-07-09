import React from 'react';

import { Row, Col, Container } from 'react-bootstrap';
import lofi from '../assets/projects/lofi.png';
import c4 from '../assets/projects/c4.png';

function Projects() {
    const projects = [
        {
            title: "C4 Bot",
            description: `<p>C4 Bot is a Python AI bot that autonomously plays the game, <a href="https://papergames.io/en/connect4">Connect Four, online</a>.</p>\n<p>I and two other students developed this program as our final project for the Game AI course offered at UC Santa Cruz.</p>`,
            link: "https://github.com/vyao95/E4-4U",
            image: c4,
        }, 
        {
            title: "Lofi Ai",
            subtitle: "(works on desktop only)",
            description: `<p>Lofi-AI is a music-composing AI based on <a href="https://deepmind.com/blog/article/wavenet-generative-model-raw-audio">Google WaveNet</a> trained on lofi hip-hop music.</p>\n<p>I and four other UCSC students created this website to post our AI's original compositions and our findings throughout the development process.</p>`,
            link: "http://lofiai.herokuapp.com/",
            image: lofi,   
        }
    ];

    return (
        <section id="projects">
            <Container>
                <div className="inner">
                    <Row>
                        <Col>
                            <div className="projects-header">
                                <h2>Projects</h2>
                            </div>
                        </Col>
                    </Row>
                    <div className="project-items">
                        <Row>
                            {
                                projects.map(project => {
                                    const { title, subtitle, description, link, image } = project;
                                    
                                    const innerHtml = {
                                        __html: description
                                    };

                                    return (
                                        <Col xs={12} md={6}>
                                            <div className="project">
                                                <div className="project-img-wrapper">
                                                    <a href={link}>
                                                        <img src={image} alt={title} />
                                                    </a>
                                                </div>
                                                <div className="project-title">
                                                    <h4>{title}</h4>
                                                    { subtitle ? <h5>{subtitle}</h5> : null }
                                                </div>
                                                <div className="project-description" dangerouslySetInnerHTML={innerHtml} />
                                            </div>
                                        </Col>
                                    );
                                })
                            }
                        </Row>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Projects;