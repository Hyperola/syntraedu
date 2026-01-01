import Header from '../components/Layout/Header'
import HeroSection from '../components/Sections/HeroSection'
import ProblemSection from '../components/Sections/ProblemSection'
import SolutionSection from '../components/Sections/SolutionSection'
import HowItWorksSection from '../components/Sections/HowItWorksSection'
import BenefitsSection from '../components/Sections/BenefitsSection'
import OwnershipSection from '../components/Sections/OwnershipSection'
import TrustSection from '../components/Sections/TrustSection'
import ContactSection from '../components/Sections/ContactSection'
import Footer from '../components/Layout/Footer'

export default function Home() {
  return (
    <div style={{minHeight: '100vh', overflowX: 'hidden'}}>
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <BenefitsSection />
      <OwnershipSection />
      <TrustSection />
      <ContactSection />
      <Footer />
    </div>
  )
}