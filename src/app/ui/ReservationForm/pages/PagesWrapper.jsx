import { useReservation } from "@/app/store/reservationStore"
import { DatesSelector } from "./DatesSelector/DatesSelector"
import { GuestsQuantity } from "./GuestsQuantity/GuestsQuantity"

export const PagesWrapper = ()=>{
    const currentReservationPage = useReservation((state) => state.currentReservationPage)
    
    return(
        <div
            className="flex grow duration-300"
            style={{
                transform: `translate(${currentReservationPage * -100}%,0)`
            }}
        >
            <DatesSelector/>
            <GuestsQuantity/>
        </div>
    )
}