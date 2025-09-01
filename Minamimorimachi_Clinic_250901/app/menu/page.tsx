
'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TreatmentMenu from './TreatmentMenu';
import PriceTable from './PriceTable';
import TreatmentFlow from './TreatmentFlow';
import InsuranceInfo from './InsuranceInfo';

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">施術メニュー・料金</h1>
            <p className="text-xl opacity-90">症状に合わせた丁寧な施術で、健康な毎日をサポートします</p>
          </div>
        </div>

        <TreatmentMenu />
        <TreatmentFlow />
        <PriceTable />
        <InsuranceInfo />
      </main>
      
      <Footer />
    </div>
  );
}
