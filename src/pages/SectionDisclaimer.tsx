import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

export function SectionDisclaimer() {
  const { t } = useTranslation();

  // Telegram 官方 SVG ICON（可複用）
  const TelegramIconB = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="inline-block w-4 h-4 mr-1 text-blue-500"
    >
      <path
        d="M12 0C5.37258 0 0 5.37267 0 12C0 18.6274 5.37258 24 12 24C18.6274
      24 24 18.6274 24 12C24 5.37267 18.6274 0 12 0ZM17.7071 8.70711L15.4142
      17.4142C15.1894 18.2681 14.6446 18.4871 13.8909 18.0837L10.609 15.609L9
      17C8.90002 17.1 8.8 17.2 8.6 17.2L8.8 14L15.2 9.2C15.5 9 15.1 8.9 14.8 9.1L7.6
      13L4 11.9C3.1 11.6 3.1 10.9 4.2 10.5L17 6C17.7 5.7 18.3 6.2 17.7 8.7H17.7071Z"
      />
    </svg>
  );

  // 黃色版本（華語討論區）
  const TelegramIconY = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="inline-block w-4 h-4 mr-1 text-yellow-400"
    >
      <path
        d="M12 0C5.37258 0 0 5.37267 0 12C0 18.6274 5.37258 24 12 24C18.6274
      24 24 18.6274 24 12C24 5.37267 18.6274 0 12 0ZM17.7071 8.70711L15.4142
      17.4142C15.1894 18.2681 14.6446 18.4871 13.8909 18.0837L10.609 15.609L9
      17C8.90002 17.1 8.8 17.2 8.6 17.2L8.8 14L15.2 9.2C15.5 9 15.1 8.9 14.8 9.1L7.6
      13L4 11.9C3.1 11.6 3.1 10.9 4.2 10.5L17 6C17.7 5.7 18.3 6.2 17.7 8.7H17.7071Z"
      />
    </svg>
  );

  return (
    <section className="px-4 py-8 text-center">
      {/* 灰底卡片 */}
      <div
        className={clsx(
          'max-w-3xl mx-auto p-6 rounded-2xl shadow',
          'bg-white dark:bg-gray-800',
          'text-gray-800 dark:text-gray-200',
          'border border-gray-300 dark:border-gray-700'
        )}
      >
        {/* Telegram 區塊 */}
        <div className="text-left">
          {t('sectionDisclaimer.tgTitle')}
          <br />

          <a
            href="https://t.me/UR_APP_GlobalX"
            target="_blank"
            className="text-blue-500 underline block mt-2"
          >
            {TelegramIconB} {t('sectionDisclaimer.tgGlobal')}：
            https://t.me/UR_APP_GlobalX
          </a>

          <a
            href="https://t.me/UR_MandarinX"
            target="_blank"
            className="text-blue-500 underline block mt-2"
          >
            {TelegramIconY} {t('sectionDisclaimer.tgMandarin')}：
            https://t.me/UR_MandarinX
          </a>
        </div>

        {/* 免責聲明 */}
        <div className="mt-6 text-sm text-red-500 leading-relaxed">
          {t('sectionDisclaimer.disclaimer')}{' '}
          <a
            href="https://ur.app/"
            target="_blank"
            className="text-blue-500 underline mx-1"
          >
            {t('sectionDisclaimer.officialSite')}
          </a>
          {t('sectionDisclaimer.asMain')}
        </div>
      </div>
    </section>
  );
}
