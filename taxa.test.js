const dayRate = require('./taxa')
const daysInBudget = require('./taxa')

test('dayRate', () => {
    expect(dayRate(89)).toBe(712)
})

test('daysinbudget', () => {
    expect(daysInBudget(20000, 89)).toBe(2500)
})