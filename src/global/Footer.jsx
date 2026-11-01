export default function Footer({ light = false }) {
const currentYear = new Date().getFullYear();
// same colors as the footer text (Tailwind gray-500 / slate-500)
const textColor = light ? "6b7280" : "64748b";
const badgeSrc =
  `https://simpleanalyticsbadges.com/simonecotardo.com` +
  `?background=transparent&text=${textColor}&logo=${textColor}&radius=10&counter=false&mode=auto`;

return (
<footer className="py-1 text-center">
<p className={`font-mono text-[10px] leading-none ${light ? "text-gray-500" : "text-slate-500 light:text-gray-500"}`}>
  &copy; {currentYear} Simone Cotardo All Rights Reserved.
</p>
<a
  href={`https://www.simpleanalytics.com?utm_source=simonecotardo.com&utm_content=badge`}
  target="_blank"
  rel="noreferrer"
  referrerPolicy="origin"
  className="mt-1 inline-block"
>
  <img
    src={badgeSrc}
    alt="Simple Analytics"
    width={100}
    height={24}
    loading="lazy"
    referrerPolicy="no-referrer"
  />
</a>
</footer>
);
}
