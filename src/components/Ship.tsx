interface Ship {
    length: number;
    hits: number;
    sunken: boolean;
}

const Ship = (length: number): Ship => {
    return {
        length: length,
        hits: 0,
        sunken: false,
    }
}

export default Ship;