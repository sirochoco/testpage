
'use client';
import Link from 'next/link';

export default function SymptomsSection() {
  const symptoms = [
    {
      icon: 'ri-user-heart-line',
      title: '肩こり・首の痛み',
      description: 'デスクワークによる慢性的な肩こりや首の痛みを根本から改善します'
    },
    {
      icon: 'ri-heart-pulse-line',
      title: '腰痛・ぎっくり腰',
      description: '急性・慢性の腰痛、ぎっくり腰の痛みを和らげ、再発を防ぎます'
    },
    {
      icon: 'ri-brain-line',
      title: '頭痛・めまい',
      description: '緊張性頭痛や片頭痛、めまいの症状を改善します'
    },
    {
      icon: 'ri-pulse-line',
      title: '神経痛',
      description: '坐骨神経痛や三叉神経痛など、つらい神経の痛みを緩和します'
    },
    {
      icon: 'ri-leaf-line',
      title: '自律神経失調症',
      description: '不眠、疲労感、イライラなど自律神経の乱れを整えます'
    },
    {
      icon: 'ri-heart-3-line',
      title: '婦人科系の悩み',
      description: '生理痛、更年期症状、不妊治療のサポートを行います'
    },
    {
      icon: 'ri-user-smile-line',
      title: '美容鍼',
      description: 'お顔のたるみやシワ、くすみを改善し、美しいお肌を目指します'
    },
    {
      icon: 'ri-shield-check-line',
      title: '免疫力向上',
      description: '体質改善により免疫力を高め、病気になりにくい体づくりをします'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">こんな症状でお悩みではありませんか？</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            以下のような症状でお困りの方は、ぜひ一度ご相談ください。
            お一人お一人の症状に合わせた最適な治療プランをご提案いたします。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {symptoms.map((symptom, index) => (
            <div key={index} className="bg-gradient-to-br from-pink-50/50 to-rose-50/50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-pink-100/50">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <i className={`${symptom.icon} text-2xl text-pink-600 w-8 h-8 flex items-center justify-center`}></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{symptom.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{symptom.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 mb-6">
            上記以外の症状でもお気軽にご相談ください
          </p>
          <Link href="/contact" className="bg-gradient-to-r from-pink-400 to-rose-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-pink-500 hover:to-rose-500 transition-all duration-300 shadow-lg cursor-pointer whitespace-nowrap">
            無料相談を予約する
          </Link>
        </div>
      </div>
    </section>
  );
}
