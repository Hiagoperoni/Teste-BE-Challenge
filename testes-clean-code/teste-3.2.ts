function calculateDiscountPremium(price: number): number {
    const HIGH_DISCOUNT = 0.8;
    const LOW_DISCOUNT = 0.9;
    if (price > 100) {
        return price * HIGH_DISCOUNT;
    } else {
        return price * LOW_DISCOUNT;
    }
}

function calculateDiscountStandard(price: number): number {
    const HIGH_DISCOUNT = 0.9;
    if (price > 100) {
        return price * HIGH_DISCOUNT;
    } else {
        return price;
    }
}

function calculateDiscount(price: number, isPremium: boolean): number {
    if (isPremium) {
        return calculateDiscountPremium(price);
    } else {
        return calculateDiscountStandard(price);
    }
}
