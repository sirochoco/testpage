
'use client';
import Link from 'next/link';

export default function ClinicFeatures() {
  const features = [
    {
      icon: "ri-time-line",
      title: "豊富な経験と実績",
      description: "15年の鍼灸師歴と8年の開業経験で、延べ5,000人以上の患者様を施術。様々な症状に対応できる確かな技術と知識を持っています。",
      details: ["延べ5,000人以上の施術実績", "様々な症状への対応経験", "継続的な技術研鑽と学習"]
    },
    {
      icon: "ri-user-star-line",
      title: "女性鍼灸師による安心の施術",
      description: "女性患者様も安心してご来院いただけるよう、女性鍼灸師も在籍しております。デリケートなお悩みもお気軽にご相談ください。",
      details: ["女性特有のお悩みに対応", "美容鍼・婦人科系疾患の専門知識", "リラックスできる施術環境"]
    },
    {
      icon: "ri-map-pin-line",
      title: "駅近・通いやすい立地",
      description: "最寄り駅から徒歩3分の好立地。お仕事帰りや通勤途中でも気軽にお立ち寄りいただけます。駐車場も完備しております。",
      details: ["〇〇駅から徒歩3分", "駐車場2台分完備", "平日夜20時まで診療"]
    },
    {
      icon: "ri-heart-pulse-line",
      title: "多様な症状に対応",
      description: "慢性的な痛みから美容鍼まで、幅広い症状に対応。西洋医学では改善が難しい症状も、東洋医学のアプローチで根本改善を目指します。",
      details: ["慢性痛・急性痛の治療", "自律神経系の調整", "美容・アンチエイジング", "不妊治療サポート"]
    },
    {
      icon: "ri-shield-heart-line",
      title: "安全・安心の施術",
      description: "厚生労働省認定の国家資格を持つ鍼灸師が施術。使い捨て鍼の使用と徹底した衛生管理で、安全性を最優先に考えています。",
      details: ["国家資格保有の鍼灸師", "使い捨て鍼を完全使用", "医療機器による消毒・滅菌"]
    },
    {
      icon: "ri-calendar-check-line",
      title: "柔軟な予約システム",
      description: "お電話での予約はもちろん、24時間対応のWEB予約も可能。お忙しい方でも、ご都合に合わせてご予約いただけます。",
      details: ["24時間WEB予約対応", "当日予約も可能", "キャンセル・変更も柔軟対応"]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-pink-50/50 to-rose-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">当院の特徴・強み</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            患者様に選ばれ続ける6つの理由をご紹介いたします。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-pink-100">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full flex items-center justify-center mb-4">
                <i className={`${feature.icon} w-8 h-8 flex items-center justify-center text-pink-600 text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{feature.description}</p>
              <ul className="space-y-1">
                {feature.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="text-xs text-gray-500 flex items-center">
                    <i className="ri-check-line w-3 h-3 flex items-center justify-center text-pink-600 mr-2"></i>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto shadow-lg border border-pink-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              あなたのお悩み、一度ご相談ください
            </h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              慢性的な痛みや不調、美容のお悩みなど、どんな小さなことでもお気軽にご相談ください。<br />
              経験豊富な院長が、あなたに最適な治療プランをご提案いたします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-pink-400 to-rose-400 text-white px-8 py-3 rounded-full hover:from-pink-500 hover:to-rose-500 transition-all duration-300 shadow-md cursor-pointer whitespace-nowrap">
                ご予約・お問い合わせ
              </Link>
              <Link href="/menu" className="border-2 border-pink-400 text-pink-500 px-8 py-3 rounded-full hover:bg-pink-50 transition-colors cursor-pointer whitespace-nowrap">
                施術メニューを見る
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
