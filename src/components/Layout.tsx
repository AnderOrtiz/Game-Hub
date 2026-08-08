import { Outlet, Link } from "react-router"


export const Layout = () => {
    return (
        <div>
            <nav>
                <Link to="/">Game-Hub</Link>
            </nav>

            <main>
                <Outlet />
            </main>

            <footer>
                <p>Anderson Ortiz — All rights reserved 2026</p>
            </footer>
        </div>
    )
}