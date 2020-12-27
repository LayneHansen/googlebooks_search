import React, { useEffect, useState } from 'react';
import API from '../utils/API';
import TopCard from '../components/TopCard';
import Navbar from '../components/Navbar';
import BodyTron from '../components/BodyTron';
import { Jumbotron, Container, Form, Button, Card, ButtonGroup } from 'react-bootstrap';
import { useGlobalContext } from '../utils/GlobalContext';
import axios from 'axios';

const Homepage = () => {
    const [books, setBooks] = useState([])
    const [formObject, setFormObject] = useState([])
    
    useEffect(() => {
        displayBooks()
    }, [])

    function displayBooks(){
        API.getBooks()
        .then (res => 
            setBooks(res.data))
        .catch(err => console.log (err));
    }

        const googleBookSearch = (title) => {
            console.log(title, "this is the title");
            axios.get("https://www.googleapis.com/books/v1/volumes?q=" + title)
              .then((res) => {setBooks(res.data.items)})
        }

    return (
        <>
        <TopCard />
        <Navbar />
        <BodyTron 
            bookSearch={googleBookSearch}
        />
        
        {books.map(book => 
        <>
            <Card body>
                <img src={book.volumeInfo.imageLinks.thumbnail} />
                <h3>{book.volumeInfo.title}</h3>
                <h5>{book.volumeInfo.authors}</h5>
                <p><span styling="strong">Synopsis: </span>{book.volumeInfo.description}</p>
                <p>Publication Date: {book.volumeInfo.publishedDate}</p>
                <Button variant="outline-info" href={book.saleInfo.buyLink}>Click to Buy</Button>{' '}
                <br /><br />
                <ButtonGroup aria-label="Basic example" className="mr-3">
                    <Button variant="info" key={book.title} a href={"/server/routes/search.routes.js"}>
                    SAVE
                    
                    </Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button variant="info">UNSAVE</Button>
                </ButtonGroup>
            </Card>

        </>
        )}

        </>
    );
     };

export default Homepage;