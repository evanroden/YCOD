import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Bill — A07954',
  description:
    'Read YCOD\'s proposed opt-out organ donation legislation for New York State. Bill A07954 changes the DMV default to save thousands of lives while preserving the right to opt out.',
  openGraph: {
    title: 'The Bill — Opt-Out Organ Donation for NY',
    description:
      'Our proposed legislation changes the default at the DMV from opt-in to opt-out. Read the bill, understand the safeguards, and write your representative.',
  },
};

export default function BillLayout({ children }: { children: React.ReactNode }) {
  return children;
}
