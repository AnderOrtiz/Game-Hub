import { Outlet, Link } from "react-router"
import { Button } from "./ui/button.tsx"


export const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <nav className="w-full py-4 flex justify-center border-b">
                <Button size="lg" render={<Link to="/">Game-Hub</Link>}></Button>
            </nav>

            <main className="max-w-7xl w-full mx-auto flex px-3 grow">
                <Outlet />
            </main>

            <footer className=" text-muted-foreground text-sm  w-full flex justify-center">
                <p>Anderson Ortiz © 2026</p>
            </footer>
        </div>
    )
}