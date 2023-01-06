import GameboardCell from "./GameboardCell";

describe("Creating new cells with factory function", () => {
    it("Should return true when calling isUntouched() on a new cell", () => {
        const cell = GameboardCell();
        expect(cell.isUntouched()).toBe(true);
    })
    it("Should return true when calling isEmpty() on a new cell", () => {
        const cell = GameboardCell();
        expect(cell.isEmpty()).toBe(true);
    })
})