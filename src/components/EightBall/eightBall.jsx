import React, { useState } from "react";
import "./eightBall.css";

export default function EightBall() {
  const [question, setQuestion] = useState("");
  const [quote, setQuote] = useState("");
  
  const [quotes] = useState(
    ["It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes, definitely",
  "You may rely on it",
  "As I see it, yes",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Most likely",
  "Outlook not so good",
  "Very doubtful"]
  );

  const getQuote = (e) => {
    e.preventDefault();
    if (!question) {
      return;
    }
    const index = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[index]);
  };
  return (
    <div>
      <form onSubmit={getQuote}>
        <div className="question-text">
          <label className='label'>What do you wish to know?</label>
          <br></br>
          <input value={question} placeholder="Yes or No Questions" onChange={(e) => setQuestion(e.target.value)} />
          <br />
          <button type="submit">Discover the Truth</button>
        </div>
      </form>
      <br></br>
      <div className="ball">
        <div id="inner-ball">
          <p className="answer">{quote}</p>
        </div>
      </div>
    </div>
  );
}
