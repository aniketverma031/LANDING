'use client';

import { useState } from 'react';
import HeroSection from '@/components/hero-section';
import InfoSection from '@/components/info-section';
import FeesModal from '@/components/fees-modal';
import LeadForm from '@/components/lead-form';

export default function UniversityBPage() {
  const [isFeesModalOpen, setIsFeesModalOpen] = useState(false);

  const handleApplyClick = () => {
    document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        universityName="Horizon Global University"
        description="Where traditions meet innovation. A leading institution fostering global citizenship, cutting-edge research, and transformative education for over 30 years."
        heroImage="/placeholder.svg?key=4xetv"
        onApplyClick={handleApplyClick}
        onFeesClick={() => setIsFeesModalOpen(true)}
      />

      {/* Overview Section */}
      <section className="py-16 px-6 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-6">About Us</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Horizon Global University is a premier educational institution recognized for its commitment to academic excellence, research innovation, and social responsibility. Our diverse community of scholars and students represents over 80 countries.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We believe in holistic education that develops not just skilled professionals, but responsible global citizens. Our interdisciplinary approach, combined with industry partnerships and international collaborations, ensures our graduates are prepared for the challenges of a rapidly evolving world.
          </p>
        </div>
      </section>

      {/* Courses Section */}
      <InfoSection
        title="Courses Offered"
        items={[
          'B.A. in Liberal Arts & Sciences - Flexible curriculum combining humanities, sciences, and social studies',
          'B.B.A. in Business Administration - Comprehensive business education with global perspective',
          'M.A. in International Relations - Advanced study of global politics, diplomacy, and governance',
          'Ph.D. Programs - Research-focused doctoral programs across multiple disciplines',
          'Law Degree (LL.B) - Rigorous legal education preparing advocates and legal professionals',
          'Certificate & Diploma Programs - Professional and vocational training for career advancement'
        ]}
      />

      {/* Fees Section */}
      <section className="py-16 px-6 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-6">Fee Structure</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Horizon Global University offers affordable and flexible fee structures with multiple scholarship options to support talented students from all backgrounds.
          </p>
          <button
            onClick={() => setIsFeesModalOpen(true)}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition"
          >
            View Course-wise Fees
          </button>
        </div>
      </section>

      {/* Placements Section */}
      <InfoSection
        title="Placements & Careers"
        items={[
          '96% placement rate with diverse career opportunities across sectors',
          'Strong alumni network in leadership positions at top global organizations',
          'Partnerships with multinational corporations and government agencies',
          'Career guidance and mentorship from industry professionals',
          'Study abroad opportunities and international internship programs',
          'Entrepreneurship support with business incubation and venture funding'
        ]}
      />

      {/* Campus Facilities Section */}
      <section className="py-16 px-6 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-8">Campus Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Research Centers', desc: 'Advanced research facilities in humanities and sciences' },
              { title: 'Grand Library', desc: '5 million+ books, journals, and digital collections' },
              { title: 'Arts & Culture', desc: 'Theater, music halls, and galleries for cultural expression' },
              { title: 'Modern Hostels', desc: 'Comfortable accommodation with excellent community' },
              { title: 'Dining Facilities', desc: 'World cuisine and vegetarian options available' },
              { title: 'Wellness Center', desc: '24/7 medical, counseling, and fitness services'
              }
            ].map((facility, index) => (
              <div key={index} className="p-6 bg-card border border-border rounded-lg">
                <h3 className="font-semibold text-lg text-foreground mb-2">{facility.title}</h3>
                <p className="text-muted-foreground">{facility.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Form Section */}
      <section id="apply-form" className="py-20 px-6 bg-background">
        <LeadForm universityName="Horizon Global University" />
      </section>

      {/* Download Brochure CTA */}
      <section className="py-16 px-6 bg-primary text-primary-foreground text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Discover Our Community</h2>
          <p className="text-lg mb-6 opacity-90">Download our detailed prospectus to learn about our programs, campus life, scholarships, and admission process.</p>
          <a
            href="#"
            className="inline-block px-8 py-3 bg-primary-foreground text-primary rounded-lg font-semibold hover:opacity-90 transition"
          >
            Download Prospectus
          </a>
        </div>
      </section>

      {/* Modal */}
      <FeesModal isOpen={isFeesModalOpen} onClose={() => setIsFeesModalOpen(false)} />
    </main>
  );
}
