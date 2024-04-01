import { useReservation } from "@/app/store/reservationStore"
import { RoomCard } from "./RoomCard"
import { NewRoom } from "./NewRoom"

export const GuestsQuantity = ()=>{
    const rooms = useReservation(state => state.rooms)

    const RoomsList = rooms.map((room, _index)=>
        <RoomCard
            roomId={_index}
            adultsQuantity={room.adults}
            childrenQuantity={room.children}
            key={_index}
        />
    )

    return(
        <section
            className="min-w-full max-h-[454px] overflow-auto px-4 py-10 flex flex-col gap-5"
        >
            {RoomsList}
            <NewRoom/>
        </section>
    )
}