import React from 'react';
import { Container, Section } from 'reactbulma';
import { Text, Spacer, Divider, Grid, Card } from '@geist-ui/react';
import styled from 'styled-components'
import HorzLine from './HorzLine';
import Lines from './Lines';
import PreFoot from './PreFoot'
import { ArrowRightIcon } from 'evergreen-ui';
import { StlViewer } from 'react-stl-viewer';
const STLFile = "/Challengerv13.stl"
const STLStyle = {
    width: '100%',
    height: '500px',
    zIndex: '800'
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
                    <Container style={{alignContent: 'center', justifyContent: 'center', textAlign: 'center', postition: 'relative'}}>
                        <Section style={{textAlign: 'center', maxWidth: '800px', alignSelf: 'center', justifySelf: 'center', display: 'inline-block'}}>
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
                    <Container style={{marginBottom: '18px', marginTop: '20px'}}>
                        <Grid.Container gap={1} justify="center">
                            <Grid alignContent='center' xs={12} md={6} className='sc-cutto'>
                                <a className='sc-cut' href="#mission"><ArrowRightIcon size={12} /> OUR MISSION</a>
                            </Grid>
                            <Grid alignContent='center' xs={12} md={6} className='sc-cutto'>
                                <a className='sc-cut' href="#challenge"><ArrowRightIcon size={12} /> THE CHALLENGE</a>
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
                        <Section style={{position: 'relative', zIndex: '2'}} id="mission">
                            <Text className="pre-bigHeader" b >
                                Our Mission
                            </Text>
                            <HorzLine />
                            <Spacer h={.5} />
                            <Text h4 style={{lineHeight: '25px'}}>
                                Project Aeolus works to automate and modernize drone fleet systems. Besides being a cofounder 
                                of the company, my role in Project Aeolus is head of electrical and software systems. The company 
                                exposed me to being both an engineer and entrepreneur at the same time, all while under the pressures
                                of time. Working at Project Aeolus involved having a wide variety of tools and skills, such as serverless 
                                functions, cloud-native applications, containerization, satellite systems, data firehoses, and more.
                            </Text>
                            <Spacer h={2} />
                            <StlViewer style={STLStyle} url={STLFile} showAxes orbitControls shadows  />
                        </Section>
                        <Lines style={{ zIndex: '0' }} />
                    </Container>
                    <PreFoot message="Interested in reaching out?" redir="/contact" button="Contact Us" />
               </div>
        )
    }
}

export default About;