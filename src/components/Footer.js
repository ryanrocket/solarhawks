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
                            <span className="copyright bold">Copyright © 2021 – 2023 South River Solar Hawks</span>
                            <br />All Rights Reserved. All Wrongs Reserved.<br />
                            <br />For any inquiries, contact <a href="mailto:support@solarhawks.org">support@solarhawks.org</a>
                            <br />
                            Designed by Ryan Wans.
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;