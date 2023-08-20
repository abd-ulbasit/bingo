import { create } from "zustand";
interface state {
    board: BoardCell[][];
    completed: number;
}
const numbers = Array.from({ length: 25 }, (_, index) => index + 1);
shuffleArray(numbers);
interface actions {
    markCell: (value: number) => void;
    setBoard: (board: BoardCell[][]) => void;
}
export const useComputerBoardStore = create<state & actions>((set, get) => ({
    board: Array.from({ length: 5 }, () =>
        Array.from({ length: 5 }, () => {
            return { marked: false, key: numbers.pop() ?? 0 };
        })
    ),
    completed: 0,
    markCell: (value: number) => {
        const board = get().board;
        const { row: r, col: c } = findIndices(board, value);

        board[r][c] = { key: value, marked: true };
        set({ board });
    },
    setBoard: (board: BoardCell[][]) => set({ board }),
}));

function shuffleArray(array: number[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function findIndices(array: BoardCell[][], value: number) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j].key === value) {
                return { row: i, col: j };
            }
        }
    }
    return { row: -1, col: -1 }; // Return -1 if the value is not found
}
