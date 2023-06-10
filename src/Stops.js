import React,{ useState, useEffect } from 'react';
import { Card,Button } from 'react-bootstrap';

function Stops(){
    const [stops,setStops] =useState([])
    useEffect(()=>{
        fetch("http://localhost:9292/stops")
        .then(resp =>resp.json())
        .then(data => setStops(data))
      },[])
    return(
        <div>
            {stops.map(stop=> {
                return (
                        <Card key={stop.id} style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{stop.destination}</Card.Title>
                                <Card.Text>
                                Arrive: {stop.arrival}
                                </Card.Text>
                                <Card.Text>
                                Depart: {stop.departure}
                                </Card.Text>
                                <Button href={'/stops/' + stop.id} variant="primary">Show stop</Button>
                            </Card.Body>
                        </Card>
                )
            })}
        </div>
    )
}
export default Stops