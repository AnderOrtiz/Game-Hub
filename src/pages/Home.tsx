import { HomeCard } from '../components/homeCard';

export const Home = () => {
    return (
        <div className='w-full'>

            <h1>Welcome</h1>
            <div className=" grid justify-items-center
                grid-cols-1 gap-1
                sm:grid-cols-2 sm:gap-2
                lg:grid-cols-4 lg:gap-4"
            >

                <HomeCard
                    name="Simon"
                    description="Repite la secuencia de colores y demuestra tu memoria."
                    path="/simon"
                />

                <HomeCard
                    name="Black Jack"
                    description="Acércate a 21 sin pasarte y vence al crupier."
                    path='https://anderortiz.github.io/js-vite-blackjack/'
                />

                <HomeCard
                    name="Ahorcado"
                    description="Adivina la palabra antes de quedarte sin intentos."
                />

                <HomeCard
                    name="Tic Tac Toe"
                    description="Forma una línea de tres símbolos y gana la partida."
                />
            </div>
        </div>
    )
}