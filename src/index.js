import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
  /* The Square function component renders a single <button> and the Board component renders 9 squares.

     A function component can be thought of as a way of turning a class with attributes into a function where
     its arguments are the current attributes' state.
   */
    return (
      <button className="square" onClick={props.onClick}>
        {props.value  /* Display the current value of the `value` prop */}
      </button>
    );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  handleClick(i) {
    /*
     Provides the functionality for the board when a square is clicked
     */
    const squares = this.state.squares.slice();  // Creates a copy of the existing array for immutability
    squares[i] = 'X';
    this.setState({squares: squares});
  }

  renderSquare(i) {
    return (<Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    // the Board renders 9 squares
    const status = 'Next player: X';
    let boardSize = this.props.size || 3;  // The passed in value of "size" (default: 3)
    let sizeArray = [...Array(boardSize).keys()];  // Build an array of length rowLength containing the range, e.g. [0, 1, 2] for the default size of 3.

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
          <Board size={3}/>
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
  <Game/>,
  document.getElementById('root')
);

