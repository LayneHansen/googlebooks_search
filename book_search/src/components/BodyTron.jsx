import React from 'react';
import './BodyTron.css';
import { Jumbotron, Container, Form, FormControl, Button } from 'react-bootstrap';

const BodyTron = () => {
    return (
        <Jumbotron fluid>
            <Container>
                <h1>Search Books</h1>
                <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label></Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    Search for books by title or author.
                    </Form.Text>
                </Form.Group>

                <Button variant="info" type="submit">
                    SEARCH
                </Button>
                </Form>
            </Container>
        </Jumbotron>
    )

}

export default BodyTron;