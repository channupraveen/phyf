export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display lowercase tracking-tight leading-none ${className}`}>
      phyf<span className="text-dot">.</span>
    </span>
  );
}
