type LogoMarkProps = {
  className?: string;
  title?: string;
};

export function LogoMark({ className = "h-full w-full", title = "NextWebIT" }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden={!title}
      role={title ? "img" : undefined}
      aria-label={title}
    >
      {title ? <title>{title}</title> : null}
      <path
        d="M70 70 L70 330 L140 330 L140 170 L240 330 L330 330 L330 70 L260 70 L260 230 L160 70 Z"
        fill="#0A2540"
      />
      <rect x="255" y="70" width="80" height="260" fill="#FF7A00" />
    </svg>
  );
}

type LogoProps = {
  showText?: boolean;
  className?: string;
};

export function Logo({ showText = true, className = "" }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white/80 transition-transform group-hover:scale-105">
        <LogoMark />
      </span>
      {showText && (
        <span className="leading-tight">
          <span className="block font-semibold text-gold text-base tracking-tight">NextWebIT</span>
          <span className="block text-[11px] text-gold/65">nextwebit.in</span>
        </span>
      )}
    </span>
  );
}
