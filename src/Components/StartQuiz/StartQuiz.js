import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetail from '../QuizDetail/QuizDetail';

const StartQuiz = () => {

    const quiz = useLoaderData()
    console.log(quiz.data.questions);


    return (
        <div className=' mt-5 '>


            {
                quiz.data.questions.map(quiz => <QuizDetail quiz={quiz} />)
            }

        </div>
    );
};

export default StartQuiz;