import { useReservation } from "@/app/store/reservationStore"
import clsx from "clsx"

export const RoomCard = ({
    roomId, 
    adultsQuantity, 
    childrenQuantity,
})=>{
    const deleteRoom = useReservation(state => state.deleteRoom)
    const updateRoomQuantitys = useReservation(state => state.updateRoomQuantitys)

    return(
        <div
            className="min-h-40 flex flex-col"
        >
            <header className="flex min-h-9">
                <h3 className="grow">Room {roomId + 1}</h3>
                <button 
                    onClick={()=> deleteRoom(roomId)}
                    className={clsx("min-w-9",
                        {
                            "hidden" : roomId === 0,
                            "block" : roomId > 0
                        }
                    )}
                >
                    X
                </button>
            </header>
            <GuestSelector 
                group={"Adults"} 
                quantity={adultsQuantity}
                onClickMore={()=> updateRoomQuantitys(roomId, adultsQuantity + 1, childrenQuantity)}
                onClickLess={()=> updateRoomQuantitys(roomId, adultsQuantity - 1, childrenQuantity)}
            />
            <GuestSelector
                group={"Children"}
                quantity={childrenQuantity}
                onClickMore={()=> updateRoomQuantitys(roomId, adultsQuantity, childrenQuantity + 1)}
                onClickLess={()=> updateRoomQuantitys(roomId, adultsQuantity, childrenQuantity - 1)}
            
            />
        </div>
    )
}

const GuestSelector = ({group, quantity, onClickMore, onClickLess})=>{
    return(
        <div
            className="grow border-b border-[#8A8A8A] bg-[#BBBBBB] flex"
        >
            <span className="flex items-center grow px-3">
                <span>{group}</span>
            </span>
            <button
                onClick={()=> onClickMore()}
                className="w-9"
            >
                +
            </button>
            <span className="flex items-center">
                <span>{quantity}</span>
            </span>
            <button
                onClick={()=> onClickLess()}
                className="w-9"
            >
                -
            </button>
        </div>
    )
}