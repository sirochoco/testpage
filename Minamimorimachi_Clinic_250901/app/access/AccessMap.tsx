
'use client';

export default function AccessMap() {
  return (
    <section className="py-16 bg-gradient-to-br from-pink-50/30 to-rose-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">詳細マップ</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            当院までのルートと周辺情報を詳しくご案内いたします。
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-pink-100">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <i className="ri-road-map-line w-8 h-8 flex items-center justify-center text-pink-600 mr-3 text-2xl"></i>
                Googleマップ
              </h3>
              <div className="rounded-xl overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.0273875799853!2d139.69171731525243!3d35.689487080198346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b563b00109f%3A0x337328def1e2ab26!2z5paw5a6_6aeF!5e0!3m2!1sja!2sjp!4v1647847234567!5m2!1sja!2sjp"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-gradient-to-r from-pink-400 to-rose-400 text-white px-6 py-3 rounded-lg hover:from-pink-500 hover:to-rose-500 transition-all duration-300 whitespace-nowrap">
                  <i className="ri-navigation-line w-5 h-5 flex items-center justify-center mr-2"></i>
                  ナビで開く
                </button>
                <button className="flex-1 border-2 border-pink-400 text-pink-500 px-6 py-3 rounded-lg hover:bg-pink-50 transition-colors whitespace-nowrap">
                  <i className="ri-share-line w-5 h-5 flex items-center justify-center mr-2"></i>
                  地図を共有
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-pink-100">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-train-line w-8 h-8 flex items-center justify-center text-pink-600 text-2xl"></i>
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2 text-center">電車でお越しの方</h4>
              <p className="text-sm text-gray-600 text-center mb-4">JR〇〇駅南口から徒歩3分</p>
              <div className="text-xs text-gray-500 space-y-1">
                <p>• 駅前大通りを直進</p>
                <p>• 〇〇銀行を右折</p>
                <p>• 2つ目の角を左折</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-pink-100">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-car-line w-8 h-8 flex items-center justify-center text-pink-600 text-2xl"></i>
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2 text-center">お車でお越しの方</h4>
              <p className="text-sm text-gray-600 text-center mb-4">〇〇ICから約15分</p>
              <div className="text-xs text-gray-500 space-y-1">
                <p>• 専用駐車場2台完備</p>
                <p>• 満車時は近隣パーキング</p>
                <p>• ナビ検索「美しの鍼灸院」</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-pink-100">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-bus-line w-8 h-8 flex items-center justify-center text-pink-600 text-2xl"></i>
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2 text-center">バスでお越しの方</h4>
              <p className="text-sm text-gray-600 text-center mb-4">〇〇病院前停留所から徒歩1分</p>
              <div className="text-xs text-gray-500 space-y-1">
                <p>• 〇〇線・〇〇線利用可能</p>
                <p>• 病院向かい側が当院</p>
                <p>• 雨の日もアクセス良好</p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg border border-pink-100">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-question-line w-8 h-8 flex items-center justify-center text-pink-600 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">道に迷われた際は</h3>
              <p className="text-gray-600 mb-8">
                ご不明な点がございましたら、お気軽にお電話ください。<br />
                スタッフが詳しくご案内いたします。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:03-1234-5678" className="bg-gradient-to-r from-pink-400 to-rose-400 text-white px-8 py-3 rounded-full hover:from-pink-500 hover:to-rose-500 transition-all duration-300 shadow-md cursor-pointer whitespace-nowrap">
                  <i className="ri-phone-line w-5 h-5 flex items-center justify-center mr-2"></i>
                  03-1234-5678
                </a>
                <button className="border-2 border-pink-400 text-pink-500 px-8 py-3 rounded-full hover:bg-pink-50 transition-colors cursor-pointer whitespace-nowrap">
                  <i className="ri-mail-line w-5 h-5 flex items-center justify-center mr-2"></i>
                  メールで問い合わせ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
