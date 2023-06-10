import React,{ useState, useEffect } from 'react';
import { useParams } from "react-router"
import { Card,Button } from 'react-bootstrap';

function Stop(){
    const [stop,setStop] =useState({
        "id": 1,
        "title": "Biking",
        "description": "biking in texas and canada!!",
        "start_date": "2022-06-01T00:00:00.000Z",
        "end_date": "2022-06-10T00:00:00.000Z"
      })

    let { id } = useParams();
    useEffect(()=>{
        fetch(`http://localhost:9292/stops/${id}`)
        .then(resp =>resp.json())
        .then(data => setStop(data))
      },[])
    return(
        <Card key={stop.id} style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{stop.destination}</Card.Title>
                <Card.Text>
                Arrive: {stop.arrival}
                </Card.Text>
                <Card.Text>
                Depart: {stop.departure}
                </Card.Text>
                <Button href="/stops" variant="secondary">Back</Button>
            </Card.Body>
        </Card>

    )
}
export default Stop