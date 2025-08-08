import { AlertCircle } from "lucide-react";
import type { DataStructure } from "~/utils/dataStructure";

export default function TournamentsPage({
  tournamentInfo,
}: {
  tournamentInfo: DataStructure["students"]["tournamentInfo"];
}) {
  return (
    <div className="max-w-4xl space-y-8">
      <h1 className="text-3xl font-bold text-darkBlue">
        Tournament Information
      </h1>

      <section className="space-y-6">
        {tournamentInfo.map((section, index) => (
          <div className="space-y-4" key={section.header + index}>
            <h2 className="text-2xl font-semibold text-darkGreen">
              {section.header}
            </h2>
            {section.description.length === 1 ? (
              <p>{section.description[0]?.paragraph}</p>
            ) : (
              <ul className="space-y-2">
                {section.description.map((paragraph, index) => (
                  <li key={section.header + "-desc-" + index} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-darkGreen" />
                    <span>{paragraph.paragraph}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        <div className="rounded-r border-l-4 border-red-400 bg-red-50 p-4">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-red-400" />
            <p className="font-medium text-red-700">Important Notice</p>
          </div>
          <p className="mt-2 text-red-600">
            Failure to submit these forms may result in ineligibility to
            compete.
          </p>
        </div>
      </section>
    </div>
  );
}
