import { IItem } from "../interfaces/testes-clean-code/teste-3.1.interface";

function isExpensive(item: IItem): boolean {
    const HIGH_VALUE = 100;
    return item.price > HIGH_VALUE;
};

// Printing to console
function printIsExpensive(items: IItem[]): void {
    items.forEach((item) => {
        if (isExpensive(item)) {
            console.log(`The item ${item.name} is expensive.`);
        } else {
            console.log(`The item ${item.name} is not expensive.`);
        }
    });
}

// Returning a new string
function stringIsExpensive(items: IItem[]): string {
    const expensivesList = [] as string[];
    const notExpensivesList = [] as string[];
    items.forEach((item) => {
        if (isExpensive(item)) {
            expensivesList.push(item.name);
        } else {
            notExpensivesList.push(item.name);
        }
    });
    return `The expensive items are: ${expensivesList.join(', ')}. The not expensive items are: ${notExpensivesList.join(', ')}`;
}