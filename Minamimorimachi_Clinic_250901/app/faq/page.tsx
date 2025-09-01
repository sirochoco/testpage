
'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const categories = [
    { id: 'general', name: '一般的な質問', icon: 'ri-question-line' },
    { id: 'booking', name: '予約について', icon: 'ri-calendar-line' },
    { id: 'treatment', name: '施術について', icon: 'ri-hand-heart-line' },
    { id: 'payment', name: '支払い・保険', icon: 'ri-money-dollar-circle-line' },
    { id: 'access', name: '施設・アクセス', icon: 'ri-map-pin-line' }
  ];

  const faqData = {
    general: [
      {
        id: 'g1',
        question: '鍼治療は初めてですが、痛みはありますか？',
        answer: '鍼治療で使用する鍼は髪の毛ほどの細さで、注射針とは全く異なります。施術時にはほとんど痛みを感じることはありません。個人差はありますが、多くの患者様が「思っていたより全然痛くない」とおっしゃいます。万が一痛みを感じた場合は、すぐにお申し付けください。'
      },
      {
        id: 'g2',
        question: '鍼治療に副作用はありますか？',
        answer: '鍼治療は非常に安全な治療法です。稀に施術後に軽いだるさや眠気を感じることがありますが、これは体が回復に向かっている好転反応です。1〜2日で改善します。感染症などのリスクを防ぐため、当院では使い捨て鍼のみを使用しております。'
      },
      {
        id: 'g3',
        question: 'どのくらいのペースで通院すればよいですか？',
        answer: '症状や体質により個人差がありますが、慢性的な症状の場合は週1〜2回、急性症状の場合は症状が軽減するまで週2〜3回をおすすめしています。美容鍼の場合は月2〜4回が効果的です。初回の施術後に、患者様の状態に合わせた最適な治療プランをご提案いたします。'
      },
      {
        id: 'g4',
        question: '何歳から鍼治療を受けることができますか？',
        answer: '小学生以上であれば鍼治療を受けていただけます。お子様の場合は、より細い鍼を使用し、施術時間も短くして負担を軽減します。ご高齢の方も安心して受けていただけますが、お身体の状態により施術内容を調整いたします。'
      }
    ],
    booking: [
      {
        id: 'b1',
        question: '予約は必要ですか？',
        answer: '当院は完全予約制となっております。WEB予約（24時間対応）またはお電話でご予約ください。当日予約も空きがあれば可能ですが、事前のご予約をおすすめいたします。'
      },
      {
        id: 'b2',
        question: '予約のキャンセルはできますか？',
        answer: 'キャンセル・変更は前日までにご連絡ください。当日キャンセルの場合、体調不良等やむを得ない理由以外はキャンセル料が発生する場合があります。お電話またはWEB予約システムからキャンセル・変更が可能です。'
      },
      {
        id: 'b3',
        question: 'WEB予約システムの使い方を教えてください。',
        answer: 'WEB予約は3ステップで簡単に完了します。①カレンダーから希望日時を選択 ②お客様情報と施術内容を入力 ③予約内容を確認して送信。予約完了後、確認メールが届きます。操作方法でご不明な点があれば、お気軽にお電話ください。'
      },
      {
        id: 'b4',
        question: '土日祝日も予約できますか？',
        answer: '土日祝日も通常通り営業しております（9:00-17:00）。ただし水曜日は定休日となります。土日祝日は平日より混み合いやすいため、お早めのご予約をおすすめいたします。'
      }
    ],
    treatment: [
      {
        id: 't1',
        question: '施術時間はどのくらいですか？',
        answer: '初回は問診・検査を含めて約90分、2回目以降は約60分程度です。美容鍼の場合は約75分、不妊治療サポートは約60分が目安です。患者様の症状や体調により、施術時間は前後する場合があります。'
      },
      {
        id: 't2',
        question: '施術前の準備や注意事項はありますか？',
        answer: '施術前の特別な準備は不要ですが、以下の点にご注意ください。①食事は施術の1時間前までにお済ませください ②アルコールの摂取はお控えください ③ゆったりした服装でお越しください ④化粧は薄めにしていただくか、クレンジングをご持参ください（美容鍼の場合）。'
      },
      {
        id: 't3',
        question: '生理中でも施術は受けられますか？',
        answer: '生理中でも施術は可能です。むしろ生理痛の軽減や血行促進に効果的です。ただし、体調がすぐれない場合は無理をせず、予約の変更をご検討ください。施術時にお身体の状態をお聞かせいただき、最適な施術を行います。'
      },
      {
        id: 't4',
        question: '施術後に注意することはありますか？',
        answer: '施術後は以下の点にご注意ください。①激しい運動は避けてください ②十分な水分補給をしてください ③アルコールの摂取は控えめにしてください ④入浴は可能ですが、長時間の入浴は避けてください ⑤十分な睡眠をとってください。稀にだるさを感じることがありますが、1〜2日で改善します。'
      }
    ],
    payment: [
      {
        id: 'p1',
        question: '料金はどのくらいかかりますか？',
        answer: '施術内容により異なります。一般鍼灸治療5,000円、美容鍼灸8,000円、不妊治療サポート7,000円、自律神経調整6,000円が基本料金です。初回は初診料1,000円が別途かかります。詳細は料金表をご確認ください。'
      },
      {
        id: 'p2',
        question: '支払い方法を教えてください。',
        answer: '現金、クレジットカード（VISA、MasterCard、JCB）、電子マネー（PayPay、楽天Pay）がご利用いただけます。領収書も発行いたします。コース料金のお支払いは分割も可能ですので、ご相談ください。'
      },
      {
        id: 'p3',
        question: '健康保険は使えますか？',
        answer: '医師の同意書がある場合、一部の症状（神経痛、リウマチ、頚腕症候群、五十肩、腰痛症、頚椎捻挫後遺症）において健康保険が適用される場合があります。美容鍼灸は自費診療となります。詳しくはお問い合わせください。'
      },
      {
        id: 'p4',
        question: '回数券や割引制度はありますか？',
        answer: '5回券・10回券をご用意しており、回数に応じて割引があります。初回の方は初診料無料キャンペーンを実施しています。学生割引、高齢者割引もございますので、詳細はお問い合わせください。'
      }
    ],
    access: [
      {
        id: 'a1',
        question: '駐車場はありますか？',
        answer: '専用駐車場を2台分ご用意しております（無料）。満車の場合は近隣のコインパーキングをご利用ください。駐車場が満車の際は、お電話いただければ近くのパーキングをご案内いたします。'
      },
      {
        id: 'a2',
        question: '最寄り駅からの道のりを教えてください。',
        answer: 'JR〇〇駅南口から徒歩3分です。①南口を出て駅前大通りを直進（約200m）②〇〇銀行を右に曲がる③2つ目の角を左に曲がると当院です。迷われた場合はお電話いただければ、詳しくご案内いたします。'
      },
      {
        id: 'a3',
        question: 'バリアフリーに対応していますか？',
        answer: '当院はバリアフリー対応となっており、車椅子でのご来院も可能です。エレベーターもございます。車椅子でお越しの際は、事前にお知らせいただければ、よりスムーズにご案内できます。'
      },
      {
        id: 'a4',
        question: '待合室の設備について教えてください。',
        answer: '清潔で落ち着いた待合室をご用意しております。雑誌や健康に関する書籍、無料Wi-Fi、ウォーターサーバーを完備。完全予約制のため、長時間お待ちいただくことはほとんどありません。'
      }
    ]
  };

  const toggleFAQ = (faqId: string) => {
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50/30 to-rose-50/30">
      {/* ヒーローセクション */}
      <section className="py-16 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            よくある質問
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            患者様からよくいただくご質問をカテゴリー別にまとめました
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* サイドナビゲーション */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl p-6 shadow-lg sticky top-8 border border-pink-100">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">カテゴリー</h3>
                  <nav className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`w-full text-left p-3 rounded-lg transition-all flex items-center ${
                          activeCategory === category.id
                            ? 'bg-gradient-to-r from-pink-400 to-rose-400 text-white shadow-md'
                            : 'text-gray-600 hover:bg-pink-50'
                        }`}
                      >
                        <i className={`${category.icon} w-5 h-5 flex items-center justify-center mr-3`}></i>
                        <span className="text-sm">{category.name}</span>
                      </button>
                    ))}
                  </nav>
                </div>
              </div>

              {/* FAQ コンテンツ */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-xl shadow-lg border border-pink-100">
                  <div className="p-6 border-b border-pink-100">
                    <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                      <i className={`${categories.find(c => c.id === activeCategory)?.icon} w-6 h-6 flex items-center justify-center text-pink-600 mr-3`}></i>
                      {categories.find(c => c.id === activeCategory)?.name}
                    </h2>
                  </div>
                  
                  <div className="p-6">
                    <div className="space-y-4">
                      {faqData[activeCategory].map((faq) => (
                        <div key={faq.id} className="border border-pink-100 rounded-lg overflow-hidden">
                          <button
                            onClick={() => toggleFAQ(faq.id)}
                            className="w-full p-4 text-left bg-gradient-to-r from-pink-50/50 to-rose-50/50 hover:from-pink-50 hover:to-rose-50 transition-all flex items-center justify-between"
                          >
                            <span className="font-semibold text-gray-800 pr-4">{faq.question}</span>
                            <i className={`w-5 h-5 flex items-center justify-center text-pink-600 transition-transform ${
                              openFAQ === faq.id ? 'ri-subtract-line rotate-180' : 'ri-add-line'
                            }`}></i>
                          </button>
                          {openFAQ === faq.id && (
                            <div className="p-4 bg-white border-t border-pink-100">
                              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせCTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 text-center border border-pink-100">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-question-answer-line w-8 h-8 flex items-center justify-center text-pink-600 text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              他にもご質問はございませんか？
            </h3>
            <p className="text-gray-600 mb-8">
              掲載されていないご質問やお悩みがございましたら、<br />
              お気軽にお問い合わせください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:03-1234-5678" className="bg-gradient-to-r from-pink-400 to-rose-400 text-white px-8 py-3 rounded-full hover:from-pink-500 hover:to-rose-500 transition-all duration-300 shadow-md cursor-pointer whitespace-nowrap">
                <i className="ri-phone-line w-5 h-5 flex items-center justify-center mr-2"></i>
                お電話で相談
              </a>
              <Link href="/contact" className="border-2 border-pink-400 text-pink-500 px-8 py-3 rounded-full hover:bg-pink-50 transition-colors cursor-pointer whitespace-nowrap">
                <i className="ri-mail-line w-5 h-5 flex items-center justify-center mr-2"></i>
                メールで問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
