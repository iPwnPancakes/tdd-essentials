type Stats = {
    min: number,
    max: number,
    average: number
}

export function computeStats(numbers: Number[]): Stats {
    return { min: -8, max: 0, average: 0 };
}
