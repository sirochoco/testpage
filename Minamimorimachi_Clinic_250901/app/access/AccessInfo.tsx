
'use client';

export default function AccessInfo() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">アクセス情報</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-pink-50/50 to-rose-50/50 rounded-xl p-8 border border-pink-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <i className="ri-map-pin-line w-8 h-8 flex items-center justify-center text-pink-600 mr-3 text-2xl"></i>
                基本情報
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="ri-home-line w-5 h-5 flex items-center justify-center text-pink-600 mr-3 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-800">院名</h4>
                    <p className="text-gray-600">美しの鍼灸院</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="ri-map-pin-2-line w-5 h-5 flex items-center justify-center text-pink-600 mr-3 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-800">住所</h4>
                    <p className="text-gray-600">〒123-4567<br />東京都〇〇区〇〇町1-2-3 〇〇ビル2F</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="ri-phone-line w-5 h-5 flex items-center justify-center text-pink-600 mr-3 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-800">電話番号</h4>
                    <p className="text-gray-600">03-1234-5678</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="ri-mail-line w-5 h-5 flex items-center justify-center text-pink-600 mr-3 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-800">メール</h4>
                    <p className="text-gray-600">info@utsukushi-acupuncture.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-50/50 to-rose-50/50 rounded-xl p-8 border border-pink-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <i className="ri-train-line w-8 h-8 flex items-center justify-center text-pink-600 mr-3 text-2xl"></i>
                最寄り駅からのアクセス
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-pink-100">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center mr-4">
                      <i className="ri-train-line w-5 h-5 flex items-center justify-center text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">JR〇〇線 〇〇駅</h4>
                      <p className="text-sm text-gray-600">南口より</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-pink-600">徒歩3分</p>
                    <p className="text-xs text-gray-500">約200m</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-pink-100">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center mr-4">
                      <i className="ri-subway-line w-5 h-5 flex items-center justify-center text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">地下鉄〇〇線 〇〇駅</h4>
                      <p className="text-sm text-gray-600">1番出口より</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-pink-600">徒歩5分</p>
                    <p className="text-xs text-gray-500">約350m</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-50/50 to-rose-50/50 rounded-xl p-8 border border-pink-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <i className="ri-car-line w-8 h-8 flex items-center justify-center text-pink-600 mr-3 text-2xl"></i>
                駐車場のご案内
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-white rounded-lg border border-pink-100">
                  <h4 className="font-semibold text-gray-800 mb-2">専用駐車場</h4>
                  <p className="text-sm text-gray-600 mb-2">2台分完備（無料）</p>
                  <p className="text-xs text-gray-500">ビル裏手に専用駐車場をご用意しております</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-pink-100">
                  <h4 className="font-semibold text-gray-800 mb-2">近隣コインパーキング</h4>
                  <p className="text-sm text-gray-600 mb-2">徒歩1分圏内に複数あり</p>
                  <p className="text-xs text-gray-500">満車の場合はお電話でご案内いたします</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-gradient-to-br from-pink-50/50 to-rose-50/50 rounded-xl p-8 mb-8 border border-pink-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <i className="ri-map-2-line w-8 h-8 flex items-center justify-center text-pink-600 mr-3 text-2xl"></i>
                周辺マップ
              </h3>
              <div className="bg-white rounded-lg p-4 border border-pink-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.0273875799853!2d139.69171731525243!3d35.689487080198346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b563b00109f%3A0x337328def1e2ab26!2z5paw5a6_6aeF!5e0!3m2!1sja!2sjp!4v1647847234567!5m2!1sja!2sjp"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-50/50 to-rose-50/50 rounded-xl p-8 border border-pink-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <i className="ri-building-line w-8 h-8 flex items-center justify-center text-pink-600 mr-3 text-2xl"></i>
                周辺の目印
              </h3>
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-white rounded-lg border border-pink-100">
                  <i className="ri-bank-line w-6 h-6 flex items-center justify-center text-pink-600 mr-3"></i>
                  <span className="text-gray-700">〇〇銀行 〇〇支店（1F）</span>
                </div>
                <div className="flex items-center p-3 bg-white rounded-lg border border-pink-100">
                  <i className="ri-hospital-line w-6 h-6 flex items-center justify-center text-pink-600 mr-3"></i>
                  <span className="text-gray-700">〇〇病院（向かい側）</span>
                </div>
                <div className="flex items-center p-3 bg-white rounded-lg border border-pink-100">
                  <i className="ri-store-line w-6 h-6 flex items-center justify-center text-pink-600 mr-3"></i>
                  <span className="text-gray-700">〇〇コンビニ（隣のビル）</span>
                </div>
                <div className="flex items-center p-3 bg-white rounded-lg border border-pink-100">
                  <i className="ri-restaurant-line w-6 h-6 flex items-center justify-center text-pink-600 mr-3"></i>
                  <span className="text-gray-700">〇〇カフェ（同じ通り）</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
