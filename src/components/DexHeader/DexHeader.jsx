import React, { Component } from 'react';
import logo from './logo.svg';
import styled from 'styled-components'

const Img = styled.img`
    height: 3.5rem;
    pointer-events: none;
`;

const Header = styled.header`
background-color: hsl(317, 36%, 61%);
min-height: 20vh;
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
font-size: 28px;
color: #593fca;
`;

const H1 = styled.h1`
font-size: 4rem;
`;

export default class DexHeader extends Component {
    render() {
        return (
            <Header>
            <Img src={logo} alt="React logo"/>
            <H1>
              NFT Crypto DEX
            </H1>
          </Header>
        )
    }
}
