import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

export function SectionAmbassador() {
  const { t } = useTranslation();

  const campian = t('sectionAmbassador.campian', {
    returnObjects: true,
  }) as string[];

  const rules = t('sectionAmbassador.rules', {
    returnObjects: true,
  }) as string[];

  const platforms = t('sectionAmbassador.platforms', {
    returnObjects: true,
  }) as string[];

  return (
    <section id="SectionAmbassador" className="my-20 px-2 py-4">
      <h2 className="text-3xl font-bold text-center">
        {t('sectionAmbassador.title')}
      </h2>

      <div className="p-2 text-center text-gray-500">
        {t('sectionAmbassador.subtitle')}
      </div>

      <div
        className={clsx(
          'mt-4 p-8 max-w-2xl mx-auto',
          'bg-white dark:bg-gray-800',
          'border border-gray-300 dark:border-gray-700',
          'rounded-2xl shadow-md'
        )}
      >
        {/* 活動內容 */}
        <div className="mb-8">
          <h3
            className={clsx(
              'text-xl font-semibold mb-2',
              'text-blue-700 dark:text-blue-300'
            )}
          >
            🎁 {t('sectionAmbassador.titleCampaign')}
          </h3>
          <ul className="text-gray-800 dark:text-gray-200 space-y-2 pl-2">
            {campian.map((item, i) => (
              <li key={i}>✔ {item}</li>
            ))}
          </ul>
        </div>

        {/* 活動規則 */}
        <div className="mb-8">
          <h3
            className={clsx(
              'text-xl font-semibold mb-2',
              'text-blue-700 dark:text-blue-300'
            )}
          >
            📋 {t('sectionAmbassador.titleRules')}
          </h3>
          <ul className="text-gray-800 dark:text-gray-200 space-y-2 pl-2">
            {rules.map((item, i) => (
              <li key={i}>☉ {item}</li>
            ))}
          </ul>
        </div>

        {/* 支援平台 */}
        <div className="mb-4">
          <h3
            className={clsx(
              'text-xl font-semibold mb-2',
              'text-blue-700 dark:text-blue-300'
            )}
          >
            🧩 {t('sectionAmbassador.titlePlatforms')}
          </h3>
          <ul className="text-gray-800 dark:text-gray-200 space-y-2 pl-2">
            {platforms.map((p, i) => (
              <li key={i}>★ {p}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA */}
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
          {t('sectionAmbassador.cta')}
        </a>
      </div>
    </section>
  );
}
