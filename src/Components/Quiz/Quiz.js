import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from 'react-router-dom';



const Quiz = ({ quiz }) => {
    const { name, logo, id
    } = quiz
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(`/quiz/${id}`)

    }

    return (
        <div className='  align-items-center container  p-2' >

            <Card className='bg-info' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                    <Card.Title>name {name}</Card.Title>

                </Card.Body>
                <ListGroup className="list-group-flush">



                </ListGroup>
                <Card.Body>
                    <Card > <button onClick={handleNavigate} > {name} </button> </Card>
                    <Card > <button onClick={handleNavigate} > start Quiz </button>
                    </Card>

                </Card.Body>
            </Card>


        </div>
    );
};

export default Quiz;