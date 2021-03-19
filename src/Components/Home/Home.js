import React from 'react';
import Transport from '../Transport/Transport';
import { Container, Row } from 'react-bootstrap';
import './Home.css';

const Home = () => {
    const style = {
        display: 'flex',
        padding: '40px',
        marginTop: '100px',
        justifyContent: 'space-between'
    }
    const transports = [
        {

            imgUrl: 'https://i.pinimg.com/originals/54/68/31/5468318f51c31dd560e5c304eaed35c2.jpg',
            title: 'BIKE'
        },
        {
            imgUrl: 'https://i.pinimg.com/originals/72/45/df/7245dfbd681c60ae0db4bc7f2b2c1a0f.png',
            title: 'CAR'
        },
        {
            imgUrl: 'https://img.freepik.com/free-vector/red-bus-illustration_173474-60.jpg?size=626&ext=jpg',
            title: 'BUS'
        },
        {
            imgUrl: 'https://image.shutterstock.com/image-vector/illustration-train-color-drawing-white-260nw-466527431.jpg',
            title: 'TRAIN'
        }

    ]
    return (
        <Container className="detail">
            <Row style={style} className="team">
                {
                    transports.map(transport => <Transport key={transport.title, transport.imgUrl} transport={transport} className="design"></Transport>)
                }
            </Row>
        </Container>
    );
};

export default Home;