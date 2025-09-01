
'use client';

export default function ContactInfo() {
  const contactMethods = [
    {
      icon: 'ri-phone-line',
      title: '電話でのお問い合わせ',
      info: '03-1234-5678',
      description: '平日 9:00-20:00 / 土日祝 9:00-17:00',
      link: 'tel:03-1234-5678',
      color: 'from-pink-400 to-rose-400'
    },
    {
      icon: 'ri-mail-line',
      title: 'メールでのお問い合わせ',
      info: 'info@utsukushi-acupuncture.com',
      description: '24時間受付・24時間以内返信',
      link: 'mailto:info@utsukushi-acupuncture.com',
      color: 'from-pink-400 to-rose-400'
    },
    {
      icon: 'ri-calendar-check-line',
      title: 'オンライン予約',
      info: 'WEB予約システム',
      description: '24時間いつでも予約可能',
      link: '/booking',
      color: 'from-pink-400 to-rose-400'
    }
  ];

  const businessInfo = [
    { label: '院名', value: '美しの鍼灸院' },
    { label: '住所', value: '〒123-4567 東京都〇〇区〇〇町1-2-3 〇〇ビル2F' },
    { label: '最寄り駅', value: 'JR〇〇線 〇〇駅 南口より徒歩3分' },
    { label: '駐車場', value: '専用駐車場2台完備（無料）' },
    { label: '営業時間', value: '平日 9:00-20:00 / 土日祝 9:00-17:00' },
    { label: '定休日', value: '水曜日' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">お問い合わせ・アクセス情報</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto mb-6"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* 連絡方法 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-gradient-to-br from-pink-50/50 to-rose-50/50 rounded-xl p-6 text-center border border-pink-100 hover:shadow-lg transition-shadow">
                <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <i className={`${method.icon} w-8 h-8 flex items-center justify-center text-white text-2xl`}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{method.title}</h3>
                <p className="text-pink-600 font-semibold mb-2">{method.info}</p>
                <p className="text-sm text-gray-600 mb-4">{method.description}</p>
                <a 
                  href={method.link}
                  className={`inline-block bg-gradient-to-r ${method.color} text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-md transition-all duration-300 cursor-pointer whitespace-nowrap`}
                >
                  {index === 0 ? '電話をかける' : index === 1 ? 'メールを送る' : '予約ページへ'}
                </a>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 院情報 */}
            <div className="bg-gradient-to-br from-pink-50/50 to-rose-50/50 rounded-2xl p-8 border border-pink-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <i className="ri-information-line w-8 h-8 flex items-center justify-center text-pink-600 mr-3 text-2xl"></i>
                院情報
              </h3>
              <div className="space-y-4">
                {businessInfo.map((info, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:items-center border-b border-pink-100 pb-4">
                    <span className="text-gray-600 font-medium mb-1 sm:mb-0 sm:w-24 flex-shrink-0">{info.label}:</span>
                    <span className="text-gray-800 font-semibold">{info.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 地図 */}
            <div className="bg-gradient-to-br from-pink-50/50 to-rose-50/50 rounded-2xl p-8 border border-pink-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <i className="ri-map-pin-line w-8 h-8 flex items-center justify-center text-pink-600 mr-3 text-2xl"></i>
                アクセスマップ
              </h3>
              <div className="bg-white rounded-xl overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.0273875799853!2d139.69171731525243!3d35.689487080198346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b563b00109f%3A0x337328def1e2ab26!2z5paw5a6_6aeF!5e0!3m2!1sja!2sjp!4v1647847234567!5m2!1sja!2sjp"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="mt-4 flex gap-3">
                <button className="flex-1 bg-gradient-to-r from-pink-400 to-rose-400 text-white px-4 py-2 rounded-lg text-sm hover:from-pink-500 hover:to-rose-500 transition-all duration-300 cursor-pointer whitespace-nowrap">
                  <i className="ri-navigation-line w-4 h-4 flex items-center justify-center mr-1"></i>
                  ナビで開く
                </button>
                <button className="flex-1 border border-pink-400 text-pink-500 px-4 py-2 rounded-lg text-sm hover:bg-pink-50 transition-colors cursor-pointer whitespace-nowrap">
                  <i className="ri-share-line w-4 h-4 flex items-center justify-center mr-1"></i>
                  地図を共有
                </button>
              </div>
            </div>
          </div>

          {/* よくある質問リンク */}
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg text-center border border-pink-100">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-question-line w-8 h-8 flex items-center justify-center text-pink-600 text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">ご質問はございませんか？</h3>
            <p className="text-gray-600 mb-8">
              よくいただくご質問をまとめました。<br />
              まずはこちらをご確認ください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/faq" className="bg-gradient-to-r from-pink-400 to-rose-400 text-white px-8 py-3 rounded-full hover:from-pink-500 hover:to-rose-500 transition-all duration-300 shadow-md cursor-pointer whitespace-nowrap">
                <i className="ri-question-answer-line w-5 h-5 flex items-center justify-center mr-2"></i>
                よくある質問を見る
              </a>
              <a href="/menu" className="border-2 border-pink-400 text-pink-500 px-8 py-3 rounded-full hover:bg-pink-50 transition-colors cursor-pointer whitespace-nowrap">
                <i className="ri-list-check-line w-5 h-5 flex items-center justify-center mr-2"></i>
                施術メニューを見る
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
