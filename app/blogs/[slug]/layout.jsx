import ContactSection from '@/components/ContactSection';
import React from 'react';

export default function BlogLayout({ children }) {
  return (
    <div>
   
      <main className="container mx-auto px-4 py-8">
          {children}
          <ContactSection />
        </main>
      
    </div>
  );
}