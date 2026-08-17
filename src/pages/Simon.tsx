import { Button } from '#components/ui/button';
import { useSimonGame } from '../features/simon/hooks/useSimonGame';
import { Board } from '../features/simon/ui/Board';

export const Simon = () => {
    const { state, activeColor, handleStart, handleColorClick } = useSimonGame();

    return (
        <div className='mx-auto my-6'>
            {state.status === "gameOver" ? (
                <div>
                    <p>Game Over! Tu puntaje fue: {state.round}</p>
                    <Button onClick={handleStart}>Jugar de nuevo</Button>
                </div>
            ) : (
                <>
                    <Board activeColor={activeColor}
                        handleColorClick={handleColorClick}
                        handleColorPress={activeColor}
                        handleColorRelease={ }
                    />
                    <Button onClick={handleStart}>Start</Button>
                </>
            )}
        </div>
    )
}