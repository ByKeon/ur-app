export default function HeroSection() {
  return (
    <section id="hero" className="bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white py-28 px-6 text-center">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        UR — 智能金融新世代
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90">
        連接 Web3 數位資產與傳統金融體系，讓你的錢自由流動於鏈上與銀行之間。
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="https://ur.app/" target="_blank"
          className="bg-white text-blue-800 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition">
          前往 Web 版
        </a>
        <a href="#" className="bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-xl hover:bg-yellow-300 transition">
          App Store
        </a>
        <a href="#" className="bg-green-400 text-blue-900 font-semibold px-6 py-3 rounded-xl hover:bg-green-300 transition">
          Google Play
        </a>
      </div>
    </section>
  );
}
