import { create } from "zustand";

interface state {
    board: BoardCell[][];
}
const numbers = Array.from({ length: 25 }, (_, index) => index + 1);
shuffleArray(numbers);
interface actions {}
export const useComputerBoardStore = create<state & actions>((set, get) => ({
    board: Array.from({ length: 5 }, () =>
        Array.from({ length: 5 }, () => {
            return { marked: false, key: numbers.pop() ?? 0 };
        })
    ),
}));

function shuffleArray(array: number[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
