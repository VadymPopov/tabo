'use client';

import React, { useState } from 'react';

import { AlertCircle, MapPin, Send } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for contacting TABO! We will respond within 24-48 hours.');
  };

  const regionalPartners = [
    {
      name: 'York Region',
      href: 'https://sites.google.com/site/yorkregionbasketballofficials/home',
    },
    {
      name: 'Peel Region',
      href: 'https://www.peelrefs.ca',
    },
    {
      name: 'Durham Region',
      href: 'https://drbabo.ca',
    },
    {
      name: 'Hamilton',
      href: 'https://www.hamiltonboard.org/',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="px-6 pt-44 py-16 max-w-7xl mx-auto border-t border-gray-800">
        <h1 className="text-5xl font-bold mb-4 text-[rgb(255,108,0)]">
          Let&apos;s Talk
        </h1>
        <p className="text-xl text-gray-300">
          TABO values your thoughts, questions, and comments.
        </p>
      </section>

      {/* Main Contact Section - Info Left, Form Right */}
      <section className="px-6 py-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side - Information */}
        <div className="space-y-8">
          {/* Contact Methods */}

          {/* Important Notes */}
          <div className="space-y-6">
            {/* Service Area Note */}
            <div className="bg-transparent rounded-2xl p-6 border border-gray-800">
              <div className="flex items-start gap-3 mb-3">
                <MapPin className="w-5 h-5 text-[rgb(255,108,0)] flex-shrink-0 mt-1" />
                <h4 className="font-bold text-[rgb(255,108,0)]">
                  Service Area
                </h4>
              </div>
              <p className="text-gray-300 leading-relaxed">
                TABO is responsible for officiating games within the City of
                Toronto. If your game(s) / event(s) are to be played outside the
                City of Toronto, then please contact the appropriate
                officials&apos; association of either{' '}
                {regionalPartners.map(({ name, href }, idx) => (
                  <span key={idx}>
                    <Link href={href} className="text-[rgb(255,108,0)]">
                      {name}
                    </Link>
                    {idx < regionalPartners.length - 1 && ', '}
                    {idx === regionalPartners.length - 2 && ' or '}
                  </span>
                ))}
                , where the game(s) / event(s) are being held.
              </p>
            </div>

            {/* Membership Note */}
            <div className="bg-transparent rounded-2xl p-6 border border-gray-800">
              <h4 className="font-bold text-[rgb(255,108,0)] mb-3">
                Membership
              </h4>
              <p className="text-gray-300 leading-relaxed">
                If you are looking to become a member of TABO then please go to
                the{' '}
                <a
                  href="/membership"
                  className="text-[rgb(255,108,0)] underline hover:no-underline"
                >
                  &quot;Membership&quot; page
                </a>{' '}
                on this website and there you can complete and submit the
                required information.
              </p>
            </div>

            {/* Booking Note */}
            <div className="bg-transparent rounded-2xl p-6 border border-gray-800">
              <h4 className="font-bold text-[rgb(255,108,0)] mb-3">
                Booking/Requesting Officials
              </h4>
              <p className="text-gray-300 leading-relaxed">
                If you are looking to book/request officials then please go to
                the{' '}
                <a
                  href="/officials"
                  className="text-[rgb(255,108,0)] underline hover:no-underline"
                >
                  &quot;Booking Officials&quot; page
                </a>{' '}
                on this website and there you can complete and submit the
                required information.
              </p>
            </div>

            {/* Professional Communication Note */}
            <div className="bg-transparent rounded-2xl p-6 border border-gray-700">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
                <p className="text-gray-400 text-sm leading-relaxed">
                  Please note that the use of any abusive, obscene and/or
                  threatening language will not be responded to, at any time.
                  Thank you!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        {/* <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 h-fit"> */}
        <div className="bg-[rgb(19,19,21)] rounded-2xl p-8 border border-gray-700 h-fit">
          <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
          <p className="text-gray-400 mb-8">
            Fill out the form below and we&apos;ll get back to you soon.
          </p>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Name *</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-[rgb(29,29,32)] border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-[rgb(255,108,0)] transition"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Email *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-[rgb(29,29,32)] border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-[rgb(255,108,0)] transition"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Phone</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full bg-[rgb(29,29,32)] border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-[rgb(255,108,0)] transition"
                placeholder="(416) 555-0100"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Subject *
              </label>
              <select
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="w-full bg-[rgb(29,29,32)] border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-[rgb(255,108,0)] transition"
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="partnership">Partnership Opportunity</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Message *
              </label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={6}
                className="w-full bg-[rgb(29,29,32)] border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-[rgb(255,108,0)] transition resize-none"
                placeholder="Tell us how we can help..."
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-[rgb(255,108,0)] to-[#d57a1f] hover:from-[#d57a1f] hover:to-[rgb(255,108,0)] text-white py-4 px-8 rounded-xl font-semibold text-lg transition flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
