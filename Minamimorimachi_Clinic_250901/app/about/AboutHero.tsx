
'use client';

export default function AboutHero() {
  return (
    <section 
      className="relative h-96 flex items-center justify-center bg-gradient-to-br from-pink-50 to-rose-50"
      style={{
        backgroundImage: `linear-gradient(rgba(244, 114, 182, 0.1), rgba(236, 72, 153, 0.1)), url('https://readdy.ai/api/search-image?query=Elegant%20feminine%20acupuncture%20clinic%20interior%20with%20soft%20pink%20decor%2C%20luxurious%20white%20walls%20with%20rose%20gold%20accents%2C%20delicate%20floral%20arrangements%2C%20warm%20ambient%20lighting%2C%20sophisticated%20medical%20equipment%2C%20serene%20healing%20atmosphere%20with%20Japanese%20minimalist%20design%20elements&width=1200&height=400&seq=about-hero-feminine&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          院について
        </h1>
        <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto mb-6"></div>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          お一人お一人に向き合い、真心を込めた施術で<br />
          皆様の美と健康をサポートいたします
        </p>
      </div>
    </section>
  );
}
