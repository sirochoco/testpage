
'use client';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-cover bg-center bg-no-repeat" 
             style={{
               backgroundImage: `linear-gradient(rgba(244, 114, 182, 0.1), rgba(236, 72, 153, 0.2)), url('https://readdy.ai/api/search-image?query=Elegant%20feminine%20beauty%20clinic%20interior%20with%20soft%20pink%20accents%2C%20luxurious%20white%20treatment%20bed%2C%20delicate%20floral%20arrangements%2C%20warm%20rose%20gold%20lighting%2C%20sophisticated%20wellness%20spa%20atmosphere%2C%20serene%20Japanese%20aesthetic%20with%20cherry%20blossom%20elements%2C%20peaceful%20healing%20environment&width=1920&height=1080&seq=hero-feminine&orientation=landscape')`
             }}>
      <div className="container mx-auto px-4 h-screen flex items-center">
        <div className="w-full max-w-2xl text-gray-800">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            美しく健やかな毎日を<br />
            <span className="text-pink-500 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">美しの鍼灸院</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed text-gray-700">
            女性のための上質な鍼灸治療で、お一人お一人の美と健康を丁寧にサポート。<br />
            美容鍼から婦人科系のお悩みまで、優雅な空間で心身ともにリフレッシュしませんか。
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="bg-gradient-to-r from-pink-400 to-rose-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-pink-500 hover:to-rose-500 transition-all duration-300 shadow-lg text-center cursor-pointer whitespace-nowrap">
              今すぐ予約する
            </Link>
            <Link href="/menu" className="border-2 border-pink-400 text-pink-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-50 transition-colors text-center cursor-pointer whitespace-nowrap">
              施術メニューを見る
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="ri-arrow-down-line text-pink-400 text-2xl w-6 h-6 flex items-center justify-center"></i>
      </div>
    </section>
  );
}
