import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SMS Critical Alerts Program',
  description:
    'Compliance and terms for the YCOD critical building-automation SMS alert program (toll-free 1-833-530-4154). Transactional facility alerts only — not marketing.',
  robots: {
    index: false,
    follow: false,
  },
};

const TOLL_FREE_DISPLAY = '1-833-530-4154';
const TOLL_FREE_TEL = '+18335304154';
const SUPPORT_EMAIL = 'support@YCOD.org';
const SUPPORT_PHONE_DISPLAY = '(716) 418-4157';
const SUPPORT_PHONE_TEL = '+17164184157';

// Carrier-required affirmative consent language. Sending the pre-filled email
// below is the recipient's opt-in; participation is entirely optional.
const CONSENT_LANGUAGE = `I consent to receive critical building-automation and facility alert text messages from The Youth Coalition for Organ Donation (YCOD) at the mobile number provided below. These are transactional service alerts, not marketing. Message frequency varies based on facility conditions. Message and data rates may apply. Reply STOP at any time to opt out, or HELP for assistance. Consent is not a condition of any purchase or service.`;

const CONSENT_EMAIL_SUBJECT = 'SMS Critical Alerts — Opt-In Consent';
const CONSENT_EMAIL_BODY = `${CONSENT_LANGUAGE}

Mobile number to enroll: ____________________
Name: ____________________
Facility / site (optional): ____________________

By sending this email I am providing my affirmative consent as described above.`;

