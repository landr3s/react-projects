import { useState } from 'react'

const TURN = {
  X: 'X',
  O: 'O'
}

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

type Turn = (typeof TURN)[keyof typeof TURN]

type Board = (Turn | null)[]

type Winner = null | Turn | 'draw'

function App() {
  const [board, setBoard] = useState<Board>(Array(9).fill(null))
  const [turn, setTurn] = useState<Turn>(TURN.X)
  const [winner, setWinner] = useState<Winner>(null)

  const updateBoard = (index: number) => {
    if (winner || board[index]) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    setWinner(checkWinner(newBoard))

    checkEndGame(newBoard) ? setWinner('draw') : null

    // Toggle turn
    setTurn(turn === TURN.X ? TURN.O : TURN.X)
  }

  const checkWinner = (board: Board): Winner => {
    for (const [a, b, c] of WINNER_COMBOS) {
      if (board[a] && board[a] === board[b] && board[a] === board[c])
        return board[a]
    }
    return null
  }

  const checkEndGame = (board: Board): boolean =>
    board.every(square => square !== null)

  const resetGame = () => {
    setTurn(TURN.X)
    setBoard(Array(9).fill(null))
    setWinner(null)
  }

  return (
    <div className='max-w-4xl mx-auto h-screen text-center'>
      <h1>Tic Tac Toe</h1>
      <button
        onClick={resetGame}
        className='px-2 py-4 rounded-md cursor-pointer border'
      >
        Reset Game
      </button>
      <section className='grid grid-cols-3 p-4 gap-2'>
        {board.map((square, index) => (
          <div
            className='size-24 rounded-md bg-gray-800 p-2 cursor-pointer text-white text-4xl'
            onClick={() => updateBoard(index)}
          >
            {board[index]}
          </div>
        ))}
        {winner && (
          <div>{winner === 'draw' ? 'Empate' : 'Gano: ' + winner}</div>
        )}
      </section>
    </div>
  )
}

export default App
