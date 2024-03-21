import { data } from "@/app/libs/data"
import { useReservation } from "@/app/store/reservationStore"
import clsx from "clsx"

export const ReservationFooter = ()=>{
    const currentReservationPage = useReservation((state) => state.currentReservationPage)
    const setCurrentReservationPage = useReservation((state) => state.setCurrentReservationPage)
    
    const currentReservationPageIsTheFirst = currentReservationPage <= 0
    const currentReservationPageIsTheLast = currentReservationPage >= data.reservationPages.length - 1
    
    return(
        <footer
            className="flex min-h-[64px] px-6 py-4 border-t-[1px] border-[#8A8A8A]"
        >
            <button
                onClick={()=>setCurrentReservationPage(currentReservationPage - 1)}
                className={clsx("border-2 border-black text-black min-w-[80px]", {
                    "hidden" : currentReservationPageIsTheFirst,
                    "block" : !currentReservationPageIsTheFirst
                })}
            >
                Back
            </button>
            <div className="grow"></div>
            <button
                onClick={()=>{
                    setCurrentReservationPage(currentReservationPage + 1)
                }}
                className={clsx("bg-black text-white min-w-[256px]",{
                    "hidden" : currentReservationPageIsTheLast,
                    "block" : !currentReservationPageIsTheLast
                })}
            >
                Next
            </button>
        </footer>
    )
}