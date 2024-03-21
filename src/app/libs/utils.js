export const utils = {}

utils.arrayOfNumbers = (size) =>{
    return Array.from({length : size}, (_, index) => index + 1)
}

utils.oneYearFromOneMonth = ({currentMonth, currentYear}) =>{
    let iteratorMonth = 0
    let iteratorYear = 0

    const monthsArray = utils.arrayOfNumbers(12).map(() =>{
        if (currentMonth + iteratorMonth > 12) {
            currentMonth = 1
            iteratorMonth = 0
            iteratorYear = 1
        }
        const month = currentMonth + iteratorMonth
        iteratorMonth += 1

        return {number: month, year: currentYear + iteratorYear}
    })

    return monthsArray
}