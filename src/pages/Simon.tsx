import { Button } from '#components/ui/button';
import { GameOverCard } from '../components/gameOverCard';
import { useSimonGame } from '../features/simon/hooks/useSimonGame';
import { Board } from '../features/simon/ui/Board';

export const Simon = () => {
    const { state, activeColor, handleStart, handleColorClick, handleColorPress, handleColorRelease } = useSimonGame();

    return (
        <div className='m-auto relative'>
            {state.status === "gameOver" ? (

                <div className="flex justify-center items-center min-h-full">
                    <GameOverCard
                        score={state.round}
                        handleStart={handleStart}
                    />
                </div>

            ) : (
                <>

                    <Board activeColor={activeColor}
                        handleColorClick={handleColorClick}
                        handleColorPress={handleColorPress}
                        handleColorRelease={handleColorRelease}
                    />
                    {state.status === "idle" ? <Button onClick={handleStart} size="hero" className={"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"}>Start</Button> : ""}
                </>
            )
            }
        </div >
    )
}