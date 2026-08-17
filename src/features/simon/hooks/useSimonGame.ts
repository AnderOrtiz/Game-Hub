import { useState } from "react";
import { checkPlayerMove, createGame, isSequenceComplete, nextRound, resetGame, startRound } from "../domain";
import type { Color, GameState } from '../domain/';


export function useSimonGame() {
    const [state, setState] = useState<GameState>(createGame);
    const [activeColor, setActiveColor] = useState<Color | null>(null);

    const handleStart = () => {
        const emtyState = resetGame()
        const newState = startRound(emtyState)
        setState(newState)
        showSequence(newState.sequence)
    }

    async function showSequence(sequence: Color[]) {
        for (const color of sequence) {
            setActiveColor(color)
            await delay(500)
            setActiveColor(null)
            await delay(200)
        }
        setState((prev) => ({ ...prev, status: "playing" }))
    }

    function handleColorClick(color: Color) {
        if (state.status !== "playing") return

        const result = checkPlayerMove(state, color)

        if (!result.correct) {
            setState(result.newState)
            return
        }

        if (isSequenceComplete(result.newState)) {
            const nextState = nextRound(result.newState)
            setState(nextState);
            showSequence(nextState.sequence)

        } else {
            setState(result.newState)
        }

    }

    function handleColorPress(color: Color) {
        setActiveColor(color)
    }

    function handleColorRelease() {
        setActiveColor(null)
    }

    return { state, activeColor, handleStart, handleColorClick, handleColorPress, handleColorRelease }
}

function delay(ms: number): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}


