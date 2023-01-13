export function isValidRange(str: string): boolean {
    const timeEntries = breakStringIntoEntries(str);
    if (timeEntries.length !== 2) {
        return false;
    }

    const firstEntry = timeEntries[0];
    const secondEntry = timeEntries[1];

    return isValidMilitaryTime(firstEntry) && isValidMilitaryTime(secondEntry);
}

function breakStringIntoEntries(str: string): string[] {
    const tokens = str.split(' - ');
    if (tokens.length < 2) {
        return [];
    }

    return tokens;
}

function isValidMilitaryTime(str: string): boolean {
    const tokens = breakStringIntoHourMinutes(str);
    if (tokens.length < 2) {
        return false;
    }

    const hour = Number(tokens[0]);
    const minutes = Number(tokens[1]);

    if (isNaN(hour) || isNaN(minutes)) {
        return false;
    }

    return (hour >= 0 && hour <= 24) && (minutes >= 0 && minutes <= 60);
}

function breakStringIntoHourMinutes(str: string): string[] {
    return str.split(':');
}

