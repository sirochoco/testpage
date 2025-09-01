
'use client';

export default function DoctorIntroduction() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">院長紹介</h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20Japanese%20acupuncturist%20portrait%2C%20middle-aged%20doctor%20in%20white%20medical%20coat%2C%20kind%20gentle%20expression%2C%20warm%20smile%2C%20traditional%20clinic%20background%2C%20professional%20medical%20photography%2C%20trustworthy%20appearance%2C%20clean%20studio%20lighting&width=400&height=500&seq=doctor-portrait&orientation=portrait"
                alt="院長写真"
                className="w-80 h-96 object-cover object-top rounded-lg shadow-lg mx-auto mb-6"
              />
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">田中 健一</h3>
                <p className="text-emerald-600 font-semibold">院長・鍼灸師</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                  <i className="ri-award-line w-6 h-6 flex items-center justify-center text-emerald-600 mr-2"></i>
                  資格・経歴
                </h4>
                <ul className="space-y-2 text-gray-600 ml-8">
                  <li>• 厚生労働省認定 はり師・きゅう師免許取得</li>
                  <li>• 〇〇鍼灸専門学校 卒業</li>
                  <li>• 中国伝統医学研修修了</li>
                  <li>• 美容鍼灸認定講師</li>
                  <li>• 鍼灸師歴15年、開業8年</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                  <i className="ri-heart-line w-6 h-6 flex items-center justify-center text-emerald-600 mr-2"></i>
                  治療への想い
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  「一人でも多くの方が健康で美しく、笑顔で過ごせるように」これが私の治療に対する想いです。
                  患者様の症状だけでなく、生活習慣やお悩みにも耳を傾け、根本的な改善を目指しています。
                  東洋医学の智慧を活かし、現代人の多様なニーズにお応えできるよう、
                  日々技術の向上と新しい知識の習得に努めております。
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                  <i className="ri-star-line w-6 h-6 flex items-center justify-center text-emerald-600 mr-2"></i>
                  得意な施術
                </h4>
                <div className="grid grid-cols-2 gap-2 ml-8">
                  <div className="text-gray-600">• 慢性的な痛みの改善</div>
                  <div className="text-gray-600">• 自律神経調整</div>
                  <div className="text-gray-600">• 美容鍼・リフトアップ</div>
                  <div className="text-gray-600">• 女性特有のお悩み</div>
                  <div className="text-gray-600">• スポーツ障害</div>
                  <div className="text-gray-600">• 不妊治療サポート</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
