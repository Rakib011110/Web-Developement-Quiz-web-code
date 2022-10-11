

import React from 'react';

const Options = ({ option, handleAnsQuiz }) => {
    const { correctAnswer, q1, q2, q3, q4 } = option
    return (
        <div>
            <card>
                <col>
                    <button onClick={() => handleAnsQuiz(correctAnswer)} > {q1}</button>
                    <button onClick={() => handleAnsQuiz(correctAnswer)}> {q2}</button>
                    <button onClick={() => handleAnsQuiz(correctAnswer)}> {q3}</button>
                    <button onClick={() => handleAnsQuiz(correctAnswer)}> {q4}</button>
                </col>
            </card>
        </div>
    );
};

export default Options;