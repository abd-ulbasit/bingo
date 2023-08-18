import { useState } from "react";
import { usePlayerBoardStore } from "../store/playerBoardStore";

const DesignPlayerBoard = () => {
    const [board, addCell] = usePlayerBoardStore((state) => [state.board, state.addCell])
    const [count, setCount] = useState(1)
    const handleAddCell = (i: number, j: number) => {
        if (board[i][j]?.key) {
            return
        }
        addCell(i, j, count)
        setCount(count + 1)

    }
    return (
        <div>
            <h1>Design Your Board</h1>
            <div className="grid gap-4" >
                {board.map((row, i) => (
                    <div key={i} className="flex gap-4" >
                        {row.map((col, j) => (
                            <button key={j} className="square" onClick={() => handleAddCell(i, j)}>{board[i][j]?.key ?? "X"}</button>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DesignPlayerBoard;