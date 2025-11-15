'use client';

import { useState } from 'react';
import HeroSection from '@/components/hero-section';
import InfoSection from '@/components/info-section';
import FeesModal from '@/components/fees-modal';
import LeadForm from '@/components/lead-form';

export default function UniversityAPage() {
  const [isFeesModalOpen, setIsFeesModalOpen] = useState(false);

  const handleApplyClick = () => {
    document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        universityName="Elite Institute of Technology"
        description="Leading the future of education with world-class faculty, cutting-edge research facilities, and a legacy of excellence spanning 25 years."
        heroImage="/placeholder.svg?key=e0kj0"
        onApplyClick={handleApplyClick}
        onFeesClick={() => setIsFeesModalOpen(true)}
      />

      {/* Overview Section */}
      <section className="py-16 px-6 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-6">About Us</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Elite Institute of Technology stands as a beacon of academic excellence and innovation. Our institution is committed to nurturing tomorrow's leaders through rigorous academics, experiential learning, and industry partnerships.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            With state-of-the-art facilities, renowned faculty members, and a diverse student body from across the globe, we provide an enriching educational environment that fosters intellectual growth and personal development.
          </p>
        </div>
      </section>

      {/* Courses Section */}
      <InfoSection
        title="Courses Offered"
        items={[
          'B.Tech in Computer Science & Engineering - 4 years program with specializations in AI, Cloud Computing, and Cybersecurity',
          'B.Tech in Mechanical Engineering - Comprehensive program covering design, manufacturing, and thermal systems',
          'MBA - 2-year postgraduate program with focus on management, entrepreneurship, and business analytics',
          'M.Tech in AI & Machine Learning - Advanced research-oriented program for technology professionals',
          'B.Sc in Data Science - 3-year undergraduate program combining statistics, programming, and domain expertise',
          'Executive Certification Programs - Industry-ready short-term courses in emerging technologies'
        ]}
      />

      {/* Fees Section */}
      <section className="py-16 px-6 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-6">Fee Structure</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Our fee structure is transparent and competitive. We offer various scholarship opportunities for deserving and meritorious students.
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
          '98% placement rate with average package of ₹15+ lakhs',
          'Partnerships with Fortune 500 companies and leading startups',
          'Dedicated career development center with personalized guidance',
          'Alumni network of 50,000+ professionals across global tech companies',
          'Internship opportunities during academics in top-tier organizations',
          'Entrepreneurship support with incubation center and funding opportunities'
        ]}
      />

      {/* Campus Facilities Section */}
      <section className="py-16 px-6 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-8">Campus Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: '50+ Laboratories', desc: 'State-of-the-art research and learning labs' },
              { title: 'Central Library', desc: '2,50,000+ books and digital resources' },
              { title: 'Sports Complex', desc: 'Olympic-size swimming pool, gymnasium, sports fields' },
              { title: 'Residential Campus', desc: 'Comfortable hostels with modern amenities' },
              { title: 'Food Court', desc: 'Diverse dining options with healthy meals' },
              { title: 'Medical Center', desc: '24/7 health services and counseling'
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
        <LeadForm universityName="Elite Institute of Technology" />
      </section>

      {/* Download Brochure CTA */}
      <section className="py-16 px-6 bg-primary text-primary-foreground text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Want to learn more?</h2>
          <p className="text-lg mb-6 opacity-90">Download our comprehensive brochure for detailed information about programs, facilities, and admissions.</p>
          <a
            href="#"
            className="inline-block px-8 py-3 bg-primary-foreground text-primary rounded-lg font-semibold hover:opacity-90 transition"
          >
            Download Brochure
          </a>
        </div>
      </section>

      {/* Modal */}
      <FeesModal isOpen={isFeesModalOpen} onClose={() => setIsFeesModalOpen(false)} />
    </main>
  );
}
