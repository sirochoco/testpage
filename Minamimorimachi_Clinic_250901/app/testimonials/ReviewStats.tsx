
'use client';

const stats = [
  {
    category: "痛み・凝りの改善",
    satisfaction: 97,
    count: 324,
    icon: "ri-heart-pulse-line"
  },
  {
    category: "美容鍼灸効果",
    satisfaction: 95,
    count: 156,
    icon: "ri-magic-line"
  },
  {
    category: "不妊治療サポート",
    satisfaction: 98,
    count: 89,
    icon: "ri-parent-line"
  },
  {
    category: "自律神経調整",
    satisfaction: 93,
    count: 201,
    icon: "ri-mind-map"
  }
];

const overallStats = [
  {
    label: "総患者数",
    value: "1,200+",
    icon: "ri-user-heart-line"
  },
  {
    label: "治療実績",
    value: "15年",
    icon: "ri-trophy-line"
  },
  {
    label: "改善率",
    value: "96%",
    icon: "ri-line-chart-line"
  },
  {
    label: "推奨度",
    value: "9.4/10",
    icon: "ri-thumb-up-line"
  }
];

export default function ReviewStats() {
  return (
    <section className="py-16 bg-gradient-to-br from-emerald-600 to-teal-600">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">治療成果データ</h2>
          <p className="text-lg text-emerald-100">数字で見る患者様の満足度</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {overallStats.map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`${stat.icon} text-2xl text-white`}></i>
              </div>
              <p className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-emerald-100 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <i className={`${stat.icon} text-xl text-white`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{stat.category}</h3>
                    <p className="text-emerald-100 text-sm">{stat.count}名のデータ</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-white">{stat.satisfaction}%</p>
                  <p className="text-emerald-100 text-sm">満足度</p>
                </div>
              </div>
              
              <div className="bg-white/20 rounded-full h-3 overflow-hidden">
                <div 
                  className="bg-white h-full rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${stat.satisfaction}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-emerald-100 text-lg mb-6">
            ※ 2023年1月〜12月の患者様アンケート結果より
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-white font-semibold mb-2">患者様の声から</p>
            <p className="text-emerald-100 text-sm leading-relaxed">
              「痛みが改善されただけでなく、先生の丁寧な説明と温かい対応に心も癒されました。
              こちらの院を選んで本当に良かったです。」
            </p>
            <p className="text-emerald-200 text-xs mt-3">- 40代女性患者様より</p>
          </div>
        </div>
      </div>
    </section>
  );
}
