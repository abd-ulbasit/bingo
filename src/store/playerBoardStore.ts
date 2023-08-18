import { create } from "zustand";
type BoardCell = {
    marked: boolean;
    key: number;
};

type Board = BoardCell[][];
interface state {
    board: Board;
}

interface actions {
    setBoard: (board: Board) => void;
    setCell: (row: number, col: number, value: boolean) => void;
    addCell: (row: number, col: number, value: number) => void;
}
export const usePlayerBoardStore = create<state & actions>((set, get) => ({
    board: [],
    setBoard: (board: Board) => set({ board }),
    setCell: (row: number, col: number, marked: boolean) => {
        const board = get().board;
        board[row][col] = { ...board[row][col], marked: marked };
        set({ board });
    },
    addCell: (row: number, col: number, value: number) => {
        const board = get().board;
        board[row][col] = { marked: false, key: value };
        set({ board });
    },
}));
