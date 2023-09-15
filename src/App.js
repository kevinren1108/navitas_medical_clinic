import { Routes, Route } from "react-router-dom";
import Patient from "./Page/Patient";
import Appointment from "./Page/Appointment";
import Schedule from "./Page/Schedule";
import Home from "./Page/Home";
import { Container } from "react-bootstrap";
import DateDetail from "./Page/Schedule/Component/dateDetail";

export default function App() {
  return (
    
      <Routes>
        <Route index element={<Home />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/appointment" element={<Schedule />} />
        <Route path="/newbooking" element={<Appointment />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    
  );
}


function NoMatch() {
  return (
    <Container className="d-flex justify-content-center pt-2">
      <h2 >Nothing to see here!</h2>
      
    </Container>
  );
}