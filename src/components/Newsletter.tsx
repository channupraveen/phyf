"use client";

import { useState } from "react";

export default function Newsletter() {
  const [done, setDone] = useState(false);

  if (done) {
    return <p className="text-lg font-semibold text-blush">You&apos;re on the list. Watch your inbox!</p>;
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true); // TODO: connect to an email service (e.g. Mailchimp, Resend)
      }}
      className="flex w-full max-w-md overflow-hidden rounded-full bg-white/10 ring-1 ring-white/20 focus-within:ring-blush"
    >
      <input
        type="email"
        required
        placeholder="Your email"
        aria-label="Email address"
        className="flex-1 bg-transparent px-5 py-3 text-white placeholder:text-white/50 outline-none"
      />
      <button type="submit" className="bg-blush px-6 font-semibold text-ink transition hover:bg-white">
        Join
      </button>
    </form>
  );
}
