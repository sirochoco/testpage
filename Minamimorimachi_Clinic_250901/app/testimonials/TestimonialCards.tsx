
'use client';
import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: "田中 美穂",
    age: "30代",
    gender: "女性",
    symptoms: ["肩こり", "頭痛"],
    rating: 5,
    title: "長年の肩こりが改善されました",
    content: "デスクワークによる慢性的な肩こりと頭痛に悩まされていましたが、こちらの院で施術を受けて3回目から明らかに改善を実感できました。院長先生の丁寧な説明と的確な施術のおかげで、今では快適に過ごせています。",
    image: "https://readdy.ai/api/search-image?query=professional%20Japanese%20woman%20in%20business%20attire%20smiling%20confidently%20at%20office%2C%20healthy%20posture%2C%20no%20shoulder%20tension%2C%20bright%20natural%20lighting%2C%20modern%20workplace%20background%2C%20expressing%20relief%20and%20satisfaction&width=300&height=300&seq=testimonial-1&orientation=squarish",
    visitCount: "8回",
    duration: "2ヶ月"
  },
  {
    id: 2,
    name: "佐藤 健一",
    age: "40代",
    gender: "男性",
    symptoms: ["腰痛", "膝痛"],
    rating: 5,
    title: "スポーツ復帰ができました",
    content: "趣味のテニスで腰と膝を痛めてしまい、整形外科に通っても改善しませんでした。こちらの鍼灸治療を受けて、痛みが和らぎ、ついにテニスに復帰することができました。本当に感謝しています。",
    image: "https://readdy.ai/api/search-image?query=middle-aged%20Japanese%20man%20in%20tennis%20attire%20holding%20tennis%20racket%2C%20healthy%20and%20active%20appearance%2C%20outdoor%20tennis%20court%20background%2C%20expressing%20joy%20and%20vitality%2C%20natural%20daylight&width=300&height=300&seq=testimonial-2&orientation=squarish",
    visitCount: "12回",
    duration: "3ヶ月"
  },
  {
    id: 3,
    name: "山田 雅子",
    age: "50代",
    gender: "女性",
    symptoms: ["不眠症", "自律神経失調"],
    rating: 5,
    title: "ぐっすり眠れるようになりました",
    content: "更年期による不眠と自律神経の乱れで辛い日々を送っていましたが、鍼灸治療を始めてから徐々に改善し、今では毎晩ぐっすり眠れています。心身ともに楽になり、生活の質が向上しました。",
    image: "https://readdy.ai/api/search-image?query=elegant%20Japanese%20woman%20in%20her%2050s%20looking%20peaceful%20and%20rested%2C%20serene%20expression%2C%20comfortable%20home%20environment%2C%20soft%20morning%20light%2C%20expressing%20tranquility%20and%20wellness&width=300&height=300&seq=testimonial-3&orientation=squarish",
    visitCount: "10回",
    duration: "2.5ヶ月"
  },
  {
    id: 4,
    name: "鈴木 直人",
    age: "60代",
    gender: "男性",
    symptoms: ["五十肩", "関節痛"],
    rating: 5,
    title: "腕が上がるようになりました",
    content: "五十肩で腕が全く上がらず、日常生活に支障をきたしていました。こちらで治療を受けて、少しずつ可動域が広がり、今では普通に腕を上げることができます。先生の技術の高さに驚いています。",
    image: "https://readdy.ai/api/search-image?query=senior%20Japanese%20gentleman%20demonstrating%20full%20arm%20mobility%2C%20raising%20arms%20with%20confidence%2C%20traditional%20Japanese%20garden%20background%2C%20expressing%20relief%20and%20gratitude%2C%20warm%20natural%20lighting&width=300&height=300&seq=testimonial-4&orientation=squarish",
    visitCount: "15回",
    duration: "4ヶ月"
  },
  {
    id: 5,
    name: "高橋 理恵",
    age: "20代",
    gender: "女性",
    symptoms: ["美容鍼灸", "肌荒れ"],
    rating: 5,
    title: "お肌の調子が良くなりました",
    content: "美容鍼灸に興味があり、お試しで受けてみました。施術後すぐに肌のハリを感じ、継続して通っています。化粧のりも良くなり、友人からも肌が綺麗になったと言われます。",
    image: "https://readdy.ai/api/search-image?query=young%20Japanese%20woman%20with%20glowing%20healthy%20skin%2C%20natural%20makeup%2C%20bright%20smile%2C%20beauty%20clinic%20interior%20background%2C%20expressing%20confidence%20and%20satisfaction%20with%20skincare%20results&width=300&height=300&seq=testimonial-5&orientation=squarish",
    visitCount: "6回",
    duration: "2ヶ月"
  },
  {
    id: 6,
    name: "伊藤 桜子",
    age: "30代",
    gender: "女性",
    symptoms: ["妊活サポート", "冷え性"],
    rating: 5,
    title: "妊娠することができました",
    content: "不妊治療と併行して鍼灸治療を受けました。体が温まり、生理周期も整い、半年後に妊娠することができました。精神的にも支えていただき、本当にありがとうございました。",
    image: "https://readdy.ai/api/search-image?query=young%20Japanese%20expecting%20mother%20touching%20her%20belly%20gently%2C%20peaceful%20and%20happy%20expression%2C%20soft%20home%20environment%20with%20natural%20lighting%2C%20expressing%20gratitude%20and%20maternal%20joy&width=300&height=300&seq=testimonial-6&orientation=squarish",
    visitCount: "20回",
    duration: "6ヶ月"
  }
];

const categories = ['全て', '肩こり・腰痛', '美容鍼灸', '不妊治療', '自律神経', 'スポーツ'];

export default function TestimonialCards() {
  const [selectedCategory, setSelectedCategory] = useState('全て');
  const [showMore, setShowMore] = useState(false);

  const filteredTestimonials = selectedCategory === '全て' 
    ? testimonials 
    : testimonials.filter(testimonial => {
        if (selectedCategory === '肩こり・腰痛') return testimonial.symptoms.some(s => ['肩こり', '腰痛', '膝痛', '五十肩', '関節痛'].includes(s));
        if (selectedCategory === '美容鍼灸') return testimonial.symptoms.includes('美容鍼灸');
        if (selectedCategory === '不妊治療') return testimonial.symptoms.includes('妊活サポート');
        if (selectedCategory === '自律神経') return testimonial.symptoms.some(s => ['不眠症', '自律神経失調'].includes(s));
        if (selectedCategory === 'スポーツ') return testimonial.content.includes('スポーツ') || testimonial.content.includes('テニス');
        return true;
      });

  const displayedTestimonials = showMore ? filteredTestimonials : filteredTestimonials.slice(0, 6);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">患者様の体験談</h2>
          <p className="text-lg text-gray-600">症状別にご覧いただけます</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === category
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-emerald-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover object-top mr-4"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.age} {testimonial.gender}</p>
                    <div className="flex text-yellow-400 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <i key={i} className="ri-star-fill text-sm"></i>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {testimonial.symptoms.map((symptom, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full"
                      >
                        {symptom}
                      </span>
                    ))}
                  </div>
                </div>

                <h4 className="font-semibold text-gray-800 mb-3">{testimonial.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {testimonial.content}
                </p>

                <div className="flex justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                  <span>通院回数: {testimonial.visitCount}</span>
                  <span>期間: {testimonial.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredTestimonials.length > 6 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowMore(!showMore)}
              className="bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 transition-colors cursor-pointer whitespace-nowrap"
            >
              {showMore ? '表示を減らす' : 'もっと見る'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
