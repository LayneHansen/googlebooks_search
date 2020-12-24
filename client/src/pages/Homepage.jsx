import React, { useEffect, useState } from 'react';
import API from '../utils/API';
import TopCard from '../components/TopCard';
import Navbar from '../components/Navbar';
import BodyTron from '../components/BodyTron';
import { useGlobalContext } from '../utils/GlobalContext';

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

    return (
        <>
        <TopCard />
        <Navbar />
        <BodyTron />
        </>
    );
     };

export default Homepage;