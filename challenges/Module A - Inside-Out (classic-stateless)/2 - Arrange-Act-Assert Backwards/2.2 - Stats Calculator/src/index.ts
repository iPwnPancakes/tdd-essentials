type Stats = {
    min: number,
    max: number,
    average: number,
    numberOfElements: number
}

export function computeStats(numbers: number[]): Stats {
    return {
        min: getSmallestValue(numbers),
        max: getBiggestValue(numbers),
        average: getAverageValue(numbers),
        numberOfElements: numbers.length
    };
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

function getAverageValue(numbers: number[]): number {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    const average = sum / numbers.length;

    return Number(average.toFixed(12));
}