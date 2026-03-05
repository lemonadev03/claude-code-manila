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
    <div className="flex h-full w-full flex-col justify-center px-24">
      {/* Logos row */}
      <div className="flex items-center gap-6">
        {logos.map((logo) => (
          <div
            key={logo.alt}
            className="flex h-16 w-28 items-center justify-center rounded-lg bg-white p-2"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </div>

      <span className="mt-8 font-body text-sm font-medium uppercase tracking-[0.25em] text-accent">
        Next Chapter
      </span>
      <h2 className="mt-3 font-display text-4xl font-bold text-text">
        Control Flow Labs
      </h2>
      <p className="mt-2 font-body text-base text-text-muted">
        Founders from Palantir &bull; GP of First Spark Ventures &mdash; Eric
        Schmidt&apos;s deep-tech fund
      </p>

      <p className="mt-8 max-w-2xl font-body text-lg leading-relaxed text-text-muted">
        Joined as <span className="text-text font-medium">Tech Lead</span>,
        eventually serving as{" "}
        <span className="text-text font-medium">CTO</span> of our flagship
        project &mdash; an e-commerce analytics AI platform built for Southeast
        Asia.
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
  );
}
