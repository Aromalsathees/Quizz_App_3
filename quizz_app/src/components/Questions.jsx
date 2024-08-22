


import React, { useState } from 'react';

export const Questions = ({ currentQuestions }) => {
    const [visibleQuestions, setVisibleQuestions] = useState({});

    const toggleVisibility = (id) => {
        setVisibleQuestions(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    return (
        <main>
            <div className='flex flex-col justify-center items-center h-screen'>
                <ul className='bg-white rounded-md px-8 py-5 space-y-4'>
                    <h1 className='text-4xl italic text-gray-600 text-center'>Quizz App</h1>
                    {currentQuestions.map((question) => (
                        <li key={question.id} className='space-y-4 border border-x-2 my-7'>
                            <h1 className='text-md mx-3'>{question.title}</h1>
                            <div className="flex">
                                <button
                                    onClick={() => toggleVisibility(question.id)}
                                    type="button"
                                    className="text-white hover:bg-green-300 bg-green-500 rounded-full w-10 h-10 flex items-center justify-center mb-4 mx-3"
                                >
                                    {visibleQuestions[question.id] ? '-' : '+'}
                                </button>
                            </div>
                            {visibleQuestions[question.id] && <p className='text-sm mx-4 mb-4'>{question.answer}</p>}
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
};
