interface Ship {
    length: number;
    startX: number;
    startY: number;
    endX: number;
    endY: number;
    hits: number;
    sunken: boolean;
    hit(): void;
    isSunk(): boolean;
}

const Ship = (length: number, startX: number, startY: number, direction: string): Ship => {
    return {
        length: length,
        startX: startX,
        startY: startY,
        endX: direction === "x" ? startX + length : startX,
        endY: direction === "y" ? startY + length : startY,
        hits: 0,
        sunken: false,
        hit() {
            this.hits++;
            if (this.hits >= this.length) {
                this.sunken = true;
            }
        },
        isSunk() {
            return this.sunken;
        }
    }
}

export default Ship;