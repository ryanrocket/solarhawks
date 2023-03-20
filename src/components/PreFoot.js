import React from 'react';

import { Container, Section } from 'reactbulma';
import { Text, Button, Spacer } from '@geist-ui/react';

class PreFoot extends React.Component {
    render() {
        return (
            <div style={{width: '100%', borderTop: '#EAEAEA 1px solid'}}>
                <Section>
                    <Container>
                        <div className="columns">
                            <div className="column is-half has-text-centered">
                                <Text h1 style={{fontWeight: '700', fontSize: '40px'}}>
                                    {this.props.message}
                                </Text>
                            </div>
                            <div className="column is-half is-vcentered" style={{textAlign: 'center'}}>
                                <Spacer y={1} />
                                <a href={this.props.redir} style={{color: 'white!important'}}>
                                    <Button className="is-vcentered" shadow="true" size="large" type="secondary"
                                        style={{
                                            fontSize: '16px',
                                            fontWeight: '500',
                                            letterSpacing: '-0.018em',
                                            minHeight: '40px',
                                            color: '#fff!important'
                                        }}>
                                        {this.props.button} &rarr;
                                    </Button>
                                </a>
                            </div>
                        </div>
                        
                    </Container>
                </Section>
            </div>
        )
    }
}

export default PreFoot;