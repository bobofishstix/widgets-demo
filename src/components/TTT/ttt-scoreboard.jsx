import React from 'react'
import { Link } from 'react-router-dom'

// Import Storage object
import { Storage } from './storage.js'

// Create Scoreboard component
export class Scoreboard extends React.Component {
  state = {
    scoreboard: []
  }

    // After component mounts, load any data from local storage and update component state
  async componentDidMount() {
    let storage = await new Storage().getData()

    this.setState({
      scoreboard: storage
    })
  }

  render() {
    return (
      <div className="game">
        <h1>Recent games:</h1>


        <ul>
          {this.state.scoreboard.map((leader, key) => {
            return <li key={key}>{leader}</li>
          })}
        </ul>


        <Link to="/board">
          <button className="btn">Start new game</button>
        </Link>
      </div>
    )
  }
}
