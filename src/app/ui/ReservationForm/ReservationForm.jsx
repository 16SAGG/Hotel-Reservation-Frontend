"use client"

import clsx from "clsx"
import { ReservationHeader } from "./ReservationHeader"
import { useReservation } from "@/app/store/reservationStore"
import { ReservationFooter } from "./ReservationFooter"

export const ReservationForm = ()=>{
    const reservationFormIsActive = useReservation((state) => state.reservationFormIsActive)
    
    return(
        <div
            className={clsx(
                "absolute h-[100vh] min-w-full duration-300",
                {
                    "translate-x-[100vw]": reservationFormIsActive === false,
                    "translate-x-[0]": reservationFormIsActive === true,
                }
            )}
        >
            <ReservationHeader/>
            <ReservationFooter/>
        </div>
    )
}