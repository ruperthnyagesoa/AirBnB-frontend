import React,{ useState, useEffect } from 'react';
import { Card,Button } from 'react-bootstrap';
import { Route, Routes,useNavigate,useParams } from "react-router"

function Destinations(){
    let navigate= useNavigate();
    
    const [destinations,setDestinations] =useState([])

    useEffect(()=>{
        fetch("http://localhost:9292/destinations")
        .then(resp =>resp.json())
        .then(data => setDestinations(data))
      },[])

      function handleDelete(e){
        fetch(`http://localhost:9292/destinations/${e.target.name}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(data=> setDestinations(destinations.filter(destination=>destination.id !==data.id)));
      }

    return(
        <div>
            <Button href="/destinations/new"  variant="secondary">New Destination</Button>
            {destinations.map(destination=> {
                return (
                        <Card key={destination.id} style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{destination.name}</Card.Title>
                                <Card.Text>
                                Where: {destination.location}
                                </Card.Text>
                                <Card.Text>
                                Why: {destination.description}
                                </Card.Text>
                                <Card.Text>
                                Destination ID: {destination.id}
                                </Card.Text>
                                <Button href={'/destinations/' + destination.id} variant="primary">Show destination</Button>
                                <Button name={destination.id} onClick={(e)=>handleDelete(e)}  variant="dark">Delete Destination</Button>
                            </Card.Body>
                        </Card>
                )
            })}
        </div>
    )
}

export default Destinations