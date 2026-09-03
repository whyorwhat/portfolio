export default function Footer({ light = false }) {
const currentYear = new Date().getFullYear();

return (
<footer className="py-1 text-center">
<p className={`font-mono text-[10px] leading-none ${light ? "text-gray-500" : "text-slate-500"}`}>
  &copy; {currentYear} Simone Cotardo All Rights Reserved.
</p>
</footer>
);
}
