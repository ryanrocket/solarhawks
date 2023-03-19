import React from 'react';

import { Container, Section } from 'reactbulma';
import { Text, Spacer, Image } from '@geist-ui/react';
import Banner from './Banner';
// import Typed from 'react-typed';
import Lines from './Lines';
import PreFoot from './PreFoot';
import HorzLine from './HorzLine.js';
import { Instagram, Github, Linkedin, Mail } from '@geist-ui/react-icons'

// IMAGES
/*

Dear freshman noobs,
I hope you're suffering trying to learn React. In any case, here is how you should 
import new images to update our gallery and such...

import {name of image} from '{relative path to image}'

And then to include it...

<Image width={___} height={___} style={{any other css}} src={name of image} />

Goodluck! 

*/
import BannerIMG from '../img/indexBanner.png'

class Index extends React.Component {
    render() {
        return (
            <div style={{position: 'relative'}}>
                <Image style={{height: "auto", maxHeight: '400px', width: '100%', objectFit: 'cover'}} className="sc-banner" src={BannerIMG} />
                <Container style={{position: 'relative'}} >
                    
                </Container>
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