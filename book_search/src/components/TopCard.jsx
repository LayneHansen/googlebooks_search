import React from 'react';
import { Card, Body, Text } from 'react-bootstrap';
import { CustomPlaceholder } from 'react-placeholder-image';
import bookBanner from '../assets/banner-3544296_1280.jpg';
import './TopCard.css';
import Navbar from './Navbar'
import BodyTron from './BodyTron';
import openBook from '../assets/open_book.jpg';

const TopCard = () => {
    return (
        <>
       <Card>
        <Card.Header></Card.Header>
        <Card.Body id="grad">
            <blockquote className="blockquote mb-0">
            <h1 id="app-title">Your Next Read</h1>
            <footer className="blockquote-footer" id="app-subtitle">
                Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
            </blockquote>
        </Card.Body>
        </Card>
        </>
    )
}

export default TopCard;