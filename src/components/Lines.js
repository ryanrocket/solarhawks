import React from 'react';
import { Container } from 'reactbulma';


class Lines extends React.Component {
    render() {
        return (
                <Container style={{height: '100%', position: 'absolute', zIndex: '0', top: '0'}}>
                    <div className="LinesComponent is-hidden-mobile">
                        <div className="SingleLine" />
                        <div className="SingleLine" />
                        <div className="SingleLine" />
                        <div className="SingleLine" />
                        <div className="SingleLine" />
                    </div>
                </Container>
        )
    }
}

export default Lines;