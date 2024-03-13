"use client"

import Image from 'next/image'
import biktoriaLogo from '../../../public/svg/biktoria_logo.svg'
import menuIcon from '../../../public/svg/menu_icon.svg'
import { useReservation } from '../store/reservationStore'

export const NavBar = ()=>{
    const setReservationFormIsActive = useReservation((state) => state.setReservationFormIsActive)
    return(
        <header
            className="flex px-6 py-4 min-h-[64px] min-w-full fixed bg-gradient-to-b from-[rgba(0,0,0,0.75)] from-70%"
        >
            <button
                className='min-w-[68px]'
            >
                <Image
                    src={menuIcon}
                    alt='Menu Icon'
                    height={32}
                />
            </button>
            <div
                className="flex justify-center items-center grow"
            >
                <a
                    href="/"
                >
                    <Image
                        src={biktoriaLogo}
                        alt='Biktoria Logo'
                        height={32}
                    />
                </a>
            </div>
            <button
                onClick={() => setReservationFormIsActive(true)}
                className="border-2 border-white min-w-[68px]"
            >
                book
            </button>
        </header>
    )
}