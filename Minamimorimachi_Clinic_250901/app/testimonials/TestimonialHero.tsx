
'use client';

export default function TestimonialHero() {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 to-teal-50 py-20">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=peaceful%20acupuncture%20clinic%20interior%20with%20warm%20lighting%2C%20comfortable%20treatment%20rooms%2C%20patients%20relaxing%20and%20smiling%2C%20traditional%20Japanese%20healing%20atmosphere%20with%20modern%20comfort%2C%20soft%20natural%20colors%2C%20serene%20environment%20showcasing%20patient%20satisfaction%20and%20wellness&width=1200&height=800&seq=testimonial-hero&orientation=landscape')`
        }}
      ></div>
      
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          お客様の声
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          当院で施術を受けられた患者様から寄せられた<br />
          リアルな体験談をご紹介いたします
        </p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-user-smile-line text-2xl text-emerald-600"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">満足度</h3>
            <p className="text-3xl font-bold text-emerald-600">98%</p>
            <p className="text-sm text-gray-600">患者様満足度</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-repeat-line text-2xl text-emerald-600"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">リピート率</h3>
            <p className="text-3xl font-bold text-emerald-600">95%</p>
            <p className="text-sm text-gray-600">継続来院率</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-heart-line text-2xl text-emerald-600"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">推奨度</h3>
            <p className="text-3xl font-bold text-emerald-600">96%</p>
            <p className="text-sm text-gray-600">友人推奨率</p>
          </div>
        </div>
      </div>
    </section>
  );
}
