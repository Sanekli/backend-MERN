import React, { useEffect } from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { getReservation } from '../../Redux/Actions/actions';
import './reservation.css';

const ReservationList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getReservation());
      }, []);
      const reservation = useSelector((state) => state.Reducers.getReservation);
   
  return (
    
    <div className="cart">
    {reservation?.map((oneReservation) => (
        <Card className="cart-reservation" style={{ width: '18rem' }}>
          <Card.Header>Reservation Card</Card.Header>
          <ListGroup variant="flush" key={oneReservation._id}>
            <ListGroup.Item>Dar:{oneReservation.choose}</ListGroup.Item>
            <ListGroup.Item>Name:{oneReservation.name}</ListGroup.Item>
            <ListGroup.Item>Last Name:{oneReservation.lastName}</ListGroup.Item>
            <ListGroup.Item>Email:{oneReservation.email}</ListGroup.Item>
            <ListGroup.Item>Phone Number:{oneReservation.phoneNumber}</ListGroup.Item>
            <ListGroup.Item>Date : {oneReservation.date}</ListGroup.Item>
            <ListGroup.Item>Address:{oneReservation.address}</ListGroup.Item>
          </ListGroup>
        </Card> 
      ))
    }
    </div>
    )
}

export default ReservationList
