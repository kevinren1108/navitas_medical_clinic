import { Routes, Route, Link } from "react-router-dom";
import Patient from "./Page/Patient";
import Appointment from "./Page/Appointment";
import Schedule from "./Page/Schedule";

export default function App() {
  return (
    
      <Routes>
        <Route index element={<Home />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}