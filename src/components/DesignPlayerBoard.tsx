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
                        {row.map((_col, j) => (
                            <button key={j} className=" rounded-md border w-12 h-12 text-center bg-slate-300" onClick={() => handleAddCell(i, j)}>{board[i][j]?.key ?? "X"}</button>
                        ))}
                    </div>
                ))}
            </div>
            {count > 25 && <button className="btn" onClick={() => window.location.href = "/play"}>Play</button>}
        </div>
    );
}

export default DesignPlayerBoard;