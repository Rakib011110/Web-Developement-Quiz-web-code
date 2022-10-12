import React, { useState } from 'react';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FaEye } from 'react-icons/fa';




const QuizDetail = ({ quiz }) => {
    const { options, question, correctAnswer

    } = quiz

    console.log(quiz)


    const [q1, q2, q3, q4,] = options
    const [eye, setEye] = useState(correctAnswer)


    const handleEye = (correctAnswer) => {
        const show = eye
        setEye(show)
        toast.success(correctAnswer);
    }


    const handleAnsQuiz = (options) => {
        if (correctAnswer
            === options) {
            // alert('done')

            toast.success(" Right Answer");
        }
        else {
            // alert('wrong')
            toast.warning("thank Wrong Answer");
        }
    }


    return (
        <div className=' align-content-center bg-black rounded-5 container  p-1 row-cols-2'>
            <h5 className=' bg-info text-light p-1  rounded-4 mt-5'>{question}  <button onClick={() => handleEye(correctAnswer)} className=' my-3 '> <FaEye /></button> </h5>



            <div className='d-flex gap-1 row row-cols-lg-4 row-cols-md-2 row-cols-sm-1  container align-items-center   mt-2'>
                <button className='btn btn-dark p-3 rounded-4 ' onClick={() => handleAnsQuiz(q1)}> {q1}</button>
                <button className='btn btn-dark bg-opacity-10 p-3 rounded-4' onClick={() => handleAnsQuiz(q2)}> {q2}</button>
                <button className='btn btn-dark p-3 rounded-4' onClick={() => handleAnsQuiz(q3)}> {q3}</button>
                <button className='btn btn-dark p-3 rounded-4' onClick={() => handleAnsQuiz(q4)}> {q4}</button>
                <ToastContainer />

            </div>




        </div>
    );
};

export default QuizDetail;