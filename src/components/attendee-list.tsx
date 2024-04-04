import {
  Search,
  MoreHorizontal,
  ChevronsLeft,
  ChevronLeft,
  ChevronsRight,
  ChevronRight,
} from "lucide-react";

export function AttendeeList() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">Attendees</h1>
        <div className="flex w-72 px-3 py-1.5 border border-white/10 rounded-lg text-sm gap-3 ">
          <Search className="size-4 text-emerald-300" />
          <input
            className="flex flex-1 bg-transparent outline-none"
            placeholder="Search attendees..."
          />
        </div>
      </div>
      <div className="border border-white/10 rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th
                style={{ width: 48 }}
                className="py-3 px-4 text-sm font-semibold text-left"
              >
                <input type="checkbox" />
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                code
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Attendee
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Subscription
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Check-in
              </th>
              <th
                style={{ width: 64 }}
                className="py-3 px-4 text-sm font-semibold text-left"
              ></th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 8 }).map((_, i) => {
              return (
                <tr key={i} className="border border-white/10">
                  <td className="py-3 px-4 text-sm font-semibold text-left text-zinc-300">
                    <input type="checkbox" />
                  </td>
                  <td className="py-3 px-4 text-sm font-semibold text-left text-zinc-300">
                    12383
                  </td>
                  <td className="py-3 px-4 text-sm font-semibold text-left text-zinc-300">
                    <div className="flex flex-col gap-1">
                      <span className="font-semibold text-white">
                        Diego Schell Fernandes
                      </span>
                      <span>diego@rocketseat.com</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm font-semibold text-left text-zinc-300">
                    7 days a go
                  </td>
                  <td className="py-3 px-4 text-sm font-semibold text-left text-zinc-300">
                    3 days a go
                  </td>
                  <td className="py-3 px-4 text-sm font-semibold text-left text-zinc-300">
                    <button className="bg-black/20 border border-white/10 rounded-md p-1.5">
                      <MoreHorizontal className="size-4" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td
                className="py-3 px-4 text-sm font-semibold text-left text-zinc-300"
                colSpan={3}
              >
                Showing 10 of 228 items
              </td>
              <td
                className="py-3 px-4 text-sm font-semibold text-right text-zinc-300"
                colSpan={3}
              >
                <div className="inline-flex items-center gap-8">
                  <span>Page 1 of 23</span>
                  <div className=" flex gap-1.5">
                    <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                      <ChevronsLeft className="size-4" />
                    </button>
                    <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                      <ChevronLeft className="size-4" />
                    </button>
                    <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                      <ChevronRight className="size-4" />
                    </button>
                    <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                      <ChevronsRight className="size-4" />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
