"use client"

import clsx from "clsx"
import { ReservationHeader } from "./ReservationHeader"
import { useReservation } from "@/app/store/reservationStore"
import { ReservationFooter } from "./ReservationFooter"
import { PagesWrapper } from "./pages/pagesWrapper"


export const ReservationForm = ()=>{
    const reservationFormIsActive = useReservation((state) => state.reservationFormIsActive)

    return(
        <div
            className={clsx(
                "flex flex-col absolute h-[100vh] min-w-full duration-300 bg-white text-black",
                {
                    "translate-x-[100vw]": reservationFormIsActive === false,
                    "translate-x-[0]": reservationFormIsActive === true,
                }
            )}
        >
            <ReservationHeader/>
            <PagesWrapper/>
            <ReservationFooter/>
        </div>
    )
}