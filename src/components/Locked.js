import React from 'react';

import { Container, Section } from 'reactbulma';
import { Text, Spacer, Button, Grid } from '@geist-ui/react';
import Lock from '../img/lock.svg'

class Locked extends React.Component {
    render() {
        // eslint-disable-next-line
        return (
            <div>
                <Container style={{alignContent: 'center', justifyContent: 'center', textAlign: 'center'}}>
                    <Section style={{textAlign: 'center', maxWidth: '500px', alignSelf: 'center', justifySelf: 'center', display: 'inline-block'}}>
                        <Spacer y={5} className="is-hidden-mobile" />
                        <img src={Lock} alt="No Access" style={{maxWidth: '350px', marginBottom: '25px'}} />
                        <Text h3 b>
                            This page is currently under construction.
                        </Text>
                        <Text p>
                            Please allow until late April 2023 for the website to be complete. In the meanwhile, please reach out to us with any inquires.
                        </Text>
                        <Spacer y={1.5} />
                        <Grid.Container gap={1.5} justify="center">
                            <Grid>
                            <a className="navbar-item pre-minihead" href="/contact" style={{paddingLeft: '10px', paddingRight: '2px'}}>
                                    <Button auto type="success" className="pre-minihead" scale={1} style={{fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', padding: '0px 15px'}}>Contact &rarr;</Button>
                                </a>
                            </Grid>
                        </Grid.Container>
                        <Spacer y={6} className="is-hidden-mobile" />
                    </Section>
                </Container>
            </div>
        )
    }
}

export default Locked;