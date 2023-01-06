interface PasswordValidityResult {
    valid: boolean,
    errors: Array<string>
}

export function isPasswordValid(str: string): PasswordValidityResult {
    let errors = [];
    const valid = str.length >= 5 &&
        str.length <= 15 &&
        /[A-Z]/.test(str) &&
        /[0-9]/.test(str);

    if (!(str.length >= 5)) {
        errors.push('Password must be at least 5 characters');
    }

    return { valid, errors };
}