import React from 'react';
import { Link } from 'react-router-dom';

import { Text, Dot, Spacer } from '@geist-ui/react';

import { Alert } from 'evergreen-ui';

const year = new Date().getFullYear();

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="columns" style={{ fontSize: '14px' }}>
                        <div className="column is-two-fifths">
                            <span className="copyright bold">Copyright © 2019 – {year} South River Solar Hawks</span>
                            <br />All Rights Reserved. All Wrongs Reserved.<br />
                            <br />For any inquiries, contact <a href="mailto:support@solarhawks.org">support@solarhawks.org</a>
                            <br />
                            Designed by <a href='https://www.linkedin.com/in/ryan-wans' target="_blank">Ryan Wans</a>.
                        </div>
                        <div className='column is-three-fifths'>
                            SPONSORS GO HERE
                            <Spacer h={1} />
                            <Alert intent="warning" title="Notice">
                                This website is under construction and is planned to be finished by late April 2023. Some features may not work and pages may be unavailable.
                            </Alert>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;