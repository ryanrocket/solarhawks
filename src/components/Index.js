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
import TeamPhoto from '../img/teamPhoto.jpg'
import ChallengerSteering from '../img/challengerSteering.jpg'

class Index extends React.Component {
    render() {
        return (
            <div style={{ position: 'relative' }}>
                <div style={{ position: 'relative' }}>
                    <Image style={{ height: "auto", maxHeight: '400px', width: '100%', objectFit: 'cover' }} className="sc-banner" src={BannerIMG} />
                    <div className='sc-hero-align'>
                        <Text h1 className='hero-text is-hidden-touch is-vcentered'> South River High School Solar Car Team</Text>
                    </div>
                </div>
                <Container style={{ position: 'relative' }} >
                    <div style={{ textAlign: 'center' }}>
                        <Text h2 className='hero-text-mobile is-hidden-desktop'>South River High School Solar Car Team</Text>
                    </div>
                    <Section style={{ position: 'relative', marginTop: '10px', zIndex: '2' }}>
                        <div className='columns'>
                            <div className='column is-half '>
                                <Text h1 className='pre-smlHeader'>Who We Are</Text>
                                <HorzLine />
                                <Text h4 style={{ marginTop: '20px', lineHeight: '25px' }}>
                                    Founded in 2019, the South River Solar Hawks is a team comprised of students from South River High School, CAT South, and Central Middle School.
                                    Together we are working to build a street legal, solar powered vehicle with the intent to race from Texas to California this summer ('23) in the National Solar Car Challenge.
                                </Text>
                            </div>
                            <div className='column is-half has-text-centered' style={{ marginLeft: '10px' }}>
                                <Image src={TeamPhoto} />
                            </div>
                        </div>
                        <Spacer h={5} />
                        <div className='columns'>
                            <div className='column is-half '>
                                <Image src={ChallengerSteering} />
                            </div>
                            <div className='column is-half ' style={{ marginLeft: '10px' }}>
                                <Text h1 className='pre-smlHeader'>Support Us</Text>
                                <HorzLine />
                                <Text h4 style={{ marginTop: '20px', lineHeight: '25px' }}>
                                    Cars are complicated, expensive, and very time consuming. As a high school team with limited funding, we rely on the support of our community and sponsors 
                                    in order to achieve our goals. If you're interested in supporting our team in any fashion, we would love to <a href="/contact">hear from you!</a> We also 
                                    appreciate any and all <a href="/donate">donations.</a>
                                </Text>
                            </div>
                        </div>
                    </Section>
                    <Lines style={{ zIndex: '0' }} />
                </Container>
                <PreFoot message="Interested in reaching out?" redir="/contact" button="Contact Us" />
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