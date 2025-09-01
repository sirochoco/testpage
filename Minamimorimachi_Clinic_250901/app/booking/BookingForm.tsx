
'use client';
import { useState } from 'react';

export default function BookingForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    gender: '',
    age: '',
    treatment: '',
    symptoms: [],
    firstVisit: '',
    requests: ''
  });

  const treatments = [
    { id: 'general', name: '一般鍼灸治療', price: '5,000円', description: '肩こり・腰痛・疲労回復など' },
    { id: 'beauty', name: '美容鍼灸', price: '8,000円', description: 'リフトアップ・美肌・アンチエイジング' },
    { id: 'fertility', name: '不妊治療サポート', price: '7,000円', description: '妊活・体質改善・ホルモンバランス調整' },
    { id: 'autonomic', name: '自律神経調整', price: '6,000円', description: '不眠・ストレス・メンタルケア' }
  ];

  const symptomsList = [
    '肩こり', '腰痛', '頭痛', '眼精疲労', '不眠', 'ストレス',
    'しわ・たるみ', '肌荒れ', 'むくみ', '冷え性', '生理不順',
    '不妊・妊活', '更年期障害', 'その他'
  ];

  const handleSymptomChange = (symptom: string) => {
    const newSymptoms = formData.symptoms.includes(symptom)
      ? formData.symptoms.filter(s => s !== symptom)
      : [...formData.symptoms, symptom];
    setFormData({ ...formData, symptoms: newSymptoms });
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 予約処理をここに実装
    alert('予約が完了しました！確認メールをお送りいたします。');
  };

  return (
    <section className="py-16 bg-gradient-to-br from-pink-50/30 to-rose-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">予約フォーム</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto mb-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* ステップインジケーター */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-4">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                    step <= currentStep 
                      ? 'bg-gradient-to-r from-pink-400 to-rose-400 text-white' 
                      : 'bg-gray-200 text-gray-400'
                  }`}>
                    {step}
                  </div>
                  {step < 3 && (
                    <div className={`w-16 h-1 mx-2 transition-all ${
                      step < currentStep ? 'bg-gradient-to-r from-pink-400 to-rose-400' : 'bg-gray-200'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-pink-100">
            <form onSubmit={handleSubmit}>
              {/* ステップ1: 基本情報 */}
              {currentStep === 1 && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-8">基本情報を入力してください</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        お名前 <span className="text-pink-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full p-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm"
                        placeholder="03-1234-5678"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        メールアドレス <span className="text-pink-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm"
                        placeholder="example@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">性別</label>
                      <select
                        value={formData.gender}
                        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                        className="w-full p-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm pr-8"
                      >
                        <option value="">選択してください</option>
                        <option value="female">女性</option>
                        <option value="male">男性</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">年代</label>
                      <select
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                        className="w-full p-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm pr-8"
                      >
                        <option value="">選択してください</option>
                        <option value="20s">20代</option>
                        <option value="30s">30代</option>
                        <option value="40s">40代</option>
                        <option value="50s">50代</option>
                        <option value="60s">60代以上</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">初回来院</label>
                      <div className="flex gap-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="firstVisit"
                            value="yes"
                            onChange={(e) => setFormData({ ...formData, firstVisit: e.target.value })}
                            className="mr-2 text-pink-500 focus:ring-pink-400"
                          />
                          <span className="text-sm">はい</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="firstVisit"
                            value="no"
                            onChange={(e) => setFormData({ ...formData, firstVisit: e.target.value })}
                            className="mr-2 text-pink-500 focus:ring-pink-400"
                          />
                          <span className="text-sm">いいえ</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ステップ2: 施術内容・症状 */}
              {currentStep === 2 && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-8">施術内容・症状を選択してください</h3>
                  
                  <div className="mb-8">
                    <label className="block text-lg font-semibold text-gray-700 mb-4">
                      ご希望の施術 <span className="text-pink-500">*</span>
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {treatments.map((treatment) => (
                        <label key={treatment.id} className="cursor-pointer">
                          <input
                            type="radio"
                            name="treatment"
                            value={treatment.id}
                            onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                            className="sr-only"
                          />
                          <div className={`p-4 border-2 rounded-lg transition-all ${
                            formData.treatment === treatment.id 
                              ? 'border-pink-400 bg-pink-50' 
                              : 'border-pink-200 hover:border-pink-300'
                          }`}>
                            <h4 className="font-bold text-gray-800 mb-1">{treatment.name}</h4>
                            <p className="text-pink-600 font-semibold mb-2">{treatment.price}</p>
                            <p className="text-sm text-gray-600">{treatment.description}</p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-lg font-semibold text-gray-700 mb-4">
                      お悩みの症状（複数選択可）
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {symptomsList.map((symptom) => (
                        <label key={symptom} className="flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.symptoms.includes(symptom)}
                            onChange={() => handleSymptomChange(symptom)}
                            className="mr-2 text-pink-500 focus:ring-pink-400 rounded"
                          />
                          <span className="text-sm">{symptom}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* ステップ3: 確認・送信 */}
              {currentStep === 3 && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-8">予約内容を確認してください</h3>
                  
                  <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 mb-8 border border-pink-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-gray-800 mb-3">基本情報</h4>
                        <div className="space-y-2 text-sm">
                          <div><span className="text-gray-600">お名前:</span> <span className="font-semibold">{formData.name}</span></div>
                          <div><span className="text-gray-600">電話番号:</span> <span className="font-semibold">{formData.phone}</span></div>
                          <div><span className="text-gray-600">メール:</span> <span className="font-semibold">{formData.email}</span></div>
                          <div><span className="text-gray-600">性別:</span> <span className="font-semibold">{formData.gender === 'female' ? '女性' : formData.gender === 'male' ? '男性' : '未選択'}</span></div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-3">施術内容</h4>
                        <div className="space-y-2 text-sm">
                          <div><span className="text-gray-600">施術:</span> <span className="font-semibold">{treatments.find(t => t.id === formData.treatment)?.name || '未選択'}</span></div>
                          <div><span className="text-gray-600">症状:</span> <span className="font-semibold">{formData.symptoms.join(', ') || '未選択'}</span></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">ご要望・ご質問（任意）</label>
                    <textarea
                      value={formData.requests}
                      onChange={(e) => setFormData({ ...formData, requests: e.target.value })}
                      rows={4}
                      maxLength={500}
                      className="w-full p-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm resize-none"
                      placeholder="何かご要望やご質問がございましたらご記入ください（500文字以内）"
                    ></textarea>
                    <p className="text-xs text-gray-500 mt-1">{formData.requests.length}/500文字</p>
                  </div>
                </div>
              )}

              {/* ボタン */}
              <div className="flex justify-between mt-8">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-3 border-2 border-pink-400 text-pink-500 rounded-full hover:bg-pink-50 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <i className="ri-arrow-left-line w-5 h-5 flex items-center justify-center mr-2"></i>
                    戻る
                  </button>
                )}
                
                <div className="ml-auto">
                  {currentStep < 3 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="bg-gradient-to-r from-pink-400 to-rose-400 text-white px-8 py-3 rounded-full hover:from-pink-500 hover:to-rose-500 transition-all duration-300 shadow-md cursor-pointer whitespace-nowrap"
                    >
                      次へ進む
                      <i className="ri-arrow-right-line w-5 h-5 flex items-center justify-center ml-2"></i>
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-pink-400 to-rose-400 text-white px-8 py-3 rounded-full hover:from-pink-500 hover:to-rose-500 transition-all duration-300 shadow-md cursor-pointer whitespace-nowrap"
                    >
                      <i className="ri-check-line w-5 h-5 flex items-center justify-center mr-2"></i>
                      予約を確定する
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
