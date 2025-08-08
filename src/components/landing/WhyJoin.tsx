import { Card, CardContent } from "~/components/ui/card";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface WhyJoinProps {
  title: string;
  reason: string;
  imageSrc: string;
  accolades: {paragraph: string}[];
}

export default function WhyJoinSection({
  title,
  reason,
  imageSrc,
  accolades,
}: WhyJoinProps) {
  return (
    <section className="bg-slate-50 py-6" id="why-join">
      <Accolades accolades={accolades} />
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-start gap-8 md:grid-cols-2">
          <div>
            <h2 className="my-12 text-center text-3xl font-bold text-darkGreen">
              {title}
            </h2>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <p className="text-black md:text-lg">{reason}</p>
              </CardContent>
            </Card>
          </div>
          <Card className="overflow-hidden shadow-lg">
            <CardContent className="relative aspect-square p-0">
              <Image
                src={imageSrc}
                alt="Speech and Debate Team"
                width={400}
                height={400}
                className="h-full w-full object-cover"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

interface AccoladesProps {
  accolades: { paragraph: string }[];
}

function Accolades({ accolades }: AccoladesProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    const maxScroll = scrollWidth - clientWidth;

    const scroll = () => {
      if (!container) return;

      const currentScroll = container.scrollLeft;
      if (currentScroll >= maxScroll) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += 2;
      }
    };

    const intervalId = setInterval(scroll, 18);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="overflow-hidden bg-white">
      <div className="mx-auto">
        <div
          ref={containerRef}
          className="flex overflow-x-hidden whitespace-nowrap pb-6"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          {[...accolades, ...accolades, ...accolades, ...accolades].map((accolade, index) => (
          <span
            key={index}
            className="inline-block py-2 font-bold text-darkBlue text-xl"
          >
            {accolade.paragraph}&nbsp;&nbsp;•&nbsp;&nbsp;
          </span>
        ))}
        </div>
      </div>
    </section>
  );
}
