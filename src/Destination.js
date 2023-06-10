import React,{ useState, useEffect } from 'react';
import { useParams } from "react-router"
import { Form, Button,Card} from 'react-bootstrap/';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Destination(){
    const [clicked,setClicked] = useState(false)
    const [destination,setDestination] =useState({
        "name": "",
        "location": "",
        "description": ""
      })

    let { id } = useParams();
    useEffect(()=>{
        fetch(`http://localhost:9292/destinations/${id}`)
        .then(resp =>resp.json())
        .then(data => setDestination(data))
      },[])

      function handleFormChange(e){
          setDestination({...destination,[e.target.name]:e.target.value})
      }

      function handleSubmit(e){
          e.preventDefault()
          setClicked(!clicked)
        fetch(`http://localhost:9292/destinations/${id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(destination),
          })
            .then((r) => r.json())
            .then(data => console.log(data));
      }
    return(
        <div>
          <Button href="/destinations"  variant="secondary">All Destinations</Button>
        <Card key={destination.id} style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{destination.name}</Card.Title>
                <Card.Text>
                Where: {destination.location}
                </Card.Text>
                <Card.Text>
                Why: {destination.description}
                </Card.Text>
                <Button onClick={()=>setClicked(!clicked)}  variant="dark">Edit</Button>
            </Card.Body>
        </Card>
                
        {clicked?
        <form onSubmit={handleSubmit} style={{ width: '40rem',margin: 'auto' }}>
        <h2>Edit Destination</h2>
        <Row className='mt-2'>
          <Form.Label column lg={2}>
            Name
          </Form.Label>
          <Col xs={7}>
            <Form.Control type="text" placeholder="Name" name='name' value={destination.name} onChange={handleFormChange}/>
          </Col>
        </Row>
        
        <Row className='mt-2'>
          <Form.Label column lg={2}>
            Location
          </Form.Label>
          <Col xs={7}>
            <Form.Control type="text" placeholder="Location" name='location' value={destination.location} onChange={handleFormChange} />
          </Col>
        </Row>
        
        <Row className='mt-2'>
          <Form.Label column lg={2}>
            Description
          </Form.Label>
          <Col xs={7}>
            <Form.Control type="text" placeholder="Description" name='description' value={destination.description} onChange={handleFormChange} />
          </Col>
        </Row>
        <Button onSubmit={()=>handleSubmit()} variant="primary" type="submit">
          Submit
        </Button>
      </form>
    :null}
      </div>
    )
}
export default Destination