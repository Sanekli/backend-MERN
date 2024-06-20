import './App.css';
import {Route,Routes} from 'react-router-dom';
import Home from './Components/Home/home';
import AboutUs from './Components/AboutUs/aboutUs'
import NavBar from './Components/Home/navBar'
import Register from './Components/Register/Register';
import Reservation from './Components/Reservation/Reservation'
import Details from './Components/ourHome/Details'
import Products from './Components/ourHome/Product';
import Login from './Components/Register/SignIn';
import ReservationList from './Components/Reservation/ReservationList';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/SignUp" element={<Register />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Product" element={<Products />} />
      <Route path="/reservation" element={<Reservation />} />
      <Route path="/Details/:id" element={<Details />} />
      <Route path="/listNewReservation" element={<ReservationList />} />
      </Routes>
    </div>
  );
}

export default App;
