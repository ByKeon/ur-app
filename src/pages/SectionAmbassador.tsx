import clsx from 'clsx';

export function SectionAmbassador() {
  const campian = [
    '用戶註冊並完成 KYC 後',
    '首月於指定相關平台的消費可獲得 20% 返現。',
    '次月於指定相關平台的消費可獲得 10% 返現。',
  ];

  const rules = [
    '活動期限自 2025-11-01 起至 2025-12-31 止',
    '僅透過大使邀請碼或合作渠道註冊的用戶可獲得返現。',
    '獎勵返現將在次月底前發放；',
    '若有退款或退單，將按比例扣回返現。',
    '高階方案或年費訂閱，每位用戶最高可獲得 10 美元返現。',
    '須於活動期間完成訂閱符合條件的工具。',
    '任何虛假、濫用或異常交易行為將被取消資格。',
    'UR 保留活動異動、有效交易判定以及風控之最終解釋權。',
  ];

  const platforms = [
    'ChatGPT Plus / Claude Pro',
    'GitHub Copilot',
    'Notion AI / Canva Pro',
    'Replit / Cursor / Midjourney',
    'RunPod / HuggingFace / Poe',
    'Netflix / Spotify / Disney+',
    'Apple TV+ / Amazon Prime Video',
  ];

  return (
    <section id="SectionAmbassador" className="my-20 px-2 py-4">
      <h2 className="text-3xl font-bold text-center">大使限定推廣返現活動</h2>
      <div className="p-2 text-center text-gray-500">
        (訂閱指定平台，獲得額外返現)
      </div>

      <div className="mt-4 max-w-2xl mx-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md p-8 transition-colors">
        <div className="mb-8">
          <h3
            className={clsx(
              'text-xl font-semibold mb-2',
              'text-blue-700 dark:text-blue-300'
            )}
          >
            🎁 活動內容
          </h3>
          <ul className="text-gray-800 dark:text-gray-200 space-y-2 pl-2">
            {campian.map((item, i) => (
              <li key={i}>✔ {item}</li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h3
            className={clsx(
              'text-xl font-semibold mb-2',
              'text-blue-700 dark:text-blue-300'
            )}
          >
            📋 活動規則
          </h3>
          <ul className="text-gray-800 dark:text-gray-200 space-y-2 pl-2">
            {rules.map((item, i) => (
              <li key={i}>☉ {item}</li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <h3
            className={clsx(
              'text-xl font-semibold mb-2',
              'text-blue-700 dark:text-blue-300'
            )}
          >
            🧩 推廣活動支援平台
          </h3>
          <ul className="text-gray-800 dark:text-gray-200 space-y-2 pl-2">
            {platforms.map((p, i) => (
              <li key={i}>★ {p}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA 按鈕（改為新 style） */}
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
          使用大使邀請碼(urkeon)，馬上去註冊參加活動
        </a>
      </div>
    </section>
  );
}
