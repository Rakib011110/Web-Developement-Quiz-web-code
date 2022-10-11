import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Home = () => {
    const quizes = useLoaderData()
    console.log(quizes);
    return (
        <div>




            <div className=' d-flex  justify-content-center gap-5  bg-opacity-25 mt-5'>

                {
                    quizes.data.map(quiz => <Quiz key={quiz.id} quiz={quiz} />)
                }
            </div>
        </div>
    );
};

export default Home;