import type { Color } from '../features/simon/domain/index';


export function randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomColor(): Color {
    const colors: Color[] = ["green", "purple", "red", "yellow"],
        num = randomInt(0, colors.length - 1);
    return colors[num];
}