import { Routes, Route } from "react-router-dom";
import Patient from "./Page/Patient";
import Appointment from "./Page/Appointment";
import Schedule from "./Page/Schedule";
import Home from "./Page/Home";
import { Container } from "react-bootstrap";
import Login from "./Page/Auth/login";
import { ProtectedRoute } from "./Routes/protectedRoute";
import ContactITD from "./Page/Auth/contactITD";

export default function App() {
    
   
    return (

        <Routes>
            {/* Not protected router */}
            <Route path="/login" element={ <Login />} /> 
            <Route path="/contactITD" element={ <ContactITD />} /> 
            {/* Protected router */}
            <Route index element={<ProtectedRoute> <Home /> </ProtectedRoute>} />
            <Route path="/patient" element={<ProtectedRoute> <Patient /> </ProtectedRoute>} />
            <Route path="/appointment" element={<ProtectedRoute> <Schedule /> </ProtectedRoute>} />
            <Route path="/newbooking" element={<ProtectedRoute> <Appointment /> </ProtectedRoute>} />
            {/* protect 403 for security */}
            <Route path="*" element={<ProtectedRoute> <NoMatch /> </ProtectedRoute>} />
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