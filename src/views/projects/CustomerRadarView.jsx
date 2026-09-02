import { FaArrowLeft } from 'react-icons/fa';
import FancyButton from '@/components/elements/FancyButton.jsx';

export default function CustomerRadarView() {
  return (
      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-lg rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6 text-center shadow-lg">
            <h1 className="text-3xl font-bold mb-3">Customer Radar</h1>
            <p className="mb-6 text-slate-400">
              The presentation page of the project is currently under development. Check back soon!
            </p>
            <FancyButton
                icon={FaArrowLeft}
                text="Back to other projects"
                to="/projects"
                color="#2563eb"
            />
          </div>
        </main>
  );
}
