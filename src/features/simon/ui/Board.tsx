import type { Color } from "../domain";
import { colorMap } from "./colorMap";

type Props = {
    activeColor: Color | null
    handleColorClick: (color: Color) => void
    handleColorPress: (color: Color) => void
    handleColorRelease: () => void
}


export const Board = ({ activeColor, handleColorClick, handleColorPress, handleColorRelease }: Props) => {
    const keys = Object.keys(colorMap) as Color[]
    const corners = ["rounded-tl-full", "rounded-tr-full", "rounded-bl-full", "rounded-br-full"]

    return (
        <div className="w-fit grid grid-cols-2 justify-center ">
            {keys.map((color, index) => (
                <div key={color}
                    style={{ backgroundColor: colorMap[color] }}
                    className={
                        color === activeColor ? ` size-32 opacity-100 ${corners[index]} sm:size-48 lg:size-64`

                            : ` size-32 opacity-60 ${corners[index]} sm:size-48 lg:size-64`
                    }
                    onClick={() => handleColorClick(color)}
                    onMouseDown={() => handleColorPress(color)}
                    onMouseUp={() => handleColorRelease()}
                    onTouchStart={() => handleColorPress(color)}
                    onTouchEnd={() => handleColorRelease()}>
                </div>
            ))
            }
        </div >
    )
}