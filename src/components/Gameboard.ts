import GameboardCell from "./GameboardCell";
import Ship from "./Ship";

interface Gameboard {
    board: Array<Array<GameboardCell>>;
    direction: string;
    isAvailable(ship: Ship): boolean;
    placeShip(ship: Ship): void;
}

const Gameboard = (): Gameboard => {
    return {
        board: Array.from({length: 10}, () => Array.from({length: 10}, () => GameboardCell())),
        direction: "x",

        isAvailable(ship: Ship) {
             // Check if no ships are already placed in the way and there is space around the ship
            for (let i = 0; i < ship.length; i++) {
                if (this.direction === "x") {
                    if (this.board[ship.startY][ship.startX + i].occupied) {
                        return false;
                    }
                    if (this.board[ship.startY - 1 || 0] && this.board[ship.startY - 1][ship.startX + i].occupied) {
                        return false;
                    }
                    if (this.board[ship.startY + 1] && this.board[ship.startY + 1][ship.startX + i].occupied) {
                        return false;
                    }
                    if (this.board[ship.startY][ship.startX + i - 1] && this.board[ship.startY][ship.startX + i - 1].occupied) {
                        return false;
                    }
                    if (this.board[ship.startY][ship.startX + i + 1] && this.board[ship.startY][ship.startX + i + 1].occupied) {
                        return false;
                    }
                } else {
                    if (this.board[ship.startY + i][ship.startX].occupied) {
                        return false;
                    }
                    if (this.board[ship.startY + i - 1] && this.board[ship.startY + i - 1][ship.startX].occupied) {
                        return false;
                    }
                    if (this.board[ship.startY + i + 1] && this.board[ship.startY + i + 1][ship.startX].occupied) {
                        return false;
                    }
                    if (this.board[ship.startY + i][ship.startX - 1] && this.board[ship.startY + i][ship.startX - 1].occupied) {
                        return false;
                    }
                    if (this.board[ship.startY + i][ship.startX + 1] && this.board[ship.startY + i][ship.startX + 1].occupied) {
                        return false;
                    }
                }
            }
            return true;
        },

        placeShip(ship: Ship) {
            if (this.isAvailable(ship)) {
                for (let i = 0; i < ship.length; i++) {
                    if (this.direction === "x") {
                        this.board[ship.startY][ship.startX + i].occupied = true;
                    } else {
                        this.board[ship.startY + i][ship.startX].occupied = true;
                    }
                }
            }
        }
    }
}

export default Gameboard;
