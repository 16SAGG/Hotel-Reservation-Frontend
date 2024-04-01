import { useReservation } from "@/app/store/reservationStore"

export const NewRoom = ()=>{
    const addRoom = useReservation(state => state.addRoom)

    return(
        <button
            onClick={() => addRoom()}
            className="min-h-10 border border-[#8A8A8A] flex items-center justify-center"
        >
            <p
                className="text-2xl"
            >
                +
            </p>
        </button>
    )
}