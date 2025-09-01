'use client';
import { useState } from 'react';
import BookingCalendar from './BookingCalendar';
import BookingForm from './BookingForm';
import BookingInfo from './BookingInfo';

export default function BookingPage() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleDateTimeChange = (date: string, time: string) => {
    setSelectedDate(date);
    setSelectedTime(time);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div 
        className="relative bg-gradient-to-br from-emerald-600 to-emerald-700 text-white py-20"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20acupuncture%20clinic%20online%20booking%20system%2C%20professional%20medical%20appointment%20scheduling%20interface%2C%20clean%20digital%20healthcare%20technology%2C%20patient-friendly%20online%20reservation%20platform%2C%20calming%20green%20and%20white%20color%20scheme%2C%20wellness%20and%20healthcare%20atmosphere&width=1200&height=400&seq=booking-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">オンライン予約システム</h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            24時間いつでもご予約可能。簡単3ステップでお気軽にご予約ください。
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          <div className="xl:col-span-3 space-y-8">
            <BookingCalendar />
            <BookingForm 
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              onDateTimeChange={handleDateTimeChange}
            />
          </div>
          
          <div className="xl:col-span-1">
            <div className="sticky top-8">
              <BookingInfo />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">お客様の声</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              オンライン予約をご利用いただいたお客様からの喜びの声をご紹介します
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "田中 美咲さん",
                age: "30代 女性",
                comment: "24時間予約できるのがとても便利！仕事が忙しくても空いた時間にサクッと予約できます。",
                rating: 5,
                image: "https://readdy.ai/api/search-image?query=Happy%20Japanese%20woman%20in%20her%2030s%20smiling%20naturally%2C%20professional%20headshot%20style%2C%20clean%20background%2C%20natural%20lighting%2C%20satisfied%20customer%20expression%2C%20wellness%20and%20healthcare%20theme&width=300&height=300&seq=customer1&orientation=squarish"
              },
              {
                name: "佐藤 健太郎さん",
                age: "40代 男性", 
                comment: "予約の流れが分かりやすく、スムーズに予約できました。電話が苦手な私には助かります。",
                rating: 5,
                image: "https://readdy.ai/api/search-image?query=Professional%20Japanese%20businessman%20in%20his%2040s%20with%20gentle%20smile%2C%20clean%20corporate%20headshot%2C%20natural%20expression%2C%20satisfied%20client%20look%2C%20healthcare%20customer%20testimonial%20style&width=300&height=300&seq=customer2&orientation=squarish"
              },
              {
                name: "山田 良子さん",
                age: "50代 女性",
                comment: "症状や希望施術を詳しく入力できるので、当日スムーズに施術を受けられて助かりました。",
                rating: 5,
                image: "https://readdy.ai/api/search-image?query=Elegant%20Japanese%20woman%20in%20her%2050s%20with%20warm%20smile%2C%20professional%20portrait%20style%2C%20natural%20makeup%2C%20confident%20and%20satisfied%20expression%2C%20healthcare%20testimonial%20photo&width=300&height=300&seq=customer3&orientation=squarish"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover object-top mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.age}</p>
                    <div className="flex items-center mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <i key={i} className="ri-star-fill w-4 h-4 flex items-center justify-center text-yellow-500"></i>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed italic">
                  "{testimonial.comment}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-emerald-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">今すぐご予約ください</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            お一人お一人に合わせた丁寧な施術で、あなたのお悩みを解決いたします。<br />
            24時間オンライン予約受付中！
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
            >
              <i className="ri-calendar-check-line w-5 h-5 inline-flex items-center justify-center mr-2"></i>
              今すぐ予約する
            </button>
            <a
              href="tel:03-1234-5678"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-emerald-600 transition-colors text-center cursor-pointer whitespace-nowrap"
            >
              <i className="ri-phone-line w-5 h-5 inline-flex items-center justify-center mr-2"></i>
              お電話でのご予約
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}