import clsx from 'clsx';

export function SectionReferral() {
  const items = [
    '好友使用你的推薦連結註冊',
    '好友完成 KYC 身份驗證',
    '好友完成單筆 ≥ $5U 的消費',
    '你與好友都將獲得 $5U 奬勵',
  ];

  return (
    <section id="SectionReferral" className="my-20 py-4 px-2">
      <h2 className="text-3xl font-bold text-center">
        推薦好友，各獲 $5U 奬勵
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
          馬上去註冊，賺取 5U 獎勵
        </a>
      </div>
    </section>
  );
}
