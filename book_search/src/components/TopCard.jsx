import React from 'react';
import { Card, Body, Text } from 'react-bootstrap';
import { CustomPlaceholder } from 'react-placeholder-image';

const TopCard = () => {
    return (
        <>
        <Card>
            <CustomPlaceholder width={1100} height={200} />
            {/* <Card.Img variant="top" src={placeholder} /> */}
            <Card.Body>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk
                of the card's content.
            </Card.Text>
            </Card.Body>
        </Card>
        </>
    )
}

export default TopCard;