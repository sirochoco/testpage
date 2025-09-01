
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div 
        className="relative bg-gradient-to-br from-emerald-600 to-emerald-700 text-white py-20"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20acupuncture%20clinic%20reception%20desk%20with%20warm%20lighting%2C%20professional%20medical%20environment%2C%20clean%20white%20and%20green%20interior%20design%2C%20zen-like%20atmosphere%2C%20plants%20and%20natural%20elements%2C%20patient%20consultation%20area%20with%20comfortable%20seating%2C%20traditional%20meets%20modern%20aesthetic&width=1200&height=400&seq=contact-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">お問い合わせ・ご予約</h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            お気軽にお問い合わせください。お一人お一人に合わせた丁寧な施術でお悩みを解決いたします。
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">ご予約・お問い合わせフォーム</h2>
              <p className="text-gray-600 leading-relaxed">
                ご予約やご不明な点がございましたら、お気軽にお問い合わせください。
                2営業日以内にご連絡いたします。
              </p>
            </div>
            <ContactForm />
          </div>
          
          <div className="lg:col-span-1">
            <ContactInfo />
          </div>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">よくあるご質問</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              患者様からよくいただくご質問をまとめました。
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: '初回はどのくらい時間がかかりますか？',
                answer: '初回は問診・カウンセリング・施術を含めて約90分程度お時間をいただいております。2回目以降は約60分程度です。'
              },
              {
                question: '駐車場はありますか？',
                answer: '専用駐車場を2台分ご用意しております。満車の場合は近隣のコインパーキングをご利用ください。'
              },
              {
                question: '保険は使えますか？',
                answer: '症状によっては健康保険が適用される場合があります。詳しくはお電話でお問い合わせください。'
              },
              {
                question: 'どんな服装で行けばよいですか？',
                answer: '着替えやすい服装でお越しください。施術着もご用意しておりますのでお気軽にお申し付けください。'
              },
              {
                question: '予約のキャンセルはいつまでできますか？',
                answer: '前日の18時までにご連絡ください。当日キャンセルの場合はキャンセル料が発生する場合があります。'
              },
              {
                question: '妊娠中でも施術を受けられますか？',
                answer: '安定期に入ってからであれば施術可能です。事前に産婦人科医の許可を得てからご予約ください。'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-800 mb-3 flex items-start">
                  <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
                    Q
                  </span>
                  {faq.question}
                </h3>
                <div className="ml-9">
                  <p className="text-gray-600 leading-relaxed">
                    <span className="bg-gray-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mb-2 inline-flex">
                      A
                    </span>
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
