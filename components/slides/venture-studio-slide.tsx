const clients = [
  "Beyond the Box",
  "Sola",
  "Digital Walker",
  "Chris Sports",
];

const logos = [
  { src: "/cflLogo (1).svg", alt: "Control Flow Labs" },
  { src: "/palantir.jpg", alt: "Palantir" },
  { src: "/fsv.jpeg", alt: "First Spark Ventures" },
];

export default function VentureStudioSlide() {
  return (
    <div className="flex h-full w-full items-center gap-16 px-24">
      {/* Left: text content */}
      <div className="flex flex-1 flex-col">
        <span className="font-body text-sm font-medium uppercase tracking-[0.25em] text-accent">
          Next Chapter
        </span>
        <h2 className="mt-3 font-display text-4xl font-bold text-text">
          Control Flow Labs
        </h2>
        <p className="mt-2 font-body text-base text-text-muted">
          Founders from Palantir &bull; GP of First Spark Ventures &mdash; Eric
          Schmidt&apos;s deep-tech fund
        </p>

        <p className="mt-8 max-w-xl font-body text-lg leading-relaxed text-text-muted">
          Joined as <span className="text-text font-medium">Tech Lead</span>,
          eventually serving as{" "}
          <span className="text-text font-medium">CTO</span> of our flagship
          project &mdash; an e-commerce analytics AI platform built for
          Southeast Asia.
        </p>

        {/* Clients */}
        <div className="mt-12">
          <span className="font-body text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
            Clients
          </span>
          <div className="mt-4 flex flex-wrap gap-3">
            {clients.map((name) => (
              <span
                key={name}
                className="rounded-lg border border-border bg-bg-card px-5 py-2.5 font-body text-sm text-text"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right: floating logo cards */}
      <div className="relative flex flex-1 items-center justify-center">
        <div className="relative h-[24rem] w-full">
          {logos.map((logo, i) => {
            const offsets = [
              "top-0 left-8 rotate-[-3deg]",
              "top-16 right-4 rotate-[2deg]",
              "bottom-4 left-16 rotate-[1deg]",
            ];
            return (
              <div
                key={logo.alt}
                className={`absolute flex h-32 w-44 items-center justify-center rounded-2xl bg-white p-5 shadow-xl shadow-black/30 ${offsets[i]}`}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-full w-full object-contain"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
