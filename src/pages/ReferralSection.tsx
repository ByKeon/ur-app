export default function ReferralSection() {
  return (
    <section id="referral" className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold text-blue-800 mb-6">
        推薦好友，共同獲得 $5 奬勵
      </h2>

      <p className="text-gray-700 max-w-xl mx-auto leading-relaxed mb-8">
        邀請好友使用你的推薦連結或邀請碼註冊 UR，
        當好友完成 KYC 並首次消費 ≥ $5 時，你與好友都將獲得 $5 奬勵。
      </p>

      <a
        href="https://get.ur.app/my/referral-dashboard"
        target="_blank"
        className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
      >
        前往推薦面板
      </a>
    </section>
  );
}
