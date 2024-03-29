export function padTo2Digits(num: number): string {
    const stringNum = num.toString()
    return stringNum.padStart(2, '0');
}

export function convertMsToMinutesSeconds(milliseconds: number): string {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.round((milliseconds % 60000) / 1000);

    return seconds === 60
        ? `${minutes + 1}:00`
        : `${minutes}:${padTo2Digits(seconds)}`;
}
