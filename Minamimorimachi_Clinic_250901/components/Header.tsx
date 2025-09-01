
'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b-2 border-pink-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <span className="font-['Pacifico'] text-2xl text-pink-500">美しの鍼灸院</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-pink-500 transition-colors cursor-pointer">
              ホーム
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-pink-500 transition-colors cursor-pointer">
              院について
            </Link>
            <Link href="/menu" className="text-gray-700 hover:text-pink-500 transition-colors cursor-pointer">
              施術メニュー
            </Link>
            <Link href="/testimonials" className="text-gray-700 hover:text-pink-500 transition-colors cursor-pointer">
              お客様の声
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-pink-500 transition-colors cursor-pointer">
              よくある質問
            </Link>
            <Link href="/access" className="text-gray-700 hover:text-pink-500 transition-colors cursor-pointer">
              アクセス
            </Link>
            <Link href="/contact" className="bg-gradient-to-r from-pink-400 to-rose-400 text-white px-6 py-2 rounded-full hover:from-pink-500 hover:to-rose-500 transition-all duration-300 shadow-md cursor-pointer whitespace-nowrap">
              ご予約・お問い合わせ
            </Link>
          </nav>

          <button 
            className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="ri-menu-line text-xl text-pink-500"></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="py-4 space-y-2">
              <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-pink-50 cursor-pointer">
                ホーム
              </Link>
              <Link href="/about" className="block px-4 py-2 text-gray-700 hover:bg-pink-50 cursor-pointer">
                院について
              </Link>
              <Link href="/menu" className="block px-4 py-2 text-gray-700 hover:bg-pink-50 cursor-pointer">
                施術メニュー
              </Link>
              <Link href="/testimonials" className="block px-4 py-2 text-gray-700 hover:bg-pink-50 cursor-pointer">
                お客様の声
              </Link>
              <Link href="/faq" className="block px-4 py-2 text-gray-700 hover:bg-pink-50 cursor-pointer">
                よくある質問
              </Link>
              <Link href="/access" className="block px-4 py-2 text-gray-700 hover:bg-pink-50 cursor-pointer">
                アクセス
              </Link>
              <Link href="/contact" className="block px-4 py-2 text-pink-500 font-semibold cursor-pointer">
                ご予約・お問い合わせ
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
