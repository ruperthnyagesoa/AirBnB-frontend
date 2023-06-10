import { Form, Button} from 'react-bootstrap/';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React,{ useState} from 'react';
import { useNavigate } from "react-router"


function NewTrip(){
    let navigate= useNavigate();
    const [form,setForm]=useState({
        "title": "",
        "description": "",
        "start_date": "",
        "end_date": ""
      })
    function handleFormChange(e){
        setForm({...form,[e.target.name]:e.target.value})
    }
    function handleSubmit(e){
        e.preventDefault()
        fetch("http://localhost:9292/trips",{
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form)
      }).then(resp => resp.json())
      .then(data => navigate("/trips"))
        navigate("/trips")
          setForm({
            "title": "",
            "description": "",
            "start_date": "",
            "end_date": ""
          })} 
    return (
        <form onSubmit={handleSubmit} style={{ width: '40rem',margin: 'auto' }}>
          <h2>Create a new trip!</h2>
          
          <Row className='mt-2'>
            <Form.Label column lg={2}>
              Title
            </Form.Label>
            <Col xs={7}>
              <Form.Control type="text" placeholder="Title" name='title' value={form.title} onChange={handleFormChange}/>
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
          
          <Row className='mt-2'>
            <Form.Label column lg={2}>
              Start date
            </Form.Label>
            <Col xs={7}>
              <Form.Control type="text" placeholder="2022-06-01" name='start_date' value={form.start_date} onChange={(e)=>handleFormChange(e)} />
            </Col>
          </Row>

          <Row className='mt-2'>
            <Form.Label column lg={2}>
              End Date
            </Form.Label>
            <Col xs={7}>
              <Form.Control type="text" placeholder="2022-06-03" name='end_date' value={form.end_date} onChange={(e)=>handleFormChange(e)} />
            </Col>
          </Row>

          <Button onSubmit={handleSubmit} variant="primary" type="submit">
            Submit
          </Button>
        </form>
      )
}

export default NewTrip