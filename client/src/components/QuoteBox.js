import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Home from './Home';
import QuoteList from './QuoteList';
import QuoteForm from './QuoteForm';
import NotFound from './NotFound';

var data = []

class QuoteBox extends Component {
    state = {}
    uusiQuote = (quote) => {
        this.setState({quote: quote});
        data.push(quote);
    }     

    render() {
        return (
            <div>
                <Switch>
                    <Route exact name="index" path="/" component={Home} />
                    <Route path="/quotelist" component={QuoteList} quote={data} callback={this._handleDelete}/>
                    <Route exact path="/quoteform" component={QuoteForm} callback={this.uusiQuote}/>
                    <Route component={NotFound} /> 
                </Switch>
            </div>
        );
    }
}

export default QuoteBox;