
'use client';

export default function ClinicTour() {
  const facilities = [
    {
      name: "受付・待合室",
      description: "明るく清潔感のある空間で、リラックスしてお待ちいただけます。緑豊かな観葉植物と、落ち着いた音楽でお迎えいたします。",
      image: "Bright clean acupuncture clinic reception area with comfortable seating, modern minimalist design, wooden reception desk, green plants, warm lighting, peaceful atmosphere, Japanese style interior design elements"
    },
    {
      name: "施術室",
      description: "プライバシーを重視した個室の施術室。清潔で落ち着いた環境で、安心して施術をお受けいただけます。",
      image: "Private acupuncture treatment room with clean white bed, professional medical equipment, warm wooden furniture, soft ambient lighting, minimalist Japanese interior, sterile medical environment"
    },
    {
      name: "カウンセリングルーム",
      description: "患者様とのコミュニケーションを大切にしたカウンセリング専用スペース。お悩みやご相談をじっくりとお聞かせください。",
      image: "Professional consultation room with comfortable chairs, wooden desk, medical charts on walls, warm lighting, plants, cozy atmosphere for patient counseling, Japanese clinic interior"
    },
    {
      name: "設備・器具",
      description: "最新の鍼灸器具と衛生管理システムを完備。使い捨て鍼の使用や徹底した消毒で、安全・安心な施術を提供しています。",
      image: "Professional acupuncture medical equipment and tools, sterilization devices, disposable needles, modern medical instruments, clean organized medical cabinet, sterile environment"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">院内の様子</h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            患者様に安心して施術をお受けいただけるよう、清潔で落ち着いた環境づくりに努めています。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {facilities.map((facility, index) => (
            <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src={`https://readdy.ai/api/search-image?query=$%7Bfacility.image%7D&width=600&height=400&seq=facility-${index}&orientation=landscape`}
                alt={facility.name}
                className="w-full h-64 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{facility.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-emerald-50 rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-shield-check-line w-8 h-8 flex items-center justify-center text-white text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">安心・安全への取り組み</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start space-x-3">
                <i className="ri-check-line w-5 h-5 flex items-center justify-center text-emerald-600 mt-1"></i>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">使い捨て鍼の使用</h4>
                  <p className="text-sm text-gray-600">すべて個別包装の使い捨て鍼を使用し、感染予防を徹底しています。</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <i className="ri-check-line w-5 h-5 flex items-center justify-center text-emerald-600 mt-1"></i>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">徹底した消毒</h4>
                  <p className="text-sm text-gray-600">施術台や器具は毎回アルコール消毒を行い、清潔な環境を維持します。</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <i className="ri-check-line w-5 h-5 flex items-center justify-center text-emerald-600 mt-1"></i>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">プライバシー保護</h4>
                  <p className="text-sm text-gray-600">完全個室での施術で、プライバシーを守りながら治療を行います。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
