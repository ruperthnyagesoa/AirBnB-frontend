import { Form, Button} from 'react-bootstrap/';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React,{ useState, useEffect } from 'react';
import { Route, Routes,useNavigate,useParams } from "react-router"


function NewStop(){

    let navigate= useNavigate();

    let { id } = useParams();

    const [form,setForm]=useState({
        "arrival": "",
        "departure": "",
        "trip_id": 1,
        "destination_id": "",
        "trip_id":id
      })

    function handleFormChange(e){
        setForm({...form,[e.target.name]:e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch("http://localhost:9292/stops",{
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form)
      }).then(resp => resp.json())
      .then(data => navigate(`/trips/${data.trip_id}`))
        } 

    return (
        <form onSubmit={handleSubmit} style={{ width: '40rem',margin: 'auto' }}>
          <h2>Create a new Stop!</h2>
          
          <Row className='mt-2'>
            <Form.Label column lg={2}>
              Arrival
            </Form.Label>
            <Col xs={7}>
              <Form.Control type="text" placeholder="2022-06-03" name='arrival' value={form.arrival} onChange={handleFormChange}/>
            </Col>
          </Row>
          
          <Row className='mt-2'>
            <Form.Label column lg={2}>
              Departure
            </Form.Label>
            <Col xs={7}>
              <Form.Control type="text" placeholder="2022-06-03" name='departure' value={form.departure} onChange={(e)=>handleFormChange(e)} />
            </Col>
          </Row>
          
          <Row className='mt-2'>
            <Form.Label column lg={2}>
              Destination ID
            </Form.Label>
            <Col xs={7}>
              <Form.Control type="text" placeholder="1" name='destination_id' value={form.destination_id} onChange={(e)=>handleFormChange(e)} />
            </Col>
          </Row>

          <Button onSubmit={handleSubmit} variant="primary" type="submit">
            Submit
          </Button>
        </form>
      )
}

export default NewStop