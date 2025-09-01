
'use client';

const stories = [
  {
    id: 1,
    title: "慢性腰痛からの解放",
    subtitle: "10年間悩み続けた腰痛が改善",
    patient: "会社員 Aさん（45歳男性）",
    beforeSymptoms: [
      "朝起きるときの激痛",
      "長時間の座り作業が困難",
      "寝返りも痛くて目が覚める",
      "痛み止めが手放せない"
    ],
    afterImprovements: [
      "朝の痛みがほぼなくなった",
      "8時間のデスクワークも快適",
      "熟睡できるようになった",
      "薬に頼らない生活を実現"
    ],
    treatmentPeriod: "3ヶ月",
    visitCount: "12回",
    image: "https://readdy.ai/api/search-image?query=middle-aged%20Japanese%20businessman%20sitting%20at%20desk%20with%20perfect%20posture%2C%20no%20back%20pain%2C%20comfortable%20office%20environment%2C%20confident%20and%20productive%20appearance%2C%20natural%20lighting&width=400&height=300&seq=story-1&orientation=landscape"
  },
  {
    id: 2,
    title: "美容鍼灸で輝く素肌",
    subtitle: "肌トラブルが解消し自信を取り戻す",
    patient: "主婦 Bさん（35歳女性）",
    beforeSymptoms: [
      "慢性的な肌荒れとニキビ",
      "顔のくすみとたるみ",
      "化粧ノリの悪さ",
      "鏡を見るのが嫌だった"
    ],
    afterImprovements: [
      "肌のハリと透明感が向上",
      "ニキビができにくくなった",
      "化粧ノリが格段に良くなった",
      "自信を持って外出できる"
    ],
    treatmentPeriod: "2ヶ月",
    visitCount: "8回",
    image: "https://readdy.ai/api/search-image?query=elegant%20Japanese%20woman%20in%20her%2030s%20with%20glowing%20healthy%20skin%2C%20natural%20makeup%2C%20confident%20smile%2C%20beauty%20salon%20background%20with%20soft%20lighting%2C%20expressing%20satisfaction%20and%20confidence&width=400&height=300&seq=story-2&orientation=landscape"
  },
  {
    id: 3,
    title: "不妊治療サポート成功例",
    subtitle: "鍼灸治療で念願の妊娠を実現",
    patient: "会社員 Cさん（32歳女性）",
    beforeSymptoms: [
      "2年間の不妊治療で結果が出ない",
      "冷え性と生理不順",
      "ストレスによる睡眠不足",
      "精神的な落ち込み"
    ],
    afterImprovements: [
      "基礎体温が安定した",
      "生理周期が正常化",
      "体が温かくなった",
      "6ヶ月後に妊娠を確認"
    ],
    treatmentPeriod: "6ヶ月",
    visitCount: "24回",
    image: "https://readdy.ai/api/search-image?query=young%20Japanese%20woman%20holding%20positive%20pregnancy%20test%20with%20tears%20of%20joy%2C%20warm%20home%20environment%2C%20soft%20natural%20lighting%2C%20expressing%20overwhelming%20happiness%20and%20gratitude&width=400&height=300&seq=story-3&orientation=landscape"
  }
];

export default function ImprovementStories() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">改善事例</h2>
          <p className="text-lg text-gray-600">具体的な症状改善の事例をご紹介</p>
        </div>

        <div className="space-y-16">
          {stories.map((story, index) => (
            <div key={story.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
              <div className="lg:w-1/2">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-80 object-cover object-top rounded-xl shadow-lg"
                />
              </div>
              
              <div className="lg:w-1/2">
                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{story.title}</h3>
                  <p className="text-lg text-emerald-600 mb-4">{story.subtitle}</p>
                  <p className="text-gray-600 font-medium">{story.patient}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                      <i className="ri-close-circle-line w-5 h-5 text-red-500 mr-2"></i>
                      施術前の症状
                    </h4>
                    <ul className="space-y-2">
                      {story.beforeSymptoms.map((symptom, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start">
                          <span className="w-2 h-2 bg-red-300 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {symptom}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                      <i className="ri-check-circle-line w-5 h-5 text-emerald-500 mr-2"></i>
                      施術後の改善
                    </h4>
                    <ul className="space-y-2">
                      {story.afterImprovements.map((improvement, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start">
                          <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {improvement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <span className="flex items-center">
                      <i className="ri-time-line w-4 h-4 mr-1"></i>
                      治療期間: {story.treatmentPeriod}
                    </span>
                    <span className="flex items-center">
                      <i className="ri-calendar-line w-4 h-4 mr-1"></i>
                      通院回数: {story.visitCount}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
