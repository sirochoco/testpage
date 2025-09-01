
'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-['Pacifico'] text-xl text-pink-400 mb-4">美しの鍼灸院</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              女性のための上質な鍼灸治療で、お一人お一人の美と健康を丁寧にサポート。
              優雅な空間で心身ともにリフレッシュしていただけます。
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-pink-300">院内情報</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-pink-400 transition-colors cursor-pointer">
                  院について
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-gray-300 hover:text-pink-400 transition-colors cursor-pointer">
                  施術メニュー・料金
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-300 hover:text-pink-400 transition-colors cursor-pointer">
                  お客様の声
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-pink-300">サポート</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-pink-400 transition-colors cursor-pointer">
                  よくある質問
                </Link>
              </li>
              <li>
                <Link href="/access" className="text-gray-300 hover:text-pink-400 transition-colors cursor-pointer">
                  アクセス
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-pink-400 transition-colors cursor-pointer">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-pink-300">お問い合わせ</h4>
            <div className="space-y-2 text-sm">
              <p className="text-gray-300">
                <i className="ri-phone-line w-4 h-4 inline-flex items-center justify-center mr-2 text-pink-400"></i>
                03-1234-5678
              </p>
              <p className="text-gray-300">
                <i className="ri-mail-line w-4 h-4 inline-flex items-center justify-center mr-2 text-pink-400"></i>
                info@utsukushi-acupuncture.com
              </p>
              <p className="text-gray-300">
                <i className="ri-map-pin-line w-4 h-4 inline-flex items-center justify-center mr-2 text-pink-400"></i>
                東京都〇〇区〇〇1-2-3
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 美しの鍼灸院. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
