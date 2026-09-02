export default function Footer({ light = false }) {
const currentYear = new Date().getFullYear();

return (
<footer className={`border-t py-2 text-center ${light ? "border-gray-100 bg-gray-50" : "border-[var(--color-border)] bg-[var(--color-background)]"}`}>
<p className={`font-mono text-[10px] ${light ? "text-gray-500" : "text-slate-500"}`}>
  &copy; {currentYear} Simone Cotardo All Rights Reserved.
</p>
</footer>
);
}
