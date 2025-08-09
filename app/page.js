'use client'
import Servicios from '@/components/Servicios';
import Faq from '@/components/Faq';
import Baner from '@/components/Banner';
import ContactSection from '@/components/ContactSection';
import MultiCards from '@/components/MultiCards';
import CoverageMap from '@/components/CoverageMap';


export default function Home() {
 
  return (
    <>
      
      <Baner />
      <MultiCards  />
      <Servicios />
      <CoverageMap />
      {/* <Testimonials /> */}
      {/* <Hero /> */}
      {/* <LastProjects /> */}
      <ContactSection />
      {/* <ContentCardsBlog /> */}
      <Faq />
     
      

    </>
  );
}
