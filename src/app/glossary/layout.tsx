import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Organ Donation Glossary',
  description:
    'A comprehensive A-Z glossary of 30 organ donation and transplantation terms. Understand key concepts from allocation and brain death to xenotransplantation and zero mismatch.',
  openGraph: {
    title: 'Organ Donation Glossary — Key Terms Explained',
    description:
      'A comprehensive glossary of organ donation and transplantation terms. Understand key concepts from A to Z.',
    url: 'https://www.ycod.org/glossary',
  },
  alternates: {
    canonical: '/glossary',
  },
};

const glossaryJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  name: 'Organ Donation Glossary',
  description: 'Key terms and definitions related to organ donation, transplantation, and related policy.',
  url: 'https://www.ycod.org/glossary',
  hasDefinedTerm: [
    { '@type': 'DefinedTerm', name: 'Allocation', description: 'The system used to distribute donated organs to patients on the waiting list.' },
    { '@type': 'DefinedTerm', name: 'Brain Death', description: 'The irreversible loss of all brain function, including the brainstem.' },
    { '@type': 'DefinedTerm', name: 'Opt-In System', description: 'An organ donation system where individuals must actively register to become donors.' },
    { '@type': 'DefinedTerm', name: 'Opt-Out System', description: 'An organ donation system where individuals are automatically registered as donors unless they opt out.' },
    { '@type': 'DefinedTerm', name: 'Presumed Consent', description: 'The principle behind opt-out organ donation systems.' },
    { '@type': 'DefinedTerm', name: 'UNOS', description: 'United Network for Organ Sharing — manages the US organ transplant system.' },
    { '@type': 'DefinedTerm', name: 'Xenotransplantation', description: 'Transplantation of organs from one species to another.' },
  ],
};

export default function GlossaryLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(glossaryJsonLd) }}
      />
      {children}
    </>
  );
}
