import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Header from './Layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './Layout/Sidebar';
import { Col, Container, Row } from 'react-bootstrap';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Container fluid>
      <Row className=''>
        <Col xs={'2'} className='px-0 border-end '>
          <SideBar />
        </Col>
        <Col className='px-0'>
          <Header />
          <App/>
        </Col>

      </Row>

    </Container>



  </BrowserRouter>
);


