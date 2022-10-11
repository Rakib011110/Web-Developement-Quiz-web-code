import React from 'react';

const QuizDetail = ({ quiz }) => {
    const { options, question, correctAnswer

    } = quiz

    console.log(quiz)


    const [q1, q2, q3, q4,] = options


    const handleAnsQuiz = (options) => {
        if (correctAnswer
            === options) {
            alert('done')
        }
        else {
            alert('wrong')
        }
    }


    return (
        <div className=' align-content-center container row-cols-2'>
            <h5 className=''>{question} </h5>




            <div className='d-flex gap-1 align-content-center mt-3'>
                <button onClick={() => handleAnsQuiz(q1)}> {q1}</button>
                <button onClick={() => handleAnsQuiz(q2)}> {q2}</button>
                <button onClick={() => handleAnsQuiz(q3)}> {q3}</button>
                <button onClick={() => handleAnsQuiz(q4)}> {q4}</button>


            </div>




        </div>
    );
};

export default QuizDetail;