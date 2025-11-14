import clsx from 'clsx';

export function SectionGetStart() {
  const steps = [
    {
      title: '確認資格',
      items: [
        '年滿 18 歲',
        '持有支援 NFC 晶片掃描的護照',
        '居住在 UR 服務支援的國家 (查詢連結在下面)',
        '非美國人',
      ],
    },
    {
      title: '註冊 UR 帳戶',
      items: [
        '使用 Google 或 Email 註冊',
        '✔ 輸入正確的驗證碼，驗証成功即可建立帳號',
      ],
    },
    {
      title: '完成 KYC',
      items: ['填寫問卷', 'GPS 定位', '護照 NFC 掃描', '人臉驗證'],
    },
    {
      title: '等待審核',
      items: [
        '通常 5 分鐘至幾小時，最長 3 個工作日',
        '✔ 完成 KYC 審核後即可獲得瑞士銀行帳戶',
      ],
    },
    {
      title: '啟動帳號（領取 Debit Card 卡號）',
      items: ['存入至少等值 5 美金的 USDC', '✔ 可取得 Debit Card 卡號'],
    },
  ];

  return (
    <section id="SectionGetStart" className="my-20 py-4 px-2">
      <h2 className="text-3xl font-bold text-center">啟用 UR 帳號的步驟</h2>

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

      {/* 🌟 New CTA Button */}
      <div className="text-center mt-6">
        <a
          href="https://docs.ur.app/hc/en-us/articles/12862724456207-Countries-and-Territories-Supported-By-UR"
          target="_blank"
          className={clsx(
            'inline-block px-6 py-3 rounded-xl font-semibold mt-2',
            'bg-blue-600 text-white hover:bg-blue-700',
            'dark:bg-blue-500 dark:hover:bg-blue-400',
            'shadow'
          )}
        >
          查詢 UR 服務支援的國家與地區列表
        </a>
      </div>
    </section>
  );
}
