import React, { useEffect, useState } from 'react';
import API from '../utils/API';
import TopCard from '../components/TopCard';
import Navbar from '../components/Navbar';
import BodyTron from '../components/BodyTron';
import { Button, Card, ButtonGroup } from 'react-bootstrap';
import { useGlobalContext } from '../utils/GlobalContext';
import axios from 'axios';

const Homepage = () => {
    const [, dispatch] = useGlobalContext();
    const [books, setBooks] = useState([])
    
    useEffect(() => {
        displayBooks()
    }, [])

    const displayBooks = () => {
        API.getBooks()
        .then (res => setBooks(res.data))
        .catch(err => console.log (err));
    }

    const googleBookSearch = (title) => {
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + title)
        .then((res) => setBooks(res.data.items))
        .catch(err => console.log (err));
    }

    const saveBook = (book) => {
        API.saveBook(book)
        .then ((res) => setBooks([...books, res.data]))
        .catch(err => console.log (err));
    }
    console.log(books)
    return (
        <>
        <TopCard />
        <Navbar />
        <BodyTron 
            bookSearch={googleBookSearch}
        />
            {books.map((book, index) => 
            <>
                <Card body>
                    <img src={book.volumeInfo.imageLinks.thumbnail} />
                    <h3>{book.volumeInfo.title}</h3>
                    <h5>{book.volumeInfo.authors}</h5>
                    <p><span styling="strong">Synopsis: </span>{book.volumeInfo.description}</p>
                    <p>Publication Date: {book.volumeInfo.publishedDate}</p>
                    <Button variant="outline-info" href={book.saleInfo.buyLink}>Click to Buy</Button>{' '}
                    <br /><br />
                    <ButtonGroup 
                        aria-label="Basic example" 
                        className="mr-3">
                        <Button 
                            variant="info" 
                            key={book.title} 
                            onClick={() => saveBook(books[index])}
                        >
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