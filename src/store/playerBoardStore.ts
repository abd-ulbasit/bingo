import { create } from "zustand";

type Board = (BoardCell | null)[][];
interface state {
    board: Board;
    score: number;
    positiveDiagonal: number;
    negativeDiagonal: number;
    rows: number[];
    cols: number[];
}

interface actions {
    setBoard: (board: Board) => void;
    markCell: (row: number, col: number) => void;
    addCell: (row: number, col: number, value: number) => void;
}
export const usePlayerBoardStore = create<state & actions>((set, get) => ({
    //initial board should be a 5 *5 board of null
    board: Array.from({ length: 5 }, () =>
        Array.from({ length: 5 }, () => null)
    ),
    score: 0,
    rows: Array.from({ length: 5 }, () => 0),
    cols: Array.from({ length: 5 }, () => 0),
    positiveDiagonal: 0,
    negativeDiagonal: 0,

    setBoard: (board: Board) => set({ board }),
    markCell: (row: number, col: number) => {
        const state = get();
        state.board[row][col]!.marked = true;
        state.rows[row]++;
        state.cols[col]++;
        if (row === col) {
            state.positiveDiagonal++;
        }
        if (row + col === 4) {
            state.negativeDiagonal++;
        }
        state.score =
            state.rows.filter((row) => row === 5).length +
            state.cols.filter((col) => col === 5).length +
            (state.positiveDiagonal == 5 ? 1 : 0) +
            (state.negativeDiagonal == 5 ? 1 : 0);
        console.log({ state });

        set(state);
    },
    addCell: (row: number, col: number, value: number) => {
        const board = get().board;
        board[row][col] = { marked: false, key: value };
        set({ board });
    },
}));
