import React, { Component } from 'react';
import { luosanonta } from './ServiceClient';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class QuoteForm extends Component {
    state = {content: "", author: ''};
    handleQuoteChange = (e) => {
        const uusiarvo = e.target.value;
        this.setState({content: uusiarvo});
    }
    handleAuthorChange = (e) => {
        const uusiarvo = e.target.value;
        this.setState({author: uusiarvo});
    }
    handleCreateClick = (e) => {
        e.preventDefault();
        // personin tiedot: this.state

        luosanonta(this.state);

        //this.props.callback(this.state);
        this.setState({content: "", author: ''});
    }
    render() {
        return (
            <Container>
                <Row>
                <Col sm={2} md={3}></Col>
                <Col sm={8} md={6}>
                <Form>
                <Form.Group controlId="formBasicQuote">
                <Form.Label>Add Quote</Form.Label>
                        <Form.Control type="text" placeholder="Add quote" id="form_quotetext"
                            value={this.state.content} onChange={this.handleQuoteChange}
                            required="required"/>
                </Form.Group>
                
                <Form.Group controlId="formBasicAuthor">
                <Form.Label>Author</Form.Label>
                <Form.Control type="text" placeholder="Author" id="form_author"
                            value={this.state.author} onChange={this.handleAuthorChange} />
                    </Form.Group> 
                    <Button variant="info" type="submit" onClick={this.handleCreateClick}>Add</Button>
                </Form>
                </Col>
                </Row>
            </Container>
        );
    }
}

export default QuoteForm;