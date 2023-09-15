import React, { useRef, useState } from 'react'
import { InstantSearch, useSearchBox, useInstantSearch, useHits } from 'react-instantsearch';
import { PlusCircle } from 'react-bootstrap-icons';
import { Container, Form, InputGroup, ListGroup } from 'react-bootstrap';
import algoliasearch from 'algoliasearch/lite';
import { useDispatch } from 'react-redux';
import { handlePatientSelection, handleUIChange } from '../Store/appointmentUISlice';

function PatientSearch() {

    const searchClient = algoliasearch('UJ5LC3ULZV', '0a05aa28b5c723862f39a8007fdf35e9');
    const dispatch = useDispatch()

    // Search result display
    const AlogliaSearchResult = (props) => {
        const { hits } = useHits(props);
        return (
           
                <ListGroup className=''>
                    {hits.length === 0 ?
                        <ListGroup.Item action variant='success'
                            className='p-5 d-flex justify-content-center '
                            onClick={() => { dispatch(handleUIChange("create")) }}
                        >
                            <PlusCircle style={{ width: "1.5em", height: "36px" }} />
                            <span className='ps-1 fs-4 '>CREATE NEW PATIENT PROFILE</span>
                        </ListGroup.Item>
                        :
                        <ListGroup.Item action variant='success'
                            className='d-flex justify-content-center '
                            onClick={() => { dispatch(handleUIChange("create")) }}
                        >
                            <PlusCircle style={{ width: "1em", height: "30px" }} />
                            <span className='ps-1 fs-5'>CREATE NEW PATIENT PROFILE</span>
                        </ListGroup.Item>
                    }

                    {hits.map((hit, key) => (
                        <ListGroup.Item action variant='light'
                            className='mt-1 border-top'
                            key={key}
                            onClick={() => { dispatch(handlePatientSelection(hit.id)) }}
                        >
                            <div>
                                <span>{hit.firstName + " " + hit.lastName}</span>
                            </div>
                            <div>
                                <span className='fs-6 fw-light'>Health Card: {hit.healthCardNumber}</span>
                            </div>
                            <div>
                                <span className='fs-6 fw-light'>Issuer: {hit.healthCardIssuer}</span>
                            </div>
                        </ListGroup.Item>
                    ))
                    }
                </ListGroup>
            

        );
    }

    // Search box
    const AlogliaSearchBox = (props) => {
        const { query, refine } = useSearchBox(props);
        const { status } = useInstantSearch();
        const [inputValue, setInputValue] = useState(query);
        const inputRef = useRef(null);
        const isSearchStalled = status === 'stalled';

        function setQuery(newQuery) {
            setInputValue(newQuery);
            refine(newQuery);
        }

        return (
            
                <Form
                    action="" role="search" noValidate
                    onSubmit={(event) => {
                        event.preventDefault();
                        event.stopPropagation();

                        if (inputRef.current) {
                            inputRef.current.blur();
                        }
                    }}
                    onReset={(event) => {
                        event.preventDefault();
                        event.stopPropagation();

                        setQuery('');

                        if (inputRef.current) {
                            inputRef.current.focus();
                        }
                    }}
                >
                    <div className='position-relative'>
                        <InputGroup>
                            <Form.Control
                                ref={inputRef} autoComplete="off" autoCorrect="off" autoFocus
                                autoCapitalize="off" placeholder="SEARCH FOR PATIENT" spellCheck={false}
                                maxLength={512} type="search" value={inputValue}
                                onChange={(event) => { setQuery(event.currentTarget.value) }}
                                className='' id="patientSearch" name="patientSearch"
                                style={{ zIndex: "99" }}
                            >
                            </Form.Control>


                        </InputGroup>
                        
                        <span hidden={!isSearchStalled}>Searching…</span>
                    </div>

                </Form>
            

        );
    }


    return (
        <Container className='pt-3'>
            <div>
                <h5 className='pt-2 pb-1'>SEARCH EXISTING PATIENT</h5>
                <InstantSearch searchClient={searchClient} indexName="navitas_patient" >
                    <AlogliaSearchBox />
                    <h5 className='pt-2 pb-2'>SELECT EXISTING PATIENT</h5>
                    <AlogliaSearchResult />
                </InstantSearch>
            </div>
        </Container>

    )
}

export default PatientSearch

