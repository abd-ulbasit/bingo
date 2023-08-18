import { useComputerBoardStore } from "../store/computerBoardStore";
import { usePlayerBoardStore } from "../store/playerBoardStore";

const PlayerBoard = () => {
    const [board, markCell] = usePlayerBoardStore((state) => [state.board, state.markCell])
    const markComputerCell = useComputerBoardStore((state) => state.markCell)
    const handleMarkCell = (i: number, j: number, value: number | undefined) => {
        if (!value) return
        console.log(i, j, value);
        markCell(i, j)
        markComputerCell(value)

    }
    return (
        <div className="grid gap-4" >
            {board.map((row, i) => (
                <div key={i} className="flex gap-4" >
                    {row.map((_col, j) => (
                        <button key={j} className={` rounded-md border w-12 h-12 text-center bg-slate-300 ${board[i][j]?.marked ? 'bg-slate-600' : ""}`} onClick={() => { handleMarkCell(i, j, board[i][j]?.key) }} disabled={board[i][j]?.marked} >{board[i][j]?.key ?? ""}</button>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default PlayerBoard;