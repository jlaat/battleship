import GameboardCell from "./GameboardCell";

describe("Creating new cells with factory function", () => {
    it("Should return true when calling isUntouched() on a new cell", () => {
        const cell = GameboardCell();
        expect(cell.isUntouched()).toBe(true);
    })
    it("Should return false when calling isOccupied() on a new cell", () => {
        const cell = GameboardCell();
        expect(cell.isOccupied()).toBe(false);
    })
})