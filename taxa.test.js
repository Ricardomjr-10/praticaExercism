const {dayRate, daysInBudget, priceWithMonthlyDiscount} = require('./taxa')

test('dayRate', () => {
    expect(dayRate(89)).toBe(712)
})

test('daysinBudget', () => {
    expect(daysInBudget(20000, 89)).toBe(28)
})

test('priceWithMonthlyDiscount', () => {
    expect(priceWithMonthlyDiscount(16, 130, 0.15)).toBe(14528)
})