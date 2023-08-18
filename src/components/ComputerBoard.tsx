import { useComputerBoardStore } from "../store/computerBoardStore";

const ComputerBoard = () => {
    const board = useComputerBoardStore(state => state.board)
    console.log({ board });

    return (
        <div className="grid gap-4" >
            {board.map((row, i) => (
                <div key={i} className="flex gap-4" >
                    {row.map((_col, j) => (
                        <button key={j} className={` rounded-md border w-12 h-12 text-center bg-slate-300 ${board[i][j].marked ? 'bg-slate-600' : ""}`} onClick={() => { }}>{board[i][j].key}</button>
                    ))}
                </div>
            ))}
        </div>

    );
}

export default ComputerBoard;