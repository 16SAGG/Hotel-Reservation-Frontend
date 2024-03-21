import Image from "next/image"
import biktoriaLogoV2 from "../../../../public/svg/biktoria_logo_v2.svg"
import { useReservation } from "@/app/store/reservationStore"
import { data } from "@/app/libs/data"

export const ReservationHeader = ()=>{
    const currentReservationPage = useReservation((state) => state.currentReservationPage)
    const setCurrentReservationPage = useReservation((state) => state.setCurrentReservationPage)
    const setReservationFormIsActive = useReservation((state) => state.setReservationFormIsActive)

    const currentTitle = data.reservationPages[currentReservationPage].title
    const currentPagePercent = ((currentReservationPage + 1) * 100)/data.reservationPages.length

    return(
        <header
            className="flex flex-col min-h-[64px]"
        >
            <div
                className="flex flex-col px-6 py-4 "
            >
                <div
                    className="flex grow"
                >
                    <a
                        href="/"
                        className="min-w-[68px]"
                    >
                        <Image
                            src={biktoriaLogoV2}
                            alt="Biktoria Logo"
                            height={32}
                            className="black-filter"
                        />
                    </a>
                    <div
                        className="flex items-end justify-center grow"
                    >
                        <h2>{currentTitle}</h2>
                    </div>
                    <button
                        onClick={()=>{
                            setReservationFormIsActive(false)
                            setCurrentReservationPage(0)
                        }}
                        className="min-w-[68px]"
                    >
                        X
                    </button>
                </div>
            </div>
            <div
                className="grid grid-cols-1 grid-rows-1 min-h-[1px]"
            >
                <div
                    className="row-start-1 col-start-1 bg-[#8A8A8A]"
                ></div>
                <div
                    className="row-start-1 col-start-1"
                >
                    <div
                        className="h-full duration-300 bg-black"
                        style={{
                            width: `${currentPagePercent}%`
                        }}
                    ></div>
                </div>
            </div>
        </header>
    )
}