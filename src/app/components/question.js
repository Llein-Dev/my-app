import React from 'react';

export default function Question({ question, onAnswer }) {
    return (
        <div className="w-3/4 p-4">
            <h2 className="text-2xl font-bold mb-4">{question.question}</h2>
            <div className="space-y-2">
                <button
                    onClick={() => onAnswer(true)}
                    className="block w-full py-2 bg-green-500 text-white rounded"
                >
                    True
                </button>
                <button
                    onClick={() => onAnswer(false)}
                    className="block w-full py-2 bg-red-500 text-white rounded"
                >
                    False
                </button>
            </div>
        </div>
    );
}
