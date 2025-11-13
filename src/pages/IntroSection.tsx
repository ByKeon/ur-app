export default function IntroSection() {
  return (
    <section id="intro" className="py-20 px-6 text-center max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-blue-800">關於 UR</h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        UR 是一款智能金融應用，連接 Web3 數位資產與傳統金融系統。
        提供受監管的瑞士銀行帳戶、多幣種借記卡與鏈上代幣化存款服務，
        確保合規性與原生 Web3 體驗並行。
      </p>
      <div className="flex flex-wrap justify-center gap-3 mt-4">
        {["瑞士金融科技牌照", "KYC / AML 合規", "Mantle Network 架構"].map(tag => (
          <span key={tag} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
