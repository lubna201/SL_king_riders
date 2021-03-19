import { Container, Row, Col, Card } from 'react-bootstrap';
import React from 'react';
import { useParams } from 'react-router';
import './Book.css'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarAlt, faBus, faMotorcycle, faUserFriends ,faTrain} from '@fortawesome/free-solid-svg-icons'

const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

const Book = (props) => {
    console.log(props);
    const { title } = useParams();


    // const { isLoaded } = useJsApiLoader({
    //     id: 'google-map-script',
    //     googleMapsApiKey: "YOUR_API_KEY"
    // })

    // const [map, setMap] = React.useState(null)

    // const onLoad = React.useCallback(function callback(map) {
    //     const bounds = new window.google.maps.LatLngBounds();
    //     map.fitBounds(bounds);
    //     setMap(map)
    // }, [])

    // const onUnmount = React.useCallback(function callback(map) {
    //     setMap(null)
    // }, [])

    return (
        <div className="back">
            <Container className="detail">
                <Row className="row">
                    <Col sm={4}>
                        <h1>{title} Service</h1>
                        <br />
                        <div className="allINOne">
                            <input type="text" placeholder="Pick From" className="cardl" />
                            <br />
                            <input type="text" placeholder="Pick To" className="cardl" />
                            <br />
                            {/* <input type="button" value="Search" /> */}
                            <Card body className="card">
                                {(() => {
                                    if (title === 'CAR') {
                                        return (
                                            <FontAwesomeIcon icon={faCarAlt} />
                                        )
                                    }
                                    else if (title === "BUS") {
                                        return (
                                            <FontAwesomeIcon icon={faBus} />
                                        )
                                    }
                                    else if (title === "BIKE") {
                                        return (
                                            <FontAwesomeIcon icon={faMotorcycle} />
                                        )
                                    }
                                    else {
                                        return (
                                            <FontAwesomeIcon icon={faTrain} />
                                        )
                                    }
                                })()} {'  '}
                                {title}{'  '}

                                <FontAwesomeIcon icon={faUserFriends} />{'  '}4 {'   '}$67
                        </Card>
                            <Card body className="card">
                                {(() => {
                                    if (title === 'CAR') {
                                        return (
                                            <FontAwesomeIcon icon={faCarAlt} />
                                        )
                                    }
                                    else if (title === "BUS") {
                                        return (
                                            <FontAwesomeIcon icon={faBus} />
                                        )
                                    }
                                    else if (title === "BIKE") {
                                        return (
                                            <FontAwesomeIcon icon={faMotorcycle} />
                                        )
                                    }
                                    else {
                                        return (
                                            <FontAwesomeIcon icon={faTrain} />
                                        )
                                    }
                                })()} {'  '}
                                {title}{'  '}

                                <FontAwesomeIcon icon={faUserFriends} />{'  '}4 {'   '}$67
                        </Card>
                            <Card body className="card">
                                {(() => {
                                    if (title === 'CAR') {
                                        return (
                                            <FontAwesomeIcon icon={faCarAlt} />
                                        )
                                    }
                                    else if (title === "BUS") {
                                        return (
                                            <FontAwesomeIcon icon={faBus} />
                                        )
                                    }
                                    else if (title === "BIKE") {
                                        return (
                                            <FontAwesomeIcon icon={faMotorcycle} />
                                        )
                                    }
                                    else {
                                        return (
                                            <FontAwesomeIcon icon={faTrain} />
                                        )
                                    }
                                })()} {'  '}
                                {title}{'  '}

                                <FontAwesomeIcon icon={faUserFriends} />{'  '}4 {'   '}$67
                        </Card>
                        </div>
                    </Col>
                    <Col sm={8} className="back1">
                        <LoadScript
                            googleMapsApiKey="AIzaSyAylruSWIOWfFr6BNcDyjC5fcod_Dy0goU"
                        >
                            <GoogleMap
                                mapContainerStyle={containerStyle}
                                center={center}
                                zoom={10}
                            >
                                { /* Child components, such as markers, info windows, etc. */}
                                <></>
                            </GoogleMap>
                        </LoadScript>
                        {/* ) : <></> */}

                        {/* <img src={pic} alt="" /> */}
                        {/* AIzaSyAylruSWIOWfFr6BNcDyjC5fcod_Dy0goU */}

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Book;