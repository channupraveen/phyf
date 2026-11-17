"use client";

import { useState } from "react";
import { product } from "@/content";

export default function BuyBox() {
  const [colour, setColour] = useState(product.colours[0].name);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-baseline gap-3">
        <span className="font-display text-4xl">{product.price}</span>
        {product.comparePrice && (
          <span className="text-lg text-ink/40 line-through">{product.comparePrice}</span>
        )}
      </div>

      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-ink/60">
          Colour: <span className="text-ink">{colour}</span>
        </p>
        <div className="flex gap-3">
          {product.colours.map((c) => (
            <button
              key={c.name}
              type="button"
              disabled={!c.available}
              onClick={() => setColour(c.name)}
              aria-label={c.available ? c.name : `${c.name} (coming soon)`}
              title={c.available ? c.name : `${c.name} — coming soon`}
              className={`relative h-11 w-11 rounded-full border-2 transition ${
                colour === c.name ? "border-ink scale-110" : "border-transparent"
              } ${c.available ? "cursor-pointer" : "cursor-not-allowed opacity-40"}`}
              style={{ backgroundColor: c.hex }}
            />
          ))}
        </div>
      </div>

      <div className="flex gap-3">
        <div className="flex items-center rounded-full border border-ink/20 bg-white">
          <button type="button" className="px-4 py-3 text-lg" onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease quantity">
            −
          </button>
          <span className="w-6 text-center font-semibold">{qty}</span>
          <button type="button" className="px-4 py-3 text-lg" onClick={() => setQty((q) => q + 1)} aria-label="Increase quantity">
            +
          </button>
        </div>
        <button
          type="button"
          onClick={() => setAdded(true)}
          className="flex-1 rounded-full bg-ink px-8 py-4 font-semibold text-white transition hover:bg-dot"
        >
          {added ? "Added to cart ✓" : "Add to cart"}
        </button>
      </div>
    </div>
  );
}
