import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

// Import Board and Scoreboard views
import { Board } from './ttt-board.jsx'
import { Scoreboard } from './ttt-scoreboard.jsx'

import './styles/ttt-board.css'
import './styles/ttt-box.css'
import './styles/ttt-buttons.css'


class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Route exact path="/" component= {Scoreboard}/>
          <Route path="/board" component= {Board}/>
        </BrowserRouter>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'))
export default App;