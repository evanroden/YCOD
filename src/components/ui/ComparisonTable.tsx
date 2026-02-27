'use client';

import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';

const COMPARISON_ROWS = [
  'default',
  'registration',
  'family_role',
  'donation_rate',
  'countries',
  'waitlist_effect',
  'public_awareness',
  'admin_burden',
];

export default function ComparisonTable() {
  const { t } = useI18n();

  return (
    <motion.div
      className="ninety-card bg-white dark:bg-ycod-black/80 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h3 className="font-display text-xl md:text-2xl font-bold text-ycod-black dark:text-white mb-2 text-center">
        {t('bill.compare_title')}
      </h3>
      <p className="font-body text-sm text-ycod-black/60 dark:text-white/60 text-center mb-6">
        {t('bill.compare_subtitle')}
      </p>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse" role="table">
          <thead>
            <tr>
              <th className="p-3 text-left font-display font-bold text-sm text-ycod-black dark:text-white border-b-2 border-ycod-black dark:border-white/30 w-1/3">
                {t('bill.compare_feature')}
              </th>
              <th className="p-3 text-center font-display font-bold text-sm text-white bg-ycod-coral border-b-2 border-ycod-black w-1/3 rounded-tl-md">
                {t('bill.compare_optin')}
              </th>
              <th className="p-3 text-center font-display font-bold text-sm text-white bg-ycod-green border-b-2 border-ycod-black w-1/3 rounded-tr-md">
                {t('bill.compare_optout')}
              </th>
            </tr>
          </thead>
          <tbody>
            {COMPARISON_ROWS.map((row, index) => (
              <motion.tr
                key={row}
                className={index % 2 === 0 ? 'bg-gray-50 dark:bg-white/5' : 'bg-white dark:bg-ycod-black/80'}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <td className="p-3 font-display font-bold text-sm text-ycod-black dark:text-white border-b border-gray-200 dark:border-white/10">
                  {t(`bill.compare.${row}.label`)}
                </td>
                <td className="p-3 font-body text-sm text-ycod-black/80 dark:text-white/80 border-b border-gray-200 dark:border-white/10 text-center bg-ycod-coral/5">
                  {t(`bill.compare.${row}.optin`)}
                </td>
                <td className="p-3 font-body text-sm text-ycod-black/80 dark:text-white/80 border-b border-gray-200 dark:border-white/10 text-center bg-ycod-green/5">
                  {t(`bill.compare.${row}.optout`)}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 p-3 bg-ycod-green/10 border-l-4 border-ycod-green rounded-r-md">
        <p className="font-body text-sm text-ycod-black/80 dark:text-white/80">
          {t('bill.compare_note')}
        </p>
      </div>
    </motion.div>
  );
}
