import {
  CarFront,
  CircleArrowRight,
  ClipboardCheck,
  ClockAlert,
  MessageSquareWarning,
  PackageSearch,
  PanelsTopLeft,
  Route,
  UserRoundCog,
} from "lucide-react";

const TONES = {
  red: "text-[#d35d50]",
  green: "text-[#2f7f50]",
};

const ICONS = {
  channels: MessageSquareWarning,
  context: PanelsTopLeft,
  time: ClockAlert,
  path: Route,
  roles: UserRoundCog,
  step: CircleArrowRight,
  garage: CarFront,
  inspection: ClipboardCheck,
  parts: PackageSearch,
};

export function ConceptIcon({ name, tone = "green" }) {
  const Icon = ICONS[name];

  if (!Icon) {
    return null;
  }

  return (
    <span
      aria-hidden="true"
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e7e8e5] ${TONES[tone] ?? TONES.green}`}
    >
      <Icon size={19} strokeWidth={2} />
    </span>
  );
}
