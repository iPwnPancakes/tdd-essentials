interface PasswordValidityResult {
    valid: boolean,
    errors: Array<string>
}

export function isPasswordValid(str: string): PasswordValidityResult {
    const valid = str.length >= 5 &&
        str.length <= 15 &&
        /[A-Z]/.test(str) &&
        /[0-9]/.test(str);

    return { valid, errors: [] };
}