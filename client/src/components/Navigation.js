import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'

class Navigation extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand>Quote Database</Navbar.Brand>
                    <a href="/">Home </a>
                    <a href="/quotelist">Quote List </a>
                    <a href="/quoteform">Quote Form</a>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;