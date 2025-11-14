import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

export function SectionReferral() {
  const { t } = useTranslation();

  const items = t('sectionReferral.items', {
    returnObjects: true,
  }) as string[];

  return (
    <section id="SectionReferral" className="my-20 py-4 px-2">
      <h2 className="text-3xl font-bold text-center">
        {t('sectionReferral.title')}
      </h2>

      <ul
        className={clsx(
          'mt-8 p-8 max-w-md mx-auto space-y-4',
          'bg-white dark:bg-gray-800',
          'text-gray-800 dark:text-gray-200',
          'border border-gray-300 dark:border-gray-700',
          'shadow rounded-2xl'
        )}
      >
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i}>
              {isLast ? '👉' : '✔'} {item}
            </li>
          );
        })}
      </ul>

      {/* CTA Button */}
      <div className="text-center mt-6">
        <a
          href="https://get.ur.app/login?code=urkeon"
          target="_blank"
          className={clsx(
            'inline-block px-6 py-3 rounded-xl font-semibold mt-2',
            'bg-blue-600 text-white hover:bg-blue-700',
            'dark:bg-blue-500 dark:hover:bg-blue-400',
            'shadow'
          )}
        >
          {t('sectionReferral.cta')}
        </a>
      </div>
    </section>
  );
}
