import React, { Component } from 'react'
import styled from 'styled-components'
import Particles from 'react-particles-js'
import particlesParams from './particlesParams'

export default class Landing extends Component {
    constructor() {
        super()
        this.state = {
            color: 'blue',
        }
        this.changeTitleColor = this.changeTitleColor.bind(this)
    }
    changeTitleColor(event) {
        this.setState({
            color: event.target.value
        })
    }
    render() {
        const Container = styled.section`
        height: 100vh;
        box-sizing: border-box;
        padding: 4em;
        background: #37434F;
    `
        const Title = styled.div`
        position: absolute;
        top: 50%;
        font-size: 1.5em;
        color: ${props => props.color};
    `
        return (
            <Container>
                <Particles params={particlesParams} />
                {/* <Title color={this.state.color}>
                    I am Court Eccles
                </Title> */}
                {/* <canvas>
                    <p>This could be a description of a potential canvas image. It will only appear if the browser does not support canvas.</p>
                </canvas> */}
                <input value={this.state.color} onChange={this.changeTitleColor} />
                <input />
                <button onClick={() => this.setState({ color: 'blue' })}>Blue</button>
                <button onClick={() => this.setState({ color: 'red' })}>Red</button>
                <button onClick={() => this.setState({ color: 'green' })}>Green</button>
            </Container >
        )
    }
}