import type { Color } from "../domain";
import { colorMap } from "./colorMap";

type Props = {
    activeColor: Color | null
    handleColorClick: (color: Color) => void
    handleColorPress: Color | null
    handleColorRelease: void
}


export const Board = ({ activeColor, handleColorClick, handleColorPress, handleColorRelease }: Props) => {
    const keys = Object.keys(colorMap) as Color[]
    const corners = ["rounded-tl-full", "rounded-tr-full", "rounded-bl-full", "rounded-br-full"]

    return (
        <div className="w-fit grid grid-cols-2">
            {keys.map((color, index) => (
                <div key={color}
                    style={{ backgroundColor: colorMap[color] }}
                    className={
                        color === activeColor ? `size-80 opacity-100 ${corners[index]}`
                            : `size-80 opacity-60 ${corners[index]}`
                    }
                    onClick={() => handleColorClick(color)}
                    // TODO onMouseUp={() => { () => { handleColorPress(color) } }}
                    onMouseDown={() => { () => { handleColorRelease } }}>
                </div>
            ))
            }
        </div >
    )
}