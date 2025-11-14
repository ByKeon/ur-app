import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

export function SectionUpcoming() {
  const { t } = useTranslation();

  const upcoming = t('sectionUpcoming.items', {
    returnObjects: true,
  }) as string[];

  return (
    <section id="SectionUpcoming" className="my-20 px-2 py-4">
      <h2 className="text-3xl font-bold text-center">
        {t('sectionUpcoming.title')}
      </h2>

      <ul
        className={clsx(
          'mt-8 p-8 max-w-xl mx-auto space-y-4',
          'bg-white dark:bg-gray-800',
          'text-gray-800 dark:text-gray-200',
          'border border-gray-300 dark:border-gray-700',
          'shadow rounded-2xl'
        )}
      >
        {upcoming.map((item) => (
          <li key={item} className="text-lg">
            ☐ {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
