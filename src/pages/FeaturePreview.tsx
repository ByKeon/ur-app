const features = [
  {
    icon: "💳",
    title: "多幣種銀行帳戶",
    desc: "提供瑞士 IBAN 帳戶，支援 EUR、USD、CHF、RMB、SGD、HKD、JPY。",
  },
  {
    icon: "🔗",
    title: "鏈上代幣化存款",
    desc: "支援 Mantle、Arbitrum、Ethereum、Base 等多鏈的法幣代幣轉帳。",
  },
  {
    icon: "💰",
    title: "收益帳戶 (USDe)",
    desc: "持有 USDe 即可自動獲得收益，並可直接用於消費與支付。",
  },
];

export default function FeaturePreview() {
  return (
    <section id="features" className="bg-gray-50 py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">UR 功能介紹</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map(f => (
          <div key={f.title} className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
            <div className="text-4xl mb-4">{f.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
