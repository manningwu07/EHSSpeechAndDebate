import { Calendar as CalendarIcon } from "lucide-react";
import type { DataStructure } from "~/utils/dataStructure";

export default function CalendarPage({
  upcomingDates,
  calendarLink,
}: {
  upcomingDates: DataStructure["students"]["upcomingDates"];
  calendarLink: string;
}) {
  return (
    <div className="grid gap-8 2xl:grid-cols-[300px_1fr]">
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <CalendarIcon className="h-6 w-6 text-darkGreen" />
          <h1 className="text-3xl font-bold text-darkBlue">Team Calendar</h1>
        </div>

        <div className="space-y-4">
          {upcomingDates.map((item, index) => (
            <div
              key={index}
              className="rounded-r-lg border-l-4 border-darkGreen bg-white p-4 shadow-sm"
            >
              <div className="font-semibold text-darkBlue">{item.date}</div>
              <div className="text-gray-600">{item.event}</div>
              <div className="text-sm text-darkGreen">{item.type}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg bg-white p-6 shadow-lg hidden lg:block">
        <iframe
          src={calendarLink}
          className="w-full"
          height="800"
          style={{ border: 0 }}
          frameBorder="0"
          scrolling="no"
          title="Team Calendar"
        />
      </div>
    </div>
  );
}
