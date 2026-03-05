"use client";

import { QRCodeSVG } from "qrcode.react";
import { useEffect, useState } from "react";

export default function ClosingSlide() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative flex h-full w-full items-center justify-between overflow-hidden px-24">
      {/* Left side - Text content */}
      <div className="relative z-10 flex flex-col items-start">
        <div className="mb-4 inline-block rounded-lg bg-accent px-4 py-1 font-body text-xs font-semibold uppercase tracking-widest text-white">
          Connect
        </div>

        <h1 className="font-display text-7xl font-bold text-text leading-tight">
          Thank You
        </h1>

        <div className="mt-8 space-y-4">
          <div>
            <p className="font-body text-sm uppercase tracking-widest text-text-muted">
              Speaker
            </p>
            <p className="mt-2 font-display text-3xl font-bold text-text">
              Lesmon Saluta
            </p>
            <p className="mt-1 font-body text-lg text-accent">
              CEO & Co-founder
            </p>
            <p className="font-body text-lg text-accent">Bscale Labs</p>
          </div>
        </div>

        <div className="mt-10 flex items-center gap-2 rounded-lg border border-text-muted/20 bg-white/5 px-6 py-3 backdrop-blur-sm">
          <span className="font-body text-sm text-text-muted">Visit:</span>
          <span className="font-body font-semibold text-accent">
            lesmonandres.com
          </span>
        </div>
      </div>

      {/* Right side - QR Code */}
      <div className="relative z-10 flex flex-col items-center">
        {/* QR Code container */}
        <div className="rounded-2xl bg-white p-4">
          {mounted && (
            <QRCodeSVG
              value="https://lesmonandres.com"
              size={320}
              level="H"
              includeMargin={true}
              fgColor="#000000"
              bgColor="#ffffff"
            />
          )}
        </div>

        {/* Bottom label */}
        <div className="mt-6 text-center">
          <p className="font-body text-xs font-medium uppercase tracking-widest text-text">
            Scan to Connect
          </p>
        </div>
      </div>
    </div>
  );
}
