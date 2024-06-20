import React, {useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import {Reservation} from '../../Redux/Actions/actions'
import './reservation.css'

 function ReservationForm ()  {
  const dispatch= useDispatch()
  const [email,setEmail] = useState('')
  const [lastName,setLastName] = useState('')
  const [phoneNumber,setPhoneNumber] = useState('')
  const [address,setAddress] = useState('')
  const [name,setName] = useState('')
  const [date,setDate] = useState('')
  const [choose,setChoose] = useState('')  
  const Submit = () => { 
    dispatch(Reservation({email,lastName,phoneNumber,address,name,date,choose}))
      }
   return (
     <div className="reservation">
     <h1>Please Check Your Reservation</h1>
    <Form  >
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control  placeholder="Enter name"  onChange={(e) => setName(e.target.value)} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>lastName</Form.Label>
          <Form.Control  placeholder="lastName"  onChange={(e) => setLastName(e.target.value)} />
        </Form.Group>
      </Row>
      <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
    </Form.Group>
      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>phoneNumber</Form.Label>
        <Form.Control placeholder=".. ... ..."  onChange={(e) => setPhoneNumber(e.target.value)}/>
      </Form.Group>
      <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>Address</Form.Label>
      <Form.Control  onChange={(e) => setAddress(e.target.value)} />
    </Form.Group>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Choose Your Appartement</Form.Label>
          <Form.Select defaultValue="Choose..." onChange={(e) =>setChoose(e.target.value)}>
            <option></option>
            <option>Dar Sabri</option>
            <option>Dar Rim</option>
            <option>Dar Selma</option> 
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Group controlId="dob">
          <Form.Label>Select Date</Form.Label>
          <Form.Control type="date" name="dob" placeholder="Date of Birth" onChange={(e) =>setDate(e.target.value)}/>
      </Form.Group>
          
        </Form.Group>
      </Row>
      <Button onClick ={() => Submit()} variant="primary" type="submit"  className="submit-btn"  defaultValue="Submit" >
        Submit
      </Button>
    </Form>
</div>
   )
 }
 
 export default ReservationForm