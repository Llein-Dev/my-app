import React from 'react';

export default function Header({ score }) {
    return (
        <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <h1 className="text-xl font-bold">Quiz</h1>
            <div className="text-lg">
                <h2>Score: {score.toLocaleString()}</h2>
            </div>
        </header>
    );
}
