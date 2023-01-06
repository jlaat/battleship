interface GameboardCell {
    untouched: boolean;
    empty: boolean;
    isUntouched(): boolean;
    isEmpty(): boolean;
}
const GameboardCell = (): GameboardCell => {
    return {
        untouched: true,
        empty: true,
        isUntouched() {
            return this.untouched;
        },
        isEmpty() {
            return this.empty;
        }
    }
}

export default GameboardCell;