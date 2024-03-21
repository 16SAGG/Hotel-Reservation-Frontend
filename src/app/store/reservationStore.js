import { create } from 'zustand'

export const useReservation = create((set) => ({
    checkInDate: "",
    checkOutDate: "",
    reservationFormIsActive: false,
    currentReservationPage: 0,
    setCheckInDate: (date) => set({
        checkInDate : date
    }),
    setCheckOutDate: (date) => set({
        checkOutDate : date
    }),
    setReservationFormIsActive: (status) => set({
        reservationFormIsActive : status
    }),
    setCurrentReservationPage: (reservatioPage) => set({
        currentReservationPage: reservatioPage
    })
}))