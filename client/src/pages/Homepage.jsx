import React, { useEffect, useState } from 'react';
import API from '../utils/API';
import TopCard from '../components/TopCard';
import Navbar from '../components/Navbar';
import BodyTron from '../components/BodyTron';
import { Jumbotron, Container, Form, Button, Card } from 'react-bootstrap';
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
                <p>{book.volumeInfo.imageLinks.thumbnail}</p>
                <p>{book.volumeInfo.title}</p>
                <p>{book.volumeInfo.authors}</p>
                <p>{book.volumeInfo.description}</p>
                <p>{book.volumeInfo.publishedDate}</p>
                <p>{book.saleInfo.buyLink}</p>
            </Card>

        </>
        )}

        </>
    );
     };

export default Homepage;