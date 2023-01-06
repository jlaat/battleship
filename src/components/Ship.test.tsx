import Ship from './Ship';
import { render } from '@testing-library/react';

describe("Creating ships with factory function", () => {
    describe("When creating ship with length of 4", () => {
        it("Should return a ship object with length of 4", () => {
            const ship = Ship(4);
            expect(ship.length).toBe(4);
        })
        it("Should return a ship object with hits of 0", () => {
            const ship = Ship(4);
            expect(ship.hits).toBe(0);
        })
        it("Should return a ship object with sunken of false", () => {
            const ship = Ship(4);
            expect(ship.sunken).toBe(false);
        })
    })
    describe("When creating ship with length of 3", () => {
        it("Should return a ship object with length of 3", () => {
            const ship = Ship(3);
            expect(ship.length).toBe(3);
        })
        it("Should return a ship object with hits of 0", () => {
            const ship = Ship(3);
            expect(ship.hits).toBe(0);
        })
        it("Should return a ship object with sunken of false", () => {
            const ship = Ship(3);
            expect(ship.sunken).toBe(false);
        })
    })
    describe("When creating ship with length of 2", () => {
        it("Should return a ship object with length of 2", () => {
            const ship = Ship(2);
            expect(ship.length).toBe(2);
        })
        it("Should return a ship object with hits of 0", () => {
            const ship = Ship(2);
            expect(ship.hits).toBe(0);
        })
        it("Should return a ship object with sunken of false", () => {
            const ship = Ship(2);
            expect(ship.sunken).toBe(false);
        })
    })
    describe("When creating ship with length of 1", () => {
        it("Should return a ship object with length of 1", () => {
            const ship = Ship(1);
            expect(ship.length).toBe(1);
        })
        it("Should return a ship object with hits of 0", () => {
            const ship = Ship(1);
            expect(ship.hits).toBe(0);
        })
        it("Should return a ship object with sunken of false", () => {
            const ship = Ship(1);
            expect(ship.sunken).toBe(false);
        })
    })
})

export {}