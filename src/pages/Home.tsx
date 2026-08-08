import { Link } from "react-router"

export const Home = () => {
    return (
        <div>
            <h1>I'm Home</h1>
            <Link to="/simon">Visit Simon?</Link>
        </div>
    )
}

