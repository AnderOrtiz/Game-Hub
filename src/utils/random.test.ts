import { describe, test, expect } from "vitest"
import { randomInt, randomColor } from './index'
import type { Color } from "../features/simon/domain";


describe('randomInt', () => {
    test('should always return a number within the given range', () => {
        const min = 0,
            max = 3;

        for (let index = 0; index < 100; index++) {
            const numero: number = randomInt(min, max)

            expect(numero).toBeGreaterThanOrEqual(min)
            expect(numero).toBeLessThanOrEqual(max)
        }
    })

    test('should equal to 3', () => {
        for (let index = 0; index < 20; index++) {

            const numero: number = randomInt(3, 3)

            expect(numero).toStrictEqual(3)
        }
    })
})


describe('randomColor', () => {
    test('should always return a valid color', () => {
        const colorsList: Color[] = ["green", "red", "purple", "yellow"]
        for (let index = 0; index < 100; index++) {
            const color: Color = randomColor()
            expect(colorsList.includes(color)).toBe(true)
        }
    })

})