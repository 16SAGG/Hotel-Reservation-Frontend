import { create } from 'zustand'

export const useReservation = create((set) => ({
    reservationFormIsActive: false,
    currentReservationPage: 2,
    setReservationFormIsActive: (status) => set({
        reservationFormIsActive : status
    }),
    setCurrentReservationPage: (reservatioPage) => set({
        currentReservationPage: reservatioPage
    })
}))