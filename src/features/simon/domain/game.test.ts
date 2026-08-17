import { describe, test, expect } from 'vitest';
import { createGame, startRound, checkPlayerMove, isSequenceComplete, nextRound, resetGame } from "./index";
import type { GameState, Color } from './index';


describe('createGame', () => {
    test('should create a game with default values', () => {
        const createdGame = createGame()

        expect(createdGame).toStrictEqual({
            sequence: [],
            playerIndex: 0,
            round: 0,
            status: "idle",
        })
    })
})

describe('startRound', () => {
    test('should create a round', () => {
        const state: GameState = createGame(),
            round: GameState = startRound(state),
            color: Color[] = ["green", "red", "purple", "yellow"]

        expect(round.playerIndex).toBe(0);
        expect(round.round).toBe(state.round + 1);
        expect(round.status).toBe("showing");
        expect(round.sequence).toHaveLength(1);
        expect(color).toContain(round.sequence[0])
    })
})

const mockState: GameState = {
    sequence: ['red'],
    playerIndex: 0,
    round: 0,
    status: "playing",
}

describe('checkPlayerMove', () => {
    test('should mark the move as correct when the color matches the sequence', () => {

        const playermove = checkPlayerMove(mockState, "red")

        expect(playermove.correct).toBe(true)
        expect(playermove.newState.playerIndex).toBe(1)
        expect(playermove.newState.round).toBe(0);
        expect(playermove.newState.status).toBe("playing");

    })

    test('should mark the move as incorrect and set status to gameOver when the color does not match', () => {

        const playermove = checkPlayerMove(mockState, "purple")

        expect(playermove.correct).toBe(false)
        expect(playermove.newState.status).toBe("gameOver")

    })

})

describe('isSequenceComplete', () => {
    test('should return true when the secuence is completed', () => {
        const state = { ...mockState, playerIndex: mockState.playerIndex + 1 },
            sequenceCompleted: boolean = isSequenceComplete(state)

        expect(sequenceCompleted).toBeTruthy()
    })

    test('should return false when the secuence was not completed', () => {
        const sequenceCompleted: boolean = isSequenceComplete(mockState)

        expect(sequenceCompleted).toBeFalsy()
    })
})

describe('nextRound', () => {
    test('should delegate to startRound', () => {
        const state: GameState = createGame()
        const state1: GameState = nextRound(state)
        const state2: GameState = startRound(state)

        expect(state1.playerIndex).toBe(state2.playerIndex)
        expect(state1.round).toBe(state2.round)
        expect(state1.status).toBe(state2.status)
        expect(state1.sequence.length).toBe(state2.sequence.length)
    })
})

describe('resetGame', () => {
    test('should delegate to createGame', () => {
        const state1: GameState = createGame()
        const state2: GameState = resetGame()

        expect(state1).toStrictEqual(state2);
    })
})