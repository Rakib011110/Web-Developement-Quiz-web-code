import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import Carousel from 'react-bootstrap/Carousel';

import "./home.css"



const Home = () => {
    const quizes = useLoaderData()
    console.log(quizes);
    return (
        <div>







            <Carousel fade className=' p-3 bg-black'>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-50  img-fluid "
                        src={"https://miro.medium.com/max/1400/1*rPW0aatCGqYLXpG9sr9kVA.png"}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className=' text-info sm-none'>Web-Developement-Quiz</h3>
                        <p>Increase your skills by participating in Web-Development-Quiz  </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100  w-100 h-50  img-fluid"
                        src={"https://miro.medium.com/max/1400/1*rPW0aatCGqYLXpG9sr9kVA.png"}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className=' text-info'>Web-Developement-Quiz</h3>
                        <p>Increase your skills by participating in Web-Development-Quiz  </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100  w-100 h-50  img-fluid"
                        src={"https://miro.medium.com/max/1400/1*rPW0aatCGqYLXpG9sr9kVA.png"}
                        alt="Third slide"
                    />

                    <Carousel.Caption className=' sm-d-sm-none ' >
                        <h3 className=' text-info'>Web-Developement-Quiz</h3>
                        <p>Increase your skills by participating in Web-Development-Quiz  </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>







            <div className='   row row-cols-lg-4 row-cols-md-2 row-cols-sm-1  bg-black mt-5 bg-opacity-  justify-content-center    quiz  mx-5 p-3 '>

                {
                    quizes.data.map(quiz => <Quiz key={quiz.id} quiz={quiz} />)
                }
            </div>
        </div>
    );
};

export default Home;