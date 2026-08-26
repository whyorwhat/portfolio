export function Brand({ compact = false }) {
  const imageSize = compact ? 30 : 34;

  return (
    <div className="flex items-center gap-2.5 text-[#171918]">
      <img
        src="/projects/tiseguo/brand-mark.webp"
        alt=""
        width={imageSize}
        height={imageSize}
        className={
          compact
            ? "h-[1.875rem] w-[1.875rem] object-contain grayscale contrast-125"
            : "h-[2.125rem] w-[2.125rem] object-contain grayscale contrast-125"
        }
      />
      <span
        className={
          compact
            ? "font-semibold tracking-[-0.035em]"
            : "text-[1.05rem] font-semibold tracking-[-0.035em]"
        }
      >
        Ti Seguo
      </span>
    </div>
  );
}
