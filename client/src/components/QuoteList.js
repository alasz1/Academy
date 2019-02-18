import React, { Component } from 'react';
import { deletequote } from './ServiceClient';
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class QuoteList extends Component {

    state = { url: "/users", data: [] }
    componentDidMount() {

        fetch(this.state.url)
            .then(vastaus => vastaus.json())
            .then(data => {
                this.setState({ data: data })
            })
    }

    // deletequote1 = (e) => {
    //     e.preventDefault();
    //     deletequote(this.id)
    // }

    _handleDelete(id) {
        deletequote(id)
        fetch(this.state.url)
            .then(vastaus => vastaus.json())
            .then(data => {
                this.setState({ data: data })
            })
    }

    render() {

        // this.state.data = luesanonta();



        //var callback = this.props.deletefunc;

        const sanonnat = this.state.data.map(s =>
            <ListGroup.Item key={s.id} className="quote">"{s.content}" - <span className="author">{s.author}</span><span className="delete"><Button variant="danger" size="sm" onClick={this._handleDelete.bind(this, s.id)}>Delete</Button></span></ListGroup.Item>
        )

        // let quotelista = this.props.quote.sort(function(p1, p2){
        //     return p1.id-p2.id}).map((arvo, indeksi)=> {
        //     return <Quote quote={arvo} key={arvo.id}/>
        // })

        return (
            <div>
                <Container>
                    <Row>
                        <Col md={2}></Col>
                        <Col md={8}>
                            <ListGroup>
                                {sanonnat}
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default QuoteList;