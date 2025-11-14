export function SectionDisclaimer() {
  return (
    <section className="px-4 py-6 text-center">
      {/* Telegram 區塊 */}
      <div className="max-w-xl mx-auto text-left text-gray-600 dark:text-gray-300">
        如有任何問題，歡迎至 Telegram 詢問：
        <br />
        {/* 一般討論區 */}
        <a
          href="https://t.me/UR_APP_GlobalX"
          target="_blank"
          className="text-blue-500 underline block mt-1"
        >
          🌐 一般討論區: https://t.me/UR_APP_GlobalX
        </a>
        {/* 華語討論區（黃色符號） */}
        <a
          href="https://t.me/UR_MandarinX"
          target="_blank"
          className="text-blue-500 underline block mt-1"
        >
          🟡 華語討論區: https://t.me/UR_MandarinX
        </a>
      </div>

      {/* 免責聲明 */}
      <div className="mt-10 text-sm text-red-500 leading-relaxed max-w-2xl p-4 mx-auto">
        本頁面如有資訊不明確時，請以主要官方網站
        <a
          href="https://ur.app/"
          target="_blank"
          className="text-blue-500 underline mx-1"
        >
          UR.APP
        </a>
        的內容為主。
      </div>
    </section>
  );
}
