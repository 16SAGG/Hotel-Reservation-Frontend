import { create } from 'zustand'

export const useReservation = create((set, get) => ({
    checkInDate: "",
    checkOutDate: "",
    reservationFormIsActive: false,
    currentReservationPage: 0,
    rooms: [{
        type : "",
        adults: 1,
        children: 0,
    }],
    setCheckInDate: (date) => set({
        checkInDate : date
    }),
    setCheckOutDate: (date) => set({
        checkOutDate : date
    }),
    setReservationFormIsActive: (status) => set({
        reservationFormIsActive : status
    }),
    setCurrentReservationPage: (reservationPage) => set({
        currentReservationPage: reservationPage
    }),
    addRoom: ()=> {
        const {rooms} = get()
        const newRoomsArray = [
            ...rooms, {
                types: "",
                adults: 1,
                children: 0,
            }
        ]

        set({rooms: newRoomsArray})
    },
    updateRoomQuantitys: (roomId, adults, children) =>{
        const adultsQuantityIsLessThanOne = adults < 1
        const childrenQuantityIsLessThanZero = children < 0

        if (adultsQuantityIsLessThanOne || childrenQuantityIsLessThanZero) return

        const {rooms} = get()
        
        const newRoomsArray = [...rooms]
        newRoomsArray[roomId] = {
            type: rooms[roomId].type,
            adults: adults,
            children: children,
        }

        set({
            rooms: newRoomsArray
        })
    },
    deleteRoom: (roomId) =>{
        const {rooms} = get()

        const newRoomsArray = structuredClone(rooms)
        newRoomsArray.splice(roomId, 1)
        
        set({
            rooms: newRoomsArray
        })
    }
}))