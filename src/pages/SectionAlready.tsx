export function SectionAlready() {
  const alreadyServices = [
    {
      title: '瑞士銀行帳戶',
      points: [
        '提供瑞士銀行的 IBAN 帳號',
        '支援貨幣 USD/EUR/CHF/RMB/SGD/HKD/JPY',
        '支援 SWIFT / SEPA / SIC 匯款出金',
      ],
    },
    {
      title: 'Mastercard Debit 卡號',
      points: [
        '可於全球 Mastercard 通路刷卡',
        '可綁定 PayPal 帳號',
        '直接使用法幣或 USDe 消費',
      ],
    },
    {
      title: '即時外匯服務（Forex）',
      points: [
        '支援貨幣 USD/EUR/CHF/RMB/SGD/HKD/JPY',
        '任意貨幣對，皆可於 App 內依照匯率即時兌換',
      ],
    },
    {
      title: '內建區塊鏈錢包',
      points: [
        '支持 ETH / USDC / USDT / USDe',
        '支持 Ethereum / Mantle / Base / Arbitrum',
      ],
    },
    {
      title: '鏈上代幣化存款',
      points: [
        'UR 用戶之間多種法幣可直接轉帳(零手續費)',
        '每枚代幣都於瑞士銀行中擁有對應的法幣儲備',
      ],
    },
    {
      title: 'USDe 自動收益帳戶',
      points: [
        '帳號內持有 USDe 即可自動產生利息',
        '自動於每週特定時間發放收益入帳',
      ],
    },
  ];

  return (
    <section id="SectionAlready" className="px-2 py-4">
      <h2
        className="text-3xl font-bold text-center
          text-gray-900 dark:text-gray-100"
      >
        UR 目前已提供的服務
      </h2>

      <div className="p-2 text-center text-gray-500">
        (註冊、完全 KYC 並啟動帳號即可擁有以下全部功能)
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto mt-4">
        {alreadyServices.map((s) => (
          <div
            key={s.title}
            className="p-6 rounded-xl shadow
              bg-white dark:bg-gray-800
              text-gray-800 dark:text-gray-200
              border border-gray-300 dark:border-gray-700"
          >
            <h3
              className="text-xl font-semibold mb-4
                text-blue-700 dark:text-blue-300"
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
