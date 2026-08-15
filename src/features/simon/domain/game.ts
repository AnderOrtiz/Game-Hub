import { randomColor } from "../../../utils/index";
import type { GameState, Color, MoveResult } from "./index";

export function createGame(): GameState {
    return {
        sequence: [],
        playerIndex: 0,
        round: 0,
        status: "idle",
    }
}

export function startRound(state: GameState): GameState {
    const color: Color = randomColor(),
        newSequence: Color[] = [...state.sequence, color];

    return {
        sequence: newSequence,
        playerIndex: 0,
        round: state.round + 1,
        status: "showing"
    }
}

export function checkPlayerMove(state: GameState, color: Color): MoveResult {
    const isCorrect = (state.sequence[state.playerIndex] == color) ? true : false;
    let newState: GameState;

    if (isCorrect) {
        newState = { ...state, playerIndex: state.playerIndex + 1 }
    } else {
        newState = { ...state, status: "gameOver" }
    }

    return { correct: isCorrect, newState }
}

export function isSequenceComplete(state: GameState): boolean {
    return state.playerIndex === state.sequence.length
}

export function nextRound(state: GameState): GameState { return startRound(state) };

export function resetGame(): GameState { return createGame() }