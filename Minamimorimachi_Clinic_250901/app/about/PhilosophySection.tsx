
'use client';

export default function PhilosophySection() {
  return (
    <section className="py-16 bg-gradient-to-br from-rose-50/30 to-pink-50/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">院の理念・コンセプト</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto mb-12"></div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12 border border-pink-100">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-heart-pulse-line w-8 h-8 flex items-center justify-center text-pink-600 text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              「心と体の調和を大切に、根本から健康を支える」
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              当院では、症状の表面的な改善だけでなく、患者様の心と体全体のバランスを整えることを大切にしています。
              東洋医学の「未病を治す」という考えに基づき、病気になる前の段階から健康をサポートし、
              根本的な体質改善を通じて、患者様が本来持つ自然治癒力を高めることを目指しています。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-user-heart-line w-10 h-10 flex items-center justify-center text-pink-600 text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">一人ひとりに向き合う</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                画一的な治療ではなく、患者様の体質や生活環境、お悩みに合わせたオーダーメイドの施術を提供いたします。
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-leaf-line w-10 h-10 flex items-center justify-center text-pink-600 text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">自然治癒力を高める</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                薬に頼るのではなく、人間が本来持つ自然治癒力を最大限に引き出し、体の内側から健康になることを目指します。
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-heart-line w-10 h-10 flex items-center justify-center text-pink-600 text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">予防医学の実践</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                病気になってから治すのではなく、日頃からの健康管理とメンテナンスを通じて、病気を予防することを重視しています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
