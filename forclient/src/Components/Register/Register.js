import React,{useState}from 'react'
import './register.css'
import {useDispatch} from 'react-redux'
import {SignUp} from "../../Redux/Actions/actions"
import { useNavigate } from 'react-router-dom'

function Register() {
  const dispatch= useDispatch()
  const History = useNavigate()
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [phoneNumber,setPhoneNumber] = useState('')
  const [address,setAddress] = useState('')
  const [name,setName] = useState('')

  const Submit = () => { 
    dispatch(SignUp({email,password,phoneNumber,address,name}, History))
      }
  
  return (
    <div className="registerForm">
    <section className="get-in-touch">
<h1 className="title">SignUp</h1>
<form className="contact-form row">
<div className="form-field col-lg-6">
  <input
    id="name"
    className="input-text js-input"
    type="text"
    required=""
    onChange={(e) => setName(e.target.value)}
  />
  <label className="label" htmlFor="name">
    Name
  </label>
</div>
<div className="form-field col-lg-6 ">
  <input
    id="email"
    className="input-text js-input"
    type="email"
    required=""
    onChange={(e) => setEmail(e.target.value)}
  />
  <label className="label" htmlFor="email">
    E-mail
  </label>
</div>
<div className="form-field col-lg-6 ">
  <input
    id="password"
    className="input-text js-input"
    type="password"
    required=""
    onChange={(e) => setPassword(e.target.value)}
  />
  <label className="label" htmlFor="password">
    Password
  </label>
</div>
<div className="form-field col-lg-6 ">
  <input
    id="phone"
    className="input-text js-input"
    type="text"
    required=""
    onChange={(e) => setPhoneNumber(e.target.value)}
  />
  <label className="label" htmlFor="phone">
    Contact Number
  </label>
</div>
<div className="form-field col-lg-12">
  <input
    id="message"
    className="input-text js-input"
    type="text"
    required=""
    onChange={(e) => setAddress(e.target.value)}
  />
  <label className="label" htmlFor="address">
    your Address
  </label>
</div>
<div className="form-field col-lg-12">
<input onClick ={Submit}  className="submit-btn"  defaultValue="Submit" />
</div>
</form>
</section>


</div>

  )
}

export default Register