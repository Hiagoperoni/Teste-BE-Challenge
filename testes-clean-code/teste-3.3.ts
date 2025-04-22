function divisibleByList(numberList: number[]): number[] {
    const DIVISIBLE_BY = 2;
    return numberList.filter((number) => number % DIVISIBLE_BY === 0);
}