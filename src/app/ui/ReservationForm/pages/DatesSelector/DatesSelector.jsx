import { Calendary } from "./Calendary"
import { WeekDays } from "./WeekDays"

export const DatesSelector = () =>{
    return(
        <section
            className="min-w-full"
        >
            <header
                className="grid"
            >
                <WeekDays/>
            </header>
            <Calendary/>
        </section>
    )
}