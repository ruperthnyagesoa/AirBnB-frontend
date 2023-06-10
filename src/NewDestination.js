import { Form, Button} from 'react-bootstrap/';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React,{ useState, useEffect } from 'react';
import { Route, Routes,useNavigate,useParams } from "react-router"


function NewDestination(){
    let navigate= useNavigate();
    const [form,setForm]=useState({
        "name": "",
        "location": "",
        "description": ""
      })
    function handleFormChange(e){
        setForm({...form,[e.target.name]:e.target.value})
    }
    function handleSubmit(e){
        e.preventDefault()
        fetch("http://localhost:9292/destinations",{
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form)
      }).then(resp => resp.json())
      .then(data => navigate(`/destinations/${data.id}`))
        navigate("/destinations")
          setForm({
            "name": "",
            "location": "",
            "description": ""
          })} 
    return (
        <form onSubmit={handleSubmit} style={{ width: '40rem',margin: 'auto' }}>
          <h2>Create a new destination!</h2>
          
          <Row className='mt-2'>
            <Form.Label column lg={2}>
              Name
            </Form.Label>
            <Col xs={7}>
              <Form.Control type="text" placeholder="Name" name='name' value={form.name} onChange={handleFormChange}/>
            </Col>
          </Row>
          
          <Row className='mt-2'>
            <Form.Label column lg={2}>
              Location
            </Form.Label>
            <Col xs={7}>
              <Form.Control type="text" placeholder="Location" name='location' value={form.location} onChange={(e)=>handleFormChange(e)} />
            </Col>
          </Row>
          
          <Row className='mt-2'>
            <Form.Label column lg={2}>
              Description
            </Form.Label>
            <Col xs={7}>
              <Form.Control type="text" placeholder="Description" name='description' value={form.description} onChange={(e)=>handleFormChange(e)} />
            </Col>
          </Row>
          <Button onSubmit={handleSubmit} variant="primary" type="submit">
            Submit
          </Button>
        </form>
      )
}

export default NewDestination