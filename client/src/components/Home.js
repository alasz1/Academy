import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <h2>About the Quote Database</h2>
                <br/>
                <p>A simple app for reading/deleting quotes from a database.</p>
                <p>Navigate to "Quote List" to view/delete quotes in the database.</p>
                <p>Add new quotes to the database using the Quote Form.</p>
                <p>Made with React, Node.js and PostgreSQL.</p>
            </div>
        );
    }
}

export default Home;