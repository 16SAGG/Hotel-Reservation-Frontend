export const WeekDays = ()=>{
    const weekDays = ["S", "M", "T", "W", "T", "F", "S"]

    const listWeekDays = weekDays.map((day, _index) =>
        <li
            className="text-center"
            key={_index}
        >
            {day}
        </li>
    )

    return(
        <ol
            className="grid grid-cols-7 px-4 py-2 w-full gap-3 border-b-[1px] border-[#8A8A8A]"
        >
            {listWeekDays}
        </ol>
    )
}