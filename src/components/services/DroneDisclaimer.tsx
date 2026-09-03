export default function DroneDisclaimer({
  className = "",
}: {
  className?: string;
}) {
  return (
    <p className={`text-sm leading-relaxed text-gray-500 ${className}`}>
      Aerial capture and documentation files. Not a Professional Engineer (PE)
      stamp, not a land survey, and not an insurance certification.
    </p>
  );
}
