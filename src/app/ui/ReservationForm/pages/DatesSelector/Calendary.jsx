import { data } from "@/app/libs/data"
import { utils } from "@/app/libs/utils"
import { useReservation } from "@/app/store/reservationStore"
import clsx from "clsx"
import { useState } from "react"

export const Calendary = () =>{
    const checkInDate = useReservation((state) => state.checkInDate)
    const setCheckInDate = useReservation((state) => state.setCheckInDate)
    const checkOutDate = useReservation((state) => state.checkOutDate)
    const setCheckOutDate = useReservation((state) => state.setCheckOutDate)

    const onDateClicked = (date)=>{
        if (!checkInDate) setCheckInDate(date.id)
        else {
            const dateIsLessThanCheckInDate = Number(date.id) < Number(checkInDate)
            if (dateIsLessThanCheckInDate) {
                setCheckOutDate(checkInDate)
                setCheckInDate(date.id)
            }
            else setCheckOutDate(date.id)

            const dateIsEqualThanCheckInDate = Number(date.id) === Number(checkInDate)
            const dateIsEqualThanCheckOutDate = Number(date.id) === Number(checkOutDate)
            if (dateIsEqualThanCheckInDate || dateIsEqualThanCheckOutDate) {
                setCheckInDate("")
                setCheckOutDate("")
            }
        }
    }

    const monthsList = utils.oneYearFromOneMonth({currentMonth: new Date().getMonth() + 1, currentYear: new Date().getFullYear()}).map((month, _index) =>
        <Month
            month = {data.months[month.number - 1]}
            year = {month.year}
            daysPerMonth = {data.months[month.number - 1].days(month.year)}
            disabledDays={(_index === 0) ? new Date().getDate() - 1 : 0}
            onDateClicked={onDateClicked}
            checkIn={checkInDate}
            checkOut={checkOutDate}
            key={_index}
        />
    )
    

    return(
        <div
            className="h-full max-h-[454px] overflow-auto py-3"
        >
            <ol>
                {monthsList}
            </ol>
        </div>
    )
}

const Month = ({month, year, daysPerMonth, disabledDays,onDateClicked, checkIn, checkOut}) =>{
    const monthDays = utils.arrayOfNumbers(daysPerMonth).map((day, _index) =>
        <li
            className="flex justify-center"
            key={_index}
        >
            <button
                id={new Date (`${month.number}-${day}-${year}`).valueOf()}
                onClick={(event)=>onDateClicked(event.target)}
                disabled={(_index < disabledDays)}
                className={clsx("w-[56px] text-center py-[14px] border-2",{
                    "bg-black text-white hover:bg-zinc-900" : (new Date (`${month.number}-${day}-${year}`).valueOf() === Number(checkIn)) || (new Date (`${month.number}-${day}-${year}`).valueOf() === Number(checkOut)),
                    "text-[#BBBBBB] hover:bg-transparent" : (_index < disabledDays),
                    "hover:bg-[#BBBBBB]" : ((new Date (`${month.number}-${day}-${year}`).valueOf() !== Number(checkIn)) || (new Date (`${month.number}-${day}-${year}`).valueOf() !== Number(checkOut))),
                    "border-black" : (new Date (`${month.number}-${day}-${year}`).valueOf() > Number(checkIn)) && (new Date (`${month.number}-${day}-${year}`).valueOf() < Number(checkOut)),
                    "border-transparent" : (new Date (`${month.number}-${day}-${year}`).valueOf() <= Number(checkIn)) || (new Date (`${month.number}-${day}-${year}`).valueOf() >= Number(checkOut))
                })}
            >
                {day}
            </button>
        </li>
    )

    return(
        <li
            className="flex flex-col gap-5"
        >
            <h3
                className="text-center py-2"
            >
                {month.name} {year}
            </h3>
            <ol
                className="grid grid-cols-7 pl-4 pr-[1px] py-2 w-full gap-5"
            >
                {monthDays}
            </ol>
        </li>
    )
}