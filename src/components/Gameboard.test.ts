import Gameboard from "./Gameboard";
import Ship from "./Ship";

describe("Gameboard", () => {
    describe("Gameboard availibility", () => {
        it("Should return true when placing ship on empty gameboard", () => {
            const gameboard = Gameboard();
            const ship = Ship(4, 0, 0, "x");
            const isAvailable = gameboard.isAvailable(ship);
            expect(isAvailable).toBe(true);
        })
    })
    describe("Ship placement", () => {
        it("Should place ship on empty gameboard succesfully", () => {
            const gameboard = Gameboard();
            const ship = Ship(4, 0, 0, "x");
            gameboard.placeShip(ship);
            expect(gameboard.board[0][0].isOccupied()).toBe(true);
            expect(gameboard.board[0][1].isOccupied()).toBe(true);
            expect(gameboard.board[0][2].isOccupied()).toBe(true);
            expect(gameboard.board[0][3].isOccupied()).toBe(true);
        })
        it("Shouldn't be able to place ship on top of another ship", () => {
            const gameboard = Gameboard();
            const ship = Ship(4, 0, 0, "x");
            const ship2 = Ship(3, 0, 0, "y");
            gameboard.placeShip(ship);
            gameboard.placeShip(ship2);
            expect(gameboard.board[0][0].isOccupied()).toBe(true);
            expect(gameboard.board[0][1].isOccupied()).toBe(true);
            expect(gameboard.board[0][2].isOccupied()).toBe(true);
            expect(gameboard.board[0][3].isOccupied()).toBe(true);
            expect(gameboard.board[1][0].isOccupied()).toBe(false);
        })
        it("Shouldn't be able to place ship on place where it would touch other ship", () => {
            const gameboard = Gameboard();
            const ship = Ship(4, 0, 0, "x");
            const ship2 = Ship(3, 0, 1, "x");
            gameboard.placeShip(ship);
            gameboard.placeShip(ship2);
            expect(gameboard.board[0][0].isOccupied()).toBe(true);
            expect(gameboard.board[0][1].isOccupied()).toBe(true);
            expect(gameboard.board[0][2].isOccupied()).toBe(true);
            expect(gameboard.board[0][3].isOccupied()).toBe(true);
            expect(gameboard.board[1][0].isOccupied()).toBe(false);
        })
        it("Should be able to place ship when it's not touching other ships", () => {
            const gameboard = Gameboard();
            const ship = Ship(4, 0, 0, "x");
            const ship2 = Ship(3, 0, 2, "x");
            gameboard.placeShip(ship);
            gameboard.placeShip(ship2);
            expect(gameboard.board[0][0].isOccupied()).toBe(true);
            expect(gameboard.board[0][1].isOccupied()).toBe(true);
            expect(gameboard.board[0][2].isOccupied()).toBe(true);
            expect(gameboard.board[0][3].isOccupied()).toBe(true);
            expect(gameboard.board[2][0].isOccupied()).toBe(true);
            expect(gameboard.board[2][1].isOccupied()).toBe(true);
            expect(gameboard.board[2][2].isOccupied()).toBe(true);
            expect(gameboard.board[2][3].isOccupied()).toBe(false);
        })
    })


})