interface GameboardCell {
    untouched: boolean;
    occupied: boolean;
    isUntouched(): boolean;
    isOccupied(): boolean;
}
const GameboardCell = (): GameboardCell => {
    return {
        untouched: true,
        occupied: false,
        isUntouched() {
            return this.untouched;
        },
        isOccupied() {
            return this.occupied;
        }
    }
}

export default GameboardCell;