export function isPalindrome(str: string): boolean {
    const originalWord = str.replace(/\s/g, '').toLowerCase();
    const reversedWord = str.split('').reverse().join('').replace(/\s/g, '').toLowerCase();

    return reversedWord === originalWord;
}