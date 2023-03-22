import React from 'react';
import { Container, Section } from 'reactbulma';
import { Text, Spacer, Divider, Grid, Image, Display } from '@geist-ui/react';
import styled from 'styled-components'
import HorzLine from './HorzLine';
import Lines from './Lines';
import PreFoot from './PreFoot'
import { ArrowRightIcon } from 'evergreen-ui';

import Map from "../img/route2023.png"
import Mission from '../img/missionPhoto.jpg'
import Russell from '../img/russellShell.jpg'

// import { StlViewer } from 'react-stl-viewer';
const STLFile = "/Challengerv13.stl"
const STLStyle = {
    width: '100%',
    height: '500px',
    zIndex: '800',
    backgroundColor: 'white',
    color: 'red',
}


const Constricted = styled.div`
    @media screen and (min-width: 1216px) {
        max-width: 640px!important;
        width: 640px!important;
    }
    @media screen and (min-width: 1024px) and (max-width: 1215px) {
        max-width: 100%!important;
        width: 100%!important;
    }
    margin: 0 auto;
    position: relative;
`;

class About extends React.Component {
    render() {
        return (
            <div style={{ position: 'relative' }}>
                <Container style={{ alignContent: 'center', justifyContent: 'center', textAlign: 'center', postition: 'relative' }}>
                    <Section style={{ textAlign: 'center', maxWidth: '800px', alignSelf: 'center', justifySelf: 'center', display: 'inline-block' }}>
                        <Spacer h={0.5} className="is-hidden-mobile" />
                        <Text h1 className="pre-bigHeader pre-textgrad2">
                            Creating technology for the future.
                        </Text>
                        <Spacer h={2.5} />
                        <Text h2 className="pre-subHeader">
                            We are working to bring practical applications of renewable energy into the eyes of the public.
                        </Text>
                        <Spacer h={2} className="is-hidden-mobile" />
                    </Section>
                </Container>
                <Divider />
                <Container style={{ marginBottom: '18px', marginTop: '20px' }}>
                    <Grid.Container gap={1} justify="center">
                        <Grid alignContent='center' xs={12} md={6} className='sc-cutto'>
                            <a className='sc-cut' href="#challenge"><ArrowRightIcon size={12} /> THE CHALLENGE</a>
                        </Grid>
                        <Grid alignContent='center' xs={12} md={6} className='sc-cutto'>
                            <a className='sc-cut' href="#mission"><ArrowRightIcon size={12} /> OUR MISSION</a>
                        </Grid>
                        <Grid alignContent='center' xs={12} md={6} className='sc-cutto'>
                            <a className='sc-cut' href="#tech"><ArrowRightIcon size={12} /> OUR TECHNOLOGY</a>
                        </Grid>
                        <Grid alignContent='center' xs={12} md={6} className='sc-cutto'>
                            <a className='sc-cut' href="#sponsors"><ArrowRightIcon size={12} /> OUR SPONSORS</a>
                        </Grid>
                    </Grid.Container>
                </Container>
                <Divider />
                <Container>
                    <Section style={{ position: 'relative', zIndex: '2' }} id="challenge">
                        <Text className="pre-bigHeader" b >
                            The Challenge
                        </Text>
                        <HorzLine />
                        <Spacer h={.5} />
                        <Text h4 style={{ lineHeight: '25px' }}>
                            The <a href="https://www.solarcarchallenge.org/challenge/" target="_blank">Texas Solar Car Challenge</a> was established in 1993 to help motivate students in science and engineering, and to increase alternative energy awareness.
                            There are 2 different formats of the challenge; a track-oriented race and a cross-country race, alternating between the two each year. The cross-country race is a 2 week long trek from Fort Worth, Texas to Palmdale, California
                            and typically has over 20 seperate teams racing in the 925 mile race. Completing the race is the ultimate team effort, requiring talent in departments such as electrical and mechanical engineering, logistics, budgeting and business
                            relations, "scrutineering", and more.
                        </Text>

                        <Display shadow caption={<p>2023 variation of the planned race course.</p>}>
                            <Image style={{ maxWidth: '900px', width: '100%', margin: 'auto' }} src={Map} />
                        </Display>
                    </Section>
                    <Section style={{ position: 'relative', zIndex: '2' }} id="mission">
                        <Text className="pre-bigHeader" b >
                            Our Mission
                        </Text>
                        <HorzLine />
                        <Spacer h={.5} />
                        <Text h4 style={{ lineHeight: '25px' }}>
                            This summer's race will be the Solar Hawks' debut entry in the Solar Car Challenge and our mission is to send a competitive car that challenges the established teams.
                            As a team in its infancy, we have worked tirelessly to engineer a car that compete on the same playing field as teams that have been working on this challenge for decades.
                            Our long term goals supersede that of the challenge, though. We are working to support and leave a lasting impact on our community. The realization of our designs has only 
                            been possible through our partnerships with local businesses and community memebers. Additionally, we hope our innovations increase the awareness and feasability 
                            of renewable energy technology at a larger scale.
                        </Text>
                        <Spacer h={1} />
                        <Display shadow caption={<p>Working with local business Russell Fabrications to develop carbon fiber plugs.</p>}>
                            <Image style={{ maxWidth: '900px', width: '100%', margin: 'auto' }} src={Russell} />
                        </Display>
                    </Section>
                    <Section style={{ position: 'relative', zIndex: '2' }} id="tech">
                        <Text className="pre-bigHeader" b >
                            Our Technology
                        </Text>
                        <HorzLine />
                        <Spacer h={.5} />
                        <Text h4 style={{ lineHeight: '25px' }}>
                            WIP
                        </Text>
                        <Spacer h={1} />
                    </Section>
                    <Section style={{ position: 'relative', zIndex: '2' }} id="sponsors">
                        <Text className="pre-bigHeader" b >
                            Our Sponsors
                        </Text>
                        <HorzLine />
                        <Spacer h={.5} />
                        <Text h4 style={{ lineHeight: '25px' }}>
                            WIP
                        </Text>
                        <Spacer h={1} />
                    </Section>
                    <Lines style={{ zIndex: '0' }} />
                </Container>
                
                <PreFoot message="Interested in reaching out?" redir="/contact" button="Contact Us" />
            </div>
        )
    }
}

export default About;

/*
<StlViewer style={STLStyle} url={STLFile} showAxes orbitControls shadows floorProps={{gridWidth: 100 }} modelProps={{
                                positionX: 0,
                                positionY: 0,
                                rotationX: 270,
                                rotationY: 180,
                                rotationZ: 270,
                                scale: 0.4   
                            }} /> 
*/