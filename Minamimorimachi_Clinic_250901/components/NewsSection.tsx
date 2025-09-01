
'use client';
import Link from 'next/link';

export default function NewsSection() {
  const news = [
    {
      date: '2024.01.15',
      category: 'お知らせ',
      title: '新年のご挨拶と診療時間のお知らせ',
      isNew: true
    },
    {
      date: '2024.01.10',
      category: 'キャンペーン',
      title: '美容鍼初回限定20%オフキャンペーン実施中',
      isNew: true
    },
    {
      date: '2024.01.05',
      category: 'お知らせ',
      title: '1月の休診日についてのお知らせ',
      isNew: false
    },
    {
      date: '2023.12.28',
      category: 'お知らせ',
      title: '年末年始の診療時間について',
      isNew: false
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">院からのお知らせ</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto mb-4"></div>
          <p className="text-gray-600">最新情報をお届けします</p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-pink-100">
          {news.map((item, index) => (
            <div key={index} className="border-b border-pink-100 last:border-b-0 p-6 hover:bg-pink-50/30 transition-colors cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <span className="text-sm text-gray-500">{item.date}</span>
                </div>
                <div className="flex-shrink-0">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    item.category === 'キャンペーン' 
                      ? 'bg-gradient-to-r from-rose-100 to-pink-100 text-rose-700' 
                      : 'bg-gradient-to-r from-pink-100 to-rose-100 text-pink-700'
                  }`}>
                    {item.category}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {item.isNew && (
                      <span className="inline-block bg-gradient-to-r from-rose-400 to-pink-400 text-white text-xs px-2 py-1 rounded-full mr-2">
                        NEW
                      </span>
                    )}
                    {item.title}
                  </h3>
                </div>
                <div className="flex-shrink-0">
                  <i className="ri-arrow-right-line text-pink-400 w-5 h-5 flex items-center justify-center"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link href="/news" className="inline-block bg-gradient-to-r from-pink-400 to-rose-400 text-white px-6 py-3 rounded-full hover:from-pink-500 hover:to-rose-500 transition-all duration-300 shadow-md cursor-pointer whitespace-nowrap">
            お知らせ一覧を見る
          </Link>
        </div>
      </div>
    </section>
  );
}
