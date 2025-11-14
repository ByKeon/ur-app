import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

export function SectionGetStart() {
  const { t } = useTranslation();

  const steps = t('sectionGetStart.steps', {
    returnObjects: true,
  }) as {
    title: string;
    items: string[];
  }[];

  return (
    <section id="SectionGetStart" className="my-20 py-4 px-2">
      <h2 className="text-3xl font-bold text-center">
        {t('sectionGetStart.title')}
      </h2>

      <div className="mt-8 max-w-xl mx-auto flex flex-col items-center space-y-4">
        {steps.map((s, i) => (
          <div key={i} className="w-full flex flex-col items-center">
            <div
              className={clsx(
                'p-6 w-full',
                'bg-white dark:bg-gray-800',
                'border border-gray-300 dark:border-gray-700',
                'shadow rounded-xl'
              )}
            >
              <h3
                className={clsx(
                  'text-xl font-semibold mb-2',
                  'text-blue-700 dark:text-blue-300'
                )}
              >
                {i + 1}. {s.title}
              </h3>

              <ul className="space-y-1">
                {s.items.map((item, j) => (
                  <li key={j} className="text-gray-800 dark:text-gray-200">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>

            {i < steps.length - 1 && (
              <div className="text-gray-500 text-3xl mt-4">↓</div>
            )}
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center mt-6">
        <a
          href="https://docs.ur.app/hc/en-us/articles/12862724456207-Countries-and-Territories-Supported-By-UR"
          target="_blank"
          className={clsx(
            'inline-block px-6 py-3 rounded-xl font-semibold mt-2 transition-colors',
            'text-gray-900 bg-yellow-500 hover:bg-yellow-600',
            'dark:bg-yellow-500 dark:hover:bg-yellow-400',
            'shadow-sm hover:shadow'
          )}
        >
          {t('sectionGetStart.cta')}
        </a>
      </div>
    </section>
  );
}
