
'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
    contactMethod: 'phone'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const subjects = [
    '初回相談・カウンセリング希望',
    '施術内容について',
    '料金について', 
    '予約の変更・キャンセル',
    '美容鍼について',
    '不妊治療サポートについて',
    'その他のご質問'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // フォーム送信処理のシミュレーション
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setSubmitted(true);
    setIsSubmitting(false);
  };

  if (submitted) {
    return (
      <section className="py-16 bg-gradient-to-br from-pink-50/30 to-rose-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center border border-pink-100">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-check-line w-10 h-10 flex items-center justify-center text-pink-600 text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">送信完了いたしました</h3>
              <p className="text-gray-600 mb-8">
                お問い合わせいただき、ありがとうございます。<br />
                24時間以内にご返信いたします。
              </p>
              <button 
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    subject: '',
                    message: '',
                    contactMethod: 'phone'
                  });
                }}
                className="bg-gradient-to-r from-pink-400 to-rose-400 text-white px-8 py-3 rounded-full hover:from-pink-500 hover:to-rose-500 transition-all duration-300 shadow-md cursor-pointer whitespace-nowrap"
              >
                新しいお問い合わせ
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-br from-pink-50/30 to-rose-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">お問い合わせフォーム</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto mb-6"></div>
          <p className="text-gray-600">お気軽にご相談・お問い合わせください</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-pink-100">
            <form id="contact-form" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    お名前 <span className="text-pink-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm"
                    placeholder="山田花子"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    電話番号 <span className="text-pink-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm"
                    placeholder="03-1234-5678"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  メールアドレス <span className="text-pink-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm"
                  placeholder="example@email.com"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  お問い合わせ内容 <span className="text-pink-500">*</span>
                </label>
                <select
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm pr-8"
                >
                  <option value="">選択してください</option>
                  {subjects.map((subject, index) => (
                    <option key={index} value={subject}>{subject}</option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  ご希望の連絡方法
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="phone"
                      checked={formData.contactMethod === 'phone'}
                      onChange={handleChange}
                      className="mr-2 text-pink-500 focus:ring-pink-400"
                    />
                    <span className="text-sm">お電話</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="email"
                      checked={formData.contactMethod === 'email'}
                      onChange={handleChange}
                      className="mr-2 text-pink-500 focus:ring-pink-400"
                    />
                    <span className="text-sm">メール</span>
                  </label>
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  詳細・ご質問 <span className="text-pink-500">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  maxLength={500}
                  className="w-full p-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm resize-none"
                  placeholder="お悩みの症状やご質問など、詳しくお聞かせください（500文字以内）"
                ></textarea>
                <p className="text-xs text-gray-500 mt-1">{formData.message.length}/500文字</p>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting || formData.message.length > 500}
                  className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg cursor-pointer whitespace-nowrap ${
                    isSubmitting || formData.message.length > 500
                      ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-pink-400 to-rose-400 text-white hover:from-pink-500 hover:to-rose-500'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <i className="ri-loader-4-line w-5 h-5 flex items-center justify-center mr-2 animate-spin"></i>
                      送信中...
                    </>
                  ) : (
                    <>
                      <i className="ri-send-plane-line w-5 h-5 flex items-center justify-center mr-2"></i>
                      送信する
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg text-center border border-pink-100">
            <h3 className="text-xl font-bold text-gray-800 mb-4">お急ぎの方はお電話でもお気軽に</h3>
            <p className="text-gray-600 mb-6">
              すぐに相談したい方やご質問がある方は、直接お電話ください
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:03-1234-5678" className="bg-gradient-to-r from-pink-400 to-rose-400 text-white px-8 py-3 rounded-full hover:from-pink-500 hover:to-rose-500 transition-all duration-300 shadow-md cursor-pointer whitespace-nowrap">
                <i className="ri-phone-line w-5 h-5 flex items-center justify-center mr-2"></i>
                03-1234-5678
              </a>
              <div className="border-2 border-pink-400 text-pink-500 px-8 py-3 rounded-full whitespace-nowrap">
                平日 9:00-20:00 / 土日祝 9:00-17:00
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
