function extractValues<T, K extends keyof T>(array: T[], key: K): T[K][] {
    if (!array || !Array.isArray(array) || array.length === 0) {
        throw new Error('The array is not valid.');
    } else if (!key || typeof key !== 'string') {
        throw new Error('The key is not valid.');
    } else {
        if (array.some((item) => item[key] === undefined)) {
            throw new Error('The key does not exist in the array.');
        } else {
            const result = array.map((item) => item[key]);
            if (result.length === 0) {
                throw new Error('The key does not exist in the array.');
            } else {
                return result;
            }
        }
    }
}
