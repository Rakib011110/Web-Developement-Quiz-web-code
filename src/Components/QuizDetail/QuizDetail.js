import React from 'react';
import Options from '../Options/Options';

const QuizDetail = ({ quiz }) => {
    const { options, question
    } = quiz
    return (
        <div className=' align-content-center container row-cols-2'>
            <h5>{question
            } </h5>


            <div className='d-flex gap-4 align-content-center'>

                {
                    options.map((option, index) => <Options option={option} key={index} ></Options>)
                }

            </div>
        </div>
    );
};

export default QuizDetail;