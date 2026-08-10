import { Link } from "react-router"
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardFooter,
} from "./ui/card"
import { Button } from "./ui/button"

type Props = {
    name: string
    description: string
    path?: string
}

export const HomeCard = ({ name, description, path }: Props) => {
    return (
        <Card className="w-full mt-2">
            <CardHeader>
                <CardTitle>{name}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardFooter className="justify-center">
                {path ? <Button render={<Link to={path}>Jugar</Link>} />
                    : <Button disabled>🔒 No disponible</Button>}
            </CardFooter>
        </Card>
    )
}