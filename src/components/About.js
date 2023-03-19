import React from 'react';
import { Container, Section } from 'reactbulma';
import { Text, Spacer, Divider } from '@geist-ui/react';
import styled from 'styled-components'
import HorzLine from './HorzLine';
import Lines from './Lines';
import PreFoot from './PreFoot'

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
                    <Container>
                        Hello world
                        <Lines style={{ zIndex: '0' }} />
                    </Container>
                    <PreFoot message="Interested in reaching out?" redir="/contact" button="Contact Us" />
               </div>
        )
    }
}

export default About;