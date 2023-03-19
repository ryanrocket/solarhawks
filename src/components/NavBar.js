import React from 'react';

import { Container } from 'reactbulma';
import { Text, Button } from '@geist-ui/react';

import Default from '../assets/page';

class NavBar extends React.Component {
    render() {
        // eslint-disable-next-line
        return (
            <div>
                <nav className="navbar is-fixed-top" id="pre-id-navbar" style={{paddingTop: "10px", paddingBottom: "10px"}} role="navigation" aria-label="main navigation">
                    <Container>
                        <div className="navbar-brand">
                            <a className="navbar-item" href="/" style={{padding: '0', maxHeight: '60px'}}>
                                <Text h3 style={{padding: '8px 20px', margin: '0'}}>South River <b style={{fontWeight: '800'}}>Solar Hawks</b></Text>
                            </a>
                            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                            </a>
                        </div>
                        <div id="navbarBasicExample" className="navbar-menu">
                            <div className="navbar-end nav-access">                        
                                <a className="navbar-item pre-minihead" href="/about">
                                    About
                                </a>

                                <a className="navbar-item pre-minihead" href="/gallery">
                                    Gallery
                                </a>

                                <a className="navbar-item pre-minihead" href="/donate">
                                    Donate
                                </a>

                                <a className="navbar-item pre-minihead" href="/documentation">
                                    Documentation
                                </a>

                                <hr className="navbar-divider" />

                                <a className="navbar-item pre-minihead" href="/contact" style={{paddingLeft: '10px', paddingRight: '2px'}}>
                                    <Button auto type="success" className="pre-minihead" scale={1/2} style={{fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', padding: '0px 15px'}}>Contact &rarr;</Button>
                                </a>
                            </div>
                        </div>
                    </Container>
                </nav>
            </div>
        )
    }
}

export default NavBar;