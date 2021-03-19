import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Transport.css';

const Transport = ({ transport }) => {
    const history = useHistory();
    const handleTransport = (title) => {
        history.push(`/book/${title}`);
    }
    return (
        <Col sm={3}>
            <Card className="design" onClick={() => handleTransport(transport.title)}>
                <Card.Img variant="top" src={transport.imgUrl} />
                <Card.Body>
                    <Card.Title><h4>{transport.title}</h4></Card.Title>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Transport;