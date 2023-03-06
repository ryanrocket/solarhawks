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
                            <div className="column is-half">
                                <Text h1 style={{fontWeight: '700', fontSize: '50px'}}>
                                    {this.props.message}
                                </Text>
                            </div>
                            <div className="column is-half has-text-centered is-vcentered">
                                <Spacer y={1} />
                                <a href={this.props.redir} style={{color: 'white!important'}}>
                                    <Button className="is-vcentered" shadow="true" size="large" type="success"
                                        style={{
                                            fontSize: '16px',
                                            fontWeight: '400',
                                            letterSpacing: '-0.018em',
                                            minHeight: '40px',
                                            color: '#fff!important'
                                        }}
                                    >
                                        {this.props.button}
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