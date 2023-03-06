import React from 'react';
import styled from 'styled-components'

const Comp = styled.a`
    @media screen and (min-width: 1216px) {
        max-width: 550px!important;
        width: 550px!important;
    }
    @media screen and (min-width: 1024px) and (max-width: 1215px) {
        max-width: 100%!important;
        width: 100%!important;
    }
`;

class Constricted extends React.Component {
    render() {
        return (
            <Comp />
        )
    }
}

export default Constricted;