// Shows a zoomed-in part of the product photo. Swap `src` for real close-up photos later.
export default function Crop({
  focus = "50% 50%",
  zoom = "cover",
  src = "/phyf-shaker.jpg",
  label,
  className = "",
}: {
  focus?: string;
  zoom?: string;
  src?: string;
  label: string;
  className?: string;
}) {
  return (
    <div
      role={label ? "img" : undefined}
      aria-label={label || undefined}
      aria-hidden={label ? undefined : true}
      className={className}
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: zoom,
        backgroundPosition: focus,
        backgroundRepeat: "no-repeat",
      }}
    />
  );
}
