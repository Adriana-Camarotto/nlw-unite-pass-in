import { Search } from "lucide-react"

export function AttendeeList () {
    return (
        <div className="flex gap-3 items-center">
            <h1 className="text-2xl font-bold">Attendees</h1>
            <div className="flex w-72 px-3 py-1.5 border border-white/10 rounded-lg text-sm gap-3 ">
            <Search className="size-4 " />
            <input className="flex flex-1 bg-transparent outline-none" placeholder="Search attendees..."  />
            </div>    

        </div>
        
    )
}