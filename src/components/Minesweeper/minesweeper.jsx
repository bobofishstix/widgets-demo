import React, { useState } from 'react';
import './minesweeper.css';

function App() {
  const [bombs, setBombs] = useState([])
  const [visited, setVisited] = useState([])

  const buttonStyle = {
    width: 40,
    height: 40,
    backgroundColor: '#888',
    color: 'black',
    verticalAlign: 'top',
    fontSize: '32px',
    borderLeft: '5px solid #ccc',
    borderTop: '5px solid #ccc',
    borderBottom: '5px solid #333',
    borderRight: '5px solid #333',
    display: 'inline-block'
  }
  const visitStyle = {
    width: 40,
    height: 40,
    backgroundColor: '#555',
    color: 'white',
    fontWeight: 'bold',
    border: '1px solid black',
    verticalAlign: 'top',
    fontSize: '32px',
    display: 'inline-block'
  }

  const generateBombs = () => {
    let bombArr = Array(10).fill(0).map(elem => Array(10).fill(0))

    for(let i = 0; i < bombArr.length; i++){
      let bombPos = Math.floor(Math.random() * 10)
      bombArr[i][bombPos] = 'X'
    }

    for(let i = 0; i < bombArr.length; i++){
      for(let j = 0; j < bombArr[i].length; j++){
        if(bombArr[i][j] !== 'X'){
          let sum = 0

          if(i > 0 && bombArr[i-1][j] === 'X') sum++
          if(i < bombArr.length - 1 && bombArr[i+1][j] === 'X') sum++
          if(j < bombArr.length - 1 && bombArr[i][j+1] === 'X') sum++
          if(j > 0 && bombArr[i][j-1] === 'X') sum++
          if(i < bombArr.length - 1 && j > 0 && bombArr[i+1][j-1] === 'X') sum++
          if(i < bombArr.length - 1 && j < bombArr.length - 1 && bombArr[i+1][j+1] === 'X') sum++
          if(i > 0 && j > 0 && bombArr[i-1][j-1] === 'X' ) sum++
          if(i > 0 && j < bombArr.length - 1 && bombArr[i-1][j+1] === 'X' ) sum++

          bombArr[i][j] = sum
        }
      }
    }
    setBombs(bombArr)

    let cover = Array(10).fill(0).map(elem => Array(10).fill(0))
    setVisited(cover)
  }

  const visitCell = (i, j) => {
    if(bombs[i][j] === 'X') {
      window.location.reload();
    }
    dfsCells(i, j)
    visited[i][j] = 1
    setVisited([...visited])
  }

  function dfsCells(i, j) {
    if(i < 0 || i > visited.length - 1 || j < 0 || j > visited[0].length - 1 || visited[i][j] === 1 || bombs[i][j] === 'X') return

    visited[i][j] = 1

    setVisited([...visited])
    if(bombs[i][j] < 1){
      dfsCells(i+1, j)
      dfsCells(i-1, j)
      dfsCells(i, j+1)
      dfsCells(i, j-1)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className={'title'}>Minesweeper</div>
        {bombs.map((arr, index) =>
          <div>
            {arr.map((elem, i) =>
              <div
                onClick={() => visitCell(index, i)}
                style={visited[index][i] === 0 ? buttonStyle : visitStyle}>
                {visited[index][i] === 0 ? null : bombs[index][i] === 0 ? '' : bombs[index][i] }
              </div>
            )}
          </div>
        )}
        <div className='generate-box'>
        <button
          className={'generate'}
          onClick={() => generateBombs()}>Generate New Game</button>
          </div>
      </header>

    </div>
  );
}

export default App;