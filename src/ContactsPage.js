import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from './NavBar.js';

import img from './images/background-plant.png';
import logo from './images/logo.png'

export class ContactsPage extends React.Component {
    render(){
        return (
            <div>
                <div className="logo">
                    <img src={ logo }/>
                    { this.props.message }
                </div>
                <NavBar/>
                <h1>Contacts</h1>
                <p>Phone:</p>
                <p>Email:</p>
                <img className="background-img" src={ img } />
            </div>
        );
    }
}