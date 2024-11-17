module.exports = dayRate
module.exports = daysInBudget

function dayRate(rate) {
    return rate * 8
}

console.log(dayRate(89))


const daysInBudget = (budget, rate) => {
    let result = Math.round(budget / dayRate(rate))
    return result
}

console.log(daysInBudget(20000, 89))


const priceWithMonthlyDiscount = (rate, budget, discount) => {
    let dayMonth = 22
    let convertDaysInMonth = budget / dayMonth
    let monthWorkDays = Math.floor(convertDaysInMonth) * dayMonth
    let monthWorkDaysRate = monthWorkDays / dayMonth
    let restDays = Math.round(((convertDaysInMonth - monthWorkDaysRate) * dayMonth))
    let result1 = monthWorkDays * dayRate(rate)
    let discountValue = result1 * discount
    let result2  = restDays * dayRate(rate)
    if (discount === 0) {
        return dayRate(rate) * budget
    }
    return Math.ceil(result1 - discountValue + result2)
  
}
console.log(priceWithMonthlyDiscount(16, 130, 0.15))