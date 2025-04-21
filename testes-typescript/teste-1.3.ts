function makeAllPositive(array: number[]): number[] {
    if (!array || !Array.isArray(array) || array.some((num) => typeof num !== 'number')) {
        throw new Error('The array is not valid.');
    } else {
        return array.map(num => Math.abs(num));
    }
}
