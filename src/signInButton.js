import React from 'react';
import {Welcome} from "./Welcome";

const green = '#39D1B4';
const yellow = '#FFD712';

export class SignInButton extends React.Component {
    showText() {
        alert('Yeah! That is your day!')
    }

    constructor(props) {
        super(props);
        this.state = {color: green};
        this.changeColor = this.changeColor.bind(this);

    }

    changeColor() {
        const newColor = this.state.color == green ? yellow : green;
        this.setState({color: newColor});

    }

    render() {
        return (
            <div>
                <button
                    style={{background: this.state.color}}
                    onClick={this.changeColor}>Sign in
                </button>
                <Welcome name='Oksana' signedIn="true"/>
            </div>
        )
    }
}