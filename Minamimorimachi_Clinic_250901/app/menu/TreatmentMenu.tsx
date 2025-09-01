
'use client';

export default function TreatmentMenu() {
  const symptoms = [
    {
      category: "筋骨格系の症状",
      items: [
        "肩こり・首こり", "腰痛・ぎっくり腰", "膝痛・関節痛", "五十肩・四十肩",
        "坐骨神経痛", "頭痛・偏頭痛", "むち打ち症", "寝違え"
      ],
      icon: "ri-heart-pulse-line"
    },
    {
      category: "自律神経系の症状",
      items: [
        "不眠症・睡眠障害", "うつ・不安症", "ストレス性疾患", "自律神経失調症",
        "パニック障害", "更年期障害", "冷え性", "のぼせ・ほてり"
      ],
      icon: "ri-brain-line"
    },
    {
      category: "消化器系の症状",
      items: [
        "胃痛・胃もたれ", "便秘・下痢", "食欲不振", "過敏性腸症候群",
        "胃炎・胃潰瘍", "逆流性食道炎"
      ],
      icon: "ri-heart-line"
    },
    {
      category: "婦人科系の症状",
      items: [
        "生理痛・生理不順", "不妊症", "つわり", "産後の体調不良",
        "PMS（月経前症候群）", "妊活サポート", "産後うつ"
      ],
      icon: "ri-women-line"
    },
    {
      category: "美容・アンチエイジング",
      items: [
        "美容鍼", "リフトアップ", "しわ・たるみ改善", "肌荒れ・ニキビ",
        "くすみ改善", "小顔効果", "ダイエットサポート"
      ],
      icon: "ri-star-line"
    }
  ];

  const treatments = [
    {
      name: "一般鍼灸治療",
      description: "肩こり、腰痛、頭痛など、日常的な不調を改善する基本的な鍼灸治療です。",
      features: ["問診・検査", "鍼治療", "お灸治療", "生活指導"],
      duration: "60分",
      image: "https://readdy.ai/api/search-image?query=Professional%20acupuncture%20treatment%20session%20in%20clean%20modern%20clinic%20room%2C%20acupuncturist%20inserting%20fine%20needles%20into%20patients%20back%2C%20serene%20atmosphere%20with%20soft%20lighting%2C%20medical%20equipment%20visible%2C%20peaceful%20treatment%20environment&width=400&height=300&seq=acupuncture1&orientation=landscape"
    },
    {
      name: "美容鍼灸",
      description: "お顔の血行を促進し、自然なリフトアップとお肌の改善を目指す美容特化治療です。",
      features: ["フェイシャル鍼", "頭皮鍼", "デコルテケア", "アフターケア指導"],
      duration: "90分",
      image: "https://readdy.ai/api/search-image?query=Facial%20acupuncture%20treatment%20for%20beauty%20enhancement%2C%20woman%20receiving%20fine%20needle%20therapy%20on%20face%2C%20relaxing%20spa-like%20clinic%20environment%2C%20professional%20beautician%20working%20carefully%2C%20clean%20white%20treatment%20room&width=400&height=300&seq=beauty1&orientation=landscape"
    },
    {
      name: "不妊治療サポート",
      description: "妊娠しやすい体質づくりをサポートする専門的な鍼灸治療です。",
      features: ["体質改善", "ホルモンバランス調整", "ストレス軽減", "定期的なフォロー"],
      duration: "75分",
      image: "https://readdy.ai/api/search-image?query=Gentle%20acupuncture%20treatment%20for%20fertility%20support%2C%20peaceful%20treatment%20room%20with%20soft%20natural%20lighting%2C%20female%20patient%20receiving%20careful%20therapeutic%20treatment%2C%20calming%20atmosphere%20with%20plants%20and%20natural%20elements&width=400&height=300&seq=fertility1&orientation=landscape"
    },
    {
      name: "自律神経調整",
      description: "ストレスや不眠、うつ症状など、自律神経の乱れを整える専門治療です。",
      features: ["神経系調整", "リラクゼーション鍼", "呼吸法指導", "生活リズム改善"],
      duration: "70分",
      image: "https://readdy.ai/api/search-image?query=Relaxing%20acupuncture%20treatment%20for%20stress%20relief%20and%20autonomic%20nervous%20system%20balance%2C%20peaceful%20clinic%20room%20with%20dim%20lighting%2C%20patient%20lying%20comfortably%20receiving%20gentle%20needle%20therapy%2C%20zen-like%20atmosphere&width=400&height=300&seq=autonomic1&orientation=landscape"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">対応可能な症状</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            幅広い症状に対応し、お一人お一人の体質や症状に合わせたオーダーメイド治療を行います
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {symptoms.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                  <i className={`${category.icon} text-emerald-600 text-xl`}></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{category.category}</h3>
              </div>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-600 text-sm flex items-center">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">主な施術メニュー</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            症状や目的に応じて最適な治療法を選択し、根本的な改善を目指します
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {treatments.map((treatment, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={treatment.image} 
                alt={treatment.name}
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-800">{treatment.name}</h3>
                  <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                    {treatment.duration}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{treatment.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {treatment.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center mr-2">
                        <i className="ri-check-line text-white text-xs"></i>
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
