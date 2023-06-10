import React,{ useState, useEffect } from 'react';
import { Card,Button } from 'react-bootstrap';

function Trips(){
    const [trips,setTrips] =useState([])

    useEffect(()=>{
        fetch("http://localhost:9292/trips")
        .then(resp =>resp.json())
        .then(data => setTrips(data))
      },[])
      
      function handleDelete(e){
        fetch(`http://localhost:9292/trips/${e.target.name}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(data=> setTrips(trips.filter(trip=>trip.id !==data.id)));
      }

    return(
        <div>
            <Button href="/trips/new"  variant="secondary">New Trip</Button>
            {trips.map(trip=> {
                return (
                        <Card key={trip.id} style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{trip.title}</Card.Title>
                                <Card.Text>
                                {trip.description}
                                </Card.Text>
                                <Card.Text>
                                Starts: {trip.start_date}
                                </Card.Text>
                                <Card.Text>
                                Ends: {trip.end_date}
                                </Card.Text>
                                <Button href={'/trips/' + trip.id}  variant="primary">Show trip</Button>
                                <Button name={trip.id} onClick={(e)=>handleDelete(e)}  variant="dark">Delete Trip</Button>
                            </Card.Body>
                        </Card>
                )
            })}
        </div>
    )
}
export default Trips