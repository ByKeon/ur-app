export default function GetStartedSection() {
  const steps = [
    { title: "確認資格", desc: "年滿18歲、晶片護照、居住在支持國家、非美國人等。" },
    { title: "註冊 UR 帳戶", desc: "以 Google 或 Email 註冊並輸入驗證碼。" },
    { title: "完成 KYC", desc: "GPS 定位 → 問卷 → 護照 NFC 掃描 → 人臉驗證。" },
    { title: "等待審核", desc: "通常 15 分鐘至幾小時，最長 3 個工作日。" },
  ];

  return (
    <section id="getstarted" className="py-20 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">
        啟用 UR 帳號的步驟
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {steps.map((s, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">{i + 1}. {s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
