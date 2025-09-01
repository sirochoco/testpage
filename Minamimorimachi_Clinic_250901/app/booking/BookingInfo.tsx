
'use client';

export default function BookingInfo() {
  const testimonials = [
    {
      name: "田中美咲さん",
      age: "30代女性",
      treatment: "オンライン予約利用",
      comment: "24時間いつでも予約できるので、忙しい私にはとても便利です。カレンダーで空き状況も分かりやすく、スムーズに予約できました。",
      rating: 5
    },
    {
      name: "佐藤恵子さん",
      age: "40代女性", 
      treatment: "WEB予約システム",
      comment: "電話が苦手なので、WEBで予約できるのは本当に助かります。予約確認メールも届くので安心です。",
      rating: 5
    },
    {
      name: "山田麻衣さん",
      age: "20代女性",
      treatment: "簡単予約フォーム",
      comment: "フォームが分かりやすくて、3分ほどで予約完了できました。症状も事前に伝えられるので、当日もスムーズでした。",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* 予約案内 */}
          <div className="bg-gradient-to-br from-pink-50/50 to-rose-50/50 rounded-2xl p-8 mb-12 border border-pink-100">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">オンライン予約について</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto mb-6"></div>
              <p className="text-gray-600">24時間いつでもご予約いただけます</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-calendar-check-line w-10 h-10 flex items-center justify-center text-pink-600 text-2xl"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">24時間予約受付</h3>
                <p className="text-sm text-gray-600">夜中でも早朝でも、いつでもご予約可能です</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-smartphone-line w-10 h-10 flex items-center justify-center text-pink-600 text-2xl"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">スマホで簡単</h3>
                <p className="text-sm text-gray-600">スマホから数タップで予約完了</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-mail-check-line w-10 h-10 flex items-center justify-center text-pink-600 text-2xl"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">確認メール送信</h3>
                <p className="text-sm text-gray-600">予約内容を確認メールでお送りします</p>
              </div>
            </div>
          </div>

          {/* 営業時間・注意事項 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-pink-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <i className="ri-time-line w-6 h-6 flex items-center justify-center text-pink-600 mr-3"></i>
                営業時間
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between py-2 border-b border-pink-100">
                  <span className="text-gray-600">平日（月・火・木・金）</span>
                  <span className="font-semibold text-gray-800">9:00 - 20:00</span>
                </div>
                <div className="flex justify-between py-2 border-b border-pink-100">
                  <span className="text-gray-600">土日祝日</span>
                  <span className="font-semibold text-gray-800">9:00 - 17:00</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">定休日</span>
                  <span className="font-semibold text-pink-600">水曜日</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-pink-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <i className="ri-information-line w-6 h-6 flex items-center justify-center text-pink-600 mr-3"></i>
                ご予約時の注意事項
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <i className="ri-check-line w-4 h-4 flex items-center justify-center text-pink-600 mt-1 mr-2"></i>
                  <span>最終受付は診療終了30分前まで</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line w-4 h-4 flex items-center justify-center text-pink-600 mt-1 mr-2"></i>
                  <span>キャンセルは前日までにお願いします</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line w-4 h-4 flex items-center justify-center text-pink-600 mt-1 mr-2"></i>
                  <span>当日の体調不良の場合はお電話ください</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line w-4 h-4 flex items-center justify-center text-pink-600 mt-1 mr-2"></i>
                  <span>初回の方は少し早めのご来院をお願いします</span>
                </li>
              </ul>
            </div>
          </div>

          {/* お客様の声 */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">オンライン予約をご利用のお客様の声</h3>
              <div className="w-16 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-pink-100">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full flex items-center justify-center mr-3">
                      <i className="ri-user-line w-6 h-6 flex items-center justify-center text-pink-600"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.age}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="ri-star-fill w-4 h-4 flex items-center justify-center text-pink-400"></i>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{testimonial.comment}</p>
                  <div className="text-xs text-pink-600 bg-pink-50 px-3 py-1 rounded-full inline-block">
                    {testimonial.treatment}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 電話予約案内 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center border border-pink-100">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-phone-line w-8 h-8 flex items-center justify-center text-pink-600 text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">お電話でのご予約も承っております</h3>
            <p className="text-gray-600 mb-8">
              WEB予約が難しい方や、直接相談したいことがある方は<br />
              お気軽にお電話ください
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:03-1234-5678" className="bg-gradient-to-r from-pink-400 to-rose-400 text-white px-8 py-3 rounded-full hover:from-pink-500 hover:to-rose-500 transition-all duration-300 shadow-md cursor-pointer whitespace-nowrap">
                <i className="ri-phone-line w-5 h-5 flex items-center justify-center mr-2"></i>
                03-1234-5678
              </a>
              <div className="border-2 border-pink-400 text-pink-500 px-8 py-3 rounded-full whitespace-nowrap">
                受付時間：営業時間と同じ
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