const consentMailto = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
  CONSENT_EMAIL_SUBJECT,
)}&body=${encodeURIComponent(CONSENT_EMAIL_BODY)}`;

interface SectionCardProps {
  badge: string;
  badgeBg: string;
  badgeText: string;
  title: string;
  children: React.ReactNode;
}

function SectionCard({ badge, badgeBg, badgeText, title, children }: SectionCardProps) {
  return (
    <div className="ninety-card bg-white dark:bg-ycod-black border border-ycod-black/10 dark:border-white/10">
      <span
        className={`inline-block px-3 py-1 rounded-full font-display text-xs font-bold uppercase tracking-wider ${badgeBg} ${badgeText}`}
      >
        {badge}
      </span>
      <h2 className="font-display text-2xl md:text-3xl font-bold text-ycod-black dark:text-white mt-3 mb-4">
        {title}
      </h2>
      <div className="font-body text-base text-ycod-black/80 dark:text-white/80 leading-relaxed space-y-4">
        {children}
      </div>
    </div>
  );
}

export default function SmsAlertsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ycod-blue py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full font-display text-xs font-bold uppercase tracking-wider bg-white/20 text-white mb-4">
            SMS Program Terms &amp; Compliance
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">
            Critical Alerts Texting Program
          </h1>
          <p className="font-body text-xl text-white/90 max-w-2xl mx-auto">
            Transactional building-automation and facility alerts from The Youth Coalition for Organ
            Donation, delivered via toll-free number{' '}
            <a href={`tel:${TOLL_FREE_TEL}`} className="font-bold underline underline-offset-2">
              {TOLL_FREE_DISPLAY}
            </a>
            .
          </p>
        </div>
      </section>

      <section className="bg-white dark:bg-ycod-black transition-colors duration-300 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          {/* Business identity */}
          <SectionCard
            badge="Who We Are"
            badgeBg="bg-ycod-coral/20"
            badgeText="text-ycod-coral"
            title="Business Identity"
          >
            <p>
              This messaging program is operated by{' '}
              <strong className="text-ycod-black dark:text-white">
                The Youth Coalition for Organ Donation
              </strong>{' '}
              (&ldquo;YCOD&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), a youth-led nonprofit
              advocacy organization based in Buffalo, New York.
            </p>
            <p>
              YCOD maintains building-automation and facility monitoring systems that generate
              time-sensitive, safety-critical alerts. This page documents the terms, privacy
              practices, and opt-in and opt-out procedures for that SMS alert program, sent from
              toll-free number{' '}
              <a
                href={`tel:${TOLL_FREE_TEL}`}
                className="font-bold text-ycod-blue dark:text-ycod-blue underline underline-offset-2"
              >
                {TOLL_FREE_DISPLAY}
              </a>
              .
            </p>
          </SectionCard>

          {/* Contact info */}
          <SectionCard
            badge="Contact"
            badgeBg="bg-ycod-blue/20"
            badgeText="text-ycod-blue"
            title="How to Reach Us"
          >
            <ul className="space-y-2">
              <li>
                <strong className="text-ycod-black dark:text-white">Organization:</strong> The Youth
                Coalition for Organ Donation (YCOD)
              </li>
              <li>
                <strong className="text-ycod-black dark:text-white">Email:</strong>{' '}
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="text-ycod-blue underline underline-offset-2"
                >
                  {SUPPORT_EMAIL}
                </a>
              </li>
              <li>
                <strong className="text-ycod-black dark:text-white">Phone:</strong>{' '}
                <a
                  href={`tel:${SUPPORT_PHONE_TEL}`}
                  className="text-ycod-blue underline underline-offset-2"
                >
                  {SUPPORT_PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <strong className="text-ycod-black dark:text-white">SMS toll-free number:</strong>{' '}
                <a
                  href={`tel:${TOLL_FREE_TEL}`}
                  className="text-ycod-blue underline underline-offset-2"
                >
                  {TOLL_FREE_DISPLAY}
                </a>
              </li>
              <li>
                <strong className="text-ycod-black dark:text-white">Location:</strong> Buffalo, New
                York, USA
              </li>
            </ul>
          </SectionCard>

          {/* Message types & frequency */}
          <SectionCard
            badge="What We Send"
            badgeBg="bg-ycod-green/20"
            badgeText="text-ycod-green"
            title="Message Types &amp; Frequency"
          >
            <p>
              Messages are strictly{' '}
              <strong className="text-ycod-black dark:text-white">transactional</strong> critical
              building-automation and facility alerts &mdash; for example, HVAC and mechanical
              faults, temperature or environmental threshold breaches, power and utility
              disruptions, water or leak detection, access-control and security events, and other
              time-sensitive operational conditions at our facilities.
            </p>
            <p>
              This is <strong className="text-ycod-black dark:text-white">not a marketing or
              promotional program.</strong> We do not send advertising, fundraising, or campaign
              content through this number.
            </p>
            <p>
              <strong className="text-ycod-black dark:text-white">Message frequency</strong> varies
              and is event-driven &mdash; you receive a message only when a qualifying alert
              condition occurs, so volume depends on facility conditions.{' '}
              <strong className="text-ycod-black dark:text-white">
                Message and data rates may apply.
              </strong>
            </p>
          </SectionCard>

          {/* STOP / HELP */}
          <SectionCard
            badge="Opt-Out &amp; Help"
            badgeBg="bg-ycod-yellow/20"
            badgeText="text-ycod-black dark:text-ycod-yellow"
            title="STOP and HELP Instructions"
          >
            <p>
              <strong className="text-ycod-black dark:text-white">To opt out:</strong> Reply{' '}
              <strong className="text-ycod-black dark:text-white">STOP</strong> to any message from{' '}
              <a
                href={`tel:${TOLL_FREE_TEL}`}
                className="text-ycod-blue underline underline-offset-2"
              >
                {TOLL_FREE_DISPLAY}
              </a>{' '}
              at any time. You will receive a one-time confirmation that you have been unsubscribed,
              and no further alert messages will be sent to your number.
            </p>
            <p>
              <strong className="text-ycod-black dark:text-white">For help:</strong> Reply{' '}
              <strong className="text-ycod-black dark:text-white">HELP</strong> to{' '}
              <a
                href={`tel:${TOLL_FREE_TEL}`}
                className="text-ycod-blue underline underline-offset-2"
              >
                {TOLL_FREE_DISPLAY}
              </a>{' '}
              for assistance, or contact us any time at{' '}
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="text-ycod-blue underline underline-offset-2"
              >
                {SUPPORT_EMAIL}
              </a>{' '}
              or{' '}
              <a
                href={`tel:${SUPPORT_PHONE_TEL}`}
                className="text-ycod-blue underline underline-offset-2"
              >
                {SUPPORT_PHONE_DISPLAY}
              </a>
              .
            </p>
          </SectionCard>

          {/* Privacy */}
          <SectionCard
            badge="Privacy"
            badgeBg="bg-ycod-pink/20"
            badgeText="text-ycod-coral"
            title="Privacy Statement"
          >
            <p>
              We respect your privacy. The mobile information (including your phone number) collected
              for this SMS alert program is used solely to deliver critical facility alerts and to
              operate and support the program.
            </p>
            <p>
              <strong className="text-ycod-black dark:text-white">
                No mobile information will be shared with or sold to third parties for marketing
                purposes.
              </strong>{' '}
              We do not share text-messaging opt-in data or consent with third parties for their own
              marketing. Information may only be shared with the messaging service providers that
              help us deliver these alerts, and solely for that purpose.
            </p>
          </SectionCard>

          {/* Terms & Conditions */}
          <SectionCard
            badge="Terms"
            badgeBg="bg-ycod-blue/20"
            badgeText="text-ycod-blue"
            title="SMS Terms &amp; Conditions"
          >
            <ul className="list-disc pl-5 space-y-2">
              <li>
                By opting in, you agree to receive transactional critical building-automation and
                facility alert text messages from YCOD at the toll-free number {TOLL_FREE_DISPLAY}.
              </li>
              <li>Message frequency varies and is driven by facility alert events.</li>
              <li>Message and data rates may apply, per your mobile carrier plan.</li>
              <li>
                You can cancel at any time by replying <strong>STOP</strong>. For help, reply{' '}
                <strong>HELP</strong> or contact {SUPPORT_EMAIL}.
              </li>
              <li>
                Carriers are not liable for delayed or undelivered messages. Delivery is subject to
                carrier and network availability.
              </li>
              <li>Participation is optional and is not a condition of any purchase or service.</li>
              <li>
                We may update these terms from time to time; the current version is always posted on
                this page.
              </li>
            </ul>
          </SectionCard>

          {/* Optional opt-in */}
          <div className="ninety-card bg-ycod-black text-white border-[3px] border-ycod-black">
            <span className="inline-block px-3 py-1 rounded-full font-display text-xs font-bold uppercase tracking-wider bg-ycod-green/30 text-ycod-green">
              Optional Opt-In
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mt-3 mb-4">
              Enroll in Critical Alerts
            </h2>
            <div className="font-body text-base text-white/80 leading-relaxed space-y-4">
              <p>
                Enrollment is <strong className="text-white">completely optional</strong>. To opt in,
                send us an email from the button below. The email is pre-filled with the required
                consent language &mdash;{' '}
                <strong className="text-white">
                  sending it is your affirmative consent to receive these alerts.
                </strong>{' '}
                Add the mobile number you want enrolled before sending.
              </p>
              <div className="bg-white/5 border border-white/15 rounded-md p-4">
                <p className="font-display text-xs font-bold uppercase tracking-wider text-white/60 mb-2">
                  Consent language
                </p>
                <p className="text-white/90 italic">{CONSENT_LANGUAGE}</p>
              </div>
              <div>
                <a
                  href={consentMailto}
                  className="retro-btn inline-block bg-ycod-green text-ycod-black no-underline"
                >
                  Email Consent to Opt In
                </a>
              </div>
              <p className="text-sm text-white/60">
                Prefer not to use the button? Email{' '}
                <a href={`mailto:${SUPPORT_EMAIL}`} className="text-ycod-green underline">
                  {SUPPORT_EMAIL}
                </a>{' '}
                with the consent language above and the mobile number to enroll. You can opt out at
                any time by replying STOP to {TOLL_FREE_DISPLAY}.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
