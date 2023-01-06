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

    if (!(str.length <= 15)) {
        errors.push('Password must have more than 15 characters');
    }

    if (!(/[A-Z]/.test(str))) {
        errors.push('Password must contain at least one upper case letter');
    }

    if (!(/[0-9]/.test(str))) {
        errors.push('Password must contain at least one number');
    }

    return { valid, errors };
}