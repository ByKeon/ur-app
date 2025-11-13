const faqList = [
  { q: "什麼是 KYC 驗證？", a: "KYC 是身份驗證流程，確保合規與安全。" },
  { q: "需要哪些文件？", a: "有效的生物護照（帶晶片）即可。" },
  { q: "驗證需要多久？", a: "約15分鐘至3個工作日。" },
  { q: "常見失敗原因？", a: "證件模糊、地區不支援、人臉辨識失敗等。" },
];

export default function FAQSection() {
  return (
    <section id="faq" className="bg-gray-50 py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">常見問題（FAQ）</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {faqList.map((f, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold text-blue-800 mb-2">{f.q}</h3>
            <p className="text-gray-600">{f.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
