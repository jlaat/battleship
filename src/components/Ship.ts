interface Ship {
    length: number;
    hits: number;
    sunken: boolean;
    hit(): void;
    isSunk(): boolean;
}

const Ship = (length: number): Ship => {
    return {
        length: length,
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