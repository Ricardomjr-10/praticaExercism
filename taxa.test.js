const dayRate = require('./taxa')

test('dayRate', () => {
    expect(dayRate(89)).toBe(712)
})