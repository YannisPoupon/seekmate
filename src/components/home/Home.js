import React from "react";
import { Card, Button, Stack, Col, Row } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            <Row className="justify-content-md-center mt-5">
                <Col className="mt-5">
                    <h1>Bienvenu sur seekmates</h1>
                </Col>
            </Row>
            <Stack direction="horizontal" gap={3} className="justify-content-md-center mt-5" >
            <Card style={{ width: '20vw' }} className="mx-5">
                    <Card.Body>
                        <Card.Title>Voir les rooms</Card.Title>
                        <Card.Text>
                        Liste des rooms.
                        </Card.Text>
                                <Button variant="primary" onClick={() => navigate('/roomslist')}>Rejoindre</Button>
                    </Card.Body>
                    </Card>
                    <div className="vr" />
                    <Card style={{ width: '20vw' }} className="mx-5">
                    <Card.Body>
                        <Card.Title>Création room</Card.Title>
                        <Card.Text>
                        Creer une room.
                        </Card.Text>
                                <Button variant="primary" onClick={() => navigate('/createroom')}>Creer</Button>
                    </Card.Body>
                    </Card>
            </Stack>
        </>
    )
}

export default Home;