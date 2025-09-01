
'use client';

export default function BusinessHours() {
  const businessHours = [
    { day: '月曜日', hours: '9:00 - 20:00', status: 'open' },
    { day: '火曜日', hours: '9:00 - 20:00', status: 'open' },
    { day: '水曜日', hours: '定休日', status: 'closed' },
    { day: '木曜日', hours: '9:00 - 20:00', status: 'open' },
    { day: '金曜日', hours: '9:00 - 20:00', status: 'open' },
    { day: '土曜日', hours: '9:00 - 17:00', status: 'open' },
    { day: '日曜日', hours: '9:00 - 17:00', status: 'open' }
  ];

  const getCurrentDayIndex = () => {
    const today = new Date();
    return today.getDay() === 0 ? 6 : today.getDay() - 1;
  };

  const todayIndex = getCurrentDayIndex();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">営業時間・診療日</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto mb-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-pink-50/50 to-rose-50/50 rounded-2xl p-8 mb-12 border border-pink-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              診療時間表
            </h3>
            
            <div className="space-y-3">
              {businessHours.map((schedule, index) => (
                <div 
                  key={index} 
                  className={`flex justify-between items-center p-4 rounded-lg border transition-all ${
                    index === todayIndex 
                      ? 'bg-gradient-to-r from-pink-100 to-rose-100 border-pink-300' 
                      : 'bg-white border-pink-100'
                  }`}
                >
                  <div className="flex items-center">
                    {index === todayIndex && (
                      <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full mr-3"></div>
                    )}
                    <span className={`font-semibold ${
                      index === todayIndex ? 'text-pink-700' : 'text-gray-800'
                    }`}>
                      {schedule.day}
                      {index === todayIndex && (
                        <span className="text-sm bg-gradient-to-r from-pink-400 to-rose-400 text-white px-2 py-1 rounded-full ml-2">
                          本日
                        </span>
                      )}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className={`font-bold ${
                      schedule.status === 'closed' 
                        ? 'text-gray-400' 
                        : index === todayIndex 
                          ? 'text-pink-700' 
                          : 'text-gray-700'
                    }`}>
                      {schedule.hours}
                    </span>
                    <i className={`ml-3 w-5 h-5 flex items-center justify-center ${
                      schedule.status === 'closed' 
                        ? 'ri-close-circle-line text-gray-400' 
                        : 'ri-check-circle-line text-pink-500'
                    }`}></i>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-pink-50/50 to-rose-50/50 rounded-xl p-6 border border-pink-100">
              <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <i className="ri-time-line w-6 h-6 flex items-center justify-center text-pink-600 mr-3"></i>
                受付時間について
              </h4>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-start">
                  <i className="ri-check-line w-4 h-4 flex items-center justify-center text-pink-600 mt-1 mr-2"></i>
                  <span className="text-sm">最終受付は診療終了30分前まで</span>
                </div>
                <div className="flex items-start">
                  <i className="ri-check-line w-4 h-4 flex items-center justify-center text-pink-600 mt-1 mr-2"></i>
                  <span className="text-sm">完全予約制となっております</span>
                </div>
                <div className="flex items-start">
                  <i className="ri-check-line w-4 h-4 flex items-center justify-center text-pink-600 mt-1 mr-2"></i>
                  <span className="text-sm">当日予約も可能です（空きがある場合）</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-50/50 to-rose-50/50 rounded-xl p-6 border border-pink-100">
              <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <i className="ri-calendar-line w-6 h-6 flex items-center justify-center text-pink-600 mr-3"></i>
                休診日について
              </h4>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-start">
                  <i className="ri-close-line w-4 h-4 flex items-center justify-center text-gray-400 mt-1 mr-2"></i>
                  <span className="text-sm">毎週水曜日は定休日です</span>
                </div>
                <div className="flex items-start">
                  <i className="ri-close-line w-4 h-4 flex items-center justify-center text-gray-400 mt-1 mr-2"></i>
                  <span className="text-sm">祝日は通常通り営業いたします</span>
                </div>
                <div className="flex items-start">
                  <i className="ri-close-line w-4 h-4 flex items-center justify-center text-gray-400 mt-1 mr-2"></i>
                  <span className="text-sm">年末年始・夏季休暇あり</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg text-center border border-pink-100">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-phone-line w-8 h-8 flex items-center justify-center text-pink-600 text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">ご予約・お問い合わせ</h3>
            <p className="text-gray-600 mb-8">
              お電話での予約受付時間は営業時間と同じです。<br />
              WEB予約は24時間いつでもご利用いただけます。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:03-1234-5678" className="bg-gradient-to-r from-pink-400 to-rose-400 text-white px-8 py-3 rounded-full hover:from-pink-500 hover:to-rose-500 transition-all duration-300 shadow-md cursor-pointer whitespace-nowrap">
                <i className="ri-phone-line w-5 h-5 flex items-center justify-center mr-2"></i>
                03-1234-5678
              </a>
              <button className="border-2 border-pink-400 text-pink-500 px-8 py-3 rounded-full hover:bg-pink-50 transition-colors cursor-pointer whitespace-nowrap">
                <i className="ri-calendar-check-line w-5 h-5 flex items-center justify-center mr-2"></i>
                WEB予約
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
