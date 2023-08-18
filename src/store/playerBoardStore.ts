import { create } from "zustand";

type Board = (BoardCell | null)[][];
interface state {
    board: Board;
}

interface actions {
    setBoard: (board: Board) => void;
    markCell: (row: number, col: number, value: boolean) => void;
    addCell: (row: number, col: number, value: number) => void;
}
export const usePlayerBoardStore = create<state & actions>((set, get) => ({
    //initial board should be a 5 *5 board of null
    board: Array.from({ length: 5 }, () =>
        Array.from({ length: 5 }, () => null)
    ),
    setBoard: (board: Board) => set({ board }),
    markCell: (row: number, col: number) => {
        const board = get().board;
        board[row][col]!.marked = true;
        set({ board });
    },
    addCell: (row: number, col: number, value: number) => {
        const board = get().board;
        board[row][col] = { marked: false, key: value };
        set({ board });
    },
}));
