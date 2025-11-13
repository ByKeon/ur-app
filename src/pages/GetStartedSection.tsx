export default function GetStartedSection() {
  const steps = [
    { title: "確認資格", desc: "年滿18歲、持有晶片護照、居住於支持地區。" },
    { title: "註冊帳戶", desc: "使用 Google 或 Email 註冊 UR 帳號，並輸入驗證碼。" },
    { title: "完成 KYC", desc: "掃描護照晶片、開啟定位、進行人臉驗證。" },
    { title: "等待審核", desc: "通常需 15 分鐘至數小時，最長 3 個工作日。" },
  ];

  return (
    <section id="getstarted" className="py-20 px-6 max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-10 text-blue-800">開始使用 UR 帳戶</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {steps.map((s, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">{i + 1}. {s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
