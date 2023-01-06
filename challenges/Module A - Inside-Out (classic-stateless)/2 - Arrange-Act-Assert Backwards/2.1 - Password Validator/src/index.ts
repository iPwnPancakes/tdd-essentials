export function isPasswordValid(str: string): boolean {
    return str.length >= 5 && str.length <= 15;
}