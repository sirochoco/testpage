
'use client';

export default function InsuranceInfo() {
  const insuranceConditions = [
    {
      condition: "神経痛",
      description: "坐骨神経痛、肋間神経痛など",
      icon: "ri-flashlight-line"
    },
    {
      condition: "リウマチ",
      description: "関節リウマチ、慢性関節リウマチ",
      icon: "ri-hand-coin-line"
    },
    {
      condition: "頚腕症候群",
      description: "首から腕にかけての痛み・しびれ",
      icon: "ri-body-scan-line"
    },
    {
      condition: "五十肩",
      description: "肩関節周囲炎による運動制限",
      icon: "ri-user-heart-line"
    },
    {
      condition: "腰痛症",
      description: "慢性腰痛（急性期を除く）",
      icon: "ri-walk-line"
    },
    {
      condition: "頸椎捻挫後遺症",
      description: "むち打ち症の後遺症",
      icon: "ri-wheelchair-line"
    }
  ];

  const procedures = [
    {
      step: "1",
      title: "医師の同意",
      description: "かかりつけ医から鍼灸治療の同意書をいただきます",
      icon: "ri-nurse-line"
    },
    {
      step: "2", 
      title: "保険証の確認",
      description: "健康保険証をお持ちいただき、適用条件を確認いたします",
      icon: "ri-shield-check-line"
    },
    {
      step: "3",
      title: "申請手続き",
      description: "必要書類を揃えて、保険者への申請手続きを行います",
      icon: "ri-file-list-3-line"
    },
    {
      step: "4",
      title: "治療開始",
      description: "承認後、保険適用での治療を開始いたします",
      icon: "ri-play-circle-line"
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">健康保険について</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            特定の症状において、医師の同意があれば健康保険が適用されます
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 保険適用対象 */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">保険適用対象疾患</h3>
              <div className="space-y-4">
                {insuranceConditions.map((condition, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className={`${condition.icon} text-blue-600 text-lg`}></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">{condition.condition}</h4>
                        <p className="text-gray-600 text-sm">{condition.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 手続きの流れ */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">保険適用の手続き</h3>
              <div className="space-y-4">
                {procedures.map((procedure, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                        {procedure.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">{procedure.title}</h4>
                        <p className="text-gray-600 text-sm">{procedure.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 注意事項 */}
          <div className="mt-12">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                <div className="w-6 h-6 flex items-center justify-center mr-3">
                  <i className="ri-information-line text-blue-600"></i>
                </div>
                健康保険適用に関する重要事項
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 flex items-center justify-center mr-3 mt-1">
                      <i className="ri-check-circle-line text-green-500"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">適用条件</h4>
                      <p className="text-gray-600 text-sm">
                        医師の同意書が必要で、慢性的な痛みに対する治療が対象です
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 flex items-center justify-center mr-3 mt-1">
                      <i className="ri-time-line text-orange-500"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">治療期間</h4>
                      <p className="text-gray-600 text-sm">
                        医師の同意書の有効期間は6ヶ月間です
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 flex items-center justify-center mr-3 mt-1">
                      <i className="ri-money-dollar-circle-line text-blue-500"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">自己負担額</h4>
                      <p className="text-gray-600 text-sm">
                        保険適用時は1〜3割負担となります（年齢・所得により異なります）
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 flex items-center justify-center mr-3 mt-1">
                      <i className="ri-alert-line text-red-500"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">注意点</h4>
                      <p className="text-gray-600 text-sm">
                        同じ症状で病院での治療と並行して受けることはできません
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* お問い合わせCTA */}
          <div className="mt-12 text-center">
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">保険適用についてのご相談</h3>
              <p className="text-gray-600 mb-6">
                健康保険の適用条件や手続きについて、詳しくご説明いたします。<br/>
                まずはお気軽にお問い合わせください。
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="tel:03-1234-5678" className="bg-emerald-600 text-white px-6 py-3 rounded-full hover:bg-emerald-700 transition-colors cursor-pointer whitespace-nowrap flex items-center">
                  <div className="w-5 h-5 flex items-center justify-center mr-2">
                    <i className="ri-phone-line"></i>
                  </div>
                  03-1234-5678
                </a>
                <a href="/contact" className="border border-emerald-600 text-emerald-600 px-6 py-3 rounded-full hover:bg-emerald-600 hover:text-white transition-colors cursor-pointer whitespace-nowrap">
                  お問い合わせフォーム
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
