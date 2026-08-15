import { describe, test, expect } from 'vitest';
import { createGame, startRound } from "./index";
import type { GameState } from './game.types';

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
        const state: GameState = createGame()
        const round: GameState = startRound(state)
        console.log(round)

        expect(round.playerIndex).toBe(0);
        expect(round.round).toBe(state.round + 1);
        expect(round.status).toBe("showing");
        expect(round.sequence).toHaveLength(1);
    })
})
