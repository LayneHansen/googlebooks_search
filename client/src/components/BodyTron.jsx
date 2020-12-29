import React, { useState } from 'react';
import './BodyTron.css';
import { Jumbotron, Container, Form, Button, } from 'react-bootstrap';

const BodyTron = (props) => {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")

    console.log("Here we go again")
    
    return (
        <Jumbotron fluid>
            <Container>
                <h1>Search Books</h1>
                <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label></Form.Label>
                    <Form.Control type="input" placeholder="Search Books" 
                    onChange={(e) => {setTitle(e.target.value)}}
                    value={title}
                    placeholder="Title"
                    />
                    <Form.Control type="input" placeholder="Search Books" 
                    onChange={() => {}}
                    name="author"
                    placeholder="Author"
                    />
                    <Form.Text className="text-muted">
                    Search for books by title or author.
                    </Form.Text>
                </Form.Group>

                <Button variant="info" type="submit"
                    onClick={function (event) {
                        event.preventDefault();
                        console.log('whatever', title);
                        props.bookSearch(title);
                    }}
                >
                    SEARCH
                </Button>

                </Form>
            </Container>
        </Jumbotron>
    )

}

export default BodyTron;