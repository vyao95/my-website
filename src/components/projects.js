import React from 'react';

import { Row, Col, Container } from 'react-bootstrap';
import lofi from '../assets/projects/lofi.png';
import c4 from '../assets/projects/c4.png';

function Projects() {
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
                                <Col xs={12} md={6}>
                                    <div className="project">
                                        <div className="project-img-wrapper">
                                            <a href="http://lofiai.herokuapp.com/">
                                                <img src={lofi} alt="lofi" />
                                            </a>
                                        </div>
                                        <div className="project-title">
                                            <h4>Lofi AI</h4>
                                        </div>
                                        <div className="project-description">
                                            <p>Lofi-AI is a music-composing AI based on <a href="https://deepmind.com/blog/article/wavenet-generative-model-raw-audio">Google WaveNet</a> trained on lofi hip-hop music.</p>
                                            <p>I and four other UCSC students created this website to post our AI's original compositions and our findings throughout the development process.</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={12} md={6}>
                                    <div className="project">
                                        <div className="project-img-wrapper">
                                            <a href="https://github.com/vyao95/E4-4U">
                                                <img src={c4} alt="c4"/>
                                            </a>
                                        </div>
                                        <div className="project-title">
                                            <h4>C4 Bot</h4>
                                        </div>
                                        <div className="project-description">
                                            <p>C4 Bot is a Python AI bot that autonomously plays the game, <a href="https://papergames.io/en/connect4">Connect Four</a>.</p>
                                            <p>I and two other UCSC students developed this program as our final project for the Game AI course offered at UC Santa Cruz.</p>
                                        </div>
                                    </div>
                                </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Projects;