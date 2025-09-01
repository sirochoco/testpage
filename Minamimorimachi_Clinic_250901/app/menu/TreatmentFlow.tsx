
'use client';

export default function TreatmentFlow() {
  const steps = [
    {
      number: "1",
      title: "カウンセリング・問診",
      description: "現在の症状や過去の病歴、生活習慣について詳しくお伺いします。お悩みやご希望を丁寧にヒアリングいたします。",
      duration: "15分",
      icon: "ri-question-line"
    },
    {
      number: "2", 
      title: "検査・診断",
      description: "東洋医学的な診断法（脈診、舌診、腹診など）と西洋医学的な検査を組み合わせて、根本原因を特定します。",
      duration: "10分",
      icon: "ri-stethoscope-line"
    },
    {
      number: "3",
      title: "治療方針の説明",
      description: "検査結果をもとに、お客様の体質や症状に最適な治療計画を立て、分かりやすくご説明いたします。",
      duration: "5分", 
      icon: "ri-chat-3-line"
    },
    {
      number: "4",
      title: "鍼灸施術",
      description: "使い捨ての鍼を使用し、清潔で安全な環境で施術を行います。痛みはほとんどありません。",
      duration: "30分",
      icon: "ri-hand-heart-line"
    },
    {
      number: "5",
      title: "アフターケア",
      description: "施術後の注意点や、ご自宅でのセルフケア方法をお伝えします。次回のご予約もこの時に承ります。",
      duration: "5分",
      icon: "ri-heart-add-line"
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">施術の流れ</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            初診から施術完了まで、安心してお受けいただける流れをご説明いたします
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                        <div className="w-6 h-6 flex items-center justify-center mr-3">
                          <i className={`${step.icon} text-emerald-600 text-lg`}></i>
                        </div>
                        {step.title}
                      </h3>
                      <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                        約{step.duration}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">初診時間の目安</h3>
            <div className="flex items-center justify-center space-x-4">
              <div className="text-3xl font-bold text-emerald-600">約60-75分</div>
              <div className="text-gray-600">
                <p className="text-sm">※症状により多少前後いたします</p>
                <p className="text-sm">※再診時は30-45分程度です</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
