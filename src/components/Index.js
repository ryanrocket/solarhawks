import React from 'react';

import { Container, Section } from 'reactbulma';
import { Text, Spacer } from '@geist-ui/react';
import Banner from './Banner';
// import Typed from 'react-typed';
import Lines from './Lines';
import PreFoot from './PreFoot';
import HorzLine from './HorzLine.js';
import { Instagram, Github, Linkedin, Mail } from '@geist-ui/react-icons'

class Index extends React.Component {
    render() {
        return (
            <div style={{position: 'relative'}}>
                <div style={{position:'relative', width: '100%'}}>
                    <div style={{position: "absolute", top: '0', left: '0', width: '100%', height: '100%'}}>
                        <Section style={{height: '100%'}}>
                            <Container style={{height:'100%'}}>
                                <Text h1 className="colorthru-text hero-text">Hello, I'm Ryan Wans</Text>
                                <Text h1 className="hero-sub-text" style={{paddingTop:'50px', maxWidth: '800px'}}>
                                    Test
                                </Text>
                            </Container>
                        </Section>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Index;
/*
<Banner message="Welcome to the newly redesigned ryanwans.com!" goup={true} />
                <Container style={{position: 'relative'}}>
                    <Section style={{zIndex: '2', position: 'relative'}}>
                        <div className="columns">
                            <div className="column is-one-quarter has-text-centered">
                                <Instagram size={28} />
                                <Spacer y={0.5} />
                                <a href="https://instagram.com/ryanwans">
                                    @ryanwans
                                </a>
                            </div>
                            <div className="column is-one-quarter has-text-centered">
                                <Github size={28} />
                                <Spacer y={0.5} />
                                <a href="https://github.com/ryanrocket">
                                    @ryanrocket
                                </a>
                            </div>
                            <div className="column is-one-quarter has-text-centered">
                                <Linkedin size={28} />
                                <Spacer y={0.5} />
                                <a href="https://www.linkedin.com/in/ryan-wans/">
                                    ryan-wans
                                </a>
                            </div>
                            <div className="column is-one-quarter has-text-centered">
                                <Mail size={28} />
                                <Spacer y={0.5} />
                                <a href="mailto:ryan@ryanwans.com">
                                    ryan@ryanwans.com
                                </a>
                            </div>
                        </div>
                    </Section>
                    <Section style={{position: 'relative', zIndex: '2'}}>
                        <Text className="pre-bigHeader" b>Biography</Text>
                        <HorzLine />
                        <Spacer y={0.5} />
                        <Text p className="pre-p">
                            Hello, I'm Ryan Wans, a fullstack and systems engineer based out of Annapolis, MD. With a strong analytical and critical thinking background, 
                            I excel in creating, testing, and optimizing embedded systems. Some of my strongest disciplines are cloud-native application, JAMStack web-apps, 
                            systems engineering, big data analytics, and discrete mathematics. I love learning new things and I'm always ready to dive into foreign conceps, 
                            head first. Some of my favorite topics to study are philosophy, globalization, existentialism, and agile practices &amp; methodologies.
                        </Text>
                    </Section>
                    <Lines style={{zIndex: '0'}} />
                    <Spacer y={5} />
                </Container>
                <PreFoot message="Shoot me a message" redir="/contact" button="Contact Me" /> 
*/