
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AccessMap from './AccessMap';
import AccessInfo from './AccessInfo';
import BusinessHours from './BusinessHours';
import AccessGuide from './AccessGuide';

export default function AccessPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">アクセス</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              癒しの鍼灸院へのアクセス方法や詳細情報をご案内いたします。<br />
              お気軽にお越しください。
            </p>
          </div>
        </div>

        <AccessMap />
        <AccessInfo />
        <AccessGuide />
        <BusinessHours />
      </main>

      <Footer />
    </div>
  );
}
