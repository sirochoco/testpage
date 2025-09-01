
'use client';

export default function AccessGuide() {
  const accessMethods = [
    {
      icon: 'ri-train-line',
      title: 'JR〇〇線をご利用の場合',
      steps: [
        'JR〇〇駅の南口を出ます',
        '駅前の大通りを直進（約200m）',
        '〇〇銀行を右に曲がります',
        '2つ目の角を左に曲がると当院です'
      ],
      time: '徒歩約3分'
    },
    {
      icon: 'ri-car-line',
      title: 'お車でお越しの場合',
      steps: [
        '〇〇ICから国道〇号線を市内方面へ',
        '〇〇交差点を左折',
        '〇〇通りを直進約500m',
        '当院専用駐車場（2台分）をご利用ください'
      ],
      time: '〇〇ICから約15分'
    },
    {
      icon: 'ri-bus-line',
      title: 'バスをご利用の場合',
      steps: [
        '〇〇駅前バス停から乗車',
        '〇〇線「〇〇病院前」下車',
        'バス停から徒歩1分',
        '病院の向かい側が当院です'
      ],
      time: 'バス停から徒歩1分'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-pink-50/50 to-rose-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">アクセスガイド</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            各交通手段での詳しいアクセス方法をご案内いたします。
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {accessMethods.map((method, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-pink-100">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className={`${method.icon} w-8 h-8 flex items-center justify-center text-pink-600 text-2xl`}></i>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 lg:mb-0">{method.title}</h3>
                    <div className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold">
                      {method.time}
                    </div>
                  </div>
                  <ol className="space-y-3">
                    {method.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-rose-400 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {stepIndex + 1}
                        </div>
                        <span className="text-gray-600 pt-1">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 max-w-4xl mx-auto shadow-lg border border-pink-100">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-information-line w-8 h-8 flex items-center justify-center text-pink-600 text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">アクセス時のご注意</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <i className="ri-car-line w-5 h-5 flex items-center justify-center text-pink-600 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">駐車場について</h4>
                    <p className="text-sm text-gray-600">専用駐車場2台分をご用意。満車の場合は近隣のコインパーキングをご利用ください。</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-time-line w-5 h-5 flex items-center justify-center text-pink-600 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">営業時間</h4>
                    <p className="text-sm text-gray-600">平日：9:00-20:00 / 土日祝：9:00-17:00 / 水曜定休</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <i className="ri-map-pin-line w-5 h-5 flex items-center justify-center text-pink-600 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">迷われた場合</h4>
                    <p className="text-sm text-gray-600">お電話いただければ、スタッフが詳しくご案内いたします。</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-wheelchair-line w-5 h-5 flex items-center justify-center text-pink-600 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">バリアフリー</h4>
                    <p className="text-sm text-gray-600">車椅子でのご来院も可能です。事前にお知らせください。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
