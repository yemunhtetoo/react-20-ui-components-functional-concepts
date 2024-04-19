import { useEffect, useState } from 'react';
import './styles.css'
export default function TicTacToe(){

    const [square, setSquare] = useState(Array(9).fill(''));
    const [isXTurn, setXTurn] = useState(true);
    const [status, setStatus] = useState('');
    console.log(square);

    function getWinner(squares){
        const winningPatterns = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [2,5,8],
            [0,4,8],
            [2,4,6],
            [0,3,6],
            [1,4,7]
        ];
        for(let i=0;i<winningPatterns.length;i++){
            const [x,y,z] = winningPatterns[i]
            if(squares[x] && squares[x] === squares[y] && squares[x] === squares[z]){
                return squares[x];
            }
        }
        return null;
    }

    function handleClick(getCurrentSquare){
        let cpySquares = [...square];
        if(getWinner(cpySquares) || cpySquares[getCurrentSquare]) return;
        cpySquares[getCurrentSquare] = isXTurn ? "X" : "O";
        setXTurn(!isXTurn);
        setSquare(cpySquares);
    }

    useEffect(()=>{
        if(!getWinner(square) && square.every(item=>item !== "")){
            setStatus('This is a draw ! Please restart the game');
        }else if(getWinner(square)){
            setStatus(`Winner is ${getWinner(square)}. Please Restart the game`);
        }else {
            setStatus(`Next Player is ${isXTurn ? 'X' : 'O'}`);
        }
    },[square,isXTurn]);

    function handleRestart(){
        setSquare(Array(9).fill(''));
        setXTurn(true);
    }
    return (
        <div className="tic-tac-toe-container">
            <div className="row">
                <Square value={square[0]} onClick={()=>handleClick(0)} />
                <Square value={square[1]} onClick={()=>handleClick(1)}/>
                <Square value={square[2]} onClick={()=>handleClick(2)}/>
            </div>
            <div className="row">
                <Square value={square[3]} onClick={()=>handleClick(3)}/>
                <Square value={square[4]} onClick={()=>handleClick(4)}/>
                <Square value={square[5]} onClick={()=>handleClick(5)}/>
            </div>
            <div className="row">
                <Square value={square[6]} onClick={()=>handleClick(6)}/>
                <Square value={square[7]} onClick={()=>handleClick(7)}/>
                <Square value={square[8]} onClick={()=>handleClick(8)}/>
            </div>
            <h1>{status}</h1>
            <button onClick={handleRestart}>Restart</button>
        </div>
    );
}

function Square({value, onClick}){
    return <button onClick={onClick} className='square'>{value}</button>
}