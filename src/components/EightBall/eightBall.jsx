import React, { useState } from 'react';
import './eightBall.css';

const quotes = [
    'Yes',
    'No',
    'Maybe'
];

export default function App() {
    const [question, setQuestion] = useState('');
    const [quote, setQuote] = useState('');


    const getQuote = (e) => {
        e.preventDefault();
        if (!question) {
            return;
        }
        const index = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[index]);
    };
    return(
        <div>
            <form onSubmit={getQuote}>
                <div>
                    <label>
                        What do you wish to know?
                    </label>
                    <br></br>
                    <input value={question} placeholder='Ask Away'
                            onChange={(e) => setQuestion(e.target.value)} />
                    
                    
                </div>
                    <button type="submit">
                        Discover the Truth
                    </button>
            </form>
            <div className="ball">
                <div id='inner-ball'>
                    <p>{quote}</p>
                </div>
            </div>
                

        </div>
    );
}