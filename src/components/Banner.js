import React from 'react';

import { Container } from 'reactbulma';
import { Grid } from '@geist-ui/react';

class Banner extends React.Component {
    render() {
        return (
            <div className="pre-banner" id="pre-id-banner" style={(this.props.goup) ? {transform: 'translateY(-5px)'} : {}}>
                <Container>
                    <Grid.Container gap={2} justify="center">
                        <Grid>
                            <span style={{padding: '10px'}} className="pre-bold pre-white">{this.props.message}</span>
                            </Grid>
                        <Grid>
                            <a href="/banner-redirect">
                                <span style={{padding: '10px'}} className="pre-dark pre-white">Learn more &rarr;</span>
                            </a>
                        </Grid>
                    </Grid.Container>
                </Container>
            </div>
        )
    }
}

export default Banner;