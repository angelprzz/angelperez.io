import LiveClock from "@/components/location/live-clock";

interface MapPropsType {
  location: string;
  timeZone: string;
  pillText: string;
}

export default function Map({ location, timeZone, pillText }: MapPropsType) {
  return (
    <div className="bg-card relative flex h-85.75 w-87.5 flex-col justify-between overflow-hidden rounded-3xl p-4">
      <span className="relative z-10 inline-block w-fit rounded-full bg-white px-3 py-1 font-sans text-base font-medium text-neutral-900">
        {pillText}
      </span>

      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/60 to-transparent" />

      <div className="relative z-10 font-sans text-base">
        <p className="font-medium text-white">{location}</p>
        <p className="font-normal text-white/70">
          <LiveClock timeZone={timeZone} />
        </p>
      </div>
    </div>
  );
}
