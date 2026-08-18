import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardFooter,
} from "./ui/card"
import { Button } from "./ui/button"

type Props = {
    score: number
    handleStart: () => void
}


export const GameOverCard = ({ score, handleStart }: Props) => {
    return (
        <Card className="size-96 p-6 flex flex-col">
            <CardHeader>
                <CardTitle className="text-4xl">Game Over!</CardTitle>
            </CardHeader>

            <div className="flex-1 flex items-center justify-center">
                <CardDescription className="text-xl">Tu puntaje fue: {score}</CardDescription>
            </div>

            <CardFooter className="justify-center">
                <Button size="hero" onClick={handleStart}>Jugar de nuevo</Button>
            </CardFooter>
        </Card>
    )
}