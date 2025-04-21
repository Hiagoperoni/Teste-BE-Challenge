function calculate(operation: string, num1: number, num2: number): number {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('Invalid input: the second and third parameters must be numbers');
    }
    switch (operation) {
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            if (num2 === 0) {
                throw new Error('Division by zero');
            } else {
                return num1 / num2;
            }
        default:
            throw new Error('Invalid operation');
    }
}
