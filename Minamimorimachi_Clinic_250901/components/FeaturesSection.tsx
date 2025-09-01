
'use client';

export default function FeaturesSection() {
  const features = [
    {
      icon: 'ri-medal-line',
      title: '豊富な経験と実績',
      description: '20年以上の鍼灸師歴を持つ院長が、これまで5,000人以上の患者様を施術してきた豊富な経験をもとに、確実な技術で施術いたします。'
    },
    {
      icon: 'ri-user-heart-line',
      title: '一人ひとりに合わせた施術',
      description: '患者様の症状や体質を詳しくお聞きし、東洋医学の観点から最適な施術プランをオーダーメイドで作成いたします。'
    },
    {
      icon: 'ri-home-heart-line',
      title: '清潔で落ち着いた院内',
      description: '完全予約制のプライベート空間で、リラックスして施術を受けていただけます。使い捨て鍼の使用で衛生面も万全です。'
    },
    {
      icon: 'ri-map-pin-line',
      title: '駅から徒歩3分の好立地',
      description: 'JR〇〇駅から徒歩3分、お仕事帰りやお買い物のついでにも気軽にお立ち寄りいただけます。駐車場も完備しております。'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">当院の特徴</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto mb-4"></div>
          <p className="text-gray-600">美しの鍼灸院が選ばれる理由</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-pink-100">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                  <i className={`${feature.icon} text-2xl text-white w-8 h-8 flex items-center justify-center`}></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
