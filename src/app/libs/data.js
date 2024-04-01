export const data = {}

data.months = [
    {
        name: "January",
        number: "1",
        days: (year)=> {return 31}
    },
    {
        name: "February",
        number: "2",
        days: (year)=> {return (year % 4 === 0) ? 29 : 28},
    },
    {
        name: "March",
        number: "3",
        days: (year)=> {return 31},
    },
    {
        name: "April",
        number: "4",
        days: (year)=> {return 30},
    },
    {
        name: "May",
        number: "5",
        days: (year)=> {return 31},
    },
    {
        name: "June",
        number: "6",
        days: (year)=> {return 30},
    },
    {
        name: "July",
        number: "7",
        days: (year)=> {return 31},
    },
    {
        name: "August",
        number: "8",
        days: (year)=> {return 31},
    },
    {
        name: "September",
        number: "9",
        days: (year)=> {return 30},
    },
    {
        name: "October",
        number: "10",
        days: (year)=> {return 31},
    },
    {
        name: "November",
        number: "11",
        days: (year)=> {return 30},
    },
    {
        name: "December",
        number: "12",
        days: (year)=> {return 31},
    },
]

data.reservationPages = [
    {
        title: "Select your dates",
        continueCondition: ({checkInDate, checkOutDate})=>{return checkInDate && checkOutDate}
    },
    {
        title: "Add guests number",
        continueCondition: ()=>{return true}
    },
    {
        title: "Select your rooms",
        continueCondition: ()=>{return true}
    },
    {
        title: "Add your information",
        continueCondition: ()=>{return true}
    },
    {
        title: "Congratulations & Enjoy",
        continueCondition: ()=>{return true}
    }
]

