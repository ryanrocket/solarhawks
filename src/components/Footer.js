import React from 'react';
import { Link } from 'react-router-dom';

import { Text, Dot } from '@geist-ui/react';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="columns" style={{fontSize: '14px'}}>
                        <div className="column is-two-fifths">
                            <span className="copyright bold">Copyright © 2019 – 2021 Ryan Wans</span>
                            <br />All Rights Reserved. All Wrongs Reserved.<br />
                            <br />For any inquiries, contact <a href="mailto:contact@ryanwans.com">contact@ryanwans.com</a>
                            <br />
                            Designed by Ryan Wans, obviously.<br />
                            <br />
                            <div className="dotWrapper">
                                <Dot type="success">All systems nominal.</Dot>
                            </div>
                        </div>
                        <div className="column">
                            <Text h5 style={{fontWeight: '400', fontSize: '14px', marginBottom: '15px'}}>Services</Text>
                            <Link className="subfoot" to="/analytics">Analytics</Link><br />
                            <Link className="subfoot" to="/cdn">Global CDN</Link><br />
                            <Link className="subfoot" to="/chatintro">Chat</Link><br />
                        </div>
                        <div className="column">
                            <Text h5 style={{fontWeight: '400', fontSize: '14px', marginBottom: '15px'}}>Quick Access</Text>
                            <Link className="subfoot" to="/about">About</Link><br />
                            <Link className="subfoot" to="/portfolio">Portfolio</Link><br />
                            <Link className="subfoot" to="/blog">Blog</Link><br />
                            <Link className="subfoot" to="/opensource">Open Source</Link>
                        </div>
                        <div className="column">
                            <Text h5 style={{fontWeight: '400', fontSize: '14px', marginBottom: '15px'}}>Help</Text>
                            <Link className="subfoot" to="/support">Support</Link><br />
                            <Link className="subfoot" to="/contact">Contact Me</Link>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;