import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Navigation from './components/Navigation';
import QuoteBox from './components/QuoteBox';



class App extends Component {
  
  state = {url: "/users", data: []}
  componentDidMount() {
 


    fetch(this.state.url)
    .then(vastaus=>vastaus.json())
    .then(data => {
      this.setState({data:data})
    })
  }


  
  render() {

    const sanonnat = this.state.data.map(s =>
      <p key={s.id}>{s.content}:{s.author}</p>
      )

    return (
  <Router>
    <div className="App">

      <Navigation/>
      <br></br>
      <QuoteBox/>

    </div>
  </Router>

    );
        }}

export default App;
