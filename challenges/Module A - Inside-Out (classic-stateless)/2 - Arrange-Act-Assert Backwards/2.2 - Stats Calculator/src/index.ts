type Stats = {
    min: number,
    max: number,
    average: number
}

export function computeStats(numbers: number[]): Stats {

    return { min: getSmallestValue(numbers), max: getBiggestValue(numbers), average: 0 };
}

function getSmallestValue(numbers: number[]): number {
    let currentSmallest = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < currentSmallest) {
            currentSmallest = numbers[i];
        }
    }

    return currentSmallest;
}

function getBiggestValue(numbers: number[]): number {
    let currentBiggest = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > currentBiggest) {
            currentBiggest = numbers[i];
        }
    }

    return currentBiggest;
}