'use client';

import { useState } from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';

const STATES = ['Select State', 'Andhra Pradesh', 'Maharashtra', 'Delhi', 'Karnataka', 'Tamil Nadu', 'Uttar Pradesh', 'West Bengal', 'Gujarat', 'Rajasthan', 'Punjab'];

const COURSES = ['Select Course', 'B.Tech', 'MBA', 'BBA', 'M.Tech', 'B.Sc', 'M.Sc'];

const INTAKE_YEARS = ['Select Year', '2025', '2026', '2027', '2028'];

export interface LeadFormProps {
  universityName?: string;
}

export default function LeadForm({ universityName = 'Our University' }: LeadFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    state: '',
    course: '',
    intake: '',
    consent: false,
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const validateForm = () => {
    if (!formData.fullName.trim()) {
      setMessage('Full Name is required');
      return false;
    }
    if (!formData.email.includes('@')) {
      setMessage('Valid email is required');
      return false;
    }
    if (!/^[0-9]{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      setMessage('Phone number must be 10 digits');
      return false;
    }
    if (formData.state === 'Select State') {
      setMessage('Please select a state');
      return false;
    }
    if (formData.course === 'Select Course') {
      setMessage('Please select a course');
      return false;
    }
    if (formData.intake === 'Select Year') {
      setMessage('Please select intake year');
      return false;
    }
    if (!formData.consent) {
      setMessage('Please accept the consent checkbox');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus('error');
      return;
    }

    setStatus('loading');
    try {
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Thank you! Your application has been submitted successfully.');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          state: '',
          course: '',
          intake: '',
          consent: false,
        });
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Failed to submit form. Please try again.');
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-card rounded-lg shadow-lg p-8 border border-border">
        <h2 className="text-3xl font-bold text-foreground mb-2">Apply to {universityName}</h2>
        <p className="text-muted-foreground mb-6">Fill out the form below to start your application</p>

        {message && (
          <div className={`mb-6 p-4 rounded-lg flex gap-3 ${
            status === 'success'
              ? 'bg-green-50 border border-green-200'
              : status === 'error'
              ? 'bg-red-50 border border-red-200'
              : 'bg-blue-50 border border-blue-200'
          }`}>
            {status === 'success' ? (
              <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
            ) : (
              <AlertCircle className="text-red-600 flex-shrink-0" size={20} />
            )}
            <span className={status === 'success' ? 'text-green-800' : 'text-red-800'}>
              {message}
            </span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
              Phone Number (10 digits) *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="98765 43210"
              maxLength={10}
              className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="state" className="block text-sm font-medium text-foreground mb-2">
                State *
              </label>
              <select
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground bg-card"
                required
              >
                {STATES.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="course" className="block text-sm font-medium text-foreground mb-2">
                Course Interested *
              </label>
              <select
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground bg-card"
                required
              >
                {COURSES.map(course => (
                  <option key={course} value={course}>{course}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="intake" className="block text-sm font-medium text-foreground mb-2">
              Intake Year *
            </label>
            <select
              id="intake"
              name="intake"
              value={formData.intake}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground bg-card"
              required
            >
              {INTAKE_YEARS.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="mt-1"
              required
            />
            <label htmlFor="consent" className="text-sm text-muted-foreground">
              I consent to receive communication about admissions and programs
            </label>
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-50"
          >
            {status === 'loading' ? 'Submitting...' : 'Submit Application'}
          </button>
        </form>
      </div>
    </div>
  );
}
