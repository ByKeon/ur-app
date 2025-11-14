import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

export function SectionAlready() {
  const { t } = useTranslation();

  const alreadyServices = t('sectionAlready.items', {
    returnObjects: true,
  }) as {
    title: string;
    points: string[];
  }[];

  return (
    <section id="SectionAlready" className="my-20 px-2 py-4">
      <h2 className="text-3xl font-bold text-center">
        {t('sectionAlready.title')}
      </h2>

      <div className="p-2 text-center text-gray-500">
        {t('sectionAlready.subtitle')}
      </div>

      {/* Cards */}
      <div className="mt-4 grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {alreadyServices.map((s) => (
          <div
            key={s.title}
            className={clsx(
              'p-6 rounded-xl shadow',
              'bg-white dark:bg-gray-800',
              'text-gray-800 dark:text-gray-200',
              'border border-gray-300 dark:border-gray-700'
            )}
          >
            <h3
              className={clsx(
                'text-xl font-semibold mb-2',
                'text-blue-700 dark:text-blue-300'
              )}
            >
              {s.title}
            </h3>

            <ul className="space-y-2">
              {s.points.map((p, i) => (
                <li key={i}>✔ {p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
