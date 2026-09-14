import type { Metadata } from 'next';
import QuadraticFundingSimulator from '@/components/quadratic-funding/QuadraticFundingSimulator';

export const metadata: Metadata = {
  title: 'Quadratic Funding Simulator · STELLARGRAD',
  description:
    'Interactive demonstration of quadratic funding: matching = (Σ√c)², collusion penalties, and the democratic power of broad grassroots support.',
};

export default function QuadraticFundingSimulatorPage() {
  return (
    <main className="min-h-[calc(100vh-80px)] bg-black">
      <QuadraticFundingSimulator />
    </main>
  );
}
