import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Header from './Layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import { store } from './Services/store';
import { Provider } from 'react-redux';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch';

const searchClient = algoliasearch('UJ5LC3ULZV', '0a05aa28b5c723862f39a8007fdf35e9');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <InstantSearch searchClient={searchClient} indexName="instant_search">
        <Provider store={store}>
            <BrowserRouter>
                <Container fluid>
                    <Row className=''>    
                        <Col className='px-0'>
                            <Header />
                            <App />           
                        </Col>
                    </Row>
                </Container>
            </BrowserRouter>
        </Provider>
    </InstantSearch>
);


