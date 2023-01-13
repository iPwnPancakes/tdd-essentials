export function evaluate(str: string): boolean {
    const tokens = getTokensFromString(str);
    if (tokens.length === 1) {
        return evaluateSingleStatement(tokens[0]);
    }

    return evaluateCombinationStatement(tokens);
}

function getTokensFromString(str: string): string[] {
    return str.split(' ');
}

function evaluateSingleStatement(str: string): boolean {
    return str === 'TRUE';
}

function evaluateCombinationStatement(strArr: string[]): boolean {
    if (strArr.length !== 3) {
        return false;
    }

    if (strArr[1] === 'AND') {
        return evaluateSingleStatement(strArr[0]) && evaluateSingleStatement(strArr[2]);
    }

    return false;
}