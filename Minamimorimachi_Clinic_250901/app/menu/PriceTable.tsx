
'use client';

export default function PriceTable() {
  const basicPrices = [
    {
      category: "基本料金",
      items: [
        { name: "初診料", price: "2,000円", note: "初回のみ" },
        { name: "再診料", price: "1,000円", note: "2回目以降" }
      ]
    }
  ];

  const treatmentPrices = [
    {
      category: "一般鍼灸治療",
      items: [
        { name: "肩こり・腰痛コース", price: "4,500円", duration: "45分" },
        { name: "全身調整コース", price: "6,000円", duration: "60分" },
        { name: "頭痛・自律神経コース", price: "5,500円", duration: "50分" },
        { name: "スポーツ鍼灸", price: "5,000円", duration: "50分" }
      ]
    },
    {
      category: "専門治療",
      items: [
        { name: "美容鍼灸", price: "8,000円", duration: "90分" },
        { name: "不妊治療サポート", price: "7,500円", duration: "75分" },
        { name: "産前産後ケア", price: "6,500円", duration: "60分" },
        { name: "小児鍼", price: "3,000円", duration: "30分" }
      ]
    }
  ];

  const packagePrices = [
    {
      name: "回数券（5回分）",
      regular: "30,000円",
      discount: "27,000円", 
      save: "3,000円お得",
      validity: "有効期限：3ヶ月"
    },
    {
      name: "回数券（10回分）",
      regular: "60,000円",
      discount: "51,000円",
      save: "9,000円お得", 
      validity: "有効期限：6ヶ月"
    },
    {
      name: "美容鍼集中コース（5回）",
      regular: "40,000円",
      discount: "35,000円",
      save: "5,000円お得",
      validity: "有効期限：2ヶ月"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">料金表</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            明確で分かりやすい料金設定。お得な回数券もご用意しております
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* 基本料金 */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">基本料金</h3>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-emerald-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-gray-800 font-semibold">項目</th>
                      <th className="px-6 py-4 text-center text-gray-800 font-semibold">料金</th>
                      <th className="px-6 py-4 text-center text-gray-800 font-semibold">備考</th>
                    </tr>
                  </thead>
                  <tbody>
                    {basicPrices[0].items.map((item, index) => (
                      <tr key={index} className="border-t">
                        <td className="px-6 py-4 text-gray-800">{item.name}</td>
                        <td className="px-6 py-4 text-center text-emerald-600 font-semibold text-lg">
                          {item.price}
                        </td>
                        <td className="px-6 py-4 text-center text-gray-600 text-sm">{item.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* 施術料金 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {treatmentPrices.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{category.category}</h3>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-emerald-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-gray-800 font-semibold">メニュー</th>
                          <th className="px-4 py-3 text-center text-gray-800 font-semibold">時間</th>
                          <th className="px-4 py-3 text-center text-gray-800 font-semibold">料金</th>
                        </tr>
                      </thead>
                      <tbody>
                        {category.items.map((item, index) => (
                          <tr key={index} className="border-t">
                            <td className="px-4 py-3 text-gray-800 text-sm">{item.name}</td>
                            <td className="px-4 py-3 text-center text-gray-600 text-sm">{item.duration}</td>
                            <td className="px-4 py-3 text-center text-emerald-600 font-semibold">
                              {item.price}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 回数券・パッケージ */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">お得な回数券・パッケージ</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packagePrices.map((pkg, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 text-xs font-semibold transform rotate-12 translate-x-3 translate-y-2">
                    お得
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">{pkg.name}</h4>
                  <div className="text-center mb-4">
                    <div className="text-gray-400 line-through text-sm mb-1">通常価格: {pkg.regular}</div>
                    <div className="text-2xl font-bold text-emerald-600 mb-1">{pkg.discount}</div>
                    <div className="text-red-500 font-semibold text-sm">{pkg.save}</div>
                  </div>
                  <div className="text-center text-gray-600 text-xs">{pkg.validity}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 注意事項 */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h4 className="flex items-center text-amber-800 font-semibold mb-4">
              <div className="w-6 h-6 flex items-center justify-center mr-2">
                <i className="ri-information-line text-amber-600"></i>
              </div>
              料金に関するご案内
            </h4>
            <ul className="space-y-2 text-amber-800 text-sm">
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                すべて税込み価格です
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                初回は初診料 + 施術料が必要です
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                現金、クレジットカード、電子マネーをご利用いただけます
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                回数券の有効期限延長はできませんのでご注意ください
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                当日キャンセルの場合、キャンセル料（施術料の50%）が発生いたします
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
