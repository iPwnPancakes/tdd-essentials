interface PasswordValidityResult {
    valid: boolean,
    errors: Array<string>
}

export function isPasswordValid(str: string): PasswordValidityResult {
    let errors = [];
    let valid = true;

    if (!(str.length >= 5)) {
        errors.push('Password must be at least 5 characters');
        valid = false;
    }

    if (!(str.length <= 15)) {
        errors.push('Password must have more than 15 characters');
        valid = false;
    }

    if (!(/[A-Z]/.test(str))) {
        errors.push('Password must contain at least one upper case letter');
        valid = false;
    }

    if (!(/[0-9]/.test(str))) {
        errors.push('Password must contain at least one number');
        valid = false;
    }

    return { valid, errors };
}