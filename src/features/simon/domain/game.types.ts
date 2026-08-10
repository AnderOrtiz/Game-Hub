export type Color = "green" | "red" | "purple" | "yellow"

// 07f49e, 42047e, ffc719, ff193b

export type GameStatus = "idle" | "showing" | "playing" | "gameOver"

export type GameState = {
    sequence: Color[],
    playerIndex: number,
    round: number,
    status: GameStatus
}
export type MoveResult = {
    correct: boolean
    newState: GameState
}