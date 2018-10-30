import React from 'react';
import styled from 'styled-components';

export default function Landing() {
    const Container = styled.section`
        padding: 4em;
        background: papayawhip;
    `;
    const Title = styled.h1`
        font-size: 1.5em;
        text-align: center;
        color: palevioletred;
    `;

    return (
        <Container>
            <Title>
                Woa!
            </Title>
        </Container>
    )
}