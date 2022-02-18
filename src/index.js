import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    // The Square component renders a single <button> and the Board renders 9 squares.
  render() {
    return (
      <button className="square">
        {/* TODO */}
      </button>
    );
  }
}

class Board extends React.Component {
    renderSquare(i) {
        return <Square/>;
    }

    render() {
        // the Board renders 9 squares
        const status = 'Next player: X';
        let sizeArray = [...Array(3).keys()];
        let rowLength = sizeArray.length;

    return (
      <div>
        <div className="status">{status}</div>
        {
          sizeArray.map((current_row_index) =>
            // Build the row
            <div className="board-row">
              {sizeArray.map((current_column_index) =>
                // render each square for the row
              /* displayed number is the zero-indexed count of the current cell's place in the total board,
                 equal to how many rows precede this one multiplied by the number of cells per row, plus how many cells precede the current one in the row.
              Example: For the 3rd row, 2nd column with a board size of 3: 2 rows and 1 cell precede the current cell
                       => (2 * 3) + 1 => 6 + 1 => 7 */
                this.renderSquare((current_row_index * boardSize) + current_column_index))}
            </div>)
        }
      </div>);
  }
}


class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

