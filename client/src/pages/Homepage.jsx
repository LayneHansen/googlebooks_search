import React, { useEffect, useState } from 'react';
import API from '../utils/API';
import TopCard from '../components/TopCard';
import Navbar from '../components/Navbar';
import BodyTron from '../components/BodyTron';
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
        
        {books.map(book => <>
            <p>{book.volumeInfo.title}</p>
            <p>{}</p>
            <p>{}</p>
            <p>{}</p>
            <p>{}</p>

        </>)}

        </>
    );
     };

export default Homepage;