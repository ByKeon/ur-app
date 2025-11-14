import clsx from 'clsx';

export function SectionUpcoming() {
  const upcoming = [
    '法幣直接轉換成加密資產 (On-ramp) 服務',
    '更多區塊鏈的網路支援: TON, Solana',
    '銀行法幣匯款出金支援 USD',
    '銀行法幣匯款出金支援更多國家地區',
    'USDe 授權免 MNT Gas (等待合約升級)',
  ];

  return (
    <section id="SectionUpcoming" className="my-20 px-2 py-4">
      <h2 className="text-3xl font-bold text-center">UR 未來將推出的服務</h2>

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
